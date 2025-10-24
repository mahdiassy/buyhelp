# 🚀 Your Personal Plesk Deployment Checklist

**Server IP**: 212.132.119.199  
**Plesk Panel**: https://212.132.119.199/smb/web/view  
**GitHub Repo**: https://github.com/mahdiassy/buyhelp.git

---

## ✅ STEP-BY-STEP DEPLOYMENT (Check each box as you complete)

### 🔧 PHASE 1: INITIAL PLESK SETUP (30 minutes)

#### ☐ **1.1 Access Plesk Panel**
- [ ] Go to: https://212.132.119.199/smb/web/view
- [ ] Login with your credentials
- [ ] You should see the main Plesk dashboard

#### ☐ **1.2 Create Your Domains**
You need to create 3 domains/subdomains:

- [ ] **API Backend**: Create `api.yourdomain.com` (or `api.buyhelp.com`)
  - Click: **Websites & Domains** → **Add Domain**
  - Enter domain name
  - Enable SSL certificate (Let's Encrypt)
  
- [ ] **Admin Panel**: Create `admin.yourdomain.com`
  - Same process as above
  
- [ ] **Customer Store**: Create `shop.yourdomain.com` or use main domain
  - Same process as above

**🔴 IMPORTANT**: Write down your domain names here:
- API: __________________.com
- Admin: __________________.com  
- Store: __________________.com

#### ☐ **1.3 Install Required Extensions**
- [ ] Go to **Extensions** → **My Extensions**
- [ ] Click **Add Extension** and install:
  - [ ] Git Extension
  - [ ] Node.js Extension
  - [ ] Composer Extension
  - [ ] PM2 Node.js Process Manager (search for it)

#### ☐ **1.4 Configure PHP for API**
- [ ] Go to **Websites & Domains**
- [ ] Click on your API domain (`api.yourdomain.com`)
- [ ] Click **PHP Settings**
- [ ] Select **PHP 8.2** or **8.3**
- [ ] Enable these extensions (scroll down in PHP settings):
  - [ ] mbstring
  - [ ] xml
  - [ ] curl
  - [ ] gd
  - [ ] zip
  - [ ] pdo_mysql
  - [ ] openssl
  - [ ] tokenizer
  - [ ] fileinfo
  - [ ] bcmath
- [ ] Click **OK** to save

#### ☐ **1.5 Create MySQL Database**
- [ ] Go to **Databases** → **Add Database**
- [ ] Fill in:
  - Database name: `buyhelp_db`
  - Username: `buyhelp_user`
  - Password: (create a strong password)
- [ ] Click **OK**
- [ ] **WRITE DOWN YOUR CREDENTIALS**:
  - Database: buyhelp_db
  - User: buyhelp_user
  - Password: ________________
  - Host: localhost

---

### 🔨 PHASE 2: DEPLOY LARAVEL API (45 minutes)

#### ☐ **2.1 Setup Git Repository for API**
- [ ] Go to **Websites & Domains**
- [ ] Click on your API domain (`api.yourdomain.com`)
- [ ] Look for **Git** in the tools section (might be under "More" or "Developer Tools")
- [ ] Click **Add Repository**
- [ ] Fill in:
  - **Repository URL**: `https://github.com/mahdiassy/buyhelp.git`
  - **Repository path in repository**: `/API` (exactly as written)
  - **Deploy to**: leave as `/httpdocs` or `/public_html`
  - **Branch**: `main`
- [ ] Click **OK**

#### ☐ **2.2 Add Deployment Actions**
Still in Git settings for API:
- [ ] Click on the repository you just added
- [ ] Find **Deployment Actions** or **Additional Deployment Actions**
- [ ] Click **Add Action** or **Configure**
- [ ] Paste this script:

```bash
composer install --no-dev --optimize-autoloader
cp .env.example .env
php artisan key:generate --force
php artisan config:clear
chmod -R 755 storage bootstrap/cache
```

- [ ] Click **OK** to save

#### ☐ **2.3 Deploy the Repository**
- [ ] Click **Deploy** or **Pull** button
- [ ] Wait for deployment to complete (may take 2-5 minutes)
- [ ] Check for any errors in the log

#### ☐ **2.4 Configure .env File**
- [ ] Go to **Files** → **File Manager**
- [ ] Navigate to: `api.yourdomain.com/httpdocs`
- [ ] Find and click on `.env` file
- [ ] Click **Edit**
- [ ] Update these values:

```env
APP_URL=https://api.yourdomain.com
DB_DATABASE=buyhelp_db
DB_USERNAME=buyhelp_user
DB_PASSWORD=your_password_from_step_1.5
```

- [ ] Click **OK** to save

#### ☐ **2.5 Change Document Root**
- [ ] Go back to **Websites & Domains**
- [ ] Click on API domain (`api.yourdomain.com`)
- [ ] Click **Hosting Settings**
- [ ] Find **Document root** field
- [ ] Change it to: `/httpdocs/public` (add `/public` at the end)
- [ ] Click **OK**

#### ☐ **2.6 Run Database Migration**
- [ ] In Plesk, go to **Websites & Domains**
- [ ] Click on API domain
- [ ] Find **Scheduled Tasks** or **SSH Terminal Access**
- [ ] If you have SSH, use it. Otherwise, use Plesk Terminal
- [ ] Run these commands one by one:

```bash
cd /var/www/vhosts/yourdomain.com/api.yourdomain.com/httpdocs
php artisan migrate --force
php artisan storage:link
php artisan config:cache
```

#### ☐ **2.7 Test API**
- [ ] Open browser
- [ ] Go to: `https://api.yourdomain.com`
- [ ] You should see Laravel welcome page or JSON response (not an error)

---

### 🎨 PHASE 3: DEPLOY ADMIN PANEL (30 minutes)

#### ☐ **3.1 Build Admin Panel Locally (on your computer)**
Open PowerShell in your project:

```powershell
cd C:\Users\TopCoders\Desktop\files\clingroup\buyhelp\angular-admin
npm install
```

- [ ] Wait for installation to complete

#### ☐ **3.2 Update API URL**
- [ ] Open file: `angular-admin/src/environments/environment.prod.ts`
- [ ] Change `apiUrl` to your API domain:
```typescript
apiUrl: 'https://api.yourdomain.com/graphql'
```
- [ ] Save file

#### ☐ **3.3 Build for Production**
```powershell
npm run build
```
- [ ] Wait 2-5 minutes for build to complete
- [ ] You'll see a `dist` folder created

#### ☐ **3.4 Upload to Plesk**
- [ ] In Plesk, go to **Websites & Domains**
- [ ] Click on admin domain (`admin.yourdomain.com`)
- [ ] Go to **Files** → **File Manager**
- [ ] Navigate to `/httpdocs` folder
- [ ] Delete everything inside (select all, delete)
- [ ] Click **Upload** button
- [ ] Select all files from `angular-admin/dist/fastkart-admin-rest/` folder on your computer
- [ ] Upload (may take 5-10 minutes depending on internet speed)

#### ☐ **3.5 Test Admin Panel**
- [ ] Open browser
- [ ] Go to: `https://admin.yourdomain.com`
- [ ] You should see the login page

---

### 🛍️ PHASE 4: DEPLOY CUSTOMER FRONTEND (30 minutes)

#### ☐ **4.1 Build Frontend Locally**
Open PowerShell:

```powershell
cd C:\Users\TopCoders\Desktop\files\clingroup\buyhelp\angular-frontend
npm install
```

- [ ] Wait for installation

#### ☐ **4.2 Update API URL**
- [ ] Open: `angular-frontend/src/environments/environment.prod.ts`
- [ ] Update:
```typescript
apiUrl: 'https://api.yourdomain.com/graphql'
```
- [ ] Save

#### ☐ **4.3 Build Frontend**
```powershell
npm run build
```
- [ ] Wait for build to complete

#### ☐ **4.4 Upload to Plesk**
- [ ] In Plesk, go to your store domain (`shop.yourdomain.com`)
- [ ] Go to **Files** → **File Manager** → `/httpdocs`
- [ ] Delete everything
- [ ] Upload all files from `angular-frontend/dist/fastkart-frontend/`

#### ☐ **4.5 Test Frontend**
- [ ] Go to: `https://shop.yourdomain.com`
- [ ] You should see your store!

---

### 🔒 PHASE 5: FINAL SECURITY & CONFIGURATION (15 minutes)

#### ☐ **5.1 Force HTTPS**
For each domain:
- [ ] Go to **Hosting Settings**
- [ ] Enable **Permanent SEO-safe 301 redirect from HTTP to HTTPS**
- [ ] Click **OK**

#### ☐ **5.2 Setup CORS for API**
- [ ] Go to API file manager
- [ ] Edit `config/cors.php`
- [ ] Add your frontend domains to `allowed_origins`

#### ☐ **5.3 Verify Everything**
- [ ] API works: https://api.yourdomain.com
- [ ] Admin panel loads: https://admin.yourdomain.com
- [ ] Store loads: https://shop.yourdomain.com
- [ ] Can login to admin
- [ ] Can browse products on store

---

## 🆘 QUICK TROUBLESHOOTING

### Problem: "500 Internal Server Error" on API
**Solution**:
1. Check PHP version is 8.2+
2. Check document root is `/httpdocs/public`
3. Check file permissions: `chmod -R 755 storage`
4. Check `.env` database credentials

### Problem: "White page" on Angular apps
**Solution**:
1. Check browser console (F12) for errors
2. Verify API URL in environment.prod.ts
3. Clear browser cache
4. Check if files uploaded correctly

### Problem: "Database connection failed"
**Solution**:
1. Verify database exists in Plesk
2. Check `.env` file has correct credentials
3. Try `DB_HOST=localhost` or `DB_HOST=127.0.0.1`

### Problem: "CORS error" in browser
**Solution**:
1. Edit API `config/cors.php`
2. Add your frontend domains
3. Run: `php artisan config:cache`

---

## 📞 NEED HELP?

If you get stuck on any step:
1. Take a screenshot of the error
2. Note which step you're on
3. Check the full guide: `PLESK_DEPLOYMENT_GUIDE.md`

**You've got this! 🚀**
