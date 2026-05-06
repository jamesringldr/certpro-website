# CURSOR Implementation Strategy

## Purpose
This document defines delivery governance for all implementation agents and keeps execution aligned to `docs/PRD.md` and `docs/ProjectPlan.md`.

This is a bootstrap charter only. No implementation tasks are executed from this document.

## Operating Safety Policy
- **Policy:** Plan -> Approve -> Run.
- Every task must include a brief plan and explicit approval artifact before execution begins.
- Agents operate in advisory-first mode for bootstrap governance updates.
- During bootstrap, validation commands are tracked as pending and not executed.

## Scope and Boundaries
- **In scope:** Governance, dependency mapping, task readiness rules, blocker handling, status standards, tracker maintenance.
- **Out of scope (bootstrap phase):** Application implementation under `src/`, `public/`, `app/`, `components/`, `lib/`, `scripts/`, `package*.json`, and CI/deploy files.

## Canonical Status Standard
Use these statuses for all Epics, Sprints, and Tasks:
- `Not Started`: No approved execution has begun.
- `Ready`: Dependencies are satisfied and approval is present.
- `In Progress`: Execution is active by assigned owner.
- `Blocked`: Work cannot continue due to a defined blocker.
- `Done`: Acceptance criteria met and evidence linked.

Status transition rules:
- `Not Started -> Ready`: All predecessor rules pass and approval exists.
- `Ready -> In Progress`: Owner confirms active execution start.
- `In Progress -> Done`: Deliverable complete with acceptance evidence.
- Any active state -> `Blocked`: blocker identified, logged, and escalated.
- `Blocked -> Ready`: blocker resolved and predecessor checks pass again.

## Dependency Model and Predecessor Rules
Dependency chain follows `docs/ProjectPlan.md`:
- **Epic chain:** `E1 -> E2 -> E3 -> E4`
- **Sprint chain:** `S1 -> S2 -> S3 -> S4 -> S5 -> S6 -> S7 -> S8`
- Parallel work is allowed only when explicit predecessor rules in `docs/ProjectPlan.md` are satisfied.

### Epic Dependency Map
| Epic | Depends On | Gate to Start |
| :--- | :--- | :--- |
| E1 Foundation & Architecture | None | Governance approved |
| E2 Conversion UX & Core Pages | E1 | E1 baseline conventions approved |
| E3 Local SEO & Content Expansion | E1, partial E2 | Core page/template contracts stable |
| E4 Integrations, QA & Launch | E2, E3 | UX + SEO deliverables accepted |

### Sprint Dependency Map
| Sprint | Depends On | Ready Rule |
| :--- | :--- | :--- |
| S1 | None | Charter and tracking are approved |
| S2 | S1 | Architecture conventions finalized |
| S3 | S2 | Global UX patterns available |
| S4 | S1 (+ shared CTA contract with S3) | Integration contracts approved |
| S5 | S3 | Core page IA and templates stable |
| S6 | S5 (+ S4 event naming) | Service structure and tracking conventions locked |
| S7 | S3, S5 | Core UX and service templates complete |
| S8 | S4, S6, S7 | Validation inputs complete and accepted |

### Task-Level Predecessor Rule
A task can move to `Ready` only if:
- All predecessor task IDs from `docs/ProjectPlan.md` are `Done`.
- Required owner is assigned.
- Acceptance criteria are written and testable.
- Approval for execution exists.
- No unresolved blocker linked to the task.

## Ready-to-Start Queue Logic
Compute queue order using this deterministic logic:
1. Select tasks with status `Not Started`.
2. Filter to tasks whose predecessors are all `Done`.
3. Filter to tasks with explicit owner + acceptance criteria + approval artifact.
4. Prioritize by:
   - Highest upstream unlock value (unblocks most downstream tasks).
   - Earliest sprint in sequence.
   - Highest risk-reduction impact.
5. Mark selected tasks as `Ready`.

If any required condition fails, keep task `Not Started` or set `Blocked` with reason.

## Blocker and Escalation Protocol
When blocked:
1. Set status to `Blocked` immediately.
2. Log blocker with:
   - Blocking type (`Dependency`, `Approval`, `Technical`, `External`, `Scope`, `Environment`)
   - Impacted IDs (Epic/Sprint/Task)
   - First observed timestamp
   - Owner
   - Proposed mitigation
3. Escalation path:
   - **Level 1 (Owner):** attempt local resolution.
   - **Level 2 (ProductOpsAgent):** cross-agent coordination and re-sequencing.
   - **Level 3 (Project Sponsor/Approver):** scope, priority, or policy decision.
4. Re-qualify predecessor checks before returning to `Ready`.

## Agent Governance Standard (All Agents)
All agents must:
- Reference PRD requirement(s) and planned validation task(s) for each deliverable.
- Update task state using canonical status values only.
- Respect predecessor rules before requesting `Ready`.
- Provide completion evidence before `Done`.
- Raise blockers with full escalation metadata.
- Preserve Plan -> Approve -> Run at every execution boundary.

## Validation Tracking
- `npm run build` -> **Not run - docs-only task (T1.1 audit)**
- `npm test` -> **Not run - docs-only task (T1.1 audit)**

No implementation code was modified during T1.1; build/test execution is intentionally skipped.

For T1.1B (conversion funnel + CTA audit input):
- `npm run build` -> **Not run - docs-only advisory task**
- `npm test` -> **Not run - docs-only advisory task**

For T1.1C (content coverage and messaging audit input):
- `npm run build` -> **Not run - docs-only advisory task**
- `npm test` -> **Not run - docs-only advisory task**

For T1.1D (technical/local SEO gap audit input):
- `npm run build` -> **Not run - docs-only advisory task**
- `npm test` -> **Not run - docs-only advisory task**

For T1.2 (architecture conventions and route/component contract):
- `npm run build` -> **Pass**
- `npm test` -> **Failed (script missing: `test`)**

Validation notes for T1.2:
- Build succeeded and route output confirms core pages plus dynamic service slug generation.
- Test execution is currently blocked by missing `test` script in `package.json`.

For T1.4 (implementation tracking board template):
- `npm run build` -> **Not run - docs-only governance task**
- `npm test` -> **Not run - docs-only governance task**

For T1.1E (DESIGN.md conformance delta audit input):
- `npm run build` -> **Not run - docs-only advisory task**
- `npm test` -> **Not run - docs-only advisory task**

For T1.3 (environment variables + integration contracts for forms and GA4 events):
- `npm run build` -> **Pass**
- `npm test` -> **Failed (script missing: `test`)**

Validation notes for T1.3:
- Environment variable and integration event contracts are finalized in `docs/agent-guides/BackendIntegrationAgent-Event-Contract.md`.
- Build succeeded; test execution remains blocked by missing `test` script in `package.json`.

For T4.1 (form submission transport handler via Formspree/EmailJS webhook bridge):
- `npm run build` -> **Pass**
- `npm test` -> **Failed (script missing: `test`)**
- `npm run lint` -> **Failed (Next 16 CLI incompatibility in current lint script)**
- `npx tsc --noEmit` -> **Pass**

Validation notes for T4.1:
- Added transport route and integration utilities with strict typed payload/response envelopes.
- Failure responses are safe and deterministic; no secrets are returned in API responses.
- Test automation remains partially blocked until canonical `test` and `lint` script contracts are corrected.

For T4.3 (GA4 integration and CTA event instrumentation):
- `npm run build` -> **Pass**
- `npm test` -> **Failed (script missing: `test`)**
- `npx tsc --noEmit` -> **Pass**

Validation notes for T4.3:
- Canonical event names from T1.3 are wired at CTA trigger points across shared components (`header_cta`, `sticky_bar`, `service_cta`).
- Base GA4 bootstrap is enabled via shared layout header component using `NEXT_PUBLIC_GA4_MEASUREMENT_ID`.
- AnalyticsAgent ownership was unavailable at execution time; BackendIntegrationAgent executed full instrumentation scope and logged this ownership deviation.

## T1.1 Canonical PRD Gap Audit (2026-05-06)
Audit sources:
- PRD requirements in `docs/PRD.md`
- Execution sequencing in `docs/ProjectPlan.md`
- Current implementation evidence from `app/`, `components/`, and `data/services.ts`

### PRD Must-Have Coverage Matrix
| PRD Must-Have | Current State | Evidence | Gap / Risk | Ownership |
| :--- | :--- | :--- | :--- | :--- |
| Emergency sticky bar with "Call Now" + "Book Now" always visible on mobile | Done | `components/layout/MobileEmergencyBar.tsx` is fixed to bottom on mobile and includes both CTAs | "Always visible" behavior still needs runtime QA confirmation under map/form scroll states | ConversionAgent + FrontEndAgent |
| Service grid with 12 specified services and individual landing pages | Done | `data/services.ts` defines 12 services; `app/services/page.tsx` renders grid; `app/services/[slug]/page.tsx` generates per-service pages | Needs SEO/content QA to ensure final canonical slugs and copy acceptance | FrontEndAgent + ContentAgent + SEOAgent |
| Local service area map for 8 key cities | Partial | `components/sections/ServiceAreaSection.tsx` lists 8 cities | Map is placeholder text, not interactive embed/provider integration | MapMediaAgent |
| Lead capture: free estimate form (name/phone/service/message) + top header click-to-call | Partial | Form fields present in `components/sections/LeadCaptureSection.tsx`; header call link present in `components/layout/SiteHeader.tsx` | No form submission handler/webhook/Sheets pipeline and no event instrumentation | BackendIntegrationAgent + ConversionAgent |
| Trust architecture: family-owned, 24/7 availability, licensing/certification | Partial | Messaging appears in hero/about/lead sections (`app/page.tsx`, `app/about/page.tsx`, `components/sections/LeadCaptureSection.tsx`) | No dedicated, standardized trust module with claim-proof contract and licensing evidence source | ContentAgent + ConversionAgent + FrontEndAgent |

### PRD Technical Architecture and DOD Alignment
| PRD/DOD Item | Current State | Gap Classification | Next Enabling Tasks |
| :--- | :--- | :--- | :--- |
| React frontend baseline | Done | None | Continue with S2-S3 implementation |
| Form submission routed to Google Sheets (API/webhook bridge) | Missing | Integration gap | T1.3, T4.1, T4.2 |
| GA4 conversion tracking on CTA actions | Done | Analytics baseline delivered | T1.3, T4.3, T4.4 |
| Local SEO schema (`LocalBusiness` + `Service`) | Missing | SEO/schema gap | T6.1, T6.3 |
| Dynamic service/location page generation | Partial | City template system missing | T6.1, T6.2 |
| `sitemap.xml` and `robots.txt` plan/implementation | Missing | Crawlability gap | T6.4 |
| WebP optimization + lazy loading for example photos/assets | Partial | No optimization pipeline or media evidence artifacts | T7.2, T7.3 |
| Responsive validation across mobile/tablet/desktop | Partial | Layout appears responsive but no formal QA evidence pass logged | T3.4, T7.4 |

### Consolidated Advisory Audit Findings (Single Source of Truth)
| Advisory Stream | Consolidated Finding | Status |
| :--- | :--- | :--- |
| Design | Mobile-first patterns and structure are present; responsive evidence and accessibility acceptance artifacts are not yet captured | Partial |
| Conversion | Core emergency CTAs exist (header, sticky bar, page CTAs), but event instrumentation and conversion verification are absent | Partial |
| Content | Core page/service copy foundation exists including FAQ blocks for all services, but trust-claim proofing and final service/city content mapping remain open | Partial |
| SEO | Service slug pages exist, but structured data, sitemap/robots, and city-template local SEO implementation are not yet present | Partial |

## Ready-to-Start Queue (Post-T1.1 Evidence)
Predecessor check basis: `docs/ProjectPlan.md` task dependencies plus canonical `Ready` requirements.

| Task ID | Owner | Predecessor Check | Queue Status | Reason |
| :--- | :--- | :--- | :--- | :--- |
| T1.2 | FrontEndAgent | T1.1 complete | Ready | Architecture conventions can now be finalized using audit evidence |
| T1.3 | BackendIntegrationAgent | T1.1 complete | Done | Integration env + event contracts finalized for implementation handoff |
| T1.4 | ProductOpsAgent | T1.1 complete | Done | Canonical tracker template published with predecessor/evidence/blocker governance fields |
| T2.1 | FrontEndAgent | T1.2 complete | Done | Global shell primitives delivered (`LayoutShell`, route-wide header/footer, mobile CTA-safe spacing) and build validation passed |
| T4.1 | BackendIntegrationAgent | T1.3 complete | Done | Form submission transport route implemented with typed validation, retries, and deterministic success/failure envelopes |
| T4.2 | BackendIntegrationAgent | T4.1 complete | Ready | Google Sheets routing can now extend stable transport contract and destination outcome envelope |
| T4.3 | BackendIntegrationAgent + AnalyticsAgent | T1.3 complete | Done | GA4 base integration and canonical call/book/form submit event hooks are implemented in shared CTA components |
| T4.4 | BackendIntegrationAgent + AnalyticsAgent | T4.3 complete | Ready | Event map is stable and validation checklist execution can start |
| T6.1 | SEOAgent | Requires T5.2 done | Blocked | City template work remains downstream of service template stabilization |

## T1.4 Canonical Implementation Tracking Board Template (2026-05-06)
This template is mandatory for all agents and is the single governance format for status, dependency, ownership, and evidence tracking.

Template rules:
- Use canonical statuses only: `Not Started`, `Ready`, `In Progress`, `Blocked`, `Done`.
- `Ready` requires explicit predecessor check pass and linked approval artifact.
- `Done` requires linked Definition of Done evidence and validation evidence.
- Release/deploy rows require ReleaseAgent approval evidence (ReleaseAgent-only authority remains enforced).

### Epic Board Template
| Epic ID | Epic Name | Owner | Status | Predecessor IDs | Predecessor Check | Approval Artifact | Validation Evidence | Blocker ID(s) | Last Updated |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| EX | <epic name> | <agent> | Not Started | None / E# | Pass/Fail + rationale | <link/id> | <link/id or N/A> | B# / None | YYYY-MM-DD |

### Sprint Board Template
| Sprint ID | Epic ID | Sprint Name | Owner | Status | Predecessor IDs | Predecessor Check | Ready Qualification | Approval Artifact | Validation Evidence | Blocker ID(s) | Last Updated |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| SX | EX | <sprint name> | <agent> | Not Started | S# / E# | Pass/Fail + rationale | Yes/No + reason | <link/id> | <link/id or N/A> | B# / None | YYYY-MM-DD |

### Task Board Template
| Task ID | Sprint ID | Task Name | Owner | Status | Predecessor IDs | Predecessor Check | Approval Artifact | Definition of Done Evidence | Validation Evidence | Ready Qualification | Blocker ID | Escalation Level | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| TX.X | SX | <task name> | <agent> | Not Started | T#.# | Pass/Fail + rationale | <link/id> | <artifact links> | <build/test/proof links> | Yes/No + reason | B# / None | L1/L2/L3 | <short note> |

### Blocker Log Template (Required for any `Blocked` item)
| Blocker ID | Type | Impacted IDs | Owner | First Seen | Severity | Mitigation Plan | Escalation Status | Escalation Owner | Target Resolution | Resolution Evidence |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| B# | Dependency/Approval/Technical/External/Scope/Environment | E#/S#/T# | <agent> | YYYY-MM-DD hh:mm TZ | High/Medium/Low | <plan> | L1/L2/L3 + state | <owner> | YYYY-MM-DD | <link/id or Pending> |

### Qualification Checklist (Task Level)
- `Ready` requires: predecessor check `Pass`, owner assigned, approval artifact linked, no unresolved blocker.
- `Blocked` requires: blocker log row created with full escalation metadata.
- `Done` requires: Definition of Done evidence link + validation evidence link; release/deploy work requires ReleaseAgent approval evidence.

## Task Tracker Sync
### Completed tasks (bootstrap + audit)
- [x] **T0.1** ProductOpsAgent Bootstrap Charter.
- [x] **T0.2** DesignAgent Bootstrap Charter and review checklist.
- [x] **T0.3** ConversionAgent Bootstrap Charter and CTA matrix.
- [x] **T0.4** ContentAgent Bootstrap Charter (style guide + page/slugs outlines).
- [x] **T0.5** SEOAgent Bootstrap Charter (implementation blueprint + validation checklist).
- [x] **T0.6** FrontEndAgent Bootstrap Charter (dev guardrails + file ownership boundaries).
- [x] **T0.7** BackendIntegrationAgent Bootstrap Charter (integration dev charter + event contract).
- [x] **T0.8** MapMediaAgent Bootstrap Charter (dev charter + performance checklist).
- [x] **T0.9** ReleaseAgent Bootstrap Charter (authority policy + release runbook).
- [x] Dependency chain documented across Epics/Sprints/Tasks.
- [x] Predecessor and ready/blocked rules made explicit and reusable.
- [x] Blocker and escalation protocol standardized for all agents.
- [x] Mobile-first UX, accessibility, and conversion hierarchy guidance documented for Home/About/Contact and service templates.
- [x] Emergency CTA/trust/click-path recommendations mapped to measurable conversion events.
- [x] Brand-consistent content framework documented with local-intent and trust-messaging guidance.
- [x] Technical + local SEO blueprint documented, including URL taxonomy, metadata contracts, schema strategy (`LocalBusiness` + `Service`), sitemap/robots plan, internal linking rules, and validation checklist.
- [x] FrontEndAgent bootstrap guardrails documented for editable UI scope, blocked ProductOps approval paths, reusable component conventions, and responsive QA standards.
- [x] Backend integration boundaries and contracts documented for allowed integration touchpoints, form-to-destination reliability, and canonical call/book/form event naming.
- [x] Map/media boundaries, optimization pipeline rules (`WebP`, lazy-load), mobile map behavior requirements, and media-heavy performance thresholds documented.
- [x] Exclusive release authority and deployment safety protocol documented with explicit approval gates, rollback policy, and post-release verification.
- [x] **T1.1** Canonical PRD-to-implementation gap audit completed with evidence-backed Done/Partial/Missing mapping.
- [x] **T1.1A** Design/UX conformance audit input completed with prioritized responsive/trust/CTA hierarchy gaps and acceptance criteria for FrontEndAgent.
- [x] **T1.1B** Conversion funnel and CTA audit input completed with ranked sticky/call-book/trust/coverage gaps and event-linked outcomes.
- [x] **T1.1C** Content coverage and messaging audit input completed with core/service gap matrix and implementation-ready recommendations.
- [x] **T1.1D** Technical/local SEO gap audit input completed with PRD DOD mapping, ranked crawl/index risks, and mitigation tasks mapped to owners.
- [x] **T1.1E** DESIGN.md conformance delta audit completed with token/typography/layout/component-model gaps and implementation-ready recommendations for FrontEndAgent.
- [x] **T1.39** DESIGN.md token migration implemented across shared layout/section primitives using canonical copper/dark palette tokens.
- [x] **T1.40** Typography contract migrated to Work Sans (headings) and Inter (body) at global token level with inherited heading/body roles.
- [x] **T1.41** Shared spacing/container baseline implemented (`80px` desktop section rhythm, `1200px` max container) with responsive scaling safeguards.
- [x] **T1.42** Reusable Home social-proof trust module added (testimonials/logos-style proof + family-owned/24-7/licensed pillars) in early conversion flow.
- [x] **T1.43** Phase-1 CSS-module migration delivered for canonical shared primitives (`SiteHeader`, `SiteFooter`, `SectionShell`) with rollout plan published.
- [x] **T1.2** React folder structure, route map, and shared component conventions finalized for current app architecture.
- [x] **T1.3** Environment variable and integration contract standards finalized for forms + GA4 call/book/form events.
- [x] **T1.4** Canonical implementation tracking board template published with mandatory Epic/Sprint/Task/Blocker schemas and predecessor/evidence qualification gates.
- [x] **T2.1** Global layout shell implemented with shared header/footer primitives and CTA-safe mobile spacing contract.
- [x] **T4.1** Form submission transport handler implemented under API route + integration library with deterministic response contract and safe failure handling.
- [x] **T4.3** GA4 base integration and canonical call/book/form submit CTA instrumentation implemented in shared components.
- [x] Downstream task queue updated with explicit predecessor-based Ready/Blocked decisions.

### Follow-up Tasks Discovered
| Task ID | Follow-up Task | Owner | Priority |
| :--- | :--- | :--- | :--- |
| T0.23 | Publish cross-agent Definition of Ready / Definition of Done checklist | ProductOpsAgent | P1 |
| T0.28 | Define SLA targets for blocker escalation response windows | ProductOpsAgent | P1 |
| T0.31 | Define design token mapping contract (type scale/spacing/contrast) for implementation agents | DesignAgent | P0 |
| T0.16 | Add UX acceptance evidence template for responsive + accessibility + conversion checks | DesignAgent | P1 |
| T0.10 | Define canonical conversion event dictionary and ownership handoff to AnalyticsAgent | ConversionAgent + AnalyticsAgent | P0 |
| T0.11 | Create CTA experiment backlog with hypotheses and guardrail KPIs per template | ConversionAgent | P1 |
| T0.12 | Confirm final 12 service slugs and canonical service naming contract | SEOAgent | P0 |
| T0.13 | Publish metadata brief (title/meta/H1 intent) for core and 12 service pages | SEOAgent | P1 |
| T0.14 | Define JSON-LD-ready FAQ/Service field mapping from content blocks | SEOAgent | P1 |
| T0.19 | Define canonical URL environment contract (`SITE_URL`) and absolute-canonical generation rule for all metadata exports | SEOAgent + FrontendAgent | P0 |
| T0.20 | Add typed schema contract package (`LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList`) with compile-time required fields | SEOAgent + FrontendAgent | P0 |
| T0.21 | Define internal linking acceptance tests to prevent orphan service pages and stale slug links | SEOAgent + ContentAgent + FrontendAgent | P1 |
| T0.22 | Create SEO release evidence template for Rich Results, sitemap/robots verification, and crawl/index audit artifacts | SEOAgent + ReleaseAgent | P1 |
| T0.15 | Build claim-proof registry for trust messaging (licensed/insured/response-time) | ContentAgent | P1 |
| T0.17 | Configure repository branch protection and environment permissions to technically enforce ReleaseAgent-only push/deploy/release controls | ReleaseAgent + RepoAdmin | P0 |
| T0.18 | Create release evidence template pack (plan, approval, rollback, verification logs) for repeatable audit-ready releases | ReleaseAgent | P1 |
| T0.24 | Approve final FrontEndAgent editable-path allowlist and exception process before implementation kickoff | ProductOpsAgent + FrontEndAgent | P0 |
| T0.25 | Create reusable UI PR acceptance checklist (strict typing + accessibility + responsive QA evidence) | FrontEndAgent + DesignAgent | P1 |
| T0.26 | Define typed integration payload contract (`FormSubmissionPayload`, destination outcome envelope, idempotency key schema) and publish shared TypeScript interfaces | BackendIntegrationAgent + FrontEndAgent | P0 |
| T0.27 | Publish Google Sheets delivery reliability matrix (retry classes, max attempts, timeout budgets, terminal failure handling) | BackendIntegrationAgent | P1 |
| T0.29 | Publish GA4 mapping appendix from canonical call/book/form events to GA4 parameters and required validation checks | BackendIntegrationAgent + AnalyticsAgent | P0 |
| T0.30 | Define integration observability baseline (success/retry/failure thresholds, alert routes, and owner escalation path) | BackendIntegrationAgent + ProductOpsAgent | P1 |
| T0.32 | Define map provider adapter interface and typed fallback contract for map render failures | MapMediaAgent + FrontEndAgent | P0 |
| T0.33 | Publish media derivative generation spec (source dimensions, compression targets, `WebP` + fallback matrix) | MapMediaAgent + DesignAgent | P1 |
| T0.34 | Add map/mobile QA evidence template for gesture behavior, tap-target checks, and CTA visibility with embedded map | MapMediaAgent + DesignAgent + ConversionAgent | P1 |
| T1.5 | Implement interactive map embed/provider integration and fallback handling for service-area section | MapMediaAgent | P0 |
| T1.6 | Implement form submission transport contract to webhook/Sheets destination with failure handling | BackendIntegrationAgent | P0 |
| T1.7 | Implement GA4 event instrumentation for call/book/form CTAs with verification checklist | BackendIntegrationAgent + ConversionAgent | P0 |
| T1.8 | Add schema + crawlability deliverables (`LocalBusiness`, `Service`, `sitemap.xml`, `robots.txt`) from SEO blueprint | SEOAgent | P0 |
| T1.9 | Produce formal responsive/accessibility evidence pass across Home/About/Contact/Services flows | ProductOpsAgent + DesignAgent | P1 |
| T1.10 | Implement dedicated Home trust architecture module directly below hero with Family-Owned, 24/7, and Licensing/Certification proof cards | FrontEndAgent | P0 |
| T1.11 | Refactor CTA hierarchy on Home/About/Contact to enforce one dominant mobile action per section | FrontEndAgent + DesignAgent | P0 |
| T1.12 | Expand service template IA to include Deliverables, Proof/Results, and Process/Timeline sections in stable order | FrontEndAgent + ContentAgent | P0 |
| T1.13 | Add mobile header navigation simplification pattern and verify emergency CTA discoverability with sticky bar | FrontEndAgent | P1 |
| T1.14 | Define explicit focus/validation interaction spec for form and nav controls before implementation | DesignAgent + FrontEndAgent | P1 |
| T1.15 | Verify sticky CTA persistence contract across map/form/long-scroll states and define remediation acceptance criteria | FrontEndAgent + ConversionAgent | P0 |
| T1.16 | Enforce call-first CTA precedence contract across sticky/header/hero with explicit book fallback rules | FrontEndAgent + ConversionAgent | P0 |
| T1.17 | Implement trust-sequencing module checkpoints (Immediate/Early/Mid/Pre-Conversion) tied to CTA adjacency rules | FrontEndAgent + ContentAgent + ConversionAgent | P1 |
| T1.18 | Add service-page CTA coverage gates before/after 50% scroll depth with template-level acceptance evidence | FrontEndAgent + ConversionAgent | P1 |
| T1.19 | Define assisted-path optimization checklist for `contact_form_start` -> `contact_form_submit` continuity | BackendIntegrationAgent + ConversionAgent | P1 |
| T1.20 | Publish finalized page-level CTA microcopy sets for Home/About/Contact + all 12 service pages | ContentAgent + ConversionAgent | P0 |
| T1.21 | Produce schema-ready FAQ packs (minimum 5 finalized Q/A per service page) for implementation handoff | ContentAgent + SEOAgent | P0 |
| T1.22 | Build trust-claim evidence registry tying Family-Owned, 24/7, Licensing/Certification copy to approved proof sources | ContentAgent + ProductOpsAgent | P0 |
| T1.23 | Define local-intent phrase bank and insertion rules by page type to prevent keyword stuffing drift | ContentAgent + SEOAgent | P1 |
| T1.24 | Create content QA acceptance checklist for implementation PRs (trust, CTA, FAQ, local-intent gates) | ContentAgent + ProductOpsAgent | P1 |
| T1.25 | Implement typed structured-data baseline (`LocalBusiness` global + `Service` per service URL) and validate serializer contracts before route wiring | SEOAgent + FrontendAgent | P0 |
| T1.26 | Publish route-level metadata acceptance matrix for core + 12 service pages (title/description/canonical/H1/local intent) | SEOAgent + ContentAgent | P0 |
| T1.27 | Create SEO DOD evidence pack template for Rich Results and Schema Validator proof with URL-level pass/fail artifacts | SEOAgent + ReleaseAgent | P1 |
| T1.28 | Define and implement sitemap/robots contract with canonical host policy, inclusion/exclusion matrix, and crawl-verification gates | SEOAgent + FrontendAgent | P0 |
| T1.29 | Define city-template local SEO URL taxonomy and canonical/indexing policy for scalable service-location expansion | SEOAgent + ContentAgent + FrontendAgent | P1 |
| T1.30 | Add internal linking acceptance contract to prevent orphan service URLs and enforce required `/services` + `/contact` link paths | SEOAgent + ContentAgent + FrontendAgent | P1 |
| T1.31 | Plan and execute legacy root-level component migration/deprecation strategy into canonical `components/layout` + `components/sections` paths | FrontEndAgent + ProductOpsAgent | P1 |
| T1.32 | Publish typed route ownership matrix mapping each route to owned section components and data contracts | FrontEndAgent | P1 |
| T1.33 | Add component API review checklist enforcing explicit prop types, no `any`, and section-vs-route split compliance | FrontEndAgent + DesignAgent | P1 |
| T1.34 | Define and add canonical `npm test` script contract (with minimum smoke suite) to restore validation gate reliability | ProductOpsAgent + FrontEndAgent | P0 |
| T1.35 | Define tracker board operational cadence (update SLA, stale-row threshold, daily cut-off, owner reminders) | ProductOpsAgent | P0 |
| T1.36 | Define evidence-link taxonomy and retention rules for approval/validation/blocker artifacts across all rows | ProductOpsAgent + ReleaseAgent | P1 |
| T1.37 | Add runtime env validation guard (`required`/`conditional required`) and fail-fast startup checks for integration routes | BackendIntegrationAgent | P0 |
| T1.38 | Add `.env.example` integration keys and documentation sync from T1.3 contract without committing any secret values | BackendIntegrationAgent + ProductOpsAgent | P1 |
| T2.8 | Fix frontend lint script compatibility with Next 16 CLI and document canonical lint/smoke command for CI parity | FrontEndAgent + ProductOpsAgent | P1 |
| T4.4 | Execute GA4 event validation checklist (DebugView/event parameter assertions for `call_click`, `book_click`, `form_submit`, `form_submit_success`, `form_submit_failure`) | BackendIntegrationAgent + AnalyticsAgent | P0 |
| T4.6 | Add provider-auth hardening for webhook bridge (signature/token verification strategy for Formspree/EmailJS callbacks) | BackendIntegrationAgent | P1 |
| T4.7 | Add route-level anti-spam/rate-limit guardrails for `/api/forms/submit` and define abuse response policy | BackendIntegrationAgent + ProductOpsAgent | P1 |
| T4.8 | Reconcile GA4 environment variable exposure contract (`GA4_MEASUREMENT_ID` vs `NEXT_PUBLIC_GA4_MEASUREMENT_ID`) and publish final client/server naming standard | BackendIntegrationAgent + AnalyticsAgent + ProductOpsAgent | P1 |
| T1.44 | Complete phase-2 CSS module extraction for route-level hero/CTA/card patterns to reduce repeated utility strings and lock visual consistency | FrontEndAgent | P1 |
| T1.45 | Run explicit WCAG AA contrast + focus-state verification pass for copper CTA hierarchy across Home/About/Contact/Services/service pages | FrontEndAgent + DesignAgent | P0 |
