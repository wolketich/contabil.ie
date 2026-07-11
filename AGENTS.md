# Coding agent instructions

## Project goal

Contabil.ie is a conversion-focused Irish tax website for Romanian and Moldovan workers, subcontractors, freelancers and families. Romanian is the primary language. English and Russian are complete secondary versions.

## Required workflow

1. Read `README.md`, `docs/CONTENT-GUIDE.md`, `docs/SEO-STRATEGY.md` and `docs/CLAIMS-REGISTER.md`.
2. Edit source content in `src/site-data.mjs`.
3. Edit templates in `scripts/build.mjs` only when structure must change.
4. Edit design in `assets/css/styles.css`.
5. Run `npm run build` after any content, route or template change.
6. Validate every generated HTML page and check internal links.

## Important constraints

- Keep Romanian as the root language.
- Preserve complete English and Russian equivalents.
- Keep hreflang, canonical URLs, schema and sitemap output.
- Use accurate urgency. Never add fake countdowns, false scarcity, invented testimonials or guaranteed tax outcomes.
- Revenue determines RCT rates. Never promise a 0% rate.
- Banks determine mortgage approval. Never promise approval.
- Do not add a personal name, job title, portrait or testimonials unless the owner requests it.
- Keep Call and WhatsApp as the main actions.
- Keep the first consultation described as free.
- Do not publish prices. Use a quote request.
- Keep the Formspree safety check. A placeholder form must never submit.

## Deployment

The repository root is the GitHub Pages publishing folder. The `CNAME` file must remain set to `contabil.ie`.
