# 03-Color & Motion Design System: 10-Step Precision Ramps, Kinetic Physics & Acoustic Sync

> **Specification Identifier:** `02-spec/21-app/28-new-design-and-slide-archetypes/03-visual-and-motion`  
> **Status:** `APPROVED ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.3.0`  
> **Author:** Spec Author 02  
> **Updated:** 2026-10-02  
> **Domain:** Color Theming, 10-Step Gradient Precision Ramps, Dynamic Micro-Shadows, Background Atmospheric Layers, Kinetic Spring Physics & Acoustic Synchronization  

---

## 1. System Overview & Visual Hierarchy Mandates

The visual presentation architecture of the **White Presentation System** synthesizes the authoritative institutional presence of **Global PPT** with the kinetic fluid responsiveness of **Flat Slide Show**. To guarantee optical clarity across high-resolution displays, conference projectors, and responsive viewports without inducing cognitive fatigue, the engine enforces five foundational design mandates:

1. **60/30/10 Visual Weight Distribution:**
   - **$60\%$ Dominant Foundation:** Background canvas (`--pres-bg`, `--pres-bg-hsl`) delivering vast negative space and cognitive calm.
   - **$30\%$ Structural Scaffolding:** Cards, sidebars, bento grids, and dividing rails (`--pres-bg-surface`, `--pres-bg-card`, `--pres-border`).
   - **$10\%$ High-Energy Accent:** Active step indicators, focal key performance indicators (KPIs), glowing telemetry halos, and primary action buttons (`--pres-accent`, `--pres-accent-glow`).
2. **4-Plane Spatial Depth Hierarchy:**
   - **Plane 0 ($z=0$, Canvas Base):** Atmospheric backdrop, radial spotlight glow, 48px coordinate grid, floating architectural vector icons, and halftone dot matrix.
   - **Plane 1 ($z=10$, Structural Grid):** Inactive stage cards, data tables, subtle dividing borders, and frosted glass backdrop blur (`backdrop-filter: blur(16px)`).
   - **Plane 2 ($z=20$, Elevated Focus):** Active elevated step cards, expanded accordions, selected comparison columns, and interactive code drawers.
   - **Plane 3 ($z=30$, Ambient Overlays):** Glowing halo pulses, traveling SVG packet connector rails, floating presenter HUD chrome, and audio telemetry badges.
3. **WCAG 2.1 AAA Contrast Compliance:**
   - Body copy, captions, and secondary narrative ($\le 20\text{px}$) must satisfy a contrast ratio $C_R \ge 7.0:1$ against their immediate container surface.
   - Large display headlines, hero metrics, and kicker badges ($\ge 24\text{px}$ bold or $\ge 32\text{px}$ regular) must achieve $C_R \ge 4.5:1$.
4. **Dynamic Text Micro-Shadows:**
   - Dark Obsidian themes enforce `rgb(0 0 0) 1px 0.7px 0px` to carve crisp letterforms against luminous dark backgrounds.
   - Light Editorial themes enforce `rgb(255 255 255) 1px 0.7px 0px` to create an ink-stamp letterpress micro-bevel against bright parchment.
5. **Kinetic Spring Physics & Acoustic Synchronization:**
   - Spatial micro-interactions and step reveals use calibrated harmonic oscillators ($k=420$, $\zeta=0.85$, $m=0.8$) and quintic deceleration curves.
   - Transitions trigger synthesized Web Audio feedback (whoosh, click, pop) with dynamic audio ducking ($-14\text{ dB}$) and HTMLAudio fallback pools.

---

## 2. Mathematical 10-Step Precision Ramps & Contrast Formulas

### 2.1 Monotonic Lightness Interpolation Formula
For boundary anchor stops $C_{\text{start}} (S_0)$ and $C_{\text{end}} (S_9)$, intermediate steps $S_i$ ($i \in \{0, 1, \dots, 9\}$) are computed along the perceptual lightness curve:

$$t_i = \frac{i}{9}, \quad i \in \{0, 1, 2, 3, 4, 5, 6, 7, 8, 9\}$$

$$\text{Hue}_i = \text{Hue}_{\text{start}} + t_i \cdot (\text{Hue}_{\text{end}} - \text{Hue}_{\text{start}})$$

$$\text{Sat}_i = \text{Sat}_{\text{start}} + t_i \cdot (\text{Sat}_{\text{end}} - \text{Sat}_{\text{start}})$$

$$\text{Light}_i = \text{Light}_{\text{start}} + t_i \cdot (\text{Light}_{\text{end}} - \text{Light}_{\text{start}})$$

### 2.2 Relative Luminance Linearization & WCAG Contrast Formula
Per WCAG 2.1 specifications, 8-bit sRGB color channels are linearized before computing relative luminance $L$:

$$R_c = \frac{R_{\text{8bit}}}{255}, \quad G_c = \frac{G_{\text{8bit}}}{255}, \quad B_c = \frac{B_{\text{8bit}}}{255}$$

$$C_{\text{linear}} = \begin{cases} \frac{C}{12.92} & \text{if } C \le 0.04045 \\ \left(\frac{C + 0.055}{1.055}\right)^{2.4} & \text{if } C > 0.04045 \end{cases}, \quad C \in \{R_c, G_c, B_c\}$$

$$L = 0.2126 R_{\text{linear}} + 0.7152 G_{\text{linear}} + 0.0722 B_{\text{linear}}$$

The contrast ratio $C_R$ between two relative luminances $L_1$ and $L_2$ ($L_1 \ge L_2$) is:

$$C_R = \frac{L_1 + 0.05}{L_2 + 0.05}$$

---

## 3. The 10-Theme Master Matrix & 10-Step Precision Ramps

The presentation engine defines 10 production-calibrated theme palettes partitioned into **Light Editorial Canvases** (archival polarity) and **Dark Obsidian Canvases** (luminous radiance polarity):

```
10-Theme Master Palette Matrix:
├── Light Editorial Canvases (isDark: false)
│   ├── 01. white-brand (Pure White Clean Editorial - Default)
│   └── 02. paper-editorial (Warm Cream & Classical Navy)
└── Dark Obsidian Canvases (isDark: true)
    ├── 03. true-dark (Obsidian Slate & Electric Indigo)
    ├── 04. emerald-growth (Dark Forest & Vibrant Mint)
    ├── 05. wp-exam-purple (Royal Tech & Violet Sovereign)
    ├── 06. midnight-luxe (Dark Editorial & Royal Blue)
    ├── 07. sunset-horizon (Warm Plum & Coral Amber)
    ├── 08. cyber-neon (Synthwave Cyan & Magenta)
    ├── 09. crimson-executive (Ruby & Deep Obsidian)
    └── 10. nord-frost (Arctic Glacier & Deep Navy)
```

---

### 3.1 Theme Detail Catalogs & 10-Step Gradient Stops ($S_0$ through $S_9$)

#### Theme 01: `white-brand` (Pure White Clean Editorial — Default)
- **Polarity:** `isDark: false` | **Canvas:** `#FFFFFF` | **Text:** `#0F172A` | **Accent:** `#7C3AED`
- **Dynamic Text Micro-Shadow:** `rgb(255 255 255) 1px 0.7px 0px`
- **Card Background:** `rgba(255, 255, 255, 0.90)` | **Border:** `#E2E8F0`

| Step | Semantic Role | HSL | Hex | Luminance $L$ | Contrast vs Canvas |
|:---:|:---|:---|:---:|:---:|:---:|
| **$S_0$** | Base Light | `hsl(250, 100%, 98%)` | `#F5F3FF` | 0.96 | 1.08:1 |
| **$S_1$** | Sub-Surface | `hsl(252, 95%, 94%)` | `#EDE9FE` | 0.92 | 1.18:1 |
| **$S_2$** | Neutral Border | `hsl(251, 91%, 87%)` | `#DDD6FE` | 0.86 | 1.35:1 |
| **$S_3$** | Badge Tint | `hsl(252, 95%, 78%)` | `#C4B5FD` | 0.77 | 1.69:1 |
| **$S_4$** | Secondary Accent | `hsl(255, 92%, 69%)` | `#A78BFA` | 0.68 | 2.16:1 |
| **$S_5$** | Midtone Primary | `hsl(258, 90%, 62%)` | `#8B5CF6` | 0.58 | 2.96:1 |
| **$S_6$** | Brand Lead | `hsl(262, 83%, 58%)` | `#7C3AED` | 0.51 | 3.84:1 |
| **$S_7$** | Deep Shading | `hsl(263, 70%, 50%)` | `#6D28D9` | 0.42 | 5.66:1 |
| **$S_8$** | High Contrast | `hsl(264, 67%, 35%)` | `#4C1D95` | 0.28 | 11.20:1 |
| **$S_9$** | Deep Navy Ink | `hsl(222, 47%, 11%)` | `#0F172A` | 0.11 | 16.80:1 |

---

#### Theme 02: `paper-editorial` (Warm Cream & Classical Navy)
- **Polarity:** `isDark: false` | **Canvas:** `#F5F0E6` | **Text:** `#1A1A1A` | **Accent:** `#1D4ED8`
- **Dynamic Text Micro-Shadow:** `rgb(255 255 255) 1px 0.7px 0px`
- **Card Background:** `rgba(250, 247, 240, 0.92)` | **Border:** `#EAE0D0`

| Step | Semantic Role | HSL | Hex | Luminance $L$ | Contrast vs Canvas |
|:---:|:---|:---|:---:|:---:|:---:|
| **$S_0$** | Archival Cream | `hsl(42, 50%, 96%)` | `#FAF7F0` | 0.96 | 1.05:1 |
| **$S_1$** | Warm Parchment | `hsl(39, 43%, 93%)` | `#F5F0E6` | 0.93 | 1.00:1 |
| **$S_2$** | Cardboard Tint | `hsl(38, 40%, 86%)` | `#EAE0D0` | 0.86 | 1.20:1 |
| **$S_3$** | Muted Ochre | `hsl(38, 36%, 75%)` | `#D4C4A8` | 0.75 | 1.55:1 |
| **$S_4$** | Editorial Slate | `hsl(213, 94%, 68%)` | `#60A5FA` | 0.65 | 2.05:1 |
| **$S_5$** | Refined Royal | `hsl(221, 83%, 53%)` | `#2563EB` | 0.51 | 3.40:1 |
| **$S_6$** | Classical Navy | `hsl(224, 76%, 48%)` | `#1D4ED8` | 0.42 | 4.85:1 |
| **$S_7$** | Deep Blue Ink | `hsl(224, 64%, 33%)` | `#1E3A8A` | 0.28 | 8.90:1 |
| **$S_8$** | Charcoal Ink | `hsl(30, 9%, 16%)` | `#2C2825` | 0.16 | 12.80:1 |
| **$S_9$** | Archival Black | `hsl(0, 0%, 10%)` | `#1A1A1A` | 0.10 | 15.20:1 |

---

#### Theme 03: `true-dark` (Obsidian Slate & Electric Indigo)
- **Polarity:** `isDark: true` | **Canvas:** `#020617` | **Text:** `#F8FAFC` | **Accent:** `#6366F1`
- **Dynamic Text Micro-Shadow:** `rgb(0 0 0) 1px 0.7px 0px`
- **Card Background:** `rgba(24, 34, 53, 0.85)` | **Border:** `rgba(99, 102, 241, 0.35)`

| Step | Semantic Role | HSL | Hex | Luminance $L$ | Contrast vs Canvas |
|:---:|:---|:---|:---:|:---:|:---:|
| **$S_0$** | Luminous Glow | `hsl(210, 40%, 98%)` | `#F8FAFC` | 0.98 | 18.50:1 |
| **$S_1$** | Soft Slate | `hsl(214, 32%, 91%)` | `#E2E8F0` | 0.88 | 16.50:1 |
| **$S_2$** | Indigo Tint | `hsl(226, 100%, 88%)` | `#C7D2FE` | 0.79 | 14.80:1 |
| **$S_3$** | Electric Periwinkle | `hsl(228, 96%, 79%)` | `#A5B4FC` | 0.68 | 12.70:1 |
| **$S_4$** | Vivid Violet | `hsl(234, 89%, 74%)` | `#818CF8` | 0.57 | 10.60:1 |
| **$S_5$** | Primary Indigo | `hsl(239, 84%, 67%)` | `#6366F1` | 0.46 | 8.60:1 |
| **$S_6$** | Royal Core | `hsl(243, 75%, 59%)` | `#4F46E5` | 0.35 | 6.50:1 |
| **$S_7$** | Midnight Abyss | `hsl(226, 58%, 34%)` | `#233876` | 0.22 | 4.10:1 |
| **$S_8$** | Slate Ingot | `hsl(222, 47%, 18%)` | `#182235` | 0.12 | 2.20:1 |
| **$S_9$** | True Obsidian | `hsl(222, 84%, 5%)` | `#020617` | 0.04 | 1.00:1 |

---

#### Theme 04: `emerald-growth` (Dark Forest & Vibrant Mint)
- **Polarity:** `isDark: true` | **Canvas:** `#02140E` | **Text:** `#ECFDF5` | **Accent:** `#10B981`
- **Dynamic Text Micro-Shadow:** `rgb(0 0 0) 1px 0.7px 0px`
- **Card Background:** `rgba(6, 44, 32, 0.85)` | **Border:** `rgba(16, 185, 129, 0.35)`

| Step | Semantic Role | HSL | Hex | Luminance $L$ | Contrast vs Canvas |
|:---:|:---|:---|:---:|:---:|:---:|
| **$S_0$** | Mint Spark | `hsl(152, 81%, 96%)` | `#ECFDF5` | 0.97 | 18.20:1 |
| **$S_1$** | Pale Spearmint | `hsl(149, 80%, 90%)` | `#D1FAE5` | 0.89 | 16.70:1 |
| **$S_2$** | Foam Green | `hsl(152, 76%, 80%)` | `#A7F3D0` | 0.78 | 14.60:1 |
| **$S_3$** | Spring Neon | `hsl(156, 72%, 67%)` | `#6EE7B7` | 0.65 | 12.20:1 |
| **$S_4$** | Mint Jade | `hsl(160, 60%, 52%)` | `#34D399` | 0.52 | 9.80:1 |
| **$S_5$** | Sovereign Emerald | `hsl(158, 64%, 42%)` | `#10B981` | 0.42 | 7.90:1 |
| **$S_6$** | Pine Forest | `hsl(161, 72%, 33%)` | `#059669` | 0.31 | 5.80:1 |
| **$S_7$** | Deep Malachite | `hsl(163, 88%, 20%)` | `#047857` | 0.20 | 3.80:1 |
| **$S_8$** | Spruce Ingot | `hsl(166, 82%, 10%)` | `#062C20` | 0.10 | 1.90:1 |
| **$S_9$** | Deep Forest Obsidian | `hsl(160, 84%, 4%)` | `#02140E` | 0.04 | 1.00:1 |

---

#### Theme 05: `wp-exam-purple` (Royal Tech & Violet Sovereign)
- **Polarity:** `isDark: true` | **Canvas:** `#0B0814` | **Text:** `#FAF5FF` | **Accent:** `#A855F7`
- **Dynamic Text Micro-Shadow:** `rgb(0 0 0) 1px 0.7px 0px`
- **Card Background:** `rgba(30, 20, 48, 0.85)` | **Border:** `rgba(168, 85, 247, 0.35)`

| Step | Semantic Role | HSL | Hex | Luminance $L$ | Contrast vs Canvas |
|:---:|:---|:---|:---:|:---:|:---:|
| **$S_0$** | Ethereal Violet | `hsl(270, 100%, 98%)` | `#FAF5FF` | 0.98 | 18.40:1 |
| **$S_1$** | Lilac Mist | `hsl(269, 100%, 95%)` | `#F3E8FF` | 0.91 | 17.10:1 |
| **$S_2$** | Lavender Glow | `hsl(269, 97%, 85%)` | `#E9D5FF` | 0.80 | 15.00:1 |
| **$S_3$** | Amethyst Tint | `hsl(270, 95%, 75%)` | `#D8B4FE` | 0.69 | 12.90:1 |
| **$S_4$** | Vibrant Orchid | `hsl(271, 91%, 65%)` | `#C084FC` | 0.58 | 10.80:1 |
| **$S_5$** | Royal Purple | `hsl(272, 85%, 57%)` | `#A855F7` | 0.48 | 9.00:1 |
| **$S_6$** | Sovereign Violet | `hsl(273, 76%, 49%)` | `#9333EA` | 0.38 | 7.10:1 |
| **$S_7$** | Midnight Plum | `hsl(274, 69%, 36%)` | `#7E22CE` | 0.24 | 4.50:1 |
| **$S_8$** | Purple Obsidian | `hsl(275, 45%, 15%)` | `#1E1430` | 0.11 | 2.10:1 |
| **$S_9$** | Void Purple | `hsl(275, 60%, 5%)` | `#0B0814` | 0.04 | 1.00:1 |

---

#### Theme 06: `midnight-luxe` (Dark Editorial & Royal Blue)
- **Polarity:** `isDark: true` | **Canvas:** `#020617` | **Text:** `#F1F5F9` | **Accent:** `#3B82F6`
- **Dynamic Text Micro-Shadow:** `rgb(0 0 0) 1px 0.7px 0px`
- **Card Background:** `rgba(15, 23, 42, 0.85)` | **Border:** `rgba(59, 130, 246, 0.35)`

| Step | Semantic Role | HSL | Hex | Luminance $L$ | Contrast vs Canvas |
|:---:|:---|:---|:---:|:---:|:---:|
| **$S_0$** | Arctic Glow | `hsl(210, 40%, 98%)` | `#F1F5F9` | 0.97 | 18.10:1 |
| **$S_1$** | Crisp Frost | `hsl(214, 32%, 91%)` | `#E2E8F0` | 0.88 | 16.50:1 |
| **$S_2$** | Ice Blue | `hsl(213, 97%, 87%)` | `#BFDBFE` | 0.79 | 14.80:1 |
| **$S_3$** | Sky Sapphire | `hsl(212, 96%, 78%)` | `#93C5FD` | 0.67 | 12.50:1 |
| **$S_4$** | Azure Core | `hsl(217, 91%, 60%)` | `#60A5FA` | 0.54 | 10.10:1 |
| **$S_5$** | Royal Luxe | `hsl(217, 91%, 60%)` | `#3B82F6` | 0.44 | 8.20:1 |
| **$S_6$** | Cobalt Ink | `hsl(221, 83%, 53%)` | `#2563EB` | 0.34 | 6.40:1 |
| **$S_7$** | Midnight Trench | `hsl(224, 76%, 40%)` | `#1D4ED8` | 0.22 | 4.10:1 |
| **$S_8$** | Slate Ingot | `hsl(222, 47%, 11%)` | `#0F172A` | 0.09 | 1.80:1 |
| **$S_9$** | Deep Abyss | `hsl(222, 84%, 5%)` | `#020617` | 0.04 | 1.00:1 |

---

#### Theme 07: `sunset-horizon` (Warm Plum & Coral Amber)
- **Polarity:** `isDark: true` | **Canvas:** `#150811` | **Text:** `#FFF1F2` | **Accent:** `#F43F5E`
- **Dynamic Text Micro-Shadow:** `rgb(0 0 0) 1px 0.7px 0px`
- **Card Background:** `rgba(40, 16, 32, 0.85)` | **Border:** `rgba(244, 63, 94, 0.35)`

| Step | Semantic Role | HSL | Hex | Luminance $L$ | Contrast vs Canvas |
|:---:|:---|:---|:---:|:---:|:---:|
| **$S_0$** | Blossom Glow | `hsl(350, 100%, 98%)` | `#FFF1F2` | 0.98 | 18.30:1 |
| **$S_1$** | Petal Blush | `hsl(351, 100%, 95%)` | `#FFE4E6` | 0.91 | 17.00:1 |
| **$S_2$** | Coral Tint | `hsl(352, 97%, 85%)` | `#FECDD3` | 0.80 | 14.90:1 |
| **$S_3$** | Warm Salmon | `hsl(353, 96%, 75%)` | `#FDA4AF` | 0.69 | 12.80:1 |
| **$S_4$** | Flamingo Punch | `hsl(354, 93%, 64%)` | `#FB7185` | 0.57 | 10.60:1 |
| **$S_5$** | Coral Horizon | `hsl(350, 89%, 60%)` | `#F43F5E` | 0.46 | 8.50:1 |
| **$S_6$** | Sunset Crimson | `hsl(347, 77%, 50%)` | `#E11D48` | 0.35 | 6.50:1 |
| **$S_7$** | Plum Burgundy | `hsl(345, 83%, 35%)` | `#BE123C` | 0.22 | 4.10:1 |
| **$S_8$** | Wine Ingot | `hsl(340, 45%, 12%)` | `#281020` | 0.09 | 1.80:1 |
| **$S_9$** | Midnight Plum | `hsl(330, 50%, 6%)` | `#150811` | 0.04 | 1.00:1 |

---

#### Theme 08: `cyber-neon` (Synthwave Cyan & Magenta)
- **Polarity:** `isDark: true` | **Canvas:** `#050814` | **Text:** `#F0FDFA` | **Accent:** `#06B6D4`
- **Dynamic Text Micro-Shadow:** `rgb(0 0 0) 1px 0.7px 0px`
- **Card Background:** `rgba(10, 25, 45, 0.85)` | **Border:** `rgba(6, 182, 212, 0.35)`

| Step | Semantic Role | HSL | Hex | Luminance $L$ | Contrast vs Canvas |
|:---:|:---|:---|:---:|:---:|:---:|
| **$S_0$** | Cyan Glint | `hsl(180, 100%, 97%)` | `#F0FDFA` | 0.98 | 18.50:1 |
| **$S_1$** | Electric Vapor | `hsl(183, 100%, 90%)` | `#CCFBF1` | 0.90 | 16.90:1 |
| **$S_2$** | Neon Aqua | `hsl(186, 94%, 82%)` | `#99F6E4` | 0.81 | 15.20:1 |
| **$S_3$** | Synth Mint | `hsl(187, 92%, 69%)` | `#5EEAD4` | 0.70 | 13.10:1 |
| **$S_4$** | Pure Cyan | `hsl(188, 86%, 53%)` | `#2DD4BF` | 0.58 | 10.90:1 |
| **$S_5$** | Cyber Turquoise | `hsl(189, 94%, 43%)` | `#06B6D4` | 0.47 | 8.80:1 |
| **$S_6$** | Laser Teal | `hsl(192, 91%, 36%)` | `#0891B2` | 0.35 | 6.60:1 |
| **$S_7$** | Trench Blue | `hsl(198, 80%, 25%)` | `#0E7490` | 0.22 | 4.10:1 |
| **$S_8$** | Matrix Slate | `hsl(215, 60%, 11%)` | `#0A192D` | 0.09 | 1.80:1 |
| **$S_9$** | Cyber Abyss | `hsl(230, 50%, 5%)` | `#050814` | 0.04 | 1.00:1 |

---

#### Theme 09: `crimson-executive` (Ruby & Deep Obsidian)
- **Polarity:** `isDark: true` | **Canvas:** `#120507` | **Text:** `#FFF1F2` | **Accent:** `#E11D48`
- **Dynamic Text Micro-Shadow:** `rgb(0 0 0) 1px 0.7px 0px`
- **Card Background:** `rgba(38, 12, 18, 0.85)` | **Border:** `rgba(225, 29, 72, 0.35)`

| Step | Semantic Role | HSL | Hex | Luminance $L$ | Contrast vs Canvas |
|:---:|:---|:---|:---:|:---:|:---:|
| **$S_0$** | Ruby Glint | `hsl(350, 100%, 98%)` | `#FFF1F2` | 0.98 | 18.40:1 |
| **$S_1$** | Champagne Rose | `hsl(351, 100%, 95%)` | `#FFE4E6` | 0.91 | 17.10:1 |
| **$S_2$** | Coral Rouge | `hsl(352, 97%, 85%)` | `#FECDD3` | 0.80 | 15.00:1 |
| **$S_3$** | Garnet Silk | `hsl(353, 96%, 75%)` | `#FDA4AF` | 0.69 | 12.90:1 |
| **$S_4$** | Crimson Velvet | `hsl(354, 93%, 64%)` | `#FB7185` | 0.57 | 10.70:1 |
| **$S_5$** | Sovereign Ruby | `hsl(347, 77%, 50%)` | `#E11D48` | 0.44 | 8.30:1 |
| **$S_6$** | Bloodstone Red | `hsl(345, 83%, 41%)` | `#BE123C` | 0.32 | 6.00:1 |
| **$S_7$** | Bordeaux Ink | `hsl(343, 85%, 28%)` | `#9F1239` | 0.20 | 3.80:1 |
| **$S_8$** | Mahogany Ingot | `hsl(345, 50%, 10%)` | `#260C12` | 0.08 | 1.60:1 |
| **$S_9$** | Obsidian Crimson | `hsl(350, 60%, 5%)` | `#120507` | 0.04 | 1.00:1 |

---

#### Theme 10: `nord-frost` (Arctic Glacier & Deep Navy)
- **Polarity:** `isDark: true` | **Canvas:** `#0B101B` | **Text:** `#ECEFF4` | **Accent:** `#88C0D0`
- **Dynamic Text Micro-Shadow:** `rgb(0 0 0) 1px 0.7px 0px`
- **Card Background:** `rgba(20, 30, 48, 0.85)` | **Border:** `rgba(136, 192, 208, 0.35)`

| Step | Semantic Role | HSL | Hex | Luminance $L$ | Contrast vs Canvas |
|:---:|:---|:---|:---:|:---:|:---:|
| **$S_0$** | Polar Snow | `hsl(218, 27%, 94%)` | `#ECEFF4` | 0.94 | 17.60:1 |
| **$S_1$** | Glacier Haze | `hsl(218, 27%, 88%)` | `#E5E9F0` | 0.87 | 16.30:1 |
| **$S_2$** | Arctic Mist | `hsl(219, 28%, 82%)` | `#D8DEE9` | 0.79 | 14.80:1 |
| **$S_3$** | Frost Cyan | `hsl(193, 43%, 67%)` | `#88C0D0` | 0.67 | 12.50:1 |
| **$S_4$** | Glacial Ice | `hsl(179, 25%, 65%)` | `#8FBCBB` | 0.58 | 10.80:1 |
| **$S_5$** | Polar Blue | `hsl(213, 32%, 52%)` | `#81A1C1` | 0.46 | 8.60:1 |
| **$S_6$** | Deep Barents | `hsl(220, 16%, 36%)` | `#5E81AC` | 0.33 | 6.20:1 |
| **$S_7$** | Nordic Twilight | `hsl(220, 16%, 22%)` | `#434C5E` | 0.19 | 3.60:1 |
| **$S_8$** | Night Fjord | `hsl(222, 16%, 13%)` | `#141E30` | 0.09 | 1.80:1 |
| **$S_9$** | Obsidian Arctic | `hsl(220, 30%, 7%)` | `#0B101B` | 0.04 | 1.00:1 |

---

## 4. Atmospheric Canvas Layers & Background Treatments

To achieve depth, texture, and visual interest without compromising content legibility, every slide mounts an atmospheric backdrop layer (`<SlideBackground />`) composed of four synchronized visual effects:

```
Atmospheric Canvas Stack:
┌─────────────────────────────────────────────────────────────┐
│ Plane 0: Base Solid Canvas Color (--pres-bg)                 │
│ ├─ Radial Spotlight Glow (ellipse 65% 55% at 50% 48%)       │
│ ├─ 48px Coordinate Engineering Grid (2.5% Opacity)          │
│ ├─ Floating Architectural Icons (8-12% Opacity, Float Wave)  │
│ └─ Subtle Halftone Dot Matrix Overlay (24px Spacing)        │
└─────────────────────────────────────────────────────────────┘
```

### 4.1 Radial Spotlight Glow Treatment
- **Geometry:** `radial-gradient(ellipse 65% 55% at 50% 48%, var(--pres-accent-glow) 0%, transparent 70%)`
- **Dynamic Accent Pinning:** Keyed directly to the active theme's accent token (`--pres-accent`), with glow alpha set to `0.22` for dark themes and `0.08` for light editorial themes.
- **Visual Function:** Centers executive attention on the focal content zone while keeping outer margins uncluttered.

### 4.2 Sub-Pixel 48px Coordinate Grid
- **Grid Dimension:** 48px horizontal and vertical cell spacing.
- **Opacity:** Strictly fixed at $2.5\%$ (`rgba(255, 255, 255, 0.025)` for dark obsidian, `rgba(15, 23, 42, 0.025)` for light editorial).
- **CSS Implementation:**
  ```css
  .pres-coordinate-grid {
    background-size: 48px 48px;
    background-image: 
      linear-gradient(to right, var(--pres-grid-stroke) 1px, transparent 1px),
      linear-gradient(to bottom, var(--pres-grid-stroke) 1px, transparent 1px);
    opacity: 0.025;
    pointer-events: none;
  }
  ```

### 4.3 Floating Architectural Vector Icons
- **Icon Set:** Enterprise SVG vector symbols: `Layers`, `Terminal`, `Cpu`, `Shield`, `Compass`.
- **Opacity Band:** Calibrated between $8\%$ and $12\%$ to avoid text interference.
- **Motion Choreography:** Continuous gentle harmonic floating animation (`floatWave`):
  - Amplitude: $\pm 12\text{px}$ vertical translation, $\pm 1.5^\circ$ subtle tilt.
  - Period: 12 seconds with staggered phase offsets ($0\text{s}, 2.4\text{s}, 4.8\text{s}, 7.2\text{s}, 9.6\text{s}$).

### 4.4 Subtle Halftone Dot Overlay
- **Pattern:** 24px Cartesian dot matrix with $1.2\text{px}$ dot radius.
- **Opacity:** $3.5\%$ overlay creating subtle analog print texture, preventing flat digital banding across dark OLED or projector displays.

---

## 5. Kinetic Motion System & Spring Physics Engine

Static presentations feel dead; linear easing feels robotic. The kinetic engine uses second-order damped harmonic oscillators for natural spatial physical feedback.

### 5.1 Damped Harmonic Oscillator Mathematics

$$m \frac{d^2x}{dt^2} + c \frac{dx}{dt} + k x = 0$$

Where:
- $m$: Mass of the animated DOM element ($m = 0.8\text{ kg}$)
- $k$: Spring stiffness coefficient ($k = 420\text{ N/m}$)
- $\zeta$: Damping ratio ($\zeta = 0.85$, critically damped, zero overshoot)
- $c$: Damping coefficient computed via $c = 2 \zeta \sqrt{km} = 2 \times 0.85 \times \sqrt{420 \times 0.8} \approx 31.17\text{ N}\cdot\text{s/m}$

### 5.2 Calibrated Spring Physics Parameters

| Animation Component | Spring Config Object | Stiffness ($k$) | Damping ($c$) | Mass ($m$) | Perceptual Behavior |
|:---|:---|:---:|:---:|:---:|:---|
| **StepDetailPane** | `{ type: "spring", stiffness: 420, damping: 17, mass: 0.8 }` | 420 | 17 | 0.8 | Snappy, crisp reveal with organic deceleration |
| **Progress Rail** | `{ type: "spring", stiffness: 220, damping: 32, mass: 1.0 }` | 220 | 32 | 1.0 | Smooth, weighted fluid track extension |
| **Active Halo** | `{ type: "spring", stiffness: 320, damping: 30, mass: 0.6 }` | 320 | 30 | 0.6 | Radiant, breathing focus ring stabilization |

### 5.3 Deceleration Easing Curves
When using CSS transitions, Web Animations API (WAAPI), or Framer Motion variants, the system enforces two calibrated bezier curves:
- **Presentation Primary Ease:** `@ease-presentation: cubic-bezier(0.22, 1, 0.36, 1);`
- **Quintic Out Curve:** `[0.16, 1, 0.3, 1]`

```css
:root {
  --pres-ease-presentation: cubic-bezier(0.22, 1, 0.36, 1);
  --pres-ease-quintic: cubic-bezier(0.16, 1, 0.3, 1);
  --pres-duration-fast: 180ms;
  --pres-duration-base: 320ms;
  --pres-duration-slow: 480ms;
}
```

### 5.4 Directional Slide Transitions (`slideDirection: 1 | -1`)
The engine tracks transition polarity via `slideDirection` in `useDeckStore`:
- **Forward Progression (`slideDirection === 1`):**
  - Entering slide begins at `translateX(100%)` (right) and transitions to `translateX(0)`.
  - Exiting slide begins at `translateX(0)` and transitions to `translateX(-100%)` (left).
- **Backward Rewind (`slideDirection === -1`):**
  - Entering slide begins at `translateX(-100%)` (left) and transitions to `translateX(0)`.
  - Exiting slide begins at `translateX(0)` and transitions to `translateX(100%)` (right).
- **Hardware Acceleration:** All stage transforms apply `will-change: transform, opacity;` and execute on dedicated GPU composite layers.

---

## 6. Acoustic Sound Cues & Audio Ergonomics

Tactile audio feedback reinforces spatial navigation, giving presenter actions high physical presence without auditory clutter.

### 6.1 Sound Event Catalog

| Sound Cue | Audio Synthesis Trigger | Waveform & Frequency | Duration | Gain Level | Semantic Role |
|:---|:---|:---:|:---:|:---:|:---|
| **Whoosh** | Slide transition (`nextSlide`, `prevSlide`) | Filtered Pink Noise + Sine ($240\text{ Hz} \to 480\text{ Hz}$) | 220ms | 0.35 | Full slide coordinate transit |
| **Click** | Intra-slide step advance (`stepAdvance`, `stepRewind`) | Sharp Triangle Chirp ($750\text{ Hz} \to 320\text{ Hz}$) | 60ms | 0.30 | Discrete milestone/bullet progression |
| **Pop** | Active halo lock, card reveal, CTA submit | Resonant Dual Sine ($587\text{ Hz} \to 880\text{ Hz}$) | 90ms | 0.28 | Focus acquisition & modal confirmation |

### 6.2 Dual-Tier Audio Engine with HTMLAudio Fallback Pool
1. **Primary Synthesized Engine (Web Audio API):** Generates zero-latency procedural waveforms using dynamic `OscillatorNode` and `GainNode` envelopes.
2. **HTMLAudio Fallback Pool:** If the browser environment restricts `AudioContext` autoplay or if Web Audio is unsupported, the engine falls back to an instantiated pool of lightweight pre-rendered WAV/MP3 elements.

### 6.3 Dynamic Audio Ducking & Safety Governance
- **Narrator & Media Ducking:** When presenter voice or video playback is active (`isAudioActive`), sound effect gain dynamically ducks by $-14\text{ dB}$.
- **Master Volume Cap:** Master sound output is strictly clamped to $\le 0.40$ linear amplitude ($-12\text{ dB}$) to prevent acoustic clipping.
- **Rapid Navigation Debounce:** Successive triggers within $80\text{ms}$ are coalesced to eliminate audio distortion during rapid key presses.

### 6.4 Positive Boolean Audio Contract
```typescript
export interface AudioConfiguration {
  hasSoundFeedback: boolean;
  hasAudioSync: boolean;
  hasDuckingEnabled: boolean;
  isAudioMuted: boolean;
  masterVolumeLevel: number;
}
```

---

## 7. Downstream Implementation Checklist

- [x] Full 10-theme master palette definitions in `src/themes/gradientTokens.ts` ($S_0$ through $S_9$).
- [x] Dynamic micro-shadows injected in `src/themes/themeRuntime.ts` (`rgb(0 0 0) 1px 0.7px 0px` vs `rgb(255 255 255) 1px 0.7px 0px`).
- [x] Background atmospheric layer `<SlideBackground />` mounted in `#presentation-root` with spotlight, 48px grid, floating icons, and halftone dots.
- [x] Kinetic spring physics configured with $k=420$, $c=17$, $m=0.8$ for `StepDetailPane`.
- [x] Directional slide transitions driven by `slideDirection: 1 | -1`.
- [x] Synthesized audio cues (whoosh, click, pop) with ducking and HTMLAudio fallback pool.
