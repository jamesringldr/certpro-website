# MapMediaAgent Performance Checklist

## Purpose
This checklist defines implementation-phase acceptance checks for map integration and media optimization. It is a governance artifact for quality/performance validation and does not authorize implementation by itself.

## Bootstrap Validation Status (Pending by Policy)
- `npm run build` -> Pending (not run during bootstrap)
- `npm test` -> Pending (not run during bootstrap)

## Pre-Implementation Gate (Required)
- [ ] Plan documented for map/media task scope.
- [ ] Explicit approval artifact captured before execution.
- [ ] File-change scope limited to map/media ownership surfaces only.
- [ ] Non-map/non-media feature logic excluded from task scope.

## Map Behavior Acceptance Checks
- [ ] Map component/config uses strict TypeScript contracts (no `any`).
- [ ] Map initialization does not block critical content or primary CTA visibility.
- [ ] Map rendering failure mode preserves baseline page usability (graceful fallback).
- [ ] Mobile touch gestures are predictable and do not trap vertical page scroll.
- [ ] Mobile map control tap targets meet touch accessibility expectations.
- [ ] Default map viewport/location behavior is explicit and deterministic.

## Media Optimization Acceptance Checks
- [ ] Content images support `WebP` delivery (with fallback strategy where required).
- [ ] Non-critical images/media are lazy-loaded by default.
- [ ] Responsive image sizing contract is defined for multi-breakpoint assets.
- [ ] Above-the-fold media is bounded/compressed and aligned to display dimensions.
- [ ] Async media loading does not create avoidable layout shift.
- [ ] Decorative/non-essential media is excluded from critical rendering path when possible.

## Performance Thresholds for Media-Heavy Sections
- [ ] Largest Contentful Paint (LCP): <= 2.5s at p75 (mobile baseline).
- [ ] Cumulative Layout Shift (CLS): <= 0.10 at p75.
- [ ] Interaction to Next Paint (INP): <= 200ms at p75.
- [ ] Initial page payload avoids unnecessary media bytes in first viewport path.
- [ ] Map script/resource loading is deferred or staged so first content remains interactive.

## Accessibility and UX Guardrails
- [ ] Informative images provide meaningful alt text; decorative assets use appropriate null alt handling.
- [ ] Map fallback/adjacent content conveys location/service context when map is unavailable.
- [ ] Keyboard/focus behavior remains usable for map-adjacent interactive controls.
- [ ] Mobile users can reach contact intent actions without map interaction dependency.

## Completion Evidence
- [ ] Checklist results attached to task with pass/fail notes.
- [ ] Exceptions documented with rationale, owner, and approval reference.
- [ ] Build/test command status updated (or kept pending when bootstrap policy applies).
