# 03-Color & Motion Design System: 10-Step Precision Ramps, Kinetic Physics & Acoustic Sync

> **Specification Identifier:** `02-spec/21-app/26-new-design-and-slide-archetypes/03-visual-and-motion`  
> **Status:** `APPROVED ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.3.0`  
> **Author:** Spec Author 01  
> **Updated:** 2026-10-02  
> **Domain:** Color Theming, Lightness Ramps, Kinetic Spring Physics & Acoustic Synchronization  

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
4. **Kinetic Spring Physics:**
   - Spatial micro-interactions and stepwise reveals follow damped harmonic springs ($k = 420\text{ N/m}$, $\zeta = 0.85$, $m = 0.8\text{ kg}$) and quintic deceleration easing `cubic-bezier(0.22, 1, 0.36, 1)`.
5. **Acoustic Synchronization & Audio Ergonomics:**
   - Tactile UI events trigger synchronized, synthesized sound cues with dynamic audio ducking and positive boolean controls (`hasSoundFeedback`, `hasAudioSync`).

---

## 2. Mathematical 10-Step Precision Ramps & Contrast Formulas

### 2.1 Ramp Interpolation Formula
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

## 3. The 10-Theme Master Matrix

The presentation system defines 10 production themes spanning light editorial canvases and dark obsidian canvases:

```
Theme Matrix:
├── Light Editorial Canvases (Archival Polarity)
│   ├── 01. white-brand (Pure White Clean Editorial - Default)
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

### 3.1 Theme Detail Catalog

#### Theme 01: `white-brand` (Pure White Clean Editorial)
- **Polarity:** `isDark: false` | **Canvas:** `#FFFFFF` | **Text:** `#0F172A` | **Accent:** `#7C3AED`

| Step | Semantic Role | HSL | HEX | Luminance $L$ | Contrast vs Canvas |
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

#### Theme 02: `paper-editorial` (Warm Cream & Classical Navy)
- **Polarity:** `isDark: false` | **Canvas:** `#F5F0E6` | **Text:** `#1A1A1A` | **Accent:** `#1D4ED8`
- Palette Anchors: $S_0$ (`#FAF7F0`) to $S_9$ (`#0A1128`).
- Application: Executive whitepapers, investor shareholder reports, and archival literature presentations.

#### Theme 03: `true-dark` (Obsidian Slate & Electric Indigo)
- **Polarity:** `isDark: true` | **Canvas:** `#0B0B0E` | **Text:** `#F8FAFC` | **Accent:** `#6366F1`
- Palette Anchors: $S_0$ (`#EEF2FF`) to $S_9$ (`#050508`).
- Contrast vs Canvas: $S_0$ delivers $18.4:1$ contrast against `#0B0B0E`.

#### Theme 04: `emerald-growth` (Dark Forest & Vibrant Mint)
- **Polarity:** `isDark: true` | **Canvas:** `#061A14` | **Text:** `#ECFDF5` | **Accent:** `#10B981`
- Application: ESG briefings, quarterly financial gains, sustainability reviews, and ROI calculations.

#### Theme 05: `wp-exam-purple` (Royal Tech & Violet Sovereign)
- **Polarity:** `isDark: true` | **Canvas:** `#0B0814` | **Text:** `#FAF5FF` | **Accent:** `#A855F7`
- Application: Product keynotes, architectural summits, platform unveilings.

#### Theme 06: `midnight-luxe` (Dark Editorial & Royal Blue)
- **Polarity:** `isDark: true` | **Canvas:** `#020617` | **Text:** `#F1F5F9` | **Accent:** `#3B82F6`
- Application: Enterprise B2B SaaS pitches, institutional security audits.

#### Theme 07: `sunset-horizon` (Warm Plum & Coral Amber)
- **Polarity:** `isDark: true` | **Canvas:** `#150811` | **Text:** `#FFF1F2` | **Accent:** `#F43F5E`
- Application: Customer journey mapping, consumer brand narratives, marketing roadmaps.

#### Theme 08: `cyber-neon` (Synthwave Cyan & Magenta)
- **Polarity:** `isDark: true` | **Canvas:** `#050814` | **Text:** `#F0FDFA` | **Accent:** `#06B6D4`
- Application: Live code playgrounds, high-throughput streaming systems, developer conferences.

#### Theme 09: `crimson-executive` (Ruby & Deep Obsidian)
- **Polarity:** `isDark: true` | **Canvas:** `#120507` | **Text:** `#FFF1F2` | **Accent:** `#E11D48`
- Application: Risk analysis, trade-off matrices, competitive take-down presentations.

#### Theme 10: `nord-frost` (Arctic Glacier & Deep Navy)
- **Polarity:** `isDark: true` | **Canvas:** `#0B101B` | **Text:** `#ECEFF4` | **Accent:** `#88C0D0`
- Application: Technical whitepapers, cloud infrastructure reviews, data pipeline audits.

---

## 4. Kinetic Spring Physics Engine

To achieve natural, organic spatial motion without the mechanical stiffness of linear easing or the nauseating oscillation of underdamped physics, all animated transforms use a damped harmonic oscillator.

### 4.1 Physics Differential Equation
The kinetic motion follows the second-order ordinary differential equation:

$$m \frac{d^2x}{dt^2} + c \frac{dx}{dt} + k x = 0$$

Where:
- $m$: Mass of the animated element ($m = 0.8\text{ kg}$)
- $k$: Spring stiffness coefficient ($k = 420\text{ N/m}$)
- $\zeta$: Damping ratio ($\zeta = 0.85$, critically damped behavior with zero bounce)
- $c$: Damping coefficient computed as:

$$c = 2 \zeta \sqrt{km} = 2 \times 0.85 \times \sqrt{420 \times 0.8} \approx 31.17\text{ N}\cdot\text{s/m}$$

### 4.2 CSS Easing Equivalents
For web animations utilizing CSS transitions or WAAPI (Web Animations API), the spring response maps to the quintic deceleration curve:

```css
:root {
  --pres-ease-spring: cubic-bezier(0.22, 1, 0.36, 1);
  --pres-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --pres-duration-fast: 180ms;
  --pres-duration-base: 320ms;
  --pres-duration-slow: 540ms;
}
```

### 4.3 Intra-Slide State Choreography

When stepping through intra-slide items (`activeStep`), DOM nodes evaluate their status and apply CSS classes accordingly:

```css
/* Step States */
.pres-step-past {
  opacity: 0.45;
  transform: scale(0.98);
  filter: grayscale(20%);
  transition: all var(--pres-duration-base) var(--pres-ease-spring);
}

.pres-step-active {
  opacity: 1.0;
  transform: scale(1.02);
  filter: none;
  box-shadow: 0 0 24px -4px var(--pres-accent-glow);
  border-color: var(--pres-accent);
  transition: all var(--pres-duration-base) var(--pres-ease-spring);
}

.pres-step-future {
  opacity: 0.18;
  transform: scale(0.96);
  pointer-events: none;
  transition: all var(--pres-duration-base) var(--pres-ease-spring);
}
```

---

## 5. Acoustic Synchronization & Audio Ergonomics

The engine provides subtle, high-frequency synthesized audio feedback synchronized to kinetic slide transitions, reinforcing spatial feedback without auditory irritation.

### 5.1 Acoustic Sound Event Matrix

| Event Name | Frequency ($f_0$) | Waveform | Duration | Target Volume | Auditory Meaning |
|:---|:---:|:---|:---:|:---:|:---|
| `step-advance` | 880 Hz $\to$ 1320 Hz | Sine (Chirp) | 45ms | -18 dB | Intra-slide step advanced |
| `card-focus` | 520 Hz | Triangle | 30ms | -22 dB | User hovered / selected card |
| `metric-counter` | 440 Hz $\to$ 880 Hz | Exponential Saw | 120ms | -20 dB | Counter stat roll completed |
| `slide-change` | 330 Hz $\to$ 660 Hz | Soft Sine | 80ms | -16 dB | Full slide transition |
| `cta-submit` | 587 Hz $\to$ 880 Hz | Dual Chime | 90ms | -14 dB | Action button triggered |

### 5.2 Audio Ducking & Volume Governance
- **Maximum Master Volume:** Capped at $-12\text{ dB}$ to prevent speaker blowout.
- **Narrator Ducking:** When presenter voice or video playback is detected (`isAudioActive`), sound effects dynamically duck by $-14\text{ dB}$.
- **Ergonomic Safety:** Rapid keyboard navigation triggers a debounce threshold (80ms); audio cues are merged to prevent phase cancellation or distortion.

### 5.3 Positive Boolean Audio Controls
All audio interfaces enforce positive boolean semantics:

```typescript
export interface AudioConfiguration {
  hasSoundFeedback: boolean;
  hasAudioSync: boolean;
  hasDuckingEnabled: boolean;
  isAudioMuted: boolean;
  masterVolumeLevel: number;
}
```
