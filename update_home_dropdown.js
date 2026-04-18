const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'pages');

// 1. Duplicate index.html to index-2.html
const index1Path = path.join(pagesDir, 'index.html');
const index2Path = path.join(pagesDir, 'index-2.html');

if (!fs.existsSync(index2Path)) {
    let index2Content = fs.readFileSync(index1Path, 'utf8');
    
    // Make a distinct visual change for Home v2
    index2Content = index2Content.replace(
        '<h1 style="font-size: 64px; font-weight: 800; margin-bottom: var(--space-3); line-height: 1.2; background: var(--gradient-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">', 
        '<h1 style="font-size: 64px; font-weight: 800; margin-bottom: var(--space-3); line-height: 1.2; background: var(--gradient-secondary); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">'
    );
    index2Content = index2Content.replace(
        'The most advanced technology.', 
        'Welcome to Alternative Home.'
    );
    index2Content = index2Content.replace(/<title>.*?<\/title>/, '<title>Home V2 | ElectroPremium</title>');
    
    fs.writeFileSync(index2Path, index2Content, 'utf8');
}

// 2. Add Dropdown to all pages
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    const dropdownHtml = `<div class="nav-dropdown">
                    <a href="index.html" style="cursor: pointer; display: flex; align-items: center;"$1>Home <i class="fas fa-chevron-down" style="font-size: 10px; margin-left: 6px;"></i></a>
                    <div class="dropdown-content">
                        <a href="index.html">Home v1</a>
                        <a href="index-2.html">Home v2</a>
                    </div>
                </div>`;
                
    // Regex matches <a href="index.html">Home</a> OR <a href="index.html" class="active">Home</a>
    if(!content.includes('Home v1')) {
        content = content.replace(/<a href="index\.html"( class="active")?>Home<\/a>/g, dropdownHtml);
        fs.writeFileSync(filePath, content, 'utf8');
    }
});

console.log("Created Home v2 and appended the dropdown successfully.");
