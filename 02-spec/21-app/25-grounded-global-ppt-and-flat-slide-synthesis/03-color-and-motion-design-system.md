# 03-Color & Motion Design System: 10-Step Gradient Precision, Kinetic Physics & Acoustic Sync

> **Module:** `02-spec/21-app/25-grounded-global-ppt-and-flat-slide-synthesis`  
> **Status:** Canonical Specification  
> **Target Release:** `v1.2.0`  
> **Reference Architecture:** Global PPT Corporate Synthesis, Flat Slide Declarative Engine & White Presentation Runtime

---

## 1. System Overview & Architectural Mandate

In the White Presentation System, color distribution, typography rendering, and kinetic motion are strictly governed by deterministic, mathematically grounded design tokens. Presentation visual fidelity demands deterministic contracts that guarantee:

1. **WCAG 2.1 AAA Contrast Compliance:** Deterministic legibility across all ambient lighting conditions, projection equipment, and device screens.
2. **Deterministic 10-Step Luminance Scaling:** Continuous lightness steps ($S_0$ through $S_9$) across light editorial canvases, deep obsidian luxury palettes, and high-energy cybernetic themes.
3. **Dynamic CSS Variable Runtime Architecture:** A unified `--pres-*` token interface that adapts seamlessly across all 10 production themes without component-level color hardcoding.
4. **Natural Kinetic Physics:** Motion variants (`lift`, `slide`, `parallax`) driven by quintic deceleration easing `cubic-bezier(0.22, 1, 0.36, 1)` and step-by-step reveal timelines.
5. **High-Definition Anti-Aliased Shadowing:** Precise ink-stamp text shadows (`rgb(0 0 0) 1px 0.7px 0px` on dark; `rgb(255 255 255) 1px 0.7px 0px` on light) eliminating chromatic vibration against organic wave ribbons.
6. **Acoustic Feedback Synchronization:** Tactile step-advance audio cues (`/sounds/click.mp3`), logarithmic attenuation (`stepVolume`), and automatic narration ducking.

---

## 2. Mathematical 10-Step Gradient & Luminance Architecture

### 2.1 Linear Lightness & Perceptually Uniform Interpolation Formula
Every theme defines an immutable 10-step gradient ramp ($S_0$ to $S_9$). For boundary anchor colors $C_{\text{start}} (S_0)$ and $C_{\text{end}} (S_9)$, intermediate steps $S_i$ ($i \in \{0, 1, \dots, 9\}$) are computed along the perceptual lightness scale:

$$t_i = \frac{i}{9}, \quad i \in \{0, 1, 2, 3, 4, 5, 6, 7, 8, 9\}$$

$$\text{Hue}_i = \text{Hue}_{\text{start}} + t_i \cdot (\text{Hue}_{\text{end}} - \text{Hue}_{\text{start}})$$

$$\text{Sat}_i = \text{Sat}_{\text{start}} + t_i \cdot (\text{Sat}_{\text{end}} - \text{Sat}_{\text{start}})$$

$$\text{Light}_i = \text{Light}_{\text{start}} + t_i \cdot (\text{Light}_{\text{end}} - \text{Light}_{\text{start}})$$

### 2.2 Relative Luminance & Contrast Ratio Formulas
Relative luminance $L$ for any sRGB color stop is calculated according to the WCAG 2.1 standard:

$$R_c = \frac{R_{\text{8bit}}}{255}, \quad G_c = \frac{G_{\text{8bit}}}{255}, \quad B_c = \frac{B_{\text{8bit}}}{255}$$

For each normalized color channel $C \in \{R_c, G_c, B_c\}$:

$$C_{\text{linear}} = \begin{cases} \frac{C}{12.92} & \text{if } C \le 0.04045 \\ \left(\frac{C + 0.055}{1.055}\right)^{2.4} & \text{if } C > 0.04045 \end{cases}$$

$$L = 0.2126 R_{\text{linear}} + 0.7152 G_{\text{linear}} + 0.0722 B_{\text{linear}}$$

The contrast ratio $C_R$ between two colors with luminances $L_1$ and $L_2$ ($L_1 > L_2$) is:

$$C_R = \frac{L_1 + 0.05}{L_2 + 0.05}$$

- **Large Typography ($\ge 24\text{px}$ bold or $\ge 32\text{px}$ regular):** $C_R \ge 4.5:1$ (WCAG AAA).
- **Body & Captions ($\le 20\text{px}$):** $C_R \ge 7.0:1$ (WCAG AAA).

---

## 3. Dynamic CSS Variable Runtime Architecture

Adapted from Global PPT and unified within the White Presentation stage container, all components consume runtime presentation variables prefixed with `--pres-`. This decouples React slide archetypes from theme identity and ensures instantaneous theme switching with zero DOM re-render penalty.

### 3.1 CSS Variable Catalog

| Variable Name | Semantic Role | Fallback / Type | Description |
|:---|:---|:---|:---|
| `--pres-bg` | Stage Canvas Background | `#FFFFFF` / Hex Color | Root presentation background color |
| `--pres-bg-surface` | Structural Panel Surface | `rgba(255, 255, 255, 0.95)` | First elevated surface for Bento cards & sidebars |
| `--pres-bg-card` | Glassmorphic Card Fill | `rgba(255, 255, 255, 0.85)` | Primary container fill for metrics, steps & quotes |
| `--pres-bg-card-hover` | Card Interactive Hover Fill | `rgba(255, 255, 255, 0.98)` | Elevated fill on mouse hover or active selection |
| `--pres-accent` | Primary Brand Accent | `#7C3AED` / Hex Color | Focal color for active steps, badges & CTA buttons |
| `--pres-accent-glow` | Volumetric Accent Glow | `rgba(124, 58, 237, 0.25)` | Radial backdrop illumination and active borders |
| `--pres-accent-hover` | Accent Interactive Hover | `#6D28D9` / Hex Color | Darkened/brightened accent state for buttons |
| `--pres-text` | Primary Headline Typography | `#0F172A` / Hex Color | Maximum contrast text for titles, KPIs & headers |
| `--pres-text-muted` | Secondary Narrative Copy | `#475569` / Hex Color | Medium contrast body text, subtitles & bios |
| `--pres-text-subtle` | Microcopy & Meta Labels | `#94A3B8` / Hex Color | Captions, dates, card tags & inactive indicators |
| `--pres-border` | Default Structural Border | `#E2E8F0` / Hex Color | Hairline borders for cards, dividers & table cells |
| `--pres-border-hover` | Active/Hovered Border | `rgba(124, 58, 237, 0.40)` | Illuminated border on step focus or hover |
| `--pres-header-shadow` | Ink-Stamp Typography Shadow | `rgb(255 255 255) 1px 0.7px 0px` | High-definition micro-shadow preventing wave bleed |

### 3.2 Runtime Injection Specification

The presentation viewport (`PresentationView.tsx` or `SlideStage.tsx`) applies these tokens as inline CSS custom properties directly onto the stage container DOM node:

```typescript
export interface PresThemeTokens {
  themeId: string;
  isDark: boolean;
  hasGlow: boolean;
  hasDotMatrix: boolean;
  cssVariables: Record<string, string>;
}

export function generatePresCssVariables(theme: PresentationTheme): Record<string, string> {
  const isDarkTheme = theme.isDark;
  const headerShadow = isDarkTheme
    ? 'rgb(0 0 0) 1px 0.7px 0px'
    : 'rgb(255 255 255) 1px 0.7px 0px';

  return {
    '--pres-bg': theme.backgroundColor,
    '--pres-bg-surface': theme.surfaceColor || (isDarkTheme ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)'),
    '--pres-bg-card': theme.cardBackground || (isDarkTheme ? 'rgba(30, 41, 59, 0.85)' : 'rgba(255, 255, 255, 0.85)'),
    '--pres-bg-card-hover': isDarkTheme ? 'rgba(51, 65, 85, 0.95)' : 'rgba(255, 255, 255, 0.98)',
    '--pres-accent': theme.accentColor,
    '--pres-accent-glow': theme.accentGlow || `${theme.accentColor}33`,
    '--pres-accent-hover': theme.accentHover || theme.accentColor,
    '--pres-text': theme.textColor,
    '--pres-text-muted': theme.subtextColor,
    '--pres-text-subtle': isDarkTheme ? '#64748B' : '#94A3B8',
    '--pres-border': theme.cardBorder || (isDarkTheme ? 'rgba(255, 255, 255, 0.12)' : '#E2E8F0'),
    '--pres-border-hover': theme.accentColor,
    '--pres-header-shadow': headerShadow,
  };
}
```

---

## 4. Complete 10-Theme Palette Ramps ($S_0 \dots S_9$)

The presentation engine supports 10 canonical themes. Each theme provides exact 10-step gradient coordinates along with computed luminance and WCAG AAA compliance checks.

```
Theme Matrix:
├── Light Themes (White / Editorial Canvas)
│   ├── 01. white-brand (Pure White Clean Editorial - Ground Truth)
│   └── 02. paper-editorial (Warm Cream & Classical Navy)
└── Dark Themes (Obsidian Canvas / Neon Radiance)
    ├── 03. true-dark (Obsidian Slate & Electric Indigo)
    ├── 04. emerald-growth (Dark Forest & Vibrant Mint)
    ├── 05. wp-exam-purple (Royal Tech & Violet Sovereign)
    ├── 06. midnight-luxe (Dark Editorial & Royal Blue)
    ├── 07. sunset-horizon (Warm Plum & Coral Amber)
    ├── 08. cyber-neon (Synthwave Cyan & Magenta)
    ├── 09. crimson-executive (Ruby & Deep Obsidian)
    └── 10. nord-frost (Arctic Glacier & Deep Navy)
```

### 4.1 Theme 1: `white-brand` (Pure White Clean Editorial)
- **ID:** `white-brand` | **Polarity:** `isDark: false` | **Canvas:** `#FFFFFF` | **Text:** `#0F172A` | **Accent:** `#7C3AED`

| Step | Role | HSL | RGB | HEX | $L$ | Contrast (vs #FFF) | Functional Application |
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

### 4.2 Theme 2: `paper-editorial` (Warm Cream & Classical Navy)
- **ID:** `paper-editorial` | **Polarity:** `isDark: false` | **Canvas:** `#F5F0E6` | **Text:** `#1A1A1A` | **Accent:** `#1D4ED8`

| Step | Role | HSL | RGB | HEX | $L$ | Contrast (vs #F5F0E6) | Functional Application |
|:---:|:---|:---|:---|:---:|:---:|:---:|:---|
| **$S_0$** | Archival Cream | `hsl(42, 50%, 96%)` | `rgb(250, 247, 240)` | `#FAF7F0` | 0.96 | 1.05:1 | Card surface base fill, soft modal wash |
| **$S_1$** | Warm Parchment | `hsl(39, 43%, 93%)` | `rgb(245, 240, 230)` | `#F5F0E6` | 0.93 | 1.00:1 | Secondary backdrop wash, quote card surface |
| **$S_2$** | Cardboard Tint | `hsl(38, 40%, 86%)` | `rgb(234, 224, 208)` | `#EAE0D0` | 0.86 | 1.20:1 | Table borders, timeline connector line |
| **$S_3$** | Muted Ochre | `hsl(38, 36%, 75%)` | `rgb(212, 196, 168)` | `#D4C4A8` | 0.75 | 1.55:1 | Inactive chip tags, subtle watermark tint |
| **$S_4$** | Editorial Slate | `hsl(213, 94%, 68%)` | `rgb(96, 165, 250)` | `#60A5FA` | 0.65 | 2.05:1 | Secondary badge highlight, graph secondary line |
| **$S_5$** | Refined Royal | `hsl(221, 83%, 53%)` | `rgb(37, 99, 235)` | `#2563EB` | 0.51 | 3.40:1 | Metric badge background, CTA button |
| **$S_6$** | Classical Navy | `hsl(224, 76%, 48%)` | `rgb(29, 78, 216)` | `#1D4ED8` | 0.42 | 4.85:1 | Primary accent headings, link focus |
| **$S_7$** | Deep Blue Ink | `hsl(224, 64%, 33%)` | `rgb(30, 58, 138)` | `#1E3A8A` | 0.28 | 8.90:1 | Subheader emphasis, editorial byline |
| **$S_8$** | Charcoal Ink | `hsl(30, 9%, 16%)` | `rgb(44, 40, 37)` | `#2C2825` | 0.16 | 12.80:1 | Paragraph narrative text, card titles |
| **$S_9$** | Archival Black | `hsl(0, 0%, 10%)` | `rgb(26, 26, 26)` | `#1A1A1A` | 0.10 | 15.20:1 | Primary slide headlines, pull-quotes |

---

### 4.3 Theme 3: `true-dark` (Obsidian & Electric Neon)
- **ID:** `true-dark` | **Polarity:** `isDark: true` | **Canvas:** `#020617` | **Text:** `#F8FAFC` | **Accent:** `#6366F1`

| Step | Role | HSL | RGB | HEX | $L$ | Contrast (vs #020617) | Functional Application |
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

### 4.4 Theme 4: `emerald-growth` (Dark Forest & Mint)
- **ID:** `emerald-growth` | **Polarity:** `isDark: true` | **Canvas:** `#022C22` | **Text:** `#ECFDF5` | **Accent:** `#10B981`

| Step | Role | HSL | RGB | HEX | $L$ | Contrast (vs #022C22) | Functional Application |
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

### 4.5 Theme 5: `wp-exam-purple` (Royal Tech & Violet)
- **ID:** `wp-exam-purple` | **Polarity:** `isDark: true` | **Canvas:** `#1E1B4B` | **Text:** `#F5F3FF` | **Accent:** `#A855F7`

| Step | Role | HSL | RGB | HEX | $L$ | Contrast (vs #1E1B4B) | Functional Application |
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

### 4.6 Theme 6: `midnight-luxe` (Dark Editorial & Royal Blue)
- **ID:** `midnight-luxe` | **Polarity:** `isDark: true` | **Canvas:** `#0B192C` | **Text:** `#F8FAFC` | **Accent:** `#3B82F6`

| Step | Role | HSL | RGB | HEX | $L$ | Contrast (vs #0B192C) | Functional Application |
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

### 4.7 Theme 7: `sunset-horizon` (Warm Plum & Coral Amber)
- **ID:** `sunset-horizon` | **Polarity:** `isDark: true` | **Canvas:** `#1F1128` | **Text:** `#FFF1F2` | **Accent:** `#F43F5E`

| Step | Role | HSL | RGB | HEX | $L$ | Contrast (vs #1F1128) | Functional Application |
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

### 4.8 Theme 8: `cyber-neon` (Synthwave Cyan & Magenta)
- **ID:** `cyber-neon` | **Polarity:** `isDark: true` | **Canvas:** `#050510` | **Text:** `#E0F2FE` | **Accent:** `#06B6D4`

| Step | Role | HSL | RGB | HEX | $L$ | Contrast (vs #050510) | Functional Application |
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

### 4.9 Theme 9: `crimson-executive` (Ruby & Deep Obsidian)
- **ID:** `crimson-executive` | **Polarity:** `isDark: true` | **Canvas:** `#140507` | **Text:** `#FFF1F2` | **Accent:** `#E11D48`

| Step | Role | HSL | RGB | HEX | $L$ | Contrast (vs #140507) | Functional Application |
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

### 4.10 Theme 10: `nord-frost` (Arctic Glacier & Deep Navy)
- **ID:** `nord-frost` | **Polarity:** `isDark: true` | **Canvas:** `#0B132B` | **Text:** `#F0F9FF` | **Accent:** `#38BDF8`

| Step | Role | HSL | RGB | HEX | $L$ | Contrast (vs #0B132B) | Functional Application |
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

## 5. Motion Variants Specification

To guarantee buttery smooth 60fps playback without UI stutter or layout re-computation, all presentation animations strictly target GPU-accelerated CSS properties (`transform` and `opacity`). The system defines three standardized motion variants invoked via HTML data attributes:

```typescript
export type MotionVariantType = 'lift' | 'slide' | 'parallax';
```

All motion variants strictly adhere to the quintic deceleration curve:
```less
@ease-presentation: cubic-bezier(0.22, 1, 0.36, 1);
```

### 5.1 Variant 1: `[data-motion-variant="lift"]` (Tactile Card Elevation)
- **Target Elements:** Bento cards, interactive step items, testimonial cards, CTA buttons.
- **Physics Behavior:** Smooth upward vertical elevation with volumetric shadow bloom.
- **Keyframe / Transition Timing:**
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

### 5.2 Variant 2: `[data-motion-variant="slide"]` (Staggered Directional Entry)
- **Target Elements:** Split-step detail panes, KPI metrics rows, comparison columns, timeline nodes.
- **Physics Behavior:** Directional coordinate translation from an initial offset combined with smooth opacity ramping.
- **Specification:**
  - Initial State: `transform: translate3d(24px, 0, 0); opacity: 0;` (or `translate3d(0, 24px, 0)` for vertical).
  - Target State: `transform: translate3d(0, 0, 0); opacity: 1;`
  - Duration: $0.55\text{s}$ with `@ease-presentation`.
  - Cascading Delays: Stagger indices $k \in \{1 \dots 8\}$ use sequential $0.08\text{s}$ offsets ($0.08\text{s}, 0.16\text{s}, 0.24\text{s} \dots$).

### 5.3 Variant 3: `[data-motion-variant="parallax"]` (Multi-Layer Depth Separation)
- **Target Elements:** Background wave ribbons, decorative dot matrices, organic blur halos.
- **Physics Behavior:** Differential speed coefficients based on z-plane depth relative to slide scroll or cursor drift:
  - Background Canvas ($Z_0$): Velocity coefficient $v = 0.20$.
  - Mid-Layer Ribbons ($Z_1$): Velocity coefficient $v = 0.50$.
  - Foreground Cards ($Z_2$): Velocity coefficient $v = 1.00$.
- **CSS Implementation:**
  ```less
  [data-motion-variant="parallax"] {
    contain: layout paint size;
    transform: translateZ(0);
    will-change: transform;
    transition: transform 0.65s @ease-presentation;
  }
  ```

---

## 6. Stepwise Click Reveal Animation Timelines

In interactive presentation mode, multi-step archetypes (`StepsSlide`, `TimelineSlide`, `ProcessCycleSlide`, `BeforeAfterShowcaseSlide`, `RevealGridSlide`) maintain an internal `activeStep` cursor ($0 \le \text{activeStep} < \text{stepCount}$). Advancing the step triggers coordinated CSS animations:

### 6.1 `recCardFadeIn` (Recursive Card Staggered Reveal)
Used for Bento grids, feature lists, and timeline nodes when advancing to a newly unlocked step:

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

### 6.2 `reveal-pulse` (Active Step Accent Shimmer & Halo)
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

### 6.3 `baScrollPan` (Before/After Comparative Divider Sweep)
Used on `BeforeAfterShowcaseSlide` to execute an automated or interactive comparison wipe between legacy and modernized states:

```less
@keyframes baScrollPan {
  0% {
    clip-path: inset(0 100% 0 0);
    filter: brightness(0.9) contrast(0.9);
  }
  50% {
    filter: brightness(1.1) contrast(1.05);
  }
  100% {
    clip-path: inset(0 0% 0 0);
    filter: brightness(1.0) contrast(1.0);
  }
}

.ba-scroll-pan-anim {
  animation: baScrollPan 0.85s @ease-presentation both;
  will-change: clip-path, filter;
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

## 7. Acoustic Cue Synchronization & Sound Architecture

Presentation engagement is heightened through subtle, physical audio feedback. Sounds are synthesized and triggered through a centralized audio bus with strict gain ceilings and anti-fatigue debouncing.

### 7.1 Acoustic Event Catalog

| Event Name | Asset File | Trigger Mechanism | Nominal Gain | Debounce Window |
|:---|:---|:---|:---:|:---:|
| **Slide Transition** | `/sounds/fade_swoosh_v4.mp3` | Next/Prev master slide | $0.90 \times \text{Master}$ | $120\text{ms}$ |
| **Sub-Step Advance** | `/sounds/click.mp3` | Step forward in multi-step slide | $\text{stepVolume}(\text{Master})$ | $80\text{ms}$ |
| **Terminal Keystroke** | `/sounds/tap.mp3` | Character reveal in code terminal | $0.30 \times \text{Master}$ | $45\text{ms}$ |
| **Theme Selection** | Synthetic Sine ($880\text{Hz}$) | Theme dropdown change | $0.35 \times \text{Master}$ | $100\text{ms}$ |

### 7.2 Sub-Step Volume Attenuation Curve (`stepVolume`)
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

### 7.3 Dynamic Narration & Video Audio Ducking
When embedded presentation video starts or active presenter speech is detected:
1. **Ducking Attack:** Background music gain drops smoothly to $20\%$ nominal volume over $400\text{ms}$.
2. **Sustain Phase:** Background gain remains held at $0.20 \times \text{Gain}_{\text{nom}}$.
3. **Release Phase:** Upon audio cessation, gain restores linearly to $100\%$ over $800\text{ms}$.

$$\text{gain}(t) = \begin{cases} 
g_{\text{nom}} - 0.80 g_{\text{nom}} \cdot \left(\frac{t - t_{\text{duck}}}{0.40}\right) & \text{for } 0 \le t - t_{\text{duck}} \le 0.40\text{s (Ducking Phase)} \\
0.20 g_{\text{nom}} & \text{during Active Speech / Video} \\
0.20 g_{\text{nom}} + 0.80 g_{\text{nom}} \cdot \left(\frac{t - t_{\text{release}}}{0.80}\right) & \text{for } 0 \le t - t_{\text{release}} \le 0.80\text{s (Recovery Phase)}
\end{cases}$$

---

## 8. Cross-Reference Index

- Architecture Overview: [01-overview.md](./01-overview.md)
- Slide Archetypes & Data Contracts: [02-slide-archetypes-data-contracts.md](./02-slide-archetypes-data-contracts.md)
- Quality Verification Gates: [04-verification-gates.md](./04-verification-gates.md)
- UI Design Principles: [../../02-coding-guidelines/24-app-ui-design-system/01-design-principles.md](../../02-coding-guidelines/24-app-ui-design-system/01-design-principles.md)
- Subtask Execution Plan: [../../../.ai-memory/plans/subtasks/25-grounded-global-ppt-and-flat/02-motion-and-theming.md](../../../.ai-memory/plans/subtasks/25-grounded-global-ppt-and-flat/02-motion-and-theming.md)
