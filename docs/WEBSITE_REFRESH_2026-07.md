# Website refresh - July 2026

Owner decision record + build spec for the repositioning shipped on branch
`feat/site-refresh-2026-07`. Written 2026-07-09.

## Why

Owner decision (2026-07-09, after advice from Michelle): stop advertising the
"full circle" (book -> report -> invoice -> reconcile). Positioning Jentix
inside agencies' daily OPERATIONS implies support staffing and SLAs a
one-person company cannot offer yet. Jentix is instead marketed as the
INTELLIGENCE layer on top of a TMC's business: performance, targets, carbon,
duty of care, reporting and the client portal. If Jentix has a bad day,
nobody's bookings stop.

## Hard messaging decisions (owner)

1. The full-circle loop section and every echo of it is REMOVED.
2. Invoicing is NOT advertised at all - no summary invoicing, no accounts
   dashboard, no reconciliation claims. Owner: summary invoicing is "a half
   job"; the real vision is a portal where agency clients access ALL their
   invoices (summary + individual), which needs conversations with back-office
   vendors (Midoco, ProCON) and is deliberately NOT on the site.
3. Duty of care and Targets are promoted to headline features (both really
   shipped in jentix-v2, 2026-07).
4. Official risk sources ARE named (FCDO, US State Department, GDACS) - they
   are public data sources, not vendor integrations. Back-office vendor names
   stay off the site.
5. Stat chips use product truths (51 reports, 226 countries, client-safe),
   not client-derived financial figures.

## What changed (this branch)

index.html
- Removed: #loop section + its CSS, "Invoicing & accounts" card, IC_INVOICE
  icon, "always reconcile" / "invoice summaries" copy, "Summary invoicing"
  marquee item, invoicing mentions in FAQ + JSON-LD.
- Hero: sub extended (performs / emits / where travellers are); tags now
  12 booking types -> 1 record, 50+ reports, duty of care built in; chips now
  51 built-in reports / 226 countries watched / 100% client-safe.
- Platform cards: 8 cards - Duty of care [New] + Targets & incentives [New]
  added, Invoicing removed, Sustainability keeps its card (New tag moved to
  the two new modules).
- NEW #duty-of-care section (the old loop slot): dot-matrix world map on
  canvas, generated from the app's own Natural Earth GeoJSON (1,906 land
  dots), colour-blind-safe ramp (muted blue base, wheat/light-orange/orange
  tiers), pulsing event markers (TR/PH/CL centroids), sliding advisory alert
  card, legend + named sources, three counting stat chips. Copy uses the
  approved formula: advisories + disaster alerts "matched to your travellers";
  never "keeps travellers safe".
- NEW #targets section: interactive ladder - drag a turnover slider, watch
  the projected bonus recompute live (highest-tier-wins maths mirroring the
  real builder), tiers light up as they are reached.
- Portal section: mock gains portal tab chips (incl. CO2 + Duty of care);
  copy mentions carbon + optional duty-of-care view.
- Reporting: 50+ reports / 13 categories; third card is now secure share
  links (expiry, revocation, access log) alongside pin-to-portal.
- FAQ: 10 items (was 8) - added duty-of-care and targets Q&As, scrubbed
  invoicing from "What is Jentix?"; JSON-LD FAQPage kept in exact sync.
- JSON-LD featureList rebuilt to the real feature set.
- Nav: Platform / Duty of care / Targets / Client portal / FAQ / Book a demo.

features.html
- Groups now: 01 Unified travel data (full-circle cards replaced by Twelve
  booking types + Attributed, always), 02 Duty of care [New], 03 Targets &
  incentives [New], 04 Performance & analytics, 05 Traveller intelligence
  (tracking / lead time / advance-purchase savings - all real features),
  06 Client portal, 07 Reporting (50+, share links), 08 Sustainability,
  09 Organisation & access. Invoicing group deleted.

llms.txt
- Full-circle paragraph replaced with the one-record positioning; capability
  list mirrors the new claims; invoicing line removed.

Housekeeping
- Deleted orphans: static/css/style.css + static/js/script.js (legacy design,
  referenced by nothing), the old white-text wordmark PNG, duplicate favicon
  set under static/favicon/ (root copies are the linked ones).
- CLAUDE.md rewritten (was describing a pre-2026-06 design that no longer
  exists) - now carries the architecture, do-not-break list and the hard
  messaging rules above.

## Verified product facts behind the claims (jentix-v2, 2026-07-09)

- 51 ReportDefinitions across 13 categories (reports/definitions/).
- 12 service types on the travel record (travel/models.py).
- 3 risk feeds: FCDO + GDACS every 30 min, State Dept daily; 226 countries
  mapped (risk app, prod-live 2026-07-09).
- Targets: guided builder, My Targets live bonus + what-if, payout lifecycle
  with audit snapshot (targets app, shipped 2026-07).
- Insight Links: login-less client-safe report links with expiry/revocation/
  access log (ci app, shipped 2026-07-01).
- CO2 on every booking with A/B/C confidence (compute_emissions; DEFRA/TIM
  names intentionally NOT used on the site).
- Portal: client-safe guard + fence middleware; CO2 tab live; duty-of-care
  tab shipped (per-client switch, module-gated).

## Added during owner review (2026-07-09)

- Hero visual upgraded on owner feedback ("needs a wow"): the bar chart is
  replaced by a rotating dot-globe (vanilla canvas, orthographic projection of
  the same Natural Earth dots) with great-circle flight arcs, advisory pulses,
  atmosphere glow and drag-to-spin. Capped at 400px after owner sized it.
- about.html added (owner call): founder-led story, three principles, founder
  block (Tyrone Francis), company facts, Person/AboutPage schema; Organization
  schema on index gains a founder; footers, sitemap, llms.txt updated.
- Resources/blog PARKED (owner decision): revisit once there are a few more
  clients; evergreen undated guides (not a dated blog) is the agreed shape.

## Still to do (later phases)

- privacy.html: add duty-of-care processing purpose to the processor section
  (traveller presence derived from bookings, matched against public advisory
  sources) - draft wording with the owner before it ships.
- New OG/social image (still the old hero JPG).
- sitemap.xml lastmod bump at ship time.
- Optional: real product screenshots via the anonymised demo branch
  (platform_ops anonymise_demo on a Neon branch clone with JENTIX_DEMO_DB=1)
  as a product-tour band - complements, does not replace, the animated mocks.
- Consider a "GBP 16.2m analysed"-style stat only if the owner supplies a figure
  he is happy publishing.
