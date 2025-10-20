/**
 * Add missing navigation translation keys
 */
const fs = require('fs');

console.log('\n🔧 ADDING MISSING NAVIGATION KEYS\n');

// Keys to add with translations
const newKeys = {
  // Seller section
  'seller_stores': {
    en: 'Seller Stores',
    fr: 'Magasins de vendeurs',
    ar: 'متاجر البائعين'
  },
  'store_details': {
    en: 'Store Details',
    fr: 'Détails du magasin',
    ar: 'تفاصيل المتجر'
  },
  
  // Product section
  'all_products': {
    en: 'All Products',
    fr: 'Tous les produits',
    ar: 'جميع المنتجات'
  },
  'product_list': {
    en: 'Product List',
    fr: 'Liste des produits',
    ar: 'قائمة المنتجات'
  },
  'new_products': {
    en: 'New Products',
    fr: 'Nouveaux produits',
    ar: 'منتجات جديدة'
  },
  'featured_products': {
    en: 'Featured Products',
    fr: 'Produits en vedette',
    ar: 'منتجات مميزة'
  },
  'best_sellers': {
    en: 'Best Sellers',
    fr: 'Meilleures ventes',
    ar: 'الأكثر مبيعاً'
  },
  'on_sale': {
    en: 'On Sale',
    fr: 'En vente',
    ar: 'للبيع'
  },
  'special_offers': {
    en: 'Special Offers',
    fr: 'Offres spéciales',
    ar: 'عروض خاصة'
  }
};

// Process each language file
['en', 'fr', 'ar'].forEach(lang => {
  const filePath = `src/assets/i18n/${lang}.json`;
  console.log(`📝 Processing ${lang}.json...`);
  
  // Read existing translations
  const translations = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Add new keys
  let addedCount = 0;
  Object.keys(newKeys).forEach(key => {
    if (!translations[key]) {
      translations[key] = newKeys[key][lang];
      addedCount++;
      console.log(`   ✅ Added: "${key}" = "${newKeys[key][lang]}"`);
    }
  });
  
  if (addedCount === 0) {
    console.log(`   ℹ️  No new keys to add`);
  }
  
  // Sort keys alphabetically
  const sortedTranslations = {};
  Object.keys(translations).sort().forEach(key => {
    sortedTranslations[key] = translations[key];
  });
  
  // Write back to file
  fs.writeFileSync(filePath, JSON.stringify(sortedTranslations, null, 2), 'utf8');
  console.log(`   💾 Saved ${lang}.json with ${Object.keys(sortedTranslations).length} keys\n`);
});

console.log('✅ Done! All missing navigation keys have been added.\n');
