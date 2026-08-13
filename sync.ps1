<#
.SYNOPSIS
    Automates Git pull, search index extraction, graphify knowledge updates, tracker updates, 
    auto-commit message generation, push, and bot stamp sync.

.DESCRIPTION
    1. Resets any local modifications to assets/js/last-commit.json (bot-managed file).
    2. Pulls with --autostash so your local work is preserved.
    3. Runs search index extractor (scripts/extract_index.py) if Python is present.
    4. Runs graphify update to keep codebase graph fresh.
    5. Auto-updates dev-logs/PortfolioWebsite_TRACKER.md with latest timestamp.
    6. Auto-generates a smart commit message if none is provided.
    7. Stages, commits, pushes, and auto-syncs the GitHub Actions bot's stamp commit.

.EXAMPLE
    .\sync.ps1                               # Fully automated: index, graph, tracker, commit & push
    .\sync.ps1 -m "custom commit message"     # Uses custom commit message
    .\sync.ps1 -PullOnly                     # Only pull without committing/pushing
#>

param (
    [Alias("m")]
    [string]$Message,

    [switch]$PullOnly,
    [switch]$SkipGraph,
    [switch]$SkipVerify
)

$ErrorActionPreference = "Continue"

function Get-AutoCommitMessage {
    $statusLines = git status --porcelain | Where-Object { $_ -notmatch 'assets/js/last-commit.json' }
    if (-not $statusLines) {
        return $null
    }

    $modifiedFiles = @()
    $addedFiles = @()
    $deletedFiles = @()

    foreach ($line in $statusLines) {
        $status = $line.Substring(0, 2).Trim()
        $file = $line.Substring(3).Trim()
        $fileName = Split-Path $file -Leaf

        if ($status -match 'A|\?\?') {
            $addedFiles += $fileName
        }
        elseif ($status -match 'D') {
            $deletedFiles += $fileName
        }
        else {
            $modifiedFiles += $fileName
        }
    }

    $allChanged = $addedFiles + $modifiedFiles + $deletedFiles
    if ($allChanged.Count -eq 0) {
        return $null
    }

    $prefix = "chore"
    if ($addedFiles.Count -gt 0) {
        $prefix = "feat"
    }
    elseif ($modifiedFiles | Where-Object { $_ -match '\.(js|css|html)$' }) {
        $prefix = "refactor"
    }

    $summary = ""
    if ($allChanged.Count -le 3) {
        $summary = $allChanged -join ", "
    }
    else {
        $firstTwo = ($allChanged[0..1]) -join ", "
        $extraCount = $allChanged.Count - 2
        $summary = "$firstTwo +$extraCount more"
    }

    # Disambiguate repeated edits to the same file(s): filenames alone repeat
    # verbatim across unrelated commits, so fold in line-churn stats and,
    # where possible, the nearest changed identifier (function/selector/id)
    # pulled straight from the diff hunk headers.
    $rawDiff = git diff -U0 HEAD -- 2>$null
    $diffStat = git diff --shortstat HEAD -- 2>$null
    $churn = ""
    if ($diffStat -match '(\d+) insertion') { $ins = $Matches[1] } else { $ins = 0 }
    if ($diffStat -match '(\d+) deletion') { $del = $Matches[1] } else { $del = 0 }
    if (($ins + 0) -gt 0 -or ($del + 0) -gt 0) {
        $churn = " (+$ins/-$del)"
    }

    # A pure "no newline at end of file" fixup: the only changed lines are a
    # removed/added pair with identical text, distinguished solely by git's
    # "\ No newline at end of file" marker. Treat that as its own case rather
    # than falling through to the added-line snippet (which would just repeat
    # the same trailing line every time this happens).
    $isNewlineOnly = $false
    if ($rawDiff -match '\\ No newline at end of file') {
        $addedLines = $rawDiff | Where-Object { $_ -match '^\+[^+]' } | ForEach-Object { $_.Substring(1) }
        $removedLines = $rawDiff | Where-Object { $_ -match '^-[^-]' } | ForEach-Object { $_.Substring(1) }
        if ($addedLines.Count -eq 1 -and $removedLines.Count -eq 1 -and $addedLines[0] -eq $removedLines[0]) {
            $isNewlineOnly = $true
        }
    }

    $hunkContext = $null
    if ($isNewlineOnly) {
        $hunkContext = "add trailing newline"
    }
    else {
        $hunkContext = $rawDiff |
        Select-String '^@@.*@@\s*(\S.*)$' |
        ForEach-Object { $_.Matches[0].Groups[1].Value } |
        Select-Object -First 1

        if (-not $hunkContext) {
            # No preceding-code context on the hunk header (common for pure
            # end-of-file appends) — fall back to the first actual added
            # line's text so two different one-line edits still produce
            # different messages instead of both collapsing to e.g. "(+1/-1)".
            $addedLine = $rawDiff |
            Select-String '^\+[^+]' |
            ForEach-Object { $_.Line.Substring(1).Trim() } |
            Where-Object { $_.Length -gt 0 } |
            Select-Object -First 1
            if ($addedLine) {
                $snippet = $addedLine
                if ($snippet.Length -gt 50) { $snippet = $snippet.Substring(0, 50) + "…" }
                $hunkContext = $snippet
            }
        }
    }

    if ($hunkContext) {
        return "${prefix}: update ${summary} - ${hunkContext}${churn}"
    }
    return "${prefix}: update ${summary}${churn}"
}

function Update-TrackerLog {
    param ([string]$CommitMsg)
    $trackerFile = "dev-logs/PortfolioWebsite_TRACKER.md"
    if (-not (Test-Path $trackerFile)) { return }

    $todayDate = Get-Date -Format "yyyy-MM-dd"
    
    $content = Get-Content $trackerFile -Raw
    if ($content -match '## \*Last updated:.*?\*') {
        $content = $content -replace '## \*Last updated:.*?\*', "## *Last updated: $todayDate*"
        Set-Content -Path $trackerFile -Value $content -NoNewline
        Write-Host "[Git Sync] Updated $trackerFile timestamp to $todayDate." -ForegroundColor Cyan
    }
}

Write-Host "[Git Sync] Resetting local changes to assets/js/last-commit.json..." -ForegroundColor Cyan
git checkout assets/js/last-commit.json 2>$null

Write-Host "[Git Sync] Pulling latest changes from origin main..." -ForegroundColor Cyan
git pull --autostash origin main

if ($PullOnly) {
    Write-Host "[Git Sync] Pull complete (PullOnly flag set)." -ForegroundColor Green
    exit 0
}

# 1. Auto-run search index extractor if python is available
if (Test-Path "scripts/extract_index.py") {
    $pythonCmd = Get-Command python -ErrorAction SilentlyContinue
    if (-not $pythonCmd) { $pythonCmd = Get-Command python3 -ErrorAction SilentlyContinue }
    if ($pythonCmd) {
        Write-Host "[Git Sync] Running search index extractor (scripts/extract_index.py)..." -ForegroundColor Cyan
        & $pythonCmd.Source scripts/extract_index.py 2>$null
    }
}

# 2. Auto-run graphify update if installed and not skipped
if (-not $SkipGraph) {
    $graphifyCmd = Get-Command graphify -ErrorAction SilentlyContinue
    if ($graphifyCmd) {
        Write-Host "[Git Sync] Updating codebase knowledge graph (graphify update .)..." -ForegroundColor Cyan
        & $graphifyCmd.Source update . 2>$null
    }
}

# 3. Pre-commit verification gate (v45)
if (-not $SkipVerify) {
    if (Test-Path "scripts/verify.py") {
        $pythonCmd = Get-Command python -ErrorAction SilentlyContinue
        if (-not $pythonCmd) { $pythonCmd = Get-Command python3 -ErrorAction SilentlyContinue }
        if ($pythonCmd) {
            Write-Host "[Git Sync] Running verification suite (scripts/verify.py)..." -ForegroundColor Cyan
            & $pythonCmd.Source scripts/verify.py 2>$null
            $verifyExit = $LASTEXITCODE
            if ($verifyExit -eq 1) {
                Write-Host "`n[Git Sync] VERIFICATION FAILED — commit aborted. Fix errors above or use -SkipVerify to bypass." -ForegroundColor Red
                exit 1
            }
            elseif ($verifyExit -eq 2) {
                Write-Host "[Git Sync] Verification passed with warnings — proceeding with commit." -ForegroundColor Yellow
            }
            else {
                Write-Host "[Git Sync] Verification passed." -ForegroundColor Green
            }
        }
    }
}
else {
    Write-Host "[Git Sync] Skipping verification (SkipVerify flag set)." -ForegroundColor Yellow
}

# 4. Determine commit message
if (-not $Message) {
    $Message = Get-AutoCommitMessage
    if ($Message) {
        Write-Host "[Git Sync] Auto-generated commit message: '$Message'" -ForegroundColor Yellow
    }
}

if ($Message) {
    # Update tracker timestamp before committing
    Update-TrackerLog -CommitMsg $Message

    Write-Host "[Git Sync] Staging changes..." -ForegroundColor Cyan
    git add .

    # Ensure local edit to last-commit.json is not committed
    git restore --staged assets/js/last-commit.json 2>$null
    git checkout assets/js/last-commit.json 2>$null

    Write-Host "[Git Sync] Committing: '$Message'..." -ForegroundColor Cyan
    git commit -m "$Message"

    Write-Host "[Git Sync] Pushing to origin main..." -ForegroundColor Cyan
    git push origin main
    if ($LASTEXITCODE -ne 0) {
        Write-Host "[Git Sync] Push rejected. Re-pulling and retrying push..." -ForegroundColor Yellow
        git pull --rebase --autostash origin main
        git push origin main
    }

    Write-Host "[Git Sync] Waiting 4s for GitHub Actions stamp bot..." -ForegroundColor Yellow
    Start-Sleep -Seconds 4

    Write-Host "[Git Sync] Syncing bot stamp commit..." -ForegroundColor Cyan
    git pull --autostash origin main
}
else {
    Write-Host "[Git Sync] No local changes detected to commit." -ForegroundColor Gray
}

Write-Host "[Git Sync] Workspace is clean and fully synchronized!" -ForegroundColor Green