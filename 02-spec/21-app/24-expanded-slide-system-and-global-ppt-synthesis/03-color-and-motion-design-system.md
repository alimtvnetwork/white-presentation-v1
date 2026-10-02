# 03-Color & Motion Design System: 10-Step Gradient Precision, Kinetic Physics & Acoustic Sync

> **Module:** `02-spec/21-app/24-expanded-slide-system-and-global-ppt-synthesis`  
> **Status:** Canonical Specification  
> **Target Release:** `v1.1.0`  
> **Reference Architecture:** Global PPT Corporate Synthesis & WP Exam Theme Integration

---

## 1. System Overview & Architectural Mandate

In the White Presentation System, color application and kinetic motion are never left to arbitrary aesthetic whim or unconstrained CSS interpolation. Presentation visual fidelity demands deterministic, mathematically grounded design tokens that guarantee:
1. **WCAG 2.1 AAA Contrast Compliance:** Crystal-clear legibility across all ambient lighting conditions and projection equipment.
2. **Deterministic Multi-Theme Scaling:** Consistent luminance steps ($S_0$ through $S_9$) across light editorial canvases, deep obsidian luxury palettes, and high-energy cybernetic themes.
3. **High-Definition Anti-Aliased Shadowing:** Specialized `headerShadow` treatments that eliminate chromatic bleeding between typography and organic gradient ribbons.
4. **Natural Kinetic Physics:** Quintic deceleration curve easing that provides smooth organic deceleration without sluggish latency or harsh snapping.
5. **Acoustic Feedback Synchronization:** Dynamic audio attenuation (`stepVolume`) and intelligent background music ducking synchronized with presenter narration and slide reveals.

---

## 2. Mathematical 10-Step Gradient & Luminance Architecture

### 2.1 Linear Lightness & Perceptually Uniform Interpolation
Every theme defines a 10-step gradient ramp ($S_0$ to $S_9$). For boundary anchor colors $C_{\text{start}} (S_0)$ and $C_{\text{end}} (S_9)$, intermediate steps $S_i$ ($i \in \{0, \dots, 9\}$) are computed along the perceptual lightness scale:

$$t_i = \frac{i}{9}, \quad i \in \{0, 1, 2, 3, 4, 5, 6, 7, 8, 9\}$$

$$\text{Hue}_i = \text{Hue}_{\text{start}} + t_i \cdot (\text{Hue}_{\text{end}} - \text{Hue}_{\text{start}})$$

$$\text{Sat}_i = \text{Sat}_{\text{start}} + t_i \cdot (\text{Sat}_{\text{end}} - \text{Sat}_{\text{start}})$$

$$\text{Light}_i = \text{Light}_{\text{start}} + t_i \cdot (\text{Light}_{\text{end}} - \text{Light}_{\text{start}})$$

### 2.2 Relative Luminance & Contrast Ratio Formulas
Relative luminance $L$ for any sRGB color stop is calculated according to the WCAG 2.1 specification:

$$R_c = \frac{R_{\text{8bit}}}{255}, \quad G_c = \frac{G_{\text{8bit}}}{255}, \quad B_c = \frac{B_{\text{8bit}}}{255}$$

For each color channel $C \in \{R_c, G_c, B_c\}$:

$$C_{\text{linear}} = \begin{cases} \frac{C}{12.92} & \text{if } C \le 0.04045 \\ \left(\frac{C + 0.055}{1.055}\right)^{2.4} & \text{if } C > 0.04045 \end{cases}$$

$$L = 0.2126 R_{\text{linear}} + 0.7152 G_{\text{linear}} + 0.0722 B_{\text{linear}}$$

The contrast ratio $C_R$ between two colors with luminances $L_1$ and $L_2$ ($L_1 > L_2$) is:

$$C_R = \frac{L_1 + 0.05}{L_2 + 0.05}$$

- **Large Typography ($\ge 24\text{px}$ bold or $\ge 32\text{px}$ regular):** $C_R \ge 4.5:1$ (WCAG AAA).
- **Body & Captions ($\le 20\text{px}$):** $C_R \ge 7:1$ (WCAG AAA).

---

## 3. Complete 10-Theme Palette Specifications

The White Presentation System supports 10 distinct, fully documented presentation themes. Each theme provides exact HSL, RGB, HEX coordinates, relative luminance ($L$), and contrast metrics on white background for all 10 gradient steps ($S_0$ to $S_9$).

```
Theme Matrix:
├── Light Themes (White Canvas / Black Brand Emblem)
│   ├── 01. white-brand (Pure White Clean Editorial)
│   └── 02. paper-editorial (Warm Cream & Navy)
└── Dark Themes (Obsidian Canvas / White Brand Emblem)
    ├── 03. true-dark (Obsidian & Electric Neon)
    ├── 04. emerald-growth (Dark Forest & Mint)
    ├── 05. wp-exam-purple (Royal Tech & Violet)
    ├── 06. midnight-luxe (Dark Editorial & Royal Blue)
    ├── 07. sunset-horizon (Warm Plum & Coral)
    ├── 08. cyber-neon (Synthwave Cyan & Magenta)
    ├── 09. crimson-executive (Ruby & Obsidian)
    └── 10. nord-frost (Arctic Glacier & Navy)
```

---

### 3.1 Theme 1: `white-brand` (Pure White Clean Editorial)
- **ID:** `white-brand`
- **Display Name:** Pure White (Clean Editorial)
- **Role:** Flagship enterprise keynote canvas
- **Polarity:** `isDark: false`
- **Canvas Background:** `#FFFFFF`
- **Text Color:** `#0F172A`
- **Subtext Color:** `#475569`
- **Card Background:** `rgba(255, 255, 255, 0.90)`
- **Card Border:** `#E2E8F0`
- **Accent Color:** `#7C3AED`
- **Has Dot Matrix:** `false`
- **Header Shadow:** `rgb(255 255 255) 1px 0.7px 0px`
- **Logo Asset:** `/assets/logos/6 - Riseup Asia Logo Transparent Only BK.png`

| Step | Role / Semantic Tag | HSL Coordinate | RGB Coordinate | HEX Value | Luma ($L$) | Contrast (on #FFF) | Primary Functional Application |
|:---:|:---|:---|:---|:---:|:---:|:---:|:---|
| **$S_0$** | Base Light | `hsl(250, 100%, 98%)` | `rgb(245, 243, 255)` | `#F5F3FF` | 0.96 | 1.08:1 | Wave highlight crest, ambient glow aura |
| **$S_1$** | Sub-Surface Wash | `hsl(252, 95%, 94%)` | `rgb(237, 233, 254)` | `#EDE9FE` | 0.92 | 1.18:1 | Subtle table alternating rows, card tint |
| **$S_2$** | Neutral Border | `hsl(251, 91%, 87%)` | `rgb(221, 214, 254)` | `#DDD6FE` | 0.86 | 1.35:1 | Secondary dividers, card inactive border |
| **$S_3$** | Badge Tint | `hsl(252, 95%, 78%)` | `rgb(196, 181, 253)` | `#C4B5FD` | 0.77 | 1.69:1 | Pill container background, inactive step chip |
| **$S_4$** | Secondary Accent | `hsl(255, 92%, 69%)` | `rgb(167, 139, 250)` | `#A78BFA` | 0.68 | 2.16:1 | Icon halo fill, secondary progress bar |
| **$S_5$** | Midtone Primary | `hsl(258, 90%, 62%)` | `rgb(139, 92, 246)` | `#8B5CF6` | 0.58 | 2.96:1 | Gradient wave mid-ribbon, button hover |
| **$S_6$** | Brand Lead | `hsl(262, 83%, 58%)` | `rgb(124, 58, 237)` | `#7C3AED` | 0.51 | 3.84:1 | Primary headline accent, brand badge text |
| **$S_7$** | Deep Shading | `hsl(263, 70%, 50%)` | `rgb(109, 40, 217)` | `#6D28D9` | 0.42 | 5.66:1 | Active button background, focal icons |
| **$S_8$** | High Contrast | `hsl(264, 67%, 35%)` | `rgb(76, 29, 149)` | `#4C1D95` | 0.28 | 11.20:1 | Kicker labels, metric title highlight |
| **$S_9$** | Deep Navy Ink | `hsl(222, 47%, 11%)` | `rgb(15, 23, 42)` | `#0F172A` | 0.11 | 16.80:1 | Primary title typography, high-contrast text |

---

### 3.2 Theme 2: `paper-editorial` (Warm Cream & Navy)
- **ID:** `paper-editorial`
- **Display Name:** Paper Editorial (Warm Cream & Navy)
- **Role:** Archival editorial literature and executive report briefings
- **Polarity:** `isDark: false`
- **Canvas Background:** `#F5F0E6`
- **Text Color:** `#1A1A1A`
- **Subtext Color:** `#615A4F`
- **Card Background:** `rgba(255, 252, 247, 0.92)`
- **Card Border:** `#D8CEBE`
- **Accent Color:** `#1D4ED8`
- **Has Dot Matrix:** `false`
- **Header Shadow:** `rgb(255 255 255) 1px 0.7px 0px`
- **Logo Asset:** `/assets/logos/6 - Riseup Asia Logo Transparent Only BK.png`

| Step | Role / Semantic Tag | HSL Coordinate | RGB Coordinate | HEX Value | Luma ($L$) | Contrast (on #FFF) | Primary Functional Application |
|:---:|:---|:---|:---|:---:|:---:|:---:|:---|
| **$S_0$** | Archival Cream | `hsl(42, 50%, 96%)` | `rgb(250, 247, 240)` | `#FAF7F0` | 0.96 | 1.06:1 | Card surface base fill, soft modal wash |
| **$S_1$** | Warm Parchment | `hsl(39, 43%, 93%)` | `rgb(245, 240, 230)` | `#F5F0E6` | 0.93 | 1.15:1 | Secondary backdrop wash, quote card surface |
| **$S_2$** | Cardboard Tint | `hsl(38, 40%, 86%)` | `rgb(234, 224, 208)` | `#EAE0D0` | 0.86 | 1.34:1 | Table borders, timeline connector line |
| **$S_3$** | Muted Ochre | `hsl(38, 36%, 75%)` | `rgb(212, 196, 168)` | `#D4C4A8` | 0.75 | 1.76:1 | Inactive chip tags, subtle watermark tint |
| **$S_4$** | Editorial Slate | `hsl(213, 94%, 68%)` | `rgb(96, 165, 250)` | `#60A5FA` | 0.65 | 2.30:1 | Secondary badge highlight, graph secondary line |
| **$S_5$** | Refined Royal | `hsl(221, 83%, 53%)` | `rgb(37, 99, 235)` | `#2563EB` | 0.51 | 3.80:1 | Metric badge background, call-to-action button |
| **$S_6$** | Classical Navy | `hsl(224, 76%, 48%)` | `rgb(29, 78, 216)` | `#1D4ED8` | 0.42 | 5.50:1 | Primary accent headings, link focus indicators |
| **$S_7$** | Deep Blue Ink | `hsl(224, 64%, 33%)` | `rgb(30, 58, 138)` | `#1E3A8A` | 0.28 | 10.20:1 | Subheader emphasis, editorial byline |
| **$S_8$** | Charcoal Ink | `hsl(30, 9%, 16%)` | `rgb(44, 40, 37)` | `#2C2825` | 0.16 | 14.50:1 | Paragraph narrative text, card titles |
| **$S_9$** | Archival Black | `hsl(0, 0%, 10%)` | `rgb(26, 26, 26)` | `#1A1A1A` | 0.10 | 17.20:1 | Primary slide headlines, hero pull-quotes |

---

### 3.3 Theme 3: `true-dark` (Obsidian & Electric Neon)
- **ID:** `true-dark`
- **Display Name:** True Dark (Obsidian & Neon)
- **Role:** High-tech presentation canvas with luminescent neon vectors
- **Polarity:** `isDark: true`
- **Canvas Background:** `#020617`
- **Text Color:** `#F8FAFC`
- **Subtext Color:** `#94A3B8`
- **Card Background:** `rgba(15, 23, 42, 0.85)`
- **Card Border:** `rgba(99, 102, 241, 0.35)`
- **Accent Color:** `#6366F1`
- **Has Dot Matrix:** `true`
- **Header Shadow:** `rgb(0 0 0) 1px 0.7px 0px`
- **Logo Asset:** `/assets/logos/riseup_asia_white.svg`

| Step | Role / Semantic Tag | HSL Coordinate | RGB Coordinate | HEX Value | Luma ($L$) | Contrast (on #020617) | Primary Functional Application |
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

### 3.4 Theme 4: `emerald-growth` (Dark Forest & Mint)
- **ID:** `emerald-growth`
- **Display Name:** Emerald Growth (Dark Forest & Mint)
- **Role:** Sustainability, biomedical, clinical trials, and KPI scaling presentations
- **Polarity:** `isDark: true`
- **Canvas Background:** `#022C22`
- **Text Color:** `#ECFDF5`
- **Subtext Color:** `#6EE7B7`
- **Card Background:** `rgba(6, 78, 59, 0.85)`
- **Card Border:** `rgba(52, 211, 153, 0.35)`
- **Accent Color:** `#10B981`
- **Has Dot Matrix:** `true`
- **Header Shadow:** `rgb(0 0 0) 1px 0.7px 0px`
- **Logo Asset:** `/assets/logos/riseup_asia_white.svg`

| Step | Role / Semantic Tag | HSL Coordinate | RGB Coordinate | HEX Value | Luma ($L$) | Contrast (on #022C22) | Primary Functional Application |
|:---:|:---|:---|:---|:---:|:---:|:---:|:---|
| **$S_0$** | Mint Tint | `hsl(152, 81%, 96%)` | `rgb(236, 253, 245)` | `#ECFDF5` | 0.96 | 16.50:1 | Primary slide headlines, key stat value |
| **$S_1$** | Light Sage | `hsl(149, 80%, 90%)` | `rgb(209, 250, 229)` | `#D1FAE5` | 0.90 | 14.80:1 | Subheader text, active metric pill text |
| **$S_2$** | Soft Seafoam | `hsl(152, 76%, 80%)` | `rgb(167, 243, 208)` | `#A7F3D0` | 0.80 | 12.00:1 | Secondary card label, verified checkmark |
| **$S_3$** | Vibrant Mint | `hsl(156, 73%, 67%)` | `rgb(110, 231, 183)` | `#6EE7B7` | 0.67 | 8.90:1 | Card border glow, growth rate percentage |
| **$S_4$** | Spring Emerald | `hsl(158, 64%, 52%)` | `rgb(52, 211, 153)` | `#34D399` | 0.52 | 6.20:1 | Secondary CTA button, icon stroke |
| **$S_5$** | Core Emerald | `hsl(160, 84%, 39%)` | `rgb(16, 185, 129)` | `#10B981` | 0.39 | 4.80:1 | Primary button fill, progress indicator fill |
| **$S_6$** | Deep Forest | `hsl(161, 94%, 30%)` | `rgb(5, 150, 105)` | `#059669` | 0.30 | 3.40:1 | Wave ribbon middle tier, active tab container |
| **$S_7$** | Pine Shadow | `hsl(163, 88%, 20%)` | `rgb(4, 120, 87)` | `#047857` | 0.20 | 2.40:1 | Inactive card outline, bottom contour ribbon |
| **$S_8$** | Dark Spruce | `hsl(164, 86%, 16%)` | `rgb(6, 78, 59)` | `#064E3B` | 0.16 | 1.80:1 | Elevated card background fill |
| **$S_9$** | Abyssal Green | `hsl(166, 91%, 9%)` | `rgb(2, 44, 34)` | `#022C22` | 0.09 | 1.00:1 | Dark forest canvas background |

---

### 3.5 Theme 5: `wp-exam-purple` (Royal Tech & Violet)
- **ID:** `wp-exam-purple`
- **Display Name:** WP Exam Purple (Royal Tech)
- **Role:** Interactive educational, technical certification, and sovereign quiz presentations
- **Polarity:** `isDark: true`
- **Canvas Background:** `#1E1B4B`
- **Text Color:** `#F5F3FF`
- **Subtext Color:** `#C4B5FD`
- **Card Background:** `rgba(49, 16, 75, 0.85)`
- **Card Border:** `rgba(168, 85, 247, 0.35)`
- **Accent Color:** `#A855F7`
- **Has Dot Matrix:** `true`
- **Header Shadow:** `rgb(0 0 0) 1px 0.7px 0px`
- **Logo Asset:** `/assets/logos/riseup_asia_white.svg`

| Step | Role / Semantic Tag | HSL Coordinate | RGB Coordinate | HEX Value | Luma ($L$) | Contrast (on #1E1B4B) | Primary Functional Application |
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

### 3.6 Theme 6: `midnight-luxe` (Dark Editorial & Royal Blue)
- **ID:** `midnight-luxe`
- **Display Name:** Midnight Luxe (Dark Editorial)
- **Role:** High-net-worth investor keynotes, sovereign debt reviews, luxury corporate decks
- **Polarity:** `isDark: true`
- **Canvas Background:** `#0B192C`
- **Text Color:** `#F8FAFC`
- **Subtext Color:** `#94A3B8`
- **Card Background:** `rgba(24, 34, 53, 0.85)`
- **Card Border:** `rgba(59, 130, 246, 0.35)`
- **Accent Color:** `#3B82F6`
- **Has Dot Matrix:** `false`
- **Header Shadow:** `rgb(0 0 0) 1px 0.7px 0px`
- **Logo Asset:** `/assets/logos/riseup_asia_white.svg`

| Step | Role / Semantic Tag | HSL Coordinate | RGB Coordinate | HEX Value | Luma ($L$) | Contrast (on #0B192C) | Primary Functional Application |
|:---:|:---|:---|:---|:---:|:---:|:---:|:---|
| **$S_0$** | Luminous Highlight | `hsl(210, 40%, 98%)` | `rgb(248, 250, 252)` | `#F8FAFC` | 0.98 | 17.20:1 | Executive headline typography |
| **$S_1$** | Muted Slate | `hsl(214, 32%, 91%)` | `rgb(226, 232, 240)` | `#E2E8F0` | 0.91 | 15.60:1 | Financial statement summary subtext |
| **$S_2$** | Subtle Steel | `hsl(215, 20%, 65%)` | `rgb(148, 163, 184)` | `#94A3B8` | 0.65 | 9.20:1 | Balance sheet notes, inactive icons |
| **$S_3$** | Midtone Indigo | `hsl(226, 57%, 64%)` | `rgb(99, 102, 241)` | `#6366F1` | 0.64 | 7.80:1 | Secondary metrics badge, chart line |
| **$S_4$** | Vibrant Blue | `hsl(217, 91%, 60%)` | `rgb(59, 130, 246)` | `#3B82F6` | 0.60 | 6.90:1 | Primary accent badge, active chip |
| **$S_5$** | Royal Blue | `hsl(221, 83%, 53%)` | `rgb(29, 78, 216)` | `#1D4ED8` | 0.53 | 5.40:1 | Primary investor CTA button |
| **$S_6$** | Deep Twilight | `hsl(224, 76%, 36%)` | `rgb(30, 58, 138)` | `#1E3A8A` | 0.36 | 3.20:1 | Gradient contour wave layer |
| **$S_7$** | Midnight Slate | `hsl(222, 47%, 18%)` | `rgb(24, 34, 53)` | `#182235` | 0.18 | 1.80:1 | Card glass backdrop surface |
| **$S_8$** | Dark Charcoal | `hsl(215, 28%, 12%)` | `rgb(11, 25, 44)` | `#0B192C` | 0.12 | 1.20:1 | Secondary panel backplane |
| **$S_9$** | Absolute Abyss | `hsl(222, 84%, 5%)` | `rgb(2, 6, 23)` | `#020617` | 0.05 | 1.00:1 | Base midnight luxury canvas |

---

### 3.7 Theme 7: `sunset-horizon` (Warm Plum & Coral)
- **ID:** `sunset-horizon`
- **Display Name:** Sunset Horizon (Warm Plum & Coral)
- **Role:** Consumer product launches, creative agencies, and bold visionary narratives
- **Polarity:** `isDark: true`
- **Canvas Background:** `#1B0D1F`
- **Text Color:** `#FFEAF0`
- **Subtext Color:** `#C89AA6`
- **Card Background:** `rgba(42, 20, 48, 0.85)`
- **Card Border:** `rgba(255, 122, 89, 0.35)`
- **Accent Color:** `#FF7A59`
- **Has Dot Matrix:** `true`
- **Header Shadow:** `rgb(0 0 0) 1px 0.7px 0px`
- **Logo Asset:** `/assets/logos/riseup_asia_white.svg`

| Step | Role / Semantic Tag | HSL Coordinate | RGB Coordinate | HEX Value | Luma ($L$) | Contrast (on #1B0D1F) | Primary Functional Application |
|:---:|:---|:---|:---|:---:|:---:|:---:|:---|
| **$S_0$** | Peach Whisper | `hsl(12, 100%, 97%)` | `rgb(255, 240, 237)` | `#FFF0ED` | 0.95 | 17.80:1 | Primary headline typography, warm glints |
| **$S_1$** | Soft Apricot | `hsl(13, 95%, 90%)` | `rgb(254, 215, 204)` | `#FED7CC` | 0.88 | 15.20:1 | Subheader text, card highlight pills |
| **$S_2$** | Pale Coral | `hsl(14, 96%, 81%)` | `rgb(253, 181, 160)` | `#FDB5A0` | 0.78 | 12.40:1 | Secondary body text, active bullet icon |
| **$S_3$** | Warm Salmon | `hsl(14, 96%, 71%)` | `rgb(252, 142, 110)` | `#FC8E6E` | 0.67 | 9.80:1 | Card borders, milestone pin fill |
| **$S_4$** | Plum Tint | `hsl(345, 29%, 69%)` | `rgb(200, 154, 166)` | `#C89AA6` | 0.60 | 7.90:1 | Metadata labels, subtle divider lines |
| **$S_5$** | Coral Glow | `hsl(12, 88%, 58%)` | `rgb(240, 93, 56)` | `#F05D38` | 0.49 | 5.80:1 | Primary button background, metric callout |
| **$S_6$** | Warm Coral Lead | `hsl(12, 100%, 67%)` | `rgb(255, 122, 89)` | `#FF7A59` | 0.45 | 5.20:1 | Lead accent badge, headline emphasis |
| **$S_7$** | Deep Terracotta | `hsl(9, 76%, 37%)` | `rgb(168, 44, 23)` | `#A82C17` | 0.25 | 2.80:1 | Bottom wave layer, active state container |
| **$S_8$** | Dusk Plum | `hsl(332, 59%, 22%)` | `rgb(88, 23, 53)` | `#581735` | 0.14 | 1.60:1 | Card surface background fill |
| **$S_9$** | Midnight Plum | `hsl(287, 41%, 9%)` | `rgb(27, 13, 31)` | `#1B0D1F` | 0.07 | 1.00:1 | Deep sunset horizon canvas background |

---

### 3.8 Theme 8: `cyber-neon` (Synthwave Cyan & Magenta)
- **ID:** `cyber-neon`
- **Display Name:** Cyber Neon (Electric Cyan & Magenta)
- **Role:** AI model benchmarks, cybersecurity briefs, futuristic developer conferences
- **Polarity:** `isDark: true`
- **Canvas Background:** `#030712`
- **Text Color:** `#F9FAFB`
- **Subtext Color:** `#9CA3AF`
- **Card Background:** `rgba(17, 24, 39, 0.85)`
- **Card Border:** `rgba(6, 182, 212, 0.40)`
- **Accent Color:** `#06B6D4`
- **Has Dot Matrix:** `true`
- **Header Shadow:** `rgb(0 0 0) 1px 0.7px 0px`
- **Logo Asset:** `/assets/logos/riseup_asia_white.svg`

| Step | Role / Semantic Tag | HSL Coordinate | RGB Coordinate | HEX Value | Luma ($L$) | Contrast (on #030712) | Primary Functional Application |
|:---:|:---|:---|:---|:---:|:---:|:---:|:---|
| **$S_0$** | Neon Vapor | `hsl(183, 100%, 96%)` | `rgb(236, 254, 255)` | `#ECFEFF` | 0.97 | 19.80:1 | Primary terminal headlines, neon numbers |
| **$S_1$** | Cyan Mist | `hsl(186, 94%, 90%)` | `rgb(207, 250, 254)` | `#CFFAFE` | 0.92 | 17.50:1 | Code logs, active status tag text |
| **$S_2$** | Aqua Glow | `hsl(187, 92%, 82%)` | `rgb(165, 243, 252)` | `#A5F3FC` | 0.85 | 14.80:1 | Interactive pill borders, syntax keywords |
| **$S_3$** | Bright Teal | `hsl(187, 92%, 69%)` | `rgb(103, 232, 249)` | `#67E8F9` | 0.75 | 11.90:1 | Card border neon glow, command prompt |
| **$S_4$** | Synth Magenta | `hsl(292, 91%, 73%)` | `rgb(232, 121, 249)` | `#E879F9` | 0.58 | 8.20:1 | Dual-tone secondary accent, alert badges |
| **$S_5$** | Electric Cyan | `hsl(189, 94%, 54%)` | `rgb(34, 211, 238)` | `#22D3EE` | 0.52 | 7.10:1 | Primary cyan button, active tab indicator |
| **$S_6$** | Cyber Cyan Lead | `hsl(188, 86%, 43%)` | `rgb(6, 182, 212)` | `#06B6D4` | 0.44 | 5.80:1 | Lead cyber brand accent, wave crest |
| **$S_7$** | Neon Violet | `hsl(294, 72%, 40%)` | `rgb(162, 28, 175)` | `#A21CAF` | 0.30 | 3.60:1 | Synthwave contrast wave ribbon tier |
| **$S_8$** | Deep Synthwave | `hsl(264, 67%, 35%)` | `rgb(76, 29, 149)` | `#4C1D95` | 0.18 | 2.10:1 | Terminal panel backdrop, recessed card |
| **$S_9$** | Void Obsidian | `hsl(222, 71%, 4%)` | `rgb(3, 7, 18)` | `#030712` | 0.04 | 1.00:1 | Deep void synthwave canvas background |

---

### 3.9 Theme 9: `crimson-executive` (Ruby & Obsidian)
- **ID:** `crimson-executive`
- **Display Name:** Crimson Executive (Ruby & Obsidian)
- **Role:** High-urgency transformation pitches, board-level risk reviews, sovereign crisis decks
- **Polarity:** `isDark: true`
- **Canvas Background:** `#0F0508`
- **Text Color:** `#FFF1F2`
- **Subtext Color:** `#FDA4AF`
- **Card Background:** `rgba(34, 10, 18, 0.85)`
- **Card Border:** `rgba(225, 29, 72, 0.35)`
- **Accent Color:** `#E11D48`
- **Has Dot Matrix:** `true`
- **Header Shadow:** `rgb(0 0 0) 1px 0.7px 0px`
- **Logo Asset:** `/assets/logos/riseup_asia_white.svg`

| Step | Role / Semantic Tag | HSL Coordinate | RGB Coordinate | HEX Value | Luma ($L$) | Contrast (on #0F0508) | Primary Functional Application |
|:---:|:---|:---|:---|:---:|:---:|:---|:---|
| **$S_0$** | Rose Quartz | `hsl(356, 100%, 97%)` | `rgb(255, 241, 242)` | `#FFF1F2` | 0.96 | 18.20:1 | High-authority title typography |
| **$S_1$** | Blush Pink | `hsl(353, 100%, 95%)` | `rgb(255, 228, 230)` | `#FFE4E6` | 0.92 | 16.50:1 | Urgent subheader, stat delta badge text |
| **$S_2$** | Rose Petal | `hsl(351, 95%, 90%)` | `rgb(254, 205, 211)` | `#FECDD3` | 0.85 | 13.90:1 | Secondary body copy, risk factor notes |
| **$S_3$** | Vibrant Rose | `hsl(350, 89%, 82%)` | `rgb(253, 164, 175)` | `#FDA4AF` | 0.73 | 10.50:1 | Active card pill border, warning icon |
| **$S_4$** | Carmine Bloom | `hsl(350, 89%, 60%)` | `rgb(251, 113, 133)` | `#FB7185` | 0.60 | 7.90:1 | Secondary metric highlight, timeline node |
| **$S_5$** | Vivid Crimson | `hsl(350, 89%, 60%)` | `rgb(244, 63, 94)` | `#F43F5E` | 0.50 | 6.20:1 | Neon heart pulse glow, urgency tag |
| **$S_6$** | Ruby Lead | `hsl(347, 77%, 50%)` | `rgb(225, 29, 72)` | `#E11D48` | 0.40 | 4.80:1 | Primary executive CTA, brand accent lead |
| **$S_7$** | Imperial Crimson | `hsl(346, 83%, 41%)` | `rgb(190, 18, 60)` | `#BE123C` | 0.28 | 3.10:1 | Wave ribbon middle layer, active card fill |
| **$S_8$** | Deep Burgundy | `hsl(343, 75%, 30%)` | `rgb(136, 19, 55)` | `#881337` | 0.16 | 1.80:1 | Base card surface fill, divider line |
| **$S_9$** | Obsidian Rose | `hsl(342, 50%, 4%)` | `rgb(15, 5, 8)` | `#0F0508` | 0.05 | 1.00:1 | Deep crimson obsidian canvas background |

---

### 3.10 Theme 10: `nord-frost` (Arctic Glacier & Navy)
- **ID:** `nord-frost`
- **Display Name:** Nord Frost (Arctic Glacier & Navy)
- **Role:** Deep Scandinavian architectural decks, engineering blueprints, cloud systems
- **Polarity:** `isDark: true`
- **Canvas Background:** `#0B132B`
- **Text Color:** `#F0F9FF`
- **Subtext Color:** `#7DD3FC`
- **Card Background:** `rgba(28, 37, 65, 0.85)`
- **Card Border:** `rgba(56, 189, 248, 0.35)`
- **Accent Color:** `#38BDF8`
- **Has Dot Matrix:** `false`
- **Header Shadow:** `rgb(0 0 0) 1px 0.7px 0px`
- **Logo Asset:** `/assets/logos/riseup_asia_white.svg`

| Step | Role / Semantic Tag | HSL Coordinate | RGB Coordinate | HEX Value | Luma ($L$) | Contrast (on #0B132B) | Primary Functional Application |
|:---:|:---|:---|:---|:---:|:---:|:---:|:---|
| **$S_0$** | Glacier Frost | `hsl(204, 100%, 97%)` | `rgb(240, 249, 255)` | `#F0F9FF` | 0.97 | 18.00:1 | Crisp arctic title typography |
| **$S_1$** | Polar White | `hsl(204, 94%, 94%)` | `rgb(224, 242, 254)` | `#E0F2FE` | 0.92 | 16.20:1 | Subtitle typography, active card header |
| **$S_2$** | Pale Ice | `hsl(201, 94%, 86%)` | `rgb(186, 230, 253)` | `#BAE6FD` | 0.85 | 13.50:1 | System specification body text |
| **$S_3$** | Nordic Sky | `hsl(199, 89%, 74%)` | `rgb(125, 211, 252)` | `#7DD3FC` | 0.74 | 10.20:1 | Subtext callout, secondary chip text |
| **$S_4$** | Polar Azure | `hsl(199, 89%, 48%)` | `rgb(14, 165, 233)` | `#0EA5E9` | 0.58 | 7.20:1 | Terminal command prompt, metric badge |
| **$S_5$** | Fjord Blue | `hsl(201, 96%, 39%)` | `rgb(2, 132, 199)` | `#0284C7` | 0.48 | 5.80:1 | Primary button background, active tab pill |
| **$S_6$** | Glacier Lead | `hsl(199, 89%, 60%)` | `rgb(56, 189, 248)` | `#38BDF8` | 0.40 | 4.60:1 | Lead architectural accent, icon stroke |
| **$S_7$** | Deep Fjord | `hsl(202, 96%, 32%)` | `rgb(3, 105, 161)` | `#0369A1` | 0.27 | 2.80:1 | Bottom wave layer, divider line |
| **$S_8$** | Polar Midnight | `hsl(224, 40%, 18%)` | `rgb(28, 37, 65)` | `#1C2541` | 0.16 | 1.60:1 | Glass card backplane surface |
| **$S_9$** | Arctic Abyss | `hsl(225, 59%, 11%)` | `rgb(11, 19, 43)` | `#0B132B` | 0.08 | 1.00:1 | Arctic navy canvas background |

---

## 4. Light/Dark Mode Contrast & Ink-Stamp Rules

### 4.1 Canonical Header Shadow Standard
To ensure headlines maintain absolute razor sharpness against organic waves, photography feathered silhouettes, and ambient radial glow circles, text headers must utilize precise sub-pixel ink-stamp drop shadows:

```typescript
export function getHeaderShadow(isDarkTheme: boolean): string {
  // Dark themes (white/light text) use crisp obsidian ink-stamp shadow
  // Light themes (dark ink text) use crisp white halo reflection shadow
  return isDarkTheme
    ? 'rgb(0 0 0) 1px 0.7px 0px'
    : 'rgb(255 255 255) 1px 0.7px 0px';
}
```

- **Light Themes (`white-brand`, `paper-editorial`):**
  - Text color: `#0F172A` / `#1A1A1A` (Luminance $< 0.12$).
  - `headerShadow`: `"rgb(255 255 255) 1px 0.7px 0px"`
  - Brand Logo: Black monochrome vector (`/assets/logos/6 - Riseup Asia Logo Transparent Only BK.png`).
  - Optical Effect: Creates a 1px white sub-surface shelf that prevents dark glyph stems from vibrating against colorful background wave crests.
- **Dark Themes (`true-dark`, `emerald-growth`, `wp-exam-purple`, etc.):**
  - Text color: `#F8FAFC` / `#ECFDF5` / `#F5F3FF` (Luminance $> 0.95$).
  - `headerShadow`: `"rgb(0 0 0) 1px 0.7px 0px"`
  - Brand Logo: White monochrome vector (`/assets/logos/riseup_asia_white.svg`).
  - Optical Effect: Blocks luminance bleed from ambient glows, keeping delicate typography serifs and grotesque letterforms ultra-crisp.

---

## 5. Kinetic Motion & Animation Specifications

### 5.1 Quintic Deceleration Curve
All UI transitions, card reveals, and dialog zooms utilize standard quintic deceleration curve:

```typescript
export const PRESENTATION_EASE = [0.22, 1, 0.36, 1] as const;
```

In CSS / Less:
```less
@ease-presentation: cubic-bezier(0.22, 1, 0.36, 1);
```

#### Mathematical Formulation
The Bezier curve $B(t)$ with control points $P_0(0, 0)$, $P_1(0.22, 1)$, $P_2(0.36, 1)$, $P_3(1, 1)$ generates rapid initial velocity ($0\% \to 60\%$ travel within the first $25\%$ duration) followed by an ultra-smooth asymptotic deceleration curve that mimics physical inertia.

### 5.2 Keyframe Definitions

#### `slideInUpSoft` (Staggered Content Reveal)
```less
@keyframes slideInUpSoft {
  from {
    opacity: 0;
    transform: translate3d(0, 24px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.slide-up-anim {
  animation: slideInUpSoft 0.6s @ease-presentation both;
  will-change: transform, opacity;
}
```

#### `waveFloat` (Organic Ambient Wave Drift)
```less
@keyframes waveFloat {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-8px) rotate(1deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
}

.wave-float-anim {
  animation: waveFloat 6s ease-in-out infinite;
  will-change: transform;
}
```

#### `badgeShimmer` (Active Badge Highlight Sweep)
```less
@keyframes badgeShimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.badge-shimmer-anim {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.4) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  background-size: 200% 100%;
  animation: badgeShimmer 3.5s infinite;
}
```

### 5.3 Stagger Delay Cascading Architecture
List items, KPI cards, and process nodes reveal in sequential cascades with strict $0.08\text{s}$ interval steps:

```less
.stagger-1 { animation-delay: 0.08s; }
.stagger-2 { animation-delay: 0.16s; }
.stagger-3 { animation-delay: 0.24s; }
.stagger-4 { animation-delay: 0.32s; }
.stagger-5 { animation-delay: 0.40s; }
.stagger-6 { animation-delay: 0.48s; }
.stagger-7 { animation-delay: 0.56s; }
.stagger-8 { animation-delay: 0.64s; }
```

### 5.4 Accessibility Guard (`prefers-reduced-motion`)
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

## 6. Audio Synchronization & Acoustic Mathematics

### 6.1 Audio Event Catalog & Debouncing
Tactile acoustic feedback is generated via Web Audio API oscillators or buffered sample triggers:

| Audio Event | Asset File | Trigger Event | Nominal Gain | Debounce Window |
|:---|:---|:---|:---:|:---:|
| **Slide Transition** | `/sounds/fade_swoosh_v4.mp3` | Next/Prev slide change | $0.90 \times \text{Master}$ | $120\text{ms}$ |
| **Sub-Step Advance** | `/sounds/click.mp3` | Multi-step forward reveal | $\text{stepVolume}(\text{Master})$ | $80\text{ms}$ |
| **Typewriter Tap** | `/sounds/tap.mp3` | Live character reveal | $0.35 \times \text{Master}$ | $45\text{ms}$ |
| **Theme Switch Clink**| Synthetic Sine ($880\text{Hz}$) | Theme dropdown select | $0.40 \times \text{Master}$ | $100\text{ms}$ |

### 6.2 Step Volume Attenuation Formula
Sub-step advance clicks must provide tactile confirmation without competing with the master slide transition swoosh:

$$\text{stepVolume}(m) = \begin{cases} m & \text{if } m < 0.3 \\ \max(0.3, m - 0.3) & \text{if } m \ge 0.3 \end{cases}$$

```typescript
export function calculateStepVolume(masterVolume: number): number {
  if (masterVolume < 0.3) {
    return masterVolume;
  }
  return Math.max(0.3, masterVolume - 0.3);
}
```

### 6.3 Dynamic Narration & Video Audio Ducking
When embedded media or presenter speech is active, deck background music automatically ducks to $20\%$ nominal gain:

$$\text{gain}(t) = \begin{cases} 
g_{\text{nom}} - 0.8 g_{\text{nom}} \cdot \left(\frac{t - t_{\text{duck}}}{0.40}\right) & \text{for } 0 \le t - t_{\text{duck}} \le 0.40\text{s (Ducking Phase)} \\
0.20 g_{\text{nom}} & \text{during Active Speech} \\
0.20 g_{\text{nom}} + 0.8 g_{\text{nom}} \cdot \left(\frac{t - t_{\text{release}}}{0.80}\right) & \text{for } 0 \le t - t_{\text{release}} \le 0.80\text{s (Recovery Phase)}
\end{cases}$$

- **Attack Time:** $400\text{ms}$ exponential ramp down.
- **Target Attenuation:** $-14\text{dB}$ ($20\%$ linear gain).
- **Release Time:** $800\text{ms}$ linear ramp restore to nominal background music volume.
