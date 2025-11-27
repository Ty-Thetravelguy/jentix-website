# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Jentix is a static HTML/CSS/JavaScript marketing website for a travel analytics platform designed for Travel Management Companies (TMCs). The site showcases product features, explains how the platform works, and includes a contact form for demo bookings.

## Development

### Serving Locally

No build step is required. Serve the static files directly:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

Visit `http://localhost:8000`

### No Build/Test/Lint Tools Configured

This is a simple static site with no package.json, bundlers, or testing frameworks.

## Architecture

### File Structure

- `index.html` - Single-page marketing site with all sections
- `static/css/style.css` - All styling with CSS variables for theming
- `static/js/script.js` - Mobile nav toggle, smooth scrolling, form handling

### Page Sections

The single-page site has these anchored sections:
- `#overview` - Hero with value proposition and KPI snapshot
- `#features` - 6-card grid of product capabilities
- `#how-it-works` - 4-step process flow
- `#for-tmcs` - TMC-specific value proposition
- `#contact` - Contact form (currently demo only, no backend)

### CSS Theming

Uses CSS custom properties defined in `:root`:
- Primary background: `#050816` (dark navy)
- Accent: `#4f46e5` (indigo)
- Responsive breakpoints at 720px and 960px

### JavaScript

Vanilla ES6+ with no dependencies:
- Mobile hamburger menu toggle (`.nav-open` class)
- Smooth scroll with sticky header offset calculation
- Form submission handler (shows demo message, resets form)

## Key Considerations

- Form submission is demo only - needs backend integration for actual functionality
- Sticky header height affects scroll offset calculations
- Dark theme throughout - maintain color scheme consistency
