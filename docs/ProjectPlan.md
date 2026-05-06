# CertPro Implementation Plan

## Planning Assumptions
- Baseline status model: `Not Started`, `In Progress`, `Blocked`, `Done`.
- Sprint cadence: 1 week per sprint (adjust as needed).
- Current project state: build started, but implementation alignment/reset against PRD is needed.

## Specialized Agent Roster

| Agent | Focus | Primary Outcomes |
| :--- | :--- | :--- |
| **ProductOpsAgent** | PRD traceability, roadmap, QA gates | Keeps scope tied to PRD and DOD |
| **FrontEndAgent** | React UI, components, responsive UX | Mobile-first pages and reusable UI |
| **ConversionAgent** | CTA flow, forms UX, trust hierarchy | Higher call/book conversion |
| **ContentAgent** | Service/city copy and FAQs | Localized, high-intent content |
| **SEOAgent** | Metadata, schema, sitemap/robots, technical SEO | Better local search visibility |
| **BackendIntegrationAgent** | Form pipeline, Sheets/webhook integration, analytics wiring | Reliable lead capture + event tracking |
| **MapMediaAgent** | Service area map, image optimization and lazy loading | Interactive coverage map + performant assets |
| **ReleaseAgent** | Build/release validation and deployment hardening | Stable production deploy and launch checklist |

## Epic Roadmap (Milestones)

| Epic ID | Epic Name | Milestone/Gate | Sprint Window | Status | Predecessor |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **E1** | Foundation & Architecture | Project skeleton + design system baseline approved | S1-S2 | In Progress | None |
| **E2** | Conversion UX & Core Pages | Home + key conversion journeys functional on mobile | S3-S4 | Not Started | E1 |
| **E3** | Local SEO & Content Expansion | Service/city pages + schema + crawlability complete | S5-S6 | Not Started | E2 (partial), E1 |
| **E4** | Integrations, QA & Launch | Leads/analytics validated + production release approved | S7-S8 | Not Started | E2, E3 |

## Sprint Plan (Sequenced + Parallelizable)

| Sprint ID | Sprint Name | Epic | Primary Goal | Status | Predecessor (Epic/Sprint) | Parallel Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **S1** | Architecture Reset & Repo Baseline | E1 | Align implementation to PRD architecture | In Progress | None | Can run with S2 content inventory tasks |
| **S2** | Design System + Global UX Foundation | E1 | Mobile-first layout, header/sticky bar patterns | Not Started | S1 | Some content drafting can run in parallel |
| **S3** | Core Conversion Pages (Home/About/Contact) | E2 | Build high-converting core pages and CTAs | Not Started | S2 | Can run parallel with S4 backend scaffolding |
| **S4** | Lead Capture + Analytics Pipeline | E2 | Form routing and GA4 conversion events | Not Started | S1 | Parallel with S3 after shared CTA contract |
| **S5** | Service Pages + IA Expansion | E3 | Build all 12 service landing pages | Not Started | S3 | Can run with S6 SEO metadata work |
| **S6** | Local SEO + City Template System | E3 | City/service local pages + schema + technical SEO | Not Started | S5 (content structure), S4 (event naming) | Parallel with late S5 once templates are stable |
| **S7** | Media/Map Performance + Trust Hardening | E4 | Interactive map, WebP/lazy-load, trust proof polish | Not Started | S3, S5 | Can run with S8 pre-launch QA |
| **S8** | Validation, Release, and Launch Handoff | E4 | DOD sign-off and production launch | Not Started | S4, S6, S7 | Final gate; no downstream sprint |

## Task Breakdown by Sprint

### S1 - Architecture Reset & Repo Baseline (E1)

| Task ID | Task | Assigned Agent | Status | Predecessor |
| :--- | :--- | :--- | :--- | :--- |
| **T1.1** | Audit existing codebase against PRD requirements and list gaps | ProductOpsAgent | In Progress | None |
| **T1.2** | Define/confirm React folder structure, route map, and shared component conventions | FrontEndAgent | Not Started | T1.1 |
| **T1.3** | Establish environment variables and integration contracts (forms + GA4 events) | BackendIntegrationAgent | Not Started | T1.1 |
| **T1.4** | Publish implementation tracking board template (tasks/status/owners) | ProductOpsAgent | Not Started | T1.1 |

### S2 - Design System + Global UX Foundation (E1)

| Task ID | Task | Assigned Agent | Status | Predecessor |
| :--- | :--- | :--- | :--- | :--- |
| **T2.1** | Implement global layout shell (header, footer, CTA-safe spacing) | FrontEndAgent | Not Started | T1.2 |
| **T2.2** | Build mobile sticky emergency bar with "Call Now" + "Book Now" | ConversionAgent | Not Started | T2.1 |
| **T2.3** | Implement trust architecture section components (family-owned, 24/7, licensing) | FrontEndAgent | Not Started | T2.1 |
| **T2.4** | Define typography/color/button system optimized for conversion hierarchy | ConversionAgent | Not Started | T2.1 |

### S3 - Core Conversion Pages (E2)

| Task ID | Task | Assigned Agent | Status | Predecessor |
| :--- | :--- | :--- | :--- | :--- |
| **T3.1** | Build Home page with hero, value props, CTA funnel, and service grid preview | FrontEndAgent | Not Started | T2.2, T2.4 |
| **T3.2** | Build About page with family-owned trust narrative and credentials module | ContentAgent | Not Started | T2.3 |
| **T3.3** | Build Contact page with primary estimate form + secondary click-to-call | ConversionAgent | Not Started | T2.2 |
| **T3.4** | Add responsive QA pass for Home/About/Contact (mobile/tablet/desktop) | ProductOpsAgent | Not Started | T3.1, T3.2, T3.3 |

### S4 - Lead Capture + Analytics Pipeline (E2)

| Task ID | Task | Assigned Agent | Status | Predecessor |
| :--- | :--- | :--- | :--- | :--- |
| **T4.1** | Implement form submission handler via Formspree/EmailJS webhook bridge | BackendIntegrationAgent | Not Started | T1.3 |
| **T4.2** | Connect submission output to Google Sheets destination workflow | BackendIntegrationAgent | Not Started | T4.1 |
| **T4.3** | Integrate GA4 and instrument CTA events (call/book/form submit) | BackendIntegrationAgent | Not Started | T1.3 |
| **T4.4** | Validate event firing and conversion naming consistency with UX flows | ProductOpsAgent | Not Started | T4.3, T3.1 |

### S5 - Service Pages + IA Expansion (E3)

| Task ID | Task | Assigned Agent | Status | Predecessor |
| :--- | :--- | :--- | :--- | :--- |
| **T5.1** | Define final list and URL slugs for 12 service pages | SEOAgent | Not Started | T3.1 |
| **T5.2** | Build reusable service page template (hero, problem/solution, FAQ, CTA) | FrontEndAgent | Not Started | T5.1 |
| **T5.3** | Draft and publish SEO-oriented copy for all 12 service pages | ContentAgent | Not Started | T5.2 |
| **T5.4** | Add service internal linking from home/service grid and key CTAs | ConversionAgent | Not Started | T5.3 |

### S6 - Local SEO + City Template System (E3)

| Task ID | Task | Assigned Agent | Status | Predecessor |
| :--- | :--- | :--- | :--- | :--- |
| **T6.1** | Implement city template framework for target service area pages | SEOAgent | Not Started | T5.2 |
| **T6.2** | Publish location-aware metadata and on-page local intent elements | SEOAgent | Not Started | T6.1, T5.3 |
| **T6.3** | Implement JSON-LD for `LocalBusiness` and `Service` schemas | SEOAgent | Not Started | T6.1 |
| **T6.4** | Generate/validate `sitemap.xml` and `robots.txt` strategy | SEOAgent | Not Started | T6.2 |

### S7 - Media/Map Performance + Trust Hardening (E4)

| Task ID | Task | Assigned Agent | Status | Predecessor |
| :--- | :--- | :--- | :--- | :--- |
| **T7.1** | Integrate interactive service area map for 8 key cities | MapMediaAgent | Not Started | T3.1 |
| **T7.2** | Convert/compress images to WebP and implement lazy loading | MapMediaAgent | Not Started | T3.1, T5.2 |
| **T7.3** | Add before/after or example-photo modules with performance-safe rendering | FrontEndAgent | Not Started | T7.2 |
| **T7.4** | Validate map/mobile behavior and trust section clarity under load | ProductOpsAgent | Not Started | T7.1, T7.3 |

### S8 - Validation, Release, and Launch Handoff (E4)

| Task ID | Task | Assigned Agent | Status | Predecessor |
| :--- | :--- | :--- | :--- | :--- |
| **T8.1** | Execute DOD checklist validation across UX, forms, events, and schema | ProductOpsAgent | Not Started | T4.4, T6.3, T7.4 |
| **T8.2** | Run production build/performance checks and remediate blockers | ReleaseAgent | Not Started | T8.1 |
| **T8.3** | Deploy and verify production environment + rollback notes | ReleaseAgent | Not Started | T8.2 |
| **T8.4** | Launch handoff package (runbook, ownership, post-launch monitoring plan) | ProductOpsAgent | Not Started | T8.3 |

## Definition of Done Mapping (PRD Alignment)

| PRD DOD Requirement | Planned Validation Task |
| :--- | :--- |
| Responsive across mobile/tablet/desktop | T3.4, T7.4 |
| Forms route to designated Google Sheet | T4.1, T4.2 |
| GA4 events fire on clicks | T4.3, T4.4 |
| Local SEO schema validates | T6.3, T8.1 |
| WebP + lazy-load media optimization | T7.2, T8.1 |

## Immediate Next Actions
1. Complete **T1.1** gap audit and mark all pre-existing work items.
2. Confirm integration choice for forms (**Formspree** vs **EmailJS**) to unblock **T4.1**.
3. Start **T1.2** and **T2.1** in parallel once architecture conventions are approved.
