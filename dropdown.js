const fs = require('fs');
const path = require('path');
const pagesDir = path.join(__dirname, 'pages');

const cssCode = `
/* Dropdown Menu Options */
.nav-dropdown {
    position: relative;
    display: flex;
    align-items: center;
}

.dropdown-content {
    display: none;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(10px);
    background: var(--surface-white);
    min-width: 200px;
    box-shadow: var(--shadow-float);
    border-radius: var(--radius-sm);
    padding: var(--space-2) 0;
    z-index: 1000;
    opacity: 0;
    transition: var(--transition);
    border: 1px solid var(--border-color);
}

.nav-dropdown:hover .dropdown-content {
    display: block;
    opacity: 1;
    transform: translateX(-50%) translateY(0);
}

.dropdown-content a {
    color: var(--text-primary) !important;
    padding: 10px var(--space-3);
    display: block;
    font-size: 14px;
    font-weight: 500;
    transition: var(--transition);
    margin-bottom: 0 !important;
}

.dropdown-content a:hover {
    background-color: var(--bg-light);
    color: var(--primary-start) !important;
    padding-left: calc(var(--space-3) + 4px);
}
`;

// Append CSS
fs.appendFileSync(path.join(__dirname, 'assets/css/style.css'), cssCode, 'utf8');

const dropdownHtml = `                <div class="nav-dropdown">
                    <a href="#" style="cursor: pointer; display: flex; align-items: center;">Dashboards <i class="fas fa-chevron-down" style="font-size: 10px; margin-left: 6px;"></i></a>
                    <div class="dropdown-content">
                        <a href="user-dashboard.html">User Dashboard</a>
                        <a href="admin-dashboard.html">Admin Dashboard</a>
                    </div>
                </div>
`;

// Append HTML
fs.readdirSync(pagesDir).filter(f => f.endsWith('.html')).forEach(file => {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (!content.includes('class="nav-dropdown"')) {
        content = content.replace('            </nav>', dropdownHtml + '            </nav>');
        fs.writeFileSync(filePath, content, 'utf8');
    }
});
console.log("Dropdown injected! (JS version)");
