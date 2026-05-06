# DesignAgent Review Checklist (Bootstrap)

Use this checklist to review implementation proposals and diffs against `docs/agent-guides/DesignAgent-Guide.md`.

## Safety and Scope Gate
- [ ] Proposal follows `Plan -> Approve -> Run`.
- [ ] Changes are limited to approved implementation scope.
- [ ] Bootstrap-only work avoids direct source/style/config edits unless explicitly approved for implementation phase.
- [ ] Validation commands are tracked correctly:
  - [ ] `npm run build` marked pending during bootstrap.
  - [ ] `npm test` marked pending during bootstrap.

## Responsive Behavior Gate (Mobile/Tablet/Desktop)
- [ ] Mobile-first behavior is defined before tablet/desktop enhancements.
- [ ] No horizontal overflow in primary content flows.
- [ ] Breakpoint behavior is explicitly documented for:
  - [ ] 320-639px (mobile)
  - [ ] 640-1023px (tablet)
  - [ ] 1024px+ (desktop)
- [ ] CTA visibility and scan flow remain usable across all three ranges.

## Layout and Spacing Gate
- [ ] Spacing follows a coherent scale (8px rhythm or approved equivalent).
- [ ] Section spacing increases progressively by breakpoint.
- [ ] Content line length is controlled for readability.
- [ ] Visual grouping reinforces hierarchy (heading -> support text -> action).
- [ ] Dense layouts do not exceed comfortable scan complexity on mobile.

## Typography and Hierarchy Gate
- [ ] Single H1 per page and sequential heading order.
- [ ] Body text remains legible at mobile baseline.
- [ ] Interactive text size is touch-friendly on mobile.
- [ ] Typographic contrast (size/weight/spacing) communicates hierarchy clearly.
- [ ] Emphasis does not rely on color alone.

## Contrast and Accessibility Gate
- [ ] Text and key UI controls satisfy WCAG AA contrast targets.
- [ ] Focus states are visible and consistent for keyboard users.
- [ ] Interactive targets are at least 44x44px on touch devices.
- [ ] Forms use persistent labels and clear inline validation.
- [ ] Error, success, and helper messaging are understandable and actionable.
- [ ] Reduced-motion preference is respected for non-essential animations.

## Conversion Hierarchy Gate
- [ ] One dominant primary CTA per major section.
- [ ] Secondary actions do not visually compete with the primary CTA.
- [ ] Page flow includes:
  - [ ] Intent/value statement
  - [ ] Trust/credibility support
  - [ ] Primary CTA
  - [ ] Reassurance or objection handling
  - [ ] Friction reducer (contact clarity, timeline, expectations)
- [ ] Contact or inquiry path is reachable within two scroll depths on mobile.

## Page-Specific Review Checks

### Home
- [ ] Hero communicates outcome and includes a primary CTA.
- [ ] Trust proof appears early in the flow.
- [ ] Services preview is scannable and benefit-led.
- [ ] Final CTA appears after supporting content for late-decision users.

### About
- [ ] Opening section clarifies identity, audience, and value.
- [ ] Credibility claims are concrete and verifiable.
- [ ] Story content remains concise and conversion-supportive.
- [ ] Contact CTA remains accessible without backtracking.

### Contact
- [ ] Form-first mobile layout minimizes friction.
- [ ] Required vs optional fields are unambiguous.
- [ ] Response-time and next-step expectations are stated.
- [ ] Confirmation state clearly communicates success.

### Service Template
- [ ] Section order is consistent across service pages.
- [ ] Scope/deliverables and process are explicit.
- [ ] Objection handling (FAQ/reassurance) is present.
- [ ] CTA placement and styling remain consistent template-to-template.

## Review Outcome
- [ ] **Pass:** Recommendation/diff is implementation-ready.
- [ ] **Needs revision:** Missing gates are documented with explicit remediation notes.
- [ ] **Blocked:** Dependency/approval constraint is captured with owner and escalation path.

## T1.1A - PRD and Design Charter Conformance Audit Input
Audit basis:
- PRD requirements in `docs/PRD.md` (mobile-first conversion speed, trust architecture, sticky emergency bar, lead capture).
- Design contract in `docs/agent-guides/DesignAgent-Guide.md`.
- Current UX implementation in:
  - `app/page.tsx`
  - `app/about/page.tsx`
  - `app/contact/page.tsx`
  - `app/services/[slug]/page.tsx`
  - `components/layout/SiteHeader.tsx`
  - `components/sections/LeadCaptureSection.tsx`

### Prioritized Gap List (for FrontEndAgent)

1) 🔴 **Blocking - Trust architecture is not structured as a dedicated early-page conversion layer**
- Gap: PRD requires explicit trust architecture for Family Owned, 24/7 Availability, and Licensing/Certification. Current implementation distributes trust statements across hero copy, header utility line, and lead-capture aside, but lacks an early, unified trust section on Home.
- Recommendation (implementation-ready): Add a dedicated trust architecture block directly below hero on Home with three standardized trust cards (Family-Owned, 24/7 Availability, Licensed/Certified), each with concise proof microcopy.
- Target files/symbols:
  - `app/page.tsx` (`Home`)
  - `components/sections/ServiceGridSection.tsx` (placement interaction with first content block)
- Acceptance criteria:
  - Trust block is visible before service grid on mobile/tablet/desktop.
  - All three trust pillars are explicitly represented as separate visual items.
  - Primary CTA remains visually dominant over trust card links/actions.

2) 🔴 **Blocking - Service template misses required conversion hierarchy sections**
- Gap: Service template lacks explicit deliverables/scope and proof/results sections required by charter conversion flow; current structure has problem/solution + response promise + FAQ but misses "what is included" and "why trust this outcome" sections.
- Recommendation (implementation-ready): Expand service template IA to include:
  - Deliverables/Scope section,
  - Proof/Results section (evidence, guarantees, or outcomes),
  - Process/Timeline section with scannable step progression.
- Target files/symbols:
  - `app/services/[slug]/page.tsx` (`ServiceTemplatePage`)
- Acceptance criteria:
  - Each service page renders value proposition, problem framing, deliverables/scope, proof/results, process/timeline, FAQ, and primary CTA in stable order.
  - Section ordering remains consistent across all service slugs.

3) 🟡 **Important - Mobile CTA hierarchy is diluted by competing actions**
- Gap: Home hero presents "Call Emergency Line" and "Explore Services" at near-equal prominence, while PRD mission prioritizes rapid conversion to contact/booking in under 15 seconds.
- Recommendation (implementation-ready): Keep one visually dominant primary CTA ("Call" or "Book") and demote exploratory navigation to tertiary text-link style on mobile; preserve stronger dual-action layout for larger breakpoints only if hierarchy remains clear.
- Target files/symbols:
  - `app/page.tsx` (`Home` hero CTA cluster)
  - `app/about/page.tsx` (CTA grouping)
  - `app/contact/page.tsx` (CTA grouping)
- Acceptance criteria:
  - On mobile, one CTA has unmistakably highest visual weight per key section.
  - Secondary/tertiary actions do not equal the primary CTA in fill, contrast, or size.

4) 🟡 **Important - Mobile navigation density risks tap accuracy and scan clarity**
- Gap: Header keeps full nav item row on small viewports; can compress interactive targets and compete with sticky emergency bar.
- Recommendation (implementation-ready): Introduce mobile navigation simplification (condensed menu pattern or reduced primary links) while preserving immediate call access.
- Target files/symbols:
  - `components/layout/SiteHeader.tsx` (`SiteHeader` nav container and item treatment)
  - `components/layout/MobileEmergencyBar.tsx` (interaction with persistent emergency actions)
- Acceptance criteria:
  - Mobile nav has comfortable tap spacing and clear reading order.
  - Header + emergency bar do not create perceived CTA conflict.
  - Critical call action remains discoverable without horizontal crowding.

5) 🟡 **Important - Contact flow does not fully express expectation-setting and form-first guidance**
- Gap: Contact page currently routes form intent back to Home instead of presenting direct request capture and explicit next-step expectations within the contact experience.
- Recommendation (implementation-ready): Provide form-first contact UX or equivalent concise intake module on Contact with response-time, required-field clarity, and success-state expectations.
- Target files/symbols:
  - `app/contact/page.tsx` (`ContactPage`)
  - `components/sections/LeadCaptureSection.tsx` (reuse strategy if shared intake is preferred)
- Acceptance criteria:
  - Contact page includes direct intake path (or clearly embedded shared form path) with response-time expectation.
  - Required vs optional input expectations are explicit.
  - Confirmation/next-step language is defined in UX copy spec.

6) 🟢 **Advisory - Accessibility clarity is under-specified in interactive states**
- Gap: Current patterns rely on defaults for focus visibility and form feedback; charter calls for explicit accessibility behavior.
- Recommendation (implementation-ready): Add explicit focus-visible treatment rules and form feedback semantics to component-level UX specs before implementation.
- Target files/symbols:
  - `components/layout/SiteHeader.tsx` (nav focus treatment requirements)
  - `components/sections/LeadCaptureSection.tsx` (form labels, error/help messaging model)
  - `app/services/[slug]/page.tsx` (`details/summary` focus and keyboard affordance review)
- Acceptance criteria:
  - Keyboard focus indicator is visible and consistent on all key interactive elements.
  - Form patterns document label persistence, error messaging behavior, and correction guidance.
  - Accessibility evidence checklist is attached to implementation PR review.

### Explicit Gap Confirmation Matrix

#### Responsive behavior gaps (mobile/tablet/desktop)
- Mobile: CTA competition in hero and dense header nav reduce conversion clarity.
- Tablet: Secondary actions remain visually close to primary CTA on key pages.
- Desktop: Service template hierarchy lacks full conversion section set, weakening scan-to-action confidence.

#### Accessibility gaps
- Focus/keyboard behavior is not explicitly defined as a reusable pattern.
- Form validation/error guidance contract is not yet codified for Contact-led flows.

#### Conversion hierarchy gaps
- Home trust architecture not consolidated into an early dedicated trust block.
- Service template missing deliverables/proof/process sections required by charter hierarchy.

## T1.1A-Addendum - DESIGN.md Conformance Delta Audit (2026-05-06)
Audit basis:
- Visual/token and UX requirements in `Branding Material/DESIGN.md`.
- Existing review baseline in `docs/agent-guides/DesignAgent-Guide.md`.
- Current implementation evidence in `app/`, `components/`, `app/globals.css`, and `tailwind.config.ts`.

### Prioritized Delta Gaps (DESIGN.md vs current implementation)

1) 🔴 **Blocking - Brand token system is not aligned to DESIGN.md palette contract**
- Gap: `DESIGN.md` requires dark-mode + copper/metallic accents (`#8c5526`, `#b87333`, `#0A0A0A`, `#1A1A1A`) while current tokens use navy/cyan/gold (`brand-navy`, `brand-cyan`, `brand-gold`).
- Recommendation (implementation-ready): Introduce a token migration layer and update shared UI primitives to use the DESIGN.md palette without route-by-route hardcoding.
- Target files/symbols:
  - `tailwind.config.ts` (`theme.extend.colors`)
  - `app/globals.css` (`:root` token variables)
  - `components/sections/SectionShell.tsx` (shared section chroming baseline)
- Acceptance criteria:
  - Canonical color tokens include required copper + secondary copper + deep/surface dark values from DESIGN.md.
  - Shared shell/section components consume canonical tokens instead of ad-hoc route overrides.
  - Primary action color treatment is consistent across Home/About/Contact/Services flows.

2) 🔴 **Blocking - Typography system diverges from DESIGN.md font contract**
- Gap: DESIGN.md specifies `Work Sans` headings and `Inter` body; current implementation uses `Barlow Condensed` + `Nunito Sans`.
- Recommendation (implementation-ready): Replace font family contract at token level, then normalize heading/body usage across layout + section components.
- Target files/symbols:
  - `app/globals.css` (font imports and `body` font declaration)
  - `tailwind.config.ts` (`fontFamily.heading`, `fontFamily.body`)
  - `app/page.tsx`, `components/sections/SectionShell.tsx` (ensure semantic usage alignment)
- Acceptance criteria:
  - Heading roles resolve to Work Sans.
  - Body/support text resolves to Inter.
  - No mixed legacy font classes remain in canonical layout/section components.

3) 🟡 **Important - Spacing and container scale are below DESIGN.md baseline**
- Gap: DESIGN.md declares `section-padding: 80px` and `container-max: 1200px`; current sections are mostly `py-12/md:py-16` and `max-w-6xl` (1152px).
- Recommendation (implementation-ready): Establish shared spacing/container tokens and apply via `SectionShell` + hero wrappers.
- Target files/symbols:
  - `components/sections/SectionShell.tsx`
  - `app/page.tsx`
  - `app/about/page.tsx`
  - `app/contact/page.tsx`
- Acceptance criteria:
  - Desktop section vertical rhythm matches 80px baseline.
  - Container max width is standardized to 1200px equivalent.
  - Mobile/tablet spacing remains legible while scaling to desktop contract.

4) 🟡 **Important - Component styling approach conflicts with modular CSS-first direction**
- Gap: DESIGN.md explicitly prefers modular component-first styling and CSS modules, while implementation is heavily utility-first class composition.
- Recommendation (implementation-ready): Define phased migration for canonical shared components to CSS modules (starting with layout shell + section primitives) while preserving behavior.
- Target files/symbols:
  - `components/layout/SiteHeader.tsx`
  - `components/layout/SiteFooter.tsx`
  - `components/sections/SectionShell.tsx`
  - `app/page.tsx`
- Acceptance criteria:
  - Migration plan identifies phase-1 component set and non-breaking rollout order.
  - Shared visual rules are centralized (module classes/tokens), not repeated utility strings per route.
  - No behavior regressions in nav, sticky CTA, or hero conversion actions.

5) 🟡 **Important - DESIGN.md trust architecture includes testimonials/logos that are absent in canonical Home flow**
- Gap: DESIGN.md calls for trust indicators including social proof (logos/testimonials); current Home flow has trust language but no dedicated testimonial/logo section in active route composition.
- Recommendation (implementation-ready): Add a reusable trust proof section (testimonial + licensing/family/availability proof) immediately after hero/trust checkpoint.
- Target files/symbols:
  - `app/page.tsx`
  - `components/sections/` (new reusable trust proof section)
- Acceptance criteria:
  - Home includes explicit social proof block visible before deep-scroll sections.
  - Trust module supports testimonial/logos and core trust claims in one consistent component.
  - CTA adjacency remains clear and conversion-first.

6) 🟢 **Advisory - Button styling should standardize on copper-primary treatment**
- Gap: DESIGN.md calls for copper button styling; current CTA styling relies on cyan as primary action.
- Recommendation (implementation-ready): Create canonical button style contract (primary copper, secondary outlined/tonal) and map all route-level CTAs.
- Target files/symbols:
  - `app/page.tsx`
  - `app/about/page.tsx`
  - `app/contact/page.tsx`
  - `app/services/page.tsx`
  - `app/services/[slug]/page.tsx`
- Acceptance criteria:
  - Primary CTA uses copper token consistently.
  - Secondary CTA style does not compete with primary hierarchy.
  - Contrast remains WCAG AA compliant in dark mode.

### Explicit DESIGN.md Delta Confirmation
- **Responsive behavior:** Mostly present, but spacing/container scale does not yet match DESIGN.md desktop baseline.
- **Accessibility:** Focus/reduced-motion foundations exist, but token/font migration must preserve contrast and readability.
- **Conversion hierarchy:** Core CTA flow exists, but social-proof trust composition from DESIGN.md is incomplete without testimonial/logo integration.
