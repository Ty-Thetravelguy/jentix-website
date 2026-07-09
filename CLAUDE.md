# CLAUDE.md - jentix-website

Guidance for Claude Code in the Jentix MARKETING site repo. This is the static
site at https://jentix.io (GitHub Pages), NOT the Django app (that lives in
C:\Jentix\jentix-v2 and has its own CLAUDE.md).

## Deployment - read this first

Pushing to `main` deploys LIVE via GitHub Pages (domain via CNAME).
NEVER push without the owner's explicit go-ahead. Work on a branch or local
commits; the owner reviews in a browser first, then says send.

## Architecture

Plain HTML/CSS/JS, no build step. EVERY page is self-contained: all CSS and JS
are inline in the page itself, so design tokens are duplicated per file and a
change to shared chrome (nav, footer, toast) must be applied to each page.

- `index.html` - homepage (hero, marquee, platform cards, duty-of-care map,
  targets ladder, portal, reporting, FAQ, CTA, contact form, footer)
- `features.html` - grouped feature catalogue (09 numbered groups)
- `about.html` - founder-led About page (story, principles, founder, company
  facts). Resources/blog is deliberately PARKED until there are more clients -
  do not add one unprompted (a stale blog is worse than none).
- `privacy.html` - privacy policy (two-column, sticky index)
- `card/index.html` - Tyrone's digital business card. UNLISTED (noindex, not
  in sitemap). Do not link it from the site. Leave alone unless asked.
- `llms.txt` - canonical AI-readable messaging summary. Treat it as the source
  of truth for what the site claims; update it DELIBERATELY with any claim change.
- `robots.txt` (welcomes AI crawlers), `sitemap.xml` (3 URLs), CNAME,
  favicons at repo root.

Design tokens (in each page's `:root`): bg #070d1f / #0a1430, line #1c2c52,
ink #eef3ff, muted #92a3cc, orange #ff7a1a / #ffae5e, blue #3aa0ff / #7cc6ff.
Fonts: Space Grotesk (display) + JetBrains Mono (mono), via Google Fonts.
Full-width `.wrap` with fluid clamp() gutters, scroll reveals via
IntersectionObserver, `prefers-reduced-motion` respected everywhere (CSS kill
switch + JS `rm` flag).

## Local preview

`python -m http.server 8901` from the repo root (pick any free port EXCEPT
8765 - Forcepoint squats on it on this machine). The reCAPTCHA widget only
renders on the real domain over https - an empty box locally is expected, do
not "fix" it.

## DO NOT BREAK

- The contact form (index.html): reCAPTCHA script + sitekey, EmailJS SDK,
  `emailjs.init('OlYiaTtacsyZJBGuy')`,
  `sendForm('service_f71as1r','template_xdidmsf', ...)`, form `#contact-form`.
  card/index.html has its own independent copy.
- Icon injection is SCOPED (`.ico,.lock,.show li`) - never innerHTML-rewrite
  the whole body; it would wipe the reCAPTCHA widget and form listeners.
- The visible FAQ accordion and the FAQPage JSON-LD in `<head>` MUST stay in
  sync word-for-word (Google requirement). Same for the JSON-LD featureList
  vs what the page claims.
- `MAP_DOTS` / `MAP_MARKS` in index.html are GENERATED from the Django app's
  Natural Earth GeoJSON (jentix-v2 risk/static/risk/world-countries.json) by a
  scratch script - regenerate, never hand-edit.

## MESSAGING RULES (hard - owner-set, do not drift)

1. NEVER advertise invoicing, accounts dashboards, reconciliation, billing
   workflows, or the "full circle" loop (removed 2026-07-09). The future
   client invoice portal is explicitly NOT advertised. Jentix is marketed as
   the INTELLIGENCE layer (performance, targets, carbon, duty of care,
   reporting, portal) - never as an operational system agencies depend on
   day-to-day.
2. Ground EVERY claim in the real jentix-v2 system; do not invent features.
   Verified counts as of 2026-07-09: 51 built-in reports across 13 categories
   (site says "50+"), 12 booking types, 226 countries monitored, 3 official
   risk sources (UK FCDO, US State Department, GDACS).
3. Duty of care wording: "official travel advisories and disaster alerts,
   matched to your travellers". NEVER "keeps travellers safe" (liability).
4. Never the word "Bill" - use "Invoice" if ever unavoidable in legal copy.
   The profit ratio is "yield", never "markup" (saying the portal HIDES
   "margin / markup" is fine - that names what clients cannot see).
5. No CO2 methodology vendor names on the site (no DEFRA / Google TIM):
   say "recognised, defensible factors and a confidence level".
6. No back-office vendor names (Midoco, Dolphin, ProCON) in marketing copy.
   Naming official public data sources (FCDO, State Dept, GDACS) is fine.
7. Colour-blind-safe visuals (the owner is red/green colour-blind): never
   encode meaning in red-vs-green; the map ramp is wheat -> orange on a muted
   blue base.
8. Keep source files pure ASCII: HTML entities (&pound; &rarr; &middot;) in
   markup, \u escapes in JS strings. No emojis anywhere.

## Reference

Design/decision record for the 2026-07 refresh: `docs/WEBSITE_REFRESH_2026-07.md`.
