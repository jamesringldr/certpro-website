# BackendIntegrationAgent Event Contract (T1.3)

## Purpose
Establish implementation-ready contracts for environment variables, form transport payloads, destination outcomes, and GA4 event naming for call/book/form flows.

Task scope note: contract definition only. Full runtime webhook/Sheets flow remains out of scope for T1.3 (`T4.1`/`T4.2`).

## Contract Authority
- This document is the canonical source for integration env + event contracts used by backend form transport and analytics wiring.
- BackendIntegrationAgent owns enforcement in integration code paths and shared contract types.
- AnalyticsAgent owns future evolution/expansion of analytics taxonomy after explicit approval.
- Any contract change requires plan, approval, and tracker sync updates.

## Environment Variable Contract
No secret values are committed. All variables are read from runtime environment only.

| Variable | Required | Scope | Purpose | Example (non-secret) |
| :--- | :--- | :--- | :--- | :--- |
| `FORMS_TRANSPORT_PROVIDER` | No | Server | Selects bridge provider adapter (`webhook`, `formspree`, `emailjs`); defaults to `webhook` | `formspree` |
| `FORMS_PRIMARY_DESTINATION` | Yes | Server | Selects primary form delivery route (`internal`, `google_sheets`, `dual_write`) | `dual_write` |
| `FORMS_INTERNAL_WEBHOOK_URL` | Conditional* | Server | Internal webhook endpoint used when destination includes `internal` | `https://api.example.com/forms/intake` |
| `GOOGLE_SHEETS_SPREADSHEET_ID` | Conditional* | Server | Target spreadsheet identifier for Sheets delivery | `1AbCdEfGhIj...` |
| `GOOGLE_SHEETS_WORKSHEET_NAME` | No | Server | Worksheet/tab target; defaults to `Leads` when not provided | `Leads` |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Conditional* | Server | Service account principal for Sheets API auth | `svc-forms@project.iam.gserviceaccount.com` |
| `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` | Conditional* | Server secret | Private key for service account auth (never logged) | `<redacted>` |
| `GA4_MEASUREMENT_ID` | Yes | Client + Server | GA4 property measurement ID for event dispatch routing | `G-XXXXXXXXXX` |
| `GA4_API_SECRET` | Conditional** | Server secret | Required only for server-side GA4 Measurement Protocol dispatch | `<redacted>` |
| `INTEGRATION_REQUEST_TIMEOUT_MS` | No | Server | Per-destination transport timeout budget | `5000` |
| `INTEGRATION_MAX_RETRIES` | No | Server | Max retry attempts for retryable transport failures | `3` |
| `INTEGRATION_RETRY_BASE_MS` | No | Server | Base delay for exponential backoff | `250` |
| `INTEGRATION_LOG_LEVEL` | No | Server | Integration logging verbosity (`error`,`warn`,`info`,`debug`) | `info` |

\* Conditional requirements:
- `FORMS_INTERNAL_WEBHOOK_URL` is required when `FORMS_PRIMARY_DESTINATION` is `internal` or `dual_write`.
- `GOOGLE_SHEETS_SPREADSHEET_ID`, `GOOGLE_SERVICE_ACCOUNT_EMAIL`, and `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` are required when `FORMS_PRIMARY_DESTINATION` is `google_sheets` or `dual_write`.

\** `GA4_API_SECRET` is required only if server-to-GA4 dispatch is enabled.

## Naming Standard
- Use `snake_case` event names.
- Names must be verb-noun and action-specific.
- Prefix groups are reserved and immutable in this contract phase:
  - `call_*`
  - `book_*`
  - `form_*`
- No synonym drift (`submit_form`, `booking_started`, `phone_tap`) outside canonical list.

## Canonical Event Dictionary
### Call Flow Events
- `call_click` - user initiates call action from any tracked placement.
- `call_connect_success` - downstream signal confirms successful call connection (if available).
- `call_connect_failure` - downstream signal confirms call attempt failure (if available).

### Book Flow Events
- `book_click` - user initiates booking action (button/link/CTA).
- `book_start` - booking workflow/session is initialized.
- `book_submit` - booking request is submitted to destination.
- `book_submit_success` - booking destination confirms accepted payload.
- `book_submit_failure` - booking submit terminally fails after retries.

### Form Flow Events
- `form_view` - form becomes visible in viewport or opened by user.
- `form_start` - user begins interaction with at least one field.
- `form_submit` - submit intent received by backend pipeline.
- `form_submit_success` - terminal successful delivery for required destination path.
- `form_submit_failure` - terminal failed delivery after retry policy completion.

## Event Payload Contract (Strict Typing Baseline)
All canonical events must include:
- `event_name` (union of canonical names)
- `event_version` (string, starting at `v1`)
- `occurred_at` (ISO-8601 timestamp)
- `correlation_id` (stable ID per user submit/call/book intent)
- `session_id` (analytics/session correlation value, when available)
- `page_path` (route where event originated)
- `source` (UI/API origin identifier)

Conditional required fields:
- For submit/result events: `destination`, `outcome`, `attempt_count`, `latency_ms`
- For failures: `error_code`, `retryable`, `failure_stage`
- For call/book/form start events: `entrypoint` (e.g., `hero_cta`, `sticky_bar`, `contact_page`)

## Typed Contract Reference (TypeScript)
```ts
export type IntegrationDestination = "internal" | "google_sheets" | "dual_write";
export type IntegrationOutcome = "success" | "failed" | "degraded" | "retrying";
export type FailureStage = "validation" | "transport" | "auth" | "timeout" | "unknown";

export type CanonicalEventName =
  | "call_click"
  | "call_connect_success"
  | "call_connect_failure"
  | "book_click"
  | "book_start"
  | "book_submit"
  | "book_submit_success"
  | "book_submit_failure"
  | "form_view"
  | "form_start"
  | "form_submit"
  | "form_submit_success"
  | "form_submit_failure";

export interface IntegrationEventBase {
  event_name: CanonicalEventName;
  event_version: "v1";
  occurred_at: string; // ISO-8601
  correlation_id: string;
  session_id?: string;
  page_path: string;
  source: "ui" | "api";
  entrypoint?: "sticky_bar" | "header_cta" | "hero_cta" | "service_cta" | "contact_page" | "booking_page";
}

export interface DestinationResult {
  destination: IntegrationDestination;
  outcome: IntegrationOutcome;
  attempt_count: number;
  latency_ms: number;
  error_code?: string;
  retryable?: boolean;
  failure_stage?: FailureStage;
}

export interface FormSubmissionPayload {
  form_type: "contact" | "booking" | "callback";
  name: string;
  phone: string;
  email?: string;
  service?: string;
  message?: string;
  consent: boolean;
  correlation_id: string;
  source_page_path: string;
  submitted_at: string; // ISO-8601
}
```

## Destination and Outcome Vocabulary
Use normalized values only:
- `destination`: `internal`, `google_sheets`, `dual_write`
- `outcome`: `success`, `failed`, `degraded`, `retrying`
- `failure_stage`: `validation`, `transport`, `auth`, `timeout`, `unknown`

## Reliability and Emission Rules
- Emit exactly one terminal outcome event (`*_success` or `*_failure`) per correlation ID and destination path.
- Retries may emit intermediate state (`outcome=retrying`) but must not duplicate terminal success events.
- Partial dual-destination failures must emit explicit degraded/failure semantics; no silent success masking.
- Event emission must be best-effort and must not crash user-facing request handlers.

## GA4 Mapping and Trigger Points (Canonical)
| Canonical Event | Primary Trigger Point | GA4 Event Name | Required Params |
| :--- | :--- | :--- | :--- |
| `call_click` | User taps/clicks call CTA (`sticky_bar`, `header_cta`, `hero_cta`, `service_cta`) | `call_click` | `entrypoint`, `page_path`, `correlation_id` |
| `call_connect_success` | Call provider confirms successful connection | `call_connect_success` | `entrypoint`, `page_path`, `correlation_id` |
| `call_connect_failure` | Call provider confirms failed connection attempt | `call_connect_failure` | `entrypoint`, `page_path`, `correlation_id`, `error_code` |
| `book_click` | User taps booking CTA | `book_click` | `entrypoint`, `page_path`, `correlation_id` |
| `book_start` | Booking workflow initialized | `book_start` | `entrypoint`, `page_path`, `correlation_id` |
| `book_submit` | Booking submit intent received by backend | `book_submit` | `entrypoint`, `page_path`, `correlation_id` |
| `book_submit_success` | Booking destination accepts payload | `book_submit_success` | `page_path`, `correlation_id`, `destination`, `latency_ms` |
| `book_submit_failure` | Booking submit reaches terminal failure | `book_submit_failure` | `page_path`, `correlation_id`, `destination`, `error_code`, `failure_stage` |
| `form_view` | Contact form becomes visible/opened | `form_view` | `entrypoint`, `page_path`, `correlation_id` |
| `form_start` | First user interaction in form field | `form_start` | `entrypoint`, `page_path`, `correlation_id` |
| `form_submit` | Form submit intent received by backend | `form_submit` | `entrypoint`, `page_path`, `correlation_id` |
| `form_submit_success` | Required destination path confirms success | `form_submit_success` | `page_path`, `correlation_id`, `destination`, `latency_ms` |
| `form_submit_failure` | Submission terminally fails after retries | `form_submit_failure` | `page_path`, `correlation_id`, `destination`, `error_code`, `failure_stage` |

Mapping rule: GA4 event name must match canonical event name exactly (no aliasing).

## Validation Rules
- Compile-time: canonical event name union enforced by TypeScript.
- Runtime: reject unknown event names or invalid payload shape at boundary validators.
- Logging: emit structured warning when contract validation fails and include correlation ID.
- Backward compatibility: add-only changes for non-breaking evolution; breaking changes require `event_version` bump.

## Non-Goals (T1.3)
- No webhook/Sheets runtime implementation in this task (`T4.1`, `T4.2`).
- No UI placement/layout refactors for CTA/form controls.
- No release actions (push/deploy/tag/publish).

## T1.3 Acceptance Checklist
- [x] Env var contract includes required/optional flags and purpose.
- [x] Canonical call/book/form naming contract documented.
- [x] Canonical GA4 event dictionary is mapped to trigger points.
- [x] Ownership boundaries for taxonomy and evolution documented.
- [x] Reliability and terminal outcome emission rules documented.
- [x] Payload, vocabulary, and validation requirements documented.
- [x] Runtime implementation deferred to downstream tasks (`T4.1`, `T4.2`, `T4.3`).

## Validation Status (T1.3)
- `npm run build`: Pass
- `npm test`: Failed (script missing: `test`)
