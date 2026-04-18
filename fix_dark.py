import os
import glob

# 1. Update HTML files to use CSS variables instead of hardcoded hex values
html_files = glob.glob('d:/websites/electro-premium/pages/*.html')
for path in html_files:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace hardcoded light mode colors with their respective CSS variables
    # This enables dark mode to seamlessly swap them out globally
    content = content.replace('background: white;', 'background: var(--surface-white);')
    content = content.replace('background: #F5F5F7;', 'background: var(--bg-light);')
    content = content.replace('background-color: white;', 'background-color: var(--surface-white);')
    content = content.replace('background-color: #F5F5F7;', 'background-color: var(--bg-light);')
    
    # Text colors
    content = content.replace('color: #333;', 'color: var(--text-primary);')
    content = content.replace('color: #1D1D1F;', 'color: var(--text-primary);')
    content = content.replace('color: #000;', 'color: var(--text-primary);')
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

# 2. Append missing elements to dark-mode.css
dark_css = """
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
"""

with open('d:/websites/electro-premium/assets/css/dark-mode.css', 'a', encoding='utf-8') as f:
    f.write(dark_css)

print("Dark mode fixed for dashboard and globally.")
