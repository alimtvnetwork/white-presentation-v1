# 03-BSRM / ASRM Clinical, Persona & Comparison Slide Specification

## 1. System Overview
The **BSRM / ASRM Presentation System** defines the standards for clinical authority, executive persona profiling, and scientific comparison layouts. Derived from `bsrm-presentation-hiltrax` and `global-ppt-v1`, this specification formalizes how individuals (surgeons, founders, lead architects) and comparative evidence (clinical trials, before/after case studies, cost benchmarks) are presented with unassailable credibility.

---

## 2. Person & Character Presentation Architecture

### 2.1 The Asymmetric Hero Portrait Layout
Presenting a person requires eliminating visual dead space while balancing a commanding photographic portrait against detailed professional credentials.

```
┌───────────────────────────────────────┬───────────────────────────────────────────┐
│ 1. Portrait Staging Zone              │ 2. Executive Credentialing Zone           │
│    - Coordinates: left: -150, w: 1500 │    - Coordinates: left: 800, right: 72    │
│    - Height: 100% (Anchored to base)  │    - Top: 132, Bottom: 118                │
│    - Object fit: contain, bottom      │    - Kicker: "Introducing" (72px Italic)  │
│    - Drop shadow:                     │    - Hero Name: 104px Ubuntu Bold Italic  │
│      drop-shadow(0 32px 64px ... )    │    - Character-Level Gradient Coloring    │
│    - Background Texture:              │    - Role & Specialization (38px Bold)    │
│      Halftone dot matrix (10px grid)  │    - Interactive Credential Buttons       │
│      + Radial accent blur aura        │    - 2-Column Experience & Impact Grid    │
└───────────────────────────────────────┴───────────────────────────────────────────┘
```

### 2.2 Character-by-Character Typographic Shading
As implemented in `CEOSlide.tsx`, prominent hero names use character-level color stepping to produce a luxurious, organic transition rather than a flat fill:

```tsx
<motion.h1 className="font-heading italic" style={{ fontSize: 104, fontWeight: 700 }}>
  {/* First Name */}
  <span style={{ color: "hsl(var(--pres-accent))" }}>A</span>
  <span style={{ color: "#fdd072" }}>l</span>
  <span style={{ color: "hsl(var(--pres-text))" }}>im</span>{" "}
  {/* Middle Name */}
  <span style={{ color: "hsl(var(--pres-text))" }}>Ul</span>{" "}
  {/* Last Name */}
  <span style={{ color: "hsl(var(--pres-accent))" }}>K</span>
  <span style={{ color: "#fdd072" }}>a</span>
  <span style={{ color: "hsl(var(--pres-text))" }}>rim</span>
</motion.h1>
```
- **Leading Glyph:** High-contrast brand primary accent (`hsl(var(--pres-accent))`).
- **Intermediate Glyph:** Warm intermediate tint (`#fdd072` or 10-step gradient stop $S_4$).
- **Terminal Glyphs:** Crisp primary ink text color (`hsl(var(--pres-text))`).

### 2.3 Interactive Professional Credential Badges
Beneath the executive title, high-profile presentations embed verifiable credentialing pills:
1. **LinkedIn Profile Connector:**
   - Pill button styled with LinkedIn brand blue (`hsl(210 80% 45%)`) or theme primary.
   - On cursor hover: Triggers an `AnimatePresence` floating preview card (`width: 420px`, `box-shadow: 0 16px 48px rgba(0,0,0,0.7)`) displaying a high-resolution screenshot of the verified LinkedIn profile.
2. **Location / Practice Badge:**
   - Glassmorphic container with `MapPin` icon indicating geographic headquarters (`Malaysia`, `Perth, WA`, `London`).
3. **Clinical / Engineering Specialization Tags:**
   - Outlined badges denoting core competencies (`AI Architecture`, `.NET Enterprise`, `Clinical Research`, `BSRM Certified`).

---

## 3. Comparison Slide Architecture

### 3.1 Dual-Pane Before & After Showcase (`BeforeAfterShowcaseSlide.tsx`)
Comparison slides provide empirical proof by placing contrasting realities in direct visual juxtaposition:

```
┌───────────────────────────────────┐    ┌───────────────────────────────────┐
│ [BEFORE] Badge (Red / Dimmed)     │    │ [AFTER] Badge (Brand Accent Glow) │
│                                   │    │                                   │
│  Legacy Architecture / Symptoms   │    │  Transformed System / Results     │
│  - Slow response times (4.2s)     │    │  - Sub-second latency (180ms)     │
│  - Fragmented patient records     │    │  - Unified clinical data mesh     │
│  - High manual overhead           │    │  - 94% automated throughput       │
│                                   │    │                                   │
│  Pane: 780px × 720px              │    │  Pane: 780px × 720px              │
└───────────────────────────────────┘    └───────────────────────────────────┘
              ◄───────────────── GAP: 40px ─────────────────►
```

#### Technical Layout Specifications:
- **Pane Dimensions:** Exactly $780\text{px} \times 720\text{px}$ per side.
- **Centering Calculation:**
  $$\text{Total Width} = (780 \times 2) + 40 = 1600\text{px}$$
  $$\text{Horizontal Inset} = \frac{1920 - 1600}{2} = 160\text{px}$$
  $$\text{Top Offset} = 290\text{px}$$
- **Badge Styling:**
  - *Before Badge:* Red alert background (`hsl(0 70% 45% / 0.95)`), crisp white text, positioned at `top: 16px, left: 16px`.
  - *After Badge:* Brand primary accent (`hsl(var(--pres-accent))`), high-contrast dark text, positioned at `top: 16px, left: 16px`.
- **Interactive Multi-Project Tabs:**
  A top selector bar allows instant switching between multiple case studies (`PROJECTS[]`) with fluid crossfade transitions (`duration: 0.35s`).

### 3.2 Quantitative Cost & Resource Benchmark Comparison (`CostComparisonSlide.tsx`)
When comparing economic efficiency, the slide pairs an authoritative narrative column with a data bar graphic:
- **Left Column ($640\text{px}$ width):**
  - H1 headline with italic accent (`Cost Comparison`).
  - Narrative value proposition emphasizing that lower cost does not compromise quality.
  - Large callout card with oversized glowing statistic (`60% Average Savings`).
- **Right Column Benchmark Visuals:**
  - Horizontal comparative bars with percentage fills:
    - *USA Market Rate:* $100\%$ bar fill, red indicator (`#ef4444`).
    - *UK Market Rate:* $85\%$ bar fill, blue indicator (`#3b82f6`).
    - *Eastern Europe Rate:* $45\%$ bar fill, purple indicator (`#a855f7`).
    - *Riseup-Asia Target Rate:* $25\%$ bar fill, full brand accent glow with prominent savings delta callout.

---

## 4. Clinical Evidence & Scientific Pacing Standards
1. **Accreditation Logos & Footnotes:** All clinical statements or medical trial references must include footnote citations anchored at `bottom: 40px, left: 120px` in `font-size: 12px`, with DOI or clinical registry IDs.
2. **Tabletop Product Demonstrations:** Hardware devices or medical instruments are presented with 3-dimensional perspective shadow drops and callout pinpoints identifying key ergonomic features.
