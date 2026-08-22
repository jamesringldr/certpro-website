# Full SEO Audit — certproplumbingkc.com

**Date:** 22 August 2026  
**Canonical URL audited:** `https://www.certproplumbingkc.com/`  
**Also live:** `https://www.certproplumbing.com/` (duplicate, no canonical)  
**Business type:** Local home-service **SAB** (plumber; Liberty / North Kansas City metro)  
**Overall SEO Health Score: 34 / 100**

---

## Executive summary

CertPro Plumbing is a family-owned Kansas City metro plumber whose **marketing site is crawlable HTML on Vercel**, with a real phone CTA and 12 service URLs. It is **not yet a ranking site**. Two hosts serve the same pages, there is no robots.txt/sitemap/canonical/schema, core titles are duplicated, service pages are thin templates (~80–110 unique words), GBP was not confirmed, and public `site:` search found no indexed URLs.

Off-site, the brand launched **May 2026** (LinkedIn). Derek and Ashley Drager’s 30+ years of trade experience exists **off-page**; the website attributes “thousands of jobs” and “30+ years” to the LLC without naming the plumber. Liberty Chamber still lists `http://www.certproplumbing.com`.

This is a **foundation** problem, not a content-velocity problem. Fix identity (one host, NAP, GBP, schema) in week 1, then deepen the emergency/sewer/water-heater pages that match actual SERPs.

### Category scores (weighted)

| Category | Score | Weight | Weighted |
|---|---|---|---|
| Technical SEO | 42 | 22% | 9.2 |
| Content quality | 31 | 23% | 7.1 |
| On-page SEO | 36 | 20% | 7.2 |
| Schema | 5 | 10% | 0.5 |
| Performance (CWV) | 48 | 10% | 4.8 |
| AI search readiness | 28 | 10% | 2.8 |
| Images | 38 | 5% | 1.9 |
| **Total** | | **100%** | **34** |

Local SEO (not in the core weight table): **33 / 100**. SXO: **30 / 100**. Sitemap specialist: **12 / 100**.

### Top 5 critical / high issues

1. **Two production hosts, zero canonicals** — `certproplumbing.com` and `certproplumbingkc.com` both 200.
2. **No robots.txt or XML sitemap** (HTML 404s). Discovery depends on luck; `site:` returned nothing.
3. **No structured data** — missing `Plumber` / `Service` / `BreadcrumbList`.
4. **Thin duplicate service templates** — 12 URLs, ~170 words each including chrome; eyebrow still says “Service Template”.
5. **NAP / citation split** — Chamber website HTTP `.com`; site email `@certproplumbing.com`; no hours/address on-page; GBP unconfirmed.

### Top 5 quick wins (same week)

1. 301 `.com` → `www.certproplumbingkc.com` (or the reverse — pick one) and add absolute canonicals.
2. Add `app/robots.ts` + `app/sitemap.ts`.
3. Unique title + description on `/`, `/about`, `/contact`, `/services`.
4. Link homepage service cards to `/services/[slug]`.
5. Inject `Plumber` JSON-LD with phone, `areaServed`, and `sameAs`.

---

## Perceive → Analyze → Validate → Act (synthesis)

**Observe (external):** 16 HTML 200s; identical bytes on two hosts; 9.2 MB hero video; LinkedIn/Chamber mentions; SERP for emergency plumber KC is deep service pages from Roto-Rooter and Anthony.

**Observe (internal assumption to surface):** Assuming “the homepage is the money page” is wrong for this SERP. Emergency + city pages win. Assuming “30+ years” is safe copy is wrong if Google/users read it as the LLC’s age (May 2026).

**Listen:** Brand voice is “real people, not a robot menu” and anti-PE. SERP voice is “24/7, neighborhoods, reviews.” Those can coexist; the site currently ships the slogan without the SERP proof.

**Think:** The constraint is a new entity with a finished-looking Next.js shell. Rankings will not move until Google can fetch a single URL, understand a local business entity, and see unique service content.

**Connect:** Dual host blocks schema `@id` stability. Fake articles waste crawl trust. Homepage cards that are not links waste the only hub page.

**Feel / Accept:** If week-1 canonical + sitemap + GBP still yield zero GSC indexed pages after 14 days, the failure check is GSC “Why pages aren’t indexed,” not another redesign.

**Create / Grow:** Leading indicator without re-auditing: GSC indexed URL count, GBP discovery views, and calls from `tel:` (already tracked as `call_click` in GA4).

---

## Technical SEO — 42

See `findings/technical.md`.

HTTPS, HSTS, and SSR are in good shape. The blockers are **duplicate hosts**, **missing robots/sitemap/canonical**, incomplete security headers, and a favicon 404.

## Content quality — 31

See `findings/content.md`.

Homepage meets the 500-word floor only because of chrome + repeated CTAs. About (133) and every service page fail coverage floors. E-E-A-T fails Who/How/Why. Decoy article cards and `/services` product copy should not be in production.

## On-page SEO — 36

See `findings/on-page.md`.

Service titles are unique but geo-blind and short. Four core routes share one title and a developer meta description. No Open Graph. Internal linking from the homepage services module is broken (cards are not links).

## Schema — 5

See `findings/schema.md`.

Zero JSON-LD. Do **not** add FAQPage for Google SERP benefit (retired 7 May 2026). Do add `Plumber`, `Service`, `BreadcrumbList`, `Person`.

## Performance — 48 (incomplete)

See `findings/performance.md`.

PageSpeed Insights returned 429; no CrUX. Inferred risk: 9.2 MB autoplay hero, 680 KB vehicle PNG. HTML TTFB is fine.

## Images — 38

See `findings/images.md`.

Photographic PNGs should be WebP/AVIF. Favicon missing. Decorative social alts are OK only if those links become real.

## AI search readiness — 28

See `findings/geo.md`.

Crawlers are not blocked. Citability is low. Entity is split across `.com` / `.com kc` / Chamber HTTP. LinkedIn is the only strong mention graph.

## Local SEO — 33

See `findings/local.md`.

SAB with a Liberty Chamber citation. Phone matches. Website URL, hours, and legal name do not. GBP unconfirmed. No city pages; county list is unlinked.

## SXO — 30

See `findings/sxo.md`.

Page type for emergency intent is correct; page quality is not. Do not blog your way into a service-page SERP.

---

## Limitations of this audit

| Gap | Impact |
|---|---|
| `claude-seo` runtime not installed | No Playwright render diff, no bundled PSI/CrUX scripts |
| PSI HTTP 429 | No Lighthouse gauges this run |
| No GSC / GA4 API | Indexation and organic traffic not first-party confirmed |
| PostHog 30d web overview | 0 visitors (filter or no capture) |
| No DataForSEO MCP | No geo-grid, spam score, or live local-pack scrape |
| Browser MCP down | No screenshots in `screenshots/` |
| `site:` via web search | Strong hint of non-indexation, not a Search Console verdict |

Re-run after `/seo setup` and GSC connect for field CWV + index coverage.

---

## Artifacts

- `ACTION-PLAN.md` — phased work
- `audit-data.json` — report envelope
- `findings/*.md` — specialist notes
- `crawl-raw.json` — URL/header/meta extract
- Canvas: open beside chat for the scored dashboard

PDF: say if you want a designed PDF (`google_report.py` needs the claude-seo runtime).
