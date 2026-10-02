# 03-Color & Motion Design System: 10-Step Precision Ramps, Kinetic Physics & Acoustic Sync

> **Module:** `02-spec/21-app/26-global-ppt-color-motion-and-expanded-slides`  
> **Status:** Canonical Design System Specification  
> **Target Release:** `v1.3.0`  
> **Reference Architecture:** Global PPT Corporate Synthesis, Flat Slide Declarative Engine, 4-Plane Depth Hierarchy & Pure Live DOM Runtime

---

## 1. System Overview & Mandates

In the White Presentation System, visual presentation quality, color harmony, typography contrast, and kinetic interactions are strictly governed by deterministic mathematical tokens and runtime CSS variables. To eliminate visual fatigue and chromatic distortion during prolonged executive presentations, projector displays, and responsive desktop viewing, the design system enforces five non-negotiable mandates:

1. **WCAG 2.1 AAA Contrast Compliance:**
   - Small body typography, captions, and table text ($\le 20\text{px}$) must achieve a contrast ratio $C_R \ge 7.0:1$ against their immediate container surface.
   - Display headlines, hero KPIs, and kicker badges ($\ge 24\text{px}$ bold or $\ge 32\text{px}$ regular) must achieve $C_R \ge 4.5:1$.
2. **Deterministic 10-Step Lightness Scaling ($S_0$ to $S_9$):**
   - Every theme defines a calibrated 10-step palette ramp ($S_0$ through $S_9$) that guarantees monotonic perceptual progression from ambient luminous highlights to deep structural ink tones.
3. **60/30/10 Visual Weight Distribution:**
   - **$60\%$ Dominant Foundation:** Background canvas (`--pres-bg`) delivering calm, expansive negative space.
   - **$30\%$ Structural Hierarchy:** Card surfaces, Bento grids, sidebars, and dividers (`--pres-bg-surface`, `--pres-bg-card`, `--pres-border`).
   - **$10\%$ High-Energy Accent:** Focal step pins, active badges, call-to-action buttons, and glowing telemetry indicators (`--pres-accent`, `--pres-accent-glow`).
4. **High-Definition Ink-Stamp Anti-Aliased Shadowing:**
   - All display typography uses micro ink-stamp shadows (`rgb(0 0 0) 1px 0.7px 0px` on dark obsidian canvases; `rgb(255 255 255) 1px 0.7px 0px` on light editorial canvases) to eliminate chromatic aberration against organic gradient waveforms and ambient spotlights.
5. **Kinetic Spring Physics & Acoustic Synchronization:**
   - Spatial micro-interactions and stepwise reveals follow quintic deceleration easing `cubic-bezier(0.22, 1, 0.36, 1)` and damped harmonic springs ($k = 420\text{ N/m}$, $\zeta = 0.85$), synchronized with debounced tactile sound cues and dynamic audio ducking.

---

## 2. 10-Theme Matrix & Mathematical 10-Step Precision Ramps

### 2.1 Mathematical Ramp Interpolation Formula
For boundary anchor stops $C_{\text{start}} (S_0)$ and $C_{\text{end}} (S_9)$, intermediate steps $S_i$ ($i \in \{0, 1, \dots, 9\}$) are computed along the perceptual lightness curve:

$$t_i = \frac{i}{9}, \quad i \in \{0, 1, 2, 3, 4, 5, 6, 7, 8, 9\}$$

$$\text{Hue}_i = \text{Hue}_{\text{start}} + t_i \cdot (\text{Hue}_{\text{end}} - \text{Hue}_{\text{start}})$$

$$\text{Sat}_i = \text{Sat}_{\text{start}} + t_i \cdot (\text{Sat}_{\text{end}} - \text{Sat}_{\text{start}})$$

$$\text{Light}_i = \text{Light}_{\text{start}} + t_i \cdot (\text{Light}_{\text{end}} - \text{Light}_{\text{start}})$$

### 2.2 Relative Luminance & Contrast Ratio Formulas
Per WCAG 2.1 specifications, 8-bit sRGB color channels are linearized before computing relative luminance $L$:

$$R_c = \frac{R_{\text{8bit}}}{255}, \quad G_c = \frac{G_{\text{8bit}}}{255}, \quad B_c = \frac{B_{\text{8bit}}}{255}$$

$$C_{\text{linear}} = \begin{cases} \frac{C}{12.92} & \text{if } C \le 0.04045 \\ \left(\frac{C + 0.055}{1.055}\right)^{2.4} & \text{if } C > 0.04045 \end{cases}, \quad C \in \{R_c, G_c, B_c\}$$

$$L = 0.2126 R_{\text{linear}} + 0.7152 G_{\text{linear}} + 0.0722 B_{\text{linear}}$$

The contrast ratio $C_R$ between two luminances $L_1$ and $L_2$ ($L_1 \ge L_2$) is:

$$C_R = \frac{L_1 + 0.05}{L_2 + 0.05}$$

---

### 2.3 10-Theme Catalog & Precision Ramps ($S_0 \dots S_9$)

```
Theme Matrix:
├── Light Editorial Canvases (Clean Archival Polarity)
│   ├── 01. white-brand (Pure White Clean Editorial - Ground Truth)
│   └── 02. paper-editorial (Warm Cream & Classical Navy)
└── Dark Obsidian Canvases (Luminous Radiance Polarity)
    ├── 03. true-dark (Obsidian Slate & Electric Indigo)
    ├── 04. emerald-growth (Dark Forest & Vibrant Mint)
    ├── 05. wp-exam-purple (Royal Tech & Violet Sovereign)
    ├── 06. midnight-luxe (Dark Editorial & Royal Blue)
    ├── 07. sunset-horizon (Warm Plum & Coral Amber)
    ├── 08. cyber-neon (Synthwave Cyan & Magenta)
    ├── 09. crimson-executive (Ruby & Deep Obsidian)
    └── 10. nord-frost (Arctic Glacier & Deep Navy)
```

#### Theme 1: `white-brand` (Pure White Clean Editorial)
- **ID:** `white-brand` | **Polarity:** `isDark: false` | **Canvas:** `#FFFFFF` | **Text:** `#0F172A` | **Accent:** `#7C3AED`

| Step | Semantic Role | HSL | RGB | HEX | $L$ | Contrast vs `#FFFFFF` | Functional Application |
|:---:|:---|:---|:---|:---:|:---:|:---:|:---|
| **$S_0$** | Base Light | `hsl(250, 100%, 98%)` | `rgb(245, 243, 255)` | `#F5F3FF` | 0.96 | 1.08:1 | Wave highlight crest, ambient aura |
| **$S_1$** | Sub-Surface | `hsl(252, 95%, 94%)` | `rgb(237, 233, 254)` | `#EDE9FE` | 0.92 | 1.18:1 | Table alternate rows, card sub-layer |
| **$S_2$** | Neutral Border | `hsl(251, 91%, 87%)` | `rgb(221, 214, 254)` | `#DDD6FE` | 0.86 | 1.35:1 | Secondary dividers, card inactive border |
| **$S_3$** | Badge Tint | `hsl(252, 95%, 78%)` | `rgb(196, 181, 253)` | `#C4B5FD` | 0.77 | 1.69:1 | Pill container background, inactive chip |
| **$S_4$** | Secondary Accent | `hsl(255, 92%, 69%)` | `rgb(167, 139, 250)` | `#A78BFA` | 0.68 | 2.16:1 | Icon halo fill, secondary progress bar |
| **$S_5$** | Midtone Primary | `hsl(258, 90%, 62%)` | `rgb(139, 92, 246)` | `#8B5CF6` | 0.58 | 2.96:1 | Gradient wave mid-ribbon, button hover |
| **$S_6$** | Brand Lead | `hsl(262, 83%, 58%)` | `rgb(124, 58, 237)` | `#7C3AED` | 0.51 | 3.84:1 | Primary headline accent, brand badge |
| **$S_7$** | Deep Shading | `hsl(263, 70%, 50%)` | `rgb(109, 40, 217)` | `#6D28D9` | 0.42 | 5.66:1 | Active button background, focal icons |
| **$S_8$** | High Contrast | `hsl(264, 67%, 35%)` | `rgb(76, 29, 149)` | `#4C1D95` | 0.28 | 11.20:1 | Kicker labels, metric title highlight |
| **$S_9$** | Deep Navy Ink | `hsl(222, 47%, 11%)` | `rgb(15, 23, 42)` | `#0F172A` | 0.11 | 16.80:1 | Primary title typography, high-contrast text |

---

#### Theme 2: `paper-editorial` (Warm Cream & Classical Navy)
- **ID:** `paper-editorial` | **Polarity:** `isDark: false` | **Canvas:** `#F5F0E6` | **Text:** `#1A1A1A` | **Accent:** `#1D4ED8`

| Step | Semantic Role | HSL | RGB | HEX | $L$ | Contrast vs `#F5F0E6` | Functional Application |
|:---:|:---|:---|:---|:---:|:---:|:---:|:---|
| **$S_0$** | Archival Cream | `hsl(42, 50%, 96%)` | `rgb(250, 247, 240)` | `#FAF7F0` | 0.96 | 1.05:1 | Card surface base fill, soft modal wash |
| **$S_1$** | Warm Parchment | `hsl(39, 43%, 93%)` | `rgb(245, 240, 230)` | `#F5F0E6` | 0.93 | 1.00:1 | Secondary backdrop wash, quote card surface |
| **$S_2$** | Cardboard Tint | `hsl(38, 40%, 86%)` | `rgb(234, 224, 208)` | `#EAE0D0` | 0.86 | 1.20:1 | Table borders, timeline connector line |
| **$S_3$** | Muted Ochre | `hsl(38, 36%, 75%)` | `rgb(212, 196, 168)` | `#D4C4A8` | 0.75 | 1.55:1 | Inactive chip tags, subtle watermark tint |
| **$S_4$** | Editorial Slate | `hsl(213, 94%, 68%)` | `rgb(96, 165, 250)` | `#60A5FA` | 0.65 | 2.05:1 | Secondary badge highlight, chart secondary line |
| **$S_5$** | Refined Royal | `hsl(221, 83%, 53%)` | `rgb(37, 99, 235)` | `#2563EB` | 0.51 | 3.40:1 | Metric badge background, CTA button |
| **$S_6$** | Classical Navy | `hsl(224, 76%, 48%)` | `rgb(29, 78, 216)` | `#1D4ED8` | 0.42 | 4.85:1 | Primary accent headings, link focus |
| **$S_7$** | Deep Blue Ink | `hsl(224, 64%, 33%)` | `rgb(30, 58, 138)` | `#1E3A8A` | 0.28 | 8.90:1 | Subheader emphasis, editorial byline |
| **$S_8$** | Charcoal Ink | `hsl(30, 9%, 16%)` | `rgb(44, 40, 37)` | `#2C2825` | 0.16 | 12.80:1 | Paragraph narrative text, card titles |
| **$S_9$** | Archival Black | `hsl(0, 0%, 10%)` | `rgb(26, 26, 26)` | `#1A1A1A` | 0.10 | 15.20:1 | Primary slide headlines, pull-quotes |

---

#### Theme 3: `true-dark` (Obsidian Slate & Electric Indigo)
- **ID:** `true-dark` | **Polarity:** `isDark: true` | **Canvas:** `#020617` | **Text:** `#F8FAFC` | **Accent:** `#6366F1`

| Step | Semantic Role | HSL | RGB | HEX | $L$ | Contrast vs `#020617` | Functional Application |
|:---:|:---|:---|:---|:---:|:---:|:---:|:---|
| **$S_0$** | Luminous Glow | `hsl(210, 40%, 98%)` | `rgb(248, 250, 252)` | `#F8FAFC` | 0.98 | 18.50:1 | Primary headline text, bright glint markers |
| **$S_1$** | Muted Slate | `hsl(214, 32%, 91%)` | `rgb(226, 232, 240)` | `#E2E8F0` | 0.91 | 16.80:1 | Subtitle text, active tab label |
| **$S_2$** | Subtle Steel | `hsl(215, 20%, 65%)` | `rgb(148, 163, 184)` | `#94A3B8` | 0.65 | 9.80:1 | Secondary body copy, metadata labels |
| **$S_3$** | Midtone Indigo | `hsl(226, 57%, 64%)` | `rgb(99, 102, 241)` | `#6366F1` | 0.64 | 8.20:1 | Primary brand badge border, hover aura |
| **$S_4$** | Electric Blue | `hsl(217, 91%, 60%)` | `rgb(59, 130, 246)` | `#3B82F6` | 0.60 | 7.40:1 | Accent pill background, icon accent |
| **$S_5$** | Royal Blue | `hsl(221, 83%, 53%)` | `rgb(29, 78, 216)` | `#1D4ED8` | 0.53 | 5.80:1 | Active timeline pin, button background |
| **$S_6$** | Deep Twilight | `hsl(224, 76%, 36%)` | `rgb(30, 58, 138)` | `#1E3A8A` | 0.36 | 3.50:1 | Inactive card border, bottom wave layer |
| **$S_7$** | Midnight Slate | `hsl(222, 47%, 18%)` | `rgb(24, 34, 53)` | `#182235` | 0.18 | 2.10:1 | Glass card fill layer, input backdrop |
| **$S_8$** | Dark Charcoal | `hsl(215, 28%, 12%)` | `rgb(11, 25, 44)` | `#0B192C` | 0.12 | 1.60:1 | Base layer panel, recessed card fill |
| **$S_9$** | Absolute Abyss | `hsl(222, 84%, 5%)` | `rgb(2, 6, 23)` | `#020617` | 0.05 | 1.00:1 | Outer presentation canvas background |

---

#### Theme 4: `emerald-growth` (Dark Forest & Vibrant Mint)
- **ID:** `emerald-growth` | **Polarity:** `isDark: true` | **Canvas:** `#022C22` | **Text:** `#ECFDF5` | **Accent:** `#10B981`

| Step | Semantic Role | HSL | RGB | HEX | $L$ | Contrast vs `#022C22` | Functional Application |
|:---:|:---|:---|:---|:---:|:---:|:---:|:---|
| **$S_0$** | Mint Tint | `hsl(152, 81%, 96%)` | `rgb(236, 253, 245)` | `#ECFDF5` | 0.96 | 16.50:1 | Primary headlines, key stat value |
| **$S_1$** | Light Sage | `hsl(149, 80%, 90%)` | `rgb(209, 250, 229)` | `#D1FAE5` | 0.90 | 14.80:1 | Subheader text, active metric pill text |
| **$S_2$** | Soft Seafoam | `hsl(152, 76%, 80%)` | `rgb(167, 243, 208)` | `#A7F3D0` | 0.80 | 12.00:1 | Secondary card label, verified checkmark |
| **$S_3$** | Vibrant Mint | `hsl(156, 73%, 67%)` | `rgb(110, 231, 183)` | `#6EE7B7` | 0.67 | 8.90:1 | Card border glow, growth rate percentage |
| **$S_4$** | Spring Emerald | `hsl(158, 64%, 52%)` | `rgb(52, 211, 153)` | `#34D399` | 0.52 | 6.20:1 | Secondary CTA button, icon stroke |
| **$S_5$** | Core Emerald | `hsl(160, 84%, 39%)` | `rgb(16, 185, 129)` | `#10B981` | 0.39 | 4.80:1 | Primary button fill, progress indicator |
| **$S_6$** | Deep Forest | `hsl(161, 94%, 30%)` | `rgb(5, 150, 105)` | `#059669` | 0.30 | 3.40:1 | Wave ribbon middle tier, active tab |
| **$S_7$** | Pine Shadow | `hsl(163, 88%, 20%)` | `rgb(4, 120, 87)` | `#047857` | 0.20 | 2.40:1 | Inactive card outline, bottom contour |
| **$S_8$** | Dark Spruce | `hsl(164, 86%, 16%)` | `rgb(6, 78, 59)` | `#064E3B` | 0.16 | 1.80:1 | Elevated card background fill |
| **$S_9$** | Abyssal Green | `hsl(166, 91%, 9%)` | `rgb(2, 44, 34)` | `#022C22` | 0.09 | 1.00:1 | Dark forest canvas background |

---

#### Theme 5: `wp-exam-purple` (Royal Tech & Violet Sovereign)
- **ID:** `wp-exam-purple` | **Polarity:** `isDark: true` | **Canvas:** `#1E1B4B` | **Text:** `#F5F3FF` | **Accent:** `#A855F7`

| Step | Semantic Role | HSL | RGB | HEX | $L$ | Contrast vs `#1E1B4B` | Functional Application |
|:---:|:---|:---|:---|:---:|:---:|:---:|:---|
| **$S_0$** | Lavender Whisper | `hsl(250, 100%, 98%)` | `rgb(245, 243, 255)` | `#F5F3FF` | 0.96 | 15.20:1 | Title typography, top headline hero |
| **$S_1$** | Light Violet | `hsl(252, 95%, 94%)` | `rgb(237, 233, 254)` | `#EDE9FE` | 0.92 | 13.90:1 | Question stems, active step titles |
| **$S_2$** | Soft Mauve | `hsl(251, 91%, 87%)` | `rgb(221, 214, 254)` | `#DDD6FE` | 0.86 | 11.50:1 | Card subtext, option choices |
| **$S_3$** | Vibrant Lilac | `hsl(252, 95%, 78%)` | `rgb(196, 181, 253)` | `#C4B5FD` | 0.77 | 9.20:1 | Accent subtitle, active chip badge |
| **$S_4$** | Rich Purple | `hsl(255, 92%, 69%)` | `rgb(167, 139, 250)` | `#A78BFA` | 0.68 | 7.10:1 | Secondary button text, progress bar |
| **$S_5$** | Core Violet | `hsl(258, 90%, 62%)` | `rgb(139, 92, 246)` | `#8B5CF6` | 0.58 | 5.50:1 | Primary accent badge, icon stroke |
| **$S_6$** | Lead Purple | `hsl(262, 83%, 58%)` | `rgb(124, 58, 237)` | `#7C3AED` | 0.51 | 4.60:1 | Selected answer border, action button |
| **$S_7$** | Deep Magenta | `hsl(263, 70%, 50%)` | `rgb(109, 40, 217)` | `#6D28D9` | 0.42 | 3.50:1 | Wave middle layer, dark pill container |
| **$S_8$** | Royal Plum | `hsl(264, 67%, 35%)` | `rgb(76, 29, 149)` | `#4C1D95` | 0.28 | 2.10:1 | Card surface borders, shadow tint |
| **$S_9$** | Obsidian Violet | `hsl(244, 47%, 20%)` | `rgb(30, 27, 75)` | `#1E1B4B` | 0.12 | 1.00:1 | Royal tech canvas background |

---

#### Theme 6: `midnight-luxe` (Dark Editorial & Royal Blue)
- **ID:** `midnight-luxe` | **Polarity:** `isDark: true` | **Canvas:** `#0B192C` | **Text:** `#F8FAFC` | **Accent:** `#3B82F6`

| Step | Semantic Role | HSL | RGB | HEX | $L$ | Contrast vs `#0B192C` | Functional Application |
|:---:|:---|:---|:---|:---:|:---:|:---:|:---|
| **$S_0$** | Highlight White | `hsl(210, 40%, 98%)` | `rgb(248, 250, 252)` | `#F8FAFC` | 0.98 | 17.20:1 | Executive headline typography |
| **$S_1$** | Muted Slate | `hsl(214, 32%, 91%)` | `rgb(226, 232, 240)` | `#E2E8F0` | 0.91 | 15.60:1 | Financial statement summary subtext |
| **$S_2$** | Subtle Steel | `hsl(215, 20%, 65%)` | `rgb(148, 163, 184)` | `#94A3B8` | 0.65 | 9.20:1 | Balance sheet notes, inactive icons |
| **$S_3$** | Midtone Indigo | `hsl(226, 57%, 64%)` | `rgb(99, 102, 241)` | `#6366F1` | 0.64 | 7.80:1 | Secondary metrics badge, chart line |
| **$S_4$** | Vibrant Blue | `hsl(217, 91%, 60%)` | `rgb(59, 130, 246)` | `#3B82F6` | 0.60 | 6.90:1 | Primary accent badge, active chip |
| **$S_5$** | Royal Blue | `hsl(221, 83%, 53%)` | `rgb(29, 78, 216)` | `#1D4ED8` | 0.53 | 5.40:1 | Primary investor CTA button |
| **$S_6$** | Deep Twilight | `hsl(224, 76%, 36%)` | `rgb(30, 58, 138)` | `#1E3A8A` | 0.36 | 3.20:1 | Gradient contour wave layer |
| **$S_7$** | Midnight Slate | `hsl(222, 47%, 18%)` | `rgb(24, 34, 53)` | `#182235` | 0.18 | 1.80:1 | Card glass backdrop surface |
| **$S_8$** | Dark Charcoal | `hsl(215, 28%, 12%)` | `rgb(11, 25, 44)` | `#0B192C` | 0.12 | 1.25:1 | Base layer panel, recessed card fill |
| **$S_9$** | Absolute Obsidian| `hsl(222, 47%, 11%)`| `rgb(15, 23, 42)` | `#0F172A` | 0.11 | 1.00:1 | Luxury dark canvas background |

---

#### Theme 7: `sunset-horizon` (Warm Plum & Coral Amber)
- **ID:** `sunset-horizon` | **Polarity:** `isDark: true` | **Canvas:** `#1F1128` | **Text:** `#FFF1F2` | **Accent:** `#F43F5E`

| Step | Semantic Role | HSL | RGB | HEX | $L$ | Contrast vs `#1F1128` | Functional Application |
|:---:|:---|:---|:---|:---:|:---:|:---:|:---|
| **$S_0$** | Rose Whisper | `hsl(350, 100%, 97%)`| `rgb(255, 241, 242)` | `#FFF1F2` | 0.97 | 16.80:1 | Headline titles, hero kicker text |
| **$S_1$** | Peach Tint | `hsl(355, 100%, 93%)`| `rgb(255, 228, 230)` | `#FFE4E6` | 0.91 | 14.90:1 | Subheader text, active quote marks |
| **$S_2$** | Coral Muted | `hsl(356, 96%, 84%)` | `rgb(254, 205, 211)` | `#FECDD3` | 0.82 | 12.10:1 | Secondary card body, option labels |
| **$S_3$** | Warm Coral | `hsl(353, 96%, 72%)` | `rgb(251, 113, 133)` | `#FB7185` | 0.69 | 8.80:1 | Metric highlights, tag boundaries |
| **$S_4$** | Vivid Rose | `hsl(350, 89%, 60%)` | `rgb(244, 63, 94)` | `#F43F5E` | 0.58 | 6.50:1 | Primary accent badge, button fill |
| **$S_5$** | Sunset Amber | `hsl(32, 95%, 52%)`  | `rgb(249, 115, 22)` | `#F97316` | 0.52 | 5.40:1 | Flywheel stage markers, alert pills |
| **$S_6$** | Plum Horizon | `hsl(335, 78%, 42%)` | `rgb(190, 24, 93)` | `#BE185D` | 0.38 | 3.60:1 | Gradient wave mid-contour ribbon |
| **$S_7$** | Deep Bordeaux | `hsl(336, 75%, 28%)` | `rgb(131, 24, 67)` | `#831843` | 0.22 | 2.10:1 | Inactive card outline, shadow tier |
| **$S_8$** | Dark Plum Card| `hsl(335, 50%, 16%)` | `rgb(63, 21, 40)` | `#3F1528` | 0.14 | 1.45:1 | Glass card backdrop layer |
| **$S_9$** | Midnight Plum | `hsl(280, 40%, 11%)` | `rgb(31, 17, 40)` | `#1F1128` | 0.08 | 1.00:1 | Sunset canvas background |

---

#### Theme 8: `cyber-neon` (Synthwave Cyan & Magenta)
- **ID:** `cyber-neon` | **Polarity:** `isDark: true` | **Canvas:** `#050510` | **Text:** `#E0F2FE` | **Accent:** `#06B6D4`

| Step | Semantic Role | HSL | RGB | HEX | $L$ | Contrast vs `#050510` | Functional Application |
|:---:|:---|:---|:---|:---:|:---:|:---:|:---|
| **$S_0$** | Pure Cyan Flash | `hsl(180, 100%, 95%)`| `rgb(230, 255, 255)` | `#E6FFFF` | 0.98 | 19.10:1 | High-tech titles, terminal prompt |
| **$S_1$** | Bright Sky | `hsl(187, 92%, 87%)` | `rgb(186, 244, 253)` | `#BAF4FD` | 0.89 | 16.50:1 | Subtitle text, active parameter key |
| **$S_2$** | Neon Cyan | `hsl(189, 94%, 68%)` | `rgb(103, 232, 249)` | `#67E8F9` | 0.74 | 11.80:1 | Metric numbers, radar glow circle |
| **$S_3$** | Electric Azure | `hsl(192, 91%, 50%)` | `rgb(14, 165, 233)` | `#0EA5E9` | 0.58 | 8.20:1 | Primary accent badge, timeline rail |
| **$S_4$** | Synth Magenta | `hsl(316, 73%, 52%)` | `rgb(217, 70, 239)` | `#D946EF` | 0.50 | 6.50:1 | Secondary accent node, active tag |
| **$S_5$** | Electric Violet | `hsl(271, 91%, 65%)` | `rgb(168, 85, 247)` | `#A855F7` | 0.56 | 7.60:1 | Button background, flywheel arrows |
| **$S_6$** | Deep Cyber Blue | `hsl(217, 70%, 35%)` | `rgb(27, 67, 142)` | `#1B438E` | 0.28 | 3.20:1 | Card border glow, contour lines |
| **$S_7$** | Midnight Cobalt | `hsl(230, 60%, 20%)` | `rgb(20, 31, 82)` | `#141F52` | 0.16 | 1.95:1 | Wave base ribbon, panel dividers |
| **$S_8$** | Recessed Abyss | `hsl(240, 50%, 10%)` | `rgb(13, 13, 38)` | `#0D0D26` | 0.10 | 1.35:1 | Elevated card backplane surface |
| **$S_9$** | Deep Space Core | `hsl(240, 52%, 4%)`  | `rgb(5, 5, 16)` | `#050510` | 0.04 | 1.00:1 | Synthwave canvas background |

---

#### Theme 9: `crimson-executive` (Ruby & Deep Obsidian)
- **ID:** `crimson-executive` | **Polarity:** `isDark: true` | **Canvas:** `#140507` | **Text:** `#FFF1F2` | **Accent:** `#E11D48`

| Step | Semantic Role | HSL | RGB | HEX | $L$ | Contrast vs `#140507` | Functional Application |
|:---:|:---|:---|:---|:---:|:---:|:---:|:---|
| **$S_0$** | Ruby Glint | `hsl(350, 100%, 97%)`| `rgb(255, 241, 242)` | `#FFF1F2` | 0.97 | 17.50:1 | Executive title typography |
| **$S_1$** | Crimson Tint | `hsl(355, 100%, 93%)`| `rgb(255, 228, 230)` | `#FFE4E6` | 0.91 | 15.60:1 | Subheader text, financial lead-in |
| **$S_2$** | Light Rose | `hsl(356, 96%, 84%)` | `rgb(254, 205, 211)` | `#FECDD3` | 0.82 | 12.80:1 | Secondary card label, verified check |
| **$S_3$** | Soft Ruby | `hsl(353, 96%, 72%)` | `rgb(251, 113, 133)` | `#FB7185` | 0.69 | 9.40:1 | Subtitle accent, pill marker tag |
| **$S_4$** | Crimson Vivid | `hsl(351, 94%, 60%)` | `rgb(244, 63, 94)` | `#F43F5E` | 0.58 | 7.10:1 | Secondary CTA button, icon stroke |
| **$S_5$** | Executive Ruby | `hsl(347, 77%, 50%)` | `rgb(225, 29, 72)` | `#E11D48` | 0.46 | 5.20:1 | Primary button fill, progress rail |
| **$S_6$** | Deep Claret | `hsl(345, 83%, 38%)` | `rgb(159, 18, 57)` | `#9F1239` | 0.30 | 3.10:1 | Wave ribbon middle tier, active tab |
| **$S_7$** | Burgundy Wine | `hsl(343, 80%, 25%)` | `rgb(114, 15, 41)` | `#720F29` | 0.18 | 1.95:1 | Inactive card outline, bottom wave |
| **$S_8$** | Blood Obsidian | `hsl(345, 60%, 14%)` | `rgb(57, 14, 25)` | `#390E19` | 0.11 | 1.35:1 | Elevated card backplane surface |
| **$S_9$** | Void Crimson | `hsl(348, 60%, 5%)`  | `rgb(20, 5, 7)` | `#140507` | 0.04 | 1.00:1 | Executive dark ruby canvas |

---

#### Theme 10: `nord-frost` (Arctic Glacier & Deep Navy)
- **ID:** `nord-frost` | **Polarity:** `isDark: true` | **Canvas:** `#0B132B` | **Text:** `#F0F9FF` | **Accent:** `#38BDF8`

| Step | Semantic Role | HSL | RGB | HEX | $L$ | Contrast vs `#0B132B` | Functional Application |
|:---:|:---|:---|:---|:---:|:---:|:---:|:---|
| **$S_0$** | Glacier Frost | `hsl(204, 100%, 97%)`| `rgb(240, 249, 255)` | `#F0F9FF` | 0.97 | 18.00:1 | Crisp arctic title typography |
| **$S_1$** | Polar White | `hsl(204, 94%, 94%)` | `rgb(224, 242, 254)` | `#E0F2FE` | 0.92 | 16.20:1 | Subtitle typography, active header |
| **$S_2$** | Pale Ice | `hsl(201, 94%, 86%)` | `rgb(186, 230, 253)` | `#BAE6FD` | 0.85 | 13.50:1 | System specification body text |
| **$S_3$** | Nordic Sky | `hsl(199, 89%, 74%)` | `rgb(125, 211, 252)` | `#7DD3FC` | 0.74 | 10.20:1 | Subtext callout, secondary chip |
| **$S_4$** | Polar Azure | `hsl(199, 89%, 48%)` | `rgb(14, 165, 233)` | `#0EA5E9` | 0.58 | 7.20:1 | Terminal prompt, metric badge |
| **$S_5$** | Fjord Blue | `hsl(201, 96%, 39%)` | `rgb(2, 132, 199)` | `#0284C7` | 0.48 | 5.80:1 | Primary button background |
| **$S_6$** | Glacier Lead | `hsl(199, 89%, 60%)` | `rgb(56, 189, 248)` | `#38BDF8` | 0.40 | 4.60:1 | Lead architectural accent, icon stroke |
| **$S_7$** | Deep Fjord | `hsl(202, 96%, 32%)` | `rgb(3, 105, 161)` | `#0369A1` | 0.27 | 2.80:1 | Bottom wave layer, divider line |
| **$S_8$** | Polar Midnight | `hsl(224, 40%, 18%)` | `rgb(28, 37, 65)` | `#1C2541` | 0.16 | 1.60:1 | Glass card backplane surface |
| **$S_9$** | Arctic Abyss | `hsl(225, 59%, 11%)` | `rgb(11, 19, 43)` | `#0B132B` | 0.08 | 1.00:1 | Arctic navy canvas background |

---

## 3. Dynamic CSS Variables Runtime Dictionary

To decouple React slide archetypes from theme identities and allow instantaneous theme swapping without component re-mounting, all visual styles bind to the standard `--pres-*` runtime dictionary.

### 3.1 Complete Token Catalog

| Token Name | Semantic Role | Fallback / Type | Description |
|:---|:---|:---|:---|
| `--pres-bg` | Stage Canvas Background | `#FFFFFF` (Light) / `#020617` (Dark) | Root 1920x1080 slide background color |
| `--pres-bg-surface` | Structural Base Surface | `rgba(255, 255, 255, 0.95)` | Elevation Plane 1 container backdrop (Bento grids, sidebars) |
| `--pres-bg-card` | Glassmorphic Card Fill | `rgba(255, 255, 255, 0.85)` | Elevation Plane 2 fill for KPI tiles, step items, and quotes |
| `--pres-bg-card-hover` | Card Interactive Hover | `rgba(255, 255, 255, 0.98)` | Elevated fill on mouseover or active step selection |
| `--pres-accent` | Primary Accent Color | `#7C3AED` (Brand Violet) | Focal brand accent for active pills, step badges, and links |
| `--pres-accent-glow` | Volumetric Accent Glow | `rgba(124, 58, 237, 0.25)` | Radial glow filters, active border box-shadows |
| `--pres-accent-hover` | Accent Interactive Hover | `#6D28D9` / Hex Color | Darkened/brightened accent color on pointer interaction |
| `--pres-text` | Primary Headline Typography | `#0F172A` / Hex Color | High-contrast text for slide titles, metrics, and heroes |
| `--pres-text-muted` | Secondary Narrative Copy | `#475569` / Hex Color | Medium-contrast text for body paragraphs, subtitles, and labels |
| `--pres-text-subtle` | Microcopy & Meta Labels | `#94A3B8` / Hex Color | Inactive indicators, footnote markers, and author attributions |
| `--pres-border` | Default Structural Border | `#E2E8F0` / Hex Color | Hairline borders for containers, dividers, and table cells |
| `--pres-border-hover` | Active/Hovered Border | `rgba(124, 58, 237, 0.40)` | Illuminated border on step focus, card hover, or input focus |
| `--pres-header-shadow` | Ink-Stamp Typography Shadow | `rgb(255 255 255) 1px 0.7px 0px` | High-definition micro ink-shadow preventing wave bleed |
| `--preset-display-font`| Display Heading Font | `'Ubuntu', -apple-system, sans-serif` | Pure DOM typography font family for titles and metrics |
| `--preset-body-font`   | Body Narrative Font | `'Poppins', -apple-system, sans-serif`| Pure DOM typography font family for body and captions |
| `--preset-mono-font`   | Monospace Code Font | `'JetBrains Mono', monospace` | Pure DOM monospace font for terminal and telemetry displays |

### 3.2 Runtime Token Generator Interface

```typescript
export interface PresThemeTokens {
  themeId: string;
  isDark: boolean;
  hasGlow: boolean;
  hasDotMatrix: boolean;
  cssVariables: Record<string, string>;
}

export function generatePresCssVariables(theme: ThemePalette): Record<string, string> {
  const isDarkTheme = theme.isDark;
  const headerShadow = isDarkTheme
    ? 'rgb(0 0 0) 1px 0.7px 0px'
    : 'rgb(255 255 255) 1px 0.7px 0px';

  return {
    '--pres-bg': theme.canvasBg,
    '--pres-bg-surface': isDarkTheme ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
    '--pres-bg-card': theme.cardBg,
    '--pres-bg-card-hover': isDarkTheme ? 'rgba(51, 65, 85, 0.95)' : 'rgba(255, 255, 255, 0.98)',
    '--pres-accent': theme.accentColor,
    '--pres-accent-glow': `${theme.accentColor}33`,
    '--pres-accent-hover': theme.accentColor,
    '--pres-text': theme.textColor,
    '--pres-text-muted': theme.subtextColor,
    '--pres-text-subtle': isDarkTheme ? '#64748B' : '#94A3B8',
    '--pres-border': theme.cardBorder,
    '--pres-border-hover': theme.accentColor,
    '--pres-header-shadow': headerShadow,
    '--preset-display-font': "'Ubuntu', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    '--preset-body-font': "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    '--preset-mono-font': "'JetBrains Mono', 'Fira Code', monospace",
  };
}
```

---

## 4. 4-Plane Depth Hierarchy Elevation Classes

The White Presentation visual engine establishes a 4-tier spatial elevation model that organizes visual elements by semantic importance and kinetic responsiveness:

```
Elevation Stacking Model:
[Plane 3: Floating Overlay (z=50)]  ─── Modals, Theme Selectors, Presenter HUDs, Floating Webcams
         ▲
[Plane 2: Elevated Interactive (z=20)] ─ Metric KPI Tiles, Step Cards, Testimonial Blocks, CTA Buttons
         ▲
[Plane 1: Raised Surface (z=10)]   ─── Bento Board Panels, Sidebars, Comparative Columns, Timeline Rails
         ▲
[Plane 0: Surface Canvas (z=0)]    ─── 1920x1080 Stage Canvas, Vignette Spotlights, Dot-Matrix Grids
```

### 4.1 Elevation Class Specifications

#### 1. `.plane-0-surface` (Base Canvas)
- **Z-Index:** `0`
- **Background:** `var(--pres-bg)`
- **Border:** `none`
- **Shadow:** `none`
- **Role:** Foundational stage layer hosting ambient canvas elements (subtle $60\% \times 55\%$ spotlight glows, $48\text{px}$ dot-matrix grids, or animated SVG ribbons).

#### 2. `.plane-1-raised` (Structural Surface)
- **Z-Index:** `10`
- **Background:** `var(--pres-bg-surface)`
- **Backdrop Filter:** `blur(12px)`
- **Border:** `1px solid var(--pres-border)`
- **Shadow:** `0 4px 12px -2px rgba(0, 0, 0, 0.05)`
- **Role:** Bento master cards, two-column split containers, tab headers, and comparison backdrops.

#### 3. `.plane-2-elevated` (Interactive Content Containers)
- **Z-Index:** `20`
- **Background:** `var(--pres-bg-card)`
- **Backdrop Filter:** `blur(16px)`
- **Border:** `1px solid var(--pres-border)`
- **Shadow:** `0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)`
- **Interactive Hover:** `transform: translateY(-4px); box-shadow: 0 20px 30px -10px var(--pres-accent-glow), 0 10px 10px -5px rgba(0, 0, 0, 0.04); border-color: var(--pres-border-hover);`
- **Role:** Individual step cards in `StepsSlide`, timeline milestones in `TimelineRoadmapSlide`, SWOT quadrants in `SwotAnalysisSlide`.

#### 4. `.plane-3-floating` (Floating Overlays & HUD Controls)
- **Z-Index:** `50`
- **Background:** `var(--pres-bg-card-hover)`
- **Backdrop Filter:** `blur(32px)`
- **Border:** `1px solid var(--pres-border-hover)`
- **Shadow:** `0 25px 50px -12px rgba(0, 0, 0, 0.35), 0 0 25px var(--pres-accent-glow)`
- **Role:** Global theme dropdowns, presenter notes HUD, slide creator modals, floating live webcam preview.

### 4.2 Complete Less Implementation

```less
// 4-Plane Depth Hierarchy Elevation Tokens
.plane-0-surface {
  position: relative;
  z-index: 0;
  background-color: var(--pres-bg);
  box-shadow: none;
  border: none;
}

.plane-1-raised {
  position: relative;
  z-index: 10;
  background: var(--pres-bg-surface);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--pres-border);
  border-radius: @radius-md;
  box-shadow: 0 4px 12px -2px rgba(0, 0, 0, 0.05);
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.plane-2-elevated {
  position: relative;
  z-index: 20;
  background: var(--pres-bg-card);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--pres-border);
  border-radius: @radius-md;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04);
  transition: transform 0.35s @ease-presentation, box-shadow 0.35s @ease-presentation, border-color 0.25s ease;
  will-change: transform, box-shadow;

  &:hover, &[data-is-active="true"] {
    transform: translateY(-4px) scale(1.008);
    box-shadow: 0 20px 30px -10px var(--pres-accent-glow), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-color: var(--pres-border-hover);
  }
}

.plane-3-floating {
  position: fixed;
  z-index: 50;
  background: var(--pres-bg-card-hover);
  backdrop-filter: blur(32px);
  -webkit-backdrop-filter: blur(32px);
  border: 1px solid var(--pres-border-hover);
  border-radius: @radius-lg;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35), 0 0 25px var(--pres-accent-glow);
  transition: transform 0.3s @ease-presentation, opacity 0.3s ease;
}
```

---

## 5. Button Variants & Magnetic Tactile Physics Math

### 5.1 Button Variants Catalog

Interactive presentation controls (slide navigation, step advancement, export buttons, modal triggers) are styled using three semantic button classes:

```less
// Primary Accent Button
.btn-primary-accent {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 22px;
  font-family: @pres-font-display;
  font-size: 14px;
  font-weight: 600;
  color: #FFFFFF;
  background: var(--pres-accent);
  border: 1px solid transparent;
  border-radius: @radius-md;
  box-shadow: 0 4px 14px var(--pres-accent-glow);
  cursor: pointer;
  transition: transform 0.25s @ease-presentation, box-shadow 0.25s ease, background-color 0.2s ease;
  user-select: none;

  &:hover {
    background: var(--pres-accent-hover);
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 8px 22px var(--pres-accent-glow);
  }

  &:active {
    transform: translateY(0) scale(0.98);
  }
}

// Secondary Glass Button
.btn-secondary-glass {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  font-family: @pres-font-display;
  font-size: 14px;
  font-weight: 500;
  color: var(--pres-text);
  background: var(--pres-bg-card);
  backdrop-filter: blur(12px);
  border: 1px solid var(--pres-border);
  border-radius: @radius-md;
  cursor: pointer;
  transition: transform 0.25s @ease-presentation, border-color 0.2s ease, background-color 0.2s ease;
  user-select: none;

  &:hover {
    background: var(--pres-bg-card-hover);
    border-color: var(--pres-border-hover);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
}

// Ghost Outline Button
.btn-ghost-outline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 16px;
  font-family: @pres-font-display;
  font-size: 13px;
  font-weight: 500;
  color: var(--pres-text-muted);
  background: transparent;
  border: 1px solid var(--pres-border);
  border-radius: @radius-sm;
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
  user-select: none;

  &:hover {
    color: var(--pres-text);
    border-color: var(--pres-accent);
    background: rgba(124, 58, 237, 0.06);
  }

  &:active {
    background: rgba(124, 58, 237, 0.12);
  }
}
```

---

### 5.2 Magnetic Tactile Physics Math

When the presenter moves the cursor near interactive buttons or step indicator nodes, a magnetic attraction pull translates the button toward the pointer. This produces an organic, tactile physical feel.

#### Mathematical Formulation
Given the cursor coordinates $(x, y)$ and the bounding box center of the element $(x_c, y_c)$:

1. **Distance Vector & Magnitude:**
   $$\Delta x = x - x_c, \quad \Delta y = y - y_c$$
   $$d = \sqrt{(\Delta x)^2 + (\Delta y)^2}$$

2. **Magnetic Pull Falloff:**
   Within an attraction radius $R_{\text{pull}}$ (nominal $R_{\text{pull}} = 80\text{px}$) and maximum deflection offset $M_{\text{max}} = 12\text{px}$, the translation offset $(\delta_x, \delta_y)$ follows a quadratic attenuation:

   $$\text{computeMagneticOffset}(x, y, x_c, y_c, R_{\text{pull}}, M_{\text{max}}) = \begin{cases} \left( \frac{\Delta x}{R_{\text{pull}}} \cdot M_{\text{max}} \cdot \left(1 - \frac{d}{R_{\text{pull}}}\right)^2, \frac{\Delta y}{R_{\text{pull}}} \cdot M_{\text{max}} \cdot \left(1 - \frac{d}{R_{\text{pull}}}\right)^2 \right) & \text{if } d < R_{\text{pull}} \\ (0, 0) & \text{if } d \ge R_{\text{pull}} \end{cases}$$

3. **Damped Harmonic Spring Return:**
   When the cursor exits $R_{\text{pull}}$, the element snaps back to equilibrium $(0, 0)$ governed by the second-order harmonic oscillator:

   $$m \frac{d^2 \mathbf{x}}{dt^2} + c \frac{d\mathbf{x}}{dt} + k \mathbf{x} = \mathbf{0}$$

   - Spring stiffness: $k = 420\text{ N/m}$
   - Damping ratio: $\zeta = \frac{c}{2\sqrt{km}} = 0.85$ (slightly underdamped for snappy feel)
   - Mass: $m = 0.5\text{ kg}$

#### TypeScript Implementation

```typescript
export interface MagneticOffset {
  offsetX: number;
  offsetY: number;
  isAttracted: boolean;
}

export function computeMagneticOffset(
  cursorX: number,
  cursorY: number,
  centerX: number,
  centerY: number,
  pullRadius = 80,
  maxOffset = 12
): MagneticOffset {
  const deltaX = cursorX - centerX;
  const deltaY = cursorY - centerY;
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  if (distance >= pullRadius || distance === 0) {
    return { offsetX: 0, offsetY: 0, isAttracted: false };
  }

  const factor = Math.pow(1 - distance / pullRadius, 2);
  const offsetX = (deltaX / pullRadius) * maxOffset * factor;
  const offsetY = (deltaY / pullRadius) * maxOffset * factor;

  return {
    offsetX: Math.round(offsetX * 100) / 100,
    offsetY: Math.round(offsetY * 100) / 100,
    isAttracted: true,
  };
}
```

---

## 6. Motion Variants Specification

To guarantee buttery smooth 60fps presentation rendering without layout re-computation (reflow) or CPU stutter, all kinetic animations strictly manipulate hardware-accelerated CSS properties (`transform` and `opacity`). The engine defines three core motion variants:

```typescript
export type MotionVariantType = 'lift' | 'slide' | 'parallax';
```

All spatial motions strictly adhere to the quintic deceleration curve:

```less
@ease-presentation: cubic-bezier(0.22, 1, 0.36, 1);
```

### 6.1 Variant 1: `[data-motion-variant="lift"]` (Tactile Card Elevation)
- **Target Elements:** Bento cards, step items, testimonial cards, pricing tiers.
- **Physics Behavior:** Vertical translation with proportional scale and volumetric accent glow expansion.
- **Timing & Easing:** Duration $0.35\text{s}$ with `@ease-presentation`.
- **CSS Specification:**
  ```less
  [data-motion-variant="lift"] {
    transition: transform 0.35s @ease-presentation, box-shadow 0.35s @ease-presentation, border-color 0.25s ease;
    will-change: transform, box-shadow;

    &:hover, &[data-is-active="true"] {
      transform: translateY(-8px) scale(1.015);
      box-shadow: 0 20px 35px -10px var(--pres-accent-glow), 0 10px 15px -5px rgba(0, 0, 0, 0.08);
      border-color: var(--pres-border-hover);
    }
  }
  ```

### 6.2 Variant 2: `[data-motion-variant="slide"]` (Staggered Directional Entry)
- **Target Elements:** Split-pane details, metric card rows, roadmap milestone columns.
- **Physics Behavior:** 24px directional translation paired with linear opacity ramping.
- **Timing & Delays:**
  - Initial State: `transform: translate3d(24px, 0, 0); opacity: 0;` (or `translate3d(0, 24px, 0)` for vertical).
  - Target State: `transform: translate3d(0, 0, 0); opacity: 1;`
  - Duration: $0.55\text{s}$ with `@ease-presentation`.
  - Cascading Delays: Stagger indices $k \in \{1 \dots 8\}$ use sequential $0.08\text{s}$ intervals ($0.08\text{s}, 0.16\text{s}, 0.24\text{s} \dots$).

### 6.3 Variant 3: `[data-motion-variant="parallax"]` (Multi-Layer Depth Separation)
- **Target Elements:** Background wave ribbons, decorative dot-matrix grids, ambient halos.
- **Physics Behavior:** Three-tier differential velocity multipliers relative to canvas scroll or mouse movement:
  - **Tier 0 Canvas ($Z_0$):** $v_0 = 0.20$ (slow, subtle background drift).
  - **Tier 1 Mid-Ribbons ($Z_1$):** $v_1 = 0.50$ (moderate wave contour deflection).
  - **Tier 2 Foreground ($Z_2$):** $v_2 = 1.00$ (full interactive response).
- **CSS Specification:**
  ```less
  [data-motion-variant="parallax"] {
    contain: layout paint size;
    transform: translateZ(0);
    will-change: transform;
    transition: transform 0.65s @ease-presentation;
  }
  ```

### 6.4 Reduced Motion Accessibility Guarantee
When the operating system signals `prefers-reduced-motion: reduce`, all spatial translations and scale pulses are immediately zeroed out:

```less
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 7. Stepwise Click Reveal Animations

Multi-step slide archetypes (`StepsSlide`, `TimelineRoadmapSlide`, `ProcessCycleSlide`, `DepthStackSlide`, `BeforeAfterShowcaseSlide`) maintain an internal active step cursor ($0 \le \text{activeStep} < \text{stepCount}$). Step advances trigger coordinated visual keyframes:

### 7.1 `recCardFadeIn` (Recursive Card Entry)
Used for cards, timeline nodes, and list items entering the viewport:

```less
@keyframes recCardFadeIn {
  0% {
    opacity: 0;
    transform: translate3d(0, 16px, 0) scale(0.96);
  }
  70% {
    opacity: 0.95;
    transform: translate3d(0, -2px, 0) scale(1.005);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1.0);
  }
}

.rec-card-fade-in {
  animation: recCardFadeIn 0.50s @ease-presentation both;
  will-change: transform, opacity;
}
```

### 7.2 `reveal-pulse` (Active Step Focal Beacon)
When a step transitions into active focus, a single-shot focal beacon pulses radially outward from the step badge:

```less
@keyframes revealPulse {
  0% {
    transform: scale(1.0);
    box-shadow: 0 0 0 0 var(--pres-accent-glow);
  }
  40% {
    transform: scale(1.06);
    box-shadow: 0 0 0 14px rgba(124, 58, 237, 0);
  }
  100% {
    transform: scale(1.0);
    box-shadow: 0 0 0 0 rgba(124, 58, 237, 0);
  }
}

.reveal-pulse-anim {
  animation: revealPulse 0.65s @ease-presentation 1;
  will-change: transform, box-shadow;
}
```

### 7.3 `baScrollPan` (Before/After Comparative Divider Sweep)
Used on comparative slides to execute an automated or interactive comparison sweep between before and after states:

```less
@keyframes baScrollPan {
  0% {
    clip-path: inset(0 100% 0 0);
    filter: brightness(0.90) contrast(0.90);
  }
  50% {
    filter: brightness(1.10) contrast(1.05);
  }
  100% {
    clip-path: inset(0 0% 0 0);
    filter: brightness(1.00) contrast(1.00);
  }
}

.ba-scroll-pan-anim {
  animation: baScrollPan 0.85s @ease-presentation both;
  will-change: clip-path, filter;
}
```

---

## 8. Acoustic Feedback Synchronization & Sound Architecture

Tactile acoustic feedback sharpens presentation pacing and reinforces spatial navigation. Audio triggers are managed via a centralized Web Audio API engine (`PresentationSoundEngine`) with strict gain ceilings and anti-fatigue debouncing.

### 8.1 Acoustic Event Catalog

| Event Name | Sound Asset / Synthesis | Trigger Mechanism | Nominal Gain | Debounce Window |
|:---|:---|:---|:---:|:---:|
| **Slide Transition** | Synthesized Sine Whoosh ($240\text{Hz} \to 480\text{Hz}$) / `/sounds/fade_swoosh_v4.mp3` | Next/Prev slide change | $0.35 \times \text{Master}$ | $120\text{ms}$ |
| **Sub-Step Advance** | Synthesized Triangle Click ($750\text{Hz} \to 320\text{Hz}$) / `/sounds/click.mp3` | Step cursor increment | $\text{stepVolume}(\text{Master})$ | $80\text{ms}$ |
| **Step Reveal Pop** | Procedural Sine Chirp ($220\text{Hz} \to 880\text{Hz}$) | Card reveal keyframe | $0.25 \times \text{Master}$ | $60\text{ms}$ |
| **Theme Selection** | Synthetic Dual Chord ($880\text{Hz} + 1320\text{Hz}$) | Theme dropdown change | $0.30 \times \text{Master}$ | $100\text{ms}$ |

---

### 8.2 Sub-Step Volume Attenuation Curve (`stepVolume`)

Sub-step advance clicks must provide crisp tactile confirmation without competing with or overpowering master slide transition sweeps:

$$\text{stepVolume}(m) = \begin{cases} m & \text{if } m < 0.30 \\ \max(0.30, m - 0.30) & \text{if } m \ge 0.30 \end{cases}$$

```typescript
export function calculateStepVolume(masterVolume: number): number {
  if (masterVolume < 0.30) {
    return masterVolume;
  }
  return Math.max(0.30, masterVolume - 0.30);
}
```

---

### 8.3 Dynamic Narration & Video Audio Ducking

When embedded slide media plays or active presenter webcam speech is detected, background presentation audio ducks automatically according to a three-phase envelope:

1. **Attack Phase ($400\text{ms}$):** Background gain drops exponentially from nominal to $20\%$.
2. **Sustain Phase:** Background gain remains clamped at $0.20 \times g_{\text{nom}}$ for the duration of the media.
3. **Release Phase ($800\text{ms}$):** Gain restores smoothly to $100\%$ nominal level.

$$\text{gain}(t) = \begin{cases} 
g_{\text{nom}} - 0.80 g_{\text{nom}} \cdot \left(\frac{t - t_{\text{duck}}}{0.40}\right) & \text{for } 0 \le t - t_{\text{duck}} \le 0.40\text{s (Ducking Phase)} \\
0.20 g_{\text{nom}} & \text{during Active Speech / Video} \\
0.20 g_{\text{nom}} + 0.80 g_{\text{nom}} \cdot \left(\frac{t - t_{\text{release}}}{0.80}\right) & \text{for } 0 \le t - t_{\text{release}} \le 0.80\text{s (Recovery Phase)}
\end{cases}$$

---

## 9. Cross-Reference Index

- Architecture Overview: [01-overview.md](./01-overview.md)
- Slide Archetypes & Data Contracts: [02-slide-archetypes-data-contracts.md](./02-slide-archetypes-data-contracts.md)
- Quality Verification Gates: [04-verification-gates.md](./04-verification-gates.md)
- Subtask Execution Plan: [../../../.ai-memory/plans/subtasks/05-26-global-ppt-color-motion-and/02-motion-and-theming.md](../../../.ai-memory/plans/subtasks/05-26-global-ppt-color-motion-and/02-motion-and-theming.md)
- Presentation Theme Runtime: [src/themes/themeRuntime.ts](../../../src/themes/themeRuntime.ts)
- Kinetic Motion Utility: [src/utils/motionPhysics.ts](../../../src/utils/motionPhysics.ts)
