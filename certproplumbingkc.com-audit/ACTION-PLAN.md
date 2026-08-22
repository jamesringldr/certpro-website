# Action plan — certproplumbingkc.com

Priorities: **Critical** (blocks indexing or splits the entity) → **High** (rankings) → **Medium** (30 days) → **Low** (backlog).

Each item includes the first-principle observation (**Think**), **depends on**, a **failure check**, and a **leading indicator**.

---

## Phase 1 — Critical fixes (Week 1)

### 1. Lock one canonical host
**Severity:** Critical  
**Think:** Google cannot consolidate two identical 200 hosts.  
**Do:** Choose `https://www.certproplumbingkc.com` (matches current branding). 301 `certproplumbing.com` + all HTTP/apex variants. Add `metadata.alternates.canonical` (absolute) on every App Router page.  
**Depends on:** Vercel domain list.  
**Failure check:** Both hosts still 200 after 48h, or GSC shows duplicates.  
**Leading indicator:** Single host in crawl `final_url`.

### 2. Ship robots.txt + sitemap.xml
**Severity:** High  
**Do:** `app/robots.ts` allow `/`, disallow `/api/`; `app/sitemap.ts` with the 16 indexable URLs.  
**Depends on:** Host lock (absolute URLs).  
**Failure check:** `/robots.txt` still HTML 404; sitemap URL not listed.  
**Leading indicator:** GSC sitemap “Success” + discovered URL count = 16.

### 3. Unique titles and descriptions
**Severity:** High  
**Do:** Stop inheriting the root `layout.tsx` title on `/about`, `/contact`, `/services`. Replace the “Mobile-first plumbing website…” description everywhere. Service pattern: `[Service] in North Kansas City | CertPro` (50–60 chars) and 140–160 char descriptions.  
**Depends on:** None.  
**Failure check:** Four URLs still share one `<title>` in view-source.  
**Leading indicator:** GSC appearance impressions on service queries (weeks 3–6).

### 4. JSON-LD Plumber graph
**Severity:** High  
**Do:** Server-render JSON-LD: `Plumber` `@id`, telephone `+1-816-454-0247`, `areaServed` (10 counties), `sameAs` (LinkedIn, Chamber, GBP when live). `Service` + `BreadcrumbList` on leaves. **Do not** add FAQPage for SERP.  
**Depends on:** Canonical host + truthful hours.  
**Failure check:** Rich Results Test finds 0 entities.  
**Leading indicator:** GSC Enhancement reports for Local business.

### 5. NAP alignment
**Severity:** High  
**Do:** Same legal name, phone, website, hours on site footer, schema, GBP, Chamber. Update Chamber URL from `http://www.certproplumbing.com`. Publish hours and emergency/after-hours policy (Chamber is Mon–Fri 7–6; ads imply emergency).  
**Depends on:** Business decision on hours.  
**Failure check:** Citations still disagree after two weeks.  
**Leading indicator:** GBP website clicks land on the canonical host.

---

## Phase 2 — High-impact (Weeks 2–3)

### 6. Link the homepage service module
**Severity:** High  
**Do:** Wrap `ServiceGridSection` cards in `Link` to `/services/[slug]`. Stop duplicating the carousel as unlinked copies for SEO (duplication is a UI choice; links are not optional).  
**Failure check:** Homepage still has 0 links to drain-cleaning, leak-detection, etc.  
**Leading indicator:** Internal click path Home → Service in analytics.

### 7. Remove production scaffolding
**Severity:** High  
**Do:** Delete “Service Template” eyebrow. Rewrite `/services` intro (kill “SEO-friendly service pages…”). Either ship real insight URLs or remove the article cards and “View All Articles” → `/services`. Fix footer `#` links, Testimonials → `/contact`, dead social, inert newsletter.  
**Failure check:** Decoy CTAs still in production HTML.  
**Leading indicator:** Lower homepage bounce on “insights” clicks (they should navigate).

### 8. E-E-A-T on About
**Severity:** High  
**Do:** Name Derek Drager (master plumber) and Ashley Drager. Attribute 30+ years and prior firms honestly. Add license number if public. Photo of people + truck (vehicle image already exists).  
**Failure check:** About still <200 words with no names.  
**Leading indicator:** Brand SERP shows owners / knowledge-style facts.

### 9. Deepen three money pages (not all 12 at once)
**Severity:** High  
**Do:** Unique 800+ word coverage for Emergency, Sewer, Water heater — neighborhoods (Liberty, Gladstone, North KC), what to do before arrival, repair vs replace, photos. Match SERP service-page type.  
**Depends on:** Template cleanup.  
**Failure check:** Word count up but all three pages still share the same FAQs/body.  
**Leading indicator:** GSC queries containing “emergency plumber” + city.

### 10. Compress media
**Severity:** High (performance)  
**Do:** Hero MP4 ≪ 9.2 MB or still+optional video. Vehicle PNG 680 KB → WebP/AVIF <200 KB. Add favicon (`public/icon.png` is unused at `/favicon.ico`).  
**Failure check:** PSI LCP still the video after deploy.  
**Leading indicator:** PSI mobile LCP (re-run when API allows).

---

## Phase 3 — Content and authority (Month 2)

### 11. Claim / complete GBP as SAB
**Severity:** High  
**Do:** Category Plumber, service area = listed counties, hide address if no office. Photos of truck, team, jobs. Review ask after every job.  
**Failure check:** Maps pack never shows the listing for Liberty/North KC tests.  
**Leading indicator:** GBP discovery views + calls.

### 12. Remaining service pages + optional Liberty page
**Severity:** Medium  
**Do:** Unique copy for the other 9 services. One Liberty landing page **only if** unique (Chamber + article titles already target Liberty). Hard stop: do not mass-generate 10 thin county pages.

### 13. Privacy Policy + Terms
**Severity:** Medium (trust / legal)  
**Do:** Real pages; footer links.

### 14. Open Graph
**Severity:** Medium  
**Do:** 1200×630 share image; `og:url` = canonical.

### 15. Citation cleanup
**Severity:** Medium  
**Do:** Nextdoor, LinkedIn company website field, any remaining `.com` HTTP links.

---

## Phase 4 — Monitor (ongoing)

- GSC: indexed count, duplicate “Google chose different canonical,” sitemap errors.
- GBP: calls, direction (if address shown), Q&A.
- `call_click` / booking `entrypoint` events (already in code).
- Re-audit after host + schema + three money pages ship.
- Optional: `/seo setup` then PSI + drift baseline.

**Falsifiability for the whole plan:** If indexed URLs and GBP discovery are healthy but calls stay flat for 60 days, the bottleneck is conversion (hours honesty, reviews, speed) not more blog posts.
