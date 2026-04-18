import os
import glob
import re

css_code = """
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
"""

with open('d:/websites/electro-premium/assets/css/style.css', 'a', encoding='utf-8') as f:
    f.write(css_code)

html_files = glob.glob('d:/websites/electro-premium/pages/*.html')

dropdown_html = """                <div class="nav-dropdown">
                    <a href="#" style="cursor: pointer; display: flex; align-items: center;">Dashboards <i class="fas fa-chevron-down" style="font-size: 10px; margin-left: 6px;"></i></a>
                    <div class="dropdown-content">
                        <a href="user-dashboard.html">User Dashboard</a>
                        <a href="admin-dashboard.html">Admin Dashboard</a>
                    </div>
                </div>
"""

for path in html_files:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # ensure we only insert it once
    if 'class="nav-dropdown"' not in content:
        # We will insert it right before the closing </nav> tag
        content = content.replace('            </nav>', dropdown_html + '            </nav>')
        
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)

print("Dropdown added successfully!")
