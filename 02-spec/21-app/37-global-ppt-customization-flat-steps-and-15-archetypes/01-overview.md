# 01-Overview: Global PPT Customization, Flat Steps & 15 Slide Archetypes

> **Specification Identifier:** `02-spec/21-app/37-global-ppt-customization-flat-steps-and-15-archetypes/01-overview`  
> **Status:** `APPROVED CANONICAL ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.9.0`  
> **Author:** Spec Author 01  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  
> **Created:** 2026-10-03  
> **Domain:** Global PPT Presentation Polish, 13 Canonical Corporate Palettes, Slide-Level Theme Overrides, 4 Inter-Slide Transition Modes, 60/30/10 Visual Balance, 4-Plane Depth Hierarchy, Northern UI/UX Typography Standard (v1.3.3), Zero Yellow-on-Light Contrast Rule, 15 Modern Slide Archetypes (Archetypes 46 to 60)  

---

## 1. Executive Summary & Problem Space

Enterprise slide presentations delivered in executive boardrooms, global investor summits, mission-critical incident war rooms, and high-velocity engineering reviews suffer systematically from five catastrophic presentation pathologies:

1. **Visual Clutter & Cognitive Overload (Violating the 60/30/10 Visual Balance):**  
   Traditional corporate slide decks bombard executive stakeholders with chaotic, uncalibrated visual density. Slides often feature wall-to-wall saturated containers, competing neon badges, and arbitrary accent fills that exhaust visual attention. Without a mathematically governed ratio, audiences cannot isolate the primary strategic takeaway within the critical first 3 seconds of slide reveal.
2. **Flat Unanchored Spatial Layouts (Absence of 4-Plane Depth):**  
   Slide elements are commonly placed on a flat, undifferentiated single z-plane. Without optical layering, backdrop blur filters, or sub-pixel elevation shadows, complex system topologies and operational metrics appear visually dead. Audiences perceive no spatial connection between overarching context, active work-in-progress tasks, and floating telemetry HUD controls.
3. **Micro-Typography & Unreadable Header Hierarchies:**  
   Legacy decks frequently rely on timid, shrunken header typography ($\le 12\text{px}-14\text{px}$ kickers and $< 36\text{px}$ slide headings) that force board members to squint from the opposite end of a boardroom conference table. Crucial operational status kickers become unreadable noise, destroying executive authority.
4. **Contrast Dilution & The Yellow-on-Light Pathology:**  
   Vibrant yellow, amber, and gold accents—designed to glow against dark OLED canvases—suffer disastrous contrast degradation when switched to editorial white or archival cream paper themes. Luminance clashes drop contrast ratios below $1.8:1$, violating WCAG accessibility criteria and rendering mission-critical KPI digits and status indicators illegible.
5. **Abrupt Transitions & Disorienting Multi-Stage Leaps:**  
   When navigating multi-step operational workflows (e.g. neural vector search or CQRS event logs), traditional tools replace the entire canvas instantaneously. This violent visual jump causes cognitive disorientation, resets viewer mental models, and obscures sequential progression.

The **Global PPT Customization, Flat Steps & 15 Slide Archetypes Architecture (v1.9.0)** solves these challenges through an uncompromising, mathematically grounded presentation framework:

- **Mathematical 60/30/10 Visual Balance:** Enforces 60% negative space background wash, 30% structural frosted container panels, and 10% vivid focal accents across the canonical $1920 \times 1080$ virtual canvas.
- **4-Plane Spatial Depth Hierarchy:** Implements strict elevation planes (Planes 0 to 3) with hardware-accelerated GPU transforms (`translateZ`), physical spring damping, and backdrop blur filters ($z=0, 10, 20, 50+$).
- **Northern UI/UX Typography Standard (v1.3.3):** Mandates $\ge 14\text{px}-16\text{px}$ uppercase monospace kickers, $54\text{px}-62\text{px}$ slide headings, $40\text{px}-46\text{px}$ dynamic detail headings, and single-item cognitive focus.
- **Non-Negotiable Zero Yellow-on-Light Contrast Rule:** Guarantees WCAG AAA contrast ($C_R \ge 8.6:1$) by enforcing automatic dual-mode token inversion (amber-900 / violet-900 on light surfaces).
- **Pure Live DOM Typography Mandate:** 100% semantic, copy-paste selectable, accessible HTML typography with zero rasterized text graphics or flattened canvas bitmaps.
- **13 Authentic Master Themes & 10-Step Precision Gradient Ramps ($S_0$ to $S_9$):** Raw space-separated HSL triplet tokens (`H S% L%`) enabling seamless slash-alpha CSS compositing across light, dark, and OLED canvases with per-slide theme override capabilities (`slide.themeId`).
- **Complete Catalog of 15 New Enterprise Slide Archetypes (Archetypes 46 to 60):** 8 Interactive Multi-Step Progression Workflows + 7 High-Density Flat Sovereign Telemetry Overviews.
- **Strict Persona Governance:** Universal standardization of **Alim Ul Karim** as **"Chief Software Engineer"** with zero permitted role deviations.

```
+---------------------------------------------------------------------------------------------------+
|               GLOBAL PPT CUSTOMIZATION, FLAT STEPS & 15 SLIDE ARCHETYPES ARCHITECTURE             |
+---------------------------------------------------------------------------------------------------+
|  [Global PPT Authority]        --> 13 HSL Master Palettes, Fixed Dark HUD, Micro-Shadows, Capsules|
|  [Northern UI/UX Typography]   --> >=14px-16px Kickers, 54px-62px Headings, Single Focus Point    |
|  [Zero Yellow-on-Light Rule]   --> Strict AAA Inversion (Amber-900 / Violet-900 on Light Surfaces)|
|  [Kinetic Motion Engine]       --> 3-Phase Step Lifecycle (Completed 0.75, Active 1.00, Future 0.40)|
|  [15 New Archetypes (46-60)]   --> 8 Step Workflows (4 Steps) + 7 Flat Sovereign Overviews (1 Step)|
|  [Atmospheric Physics]         --> Damped Harmonic Springs (k=420 N/m, c=17 N*s/m, zeta=0.85)     |
|  [4-Plane Spatial Depth]       --> Surface (P0: z=0), Raised (P1: z=10), Elevated (P2: z=20),     |
|                                    Floating (P3: z=50+)                                           |
|  [Navigation Controls Repair]  --> Non-locking multi-step boundary handling on slide 0 & slide N-1|
|  [Strict Persona Governance]   --> Canonical "Chief Software Engineer" Executive Identity         |
+---------------------------------------------------------------------------------------------------+
```

---

## 2. Mathematical 60/30/10 Visual Balance

Visual hierarchy in executive presentation engineering is governed by the **60/30/10 Rule of Visual Distribution**. Every slide archetype in this specification allocates visual surface area and luminance contrast strictly according to this triad:

```
+---------------------------------------------------------------------------------------------------+
| 60% DOMINANT CANVAS BACKGROUND WASH (Plane 0)                                                     |
| Negative space, ambient gradient mesh, dot matrix grids, subtle brand atmosphere                 |
|                                                                                                   |
|    +-----------------------------------------------------------------------------------------+    |
|    | 30% STRUCTURAL SURFACE PANELS & BENTO CARDS (Plane 1)                                   |    |
|    | Frosted translucent containers, card borders, modular content grids, tabular layouts   |    |
|    |                                                                                         |    |
|    |    +-----------------------------------------+   +---------------------------------+    |    |
|    |    | 10% VIVID FOCAL ACCENTS (Plane 2 & 3)   |   | Monospace status pill badges    |    |    |
|    |    | Active halo rings, glowing KPI digits,  |   | Active stage connectors         |    |    |
|    |    | primary action buttons, live indicator  |   | Concentric pulse rings          |    |    |
|    |    +-----------------------------------------+   +---------------------------------+    |    |
|    |                                                                                         |    |
|    +-----------------------------------------------------------------------------------------+    |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

### 2.1 The 60% Dominant Field (Plane 0)
- **Role:** Grounds the presentation space, establishes theme ambiance, and prevents eye fatigue.
- **Implementation:** The full $1920 \times 1080$ viewport is enveloped by `var(--pres-bg)`. In dark themes (e.g. `true-dark`, `wp-exam-purple`), this is a deep carbon or obsidian void (`#020408`, `#0D0727`). In light themes (`white-brand`, `paper-editorial`), this is crisp white paper or archival parchment cream (`#FFFFFF`, `#F5F0E6`).
- **Visual Texture:** May contain an ambient radial glow (`radial-gradient(ellipse at top right, hsl(var(--pres-accent) / 0.08), transparent 70%)`) and an optional $24\text{px}$ dot-matrix pattern rendered via SVG background patterns with 15% opacity.

### 2.2 The 30% Structural Field (Plane 1)
- **Role:** Organizes data into digestible Bento containers, process cards, workflow columns, and data tables.
- **Implementation:** Translucent containers styled with `var(--pres-card-bg)` and a fine $1\text{px}$ border using `var(--pres-card-border)`.
- **CSS Characteristics:** `backdrop-filter: blur(16px); background: hsl(var(--pres-card-bg-hsl) / 0.88); border: 1px solid hsl(var(--pres-accent-hsl) / 0.20); border-radius: 1rem (16px)`.

### 2.3 The 10% High-Contrast Focal Accent (Planes 2 & 3)
- **Role:** Immediately draws executive eye focus to the primary insight, critical anomaly, or active workflow stage.
- **Implementation:** Pure brand accent color `hsl(var(--pres-accent))`, luminescent glow halos (`box-shadow: 0 0 24px -2px hsl(var(--pres-accent) / 0.50)`), uppercase status badges, and large KPI metric numerals.
- **Constraint:** Must never exceed 10% of total visible pixel area to prevent visual saturation and cognitive chaos.

---

## 3. 4-Plane Spatial Depth Hierarchy

To establish spatial depth and tangible materiality on the 2D digital canvas, the design system implements a physical **4-Plane Elevation Model**. Each plane possesses distinct z-index layers, GPU translation vectors, and atmospheric drop shadows:

```
Plane 3: Floating Telemetry (z-50+, translateZ(48px))  --> HUD Controller, Theme Popover, Modal Pickers
Plane 2: Elevated Interactive (z-20, translateZ(24px)) --> Active Step Card, Expanded Telemetry Node
Plane 1: Raised Foundation (z-10, translateZ(8px))     --> Bento Structural Grid, Inactive Cards, Rails
Plane 0: Canvas Surface (z-0, translateZ(0px))         --> Canvas Wash, Dot Matrix Grid, Radial Glow
```

| Elevation Plane | Z-Index | 3D Transform | Drop Shadow / Atmospheric Filter | Visual Components & Scope |
|:---|:---:|:---:|:---|:---|
| **Plane 0: Canvas Surface** | `z-0` | `translateZ(0px)` | None (Base canvas) | Root slide background wash, 24px dot-matrix lattice, ambient radial light cone. |
| **Plane 1: Raised Foundation** | `z-10` | `translateZ(8px)` | `0 4px 20px -2px rgba(0, 0, 0, 0.25)` | Bento cards, passive process stages, connector rails, secondary data panels. |
| **Plane 2: Elevated Interactive** | `z-20` | `translateZ(24px)` | `0 12px 32px -4px rgba(0, 0, 0, 0.40), 0 0 24px -2px hsl(var(--pres-accent) / 0.50)` | Active workflow step card, highlighted KPI hero pane, hovered interactive nodes. |
| **Plane 3: Floating Telemetry** | `z-50+` | `translateZ(48px)` | `0 20px 48px -8px rgba(0, 0, 0, 0.60), 0 0 0 1px hsl(var(--pres-accent) / 0.30)` | Floating HUD (`NavigationControls`), `ThemePopover`, `SlideCreatorModal`, tooltips. |

### 3.1 Subpixel Mathematical Ink-Stamp Micro-Shadows
To deliver razor-sharp visual definition without fuzzy blur halos, typography across all planes enforces subpixel micro-shadows:
- **Light/White Text on Dark Backgrounds:** `text-shadow: rgb(0 0 0) 1px 0.7px 0px;`
- **Dark Text on Light Backgrounds:** `text-shadow: rgb(255 255 255) 1px 0.7px 0px;`

This mimics high-precision physical letterpress printing, producing an authentic tactile edge on high-DPI retina monitors.

---

## 4. Northern UI/UX Typography Standard (v1.3.3)

Typography in Global PPT executive decks must deliver effortless readability from the head of the boardroom table to the back of an auditorium. The Northern UI/UX Typography Standard establishes strict mathematical type scales using CSS `clamp()` functions:

```
+---------------------------------------------------------------------------------------------------+
| KICKER: >=14px-16px MONOSPACE CAPS (tracking-[0.25em] text-violet-400 font-mono)                  |
| TITLE:  54px-62px DISPLAY HEADING (clamp(2.75rem, 5vw, 3.875rem) font-bold text-slate-100)        |
| DETAIL: 40px-46px SECTION HEADING (clamp(2.25rem, 3.5vw, 2.875rem) font-semibold)                |
| BODY:   16px-18px READABLE PROSE  (clamp(1.0rem, 1.5vw, 1.125rem) text-slate-300 leading-relaxed) |
| KPI:    clamp(2.5rem, 6vw, 4.5rem) MONUMENTAL METRICS (font-mono font-black tracking-tight)       |
+---------------------------------------------------------------------------------------------------+
```

### 4.1 Fluid Type Scale Formulas

| Hierarchy Role | CSS Class & Font Family | Fluid Clamp Formula | Equivalent Pixels | Line Height & Tracking | Boardroom Intent |
|:---|:---|:---|:---:|:---:|:---|
| **Kicker / Badge** | `font-mono uppercase` | `clamp(0.875rem, 1.2vw, 1.0rem)` | $14\text{px} - 16\text{px}$ | `leading-none tracking-[0.25em]` | Micro-context pill tag: slides category, archetype code, telemetry domain. |
| **Main Slide Title** | `font-display font-bold` | `clamp(2.75rem, 5vw, 3.875rem)` | $54\text{px} - 62\text{px}$ | `leading-[1.1] tracking-tight` | Sovereign statement of the slide's strategic conclusion. Readable in $\le 3\text{s}$. |
| **Detail Pane Title** | `font-display font-semibold` | `clamp(2.25rem, 3.5vw, 2.875rem)` | $36\text{px} - 46\text{px}$ | `leading-[1.15] tracking-tight` | Dynamic heading inside the right-hand hero detail card of multi-step workflows. |
| **KPI Monumental** | `font-mono font-black` | `clamp(2.5rem, 6vw, 4.5rem)` | $40\text{px} - 72\text{px}$ | `leading-none tracking-tighter` | Anchor numerical proof metric (e.g. `99.999%`, `< 12ms`, `4.2x`). |
| **Body & Narrative** | `font-body font-normal` | `clamp(1.0rem, 1.5vw, 1.125rem)` | $16\text{px} - 18\text{px}$ | `leading-relaxed tracking-normal` | High-fidelity prose explanation, architectural caveats, business rationale. |
| **Metadata & Subtext**| `font-mono font-medium` | `clamp(0.8125rem, 1.0vw, 0.875rem)` | $13\text{px} - 14\text{px}$ | `leading-snug tracking-wide` | Timestamp, cryptographic SHA-256 commit hash, cluster telemetry node labels. |

---

## 5. Non-Negotiable Zero Yellow-on-Light Contrast Rule

A fatal defect in multi-theme presentation software occurs when dark-theme color tokens (such as vibrant marigold `#EAB308` or luminous amber `#F59E0B`) are directly applied onto light canvas backgrounds (`#FFFFFF` or `#F5F0E6`).

### 5.1 The Mathematical Problem
The relative luminance of pure sRGB white ($L_{\text{white}} = 1.0$) and standard yellow ($L_{\text{yellow}} \approx 0.65 - 0.75$) yields a catastrophic contrast ratio:

$$C_R = \frac{1.0 + 0.05}{0.70 + 0.05} = \frac{1.05}{0.75} = 1.4:1$$

This severely violates the minimum WCAG AA threshold ($4.5:1$) and WCAG AAA threshold ($7.0:1$), rendering yellow typography completely unreadable on white backgrounds.

### 5.2 The Dual-Mode Contrast Solution
To guarantee compliance across all 13 canonical themes, the presentation system mandates the **Dual-Mode Contrast Engine** in `src/themes/themeRuntime.ts`:
1. On dark themes (`isDark: true`), accent text defaults to the vibrant luminescent accent token (`hsl(var(--pres-accent))`).
2. On light themes (`isDark: false`), if the accent color has relative luminance $L > 0.35$ (yellow, gold, lime, cyan), the runtime automatically injects high-contrast deep ink overrides:
   - For gold/yellow palettes: Inverts to deep amber/umber (`#78350F` / `hsl(28, 80%, 25%)`, $C_R = 9.8:1$).
   - For violet/cyan palettes: Inverts to royal sovereign navy/violet (`#4C1D95` / `hsl(262, 83%, 35%)`, $C_R = 8.6:1$).
3. All components must bind text colors to `var(--pres-accent-text)` or `text-slate-900 dark:text-slate-100`, never to hardcoded `text-yellow-400` or `text-amber-300` on light canvases.

---

## 6. Pure Live DOM Typography Mandate

Every letter, numeral, punctuation mark, and symbol rendered across the presentation suite must reside as an **authentic, native HTML DOM element**.

### 6.1 Prohibited Anti-Patterns
- **Rasterized Text Graphics:** Exporting slide text as PNG, JPEG, or WebP images is strictly forbidden. Raster images blur on high-DPI scaling, destroy text selection, and cannot be searched or indexed.
- **HTML5 Canvas Bitmap Text:** Calling `ctx.fillText()` or `ctx.strokeText()` on an HTML `<canvas>` element for presentation body text or headings is strictly forbidden. Canvas text lacks DOM accessibility trees, breaks screen readers, and prevents OS-level clipboard copying.

### 6.2 Mandatory Architectural Implementation
- All headings must use semantic HTML tags (`<h1 className="...">`, `<h2 className="...">`, `<h3 className="...">`).
- All body copy, narratives, and bullets must use `<p>` and `<span>` elements.
- All code fragments, hashes, and telemetry metrics must use `<code className="font-mono">` or `<span className="font-mono">`.
- Text must be fully selectable with the mouse cursor, allowing executive viewers to copy-paste metrics, commit hashes, or slide titles directly from the live presentation canvas.

---

## 7. Executive Persona Governance

The presentation suite maintains absolute consistency regarding executive persona representation across all slide decks, metadata fixtures, and audit logs.

### 7.1 Universal Title Mandate
Across all 15 new slide archetypes, slide creator fixtures, presenter notes, and author badges, **Alim Ul Karim** must be designated exclusively as:

$$\mathbf{"Chief\ Software\ Engineer"}$$

### 7.2 Prohibited Role Variations
The following titles are strictly forbidden:
- `CEO` / `Chief Executive Officer` (Prohibited)
- `Founder` / `Co-Founder` (Prohibited)
- `VP of Engineering` (Prohibited)
- `Staff Software Engineer` (Prohibited)
- `Lead Architect` without Chief Software Engineer title (Prohibited)

Automated linting rule **Rule R11** audits the repository to ensure zero deviations from this executive standard.

---

## 8. Master Summary: 15 New Enterprise Slide Archetypes (Archetypes 46 to 60)

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                      15 NEW ENTERPRISE SLIDE ARCHETYPES (ARCHETYPES 46 TO 60)                    │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GROUP A: Interactive Multi-Step Progression Workflows (4 Steps Each, Kinetic 3-Phase Lifecycle)  │
│  46. neural-vector-search-topology           (AI Vector DB & Semantic Retrieval Pipeline)        │
│  47. model-quantization-speculative-decoding (LLM Speculative Decoding & Weight Compression)     │
│  48. llm-firewall-red-team-matrix            (AI Guardrails & Prompt Security Firewall)          │
│  49. global-anycast-traffic-director         (Global Anycast BGP Routing & Latency Steering)     │
│  50. cqrs-event-sourcing-fabric              (CQRS Event Sourcing & Partitioned Stream Topology) │
│  51. sbom-slsa-provenance-attestation        (Software Supply Chain & SLSA Attestation)          │
│  52. post-merger-integration-roadmap         (Corporate M&A Synergies & Cutover Roadmap)         │
│  53. scope3-carbon-supply-chain-audit        (Scope 3 Carbon Accounting & CBAM Verification)     │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GROUP B: High-Density Flat Sovereign Telemetry Overviews (Flat 1-Step Density)                   │
│  54. cspm-ciem-cloud-entitlement-graph       (Cloud Security Posture & Identity Entitlement)     │
│  55. confidential-computing-enclave          (Hardware Confidential Computing & Enclaves)        │
│  56. predictive-autoscaling-pod-matrix       (Predictive Autoscaling & Spot Slicing Matrix)      │
│  57. capex-opex-capital-allocation           (Enterprise CapEx vs OpEx Capital Allocation)       │
│  58. transfer-pricing-tax-topology           (Global Transfer Pricing & Cross-Border Tax Ledger) │
│  59. sales-quota-compensation-matrix         (Enterprise Sales Quota Attainment & Revenue Engine)│
│  60. executive-succession-leadership-bench   (Boardroom Executive Succession & 9-Box Grid)       │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

The detailed data contracts, TypeScript interfaces, and coordinate budgets for all 15 archetypes are defined in [02-data-contracts.md](02-data-contracts.md). The visual design system, theming tokens, and motion transitions are detailed in [03-theme-motion-and-flat-progression.md](03-theme-motion-and-flat-progression.md).
