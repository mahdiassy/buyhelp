#!/bin/bash

# ================================================
# BuyHelp API Deployment Script (Staging/Test)
# ================================================

echo "🚀 Starting API deployment..."

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Configuration
PROJECT_PATH="/var/www/vhosts/test.yourdomain.com/api"
BRANCH="staging"

# Navigate to project
cd $PROJECT_PATH || exit

echo -e "${YELLOW}📥 Pulling latest changes from Git...${NC}"
git pull origin $BRANCH

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Git pull failed!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Git pull successful${NC}"

# Install/Update Composer dependencies
echo -e "${YELLOW}📦 Installing Composer dependencies...${NC}"
composer install --no-dev --optimize-autoloader --no-interaction

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Composer install failed!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Composer dependencies installed${NC}"

# Run migrations
echo -e "${YELLOW}🗄️  Running database migrations...${NC}"
php artisan migrate --force

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Migrations failed!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Migrations completed${NC}"

# Clear and cache config
echo -e "${YELLOW}🔄 Clearing and caching...${NC}"
php artisan config:clear
php artisan cache:clear
php artisan view:clear
php artisan route:clear

php artisan config:cache
php artisan route:cache
php artisan view:cache

# GraphQL cache
php artisan lighthouse:cache

echo -e "${GREEN}✅ Cache cleared and rebuilt${NC}"

# Fix permissions
echo -e "${YELLOW}🔐 Fixing permissions...${NC}"
chmod -R 755 storage bootstrap/cache
chmod -R 775 storage/logs

echo -e "${GREEN}✅ Permissions fixed${NC}"

# Restart queue workers (if using queues)
# php artisan queue:restart

echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
echo -e "${GREEN}🌐 API is now updated at: https://api.test.yourdomain.com${NC}"
