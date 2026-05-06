# ConversionAgent CTA Matrix (T0.3)

## Purpose
Define enforceable CTA rules by placement, device context, and page type for emergency plumbing conversion journeys.

## CTA Placement Matrix
| Placement | Device | Priority | Position Rule | Copy Rule | Primary Action | Secondary Action | Event Mapping |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Sticky Bar | Mobile | P0 | Persistent bottom/top bar visible after load and during scroll | 3-7 words, verb-first, urgency qualifier ("Call Now - 24/7") | Tap-to-call | Callback request if call unavailable | `cta_impression_sticky_primary`, `cta_click_sticky_primary`, `phone_click` |
| Header CTA | Mobile | P1 | Compact header CTA visible at entry; must not compete with sticky bar | Short urgency phrase ("Call 24/7") | Tap-to-call | None or callback link in menu | `cta_impression_header_primary`, `cta_click_header_primary`, `phone_click` |
| Header CTA | Desktop | P0 | Persistent top-right utility CTA | Action + availability ("Speak to a Plumber Now") | Click-to-call | Book/request callback | `cta_impression_header_primary`, `cta_click_header_primary`, `phone_click` |
| Hero Primary | All | P0 | Above-the-fold within first viewport | Urgent explicit action ("Call Now") | Call intent | None | `cta_impression_hero_primary`, `cta_click_hero_primary`, `phone_click` |
| Hero Secondary | All | P1 | Adjacent to hero primary as one alternative only | Lower-friction fallback ("Request Immediate Callback") | Start callback/form | None | `cta_click_page_secondary`, `contact_form_start`, `contact_form_submit` |
| Service Mid-Page CTA | All | P0 | Immediately after first problem/solution section | Context + action ("Need Help Fast? Call Now") | Call intent | Callback/form | `cta_click_page_secondary`, `phone_click`, `contact_form_start` |
| Service Pricing/Availability CTA | All | P1 | Near availability/price reassurance block | Confidence + action ("Get Fast Local Help") | Call intent | Quote request | `cta_click_page_secondary`, `phone_click`, `contact_form_start` |
| Service Footer CTA | All | P2 | Final reinforcement before page end | Short urgency reminder ("Still Need Help? Call 24/7") | Call intent | Callback/form | `cta_click_page_secondary`, `phone_click`, `contact_form_start` |

## Ordering Contract
Apply this priority order to emergency templates:
1. Mobile: Sticky Bar -> Hero Primary -> Header -> Mid-Page CTA -> Footer CTA.
2. Desktop: Hero Primary + Header (parallel prominence) -> Mid-Page CTA -> Footer CTA.
3. Service pages: First repeated CTA appears before 50% scroll depth.

## Trust-Signal Sequence by Click Path Stage
| Stage | Timing Target | Trust Signal | Placement Rule | Event Mapping |
| :--- | :--- | :--- | :--- | :--- |
| Immediate | 0-5s | License/certification + response-time proof | Adjacent to hero or sticky CTA, never above CTA | `trust_signal_view`, `cta_click_*` |
| Early | 5-10s | Rating/review badge | Near hero/supporting block | `trust_signal_view`, `cta_click_*` |
| Mid | 10-20s | Guarantee + transparent pricing cue | Before mid-page CTA on service pages | `trust_signal_view`, `cta_click_page_secondary` |
| Pre-Conversion | Before form/callback submit | Testimonial/local proof | Next to callback/form CTA | `trust_signal_view`, `contact_form_submit` |

## Click-Path Contract
- Emergency fast path (mobile): entry -> sticky CTA click -> `phone_click` (<=15s target).
- Emergency fast path (desktop): entry -> hero/header CTA click -> `phone_click` (<=15s target).
- Assisted path: entry -> hero secondary -> `contact_form_start` -> `contact_form_submit`.

## Implementation Notes for Dev Agents
- Enforce max two CTAs in hero to reduce decision overhead.
- Keep CTA copy semantically aligned across placements ("Call Now", "Call 24/7").
- Ensure page-level CTA modules are reusable and context-injectable by service type.
- Validate CTA impressions and clicks by device and template to measure placement impact.

## T1.1B Conversion Funnel and CTA Audit Input (2026-05-06)
Goal: identify gaps that prevent emergency-to-contact conversion in <= 15 seconds and sequence highest-unlock fixes for implementation agents.

### Funnel Gap Audit (Ranked by Downstream Unlock Value)
| Rank | Gap | Current Risk to <=15s Contact Intent | Highest Unlock Value | Event Outcome Mapping | Recommended Future Task ID |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Sticky bar persistence not formally verified across scroll-heavy states (map/form/long service content) | Users lose fastest call action during intent window | Unlocks reliability for all mobile emergency paths and validates top-funnel CTA assumptions | `cta_impression_sticky_primary` -> `cta_click_sticky_primary` -> `phone_click` | T1.15 |
| 2 | Call vs book path hierarchy not explicitly enforced when both actions are present | Competing actions can dilute emergency call-through rate | Unlocks deterministic CTA precedence and cleaner experiment baselines | `cta_click_sticky_primary`, `cta_click_header_primary`, `phone_click`, `contact_form_start` | T1.16 |
| 3 | Trust sequencing contract lacks implementation-phase acceptance evidence | Hesitation can delay first CTA action beyond 15s | Unlocks reusable trust module pattern across Home/Service templates | `trust_signal_view` correlated with `cta_click_*` and `phone_click` | T1.17 |
| 4 | Page-level CTA coverage timing not validated against 50% scroll checkpoint | Mid-intent users may miss secondary conversion opportunities | Unlocks consistent service-template conversion scaffolding | `service_page_scroll_depth_50`, `cta_click_page_secondary`, `contact_form_start` | T1.18 |
| 5 | Assisted book/form path lacks strict completion-path quality gate | Form starts may not convert to submits in urgent scenarios | Unlocks measurable callback pipeline optimization and fallback strategy | `contact_form_start` -> `contact_form_submit` | T1.19 |

### Sequenced Implementation Recommendations
1. Execute sticky-bar persistence verification and failure-state remediation first (T1.15).
2. Enforce emergency action precedence (call-first, book-second) across sticky/header/hero contexts (T1.16).
3. Implement trust-sequencing acceptance checkpoints tied to CTA adjacency constraints (T1.17).
4. Enforce service-page CTA checkpoint coverage before and after 50% scroll depth (T1.18).
5. Add assisted-path completion optimization gates for callback/form funnel continuity (T1.19).

### Event-Driven Success Targets (Advisory)
- Emergency call intent in <=15s increases when `cta_click_sticky_primary` to `phone_click` drop-off decreases.
- Combined contact initiation improves when (`phone_click` + `contact_form_start`) / sessions rises without lowering call throughput.
- Assisted path quality improves when `contact_form_submit` / `contact_form_start` increases on service pages.
- Trust sequencing efficacy improves when `trust_signal_view` appears before `cta_click_*` for delayed-intent sessions.

## Validation Status
- `npm run build`: Not run (docs-only advisory task: T1.1B)
- `npm test`: Not run (docs-only advisory task: T1.1B)

## Bootstrap Checklist
- [x] Includes mobile sticky bar rules.
- [x] Includes header CTA rules.
- [x] Includes page-level CTA rules.
- [x] Maps recommendations to measurable conversion events.
- [x] CTA gaps mapped to call/book/form events.
- [x] Priority ranking reflects highest downstream unlock value.
