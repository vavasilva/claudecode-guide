# Style & Conventions

## CSS
- Use CSS custom properties (variables) defined in `:root`
- Color scheme: Dark terminal/cyberpunk theme
- Key colors: `--accent-cyan`, `--accent-purple`, `--accent-orange`
- Fonts: `Outfit` (display), `Space Mono` (code)

## HTML
- Use semantic HTML5 elements
- Accordion pattern for content sections
- Data attributes for search (`data-searchable`)
- BEM-like class naming

## JavaScript
- Vanilla JS, no frameworks
- `searchData` array contains all searchable content
- Event delegation for dynamic elements
- Smooth scroll behavior

## Content Structure
Each feature section follows the accordion pattern:
```html
<div class="accordion" id="section-id">
  <div class="accordion-header">...</div>
  <div class="accordion-content">
    <div class="accordion-body">...</div>
  </div>
</div>
```

## Adding New Sections
1. Add accordion HTML in `index.html`
2. Add search entries in `app.js` `searchData` array
3. Add navigation link in nav menu
