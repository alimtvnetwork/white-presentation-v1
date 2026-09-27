# 06-Color Theme 10-Step Gradient & Shade Precision System

## 1. System Overview & The 10-Step Mandate
To ensure deterministic execution by AI models and human designers, color shifts across text characters, decorative wave ribbons, and ambient background glows must never rely on ambiguous interpolation. This specification defines a mathematically grounded **10-Step Gradient & Shade System** ($S_0$ to $S_9$) across primary presentation themes, providing exact **HSL**, **RGB**, and **HEX** coordinates for every stop.

---

## 2. Mathematical Ramp Formula
For any two boundary colors $C_{\text{start}} (S_0)$ and $C_{\text{end}} (S_9)$, intermediate steps $S_i$ ($i \in [0, 9]$) are calculated via linear perceptually uniform lightness interpolation:

$$t_i = \frac{i}{9}, \quad i \in \{0, 1, 2, 3, 4, 5, 6, 7, 8, 9\}$$
$$\text{Hue}_i = \text{Hue}_{\text{start}} + t_i \cdot (\text{Hue}_{\text{end}} - \text{Hue}_{\text{start}})$$
$$\text{Sat}_i = \text{Sat}_{\text{start}} + t_i \cdot (\text{Sat}_{\text{end}} - \text{Sat}_{\text{start}})$$
$$\text{Light}_i = \text{Light}_{\text{start}} + t_i \cdot (\text{Light}_{\text{end}} - \text{Light}_{\text{start}})$$

---

## 3. Flagship Theme Gradient Specifications

### 3.1 Theme 1: White Presentation Royal Violet (Ground Truth Sample)
Used for the White Presentation system: transitions from Deep Midnight Indigo ($S_0$) through Vibrant Electric Violet ($S_5$) to Soft Glowing Lilac ($S_9$).

| Step | Level / Role | HSL Coordinate | RGB Coordinate | HEX Value | Primary Application |
|:---:|:---|:---|:---|:---:|:---|
| **$S_0$** | Anchor Dark | `hsl(243, 75%, 25%)` | `rgb(16, 16, 112)` | `#101070` | Wave base layer, bottom contour |
| **$S_1$** | Deep Shadow | `hsl(255, 70%, 32%)` | `rgb(49, 25, 138)` | `#31198A` | Deep container borders, text shadow |
| **$S_2$** | Base Violet | `hsl(265, 68%, 38%)` | `rgb(77, 31, 163)` | `#4D1FA3` | Secondary icons, bullet line tails |
| **$S_3$** | Core Brand Deep | `hsl(270, 72%, 44%)` | `rgb(107, 33, 168)`| `#6B21A8` | Circular bullet badges, button bg |
| **$S_4$** | Primary Accent | `hsl(262, 83%, 58%)` | `rgb(124, 58, 237)`| `#7C3AED` | Pill marker, headline accent words |
| **$S_5$** | Electric Bright | `hsl(260, 88%, 66%)` | `rgb(147, 91, 245)`| `#935BF5` | Neon heart inner stroke, hover glow |
| **$S_6$** | Soft Lavender | `hsl(265, 90%, 75%)` | `rgb(180, 134, 248)`| `#B486F8` | Vertical dividing line, pill border |
| **$S_7$** | Light Lilac | `hsl(268, 92%, 84%)` | `rgb(216, 185, 252)`| `#D8B9FC` | Ambient watermark arcs, glow aura |
| **$S_8$** | Ultra-Light Tint| `hsl(270, 94%, 92%)` | `rgb(238, 222, 254)`| `#EEDEFE` | Card hover fill, soft table zebra |
| **$S_9$** | Atmospheric Fog| `hsl(270, 95%, 97%)` | `rgb(250, 245, 255)`| `#FAF5FF` | Subtle canvas background wash |

---

### 3.2 Theme 2: Midnight Corporate Gold (Global PPT `CEOSlide`)
Used for executive dark presentations: transitions from Deep Obsidian Slate ($S_0$) to Warm Radiant Gold ($S_9$).

| Step | Level / Role | HSL Coordinate | RGB Coordinate | HEX Value | Primary Application |
|:---:|:---|:---|:---|:---:|:---|
| **$S_0$** | Pure Obsidian | `hsl(222, 47%, 11%)` | `rgb(15, 23, 42)` | `#0F172A` | Primary slide dark background |
| **$S_1$** | Midnight Navy | `hsl(217, 33%, 17%)` | `rgb(29, 41, 59)` | `#1D293B` | Glass card surfaces, panel fills |
| **$S_2$** | Charcoal Border| `hsl(215, 25%, 27%)` | `rgb(51, 65, 85)` | `#334155` | Card dividing rules, inactive tabs |
| **$S_3$** | Muted Slate Ink| `hsl(215, 16%, 47%)` | `rgb(100, 116, 139)`| `#64748B` | Subtitle text, presenter captions |
| **$S_4$** | Intermediate Tint| `hsl(38, 45%, 52%)` | `rgb(187, 142, 78)` | `#BB8E4E` | Character gradient step ('l' in Alim) |
| **$S_5$** | Muted Gold | `hsl(42, 75%, 58%)` | `rgb(228, 172, 68)` | `#E4AC44` | Metric highlights, timeline pins |
| **$S_6$** | Warm Amber | `hsl(45, 88%, 65%)` | `rgb(243, 194, 88)` | `#F3C258` | Character gradient step ('a' in Karim)|
| **$S_7$** | Radiant Amber | `hsl(40, 96%, 72%)` | `rgb(253, 208, 114)`| `#FDD072` | Main character accent highlight |
| **$S_8$** | Champagne Gold | `hsl(43, 94%, 82%)` | `rgb(254, 231, 164)`| `#FEE7A4` | Hover aura, radial backdrop glow |
| **$S_9$** | White Gold Tip | `hsl(45, 92%, 94%)` | `rgb(255, 250, 224)`| `#FFFAE0` | Highlight badge text, glint points |

---

### 3.3 Theme 3: WP Exam Enterprise Blue (WP Quiz Plugin Influence)
Derived directly from `wp-exam` design tokens (`--wp-exam-primary`, `--wp-exam-muted`):

| Step | Level / Role | HSL Coordinate | RGB Coordinate | HEX Value | Primary Application |
|:---:|:---|:---|:---|:---:|:---|
| **$S_0$** | Dark Ink Slate | `hsl(222, 84%, 5%)` | `rgb(2, 8, 23)` | `#020817` | High-contrast headline text |
| **$S_1$** | Core Navy Brand | `hsl(222, 47%, 11%)` | `rgb(15, 23, 42)` | `#0F172A` | Primary buttons, active state tabs |
| **$S_2$** | Dark Blue Gray | `hsl(217, 33%, 25%)` | `rgb(43, 61, 88)` | `#2B3D58` | Secondary button hover, dark card |
| **$S_3$** | Medium Slate | `hsl(215, 22%, 38%)` | `rgb(76, 96, 122)` | `#4C607A` | Metadata text, secondary headers |
| **$S_4$** | Muted Slate | `hsl(215, 16%, 47%)` | `rgb(100, 116, 139)`| `#64748B` | Paragraph body copy, icons |
| **$S_5$** | Sky Accent Dark | `hsl(201, 80%, 45%)` | `rgb(23, 142, 207)` | `#178ECF` | Interactive link buttons, focus ring|
| **$S_6$** | Vivid Azure Sky | `hsl(199, 89%, 48%)` | `rgb(14, 165, 233)` | `#0EA5E9` | Dynamic stats numbers, active pills|
| **$S_7$** | Soft Slate Border| `hsl(214, 32%, 91%)` | `rgb(226, 232, 240)`| `#E2E8F0` | Container outlines, vertical rules |
| **$S_8$** | Light Muted Gray | `hsl(210, 40%, 96%)` | `rgb(241, 245, 249)`| `#F1F5F9` | Table alternate rows, badge backdrops|
| **$S_9$** | Crisp Pure White | `hsl(0, 0%, 100%)` | `rgb(255, 255, 255)`| `#FFFFFF` | Slide background, button text |

---

### 3.4 Theme 4: Emerald Clinical Green (BSRM / KI Health Medical)
Used for healthcare, clinical trials, and certified proof slides:

| Step | Level / Role | HSL Coordinate | RGB Coordinate | HEX Value | Primary Application |
|:---:|:---|:---|:---|:---:|:---|
| **$S_0$** | Deep Pine Forest| `hsl(165, 80%, 12%)` | `rgb(6, 55, 41)` | `#063729` | Base dark medical contrast |
| **$S_1$** | Dark Evergreen | `hsl(162, 75%, 20%)` | `rgb(13, 89, 67)` | `#0D5943` | Medical headline text |
| **$S_2$** | Clinical Green | `hsl(160, 72%, 28%)` | `rgb(20, 123, 93)`| `#147B5D` | Subtitles, certified headers |
| **$S_3$** | Deep Mint Green | `hsl(158, 68%, 35%)` | `rgb(29, 150, 114)`| `#1D9672` | Card borders, secondary buttons |
| **$S_4$** | Core Brand Mint| `hsl(155, 75%, 44%)` | `rgb(28, 196, 145)`| `#1CC491` | Primary verification checkmarks |
| **$S_5$** | Electric Emerald| `hsl(150, 84%, 55%)` | `rgb(46, 235, 163)`| `#2EEBA3` | Active status badges, metric glow |
| **$S_6$** | Mint Highlight | `hsl(145, 86%, 68%)` | `rgb(103, 244, 187)`| `#67F4BB` | Character gradient accent steps |
| **$S_7$** | Soft Mint Aura | `hsl(140, 88%, 80%)` | `rgb(160, 248, 211)`| `#A0F8D3` | Background medical wave ribbons |
| **$S_8$** | Pale Clinical Tint| `hsl(135, 85%, 92%)` | `rgb(215, 252, 236)`| `#D7FCEC` | Card background wash |
| **$S_9$** | Clinical White | `hsl(130, 80%, 98%)` | `rgb(245, 254, 250)`| `#F5FEFA` | Clean clinical canvas background |

---

## 4. Character-by-Character Shading Engine Implementation

```typescript
export interface GradientRamp {
  themeId: string;
  steps: {
    index: number;
    hex: string;
    rgb: string;
    hsl: string;
  }[];
}

/**
 * Maps a string across the 10-step gradient ramp.
 * Evenly distributes characters from step S_0 to step S_9.
 */
export function shadeTextByCharacter(
  text: string,
  ramp: GradientRamp,
  startStep: number = 0,
  endStep: number = 9
): { char: string; color: string }[] {
  const chars = Array.from(text);
  const total = chars.length;
  if (total <= 1) {
    return [{ char: text, color: ramp.steps[startStep].hex }];
  }

  return chars.map((char, i) => {
    const fraction = i / (total - 1);
    const stepIndex = Math.round(startStep + fraction * (endStep - startStep));
    const clampedIndex = Math.max(0, Math.min(9, stepIndex));
    return {
      char,
      color: ramp.steps[clampedIndex].hex,
    };
  });
}
```

---

## 5. Machine-Readable JSON Color Ramp Spec
Every theme must provide its complete 10-step configuration in JSON format (see `schemas/theme-gradient.schema.json`):

```json
{
  "themeId": "white-pure-violet",
  "name": "White Presentation Royal Violet",
  "background": "#FFFFFF",
  "foreground": "#0B192C",
  "muted": "#64748B",
  "accent": "#7C3AED",
  "ramp": [
    { "step": 0, "hex": "#101070", "rgb": "rgb(16, 16, 112)", "hsl": "hsl(243, 75%, 25%)" },
    { "step": 1, "hex": "#31198A", "rgb": "rgb(49, 25, 138)", "hsl": "hsl(255, 70%, 32%)" },
    { "step": 2, "hex": "#4D1FA3", "rgb": "rgb(77, 31, 163)", "hsl": "hsl(265, 68%, 38%)" },
    { "step": 3, "hex": "#6B21A8", "rgb": "rgb(107, 33, 168)", "hsl": "hsl(270, 72%, 44%)" },
    { "step": 4, "hex": "#7C3AED", "rgb": "rgb(124, 58, 237)", "hsl": "hsl(262, 83%, 58%)" },
    { "step": 5, "hex": "#935BF5", "rgb": "rgb(147, 91, 245)", "hsl": "hsl(260, 88%, 66%)" },
    { "step": 6, "hex": "#B486F8", "rgb": "rgb(180, 134, 248)", "hsl": "hsl(265, 90%, 75%)" },
    { "step": 7, "hex": "#D8B9FC", "rgb": "rgb(216, 185, 252)", "hsl": "hsl(268, 92%, 84%)" },
    { "step": 8, "hex": "#EEDEFE", "rgb": "rgb(238, 222, 254)", "hsl": "hsl(270, 94%, 92%)" },
    { "step": 9, "hex": "#FAF5FF", "rgb": "rgb(250, 245, 255)", "hsl": "hsl(270, 95%, 97%)" }
  ]
}
```
