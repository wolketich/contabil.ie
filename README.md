# Contabil.ie

Static multilingual website for GitHub Pages.

Romanian is the primary language. Complete English and Russian pages are generated from one structured content file.

## Quick start

```bash
npm run build
```

Open `index.html` locally or serve the folder with any static server.

## Before publishing

1. Create a Formspree form for `info@contabil.ie`.
2. Replace `YOUR_FORM_ID` in `src/site-data.mjs`.
3. Run `npm run build`.
4. Submit a test enquiry in every language.
5. Review all public claims and dates before launch.
6. Publish the repository root through GitHub Pages.
7. Add `contabil.ie` as the custom domain and enable HTTPS.

## Where to edit

- `src/site-data.mjs`: all public content, routes, contact details and sources
- `scripts/build.mjs`: page templates, schema and static generation
- `assets/css/styles.css`: design and responsive behavior
- `assets/js/main.js`: navigation and Formspree safety check
- `docs/SEO-STRATEGY.md`: keyword and page plan
- `docs/CLAIMS-REGISTER.md`: evidence for risk-based claims
- `AGENTS.md`: continuation instructions for coding agents

Do not edit generated HTML files by hand. They will be replaced the next time the build runs.
