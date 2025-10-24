# 🚀 PLESK DEPLOYMENT - QUICK START (30 SECONDS READ)

## What You're Doing
You're deploying 3 parts of your e-commerce platform:
1. **API** (Backend) - Handles data, database, business logic
2. **Admin Panel** - Where you manage products, orders, users
3. **Store Frontend** - What customers see and shop on

---

## 📍 Your Information
- **Plesk Panel**: https://212.132.119.199/smb/web/view
- **GitHub**: https://github.com/mahdiassy/buyhelp.git
- **Documentation**: See `PLESK_DEPLOYMENT_CHECKLIST.md`

---

## ⚡ Super Quick Overview (2 Hours Total)

### Part 1: Setup Plesk (30 min)
```
1. Login to Plesk
2. Create 3 domains (api, admin, store)
3. Install Git, Composer, Node.js extensions
4. Create a database
```

### Part 2: Deploy API (45 min)
```
1. Use Git to pull from GitHub → API folder
2. Update .env file with database info
3. Change document root to /public
4. Run migrations
```

### Part 3: Deploy Admin (30 min)
```
1. On your computer: npm run build in angular-admin
2. Upload built files to Plesk
3. Done!
```

### Part 4: Deploy Store (30 min)
```
1. On your computer: npm run build in angular-frontend
2. Upload built files to Plesk
3. Done!
```

---

## 🎯 Where To Start

**Open this file first**: `PLESK_DEPLOYMENT_CHECKLIST.md`

It has step-by-step checkboxes for everything. Just follow it from top to bottom!

---

## 🆘 Got Stuck?

1. Read the error message carefully
2. Check `PLESK_DEPLOYMENT_GUIDE.md` for detailed explanations
3. Google the specific error
4. Check Plesk documentation

---

## 📦 Helper Scripts I Created For You

### Build Admin Panel:
```powershell
cd angular-admin
.\build-for-plesk.ps1
```

### Build Frontend:
```powershell
cd angular-frontend
.\build-for-plesk.ps1
```

These scripts will build your apps and tell you what to do next!

---

## 🔑 Key Things to Remember

1. **Domain Names**: Write them down! You'll need them multiple times
2. **Database Password**: Don't lose it!
3. **Document Root**: For API, it MUST be `/httpdocs/public` (with /public)
4. **API URL**: Must be updated in Angular apps before building
5. **HTTPS**: Always use https:// in production

---

## ✅ How to Know It's Working

- **API Working**: Visit https://api.yourdomain.com → should see Laravel page
- **Admin Working**: Visit https://admin.yourdomain.com → should see login page
- **Store Working**: Visit https://shop.yourdomain.com → should see your store

---

## 📚 Files to Reference

| File | Purpose |
|------|---------|
| `PLESK_DEPLOYMENT_CHECKLIST.md` | Step-by-step with checkboxes (START HERE) |
| `PLESK_DEPLOYMENT_GUIDE.md` | Detailed explanations |
| `angular-admin/build-for-plesk.ps1` | Build admin panel quickly |
| `angular-frontend/build-for-plesk.ps1` | Build frontend quickly |
| `API/plesk-deploy.sh` | Copy this to Plesk deployment actions |

---

**You don't need to be an expert. Just follow the checklist. One step at a time. You've got this! 💪**
