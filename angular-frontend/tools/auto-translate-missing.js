/**
 * tools/auto-translate-missing.js
 * 
 * Intelligently extracts hardcoded strings from scan report,
 * auto-translates them to French and Arabic, and merges with existing translations.
 * 
 * Uses a free translation approach with built-in dictionaries for common terms.
 */

const fs = require('fs');
const path = require('path');

// Load existing translations
const enPath = 'src/assets/i18n/en.json';
const frPath = 'src/assets/i18n/fr.json';
const arPath = 'src/assets/i18n/ar.json';

const existingEn = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const existingFr = JSON.parse(fs.readFileSync(frPath, 'utf8'));
const existingAr = JSON.parse(fs.readFileSync(arPath, 'utf8'));

// Load scan report
const scanReport = JSON.parse(fs.readFileSync('tools/i18n-scan-report.json', 'utf8'));

// Comprehensive translation dictionaries
const frenchDict = {
  // Navigation & Common
  'home': 'Accueil',
  'shop': 'Boutique',
  'about': 'À propos',
  'contact': 'Contact',
  'blog': 'Blog',
  'search': 'Rechercher',
  'menu': 'Menu',
  'close': 'Fermer',
  'open': 'Ouvrir',
  'back': 'Retour',
  'next': 'Suivant',
  'previous': 'Précédent',
  'continue': 'Continuer',
  'submit': 'Soumettre',
  'cancel': 'Annuler',
  'save': 'Enregistrer',
  'delete': 'Supprimer',
  'edit': 'Modifier',
  'view': 'Voir',
  'more': 'Plus',
  'less': 'Moins',
  'all': 'Tout',
  'none': 'Aucun',
  'yes': 'Oui',
  'no': 'Non',
  'ok': 'OK',
  
  // Products
  'products': 'Produits',
  'product': 'Produit',
  'add to cart': 'Ajouter au panier',
  'add to wishlist': 'Ajouter aux favoris',
  'buy now': 'Acheter maintenant',
  'quick view': 'Aperçu rapide',
  'view details': 'Voir les détails',
  'out of stock': 'Rupture de stock',
  'in stock': 'En stock',
  'sale': 'Solde',
  'new': 'Nouveau',
  'featured': 'En vedette',
  'trending': 'Tendance',
  'best seller': 'Meilleure vente',
  'price': 'Prix',
  'discount': 'Remise',
  'quantity': 'Quantité',
  'size': 'Taille',
  'color': 'Couleur',
  'category': 'Catégorie',
  'categories': 'Catégories',
  'brand': 'Marque',
  'rating': 'Évaluation',
  'reviews': 'Avis',
  'description': 'Description',
  'specifications': 'Spécifications',
  'related products': 'Produits connexes',
  
  // Cart & Checkout
  'cart': 'Panier',
  'shopping cart': 'Panier d\'achat',
  'my cart': 'Mon panier',
  'empty cart': 'Panier vide',
  'cart total': 'Total du panier',
  'subtotal': 'Sous-total',
  'total': 'Total',
  'checkout': 'Passer la commande',
  'proceed to checkout': 'Procéder au paiement',
  'continue shopping': 'Continuer vos achats',
  'apply coupon': 'Appliquer le coupon',
  'coupon code': 'Code promo',
  'shipping': 'Livraison',
  'tax': 'Taxe',
  'free shipping': 'Livraison gratuite',
  
  // Account
  'account': 'Compte',
  'my account': 'Mon compte',
  'profile': 'Profil',
  'login': 'Connexion',
  'register': 'S\'inscrire',
  'logout': 'Déconnexion',
  'sign in': 'Se connecter',
  'sign up': 'S\'inscrire',
  'forgot password': 'Mot de passe oublié',
  'reset password': 'Réinitialiser le mot de passe',
  'change password': 'Changer le mot de passe',
  'email': 'E-mail',
  'password': 'Mot de passe',
  'confirm password': 'Confirmer le mot de passe',
  'name': 'Nom',
  'first name': 'Prénom',
  'last name': 'Nom de famille',
  'phone': 'Téléphone',
  'address': 'Adresse',
  'city': 'Ville',
  'state': 'État',
  'country': 'Pays',
  'zip code': 'Code postal',
  'postal code': 'Code postal',
  
  // Orders
  'orders': 'Commandes',
  'my orders': 'Mes commandes',
  'order history': 'Historique des commandes',
  'order number': 'Numéro de commande',
  'order date': 'Date de commande',
  'order status': 'Statut de la commande',
  'track order': 'Suivre la commande',
  'pending': 'En attente',
  'processing': 'En cours de traitement',
  'shipped': 'Expédié',
  'delivered': 'Livré',
  'cancelled': 'Annulé',
  
  // Wishlist
  'wishlist': 'Liste de souhaits',
  'my wishlist': 'Ma liste de souhaits',
  'add to wishlist': 'Ajouter aux favoris',
  'remove from wishlist': 'Retirer des favoris',
  
  // Compare
  'compare': 'Comparer',
  'compare products': 'Comparer les produits',
  'add to compare': 'Ajouter à la comparaison',
  
  // Filters
  'filter': 'Filtrer',
  'filters': 'Filtres',
  'sort by': 'Trier par',
  'show': 'Afficher',
  'price range': 'Fourchette de prix',
  'min price': 'Prix minimum',
  'max price': 'Prix maximum',
  'apply filters': 'Appliquer les filtres',
  'clear filters': 'Effacer les filtres',
  
  // Common phrases
  'welcome': 'Bienvenue',
  'thank you': 'Merci',
  'please': 'S\'il vous plaît',
  'loading': 'Chargement',
  'no results found': 'Aucun résultat trouvé',
  'showing': 'Affichage',
  'of': 'de',
  'results': 'résultats',
  'items': 'articles',
  'item': 'article',
  'per page': 'par page',
  'page': 'Page',
  
  // Actions
  'view all': 'Voir tout',
  'shop now': 'Acheter maintenant',
  'learn more': 'En savoir plus',
  'read more': 'Lire la suite',
  'show more': 'Afficher plus',
  'show less': 'Afficher moins',
  'subscribe': 'S\'abonner',
  'unsubscribe': 'Se désabonner',
  'share': 'Partager',
  'download': 'Télécharger',
  'upload': 'Téléverser',
  'print': 'Imprimer',
  
  // Messages
  'success': 'Succès',
  'error': 'Erreur',
  'warning': 'Avertissement',
  'info': 'Information',
  'added to cart': 'Ajouté au panier',
  'removed from cart': 'Retiré du panier',
  'item added': 'Article ajouté',
  'item removed': 'Article retiré',
  'please select': 'Veuillez sélectionner',
  'required field': 'Champ obligatoire',
  'invalid email': 'E-mail invalide',
  'password mismatch': 'Les mots de passe ne correspondent pas',
};

const arabicDict = {
  // Navigation & Common
  'home': 'الرئيسية',
  'shop': 'المتجر',
  'about': 'حول',
  'contact': 'اتصل بنا',
  'blog': 'المدونة',
  'search': 'بحث',
  'menu': 'القائمة',
  'close': 'إغلاق',
  'open': 'فتح',
  'back': 'رجوع',
  'next': 'التالي',
  'previous': 'السابق',
  'continue': 'متابعة',
  'submit': 'إرسال',
  'cancel': 'إلغاء',
  'save': 'حفظ',
  'delete': 'حذف',
  'edit': 'تعديل',
  'view': 'عرض',
  'more': 'المزيد',
  'less': 'أقل',
  'all': 'الكل',
  'none': 'لا شيء',
  'yes': 'نعم',
  'no': 'لا',
  'ok': 'موافق',
  
  // Products
  'products': 'المنتجات',
  'product': 'المنتج',
  'add to cart': 'أضف إلى السلة',
  'add to wishlist': 'أضف إلى المفضلة',
  'buy now': 'اشتر الآن',
  'quick view': 'عرض سريع',
  'view details': 'عرض التفاصيل',
  'out of stock': 'غير متوفر',
  'in stock': 'متوفر',
  'sale': 'تخفيض',
  'new': 'جديد',
  'featured': 'مميز',
  'trending': 'رائج',
  'best seller': 'الأكثر مبيعاً',
  'price': 'السعر',
  'discount': 'خصم',
  'quantity': 'الكمية',
  'size': 'الحجم',
  'color': 'اللون',
  'category': 'الفئة',
  'categories': 'الفئات',
  'brand': 'العلامة التجارية',
  'rating': 'التقييم',
  'reviews': 'المراجعات',
  'description': 'الوصف',
  'specifications': 'المواصفات',
  'related products': 'منتجات ذات صلة',
  
  // Cart & Checkout
  'cart': 'السلة',
  'shopping cart': 'عربة التسوق',
  'my cart': 'سلتي',
  'empty cart': 'سلة فارغة',
  'cart total': 'إجمالي السلة',
  'subtotal': 'المجموع الفرعي',
  'total': 'الإجمالي',
  'checkout': 'إتمام الطلب',
  'proceed to checkout': 'المتابعة للدفع',
  'continue shopping': 'متابعة التسوق',
  'apply coupon': 'تطبيق القسيمة',
  'coupon code': 'رمز القسيمة',
  'shipping': 'الشحن',
  'tax': 'الضريبة',
  'free shipping': 'شحن مجاني',
  
  // Account
  'account': 'الحساب',
  'my account': 'حسابي',
  'profile': 'الملف الشخصي',
  'login': 'تسجيل الدخول',
  'register': 'التسجيل',
  'logout': 'تسجيل الخروج',
  'sign in': 'تسجيل الدخول',
  'sign up': 'إنشاء حساب',
  'forgot password': 'نسيت كلمة المرور',
  'reset password': 'إعادة تعيين كلمة المرور',
  'change password': 'تغيير كلمة المرور',
  'email': 'البريد الإلكتروني',
  'password': 'كلمة المرور',
  'confirm password': 'تأكيد كلمة المرور',
  'name': 'الاسم',
  'first name': 'الاسم الأول',
  'last name': 'اسم العائلة',
  'phone': 'الهاتف',
  'address': 'العنوان',
  'city': 'المدينة',
  'state': 'الولاية',
  'country': 'البلد',
  'zip code': 'الرمز البريدي',
  'postal code': 'الرمز البريدي',
  
  // Orders
  'orders': 'الطلبات',
  'my orders': 'طلباتي',
  'order history': 'سجل الطلبات',
  'order number': 'رقم الطلب',
  'order date': 'تاريخ الطلب',
  'order status': 'حالة الطلب',
  'track order': 'تتبع الطلب',
  'pending': 'قيد الانتظار',
  'processing': 'قيد المعالجة',
  'shipped': 'تم الشحن',
  'delivered': 'تم التسليم',
  'cancelled': 'ملغى',
  
  // Wishlist
  'wishlist': 'قائمة الأمنيات',
  'my wishlist': 'قائمتي المفضلة',
  'add to wishlist': 'أضف إلى المفضلة',
  'remove from wishlist': 'إزالة من المفضلة',
  
  // Compare
  'compare': 'مقارنة',
  'compare products': 'مقارنة المنتجات',
  'add to compare': 'أضف للمقارنة',
  
  // Filters
  'filter': 'تصفية',
  'filters': 'الفلاتر',
  'sort by': 'ترتيب حسب',
  'show': 'عرض',
  'price range': 'نطاق السعر',
  'min price': 'أدنى سعر',
  'max price': 'أقصى سعر',
  'apply filters': 'تطبيق الفلاتر',
  'clear filters': 'مسح الفلاتر',
  
  // Common phrases
  'welcome': 'مرحباً',
  'thank you': 'شكراً لك',
  'please': 'من فضلك',
  'loading': 'جاري التحميل',
  'no results found': 'لم يتم العثور على نتائج',
  'showing': 'عرض',
  'of': 'من',
  'results': 'نتيجة',
  'items': 'عناصر',
  'item': 'عنصر',
  'per page': 'لكل صفحة',
  'page': 'صفحة',
  
  // Actions
  'view all': 'عرض الكل',
  'shop now': 'تسوق الآن',
  'learn more': 'اعرف المزيد',
  'read more': 'اقرأ المزيد',
  'show more': 'عرض المزيد',
  'show less': 'عرض أقل',
  'subscribe': 'اشترك',
  'unsubscribe': 'إلغاء الاشتراك',
  'share': 'مشاركة',
  'download': 'تحميل',
  'upload': 'رفع',
  'print': 'طباعة',
  
  // Messages
  'success': 'نجاح',
  'error': 'خطأ',
  'warning': 'تحذير',
  'info': 'معلومات',
  'added to cart': 'تم الإضافة إلى السلة',
  'removed from cart': 'تم الإزالة من السلة',
  'item added': 'تم إضافة العنصر',
  'item removed': 'تم إزالة العنصر',
  'please select': 'يرجى الاختيار',
  'required field': 'حقل مطلوب',
  'invalid email': 'بريد إلكتروني غير صالح',
  'password mismatch': 'كلمات المرور غير متطابقة',
};

// Function to check if string is a template expression
function isTemplateExpression(text) {
  // Check for Angular expressions
  if (text.includes('{{') || text.includes('}}')) return true;
  if (text.includes('|') && (text.includes('translate') || text.includes('async') || text.includes('currency'))) return true;
  if (text.includes('?.') || text.includes('!.')) return true;
  if (text.includes('[') && text.includes(']')) return true;
  if (text.match(/^\s*\(\s*\{/)) return true; // Starts with ({
  if (text.match(/\$\s*\|/)) return true; // Observable pipes
  return false;
}

// Function to check if string is meaningful
function isMeaningfulString(text) {
  const trimmed = text.trim();
  if (trimmed.length === 0) return false;
  if (trimmed.length < 2) return false;
  // Check if it's just numbers or symbols
  if (/^[\d\s\W]+$/.test(trimmed)) return false;
  // Check if it's just a single letter (likely a variable)
  if (/^[a-z]$/i.test(trimmed)) return false;
  return true;
}

// Extract real hardcoded strings
const realStrings = new Map();

scanReport.items.forEach(item => {
  const text = item.text.trim();
  
  // Skip template expressions
  if (isTemplateExpression(text)) return;
  
  // Skip non-meaningful strings
  if (!isMeaningfulString(text)) return;
  
  // Generate a clean key
  const keyBase = text
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, '_')
    .substring(0, 50);
  
  if (!realStrings.has(keyBase)) {
    realStrings.set(keyBase, {
      key: keyBase,
      en: text,
      files: [item.file],
      type: item.type
    });
  } else {
    realStrings.get(keyBase).files.push(item.file);
  }
});

console.log(`\x1b[36m📊 Found ${realStrings.size} real translatable strings (filtered from ${scanReport.items.length} total items)\x1b[0m`);

// Translate strings
const newTranslations = {
  en: {},
  fr: {},
  ar: {}
};

let translatedCount = 0;
let alreadyExistsCount = 0;

realStrings.forEach((data, key) => {
  // Check if already exists in any form
  const existingKey = Object.keys(existingEn).find(k => 
    existingEn[k].toLowerCase() === data.en.toLowerCase()
  );
  
  if (existingKey) {
    alreadyExistsCount++;
    return;
  }
  
  // Add to new translations
  newTranslations.en[key] = data.en;
  
  // Translate to French
  const lowerText = data.en.toLowerCase();
  if (frenchDict[lowerText]) {
    newTranslations.fr[key] = frenchDict[lowerText];
  } else {
    // Try to find partial matches or use smart translation
    let translated = data.en;
    Object.keys(frenchDict).forEach(engWord => {
      const regex = new RegExp(`\\b${engWord}\\b`, 'gi');
      if (regex.test(lowerText)) {
        translated = translated.replace(regex, frenchDict[engWord]);
      }
    });
    newTranslations.fr[key] = translated;
  }
  
  // Translate to Arabic
  if (arabicDict[lowerText]) {
    newTranslations.ar[key] = arabicDict[lowerText];
  } else {
    // Try to find partial matches or use smart translation
    let translated = data.en;
    Object.keys(arabicDict).forEach(engWord => {
      const regex = new RegExp(`\\b${engWord}\\b`, 'gi');
      if (regex.test(lowerText)) {
        translated = translated.replace(regex, arabicDict[engWord]);
      }
    });
    newTranslations.ar[key] = translated;
  }
  
  translatedCount++;
});

console.log(`\x1b[32m✅ Translated ${translatedCount} new strings\x1b[0m`);
console.log(`\x1b[33m⚠️  ${alreadyExistsCount} strings already exist in translations\x1b[0m`);

// Merge with existing translations
const mergedEn = { ...existingEn, ...newTranslations.en };
const mergedFr = { ...existingFr, ...newTranslations.fr };
const mergedAr = { ...existingAr, ...newTranslations.ar };

// Sort keys alphabetically for better readability
function sortObject(obj) {
  return Object.keys(obj).sort().reduce((result, key) => {
    result[key] = obj[key];
    return result;
  }, {});
}

const sortedEn = sortObject(mergedEn);
const sortedFr = sortObject(mergedFr);
const sortedAr = sortObject(mergedAr);

// Create backups
const timestamp = new Date().toISOString().replace(/[:.]/g, '-').substring(0, 19);
fs.writeFileSync(`src/assets/i18n/en.backup-${timestamp}.json`, JSON.stringify(existingEn, null, 2));
fs.writeFileSync(`src/assets/i18n/fr.backup-${timestamp}.json`, JSON.stringify(existingFr, null, 2));
fs.writeFileSync(`src/assets/i18n/ar.backup-${timestamp}.json`, JSON.stringify(existingAr, null, 2));

console.log(`\x1b[36m💾 Backups created with timestamp: ${timestamp}\x1b[0m`);

// Write updated files
fs.writeFileSync(enPath, JSON.stringify(sortedEn, null, 2), 'utf8');
fs.writeFileSync(frPath, JSON.stringify(sortedFr, null, 2), 'utf8');
fs.writeFileSync(arPath, JSON.stringify(sortedAr, null, 2), 'utf8');

console.log(`\x1b[32m✅ Updated translation files:\x1b[0m`);
console.log(`   - ${enPath}: ${Object.keys(sortedEn).length} keys (${Object.keys(newTranslations.en).length} new)`);
console.log(`   - ${frPath}: ${Object.keys(sortedFr).length} keys (${Object.keys(newTranslations.fr).length} new)`);
console.log(`   - ${arPath}: ${Object.keys(sortedAr).length} keys (${Object.keys(newTranslations.ar).length} new)`);

// Generate report of new translations
const report = {
  timestamp,
  summary: {
    totalScanned: scanReport.items.length,
    realStrings: realStrings.size,
    newTranslations: translatedCount,
    alreadyExists: alreadyExistsCount,
    totalKeysNow: Object.keys(sortedEn).length
  },
  newKeys: Object.keys(newTranslations.en).map(key => ({
    key,
    en: newTranslations.en[key],
    fr: newTranslations.fr[key],
    ar: newTranslations.ar[key]
  }))
};

fs.writeFileSync('tools/auto-translate-report.json', JSON.stringify(report, null, 2));

console.log(`\x1b[36m📄 Report saved to: tools/auto-translate-report.json\x1b[0m`);
console.log(`\n\x1b[33m📋 Sample of new translations:\x1b[0m`);

const sampleKeys = Object.keys(newTranslations.en).slice(0, 10);
sampleKeys.forEach((key, idx) => {
  console.log(`\x1b[36m${idx + 1}. "${key}":\x1b[0m`);
  console.log(`   EN: "${newTranslations.en[key]}"`);
  console.log(`   FR: "${newTranslations.fr[key]}"`);
  console.log(`   AR: "${newTranslations.ar[key]}"`);
});

if (Object.keys(newTranslations.en).length > 10) {
  console.log(`\x1b[90m   ... and ${Object.keys(newTranslations.en).length - 10} more\x1b[0m`);
}

console.log(`\n\x1b[32m🎉 AUTO-TRANSLATION COMPLETE!\x1b[0m`);
console.log(`\x1b[33m⚠️  Next step: Review translations and test the application\x1b[0m`);
