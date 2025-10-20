/**
 * Fix duplicate keys in translation files
 */
const fs = require('fs');
const path = require('path');

const files = [
  'src/assets/i18n/en.json',
  'src/assets/i18n/fr.json',
  'src/assets/i18n/ar.json'
];

files.forEach(file => {
  console.log(`\n🔍 Processing ${file}...`);
  
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  const seenKeys = new Set();
  const duplicates = [];
  const fixedLines = [];
  
  lines.forEach((line, index) => {
    const match = line.match(/^\s*"([^"]+)":/);
    if (match) {
      const key = match[1];
      const lowerKey = key.toLowerCase();
      
      if (seenKeys.has(lowerKey)) {
        console.log(`  ❌ Duplicate found: "${key}" at line ${index + 1} - REMOVING`);
        duplicates.push({ key, line: index + 1 });
        return; // Skip this line
      }
      seenKeys.add(lowerKey);
    }
    fixedLines.push(line);
  });
  
  if (duplicates.length > 0) {
    // Create backup
    const backupFile = file.replace('.json', '.backup-fix-duplicates.json');
    fs.writeFileSync(backupFile, content);
    console.log(`  💾 Backup created: ${backupFile}`);
    
    // Write fixed content
    fs.writeFileSync(file, fixedLines.join('\n'));
    console.log(`  ✅ Fixed ${duplicates.length} duplicate(s)`);
  } else {
    console.log(`  ✅ No duplicates found`);
  }
});

console.log('\n✅ Done! All translation files processed.');
