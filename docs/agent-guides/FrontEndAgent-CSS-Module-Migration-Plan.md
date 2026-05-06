# FrontEndAgent CSS Module Migration Plan (T1.43)

## Purpose
Define phased migration from utility-first visual composition to modular component-first styling in alignment with `Branding Material/DESIGN.md`, while preserving current UX behavior and conversion flows.

## Migration Principles
- Keep behavior stable while moving repeated visual rules into CSS modules.
- Migrate shared primitives first, then route sections, then leaf components.
- Keep design tokens canonical in `app/globals.css` and `tailwind.config.ts`.
- Avoid broad rewrites; ship in small non-breaking phases.

## Phase 1 (Completed in this update)
### Scope
- `components/layout/SiteHeader.tsx`
- `components/layout/SiteFooter.tsx`
- `components/sections/SectionShell.tsx`

### Delivered
- Added `SiteHeader.module.css` and `SiteFooter.module.css` for shared layout chroming.
- Added `SectionShell.module.css` for container/spacing/typography baseline.
- Preserved functional behavior (navigation, sticky header, footer links, CTA accessibility).

## Phase 2 (Planned)
### Scope
- Home hero and trust sections (`app/page.tsx`, `components/sections/SocialProofTrustSection.tsx`)
- CTA button patterns used across route pages.

### Goal
- Extract reusable CTA style classes (primary copper, secondary outline) into module-backed primitives.
- Reduce repeated utility strings for cards, badges, and content wrappers.

## Phase 3 (Planned)
### Scope
- Service and contact-related sections:
  - `components/sections/ServiceGridSection.tsx`
  - `components/sections/ServiceAreaSection.tsx`
  - `components/sections/LeadCaptureSection.tsx`
  - `app/services/page.tsx`
  - `app/services/[slug]/page.tsx`

### Goal
- Introduce section-level modules for cards/forms/details states.
- Standardize surface, border, and focus treatments from token system.

## Rollout Guardrails
- Validate each phase with `npm run build`.
- Run `npm test` when script becomes available; until then record blocker and run typecheck smoke validation.
- Maintain sticky emergency bar visibility and CTA-safe spacing behavior on mobile throughout migration.
