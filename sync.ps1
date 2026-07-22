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
    [switch]$SkipGraph
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
        } elseif ($status -match 'D') {
            $deletedFiles += $fileName
        } else {
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
    } elseif ($modifiedFiles | Where-Object { $_ -match '\.(js|css|html)$' }) {
        $prefix = "refactor"
    }

    $summary = ""
    if ($allChanged.Count -le 3) {
        $summary = $allChanged -join ", "
    } else {
        $firstTwo = ($allChanged[0..1]) -join ", "
        $extraCount = $allChanged.Count - 2
        $summary = "$firstTwo +$extraCount more"
    }

    return "${prefix}: update ${summary}"
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

# 3. Determine commit message
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

    Write-Host "[Git Sync] Waiting 4s for GitHub Actions stamp bot..." -ForegroundColor Yellow
    Start-Sleep -Seconds 4

    Write-Host "[Git Sync] Syncing bot stamp commit..." -ForegroundColor Cyan
    git pull --autostash origin main
} else {
    Write-Host "[Git Sync] No local changes detected to commit." -ForegroundColor Gray
}

Write-Host "[Git Sync] Workspace is clean and fully synchronized!" -ForegroundColor Green
