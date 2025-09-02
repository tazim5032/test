const TurndownService = require('turndown');
const fs = require('fs');

const turndownService = new TurndownService();
const html = fs.readFileSync('index.html', 'utf-8');
const markdown = turndownService.turndown(html);

fs.writeFileSync('index.md', markdown);
console.log('Conversion complete!');
