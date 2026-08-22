# Performance / Core Web Vitals — certproplumbingkc.com

**Score: 48 / 100 (lab-incomplete)**

## Measured this run

- HTML TTFB: ~140–500ms on crawled URLs (Vercel).
- Homepage HTML ~93 KB.
- Desktop hero: `/videos/hero.mp4` **9,634,384 bytes (~9.2 MB)**, autoplay, loop.
- Mobile hero still: `/images/hero-mobile.png` 204 KB (within hero target).
- Why-choose vehicle photo: **680 KB PNG** (content-image Critical band is >500 KB).
- Trust PNGs: 113–193 KB.
- Article PNGs: 238–384 KB (warning band for content images).
- Favicon 404 adds a failed request on every document.

## Not measured

PageSpeed Insights API returned **HTTP 429**. No Lighthouse scores, no CrUX field LCP/INP/CLS. PostHog web vitals: no `$web_vitals` traffic in the last 30 days (0 visitors with test-account filter).

Treat the 48 as a **conservative lab estimate**, not a field CWV pass/fail.

## Likely LCP / INP / CLS issues (inferred)

- **LCP (desktop):** autoplaying 9.2 MB MP4 is the probable LCP element. Compress, poster frame, `preload="none"` or replace with a compressed still + optional play.
- **LCP (mobile):** 204 KB PNG is acceptable; still convert to AVIF/WebP.
- **CLS:** `fill` images without reserved space can shift; Next `Image` with `fill` in aspect-ratio boxes is better than raw `<img>`, but video has no poster.
- **INP:** header menu, booking modal, and sticky call bar are client components. Not profiled.

## Recommendations

1. Compress hero video under ~1.5 MB or swap to a still for LCP; lazy-load video after idle.
2. Convert vehicle + article + trust PNGs to AVIF/WebP; vehicle target <200 KB.
3. Add a real favicon to stop 404s.
4. Re-run PageSpeed (or `/seo setup` then `pagespeed_check.py`) after media work.
5. Confirm GA4/PostHog actually fire on production before using analytics as a CWV source.
