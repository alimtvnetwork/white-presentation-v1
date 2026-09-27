# 02-Global PPT Corporate & Storytelling Presentation Specification

## 1. System Overview
The **Global PPT Corporate System** defines the narrative pacing, typographic hierarchy, and slide taxonomy required for high-stakes business proposals, executive pitches, and technical agency showcases. Derived from `global-ppt-v1`, this specification standardizes how complex corporate stories are broken into high-impact visual chapters.

---

## 2. Pacing & Narrative Arc Architecture
A world-class corporate deck follows a 6-phase storytelling framework designed to move stakeholders from curiosity to decision-making:

```
┌────────────────────────────────────────────────────────────────────────┐
│ 1. The Hook & Reality Gap (Slides 1–4)                                 │
│    - TitleSlide: Grand vision, branded backdrop, presenter metadata    │
│    - AuthenticityHookSlide: Market tension or industry bottleneck      │
│    - AvoidCommoditySlide: Why legacy alternatives fail                 │
├────────────────────────────────────────────────────────────────────────┤
│ 2. Leadership & Human Credibility (Slides 5–9)                         │
│    - CEOSlide & CTOSlide: Deep executive persona profiling             │
│    - LeadershipDuoSlide: Cross-functional operational synergy          │
│    - DailyWorkCultureSlide: Operational transparency & team standards  │
├────────────────────────────────────────────────────────────────────────┤
│ 3. The Capability Engine (Slides 10–18)                                │
│    - ServicesDividerSlide: Clear chapter transition                    │
│    - TechStackSlide: Production toolchains, libraries, cloud tiers     │
│    - TalentPyramidSlide: Top 1% vetting filter and recruitment funnel  │
├────────────────────────────────────────────────────────────────────────┤
│ 4. Verifiable Proof & Showcase (Slides 19–25)                          │
│    - BeforeAfterShowcaseSlide: Interactive visual evidence cards       │
│    - AttoSerpProofSlide: Hard business metrics & SERP rankings         │
│    - TestimonialsSlideGorgeous: High-credibility client endorsements   │
├────────────────────────────────────────────────────────────────────────┤
│ 5. Financial & Competitive Advantage (Slides 26–30)                    │
│    - CostComparisonSlide: Transparent regional benchmark pricing       │
│    - LoseVsInvestSlide: Opportunity cost vs ROI matrix                 │
├────────────────────────────────────────────────────────────────────────┤
│ 6. Actionable Close (Slides 31–35)                                     │
│    - NextStepsSlide: 30-day onboarding sprint roadmap                  │
│    - ContactSlide: Direct executive contact, calendar links, QR cues   │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Typographic System & Hierarchy
Global PPT establishes strict typographic pairing between a characterful heading font and an ultra-readable geometric sans-serif:

- **Primary Heading Font:** `'Ubuntu', sans-serif`
  - *Weights:* Bold (700), Medium (500).
  - *Characteristics:* Rounded geometry with human warmth. Headings frequently leverage `fontStyle: "italic"` to deliver distinctive editorial dynamism.
- **Body & Interface Font:** `'Poppins', sans-serif`
  - *Weights:* Regular (400), Medium (500), SemiBold (600), Bold (700).
  - *Characteristics:* Open geometric apertures, high x-height, and exceptional readability on projected displays.

### Typography Scale (in 1920×1080 Reference Canvas)

| Level | Size (px) | Weight | Line Height | Font Family | Usage |
|:---|:---|:---|:---|:---|:---|
| **Display Hero** | 104–124 | 700 Italic | 1.02 | Ubuntu | Main name hero (`Alim Ul Karim`), core hook |
| **Slide Title (H1)** | 72–76 | 700 Italic | 1.05 | Ubuntu | Slide main topic title |
| **Subtitle / Section** | 36–38 | 600 Bold | 1.25 | Ubuntu / Poppins | Role title, category header |
| **Kicker / Pill Badge** | 13–16 | 700 Uppercase | 1.00 | Poppins | Chapter indicator, status tags |
| **Large Lead Paragraph** | 24–28 | 400 Regular | 1.60 | Poppins | Executive summary teaser |
| **Body Copy** | 18–21 | 400 Regular | 1.65 | Poppins | General explanatory sentences |
| **Metric Figure** | 48–64 | 700 Bold | 1.00 | Ubuntu | Data statistics (`60%`, `Top 1%`) |
| **Caption / Note** | 13–15 | 500 Medium | 1.40 | Poppins | Disclaimers, photo citations |

---

## 4. Key Slide Architectural Patterns

### 4.1 Section Divider Slides (`ServicesDividerSlide.tsx`, `TeamDividerSlide.tsx`)
Section dividers create rhythm and signal cognitive shifts:
- **Layout:** Centered or asymmetric bold typography with an oversized ambient background watermark (e.g. `opacity: 0.04`, font size `320px`).
- **Accent Line:** An accent colored bar (`width: 120px`, `height: 4px`, `borderRadius: 999px`) placed directly below or above the section label.
- **Index Tag:** Numeric indicator (`03 / 06`) rendered in subtle muted text (`hsl(var(--pres-text-muted))`) positioned in the upper margin.

### 4.2 Talent Funnel & Pyramid Slide (`TalentPyramidSlide.tsx`)
Visualizes organizational quality and selective recruitment:
- **Geometry:** 4-tier or 5-tier horizontal trapezoid stack or stepped tiered cards.
- **Top Tier:** Accent-highlighted badge representing the final 1% candidate pool.
- **Data Callouts:** Side-anchored metric annotations detailing screening stages:
  1. *Resume Ingestion:* 1,000+ candidates.
  2. *Algorithmic Coding Assessment:* Top 20%.
  3. *Live Architectural Interview:* Top 5%.
  4. *Final Executive Offer:* Top 1%.

### 4.3 Interactive Showcase & Proof Cards (`OurWorkShowcaseSlide.tsx`)
Presents tangible portfolio deliverables:
- **Card Shell:** Glassmorphic card containers (`background: hsl(var(--pres-bg-card) / 0.7)`, `border: 1px solid hsl(var(--pres-accent) / 0.2)`).
- **Embedded Browser Mockup:** 3-dot window chrome header (`red`, `yellow`, `green` dots) wrapping a full-height interactive iframe or high-resolution screenshot with automatic vertical pan preview.
- **Metadata Badges:** Stack tags (`React`, `FastAPI`, `TailwindCSS`, `PostgreSQL`) and live production link pill buttons.

### 4.4 Closing & Executive Contact Slide (`ContactSlide.tsx`)
- **Dual Column Split:**
  - *Left Column:* Direct founder message, personal guarantee quote, and office headquarters location badge.
  - *Right Column:* High-contrast booking card containing direct calendar link (`cal.com/riseup-asia`), email link, phone, and a high-resolution QR code configured for mobile camera scanning.
