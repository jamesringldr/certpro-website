# DesignAgent Bootstrap Charter (T0.2)

## Purpose
This guide defines the bootstrap visual system and UX rules for implementation agents. It is advisory-only and intentionally contains no source code, stylesheet, or configuration changes.

## Safety and Execution Policy
- Follow `Plan -> Approve -> Run` for every implementation task that references this guide.
- Treat this document as implementation input, not an implementation artifact.
- During bootstrap, keep validation commands pending:
  - `npm run build` -> Pending (do not run during bootstrap)
  - `npm test` -> Pending (do not run during bootstrap)

## Design Principles (Mobile-First)
1. Start every component and layout decision at phone width before scaling up.
2. Optimize for one primary action per viewport section.
3. Keep hierarchy obvious with spacing and type scale before color effects.
4. Default to accessible contrast and large touch targets.
5. Reduce cognitive load by limiting simultaneous choices.

## Breakpoint and Responsive Behavior Contract
Use these breakpoints as the baseline contract unless a task is explicitly approved to change them.

| Range | Device Intent | Layout Rule |
| :--- | :--- | :--- |
| 320-639px | Mobile | Single-column flow, stacked content, full-width CTAs |
| 640-1023px | Tablet | Single-column plus sectional grouping; optional 2-up cards for low-density content |
| 1024px+ | Desktop | Multi-column layouts allowed where readability and scan speed improve |

Responsive expectations:
- No horizontal scrolling for primary content regions.
- Typography and spacing scale progressively across breakpoints.
- Key conversion actions remain visible above the fold where practical.

## Spacing and Layout System
Use an 8px base spacing rhythm:
- Intra-component spacing: 8/12/16px
- Component padding: 16px (mobile), 24px (tablet), 32px (desktop)
- Section spacing: 32px (mobile), 48px (tablet), 64px (desktop)

Layout rules:
- Keep max readable text width at ~60-75 characters per line.
- Keep card/list alignment consistent within each section.
- Use vertical grouping to communicate semantic hierarchy (heading -> support text -> action).
- Avoid more than two competing visual emphasis treatments in one viewport.

## Typography Rules
Recommended role scale (implementation can map these to project tokens/classes):
- Hero heading: 32/40 (mobile), 40/48 (tablet), 48/56 (desktop)
- Section heading: 24/32, 28/36, 32/40
- Body: 16/24 minimum
- Small/supporting text: 14/20 minimum
- Buttons/interactive labels: minimum 16px on mobile

Hierarchy standards:
- One H1 per page.
- Descend heading levels sequentially (H1 -> H2 -> H3).
- Use weight and spacing before color to denote hierarchy.

## Contrast, Color, and Emphasis
Accessibility baseline:
- Body text and interactive text meet WCAG AA contrast.
- Non-text UI indicators (borders, icons, focus cues) remain perceivable in low-contrast environments.

Emphasis rules:
- Use one primary accent color for conversion actions.
- Secondary actions should not visually compete with primary CTA.
- Danger/destructive patterns are excluded from top-level marketing surfaces unless explicitly required.

## Interaction and Accessibility Contract
Global interaction rules:
- Minimum target size: 44x44px for touch controls.
- Visible focus indicators for keyboard navigation.
- Logical tab order follows visual reading flow.
- Avoid hover-only disclosure for essential actions/content.

Content and semantics:
- Every page has a clear landmark structure (`header`, `main`, `footer` equivalent in implementation).
- Form fields require persistent labels (placeholder is not a label).
- Error states provide clear corrective guidance.

Motion and feedback:
- Keep animations subtle and purpose-driven.
- Respect reduced motion preferences for non-essential transitions.

## Conversion Hierarchy Framework
Each top-level page should follow this hierarchy:
1. Intent statement (what service/value is offered)
2. Trust support (credibility proof, outcomes, differentiators)
3. Primary CTA (single dominant action)
4. Secondary reassurance (FAQ snippet, guarantees, process clarity)
5. Friction reducer (contact path, timeline, expectation setting)

Checklist-level conversion constraints:
- Exactly one dominant primary CTA per major viewport section.
- Secondary links must not visually outrank primary CTA.
- Contact pathways should be available within two scroll depths on mobile.

## Page-Level Annotated UX Recommendations

### Home Page
Primary goal: convert first-time visitors to inquiry/contact action quickly.

Annotated guidance:
- Hero: lead with outcome-first headline + concise supporting value statement + primary CTA.
- Trust block immediately after hero: proof points, logos, ratings, or succinct credibility markers.
- Services preview: 3-6 scannable cards with clear benefit-first language.
- Process/How-it-works strip: 3-step concise model to reduce uncertainty.
- Final CTA band near footer for users who scroll for validation.

Mobile-specific:
- Keep hero copy compact; avoid large decorative assets that push CTA below first screen.
- Stack trust and services blocks with strong section headings for scanability.

### About Page
Primary goal: increase trust and reduce perceived risk before conversion.

Annotated guidance:
- Opening section: who you are + who you help + why this approach works.
- Credibility section: certifications/experience/outcomes (prioritize verifiable claims).
- Values/process section: show service philosophy in user-benefit terms.
- Humanization element: brief team/founder profile with contextual photo treatment guidance.
- CTA should remain actionable without forcing user to return to Home.

Mobile-specific:
- Prioritize narrative clarity over dense biography.
- Keep supporting stats/proof as compact tiles rather than long prose.

### Contact Page
Primary goal: minimize friction to initiate contact.

Annotated guidance:
- Form-first layout on mobile with concise expectation-setting copy above fields.
- Required fields only; optional fields should be clearly marked optional.
- Clearly state response-time expectation and next-step process.
- Include alternative contact method (email/phone) as secondary path.
- Confirmation state must reassure success and next steps.

Form UX constraints:
- Group related fields logically.
- Validation messages should be specific, inline, and non-ambiguous.
- Submit action label should reflect outcome (for example, "Request Consultation" vs generic "Submit").

### Service Template UX (Reusable for all service pages)
Primary goal: convert high-intent visitors from service detail to inquiry.

Recommended section pattern:
1. Service-specific value proposition (headline + context)
2. Problems solved (user pain points reframed as outcomes)
3. Service deliverables/scope
4. Proof/results or representative examples
5. Process/timeline
6. FAQ (objections handling)
7. Primary CTA with contextual reassurance

Template consistency rules:
- Keep section order stable across all service pages for predictable scanning.
- Keep one primary CTA style and placement pattern across templates.
- Use consistent iconography and card density to avoid perceived quality drift.

## Implementation-Ready Spec Notes (Diff-Oriented)
Use these notes when creating implementation diffs:
- **Layout diff scope:** Define container widths, grid/stack behavior per breakpoint, and section spacing values explicitly.
- **Typography diff scope:** Map role-based sizes/line-heights to project tokens/utilities, preserving heading hierarchy.
- **CTA diff scope:** Enforce one primary CTA style, clear secondary style, and consistent placement rules.
- **Accessibility diff scope:** Include focus styles, semantic structure, label strategy, and contrast evidence checks.
- **Content diff scope:** Keep copy blocks concise and benefit-first; avoid unbounded paragraph growth.

## Definition of Done for Design Guidance Tasks
A design guidance task using this charter is done when:
- Mobile/tablet/desktop behavior is explicitly documented.
- Accessibility checks (contrast, focus, semantics, forms) are included.
- Conversion hierarchy is clear and testable at page level.
- Recommendations are implementation-ready and scoped as diffs/spec notes.
- No direct source code/style/config modifications occur in bootstrap.
