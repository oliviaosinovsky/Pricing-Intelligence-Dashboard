# ClosetCue — Pricing & Cost Laboratory (Mission 3)

A static, browser-only financial laboratory built from the supplied Mission 1 research and the ClosetCue concept website. Mission 2 stays at the repository root; this application is published under `/laboratory/`. The original venture site at https://oliviaosinovsky.github.io/valmora/ is unchanged.

## Run
Node 20+; no installation or API key is required. `node --test test.js`, `node build.js`, then `node server.js`. Preview: http://127.0.0.1:4174/Pricing-Intelligence-Dashboard/laboratory/. Build output is `dist/`. Static deployment copies its assets to the repository's `laboratory/` directory. All runtime URLs are relative. The vendored browser DOCX library is docx 9.6.1 (MIT; license included).

## Source and architecture
- `research.json`: unchanged Mission 1 structured dataset (5 competitors, 25 offers; researched 2026-10-27). Cross-checked during Mission 2 against Excel and Word.
- `defaults.json`: venture-specific 31-cost reference model, public source URLs, evidence labels, original website links and assumptions. Cost references checked 2026-10-28.
- `engine.js`: pure calculations, validation, review rules and immutable confirmation snapshots.
- `app.js` / `styles.css`: interface, scenarios, local storage, charts and interaction.
- `report.js`: genuine OOXML DOCX and companion JSON generated from one confirmed snapshot.

Original site uses ClosetCue; research used Smart Closet / AI Outfit Assistant. The setup supplied a live website in its repository field. Original repository was derived from that Pages URL and verified via GitHub metadata: https://github.com/oliviaosinovsky/valmora. Both raw setup input and resolved URLs are retained in reports. No original website files are changed.

## Financial conventions
The model uses a 12-month steady-state horizon before income tax, interest or financing. Monthly quantity is average active full-year-equivalent subscribers, not new signups. Annual plans are one full annual period per subscriber. Kit quantities are annual units sold at the start of the modeled period with a full year of included app service; these customers are separate from app-only subscribers. No churn, conversion, growth, elasticities or demand response is inferred.

Variable drivers: per annual customer/unit, per active customer-month (12 per unit), per transaction (12 for monthly plans; one otherwise), or percentage of revenue. Dedicated variable costs apply to their assigned product; business-wide variable rates apply to each product's driver. Additional product variable amounts are per annual customer/unit. Direct domestic card checkout is assumed; no app-store commissions are silently included. App distribution rules, fees and eligibility must be checked before launch.

Fixed costs normalize monthly ×12, weekly ×52 or annual ×1. Startup outlays are excluded from operating break-even. Capital outlays enter startup cash and depreciate straight-line over the user-specified life (minimum 1 year, zero salvage). Product fixed overhead is direct plus shared overhead allocated by revenue, equal shares or explicit weights. Zero weights/revenue fall back to equal shares. Business totals count shared overhead once.

Single-product break-even units are ceil(fixed / unit contribution), only when contribution is positive. Multi-product business break-even scales the entered quantity mix by fixed / total contribution. Mixed units are never labeled as one homogeneous product unit. Continuous break-even revenue and rounded per-product quantities are reported; rounding can alter mix. Zero/nonpositive contribution has no finite break-even. Startup cash, tax and inventory timing are not recovered by operating break-even.

## Evidence
Researched means an identifiable public reference amount, not a manufacturing quote or statistical average. Estimates and illustrative workload allowances are labeled. BLS salary context does not verify the assumed contractor hourly rate. Editing financial expense fields marks them Student-Entered and preserves the original reference. The prototype hardware bill of materials is not an engineering validation.

## Decisions, privacy and backups
Edits persist in local storage (`closetcue-lab-v1`), may be lost if browser data is cleared and do not sync across devices. Export/import a working backup to move or recover assumptions. Scenario switching retains edits in each named scenario. Import invalidates evaluations and confirmations. Users must evaluate current inputs, provide a written justification, and acknowledge major warnings before confirming. Further financial edits make final downloads unavailable until a new review and confirmation. A snapshot remains immutable.

DOCX and JSON use that same snapshot and ID. `customerFacing` contains only product names, prices, billing models, features and add-on descriptions. Full exports also contain private financial assumptions and should not be published as customer-facing data. Optional add-on descriptions do not automatically generate revenue; price an add-on as a separate product scenario.

## Risk criteria
Unsustainable: combined contribution ≤0. High: modeled loss, any nonpositive product contribution, missing essential cost categories or no revenue. Moderate: stress loss, <20% margin of safety, any active unverified cost, premium price or absent comparable benchmark. Lower: none of those flags. These are transparent teaching heuristics, not failure probabilities. Stress cases are independently −20% volume and +10% operating costs.

## QA sandbox
Append `?test=1` to isolate test storage (`closetcue-lab-qa-v1`) and explicitly mark all confirmations and reports TEST ONLY. Never treat QA confirmations as the student's real pricing decision. Ten independent automated tests cover analytical edge cases. Browser QA and DOCX structural/visual checks are recorded separately. Mission 4 is not implemented.
