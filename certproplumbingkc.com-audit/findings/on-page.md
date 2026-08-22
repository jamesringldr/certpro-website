# On-Page SEO — certproplumbingkc.com

**Score: 36 / 100**

## Titles

| Route | Title | Length | Issue |
|---|---|---|---|
| `/`, `/about`, `/contact`, `/services` | CertPro Plumbing \| Fast Rapid Response North KC Plumbing | 56 | Duplicate across 4 URLs |
| `/services/emergency-plumbing` | Emergency Plumbing \| CertPro Plumbing | 37 | Unique but no geo; short |
| Other `/services/*` | `[Service] \| CertPro Plumbing` | 32–44 | Same pattern; no North KC / Kansas City |

Homepage title is acceptable length. Service titles miss the local modifier the blueprint already specified (`[Service] in North Kansas City | CertPro`).

## Meta descriptions

Site-wide default (122 chars), used on home, about, contact, and services hub:

> Mobile-first plumbing website for emergency response, service booking, and free estimate capture across North Kansas City.

That is **product/dev copy**, not search-snippet copy. It does not match the H1 or user intent.

Service descriptions are unique but 54–76 characters (target 140–160) and omit city, hours/response, and CTA.

## Headings

- One H1 per page: good.
- Homepage H2s split across `<br />` so crawlers concatenate (“Why chooseCertPro”, “Delivering expertisein plumbing services”).
- Service H2s are generic template labels, not keyword-intent headings.

## Internal linking

**Gaps**

- Homepage featured service **cards are not links** (`ServiceGridSection` carousel duplicates 6 cards with no `<a>` / `<Link>`).
- County list is plain text, not city/county landing pages or even in-page anchors.
- Article cards do not link.
- Footer social, privacy, and terms are `#`.
- Service pages only cross-link Emergency Plumbing + All Services, not sibling services (drain, sewer, leak).

**What works**

- Header nav: Home / Services / About / Contact.
- `/services` lists all 12 services with real links.
- Footer lists 4 services.
- About/contact include a few high-intent service chips.

## Open Graph / Twitter

No `og:*` or `twitter:*` tags on any crawled page. Link shares will be untitled generic previews.

## Keywords meta

Present globally. Harmless but unused by Google. Not a fix.

## Recommendations

1. Per-route `generateMetadata` for about, contact, services hub (already exists only on service slugs).
2. Pattern: `Emergency Plumber in North Kansas City | CertPro` / descriptions 140–160 chars with outcome + geo + CTA.
3. Wrap homepage service cards in `Link href={/services/${slug}}`.
4. Add OG image (1200×630), `og:title`, `og:description`, `og:url`, `og:type=website`.
5. Absolute canonicals matching the chosen host.
