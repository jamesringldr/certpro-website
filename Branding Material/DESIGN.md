# CertPro Plumbing Design System & Guide

## 1. Project Overview & Objective
**Project Name:** CertPro Plumbing Website
**Core Mission:** Move visitors from "emergency discovery" to "contact/booking" in under 15 seconds.
**Brand Identity:** CertPro Plumbing is a high-end, reliable home service business. The visual style is professional, trustworthy, and modern, utilizing a "Dark Mode" aesthetic with premium metallic accents. It is family-owned, rapid response (24/7), and trusted.
**Target Audience:** Homeowners in Liberty, Gladstone, Parkville, Smithville, Platte City, Kearney, Riverside, and North Kansas City (North Kansas City metro area).

## 2. Technical Stack & Constraints
* **Frontend:** React (deployed via GitHub Pages).
* **Styling/UI Library:** Modular layout based on the Solaris reference utilizing component styles and CSS modules. *Note: AI Agent should prefer modular component-first styling over utility-first unless otherwise specified by the Architect Agent.*
* **Backend Integration:**
    * **Form Submission:** Link to Google Sheets via webhook service (e.g., Formspree, EmailJS).
    * **Analytics:** Google Analytics 4 (GA4) integration.
* **Local SEO Foundation:**
    * Template-based dynamic service/location page generation.
    * JSON-LD Schema (`LocalBusiness` and `Service` types).
    * `sitemap.xml` & `robots.txt` plans.

## 3. Data Architecture (Mocked/Schema)
* **Services:**
    * `title` (e.g., Emergency Drain Cleaning)
    * `description` (Drafted by Content Agent)
    * `seoKeywords`
    * `faqSchema`
    * `slug` (for routing)
* **Locations:**
    * `cityName` (e.g., Liberty)
    * `seoMetaTags` (Optimized for local cities)

## 4. Feature Specification (AI Agent Task Breakdown)
This project is built iteratively. Refer to the specific deliverables below.

| Component / Task | Agent Role | Status | Requirement Notes |
| :--- | :--- | :--- | :--- |
| **Site Architecture** | **Architect** | Pending | Define React folder structure, routing, component library structure. |
| **Styling Foundation** | **Design** | Pending | Apply `design.md` tokens; ensure mobile-first responsiveness. Implement CSS modules. |
| **Modular Layout** | **Design** | Pending | Structure pages (Hero, Service Grids, Testimonials) using `image_0.png` as a spatial benchmark. |
| **Content Drafting** | **Content** | Pending | Draft copy for 12 services + Home/About/Contact. SEO-optimized with FAQ schemas. |
| **Schema/SEO** | **SEO** | Pending | Implement `LocalBusiness`/`Service` Schema. City meta-tags. |
| **"Emergency" Sticky Bar**| **Design** | Pending | Always visible "Call Now" and "Book Now" buttons on mobile. |
| **Service Grid** | **Design** | Pending | Modular layout covering 12 services, each linking to a landing page. |
| **Form Integration** | **Architect**| Pending | Connect "Free Estimate" form to Formspree/EmailJS -> Google Sheets. |

## 5. UI/UX Principles & Design System
The visual language must be consistent, professional, and trustworthy, matching the quality of the solar industry reference.

### Visual Language (Tokens)
Refer to the complete design token list in the original `design.md` for full implementation.

#### Colors
* **Accent (Primary):** `surface-tint: '#8c5526'` (Copper - main brand color, primary actions)
* **Interaction (Secondary):** `secondary: '#b87333'` (Used for hover states and deep accents)
* **Deep Background:** `background: '#0A0A0A'` (Deep black for high-contrast dark mode)
* **Card/Section Surface:** `surface: '#1A1A1A'` (Slightly lighter dark)
* **Typography:** White and light gray.
    * Heading: `text-heading: '#FFFFFF'`
    * Body: `text-body: '#E0E0E0'`
* **Layout Spacing:** `section-padding: 80px`, `grid-gutter: 24px`, `container-max: 1200px`.

#### Typography
* **Headings (Primary):** **Work Sans** (`fontWeight: '700'` or `'600'`). Bold and geometric, matching the professional aesthetic.
* **Body (Secondary):** **Inter** (`fontWeight: '400'`). Clean and legible.

### Component Styling & Layout
Structure components following the Solaris reference layout flow: large hero section, service grids, trust indicators (logos/testimonials), and contact footer.

* **Large Hero Section:** Introduce the value proposition ("Rapid Response, Trusted Pro"), featuring a clear CTA button (Copper/White text).
* **Service Grids:** Use a modular grid layout with subtle borders (`border-subtle: '#2A2A2A'`) or slightly lighter surfaces (`surface: '#1A1A1A'`).
* **Trust Architecture (Social Proof):** Dedicate sections to "Family Owned" values, "24/7 Availability," licensing, and client testimonials.
* **Contact/Booking Footer:** Clear, persistent, and professional contact information.
* **Button Styling:** Copper background with white text, slight rounding or sharp edges.
* **Photography:** High-quality professional photos of plumbing work and technicians, treated with a slight dark overlay to maintain text legibility. Utilize WebP format and lazy-loading.

## 6. Project Guardrails & AI Instructions
* **Mobile-First:** Ensure responsiveness across mobile, tablet, and desktop.
* **Constraint:** GitHub Pages is a static site host; forms *must* use external services (Formspree or EmailJS).
* **SEO:** Prioritize Google Business Profile verification as the single biggest factor for local SEO.
* **Content:** Employ a "City Template" approach for generating local service/city landing pages.
* **Analytics:** Tracking must fire on all key conversion events (form submits, button clicks).
* **DOD (Definition of Done):** Validate responsiveness, form routing, GA4 events, Schema validation (Rich Results Test), and asset optimization (WebP) before marking tasks complete.