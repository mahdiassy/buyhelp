/**
 * Verify Navigation Translation Coverage
 * Tests that all common navigation items have proper translations
 */
const fs = require('fs');

console.log('\n🔍 NAVIGATION TRANSLATION COVERAGE CHECK\n');

// Read translation files
const en = JSON.parse(fs.readFileSync('src/assets/i18n/en.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('src/assets/i18n/fr.json', 'utf8'));
const ar = JSON.parse(fs.readFileSync('src/assets/i18n/ar.json', 'utf8'));

// Common navigation keys that should be translated
const navigationKeys = [
  // Main navigation
  'home', 'shop', 'products', 'pages', 'blog', 'contact',
  'seller', 'services', 'support',
  
  // Common pages
  'about_us', 'faq', 'privacy', 'terms',
  
  // Shopping pages
  'collections', 'cart', 'wishlist', 'compare', 'checkout',
  'my_account',
  
  // Additional
  'categories', 'category', 'brands', 'orders', 'search'
];

console.log('📊 Checking Navigation Translation Keys:\n');

let allPresent = true;
const missing = { en: [], fr: [], ar: [] };

navigationKeys.forEach(key => {
  const enPresent = en[key] !== undefined;
  const frPresent = fr[key] !== undefined;
  const arPresent = ar[key] !== undefined;
  
  if (!enPresent) missing.en.push(key);
  if (!frPresent) missing.fr.push(key);
  if (!arPresent) missing.ar.push(key);
  
  if (enPresent && frPresent && arPresent) {
    console.log(`✅ "${key}"`);
    console.log(`   EN: ${en[key]}`);
    console.log(`   FR: ${fr[key]}`);
    console.log(`   AR: ${ar[key]}\n`);
  } else {
    allPresent = false;
    console.log(`❌ "${key}" - Missing in: ${!enPresent ? 'EN ' : ''}${!frPresent ? 'FR ' : ''}${!arPresent ? 'AR' : ''}\n`);
  }
});

console.log('='.repeat(60));

if (allPresent) {
  console.log('✅ ALL NAVIGATION KEYS ARE TRANSLATED!');
  console.log(`✅ Total: ${navigationKeys.length} navigation items in all 3 languages`);
} else {
  console.log('⚠️ MISSING TRANSLATIONS DETECTED:');
  if (missing.en.length) console.log(`   EN: ${missing.en.join(', ')}`);
  if (missing.fr.length) console.log(`   FR: ${missing.fr.join(', ')}`);
  if (missing.ar.length) console.log(`   AR: ${missing.ar.join(', ')}`);
}

console.log('='.repeat(60) + '\n');
