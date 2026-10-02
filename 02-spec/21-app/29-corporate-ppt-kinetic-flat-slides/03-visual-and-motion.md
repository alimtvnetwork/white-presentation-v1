# 03-Visual & Motion Design System: 10 Global PPT Master Themes, Kinetic Spring Physics & Acoustic Synchronization

> **Specification Identifier:** `02-spec/21-app/29-corporate-ppt-kinetic-flat-slides/03-visual-and-motion`  
> **Status:** `APPROVED CANONICAL SPECIFICATION`  
> **Target Release:** `v1.3.0`  
> **Author:** Spec Author 02  
> **Updated:** 2026-10-02  
> **Domain:** Global PPT Themes, Authentic HSL Triplet Tokens, Dynamic Micro-Shadows, Kinetic Spring Physics & WebAudio Synthesizer Engine  

---

## 1. System Vision & Visual Balance Mandates

The visual and motion design system in `29-corporate-ppt-kinetic-flat-slides` establishes institutional presentation authority by synthesizing the high-stakes narrative weight of **Global PPT** with the tactile, fluid responsiveness of **Flat Slide Show**. To maintain cognitive clarity and eliminate visual fatigue during prolonged boardroom presentations, high-definition projected displays, and interactive desktop viewing, the presentation stage strictly enforces three core foundational rules:

### 1.1 The 60/30/10 Visual Weight Distribution
Every slide canvas strictly balances surface contrast and chromatic intensity across three calibrated visual tiers:
1. **$60\%$ Canvas Wash (Dominant Background Foundation):**
   - Pure, expansive negative space driven by `--pres-bg` and subtle atmospheric radial wash gradients.
   - For dark themes: deep obsidian, velvet carbon, or midnight navy (`#0B0B0E`, `#020617`, `#070A12`) delivering radiant contrast for content without eye strain.
   - For light themes: crisp pure white or warm archival cream parchment (`#FFFFFF`, `#FAF7F0`) delivering high editorial clarity.
2. **$30\%$ Structural Hierarchy (Bento Cards & Glass Surfaces):**
   - Translucent frosted glass containers, Bento grids, code viewer panes, and structural divider rules.
   - Applied via `--pres-card-bg` (`rgba(..., 0.85)` to `rgba(..., 0.92)`), backdrop blur (`16px`), and high-precision hairline borders (`--pres-card-border`, `1px solid`).
3. **$10\%$ Vivid Accents (Focal Kinetic Anchors):**
   - Saturated brand focal points: active step pins, glowing step halos, timeline milestone indicators, key KPI figures, and interactive action buttons.
   - Applied via `--pres-accent` (`hsl(var(--pres-accent-hsl))`) and ambient volumetric aura glows (`--pres-accent-glow`).

```
┌────────────────────────────────────────────────────────────────────────┐
│ 60% Canvas Wash (Background negative space, atmospheric ambient wash)  │
│                                                                        │
│   ┌──────────────────────────────────────────────────────────────┐     │
│   │ 30% Structural Bento Card Surface (Frosted glass, 1px border)│     │
│   │                                                              │     │
│   │   ┌───────────────┐               ┌────────────────────┐     │     │
│   │   │ Active Item   │ ◄───────────► │ 10% Vivid Accent   │     │     │
│   │   │ (Step Pin)    │               │ (Halo, KPI, Glow)  │     │     │
│   │   └───────────────┘               └────────────────────┘     │     │
│   │                                                              │     │
│   └──────────────────────────────────────────────────────────────┘     │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. 4-Plane Spatial Depth Hierarchy

To establish tactile depth without heavy, dated skeuomorphism, the stage maps visual elements onto 4 distinct z-axis planes. Each plane declares explicit elevation, opacity, border styling, and backdrop blur:

| Plane | Name | Semantic Elevation | Visual Treatment | Dominant Tokens |
|:---:|:---|:---:|:---|:---|
| **Plane 0** | **Surface** | Ground Level ($z = 0$) | Canvas background, atmospheric radial gradients, subtle dot-matrix pattern ($1.5\text{px}$ dots spaced $28\text{px}$). | `--pres-bg`, `--pres-dot-matrix` |
| **Plane 1** | **Raised** | Base Cards ($z = 10$) | Inactive Bento containers, table rows, timeline rails, card headers. $1\text{px}$ border, backdrop blur $12\text{px}$–$16\text{px}$. | `--pres-card-bg`, `--pres-card-border` |
| **Plane 2** | **Elevated** | Interactive ($z = 20$) | Hovered cards, active step detail panes, expanded accordions, selected comparison columns. Volumetric shadow + halo stroke. | `--pres-accent-border`, `--pres-elevation-shadow` |
| **Plane 3** | **Floating** | HUD & Modal ($z = 30$) | Fixed bottom presenter HUD, theme selector menu, active step halo (`layoutId`), modal dialogs, tooltip popovers. | `--pres-hud-bg`, `--pres-accent-glow` |

---

## 3. Dynamic Micro-Shadow Contrast Architecture

Text legibility on complex presentation backgrounds requires ultra-crisp edge separation. Heavy drop shadows create muddy, unprofessional halos, while zero shadow results in contrast failure when slides cross dark/light boundary conditions.

The system enforces **Dynamic Optical Micro-Shadows** computed per theme polarity:

### 3.1 Mathematical Specification of Micro-Shadows
- **Dark Obsidian Themes (`isDark: true`):**
  $$\text{Shadow}_{\text{dark}} = \text{rgb}(0\ 0\ 0)\ 1\text{px}\ 0.7\text{px}\ 0\text{px}$$
  *Rationale:* Provides a razor-thin, 1-pixel sub-surface contour that crisply defines glowing headlines, white typographic characters, and vibrant gold/indigo badges against dark obsidian card surfaces without perceptible blur radius.
- **Light Editorial Themes (`isDark: false`):**
  $$\text{Shadow}_{\text{light}} = \text{rgb}(255\ 255\ 255)\ 1\text{px}\ 0.7\text{px}\ 0\text{px}$$
  *Rationale:* Provides a crisp, high-relief light bevel contour behind dark charcoal or navy text characters, preventing ink bleeding and preserving optical sharpness on high-lumen projectors.

```typescript
export function getHeaderShadow(isDark: boolean): string {
  if (isDark) {
    return 'rgb(0 0 0) 1px 0.7px 0px';
  }
  return 'rgb(255 255 255) 1px 0.7px 0px';
}
```

---

## 4. The 10 Global PPT Master Color Themes

The system standardizes 10 production-grade corporate and developer master themes. Each theme provides **authentic HSL triplet tokens** (space-separated `H S% L%` without outer `hsl()`), allowing runtime opacity compositing in Tailwind and CSS via `hsl(var(--pres-accent-hsl) / <alpha>)`.

```
The 10 Global PPT Master Color Themes:
├── Executive Boardroom & Prestige
│   ├── 01. bright-gold -> true-dark (Deep Obsidian Abyss & Luminous Radiant Gold / Indigo)
│   ├── 02. noir-gold -> crimson-executive (Matte Charcoal Minimalist & Brushed Champagne Gold / Ruby)
│   └── 03. navy-blue -> midnight-luxe (Deep Maritime Institutional & Electric Sapphire Blue)
├── Developer & IDE Culture
│   ├── 04. vscode-dark -> midnight-luxe (Developer Workstation Slate & Studio Blue)
│   ├── 05. dracula -> wp-exam-purple (Vampire Gothic Slate & Electric Purple/Pink)
│   ├── 06. monokai -> emerald-growth (Pro Code Editor & High-Contrast Lime/Gold / Emerald)
│   └── 07. github-light -> white-brand (Pristine Clean Open-Source White & Violet Brand)
├── Operating System & Material
│   ├── 08. macos-sonoma -> nord-frost (Cupertino Dusky Glass & Glacial Arctic Sky Blue)
│   └── 09. windows-11 -> cyber-neon (Fluent Mica Dark Slate & Electric Cyan / Synthwave)
└── Archival Literature & Whitepapers
    └── 10. paper-ink -> paper-editorial (Warm Cream Parchment & Classical Fountain Pen Navy)

> [!NOTE]
> **Canonical Production Theme IDs:** In `src/themes/gradientTokens.ts` and `01-overview.md`, canonical palette IDs are named `white-brand`, `paper-editorial`, `true-dark`, `emerald-growth`, `wp-exam-purple`, `midnight-luxe`, `sunset-horizon`, `cyber-neon`, `crimson-executive`, and `nord-frost`. Legacy descriptor keys (`bright-gold`, `github-light`, etc.) are fully supported via non-enumerable descriptor mappings for backward compatibility.
```

### 4.1 Theme Token Definitions & HSL Triplet Architecture

```typescript
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
  // Authentic HSL triplet tokens for dynamic CSS compositing:
  accentHsl: string;       // e.g. "45 96% 56%"
  bgHsl: string;           // e.g. "222 47% 7%"
  textHsl: string;         // e.g. "45 90% 96%"
  cardBgHsl: string;       // e.g. "222 45% 12%"
  subtextHsl: string;      // e.g. "215 20% 65%"
  cardBorderHsl: string;   // e.g. "45 80% 40%"
  stops: GradientStop[];   // 10-step precision ramp (S0 through S9)
}
```

### 4.2 Comprehensive 10-Theme Master Catalog

#### 01. `bright-gold` (Prestige Executive Keynote - Default Dark Master)
- **Concept:** High-prestige executive boardroom presentation. Midnight obsidian canvas paired with radiant, luminous 24-karat gold typography and step pins.
- **Polarity:** `isDark: true` | **Dot Matrix:** `true`
- **Canvas Background:** `#0B0E14` (`222 47% 7%`)
- **Text Color:** `#FFF8E7` (`45 90% 96%`) | **Subtext:** `#A3A8B8` (`215 20% 65%`)
- **Card Background:** `rgba(18, 24, 38, 0.88)` (`222 45% 12%`)
- **Card Border:** `rgba(234, 179, 8, 0.35)` (`45 80% 40%`)
- **Accent Color:** `#EAB308` (`45 96% 56%`)
- **Dynamic Header Shadow:** `rgb(0 0 0) 1px 0.7px 0px`
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
| **$S_9$** | Obsidian Ink | `222 47% 7%` | `#0B0E14` | 0.05 | 1.0:1 |

---

#### 02. `noir-gold` (Ultra-Minimalist Matte Black & Brushed Champagne)
- **Concept:** Understated, luxury boutique agency aesthetic. Pure carbon matte black canvas with warm champagne brushed gold rules and ivory typography.
- **Polarity:** `isDark: true` | **Dot Matrix:** `false`
- **Canvas Background:** `#080808` (`0 0% 3%`)
- **Text Color:** `#F5F3EF` (`40 20% 95%`) | **Subtext:** `#8C8984` (`40 5% 53%`)
- **Card Background:** `rgba(20, 20, 20, 0.90)` (`0 0% 8%`)
- **Card Border:** `rgba(212, 175, 55, 0.28)` (`43 65% 52%`)
- **Accent Color:** `#D4AF37` (`43 65% 52%`)
- **Dynamic Header Shadow:** `rgb(0 0 0) 1px 0.7px 0px`
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
- **Dynamic Header Shadow:** `rgb(0 0 0) 1px 0.7px 0px`
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
- **Dynamic Header Shadow:** `rgb(0 0 0) 1px 0.7px 0px`
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
- **Dynamic Header Shadow:** `rgb(0 0 0) 1px 0.7px 0px`
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
- **Dynamic Header Shadow:** `rgb(255 255 255) 1px 0.7px 0px`
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
- **Dynamic Header Shadow:** `rgb(255 255 255) 1px 0.7px 0px`
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
- **Dynamic Header Shadow:** `rgb(0 0 0) 1px 0.7px 0px`
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
- **Dynamic Header Shadow:** `rgb(0 0 0) 1px 0.7px 0px`
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
- **Dynamic Header Shadow:** `rgb(0 0 0) 1px 0.7px 0px`
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

## 5. Kinetic Motion Physics & Step Progression Engine

The White Presentation System models all visual transitions as natural physical systems. Rather than relying on static linear timers, transitions mimic mechanical springs and deceleration envelopes.

### 5.1 Calibrated Motion Transition Curves

```typescript
/**
 * Canonical motion transition curves.
 */
export const EXPO_OUT = [0.22, 1, 0.36, 1] as const;      // Quintic / Exponential Deceleration
export const OVERSHOOT = [0.34, 1.56, 0.64, 1] as const;   // Subtle Spring Overshoot / Snap
export const ARC_EASE = [0.4, 0, 0.2, 1] as const;        // Material Standard Curve
```

1. **`EXPO_OUT` (`[0.22, 1, 0.36, 1]`):**
   - Applied to slide-to-slide translations, large panel entries, and fullscreen reveals.
   - Initial velocity is high, tapering off smoothly with zero mechanical abruptness.
2. **`OVERSHOOT` (`[0.34, 1.56, 0.64, 1]`):**
   - Applied to discrete badge pops, active step pin expansion, and interactive toggle switches.
   - Provides an organic tactile snap ($\sim 1.04\times$ overshoot) before settling instantly into resting equilibrium.

### 5.2 Harmonic Spring Physics Calibration
Intra-slide stepping and dynamic detail pane transitions are governed by the damped harmonic oscillator differential equation:

$$m \frac{d^2x}{dt^2} + c \frac{dx}{dt} + k x = 0$$

- **Stiffness ($k$):** $420\text{ N/m}$
- **Damping ($c$):** $17\text{ N}\cdot\text{s/m}$
- **Mass ($m$):** $0.8\text{ kg}$

```typescript
export const HARMONIC_SPRING = {
  type: 'spring',
  stiffness: 420,
  damping: 17,
  mass: 0.8,
} as const;

export const HALO_SPRING = {
  type: 'spring',
  stiffness: 320,
  damping: 30,
  mass: 0.9,
} as const;
```

### 5.3 Intra-Slide 3-Phase Kinetic Progression Lifecycle

Every multi-step slide partitions its items into 3 deterministic phases based on `activeStep`:

```
                       ┌─────────────────────────────────────┐
                       │           activeStep = 2            │
                       └─────────────────────────────────────┘
         Step 0                  Step 1                  Step 2                  Step 3
   ┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
   │      PAST       │     │      PAST       │     │     ACTIVE      │     │     FUTURE      │
   │  Opacity: 0.45  │     │  Opacity: 0.45  │     │  Opacity: 1.00  │     │  Opacity: 0.18  │
   │  Scale: 0.98    │     │  Scale: 0.98    │     │  Scale: 1.02    │     │  Scale: 0.96    │
   │  Desaturated    │     │  Desaturated    │     │  Active Halo    │     │  Blur: 1.25px   │
   └─────────────────┘     └─────────────────┘     └─────────────────┘     └─────────────────┘
```

1. **`past` Phase ($index < activeStep$):**
   - Visual Treatment: `opacity: 0.45`, `transform: scale(0.98)`, subtle grayscale desaturation ($20\%$).
   - Communicates completed milestones that remain legible for overall architectural context.
2. **`active` Phase ($index === activeStep$):**
   - Visual Treatment: `opacity: 1.00`, `transform: scale(1.02)`, full saturation, dynamic accent border (`var(--pres-accent)`), and ambient focus glow (`box-shadow: 0 0 24px -2px var(--pres-accent-glow)`).
   - Serves as the primary visual magnet guiding the audience's attention.
3. **`future` Phase ($index > activeStep$):**
   - Visual Treatment: `opacity: 0.18`, `transform: scale(0.96)`, `filter: blur(1.25px)`, `pointer-events: none`.
   - Prevents premature cognitive scanning while hinting at forthcoming content depth.

### 5.4 Framer Motion `layoutId` Step Halos
When the presenter advances from step to step, the glowing focus ring must not abruptly disappear and re-render. Instead, Framer Motion's shared `layoutId="active-step-halo"` dynamically animates the bounding box across adjacent DOM nodes, creating continuous kinetic tracking:

```tsx
{isActive && (
  <motion.div
    layoutId="active-step-halo"
    className="absolute inset-0 rounded-xl pointer-events-none"
    style={{
      boxShadow: `0 0 0 1px ${accentColor}40, 0 0 24px -2px ${accentColor}50`,
      borderColor: accentColor,
    }}
    transition={HALO_SPRING}
  />
)}
```

---

## 6. WebAudio Synthesizer Sound Engine

The presentation system features a client-side synthesized audio cue generator (`src/audio/soundEngine.ts`) that requires **zero external MP3/WAV assets**. It synthesizes pure acoustic wave pulses directly using the browser's native `AudioContext`.

### 6.1 Synthesized Acoustic Event Matrix

| Event Name | Frequency ($f_0 \to f_1$) | Waveform | Duration | Master Gain | Cooldown | Semantic Purpose |
|:---|:---:|:---|:---:|:---:|:---:|:---|
| `slide-change` (next) | $240\text{ Hz} \to 480\text{ Hz}$ | Sine Chirp | $220\text{ms}$ | $0.35$ | $120\text{ms}$ | Forward slide transition |
| `slide-change` (prev) | $360\text{ Hz} \to 180\text{ Hz}$ | Sine Chirp | $220\text{ms}$ | $0.35$ | $120\text{ms}$ | Backward slide transition |
| `step-click` | $750\text{ Hz} \to 320\text{ Hz}$ | Triangle | $60\text{ms}$ | Step Vol ($0.30$) | $80\text{ms}$ | Intra-slide step advance |
| `step-reveal` | $440\text{ Hz} \to 660\text{ Hz}$ | Sine Chime | $120\text{ms}$ | Step Vol ($0.28$) | $80\text{ms}$ | Detail pane reveal |
| `keystroke-tap` | $1100\text{ Hz} \to 350\text{ Hz}$ | Triangle | $35\text{ms}$ | $0.30$ | $45\text{ms}$ | Tactile HUD navigation |
| `theme-switch` | $880\text{ Hz} \to 880\text{ Hz}$ | Pure Sine Harmonic | $160\text{ms}$ | $0.35$ | $100\text{ms}$ | Theme palette changed |
| `pop` | $580\text{ Hz} \to 840\text{ Hz}$ | High Sine Blip | $50\text{ms}$ | $0.25$ | $60\text{ms}$ | Badge hover / toggle |

### 6.2 Volume Governance & Audio Ducking
- **Safety Ceiling:** Output gain is hard-clamped to a safe ceiling ($\le 0.40$ master, step clicks $\le 0.30$) to prevent harsh distortion through conference room PA speakers.
- **Narrator Voice Ducking:** When microphone narration is detected (`isAudioActive = true`), sound effects attenuate automatically by $-14\text{ dB}$.
- **Rate-Limiting & Cooldown Protection:** All sound cues query `hasCooldownElapsed(now, lastTime, windowMs)` to eliminate audio phase cancellation from rapid keyboard tapping.

### 6.3 Positive Boolean Audio Interface

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
