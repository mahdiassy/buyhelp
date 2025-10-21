# 🚀 BuyHelp - Smart Git Deployment Guide

## 📋 نظرة عامة

هذا الدليل يشرح كيفية استخدام Git لنشر وتحديث المشروع بطريقة احترافية وسريعة.

---

## 🎯 الإعداد الأولي (مرة واحدة فقط)

### 1️⃣ إنشاء Repository على GitHub/GitLab

#### على GitHub:
1. اذهب إلى [github.com](https://github.com)
2. اضغط **New Repository**
3. اسم المشروع: `buyhelp`
4. اختر **Private** (خاص)
5. **لا** تضف README أو .gitignore (لدينا بالفعل)
6. اضغط **Create Repository**

### 2️⃣ ربط المشروع المحلي بـ GitHub

افتح PowerShell في مجلد المشروع:

```powershell
cd C:\Users\TopCoders\Desktop\files\clingroup\buyhelp

# إضافة Remote Repository
git remote add origin https://github.com/YOUR_USERNAME/buyhelp.git

# تحقق من الربط
git remote -v
```

### 3️⃣ دفع الكود الحالي إلى GitHub

```powershell
# إضافة .gitignore الجديد
git add .gitignore
git commit -m "Add proper .gitignore"

# دفع جميع الملفات
git add .
git commit -m "Initial commit - BuyHelp project"
git branch -M main
git push -u origin main
```

### 4️⃣ إنشاء Branch للاختبار

```powershell
# إنشاء staging branch للسيرفر التجريبي
git checkout -b staging
git push -u origin staging

# إنشاء development branch للتطوير
git checkout -b development
git push -u origin development

# العودة لـ main
git checkout main
```

---

## 🔄 سير العمل اليومي

### 📝 عند تعديل الكود

#### الطريقة السريعة (استخدام السكريبت):
```powershell
.\quick-commit.ps1 "وصف التعديل"
```

#### الطريقة اليدوية:
```powershell
# التحقق من التغييرات
git status

# إضافة جميع التغييرات
git add .

# حفظ التغييرات برسالة واضحة
git commit -m "Fix: تصحيح مشكلة في صفحة المنتجات"

# دفع التغييرات
git push
```

### 🏗️ بناء المشروع قبل النشر

```powershell
# بناء Frontend و Admin
.\build.ps1 -environment staging
```

---

## 🌐 النشر على السيرفر

### المرة الأولى (Initial Setup):

#### 1. الاتصال بالسيرفر عبر SSH أو Plesk Terminal

```bash
# الانتقال لمجلد السيرفر
cd /var/www/vhosts/test.yourdomain.com/

# استنساخ المشروع من GitHub
git clone -b staging https://github.com/YOUR_USERNAME/buyhelp.git api

# الدخول للمجلد
cd api

# تثبيت Dependencies
composer install --no-dev --optimize-autoloader

# نسخ وتعديل .env
cp .env.example .env
nano .env  # عدّل البيانات

# توليد مفتاح التطبيق
php artisan key:generate

# تشغيل Migrations
php artisan migrate --seed

# ربط Storage
php artisan storage:link

# Cache
php artisan config:cache
php artisan route:cache
```

#### 2. جعل السكريبت قابل للتنفيذ

```bash
chmod +x deploy-api.sh
```

### 🔄 التحديثات المستقبلية (الطريقة السهلة):

#### على السيرفر - تشغيل سكريبت النشر:
```bash
cd /var/www/vhosts/test.yourdomain.com/api
./deploy-api.sh
```

**أو يدوياً:**
```bash
cd /var/www/vhosts/test.yourdomain.com/api
git pull origin staging
composer install --no-dev --optimize-autoloader
php artisan migrate --force
php artisan config:cache
php artisan route:cache
```

---

## 🎯 سيناريوهات عملية

### السيناريو 1: تعديل بسيط في API

```powershell
# على جهازك
cd C:\Users\TopCoders\Desktop\files\clingroup\buyhelp
git checkout development
# قم بالتعديلات...
.\quick-commit.ps1 "Fix: تصحيح خطأ في API المنتجات"

# دمج في staging
git checkout staging
git merge development
git push

# على السيرفر
./deploy-api.sh
```

### السيناريو 2: تحديث Frontend

```powershell
# على جهازك
# قم بالتعديلات في angular-frontend...
git add angular-frontend/
git commit -m "Update: تحسين واجهة صفحة المنتجات"
git push

# بناء المشروع
.\build.ps1 -environment staging

# رفع dist/ إلى السيرفر عبر FTP أو File Manager
# أو يمكن بناءه على السيرفر إذا كان Node.js متوفر
```

### السيناريو 3: تحديث شامل

```powershell
# تحديث كل شيء
git add .
git commit -m "Update: تحديثات شاملة للمشروع"
git push

# بناء Angular apps
.\build.ps1 -environment staging

# على السيرفر
./deploy-api.sh
# ثم ارفع dist folders للـ Angular
```

---

## 🔐 إعداد Git على السيرفر (Credentials)

### الطريقة 1: Personal Access Token (GitHub)

1. على GitHub: Settings → Developer settings → Personal access tokens → Generate new token
2. اختر صلاحيات: `repo` (full control)
3. انسخ الـ Token

```bash
# على السيرفر، عند أول git clone أو pull:
git clone https://github.com/YOUR_USERNAME/buyhelp.git
# Username: YOUR_GITHUB_USERNAME
# Password: [الصق الـ Token هنا، ليس كلمة السر!]

# حفظ الـ credentials:
git config --global credential.helper store
```

### الطريقة 2: SSH Keys (موصى بها)

```bash
# على السيرفر، توليد SSH key:
ssh-keygen -t ed25519 -C "your_email@example.com"
cat ~/.ssh/id_ed25519.pub

# انسخ المفتاح وأضفه في GitHub:
# Settings → SSH and GPG keys → New SSH key

# ثم استخدم SSH URL:
git clone git@github.com:YOUR_USERNAME/buyhelp.git
```

---

## 🎛️ إعداد Auto-Deployment (متقدم)

### استخدام Plesk Git Extension:

1. في Plesk، ابحث عن **Extensions**
2. ابحث عن **Git** وثبّته
3. في Domain → **Git**:
   - Add Repository
   - Repository URL: `https://github.com/YOUR_USERNAME/buyhelp.git`
   - Branch: `staging`
   - Deploy path: `/api`
4. اضبط **Deploy Actions**:
   ```bash
   composer install --no-dev
   php artisan migrate --force
   php artisan config:cache
   ```
5. فعّل **Webhook** للنشر التلقائي عند Push

الآن عند عمل `git push`، سيتم النشر تلقائياً! 🎉

---

## 🎯 الأوامر الأساسية المختصرة

| الأمر | الوصف |
|-------|-------|
| `.\quick-commit.ps1 "message"` | حفظ ودفع التغييرات بسرعة |
| `.\build.ps1` | بناء Frontend + Admin |
| `./deploy-api.sh` | نشر API على السيرفر |
| `git status` | عرض حالة الملفات |
| `git pull` | سحب آخر التحديثات |
| `git log --oneline` | عرض آخر Commits |
| `git checkout <branch>` | تبديل Branch |

---

## 🚨 حل المشاكل

### مشكلة: Merge Conflicts

```bash
# على السيرفر، إذا حدث conflict:
git stash  # حفظ التغييرات المحلية مؤقتاً
git pull
git stash pop  # استرجاع التغييرات
# حل الـ conflicts يدوياً
```

### مشكلة: رجوع لنسخة سابقة

```bash
# عرض آخر commits:
git log --oneline

# الرجوع لـ commit معين:
git reset --hard <commit-hash>

# أو:
git revert <commit-hash>
```

### مشكلة: .env تم حذفها عن طريق الخطأ

```bash
cp .env.example .env
nano .env  # أعد إدخال البيانات
php artisan key:generate
```

---

## ✅ Checklist للنشر

- [ ] تم اختبار التعديلات محلياً
- [ ] تم commit مع رسالة واضحة
- [ ] تم push إلى staging branch
- [ ] تم بناء Angular apps (إذا لزم)
- [ ] تم تشغيل deploy script على السيرفر
- [ ] تم اختبار الموقع بعد النشر
- [ ] تم التحقق من logs للأخطاء

---

## 📊 هيكل Branches الموصى به

```
main (production)
  ↑
staging (test.yourdomain.com)
  ↑
development (local)
  ↑
feature/new-payment-gateway
feature/improve-checkout
```

---

## 🎓 Best Practices

1. ✅ **استخدم رسائل commit واضحة**
   - ✅ `Fix: تصحيح مشكلة في عربة التسوق`
   - ❌ `update`

2. ✅ **اعمل commit صغيرة ومتكررة**
   - أفضل من commit واحد كبير

3. ✅ **لا ترفع ملفات حساسة**
   - تحقق من `.gitignore`

4. ✅ **اختبر في staging قبل production**
   - دائماً!

5. ✅ **احتفظ بنسخ احتياطية من .env**
   - خارج Git

---

## 🎉 المزايا النهائية

✅ **تحديث سريع**: أمر واحد لتحديث كل شيء
✅ **تتبع التغييرات**: تاريخ كامل لكل تعديل
✅ **أمان**: إمكانية الرجوع لأي نسخة
✅ **عمل جماعي**: سهولة التعاون مع فريق
✅ **نشر تلقائي**: CI/CD مستقبلاً

---

## 📞 ملاحظات مهمة

- 🔴 **لا ترفع `.env` أبداً**
- 🟡 استخدم **staging** للاختبار
- 🟢 استخدم **main** للإنتاج فقط
- 🔵 اعمل backup قبل التحديثات الكبيرة

---

**الآن عملية النشر أصبحت:**
1. تعديل الكود
2. `.\quick-commit.ps1 "الوصف"`
3. `./deploy-api.sh` على السيرفر
4. تم! 🎉
