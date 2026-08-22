# Technical SEO — certproplumbingkc.com

**Score: 42 / 100**  
**Business type:** Local home-service / service-area business (SAB)  
**Crawl date:** 2026-08-22  
**Pages crawled:** 16 live HTML routes + probes for robots/sitemap/llms/favicon/legal URLs

## What works

- HTTPS with HSTS (`max-age=63072000`).
- Apex `certproplumbingkc.com` 301s to `https://www.certproplumbingkc.com/`.
- Next.js SSR/prerender: primary copy, H1s, and CTAs are in the initial HTML (not a JS-only SPA).
- Service URLs are clean, hyphenated, and one-click from `/services`.
- HTML TTFB on crawled pages was typically 140–500ms via Vercel.

## Findings

### Dual production hosts with no canonical (Critical)

`https://www.certproplumbing.com/` and `https://www.certproplumbingkc.com/` both return HTTP 200 with identical homepage payload size (92,889 bytes). Neither host emits a self-referential canonical. Liberty Chamber still cites `http://www.certproplumbing.com`. Google and AI systems can split crawl budget and authority across two hosts.

**Fix:** Pick one canonical host (recommend `https://www.certproplumbingkc.com`). 301 the other host (and HTTP) to it. Add absolute canonicals on every indexable route.

### robots.txt is an HTML 404 (High)

`/robots.txt` returns **404 HTML** on both hosts. Google treats a missing robots.txt as “allow all,” but an HTML 404 is a crawlability defect, blocks AI-crawler policy, and prevents sitemap discovery.

**Fix:** Add `app/robots.ts` allowing `/`, disallowing `/api/`, and pointing to the sitemap.

### No XML sitemap (High)

`/sitemap.xml` and `/sitemap_index.xml` are 404. For a 3-month-old domain with ~16 indexable URLs, a sitemap is the fastest discovery path. Public `site:certproplumbingkc.com` search returned no results (not GSC-confirmed).

**Fix:** Add `app/sitemap.ts` listing `/`, `/about`, `/contact`, `/services`, and all 12 service slugs. Submit in Search Console after canonical host is locked.

### No per-URL canonical or robots meta (High)

No `<link rel="canonical">` and no `robots` meta on any crawled page. Combined with the dual-host issue, this is how duplicate URLs leak into the index.

### Security headers incomplete (Medium)

Present: HSTS. Missing: `Content-Security-Policy`, `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options` / `frame-ancestors`, `Permissions-Policy`.

### Favicon 404 (Low)

`/favicon.ico` and `/apple-touch-icon.png` 404. SERP and browser tabs show a generic icon; each visit also wastes a 404 request.

### Dead URL probes (Medium)

404: `/blog`, `/insights`, `/privacy`, `/privacy-policy`, `/terms`, `/terms-of-service`, `/llms.txt`. Footer “Term of Service” and “Privacy Policy” currently point at `#`.

## Crawl inventory (200)

| URL | Title unique? | Words (incl. chrome) |
|---|---|---|
| `/` | Shared site title | 643 |
| `/about` | No (same as home) | 133 |
| `/contact` | No | 141 |
| `/services` | No | 318 |
| `/services/*` (12) | Yes | 166–187 |

## Limitations

- `claude-seo` Python runtime was not installed (`doctor`: managed environment missing).
- PageSpeed Insights API returned HTTP 429; no Lighthouse/CrUX field data this run.
- No Google Search Console credentials, so indexation is inferred from public `site:` search only.
