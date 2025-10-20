/**
 * tools/scan-i18n.js
 * Usage: node tools/scan-i18n.js [srcDir]
 *
 * Scans Angular templates (.html) and inline templates in .ts for:
 *  - text nodes (visible text) that are not empty or pure punctuation
 *  - attributes: placeholder, title, aria-label, alt, value (for <button>)
 *  - ignores elements inside comments, script, style
 *
 * Output: tools/i18n-scan-report.json + console summary
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const parse5 = require('parse5');

// Simple color functions (chalk v5+ is ESM only)
const chalk = {
  green: (str) => `\x1b[32m${str}\x1b[0m`,
  blue: (str) => `\x1b[34m${str}\x1b[0m`,
  yellow: (str) => `\x1b[33m${str}\x1b[0m`,
  gray: (str) => `\x1b[90m${str}\x1b[0m`,
  cyan: (str) => `\x1b[36m${str}\x1b[0m`,
  red: (str) => `\x1b[31m${str}\x1b[0m`
};

const SRC = process.argv[2] || 'src';
const OUTPUT = path.join('tools', 'i18n-scan-report.json');

function isVisibleText(text) {
  if (!text) return false;
  const trimmed = text.replace(/\s+/g, ' ').trim();
  if (!trimmed) return false;
  // ignore strings that look like code or just punctuation
  if (/^[\s\W0-9]+$/.test(trimmed)) return false;
  // ignore very short words that are likely structural (a, i) — but keep "OK", "No", etc.
  return trimmed.length >= 1;
}

function extractTextFromNode(node, filePath, results) {
  if (!node) return;
  // ignore script/style/noscript tags contents
  if (node.tagName && ['script', 'style', 'noscript'].includes(node.tagName.toLowerCase())) return;

  if (node.nodeName === '#text') {
    const text = node.value;
    if (isVisibleText(text)) {
      // find parent tag path for context
      const context = node.__parentTag || 'unknown';
      results.push({
        type: 'text',
        file: filePath,
        text: text.trim(),
        context,
      });
    }
  } else if (node.attrs) {
    // check attributes that are commonly translatable
    const attrsToCheck = ['placeholder', 'title', 'aria-label', 'alt'];
    attrsToCheck.forEach(a => {
      const attr = node.attrs.find(x => x.name === a);
      if (attr && isVisibleText(attr.value)) {
        results.push({
          type: 'attribute',
          file: filePath,
          attr: a,
          text: attr.value.trim(),
          tag: node.tagName
        });
      }
    });

    // check button value or inner text candidate
    if (node.tagName === 'button') {
      // sometimes button text appears as child node; handled above
      // but also check value attr
      const val = node.attrs.find(x => x.name === 'value');
      if (val && isVisibleText(val.value)) {
        results.push({
          type: 'attribute',
          file: filePath,
          attr: 'value',
          text: val.value.trim(),
          tag: 'button'
        });
      }
    }
  }

  // recurse to children
  const children = node.childNodes || node.content && node.content.childNodes;
  if (children) {
    children.forEach(child => {
      // store parent tag name on child text nodes to give context
      if (child.nodeName === '#text') {
        child.__parentTag = node.tagName || node.nodeName || 'unknown';
      }
      extractTextFromNode(child, filePath, results);
    });
  }
}

function scanHtmlFile(file) {
  const content = fs.readFileSync(file, 'utf8');
  let doc;
  try {
    doc = parse5.parseFragment(content, { sourceCodeLocationInfo: true });
  } catch (e) {
    console.warn('parse error', file, e.message);
    return [];
  }
  const results = [];
  // annotate parent tags during traversal
  function walk(node, parentTag) {
    if (!node) return;
    if (node.nodeName && node.nodeName !== '#text') parentTag = node.tagName || node.nodeName;
    // attach parent tag for text nodes
    if (node.nodeName === '#text') node.__parentTag = parentTag;
    if (node.nodeName === '#text' || node.attrs || node.childNodes) {
      extractTextFromNode(node, file, results);
    }
    const children = node.childNodes || node.content && node.content.childNodes;
    if (children) {
      children.forEach(c => walk(c, parentTag));
    }
  }

  (doc.childNodes || []).forEach(n => walk(n, null));
  return results;
}

function scanInlineTemplatesInTs(file) {
  // very simple regex to extract template: `template: \`...\``
  const content = fs.readFileSync(file, 'utf8');
  const results = [];
  const inlineTemplateRegex = /template\s*:\s*`([\s\S]*?)`/g;
  let m;
  while ((m = inlineTemplateRegex.exec(content)) !== null) {
    const tpl = m[1];
    // parse fragment
    try {
      const frag = parse5.parseFragment(tpl);
      // reuse extract
      const res = [];
      (frag.childNodes || []).forEach(n => extractTextFromNode(n, file + ':inline-template', res));
      results.push(...res);
    } catch (e) {
      console.warn('inline parse error', file, e.message);
    }
  }
  return results;
}

function runScan() {
  const htmlFiles = glob.sync(`${SRC}/**/*.html`);
  const tsFiles = glob.sync(`${SRC}/**/*.ts`);
  let all = [];

  htmlFiles.forEach(f => {
    const res = scanHtmlFile(f);
    // filter out nodes that already have i18n attribute on parent (rough check)
    const filtered = res.filter(item => {
      if (item.type === 'text') {
        // quick check: see if surrounding text contains i18n marker
        const fileContent = fs.readFileSync(item.file, 'utf8');
        // find the snippet - simple heuristic: search for the text trimmed in the file, then check preceding tag with i18n attribute
        const idx = fileContent.indexOf(item.text);
        if (idx >= 0) {
          // search back for 'i18n' within previous 200 chars
          const start = Math.max(0, idx - 200);
          const snippet = fileContent.substring(start, idx);
          if (/\bi18n\b/.test(snippet)) {
            return false; // already has an i18n marker near it
          }
        }
      } else if (item.type === 'attribute') {
        // attribute-level: check if attribute name has i18n-<attr> or i18n exists on tag
        const fileContent = fs.readFileSync(item.file, 'utf8');
        // quickly check if attr has i18n-attrname or parent tag has i18n
        const attrPattern = new RegExp(`${item.attr}\\s*=\\s*["'\`]${escapeRegExp(item.text)}["'\`]`);
        const matchIdx = fileContent.search(attrPattern);
        if (matchIdx >= 0) {
          // check for i18n-attr or i18n near tag start
          const prev = fileContent.lastIndexOf('<', matchIdx);
          const tagSegment = fileContent.substring(prev, matchIdx + 200);
          if (/\bi18n(-[a-z]+)?\b/.test(tagSegment)) {
            return false;
          }
        }
      }
      return true;
    });
    all.push(...filtered);
  });

  tsFiles.forEach(f => {
    const res = scanInlineTemplatesInTs(f);
    all.push(...res);
  });

  // de-duplicate by file+text
  const map = new Map();
  all.forEach(it => {
    const key = `${it.file}:::${it.text}`;
    if (!map.has(key)) map.set(key, it);
  });
  const unique = Array.from(map.values());

  // save report
  const summary = {
    scannedHtml: htmlFiles.length,
    scannedTs: tsFiles.length,
    found: unique.length,
    foundByType: unique.reduce((acc, cur) => {
      acc[cur.type] = (acc[cur.type] || 0) + 1;
      return acc;
    }, {}),
  };

  if (!fs.existsSync('tools')) fs.mkdirSync('tools');
  fs.writeFileSync(OUTPUT, JSON.stringify({ summary, items: unique }, null, 2), 'utf8');

  console.log(chalk.green('✅ i18n scan finished'));
  console.log(chalk.blue(`📄 HTML files scanned: ${summary.scannedHtml}`));
  console.log(chalk.blue(`📄 TS files scanned: ${summary.scannedTs}`));
  console.log(chalk.yellow(`⚠️  Potential untranslated items found: ${summary.found}`));
  console.log(chalk.gray(`📊 Report saved to ${OUTPUT}`));
  console.log(chalk.cyan(`\nBreakdown by type:`));
  Object.keys(summary.foundByType).forEach(type => {
    console.log(chalk.cyan(`  - ${type}: ${summary.foundByType[type]}`));
  });
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

runScan();
