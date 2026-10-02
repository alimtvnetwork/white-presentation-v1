# 01-Overview: Global PPT Synthesis, Flat Slide Progression & 15 Enterprise Slide Archetypes

> **Specification Identifier:** `26-global-ppt-color-motion-and-expanded-slides/01-overview`  
> **Status:** `APPROVED ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.3.0`  
> **Author:** Spec Author 01  
> **Updated:** 2026-10-02  
> **Domain:** Presentation Engine Architecture, Global PPT & Flat Slide Progression Synthesis  

---

## 1. Executive Summary & Vision

The **White Presentation Engine** enters its next generation of enterprise maturity with the **Global PPT & Flat Slide Show Synthesis**. This architectural evolution bridges the visual gravitas, executive presence, and bilateral corporate layouts of **Global PPT** (`global-ppt-v1`) with the declarative reactivity, continuous intra-slide step progression, and physics-driven micro-interactions of **Flat Slide Show** (`flat-slide-show`).

Legacy presentation workflows force a false dichotomy between static, non-interactive corporate slide decks and chaotic web animation experiments. When presentations rely on rasterized graphics or static slides, typography is permanently baked into pixels, breaking accessibility, localization, inline live editing, and automated AI orchestration.

This specification establishes a sovereign, web-native presentation engine running natively in modern browsers with:

1. **Pure Live DOM Typography Mandate:** Every headline, kicker, narrative paragraph, KPI digit, table cell, and footnote is rendered directly as selectable, accessible HTML elements. Rasterized typography is strictly prohibited.
2. **Canonical 16:9 1920x1080 Responsive Viewport Canvas:** A deterministic $1920 \times 1080$ virtual canvas layout with GPU-accelerated viewport scaling, eliminating fractional coordinate rounding errors across 1080p, 2K, 4K, and mobile screens.
3. **The 60/30/10 Visual Balance Rule & 4-Plane Depth Hierarchy:** A disciplined visual balance framework dividing the canvas into 60% dominant background, 30% structural hierarchy, and 10% high-energy accent, organized across 4 distinct spatial z-planes.
4. **Fluid Mathematical Typography Scale:** Strict typographic sizing anchored to the 1080p canvas using Ubuntu (bold, italic corporate authority) and Poppins (geometric clarity and readability).
5. **Intra-Slide Step Progression Engine:** Dynamic stage progression (`activeStep`, `maxSteps`) within individual slides, driving spring physics transitions (`stiffness: 420, damping: 17, mass: 0.8`), active halos, and animated SVG connectors.
6. **Master Index of 15 New Enterprise Slide Archetypes:** A comprehensive catalog of 15 specialized production archetypes covering market tension, differentiation, chapter transition, financial ROI, onboarding roadmaps, executive contact, SaaS pricing, and interactive diagnostics.

---

## 2. User Request (Verbatim)

```text
is it really?

is it done properly tested and released?


# High Priority Instruction

Okay. So in the work presentation, you have a lot of things, a lot of customization, a lot of factors are missing from, let's say, global PPT, how the color themes, animation goes. You didn't, let's say, adapt much. Also, you can look into the coding guideline properly. There is a new design systems, those are added. I request you to understand those, try to update your spec regarding the new design concepts and see how you can improve and add more slides. I've been asking. So you should look into the flat slide, global PPT, step-by-step slide. You should do all these things, and probably you should try to improve at least, let's say, 15 slides, new 15 types of slides, try to improve in your system. Okay? That's the first thing you should work on. Go deep, point deep, and then

# Actionable Items Must Follow Non-Negotiable

1. Review and adapt the global PPT color themes and animations.
2. Examine and adhere to the new coding guidelines and design systems.
3. Update your specifications with the new design concepts.
4. Improve and add at least 15 new types of slides.
5. Analyze flat slides and step-by-step slides for improvements.

Must follow and spawn agent using 

@[.agents/skills/execute-parent-task-with-n-steps-v6]

## Additional Instructions

learn /learn if you have to learn something and /plan stuff before working please.
```

---

## 3. The 60/30/10 Visual Balance Rule & 4-Plane Depth Hierarchy

The visual architecture adheres to strict mathematical visual distribution and multi-layer spatial depth, ensuring calm executive authority without visual clutter.

```
+---------------------------------------------------------------------------------------------------+
|                         60/30/10 VISUAL BALANCE & 4-PLANE DEPTH SYSTEM                            |
+---------------------------------------------------------------------------------------------------+
|  [60% DOMINANT CANVAS]  --> Base background fill (--pres-canvas-bg), quiet negative space         |
|  [30% STRUCTURAL LAYER] --> Cards, bento borders, typography, tables (--pres-card-bg, border)     |
|  [10% ACCENT HIGHLIGHT] --> Von Restorff accent isolation (--pres-accent, halos, pills, key digits) |
+---------------------------------------------------------------------------------------------------+
|  [Plane 0: Canvas Base]        z-index: 0   | Canvas surface, dot-matrix grid, radial wash        |
|  [Plane 1: Structural Grid]    z-index: 10  | Frosted glass cards, bento cells, background watermark|
|  [Plane 2: Elevated Focus]     z-index: 20  | Active cards, expanded panes, interactive callouts    |
|  [Plane 3: Ambient Overlays]   z-index: 30  | Springing halos, pulse indicators, HUD chrome controls |
+---------------------------------------------------------------------------------------------------+
```

### 3.1 The 60/30/10 Visual Balance Rule

1. **60% Dominant Canvas Ground (Negative Space):**
   - The presentation canvas background (`--pres-canvas-bg`) and generous negative margins occupy approximately 60% of the visual field.
   - Provides visual breathing room, allowing cognitive focus on core strategic data without sensory exhaustion.
   - Supports both dark modes (`#0B0B0E`, `#020617`, `#0B192C`) and archival light modes (`#FFFFFF`, `#F5F0E6`).

2. **30% Structural Foreground & Information Hierarchy:**
   - Card surfaces (`--pres-card-bg`), bento container borders (`--pres-card-border`), secondary descriptive typography (`--pres-text-secondary`), and tabular dividing lines occupy approximately 30% of the visual space.
   - Organizes content into scannable chunks, clear reading rails, and bilateral comparative columns.

3. **10% High-Energy Accent (Von Restorff Isolation Effect):**
   - High-contrast brand accents (`--pres-accent`), glowing pill badges, active node halos, gradient character highlights, and positive verification icons are strictly limited to roughly 10% of the canvas surface area.
   - Enforces the **Von Restorff isolation effect**: because accent color is strictly rationed, high-priority milestones, key metric figures, and active interactive steps stand out immediately to executive viewers.

### 3.2 The 4-Plane Depth Hierarchy

Each slide is engineered as a multi-planar 3D compositional stage:

| Depth Plane | Z-Index | Physical Layer | Visual Role & Rendering Properties |
|:---|:---:|:---|:---|
| **Plane 0: Canvas Base** | `z-0` | Canvas Surface | Solid canvas color (`var(--pres-canvas-bg)`), subtle ambient radial gradient spotlight (`circle at 50% 0%`), and low-contrast dot-matrix alignment grid (`opacity: 0.05`). |
| **Plane 1: Structural Containers** | `z-10` | Bento Cards & Watermarks | Translucent frosted glass card containers (`backdrop-blur-md`, `border: 1px solid var(--pres-card-border)`), oversized ambient numeric watermarks (`opacity: 0.04`), and inactive progress rails. |
| **Plane 2: Interactive Focus** | `z-20` | Active Elements & Panes | Active step cards, expanded detail panes (`StepDetailPane`), interactive option cards, elevated pricing columns ($1.04\times$ scale), and callout popovers with subtle directional drop-shadows. |
| **Plane 3: Ambient Overlays** | `z-30` | Kinetic Chrome & Halos | Springing active node halos (`[320, 30]`), traveling SVG connector stroke pulses, interactive HUD controls, slide index indicators, and floating presenter status badges. |

---

## 4. Fluid Typography Scale Anchored to 1920x1080 Canvas

All typography is strictly calibrated to the canonical $1920 \times 1080$ coordinate space. The typographic hierarchy pairs **Ubuntu** (for expressive, high-authority headlines and numbers) with **Poppins** (for clean geometric legibility in cards, body copy, and metadata).

```
+---------------------------------------------------------------------------------------------------+
|                           CANONICAL FLUID TYPOGRAPHY SCALE (1920x1080)                            |
+---------------------------------------------------------------------------------------------------+
| Display Hero Title    | 104px - 124px | Ubuntu Bold Italic     | Leading: 1.02 | Tracking: -0.03em |
| Slide Headline (H1)   | 64px - 76px   | Ubuntu Bold Italic     | Leading: 1.05 | Tracking: -0.02em |
| Section Header (H2)   | 36px - 44px   | Ubuntu Bold / Poppins  | Leading: 1.20 | Tracking: -0.01em |
| Card Subhead (H3)     | 22px - 28px   | Poppins SemiBold       | Leading: 1.30 | Tracking: normal  |
| Large Lead Paragraph  | 22px - 26px   | Poppins Regular        | Leading: 1.50 | Tracking: normal  |
| Standard Body Copy    | 16px - 18px   | Poppins Regular        | Leading: 1.60 | Tracking: normal  |
| Micro Kicker / Badge  | 12px - 14px   | Poppins Bold / Mono    | Leading: 1.00 | Tracking: +0.15em |
| Monumental Metric     | 54px - 72px   | Ubuntu Bold            | Leading: 1.00 | Tracking: -0.02em |
| Footnote & Caption    | 12px - 14px   | Poppins Medium         | Leading: 1.40 | Tracking: normal  |
+---------------------------------------------------------------------------------------------------+
```

### Exact Typographic Specifications

| Typographic Level | Font Family | Size (px) | Weight | Line Height | Letter Spacing | Contextual Usage |
|:---|:---|:---:|:---:|:---:|:---:|:---|
| **Display Hero** | `'Ubuntu', sans-serif` | 104–124 | 700 (Bold) Italic | 1.02 | `-0.03em` | Massive hook headlines, executive name heroes (`Alim Ul Karim`), USP strike statements |
| **Slide Title (H1)** | `'Ubuntu', sans-serif` | 64–76 | 700 (Bold) Italic | 1.05 | `-0.02em` | Primary slide title positioned in header zone (`left: 120px` to `140px`, `top: 90px` to `110px`) |
| **Section Header (H2)** | `'Ubuntu', sans-serif` | 36–44 | 700 (Bold) | 1.20 | `-0.01em` | Chapter transition titles, column headers, quadrant titles |
| **Card Subhead (H3)** | `'Poppins', sans-serif` | 22–28 | 600 (SemiBold) | 1.30 | `0.00em` | Bento card titles, pricing tier names, milestone titles |
| **Large Lead Paragraph** | `'Poppins', sans-serif` | 22–26 | 400 (Regular) | 1.50 | `0.00em` | Executive narrative lead paragraph, chapter preamble |
| **Standard Body Copy** | `'Poppins', sans-serif` | 16–18 | 400 (Regular) | 1.60 | `0.00em` | Explanatory sentences, bullet lists, FAQ answers, step detail descriptions |
| **Micro Kicker / Badge** | `'Poppins', sans-serif` | 12–14 | 700 (Bold) | 1.00 | `+0.15em` | Uppercase category pills, chapter indicators, stage indicators |
| **Monumental Metric** | `'Ubuntu', sans-serif` | 54–72 | 700 (Bold) | 1.00 | `-0.02em` | Large KPI figures (`$4.2T`, `99.99%`, `Top 1%`, `3.8x`), ROI multipliers |
| **Footnote & Caption** | `'Poppins', sans-serif` | 12–14 | 500 (Medium) | 1.40 | `0.00em` | Data citations, methodology notes, terms of service disclaimers |

---

## 5. Master Index of the 15 New Enterprise Slide Archetypes

Synthesized from the structural rigor of Global PPT and the step-by-step dynamism of Flat Slide Show, the system specifies 15 enterprise slide archetypes:

```
+---------------------------------------------------------------------------------------------------+
|                        MASTER INDEX: 15 NEW ENTERPRISE SLIDE ARCHETYPES                           |
+---------------------------------------------------------------------------------------------------+
|  [01] authenticity-hook  --> Narrative hook: market tension, reality gap, and quantified problem  |
|  [02] avoid-commodity    --> Contrast matrix: commodity trap vs sovereign enterprise custom build |
|  [03] chapter-divider    --> Monumental act transition with watermark numeral and topic preview    |
|  [04] lose-vs-invest     --> High-contrast commercial matrix: cost of inaction vs investment ROI  |
|  [05] next-steps-sprint  --> 30/60/90-day onboarding sprint roadmap with milestone exit criteria   |
|  [06] executive-contact  --> Alim Ul Karim executive profile, calendar booking, QR verification    |
|  [07] usp-strikethrough  --> Massive typographical differentiator with editorial strikethrough    |
|  [08] saas-pricing-tiers --> 3-tier subscription matrix with elevated recommended tier & features|
|  [09] faq-accordion      --> Technical and executive FAQ grid with interactive expand/reveal       |
|  [10] client-logo-wall   --> Symmetrical enterprise trust grid with category filters & social proof|
|  [11] swot-analysis      --> 2x2 executive strategic quadrant (Strengths, Weaknesses, Opps, Threats)|
|  [12] interactive-quiz   --> Engaging knowledge check with option cards, instant reveal, and meter |
|  [13] hardware-showcase  --> Physical device/schematic frame with interactive pulsing callout pins |
|  [14] competitor-matrix  --> Detailed capability comparison matrix with highlighted platform column|
|  [15] value-pyramid      --> Multi-tier value ladder mapping foundation to autonomous business ROI |
+---------------------------------------------------------------------------------------------------+
```

### Archetype Summary Directory

| Index | Archetype Name | Type Discriminator | Storytelling Phase | Key Narrative Function |
|:---:|:---|:---|:---|:---|
| **01** | Authenticity Hook | `authenticity-hook` | Act I: The Hook | Surfaces the industry bottleneck, reality gap, and quantified stakes. |
| **02** | Avoid Commodity | `avoid-commodity` | Act I: The Hook | Contrasts the "commodity trap" against custom sovereign engineering. |
| **03** | Chapter Divider | `chapter-divider` | Act Transition | Resets visual rhythm between major thematic presentation acts. |
| **04** | Lose vs Invest | `lose-vs-invest` | Act V: Financial ROI | Juxtaposes the compounding cost of inaction against investment returns. |
| **05** | Next Steps Sprint | `next-steps-sprint` | Act VI: Actionable Close | Outlines the initial 30/60/90-day execution sprint and milestones. |
| **06** | Executive Contact | `executive-contact` | Act VI: Actionable Close | Features Chief Software Engineer Alim Ul Karim, calendar, and QR code. |
| **07** | USP Strikethrough | `usp-strikethrough` | Act I / Act III | Memorable differentiator contrasting promises with strikethroughs. |
| **08** | SaaS Pricing Tiers | `saas-pricing-tiers` | Act V: Commercials | 3-tier subscription matrix with elevated popular package and feature checklist. |
| **09** | FAQ Accordion | `faq-accordion` | Act V: De-risking | Resolves stakeholder objections, security audits, and compliance questions. |
| **10** | Client Logo Wall | `client-logo-wall` | Act IV: Social Proof | Symmetrical grid of enterprise brand emblems, certifications, and trust badges. |
| **11** | SWOT Analysis | `swot-analysis` | Act II: Strategy | 2x2 bento quadrant balancing internal capabilities against market forces. |
| **12** | Interactive Quiz | `interactive-quiz` | Workshop / Engagement | Diagnostic knowledge test with live option selection and answer reveals. |
| **13** | Hardware Showcase | `hardware-showcase` | Act III: Product Architecture | Hardware-software appliance view with pulsing callout pins and spec drawer. |
| **14** | Competitor Matrix | `competitor-matrix` | Act IV: Advantage | Direct side-by-side capability evaluation proving platform dominance. |
| **15** | Value Pyramid | `value-pyramid` | Act II / Act III | 4-tier value ladder proving how core technical depth yields business outcomes. |

---

## 6. Architectural Invariants & Non-Negotiable Directives

All implementations adhering to this specification MUST strictly obey these six non-negotiable architectural invariants:

### 6.1 Pure DOM Text Rendering Mandate
- Under no circumstance may any typography, numeral, label, or headline be baked or rasterized into background image files.
- All textual elements are rendered as real DOM nodes (`<h1>`, `<h2>`, `<h3>`, `<p>`, `<span>`, `<code>`).
- Every textual node supports live inline editing when `isEditMode` is active.

### 6.2 Strict 100-Line Component Modularity
- Every slide archetype React component (`src/components/slides/*.tsx`) must be bounded to $\le 100$ lines of code.
- Heavy child structures (e.g. `SprintCard`, `QuadrantBox`, `TierColumn`, `CalloutPin`) must be cleanly factored into dedicated subcomponents within `src/components/slides/sub/`.

### 6.3 Positive Boolean Naming Conventions Only
- All boolean variables, props, and contract fields MUST use positive polarity prefixes (`is*`, `has*`, `can*`, `should*`).
  - Allowed: `isHighlighted`, `isCompleted`, `isActive`, `isExpanded`, `isVerified`, `isRecommended`, `hasBadge`, `hasBorder`, `hasGlow`.
  - Strictly Forbidden: `isNotActive`, `isDisabled`, `disableGlow`, `hidden`, `uncompleted`, `isNegative`.
- Strictly Forbidden equality checks: `if (foo == true)` or `if (bar == false)`. Evaluated implicitly via truthiness (`if (foo)` or `if (!bar)`).

### 6.4 Leaf-Type Segregation & Factory Isolation
- Slide data contracts and sub-interfaces must be declared in dedicated leaf modules (`src/types/archetypes.ts`) rather than polluting root configuration files.
- Slide instantiation defaults and preview mocks must be isolated in `src/utils/slideArchetypeFactories.ts`.

### 6.5 Standardized Executive Persona Mandate
- The executive persona for **Alim Ul Karim** MUST be consistently titled as **"Chief Software Engineer"**.
- Titles such as **"Founder"** or **"CEO"** are strictly forbidden across all slide contracts, templates, and UI components.

### 6.6 Zero Git Commands & Zero Intermediate Builds During Spec Phase
- AI spec author agents must not invoke any git mutation commands (`git commit`, `git push`, `git add`) or heavy test runners during specification authoring.

---

## 7. Specification Cross-References

| Specification Document | Path | Core Scope |
|:---|:---|:---|
| **Data Contracts & Wireframes** | [02-slide-archetypes-data-contracts.md](02-slide-archetypes-data-contracts.md) | Exhaustive TypeScript contracts, 1920x1080 ASCII wireframes, and JSON fixtures for all 15 archetypes |
| **Color & Motion Design System** | [03-color-and-motion-design-system.md](03-color-and-motion-design-system.md) | 10 calibrated corporate color ramps, CSS variables, spring physics, and acoustic feedback |
| **Verification & Quality Gates** | [04-verification-gates.md](04-verification-gates.md) | Strict TypeScript compiler, linter, headless rendering, and release verification gates |
| **Subtask Implementation Plan** | [.ai-memory/plans/subtasks/05-26-global-ppt-color-motion-and/01-architecture-and-archetypes.md](../../../../.ai-memory/plans/subtasks/05-26-global-ppt-color-motion-and/01-architecture-and-archetypes.md) | Step-by-step engineering roadmap for implementing types, factories, and components |
