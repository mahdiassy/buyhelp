/**
 * tools/extract-unique-strings.js
 * 
 * Extracts unique strings from i18n-scan-report.json and organizes them
 * for translation. Generates suggested key names based on context.
 */

const fs = require('fs');
const path = require('path');

const reportPath = 'tools/i18n-scan-report.json';
const outputPath = 'tools/unique-strings-organized.json';

if (!fs.existsSync(reportPath)) {
  console.error('❌ Report not found. Run: node tools/scan-i18n.js first');
  process.exit(1);
}

const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
const items = report.items || [];

// Group by file/component for better organization
const byComponent = {};
const uniqueStrings = new Set();

items.forEach(item => {
  const text = item.text.trim();
  uniqueStrings.add(text);
  
  // Extract component name from file path
  const match = item.file.match(/\/([^\/]+)\.(component|service|page)\.html/);
  const component = match ? match[1] : 'global';
  
  if (!byComponent[component]) {
    byComponent[component] = {
      texts: [],
      attributes: []
    };
  }
  
  if (item.type === 'text') {
    byComponent[component].texts.push({
      text,
      file: item.file,
      context: item.context
    });
  } else {
    byComponent[component].attributes.push({
      text,
      attr: item.attr,
      tag: item.tag,
      file: item.file
    });
  }
});

// Generate suggested keys
function generateKey(text, context, component) {
  // Clean and normalize text
  let key = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '_')
    .substring(0, 50);
  
  // Add context prefix
  const contextMap = {
    'button': 'btn',
    'a': 'link',
    'h1': 'title',
    'h2': 'subtitle',
    'p': 'text',
    'span': 'label',
    'div': 'content'
  };
  
  const prefix = contextMap[context] || 'text';
  
  // Return component.prefix.key format
  return `${component}.${prefix}.${key}`;
}

// Build organized structure
const organized = {
  summary: {
    totalStrings: uniqueStrings.size,
    totalComponents: Object.keys(byComponent).length,
    textNodes: items.filter(i => i.type === 'text').length,
    attributes: items.filter(i => i.type === 'attribute').length
  },
  byComponent: {},
  flatKeysList: []
};

// Generate keys for each component
Object.keys(byComponent).sort().forEach(componentName => {
  const comp = byComponent[componentName];
  organized.byComponent[componentName] = {
    texts: comp.texts.map(t => ({
      suggestedKey: generateKey(t.text, t.context, componentName),
      englishText: t.text,
      context: t.context,
      file: t.file
    })),
    attributes: comp.attributes.map(a => ({
      suggestedKey: generateKey(a.text, a.tag, componentName),
      englishText: a.text,
      attributeType: a.attr,
      tag: a.tag,
      file: a.file
    }))
  };
  
  // Add to flat list
  comp.texts.forEach(t => {
    organized.flatKeysList.push({
      key: generateKey(t.text, t.context, componentName),
      en: t.text,
      type: 'text',
      component: componentName
    });
  });
  
  comp.attributes.forEach(a => {
    organized.flatKeysList.push({
      key: generateKey(a.text, a.tag, componentName),
      en: a.text,
      type: 'attribute',
      component: componentName
    });
  });
});

// Remove duplicate keys
const uniqueKeys = new Map();
organized.flatKeysList.forEach(item => {
  if (!uniqueKeys.has(item.key)) {
    uniqueKeys.set(item.key, item);
  }
});

organized.flatKeysList = Array.from(uniqueKeys.values());
organized.summary.uniqueKeys = organized.flatKeysList.length;

// Save report
fs.writeFileSync(outputPath, JSON.stringify(organized, null, 2), 'utf8');

console.log('\x1b[32m✅ Extraction complete\x1b[0m');
console.log(`\x1b[34m📊 Total unique strings: ${uniqueStrings.size}\x1b[0m`);
console.log(`\x1b[34m📊 Generated keys: ${organized.flatKeysList.length}\x1b[0m`);
console.log(`\x1b[34m📊 Components affected: ${Object.keys(byComponent).length}\x1b[0m`);
console.log(`\x1b[36m📁 Saved to: ${outputPath}\x1b[0m`);

// Generate simple key-value JSON for easy import
const simpleJson = {};
organized.flatKeysList.forEach(item => {
  simpleJson[item.key] = item.en;
});

const simpleOutputPath = 'tools/new-translation-keys.json';
fs.writeFileSync(simpleOutputPath, JSON.stringify(simpleJson, null, 2), 'utf8');
console.log(`\x1b[36m📁 Simple JSON saved to: ${simpleOutputPath}\x1b[0m`);

// Show top 20 for preview
console.log('\n\x1b[33m📋 Preview (first 20 keys):\x1b[0m');
organized.flatKeysList.slice(0, 20).forEach((item, idx) => {
  console.log(`  ${idx + 1}. "${item.key}": "${item.en}"`);
});

if (organized.flatKeysList.length > 20) {
  console.log(`  ... and ${organized.flatKeysList.length - 20} more`);
}
