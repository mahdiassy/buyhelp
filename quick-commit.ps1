# ================================================
# BuyHelp Quick Commit Script (PowerShell)
# ================================================
# Usage: .\quick-commit.ps1 "Your commit message"

param(
    [Parameter(Mandatory=$true)]
    [string]$message
)

Write-Host "🚀 BuyHelp - Quick Git Commit & Push" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Check if in git repository
if (-not (Test-Path ".git")) {
    Write-Host "❌ Error: Not a git repository!" -ForegroundColor Red
    exit 1
}

# Show status
Write-Host "📊 Current Status:" -ForegroundColor Yellow
git status --short

Write-Host ""
Write-Host "📝 Adding all changes..." -ForegroundColor Yellow
git add .

Write-Host "💾 Committing with message: '$message'" -ForegroundColor Yellow
git commit -m "$message"

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Commit failed or nothing to commit!" -ForegroundColor Red
    exit 1
}

Write-Host "📤 Pushing to remote..." -ForegroundColor Yellow
$currentBranch = git branch --show-current
git push origin $currentBranch

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Push failed!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "✅ Successfully committed and pushed to branch: $currentBranch" -ForegroundColor Green
Write-Host "🎉 Done!" -ForegroundColor Green
