/**
 * Add "all_items" translation key
 */
const fs = require('fs');

console.log('\n🔧 ADDING "all_items" TRANSLATION KEY\n');

// Read translation files
const en = JSON.parse(fs.readFileSync('src/assets/i18n/en.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('src/assets/i18n/fr.json', 'utf8'));
const ar = JSON.parse(fs.readFileSync('src/assets/i18n/ar.json', 'utf8'));

// Add the key if it doesn't exist
if (!en['all_items']) {
  en['all_items'] = 'All Items';
  console.log('✅ Added to en.json: "all_items" = "All Items"');
} else {
  console.log('ℹ️  en.json already has "all_items"');
}

if (!fr['all_items']) {
  fr['all_items'] = 'Tous les articles';
  console.log('✅ Added to fr.json: "all_items" = "Tous les articles"');
} else {
  console.log('ℹ️  fr.json already has "all_items"');
}

if (!ar['all_items']) {
  ar['all_items'] = 'جميع العناصر';
  console.log('✅ Added to ar.json: "all_items" = "جميع العناصر"');
} else {
  console.log('ℹ️  ar.json already has "all_items"');
}

// Sort and save
const sortedEn = {};
Object.keys(en).sort().forEach(key => sortedEn[key] = en[key]);
fs.writeFileSync('src/assets/i18n/en.json', JSON.stringify(sortedEn, null, 2), 'utf8');

const sortedFr = {};
Object.keys(fr).sort().forEach(key => sortedFr[key] = fr[key]);
fs.writeFileSync('src/assets/i18n/fr.json', JSON.stringify(sortedFr, null, 2), 'utf8');

const sortedAr = {};
Object.keys(ar).sort().forEach(key => sortedAr[key] = ar[key]);
fs.writeFileSync('src/assets/i18n/ar.json', JSON.stringify(sortedAr, null, 2), 'utf8');

console.log('\n✅ Done! Translation files updated.\n');
