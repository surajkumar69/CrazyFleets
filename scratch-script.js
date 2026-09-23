const fs = require('fs');
const path = require('path');

const replacements = [
  { regex: /bg-\[#0a0f1c\]\/90/g, replace: 'bg-background/90' },
  { regex: /bg-\[#0a0f1c\]\/60/g, replace: 'bg-background/60' },
  { regex: /bg-\[#0a0f1c\]/g, replace: 'bg-background' },
  { regex: /bg-\[#050813\]/g, replace: 'bg-muted' },
  { regex: /text-white/g, replace: 'text-foreground' },
  { regex: /text-slate-300/g, replace: 'text-muted-foreground' },
  { regex: /text-slate-400/g, replace: 'text-muted-foreground' },
  { regex: /text-slate-500/g, replace: 'text-muted-foreground' },
  { regex: /border-white\/10/g, replace: 'border-card-border' },
  { regex: /border-white\/5/g, replace: 'border-card-border' },
  { regex: /border-white\/20/g, replace: 'border-card-border' },
  { regex: /bg-slate-900\/50/g, replace: 'bg-muted' },
  { regex: /bg-slate-900/g, replace: 'bg-muted' },
  { regex: /bg-slate-800/g, replace: 'bg-muted' },
];

function walkDir(dir) {
  let files = [];
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      files = files.concat(walkDir(fullPath));
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      files.push(fullPath);
    }
  });
  return files;
}

const allFiles = walkDir('./src');

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;
  
  newContent = newContent.replace(/bg-white text-black/g, 'bg-foreground text-background');
  newContent = newContent.replace(/bg-white text-slate-900/g, 'bg-foreground text-background');
  
  replacements.forEach(({regex, replace}) => {
    newContent = newContent.replace(regex, replace);
  });
  
  newContent = newContent.replace(/ \[color-scheme:dark\]/g, '');

  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Updated', file);
  }
});
