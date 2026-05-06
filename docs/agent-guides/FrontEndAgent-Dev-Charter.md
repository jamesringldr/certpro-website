# FrontEndAgent Bootstrap Charter (T0.6)

## Purpose
This charter defines bootstrap implementation guardrails for UI development on the CerPro website project. It establishes conventions and boundaries only; no UI code implementation is performed from this document.

## Core Safety Policy
- **Policy:** Plan -> Approve -> Run.
- Every UI task must include a brief implementation plan and explicit approval artifact before development starts.
- FrontEndAgent may edit code only after explicit task kickoff in approved UI paths.
- During bootstrap, validation commands are tracked as pending:
  - `npm run build` -> Pending (do not run during bootstrap)
  - `npm test` -> Pending (do not run during bootstrap)

## Implementation Scope (UI Only)
FrontEndAgent scope is limited to:
- Page and layout UI under `app/`.
- Reusable UI components under `components/`.
- Presentation/static assets under `public/` when tied to approved UI tasks.
- UI-facing typed content data under `data/` where rendering contracts require updates.

Out-of-scope during bootstrap:
- Any direct implementation in application/runtime logic not explicitly approved for UI task scope.
- Any deploy/release/infra/config ownership areas listed in file ownership policy.

## Reusable Component Conventions
All new or updated UI components must follow these rules:
- Use strict TypeScript typing for props; avoid `any`.
- Prefer composable, single-purpose components with explicit prop contracts.
- Keep component APIs stable and predictable (clear required vs optional props).
- Avoid hidden side effects in presentational components.
- Prefer semantic HTML structure to support accessibility and testability.
- Keep style/application logic separated enough for reviewable diffs.

Definition of reusable component readiness:
- Typed props are explicit and minimal.
- Accessibility responsibilities are defined (labels, roles, focus behavior where relevant).
- Variant/state behavior is deterministic and documented in code comments only when non-obvious.
- Component can be reused without page-specific assumptions.

## Responsive Standards
UI work must satisfy responsive behavior across baseline breakpoints:
- **Mobile (320-639px):** single-column priority, full-width primary actions, no horizontal overflow.
- **Tablet (640-1023px):** balanced spacing and optional low-density two-column groupings.
- **Desktop (1024px+):** multi-column layouts permitted where readability/scannability improve.

Responsive QA acceptance checks:
- No horizontal scrolling on primary content surfaces.
- Text remains readable and hierarchy remains clear at all breakpoints.
- Interactive controls meet touch/focus accessibility requirements.
- Primary conversion action remains discoverable without excessive scrolling.
- Navigation, forms, and CTA sections preserve functional parity across breakpoints.

## UI QA and Definition of Done
A FrontEndAgent UI task is done only when:
- Plan and approval evidence are present.
- Changes are limited to approved, editable UI paths.
- Component typing and reuse conventions are followed.
- Responsive and accessibility QA checks are documented as pass.
- Validation command status is updated (or explicitly pending when bootstrap policy applies).

## Bootstrap Completion Conditions
This bootstrap charter is complete when:
- UI implementation guardrails are explicit and enforceable.
- Reusable component conventions are explicit and testable.
- Responsive QA standards are explicit and testable.
- No implementation code changes are started by this bootstrap task.
