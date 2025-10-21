# ================================================
# BuyHelp - Build and Prepare for Deployment
# ================================================

param(
    [Parameter(Mandatory=$false)]
    [ValidateSet("staging", "production")]
    [string]$environment = "staging"
)

Write-Host "🏗️  BuyHelp - Build Script" -ForegroundColor Cyan
Write-Host "Environment: $environment" -ForegroundColor Yellow
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

$projectRoot = $PSScriptRoot

# Function to check if command succeeded
function Check-LastCommand {
    param($message)
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ $message failed!" -ForegroundColor Red
        exit 1
    }
    Write-Host "✅ $message completed" -ForegroundColor Green
}

# ============ Build Frontend ============
Write-Host "🎨 Building Angular Frontend..." -ForegroundColor Cyan
Set-Location "$projectRoot\angular-frontend"

if ($environment -eq "production") {
    npm run build --configuration production
} else {
    npm run build --configuration production
}
Check-LastCommand "Frontend build"

Write-Host ""

# ============ Build Admin Panel ============
Write-Host "🎨 Building Angular Admin Panel..." -ForegroundColor Cyan
Set-Location "$projectRoot\angular-admin"

if ($environment -eq "production") {
    npm run build --configuration production
} else {
    npm run build --configuration production
}
Check-LastCommand "Admin build"

Write-Host ""

# ============ Summary ============
Write-Host "✅ Build completed successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "📦 Build artifacts location:" -ForegroundColor Yellow
Write-Host "   Frontend: $projectRoot\angular-frontend\dist\" -ForegroundColor White
Write-Host "   Admin:    $projectRoot\angular-admin\dist\" -ForegroundColor White
Write-Host ""
Write-Host "📤 Next steps:" -ForegroundColor Yellow
Write-Host "   1. Upload dist folders to server" -ForegroundColor White
Write-Host "   2. Or commit and push to trigger deployment" -ForegroundColor White
Write-Host ""
Write-Host "🎉 Ready for deployment!" -ForegroundColor Green

Set-Location $projectRoot
