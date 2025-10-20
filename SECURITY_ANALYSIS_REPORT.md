# Security Analysis Report / تقرير تحليل الأمان

## English Version

### Complete Security Implementation Overview

Your **BuyHelp** e-commerce platform implements a comprehensive **multi-layer security architecture** across three main components: Laravel API Backend, Angular Admin Panel, and Angular Frontend. Here's a detailed breakdown:

---

## 1. Authentication & Authorization Security

### A. Laravel Sanctum Token-Based Authentication
- **Location**: `API/config/sanctum.php`, `API/config/auth.php`
- **Implementation**:
  - Uses **Laravel Sanctum** for API authentication
  - Token expiration: **7200 minutes** (5 days)
  - Stateful domains configured for SPA authentication
  - Guards: `web` (session-based) and `api` (token-based)
  
**Security Features**:
- Bearer token authentication for API requests
- Token-based stateless authentication
- Automatic token expiration
- CSRF protection for stateful requests

### B. Role-Based Access Control (RBAC)
- **Location**: `API/config/permission.php`, `API/app/Policies/`
- **Implementation**:
  - **Spatie Permission Package** for roles and permissions
  - 32+ Policy classes for resource-level authorization
  - Granular permissions (view, create, edit, destroy)
  
**Example Policies**:
- `UserPolicy`, `OrderPolicy`, `ProductPolicy`
- `StorePolicy`, `RefundPolicy`, `CouponPolicy`

**Security Features**:
- Fine-grained authorization checks
- Policy-based access control
- Permission inheritance through roles
- Model-level authorization

---

## 2. Password Security

### A. Bcrypt Hashing
- **Location**: `API/config/hashing.php`
- **Implementation**:
  - Default driver: **Bcrypt**
  - Cost factor: **10 rounds** (configurable via `BCRYPT_ROUNDS`)
  - Alternative support: Argon2i, Argon2id
  
**Security Features**:
- Industry-standard password hashing
- Automatic salt generation
- Configurable work factor
- Password rehashing on login when algorithm changes

### B. Password Requirements
- Minimum complexity enforced
- Reset tokens expire after 60 minutes
- Throttling: 60-second cooldown between reset requests

---

## 3. Cross-Site Request Forgery (CSRF) Protection

### A. CSRF Token Verification
- **Location**: `API/app/Http/Middleware/VerifyCsrfToken.php`
- **Implementation**:
  - Automatic CSRF token validation
  - **Exceptions**: `/graphql` endpoint (handles auth differently)
  
**Security Features**:
- Token-based CSRF protection for web routes
- Cookie encryption via `EncryptCookies` middleware
- Session-based token verification

---

## 4. Cross-Origin Resource Sharing (CORS)

### A. CORS Configuration
- **Location**: `API/config/cors.php`, `API/app/Http/Middleware/Cors.php`
- **Configuration**:
  ```php
  'paths' => ['api/*', '*', 'sanctum/csrf-cookie', 'graphql']
  'allowed_methods' => ['*']
  'allowed_origins' => ['*']  // ⚠️ Should be restricted in production
  'allowed_headers' => ['*']
  ```

**⚠️ Security Recommendation**: 
- `allowed_origins => ['*']` should be restricted to specific domains in production
- Example: `['https://yourdomain.com', 'https://admin.yourdomain.com']`

---

## 5. HTTP Security Middleware Stack

### A. Global Middleware
- **Location**: `API/app/Http/Kernel.php`

**Active Protections**:
1. **TrustProxies**: Configures trusted proxy headers
2. **HandleCors**: CORS policy enforcement
3. **PreventRequestsDuringMaintenance**: Blocks requests during maintenance
4. **ValidatePostSize**: Prevents oversized POST requests
5. **TrimStrings**: Sanitizes input data
6. **ConvertEmptyStringsToNull**: Normalizes empty inputs

### B. Web Middleware Group
1. **EncryptCookies**: Encrypts all cookies
2. **StartSession**: Manages user sessions
3. **VerifyCsrfToken**: CSRF protection
4. **ShareErrorsFromSession**: Error handling

### C. API Middleware Group
1. **SubstituteBindings**: Route model binding
2. **Cors**: Custom CORS handling
3. **Throttle**: Rate limiting (commented but available)

### D. Route-Specific Middleware
- `auth`: Authentication check
- `can`: Authorization check
- `throttle`: Rate limiting
- `verified`: Email verification
- `signed`: Signed URL validation
- `localization`: Multi-language support

---

## 6. Frontend Security (Angular)

### A. Authentication Guard
- **Location**: 
  - `angular-admin/src/app/core/guard/auth.guard.ts`
  - `angular-frontend/src/app/core/guard/auth.guard.ts`

**Implementation**:
```typescript
export class AuthGuard {
  canActivate(): boolean {
    if(!this.store.selectSnapshot(state => state.auth && state.auth.access_token)) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }
}
```

**Security Features**:
- Prevents unauthorized route access
- Automatic redirect to login
- State-based authentication check

### B. HTTP Interceptor
- **Location**: 
  - `angular-admin/src/app/core/interceptors/auth.interceptor.ts`

**Implementation**:
```typescript
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.store.selectSnapshot(state => state.auth.access_token);
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(req);
  }
}
```

**Security Features**:
- Automatic Bearer token injection
- Centralized token management
- Request cloning for security

---

## 7. GraphQL Security

### A. Authentication Middleware
- **Location**: `API/graphql/schema.graphql`
- **Implementation**: 
  - GraphQL endpoints exclude CSRF (alternative auth)
  - Uses Bearer token authentication
  - Type-safe schema definitions

**Security Features**:
- Directives for authentication (`@auth`, `@guard`)
- Query complexity limits
- Rate limiting support

---

## 8. Data Encryption

### A. Cookie Encryption
- **Location**: `API/app/Http/Middleware/EncryptCookies.php`
- All cookies automatically encrypted/decrypted

### B. Application Key
- Laravel application key for encryption
- Used for session encryption, cookie encryption, password resets

---

## 9. Input Validation & Sanitization

### A. Automatic Sanitization
1. **TrimStrings**: Removes whitespace
2. **ConvertEmptyStringsToNull**: Normalizes empty inputs

### B. ReCAPTCHA Protection
- **Location**: `API/app/Rules/ReCaptcha.php`
- Google ReCAPTCHA validation for forms
- Prevents bot submissions

---

## 10. Session Security

### A. Session Configuration
- Secure session cookies
- HTTP-only cookies (prevents XSS)
- SameSite cookie attribute
- Session lifetime management

---

## 11. Database Security

### A. Query Protection
- Eloquent ORM prevents SQL injection
- Prepared statements by default
- No raw queries without parameter binding

### B. Model Authorization
- Policy-based access to models
- Observer pattern for audit trails

---

## Security Recommendations

### High Priority
1. ✅ **Restrict CORS**: Change `allowed_origins => ['*']` to specific domains
2. ✅ **Enable Rate Limiting**: Uncomment `throttle:api` in Kernel
3. ✅ **HTTPS Only**: Enforce HTTPS in production
4. ✅ **Environment Variables**: Never commit `.env` file

### Medium Priority
5. ⚠️ **Two-Factor Authentication**: Consider implementing 2FA
6. ⚠️ **API Versioning**: Version your API endpoints
7. ⚠️ **Logging**: Implement comprehensive security logging
8. ⚠️ **Content Security Policy**: Add CSP headers

### Best Practices
9. ✓ **Regular Updates**: Keep Laravel and packages updated
10. ✓ **Security Audits**: Regular penetration testing
11. ✓ **Backup Strategy**: Encrypted database backups
12. ✓ **Monitoring**: Implement intrusion detection

---

## النسخة العربية

### نظرة عامة شاملة على تطبيق الأمان

منصة **BuyHelp** للتجارة الإلكترونية تطبق **بنية أمان متعددة الطبقات** عبر ثلاثة مكونات رئيسية: Laravel API Backend، Angular Admin Panel، و Angular Frontend. إليك تفصيل شامل:

---

## 1. أمان المصادقة والترخيص

### أ. مصادقة Laravel Sanctum القائمة على الرموز
- **الموقع**: `API/config/sanctum.php`, `API/config/auth.php`
- **التطبيق**:
  - يستخدم **Laravel Sanctum** للمصادقة على API
  - انتهاء صلاحية الرمز: **7200 دقيقة** (5 أيام)
  - نطاقات ذات حالة مكونة لمصادقة SPA
  - حراس: `web` (قائم على الجلسة) و `api` (قائم على الرمز)
  
**ميزات الأمان**:
- مصادقة رمز Bearer لطلبات API
- مصادقة بدون حالة قائمة على الرمز
- انتهاء صلاحية الرمز التلقائي
- حماية CSRF للطلبات ذات الحالة

### ب. التحكم في الوصول القائم على الأدوار (RBAC)
- **الموقع**: `API/config/permission.php`, `API/app/Policies/`
- **التطبيق**:
  - **حزمة Spatie Permission** للأدوار والأذونات
  - أكثر من 32 فئة سياسة للترخيص على مستوى الموارد
  - أذونات دقيقة (عرض، إنشاء، تحرير، حذف)
  
**أمثلة على السياسات**:
- `UserPolicy`, `OrderPolicy`, `ProductPolicy`
- `StorePolicy`, `RefundPolicy`, `CouponPolicy`

**ميزات الأمان**:
- فحوصات ترخيص دقيقة
- التحكم في الوصول القائم على السياسة
- وراثة الأذونات من خلال الأدوار
- ترخيص على مستوى النموذج

---

## 2. أمان كلمات المرور

### أ. تشفير Bcrypt
- **الموقع**: `API/config/hashing.php`
- **التطبيق**:
  - برنامج التشغيل الافتراضي: **Bcrypt**
  - عامل التكلفة: **10 جولات** (قابل للتكوين عبر `BCRYPT_ROUNDS`)
  - دعم بديل: Argon2i, Argon2id
  
**ميزات الأمان**:
- تشفير كلمة المرور بالمعايير الصناعية
- توليد الملح التلقائي
- عامل عمل قابل للتكوين
- إعادة تشفير كلمة المرور عند تسجيل الدخول عند تغيير الخوارزمية

### ب. متطلبات كلمة المرور
- الحد الأدنى من التعقيد المفروض
- تنتهي صلاحية رموز إعادة التعيين بعد 60 دقيقة
- الخنق: فترة تهدئة 60 ثانية بين طلبات إعادة التعيين

---

## 3. الحماية من التزوير عبر المواقع (CSRF)

### أ. التحقق من رمز CSRF
- **الموقع**: `API/app/Http/Middleware/VerifyCsrfToken.php`
- **التطبيق**:
  - التحقق التلقائي من رمز CSRF
  - **الاستثناءات**: نقطة نهاية `/graphql` (تتعامل مع المصادقة بشكل مختلف)
  
**ميزات الأمان**:
- حماية CSRF القائمة على الرمز لمسارات الويب
- تشفير ملفات تعريف الارتباط عبر `EncryptCookies` middleware
- التحقق من الرمز القائم على الجلسة

---

## 4. مشاركة الموارد عبر الأصول (CORS)

### أ. تكوين CORS
- **الموقع**: `API/config/cors.php`, `API/app/Http/Middleware/Cors.php`
- **التكوين**:
  ```php
  'paths' => ['api/*', '*', 'sanctum/csrf-cookie', 'graphql']
  'allowed_methods' => ['*']
  'allowed_origins' => ['*']  // ⚠️ يجب تقييده في الإنتاج
  'allowed_headers' => ['*']
  ```

**⚠️ توصية الأمان**: 
- `allowed_origins => ['*']` يجب تقييده لنطاقات محددة في الإنتاج
- مثال: `['https://yourdomain.com', 'https://admin.yourdomain.com']`

---

## 5. مجموعة برامج HTTP الوسيطة الأمنية

### أ. البرامج الوسيطة العامة
- **الموقع**: `API/app/Http/Kernel.php`

**الحماية النشطة**:
1. **TrustProxies**: يكون رؤوس الوكيل الموثوق
2. **HandleCors**: فرض سياسة CORS
3. **PreventRequestsDuringMaintenance**: حظر الطلبات أثناء الصيانة
4. **ValidatePostSize**: يمنع طلبات POST كبيرة الحجم
5. **TrimStrings**: تعقيم بيانات الإدخال
6. **ConvertEmptyStringsToNull**: تطبيع المدخلات الفارغة

### ب. مجموعة البرامج الوسيطة للويب
1. **EncryptCookies**: تشفير جميع ملفات تعريف الارتباط
2. **StartSession**: إدارة جلسات المستخدم
3. **VerifyCsrfToken**: حماية CSRF
4. **ShareErrorsFromSession**: معالجة الأخطاء

### ج. مجموعة البرامج الوسيطة لـ API
1. **SubstituteBindings**: ربط نموذج المسار
2. **Cors**: معالجة CORS المخصصة
3. **Throttle**: تحديد المعدل (معلق لكن متاح)

### د. البرامج الوسيطة الخاصة بالمسار
- `auth`: فحص المصادقة
- `can`: فحص الترخيص
- `throttle`: تحديد المعدل
- `verified`: التحقق من البريد الإلكتروني
- `signed`: التحقق من عنوان URL الموقع
- `localization`: دعم متعدد اللغات

---

## 6. أمان الواجهة الأمامية (Angular)

### أ. حارس المصادقة
- **الموقع**: 
  - `angular-admin/src/app/core/guard/auth.guard.ts`
  - `angular-frontend/src/app/core/guard/auth.guard.ts`

**التطبيق**:
```typescript
export class AuthGuard {
  canActivate(): boolean {
    if(!this.store.selectSnapshot(state => state.auth && state.auth.access_token)) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }
}
```

**ميزات الأمان**:
- يمنع الوصول غير المصرح به للمسار
- إعادة توجيه تلقائية لتسجيل الدخول
- فحص المصادقة القائم على الحالة

### ب. اعتراض HTTP
- **الموقع**: 
  - `angular-admin/src/app/core/interceptors/auth.interceptor.ts`

**التطبيق**:
```typescript
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.store.selectSnapshot(state => state.auth.access_token);
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(req);
  }
}
```

**ميزات الأمان**:
- حقن رمز Bearer التلقائي
- إدارة مركزية للرموز
- استنساخ الطلب للأمان

---

## 7. أمان GraphQL

### أ. برنامج المصادقة الوسيط
- **الموقع**: `API/graphql/schema.graphql`
- **التطبيق**: 
  - نقاط نهاية GraphQL تستبعد CSRF (مصادقة بديلة)
  - يستخدم مصادقة رمز Bearer
  - تعريفات مخطط آمنة من النوع

**ميزات الأمان**:
- توجيهات للمصادقة (`@auth`, `@guard`)
- حدود تعقيد الاستعلام
- دعم تحديد المعدل

---

## 8. تشفير البيانات

### أ. تشفير ملفات تعريف الارتباط
- **الموقع**: `API/app/Http/Middleware/EncryptCookies.php`
- تشفير/فك تشفير جميع ملفات تعريف الارتباط تلقائيًا

### ب. مفتاح التطبيق
- مفتاح تطبيق Laravel للتشفير
- يستخدم لتشفير الجلسة، تشفير ملفات تعريف الارتباط، إعادة تعيين كلمة المرور

---

## 9. التحقق من الإدخال والتعقيم

### أ. التعقيم التلقائي
1. **TrimStrings**: يزيل المسافات البيضاء
2. **ConvertEmptyStringsToNull**: يطبع المدخلات الفارغة

### ب. حماية ReCAPTCHA
- **الموقع**: `API/app/Rules/ReCaptcha.php`
- التحقق من Google ReCAPTCHA للنماذج
- يمنع عمليات إرسال البوت

---

## 10. أمان الجلسة

### أ. تكوين الجلسة
- ملفات تعريف ارتباط جلسة آمنة
- ملفات تعريف ارتباط HTTP فقط (يمنع XSS)
- سمة ملف تعريف الارتباط SameSite
- إدارة عمر الجلسة

---

## 11. أمان قاعدة البيانات

### أ. حماية الاستعلام
- Eloquent ORM يمنع حقن SQL
- البيانات المعدة افتراضيًا
- لا استعلامات خام بدون ربط المعامل

### ب. ترخيص النموذج
- الوصول القائم على السياسة إلى النماذج
- نمط المراقب لمسارات التدقيق

---

## التوصيات الأمنية

### الأولوية العالية
1. ✅ **تقييد CORS**: تغيير `allowed_origins => ['*']` إلى نطاقات محددة
2. ✅ **تمكين تحديد المعدل**: إلغاء التعليق على `throttle:api` في Kernel
3. ✅ **HTTPS فقط**: فرض HTTPS في الإنتاج
4. ✅ **متغيرات البيئة**: عدم الالتزام بملف `.env` أبدًا

### الأولوية المتوسطة
5. ⚠️ **المصادقة ذات العاملين**: النظر في تطبيق 2FA
6. ⚠️ **إصدار API**: إصدار نقاط نهاية API الخاصة بك
7. ⚠️ **التسجيل**: تطبيق تسجيل الأمان الشامل
8. ⚠️ **سياسة أمان المحتوى**: إضافة رؤوس CSP

### أفضل الممارسات
9. ✓ **التحديثات المنتظمة**: حافظ على تحديث Laravel والحزم
10. ✓ **عمليات التدقيق الأمني**: اختبار الاختراق المنتظم
11. ✓ **استراتيجية النسخ الاحتياطي**: نسخ احتياطية مشفرة لقاعدة البيانات
12. ✓ **المراقبة**: تطبيق كشف التطفل

---

## Summary / الملخص

**English**: Your application implements **enterprise-grade security** with token-based authentication, role-based access control, password hashing, CSRF protection, CORS handling, and comprehensive middleware protection. The main recommendation is to **restrict CORS origins** in production and enable **rate limiting**.

**Arabic**: تطبيقك يطبق **أمان على مستوى المؤسسة** مع المصادقة القائمة على الرمز، التحكم في الوصول القائم على الأدوار، تشفير كلمة المرور، حماية CSRF، معالجة CORS، وحماية البرامج الوسيطة الشاملة. التوصية الرئيسية هي **تقييد أصول CORS** في الإنتاج وتمكين **تحديد المعدل**.
