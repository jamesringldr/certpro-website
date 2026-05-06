# ReleaseAgent Authority Policy (T0.9)

## Purpose
This policy establishes a strict release-governance contract for the CerPro website project. It defines exclusive authority, mandatory release gates, and safety controls for all push, deployment, and release operations.

Bootstrap note: this document defines policy only. No release actions are performed from this artifact.

## Core Safety Policy
- **Policy:** Plan -> Approve -> Run.
- Every release operation must have a documented plan and explicit approval evidence before execution.
- During bootstrap, validation commands remain pending:
  - `npm run build` -> Pending (do not run during bootstrap)
  - `npm test` -> Pending (do not run during bootstrap)

## Exclusive Authority Model
`ReleaseAgent` is the sole authority for:
- `git push` to any shared remote branch.
- Deployment command execution across all environments.
- Release-tag creation, release publication, and release note publication.
- Release pipeline trigger approval and execution.

All other agents are explicitly prohibited from:
- Running push/deploy/release commands.
- Modifying release pipeline configuration files, environment promotion rules, or release automation credentials.
- Bypassing the release gate checklist or approval workflow.

If a non-ReleaseAgent identifies a required release-related change, it must:
1. Open a handoff request with rationale and proposed diff.
2. Wait for ReleaseAgent review and approval decision.
3. Avoid any direct release operation execution.

## Approval Requirements and Evidence
Before any release operation can proceed, ReleaseAgent must collect and validate:
1. **Release plan artifact**
   - Scope (what is included/excluded)
   - Target environment
   - Risk assessment and mitigation
   - Rollback trigger conditions
2. **Approval artifact**
   - Named approver(s) and timestamp
   - Approval statement for the exact scope/version
3. **Validation evidence**
   - Build/test status and checksums as applicable
   - Manual QA notes for release-critical flows
4. **Operational readiness**
   - Rollback command(s) confirmed
   - Monitoring/alert visibility confirmed

No partial approval is valid for execution. Scope changes require re-approval.

## Release Gate Checklist (Mandatory)
ReleaseAgent must validate all gates as pass before execution:
- Gate 1: Plan is complete and risk-reviewed.
- Gate 2: Explicit approval artifact exists for current scope.
- Gate 3: Release diff is frozen and traceable.
- Gate 4: Build/test validation status is recorded.
- Gate 5: Rollback procedure is documented and executable.
- Gate 6: Post-release verification checklist is prepared.

If any gate fails, release status is `Blocked` and execution does not start.

## Permission and Enforcement Expectations
Repository/process controls should enforce this policy:
- Protected release branches with restricted push permissions.
- Deployment secrets and pipeline tokens scoped to ReleaseAgent-owned context.
- Release workflow permissions limited to ReleaseAgent execution path.
- Auditable logs for approvals, execution, rollback, and verification.

## Rollback Policy (Required)
Every release must define a rollback plan before execution:
- Rollback target version/ref.
- Rollback command sequence.
- Data migration rollback compatibility note (if applicable).
- Max time-to-rollback objective.
- Owner and communication path for incident escalation.

Rollback must be triggered immediately when a critical verification check fails or production-impacting regression is detected.

## Post-Release Verification Policy
ReleaseAgent must run a defined post-release verification checklist:
- Application availability and key route health.
- Core conversion/contact flow sanity checks.
- Error-rate/log anomaly review.
- Performance budget spot-check (critical pages).
- Analytics/conversion event continuity check.

Verification outcomes must be documented as pass/fail with evidence.

## Non-Compliance Handling
Any attempted non-ReleaseAgent push/deploy/release action is a policy violation:
- Stop the operation immediately.
- Log the attempted action and actor.
- Escalate to ProductOpsAgent and approver.
- Reconfirm permissions before next release window.

## Bootstrap Completion Conditions
This bootstrap policy is complete when:
- Exclusive release ownership by ReleaseAgent is explicit.
- Approval gates and evidence requirements are explicit.
- Rollback and post-release verification requirements are explicit.
- No deployment/release actions are initiated.
