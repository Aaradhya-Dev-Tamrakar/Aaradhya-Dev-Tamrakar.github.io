<#
.SYNOPSIS
    Automates Git pull/push and cleanly handles assets/js/last-commit.json.

.DESCRIPTION
    1. Resets any local modifications to assets/js/last-commit.json (bot managed file).
    2. Pulls with --autostash so your local work-in-progress is preserved.
    3. If -Message (or -m) is passed, stages changes, commits, pushes, and auto-syncs the bot's commit.

.EXAMPLE
    .\sync.ps1                            # Pull & clean last-commit.json safely
    .\sync.ps1 -m "refactor access control" # Pull, stage, commit, push, & auto-sync bot stamp
#>

param (
    [Alias("m")]
    [string]$Message
)

$ErrorActionPreference = "Continue"

Write-Host "[Git Sync] Resetting local changes to assets/js/last-commit.json..." -ForegroundColor Cyan
git checkout assets/js/last-commit.json 2>$null

Write-Host "[Git Sync] Pulling latest changes from origin main..." -ForegroundColor Cyan
git pull --autostash origin main

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
}

Write-Host "[Git Sync] Workspace is clean and fully synchronized!" -ForegroundColor Green
