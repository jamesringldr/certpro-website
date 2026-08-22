# Visual / above-the-fold — certproplumbingkc.com

**Score: 44 / 100**  
Screenshots were not captured (browser MCP unavailable; claude-seo Playwright runtime not installed). Assessment from live HTML + CSS + asset weights.

## Above the fold (desktop)

- Dark branded hero with autoplay video, family-owned / 30+ years chips, H1, bonded-licensed-insured line, Call + Request Estimate.
- Header also shows a “Fast Rapid Response” utility bar and `(816) 454-0247`.
- Phone and primary CTA are visible without scroll. Good for emergency intent.

## Above the fold (mobile)

- Separate `hero-mobile.png` (204 KB).
- Sticky emergency bar exists (`MobileEmergencyBar` / `StickyEmergencyBar`).
- Desktop utility call strip is hidden on mobile by design — OK if the sticky bar is visible.

## Issues

- Hero video 9.2 MB will delay first meaningful paint on desktop.
- H1 does not include “plumber” (says “Rapid Response Plumbing”) — fine visually, weaker for snippet overlap.
- Service cards below the fold are not clickable — looks interactive, isn’t.
- Article module looks like a blog index; Read More is inert.
- Footer social icons look clickable; they are `#`.
- No favicon.

## Accessibility notes (from source, not axe)

- `html lang="en"` present.
- Logo images have alt.
- Menu button has `aria-expanded` / `aria-controls`.
- Newsletter button `aria-label="Submit email"` but does not submit.
- Decorative ↗ controls on vehicle photo are not named.

## Recommendation

Keep the conversion-first fold. Fix false affordances (cards, articles, social, newsletter) so visual design matches crawlable, tappable URLs.
