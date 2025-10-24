# Quick Build Script for Angular Frontend (Customer Store)
# Run this on your LOCAL machine before uploading to Plesk

Write-Host "🛍️ Building Angular Frontend..." -ForegroundColor Cyan

# Navigate to frontend directory
Set-Location -Path "$PSScriptRoot"

# Check if node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
    npm install
}

# Build for production
Write-Host "🔨 Building for production..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build completed successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📂 Built files are in: dist/fastkart-frontend/" -ForegroundColor Green
    Write-Host ""
    Write-Host "📤 Next steps:" -ForegroundColor Cyan
    Write-Host "1. Go to Plesk panel: https://212.132.119.199/smb/web/view"
    Write-Host "2. Navigate to your store domain → Files → File Manager"
    Write-Host "3. Go to /httpdocs folder"
    Write-Host "4. Delete all existing files"
    Write-Host "5. Upload all files from dist/fastkart-frontend/"
    Write-Host ""
} else {
    Write-Host "❌ Build failed! Check errors above." -ForegroundColor Red
}
