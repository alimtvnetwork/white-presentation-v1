# 01-Design Principles: Visual Balance, 4-Plane Depth, Fluid Typography & Tactile Physics

> **Module:** `02-spec/02-coding-guidelines/24-app-ui-design-system`  
> **Status:** Canonical Design Guideline  
> **Target Release:** `v1.2.0`  
> **Audience:** Frontend Engineers, Component Authors & AI Agents

---

## 1. Overview & Core Philosophy

This specification codifies the visual design principles and component styling rules governing the White Presentation application. The system blends editorial precision with modern high-tech presentation physics, prioritizing:

1. **Information Hierarchy:** Rapid cognitive absorption during fast-paced keynote presentations.
2. **Visual Restraint:** Strategic distribution of negative space and vivid accents preventing cognitive fatigue.
3. **Spatial Coherence:** A strict 4-plane elevation system that communicates interactive affordances through depth and lighting.
4. **Fluid Responsiveness:** Mathematical typography scaling anchored to a reference $1920 \times 1080$ virtual canvas.

---

## 2. The 60/30/10 Visual Balance Rule

To maintain aesthetic authority and avoid cluttered slide compositions, every slide archetype, modal, and HUD surface must adhere to the **60/30/10 Visual Balance Rule**:

```
Visual Distribution:
┌────────────────────────────────────────────────────────────────────────┐
│ 60% Dominant Background Wash & Canvas Field                            │
│ (Negative space, ambient gradient wash, subtle dot matrix grid)        │
├────────────────────────────────────────────────────────────────────────┤
│ 30% Structural Cards, Dividers & Data Panels                           │
│ (Glassmorphic surfaces, Bento containers, table rows, timelines)       │
├────────────────────────────────────────────────────────────────────────┤
│ 10% Vivid Focal Accents & Interaction Highlights                       │
│ (Primary CTA buttons, active step pins, illuminated badges, KPI stats) │
└────────────────────────────────────────────────────────────────────────┘
```

### 2.1 The 60% Dominant Canvas Wash
- **Role:** Establishes ambient mood and maximizes negative space around presentation content.
- **Tokens Consumed:** `--pres-bg`, `--pres-bg-surface`.
- **Light Modes:** Pure white (`#FFFFFF`) or warm parchment editorial wash (`#F5F0E6`).
- **Dark Modes:** Deep obsidian slate (`#020617`, `#0B192C`, `#1E1B4B`) with optional organic wave ribbons or subtle dot-matrix grids.
- **Rule:** Never fill more than 40% of the canvas with solid high-contrast foreground containers.

### 2.2 The 30% Structural Panels & Containers
- **Role:** Groups semantic information into scannable Bento cards, comparison columns, and timeline rails.
- **Tokens Consumed:** `--pres-bg-card`, `--pres-border`, `--pres-text-muted`.
- **Styling:** Subtle glassmorphic fills (`backdrop-filter: blur(12px)`), hairline borders (`1px solid var(--pres-border)`), and soft drop shadows.
- **Rule:** Structural borders must maintain subtle contrast ($C_R \le 2.0:1$ against the canvas background) so they frame content without competing with typography.

### 2.3 The 10% Vivid Focal Accents
- **Role:** Guides the viewer's eye directly to key decision points, active step progression, and critical ROI metrics.
- **Tokens Consumed:** `--pres-accent`, `--pres-accent-glow`, `--pres-accent-hover`.
- **Application:**
  - Active step indicator badges and connecting progress rails.
  - Primary call-to-action buttons.
  - Large display stat callout figures (e.g., `+284%`, `$4.2M`).
  - Active tab borders and pulse markers.
- **Rule:** Accent colors must never cover more than 10% of total slide surface area to avoid visual exhaustion.

---

## 3. The 4-Plane Depth Hierarchy

Spatial depth in the presentation interface is structured across four non-overlapping planes. Each plane possesses discrete z-index coordinates, background treatments, and elevation shadow tokens:

```
Plane Hierarchy:
▲ [Plane 3: Floating Plane]  - z-index: 50+  (Modals, Tooltips, Presenter HUD)
│ [Plane 2: Elevated Plane]  - z-index: 20   (Active Steps, Hovered Cards, Detail Panes)
│ [Plane 1: Raised Plane]    - z-index: 10   (Bento Cards, Timeline Rails, Tables)
▼ [Plane 0: Surface Plane]   - z-index: 0    (Canvas Background, Wave Ribbons, Grids)
```

### 3.1 Plane 0: Surface Plane (Canvas Base)
- **Z-Index:** `0`
- **Elements:** Root slide stage container, organic SVG wave ribbons, ambient radial glow spotlights, dot-matrix grids.
- **Visual Characteristics:**
  - Background: `var(--pres-bg)`
  - Shadows: None
  - Borders: None
  - Optical Anchor: Provides calm foundational grounding.

### 3.2 Plane 1: Raised Plane (Structural Cards & Bento Grids)
- **Z-Index:** `10`
- **Elements:** Inactive Bento feature cards, timeline nodes, comparison table columns, talent pyramid tiers.
- **Visual Characteristics:**
  - Background: `var(--pres-bg-card)` (translucent fill: `rgba(..., 0.85)`)
  - Border: `1px solid var(--pres-border)`
  - Shadow: `0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.04)`
  - Backdrop Filter: `blur(8px)`
  - Border Radius: `12px` (Cards) / `6px` (Pills & Chips)

### 3.3 Plane 2: Elevated Plane (Active Content & Interactive Focus)
- **Z-Index:** `20`
- **Elements:** Active step card in `StepsSlide`, hovered Bento cards, expanded detail panes, active timeline pins.
- **Visual Characteristics:**
  - Background: `var(--pres-bg-card-hover)`
  - Border: `1.5px solid var(--pres-border-hover)`
  - Shadow: `0 20px 35px -10px var(--pres-accent-glow), 0 10px 10px -5px rgba(0, 0, 0, 0.08)`
  - Transform: `translateY(-4px) scale(1.01)`
  - Transition: `transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1)`

### 3.4 Plane 3: Floating Plane (Overlays & Controls)
- **Z-Index:** `50+`
- **Elements:** SlideCreatorModal, presenter HUD navigation controls, audio volume popovers, export dialogs.
- **Visual Characteristics:**
  - Background: Solid surface with high opacity (`rgba(..., 0.96)`)
  - Border: `1px solid var(--pres-border-hover)`
  - Shadow: `0 25px 50px -12px rgba(0, 0, 0, 0.40)`
  - Backdrop Filter: `blur(16px)`

---

## 4. Fluid Typography Scale & Font Token Mappings

Typography is dynamically computed using CSS `clamp()` expressions anchored to the $1920 \times 1080$ virtual canvas. This guarantees proportional readability whether viewed on a mobile preview window, laptop monitor, or 4K auditorium projector.

### 4.1 Fluid Type Scale Formula

$$\text{Font Size} = \text{clamp}(V_{\text{min}}, V_{\text{preferred}}, V_{\text{max}})$$

Where $V_{\text{preferred}}$ scales proportionally with viewport width (`vw`).

| Typographic Level | Token Name | Fluid CSS Expression | Line Height | Letter Spacing | Primary Font Family |
|:---|:---|:---|:---:|:---:|:---|
| **Display Hero** | `--font-display-hero` | `clamp(56px, 5.5vw, 112px)` | 1.05 | `-0.03em` | Display Font (`Ubuntu`, Bold Italic) |
| **Slide Title (H1)** | `--font-slide-title` | `clamp(36px, 3.6vw, 68px)` | 1.10 | `-0.02em` | Display Font (`Ubuntu`, Bold) |
| **Section Header (H2)**| `--font-section-head` | `clamp(24px, 2.2vw, 40px)` | 1.20 | `-0.01em` | Display Font (`Ubuntu`, SemiBold) |
| **Card Headline (H3)** | `--font-card-head` | `clamp(18px, 1.6vw, 26px)` | 1.30 | `0.00em` | Body Font (`Poppins`, SemiBold) |
| **Subtitle / Lead** | `--font-lead-body` | `clamp(16px, 1.4vw, 22px)` | 1.55 | `0.00em` | Body Font (`Poppins`, Regular) |
| **Standard Body** | `--font-standard-body`| `clamp(13px, 1.0vw, 17px)` | 1.60 | `0.01em` | Body Font (`Poppins`, Regular) |
| **Caption / Badge** | `--font-caption-mono` | `clamp(10px, 0.75vw, 13px)`| 1.40 | `0.04em` | Code Font (`JetBrains Mono`, Medium) |

### 4.2 Font Family Token Mappings

1. **Display & Heading Font:** `'Ubuntu', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
   - *Role:* Delivers warm, authoritative editorial personality.
   - *Styling Convention:* Display heroes in Global PPT frequently use `fontStyle: "italic"` with bold weight to inject visual kinetic drive into static titles.
   - *Alternative Pairing:* `'Inter', sans-serif` for ultra-clean tech decks.
2. **Body & Interface Font:** `'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
   - *Role:* Open geometric apertures and tall x-height ensure crystal-clear legibility at small sizes and high viewing distances.
3. **Monospace & Metric Badges:** `'JetBrains Mono', 'Fira Code', Consolas, monospace`
   - *Role:* Tabular numeric alignment for financial benchmarks, SERP analytics, terminal commands, and version badges.

---

## 5. Button Variants & Magnetic Tactile Physics

Buttons serve as primary interaction points for deck navigation, template creation, and audience calls-to-action. The design system standardizes three button variants paired with kinetic micro-interactions:

### 5.1 Button Variants

```
Button Variant Taxonomy:
├── Primary Accent Button: High-visibility solid CTA with accent glow
├── Secondary Glass Button: Frosted container with subtle border
└── Ghost Outline Button: Minimal hairline border with hover wash
```

#### Variant 1: Primary Accent Button
- **Application:** Main presentation CTA, "Create Deck", "Confirm", "Launch".
- **Styling:**
  ```less
  .btn-primary-accent {
    background: var(--pres-accent);
    color: #FFFFFF;
    border: 1px solid var(--pres-accent);
    box-shadow: 0 4px 14px var(--pres-accent-glow);
    font-weight: 600;
    border-radius: 8px;
    padding: 10px 22px;
    transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.25s ease, background-color 0.2s ease;

    &:hover {
      background: var(--pres-accent-hover);
      box-shadow: 0 8px 24px var(--pres-accent-glow);
      transform: translateY(-2px) scale(1.02);
    }

    &:active {
      transform: translateY(0px) scale(0.98);
    }
  }
  ```

#### Variant 2: Secondary Glass Button
- **Application:** Secondary actions, step navigators ("Next Step", "Previous").
- **Styling:**
  ```less
  .btn-secondary-glass {
    background: var(--pres-bg-card);
    color: var(--pres-text);
    border: 1px solid var(--pres-border);
    backdrop-filter: blur(8px);
    font-weight: 500;
    border-radius: 8px;
    padding: 10px 20px;
    transition: all 0.2s cubic-bezier(0.22, 1, 0.36, 1);

    &:hover {
      background: var(--pres-bg-card-hover);
      border-color: var(--pres-border-hover);
      transform: translateY(-1px);
    }
  }
  ```

#### Variant 3: Ghost Outline Button
- **Application:** Tertiary tools, copy code, close modals, icon-only actions.
- **Styling:**
  ```less
  .btn-ghost-outline {
    background: transparent;
    color: var(--pres-text-muted);
    border: 1px solid transparent;
    border-radius: 6px;
    padding: 8px 14px;
    transition: all 0.15s ease;

    &:hover {
      color: var(--pres-text);
      background: rgba(124, 58, 237, 0.08);
      border-color: var(--pres-border);
    }
  }
  ```

### 5.2 Magnetic Tactile Micro-Interactions

Interactive buttons and active step chips implement a subtle spring physics attraction:

```typescript
export interface MagneticState {
  hasMagneticPull: boolean;
  offsetX: number;
  offsetY: number;
}

export function computeMagneticOffset(
  cursorX: number,
  cursorY: number,
  elementRect: DOMRect,
  pullRadius = 35
): { offsetX: number; offsetY: number } {
  const elementCenterX = elementRect.left + elementRect.width / 2;
  const elementCenterY = elementRect.top + elementRect.height / 2;

  const deltaX = cursorX - elementCenterX;
  const deltaY = cursorY - elementCenterY;
  const distance = Math.hypot(deltaX, deltaY);

  if (distance < pullRadius && distance > 0) {
    const attractionFactor = 0.28 * (1 - distance / pullRadius);
    return {
      offsetX: deltaX * attractionFactor,
      offsetY: deltaY * attractionFactor,
    };
  }

  return { offsetX: 0, offsetY: 0 };
}
```

When cursor enters the proximity bounding radius ($35\text{px}$), the element gently translates toward the pointer, generating tactile physical presence and high feedback fidelity.

---

## 6. Positive Boolean Coding Standard

All design system properties, component configuration flags, and state hooks must strictly adhere to positive naming semantics:

| Pattern | Prohibited Negative Example | Required Positive Standard |
|:---|:---|:---|
| Theme Mode | `isNotDark: boolean` | `isDark: boolean` |
| Backdrop Glow | `hasNoGlow: boolean` | `hasGlow: boolean` |
| Dot Matrix Grid | `isGridDisabled: boolean` | `hasDotMatrix: boolean` |
| Component Visibility | `isNotVisible: boolean` | `isVisible: boolean` |
| Interactive State | `disabled: boolean` | `isInteractive: boolean` |
| Audio Feedback | `hasNoAudio: boolean` | `hasAudioEnabled: boolean` |

Conditional evaluations must evaluate positive state directly without explicit equality checks:
- ❌ BAD: `if (theme.isDark == true)`
- ✅ GOOD: `if (theme.isDark)`

---

## 7. Zero Yellow-on-Light Contrast Rule & Northern UI/UX Typography Standard

### 7.1 The Zero Yellow-on-Light Rule (Non-Negotiable)
Under NO circumstances should yellow, amber, or gold light text/badges ever be placed on light, white, or off-white background canvases or cards.
- **Prohibited on Light Surfaces:** `text-amber-200`, `text-amber-300`, `text-amber-400`, `text-yellow-200`, `text-yellow-300`, `text-yellow-400`, `bg-amber-400/20 text-amber-300`.
- **Contrast Failure:** Light yellow text on white achieves only $\approx 1.4:1$ contrast ratio, violating WCAG AA/AAA.
- **Permitted Usage:**
  - On **Light Surfaces (`isDark === false`)**: Use high-contrast tokens such as `text-violet-700` / `text-violet-800` with `bg-violet-100`, or deep ink slate (`text-slate-900`).
  - On **Dark Surfaces (`isDark === true`)**: Warm gold and brand amber (`text-amber-400`, `#F5A623`) are allowed since they contrast against dark slate (`#0B0B0E`) with $C_R \ge 9.5:1$.

### 7.2 Northern UI/UX Typography Scale & Single-Item Focus
To maximize executive focus and eliminate cognitive clutter during fast presentations:
- **Kickers / Badges:** Must be at least $14\text{px}$ (`text-sm font-bold uppercase tracking-[0.2em]`). Never use tiny, illegible $10\text{px}–11\text{px}$ micro-text.
- **Slide Headings:** $44\text{px}–56\text{px}$ with strong visual weight.
- **Reduced Item Density:** Rather than dumping 4–6 complex competing cards on a slide, present a focused active card with large typography and smooth CSS3 transitions on hover/click.

---

## 8. Cross-Reference Index

- Interaction & HUD Refinement Spec: [../../21-app/30-white-slides-interaction-and-hud-refinement/01-overview.md](../../21-app/30-white-slides-interaction-and-hud-refinement/01-overview.md)
- Root Cause Analysis: [../../../.ai-memory/rca/01-white-slides-contrast-and-hud-rca.md](../../../.ai-memory/rca/01-white-slides-contrast-and-hud-rca.md)
- Color & Motion Spec: [../../21-app/25-grounded-global-ppt-and-flat-slide-synthesis/03-color-and-motion-design-system.md](../../21-app/25-grounded-global-ppt-and-flat-slide-synthesis/03-color-and-motion-design-system.md)
- Quality Verification Gates: [../../21-app/25-grounded-global-ppt-and-flat-slide-synthesis/04-verification-gates.md](../../21-app/25-grounded-global-ppt-and-flat-slide-synthesis/04-verification-gates.md)
- Design System Readme: [./readme.md](./readme.md)
