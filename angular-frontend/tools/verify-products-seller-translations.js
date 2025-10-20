/**
 * Verify Products & Seller Navigation Translation Coverage
 */
const fs = require('fs');

console.log('\n🔍 PRODUCTS & SELLER NAVIGATION TRANSLATION CHECK\n');

// Read translation files
const en = JSON.parse(fs.readFileSync('src/assets/i18n/en.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('src/assets/i18n/fr.json', 'utf8'));
const ar = JSON.parse(fs.readFileSync('src/assets/i18n/ar.json', 'utf8'));

// Keys for Products section
const productKeys = [
  'products',
  'product',
  'all_products',
  'product_list',
  'product_details',
  'new_products',
  'featured_products',
  'best_sellers',
  'on_sale',
  'special_offers'
];

// Keys for Seller section
const sellerKeys = [
  'seller',
  'seller_stores',
  'seller_stores_basic',
  'seller_stores_classic',
  'store_details',
  'store_details_basic',
  'store_details_classic',
  'become_seller'
];

console.log('═'.repeat(70));
console.log('📦 PRODUCTS SECTION TRANSLATIONS');
console.log('═'.repeat(70) + '\n');

productKeys.forEach(key => {
  if (en[key] && fr[key] && ar[key]) {
    console.log(`✅ "${key}"`);
    console.log(`   🇬🇧 EN: ${en[key]}`);
    console.log(`   🇫🇷 FR: ${fr[key]}`);
    console.log(`   🇸🇦 AR: ${ar[key]}\n`);
  } else {
    console.log(`❌ "${key}" - MISSING\n`);
  }
});

console.log('═'.repeat(70));
console.log('🏪 SELLER SECTION TRANSLATIONS');
console.log('═'.repeat(70) + '\n');

sellerKeys.forEach(key => {
  if (en[key] && fr[key] && ar[key]) {
    console.log(`✅ "${key}"`);
    console.log(`   🇬🇧 EN: ${en[key]}`);
    console.log(`   🇫🇷 FR: ${fr[key]}`);
    console.log(`   🇸🇦 AR: ${ar[key]}\n`);
  } else {
    console.log(`❌ "${key}" - MISSING\n`);
  }
});

console.log('═'.repeat(70));
console.log('📊 SUMMARY');
console.log('═'.repeat(70));

const allKeys = [...productKeys, ...sellerKeys];
const totalKeys = allKeys.length;
const completeKeys = allKeys.filter(key => en[key] && fr[key] && ar[key]).length;

console.log(`Total Keys Checked: ${totalKeys}`);
console.log(`Complete: ${completeKeys} ✅`);
console.log(`Missing: ${totalKeys - completeKeys} ${totalKeys - completeKeys > 0 ? '❌' : '✅'}`);

if (completeKeys === totalKeys) {
  console.log('\n✅ ALL PRODUCTS & SELLER TRANSLATIONS ARE COMPLETE!\n');
} else {
  console.log('\n⚠️  SOME TRANSLATIONS ARE MISSING!\n');
}
