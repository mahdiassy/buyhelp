/**
 * tools/find-and-fix-hardcoded-text.js
 * 
 * Finds all hardcoded text in templates and provides exact fixes
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Files with known hardcoded text
const hardcodedIssues = [
  {
    file: 'src/app/shared/components/header/widgets/mobile-menu/mobile-menu.component.html',
    issues: [
      { line: 7, old: '<span>Home</span>', new: '<span>{{ \'home\' | translate }}</span>' },
      { line: 14, old: '<span>Category</span>', new: '<span>{{ \'category\' | translate }}</span>' },
      { line: 21, old: '<span>My Wish</span>', new: '<span>{{ \'my_wishlist\' | translate }}</span>' },
      { line: 28, old: '<span>Cart</span>', new: '<span>{{ \'cart\' | translate }}</span>' }
    ]
  },
  {
    file: 'src/app/components/account/downloads/downloads.component.html',
    issues: [
      { line: 10, old: '<button class="btn theme-bg-color text-light" type="button" (click)="search()">Search</button>', 
        new: '<button class="btn theme-bg-color text-light" type="button" (click)="search()">{{ \'search\' | translate }}</button>' }
    ]
  }
];

console.log('\x1b[36m🔍 Scanning for hardcoded text in templates...\x1b[0m\n');

const fixes = [];
let filesScanned = 0;
let issuesFound = 0;

// Scan all HTML files
const htmlFiles = glob.sync('src/**/*.html');
filesScanned = htmlFiles.length;

const problematicPatterns = [
  // Hardcoded button text
  { pattern: /<button[^>]*>(\s*)([A-Z][a-z]+)(\s*)<\/button>/g, type: 'button' },
  // Hardcoded span text in navigation
  { pattern: /<span>([A-Z][a-z\s]+)<\/span>/g, type: 'span' },
  // Hardcoded labels
  { pattern: /<label[^>]*>(\s*)([A-Z][a-z\s]+)(\s*)<\/label>/g, type: 'label' },
  // Hardcoded headings (only simple ones, not those with {{...}})
  { pattern: /<h[1-6][^>]*>([A-Z][a-z\s]+)<\/h[1-6]>/g, type: 'heading' }
];

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  
  lines.forEach((line, index) => {
    // Skip lines that already use translate pipe
    if (line.includes('| translate')) return;
    // Skip lines with Angular expressions
    if (line.includes('{{') && line.includes('}}')) return;
    // Skip lines with ngIf, ngFor, etc.
    if (line.includes('*ngIf') || line.includes('*ngFor')) return;
    
    // Check for hardcoded text patterns
    if (/<span>[A-Z][a-z]+<\/span>/.test(line) && !line.includes('translate')) {
      const match = line.match(/<span>([A-Z][a-z\s]+)<\/span>/);
      if (match) {
        issuesFound++;
        fixes.push({
          file: file.replace(/\\/g, '/'),
          line: index + 1,
          original: line.trim(),
          text: match[1],
          fix: line.replace(match[0], `<span>{{ '${match[1].toLowerCase().replace(/\s+/g, '_')}' | translate }}</span>`)
        });
      }
    }
    
    if (/<button[^>]*>[A-Z][a-z\s]+<\/button>/.test(line) && !line.includes('translate') && !line.includes('{{')) {
      const match = line.match(/<button[^>]*>(\s*)([A-Z][a-z\s]+)(\s*)<\/button>/);
      if (match) {
        issuesFound++;
        const text = match[2];
        const key = text.toLowerCase().replace(/\s+/g, '_');
        fixes.push({
          file: file.replace(/\\/g, '/'),
          line: index + 1,
          original: line.trim(),
          text: text,
          fix: line.replace(`>${match[1]}${text}${match[3]}<`, `>${match[1]}{{ '${key}' | translate }}${match[3]}<`)
        });
      }
    }
  });
});

console.log(`\x1b[34m📊 Scanned ${filesScanned} HTML files\x1b[0m`);
console.log(`\x1b[33m⚠️  Found ${issuesFound} hardcoded text issues\x1b[0m\n`);

if (fixes.length > 0) {
  console.log('\x1b[36m📋 Issues found:\x1b[0m\n');
  
  fixes.forEach((fix, idx) => {
    console.log(`\x1b[33m${idx + 1}. ${fix.file}:${fix.line}\x1b[0m`);
    console.log(`   Text: "${fix.text}"`);
    console.log(`   \x1b[90m${fix.original}\x1b[0m`);
    console.log(`   \x1b[32m${fix.fix.trim()}\x1b[0m\n`);
  });
  
  // Save report
  fs.writeFileSync('tools/hardcoded-text-report.json', JSON.stringify({ 
    summary: {
      filesScanned,
      issuesFound,
      fixesGenerated: fixes.length
    },
    fixes 
  }, null, 2));
  
  console.log(`\x1b[36m📄 Report saved to: tools/hardcoded-text-report.json\x1b[0m\n`);
  console.log(`\x1b[33m💡 Run 'node tools/apply-hardcoded-fixes.js' to automatically apply all fixes\x1b[0m`);
} else {
  console.log('\x1b[32m✅ No hardcoded text found! All text is properly translated.\x1b[0m');
}
