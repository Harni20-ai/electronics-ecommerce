/**
 * ElectroPremium - Dashboard Logic
 * Handles sidebar toggling, chart rendering (mock), and data management UI.
 */

document.addEventListener('DOMContentLoaded', () => {
    initDashboardSidebar();
    initMockCharts();
    initAdminTables();
});

function initDashboardSidebar() {
    const toggleBtn = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
        });
    }
}

/**
 * Render mock charts using SVG/CSS
 * In a real app, use Chart.js or D3.js
 */
function initMockCharts() {
    // Basic CSS-based bar chart logic can go here
    const bars = document.querySelectorAll('.chart-bar');
    bars.forEach(bar => {
        const height = bar.getAttribute('data-height');
        if (height) bar.style.height = height + '%';
    });
}

function initAdminTables() {
    // Handle row deletions or status changes
    const deleteBtns = document.querySelectorAll('.btn-delete');
    deleteBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (confirm('Are you sure you want to delete this item?')) {
                e.target.closest('tr').remove();
            }
        });
    });
}
