/**
 * ElectroPremium - Core Logic
 * Handles theme toggling, mobile navigation, and shared UI components.
 */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileNav();
    initCart();
    initSearch();
});

/**
 * Theme Management
 * Supports system preference and manual storage override
 */
function initTheme() {
    const themeToggle = document.querySelector('#theme-toggle');
    if (!themeToggle) return;

    const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', currentTheme);

    themeToggle.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

/**
 * Mobile Navigation Logic
 */
function initMobileNav() {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav-links');
    
    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    }
}

/**
 * Cart Preview/Logic (UI only placeholder)
 */
function initCart() {
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Implement cart sidebar logic or redirection
            window.location.href = 'pages/cart.html';
        });
    }
}

/**
 * Search Bar Interaction
 */
function initSearch() {
    const searchFocus = document.querySelector('.search-bar input');
    if (searchFocus) {
        searchFocus.addEventListener('focus', () => {
            document.querySelector('.search-bar').classList.add('active');
        });
        searchFocus.addEventListener('blur', () => {
            document.querySelector('.search-bar').classList.remove('active');
        });
    }
}

// Global utility for skeleton loaders
function showSkeletons() {
    const skeletons = document.querySelectorAll('.skeleton');
    skeletons.forEach(s => s.style.display = 'block');
}

function hideSkeletons() {
    const skeletons = document.querySelectorAll('.skeleton');
    skeletons.forEach(s => s.style.display = 'none');
}
