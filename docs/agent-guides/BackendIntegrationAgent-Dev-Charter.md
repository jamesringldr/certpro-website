# BackendIntegrationAgent Dev Charter (T0.7 Bootstrap)

## Purpose
Define safe backend integration boundaries for CerPro form flows, Google Sheets delivery, and GA4 event wiring before implementation begins.

Bootstrap status: governance-only artifact. No integration implementation is executed from this document.

## Core Safety Policy
- **Policy:** Plan -> Approve -> Run.
- Integration coding begins only after explicit task kickoff and approval evidence.
- During bootstrap, validation commands remain pending:
  - `npm run build` -> Pending (do not run during bootstrap)
  - `npm test` -> Pending (do not run during bootstrap)

## Scope and Boundaries
### In Scope (Bootstrap)
- Define allowed integration file touchpoints and ownership boundaries.
- Define event taxonomy ownership and naming contract linkage.
- Define reliability requirements for form-to-destination delivery.
- Define error handling, retry policy, and observability expectations.

### Out of Scope (Bootstrap)
- No API route/service implementation for form submissions.
- No Google Sheets client/auth/runtime integration.
- No GA4 SDK runtime instrumentation or event dispatch code.
- No UI styling/layout changes outside minimal future wiring touchpoints.

## Allowed Integration Touchpoints (Implementation Phase Only)
When implementation is explicitly approved, BackendIntegrationAgent may modify integration-focused files only:

- `src/lib/integrations/**` (transport clients, adapters, retry utilities)
- `src/lib/analytics/**` (event dispatch and validation helpers)
- `src/lib/forms/**` (submission orchestration, payload normalization)
- `src/app/api/**` (server-side integration entry points)
- `src/types/integrations/**` and `src/types/analytics/**` (strict contracts)
- `.env.example` (new integration env var placeholders only, with descriptions)
- Integration tests under `tests/integrations/**` or `src/**/__tests__/**` specific to integration behavior

Disallowed without explicit exception approval:
- Styling/layout-heavy files under `app/**`, `components/**`, or `styles/**` except minimal integration wiring points.
- Unrelated infrastructure, release, or build pipeline files.

## Ownership Model
- **BackendIntegrationAgent owns:** integration transport contracts, submit pipeline reliability policy, backend event dispatch requirements, integration error taxonomy.
- **ConversionAgent owns:** conversion intent strategy and CTA semantics.
- **AnalyticsAgent owns:** final GA4 governance and reporting taxonomy stewardship.
- **Shared contract boundary:** `docs/agent-guides/BackendIntegrationAgent-Event-Contract.md` is the canonical bootstrap contract for call/book/form naming and payload rules until superseded by approved Analytics governance.

## Form-to-Destination Reliability Requirements
Every approved implementation must satisfy these requirements:

1. **Single submit intent, dual destination support**
   - Support independent delivery outcomes for primary destination (internal processing) and external destination (Google Sheets).
   - Prevent duplicate writes for retried delivery attempts using deterministic idempotency keys.

2. **Delivery guarantee baseline**
   - At-least-once delivery to configured destination path with deduplication safeguards.
   - Capture and surface partial-failure states without silently dropping submissions.

3. **Latency and timeout targets**
   - Server-side integration timeout budget per destination must be explicitly configured.
   - Submission path must fail fast on hard dependency errors and return typed failure reasons.

4. **Auditability**
   - Each submission attempt must emit a correlation ID and destination outcome (`success`, `retrying`, `failed`, `degraded`).
   - Logs must enable reconstruction of end-to-end flow from form submit to destination outcome.

## Error Handling and Retry Policy
- Use typed error classes with stable `code` values (no stringly-typed ad hoc errors).
- Separate retryable vs non-retryable failures at the adapter boundary.
- Retry policy baseline for transient destination failures:
  - bounded retries with exponential backoff + jitter
  - max attempt count explicitly configured
  - terminal failure emits structured error event/log with correlation ID
- Never retry validation/authentication errors that are non-recoverable without configuration change.
- Return user-safe error responses; never expose secrets, tokens, or raw upstream payloads.

## Observability Expectations
All integration flows should support:
- Structured logs with keys: `correlationId`, `formType`, `destination`, `attempt`, `outcome`, `errorCode`, `latencyMs`.
- Metrics counters/timers for:
  - submit attempts
  - destination success/failure rates
  - retry attempts and terminal failures
  - end-to-end submit latency
- Event continuity checks tied to canonical call/book/form event names.

## Security and Secret Management
- Integration credentials must be read from environment variables only.
- No secrets in source-controlled files or client-exposed bundles.
- Validate required env vars at startup for integration-capable runtimes.
- Redact sensitive data from logs while preserving troubleshooting metadata.

## Implementation Readiness Checklist
- [x] Integration boundaries and allowed file touchpoints are explicit.
- [x] Event taxonomy ownership and canonical contract location are explicit.
- [x] Form-to-destination reliability requirements are explicit.
- [x] Error handling, retry behavior, and observability expectations are explicit.
- [x] Bootstrap-only posture preserved; no integration code executed.

## Bootstrap Validation Status
- `npm run build`: Pending (not run during bootstrap)
- `npm test`: Pending (not run during bootstrap)
