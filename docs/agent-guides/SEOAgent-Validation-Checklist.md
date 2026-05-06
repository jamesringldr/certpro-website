# SEOAgent Validation Checklist (T0.5)

## Purpose
Provide a pre-release validation checklist for SEO implementation quality across metadata, schema, indexing, crawl behavior, sitemap/robots alignment, and internal linking. This checklist is bootstrap guidance only and does not execute changes.

## Bootstrap Policy Status
- Safety policy: `Plan -> Approve -> Run`.
- Bootstrap mode: advisory-only, no implementation edits.
- Deferred command validations:
  - `npm run build` -> Pending (not run during bootstrap)
  - `npm test` -> Pending (not run during bootstrap)

## T1.1D Technical/Local SEO Gap Audit Input (Pre-Implementation)
Audit intent: identify readiness gaps before implementation starts and hand actionable remediation tasks to ProductOpsAgent.

### PRD/DOD Mapping (Explicit)
Reference source: `docs/PRD.md` sections 3, 5, and 6.

| PRD/DOD Requirement | Current Readiness | Gap | Risk Impact | Mitigation Recommendation | Owner | Suggested Task ID |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Local SEO foundation requires JSON-LD `LocalBusiness` + `Service` (`PRD` section 3) | Planned only | No implementation evidence yet for typed schema emitters and route bindings | High (Rich Results + local relevance loss) | Build typed schema contract and inject `LocalBusiness` globally + `Service` per service route | SEOAgent + FrontendAgent | T1.25 |
| SEOAgent deliverable requires schema + local city meta coverage (`PRD` section 5) | Partial planning | Metadata brief exists at blueprint level, but no route-level acceptance matrix tying titles/descriptions/H1/local intent to each URL | High (index quality + CTR risk) | Create route-by-route metadata acceptance matrix for core + 12 service pages | SEOAgent + ContentAgent | T1.26 |
| DOD requires Local SEO schema validated via Rich Results (`PRD` section 6) | Not started | No release evidence workflow for validator pass artifacts | High (DOD not provable) | Add SEO evidence package template with required validator links, screenshots, and pass/fail log | SEOAgent + ReleaseAgent | T1.27 |
| SEOAgent deliverable requires `sitemap.xml` and `robots.txt` plans (`PRD` section 5) | Planned only | Strategy exists, but no implementation contract for canonical host + exclusion policy + ownership gate | High (crawl/index drift risk) | Define sitemap/robots implementation contract and acceptance checks before coding | SEOAgent + FrontendAgent | T1.28 |
| Local SEO foundation includes dynamic service/location template approach (`PRD` section 3 + advisor note) | Partial | Service pages exist; city/location template contract and index policy are not finalized | Medium-High (local long-tail coverage loss) | Publish city-template URL/index rules and canonicalization policy | SEOAgent + ContentAgent + FrontendAgent | T1.29 |
| Must-have includes 12 service pages discoverability (`PRD` section 4) | Partial | Internal linking acceptance tests are not yet enforced at template/component level | Medium (crawl depth + conversion assist loss) | Add internal-link contract tests (no orphan pages, required links, anchor quality) | SEOAgent + ContentAgent + FrontendAgent | T1.30 |

### Prioritized Crawl/Index/Conversion Risks
Ranked by production impact if unresolved:

1. **R1 - Missing implemented schema graph (`LocalBusiness` + `Service`)**
   - Impact: reduced eligibility for rich-result enhancements; weaker local entity association.
   - Mitigation: execute `T1.25` and validate against Rich Results + Schema Validator.
2. **R2 - Metadata acceptance not locked per canonical URL**
   - Impact: duplicate or weak snippets, lower CTR, intent mismatch.
   - Mitigation: execute `T1.26` and enforce per-route metadata uniqueness gate.
3. **R3 - Sitemap/robots contract not implemented/verified**
   - Impact: crawl waste, non-canonical indexing, delayed discovery.
   - Mitigation: execute `T1.28` with pre-release crawl verification requirements.
4. **R4 - No SEO release evidence protocol for DOD proof**
   - Impact: DOD completion cannot be objectively verified.
   - Mitigation: execute `T1.27` and require evidence artifacts in release packet.
5. **R5 - City-template local SEO contract unresolved**
   - Impact: weak geo-intent coverage and scaling limits for location pages.
   - Mitigation: execute `T1.29` with canonical/noindex guardrails.
6. **R6 - Internal-link discoverability not contract-tested**
   - Impact: orphan risk and reduced route authority flow to service pages.
   - Mitigation: execute `T1.30` and add required link checks.

### ProductOpsAgent Handoff Payload
Use this section as direct planning input:
- Queue recommendation: `T1.25` and `T1.28` as P0 immediate unblockers, then `T1.26`, `T1.27` as P1 acceptance gates, followed by `T1.29`, `T1.30`.
- Dependency note:
  - `T1.25` precedes final Rich Results audit.
  - `T1.28` precedes crawl/index release verification.
  - `T1.26` must complete before metadata implementation QA signoff.
- Acceptance-evidence requirement: all SEO tasks must include URLs tested, tool output, and pass/fail artifact references.

## 1) Metadata Validation
- [ ] Every indexable route has unique `title` and `description`.
- [ ] Titles are within ~50-60 chars and descriptions within ~140-160 chars where feasible.
- [ ] Canonical is present, absolute, and self-referential on canonical pages.
- [ ] `robots` directives match page intent (`index,follow` vs `noindex,nofollow`).
- [ ] H1 intent aligns with metadata target query.
- [ ] Open Graph + Twitter tags are present and route-correct.

Owner + file mapping:
- Owner: `FrontendAgent` (implementation), `SEOAgent` (review/approval).
- Target files: `app/**/page.tsx`, `app/**/layout.tsx`, shared SEO utility modules under `lib/seo/*`.

## 2) Structured Data / Rich Results Validation
### LocalBusiness baseline
- [ ] `LocalBusiness` (or approved subtype) JSON-LD is present and valid.
- [ ] Business entity has stable `@id` and consistent fields across pages.
- [ ] Required identity fields are present (`name`, `url`, `telephone`, `address`, `areaServed`).

### Service-page schema
- [ ] Each service route includes one `Service` JSON-LD entity.
- [ ] `Service.provider` references the canonical business `@id`.
- [ ] `serviceType`, `description`, `url`, and `areaServed` are populated and route-accurate.

### FAQ + breadcrumb schema
- [ ] `FAQPage` exists only when matching visible FAQ content is rendered.
- [ ] FAQ questions and answers match on-page content exactly in intent/facts.
- [ ] `BreadcrumbList` reflects actual page hierarchy and clickable path.

### Rich Results validation tooling steps
- [ ] Validate representative core + service URLs in [Google Rich Results Test](https://search.google.com/test/rich-results).
- [ ] Validate JSON-LD syntax and entity graph consistency in [Schema Markup Validator](https://validator.schema.org/).
- [ ] Capture validation artifacts (screenshots/notes) for release evidence.

Owner + file mapping:
- Owner: `FrontendAgent` (implementation), `SEOAgent` (schema QA), `ContentAgent` (FAQ source-of-truth).
- Target files: `lib/seo/schema.ts`, `lib/seo/types.ts`, `app/services/**/page.tsx`, `components/sections/FAQ*.tsx`.

## 3) Sitemap Validation (`sitemap.xml`)
- [ ] `sitemap.xml` is reachable in production/staging and returns 200.
- [ ] All canonical core + service URLs are included.
- [ ] No noindex, redirect-only, error, or duplicate URLs are present.
- [ ] URL host/protocol matches production canonical domain.
- [ ] `lastmod` values are present and plausible for changed pages.

Owner + file mapping:
- Owner: `FrontendAgent`, `SEOAgent` reviewer.
- Target files: sitemap generation path (`app/sitemap.ts` or equivalent), SEO constants/config modules.

## 4) Robots Validation (`robots.txt`)
- [ ] `robots.txt` is reachable and returns 200.
- [ ] `Sitemap:` directive points to canonical sitemap URL.
- [ ] Public routes intended for indexing are not blocked.
- [ ] Non-public/system routes are blocked where applicable.
- [ ] Robots directives do not conflict with per-page metadata robots tags.

Owner + file mapping:
- Owner: `FrontendAgent`, `SEOAgent` reviewer.
- Target files: `public/robots.txt` or route-based robots file (`app/robots.ts`).

## 5) Crawl and Index Behavior Validation
- [ ] No orphan indexable pages remain (all discoverable via internal links/sitemap).
- [ ] No broken internal links across core and service pages.
- [ ] Canonical chains are clean (no unnecessary redirect hops).
- [ ] Soft-404 and duplicate-title signals are absent in crawl audit output.
- [ ] Search Console URL Inspection confirms indexability for sample URLs.

Recommended tools:
- [ ] Search Console URL Inspection and Coverage reports.
- [ ] Site crawl tooling (Screaming Frog or equivalent) on staging/production.

Owner + file mapping:
- Owner: `SEOAgent` (audit), `FrontendAgent` + `ContentAgent` (fixes).
- Target areas: route metadata exports, internal link components, sitemap/robots sources.

## 6) Internal Linking Validation
- [ ] Every service page links to `/services` and `/contact`.
- [ ] Core pages link to priority services with descriptive anchors.
- [ ] Related-service modules are present and contextually relevant.
- [ ] Anchor text is descriptive (service intent), not generic filler.
- [ ] No internal links point to outdated slug variants.

Owner + file mapping:
- Owner: `ContentAgent` (anchor/content strategy), `FrontendAgent` (component wiring), `SEOAgent` (audit).
- Target files: nav/footer and content section components, service templates, CTA/link modules.

## 7) Release Evidence Package (SEO)
- [ ] Link list of validated URLs (core + 12 service pages).
- [ ] Rich Results and schema validator pass artifacts attached.
- [ ] Crawl report summary attached (indexability, broken links, duplicates).
- [ ] `sitemap.xml` and `robots.txt` verification notes attached.
- [ ] Open issues logged with owner, severity, and fix ETA.

## Bootstrap Exit Notes
- This checklist is complete for charter bootstrap and ready for implementation-phase execution.
- Build/test commands remain intentionally pending in bootstrap:
  - `npm run build` -> Pending
  - `npm test` -> Pending
