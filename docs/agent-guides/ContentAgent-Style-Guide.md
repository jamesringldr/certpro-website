# ContentAgent Style Guide (T0.4)

## Purpose
Define a brand-consistent content framework for CertPro core and service pages. This guide is advisory-only for bootstrap and does not modify components, templates, routes, or implementation code.

## Bootstrap Guardrails
- Follow `Plan -> Approve -> Run`.
- Advisory-only role in bootstrap: content specs and outlines only.
- No edits to page code, template code, route definitions, or shared UI components.
- Validation commands are deferred during bootstrap:
  - `npm run build` -> Pending (do not run during bootstrap)
  - `npm test` -> Pending (do not run during bootstrap)

## Brand Voice Foundation
Brand positioning from PRD:
- Family-owned
- Rapid Response (24/7)
- Trusted/Professional

Voice principles:
1. Reassuring under urgency: calm, direct, no fear-based language.
2. Professional without jargon: plain-language explanations first.
3. Local and specific: reference North Kansas City metro service reality.
4. Action-oriented: always provide a clear next step.
5. Credibility-forward: pair claims with trust signals (licensed, insured, reviews, guarantees).

## Tone and Style Rules
### Tone sliders
- Warmth: High
- Formality: Medium
- Urgency: Medium-High on emergency pages; Medium on informational sections
- Technical depth: Low-Medium (explain terms simply)
- Confidence: High, never exaggerated

### Writing rules
- Write in second person (`you`) for customer-centered clarity.
- Use short paragraphs (1-3 sentences) and scannable bullets.
- Lead sections with outcome-focused statements, then supporting details.
- Prefer active voice and present tense.
- Use contractions naturally to keep copy human and approachable.

### Prohibited patterns
- No competitor mentions on customer-facing pages.
- No unverifiable superlatives (`best`, `#1`) without proof.
- No alarmist wording that increases panic.
- No vague CTA labels (`Learn More`) in high-intent sections.

## Messaging Pillars and Proof Requirements
Every primary page should map to these pillars:

1. **Fast response**
   - Approved claim style: "24/7 emergency response" and "fast local dispatch."
   - Proof examples: response window statement, on-call availability language.
2. **Family-owned care**
   - Approved claim style: "family-owned local team."
   - Proof examples: values statement, direct accountability language.
3. **Trusted professionals**
   - Approved claim style: "licensed and insured technicians."
   - Proof examples: certifications, review snippets, workmanship guarantee.
4. **Transparent service**
   - Approved claim style: "clear recommendations before work begins."
   - Proof examples: process steps, estimate expectations, no-surprise framing.

Proof rule:
- Pair each major trust claim with at least one concrete supporting detail in the same section.

## Local Intent Content Requirements
Local intent standards for all service and core conversion pages:
- Mention service area naturally: North Kansas City metro + key city cluster where relevant.
- Use local context phrasing: "near you," "local dispatch," "serving [city]."
- Include location-aware reassurance in CTA-adjacent blocks (availability + coverage).
- Avoid keyword stuffing; location mentions must read naturally and contextually.

Recommended city references (from PRD audience):
- Liberty
- Gladstone
- Parkville
- Smithville
- Platte City
- Kearney
- Riverside
- North Kansas City

## CTA Copy Standards
Primary CTA rules:
- 2-6 words, verb-first.
- Include urgency or availability where relevant.
- Clarify action channel.

Approved CTA patterns:
- "Call Now - 24/7"
- "Request Fast Service"
- "Get a Free Estimate"
- "Speak With a Plumber"

Secondary CTA rules:
- Used for lower-friction alternatives, not equal visual priority.
- Example patterns: "Request a Callback", "Ask a Question".

## Page Copy Block Specification (Implementation-Ready)
Use this reusable block sequence for Home/About/Contact and service pages (with page-specific adaptations):

1. Intent headline
2. Outcome-focused supporting copy
3. Primary CTA
4. Trust proof strip
5. Problem -> solution framing
6. Process/timeline clarity
7. FAQ objections handling
8. Final reassurance + CTA

Per-block spec format:
- **Objective:** why this block exists
- **Key message:** 1 core message
- **Proof requirements:** trust/local evidence needed
- **CTA requirement:** action and placement intent
- **Schema note:** if block should map to `FAQPage`/`Service`/`LocalBusiness` fields

## FAQ and Schema-Ready Content Rules
FAQ authoring constraints:
- 4-7 FAQs on core pages; 5-8 FAQs on service pages.
- Questions must mirror real customer objections and local intent.
- Answers should be 40-90 words, direct and non-promotional.
- Include service area/response context where relevant.

Schema readiness:
- FAQ questions must be plain text, unique per page, and standalone.
- Answers should avoid unsupported claims and stay fact-consistent with on-page copy.
- Service pages should include "what it is," "when to call," "what to expect," and "timing/cost framing" FAQ patterns.

## Microcopy Standards
Use consistent microcopy for trust and friction reduction:
- Response expectation: "We respond quickly and confirm next steps."
- Reassurance: "Licensed, insured, and local."
- Form helper text: "Tell us what is happening and we will follow up promptly."
- Submission confirmation intent: acknowledge receipt + set response expectation.

## Quality Checklist for Content Deliverables
- [ ] Copy reflects family-owned, rapid-response, trusted/professional voice.
- [ ] Local intent language is present and natural.
- [ ] Trust claims include concrete supporting proof.
- [ ] CTA copy is explicit, action-first, and channel-clear.
- [ ] Each page outline includes schema-ready FAQ blocks.
- [ ] Guidance is mapped to page slugs and is implementation-ready.
- [ ] Advisory-only scope respected (no implementation/code changes).

## Handoff Notes for Implementation Agents
- Treat this guide as canonical copy standards for `T3.2` and `T5.3`.
- Keep section hierarchy stable to align with DesignAgent and ConversionAgent guides.
- Preserve message consistency across sticky/header/hero/service CTA contexts.
