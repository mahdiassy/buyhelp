#!/bin/bash
# Plesk Deployment Script for API (Laravel)
# This script should be added to Git Deployment Actions in Plesk

echo "🚀 Starting API deployment..."

# Install Composer dependencies
echo "📦 Installing Composer dependencies..."
composer install --no-dev --optimize-autoloader --no-interaction

# Check if .env exists, if not copy from example
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cp .env.example .env
    php artisan key:generate --force
fi

# Clear all caches
echo "🧹 Clearing caches..."
php artisan config:clear
php artisan cache:clear
php artisan view:clear
php artisan route:clear

# Run database migrations
echo "🗄️ Running database migrations..."
php artisan migrate --force

# Create storage link if not exists
if [ ! -L public/storage ]; then
    echo "🔗 Creating storage link..."
    php artisan storage:link
fi

# Cache configuration for production
echo "⚡ Caching configuration..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Set proper permissions
echo "🔒 Setting permissions..."
chmod -R 755 storage
chmod -R 755 bootstrap/cache

# Install GraphQL Lighthouse if needed
echo "📡 Installing GraphQL dependencies..."
php artisan lighthouse:clear-cache
php artisan lighthouse:cache

echo "✅ API deployment completed successfully!"
