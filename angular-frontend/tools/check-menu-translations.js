const en = require('../src/assets/i18n/en.json');
const fr = require('../src/assets/i18n/fr.json');
const ar = require('../src/assets/i18n/ar.json');

const menuKeys = ['pages', 'products', 'seller', 'services', 'support'];

console.log('\n🔍 CHECKING MENU NAVIGATION TRANSLATIONS\n');

menuKeys.forEach(key => {
  console.log(`\x1b[36m${key}:\x1b[0m`);
  console.log(`  EN: "${en[key]}"`);
  console.log(`  FR: "${fr[key]}"`);
  console.log(`  AR: "${ar[key]}"`);
  console.log('');
});
