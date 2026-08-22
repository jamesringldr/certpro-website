# Sitemap — certproplumbingkc.com

**Score: 12 / 100** (no sitemap exists)

## Discovery

- `https://www.certproplumbingkc.com/sitemap.xml` → 404 HTML
- `https://www.certproplumbingkc.com/sitemap_index.xml` → 404
- Same 404s on `certproplumbing.com`
- `robots.txt` cannot advertise a sitemap because robots.txt itself 404s

## Indexable URL set (should be in sitemap)

```
https://www.certproplumbingkc.com/
https://www.certproplumbingkc.com/about
https://www.certproplumbingkc.com/contact
https://www.certproplumbingkc.com/services
https://www.certproplumbingkc.com/services/emergency-plumbing
https://www.certproplumbingkc.com/services/drain-cleaning
https://www.certproplumbingkc.com/services/sewer-line-repair
https://www.certproplumbingkc.com/services/water-heater-repair
https://www.certproplumbingkc.com/services/water-heater-installation
https://www.certproplumbingkc.com/services/leak-detection
https://www.certproplumbingkc.com/services/pipe-repair-repiping
https://www.certproplumbingkc.com/services/fixture-installation
https://www.certproplumbingkc.com/services/toilet-repair
https://www.certproplumbingkc.com/services/garbage-disposal-service
https://www.certproplumbingkc.com/services/backflow-testing
https://www.certproplumbingkc.com/services/commercial-plumbing
```

**Exclude:** `/api/*`, preview, 404s, `#` footer targets, decoy article cards until they are real URLs.

## Quality gates

- 16 canonical URLs: a single sitemap is enough.
- Use absolute `www.certproplumbingkc.com` URLs after host lock.
- `lastmod` from git/content dates, not deploy time only.
- Blueprint slugs that **do not exist** (do not include until redirected):  
  `water-heater-repair-installation`, `leak-detection-repair`, `hydro-jetting`, `gas-line-plumbing`, `sump-pump-services`, etc.

## Recommendation

Implement `app/sitemap.ts` + `app/robots.ts` in the Next.js App Router. Submit the sitemap in GSC for the chosen Search Console property (URL-prefix `https://www.certproplumbingkc.com/`).
