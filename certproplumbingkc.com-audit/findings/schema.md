# Schema / Structured Data — certproplumbingkc.com

**Score: 5 / 100**

## Detection

- JSON-LD: **0** scripts on all 16 live pages.
- Microdata / RDFa: none observed.
- Google rich-result eligibility today: none.

## Missing (required for this business type)

| Type | Where | Why |
|---|---|---|
| `Plumber` (or `LocalBusiness`) | All indexable pages, stable `@id` | Local pack / Knowledge / AI entity |
| `PostalAddress` + `areaServed` | Sitewide | SAB serving 10 counties; Chamber lists Liberty, MO |
| `telephone` (E.164) | Sitewide | `(816) 454-0247` / `+18164540247` |
| `openingHoursSpecification` | Sitewide | Chamber: Mon–Fri 7:00–18:00; site currently silent |
| `Service` | Each `/services/[slug]` | `provider` → business `@id` |
| `BreadcrumbList` | Service hierarchy | `/` → Services → [Service] |
| `WebSite` + `WebPage` | All | Identity + canonical URL |
| `Person` | About | Derek Drager, master plumber |
| `ContactPage` | `/contact` | Matches page type |

## Do not add for Google SERP benefit

- **FAQPage:** Google retired FAQ rich results for all sites on 2026-05-07. Visible FAQs can stay. Do not add FAQPage expecting SERP stars. Do not remove visible FAQs.
- **HowTo:** deprecated. Do not mark the dishwasher “How To” card even if it becomes a real article.

## Review / AggregateRating

Do **not** invent ratings. Only add when review count and rating are policy-compliant and match visible, source-verifiable data (GBP). None found on-site.

## Implementation notes

The in-repo SEO blueprint already specified `lib/seo/schema.ts` + injector in `app/layout.tsx`. That work is still unimplemented.

Use absolute `https://www.certproplumbingkc.com/...` URLs in `@id` after host lock. Include `sameAs`: LinkedIn company, Nextdoor, Chamber, GBP (once claimed).
