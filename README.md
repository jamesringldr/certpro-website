# 🔧 Local Plumbing Co. — Landing Page

> A bold, modern landing page with a retro-futurist aesthetic, built for a local plumbing business. Crafted with pure HTML, CSS, and vanilla JavaScript — no frameworks, no dependencies, just clean and maintainable code ready for handoff.

---

## 📋 Project Overview

This project is a single-page marketing website designed to convert local visitors into leads. The page is built to establish trust, showcase services, and make it dead simple for customers to get in touch.

**Goals:**
- Present the business as professional, modern, and dependable
- Clearly communicate services offered
- Drive visitors toward a contact action (call, form, or quote request)
- Load fast and work well on all devices

---

## 🗂️ Page Sections

The landing page is structured into the following sections, in order:

| Section | Purpose |
|---|---|
| **Hero** | Bold headline, subheadline, and primary CTA (e.g. "Get a Free Quote") |
| **Services** | List of core plumbing services with icons or cards |
| **About** | Short company story, values, and what sets them apart |
| **Testimonials** | Social proof from satisfied local customers |
| **Contact / CTA** | Contact form and/or phone number with a strong closing CTA |

---

## 🎨 Design System & Style Guide

The design language is **Bold & Modern with a Retro-Futurist** edge — think heavy typography, high contrast, and a color palette that feels industrial yet forward-looking.

---

### Color Palette

| Role | Name | Hex |
|---|---|---|
| Primary | Deep Navy | `#0A0E27` |
| Accent | Electric Blue | `#00CFFF` |
| Highlight | Chrome Gold | `#F5C518` |
| Surface | Off-White | `#F2F2F0` |
| Text | Near-Black | `#1A1A2E` |
| Muted Text | Slate Gray | `#6B7280` |

> ⚠️ **Note to developer:** These are placeholder values. Update with the client's actual brand colors if provided. Accent and highlight colors should be used sparingly to maintain impact.

---

### Typography

| Role | Font | Weight | Usage |
|---|---|---|---|
| Display / Hero | `[Display Font — e.g. Space Grotesk]` | 700–900 | Hero headlines, section titles |
| Body | `[Body Font — e.g. Inter]` | 400–500 | Paragraphs, descriptions |
| Accent / Label | `[Mono Font — e.g. JetBrains Mono]` | 400 | Tags, badges, small labels |

**Scale (base 16px):**
- `xs` — 12px
- `sm` — 14px
- `base` — 16px
- `lg` — 20px
- `xl` — 24px
- `2xl` — 32px
- `3xl` — 48px
- `4xl` — 64px+

> Fonts should be loaded via Google Fonts or self-hosted. Avoid system fonts for headings to preserve the retro-futurist character.

---

### Component Library & UI Patterns

#### Buttons
```
Primary CTA   — Filled accent color, bold text, slight border radius (4–6px)
Secondary CTA — Outlined, same accent color, transparent fill
Ghost         — Text-only with underline or arrow indicator
```

#### Cards (Services & Testimonials)
- Dark background (`#0A0E27`) with subtle border in accent color
- Icon or number label at top-left
- Generous padding (24–32px)
- Hover state: slight glow or border brightening

#### Section Layout
- Full-width sections with alternating backgrounds (dark / light)
- Max content width: `1200px`, centered
- Section padding: `80px` top/bottom on desktop, `48px` on mobile

#### Forms (Contact Section)
- Dark input fields with accent-colored focus border
- Labels above inputs (not placeholder-only)
- Submit button uses Primary CTA style
- Inline validation feedback preferred

#### Dividers & Accents
- Thin horizontal rules in accent color between sections
- Geometric shapes or grid overlays as decorative backgrounds (CSS-only preferred)
- Subtle grain or noise texture on hero for retro feel

---

## 🗃️ File Structure

```
/
├── index.html          # Main landing page
├── css/
│   ├── style.css       # Global styles & variables
│   ├── layout.css      # Grid, sections, spacing
│   └── components.css  # Buttons, cards, forms
├── js/
│   └── main.js         # Scroll behavior, form handling, interactions
├── assets/
│   ├── images/         # Photos, logos
│   └── icons/          # SVG icons
└── README.md
```

---

## 🚀 Running the Project Locally

No build tools required. Just open the file in a browser:

```bash
# Option 1 — Open directly
open index.html

# Option 2 — Serve locally (recommended to avoid CORS issues)
npx serve .
# or
python3 -m http.server 8080
```

Then visit `http://localhost:8080` in your browser.

---

## 📦 Handoff Notes

- All colors and font sizes are defined as **CSS custom properties** in `:root` inside `style.css` — easy to update without hunting through the codebase
- The page is **fully responsive** — tested at 375px, 768px, and 1280px breakpoints
- The contact form currently logs submissions to the console — connect to a backend service (e.g. Formspree, Netlify Forms) before going live
- All images in `/assets/images/` should be replaced with final client-approved photography
- Swap placeholder business name, phone number, address, and service descriptions in `index.html` before launch

---

## ✅ Pre-Launch Checklist

- [ ] Replace placeholder content (name, phone, services, testimonials)
- [ ] Swap in final brand colors and fonts
- [ ] Add real photography / imagery
- [ ] Connect contact form to a backend or form service
- [ ] Add Google Analytics or tracking pixel if needed
- [ ] Test on mobile (iOS Safari + Android Chrome)
- [ ] Run Lighthouse audit — target 90+ on Performance & Accessibility
- [ ] Add favicon and Open Graph meta tags for social sharing

---

*Built with ❤️ and no dependencies.*
