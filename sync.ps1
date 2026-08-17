<#
.SYNOPSIS
    Automated Git synchronization, search indexing, knowledge graph maintenance,
    pre-commit verification, smart conventional commits, and bot stamp synchronization.

.DESCRIPTION
    sync.ps1 — The unified developer & agent workflow synchronization engine for
    Aaradhya-Dev-Tamrakar.github.io.

    Core Workflow:
    1. Resets uncommitted local noise on assets/js/last-commit.json (bot-managed).
    2. Pulls remote updates with --autostash and synchronizes Git LFS pointers.
    3. (Optional) Syncs site version metadata across sw.js, sitemap.xml, and tracker.
    4. Regenerates static search index via scripts/extract_index.py.
    5. Updates codebase knowledge graph via graphify update . (AST sync).
    6. Runs pre-commit diagnostic verification suite via scripts/verify.py.
    7. Formulates intelligent conventional commit message with file-scope & churn metrics.
    8. Updates dev-logs/PortfolioWebsite_TRACKER.md timestamp.
    9. Stages all changes (excluding last-commit.json), commits, and pushes to origin main.
    10. Smart-polls and synchronizes the GitHub Actions stamp bot commit.

.PARAMETER Message
    Custom commit message (e.g. -m "feat(projects): add robotics simulation").
    If omitted, an intelligent conventional commit message is auto-generated.

.PARAMETER Version
    Optional version bump tag (e.g. -v v48). Automatically updates Service Worker
    cache name in sw.js, sitemap.xml lastmod dates, and tracker header.

.PARAMETER PullOnly
    Safely pull remote changes with --autostash and LFS sync without committing or pushing.

.PARAMETER PushOnly
    Pushes existing unpushed commits and synchronizes the stamp bot without re-running
    pre-extraction indexing and verification.

.PARAMETER NoPush
    Stages and commits changes locally without pushing to remote origin.

.PARAMETER SkipGraph
    Bypasses knowledge graph AST extraction (graphify update .).

.PARAMETER SkipVerify
    Bypasses pre-commit verification gate (scripts/verify.py).

.PARAMETER SkipIndex
    Bypasses static search index regeneration (scripts/extract_index.py).

.PARAMETER WhatIf
    Dry-run mode: Previews changes, verification status, and auto-generated commit
    message without staging, committing, or pushing.

.PARAMETER Force
    Alias for bypassing verification gate failure on urgent commits.

.PARAMETER Status
    Displays comprehensive repository health, git status, LFS state, and tooling diagnostics.

.PARAMETER VerboseLog
    Outputs detailed debug logs, diff hunks, and sub-process execution telemetry.

.PARAMETER Help
    Displays this formatted interactive help manual.

.EXAMPLE
    .\sync.ps1                               # Fully automated: pull, index, graph, verify, commit & push
    .\sync.ps1 -m "feat(ui): refine radar"   # Custom commit message
    .\sync.ps1 -v v48                        # Sync version metadata, verify, commit & push
    .\sync.ps1 -PullOnly                     # Safe pull only
    .\sync.ps1 -WhatIf                       # Dry-run preview
    .\sync.ps1 -Status                       # Show repository telemetry
#>

param (
    [Alias("m")]
    [string]$Message,

    [Alias("v")]
    [string]$Version,

    [switch]$PullOnly,
    [switch]$PushOnly,
    [switch]$NoPush,
    [switch]$SkipGraph,
    [switch]$SkipVerify,
    [switch]$SkipIndex,
    [Alias("DryRun")]
    [switch]$WhatIf,
    [Alias("Force")]
    [switch]$BypassVerify,
    [Alias("Info")]
    [switch]$Status,
    [Alias("v_log")]
    [switch]$VerboseLog,
    [Alias("h", "?")]
    [switch]$Help
)

$ErrorActionPreference = "Continue"
$stopwatch = [System.Diagnostics.Stopwatch]::StartNew()

# -----------------------------------------------------------------------------
# Color Logging & UI Utilities
# -----------------------------------------------------------------------------
function Write-Badge {
    param (
        [string]$Tag,
        [string]$Text,
        [ConsoleColor]$TagColor = [ConsoleColor]::Cyan,
        [ConsoleColor]$TextColor = [ConsoleColor]::White
    )
    $ts = Get-Date -Format "HH:mm:ss"
    Write-Host "[$ts] " -NoNewline -ForegroundColor DarkGray
    Write-Host "[$Tag] " -NoNewline -ForegroundColor $TagColor
    Write-Host "$Text" -ForegroundColor $TextColor
}

function Show-HelpGuide {
    Write-Host ''
    Write-Host '==========================================================================' -ForegroundColor Cyan
    Write-Host '  sync.ps1 -- Portfolio Repository Hyper-Automation & Git Sync Engine     ' -ForegroundColor White
    Write-Host '==========================================================================' -ForegroundColor Cyan
    Write-Host ''
    Write-Host 'SYNTAX:' -ForegroundColor Yellow
    Write-Host '  .\sync.ps1 [-m <Message>] [-v <Version>] [-PullOnly] [-PushOnly] [-NoPush]'
    Write-Host '             [-SkipGraph] [-SkipVerify] [-SkipIndex] [-WhatIf] [-Force] [-Status]'
    Write-Host ''
    Write-Host 'COMMON WORKFLOWS:' -ForegroundColor Yellow
    Write-Host '  .\sync.ps1                        ' -NoNewline -ForegroundColor Green
    Write-Host 'Full auto: Index -> Graph -> Verify -> Auto-Commit -> Push -> Stamp Sync'
    Write-Host '  .\sync.ps1 -m "type(scope): msg"  ' -NoNewline -ForegroundColor Green
    Write-Host 'Commit with custom conventional commit message'
    Write-Host '  .\sync.ps1 -v v48                 ' -NoNewline -ForegroundColor Green
    Write-Host 'Bump version metadata (sw.js, sitemap.xml, tracker) and sync'
    Write-Host '  .\sync.ps1 -PullOnly              ' -NoNewline -ForegroundColor Green
    Write-Host 'Pull remote changes safely with --autostash and LFS sync'
    Write-Host '  .\sync.ps1 -WhatIf                ' -NoNewline -ForegroundColor Green
    Write-Host 'Dry run: preview auto-commit message and verification'
    Write-Host '  .\sync.ps1 -Status                ' -NoNewline -ForegroundColor Green
    Write-Host 'Display repository health, git status, and tooling diagnostics'
    Write-Host ''
    Write-Host 'FLAGS & SWITCHES:' -ForegroundColor Yellow
    Write-Host '  -m, -Message <String>    Custom conventional commit message'
    Write-Host '  -v, -Version <String>    Version tag (e.g. v48) to sync across sw.js and sitemap'
    Write-Host '  -PullOnly                Safe pull with autostash and LFS pull only'
    Write-Host '  -PushOnly                Push staged/committed work and sync stamp bot'
    Write-Host '  -NoPush                  Commit locally without pushing to remote origin'
    Write-Host '  -SkipGraph               Skip Graphify AST knowledge graph update'
    Write-Host '  -SkipVerify / -Force     Bypass pre-commit verification suite (scripts/verify.py)'
    Write-Host '  -SkipIndex               Skip static search index regeneration (extract_index.py)'
    Write-Host '  -WhatIf / -DryRun        Preview changes and commit message without modifying git'
    Write-Host '  -Status / -Info          Show repository and environment diagnostics'
    Write-Host '  -VerboseLog              Show detailed sub-process output and diff snippets'
    Write-Host '  -Help, -h, -?            Show this help guide'
    Write-Host '==========================================================================' -ForegroundColor Cyan
    Write-Host ''
}

# -----------------------------------------------------------------------------
# Tooling Discovery
# -----------------------------------------------------------------------------
function Get-PythonPath {
    $candidates = @("python", "python3", "py")
    foreach ($cand in $candidates) {
        $cmd = Get-Command $cand -ErrorAction SilentlyContinue
        if ($cmd) {
            $null = & $cmd.Source --version 2>$null
            if ($LASTEXITCODE -eq 0) {
                return $cmd.Source
            }
        }
    }
    return $null
}

function Get-LfsInstalled {
    $lfs = Get-Command git-lfs -ErrorAction SilentlyContinue
    if (-not $lfs) {
        git lfs version 2>$null | Out-Null
        if ($LASTEXITCODE -eq 0) { return $true }
        return $false
    }
    return $true
}

function Show-Diagnostics {
    $py = Get-PythonPath
    $lfs = Get-LfsInstalled
    $graphify = Get-Command graphify -ErrorAction SilentlyContinue
    $branch = git rev-parse --abbrev-ref HEAD 2>$null
    $lastCommit = git log -1 '--pretty=format:%h - %s (%cr) <%an>' 2>$null
    $statusShort = git status --short 2>$null

    Write-Host ''
    Write-Host '==========================================================================' -ForegroundColor Cyan
    Write-Host '  Repository Status & Tooling Diagnostics                                 ' -ForegroundColor White
    Write-Host '==========================================================================' -ForegroundColor Cyan
    Write-Host '  Current Branch   : ' -NoNewline -ForegroundColor Yellow
    Write-Host "$branch"
    Write-Host '  Last Commit      : ' -NoNewline -ForegroundColor Yellow
    Write-Host "$lastCommit"
    
    $pyText = if ($py) { "$py" } else { "NOT FOUND (Python required for verification & indexing)" }
    $pyColor = if ($py) { [ConsoleColor]::Green } else { [ConsoleColor]::Red }
    Write-Host '  Python Runtime   : ' -NoNewline -ForegroundColor Yellow
    Write-Host $pyText -ForegroundColor $pyColor
    
    $lfsText = if ($lfs) { "Active & Configured" } else { "Not Found (git-lfs recommended)" }
    $lfsColor = if ($lfs) { [ConsoleColor]::Green } else { [ConsoleColor]::Yellow }
    Write-Host '  Git LFS Status   : ' -NoNewline -ForegroundColor Yellow
    Write-Host $lfsText -ForegroundColor $lfsColor

    $graphText = if ($graphify) { "Installed ($($graphify.Source))" } else { "Not Found (Optional)" }
    $graphColor = if ($graphify) { [ConsoleColor]::Green } else { [ConsoleColor]::Gray }
    Write-Host '  Graphify Tool    : ' -NoNewline -ForegroundColor Yellow
    Write-Host $graphText -ForegroundColor $graphColor
    
    Write-Host ''
    Write-Host '  Working Tree State:' -ForegroundColor Yellow
    if ($statusShort) {
        $statusShort | ForEach-Object { Write-Host "    $_" -ForegroundColor White }
    } else {
        Write-Host '    Working tree clean (no uncommitted changes)' -ForegroundColor Green
    }
    Write-Host '==========================================================================' -ForegroundColor Cyan
    Write-Host ''
}

# -----------------------------------------------------------------------------
# Smart Commit Message Generation
# -----------------------------------------------------------------------------
function Get-AutoCommitMessage {
    $statusLines = git status --porcelain 2>$null | Where-Object { $_ -notmatch 'assets/js/last-commit.json' }
    if (-not $statusLines) {
        return $null
    }

    $modifiedFiles = @()
    $addedFiles = @()
    $deletedFiles = @()
    $allPaths = @()

    foreach ($line in $statusLines) {
        if ($line.Length -lt 4) { continue }
        $code = $line.Substring(0, 2).Trim()
        $rawPath = $line.Substring(3).Trim().Trim('"')
        $fileName = Split-Path $rawPath -Leaf
        $allPaths += $rawPath

        if ($code -match 'A|\?\?') {
            $addedFiles += $fileName
        }
        elseif ($code -match 'D') {
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

    # Determine conventional type and scope from modified filepaths
    $type = "chore"
    $scope = ""

    # Scope detection based on path patterns
    if ($allPaths | Where-Object { $_ -match '^assets/css/' }) {
        $type = "style"
        $scope = "css"
    }
    elseif ($allPaths | Where-Object { $_ -match '^assets/js/modules/' }) {
        $type = "refactor"
        $scope = "js"
    }
    elseif ($allPaths | Where-Object { $_ -match '^assets/js/bg-animations\.js' }) {
        $type = "perf"
        $scope = "canvas"
    }
    elseif ($allPaths | Where-Object { $_ -match '^assets/(images|videos|docs|media)/' }) {
        $type = "assets"
        $scope = "media"
    }
    elseif ($allPaths | Where-Object { $_ -match 'projects\.html' }) {
        $type = if ($addedFiles.Count -gt 0) { "feat" } else { "update" }
        $scope = "projects"
    }
    elseif ($allPaths | Where-Object { $_ -match 'achievements\.html' }) {
        $type = if ($addedFiles.Count -gt 0) { "feat" } else { "update" }
        $scope = "achievements"
    }
    elseif ($allPaths | Where-Object { $_ -match 'experience\.html' }) {
        $type = if ($addedFiles.Count -gt 0) { "feat" } else { "update" }
        $scope = "experience"
    }
    elseif ($allPaths | Where-Object { $_ -match 'about\.html' }) {
        $type = if ($addedFiles.Count -gt 0) { "feat" } else { "update" }
        $scope = "about"
    }
    elseif ($allPaths | Where-Object { $_ -match 'contact\.html' }) {
        $type = if ($addedFiles.Count -gt 0) { "feat" } else { "update" }
        $scope = "contact"
    }
    elseif ($allPaths | Where-Object { $_ -match 'journey\.html' }) {
        $type = if ($addedFiles.Count -gt 0) { "feat" } else { "update" }
        $scope = "journey"
    }
    elseif ($allPaths | Where-Object { $_ -match 'index\.html' }) {
        $type = if ($addedFiles.Count -gt 0) { "feat" } else { "refactor" }
        $scope = "home"
    }
    elseif ($allPaths | Where-Object { $_ -match 'sw\.js' }) {
        $type = "perf"
        $scope = "pwa"
    }
    elseif ($allPaths | Where-Object { $_ -match '(sitemap\.xml|robots\.txt)' }) {
        $type = "seo"
        $scope = "sitemap"
    }
    elseif ($allPaths | Where-Object { $_ -match '^dev-logs/' -or $_ -match '\.md$' }) {
        $type = "docs"
        $scope = "tracker"
    }
    elseif ($allPaths | Where-Object { $_ -match '^\.github/' }) {
        $type = "ci"
        $scope = "workflows"
    }
    elseif ($allPaths | Where-Object { $_ -match '^scripts/' }) {
        $type = "tools"
        $scope = "scripts"
    }
    elseif ($allPaths | Where-Object { $_ -match '^sync\.ps1$' }) {
        $type = "chore"
        $scope = "sync"
    }
    elseif ($addedFiles.Count -gt 0) {
        $type = "feat"
    }
    elseif ($modifiedFiles | Where-Object { $_ -match '\.(js|html)$' }) {
        $type = "refactor"
    }

    # Summary list of files
    $summary = ""
    if ($allChanged.Count -le 3) {
        $summary = $allChanged -join ", "
    }
    else {
        $firstTwo = ($allChanged[0..1]) -join ", "
        $extraCount = $allChanged.Count - 2
        $summary = "$firstTwo +$extraCount more"
    }

    # Calculate diff statistics and line churn
    $rawDiff = git diff -U0 HEAD -- 2>$null
    $diffStat = git diff --shortstat HEAD -- 2>$null
    $churn = ""
    $ins = 0
    $del = 0
    if ($diffStat -match '(\d+) insertion') { $ins = $Matches[1] }
    if ($diffStat -match '(\d+) deletion') { $del = $Matches[1] }
    if (($ins + 0) -gt 0 -or ($del + 0) -gt 0) {
        $churn = " (+$ins/-$del)"
    }

    # Check for pure EOF newline fixup
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
            $addedLine = $rawDiff |
                Select-String '^\+[^+]' |
                ForEach-Object { $_.Line.Substring(1).Trim() } |
                Where-Object { $_.Length -gt 0 } |
                Select-Object -First 1
            if ($addedLine) {
                $snippet = $addedLine
                if ($snippet.Length -gt 45) { $snippet = $snippet.Substring(0, 45) + "..." }
                $hunkContext = $snippet
            }
        }
    }

    $scopeTag = if ($scope) { "($scope)" } else { "" }

    if ($hunkContext) {
        return "${type}${scopeTag}: update ${summary} - ${hunkContext}${churn}"
    }
    return "${type}${scopeTag}: update ${summary}${churn}"
}

# -----------------------------------------------------------------------------
# Tracker & Metadata Synchronization
# -----------------------------------------------------------------------------
function Update-TrackerLog {
    $trackerFile = "dev-logs/PortfolioWebsite_TRACKER.md"
    if (-not (Test-Path $trackerFile)) { return }

    $todayDate = Get-Date -Format "yyyy-MM-dd"
    $content = Get-Content $trackerFile -Raw -Encoding UTF8
    
    # Support all _Last updated..._ and *Last updated...* Markdown formats
    if ($content -match '##\s*[_*]Last updated.*') {
        $newContent = [regex]::Replace($content, '##\s*[_*]Last updated.*', "## _Last updated: $todayDate_")
        Set-Content -Path $trackerFile -Value $newContent -NoNewline -Encoding UTF8
        Write-Badge "Tracker" "Updated $trackerFile timestamp to $todayDate" "Cyan" "Green"
    }
}

# -----------------------------------------------------------------------------
# Bot Stamp Synchronization Polling Loop
# -----------------------------------------------------------------------------
function Sync-BotStamp {
    Write-Badge "BotSync" "Awaiting GitHub Actions stamp bot commit..." "Yellow" "White"
    
    $maxAttempts = 4
    $botSynced = $false

    for ($attempt = 1; $attempt -le $maxAttempts; $attempt++) {
        $waitTime = if ($attempt -eq 1) { 3 } else { 2 }
        Start-Sleep -Seconds $waitTime

        # Pull silently with autostash
        $pullOut = git pull --autostash origin main 2>&1 | Out-String
        
        $latestAuthor = git log -1 '--pretty=format:%an' 2>$null
        $latestMsg = git log -1 '--pretty=format:%s' 2>$null
        $latestSha = git log -1 '--pretty=format:%h' 2>$null

        if ($latestAuthor -match 'github-actions' -or $latestMsg -match 'stamp last commit') {
            Write-Badge "BotSync" "Synchronized bot stamp commit [$latestSha] '$latestMsg'" "Green" "Green"
            $botSynced = $true
            break
        }
        elseif ($pullOut -match 'Already up to date' -and $attempt -ge 2) {
            break
        }
    }

    if (-not $botSynced) {
        Write-Badge "BotSync" "Local branch is aligned with origin main." "Cyan" "Gray"
    }
}

# -----------------------------------------------------------------------------
# MAIN EXECUTION ROUTINE
# -----------------------------------------------------------------------------

# Handle Help Flag
if ($Help) {
    Show-HelpGuide
    exit 0
}

# Handle Diagnostics Status Flag
if ($Status) {
    Show-Diagnostics
    exit 0
}

Write-Host ''
Write-Host '==========================================================================' -ForegroundColor Cyan
Write-Host '  Aaradhya-Dev-Tamrakar.github.io -- Git & Workflow Synchronization Suite ' -ForegroundColor White
Write-Host '==========================================================================' -ForegroundColor Cyan

# Step 0: Find Python Environment & Git LFS
$pythonExe = Get-PythonPath
$lfsAvailable = Get-LfsInstalled

# Step 1: Clean Bot-Managed File
Write-Badge "Git" "Resetting uncommitted modifications to assets/js/last-commit.json..." "Cyan" "White"
git checkout assets/js/last-commit.json 2>$null

# Step 2: Safe Pull Remote Changes
Write-Badge "Git" "Pulling latest changes from origin main (--autostash)..." "Cyan" "White"
git pull --autostash origin main
if ($LASTEXITCODE -ne 0) {
    Write-Badge "Git" "Warning: Pull returned non-zero exit code. Checking state..." "Yellow" "Yellow"
}

# Step 2b: Git LFS Synchronization
if ($lfsAvailable) {
    Write-Badge "LFS" "Ensuring Git LFS pointers are synchronized..." "Cyan" "Gray"
    git lfs pull 2>$null
}

# If PullOnly requested, terminate here
if ($PullOnly) {
    $stopwatch.Stop()
    Write-Host ''
    Write-Badge "Done" "Safe pull complete. Workspace synchronized in $([math]::Round($stopwatch.Elapsed.TotalSeconds, 2))s." "Green" "Green"
    Write-Host '==========================================================================' -ForegroundColor Cyan
    Write-Host ''
    exit 0
}

# Step 3: Version Bump & Metadata Sync (Auto-propagates across all site files)
if (-not $PushOnly) {
    if ($pythonExe -and (Test-Path "scripts/site_automation.py")) {
        if ($Version) {
            Write-Badge "Version" "Synchronizing version metadata for tag '$Version'..." "Magenta" "White"
            & $pythonExe scripts/site_automation.py sync-metadata --version $Version
        } else {
            Write-Badge "Version" "Ensuring site-wide version consistency from SITE_RELEASES..." "Cyan" "Gray"
            & $pythonExe scripts/site_automation.py sync-metadata
        }
    }
}

# Step 4: Search Index Extraction
if (-not $SkipIndex -and -not $PushOnly) {
    if (Test-Path "scripts/extract_index.py") {
        if ($pythonExe) {
            Write-Badge "Index" "Extracting static search index (scripts/extract_index.py)..." "Cyan" "White"
            $indexOutput = & $pythonExe scripts/extract_index.py 2>&1 | Out-String
            if ($VerboseLog -or $indexOutput -match 'Extracted|updated') {
                Write-Host $indexOutput.Trim() -ForegroundColor Gray
            }
        } else {
            Write-Badge "Index" "Warning: Python runtime not detected -- skipping search index extraction." "Yellow" "Yellow"
        }
    }
} else {
    if ($SkipIndex) { Write-Badge "Index" "Skipped search index extraction (-SkipIndex set)." "Yellow" "Gray" }
}

# Step 5: Knowledge Graph AST Update (Graphify)
if (-not $SkipGraph -and -not $PushOnly) {
    $graphifyCmd = Get-Command graphify -ErrorAction SilentlyContinue
    if ($graphifyCmd) {
        Write-Badge "Graph" "Updating AST knowledge graph (graphify update .)..." "Cyan" "White"
        & $graphifyCmd.Source update .
    } else {
        Write-Badge "Graph" "Graphify CLI not found in PATH -- skipping graph AST sync." "DarkGray" "Gray"
    }
} else {
    if ($SkipGraph) { Write-Badge "Graph" "Skipped knowledge graph update (-SkipGraph set)." "Yellow" "Gray" }
}

# Step 6: Pre-Commit Diagnostic Verification Gate
if (-not $SkipVerify -and -not $BypassVerify -and -not $PushOnly) {
    if (Test-Path "scripts/verify.py") {
        if ($pythonExe) {
            Write-Badge "Verify" "Running pre-commit diagnostic verification suite..." "Cyan" "White"
            & $pythonExe scripts/verify.py
            $verifyExit = $LASTEXITCODE
            
            if ($verifyExit -eq 1) {
                Write-Host ''
                Write-Badge "Verify" "VERIFICATION FAILED (exit code 1) -- Commit aborted." "Red" "Red"
                Write-Host "  Please resolve the errors flagged by verify.py above." -ForegroundColor Yellow
                Write-Host "  To bypass this gate for urgent WIP syncs, pass: .\sync.ps1 -SkipVerify (or -Force)" -ForegroundColor Gray
                Write-Host ''
                exit 1
            }
            elseif ($verifyExit -eq 2) {
                Write-Badge "Verify" "Verification passed with warnings -- proceeding with commit." "Yellow" "Yellow"
            }
            else {
                Write-Badge "Verify" "All verification checks passed cleanly (0 errors, 0 warnings)." "Green" "Green"
            }
        } else {
            Write-Badge "Verify" "Warning: Python not detected. Cannot run verification gate." "Yellow" "Yellow"
        }
    }
} else {
    if ($SkipVerify -or $BypassVerify) {
        Write-Badge "Verify" "Bypassed verification gate (-SkipVerify / -Force flag set)." "Yellow" "Yellow"
    }
}

# Step 7: Push-Only Mode Check
if ($PushOnly) {
    Write-Badge "Git" "PushOnly flag active -- checking for unpushed commits..." "Cyan" "White"
    git push origin main
    if ($LASTEXITCODE -ne 0) {
        Write-Badge "Git" "Push was rejected. Re-pulling with rebase and retrying..." "Yellow" "Yellow"
        git pull --rebase --autostash origin main
        git push origin main
    }
    Sync-BotStamp
    $stopwatch.Stop()
    Write-Host ''
    Write-Badge "Done" "Push-only sync complete in $([math]::Round($stopwatch.Elapsed.TotalSeconds, 2))s." "Green" "Green"
    Write-Host '==========================================================================' -ForegroundColor Cyan
    Write-Host ''
    exit 0
}

# Step 8: Formulate Commit Message
if (-not $Message) {
    $Message = Get-AutoCommitMessage
    if ($Message) {
        Write-Badge "Commit" "Auto-generated commit message: '$Message'" "Yellow" "White"
    }
}

# Step 9: Dry-Run (WhatIf) Mode
if ($WhatIf) {
    $stopwatch.Stop()
    Write-Host ''
    Write-Host '--------------------------------------------------------------------------' -ForegroundColor Yellow
    Write-Host '  DRY-RUN / WHAT-IF PREVIEW                                               ' -ForegroundColor Yellow
    Write-Host '--------------------------------------------------------------------------' -ForegroundColor Yellow
    Write-Host '  Proposed Commit Message : ' -NoNewline -ForegroundColor White
    $msgText = if ($Message) { "$Message" } else { "No changes detected to commit" }
    Write-Host $msgText -ForegroundColor Cyan
    Write-Host '  Verification Status     : Passed' -ForegroundColor Green
    Write-Host '  Git Push Destination    : origin main' -ForegroundColor White
    Write-Host "  Execution Time (Preview): $([math]::Round($stopwatch.Elapsed.TotalSeconds, 2))s" -ForegroundColor Gray
    Write-Host '--------------------------------------------------------------------------' -ForegroundColor Yellow
    Write-Host '  No changes were staged, committed, or pushed.' -ForegroundColor Gray
    Write-Host ''
    exit 0
}

# Step 10: Stage, Commit, and Push
if ($Message) {
    # Update tracker timestamp before committing
    Update-TrackerLog

    Write-Badge "Git" "Staging modified repository assets (git add .)..." "Cyan" "White"
    git add .

    # Ensure local edit to last-commit.json is never committed locally
    git restore --staged assets/js/last-commit.json 2>$null
    git checkout assets/js/last-commit.json 2>$null

    Write-Badge "Git" "Committing: '$Message'..." "Cyan" "White"
    git commit -m "$Message"

    if (-not $NoPush) {
        Write-Badge "Git" "Pushing commits to origin main..." "Cyan" "White"
        git push origin main
        
        if ($LASTEXITCODE -ne 0) {
            Write-Badge "Git" "Push rejected (non-fast-forward). Auto-rebasing with autostash..." "Yellow" "Yellow"
            git pull --rebase --autostash origin main
            git push origin main
        }

        # Step 11: Sync Bot Stamp
        Sync-BotStamp
    } else {
        Write-Badge "Git" "Skipped remote push (-NoPush flag active). Commit saved locally." "Yellow" "Yellow"
    }
}
else {
    # Check if there are unpushed commits from previous sessions
    $unpushed = git log origin/main..HEAD --oneline 2>$null
    if ($unpushed -and -not $NoPush) {
        Write-Badge "Git" "No working tree changes, but found unpushed local commits:" "Cyan" "Yellow"
        $unpushed | ForEach-Object { Write-Host "    $_" -ForegroundColor Gray }
        Write-Badge "Git" "Pushing unpushed commits to origin main..." "Cyan" "White"
        git push origin main
        Sync-BotStamp
    } else {
        Write-Badge "Git" "No local working tree changes detected to commit." "DarkGray" "Gray"
    }
}

$stopwatch.Stop()
$elapsedSec = [math]::Round($stopwatch.Elapsed.TotalSeconds, 2)

Write-Host ''
Write-Badge "Done" "Workspace is clean and fully synchronized! (Elapsed: ${elapsedSec}s)" "Green" "Green"
Write-Host '==========================================================================' -ForegroundColor Cyan
Write-Host ''