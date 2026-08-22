# Images — certproplumbingkc.com

**Score: 38 / 100**

## Alt text

Crawler counted **6 images / 4 missing alt** on interior pages and **13 / 4 missing** on the homepage.

Missing/empty alts are the four footer social icons (`alt=""`). Decorative is acceptable if they remain `alt=""` **and** the parent `<a>` has `aria-label` (they do: Facebook/Instagram/LinkedIn/YouTube) — but those anchors are `href="#"`, so they are unlabeled dead controls.

Good alts present:

- Article titles used as alt (descriptive).
- Trust cards use the stat label.
- Vehicle: “CertPro Plumbing service vehicle”.
- Logo: “CertPro logo” (prefer “CertPro Plumbing”).

## File size / format

| Asset | Bytes | Format | Verdict |
|---|---|---|---|
| `/videos/hero.mp4` | 9,634,384 | MP4 | Critical weight |
| `/images/sections/why-choose-vehicle.png` | 680,309 | PNG | Critical for a photo (use JPEG/WebP) |
| `/images/articles/article-sewer.png` | 383,809 | PNG | Warning |
| `/images/articles/article-basement-drains.png` | 289,362 | PNG | Warning |
| `/images/articles/article-dishwasher.png` | 238,410 | PNG | Warning |
| `/images/hero-mobile.png` | 204,257 | PNG | OK-ish; convert |
| Trust PNGs | 113–193 KB | PNG | Convert |
| Logo | 25 KB | PNG | OK (transparency) |
| `/favicon.ico` | 404 | — | Missing |

No `<picture>` / AVIF / WebP variants observed. Next/Image is used, so adding converted sources in `public/` would help immediately.

## SEO utility

Article images have no destination URL, so they cannot rank in image search as supporting content for a page. Vehicle image is a real E-E-A-T asset (branded truck) and should stay, optimized.

## Recommendations

1. Convert photographic PNGs to WebP/AVIF; keep PNG/SVG for logos.
2. Add `app/icon.png` or `favicon.ico` (already have `public/icon.png` unused for `/favicon.ico`).
3. Point social icons at real profiles or remove them.
4. Logo alt: “CertPro Plumbing”.
