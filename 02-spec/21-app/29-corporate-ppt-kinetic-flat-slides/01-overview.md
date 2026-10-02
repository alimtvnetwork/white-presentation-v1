# 01-Overview: Global PPT Synthesis, Kinetic Flat Slide Progression & 15 Enterprise Slide Archetypes

> **Specification Identifier:** `02-spec/21-app/29-corporate-ppt-kinetic-flat-slides/01-overview`  
> **Status:** `APPROVED CANONICAL ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.3.0`  
> **Author:** Spec Author 01  
> **Created:** 2026-10-02  
> **Domain:** Presentation Engine Architecture, Global PPT & Flat Slide Progression Synthesis  

---

## 1. User Request (Verbatim)

```text
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

learn /learn if you have to learn something and /plan stuff before working please./plan
```

---

## 2. Executive Storytelling Arc & Architectural Vision

The **White Presentation Engine** defines an industry-grade standard for browser-native corporate presentations by unifying two disparate paradigms:
1. **Global PPT Institutional Authority (`global-ppt-v1`):** Bilateral corporate layouts, executive visual hierarchy, 10 calibrated HSL color themes, mathematical contrast ratios, and boardroom credibility.
2. **Flat Slide Show Kinetic Step Progression (`flat-slide-show`):** Intra-slide micro-stages, 3-phase kinetic item lifecycles (`completed`, `active`, `future` with optical blur), spring-eased detail panels, active halos, and zero-reload DOM persistence.

Legacy corporate presentation platforms suffer from a fundamental failure mode: they treat slides as static 2D posters or rasterized graphic collages. When text is flattened into images, presenters lose copy-paste agility, screen readers fail WCAG compliance, AI agents cannot parse slide semantics, and real-time intra-slide step choreographies become impossible.

The White Presentation Engine solves this through a pure live DOM architecture anchored to a sovereign $1920 \times 1080$ virtual canvas. Every slide archetype functions as an interactive reactive micro-stage with continuous step choreography, ensuring that complex multi-tier ideas are delivered with clarity and control.

```
+---------------------------------------------------------------------------------------------------+
|                        WHITE PRESENTATION SYNTHESIS ARCHITECTURE                                  |
+---------------------------------------------------------------------------------------------------+
|  [Global PPT Authority]        --> 10 HSL Master Palettes, Fixed Dark HUD, Micro-Shadows         |
|  [Flat Slide Progression]      --> 3-Phase Item Lifecycle (Completed, Active, Future 1.25px Blur)|
|  [15 Enterprise Archetypes]    --> Zero Phantom Steps; All 15 Archetypes Consume activeStep       |
|  [Archetype 17 Timeline Rail]  --> Continuous Horizontal SVG Rail + TimelineRailNode Beacon       |
|  [Design System & Guidelines]  --> 60/30/10 Balance, 4-Plane Depth, Positive Booleans, <=100 Lines|
+---------------------------------------------------------------------------------------------------+
```

---

## 3. The 5 Core Pillars

### Pillar 1: Global PPT Color Themes & Dynamic Micro-Shadows

#### 10 Calibrated HSL Master Palettes
The system incorporates 10 calibrated color themes defined in `src/themes/gradientTokens.ts`. Each theme specifies exact HSL triplets, 10-step gradient stop ramps (`stops[0..9]`), luminance values, and WCAG AA/AAA contrast ratios:

| # | Theme Identifier | Name | Canvas Background | Accent Color | Accent HSL | Mode | Target Mood & Corporate Context |
|:---:|:---|:---|:---:|:---:|:---:|:---:|:---|
| **01** | `white-brand` | Pure White (Clean Editorial) | `#FFFFFF` | `#7C3AED` | `262 83% 58%` | Light | Clean corporate white paper, violet brand authority, high print fidelity. |
| **02** | `paper-editorial` | Paper Editorial (Archival Cream) | `#F5F0E6` | `#1D4ED8` | `224 76% 48%` | Light | Classical warm cream, navy ink typography, institutional research reports. |
| **03** | `true-dark` | True Dark (Obsidian Abyss) | `#020617` | `#6366F1` | `226 57% 64%` | Dark | Ultra-deep carbon obsidian, electric indigo luminescent accents, technical keynotes. |
| **04** | `emerald-growth` | Emerald Growth (Forest Capital) | `#022C22` | `#10B981` | `160 84% 39%` | Dark | Deep botanical emerald, vivid mint highlights, ESG and sustainability summits. |
| **05** | `wp-exam-purple` | WP Exam Purple (Sovereign Violet) | `#0F0728` | `#A855F7` | `271 91% 65%` | Dark | Deep cosmic purple, sovereign neon violet, premium product launches. |
| **06** | `midnight-luxe` | Midnight Luxe (Executive Slate) | `#0B192C` | `#008DDA` | `201 100% 43%` | Dark | Deep maritime navy slate, cyan accent beams, enterprise IT infrastructure. |
| **07** | `sunset-horizon` | Sunset Horizon (Warm Ember) | `#1A0B0B` | `#F97316` | `25 95% 53%` | Dark | Smoked obsidian, radiant amber and coral embers, venture capital pitches. |
| **08** | `cyber-neon` | Cyber Neon (Matrix Terminal) | `#050505` | `#06B6D4` | `189 94% 43%` | Dark | Pure OLED black, radioactive cyan and lime accents, security briefings. |
| **09** | `crimson-executive`| Crimson Executive (Ruby Authority) | `#18080C` | `#E11D48` | `347 77% 50%` | Dark | Deep wine obsidian, vivid ruby red, crisis management and board governance. |
| **10** | `nord-frost` | Nord Frost (Arctic Precision) | `#0E1726` | `#38BDF8` | `199 89% 48%` | Dark | Glacial navy slate, arctic sky blue, developer tools and cloud engineering. |

#### Permanent Dark Chrome HUD Isolation
To eliminate visual jarring, washed-out icons, and unreadable controls during live presentation delivery, the **Presenter Navigation HUD** (`src/components/navigation/PresenterControls.tsx` and docked controls) is permanently decoupled from slide canvas theme inversion:
- **Permanent Obsidian Surface:** The HUD chrome retains an invariant dark glassmorphic container:
  ```css
  background: rgba(15, 23, 42, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(20px);
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.65);
  color: #F8FAFC;
  ```
- **Light Theme Capsule Inversion:** When a light theme (`white-brand`, `paper-editorial`) is active on the canvas, internal slide pill badges, kicker capsules, and active tag chips invert their borders and typography to deep navy/charcoal ink (`#0F172A` / `#1A1A1A`) with subtle 8% tint backgrounds, ensuring sharp, crisp legibility against light backgrounds.

#### Luminance-Driven Dynamic Micro-Shadows
Slide card depth is computed mathematically based on theme background luminance:
- **Dark Mode Palettes (`isDark === true`):**
  ```css
  box-shadow: 0 16px 36px -8px rgba(0, 0, 0, 0.55), 0 0 1px 1px rgba(255, 255, 255, 0.05);
  ```
- **Light Mode Palettes (`isDark === false`):**
  ```css
  box-shadow: 0 12px 32px -6px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(15, 23, 42, 0.05);
  ```

#### WebAudio Synthesizer Cues
The audio engine (`src/audio/soundEngine.ts`) utilizes WebAudio API synthesis to provide tactile acoustic confirmation:
- `stepAdvance`: 440 Hz to 880 Hz positive exponential frequency ramp (duration: 48ms, gain: 0.12).
- `stepRewind`: 660 Hz to 330 Hz gentle down-ramp (duration: 40ms, gain: 0.08).
- `slideWhoosh`: Filtered white noise envelope with resonant low-pass sweep (duration: 180ms, gain: 0.15).
- Global acoustic mute toggle persists state in `deckStore.isSoundEnabled`.

---

### Pillar 2: Flat Slide Show Step Progression (3-Phase Kinetic Lifecycle)

Slides are dynamic micro-stages. Rather than flipping full slides abruptly, content within a slide unfolds sequentially across a 3-phase kinetic lifecycle driven by `activeStep` (0-indexed):

```
+---------------------------------------------------------------------------------------------------+
|                        3-PHASE KINETIC STEP PROGRESSION LIFECYCLE                                 |
+---------------------------------------------------------------------------------------------------+
|  [PHASE 1: COMPLETED (PAST)]   --> Opacity 0.75 | Scale 1.00 | Verified checkmark | Stable border |
|  [PHASE 2: ACTIVE (FOCUSED)]   --> Opacity 1.00 | Scale 1.02 | Glowing halo ring  | Elevated z-20 |
|  [PHASE 3: FUTURE (UPCOMING)]  --> Opacity 0.40 | Scale 0.98 | Dimmed text        | 1.25px BLUR   |
+---------------------------------------------------------------------------------------------------+
```

#### Detailed Phase Specifications

1. **Phase 1: `completed` (Past Step, `itemIndex < activeStep`):**
   - **Opacity:** `0.75`
   - **Scale:** `1.00`
   - **Visual Semantics:** Verified historical record. Displays a subtle positive checkmark badge (`CheckCircle2`), stable desaturated border (`rgba(255,255,255,0.15)` on dark, `rgba(15,23,42,0.12)` on light), and retains full typographic legibility without stealing executive focus.
2. **Phase 2: `active` (Current Focal Step, `itemIndex === activeStep`):**
   - **Opacity:** `1.00`
   - **Scale:** `1.02`
   - **Spatial Elevation:** Elevated to Plane 2 (`z-index: 20`).
   - **Active Halo:** Outer illuminated glow ring:
     ```typescript
     boxShadow: `0 0 0 1px ${theme.accentColor}50, 0 0 24px -2px ${theme.accentColor}50, 0 16px 36px -8px rgba(0,0,0,0.5)`
     ```
   - **Spring Physics:** Physics-based spring animation using damped harmonic oscillator:
     - Stiffness ($k$): `420 N/m`
     - Damping Ratio ($\zeta$): `0.85`
     - Mass ($m$): `0.8 kg`
     - CSS Transition: `all 0.4s cubic-bezier(0.22, 1, 0.36, 1)`
3. **Phase 3: `future` (Upcoming Step, `itemIndex > activeStep`):**
   - **Opacity:** `0.40`
   - **Scale:** `0.98`
   - **Optical Depth-of-Field Blur:** **`filter: blur(1.25px)`**.
   - **Visual Semantics:** Ghosted anticipation. The subtle $1.25\text{px}$ blur prevents attendees from reading ahead, eliminating cognitive competition with the speaker's active point while maintaining structural layout stability.

---

### Pillar 3: 15 Enterprise Slide Archetypes with Real Intra-Slide Steps

#### Elimination of Phantom Steps
In legacy systems, 9 of the 15 enterprise slide components returned `0` or `1` from step counting functions, producing "phantom steps" where keyboard navigation skipped slides unexpectedly or left slides inert. 

Under this architecture, every single enterprise slide archetype computes its authentic step count formula directly from its data arrays, registered centrally in `deckStore.ts`:

```typescript
// Central Step Registration in deckStore.ts
const getEnterpriseSlideSteps = (slide: SlideData): number => {
  switch (slide.type) {
    case 'executive-summary':
      return Array.isArray(slide.strategicPillars) ? slide.strategicPillars.length : 1;
    case 'system-architecture-flow':
      return Array.isArray(slide.layers) ? slide.layers.length : 1;
    case 'roi-metric-calculator':
      return Array.isArray(slide.calculatedMetrics) ? slide.calculatedMetrics.length : 1;
    case 'customer-journey-map':
      return Array.isArray(slide.phases) ? slide.phases.length : 1;
    case 'matrix-comparison-grid':
      return Array.isArray(slide.features) ? slide.features.length : 1;
    case 'tech-stack-grid':
      return Array.isArray(slide.stackPillars) ? slide.stackPillars.length : 1;
    case 'team-hierarchy-org':
      return Array.isArray(slide.departments) ? slide.departments.length : 1;
    case 'security-compliance-matrix':
      return Array.isArray(slide.certifications) ? slide.certifications.length : 1;
    case 'product-roadmap-timeline':
      return Array.isArray(slide.milestones) ? slide.milestones.length : 1;
    case 'interactive-faq-flow':
      return Array.isArray(slide.faqItems) ? slide.faqItems.length : 1;
    case 'key-metric-scorecard':
      return Array.isArray(slide.scorecards) ? slide.scorecards.length : 1;
    case 'case-study-impact':
      return Array.isArray(slide.quantifiedResults) ? slide.quantifiedResults.length : 3;
    case 'dual-column-pros-cons':
      return Math.max(
        Array.isArray(slide.pros) ? slide.pros.length : 0,
        Array.isArray(slide.cons) ? slide.cons.length : 0,
        1
      );
    case 'interactive-code-playground':
      return 3; // Step 0: Formulation, Step 1: Typecheck, Step 2: Runtime Execution
    case 'closing-cta-showcase':
      return 2; // Step 0: Strategic CTA, Step 1: Booking & QR Scanner
    case 'timeline-rail':
      return Array.isArray(slide.railNodes) ? slide.railNodes.length : 1;
    default:
      return 1;
  }
};
```

#### Master Roster of 15 Enterprise Slide Archetypes

| # | Type Identifier | Component Name | Semantic Role & Business Context | Step Count Formula | Active Step Element |
|:---:|:---|:---|:---|:---:|:---|
| **01** | `executive-summary` | `ExecutiveSummarySlide` | Strategic transformation briefing for board and C-suite | `pillars.length` | Active pillar card halo + takeaway quote reveal |
| **02** | `system-architecture-flow` | `SystemArchitectureFlowSlide` | Distributed cloud topology, microservice layers | `layers.length` | Active tier illumination + animated SVG data packet |
| **03** | `roi-metric-calculator` | `RoiMetricCalculatorSlide` | Financial return model, capital yield, payback gauge | `metrics.length` | Active metric card + dynamic payback gauge angle |
| **04** | `customer-journey-map` | `CustomerJourneyMapSlide` | 5-stage lifecycle rail + sentiment curve & friction | `phases.length` | Active touchpoint node + sentiment curve marker |
| **05** | `matrix-comparison-grid` | `MatrixComparisonGridSlide` | Multi-vendor feature matrix with sovereign highlighted col | `features.length` | Active feature row highlight + differentiator check |
| **06** | `tech-stack-grid` | `TechStackGridSlide` | Tiered tech stack layers (Client, API, Services, DB) | `pillars.length` | Active stack pillar card + expanded verified chips |
| **07** | `team-hierarchy-org` | `TeamHierarchyOrgSlide` | Executive reporting org chart with SVG connector lines | `depts.length` | Active department branch + member chip illumination |
| **08** | `security-compliance-matrix`| `SecurityComplianceMatrixSlide`| Regulatory posture (SOC2, ISO, HIPAA, GDPR, FedRAMP) | `certs.length` | Active certification card + audit controls checklist |
| **09** | `product-roadmap-timeline` | `ProductRoadmapTimelineSlide` | Multi-quarter strategic roadmap across parallel lanes | `milestones.length` | Active quarter card + sprint milestone checkmarks |
| **10** | `interactive-faq-flow` | `InteractiveFaqFlowSlide` | Executive FAQ hub with deep expandable answers | `faqs.length` | Active accordion expander + code snippet callout |
| **11** | `key-metric-scorecard` | `KeyMetricScorecardSlide` | 4-quadrant executive KPI cards + trend pills | `scorecards.length`| Active quadrant card + sparkline beam animation |
| **12** | `case-study-impact` | `CaseStudyImpactSlide` | Client transformation story (Challenge, Solution, Yield)| `results.length` | Active phase card + quantified result counter |
| **13** | `dual-column-pros-cons` | `DualColumnProsConsSlide` | Bilateral trade-off analysis (Build vs Buy) | `max(pros, cons)` | Pairwise pro vs con row reveal + impact badge |
| **14** | `interactive-code-playground`| `InteractiveCodePlaygroundSlide`| Split-pane syntax-highlighted editor + execution drawer| `3` | Step 0: Formulation -> Step 1: Type -> Step 2: Logs |
| **15** | `closing-cta-showcase` | `ClosingCtaShowcaseSlide` | High-authority conclusion, dual action buttons, QR code | `2` | Step 0: Primary CTA -> Step 1: Calendar & QR Stamp |

---

### Pillar 4: Missing Archetype Addition (Archetype 17: `TimelineRailSlide`)

#### Architectural Rationale
While `product-roadmap-timeline` handles quarterly grid layouts, executive briefings frequently require a **continuous linear rail** displaying micro-milestones, sprint delivery gates, or multi-year enterprise transformation chronologies. 

Archetype 17 (`timeline-rail`) introduces a high-density, horizontal vector rail with live SVG path interpolation, beacon nodes, and sub-second intra-slide progression.

```
+---------------------------------------------------------------------------------------------------+
|                            ARCHETYPE 17: TIMELINE RAIL WIREFRAME                                  |
+---------------------------------------------------------------------------------------------------+
|  [KICKER: STRATEGIC DELIVERY RAIL]                                          [CORPORATE LOGO]      |
|  [H1: Sovereign Architecture Delivery Milestones]                                                |
|  [Subtitle: Multi-phase infrastructure rollout and global data fabric deployment]                 |
|                                                                                                   |
|  =====================(SVG PROGRESS TRACK: 1640px)=============================================  |
|      [O] Node 1 -------- [O] Node 2 -------- [*] Active Node 3 ------- ( ) Node 4 ------- ( )     |
|   (Completed)         (Completed)             (ACTIVE HALO)           (1.25px Blur)    (1.25px)   |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | ACTIVE STAGE DETAIL PANE (Spring Physics: k=420, zeta=0.85)                                 |  |
|  | Milestone 03: Global Event Fabric & Multi-Region Synchronization                              |  |
|  | Deliverables: [x] Apache Kafka Cluster  [x] Cross-region failover  [ ] Edge caching           |  |
|  | Target Completion: Q3 2026 | SLA: 99.999% | Owner: Core Infrastructure Team                   |  |
|  +---------------------------------------------------------------------------------------------+  |
+---------------------------------------------------------------------------------------------------+
```

#### Grounded Sub-Component Decomposition
To strictly satisfy the $\le 100$ line component cap, `TimelineRailSlide` is decomposed into two clean modules:
1. `src/components/slides/TimelineRailSlide.tsx` ($\le 95$ lines): Main slide wrapper, header, canvas background, dynamic SVG track rendering, and active step orchestration.
2. `src/components/slides/rail/TimelineRailNode.tsx` ($\le 85$ lines): Individual beacon node renderer with 3-phase kinetic styling, halo ring, date badge, deliverable pills, and click-to-jump trigger.

---

### Pillar 5: Coding Guidelines & UI Design System Compliance

#### 1. The 60/30/10 Visual Balance Rule
Visual hierarchy is mathematically budgeted across the canvas:
- **60% Dominant Background (`--pres-canvas-bg`):** Calming negative space preventing sensory overload.
- **30% Structural Foreground (`--pres-card-bg`, `--pres-card-border`):** Frosted glass bento cards (`backdrop-blur-md`), dividing borders, secondary metadata.
- **10% High-Energy Accent (`--pres-accent`):** Strictly rationed for active halos, metric digits, and primary action CTAs, enforcing the **Von Restorff isolation effect**.

#### 2. The 4-Plane Depth Hierarchy
- **Plane 0: Canvas Base (`z-0`):** Canvas surface, dot-matrix pattern (`opacity: 0.05`), radial light wash.
- **Plane 1: Structural Grid (`z-10`):** Inactive stage cards, baseline bento containers, connector rails.
- **Plane 2: Elevated Focus (`z-20`):** Active step cards, expanded accordions, selected comparison columns (`scale(1.02)`).
- **Plane 3: Ambient Overlays & HUD (`z-30`):** Pulsing halo rings, traveling SVG packets, permanent dark Presenter HUD controls.

#### 3. Positive Booleans Only
All schema contracts, component state, and store selectors strictly enforce positive boolean naming conventions:
- **Permitted Prefixes:** `is*`, `has*`, `can*`, `should*` (e.g., `isCompleted`, `isActive`, `hasAccent`, `isVerified`).
- **Prohibited Negations:** Zero negative boolean indicators (e.g., `isNotActive`, `disabled`, `hidden`, `unverified`).
- **Zero Explicit Boolean Comparisons:** Forbidden: `if (foo === true)` or `if (bar == false)`. Required: `if (foo)` or `if (isBooleanFalse(bar))`.
- **Boolean Guard Remediation:** All raw boolean negations (`!is*`, `!has*`) are wrapped via `src/utils/booleanGuards.ts` (`isBooleanFalse(val)`).

#### 4. Component Sizing Ceiling ($\le 100$ Lines per `.tsx`)
Every React component file must remain at or below 100 physical lines of code. Any component exceeding 100 lines must be decomposed into sub-components under dedicated subdirectories (e.g., `src/components/slides/rail/`, `src/components/slides/architecture/`).

#### 5. Canonical Persona Title
In all slide mockups, persona fixtures, and enterprise team hierarchies, the canonical executive persona for **Alim Ul Karim** must be titled strictly:  
**`Chief Software Engineer`**  
*(Never "Founder", "CEO", "Lead Architect", or "Full Stack Developer").*

#### 6. Pure Live DOM Typography Mandate
All headlines, kicker pill badges, narrative paragraphs, KPI figures, table cells, and code blocks must render as live, selectable, semantic HTML DOM elements. Under no circumstance may text be rasterized into PNG, WebP, or canvas bitmaps.

---

## 4. Module Directory Structure

```
02-spec/21-app/29-corporate-ppt-kinetic-flat-slides/
├── 01-overview.md              <-- This document: Storytelling arc, 5 pillars, visual balance, coding guidelines
├── 02-data-contracts.md        <-- Grounded TypeScript contracts, coordinate budgets & activeStep formulas (1-15 + 17)
├── 03-visual-and-motion.md     <-- Owned by Spec Author 02: 10 themes, micro-shadows, spring physics & WebAudio
├── 04-verification-gates.md    <-- Owned by Spec Author 02: 12 automated verification gates & audit checklists
└── readme.md                   <-- Owned by Spec Author 02: Spec index & navigation map
```
