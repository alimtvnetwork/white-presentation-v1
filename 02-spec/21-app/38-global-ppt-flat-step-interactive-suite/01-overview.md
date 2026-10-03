# 01-Overview: Global PPT Flat Step Interactive Suite

> **Specification Identifier:** `02-spec/21-app/38-global-ppt-flat-step-interactive-suite/01-overview.md`  
> **Status:** `APPROVED CANONICAL ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.9.0`  
> **Author:** Spec Subagent 01 (Worker 1)  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  
> **Created:** 2026-10-03  
> **Domain:** Global PPT Presentation Architecture, Flat Slide System Synthesis, 6-Tier HSL Token Contract with Variable Clean-Pass, Dark HUD Chrome Isolation, 3D Perspective Flip, Pure DOM Live Typography in 1920x1080 Canvas, 15 Modern Enterprise Slide Archetypes  

---

## 1. Executive Summary & Problem Space

High-stakes corporate presentations—delivered across executive boardrooms, sovereign capital pitches, enterprise procurement gates, and technical keynote stages—demand a synthesis between two previously divergent presentation paradigms:

1. **`global-ppt-v1` (Corporate Storytelling & Executive Presence):** Masterful narrative arc progression, authoritative typography pairing (`Ubuntu` italic headlines paired with `Poppins` geometric body), boardroom pacing, human credibility profiles, and high-impact visual evidence cards.
2. **`flat-slide-show` (Declarative JSON & Interactive Kinetic Agility):** Deterministic JSON-first data schemas, builder-mode inspectability, intra-slide step state machines, low-latency client rendering, and zero-flicker viewport scaling anchored to a $1920 \times 1080$ canvas.

Historically, attempting to unite these models produced four critical presentation pathologies:

- **Style Bleed & Dirty Variable Inheritance:** Swapping slide themes in a dynamic presentation runtime often left orphaned CSS custom properties from previous slides, polluting light backgrounds with dark shadows, or vice versa.
- **HUD Chrome Contrast Inversion:** When presentation HUD controls inherited canvas tokens, switching to an editorial light or cream theme caused white control buttons to wash out, or dark controls to disappear on obsidian canvases.
- **Spatial Flatness & Disorienting Transitions:** Traditional web slides lack true optical depth. Multi-stage comparisons and state changes were displayed either as flat juxtaposed blocks or jarring full-screen replacements that broke viewer mental models.
- **Contrast Dilution & Illegible Accents:** Saturated gold, marigold, and amber tokens optimized for dark OLED displays plummeted below $1.8:1$ contrast when rendered against white canvas backgrounds, completely violating accessibility standards.

The **Global PPT Flat Step Interactive Suite (Module 38)** delivers an uncompromising architectural synthesis resolving every pathology through five core design pillars:

```
+---------------------------------------------------------------------------------------------------+
|                     GLOBAL PPT FLAT STEP INTERACTIVE SUITE ARCHITECTURE (MODULE 38)               |
+---------------------------------------------------------------------------------------------------+
|  [6-Tier HSL Token Contract]   --> Pure HSL Triplet Tokens + Variable Clean-Pass Teardown         |
|  [Dark HUD Chrome Isolation]   --> Permanent High-Contrast Dark Carbon Glass HUD (--chrome-*)     |
|  [3D Perspective Flip Engine]  --> CSS 3D Perspective (1200px), rotateY(180deg), Harmonic Spring |
|  [Pure DOM Live Typography]    --> 100% Native HTML in 1920x1080 Virtual Canvas, Zero Raster Text |
|  [15 New Slide Archetypes]     --> 8 Kinetic Multi-Step Workflows + 7 Flat Sovereign Overviews    |
|  [Zero Yellow-on-Light Rule]   --> Mathematical Dual-Mode Contrast Engine (CR >= 7.0:1 AAA)       |
|  [Executive Persona Standard]  --> Alim Ul Karim Standardized Exclusively as Chief Software Eng   |
+---------------------------------------------------------------------------------------------------+
```

---

## 2. Core Design Pillar 1: 6-Tier HSL Token Contract with Variable Clean-Pass

To support arbitrary light, dark, and OLED canvases while permitting fluid slash-alpha CSS opacity compositing (`hsl(var(--pres-accent) / 0.25)`), the theming engine enforces a **6-Tier HSL Token Contract**. All color values are declared as unadorned space-separated HSL triplets (`H S% L%`):

```
+---------------------------------------------------------------------------------------------------+
| 6-TIER HSL THEME TOKEN ARCHITECTURE                                                               |
+---------------------------------------------------------------------------------------------------+
| Tier 1: Canvas Base (60%)      --> --pres-canvas-bg, --pres-canvas-bg-hsl                         |
| Tier 2: Structural Surface(30%)--> --pres-card-bg, --pres-card-bg-hsl, --pres-card-border-hsl     |
| Tier 3: Primary & Secondary Ink--> --pres-text-primary, --pres-text-secondary, *-hsl              |
| Tier 4: Focal Brand Accent(10%)--> --pres-accent, --pres-accent-hsl, --pres-accent-glow           |
| Tier 5: 10-Step Gradient Stops --> --pres-gradient-stop-0-hsl through --pres-gradient-stop-9-hsl |
| Tier 6: Micro-Shadow Weights   --> --text-shadow-weight-light, --text-shadow-weight-dark          |
+---------------------------------------------------------------------------------------------------+
```

### 2.1 The Variable Clean-Pass Protocol

A major defect in multi-slide single-page applications is **token retention bleed**: when Slide $A$ (using an amber dark theme) sets `--pres-accent-glow`, moving to Slide $B$ (using a clean paper light theme without that specific token) inherits the stale glowing amber variable.

The **Variable Clean-Pass Protocol** in `src/themes/themeRuntime.ts` mandates that before applying any new theme or slide-level override, the runtime executes an active teardown pass:

```typescript
const MANAGED_PRES_VARIABLE_PREFIXES = [
  '--pres-',
  '--gradient-',
  '--gold',
  '--cream',
  '--ember',
  '--ink',
  '--accent-',
];

export function cleanPreviousThemeVariables(rootEl: HTMLElement): void {
  const inlineStyle = rootEl.style;
  const propertiesToRemove: string[] = [];

  for (let i = 0; i < inlineStyle.length; i++) {
    const propName = inlineStyle[i];
    const isManaged = MANAGED_PRES_VARIABLE_PREFIXES.some((prefix) =>
      propName.startsWith(prefix)
    );
    if (isManaged) {
      propertiesToRemove.push(propName);
    }
  }

  propertiesToRemove.forEach((prop) => inlineStyle.removeProperty(prop));
}
```

This guarantees an immaculate, deterministic CSS environment on every slide transition.

---

## 3. Core Design Pillar 2: Dark HUD Chrome Isolation

Presentation controls—including slide counters, navigation arrows, theme popovers, keyboard cheat-sheets, and audio toggles—must maintain absolute visibility regardless of whether the underlying slide is obsidian black (`#020408`) or pristine white (`#FFFFFF`).

The system implements **Permanent Dark Chrome HUD Isolation**:

```
+---------------------------------------------------------------------------------------------------+
| PERMANENT DARK HUD CHROME ISOLATION LAYER                                                         |
+---------------------------------------------------------------------------------------------------+
|  [Slide Viewport Canvas]  --> Dynamically governed by --pres-* tokens (Light or Dark)             |
|                                                                                                   |
|  [Floating HUD Chrome]    --> STRICTLY ISOLATED from --pres-*. Governed exclusively by --chrome-* |
|                               --chrome-bg:      rgba(15, 23, 42, 0.94)  [Deep Slate Carbon]       |
|                               --chrome-border:  rgba(255, 255, 255, 0.12)                         |
|                               --chrome-text:    #F8FAFC                 [Pure White Text]         |
|                               --chrome-subtext: #94A3B8                 [Crisp Muted Slate]       |
|                               --chrome-accent:  #6366F1                 [Indigo Neon Focus]       |
|                               --chrome-blur:    16px                                              |
|                               --chrome-shadow:  0 8px 32px 0 rgba(0, 0, 0, 0.36)                  |
+---------------------------------------------------------------------------------------------------+
```

### 3.1 Architectural Guarantees of HUD Isolation
1. **Zero Canvas Pollution:** No `--pres-*` variable can mutate `--chrome-*` values.
2. **Universal Contrast ($C_R \ge 12:1$):** White HUD text on dark carbon glass guarantees readable controls across every projector and display.
3. **Z-Index Layer Elevation (Plane 3):** Fixed at `z-50+` with `backdrop-filter: blur(16px)` and subpixel border illumination.

---

## 4. Core Design Pillar 3: 3D Perspective Flip & Kinetic Space

To elevate narrative reveals beyond flat fade-ins, the suite integrates a hardware-accelerated **3D Perspective Flip Engine** inside the $1920 \times 1080$ virtual canvas:

```
+---------------------------------------------------------------------------------------------------+
| 3D PERSPECTIVE FLIP GEOMETRY                                                                      |
+---------------------------------------------------------------------------------------------------+
| Canvas Root:  perspective: 1200px; transform-style: preserve-3d;                                 |
|                                                                                                   |
| Face A (Front): transform: rotateY(0deg) translateZ(8px);   backface-visibility: hidden;           |
| Face B (Back):  transform: rotateY(180deg) translateZ(8px); backface-visibility: hidden;           |
|                                                                                                   |
| Flip Motion:    transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);                       |
| Spring Vector:  stiffness: 420, damping: 17, mass: 0.8                                            |
+---------------------------------------------------------------------------------------------------+
```

### 4.1 Functional Applications in Slide Archetypes
- **`before-after-showcase-pan`:** Flips from "Legacy Architecture Bottleneck" to "Unified Autonomous Platform" upon trigger, accompanied by smooth camera panning.
- **`interactive-branching-close`:** Flips decision cards upon keyboard branch selection (`Y` / `N`), revealing tailored implementation pathways and next-step commitments.
- **`cognitive-inversion-punchline`:** Flips the prevailing orthodox assumption into the disruptive technological reality with harmonic spring snap.

---

## 5. Core Design Pillar 4: Pure DOM Live Typography in 1920x1080 Canvas

Every heading, metric, code fragment, and paragraph across the suite renders exclusively as a **live, selectable HTML DOM element**.

### 5.1 Non-Negotiable Prohibitions
- ❌ **Zero Rasterized Text:** Banned from using PNG, JPEG, or WebP images containing embedded text.
- ❌ **Zero Canvas 2D Bitmap Text:** Banned from using `ctx.fillText()` or `ctx.strokeText()`. Text must be selectable, scalable, and accessible.

### 5.2 Fluid Typography Hierarchy (Northern UI/UX Standard v1.3.3)

| Typographic Role | HTML Element | Fluid CSS Clamp Formula | Pixel Target | Font Family | Boardroom Application |
|:---|:---:|:---|:---:|:---|:---|
| **Kicker / Badge** | `<span>` | `clamp(0.875rem, 1.2vw, 1.0rem)` | $14\text{px}-16\text{px}$ | `JetBrains Mono` | Category pill, archetype code, telemetry tag |
| **Main Slide Title** | `<h1>` | `clamp(2.75rem, 5vw, 3.875rem)` | $54\text{px}-62\text{px}$ | `Ubuntu` (Italic) | Executive takeaway headline (readable $\le 3\text{s}$) |
| **Section / Detail** | `<h2>` | `clamp(2.25rem, 3.5vw, 2.875rem)` | $36\text{px}-46\text{px}$ | `Ubuntu` | Detail hero title inside multi-step cards |
| **Monumental KPI** | `<span>` | `clamp(2.5rem, 6vw, 4.5rem)` | $40\text{px}-72\text{px}$ | `JetBrains Mono` | Big data metric proof (`99.999%`, `< 12ms`, `4.8x`) |
| **Body Narrative** | `<p>` | `clamp(1.0rem, 1.5vw, 1.125rem)` | $16\text{px}-18\text{px}$ | `Poppins` | Strategic analysis, trade-off rationale |
| **Code / Hash / Log** | `<code>` | `clamp(0.8125rem, 1.0vw, 0.875rem)` | $13\text{px}-14\text{px}$ | `JetBrains Mono` | Git commit hash, API URI, cryptographic digest |

---

## 6. Core Design Pillar 5: 15 Modern Enterprise Slide Archetypes Catalog

The suite specifies 15 purpose-built slide archetypes divided into two operational categories:

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                   15 GLOBAL PPT FLAT STEP INTERACTIVE ARCHETYPES (CATALOG)                       │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GROUP A: Interactive Multi-Step Progression Workflows (4 Steps Each, Kinetic 3-Phase Lifecycle)  │
│  01. interactive-branching-close       (Decision Branching Close with Keyboard Y/N Pathways)     │
│  02. before-after-showcase-pan         (Interactive Transformation Pan with 3D Flip Card)        │
│  03. search-serp-proof-lightbox        (SERP Organic Ranking & Multi-Keyword Proof Lightbox)     │
│  04. cognitive-inversion-punchline     (Tension Orthodoxy to Kinetic Inversion Reveal)           │
│  05. talent-pyramid-funnel-svg         (Top 1% Engineering Vetting & Talent Pyramid Funnel)      │
│  06. hexagonal-tech-cluster            (Honeycomb Hex Mesh with Dynamic Dependency Highlights)   │
│  07. connected-roadmap-rail-pulse      (Transit Rail Milestone Highway with Kinetic Laser Pulse) │
│  08. campaign-performance-lightbox     (CAC/LTV Waterfall & Multi-Channel Telemetry Lightbox)   │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GROUP B: High-Density Flat Sovereign Telemetry Overviews (Flat 1-Step Density)                   │
│  09. cloud-infrastructure-topology     (Multi-Region Cloud VPC, CDN Edge & Health Mesh)          │
│  10. compliance-matrix-audit-grid      (Global SOC2, ISO 27001, FedRAMP & GDPR Audit Ledger)    │
│  11. unit-economics-waterfall-card     (SaaS Contribution Margin & Enterprise Payback Waterfall) │
│  12. executive-board-governance-deck   (Quarterly Boardroom Governance Scorecard & Resolutions)  │
│  13. developer-platform-api-surface    (REST/gRPC Endpoint Matrix, SLA & Rate Limit Telemetry)   │
│  14. esg-environmental-footprint       (Scope 1/2/3 Carbon Accounting & Renewable Energy Mix)    │
│  15. global-partner-ecosystem-grid     (Global SI Integrator & Cloud Alliance Revenue Network)   │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 7. Mathematical 60/30/10 Visual Balance & 4-Plane Elevation

### 7.1 The 60/30/10 Ratio
Every slide strictly allocates surface area and contrast weight:
- **60% Dominant Canvas (Plane 0):** Negative space, subtle dot matrix grid ($24\text{px}$ lattice), ambient radial gradient cone.
- **30% Structural Bento Cards (Plane 1):** Frosted glass panels (`backdrop-filter: blur(16px)`, `hsl(var(--pres-card-bg-hsl) / 0.88)`), structural rails, tabular grids.
- **10% High-Contrast Focal Accents (Planes 2 & 3):** Active halo glows, glowing KPI numerals, status pill badges, active stage connectors.

### 7.2 The 4-Plane Elevation System
- **Plane 0 ($z=0$, `translateZ(0px)`):** Base canvas background wash.
- **Plane 1 ($z=10$, `translateZ(8px)`):** Passive cards, inactive steps, structural rails.
- **Plane 2 ($z=20$, `translateZ(24px)`):** Active step card, highlighted KPI hero pane, hovered nodes.
- **Plane 3 ($z=50+$, `translateZ(48px)`):** Permanent dark HUD chrome, modal popovers, lightbox overlays.

---

## 8. Non-Negotiable Zero Yellow-on-Light Contrast Rule ($C_R \ge 7.0:1$)

The presentation engine mathematically eliminates illegible yellow, gold, or bright lime text on light backgrounds ($L > 0.35$):
- **On Dark Themes:** Accent text renders with vibrant luminescent saturation (`hsl(var(--pres-accent))`).
- **On Light Themes:** High-luminance accents automatically invert to deep ink overrides:
  - Gold/Yellow inverts to Deep Umber (`hsl(28, 80%, 25%)`, $C_R = 9.8:1$).
  - Violet/Cyan inverts to Sovereign Royal Navy (`hsl(262, 83%, 35%)`, $C_R = 8.6:1$).
- Body text on light surfaces must always meet WCAG AAA ($C_R \ge 7.0:1$).

---

## 9. Executive Persona Governance

Under Rule R11, **Alim Ul Karim** must be referenced strictly and exclusively as:

$$\mathbf{"Chief\ Software\ Engineer"}$$

All mock fixtures, author metadata, reviewer tags, and speaker bios must adhere to this standard. Variations such as "CEO", "Founder", or "Lead Architect" are strictly prohibited.
