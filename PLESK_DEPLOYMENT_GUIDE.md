# Plesk Deployment Guide - BuyHelp E-commerce Platform

## 📋 Prerequisites

### Server Requirements
- **Plesk Panel**: Obsidian or later
- **PHP**: 8.2 or higher
- **Node.js**: 18.13 or higher
- **MySQL/MariaDB**: 8.0 or higher
- **Git**: Installed on server
- **Composer**: 2.x
- **SSL Certificate**: For HTTPS (Let's Encrypt available in Plesk)

### Required Plesk Extensions
- Git
- Node.js
- Composer
- PM2 (for Node.js process management)

---

## 🚀 DEPLOYMENT STEPS

### **PHASE 1: PREPARE YOUR PLESK SERVER**

#### Step 1.1: Create Domains/Subdomains in Plesk

Create three separate domains or subdomains:

1. **API Backend**: `api.yourdomain.com`
2. **Admin Panel**: `admin.yourdomain.com`
3. **Customer Frontend**: `yourdomain.com` or `shop.yourdomain.com`

**In Plesk:**
- Go to **Websites & Domains** → **Add Domain/Subdomain**
- Create each domain/subdomain
- Enable SSL (Let's Encrypt)

---

#### Step 1.2: Install Required Extensions

**In Plesk:**
- Go to **Extensions** → **My Extensions**
- Install:
  - ✅ Git
  - ✅ Node.js (if not already installed)
  - ✅ Composer
  - ✅ PM2 Node.js Process Manager

---

#### Step 1.3: Configure PHP Version

**For API domain (`api.yourdomain.com`):**
1. Go to **Websites & Domains** → Select `api.yourdomain.com`
2. Click **PHP Settings**
3. Select **PHP 8.2** or higher
4. Enable these extensions:
   - ✅ mbstring
   - ✅ xml
   - ✅ curl
   - ✅ gd
   - ✅ zip
   - ✅ pdo_mysql
   - ✅ openssl
   - ✅ tokenizer
   - ✅ fileinfo
   - ✅ bcmath

---

#### Step 1.4: Create MySQL Database

**In Plesk:**
1. Go to **Databases** → **Add Database**
2. Create database:
   - Database name: `buyhelp_db`
   - User: `buyhelp_user`
   - Password: (strong password)
3. Note down credentials

---

### **PHASE 2: DEPLOY BACKEND API (Laravel)**

#### Step 2.1: Setup Git Repository for API

1. **In Plesk**, navigate to `api.yourdomain.com`
2. Go to **Git** (in the domain tools)
3. Click **Add Repository**
4. Configure:
   - **Repository URL**: `https://github.com/mahdiassy/buyhelp.git`
   - **Repository path**: `/API`
   - **Deploy to**: `/httpdocs`
   - **Branch**: `main`

5. **Advanced Settings**:
   - ✅ Enable **Deploy actions**
   - Add deployment actions (see Step 2.2)

---

#### Step 2.2: Configure Deployment Actions for API

In Git settings, add these **Deployment Actions**:

```bash
# Install Composer dependencies
composer install --no-dev --optimize-autoloader

# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Run migrations
php artisan migrate --force

# Clear and cache config
php artisan config:clear
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Set permissions
chmod -R 755 storage bootstrap/cache
```

---

#### Step 2.3: Configure Environment Variables

1. After initial deployment, access **File Manager**
2. Navigate to `api.yourdomain.com/httpdocs`
3. Edit `.env` file:

```env
APP_NAME="BuyHelp"
APP_ENV=production
APP_KEY=base64:XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
APP_DEBUG=false
APP_URL=https://api.yourdomain.com

LOG_CHANNEL=stack
LOG_LEVEL=error

DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=buyhelp_db
DB_USERNAME=buyhelp_user
DB_PASSWORD=your_database_password

BROADCAST_DRIVER=log
CACHE_DRIVER=file
FILESYSTEM_DISK=local
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

# AWS S3 (if using)
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

# Payment Gateways
STRIPE_KEY=your_stripe_key
STRIPE_SECRET=your_stripe_secret

PAYPAL_MODE=live
PAYPAL_CLIENT_ID=
PAYPAL_SECRET=

RAZORPAY_KEY=
RAZORPAY_SECRET=

MOLLIE_KEY=

# Mail Configuration
MAIL_MAILER=smtp
MAIL_HOST=smtp.yourdomain.com
MAIL_PORT=587
MAIL_USERNAME=
MAIL_PASSWORD=
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=noreply@yourdomain.com
MAIL_FROM_NAME="${APP_NAME}"
```

---

#### Step 2.4: Configure Document Root for API

1. In Plesk, go to `api.yourdomain.com` → **Hosting Settings**
2. Change **Document root** to: `/httpdocs/public`
3. Save

---

#### Step 2.5: Setup Storage Link

**Via SSH or Plesk Terminal:**
```bash
cd /var/www/vhosts/yourdomain.com/api.yourdomain.com/httpdocs
php artisan storage:link
```

---

#### Step 2.6: Configure .htaccess (if needed)

Ensure `/httpdocs/public/.htaccess` exists:

```apache
<IfModule mod_rewrite.c>
    <IfModule mod_negotiation.c>
        Options -MultiViews -Indexes
    </IfModule>

    RewriteEngine On

    # Handle Authorization Header
    RewriteCond %{HTTP:Authorization} .
    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

    # Redirect Trailing Slashes If Not A Folder...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_URI} (.+)/$
    RewriteRule ^ %1 [L,R=301]

    # Send Requests To Front Controller...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.php [L]
</IfModule>
```

---

### **PHASE 3: DEPLOY ANGULAR ADMIN PANEL**

#### Step 3.1: Build Admin Panel Locally

**On your local machine:**

```powershell
# Navigate to admin folder
cd angular-admin

# Install dependencies
npm install

# Update environment files
# Edit src/environments/environment.prod.ts
```

**In `src/environments/environment.prod.ts`:**
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.yourdomain.com/graphql'
};
```

**Build for production:**
```powershell
npm run build
```

This creates `dist/fastkart-admin-rest/` folder.

---

#### Step 3.2: Deploy Admin Panel to Plesk

**Option A: Via Git (Recommended)**

1. In Plesk, go to `admin.yourdomain.com` → **Git**
2. Add Repository:
   - URL: `https://github.com/mahdiassy/buyhelp.git`
   - Path: `/angular-admin`
   - Deploy to: `/httpdocs`

3. **Deployment Actions**:
```bash
# Install dependencies
npm install --production

# Build application
npm run build

# Move built files to root
rm -rf ../httpdocs-temp
mv dist/fastkart-admin-rest ../httpdocs-temp
rm -rf ../httpdocs/*
mv ../httpdocs-temp/* ../httpdocs/
rm -rf ../httpdocs-temp
```

**Option B: Manual Upload**

1. Upload the contents of `dist/fastkart-admin-rest/` to `admin.yourdomain.com/httpdocs/`
2. Via Plesk **File Manager** or FTP

---

#### Step 3.3: Configure Admin Panel .htaccess

Create/edit `admin.yourdomain.com/httpdocs/.htaccess`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  
  # Redirect to https
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
  
  # If an existing asset or directory is requested go to it as it is
  RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]
  RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d
  RewriteRule ^ - [L]

  # If the requested resource doesn't exist, use index.html
  RewriteRule ^ /index.html
</IfModule>

# Security Headers
<IfModule mod_headers.c>
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-Content-Type-Options "nosniff"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

---

### **PHASE 4: DEPLOY ANGULAR FRONTEND**

#### Step 4.1: Build Frontend Locally

**On your local machine:**

```powershell
# Navigate to frontend folder
cd angular-frontend

# Install dependencies
npm install

# Update environment files
# Edit src/environments/environment.prod.ts
```

**In `src/environments/environment.prod.ts`:**
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.yourdomain.com/graphql'
};
```

**Build for production:**
```powershell
npm run build
```

---

#### Step 4.2: Deploy Frontend to Plesk

**Option A: Via Git**

1. In Plesk, go to `yourdomain.com` → **Git**
2. Add Repository:
   - URL: `https://github.com/mahdiassy/buyhelp.git`
   - Path: `/angular-frontend`
   - Deploy to: `/httpdocs`

3. **Deployment Actions**:
```bash
# Install dependencies
npm install --production

# Build application
npm run build

# Move built files to root
rm -rf ../httpdocs-temp
mv dist/fastkart-frontend-rest ../httpdocs-temp
rm -rf ../httpdocs/*
mv ../httpdocs-temp/* ../httpdocs/
rm -rf ../httpdocs-temp
```

**Option B: Manual Upload**

1. Upload contents of `dist/fastkart-frontend-rest/` to `yourdomain.com/httpdocs/`

---

#### Step 4.3: Configure Frontend .htaccess

Create/edit `yourdomain.com/httpdocs/.htaccess`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  
  # Redirect to https
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
  
  # If an existing asset or directory is requested go to it as it is
  RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]
  RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d
  RewriteRule ^ - [L]

  # If the requested resource doesn't exist, use index.html
  RewriteRule ^ /index.html
</IfModule>

# Enable Gzip Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

### **PHASE 5: CONFIGURE CORS (API)**

Edit `API/config/cors.php`:

```php
<?php

return [
    'paths' => ['api/*', 'graphql', 'sanctum/csrf-cookie'],
    'allowed_methods' => ['*'],
    'allowed_origins' => [
        'https://yourdomain.com',
        'https://admin.yourdomain.com',
        'https://shop.yourdomain.com'
    ],
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => true,
];
```

---

### **PHASE 6: SETUP CRON JOBS (Laravel Scheduler)**

1. In Plesk, go to `api.yourdomain.com`
2. Click **Scheduled Tasks** (Cron Jobs)
3. Add new task:

```
* * * * * cd /var/www/vhosts/yourdomain.com/api.yourdomain.com/httpdocs && php artisan schedule:run >> /dev/null 2>&1
```

---

### **PHASE 7: SETUP QUEUE WORKERS (Optional)**

If using queues, setup supervisor or use Plesk scheduled task:

```bash
* * * * * cd /var/www/vhosts/yourdomain.com/api.yourdomain.com/httpdocs && php artisan queue:work --tries=3 --timeout=60
```

---

### **PHASE 8: SECURITY CONFIGURATIONS**

#### Step 8.1: Protect .env File

Add to `API/.htaccess`:
```apache
<Files .env>
    Order allow,deny
    Deny from all
</Files>
```

#### Step 8.2: Disable Directory Listing

In each `.htaccess`:
```apache
Options -Indexes
```

#### Step 8.3: Setup Firewall Rules in Plesk

- Go to **Tools & Settings** → **Security** → **Firewall**
- Ensure only necessary ports are open (80, 443, 22)

---

## 🔄 CONTINUOUS DEPLOYMENT

### Auto-Deploy on Git Push

In Plesk Git settings for each repository:
1. Enable **Deploy on push**
2. Add webhook URL to your GitHub repository:
   - Go to GitHub repo → **Settings** → **Webhooks**
   - Add Plesk webhook URL

---

## ✅ POST-DEPLOYMENT CHECKLIST

### API Backend
- [ ] Database connected and migrated
- [ ] `.env` file configured correctly
- [ ] Storage link created
- [ ] Permissions set (755 for storage/bootstrap/cache)
- [ ] Cron job running
- [ ] SSL certificate active
- [ ] GraphQL endpoint accessible: `https://api.yourdomain.com/graphql`

### Admin Panel
- [ ] Built with production environment
- [ ] API URL configured correctly
- [ ] SSL certificate active
- [ ] All routes working (refresh test)
- [ ] Can login successfully

### Customer Frontend
- [ ] Built with production environment
- [ ] API URL configured correctly
- [ ] SSL certificate active
- [ ] All routes working
- [ ] Products displaying correctly

### General
- [ ] CORS configured properly
- [ ] Payment gateways tested
- [ ] Email sending works
- [ ] File uploads work (test product images)
- [ ] All three domains accessible via HTTPS

---

## 🐛 TROUBLESHOOTING

### Issue: 500 Error on API
**Solution:**
```bash
cd /var/www/vhosts/yourdomain.com/api.yourdomain.com/httpdocs
php artisan config:clear
php artisan cache:clear
chmod -R 755 storage bootstrap/cache
```

### Issue: Angular Routes Not Working (404)
**Solution:** Check `.htaccess` file exists and mod_rewrite is enabled in Plesk

### Issue: CORS Errors
**Solution:** 
- Update `config/cors.php` with correct domains
- Run `php artisan config:cache`

### Issue: Database Connection Failed
**Solution:**
- Verify database credentials in `.env`
- Check database exists in Plesk
- Ensure user has all privileges

### Issue: CSS/JS Not Loading
**Solution:**
- Clear browser cache
- Check file permissions (644 for files, 755 for directories)
- Verify base href in `index.html`

---

## 📞 SUPPORT

### Plesk Documentation
- Git Extension: https://docs.plesk.com/en-US/obsidian/administrator-guide/website-management/git.70560/
- Node.js: https://docs.plesk.com/en-US/obsidian/administrator-guide/website-management/nodejs.74387/

### Laravel Deployment
- https://laravel.com/docs/11.x/deployment

### Angular Deployment
- https://angular.io/guide/deployment

---

## 📝 NOTES

- **Build locally first**: It's recommended to build Angular apps locally and upload the dist folder rather than building on the server (saves server resources)
- **Database Backups**: Setup automatic backups in Plesk
- **Monitoring**: Enable Plesk monitoring for uptime alerts
- **Updates**: Always test updates in a staging environment first

---

**Created**: October 22, 2025
**Project**: BuyHelp E-commerce Platform
**Deployment Method**: Plesk with Git Integration
