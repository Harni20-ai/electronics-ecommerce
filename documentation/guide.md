# Customization & Installation Guide

## Installation
The ElectroPremium template is a pure frontend implementation and does not require a build step.
1. Extract the folder to your web server (Apache, Nginx, or local development server).
2. Point your domain to the root directory.
3. Access the site via `yourdomain.com/pages/index.html`.

## Design System (style.css)
The design is controlled via CSS variables in `assets/css/style.css`.
- `--accent-color`: Change this to modify the primary action color (default Apple Blue).
- `--radius-lg`: Controls the roundness of cards and buttons.
- `--font-family`: The system defaults to "SF Pro" with "Inter" as the Google Font fallback.

## Configuring Dashboards
The dashboards are static HTML templates. To integrate with a backend:
1. Replace the static arrays in `admin-dashboard.html` with your API data.
2. Use AJAX/Fetch to populate charts in `assets/js/dashboard.js`.

## SEO & Meta Tags
Every page includes specific title and description tags. Update these in the `<head>` section of each `.html` file for optimal search engine rankings.
- Ensure the `og:image` path is updated to your absolute domain.
- Modify `sitemap.xml` with your final production URLs.
