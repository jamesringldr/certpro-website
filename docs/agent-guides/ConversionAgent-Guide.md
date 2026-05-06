# ConversionAgent Bootstrap Charter (T0.3)

## Purpose
Define emergency plumbing conversion strategy for journeys targeting contact intent in less than 15 seconds. This charter is advisory only and provides prioritized instructions for implementation agents.

Bootstrap guardrails:
- Plan -> Approve -> Run.
- No code, styling, routing, or analytics implementation changes in this phase.
- Validation commands remain pending during bootstrap.

## Conversion Objective
- Primary goal: maximize immediate contact initiation from high-intent visitors.
- Time-to-intent target: user reaches a contact action (tap/click call button, form open, or booking start) in <= 15 seconds from landing.
- Priority audience: urgent service users on mobile first, then desktop.

## Contact Intent Event Model (for measurable outcomes)
Implementation agents should map recommendations to these canonical event names:
- `cta_impression_sticky_primary`
- `cta_click_sticky_primary`
- `cta_impression_header_primary`
- `cta_click_header_primary`
- `cta_impression_hero_primary`
- `cta_click_hero_primary`
- `cta_click_page_secondary`
- `trust_signal_view`
- `service_page_scroll_depth_50`
- `contact_form_start`
- `contact_form_submit`
- `phone_click`

Primary KPI mappings:
- Contact Initiation Rate = (`phone_click` + `contact_form_start`) / sessions.
- <=15s Intent Rate = contact event within first 15 seconds / sessions.
- CTA Efficiency by placement = `cta_click_*` / `cta_impression_*`.

## Prioritized Placement and Ordering Rules
Order rules are strict for emergency journeys and apply to all templates unless explicitly overridden by approved experiments.

1. Sticky bar (mobile) primary CTA
   - First actionable element users can trigger while scrolling.
   - Must remain persistent and visible after initial load.
   - Copy pattern: action + urgency + channel, e.g. "Call Now - 24/7 Emergency".
   - Primary action: direct call.
   - Secondary action (optional): "Request Immediate Callback" if call is unavailable.

2. Header CTA (global)
   - Always visible on desktop; compact persistent presence on mobile header.
   - Copy pattern: "Call 24/7" or "Speak to a Plumber Now".
   - Should never outrank sticky bar on mobile urgency hierarchy.

3. Hero CTA (page entry)
   - Above-the-fold primary CTA mirrors emergency action.
   - Secondary hero CTA should support users not ready to call (quote/request callback).
   - Hero must not present more than two actions to avoid decision friction.

4. Service page CTA blocks (page-level)
   - Repeat primary CTA after first problem/solution section.
   - Add context-aware CTA near pricing/availability statements.
   - Footer CTA should be urgency-reinforced but concise.

## CTA Copy Rules
Use these copy constraints for implementation:
- Start with verb-first action: "Call", "Book", "Get", "Request".
- Include urgency/availability qualifier where relevant: "Now", "24/7", "Today".
- Limit to 3-7 words for primary buttons.
- Avoid ambiguous labels like "Learn More" for high-intent blocks.
- Keep channel explicit when possible ("Call Now", "Request Callback").

## Trust-Signal Sequencing
Trust should reduce hesitation without delaying action. Sequence in this order:

1. Immediate (0-5s): certification/licensing + response-time claim adjacent to primary CTA.
2. Early (5-10s): rating/review proof near hero or first service block.
3. Mid-path (10-20s): service guarantee, transparent pricing cue, local coverage proof.
4. Pre-conversion reinforcement: testimonial or badge near form/callback CTA.

Trust-signal rules:
- Never place trust modules above primary emergency CTA.
- Keep trust snippets concise; link out only if user requests detail.
- Reuse trust artifacts consistently across hero and service sections.

## Click-Path Recommendations (<=15s target)
Recommended shortest paths:

- Mobile emergency path:
  1) Land on page -> 2) See sticky primary CTA -> 3) Tap to call.
- Desktop emergency path:
  1) Land on page -> 2) Hero/header primary CTA -> 3) Click to call.
- Alternative path (call-averse users):
  1) Land -> 2) Hero secondary CTA -> 3) Start callback/form -> 4) Submit.

Friction controls:
- Minimize taps/clicks to contact (target <= 2 interactions).
- Avoid modal interstitials before first contact action.
- Keep phone number and CTA copy consistent across placements.

## Implementation Instructions for Dev Agents (Priority Order)
P0:
- Implement sticky mobile primary CTA precedence and persistent visibility contract.
- Align hero and header CTA copy with urgent action taxonomy.
- Ensure service pages repeat primary CTA at key decision checkpoints.
- Instrument and validate all conversion events defined in this charter.

P1:
- Apply trust-signal sequencing next to relevant CTA steps.
- Add context-specific secondary CTA for callback path where needed.
- Introduce page-template rules that enforce CTA max-count and copy length.

P2:
- Add experiment backlog for copy/position variants after baseline KPI stabilizes.
- Expand event segmentation by device, entry page type, and service category.

## Bootstrap Validation Status
- `npm run build`: Pending (not run during bootstrap)
- `npm test`: Pending (not run during bootstrap)

## Acceptance Checklist (Bootstrap)
- [x] Conversion strategy targets emergency journeys and <=15s intent.
- [x] CTA placement/order/copy rules defined for sticky bar, hero, and service pages.
- [x] Trust-signal sequencing and click-path recommendations defined.
- [x] Recommendations map to measurable conversion events.
- [x] Advisory-only guidance; no implementation changes in source code.
