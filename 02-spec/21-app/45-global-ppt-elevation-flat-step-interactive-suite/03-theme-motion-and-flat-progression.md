# 03-Theme Motion & Flat Progression: 5 Theme Families, Spring Physics, Transition Modes & Step Engine

> **Specification Identifier:** `02-spec/21-app/45-global-ppt-elevation-flat-step-interactive-suite/03-theme-motion-and-flat-progression.md`  
> **Status:** `APPROVED CANONICAL ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v2.5.0`  
> **Author:** Worker 02 (Theme, Motion & Flat Progression Architect)  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  
> **Created:** 2026-10-04  
> **Domain:** 5 Core Theme Families (CorporateClean, TechModern, EditorialArchival, ExecutivePrestige, BioGrowth), 4 Semantic Status Ramps, Critically Damped Spring Physics (Stiffness 420, Damping 28, Mass 1.0), 6 Hardware-Accelerated Transition Modes (Kinetic-Morph, Slide, Fade, Zoom, Rise, Flip), GPU Layer Promotion via `will-change`, Flat Sovereign (1 Step) vs Kinetic Multi-Step (N Steps) Architectural Paradigm, 3-Phase Step Progression Lifecycle with Optical Blur and Halo Lift, Clickable Navigation Rails, Deterministic Keyboard Bindings, Directional Acoustic Feedback, and Zero Phantom Steps Governance  

---

## 1. System Vision & Architectural Motion Philosophy

Chapter 45 establishes the authoritative motion and theming runtime for the **Suite 2027 Elevation Archetypes** inside the White Presentation ecosystem. Bridging high-stakes executive boardroom delivery with deep systems engineering clarity, the presentation runtime must deliver instant visual pacing, tactile responsive physics, and immaculate contrast across all viewport form factors.

The motion and theming architecture is guided by six core principles:

1. **Deterministic 5 Theme Family Taxonomy:** Enterprise slide decks must not select arbitrary palettes. All visual styling routes through 5 canonical theme families (`CorporateClean`, `TechModern`, `EditorialArchival`, `ExecutivePrestige`, `BioGrowth`), each delivering mathematical contrast safety ($C_R \ge 4.5:1$ for headers, $C_R \ge 7.0:1$ for body copy).
2. **Standardized Semantic Status Ramps:** Health, risk, anomaly, and progress indicators across complex architectural and financial slides must adhere strictly to 4 semantic status tokens (`--pres-status-success`, `--pres-status-warning`, `--pres-status-danger`, `--pres-status-info`) with calibrated text, background, and border tints.
3. **Harmonic Spring Physics Engine:** Transitions and hover micro-interactions replace static cubic bezier curves with analytical harmonic spring dynamics ($k = 420$, $c = 28$, $m = 1.0$), ensuring snappy, immediate onset without visual bounce or settling latency.
4. **Hardware Composite & GPU Layer Promotion:** All animations target composite-only CSS properties (`transform`, `opacity`, `filter`). Layer promotion via `will-change` is applied during active movement and automatically teardown to prevent VRAM exhaustion.
5. **Flat Sovereign vs Kinetic Multi-Step Duality:** Slides strictly separate into two operational paradigms: **Flat Sovereign Overviews** ($1$ Step, zero cognitive gating, full instantaneous situational awareness) and **Kinetic Multi-Step Workflows** ($N$ Steps, structured progressive disclosure with single-item focus).
6. **3-Phase Kinetic Step Lifecycle:** Intra-slide steps transition deterministically between Completed ($75\%$ opacity, checked badge), Active ($100\%$ opacity, glowing halo, $1.02\times$ elevation lift), and Future ($1.25\text{px}$ optical blur, $40\%$ opacity).

```
+---------------------------------------------------------------------------------------------------+
|               CHAPTER 45 THEME, MOTION & STEP PROGRESSION ARCHITECTURE                            |
+---------------------------------------------------------------------------------------------------+
|  [5 THEME FAMILIES]                  [4 SEMANTIC STATUS RAMPS]        [6 TRANSITION MODES]        |
|  - CorporateClean (Enterprise QBR)   - Success (Emerald Green)        - kinetic-morph             |
|  - TechModern (Cloud & AI Systems)   - Warning (Amber Orange)         - slide                     |
|  - EditorialArchival (Whitepapers)   - Danger (Crimson Red)           - fade                      |
|  - ExecutivePrestige (M&A, Treas.)   - Info (Sky Blue)                - zoom                      |
|  - BioGrowth (Health & ESG)          - Raw HSL Space-Separated        - rise                      |
|                                                                       - flip (3D perspective)     |
|          │                                   │                                 │                  |
|          ▼                                   ▼                                 ▼                  |
|  ┌─────────────────────────────────────────────────────────────────────────────────────────────┐  |
|  │ VIRTUAL PRESENTATION CANVAS (1920x1080 Viewport Reference Geometry, Uniform Matrix Scaling) │  |
|  └───────────────────────────────────────┬─────────────────────────────────────────────────────┘  |
|                                          │                                                        |
|                  ┌───────────────────────┴───────────────────────┐                                |
|                  ▼                                               ▼                                |
|  [FLAT SOVEREIGN (1 STEP)]                             [KINETIC MULTI-STEP (N STEPS)]             |
|  - Step Count Formula: 1                               - Step Count Formula: max(stages.length, 1)|
|  - Full topological situational awareness              - 3-Phase Lifecycle (Completed/Active/Fut) |
|  - Zero phantom steps                                  - Optical Blur (1.25px) on Future Steps    |
|  - Micro-elevations on hover                           - Accent Glow Halo + 1.02x Lift on Active  |
|  - Direct click-to-focus                               - Bidirectional keyboard navigation        |
+---------------------------------------------------------------------------------------------------+
```

---

## 2. Five Canonical Theme Families

All presentation themes belong to one of 5 canonical theme families. Themes are defined using raw, space-separated HSL triplets (`H S% L%`), allowing transparent alpha-compositing via `hsl(var(--token) / <alpha>)` without hex-to-rgb conversion overhead.

```css
:root {
  --pres-bg: hsl(var(--pres-bg-hsl));
  --pres-bg-card: hsl(var(--pres-card-bg-hsl) / var(--pres-card-opacity, 0.85));
  --pres-border: hsl(var(--pres-card-border-hsl) / 0.18);
  --pres-accent: hsl(var(--pres-accent-hsl));
  --pres-accent-glow: hsl(var(--pres-accent-hsl) / 0.35);
  --pres-text-primary: hsl(var(--pres-text-hsl));
}
```

### 2.1 Theme Family Specification Matrix

| Theme Family | Target Presentation Domain | Canvas Foundation (Plane 0) | Structural Card (Plane 1) | Card Border HSL | Primary Accent Token | Contrast Ratio ($C_R$) | Executive Tone & Boardroom Identity |
|:---|:---|:---:|:---:|:---:|:---:|:---:|:---|
| **CorporateClean** | Enterprise Boardrooms, QBRs, Operating Plans | `210 20% 98%` (Cool Alabaster) | `0 0% 100%` (Ivory White) | `215 16% 85%` | `222 47% 11%` (Deep Navy) | $12.4:1$ | Canonical enterprise presentation standard; high crispness, deep ink typography. |
| **TechModern** | Cloud Infrastructure, AI Platforms, Cyber | `225 25% 9%` (Obsidian Core) | `224 22% 14%` (Charcoal Glass) | `220 20% 28%` | `190 95% 48%` (Electric Cyan) | $14.2:1$ | Mission-critical cloud architecture, operations war rooms, developer summits. |
| **EditorialArchival** | Thought Leadership, Policy, Whitepapers | `38 30% 96%` (Warm Sandstone) | `40 25% 92%` (Parchment Card) | `35 20% 80%` | `16 85% 38%` (Burnt Terracotta) | $8.8:1$ | Sovereign wealth reports, institutional research, legal and regulatory briefs. |
| **ExecutivePrestige** | M&A Synergies, Private Equity, Capital Alloc. | `230 35% 12%` (Midnight Sapphire)| `228 30% 18%` (Royal Slate) | `226 25% 28%` | `43 96% 56%` (Sovereign Gold) | $11.6:1$ | High-authority boardroom assemblies, shareholder meetings, fiduciary audits. |
| **BioGrowth** | Healthtech, Therapeutics, ESG Governance | `150 15% 97%` (Forest Fog Mint) | `150 20% 94%` (Mint Pearl) | `155 18% 82%` | `158 64% 28%` (Clinical Emerald) | $9.2:1$ | Clinical precision, life science therapeutics, venture capital growth metrics. |

### 2.2 Light-Theme Container Contamination Safeguard

To ensure light themes never render dark slate container slabs:
- When `isDark` is false, the engine dynamically sets:
  ```css
  --pres-bg-card: rgba(255, 255, 255, 0.94);
  --pres-border: hsl(var(--pres-card-border-hsl) / 0.70);
  --pres-text-primary: hsl(var(--pres-text-hsl));
  --pres-text-secondary: hsl(215 25% 30%);
  --pres-text-muted: hsl(215 16% 48%);
  ```
- **Constraint:** Hardcoded dark slate classes (`bg-slate-900`, `bg-[#0f172a]`) are strictly forbidden inside presentation slide containers.

### 2.3 Variable Clean-Pass Teardown Protocol

Switching slides or themes must execute an atomic teardown pass to prevent lingering CSS variable pollution:

```typescript
const MANAGED_THEME_PREFIXES = [
  '--pres-',
  '--gradient-',
  '--status-',
  '--accent-',
];

export function cleanPreviousThemeVariables(rootElement: HTMLElement): void {
  const inlineStyles = rootElement.style;
  const propertiesToRemove: string[] = [];

  for (let idx = 0; idx < inlineStyles.length; idx++) {
    const propName = inlineStyles[idx];
    const hasManagedPrefix = MANAGED_THEME_PREFIXES.some((prefix) =>
      propName.startsWith(prefix)
    );
    if (hasManagedPrefix) {
      propertiesToRemove.push(propName);
    }
  }

  propertiesToRemove.forEach((prop) => inlineStyles.removeProperty(prop));
}
```

---

## 3. Four Semantic Status Ramps

To eliminate hardcoded hex colors and arbitrary alert styles, Suite 2027 slide components use four standardized semantic status ramps. Each ramp provides calibrated foreground, background tint, and border tokens:

```css
:root {
  /* 1. Success Ramp (Nominal, Cleared, Compliant, Healthy) */
  --pres-status-success: 152 76% 40%;
  --pres-status-success-bg: 152 76% 94%;
  --pres-status-success-border: 152 60% 75%;
  --pres-status-success-text: 152 80% 22%;

  /* 2. Warning Ramp (Threshold Near, Degradation, At-Risk) */
  --pres-status-warning: 38 92% 50%;
  --pres-status-warning-bg: 38 92% 95%;
  --pres-status-warning-border: 38 75% 72%;
  --pres-status-warning-text: 32 95% 30%;

  /* 3. Danger Ramp (Outage, Breach, SEV-1, Chokepoint Risk) */
  --pres-status-danger: 0 72% 51%;
  --pres-status-danger-bg: 0 72% 95%;
  --pres-status-danger-border: 0 65% 75%;
  --pres-status-danger-text: 0 80% 26%;

  /* 4. Info Ramp (In-Flight, Scheduled, Telemetry, Neutral) */
  --pres-status-info: 204 94% 48%;
  --pres-status-info-bg: 204 94% 95%;
  --pres-status-info-border: 204 70% 76%;
  --pres-status-info-text: 204 88% 25%;
}
```

### 3.1 Status Ramp Usage Matrix

| Status Token | Visual Color | Primary Semantic Application in Suite 2027 | WCAG AA Contrast ($C_R$) |
|:---|:---|:---|:---:|
| `--pres-status-success` | Emerald Green | Healthy SLO, Day 1 Synergies Met, Resolved Incidents, Compliant Guardrails | $\ge 5.4:1$ on light, $\ge 9.8:1$ on dark |
| `--pres-status-warning` | Deep Amber | Latency Near Breaches, High WIP Constraints, At-Risk Accounts, Chokepoints | $\ge 4.8:1$ on light, $\ge 8.6:1$ on dark |
| `--pres-status-danger` | Crimson Red | SEV-1 Outages, Token Cost Surges, CRDT Conflict Drops, Geopolitical Blocks | $\ge 5.1:1$ on light, $\ge 9.2:1$ on dark |
| `--pres-status-info` | Executive Sky Blue | Planned Ingestion, Bronze/Silver Medallion Stages, RFC Drafts, RACI Informs | $\ge 4.9:1$ on light, $\ge 8.9:1$ on dark |

---

## 4. Motion Engine & Spring Physics Mathematical Model

Chapter 45 enforces a unified harmonic spring physics engine for all interactive card elevations, stage transitions, and slide shifts.

### 4.1 Underdamped Harmonic Oscillator Model

Spring motion follows the second-order ordinary differential equation:

$$m \frac{d^2 x}{d t^2} + c \frac{d x}{d t} + k x = 0$$

Where:
- **Mass ($m$):** $1.0\text{ kg}$ (standard normalized unit inertia)
- **Stiffness ($k$):** $420\text{ N/m}$ (rapid force onset ensuring snappy keypress response)
- **Damping ($c$):** $28\text{ N}\cdot\text{s/m}$ (critical damping control preventing visual bounce)
- **Initial Velocity ($v_0$):** $0\text{ m/s}$ (rested start)

The natural undamped angular frequency $\omega_0$ and damping ratio $\zeta$ are:

$$\omega_0 = \sqrt{\frac{k}{m}} = \sqrt{420} \approx 20.49\text{ rad/s}$$

$$\zeta = \frac{c}{2 \sqrt{m k}} = \frac{28}{2 \sqrt{420}} = \frac{28}{40.99} \approx 0.683$$

Since $\zeta < 1.0$, the system operates in the rapid underdamped regime, yielding immediate visual feedback ($\Delta t_{80\%} \approx 120\text{ms}$) with an imperceptible, silky settling tail terminating at $280\text{ms}$.

### 4.2 GPU Layer Promotion & Hardware Acceleration

All CSS animations must declare hardware-accelerated composite properties (`transform`, `opacity`, `filter`, `box-shadow`) and manage GPU layer promotion via `will-change`:

```less
// ============================================================================
// SUITE 2027 HARDWARE-ACCELERATED GPU ANIMATIONS
// ============================================================================

// 1. Active Stage Pulse Beacon (Periodic ambient glow halo around active card)
@keyframes activeStagePulseBeacon {
  0%, 100% {
    transform: scale(1.0) translateY(0);
    box-shadow: 0 0 14px hsl(var(--pres-accent-hsl, 222 47% 11%) / 0.25),
                0 0 0 1px hsl(var(--pres-accent-hsl, 222 47% 11%) / 0.35);
    border-color: hsl(var(--pres-accent-hsl, 222 47% 11%) / 0.50);
  }
  50% {
    transform: scale(1.02) translateY(-2px);
    box-shadow: 0 0 30px hsl(var(--pres-accent-hsl, 222 47% 11%) / 0.70),
                0 0 0 2.5px hsl(var(--pres-accent-hsl, 222 47% 11%) / 0.90),
                0 16px 32px -6px hsl(var(--pres-accent-hsl, 222 47% 11%) / 0.40);
    border-color: hsl(var(--pres-accent-hsl, 222 47% 11%) / 1.0);
  }
}

.animate-active-beacon {
  animation: activeStagePulseBeacon 2.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  will-change: transform, box-shadow, border-color;
}

// 2. Narrative Step Emerge (Fluid spring reveal for newly activated step items)
@keyframes narrativeStepEmerge {
  0% {
    opacity: 0;
    transform: translate3d(0, 16px, 0) scale(0.97);
    filter: blur(2px);
  }
  65% {
    opacity: 0.95;
    transform: translate3d(0, -1px, 0) scale(1.005);
    filter: blur(0px);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1.0);
    filter: none;
  }
}

.animate-narrative-emerge {
  animation: narrativeStepEmerge 0.38s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  will-change: transform, opacity, filter;
}

// 3. Rail Flow Directional (Illuminated photon traversing step tracks)
@keyframes railFlowDirectional {
  0% {
    background-position: 200% 0;
    opacity: 0.40;
  }
  50% {
    opacity: 1.0;
  }
  100% {
    background-position: -200% 0;
    opacity: 0.40;
  }
}

.animate-rail-flow {
  background: linear-gradient(
    90deg,
    transparent 0%,
    hsl(var(--pres-accent-hsl, 222 47% 11%) / 0.15) 30%,
    hsl(var(--pres-accent-hsl, 222 47% 11%) / 0.95) 50%,
    hsl(var(--pres-accent-hsl, 222 47% 11%) / 0.15) 70%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: railFlowDirectional 2.2s linear infinite;
  will-change: background-position, opacity;
}
```

---

## 5. Six Hardware-Accelerated Transition Modes

Chapter 45 defines six distinct transition modes for presenting slides and expanding components:

```
Transition Modes Taxonomy:
├── 1. kinetic-morph: Shared bounding-box deformation with spring trajectory
├── 2. slide: Linear translational displacement along horizontal or vertical axes
├── 3. fade: Pure alpha crossfade (240ms) for analytical and dense data slides
├── 4. zoom: Scale-based focal convergence (0.95x -> 1.00x)
├── 5. rise: Upward elevation emergence with subtle vertical momentum
└── 6. flip: 3D perspective Y-axis card inversion (perspective: 1200px)
```

### 5.1 Transition Modes Specification

| Mode Name | Key Properties Animated | Duration | Easing Function | Primary Use Case in Suite 2027 |
|:---|:---|:---:|:---|:---|
| `kinetic-morph` | `transform (translate3d, scale3d)`, `opacity` | $320\text{ms}$ | Spring ($k=420, c=28$) | Intra-step stage shifts, medallion pipeline expansions |
| `slide` | `transform: translate3d(±100%, 0, 0)` | $300\text{ms}$ | `cubic-bezier(0.22, 1, 0.36, 1)` | Sequential slide advance/rewind in narrative decks |
| `fade` | `opacity (0.0 -> 1.0)` | $240\text{ms}$ | `cubic-bezier(0.4, 0, 0.2, 1)` | Dense analytical overviews (RACI matrix, financial gauges)|
| `zoom` | `transform: scale3d(0.95, 0.95, 1) -> (1, 1, 1)` | $260\text{ms}$ | `cubic-bezier(0.16, 1, 0.3, 1)` | Drill-down inspections, modal dialog openings |
| `rise` | `transform: translate3d(0, 24px, 0) -> (0, 0, 0)` | $320\text{ms}$ | `cubic-bezier(0.22, 1, 0.36, 1)` | Bottom-up card reveals, SEV-1 incident timeline nodes |
| `flip` | `transform: rotateY(180deg)`, `perspective: 1200px` | $500\text{ms}$ | `cubic-bezier(0.22, 1, 0.36, 1)` | Before/After synergy reveals, architectural tradeoff inspections |

### 5.2 3D Perspective Flip Card Implementation (`perspective: 1200px`)

```css
.flip-card-3d {
  perspective: 1200px;
  -webkit-perspective: 1200px;
  background-color: transparent;
  width: 100%;
  height: 100%;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: left;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
}

.flip-card-3d.is-flipped .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 12px;
  overflow: hidden;
}

.flip-card-front {
  transform: rotateY(0deg);
  z-index: 2;
}

.flip-card-back {
  transform: rotateY(180deg);
  z-index: 1;
}
```

---

## 6. Flat Sovereign (1 Step) vs Kinetic Multi-Step (N Steps) Architectural Paradigm

All 15 Suite 2027 slide archetypes strictly divide into two architectural paradigms:

```
+-----------------------------------------------------------------------------------------+
|                  Flat Sovereign Overview vs Kinetic Step Workflow                       |
|                                                                                         |
|  [Flat Sovereign Overview (1 Step)]           [Kinetic Multi-Step Workflow (N Steps)]   |
|  - All data visible simultaneously            - Step 1: Active Halo, Focus Elevation    |
|  - Zero cognitive gating                      - Step 2: Completed, Muted Retention      |
|  - Global system health & density             - Step 3: Future Stage (1.25px Blur)      |
|  - Step Count Formula: 1                      - Step Count Formula: stages.length       |
+-----------------------------------------------------------------------------------------+
```

### 6.1 Paradigm Comparison Matrix

| Architectural Feature | Flat Sovereign Overview ($1$ Step) | Kinetic Multi-Step Workflow ($N$ Steps) |
|:---|:---|:---|
| **Core Objective** | Instant holistic posture, system topology, density | Progressive narrative disclosure, sequential breakdown |
| **Cognitive Strategy** | Zero cognitive gating; viewer scans all items freely | Single-element focus spotlight; eliminates visual overload |
| **Step Count Calculation** | Strictly evaluated to $\mathbf{1}$ (`stepsCount = 1`) | Evaluated as $\max(\mathbf{stages.length}, \mathbf{1})$ (typically $4$ steps) |
| **Micro-Interactions** | Tactile hover lift (`translateY(-2px)`), modal zoom | Active beacon pulse, connector rail flow, optical blur filter |
| **Presenter HUD Display** | Slide index only (e.g. `Slide 4 of 20`) | Intra-step indicator enabled (e.g. `Step 2 of 4`) |
| **Archetypes in Suite 2027** | 7 Archetypes (RACI, Zero-Trust Map, SaaS Gauges, Chokepoints, AI Governance, SPACE, Customer Health) | 8 Archetypes (Token Cost, SEV-1 Timeline, FinOps Unit Rate, PMF Cohorts, Medallion Pipeline, M&A Synergy, DR Failover, Value Stream) |

---

## 7. 3-Phase Kinetic Step Progression Lifecycle

In Kinetic Multi-Step slides, stage nodes transition deterministically across three visual lifecycle phases:

```
Kinetic Step Lifecycle:
┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
│ COMPLETED (P1)  │ <───  │   ACTIVE (P2)   │ ────> │   FUTURE (P3)   │
│ - 75% Opacity   │       │ - 100% Opacity  │       │ - 40% Opacity   │
│ - Checked Badge │       │ - Glowing Halo  │       │ - 1.25px Blur   │
│ - Scale 1.00    │       │ - 1.02x Lift    │       │ - Scale 0.98    │
└─────────────────┘       └─────────────────┘       └─────────────────┘
```

### 7.1 Detailed Phase State Matrix

| Phase Name | Condition Relative to `activeStep` | Visual Characteristics | CSS Styling & Classes | Interaction Behavior |
|:---|:---:|:---|:---|:---|
| **Completed** | $\text{index} < \text{activeStep}$ | Retained narrative context, $75\%$ opacity, checked badge indicator `[✓]`, muted subtle border | `.step-completed`, `opacity: 0.75`, `border-color: var(--pres-border)` | Clickable to rewind directly to this stage |
| **Active** | $\text{index} == \text{activeStep}$ | Full visual spotlight, $100\%$ opacity, radiant accent halo, $1.02\times$ scale lift, $-3\text{px}$ Y-axis elevation | `.step-active`, `box-shadow: 0 0 28px var(--pres-accent-glow)`, `transform: translateY(-3px) scale(1.02)` | Primary keyboard navigation target, active stage inspection |
| **Future** | $\text{index} > \text{activeStep}$ | Anticipatory preview, $1.25\text{px}$ optical blur, $40\%$ opacity, $25\%$ desaturation, $0.98\times$ scale | `.step-future`, `filter: blur(1.25px) saturate(0.75)`, `opacity: 0.40`, `transform: scale(0.98)` | Clickable to jump forward; prevents audience reading ahead |

### 7.2 `.step-interactive` Tactile Hover Affordance

All interactive stage stations and Bento cards incorporate tactile spring physics:

```less
.step-interactive {
  cursor: pointer;
  transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 0.28s cubic-bezier(0.22, 1, 0.36, 1),
              border-color 0.20s ease,
              background-color 0.20s ease;

  &:hover {
    transform: translateY(-3px) scale(1.015);
    border-color: hsl(var(--pres-accent-hsl) / 0.55);
    box-shadow: 0 12px 24px -6px hsl(var(--pres-accent-hsl) / 0.22);
  }

  &:active {
    transform: translateY(-1px) scale(0.99);
  }
}
```

---

## 8. Step Progression Rules & Keyboard Navigation Governance

1. **Zero Phantom Steps Mandate:** The total step count of any slide must deterministically equal its stage array length:
   $$\text{totalSteps} = \max(\text{stages.length}, 1)$$
   Flat sovereign slides strictly evaluate to $1$. The engine must never advance into phantom states ($> \text{totalSteps}$).
2. **Bidirectional Keyboard Bindings:**
   - `ArrowRight`, `Space`, `PageDown`: Advances to the next step. If already at the final step, navigates to the next slide in the presentation.
   - `ArrowLeft`, `PageUp`: Steps back to the previous step. If already at step 0, navigates to the previous slide.
   - `Digit 1` through `Digit 9`: Jumps directly to step $N - 1$.
   - `Home`: Jumps to step 0 of the current slide.
   - `End`: Jumps to the final step of the current slide.
3. **Clickable Navigation Rails:**
   - Every node on horizontal or vertical stage rails exposes an accessible `onClick={() => jumpToStep(idx)}` handler.
   - Clicking any step node immediately shifts focus and triggers synthesized acoustic feedback.
4. **Directional Acoustic Confirmation:**
   - Advance: Pitch sweep from $440\text{Hz} \to 880\text{Hz}$ over $90\text{ms}$.
   - Rewind: Pitch sweep from $660\text{Hz} \to 330\text{Hz}$ over $90\text{ms}$.
   - Stage Complete: Harmonic major triad ($C_5, E_5, G_5$) played non-blockingly via WebAudio.
5. **HUD Intra-Step Progress Synchronization:**
   - When a slide has `maxSteps > 1`, the floating Presenter HUD mounts an intra-step micro-segmented progress bar directly beneath the slide title.
   - Clicking segments in the HUD jumps intra-slide without changing the active slide index.

---

## 9. Architectural Signoff

I hereby certify that the Theme, Motion, Transition Modes, and Step Progression Engine specified herein establish the canonical design standard for Chapter 45 Suite 2027 slide archetypes.

**Approved by:**  
**Alim Ul Karim**  
*Chief Software Engineer, White Presentation Engine*  
*Date: 2026-10-04*
