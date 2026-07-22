<#
.SYNOPSIS
    Automates Git pull, auto-commit message generation, push, and bot stamp sync.

.DESCRIPTION
    1. Resets any local modifications to assets/js/last-commit.json (bot-managed file).
    2. Pulls with --autostash so your local work is preserved.
    3. Auto-generates a smart commit message if none is provided.
    4. Stages, commits, pushes, and auto-syncs the GitHub Actions bot's stamp commit.

.EXAMPLE
    .\sync.ps1                               # Auto-generates commit message, commits & pushes
    .\sync.ps1 -m "custom commit message"     # Uses custom commit message
    .\sync.ps1 -PullOnly                     # Only pull without committing/pushing
#>

param (
    [Alias("m")]
    [string]$Message,

    [switch]$PullOnly
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

    # Determine type prefix
    $prefix = "chore"
    if ($addedFiles.Count -gt 0) {
        $prefix = "feat"
    } elseif ($modifiedFiles | Where-Object { $_ -match '\.(js|css|html)$' }) {
        $prefix = "refactor"
    }

    # Generate summary list
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

Write-Host "[Git Sync] Resetting local changes to assets/js/last-commit.json..." -ForegroundColor Cyan
git checkout assets/js/last-commit.json 2>$null

Write-Host "[Git Sync] Pulling latest changes from origin main..." -ForegroundColor Cyan
git pull --autostash origin main

if ($PullOnly) {
    Write-Host "[Git Sync] Pull complete (PullOnly flag set)." -ForegroundColor Green
    exit 0
}

if (-not $Message) {
    $Message = Get-AutoCommitMessage
    if ($Message) {
        Write-Host "[Git Sync] Auto-generated commit message: '$Message'" -ForegroundColor Yellow
    }
}

if ($Message) {
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
