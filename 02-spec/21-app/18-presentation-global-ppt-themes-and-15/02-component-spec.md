# 02-Component & Design System Spec: Modern Slide Archetypes, Northern Typography v1.3.3 & Quality Gates

> **Specification Identifier:** `02-spec/21-app/18-presentation-global-ppt-themes-and-15/02-component-spec.md`  
> **Status:** `APPROVED CANONICAL ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.8.0`  
> **Author:** Spec Subagent 02  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  
> **Domain:** Northern UI/UX Typography Standard (v1.3.3), 16px Minimum Clamp Enforcement, Global PPT 10 Production Themes, 10-Step Precision Color Ramps ($S_0$–$S_9$), Space-Separated HSL Triplet Tokens, Zero Yellow-on-Light Contrast Inversion, Flat Slide 1-Step Multi-Plane Bentos vs Kinetic Multi-Step Progressive Reveals, 12-Dimensional Automated Static Verification Matrix.

---

## 1. Executive Overview & Architectural Philosophy

The White Presentation System delivers enterprise-grade, high-authority keynote and boardroom presentations on a deterministic **$1920 \times 1080$ virtual canvas** (16:9 aspect ratio). This specification standardizes the visual design tokens, component architecture, kinetic motion physics, and static quality gates governing **Modern Slide Archetypes (Archetypes 31 through 45)**.

The system synthesizes two core paradigms into a single unified presentation engine:
1. **Global PPT Corporate Authority:** High-contrast typographic scale, 10 boardroom-calibrated master palettes, mathematical 10-step gradient ramps ($S_0$ to $S_9$), space-separated HSL triplet tokens, WCAG AAA accessibility compliance, and permanent dark Presenter HUD chrome.
2. **Flat Slide Kinetic Progression:** Decoupled dual-state hover previews, 3-phase intra-slide step progression (`completed`, `active`, `future`), underdamped harmonic spring physics, and high-density 1-step multi-plane bento architectures.

```
+---------------------------------------------------------------------------------------------------+
|                     WHITE PRESENTATION ENTERPRISE ARCHITECTURE                                    |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  [NORTHERN UI/UX TYPOGRAPHY v1.3.3]           [GLOBAL PPT 10 MASTER PALETTES]                     |
|  - Minimum 16px clamp for kickers & tags      - 10 Production Palettes (White, Cream, Dark, etc.)  |
|  - Pure Live DOM Typography (Zero Canvas)     - Space-Separated HSL Triplets (H S% L%)            |
|  - Subpixel Ink-Stamp Micro-Shadows           - 10-Step Precision Gradient Ramps (S0 to S9)       |
|  - Display: Ubuntu | Body: Poppins            - Zero Yellow-on-Light Contrast Inversion           |
|                                                                                                   |
|                                        ▼                                                          |
|  ┌─────────────────────────────────────────────────────────────────────────────────────────────┐  |
|  │                       MODERN SLIDE ARCHETYPES (ARCHETYPES 31 - 45)                          │  |
|  ├──────────────────────────────────────────────┬──────────────────────────────────────────────┤  |
|  │  KINETIC MULTI-STEP PROGRESSIVE REVEALS      │  FLAT SLIDE 1-STEP MULTI-PLANE BENTOS        │  |
|  │  (Archetypes 31 - 38)                        │  (Archetypes 39 - 45)                        │  |
|  │  - Step count = N (items.length)             │  - Step count = 1                            │  |
|  │  - 3-Phase Lifecycle (Past, Active, Future)  │  - 4-Plane Depth Hierarchy (Plane 0 to 3)    │  |
|  │  - Non-destructive hover preview             │  - Simultaneous cognitive landscape          │  |
|  │  - Single-item detail pane focus             │  - High information density & Merkle seals   │  |
|  └──────────────────────────────────────────────┴──────────────────────────────────────────────┘  |
|                                        │                                                          |
|                                        ▼                                                          |
|  [12-DIMENSIONAL AUTOMATED STATIC VERIFICATION MATRIX]                                            |
|  - Gate 1: Hard Rule CODE-RED-006R (<= 100 lines per .tsx component)                              |
|  - Gate 2: Rule R1 Zero Builds or Full Test Suites in routine turns                               |
|  - Gate 3: Fast File-Scoped Checks (Sub-5s npx tsc --noEmit & AST Python scanners)                |
|  - Gate 4: 100% Affirmative Positive Boolean Naming via src/utils/booleanGuards.ts               |
|  - Gate 5: Executive Persona Alim Ul Karim strictly 'Chief Software Engineer'                    |
|  - Gate 6: Pure Live DOM Typography (Zero canvas fillText/strokeText, Zero rasterized text)      |
|  - Gate 7: Active Step Progression & Zero Phantom Steps                                           |
|  - Gate 8: WCAG AAA / AA Contrast Verification (Zero Yellow-on-Light)                             |
|  - Gate 9: Secrets Quarantine & Sensitive Data Isolation                                          |
|  - Gate 10: Relative Path Linter Compliance (Zero absolute filesystem paths)                     |
|  - Gate 11: GitMap Atomic Hyphenated Commit Standards                                            |
|  - Gate 12: Canonical 1920x1080 Viewport Geometry & Coordinate Budget Conformance                 |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

---

## 2. Northern UI/UX Typography Standard (v1.3.3) & Font Size Clamps

### 2.1 Minimum 16px Clamp Mandate for Kickers and Badges

Under the **Northern UI/UX Typography Standard (v1.3.3)**, small-format metadata elements—specifically slide kickers, category tags, capsule pills, and section eyebrows—must maintain an inviolable minimum floor of **16px**.

#### Rationale for the 16px Minimum Floor:
1. **Boardroom Distance Legibility:** When presentations are projected onto 4K conference displays or viewed on ultra-wide monitors from distances $\ge 3\text{m}$, font sizes below $16\text{px}$ suffer from rapid contrast degradation and subpixel antialiasing blur.
2. **Elimination of Visual Noise:** Setting an absolute minimum of $16\text{px}$ prevents font scaling engines from shrinking kicker text to tiny, unreadable fragments on smaller preview windows.
3. **Touch & Click Target Geometry:** Capsule badges and category tags frequently double as interactive filter pills or step navigation anchors. A $16\text{px}$ font floor ensures the surrounding bounding box easily satisfies the minimum $28\text{px}$ to $32\text{px}$ interactive hit target requirement.

#### Token Specifications (`src/styles/variables.less`):
```less
// Fluid Typography Scale Tokens (Northern UI/UX Standard v1.3.3)
@type-display-hero:    clamp(40px, 4vw, 56px);
@type-display-title:   clamp(32px, 3vw, 44px);
@type-display-section: clamp(24px, 2.2vw, 32px);
@type-body-lead:       clamp(18px, 1.4vw, 22px);
@type-body-regular:    clamp(16px, 1.1vw, 18px);
@type-body-caption:    clamp(14px, 1.0vw, 16px);
@type-kicker:          clamp(16px, 1.1vw, 18px);  // Enforces 16px minimum floor
@type-category:        clamp(16px, 1.0vw, 18px);  // Enforces 16px minimum floor
```

#### Component Rule Enforcement (`src/styles/presentation.less`):
```less
// Kicker Pill Badge
.kicker-pill-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 14px;
  border-radius: @radius-full;
  font-family: var(--pres-font-display, @font-heading);
  font-size: @type-kicker; // clamp(16px, 1.1vw, 18px)
  min-height: 28px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: rgba(124, 58, 237, 0.08);
  border: 1px solid rgba(124, 58, 237, 0.25);
  color: var(--pres-accent, @color-violet);
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: scale(1.02);
    border-color: rgba(124, 58, 237, 0.50);
  }
}

// Category Tags
.category-tag,
.category-tag-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--pres-font-mono, @font-mono);
  font-size: @type-category; // clamp(16px, 1.0vw, 18px)
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--pres-text-muted);
}

// Base Capsule Badge
.capsule-base {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 14px;
  border-radius: @radius-full;
  font-family: var(--pres-font-display, @font-heading);
  font-size: clamp(16px, 1vw, 18px); // Minimum 16px clamp
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.2s ease, background-color 0.2s ease;
  user-select: none;
}

// Slide Eyebrow
.slide-eyebrow {
  font-family: var(--pres-font-display, @font-heading);
  font-size: clamp(16px, 1vw, 18px); // Minimum 16px clamp
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--pres-accent);
}
```

### 2.2 Complete Fluid Typography Scale Matrix

| Role | Token Identifier | Clamp Formula | Fallback Size | Line Height | Tracking | Recommended Font Family | Usage Scope |
|:---|:---|:---|:---:|:---:|:---:|:---|:---|
| **Display Hero** | `@type-display-hero` | `clamp(40px, 4vw, 56px)` | `48px` | `1.10` | `-0.025em` | Ubuntu (700 Bold) | Title keynote slides, hero metrics |
| **Display Title** | `@type-display-title` | `clamp(32px, 3vw, 44px)` | `36px` | `1.15` | `-0.020em` | Ubuntu (700 Bold) | Main slide titles (h1) |
| **Display Section** | `@type-display-section`| `clamp(24px, 2.2vw, 32px)`| `28px` | `1.20` | `-0.015em` | Ubuntu (600 SemiBold) | Bento card titles, modal headers |
| **Body Lead** | `@type-body-lead` | `clamp(18px, 1.4vw, 22px)`| `20px` | `1.45` | `0.000em` | Poppins (400 Regular) | Slide subtitles, executive summaries |
| **Body Regular** | `@type-body-regular` | `clamp(16px, 1.1vw, 18px)`| `16px` | `1.50` | `0.000em` | Poppins (400 Regular) | Descriptions, bento body copy |
| **Body Caption** | `@type-body-caption` | `clamp(14px, 1.0vw, 16px)`| `14px` | `1.40` | `0.010em` | Poppins (400 Regular) | Auxiliary notes, disclaimer lines |
| **Kicker** | `@type-kicker` | `clamp(16px, 1.1vw, 18px)`| `16px` | `1.00` | `0.080em` | Ubuntu (600 SemiBold) | Kicker pill badges, section tags |
| **Category** | `@type-category` | `clamp(16px, 1.0vw, 18px)`| `16px` | `1.00` | `0.080em` | JetBrains Mono (600) | Technical tags, shard IDs, status |

### 2.3 Pure Live DOM Typography Mandate

Every textual glyph across all 15 archetypes must render strictly as native HTML DOM elements (`<h1>`, `<h2>`, `<h3>`, `<p>`, `<span>`, `<code>`, `<div>`).

- ❌ **Strictly Forbidden:** Canvas 2D text calls (`ctx.fillText()`, `ctx.strokeText()`).
- ❌ **Strictly Forbidden:** Rasterized image text (PNG, JPEG, WebP containing baked-in lettering).
- ❌ **Strictly Forbidden:** Flattened SVG path text where characters cannot be highlighted, selected, or inspected via screen readers.
- ✅ **Mandatory:** Pure live DOM text ensuring multi-DPI crispness, dynamic CSS theme variable inheritance, and complete WCAG 2.2 Level AAA compliance.

### 2.4 Subpixel Mathematical Ink-Stamp Micro-Shadows

To deliver physical letterpress authority on high-DPI retina displays, headers use calibrated zero-blur subpixel micro-shadows:
```less
@text-shadow-on-dark:  rgb(0 0 0) 1px 0.7px 0px;
@text-shadow-on-light: rgb(255 255 255) 1px 0.7px 0px;
```
When rendered on dark backgrounds, the `1px 0.7px 0px` black micro-stamp sharpens edges without introducing muddy diffusion halos. In light mode, the white micro-stamp provides an engraved relief effect.

---

## 3. Global PPT 10 Production Themes, 10-Step Precision Ramps & Space-Separated HSL Tokens

### 3.1 The 10 Authentic Global PPT Master Palettes

The presentation engine defines 10 master palettes calibrated for executive keynotes, technical deep-dives, and financial reviews.

| # | Theme Identifier | Name | Canvas Bg HSL | Accent HSL | Mode | Corporate Persona & Boardroom Intent |
|:---:|:---|:---|:---:|:---:|:---:|:---|
| **01** | `white-brand` | Pure White Editorial | `0 0% 100%` | `262 83% 58%` | Light | Crisp white paper, royal violet brand authority, high print fidelity. |
| **02** | `paper-editorial` | Archival Cream | `40 33% 93%` | `224 76% 48%` | Light | Classical warm parchment, navy ink typography, institutional research. |
| **03** | `true-dark` | Obsidian Abyss | `222 78% 3%` | `239 84% 67%` | Dark | Ultra-deep carbon obsidian, luminescent indigo, mission-critical keynotes. |
| **04** | `emerald-growth` | Forest Capital | `168 84% 9%` | `160 84% 39%` | Dark | Deep botanical emerald, vivid mint highlights, ESG & sustainability summits. |
| **05** | `wp-exam-purple` | Sovereign Violet | `255 70% 9%` | `271 91% 65%` | Dark | Deep cosmic purple, sovereign neon violet, premium product unveilings. |
| **06** | `midnight-luxe` | Executive Slate | `214 60% 11%` | `201 100% 43%` | Dark | Deep maritime navy slate, cyan accent beams, enterprise IT infrastructure. |
| **07** | `sunset-horizon` | Warm Ember | `0 41% 7%` | `25 95% 53%` | Dark | Smoked obsidian, radiant amber & coral embers, venture capital pitches. |
| **08** | `cyber-neon` | Matrix Terminal | `0 0% 2%` | `189 94% 43%` | Dark | Pure OLED black, radioactive cyan & lime accents, cybersecurity briefings. |
| **09** | `crimson-executive`| Ruby Authority | `344 50% 6%` | `347 77% 50%` | Dark | Deep wine obsidian, vivid ruby red, crisis management & board governance. |
| **10** | `nord-frost` | Arctic Precision | `218 45% 10%` | `199 89% 48%` | Dark | Glacial navy slate, arctic sky blue, developer platforms & cloud tools. |

### 3.2 Space-Separated HSL Triplet Architecture

All theme color tokens are declared as raw, space-separated **HSL triplets** (`H S% L%` without the outer `hsl(...)` wrapper). This token structure unlocks direct CSS slash-alpha opacity compositing without requiring runtime hex-to-rgba calculations:

$$\text{CSS Composition: } \text{hsl}(\text{var}(--\text{pres-accent}) \ /\ <\text{alpha}>)$$

```less
// CSS Custom Properties Architecture
:root {
  --pres-accent: 262 83% 58%;
  --pres-accent-text: #A78BFA;
  --pres-bg: 222 47% 7%;
  --pres-text: 45 90% 96%;
  --pres-text-muted: 215 20% 65%;
  --pres-card-bg: 222 45% 12%;
  --pres-border: 215 20% 25%;
}

// Alpha-composited usage across stylesheets:
.step-halo-active {
  background: hsl(var(--pres-accent) / 0.12);
  border: 1px solid hsl(var(--pres-accent) / 0.60);
  box-shadow: 0 0 24px -2px hsl(var(--pres-accent) / 0.50);
}

.frosted-bento-card {
  background: hsl(var(--pres-card-bg) / 0.85);
  border: 1px solid hsl(var(--pres-border) / 0.40);
  backdrop-filter: blur(16px);
}
```

### 3.3 Mathematical 10-Step Precision Gradient Ramps ($S_0$ to $S_9$)

Each master palette expands into a 10-step gradient ramp spanning from maximum luminescence aura ($S_0$) down to deepest tonal shadow ($S_9$):

```
[S0] Pure Aura   --> [S1] Soft Tint   --> [S2] Ambient Glow --> [S3] Bright Core  --> [S4] Base Accent
[S5] Rich Tone   --> [S6] Deep Vibrant--> [S7] Dark Shade   --> [S8] Ultra Dark   --> [S9] Midnight Root
```

#### Lightness Curve Formula:
$$L_k = L_{\min} + \left(\frac{k}{9}\right)^\gamma \cdot (L_{\max} - L_{\min}), \quad k \in \{0, \dots, 9\}$$

Where $\gamma = 1.2$ provides a perceptual sigmoid curve preventing color banding on wide-gamut monitors.

#### Stop Mapping Across UI Depth Layers:
- **$S_0$–$S_1$ (Aura & Ambient Tint):** Canvas atmospheric background washes, subtle radial glows (`Plane 0`).
- **$S_2$–$S_3$ (Card Surface & Frosted Glass):** Semi-opaque card backgrounds and inactive pill fills (`Plane 1`).
- **$S_4$–$S_5$ (Base Accent & Hairline Borders):** Structural card borders, grid dividing rails, default icons.
- **$S_6$–$S_7$ (Rich Tone & Secondary Focus):** Secondary typographic highlights, telemetry badges.
- **$S_8$–$S_9$ (Vivid Focal Points & Root Depth):** Active step halo rings (`Plane 2`), primary CTA buttons, KPI digits.

### 3.4 Zero Yellow-on-Light Contrast Inversion

#### Problem Statement:
In light theme mode (`isDark === false`), standard yellow or amber accents (`#EAB308`, `#F59E0B`, `hsl(48, 96%, 53%)`) placed against white (`#FFFFFF`) or cream (`#FAF7F0`) surfaces produce an unreadable contrast ratio ($C_R < 2.5:1$), violating WCAG AA minimum thresholds ($4.5:1$).

#### Contrast Inversion Specification:
The presentation engine strictly enforces **Zero Yellow-on-Light**:
1. **Light Mode Token Substitution:** When rendering on a light surface, yellow accent tokens automatically substitute with high-contrast burnished amber/ochre tokens (`#78350F`, `hsl(38, 92%, 24%)`), guaranteeing $C_R \ge 8.6:1$ (exceeding WCAG AAA $7.0:1$).
2. **Capsule Badge Auto-Inversion:** Badges and pill tags invert their fill and border in light mode:
   ```less
   [data-appearance='light'],
   [data-is-dark='false'],
   .theme-light {
     // Invert Gold to Burnished Amber-900 (WCAG AAA >= 8.6:1)
     .capsule-gold {
       background: rgba(120, 53, 15, 0.10);
       border: 1px solid rgba(120, 53, 15, 0.35);
       color: #78350F;
     }

     // Invert Ember to Deep Crimson (5.8:1 contrast ratio)
     .capsule-ember {
       background: rgba(225, 29, 72, 0.10);
       border: 1px solid rgba(225, 29, 72, 0.45);
       color: #BE123C;
     }

     // Invert Cream to Warm Archival Navy Pill (18.5:1 contrast ratio)
     .capsule-cream {
       background: rgba(30, 41, 59, 0.08);
       border: 1px solid rgba(30, 41, 59, 0.25);
       color: #1E293B;
     }
   }
   ```
3. **Permanent Dark Chrome HUD:** The Presenter HUD (dock controls, step counters, timer) permanently uses dark chrome tokens (`--chrome-*`), remaining impervious to light slide theme toggles.

---

## 4. Flat Slide 1-Step Multi-Plane Bentos vs Kinetic Multi-Step Progressive Reveals

Modern Slide Archetypes (Archetypes 31 through 45) fall into two complementary architectural paradigms:

```
+---------------------------------------------------------------------------------------------------------+
|                  ARCHITECTURAL PARADIGM COMPARISON: FLAT BENTO VS KINETIC REVEAL                        |
+-------------------------------------+-------------------------------------------------------------------+
| DIMENSION                           | FLAT SLIDE 1-STEP BENTO         | KINETIC MULTI-STEP REVEAL       |
+-------------------------------------+-------------------------------------------------------------------+
| Step Count Contract                 | Exactly 1 (calculateSteps = 1)  | N (items.length or stage count) |
| Cognitive Strategy                  | Simultaneous Landscape Overview | Progressive Laser-Sharp Focus   |
| Primary Archetypes                  | Archetypes 39 to 45             | Archetypes 31 to 38             |
| Depth Hierarchy                     | 4-Plane Bento Layering          | Dynamic Z-Translation (0/8/24px)|
| State Decoupling                    | Static Data Binding             | hoveredStep ?? activeStep       |
| Visual Density                      | High (Multi-Card Bento Grid)    | Dynamic (1 Authoritative Hero)  |
| Blur / Masking                      | None (Fully Legible)            | 1.25px Optical Blur on Future   |
| Primary Executive Use Case          | System Arch, Unit Econ, Ledger  | Migrations, Incidents, Funnels  |
+-------------------------------------+-------------------------------------------------------------------+
```

### 4.1 Flat Slide 1-Step Multi-Plane Bentos (Archetypes 39 to 45)

#### Core Architectural Characteristics:
1. **Unified Cognitive Landscape:** All architectural tiers, telemetry metrics, and data pillars render simultaneously on the virtual canvas. Executive audiences can evaluate system dependencies, unit economics, or compliance status at a single glance without waiting for step animations.
2. **Step Calculation:** `calculateModernSlideStepCount(slide) === 1`. Step navigation keys (Space/ArrowRight) immediately advance to the next slide in the deck.
3. **4-Plane Depth Hierarchy:**
   - **Plane 0 ($z=0$):** Canvas background, ambient dot matrix, and subtle coordinate grid.
   - **Plane 1 ($z=10$):** Frosted glass bento cards (`backdrop-filter: blur(16px)`), card hairline borders.
   - **Plane 2 ($z=20$):** Highlighted metrics, active status seals, and operational health badges.
   - **Plane 3 ($z=30$, floating $z=50$):** Tooltips, interactive popovers, and cryptographic Merkle verification seals.
4. **Governed Archetypes:**
   - **Archetype 39:** `databasesharding` (Database Sharding & Partitioning)
   - **Archetype 40:** `saasunit economics` (SaaS Unit Economics & Rule of 40)
   - **Archetype 41:** `die-topology` (Silicon Die Topology & Advanced Packaging)
   - **Archetype 42:** `regulatorylineage` (Regulatory Data Lineage & Provenance)
   - **Archetype 43:** `developerplatformcatalog` (Developer Platform Catalog & Mesh Health)
   - **Archetype 44:** `continuouscompliance` (Continuous Compliance & Governance)
   - **Archetype 45:** `executivemandate` (Executive Mandate & Board Resolution)

### 4.2 Kinetic Multi-Step Progressive Reveals (Archetypes 31 to 38)

#### Core Architectural Characteristics:
1. **Laser-Sharp Executive Focus:** Complex operational workflows, crisis war rooms, and attack vectors are parsed sequentially to avoid cognitive overload.
2. **Step Calculation:** `calculateModernSlideStepCount(slide) === items.length`. Step navigation keys step through child items sequentially before advancing the slide.
3. **The 3-Phase Kinetic Lifecycle:**
   - **Phase 1: Completed (`itemIndex < effectiveStep`):** Opacity $0.75$, scale $1.00$, desaturated border, green positive verification badge (`CheckCircle2`). Preserves context without competing for attention.
   - **Phase 2: Active (`itemIndex === effectiveStep`):** Opacity $1.00$, scale $1.05$, glowing halo aura (`@keyframes haloExpandPulse`), harmonic spring physics ($k=420, c=17$). Laser-sharp focal point of executive attention.
   - **Phase 3: Future (`itemIndex > effectiveStep`):** Opacity $0.40$, optical depth-of-field blur (`filter: blur(1.25px)`), `pointer-events: none`. Prevents audience eye movement across unannounced content.
4. **Tactile Hover Preview Decoupling:**
   - Presentation state (`useDeckStore.activeStep`) is completely decoupled from local preview state (`hoveredStep`).
   - `effectiveStep = hoveredStep ?? activeStep`.
   - Presenters can hover over progression rails to inspect future steps without desynchronizing the slide state.
5. **Governed Archetypes:**
   - **Archetype 31:** `cloudmigrationfunnel` (Cloud Migration Funnel & Readiness)
   - **Archetype 32:** `zerotrustperimeter` (Zero Trust Perimeter & Microsegmentation)
   - **Archetype 33:** `aiflywheellifecycle` (AI Flywheel Lifecycle & Continuous Training)
   - **Archetype 34:** `incidentwarroom` (Incident War Room & Post-Mortem Timeline)
   - **Archetype 35:** `fintechledger` (Fintech High-Frequency Settlement Ledger)
   - **Archetype 36:** `marketinflectionthesis` (Market Inflection Thesis & Disruption)
   - **Archetype 37:** `asymmetricdefense` (Asymmetric Cyber Defense & MITRE ATT&CK)
   - **Archetype 38:** `customerexperience` (Customer Experience Lifecycle & Journey)

---

## 5. 12-Dimensional Automated Static Quality Verification Matrix

Every modern slide component, stylesheet token, and data contract must satisfy the **12-Dimensional Automated Static Quality Verification Matrix** prior to integration.

```
12-Dimensional Automated Quality Verification Matrix:
├── Structural Discipline & Compilation Hygiene
│   ├── Gate 1: Hard Rule CODE-RED-006R (<= 100 Physical Lines per .tsx Component File)
│   ├── Gate 2: Rule R1 Zero Builds or Full Test Suites (Ban on Heavy Invocations in Routine Turns)
│   ├── Gate 3: Fast File-Scoped Checks (Sub-5s `npx tsc --noEmit` & Python Line Scanners)
│   └── Gate 4: 100% Affirmative Positive Boolean Naming via `src/utils/booleanGuards.ts`
├── Identity, Typography & Kinetic Interaction
│   ├── Gate 5: Executive Persona Standardization (Alim Ul Karim strictly 'Chief Software Engineer')
│   ├── Gate 6: Pure Live DOM Typography (Zero Rasterized Text, Zero Canvas fillText/strokeText)
│   ├── Gate 7: Active Step Progression & Zero Phantom Steps (3-Phase Kinetic Lifecycle)
│   └── Gate 8: WCAG AAA / AA Contrast Verification (Zero Yellow-on-Light, Auto-Inversion Badges)
└── Security, Path Hygiene & Canvas Bounds
    ├── Gate 9: Secrets Quarantine & Sensitive Data Isolation (Sanitized Mock Fixtures)
    ├── Gate 10: Relative Path Linter Compliance (Zero Hardcoded Absolute Filesystem Paths)
    ├── Gate 11: GitMap Atomic Hyphenated Commit Standards (Type-Scope-Description Hygiene)
    └── Gate 12: Canonical 1920x1080 Viewport Geometry & Coordinate Budget Conformance
```

---

### Gate 1: Hard Rule CODE-RED-006R — Component Sizing Cap ($\le 100$ Lines per `.tsx`)
- **Mandate:** Every React component (`.tsx`) under `src/components/` must contain **100 or fewer physical lines of code**.
- **Decomposition Pattern:** Each archetype decomposes into dedicated leaf components in sub-folders under `src/components/slides/<archetype>/` (e.g. Card, Banner, Strip, Badge). Top-level slide component acts strictly as a compositional layout coordinator.
- **Python Audit Command:**
  ```bash
  python -c "import pathlib, sys; oversized = [f for f in pathlib.Path('src/components').glob('**/*.tsx') if len(f.read_text(encoding='utf-8').splitlines()) > 100]; sys.exit(len(oversized))"
  ```
- **Threshold:** Exactly 0 `.tsx` files $> 100$ lines.

---

### Gate 2: Rule R1 Zero Builds or Full Test Suites — Heavy Verification Ban
- **Mandate:** Executing full project builds (`npm run build`, `vite build`) or running global test suites (`npm test`, `vitest run`) in routine turns is **STRICTLY BANNED**.
- **Approved Tools:** Fast targeted static linting, AST property scans, and sub-5s type checking.
- **Threshold:** Exactly 0 invocations of heavy build or test pipelines during iterative authoring.

---

### Gate 3: Fast File-Scoped Checks — Sub-5s Static Verification
- **Mandate:** Type validation must execute in $\le 5,000\text{ms}$ without emitting bundle artifacts.
- **Verification Command:** `npx tsc --noEmit`
- **Threshold:** Exit code `0` with 0 diagnostic type errors.

---

### Gate 4: 100% Affirmative Positive Boolean Naming
- **Mandate:** All boolean variables, props, and contract fields must use affirmative positive naming (`is*`, `has*`, `can*`, `should*`). Negative polarity (`disabled`, `hidden`, `isNotActive`, `disallow`) and double negatives (`!disabled`) are forbidden.
- **Guards Library:** `src/utils/booleanGuards.ts` (`isTruthy`, `isDefined`).
- **Threshold:** Exactly 0 negative boolean property declarations.

---

### Gate 5: Executive Persona Standardization — Alim Ul Karim as "Chief Software Engineer"
- **Mandate:** References to Alim Ul Karim across documentation, presenter notes, slide fixtures, and UI seals must strictly designate him as **"Chief Software Engineer"** (Rule R11). Titles such as "Lead Architect", "Founder", or "CEO" are prohibited.
- **Threshold:** Exactly 0 non-standard persona occurrences.

---

### Gate 6: Pure Live DOM Typography — 100% Native HTML Text Elements
- **Mandate:** Headings, kickers, descriptions, metric values, and table cells must render strictly as native HTML DOM tags (`<h1>`, `<p>`, `<span>`, `<code>`).
- **Forbidden:** `<canvas>` text calls (`fillText`, `strokeText`) and rasterized image text.
- **Threshold:** Exactly 0 canvas text API usages.

---

### Gate 7: Active Step Progression & Zero Phantom Steps
- **Mandate:** Multi-step archetypes (Archetypes 31 to 38) must resolve into exactly 3 kinetic states (`completed`, `active`, `future`). Flat archetypes (39 to 45) must evaluate to exactly 1 step without phantom boundaries.
- **Threshold:** 100% compliance via `calculateModernSlideStepCount`.

---

### Gate 8: WCAG AAA / AA Contrast Verification — Zero Yellow-on-Light
- **Mandate:** Normal text must achieve $C_R \ge 4.5:1$ (WCAG AA) and target $C_R \ge 7.0:1$ (WCAG AAA). In light themes, yellow/amber accents automatically substitute with burnished amber (`#78350F`, $C_R \ge 8.6:1$).
- **Threshold:** 100% contrast compliance; exactly 0 instances of low-contrast yellow text on light surfaces.

---

### Gate 9: Secrets Quarantine & Sensitive Data Isolation
- **Mandate:** Fixtures and mock data must never contain real AWS/GCP keys, private keys, or active JWT secrets. All cryptographic signatures must use deterministic placeholder hashes.
- **Threshold:** Exactly 0 high-entropy secret patterns detected.

---

### Gate 10: Relative Path Linter Compliance — Zero Hardcoded Absolute Paths
- **Mandate:** All markdown links, file imports, and asset URLs must strictly use relative paths (`../`, `./`). Hardcoded drive letters (`D:\`, `C:\`) or POSIX root paths (`/home/`, `/tmp/`) are prohibited.
- **Threshold:** Exactly 0 absolute filesystem paths in authored code and specs.

---

### Gate 11: GitMap Atomic Hyphenated Commit Standards
- **Mandate:** Commit messages must strictly follow the GitMap format: `<type>-<scope>-<short-description>` (e.g. `feat-spec-modern-slide-archetypes-data-contracts`).
- **Threshold:** 100% adherence to hyphen-separated semantic format.

---

### Gate 12: Canonical 1920x1080 Viewport Geometry & Coordinate Budget Conformance
- **Mandate:** All slide archetypes must anchor cleanly within the virtual $1920 \times 1080$ viewport without triggering inner canvas scrollbars or coordinate clipping:
  - Header: $y \in [60, 160]\text{px}$
  - Content Zone: $y \in [180, 980]\text{px}$
  - Footer: $y \in [1000, 1040]\text{px}$
  - Horizontal Safe Margin: $x \in [80, 1840]\text{px}$
- **Threshold:** 100% coordinate budget conformance with zero canvas overflow.

---

## 6. Requirements Traceability Matrix

The following matrix maps the 15 Modern Slide Archetypes to the design system tokens, kinetic progression models, and quality gates:

| Archetype ID | Archetype Name | Paradigm | Step Count | Primary Accent Token | Typography Clamp | Minimum WCAG Ratio | Key Leaf Subcomponents |
|:---|:---|:---|:---:|:---|:---|:---:|:---|
| **31** | `cloudmigrationfunnel` | Kinetic | $N$ | Violet (`262 83% 58%`) | `clamp(16px, 1.1vw, 18px)` | $7.8:1$ (AAA) | `MigrationFunnelCard`, `TelemetryStrip`, `PhaseBadge` |
| **32** | `zerotrustperimeter` | Kinetic | $N$ | Cyan (`189 94% 43%`) | `clamp(16px, 1.1vw, 18px)` | $8.2:1$ (AAA) | `PerimeterLayerCard`, `ThreatPostureBanner`, `AttestSeal` |
| **33** | `aiflywheellifecycle` | Kinetic | $N$ | Indigo (`239 84% 67%`) | `clamp(16px, 1.1vw, 18px)` | $7.5:1$ (AAA) | `FlywheelStageCard`, `FlywheelKpiStrip`, `TokenVelocityBadge` |
| **34** | `incidentwarroom` | Kinetic | $N$ | Crimson (`347 77% 50%`) | `clamp(16px, 1.1vw, 18px)` | $7.2:1$ (AAA) | `IncidentPhaseCard`, `WarRoomHeader`, `PostMortemSeal` |
| **35** | `fintechledger` | Kinetic | $N$ | Emerald (`160 84% 39%`) | `clamp(16px, 1.1vw, 18px)` | $8.6:1$ (AAA) | `SettlementStepCard`, `LedgerTelemetryStrip`, `FinalityBadge` |
| **36** | `marketinflectionthesis` | Kinetic | $N$ | Amber (`25 95% 53%` / `#78350F`) | `clamp(16px, 1.1vw, 18px)` | $8.6:1$ (AAA) | `ThesisPillarCard`, `TamOpportunityBanner`, `MoatProofBadge` |
| **37** | `asymmetricdefense` | Kinetic | $N$ | Cyan (`189 94% 43%`) | `clamp(16px, 1.1vw, 18px)` | $7.9:1$ (AAA) | `ThreatVectorCard`, `DefenseHeaderStrip`, `MitreAttackBadge` |
| **38** | `customerexperience` | Kinetic | $N$ | Rose (`347 77% 50%`) | `clamp(16px, 1.1vw, 18px)` | $7.4:1$ (AAA) | `JourneyStageCard`, `CxPerformanceStrip`, `CsatUpliftBadge` |
| **39** | `databasesharding` | Flat Bento | $1$ | Violet (`262 83% 58%`) | `clamp(16px, 1.0vw, 18px)` | $8.0:1$ (AAA) | `ShardingTierCard`, `ClusterTelemetryStrip`, `ConsensusSeal` |
| **40** | `saasunit economics` | Flat Bento | $1$ | Emerald (`160 84% 39%`) | `clamp(16px, 1.0vw, 18px)` | $8.4:1$ (AAA) | `EconomicPillarCard`, `HealthStripBanner`, `RuleOf40Gauge` |
| **41** | `die-topology` | Flat Bento | $1$ | Slate (`201 100% 43%`) | `clamp(16px, 1.0vw, 18px)` | $8.1:1$ (AAA) | `DieBlockModuleCard`, `PackageTelemetryHeader`, `ThermalTdpSidebar` |
| **42** | `regulatorylineage` | Flat Bento | $1$ | Navy (`224 76% 48%`) | `clamp(16px, 1.0vw, 18px)` | $9.2:1$ (AAA) | `LineageNodeCard`, `AuditSummaryBanner`, `ConsentProofBadge` |
| **43** | `developerplatformcatalog` | Flat Bento | $1$ | Violet (`262 83% 58%`) | `clamp(16px, 1.0vw, 18px)` | $7.6:1$ (AAA) | `CatalogServiceCard`, `MeshHealthStrip`, `GoldenPathList` |
| **44** | `continuouscompliance` | Flat Bento | $1$ | Mint (`160 84% 39%`) | `clamp(16px, 1.0vw, 18px)` | $8.5:1$ (AAA) | `ComplianceFrameworkCard`, `GlobalScoreHeader`, `MerkleSealBadge` |
| **45** | `executivemandate` | Flat Bento | $1$ | Indigo (`239 84% 67%`) | `clamp(16px, 1.0vw, 18px)` | $8.8:1$ (AAA) | `MandatePillarCard`, `BoardResolutionBanner`, `ExecutiveSealBadge` |

---

## 7. Signoff & Governance Authority

This architectural and design system specification is officially signed off and canonical for release `v1.8.0`.

- **Lead Architecture & System Design:** Alim Ul Karim, Chief Software Engineer  
- **Quality Gate Authority:** Automated 12-Dimensional Static Verification Suite (`linter-scripts/verify-modern-slide-archetypes.py`)  
- **Effective Date:** October 2026  
- **Canonical Repository:** `alimtvnetwork/white-presentation-v1`
