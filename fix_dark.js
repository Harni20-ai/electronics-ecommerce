const fs = require('fs');
const path = require('path');
const pagesDir = path.join(__dirname, 'pages');

const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    content = content.replace(/background: white;/g, 'background: var(--surface-white);');
    content = content.replace(/background: #F5F5F7;/g, 'background: var(--bg-light);');
    content = content.replace(/background-color: white;/g, 'background-color: var(--surface-white);');
    content = content.replace(/background-color: #F5F5F7;/g, 'background-color: var(--bg-light);');
    
    // Text colors
    content = content.replace(/color: #333;/g, 'color: var(--text-primary);');
    content = content.replace(/color: #1D1D1F;/g, 'color: var(--text-primary);');
    content = content.replace(/color: #000;/g, 'color: var(--text-primary);');
    
    fs.writeFileSync(filePath, content, 'utf8');
});

const darkCss = `
/* Dashboard Specific Fixes */
[data-theme='dark'] .sidebar,
[data-theme='dark'] .stat-card,
[data-theme='dark'] .data-table-container,
[data-theme='dark'] .profile-sidebar,
[data-theme='dark'] .auth-box {
    background: var(--surface-white);
    border-color: rgba(255, 255, 255, 0.05);
}

[data-theme='dark'] .data-table th,
[data-theme='dark'] .data-table td,
[data-theme='dark'] .nav-item {
    color: var(--text-primary);
    border-color: rgba(255, 255, 255, 0.05);
}

[data-theme='dark'] .nav-item:hover, 
[data-theme='dark'] .nav-item.active {
    background: rgba(106, 17, 203, 0.1);
}

[data-theme='dark'] .sidebar {
    background: var(--bg-light);
    border-color: rgba(255, 255, 255, 0.05);
}

[data-theme='dark'] .stat-card .value,
[data-theme='dark'] .stat-card .label,
[data-theme='dark'] h1, 
[data-theme='dark'] h2, 
[data-theme='dark'] h3 {
    color: var(--text-primary);
}

[data-theme='dark'] .text-secondary,
[data-theme='dark'] p.text-secondary {
    color: var(--text-secondary) !important;
}
`;

fs.appendFileSync(path.join(__dirname, 'assets/css/dark-mode.css'), darkCss, 'utf8');
console.log("Dark mode fixed for dashboard and globally. (JS version)");
