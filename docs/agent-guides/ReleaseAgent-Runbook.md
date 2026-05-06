# ReleaseAgent Runbook (T0.9 Bootstrap)

## Purpose
This runbook defines the controlled operational sequence ReleaseAgent must follow for any future push, deployment, or release activity.

Bootstrap status: procedure documentation only. No release execution occurs in this phase.

## Operating Rule
- **Always:** Plan -> Approve -> Run.
- Never execute push/deploy/release actions without completed gates and explicit approval.
- Build/test execution remains pending during bootstrap:
  - `npm run build` -> Pending (do not run during bootstrap)
  - `npm test` -> Pending (do not run during bootstrap)

## Roles and Authority
- **ReleaseAgent (owner):** only actor authorized to run push/deploy/release commands.
- **Approver:** grants explicit go/no-go approval for the release scope/version.
- **Other agents:** may propose changes and provide evidence, but cannot execute release commands or modify release pipeline configuration.

## Release Lifecycle Procedure

### Phase 1 - Plan
ReleaseAgent prepares a release plan with:
1. Version/ref and scope.
2. Impact and risk summary.
3. Validation plan and required evidence.
4. Rollback plan with trigger conditions.
5. Post-release verification checklist.

Plan output: `Release Plan` artifact with timestamp and owner.

### Phase 2 - Approve
ReleaseAgent requests and records explicit approval:
1. Share exact scope/version and risk summary.
2. Obtain named approver decision (approve/reject).
3. Record approval timestamp and any constraints.

If scope changes after approval, return to Phase 1 and re-approve.

### Phase 3 - Run
ReleaseAgent executes only after all release gates pass:
1. Confirm release diff freeze.
2. Confirm build/test status and quality evidence.
3. Confirm rollback steps are executable.
4. Execute release sequence in controlled order.
5. Run post-release verification checklist.
6. Publish release outcome log (success/rollback).

## Mandatory Gate Checklist (Go/No-Go)
All items must be pass:
- [ ] Plan artifact complete.
- [ ] Approval artifact present and valid for current scope.
- [ ] Release scope frozen and traceable.
- [ ] Validation evidence present.
- [ ] Rollback plan complete and executable.
- [ ] Verification checklist prepared.
- [ ] Communication channel and escalation path ready.

Any unchecked item means `No-Go`.

## Rollback Run Procedure
If critical checks fail after release:
1. Declare incident and freeze further release activity.
2. Execute documented rollback steps to known-good version/ref.
3. Verify service health and core user flow recovery.
4. Record rollback time, trigger, and outcome.
5. Open corrective follow-up task before next release attempt.

Rollback trigger examples:
- Service outage or severe availability degradation.
- Core contact/conversion flow failure.
- Major error-rate spike or unrecoverable regression.

## Post-Release Verification Procedure
ReleaseAgent verifies and records:
1. Site availability and response sanity.
2. Core page load and navigation paths.
3. Contact/conversion path function.
4. Error monitoring/log checks.
5. Analytics event continuity checks.

Verification result template:
- Check name
- Status (`Pass`/`Fail`)
- Evidence link/log
- Owner
- Timestamp

## Communication Protocol
- **Pre-release:** publish plan and approval status.
- **In-flight:** publish start time and release milestone updates.
- **Post-release:** publish verification summary and final status.
- **Rollback:** publish incident notice, rollback start/completion, and service recovery confirmation.

## Audit and Recordkeeping
ReleaseAgent maintains an auditable record for each release:
- Plan artifact
- Approval artifact
- Validation evidence
- Run commands/steps log
- Verification checklist results
- Rollback evidence (if used)

## Bootstrap Exit Criteria for Runbook
Runbook bootstrap is complete when:
- Authority boundaries are explicit and enforce exclusive ownership.
- Go/no-go gates are explicit and reusable.
- Rollback and post-release verification procedures are explicit.
- No push/deploy/release action has been executed.
