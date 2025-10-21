# 🚀 Git Deployment Strategy for BuyHelp

## 📊 Branch Structure

```
main (production)
  ├── staging (test server)
  ├── development (local development)
  └── feature/* (new features)
```

## 🔄 Workflow

### 1. Local Development
```bash
git checkout development
# Make changes
git add .
git commit -m "descriptive message"
git push origin development
```

### 2. Deploy to Test Server (Staging)
```bash
git checkout staging
git merge development
git push origin staging
# Then pull on server
```

### 3. Deploy to Production
```bash
git checkout main
git merge staging
git push origin main
# Then pull on production server
```

## 📦 Deployment Commands

### On Server (via SSH/Terminal):

#### For API (Laravel):
```bash
cd /var/www/vhosts/yourdomain.com/api
git pull origin staging  # or main for production
composer install --no-dev --optimize-autoloader
php artisan migrate --force
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan queue:restart  # if using queues
```

#### For Frontend/Admin (Angular):
Build locally, then:
```bash
# On local machine:
npm run build --configuration production
# Upload dist/ folder or use git to pull and build on server
```

## 🔐 Environment Files

Never commit `.env` files!
- Keep `.env.example` in git
- Copy and configure on server:
  ```bash
  cp .env.example .env
  nano .env  # edit with server credentials
  php artisan key:generate
  ```

## 🎯 Quick Commands

### Push all changes:
```bash
git add .
git commit -m "Your message"
git push
```

### Pull updates on server:
```bash
cd /var/www/vhosts/yourdomain.com/api
git pull
composer install --no-dev
php artisan migrate --force
php artisan cache:clear
php artisan config:cache
```

## 🛠️ Setup Git on Server

```bash
# Configure git
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# Clone repository (first time only)
cd /var/www/vhosts/yourdomain.com/
git clone https://github.com/yourusername/buyhelp.git api

# Or initialize existing directory
cd /var/www/vhosts/yourdomain.com/api
git init
git remote add origin https://github.com/yourusername/buyhelp.git
git fetch
git checkout staging
```

## 🔄 Automated Deployment (Advanced)

### Using GitHub Actions / GitLab CI/CD:
Create `.github/workflows/deploy.yml` for auto-deployment on push.

### Using Plesk Git Extension:
1. Install Git extension in Plesk
2. Connect repository
3. Set auto-pull on push (webhook)

## 📝 Best Practices

1. ✅ Always commit to `development` first
2. ✅ Test in `staging` before `main`
3. ✅ Write clear commit messages
4. ✅ Never commit sensitive data
5. ✅ Use tags for releases: `git tag v1.0.0`
6. ✅ Keep branches in sync
7. ✅ Pull before push to avoid conflicts

## 🚨 Emergency Rollback

```bash
# On server:
git log --oneline  # find commit hash
git reset --hard <commit-hash>
# Or
git revert <commit-hash>
```
