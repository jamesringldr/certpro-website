# FrontEndAgent File Ownership and Boundaries (T0.6)

## Purpose
This document defines editable and non-editable path boundaries for FrontEndAgent work, including areas that require ProductOps approval before any change is proposed for execution.
It also serves as the canonical React structure and shared component convention contract for T1.2.

## Safety and Approval Contract
- **Policy:** Plan -> Approve -> Run.
- FrontEndAgent must not begin code changes until explicit task kickoff and approval artifact exist.
- If a requested change crosses ownership boundaries, FrontEndAgent must pause and request ProductOpsAgent decision.

## Editable Paths (FrontEndAgent)
FrontEndAgent may edit these paths only for approved UI tasks:

| Path | Ownership Intent | Notes |
| :--- | :--- | :--- |
| `app/` | Route-level UI layout and page presentation | Must stay within approved task scope |
| `components/` | Reusable UI components and composition | Strict TypeScript props and accessible semantics required |
| `public/` | UI static assets used by approved UI changes | No production infrastructure files |
| `data/` | UI-facing content structures used by rendering | Keep typing and data shape stability |
| `docs/agent-guides/` | Governance documentation for agent operations | Bootstrap and policy updates only |

## Canonical React Folder Structure (T1.2)
Use this as the implementation architecture baseline:

| Path | Canonical Role | Ownership Notes |
| :--- | :--- | :--- |
| `app/layout.tsx` | Global shell composition (`SiteHeader`, `SiteFooter`, `MobileEmergencyBar`) | Keep route-independent and minimal |
| `app/page.tsx` | Home route composition | Route-level assembly only; prefer section reuse |
| `app/about/page.tsx` | About route composition | Keep trust + CTA hierarchy aligned to design charter |
| `app/contact/page.tsx` | Contact route composition | Keep intake/next-step clarity and conversion path |
| `app/services/page.tsx` | Service index route | Grid/list composition from canonical data source |
| `app/services/[slug]/page.tsx` | Service template route | Template sections and slug-level rendering contract |
| `components/layout/` | Global shell components | Header/footer/emergency bar and global nav behavior |
| `components/sections/` | Reusable page sections | Route-composable sections with explicit typed props |
| `data/` | Typed view-model/content data for UI | Keep shape stability for routes and templates |

### Canonical vs legacy component boundary
- Canonical implementation components are under `components/layout/` and `components/sections/`.
- Root-level `components/*.tsx` files are treated as legacy/non-canonical unless a task explicitly migrates or reactivates them with ProductOps approval.
- New shared UI work should be added under canonical folders, not root-level legacy paths.

## Canonical Route Map (Current State)
The route contract for core pages is:

| Route | Entry File | Purpose | Primary Component Contract |
| :--- | :--- | :--- | :--- |
| `/` | `app/page.tsx` | Home conversion entry | Hero + service/trust/area/lead sections |
| `/about` | `app/about/page.tsx` | Trust and credibility narrative | About value + proof + CTA stack |
| `/contact` | `app/contact/page.tsx` | Contact/conversion handoff | Contact intent path + call/book options |
| `/services` | `app/services/page.tsx` | Service discovery index | Service card list + route-to-slug actions |
| `/services/[slug]` | `app/services/[slug]/page.tsx` | Service template detail | Reusable template sections bound to slug data |

## Shared Component Conventions (T1.2)
All shared components should follow these conventions:

### Naming and file conventions
- Use `PascalCase` component names and file names.
- Use suffix `Section` for route-composable content blocks in `components/sections/`.
- Use `Site*` or domain-clear naming for layout shell components in `components/layout/`.
- Keep one exported component per file unless a typed helper is truly local/private.

### Composition conventions
- Route files in `app/` compose sections/layout components and should avoid deep UI logic.
- `components/layout/` owns global shell concerns (navigation, footer, sticky emergency behavior).
- `components/sections/` owns reusable section presentation and local section composition.
- `data/` remains the canonical content source for repeated route rendering (for example service templates).

### Prop typing standards (strict TypeScript)
- Define explicit `type`/`interface` props for every component with external inputs.
- Avoid `any`; prefer narrow unions/literals where useful for variant safety.
- Mark optional props with `?` and provide clear default behavior in component logic.
- Keep prop models UI-facing; avoid leaking integration payload types into presentational components.

### Section/component split rules
- Create a `section` component when a block is reusable across routes or expected to evolve independently.
- Keep route pages focused on layout order and cross-section hierarchy, not duplicated section internals.
- Use small local subcomponents only when they improve readability and maintain type clarity.

### Ownership guardrail for refactor planning
- T1.2 authorizes architecture-definition and light refactor planning only.
- Any migration from root-level legacy components into canonical folders must be planned and approved before execution.

## Conditional/Blocked Paths (Require ProductOps Approval)
Changes in these areas are blocked by default and require ProductOps approval before planning can proceed:

| Path | Why Blocked | Required Approval |
| :--- | :--- | :--- |
| `lib/` (if introduced/used for shared runtime logic) | Can alter cross-cutting contracts beyond UI scope | ProductOpsAgent + owning domain agent |
| `scripts/` (if introduced) | May impact workflow/tooling outside UI ownership | ProductOpsAgent |
| `package.json` / `package-lock.json` | Dependency changes can affect whole repo behavior | ProductOpsAgent + relevant owner |
| `next.config.mjs`, `postcss.config.mjs`, `tailwind.config.ts`, `tsconfig.json` | Framework/build/type pipeline impact | ProductOpsAgent |
| `README.md` or project governance outside `docs/agent-guides/` and tracker docs | Cross-team documentation contract changes | ProductOpsAgent |

## Explicitly Disallowed Paths
FrontEndAgent must not edit these areas unless an explicit exception is approved by ProductOps and the owning agent:
- Deployment or release pipelines/workflows (for example: `.github/workflows/`, release automation files).
- Infrastructure and environment configuration.
- Direct production settings or credentials.

## Ownership Escalation Workflow
When a task touches blocked/disallowed areas:
1. Mark task state as `Blocked` (reason: ownership boundary).
2. Record requested path(s), rationale, and proposed minimal change set.
3. Request ProductOpsAgent approval and reassignment/exception decision.
4. Resume only after approval artifact is attached.

## Boundary Verification Checklist
Before opening implementation diffs, FrontEndAgent confirms:
- All edited files are in approved editable paths.
- No deployment/release/infra/production-setting paths are included.
- Any exception has ProductOps approval evidence.
- Scope remains UI-focused and task-specific.

## Bootstrap Completion Conditions
This ownership bootstrap is complete when:
- Editable vs non-editable path boundaries are explicit.
- ProductOps-gated blocked areas are explicit.
- Disallowed path classes are explicit.
- No implementation code changes are executed during bootstrap.
