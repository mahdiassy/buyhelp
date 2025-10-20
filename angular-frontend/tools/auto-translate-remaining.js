/**
 * Auto-translate remaining English values in FR and AR files
 */

const fs = require('fs');

const en = JSON.parse(fs.readFileSync('src/assets/i18n/en.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('src/assets/i18n/fr.json', 'utf8'));
const ar = JSON.parse(fs.readFileSync('src/assets/i18n/ar.json', 'utf8'));

// Manual translations for common words
const frTranslations = {
  "action": "Action",
  "appstore": "App Store",
  "background_image": "Image de fond",
  "banner": "bannière",
  "basket": "panier",
  "berlin": "Berlin",
  "blog": "Blog",
  "chart": "graphique",
  "circle": "cercle",
  "code": "Code",
  "coin": "pièce",
  "collections": "Collections",
  "confirmation": "Confirmation",
  "contact": "Contact",
  "cookie": "cookie",
  "cookies": "Cookies",
  "coupon": "Coupon",
  "coverimg": "image de couverture",
  "date": "Date",
  "denver": "Denver",
  "description": "Description",
  "documentation": "Documentation",
  "faq": "FAQ",
  "icon": "icône",
  "ifsc": "Code IFSC",
  "image": "Image",
  "info": "Information",
  "logo": "logo",
  "ltr": "LTR",
  "madrid": "Madrid",
  "menu": "Menu",
  "message": "Message",
  "min": "Min",
  "my_wish": "Mes souhaits",
  "nonrefundable": "Non remboursable",
  "notifications": "Notifications",
  "offer_gif": "gif d'offre",
  "option": "Option",
  "order": "commande",
  "ordertracking": "suivi de commande",
  "osaka": "Osaka",
  "paris": "Paris",
  "payment": "paiement",
  "playstore": "Play Store",
  "points": "Points",
  "rome": "Rome",
  "rtl": "RTL",
  "sort": "trier",
  "tokyo": "Tokyo",
  "transactions": "Transactions",
  "wallet": "portefeuille"
};

const arTranslations = {
  "appstore": "متجر التطبيقات",
  "background_image": "صورة الخلفية",
  "banner": "لافتة",
  "basket": "سلة",
  "chart": "مخطط",
  "circle": "دائرة",
  "coin": "عملة",
  "cookie": "كوكي",
  "coverimg": "صورة الغلاف",
  "icon": "أيقونة",
  "logo": "شعار",
  "ltr": "LTR",
  "my_wish": "رغباتي",
  "nonrefundable": "غير قابل للاسترداد",
  "offer_gif": "صورة العرض",
  "order": "طلب",
  "ordertracking": "تتبع الطلب",
  "payment": "دفع",
  "playstore": "متجر بلاي",
  "rtl": "RTL",
  "sku": "رمز التخزين",
  "sort": "ترتيب",
  "wallet": "محفظة"
};

// Apply translations
let frUpdated = 0;
let arUpdated = 0;

Object.keys(frTranslations).forEach(key => {
  if (fr[key] && fr[key] !== frTranslations[key]) {
    fr[key] = frTranslations[key];
    frUpdated++;
  }
});

Object.keys(arTranslations).forEach(key => {
  if (ar[key] && ar[key] !== arTranslations[key]) {
    ar[key] = arTranslations[key];
    arUpdated++;
  }
});

// Save updated files
fs.writeFileSync('src/assets/i18n/fr.json', JSON.stringify(fr, null, 2));
fs.writeFileSync('src/assets/i18n/ar.json', JSON.stringify(ar, null, 2));

console.log(`\n✅ Updated ${frUpdated} French translations`);
console.log(`✅ Updated ${arUpdated} Arabic translations\n`);
