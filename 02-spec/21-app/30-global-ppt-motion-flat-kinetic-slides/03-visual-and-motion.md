# 03-Visual & Motion Design System: 10 Global PPT Master Themes, Kinetic Spring Physics & Acoustic Synchronization

> **Specification Identifier:** `02-spec/21-app/30-global-ppt-motion-flat-kinetic-slides/03-visual-and-motion`  
> **Status:** `APPROVED CANONICAL SPECIFICATION`  
> **Target Release:** `v1.4.0`  
> **Author:** Spec Author 02  
> **Domain:** Global PPT Themes, Space-Separated HSL Triplet Tokens, Capsule Hierarchy, Dynamic Micro-Shadows, 3-Phase Step Lifecycle, Damped Spring Physics & Bubble Physics Engine  

---

## 1. System Vision & Visual Balance Mandates

The visual and motion design system in `30-global-ppt-motion-flat-kinetic-slides` formalizes the deep convergence of **Global PPT Institutional Authority** (`global-ppt-v1`) and **Flat Slide Show Kinetic Step Progression** (`flat-slide-show`). This synthesis unites the executive-level narrative weight, bilateral structural symmetry, and chromatic discipline of boardroom presentations with the tactile, organic responsiveness of physics-governed user interfaces.

To eliminate cognitive fatigue during extended executive briefings, technical keynotes, and high-definition virtual canvas rendering, the presentation stage strictly enforces foundational balance and spatial depth rules:

### 1.1 The 60/30/10 Visual Weight Distribution
Every slide canvas balances surface contrast and chromatic intensity across three calibrated visual tiers:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ 60% Canvas Wash (Atmospheric negative space, radial gradients, subtle dot-matrix)      │
│                                                                                        │
│   ┌──────────────────────────────────────────────────────────────────────────────┐     │
│   │ 30% Structural Bento Card Surface (Frosted glass, 1px hairline border)       │     │
│   │                                                                              │     │
│   │   ┌───────────────┐           ┌────────────────────┐   ┌─────────────────┐   │     │
│   │   │ Active Item   │ ◄───────► │ 10% Vivid Accent   │   │ .capsule-* Pill │   │     │
│   │   │ (Step Halo)   │           │ (KPI, Pin, Glow)   │   │ (Status Badge)  │   │     │
│   │   └───────────────┘           └────────────────────┘   └─────────────────┘   │     │
│   │                                                                              │     │
│   └──────────────────────────────────────────────────────────────────────────────┘     │
│                                                                                        │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

1. **$60\%$ Canvas Wash (Dominant Background Foundation):**
   - Pure, expansive negative space governed by `--pres-bg` and subtle atmospheric radial wash gradients.
   - For dark obsidian and slate palettes: deep obsidian abyss, midnight carbon, or maritime navy (`#0B0E14`, `#080808`, `#050B18`) providing radiant contrast without optical glare.
   - For light editorial palettes: clean pure white or archival cream parchment (`#FFFFFF`, `#FAF7F0`) delivering classical typographic clarity.
2. **$30\%$ Structural Hierarchy (Bento Cards & Glass Surfaces):**
   - Translucent frosted glass containers, Bento grids, code viewer panes, and structural divider rules.
   - Applied via `--pres-card-bg` (`rgba(..., 0.85)` to `rgba(..., 0.92)`), backdrop blur ($12\text{px}$–$16\text{px}$), and high-precision hairline borders (`--pres-card-border`, `1px solid`).
3. **$10\%$ Vivid Accents (Focal Kinetic Anchors):**
   - Saturated brand focal points: active step pins, glowing step halos, timeline milestone indicators, key KPI figures, and interactive action buttons.
   - Applied via `--pres-accent` (`hsl(var(--pres-accent-hsl))`) and ambient volumetric aura glows (`--pres-accent-glow`).

---

## 2. 4-Plane Spatial Depth Hierarchy

To establish tactile depth without heavy, dated skeuomorphism, the stage maps visual elements onto 4 distinct z-axis planes. Each plane declares explicit elevation, opacity, border styling, and backdrop blur:

| Plane | Name | Semantic Elevation | Visual Treatment | Dominant Tokens |
|:---:|:---|:---:|:---|:---|
| **Plane 0** | **Surface** | Ground Level ($z = 0$) | Canvas background, atmospheric radial gradients, subtle dot-matrix pattern ($1.5\text{px}$ dots spaced $28\text{px}$). | `--pres-bg`, `--pres-dot-matrix` |
| **Plane 1** | **Raised** | Base Cards ($z = 10$) | Inactive Bento containers, table rows, timeline rails, card headers. $1\text{px}$ border, backdrop blur $12\text{px}$–$16\text{px}$. | `--pres-card-bg`, `--pres-card-border` |
| **Plane 2** | **Elevated** | Interactive ($z = 20$) | Hovered cards, active step detail panes, expanded accordions, selected comparison columns. Volumetric shadow + halo stroke. | `--pres-accent-border`, `--pres-elevation-shadow` |
| **Plane 3** | **Floating** | HUD & Modal ($z = 30$) | Fixed bottom presenter HUD, theme selector menu, active step halo (`layoutId`), modal dialogs, tooltip popovers. | `--chrome-bg`, `--pres-accent-glow` |

---

## 3. Micro-Shadow Optical Sharpening Formulas

### 3.1 The Optical Sharpening Problem
On high-DPI Retina/4K displays and high-lumen conference room projectors, high-contrast typography often suffers from sub-pixel antialiasing edge bleeding. Standard drop shadows (`box-shadow: 0 4px 12px rgba(...)`) create diffuse, muddy halos that destroy typographic sharpness. Conversely, rendering text with zero shadow causes white text to wash out against semi-translucent cards or vibrant radial gradients.

The White Presentation System resolves this through **Dynamic Optical Micro-Shadows**: ultra-crisp, sub-pixel offset bevels with zero blur radius that sharpen glyph contours directly at the baseline.

### 3.2 Mathematical Formulation of Micro-Shadow Tokens
The micro-shadow vectors are parameterized by theme polarity:

$$\text{Shadow}_{\text{dark}} = \text{rgb}(0\ 0\ 0)\ 1\text{px}\ 0.7\text{px}\ 0\text{px}$$

$$\text{Shadow}_{\text{light}} = \text{rgb}(255\ 255\ 255)\ 1\text{px}\ 0.7\text{px}\ 0\text{px}$$

- **Dark Obsidian Themes (`--text-shadow-weight-dark`):**
  - Offset: $X = 1\text{px}$, $Y = 0.7\text{px}$, Blur = $0\text{px}$.
  - Color: $\text{rgb}(0\ 0\ 0)$ pure black.
  - *Rationale:* The $0.7\text{px}$ vertical offset counteracts optical gravity and baseline rasterization quirks. It creates a razor-sharp, 1-pixel sub-surface contour that defines glowing headlines, white typographic characters, and vibrant gold/indigo badges against dark obsidian card surfaces without perceptible blur radius.
- **Light Editorial Themes (`--text-shadow-weight-light`):**
  - Offset: $X = 1\text{px}$, $Y = 0.7\text{px}$, Blur = $0\text{px}$.
  - Color: $\text{rgb}(255\ 255\ 255)$ pure white.
  - *Rationale:* Provides a crisp, high-relief light bevel contour behind dark charcoal or navy text characters, preventing ink bleeding and preserving optical sharpness on high-lumen projectors.

### 3.3 CSS Custom Property & LESS Implementation
```less
// In src/styles/variables.less:
--text-shadow-weight-dark:  rgb(0 0 0) 1px 0.7px 0px;
--text-shadow-weight-light: rgb(255 255 255) 1px 0.7px 0px;

// Dynamic Presentation Header Shadow:
--pres-header-shadow: var(--text-shadow-weight-dark);
```

```typescript
// In src/utils/motionPhysics.ts:
export function getHeaderShadow(isDark: boolean): string {
  if (isDark) {
    return 'rgb(0 0 0) 1px 0.7px 0px';
  }
  return 'rgb(255 255 255) 1px 0.7px 0px';
}
```

---

## 4. Fixed Dark HUD Chrome Tokens

To maintain absolute presenter command and eliminate distraction when switching themes during a live keynote, the Presenter HUD, floating navigation bar, and control drawer utilize a **fixed dark chrome token set** (`--chrome-*`). Even when a light theme such as `paper-ink` or `github-light` is active on the canvas, the HUD remains anchored in a luxurious, dark obsidian glass capsule.

### 4.1 Token Specification
```less
:root {
  --chrome-bg:         rgba(11, 15, 25, 0.92);
  --chrome-bg-hover:   rgba(20, 27, 45, 0.96);
  --chrome-fg:         #F8FAFC;
  --chrome-fg-muted:   #94A3B8;
  --chrome-fg-subtle:  #64748B;
  --chrome-border:     rgba(255, 255, 255, 0.12);
  --chrome-border-glow:rgba(234, 179, 8, 0.40);
  --chrome-accent:     #EAB308;
  --chrome-glass-blur: 24px;
  --chrome-shadow:     0 20px 40px -10px rgba(0, 0, 0, 0.6), 0 0 1px 1px rgba(255, 255, 255, 0.10);
  --chrome-radius:     9999px;
}
```

### 4.2 Interactive HUD States
- **Idle HUD Bar:** Positioned centrally at bottom ($z = 50$, `bottom: 24px`, `left: 50%`, `transform: translateX(-50%)`), rendered with `--chrome-bg`, `backdrop-filter: blur(var(--chrome-glass-blur))`, and $1\text{px}$ hairline border `--chrome-border`.
- **Button Hover:** Background shifts to `--chrome-bg-hover`, border brightens to `--chrome-border-glow`, icon scales to $1.05\times$ via `OVERSHOOT` curve.
- **Active Step Indicator:** Accent pill illuminated via `--chrome-accent` with localized volumetric glow.

---

## 5. The 10 Global PPT Master Color Themes

The system standardizes 10 production-grade corporate, IDE, and operating system master themes. Each theme provides **authentic space-separated HSL triplet tokens** (`H S% L%` without outer `hsl()`), allowing runtime opacity compositing in Tailwind and CSS via `hsl(var(--pres-accent-hsl) / <alpha>)`.

```
The 10 Global PPT Master Color Themes:
├── Executive Boardroom & Institutional Authority
│   ├── 01. bright-gold  (Deep Obsidian Abyss & Luminous Radiant Gold)
│   ├── 02. noir-gold    (Ultra-Minimalist Matte Black & Brushed Champagne)
│   └── 03. navy-blue    (Deep Maritime Institutional & Electric Sapphire Blue)
├── Developer & IDE Culture
│   ├── 04. vscode-dark  (Developer Workstation Slate & Studio Blue)
│   ├── 05. dracula      (Vampire Gothic Slate & Electric Purple/Pink)
│   ├── 06. monokai      (Iconic High-Contrast Lime & Electric Amber)
│   └── 07. github-light (Pristine Clean Open-Source White & Azure)
├── Operating System & Material
│   ├── 08. macos-sonoma (Cupertino Dusky Glass & Radiant Blue/Purple)
│   └── 09. windows-11   (Fluent Design Mica Slate & Electric Sky Blue)
└── Archival Literature & Whitepapers
    └── 10. paper-ink    (Archival Warm Cream Parchment & Fountain Pen Navy)
```

### 5.1 TypeScript Theme Definition Contract
```typescript
export interface GradientStop {
  offset: number;     // 0.0 to 1.0 (corresponds to S0 through S9)
  color: string;      // Canonical Hex string
  hsl: string;        // Space-separated HSL triplet: "H S% L%"
  role: string;       // Semantic designation
  relativeLuma: number; // 0.00 to 1.00
  contrastRatio: number; // Against theme canvas background
}

export interface GlobalPptThemeDefinition {
  id: string;
  name: string;
  description: string;
  isDark: boolean;
  canvasBg: string;
  textColor: string;
  subtextColor: string;
  cardBg: string;
  cardBorder: string;
  accentColor: string;
  dotMatrix: boolean;
  headerShadow: string;
  // Authentic space-separated HSL triplet tokens:
  accentHsl: string;       // e.g. "45 96% 56%"
  bgHsl: string;           // e.g. "222 47% 7%"
  textHsl: string;         // e.g. "45 90% 96%"
  cardBgHsl: string;       // e.g. "222 45% 12%"
  subtextHsl: string;      // e.g. "215 20% 65%"
  cardBorderHsl: string;   // e.g. "45 80% 40%"
  stops: GradientStop[];   // 10-step precision ramp (S0 through S9)
}
```

---

### 5.2 Exhaustive 10-Theme Master Catalog

#### 01. `bright-gold` (Prestige Executive Keynote - Default Master)
- **Concept:** High-prestige executive boardroom presentation. Midnight obsidian canvas paired with radiant, luminous 24-karat gold typography and step pins.
- **Polarity:** `isDark: true` | **Dot Matrix:** `true`
- **Canvas Background:** `#0B0E14` (`222 47% 7%`)
- **Text Color:** `#FFF8E7` (`45 90% 96%`) | **Subtext:** `#A3A8B8` (`215 20% 65%`)
- **Card Background:** `rgba(18, 24, 38, 0.88)` (`222 45% 12%`)
- **Card Border:** `rgba(234, 179, 8, 0.35)` (`45 80% 40%`)
- **Accent Color:** `#EAB308` (`45 96% 56%`)
- **Dynamic Header Shadow:** `var(--text-shadow-weight-dark)` (`rgb(0 0 0) 1px 0.7px 0px`)
- **10-Step Precision Lightness Ramp:**

| Step | Semantic Role | HSL Triplet | Hex Code | Relative Luma $L$ | Contrast vs Canvas |
|:---:|:---|:---|:---:|:---:|:---:|
| **$S_0$** | Pure Gold Aura | `45 100% 97%` | `#FFFDF0` | 0.98 | 17.8:1 |
| **$S_1$** | Champagne Glint | `45 95% 90%` | `#FEF9D9` | 0.91 | 16.5:1 |
| **$S_2$** | Pale Gold Foil | `44 92% 80%` | `#FDEB9B` | 0.79 | 14.3:1 |
| **$S_3$** | Soft Amber Glow | `43 89% 70%` | `#FBD85E` | 0.67 | 12.1:1 |
| **$S_4$** | Warm Marigold | `44 92% 62%` | `#FAC82A` | 0.58 | 10.5:1 |
| **$S_5$** | Sovereign Gold (Accent) | `45 96% 56%` | `#EAB308` | 0.51 | 9.2:1 |
| **$S_6$** | Burnished Ochre | `42 90% 48%` | `#CA9206` | 0.40 | 7.2:1 |
| **$S_7$** | Antique Bronze | `38 85% 38%` | `#9B6805` | 0.28 | 5.1:1 |
| **$S_8$** | Deep Gold Shadow | `32 75% 24%` | `#633E03` | 0.16 | 2.9:1 |
| **$S_9$** | Obsidian Abyss | `222 47% 7%` | `#0B0E14` | 0.05 | 1.0:1 |

---

#### 02. `noir-gold` (Ultra-Minimalist Matte Black & Brushed Champagne)
- **Concept:** Understated, luxury boutique agency aesthetic. Pure carbon matte black canvas with warm champagne brushed gold rules and ivory typography.
- **Polarity:** `isDark: true` | **Dot Matrix:** `false`
- **Canvas Background:** `#080808` (`0 0% 3%`)
- **Text Color:** `#F5F3EF` (`40 20% 95%`) | **Subtext:** `#8C8984` (`40 5% 53%`)
- **Card Background:** `rgba(20, 20, 20, 0.90)` (`0 0% 8%`)
- **Card Border:** `rgba(212, 175, 55, 0.28)` (`43 65% 52%`)
- **Accent Color:** `#D4AF37` (`43 65% 52%`)
- **Dynamic Header Shadow:** `var(--text-shadow-weight-dark)` (`rgb(0 0 0) 1px 0.7px 0px`)
- **10-Step Precision Lightness Ramp:**

| Step | Semantic Role | HSL Triplet | Hex Code | Relative Luma $L$ | Contrast vs Canvas |
|:---:|:---|:---|:---:|:---:|:---:|
| **$S_0$** | Ivory Highlight | `40 30% 97%` | `#FAF8F5` | 0.97 | 19.4:1 |
| **$S_1$** | Champagne Mist | `42 35% 88%` | `#F0E9DC` | 0.86 | 17.2:1 |
| **$S_2$** | Brushed Champagne | `43 45% 76%` | `#E3D5BD` | 0.72 | 14.4:1 |
| **$S_3$** | Satin Brass | `43 55% 65%` | `#D9C191` | 0.60 | 12.0:1 |
| **$S_4$** | Polished Gold | `43 62% 58%` | `#D6B56E` | 0.52 | 10.4:1 |
| **$S_5$** | Classic Gold (Accent) | `43 65% 52%` | `#D4AF37` | 0.46 | 9.2:1 |
| **$S_6$** | Raw Umber | `38 55% 42%` | `#A68233` | 0.34 | 6.8:1 |
| **$S_7$** | Deep Sepia Tint | `35 45% 30%` | `#6E5320` | 0.21 | 4.2:1 |
| **$S_8$** | Smoked Charcoal | `0 0% 16%` | `#292929` | 0.12 | 2.4:1 |
| **$S_9$** | Matte Obsidian | `0 0% 3%` | `#080808` | 0.04 | 1.0:1 |

---

#### 03. `vscode-dark` (Developer Workstation Slate & Studio Blue)
- **Concept:** Modern technical and cloud architecture presentations echoing the familiar Microsoft Visual Studio Code dark environment.
- **Polarity:** `isDark: true` | **Dot Matrix:** `true`
- **Canvas Background:** `#1E1E1E` (`0 0% 12%`)
- **Text Color:** `#D4D4D4` (`0 0% 83%`) | **Subtext:** `#858585` (`0 0% 52%`)
- **Card Background:** `rgba(37, 37, 38, 0.88)` (`0 0% 15%`)
- **Card Border:** `rgba(0, 122, 204, 0.40)` (`204 100% 40%`)
- **Accent Color:** `#007ACC` (`204 100% 40%`)
- **Dynamic Header Shadow:** `var(--text-shadow-weight-dark)` (`rgb(0 0 0) 1px 0.7px 0px`)
- **10-Step Precision Lightness Ramp:**

| Step | Semantic Role | HSL Triplet | Hex Code | Relative Luma $L$ | Contrast vs Canvas |
|:---:|:---|:---|:---:|:---:|:---:|
| **$S_0$** | Console White | `0 0% 98%` | `#FAFAFA` | 0.98 | 14.0:1 |
| **$S_1$** | Light Gray Text | `0 0% 88%` | `#E0E0E0` | 0.85 | 12.1:1 |
| **$S_2$** | Electric Azure | `204 100% 75%` | `#80C7FF` | 0.70 | 10.0:1 |
| **$S_3$** | Studio Sky | `204 100% 62%` | `#3DABFF` | 0.56 | 8.0:1 |
| **$S_4$** | VSCode Blue (Accent) | `204 100% 40%` | `#007ACC` | 0.40 | 5.7:1 |
| **$S_5$** | Deep Editor Blue | `207 90% 32%` | `#08589C` | 0.28 | 4.0:1 |
| **$S_6$** | Status Bar Blue | `210 80% 24%` | `#0C3E6E` | 0.18 | 2.5:1 |
| **$S_7$** | Panel Slate | `0 0% 22%` | `#383838` | 0.14 | 2.0:1 |
| **$S_8$** | Sidebar Dark | `0 0% 15%` | `#252526` | 0.08 | 1.2:1 |
| **$S_9$** | Editor Carbon | `0 0% 12%` | `#1E1E1E` | 0.07 | 1.0:1 |

---

#### 04. `dracula` (Vampire Gothic Slate & Electric Purple/Pink)
- **Concept:** High-contrast gothic developer theme, beloved across terminal and code tools, featuring radioactive violet, hot pink, and cyan accents.
- **Polarity:** `isDark: true` | **Dot Matrix:** `true`
- **Canvas Background:** `#282A36` (`231 15% 18%`)
- **Text Color:** `#F8F8F2` (`60 30% 96%`) | **Subtext:** `#6272A4` (`225 27% 51%`)
- **Card Background:** `rgba(52, 55, 70, 0.88)` (`231 15% 24%`)
- **Card Border:** `rgba(189, 147, 249, 0.35)` (`265 89% 78%`)
- **Accent Color:** `#BD93F9` (`265 89% 78%`)
- **Dynamic Header Shadow:** `var(--text-shadow-weight-dark)` (`rgb(0 0 0) 1px 0.7px 0px`)
- **10-Step Precision Lightness Ramp:**

| Step | Semantic Role | HSL Triplet | Hex Code | Relative Luma $L$ | Contrast vs Canvas |
|:---:|:---|:---|:---:|:---:|:---:|
| **$S_0$** | Dracula Foreground | `60 30% 96%` | `#F8F8F2` | 0.96 | 13.7:1 |
| **$S_1$** | Glowing Cyan | `191 97% 77%` | `#8BE9FD` | 0.82 | 11.7:1 |
| **$S_2$** | Electric Purple (Accent)| `265 89% 78%` | `#BD93F9` | 0.71 | 10.1:1 |
| **$S_3$** | Neon Pink | `326 100% 74%` | `#FF79C6` | 0.62 | 8.8:1 |
| **$S_4$** | Toxic Green | `135 94% 65%` | `#50FA7B` | 0.75 | 10.7:1 |
| **$S_5$** | Solar Yellow | `65 92% 76%` | `#F1FA8C` | 0.88 | 12.5:1 |
| **$S_6$** | Flame Orange | `31 100% 71%` | `#FFB86C` | 0.68 | 9.7:1 |
| **$S_7$** | Comment Blue | `225 27% 51%` | `#6272A4` | 0.38 | 5.4:1 |
| **$S_8$** | Current Line Gray | `231 15% 28%` | `#44475A` | 0.16 | 2.3:1 |
| **$S_9$** | Dracula Abyss | `231 15% 18%` | `#282A36` | 0.07 | 1.0:1 |

---

#### 05. `monokai` (Iconic High-Contrast Lime & Electric Amber)
- **Concept:** Quintessential code editor theme with charcoal background and vibrant lime, warm amber, and magenta highlights.
- **Polarity:** `isDark: true` | **Dot Matrix:** `true`
- **Canvas Background:** `#272822` (`70 8% 15%`)
- **Text Color:** `#F8F8F2` (`60 30% 96%`) | **Subtext:** `#75715E` (`54 11% 41%`)
- **Card Background:** `rgba(45, 46, 39, 0.88)` (`70 8% 21%`)
- **Card Border:** `rgba(166, 226, 46, 0.35)` (`80 76% 53%`)
- **Accent Color:** `#A6E22E` (`80 76% 53%`)
- **Dynamic Header Shadow:** `var(--text-shadow-weight-dark)` (`rgb(0 0 0) 1px 0.7px 0px`)
- **10-Step Precision Lightness Ramp:**

| Step | Semantic Role | HSL Triplet | Hex Code | Relative Luma $L$ | Contrast vs Canvas |
|:---:|:---|:---|:---:|:---:|:---:|
| **$S_0$** | Pure Sand White | `60 30% 96%` | `#F8F8F2` | 0.96 | 14.8:1 |
| **$S_1$** | Neon Lime (Accent) | `80 76% 53%` | `#A6E22E` | 0.68 | 10.5:1 |
| **$S_2$** | Monokai Amber | `54 70% 68%` | `#E6DB74` | 0.74 | 11.4:1 |
| **$S_3$** | Monokai Pink | `348 83% 58%` | `#F92672` | 0.44 | 6.8:1 |
| **$S_4$** | Monokai Orange | `32 98% 56%` | `#FD971F` | 0.54 | 8.3:1 |
| **$S_5$** | Monokai Cyan | `188 78% 57%` | `#66D9EF` | 0.63 | 9.7:1 |
| **$S_6$** | Muted Moss Comment | `54 11% 41%` | `#75715E` | 0.28 | 4.3:1 |
| **$S_7$** | Elevated Olive Slate | `70 8% 26%` | `#3E3D32` | 0.16 | 2.5:1 |
| **$S_8$** | Surface Charcoal | `70 8% 20%` | `#32332A` | 0.10 | 1.5:1 |
| **$S_9$** | Deep Monokai Black | `70 8% 15%` | `#272822` | 0.065 | 1.0:1 |

---

#### 06. `github-light` (Pristine Clean Open-Source White & Azure)
- **Concept:** Ultra-clean open-source documentation aesthetic. Pure white canvas, crisp GitHub blue badges, charcoal typography, and subtle card borders.
- **Polarity:** `isDark: false` | **Dot Matrix:** `false`
- **Canvas Background:** `#FFFFFF` (`0 0% 100%`)
- **Text Color:** `#1F2328` (`215 13% 14%`) | **Subtext:** `#656D76` (`212 8% 43%`)
- **Card Background:** `rgba(246, 248, 250, 0.92)` (`210 18% 97%`)
- **Card Border:** `#D0D7DE` (`210 18% 85%`)
- **Accent Color:** `#0969DA` (`212 92% 45%`)
- **Dynamic Header Shadow:** `var(--text-shadow-weight-light)` (`rgb(255 255 255) 1px 0.7px 0px`)
- **10-Step Precision Lightness Ramp:**

| Step | Semantic Role | HSL Triplet | Hex Code | Relative Luma $L$ | Contrast vs Canvas |
|:---:|:---|:---|:---:|:---:|:---:|
| **$S_0$** | Soft Azure Wash | `212 92% 96%` | `#EFF6FF` | 0.95 | 1.05:1 |
| **$S_1$** | Sub-Surface Mist | `210 18% 97%` | `#F6F8FA` | 0.94 | 1.06:1 |
| **$S_2$** | Border Rule Gray | `210 18% 85%` | `#D0D7DE` | 0.80 | 1.25:1 |
| **$S_3$** | Inactive Pill Tint | `212 80% 75%` | `#93C5FD` | 0.68 | 1.47:1 |
| **$S_4$** | Interactive Sky | `212 90% 60%` | `#3B82F6` | 0.48 | 2.08:1 |
| **$S_5$** | GitHub Azure (Accent) | `212 92% 45%` | `#0969DA` | 0.34 | 2.94:1 |
| **$S_6$** | Deep Git Blue | `215 88% 36%` | `#0A4CA3` | 0.24 | 4.16:1 |
| **$S_7$** | Muted Charcoal Subtext | `212 8% 43%` | `#656D76` | 0.22 | 4.54:1 |
| **$S_8$** | Heavy Charcoal Border | `215 13% 25%` | `#363C44` | 0.12 | 8.33:1 |
| **$S_9$** | Deep Slate Ink | `215 13% 14%` | `#1F2328` | 0.06 | 16.6:1 |

---

#### 07. `paper-ink` (Archival Warm Cream Parchment & Classical Fountain Pen Navy)
- **Concept:** Intellectual whitepaper, academic keynote, and long-form investment memorandum. Tactile warm parchment and classical Prussian blue ink.
- **Polarity:** `isDark: false` | **Dot Matrix:** `false`
- **Canvas Background:** `#FAF7F0` (`42 50% 96%`)
- **Text Color:** `#0A1128` (`226 60% 10%`) | **Subtext:** `#383838` (`0 0% 22%`)
- **Card Background:** `rgba(245, 240, 230, 0.92)` (`39 43% 93%`)
- **Card Border:** `#E5DAC8` (`38 35% 84%`)
- **Accent Color:** `#1D4ED8` (`224 76% 48%`)
- **Dynamic Header Shadow:** `var(--text-shadow-weight-light)` (`rgb(255 255 255) 1px 0.7px 0px`)
- **10-Step Precision Lightness Ramp:**

| Step | Semantic Role | HSL Triplet | Hex Code | Relative Luma $L$ | Contrast vs Canvas |
|:---:|:---|:---|:---:|:---:|:---:|
| **$S_0$** | Archival Cream | `42 50% 96%` | `#FAF7F0` | 0.96 | 1.00:1 |
| **$S_1$** | Warm Parchment | `39 43% 93%` | `#F5F0E6` | 0.93 | 1.03:1 |
| **$S_2$** | Flax Border | `38 35% 84%` | `#E5DAC8` | 0.82 | 1.17:1 |
| **$S_3$** | Muted Raw Umber | `38 30% 70%` | `#C8B69A` | 0.65 | 1.47:1 |
| **$S_4$** | Slate Ink Blue | `215 50% 60%` | `#6488CB` | 0.48 | 2.00:1 |
| **$S_5$** | Royal Ink (Accent) | `224 76% 48%` | `#1D4ED8` | 0.35 | 2.74:1 |
| **$S_6$** | Classical Navy | `224 70% 36%` | `#1B3DA8` | 0.22 | 4.36:1 |
| **$S_7$** | Prussian Midnight | `224 64% 24%` | `#152A68` | 0.14 | 6.85:1 |
| **$S_8$** | Charcoal Quill | `0 0% 22%` | `#383838` | 0.12 | 8.00:1 |
| **$S_9$** | Fountain Ink Abyss | `226 60% 10%` | `#0A1128` | 0.05 | 19.2:1 |

---

#### 08. `macos-sonoma` (Cupertino Dusky Glass & Radiant Blue/Purple)
- **Concept:** Apple macOS presentation design language. Dusky smoked acrylic canvas, deep frosted blur layers, and vibrant macOS gradient accents.
- **Polarity:** `isDark: true` | **Dot Matrix:** `true`
- **Canvas Background:** `#12151D` (`225 24% 9%`)
- **Text Color:** `#F5F7FA` (`210 20% 97%`) | **Subtext:** `#8E96A4` (`218 11% 60%`)
- **Card Background:** `rgba(28, 33, 46, 0.85)` (`223 24% 15%`)
- **Card Border:** `rgba(94, 158, 255, 0.32)` (`216 100% 68%`)
- **Accent Color:** `#5E9EFF` (`216 100% 68%`)
- **Dynamic Header Shadow:** `var(--text-shadow-weight-dark)` (`rgb(0 0 0) 1px 0.7px 0px`)
- **10-Step Precision Lightness Ramp:**

| Step | Semantic Role | HSL Triplet | Hex Code | Relative Luma $L$ | Contrast vs Canvas |
|:---:|:---|:---|:---:|:---:|:---:|
| **$S_0$** | Apple Luminous Snow | `210 20% 97%` | `#F5F7FA` | 0.97 | 16.1:1 |
| **$S_1$** | Ice Blue Sheen | `214 70% 88%` | `#D2E4FC` | 0.84 | 14.0:1 |
| **$S_2$** | Sonoma Sky (Accent) | `216 100% 68%` | `#5E9EFF` | 0.66 | 11.0:1 |
| **$S_3$** | Dynamic Violet Accent | `265 85% 68%` | `#9D6BFC` | 0.54 | 9.0:1 |
| **$S_4$** | Cupertino Royal | `220 90% 55%` | `#2669FC` | 0.42 | 7.0:1 |
| **$S_5$** | Deep macOS Blue | `224 80% 42%` | `#1547C2` | 0.28 | 4.6:1 |
| **$S_6$** | Twilight Glass Border | `220 30% 32%` | `#39476B` | 0.18 | 3.0:1 |
| **$S_7$** | Smoked Acrylic Surface | `223 24% 20%` | `#272F41` | 0.11 | 1.8:1 |
| **$S_8$** | Space Gray Shadow | `223 24% 15%` | `#1C212E` | 0.08 | 1.3:1 |
| **$S_9$** | Dusky Sonoma Night | `225 24% 9%` | `#12151D` | 0.06 | 1.0:1 |

---

#### 09. `windows-11` (Fluent Design Mica Slate & Electric Sky Blue)
- **Concept:** Microsoft Fluent Design System. Modern dark Mica slate canvas, soft rounded acrylic cards, and signature Windows 11 electric cyan/blue lighting.
- **Polarity:** `isDark: true` | **Dot Matrix:** `true`
- **Canvas Background:** `#1A1D24` (`220 16% 12%`)
- **Text Color:** `#FFFFFF` (`0 0% 100%`) | **Subtext:** `#9FA4B2` (`223 11% 66%`)
- **Card Background:** `rgba(36, 41, 51, 0.85)` (`220 17% 17%`)
- **Card Border:** `rgba(96, 205, 255, 0.35)` (`199 100% 69%`)
- **Accent Color:** `#60CDFF` (`199 100% 69%`)
- **Dynamic Header Shadow:** `var(--text-shadow-weight-dark)` (`rgb(0 0 0) 1px 0.7px 0px`)
- **10-Step Precision Lightness Ramp:**

| Step | Semantic Role | HSL Triplet | Hex Code | Relative Luma $L$ | Contrast vs Canvas |
|:---:|:---|:---|:---:|:---:|:---:|
| **$S_0$** | Fluent Pure White | `0 0% 100%` | `#FFFFFF` | 1.00 | 14.3:1 |
| **$S_1$** | Electric Mica Cyan (Accent)| `199 100% 69%` | `#60CDFF` | 0.78 | 11.1:1 |
| **$S_2$** | Windows Fluent Blue | `206 100% 50%` | `#0084FF` | 0.55 | 7.8:1 |
| **$S_3$** | Deep Edge Blue | `210 95% 40%` | `#055BB3` | 0.36 | 5.1:1 |
| **$S_4$** | Slate Text Tint | `223 11% 66%` | `#9FA4B2` | 0.50 | 7.1:1 |
| **$S_5$** | Acrylic Border Rule | `220 15% 38%` | `#525A6B` | 0.24 | 3.4:1 |
| **$S_6$** | Elevated Mica Tile | `220 17% 24%` | `#333B49` | 0.14 | 2.0:1 |
| **$S_7$** | Base Acrylic Card | `220 17% 17%` | `#242933` | 0.09 | 1.3:1 |
| **$S_8$** | Window Chrome Frame | `220 16% 14%` | `#1F222A` | 0.08 | 1.1:1 |
| **$S_9$** | Deep Mica Slate | `220 16% 12%` | `#1A1D24` | 0.07 | 1.0:1 |

---

#### 10. `navy-blue` (Deep Maritime Institutional & Electric Sapphire Blue)
- **Concept:** Sovereign institutional and defense technology presentation. Deep maritime navy canvas with electric sapphire blue accents and arctic white typography.
- **Polarity:** `isDark: true` | **Dot Matrix:** `true`
- **Canvas Background:** `#050B18` (`222 66% 6%`)
- **Text Color:** `#F0F4FC` (`220 60% 96%`) | **Subtext:** `#7E90B0` (`218 24% 59%`)
- **Card Background:** `rgba(12, 22, 44, 0.88)` (`221 57% 11%`)
- **Card Border:** `rgba(59, 130, 246, 0.35)` (`217 91% 60%`)
- **Accent Color:** `#3B82F6` (`217 91% 60%`)
- **Dynamic Header Shadow:** `var(--text-shadow-weight-dark)` (`rgb(0 0 0) 1px 0.7px 0px`)
- **10-Step Precision Lightness Ramp:**

| Step | Semantic Role | HSL Triplet | Hex Code | Relative Luma $L$ | Contrast vs Canvas |
|:---:|:---|:---|:---:|:---:|:---:|
| **$S_0$** | Arctic Ice White | `220 60% 96%` | `#F0F4FC` | 0.96 | 19.2:1 |
| **$S_1$** | Radiant Sky Cyan | `205 90% 75%` | `#85CFFF` | 0.78 | 15.6:1 |
| **$S_2$** | Sapphire Lead (Accent) | `217 91% 60%` | `#3B82F6` | 0.52 | 10.4:1 |
| **$S_3$** | Sovereign Blue | `222 84% 50%` | `#1D5DFC` | 0.38 | 7.6:1 |
| **$S_4$** | Deep Maritime Blue | `224 80% 38%` | `#133FA8` | 0.24 | 4.8:1 |
| **$S_5$** | Admiral Navy | `225 75% 26%` | `#0E286E` | 0.15 | 3.0:1 |
| **$S_6$** | Muted Maritime Slate | `218 24% 59%` | `#7E90B0` | 0.40 | 8.0:1 |
| **$S_7$** | Trench Blue Card Border| `221 45% 22%` | `#1F3255` | 0.10 | 2.0:1 |
| **$S_8$** | Sub-Surface Naval Card | `221 57% 11%` | `#0C162C` | 0.07 | 1.4:1 |
| **$S_9$** | Deep Maritime Abyss | `222 66% 6%` | `#050B18` | 0.05 | 1.0:1 |

---

## 6. The `.capsule-*` Badge Hierarchy & Light-Theme Contrast Inversion System

### 6.1 Badge Architecture & Hierarchy
The presentation system encapsulates metadata, status indicators, and kicker labels in a disciplined **`.capsule-*`** class hierarchy. Capsules are pill-shaped interactive or static micro-containers (`border-radius: 9999px`, `padding: 4px 12px`, uppercase typographic kicker, tracking `0.08em`):

```
┌────────────────────────────────────────────────────────────────────────┐
│ .capsule-* Badge Catalog                                               │
├────────────────────────────────────────────────────────────────────────┤
│ [.capsule-gold]    Prestige Keynote / Executive Milestone / 24k Accent │
│ [.capsule-ember]   Urgent Callout / High Severity / Critical KPI Alert │
│ [.capsule-cream]   Archival Memorandum / Warm Highlight / Ivory Tint   │
│ [.capsule-ink]     Deep Obsidian Naval Badge / Core Institutional Chip │
│ [.capsule-outline] Structural Wireframe Pill / Low-Elevation Boundary  │
│ [.capsule-meta]    Telemetry / Timestamp / Monospace Version Counter   │
└────────────────────────────────────────────────────────────────────────┘
```

1. **`.capsule-gold`**:
   - Executive prestige, luxury validation, key architectural wins.
   - Background: `rgba(234, 179, 8, 0.12)`, Border: `rgba(234, 179, 8, 0.40)`, Text: `#EAB308` (Dark mode).
2. **`.capsule-ember`**:
   - High-urgency alert, security vulnerability, competitive threat, launch countdown alert.
   - Background: `rgba(244, 63, 94, 0.12)`, Border: `rgba(244, 63, 94, 0.40)`, Text: `#F43F5E`.
3. **`.capsule-cream`**:
   - Archival whitepaper notes, luxury warm champagne label.
   - Background: `rgba(250, 247, 240, 0.10)`, Border: `rgba(217, 193, 145, 0.35)`, Text: `#FAF7F0` (Dark mode).
4. **`.capsule-ink`**:
   - High-authority institutional chip, deep foundation anchor.
   - Background: `rgba(11, 14, 20, 0.85)`, Border: `rgba(255, 255, 255, 0.15)`, Text: `#F8FAFC`.
5. **`.capsule-outline`**:
   - Structural boundary, category filter, inactive state pill.
   - Background: `transparent`, Border: `var(--pres-border)`, Text: `var(--pres-text-muted)`.
6. **`.capsule-meta`**:
   - Technical telemetry, latency stats, git SHA, ISO timestamp, code tags.
   - Background: `rgba(148, 163, 184, 0.08)`, Border: `rgba(148, 163, 184, 0.20)`, Text: `var(--pres-text-muted)`, Font: `var(--pres-font-mono)`.

---

### 6.2 Light-Theme Contrast Inversions (`paper-ink` & `github-light`)

#### The Low-Contrast Light Surface Dilemma
When presentations render against light backgrounds (`#FFFFFF` in `github-light` or `#FAF7F0` in `paper-ink`), standard light-tinted capsules (such as `.capsule-cream` with `#FAF7F0` text or `.capsule-gold` with `#EAB308` on a white background) catastrophically fail WCAG 2.1 AA contrast requirements ($C_R < 2.2:1$).

#### Inverse Contrast Mapping Rules
To enforce uncompromising WCAG AA compliance ($\ge 4.5:1$), the presentation stylesheet automatically inverts capsule colors when embedded in light themes:

```less
// In src/styles/presentation.less:

.capsule-base {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 9999px;
  font-family: var(--pres-font-display);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.2s ease, background-color 0.2s ease;
  user-select: none;
}

// 1. Default (Dark Master Themes)
.capsule-gold {
  &:extend(.capsule-base);
  background: rgba(234, 179, 8, 0.12);
  border: 1px solid rgba(234, 179, 8, 0.40);
  color: #EAB308;
}

.capsule-ember {
  &:extend(.capsule-base);
  background: rgba(244, 63, 94, 0.12);
  border: 1px solid rgba(244, 63, 94, 0.40);
  color: #F43F5E;
}

.capsule-cream {
  &:extend(.capsule-base);
  background: rgba(250, 247, 240, 0.10);
  border: 1px solid rgba(217, 193, 145, 0.35);
  color: #FAF7F0;
}

.capsule-ink {
  &:extend(.capsule-base);
  background: rgba(11, 14, 20, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #F8FAFC;
}

.capsule-outline {
  &:extend(.capsule-base);
  background: transparent;
  border: 1px solid var(--pres-border);
  color: var(--pres-text-muted);
}

.capsule-meta {
  &:extend(.capsule-base);
  font-family: var(--pres-font-mono);
  background: rgba(148, 163, 184, 0.08);
  border: 1px solid rgba(148, 163, 184, 0.22);
  color: var(--pres-text-muted);
}

// 2. Light Theme Contrast Inversions (paper-ink & github-light)
[data-is-dark="false"],
[data-theme="paper-ink"],
[data-theme="github-light"] {

  // Invert Gold to Burnished Dark Ochre on light surface
  .capsule-gold {
    background: rgba(202, 146, 6, 0.12);
    border: 1px solid rgba(202, 146, 6, 0.50);
    color: #9B6805; // 5.2:1 contrast ratio against white/cream
  }

  // Invert Ember to Deep Crimson
  .capsule-ember {
    background: rgba(225, 29, 72, 0.10);
    border: 1px solid rgba(225, 29, 72, 0.45);
    color: #BE123C; // 5.8:1 contrast ratio against white/cream
  }

  // Invert Cream to Warm Archival Navy Pill
  .capsule-cream {
    background: rgba(10, 17, 40, 0.08);
    border: 1px solid rgba(10, 17, 40, 0.30);
    color: #0A1128; // 18.5:1 contrast ratio against cream parchment
  }

  // Ink maintains deep dark chip with enhanced edge
  .capsule-ink {
    background: #0F172A;
    border: 1px solid #1E293B;
    color: #FFFFFF; // 16.2:1 contrast ratio
  }

  // Outline strengthens border opacity for light ground
  .capsule-outline {
    background: rgba(0, 0, 0, 0.02);
    border: 1px solid rgba(15, 23, 42, 0.30);
    color: #334155;
  }

  // Meta pill deepens monospaced typography
  .capsule-meta {
    background: rgba(15, 23, 42, 0.05);
    border: 1px solid rgba(15, 23, 42, 0.20);
    color: #475569;
  }
}
```

---

## 7. Kinetic Motion Physics & Intra-Slide Step Progression Engine

### 7.1 Calibrated Motion Transition Curves
The White Presentation System models all visual transitions as natural physical systems. Rather than relying on static linear timers, transitions mimic mechanical springs and deceleration envelopes.

```typescript
export const EXPO_OUT = [0.22, 1, 0.36, 1] as const;      // Quintic / Exponential Deceleration
export const OVERSHOOT = [0.34, 1.56, 0.64, 1] as const;   // Tactile Spring Overshoot / Snap
export const ARC_EASE = [0.4, 0, 0.2, 1] as const;        // Material Standard Elevation Curve
```

1. **`EXPO_OUT` (`[0.22, 1, 0.36, 1]`):**
   - Applied to slide-to-slide translations, large panel entries, and fullscreen reveals.
   - Initial velocity is high, tapering off smoothly with zero mechanical abruptness.
2. **`OVERSHOOT` (`[0.34, 1.56, 0.64, 1]`):**
   - Applied to discrete badge pops, active step pin expansion, and interactive toggle switches.
   - Provides an organic tactile snap ($\sim 1.04\times$ overshoot) before settling instantly into resting equilibrium.

---

### 7.2 Damped Harmonic Spring Physics Model
Intra-slide stepping, card focus transitions, and dynamic detail pane reveals are governed by the classical damped harmonic oscillator differential equation:

$$m \frac{d^2x}{dt^2} + c \frac{dx}{dt} + k x = 0$$

- **Stiffness ($k$):** $420\text{ N/m}$
- **Damping ($c$):** $17\text{ N}\cdot\text{s/m}$
- **Mass ($m$):** $0.8\text{ kg}$

#### Physical Characteristics:
1. **Undamped Angular Frequency:**
   $$\omega_0 = \sqrt{\frac{k}{m}} = \sqrt{\frac{420}{0.8}} = \sqrt{525} \approx 22.91\text{ rad/s}$$
2. **Damping Ratio ($\zeta$):**
   $$\zeta = \frac{c}{2\sqrt{m k}} = \frac{17}{2\sqrt{0.8 \times 420}} = \frac{17}{2\sqrt{336}} = \frac{17}{36.66} \approx 0.464$$
   *Analysis:* With $\zeta \approx 0.464$, the system is in the ideal **underdamped regime** ($\zeta < 1$). It produces an immediate, responsive initial arrival ($< 140\text{ms}$) followed by a subtle, imperceptible settling oscillation ($< 220\text{ms}$) that communicates organic physicality without UI sluggishness.

```typescript
// In src/utils/motionPhysics.ts:
export const STEP_DETAIL_PANE_SPRING = {
  type: 'spring',
  stiffness: 420,
  damping: 17,
  mass: 0.8,
} as const;

export const HARMONIC_SPRING = STEP_DETAIL_PANE_SPRING;

export const PROGRESS_RAIL_SPRING = {
  type: 'spring',
  stiffness: 220,
  damping: 32,
  mass: 1.0,
} as const;

export const HALO_SPRING = {
  type: 'spring',
  stiffness: 320,
  damping: 30,
  mass: 0.9,
} as const;
```

---

### 7.3 Intra-Slide 3-Phase Kinetic Progression Lifecycle

Every multi-step slide in the White Presentation System partitions its items into 3 deterministic phases based on `activeStep`:

```
                       ┌─────────────────────────────────────┐
                       │           activeStep = 2            │
                       └─────────────────────────────────────┘
         Step 0                  Step 1                  Step 2                  Step 3
   ┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
   │    COMPLETED    │     │    COMPLETED    │     │     ACTIVE      │     │     FUTURE      │
   │  Opacity: 0.75  │     │  Opacity: 0.75  │     │  Opacity: 1.00  │     │  Opacity: 0.40  │
   │  Scale: 0.99    │     │  Scale: 0.99    │     │  Scale: 1.02    │     │  Scale: 0.97    │
   │  Desaturated    │     │  Desaturated    │     │  Active Halo    │     │  Blur: 1.25px   │
   │  Full Context   │     │  Full Context   │     │  Spring Pop     │     │  Hidden Detail  │
   └─────────────────┘     └─────────────────┘     └─────────────────┘     └─────────────────┘
```

1. **`completed` Phase ($index < activeStep$):**
   - **Opacity:** $0.75$
   - **Scale:** $0.99$
   - **Visual Styling:** Subtle $10\%$ desaturation, card borders soften to `var(--pres-border)`.
   - *Rationale:* Maintaining $0.75$ opacity ensures previously completed steps remain fully legible for macro architectural context, allowing the audience to follow the complete multi-stage chain of thought.
2. **`active` Phase ($index === activeStep$):**
   - **Opacity:** $1.00$
   - **Scale:** $1.02$
   - **Visual Styling:** Full saturation, luminous accent border (`var(--pres-accent)`), volumetric glow (`box-shadow: 0 0 24px -2px var(--pres-accent-glow)`), and Framer Motion spring pop.
   - *Rationale:* Serves as the primary optical magnet, commanding audience attention.
3. **`future` Phase ($index > activeStep$):**
   - **Opacity:** $0.40$
   - **Scale:** $0.97$
   - **Visual Styling:** Optical Gaussian blur of $1.25\text{px}$ (`filter: blur(1.25px)`), `pointer-events: none`.
   - *Rationale:* Eliminates premature reading of unannounced content while preserving visual rhythm and communicating overall roadmap breadth.

---

### 7.4 Framer Motion `layoutId` Step Halos
When the presenter advances from step to step, the glowing focus ring does not unmount and re-render. Instead, Framer Motion's shared `layoutId="active-step-halo"` animates the bounding box across adjacent DOM nodes:

```tsx
{isActive && (
  <motion.div
    layoutId="active-step-halo"
    className="absolute inset-0 rounded-xl pointer-events-none"
    style={{
      boxShadow: `0 0 0 1px ${accentColor}50, 0 0 24px -2px ${accentColor}60`,
      borderColor: accentColor,
    }}
    transition={HALO_SPRING}
  />
)}
```

---

## 8. Bubble Physics Simulation Engine

### 8.1 Physical Simulation Mechanics
For interactive orbital archetypes such as `services-gravity` (Services Bubble Gravity & Orbital Solar System), the presentation system incorporates a real-time, deterministic 2D physics simulation engine. The simulation balances 5 simultaneous vector forces:

```
                            ┌────────────────────────┐
                            │    Central Sun / Hub   │
                            │      p0 = (cx, cy)     │
                            └───────────┬────────────┘
                                        │
                         F_center = -kc(pi - p0)  (Centripetal Attractor)
                                        │
                                        ▼
                                  ┌───────────┐
                                  │ Satellite │
                                  │  Bubble i │
                                  └─────┬─────┘
                                       / \
         F_repulse,ij = ke / rij^2    /   \   Pairwise Collision Projection
        (Non-overlapping Coulomb)    /     \  when dij < (Ri + Rj)
                                    ▼       ▼
                              ┌──────────┐ ┌──────────┐
                              │ Bubble j │ │ Cursor   │ (Magnetic Envelope)
                              └──────────┘ └──────────┘
```

### 8.2 Governing Equations

1. **Center Attractor Force ($\vec{F}_{\text{center}}$):**
   $$\vec{F}_{\text{center}, i} = -k_c (\vec{p}_i - \vec{p}_0)$$
   where $\vec{p}_0$ is the solar hub position, $\vec{p}_i$ is the satellite bubble position, and $k_c$ is the centripetal pull constant.

2. **Pairwise Coulomb Repulsion ($\vec{F}_{\text{repulse}}$):**
   To prevent satellites from clustering onto identical orbits prior to contact, bubbles exert a distance-inverse repulsive force:
   $$\vec{F}_{\text{repulse}, ij} = \frac{k_e}{r_{ij}^2 + \epsilon} \hat{r}_{ij}$$
   where $\hat{r}_{ij} = \frac{\vec{p}_i - \vec{p}_j}{\|\vec{p}_i - \vec{p}_j\|}$ and $\epsilon = 100$ is a softening factor preventing numerical singularities.

3. **Pairwise Collision Projection & Penetration Resolution:**
   When distance $d_{ij} = \|\vec{p}_i - \vec{p}_j\| < (R_i + R_j)$, an elastic hard-body contact occurs:
   - **Overlap Penetration:** $\delta = (R_i + R_j) - d_{ij}$
   - **Position Projection:**
     $$\vec{p}_i' = \vec{p}_i + \frac{1}{2}\delta \hat{n}, \quad \vec{p}_j' = \vec{p}_j - \frac{1}{2}\delta \hat{n}$$
     where $\hat{n} = \frac{\vec{p}_i - \vec{p}_j}{d_{ij}}$.
   - **Impulse Restitution:**
     $$\vec{v}_i' = \vec{v}_i - (1 + e) \frac{(\vec{v}_i - \vec{v}_j) \cdot \hat{n}}{2} \hat{n}$$
     where $e \in [0, 1]$ is the restitution coefficient.

4. **Viscous Drag (Fluid Damping):**
   $$\vec{F}_{\text{drag}, i} = -\gamma \vec{v}_i$$
   where $\gamma$ is the fluid damping factor.

5. **Cursor Magnetic Pull Envelope:**
   When the presenter's cursor enters proximity envelope $R_{\text{mag}}$, a magnetic vector pulls bubbles toward the cursor or repels them:
   $$\vec{F}_{\text{cursor}, i} = F_{\text{mag}} \left(1 - \frac{d_{\text{cursor}}}{R_{\text{mag}}}\right)^2 \hat{r}_{\text{cursor}}$$

---

### 8.3 The 4 Tuned Physics Presets

The physics engine provides 4 specialized presets calibrated for varying slide node counts and presentation energy levels:

| Parameter | Symbol | `servicesDefault` | `calm` | `dense` | `lively` |
|:---|:---:|:---:|:---:|:---:|:---:|
| **Semantic Role** | — | Balanced corporate orbit | Executive quiet briefing | High node count ($12+$ items) | Audience demo / interactive |
| **Center Pull Constant** | $k_c$ | $0.0028$ | $0.0015$ | $0.0045$ | $0.0035$ |
| **Repulsion Constant** | $k_e$ | $3200$ | $2100$ | $4800$ | $4200$ |
| **Fluid Damping** | $\gamma$ | $0.045$ | $0.080$ | $0.035$ | $0.022$ |
| **Restitution Coeff** | $e$ | $0.55$ | $0.30$ | $0.70$ | $0.85$ |
| **Cursor Magnet Force** | $F_{\text{mag}}$ | $0.18$ | $0.08$ | $0.22$ | $0.35$ |
| **Max Terminal Velocity** | $v_{\text{max}}$ | $4.5\text{ px/f}$ | $2.2\text{ px/f}$ | $5.0\text{ px/f}$ | $8.0\text{ px/f}$ |
| **Collision Buffer** | $\Delta R$ | $6\text{px}$ | $4\text{px}$ | $8\text{px}$ | $10\text{px}$ |

#### Preset Detailed Behavior:
1. **`servicesDefault` (Balanced Enterprise Standard):**
   - Provides a stately, stable orbital rotation. Satellites drift gracefully around the central enterprise core with minimal oscillation.
2. **`calm` (Executive Memorandum):**
   - High fluid damping ($\gamma = 0.080$) and low restitution ($e = 0.30$). Eliminates sudden jerks, providing a tranquil, contemplative ambient motion.
3. **`dense` (Deep Architecture Topology):**
   - Designed for slides with $12$ to $20$ service microservices. Stiffer centripetal pull ($k_c = 0.0045$) and stronger electrostatic repulsion keep nodes evenly spaced without overlapping.
4. **`lively` (Dynamic Interactive Showcase):**
   - High velocity ceiling ($8.0\text{ px/frame}$), bouncy collisions ($e = 0.85$), and reactive cursor magnetic response. Bubbles scatter dynamically on hover and snap back via harmonic orbits.

---

## 9. Acoustic Safety & WebAudio Synthesizer Engine

The presentation system features a client-side synthesized acoustic cue generator (`src/audio/soundEngine.ts`) that requires **zero external MP3/WAV assets**. It synthesizes pure acoustic wave pulses directly using the browser's native `AudioContext`.

### 9.1 Synthesized Acoustic Event Matrix

| Event Name | Frequency ($f_0 \to f_1$) | Waveform | Duration | Master Gain | Cooldown | Semantic Purpose |
|:---|:---:|:---|:---:|:---:|:---:|:---|
| `slide-change` (next) | $240\text{ Hz} \to 480\text{ Hz}$ | Sine Chirp | $220\text{ms}$ | $0.35$ | $120\text{ms}$ | Forward slide transition |
| `slide-change` (prev) | $360\text{ Hz} \to 180\text{ Hz}$ | Sine Chirp | $220\text{ms}$ | $0.35$ | $120\text{ms}$ | Backward slide transition |
| `step-click` | $750\text{ Hz} \to 320\text{ Hz}$ | Triangle | $60\text{ms}$ | Step Vol ($0.30$) | $80\text{ms}$ | Intra-slide step advance |
| `step-reveal` | $440\text{ Hz} \to 660\text{ Hz}$ | Sine Chime | $120\text{ms}$ | Step Vol ($0.28$) | $80\text{ms}$ | Detail pane reveal |
| `keystroke-tap` | $1100\text{ Hz} \to 350\text{ Hz}$ | Triangle | $35\text{ms}$ | $0.30$ | $45\text{ms}$ | Tactile HUD navigation |
| `theme-switch` | $880\text{ Hz} \to 880\text{ Hz}$ | Pure Sine Harmonic | $160\text{ms}$ | $0.35$ | $100\text{ms}$ | Theme palette changed |
| `pop` | $580\text{ Hz} \to 840\text{ Hz}$ | High Sine Blip | $50\text{ms}$ | $0.25$ | $60\text{ms}$ | Badge hover / toggle |

### 9.2 Acoustic Safety & Speech Narration Ducking
- **Safety Ceiling:** Output gain is hard-clamped to a safe ceiling ($\le 0.40$ master, step clicks $\le 0.30$) to prevent harsh distortion through conference room PA speakers.
- **Narrator Voice Ducking:** When microphone narration is detected (`isAudioActive = true`), sound effects attenuate automatically by $-14\text{ dB}$.
- **Rate-Limiting & Cooldown Protection:** All sound cues query `hasCooldownElapsed(now, lastTime, windowMs)` to eliminate audio phase cancellation from rapid keyboard tapping.

### 9.3 Positive Boolean Audio Interface
```typescript
export interface AudioConfiguration {
  hasSoundFeedback: boolean;
  hasAudioSync: boolean;
  hasDuckingEnabled: boolean;
  isAudioMuted: boolean;
  masterVolumeLevel: number;
}
```
All audio state flags enforce positive boolean naming semantics.
