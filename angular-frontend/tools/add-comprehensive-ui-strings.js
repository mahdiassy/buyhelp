/**
 * tools/add-comprehensive-ui-strings.js
 * 
 * Adds all common e-commerce UI strings that are typically needed
 * but might be missing from translation files.
 */

const fs = require('fs');
const path = require('path');

// Load existing translations
const enPath = 'src/assets/i18n/en.json';
const frPath = 'src/assets/i18n/fr.json';
const arPath = 'src/assets/i18n/ar.json';

let existingEn = JSON.parse(fs.readFileSync(enPath, 'utf8'));
let existingFr = JSON.parse(fs.readFileSync(frPath, 'utf8'));
let existingAr = JSON.parse(fs.readFileSync(arPath, 'utf8'));

// Comprehensive e-commerce UI strings
const comprehensiveStrings = {
  // Buttons & Actions
  'add_to_cart': { en: 'Add to Cart', fr: 'Ajouter au panier', ar: 'أضف إلى السلة' },
  'buy_now': { en: 'Buy Now', fr: 'Acheter maintenant', ar: 'اشتر الآن' },
  'shop_now': { en: 'Shop Now', fr: 'Acheter maintenant', ar: 'تسوق الآن' },
  'view_details': { en: 'View Details', fr: 'Voir les détails', ar: 'عرض التفاصيل' },
  'quick_view': { en: 'Quick View', fr: 'Aperçu rapide', ar: 'عرض سريع' },
  'view_all': { en: 'View All', fr: 'Voir tout', ar: 'عرض الكل' },
  'show_more': { en: 'Show More', fr: 'Afficher plus', ar: 'عرض المزيد' },
  'show_less': { en: 'Show Less', fr: 'Afficher moins', ar: 'عرض أقل' },
  'load_more': { en: 'Load More', fr: 'Charger plus', ar: 'تحميل المزيد' },
  'read_more': { en: 'Read More', fr: 'Lire la suite', ar: 'اقرأ المزيد' },
  'learn_more': { en: 'Learn More', fr: 'En savoir plus', ar: 'اعرف المزيد' },
  'continue_shopping': { en: 'Continue Shopping', fr: 'Continuer vos achats', ar: 'متابعة التسوق' },
  'proceed_to_checkout': { en: 'Proceed to Checkout', fr: 'Procéder au paiement', ar: 'المتابعة للدفع' },
  'place_order': { en: 'Place Order', fr: 'Passer la commande', ar: 'تأكيد الطلب' },
  'apply': { en: 'Apply', fr: 'Appliquer', ar: 'تطبيق' },
  'clear': { en: 'Clear', fr: 'Effacer', ar: 'مسح' },
  'reset': { en: 'Reset', fr: 'Réinitialiser', ar: 'إعادة تعيين' },
  'update': { en: 'Update', fr: 'Mettre à jour', ar: 'تحديث' },
  'save': { en: 'Save', fr: 'Enregistrer', ar: 'حفظ' },
  'cancel': { en: 'Cancel', fr: 'Annuler', ar: 'إلغاء' },
  'delete': { en: 'Delete', fr: 'Supprimer', ar: 'حذف' },
  'remove': { en: 'Remove', fr: 'Retirer', ar: 'إزالة' },
  'edit': { en: 'Edit', fr: 'Modifier', ar: 'تعديل' },
  'confirm': { en: 'Confirm', fr: 'Confirmer', ar: 'تأكيد' },
  'submit': { en: 'Submit', fr: 'Soumettre', ar: 'إرسال' },
  'send': { en: 'Send', fr: 'Envoyer', ar: 'إرسال' },
  'back': { en: 'Back', fr: 'Retour', ar: 'رجوع' },
  'close': { en: 'Close', fr: 'Fermer', ar: 'إغلاق' },
  'download': { en: 'Download', fr: 'Télécharger', ar: 'تحميل' },
  'print': { en: 'Print', fr: 'Imprimer', ar: 'طباعة' },
  'share': { en: 'Share', fr: 'Partager', ar: 'مشاركة' },
  'subscribe': { en: 'Subscribe', fr: 'S\'abonner', ar: 'اشترك' },
  
  // Product States
  'in_stock': { en: 'In Stock', fr: 'En stock', ar: 'متوفر' },
  'out_of_stock': { en: 'Out of Stock', fr: 'Rupture de stock', ar: 'غير متوفر' },
  'low_stock': { en: 'Low Stock', fr: 'Stock faible', ar: 'مخزون منخفض' },
  'sale': { en: 'Sale', fr: 'Solde', ar: 'تخفيض' },
  'new': { en: 'New', fr: 'Nouveau', ar: 'جديد' },
  'featured': { en: 'Featured', fr: 'En vedette', ar: 'مميز' },
  'trending': { en: 'Trending', fr: 'Tendance', ar: 'رائج' },
  'best_seller': { en: 'Best Seller', fr: 'Meilleure vente', ar: 'الأكثر مبيعاً' },
  'hot_sale': { en: 'Hot Sale', fr: 'Vente chaude', ar: 'تخفيضات ساخنة' },
  'limited_offer': { en: 'Limited Offer', fr: 'Offre limitée', ar: 'عرض محدود' },
  
  // Navigation
  'home': { en: 'Home', fr: 'Accueil', ar: 'الرئيسية' },
  'shop': { en: 'Shop', fr: 'Boutique', ar: 'المتجر' },
  'products': { en: 'Products', fr: 'Produits', ar: 'المنتجات' },
  'categories': { en: 'Categories', fr: 'Catégories', ar: 'الفئات' },
  'brands': { en: 'Brands', fr: 'Marques', ar: 'العلامات التجارية' },
  'about_us': { en: 'About Us', fr: 'À propos', ar: 'من نحن' },
  'contact_us': { en: 'Contact Us', fr: 'Contactez-nous', ar: 'اتصل بنا' },
  'blog': { en: 'Blog', fr: 'Blog', ar: 'المدونة' },
  'faq': { en: 'FAQ', fr: 'FAQ', ar: 'الأسئلة الشائعة' },
  'help': { en: 'Help', fr: 'Aide', ar: 'مساعدة' },
  'support': { en: 'Support', fr: 'Support', ar: 'الدعم' },
  
  // Account & Authentication
  'my_account': { en: 'My Account', fr: 'Mon compte', ar: 'حسابي' },
  'profile': { en: 'Profile', fr: 'Profil', ar: 'الملف الشخصي' },
  'dashboard': { en: 'Dashboard', fr: 'Tableau de bord', ar: 'لوحة التحكم' },
  'orders': { en: 'Orders', fr: 'Commandes', ar: 'الطلبات' },
  'my_orders': { en: 'My Orders', fr: 'Mes commandes', ar: 'طلباتي' },
  'order_history': { en: 'Order History', fr: 'Historique des commandes', ar: 'سجل الطلبات' },
  'addresses': { en: 'Addresses', fr: 'Adresses', ar: 'العناوين' },
  'wishlist': { en: 'Wishlist', fr: 'Liste de souhaits', ar: 'قائمة الأمنيات' },
  'my_wishlist': { en: 'My Wishlist', fr: 'Ma liste de souhaits', ar: 'قائمتي المفضلة' },
  'wallet': { en: 'Wallet', fr: 'Portefeuille', ar: 'المحفظة' },
  'points': { en: 'Points', fr: 'Points', ar: 'النقاط' },
  'notifications': { en: 'Notifications', fr: 'Notifications', ar: 'الإشعارات' },
  'settings': { en: 'Settings', fr: 'Paramètres', ar: 'الإعدادات' },
  'login': { en: 'Login', fr: 'Connexion', ar: 'تسجيل الدخول' },
  'register': { en: 'Register', fr: 'S\'inscrire', ar: 'التسجيل' },
  'logout': { en: 'Logout', fr: 'Déconnexion', ar: 'تسجيل الخروج' },
  'sign_in': { en: 'Sign In', fr: 'Se connecter', ar: 'تسجيل الدخول' },
  'sign_up': { en: 'Sign Up', fr: 'S\'inscrire', ar: 'إنشاء حساب' },
  'forgot_password': { en: 'Forgot Password?', fr: 'Mot de passe oublié ?', ar: 'نسيت كلمة المرور؟' },
  'reset_password': { en: 'Reset Password', fr: 'Réinitialiser le mot de passe', ar: 'إعادة تعيين كلمة المرور' },
  'change_password': { en: 'Change Password', fr: 'Changer le mot de passe', ar: 'تغيير كلمة المرور' },
  
  // Cart & Checkout
  'cart': { en: 'Cart', fr: 'Panier', ar: 'السلة' },
  'shopping_cart': { en: 'Shopping Cart', fr: 'Panier d\'achat', ar: 'عربة التسوق' },
  'my_cart': { en: 'My Cart', fr: 'Mon panier', ar: 'سلتي' },
  'empty_cart': { en: 'Empty Cart', fr: 'Panier vide', ar: 'سلة فارغة' },
  'cart_is_empty': { en: 'Your cart is empty', fr: 'Votre panier est vide', ar: 'سلتك فارغة' },
  'checkout': { en: 'Checkout', fr: 'Passer la commande', ar: 'إتمام الطلب' },
  'subtotal': { en: 'Subtotal', fr: 'Sous-total', ar: 'المجموع الفرعي' },
  'total': { en: 'Total', fr: 'Total', ar: 'الإجمالي' },
  'grand_total': { en: 'Grand Total', fr: 'Total général', ar: 'الإجمالي الكلي' },
  'shipping': { en: 'Shipping', fr: 'Livraison', ar: 'الشحن' },
  'tax': { en: 'Tax', fr: 'Taxe', ar: 'الضريبة' },
  'discount': { en: 'Discount', fr: 'Remise', ar: 'خصم' },
  'coupon': { en: 'Coupon', fr: 'Coupon', ar: 'قسيمة' },
  'apply_coupon': { en: 'Apply Coupon', fr: 'Appliquer le coupon', ar: 'تطبيق القسيمة' },
  'coupon_code': { en: 'Coupon Code', fr: 'Code promo', ar: 'رمز القسيمة' },
  'free_shipping': { en: 'Free Shipping', fr: 'Livraison gratuite', ar: 'شحن مجاني' },
  'payment_method': { en: 'Payment Method', fr: 'Mode de paiement', ar: 'طريقة الدفع' },
  'shipping_method': { en: 'Shipping Method', fr: 'Mode de livraison', ar: 'طريقة الشحن' },
  'billing_address': { en: 'Billing Address', fr: 'Adresse de facturation', ar: 'عنوان الفواتير' },
  'shipping_address': { en: 'Shipping Address', fr: 'Adresse de livraison', ar: 'عنوان الشحن' },
  
  // Product Details
  'price': { en: 'Price', fr: 'Prix', ar: 'السعر' },
  'regular_price': { en: 'Regular Price', fr: 'Prix régulier', ar: 'السعر العادي' },
  'sale_price': { en: 'Sale Price', fr: 'Prix soldé', ar: 'سعر البيع' },
  'quantity': { en: 'Quantity', fr: 'Quantité', ar: 'الكمية' },
  'size': { en: 'Size', fr: 'Taille', ar: 'الحجم' },
  'color': { en: 'Color', fr: 'Couleur', ar: 'اللون' },
  'sku': { en: 'SKU', fr: 'SKU', ar: 'رمز المنتج' },
  'category': { en: 'Category', fr: 'Catégorie', ar: 'الفئة' },
  'brand': { en: 'Brand', fr: 'Marque', ar: 'العلامة التجارية' },
  'rating': { en: 'Rating', fr: 'Évaluation', ar: 'التقييم' },
  'reviews': { en: 'Reviews', fr: 'Avis', ar: 'المراجعات' },
  'description': { en: 'Description', fr: 'Description', ar: 'الوصف' },
  'specifications': { en: 'Specifications', fr: 'Spécifications', ar: 'المواصفات' },
  'features': { en: 'Features', fr: 'Caractéristiques', ar: 'المميزات' },
  'availability': { en: 'Availability', fr: 'Disponibilité', ar: 'التوفر' },
  'related_products': { en: 'Related Products', fr: 'Produits connexes', ar: 'منتجات ذات صلة' },
  'you_may_also_like': { en: 'You May Also Like', fr: 'Vous aimerez aussi', ar: 'قد يعجبك أيضاً' },
  
  // Filters & Sorting
  'filter': { en: 'Filter', fr: 'Filtrer', ar: 'تصفية' },
  'filters': { en: 'Filters', fr: 'Filtres', ar: 'الفلاتر' },
  'sort_by': { en: 'Sort By', fr: 'Trier par', ar: 'ترتيب حسب' },
  'price_low_to_high': { en: 'Price: Low to High', fr: 'Prix : croissant', ar: 'السعر: من الأقل للأعلى' },
  'price_high_to_low': { en: 'Price: High to Low', fr: 'Prix : décroissant', ar: 'السعر: من الأعلى للأقل' },
  'newest_first': { en: 'Newest First', fr: 'Plus récent', ar: 'الأحدث أولاً' },
  'popularity': { en: 'Popularity', fr: 'Popularité', ar: 'الشعبية' },
  'best_rated': { en: 'Best Rated', fr: 'Mieux noté', ar: 'الأفضل تقييماً' },
  'price_range': { en: 'Price Range', fr: 'Fourchette de prix', ar: 'نطاق السعر' },
  'apply_filters': { en: 'Apply Filters', fr: 'Appliquer les filtres', ar: 'تطبيق الفلاتر' },
  'clear_filters': { en: 'Clear Filters', fr: 'Effacer les filtres', ar: 'مسح الفلاتر' },
  'clear_all': { en: 'Clear All', fr: 'Tout effacer', ar: 'مسح الكل' },
  
  // Search & Results
  'search': { en: 'Search', fr: 'Rechercher', ar: 'بحث' },
  'search_products': { en: 'Search Products', fr: 'Rechercher des produits', ar: 'البحث عن المنتجات' },
  'search_results': { en: 'Search Results', fr: 'Résultats de recherche', ar: 'نتائج البحث' },
  'no_results_found': { en: 'No results found', fr: 'Aucun résultat trouvé', ar: 'لم يتم العثور على نتائج' },
  'showing': { en: 'Showing', fr: 'Affichage', ar: 'عرض' },
  'results': { en: 'Results', fr: 'Résultats', ar: 'نتيجة' },
  'items': { en: 'Items', fr: 'Articles', ar: 'عناصر' },
  'of': { en: 'of', fr: 'de', ar: 'من' },
  'per_page': { en: 'per page', fr: 'par page', ar: 'لكل صفحة' },
  
  // Forms & Validation
  'name': { en: 'Name', fr: 'Nom', ar: 'الاسم' },
  'first_name': { en: 'First Name', fr: 'Prénom', ar: 'الاسم الأول' },
  'last_name': { en: 'Last Name', fr: 'Nom de famille', ar: 'اسم العائلة' },
  'email': { en: 'Email', fr: 'E-mail', ar: 'البريد الإلكتروني' },
  'email_address': { en: 'Email Address', fr: 'Adresse e-mail', ar: 'عنوان البريد الإلكتروني' },
  'password': { en: 'Password', fr: 'Mot de passe', ar: 'كلمة المرور' },
  'confirm_password': { en: 'Confirm Password', fr: 'Confirmer le mot de passe', ar: 'تأكيد كلمة المرور' },
  'phone': { en: 'Phone', fr: 'Téléphone', ar: 'الهاتف' },
  'phone_number': { en: 'Phone Number', fr: 'Numéro de téléphone', ar: 'رقم الهاتف' },
  'address': { en: 'Address', fr: 'Adresse', ar: 'العنوان' },
  'street_address': { en: 'Street Address', fr: 'Adresse de la rue', ar: 'عنوان الشارع' },
  'city': { en: 'City', fr: 'Ville', ar: 'المدينة' },
  'state': { en: 'State', fr: 'État', ar: 'الولاية' },
  'country': { en: 'Country', fr: 'Pays', ar: 'البلد' },
  'zip_code': { en: 'Zip Code', fr: 'Code postal', ar: 'الرمز البريدي' },
  'postal_code': { en: 'Postal Code', fr: 'Code postal', ar: 'الرمز البريدي' },
  'message': { en: 'Message', fr: 'Message', ar: 'الرسالة' },
  'subject': { en: 'Subject', fr: 'Sujet', ar: 'الموضوع' },
  'required': { en: 'Required', fr: 'Requis', ar: 'مطلوب' },
  'optional': { en: 'Optional', fr: 'Optionnel', ar: 'اختياري' },
  'please_enter': { en: 'Please enter', fr: 'Veuillez entrer', ar: 'يرجى إدخال' },
  'please_select': { en: 'Please select', fr: 'Veuillez sélectionner', ar: 'يرجى الاختيار' },
  'invalid_email': { en: 'Invalid email address', fr: 'Adresse e-mail invalide', ar: 'عنوان بريد إلكتروني غير صالح' },
  'password_mismatch': { en: 'Passwords do not match', fr: 'Les mots de passe ne correspondent pas', ar: 'كلمات المرور غير متطابقة' },
  
  // Messages & Status
  'success': { en: 'Success', fr: 'Succès', ar: 'نجاح' },
  'error': { en: 'Error', fr: 'Erreur', ar: 'خطأ' },
  'warning': { en: 'Warning', fr: 'Avertissement', ar: 'تحذير' },
  'info': { en: 'Information', fr: 'Information', ar: 'معلومات' },
  'loading': { en: 'Loading...', fr: 'Chargement...', ar: 'جاري التحميل...' },
  'please_wait': { en: 'Please wait...', fr: 'Veuillez patienter...', ar: 'يرجى الانتظار...' },
  'added_to_cart': { en: 'Added to cart', fr: 'Ajouté au panier', ar: 'تم الإضافة إلى السلة' },
  'removed_from_cart': { en: 'Removed from cart', fr: 'Retiré du panier', ar: 'تم الإزالة من السلة' },
  'added_to_wishlist': { en: 'Added to wishlist', fr: 'Ajouté aux favoris', ar: 'تم الإضافة إلى المفضلة' },
  'removed_from_wishlist': { en: 'Removed from wishlist', fr: 'Retiré des favoris', ar: 'تم الإزالة من المفضلة' },
  'order_placed': { en: 'Order placed successfully', fr: 'Commande passée avec succès', ar: 'تم تقديم الطلب بنجاح' },
  'thank_you_order': { en: 'Thank you for your order!', fr: 'Merci pour votre commande !', ar: 'شكراً لطلبك!' },
  
  // Common Words
  'yes': { en: 'Yes', fr: 'Oui', ar: 'نعم' },
  'no': { en: 'No', fr: 'Non', ar: 'لا' },
  'ok': { en: 'OK', fr: 'OK', ar: 'موافق' },
  'all': { en: 'All', fr: 'Tout', ar: 'الكل' },
  'none': { en: 'None', fr: 'Aucun', ar: 'لا شيء' },
  'more': { en: 'More', fr: 'Plus', ar: 'المزيد' },
  'less': { en: 'Less', fr: 'Moins', ar: 'أقل' },
  'by': { en: 'By', fr: 'Par', ar: 'بواسطة' },
  'in': { en: 'In', fr: 'Dans', ar: 'في' },
  'from': { en: 'From', fr: 'De', ar: 'من' },
  'to': { en: 'To', fr: 'À', ar: 'إلى' },
  'and': { en: 'And', fr: 'Et', ar: 'و' },
  'or': { en: 'Or', fr: 'Ou', ar: 'أو' },
  'with': { en: 'With', fr: 'Avec', ar: 'مع' },
  'without': { en: 'Without', fr: 'Sans', ar: 'بدون' },
  
  // Footer & Newsletter
  'newsletter': { en: 'Newsletter', fr: 'Newsletter', ar: 'النشرة الإخبارية' },
  'subscribe_newsletter': { en: 'Subscribe to our newsletter', fr: 'Abonnez-vous à notre newsletter', ar: 'اشترك في نشرتنا الإخبارية' },
  'enter_your_email': { en: 'Enter your email', fr: 'Entrez votre e-mail', ar: 'أدخل بريدك الإلكتروني' },
  'follow_us': { en: 'Follow Us', fr: 'Suivez-nous', ar: 'تابعنا' },
  'quick_links': { en: 'Quick Links', fr: 'Liens rapides', ar: 'روابط سريعة' },
  'customer_service': { en: 'Customer Service', fr: 'Service client', ar: 'خدمة العملاء' },
  'terms_conditions': { en: 'Terms & Conditions', fr: 'Conditions générales', ar: 'الشروط والأحكام' },
  'privacy_policy': { en: 'Privacy Policy', fr: 'Politique de confidentialité', ar: 'سياسة الخصوصية' },
  'return_policy': { en: 'Return Policy', fr: 'Politique de retour', ar: 'سياسة الإرجاع' },
  'shipping_policy': { en: 'Shipping Policy', fr: 'Politique d\'expédition', ar: 'سياسة الشحن' },
  'copyright': { en: 'Copyright', fr: 'Droits d\'auteur', ar: 'حقوق النشر' },
  'all_rights_reserved': { en: 'All rights reserved', fr: 'Tous droits réservés', ar: 'جميع الحقوق محفوظة' },
  
  // Compare
  'compare': { en: 'Compare', fr: 'Comparer', ar: 'مقارنة' },
  'compare_products': { en: 'Compare Products', fr: 'Comparer les produits', ar: 'مقارنة المنتجات' },
  'add_to_compare': { en: 'Add to Compare', fr: 'Ajouter à la comparaison', ar: 'أضف للمقارنة' },
  'remove_from_compare': { en: 'Remove from Compare', fr: 'Retirer de la comparaison', ar: 'إزالة من المقارنة' },
  
  // Additional Common Phrases
  'welcome': { en: 'Welcome', fr: 'Bienvenue', ar: 'مرحباً' },
  'thank_you': { en: 'Thank You', fr: 'Merci', ar: 'شكراً لك' },
  'please': { en: 'Please', fr: 'S\'il vous plaît', ar: 'من فضلك' },
  'contact': { en: 'Contact', fr: 'Contact', ar: 'اتصل' },
  'menu': { en: 'Menu', fr: 'Menu', ar: 'القائمة' },
  'language': { en: 'Language', fr: 'Langue', ar: 'اللغة' },
  'currency': { en: 'Currency', fr: 'Devise', ar: 'العملة' },
};

// Count additions
let addedCount = { en: 0, fr: 0, ar: 0 };
let skippedCount = 0;

// Add missing strings
Object.keys(comprehensiveStrings).forEach(key => {
  const translations = comprehensiveStrings[key];
  
  if (!existingEn[key]) {
    existingEn[key] = translations.en;
    addedCount.en++;
  } else {
    skippedCount++;
  }
  
  if (!existingFr[key]) {
    existingFr[key] = translations.fr;
    addedCount.fr++;
  }
  
  if (!existingAr[key]) {
    existingAr[key] = translations.ar;
    addedCount.ar++;
  }
});

// Sort alphabetically
function sortObject(obj) {
  return Object.keys(obj).sort().reduce((result, key) => {
    result[key] = obj[key];
    return result;
  }, {});
}

existingEn = sortObject(existingEn);
existingFr = sortObject(existingFr);
existingAr = sortObject(existingAr);

// Create backups
const timestamp = new Date().toISOString().replace(/[:.]/g, '-').substring(0, 19);
fs.writeFileSync(`src/assets/i18n/en.backup-comprehensive-${timestamp}.json`, fs.readFileSync(enPath));
fs.writeFileSync(`src/assets/i18n/fr.backup-comprehensive-${timestamp}.json`, fs.readFileSync(frPath));
fs.writeFileSync(`src/assets/i18n/ar.backup-comprehensive-${timestamp}.json`, fs.readFileSync(arPath));

// Write updated files
fs.writeFileSync(enPath, JSON.stringify(existingEn, null, 2), 'utf8');
fs.writeFileSync(frPath, JSON.stringify(existingFr, null, 2), 'utf8');
fs.writeFileSync(arPath, JSON.stringify(existingAr, null, 2), 'utf8');

console.log(`\x1b[32m🎉 COMPREHENSIVE UI STRINGS ADDED!\x1b[0m\n`);
console.log(`\x1b[36m💾 Backups created: *-comprehensive-${timestamp}.json\x1b[0m\n`);
console.log(`\x1b[33m📊 Summary:\x1b[0m`);
console.log(`   Total strings checked: ${Object.keys(comprehensiveStrings).length}`);
console.log(`   \x1b[32m✅ Added to EN: ${addedCount.en}\x1b[0m`);
console.log(`   \x1b[32m✅ Added to FR: ${addedCount.fr}\x1b[0m`);
console.log(`   \x1b[32m✅ Added to AR: ${addedCount.ar}\x1b[0m`);
console.log(`   \x1b[90m⏭️  Skipped (already exists): ${skippedCount}\x1b[0m\n`);
console.log(`\x1b[34m📈 Total keys now:\x1b[0m`);
console.log(`   EN: ${Object.keys(existingEn).length} keys`);
console.log(`   FR: ${Object.keys(existingFr).length} keys`);
console.log(`   AR: ${Object.keys(existingAr).length} keys\n`);
console.log(`\x1b[32m✅ Translation coverage significantly improved!\x1b[0m`);
console.log(`\x1b[33m⚠️  Test your application to ensure all strings are displaying correctly.\x1b[0m`);
