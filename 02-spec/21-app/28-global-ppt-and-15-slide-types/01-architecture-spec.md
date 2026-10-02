# 01-Architecture Spec: Grounded Global PPT Corporate Synthesis & 15 Slide Archetypes

> **Module:** `02-spec/21-app/28-global-ppt-and-15-slide-types`
> **Status:** Canonical Architecture Specification
> **Target Release:** `v1.2.0`
> **Author:** Architecture Author 01
> **Updated:** 2026-10-02
> **Domain:** Global PPT Corporate Synthesis, Visual Balance, 4-Plane Depth, 10-Step Palettes, Kinetic Physics & Acoustic Sync

---

## 1. System Overview & Architectural Mandate

The White Presentation Engine synthesizes the visual authority, executive pacing, and bilateral structure of **Global PPT** enterprise presentations with the dynamic, step-by-step choreographies and tactile physics of modern interactive web applications.

Traditional presentation tools produce rigid, flattened slides where typography is permanently embedded into raster images, degrading accessibility, localization, responsiveness, and real-time editing. The Grounded Global PPT architecture eliminates these weaknesses through four foundational engineering mandates:

1. **Pure Live DOM Typography Mandate:** Every headline, kicker, narrative paragraph, KPI figure, category tag, bullet point, and code token is rendered as a native, accessible HTML DOM node. Rasterized typography is strictly prohibited across all archetypes.
2. **1920x1080 Responsive Viewport Geometry:** The presentation canvas is strictly anchored to a $1920 \times 1080$ pixel reference frame (16:9 aspect ratio). Displays of arbitrary dimensions scale the canvas proportionally via GPU-accelerated CSS transforms (`transform: scale(...)`), preventing fractional coordinate drift and rounding errors.
3. **Deterministic 10-Step Lightness Palettes:** Ten authentic corporate palettes provide calibrated 10-step perceptual lightness ramps ($S_0$ through $S_9$) that guarantee WCAG 2.1 AAA contrast compliance on both light editorial canvases and deep obsidian dark canvases.
4. **Kinetic Spring Choreography & Acoustic Feedback:** Intra-slide step progression is governed by calibrated spring physics (`[stiffness: 420, damping: 17, mass: 0.8]`), radial halos, and low-latency acoustic cues attenuated via logarithmic volume curves (`stepVolume`).

### Executive Persona Mandate
A non-negotiable rule across all templates, slides, and documentation:
- **Alim Ul Karim** must be consistently titled **"Chief Software Engineer"**.
- Titles such as **"Founder"** or **"CEO"** are strictly forbidden.

---

## 2. The 60/30/10 Visual Balance Rule

To maintain corporate gravitas and prevent cognitive overload during fast-paced keynote presentations, all slide layouts strictly adhere to the **60/30/10 Visual Distribution Model**:

```
Visual Weight Distribution:
+-----------------------------------------------------------------------------+
| 60% Dominant Canvas Wash & Field                                            |
| (Negative space, ambient background gradients, subtle dot-matrix grids)    |
+-----------------------------------------------------------------------------+
| 30% Structural Panels, Glassmorphic Cards & Rails                           |
| (Frosted cards, Bento cells, comparison columns, table borders)             |
+-----------------------------------------------------------------------------+
| 10% Vivid Focal Accents & Interaction Highlights                            |
| (Active step halos, CTA buttons, primary metric figures, illuminated pills) |
+-----------------------------------------------------------------------------+
```

### 2.1 The 60% Dominant Canvas Wash
- **Functional Purpose:** Establishes ambient atmosphere, grounds typography, and creates expansive negative space ensuring effortless reading.
- **CSS Custom Properties:** Consumes `--pres-bg` and `--pres-bg-surface`.
- **Light Themes:** Pure crisp white (`#FFFFFF`) or warm archival editorial parchment (`#F5F0E6`).
- **Dark Themes:** Obsidian charcoal slate (`#020617`, `#0B192C`, `#1E1B4B`, `#022C22`, `#1F1128`, `#050510`, `#140507`, `#0B132B`).
- **Constraint:** Solid foreground containers must never occupy more than 40% of the canvas surface area.

### 2.2 The 30% Structural Cards & Panels
- **Functional Purpose:** Groups related semantic data into scannable Bento cards, comparison tables, and progress rails.
- **CSS Custom Properties:** Consumes `--pres-bg-card`, `--pres-border`, and `--pres-text-muted`.
- **Styling Standards:** Glassmorphic backdrops (`backdrop-filter: blur(12px)`), hairline borders (`1px solid var(--pres-border)`), and soft drop shadows (`0 10px 25px -5px rgba(0, 0, 0, 0.05)`).
- **Contrast Rule:** Structural borders maintain subtle contrast ($C_R \le 2.0:1$ against the canvas background) so they frame content without competing with typography.

### 2.3 The 10% Vivid Focal Accents
- **Functional Purpose:** Draws the audience's optical focus directly to active steps, key ROI figures, and primary calls to action.
- **CSS Custom Properties:** Consumes `--pres-accent`, `--pres-accent-glow`, and `--pres-accent-hover`.
- **Application:** Active step number pills, progress rail highlights, glowing halos, primary CTA buttons, and KPI delta tags.
- **Constraint:** Accent colors must never cover more than 10% of total slide surface area to prevent visual fatigue.

---

## 3. The 4-Plane Depth Hierarchy

Spatial depth across the presentation interface is organized into four discrete, non-overlapping planes. Each plane specifies distinct z-index coordinates, elevation treatments, and interactive roles:

```
Plane Hierarchy:
▲ [Plane 3: Floating Plane]  - z-index: 50+  (Modals, Presenter HUD, Tooltips)
│ [Plane 2: Elevated Plane]  - z-index: 20   (Active Steps, Hovered Cards, Detail Panes)
│ [Plane 1: Raised Plane]    - z-index: 10   (Bento Cards, Timeline Rails, Tables)
▼ [Plane 0: Surface Plane]   - z-index: 0    (Canvas Background, Wave Ribbons, Grids)
```

### 3.1 Plane 0: Surface Plane (`plane-0-surface`, `z-index: 0`)
- **Elements:** Root slide stage container, organic SVG wave ribbons, ambient radial glows, and decorative dot-matrix grids.
- **Tokens & Fill:** `var(--pres-bg)` with optional radial wash.
- **Visual Role:** Calm foundational anchor with zero borders or drop shadows.

### 3.2 Plane 1: Raised Plane (`plane-1-raised`, `z-index: 10`)
- **Elements:** Default Bento cards, inactive timeline nodes, comparison table columns, talent pyramid tiers.
- **Tokens & Fill:** `var(--pres-bg-card)` (`rgba(..., 0.85)` fill) with `1px solid var(--pres-border)`.
- **Elevation Shadow:** `0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.04)`.
- **Backdrop Filter:** `blur(8px)`.

### 3.3 Plane 2: Elevated Plane (`plane-2-elevated`, `z-index: 20`)
- **Elements:** Active step card in `StepsSlide`, hovered Bento cards, expanded detail panes, active timeline pins.
- **Tokens & Fill:** `var(--pres-bg-card-hover)` with `1.5px solid var(--pres-border-hover)`.
- **Elevation Shadow:** `0 20px 35px -10px var(--pres-accent-glow), 0 10px 10px -5px rgba(0, 0, 0, 0.08)`.
- **Transform Transition:** `translateY(-4px) scale(1.01)` driven by quintic easing `cubic-bezier(0.22, 1, 0.36, 1)`.

### 3.4 Plane 3: Floating Plane (`plane-3-floating`, `z-index: 50+`)
- **Elements:** `SlideCreatorModal`, presenter HUD navigation bar, audio settings popovers, export dialogs.
- **Tokens & Fill:** Solid surface with high opacity (`rgba(..., 0.96)`) and `1px solid var(--pres-border-hover)`.
- **Elevation Shadow:** `0 25px 50px -12px rgba(0, 0, 0, 0.40)` with `backdrop-filter: blur(16px)`.

---

## 4. Fluid Typography Scale & Font Token Mappings

Typography dynamically adapts using CSS `clamp()` expressions anchored to the $1920 \times 1080$ virtual canvas, ensuring proportional legibility across mobile preview viewports, standard laptops, and 4K auditorium projectors.

### 4.1 Fluid Type Scale Formula

$$\text{FontSize} = \text{clamp}(V_{\text{min}}, V_{\text{preferred}}, V_{\text{max}})$$

Where $V_{\text{preferred}}$ scales proportionally with viewport width (`vw`):

| Typographic Level | Token Name | Fluid CSS Expression | Line Height | Letter Spacing | Font Family |
|:---|:---|:---|:---:|:---:|:---|
| **Display Hero** | `--font-display-hero` | `clamp(56px, 5.5vw, 112px)` | 1.05 | `-0.03em` | `Ubuntu` Bold Italic |
| **Slide Title (H1)** | `--font-slide-title` | `clamp(36px, 3.6vw, 68px)` | 1.10 | `-0.02em` | `Ubuntu` Bold |
| **Section Header (H2)**| `--font-section-head` | `clamp(24px, 2.2vw, 40px)` | 1.20 | `-0.01em` | `Ubuntu` SemiBold |
| **Card Headline (H3)** | `--font-card-head` | `clamp(18px, 1.6vw, 26px)` | 1.30 | `0.00em` | `Poppins` SemiBold |
| **Subtitle / Lead** | `--font-lead-body` | `clamp(16px, 1.4vw, 22px)` | 1.55 | `0.00em` | `Poppins` Regular |
| **Standard Body** | `--font-standard-body`| `clamp(13px, 1.0vw, 17px)` | 1.60 | `0.01em` | `Poppins` Regular |
| **Caption / Badge** | `--font-caption-mono` | `clamp(10px, 0.75vw, 13px)`| 1.40 | `0.04em` | `JetBrains Mono` Medium |

### 4.2 Font Family Token Mappings

1. **Display & Heading Font (`Ubuntu`):**
   - Font Family: `'Ubuntu', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
   - Purpose: Authoritative corporate editorial personality. Hero kickers and titles feature bold italic weights.
2. **Body & Interface Font (`Poppins`):**
   - Font Family: `'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
   - Purpose: Large geometric x-height and open apertures ensuring crystal-clear legibility at high viewing distances.
3. **Monospace & Metric Badges (`JetBrains Mono`):**
   - Font Family: `'JetBrains Mono', 'Fira Code', Consolas, monospace`
   - Purpose: Tabular numeric alignment for financial metrics, terminal code, and version tags.

### 4.3 High-Definition Anti-Aliased Shadowing
To eliminate chromatic vibration over wave ribbons and textured grids:
- **Light/White Text on Dark Canvas:** `rgb(0 0 0) 1px 0.7px 0px`
- **Dark Text on Light Canvas:** `rgb(255 255 255) 1px 0.7px 0px`

---

## 5. Ten Authentic Corporate Palettes & 10-Step Mathematical Ramps

The presentation engine provides ten canonical corporate palettes. Each theme defines an immutable 10-step gradient ramp ($S_0$ through $S_9$) calculated using perceptually uniform lightness interpolation:

$$t_i = \frac{i}{9}, \quad i \in \{0, 1, \dots, 9\}$$

$$\text{Light}_i = \text{Light}_{\text{start}} + t_i \cdot (\text{Light}_{\text{end}} - \text{Light}_{\text{start}})$$

### Palette Matrix:
- **Light Palettes:** `white-brand`, `paper-editorial`
- **Dark Palettes:** `true-dark`, `emerald-growth`, `wp-exam-purple`, `midnight-luxe`, `sunset-horizon`, `cyber-neon`, `crimson-executive`, `nord-frost`

```typescript
export interface PresThemeTokens {
  themeId: string;
  isDark: boolean;
  hasGlow: boolean;
  hasDotMatrix: boolean;
  cssVariables: Record<string, string>;
}
```

### 5.1 Palette Catalog

| ID | Name | Polarity | Canvas Bg | Primary Text | Accent Color | Functional Identity |
|:---|:---|:---:|:---:|:---:|:---:|:---|
| `white-brand` | Pure White | Light | `#FFFFFF` | `#0F172A` | `#7C3AED` | Clean editorial white with royal violet lead |
| `paper-editorial` | Paper Editorial | Light | `#F5F0E6` | `#1A1A1A` | `#1D4ED8` | Archival cream paper with classical navy ink |
| `true-dark` | True Dark | Dark | `#020617` | `#F8FAFC` | `#6366F1` | Obsidian carbon slate with electric indigo |
| `emerald-growth` | Emerald Growth | Dark | `#022C22` | `#ECFDF5` | `#10B981` | Abyssal forest green with vibrant mint |
| `wp-exam-purple` | WP Exam Purple | Dark | `#1E1B4B` | `#F5F3FF` | `#A855F7` | Royal tech dark indigo with sovereign violet |
| `midnight-luxe` | Midnight Luxe | Dark | `#0B192C` | `#F8FAFC` | `#3B82F6` | Executive dark navy slate with royal blue |
| `sunset-horizon` | Sunset Horizon | Dark | `#1F1128` | `#FFF1F2` | `#F43F5E` | Midnight plum with sunset amber and rose |
| `cyber-neon` | Cyber Neon | Dark | `#050510` | `#E0F2FE` | `#06B6D4` | Synthwave deep space with electric cyan |
| `crimson-executive`| Crimson Executive| Dark | `#140507` | `#FFF1F2` | `#E11D48` | Void crimson obsidian with imperial ruby |
| `nord-frost` | Nord Frost | Dark | `#0B132B` | `#F0F9FF` | `#38BDF8` | Arctic Scandinavian deep navy with glacier blue |

### 5.2 Backward-Compatible Legacy Aliases
Existing decks saved with developer IDE theme identifiers are transparently mapped to the authentic corporate palettes via non-enumerable properties on `THEME_PALETTES`:
- `bright-gold` $\to$ `true-dark`
- `noir-gold` $\to$ `crimson-executive`
- `vscode-dark` $\to$ `midnight-luxe`
- `dracula` $\to$ `wp-exam-purple`
- `monokai` $\to$ `emerald-growth`
- `github-light` $\to$ `white-brand`
- `paper-ink` $\to$ `paper-editorial`
- `macos-sonoma` $\to$ `nord-frost`
- `windows-11` $\to$ `cyber-neon`

---

## 6. Kinetic Spring Motion Physics & Motion Variants

All visual animations strictly target GPU-accelerated CSS properties (`transform` and `opacity`) to guarantee fluid 60fps presentation playback without layout reflow.

### 6.1 Calibrated Spring Configurations
- **Step Transitions & Detail Pane Expansion:** `{ stiffness: 420, damping: 17, mass: 0.8 }`
- **Active Progress Halo Tracking:** `{ stiffness: 320, damping: 30, mass: 1.0 }`
- **Pill Badge Spring:** `{ stiffness: 480, damping: 38, mass: 0.7 }`
- **Button Micro-Interactions:** Quintic deceleration easing `cubic-bezier(0.22, 1, 0.36, 1)`.

### 6.2 Standardized Motion Variants

1. **`[data-motion-variant="lift"]` (Card Elevation):**
   Smooth upward vertical elevation on hover or active step focus:
   `transform: translateY(-8px) scale(1.015); box-shadow: 0 20px 35px -10px var(--pres-accent-glow);`
2. **`[data-motion-variant="slide"]` (Directional Stagger):**
   Offset entry from `translate3d(24px, 0, 0)` with sequential cascading offsets ($0.08\text{s}$ per index).
3. **`[data-motion-variant="parallax"]` (Multi-Layer Depth):**
   Differential velocity coefficients based on z-plane depth ($Z_0: 0.20, Z_1: 0.50, Z_2: 1.00$).

### 6.3 Accessibility Guarantee
Operating system signals for `prefers-reduced-motion: reduce` instantly bypass all spring animations and spatial translations, collapsing transition durations to $0.01\text{ms}$.

---

## 7. Acoustic Cue Synchronization & Sound Architecture

Presentation engagement is reinforced by low-latency Web Audio oscillator synthesis designed to prevent cognitive fatigue.

### 7.1 Acoustic Event Catalog

| Event Name | Waveform / Frequency | Nominal Gain | Debounce Window | Functional Trigger |
|:---|:---|:---:|:---:|:---|
| **Slide Transition** | Sine sweep: $240\text{Hz} \to 480\text{Hz}$ (Next) / $360\text{Hz} \to 180\text{Hz}$ (Prev) | $0.35 \times \text{Master}$ | $120\text{ms}$ | Master slide change |
| **Sub-Step Advance** | Triangle click: $750\text{Hz} \to 320\text{Hz}$ | $\text{stepVolume}(\text{Master}) \times 0.30$ | $80\text{ms}$ | Multi-step reveal |
| **Terminal Keystroke** | Triangle tap: $1100\text{Hz} \to 350\text{Hz}$ | $0.30 \times \text{Master}$ | $45\text{ms}$ | Code line typing |
| **Theme Selection** | Pure Sine chime: $880\text{Hz}$ | $0.35 \times \text{Master}$ | $100\text{ms}$ | Palette change |

### 7.2 Sub-Step Attenuation Curve (`stepVolume`)
Sub-step clicks must not overpower master slide transition sweeps:

$$\text{stepVolume}(m) = \begin{cases} m & \text{if } m < 0.30 \\ \max(0.30, m - 0.30) & \text{if } m \ge 0.30 \end{cases}$$

### 7.3 Narration & Video Audio Ducking
When audio narration or embedded video begins:
1. **Ducking Attack:** Background gain smoothly attenuates to $20\%$ over $400\text{ms}$.
2. **Sustain:** Maintained at $0.20 \times \text{Gain}_{\text{nom}}$ during playback.
3. **Release:** Restores linearly to $100\%$ over $800\text{ms}$ upon completion.

---

## 8. Cross-Reference Index

- Component Specification: [./02-component-spec.md](./02-component-spec.md)
- Color & Motion Design System: [../25-grounded-global-ppt-and-flat-slide-synthesis/03-color-and-motion-design-system.md](../25-grounded-global-ppt-and-flat-slide-synthesis/03-color-and-motion-design-system.md)
- UI Design Principles: [../../02-coding-guidelines/24-app-ui-design-system/01-design-principles.md](../../02-coding-guidelines/24-app-ui-design-system/01-design-principles.md)
- Gradient Tokens Implementation: [../../../src/themes/gradientTokens.ts](../../../src/themes/gradientTokens.ts)
- Sound Engine Implementation: [../../../src/audio/soundEngine.ts](../../../src/audio/soundEngine.ts)
