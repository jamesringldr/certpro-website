# MapMediaAgent Bootstrap Charter (T0.8)

## Purpose
This charter defines bootstrap guardrails for map integration and media optimization on the CerPro website project. It establishes boundaries, quality standards, and performance contracts only; no map or media implementation is performed from this document.

## Core Safety Policy
- **Policy:** Plan -> Approve -> Run.
- Every map/media task must include a concise implementation plan and explicit approval artifact before execution begins.
- MapMediaAgent may edit map/media code only after explicit task kickoff in approved map/media paths.
- During bootstrap, validation commands are tracked as pending:
  - `npm run build` -> Pending (do not run during bootstrap)
  - `npm test` -> Pending (do not run during bootstrap)

## Scope and Allowed File Surfaces
MapMediaAgent scope is limited to map and media ownership areas:
- Map-related UI and wrappers under `app/` and `components/` when the module directly renders or configures map behavior.
- Media presentation assets and optimized derivatives under `public/` when tied to approved map/media tasks.
- Typed map/media configuration data under `data/` where rendering contracts require structured updates.
- Map/media-specific documentation under `docs/agent-guides/` and related tracker governance documents.

Out-of-scope during bootstrap and implementation kickoff:
- Analytics events, tracking taxonomy, or analytics ownership workflows.
- Release/deploy/CI logic, release authority, or operational runbook ownership.
- Unrelated page feature logic that is not map rendering, map interaction, media loading, or media optimization.

## Map Integration Boundaries
Map integration work must remain contract-driven and isolated:
- Use strict TypeScript typing for map props, config objects, and interaction contracts; do not use `any`.
- Keep map provider specifics encapsulated behind a typed adapter/component boundary to minimize cross-feature coupling.
- Keep location and viewport defaults explicit and environment-safe; no hidden implicit behavior.
- Treat map rendering and map controls as progressively enhanced UI, preserving baseline usability if map resources fail.
- No geolocation permission prompts by default unless explicitly approved for a scoped task.

Mobile map behavior requirements:
- Default to touch-first controls with predictable pan/zoom gestures.
- Prevent map gesture traps that block page scroll in mobile layouts.
- Ensure tap targets for map controls are sized for touch accessibility.
- Keep primary contact/conversion actions discoverable when maps are visible in mobile sections.

## Media Optimization Pipeline Rules
Media handling is governed by an optimization-first pipeline:
- Source media must define intended display context, dimensions, and fallback behavior.
- Serve modern image formats (`WebP` required; optional secondary modern formats may be added with approval) with compatible fallbacks where needed.
- Implement lazy-loading for non-critical below-the-fold media by default.
- Reserve responsive image sizing (`srcset`/`sizes` or equivalent) as a required contract for content images rendered at multiple breakpoints.
- Avoid unbounded media payloads; large hero/gallery assets require explicit compression and dimension constraints before merge.
- Decorative media should not block meaningful content paint and should be excluded from critical rendering paths when possible.

## Performance and Quality Acceptance Standards
Map/media-heavy sections are accepted only when these standards are met:
- Perceived load remains responsive on mobile-class devices and networks for first meaningful content.
- Map initialization must not block core page content or primary conversion actions.
- Media loading strategy must reduce unused bytes and defer non-critical assets.
- Layout stability must be preserved when media or maps load asynchronously.
- Accessibility and semantic alternatives are provided for non-text media where applicable.

## Definition of Done (MapMediaAgent Tasks)
A MapMediaAgent task is done only when:
- Plan and approval evidence are present.
- Changes are limited to approved map/media ownership surfaces.
- Map and media contracts use strict TypeScript typing.
- WebP and lazy-load requirements are explicitly implemented or documented as scoped exceptions with approval.
- Mobile map behavior requirements are documented and verified against acceptance checks.
- Validation command status is updated (or explicitly pending under bootstrap policy).

## Bootstrap Completion Conditions
This bootstrap charter is complete when:
- Map/media boundaries and disallowed ownership areas are explicit and enforceable.
- Optimization pipeline rules and performance standards are explicit and testable.
- Mobile map behavior requirements are explicitly documented.
- No map/media implementation code changes are started by this bootstrap task.
