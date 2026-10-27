# Smart Closet · Competitive Pricing Intelligence

Mission 2 dashboard for the Smart Closet / AI Outfit Assistant concept. A responsive dark-mode static application with executive metrics, searchable competitor profiles, selected comparisons, interactive price charts, a live price-position explorer, opportunities and traceable research sources.

## Run and build

Requires Node.js 20 or later. No packages, backend, API keys or database are required.

- `npm test` (or `node --test test.js`): data integrity and calculation tests.
- `npm run build` (or `node build.js`): validate data and produce `dist/`.
- `npm run dev` (or `node server.js` after building): preview at http://127.0.0.1:4173/Pricing-Intelligence-Dashboard/.

The equivalent modern stack uses semantic HTML, modular JavaScript, CSS and accessible native controls. It avoids runtime library dependencies and is suitable for static GitHub Pages hosting. Fonts have local system fallbacks.

## GitHub Pages

Repository: https://github.com/oliviaosinovsky/Pricing-Intelligence-Dashboard

Publish from `main`, `/ (root)` in Settings → Pages → Deploy from a branch. Root runtime files are the same files copied to `dist/` by the build. All paths are relative; hash navigation supports refreshes under the repository base path. No development server is needed after deployment.

Expected live URL: https://oliviaosinovsky.github.io/Pricing-Intelligence-Dashboard/

## Source and methodology

`competitor_data.json` is an unchanged copy of the Mission 1 primary dataset, researched October 27, 2026. It was cross-checked against `competitor_research.xlsx` and `competitor_analysis.docx` in the parent research workspace. The original Word and Excel files are not republished.

- 5 indirect competitors; 25 pricing records; 5 representatives across mixed models.
- Comparable representative monthly software set: P004, P019, P024. n=3, minimum $9.99, maximum $12.99, mean $10.99, median $9.99.
- All monthly tiers: 5, ranging $3.99–$24.99. Annual tiers, free access, one-time app, credits, optional purchases and human services are never mixed into monthly statistics.
- Matching selected annual alternatives: P005, P020, P025. Mean $71.66/year, median $74.99/year.
- Price ranges/distribution are filtered to a single billing model. The register includes all 25 offers with original units and starting-price indicators.
- No numerical conflicts found across the checked workbook and JSON fields; report benchmarks agree. S15 is partially verified prelaunch context and excluded from statistics. Cladwell's generic trial field remains unknown; its notes specifically establish no web free trial, retained with that context.
- “Verified” is inherited research status for displayed amount only. Sources were not newly reverified as live offers. All regular/promotional fields are null; no confirmed current sale or out-of-stock record is in the supplied dataset.

The explorer compares the software component, not hardware. Classification uses representative sample min/max and interpolated quartiles. Equal prices match to the cent. The lower scenario uses the recommendation’s lower bound ($7.99); premium uses Q3 of all monthly tiers; the middle uses the representative median. Ties and the small sample are explained in the UI. Suggested software $7.99–$9.99/month and camera-kit $149–$249 are preliminary hypotheses; the latter is not derived from a verified hardware market price. No demand, revenue, cost, profit or elasticity models are included.

## Updating research

Replace the separate JSON file using the same schema, review editorial insights in `app.js`, then test and build. `model.js` owns analytical calculations; `app.js` owns rendering and interactions; `styles.css` owns design. Source IDs and URLs remain traceable. Reassess group boundaries if the schema, units or pricing models change.

## Testing

`test.js` covers IDs/relationships, population exclusions, monthly/annual benchmarks, starting prices, URL syntax, null values, classification boundaries and exact-cent comparisons. Browser verification is recorded in `QA.md`.
