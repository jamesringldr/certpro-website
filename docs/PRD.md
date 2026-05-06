# Product Requirements Document: CertPro Plumbing

## 1. Project Overview
**Objective:** Build a high-converting, mobile-first website for *CertPro Plumbing* serving the North Kansas City metro area.
**Brand Positioning:** Family-owned, Rapid Response (24/7), Trusted/Professional.
**Core Mission:** Move visitors from "emergency discovery" to "contact/booking" in under 15 seconds.

## 2. Target Persona & Competitive Benchmarking
* **Target Audience:** Homeowners in Liberty, Gladstone, Parkville, Smithville, Platte City, Kearney, Riverside, and North Kansas City.
* **Competitor Strategy:**
    * *Anthony PHC:* Use as a benchmark for "breadth of services" and trust signals.
    * *Sewer Doctor/Surgeon:* Use as a benchmark for "emergency-ready" messaging and naming conventions.
    * *Zoom Drain:* Use as a benchmark for "clean, simplified" service categorization.

## 3. Technical Architecture
* **Frontend:** React (deployed via GitHub Pages).
* **Backend Integration:**
    * **Form Submission:** Link to Google Sheets (via API or simple webhook service like Formspree or EmailJS).
    * **Analytics:** Google Analytics 4 (GA4) integration for conversion tracking.
* **Local SEO Foundation:**
    * Dynamic service/location page generation (Template-based).
    * JSON-LD Schema (`LocalBusiness` and `Service` types).

## 4. Feature Requirements (The "Must-Haves")
1. **"Emergency" Sticky Bar:** Always visible "Call Now" and "Book Now" buttons on mobile.
2. **Service Grid:** Modular layout covering the 12 specified services, each with its own landing page.
3. **Local Service Area Map:** Interactive embed showing the coverage area (8 key cities).
4. **Lead Capture:**
    * Primary: "Get a Free Estimate" form (Name, Phone, Service Type, Message).
    * Secondary: "Click-to-Call" number at top header.
5. **Trust Architecture:** Sections for "Family Owned," "24/7 Availability," and "Licensing/Certification."

## 5. Agent Task Breakdown
| Agent Role | Primary Objective | Key Deliverable |
| :--- | :--- | :--- |
| **Architect Agent** | Define React folder structure, routing, and component library. | `src/` directory structure. |
| **Design Agent** | Apply `design.md` system; ensure mobile-first responsiveness. | Component styles & CSS modules. |
| **Content Agent** | Draft copy for 12 core services + Home/About/Contact pages. | SEO-optimized content with FAQ schemas. |
| **SEO Agent** | Implement Schema markup; ensure meta-tags for local cities. | `sitemap.xml` & `robots.txt` plans. |

## 6. Definition of Done (DOD)
* [ ] Site is responsive across mobile, tablet, and desktop.
* [ ] All forms successfully route to designated Google Sheet.
* [ ] Google Analytics event tracking fires on button clicks.
* [ ] Local SEO schema is validated by Google’s Rich Results Test.
* [ ] All "Example Photos" and AI-generated assets are optimized for web (WebP format, lazy-loading).

---
## Advisor Note & Recommendations
1. **GitHub Pages Consideration:** GitHub Pages is static; use a service like Formspree or EmailJS to handle form data to Google Sheets.
2. **Google Business Profile (GBP):** Verify your business immediately. It is the single biggest factor for local plumbing SEO.
3. **Local Content Strategy:** Use a "City Template" approach for service/city-specific landing pages.
