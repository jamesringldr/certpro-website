# SEOAgent Implementation Blueprint (T0.5)

## Purpose
Define the technical SEO and local SEO implementation blueprint for CertPro without modifying code. This document is advisory-only and intended for developer handoff under the bootstrap safety policy.

## Bootstrap Guardrails
- Follow `Plan -> Approve -> Run`.
- Advisory-only role in bootstrap: no direct edits to metadata, schema, sitemap, robots, route files, or page code.
- Recommendations must map to target files and implementation owners.
- Validation commands are deferred during bootstrap:
  - `npm run build` -> Pending (do not run during bootstrap)
  - `npm test` -> Pending (do not run during bootstrap)

## SEO Objectives and Success Signals
- Increase qualified local organic visibility across core + service intents.
- Establish deterministic metadata and structured-data contracts for all public routes.
- Prevent crawl waste and index noise by defining canonical URL and sitemap rules.
- Strengthen service-discovery journeys through internal linking standards.

Primary outcome signals (post-implementation):
- All indexable routes have unique title, description, canonical, and H1 intent mapping.
- Rich Results validation passes for `LocalBusiness`, `Service`, and `FAQPage` where applicable.
- `sitemap.xml` and `robots.txt` align with indexable URL strategy.
- Internal links consistently connect core pages and service clusters.

## URL Taxonomy (Canonical Slug Baseline)
### Core routes
- `/`
- `/about`
- `/contact`

### Service hub and leaf routes
- `/services`
- `/services/emergency-plumbing`
- `/services/drain-cleaning`
- `/services/sewer-line-repair`
- `/services/water-heater-repair-installation`
- `/services/leak-detection-repair`
- `/services/toilet-repair-installation`
- `/services/faucet-sink-repair`
- `/services/garbage-disposal-repair-installation`
- `/services/sump-pump-services`
- `/services/pipe-repair-repiping`
- `/services/gas-line-plumbing`
- `/services/hydro-jetting`

### Taxonomy rules
- Lowercase, hyphenated slugs only; no underscores or mixed-case routes.
- One canonical route per intent; avoid duplicate aliases.
- Any future slug migration requires 301 redirect mapping and canonical update in the same release.
- Service leaf pages must inherit the `/services/*` hierarchy for topical clustering and crawl clarity.

## Metadata Requirements (By Route Type)
### Global metadata contract (all indexable routes)
- Required fields: `title`, `description`, `canonical`, `robots`, `openGraph`, `twitter`, `alternates`.
- `title` target length: 50-60 chars; unique per route.
- `description` target length: 140-160 chars; include local service intent naturally.
- `canonical` must be absolute and self-referential on canonical routes.
- `robots` default: `index,follow` for public routes; explicitly `noindex,nofollow` for utility/non-canonical pages.
- H1 intent must align with primary keyword + local modifier pattern.

### Core page metadata patterns
- Home (`/`): emergency/local master intent + trust differentiator.
- About (`/about`): brand trust + local credibility intent.
- Contact (`/contact`): high-intent contact + availability intent.
- Services hub (`/services`): category-discovery + local coverage intent.

### Service page metadata patterns
- Pattern: `[Service] in North Kansas City | CertPro`.
- Description pattern: service outcome + response expectation + location.
- Each service page must include service-specific modifier to avoid title/description duplication.
- OG/Twitter title can reuse primary title if within length constraints.

## Structured Data Plan (JSON-LD Strategy)
### Required schema graph baseline
- `LocalBusiness` (or `Plumber` subtype if supported by business profile).
- `Service` on each service leaf page.
- `FAQPage` when FAQs are present and visible in rendered content.
- `BreadcrumbList` for service hierarchy pages.
- Optional later phase: `Review`/`AggregateRating` only when policy-compliant, source-verifiable data exists.

### LocalBusiness strategy (site-wide)
- One authoritative business entity with stable `@id` URI.
- Minimum fields: `name`, `url`, `telephone`, `address`, `areaServed`, `openingHoursSpecification`, `sameAs`.
- Include local service-area list consistent with on-page copy.
- Publish once per canonical page render path where site-level entity is needed; avoid conflicting variants.

### Service strategy (service leaf pages)
- One `Service` entity per service route, linked to business `@id` via `provider`.
- Minimum fields: `serviceType`, `areaServed`, `provider`, `url`, `description`.
- Optionally include `offers` only if pricing/estimate terms are explicitly supported in visible copy.
- Service names must mirror slug and page heading language to reduce ambiguity.

### FAQ strategy
- Add `FAQPage` only when Q/A content is visible on the same URL.
- Keep answers factual and aligned with page copy; avoid unsupported claims.
- Recommended volume: 5-8 FAQs on service pages, 4-7 on core pages.

### Schema implementation ownership mapping
| Recommendation | Target Implementation Files | Owner |
| :--- | :--- | :--- |
| Global `LocalBusiness` JSON-LD injector with shared typed payload contract | `app/layout.tsx` and `lib/seo/schema.ts` (or equivalent SEO utility module) | SEOAgent + FrontendAgent |
| Per-route metadata generation contract | `app/**/page.tsx` and `app/**/layout.tsx` metadata exports | SEOAgent + FrontendAgent |
| Service-page `Service` + `BreadcrumbList` JSON-LD mapping | `app/services/**/page.tsx`, `lib/seo/schema.ts`, `lib/seo/types.ts` | SEOAgent + FrontendAgent |
| FAQ block to `FAQPage` serializer contract | `components/sections/FAQ*.tsx`, `lib/seo/schema.ts`, `lib/seo/types.ts` | ContentAgent + SEOAgent + FrontendAgent |
| Local SEO constants (cities, service area, canonical site URL) | `lib/seo/constants.ts` and environment contract docs | SEOAgent + ProductOpsAgent |

Notes for strict typing handoff:
- Define typed schema payloads in `lib/seo/types.ts` using discriminated unions for supported schema entities.
- Avoid `any` in schema serializers; enforce compile-time required fields for `LocalBusiness` and `Service`.

## Sitemap and Robots Strategy
### `sitemap.xml` plan
- Include all canonical, indexable marketing routes (core + services).
- Exclude non-canonical utility routes, error routes, preview paths, and any noindex URLs.
- Use absolute URLs; keep host consistent with production canonical domain.
- Add `lastmod` based on content/update source of truth.
- Target one primary sitemap unless URL count growth requires index split in later phases.

### `robots.txt` plan
- Allow crawl on indexable public paths.
- Disallow internal/system paths (if present) that should not be crawled.
- Include explicit `Sitemap:` directive pointing to canonical sitemap URL.
- Ensure robots policy does not conflict with page-level `robots` metadata.

## Internal Linking Rules
### Global rules
- Every service page must link back to `/services` and to `/contact`.
- Core pages should link to top-priority service pages with descriptive anchor text.
- Header/footer/nav links should reinforce core crawl paths without duplicate clutter.
- Use natural language anchors (service + location intent) instead of generic "click here".

### Service-cluster rules
- Add "related services" links between thematically adjacent service pages.
- Keep related-service modules to 3-5 links to maintain relevance and reduce dilution.
- Include at least one CTA-path internal link in first half of service content.

### Technical link hygiene
- No orphan indexable pages.
- No links to redirected chains in primary navigation.
- Maintain canonical URL usage in all internal hrefs.

## Implementation Handoff Sequence (Advisory)
1. Finalize canonical slug map and metadata brief (`SEOAgent`, `ContentAgent`, `ProductOpsAgent`).
2. Implement typed SEO utility layer (`FrontendAgent`) with `LocalBusiness` + `Service` serializers.
3. Roll route-by-route metadata and schema integration (`FrontendAgent`, `SEOAgent` review).
4. Implement sitemap + robots generation/update path (`FrontendAgent`).
5. Apply internal link modules and validate crawl discoverability (`ContentAgent`, `FrontendAgent`).
6. Run validation checklist in `docs/agent-guides/SEOAgent-Validation-Checklist.md`.

## Bootstrap Acceptance Checks
- [x] URL taxonomy and canonical slug rules defined.
- [x] Metadata requirements documented for core + service routes.
- [x] JSON-LD strategy includes `LocalBusiness` + `Service` + `FAQPage`.
- [x] Sitemap + robots strategy documented.
- [x] Internal linking rules documented.
- [x] Recommendations explicitly map to target files and owners.
- [x] Advisory-only bootstrap scope preserved (no implementation changes).
