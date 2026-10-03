# 03-Theme Motion & Flat Progression: 6-Tier Token Contracts, 3D Flip Physics & Kinetic Step Engine

> **Specification Identifier:** `02-spec/21-app/39-global-ppt-evolution-and-16-slide-expansion/03-theme-motion-and-flat-progression.md`  
> **Status:** `APPROVED CANONICAL ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v2.0.0`  
> **Author:** Spec Subagent 01 (Spec & Types Architect)  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  
> **Domain:** 6-Tier HSL Triplet Tokens, Dynamic Variable Clean-Pass Teardown, Dark HUD Chrome Isolation, 3D Perspective Flip (`rotateY: ±45deg, scale: 0.92, perspective: 1200px`), 4 Signature Motion Keyframes (Radar Sweep, Raft Heartbeat, Lineage Flow, Flywheel Orbit), Deterministic Tri-State Intra-Slide Step Progression Engine (9 Multi-Step Workflows + 7 Flat Sovereign Overviews), and Non-Blocking WebAudio Step Cues  

---

## 1. System Vision & Architectural Motion Philosophy

The motion, theming, and step progression architecture for **Module 39 (`39-global-ppt-evolution-and-16-slide-expansion`)** establishes a state-of-the-art visual and interactive runtime that unifies high-authority executive boardroom presentations with dynamic cloud-native systems architecture visualization.

Standard enterprise slide decks suffer from three chronic defects:
1. **Palette Bleed & Cross-Contamination:** Switching color themes or dark/light modes leaves stale CSS variables lingering on the DOM tree, resulting in unreadable text and mismatched container borders.
2. **Disorienting Navigation Shifts:** Slides snap instantaneously or trigger jarring full-viewport wipes that disrupt audience focus and executive cadence.
3. **Rigid Static Frames:** Complex operational diagrams (Raft consensus logs, DAG data pipelines, threat radars) dump entire systems onto the screen at once rather than guiding stakeholder attention step-by-step.

Module 39 eliminates these defects through five core runtime pillars:
- **6-Tier Space-Separated HSL Token Architecture:** Colors are stored as pure unadorned `H S% L%` triplets, enabling arbitrary alpha compositing (`hsl(var(--token) / <alpha>)`) without format round-trips.
- **Dynamic Variable Clean-Pass Teardown:** Switching themes initiates an atomic purge pass that scrubs existing CSS variables from the `:root` and canvas elements prior to applying the new token dictionary.
- **Permanent Dark HUD Chrome Isolation:** Floating presenter controls, timeline scrubber tracks, theme popovers, and slide counters are permanently bound to dedicated `--chrome-*` tokens with high-contrast obsidian backdrops (`#0b0f19`).
- **Hardware-Accelerated 3D Perspective Flip Transitions:** Inter-slide transitions utilize CSS 3D perspective ($1200\text{px}$ focal distance, $\pm 45^\circ$ Y-axis rotation, and $0.92$ depth scaling) powered by GPU hardware transforms.
- **Deterministic 3-Phase Intra-Slide Step Engine:** Slides cycle cleanly through `completed`, `active`, and `future` states with subtle 1.25px optical blur on future items and 1800Hz / 12ms acoustic click feedback.

```
+---------------------------------------------------------------------------------------------------+
|               MODULE 39 THEME, MOTION & STEP PROGRESSION ARCHITECTURE                             |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  [THEME RUNTIME]                     [EVENT INTERCEPTION]             [3D FLIP TRANSITION]        |
|  6-Tier HSL Triplets                 cancelable `deck:nav`            perspective: 1200px         |
|  Atomic Variable Clean-Pass          slide.onStepNavigate()           rotateY: +/- 45deg          |
|  Dark HUD Chrome Isolation           event.preventDefault()           scale: 0.92, duration: 420ms|
|          │                                   │                                 │                  |
|          ▼                                   ▼                                 ▼                  |
|  ┌─────────────────────────────────────────────────────────────────────────────────────────────┐  |
|  │ VIRTUAL PRESENTATION CANVAS (1920x1080 Viewport Geometry, Top-Left Scaled)                  │  |
|  └───────────────────────────────────────────────┬─────────────────────────────────────────────┘  |
|                                                  │                                                |
|          ┌───────────────────────────────────────┴───────────────────────────────────────┐         |
|          ▼                                                                               ▼         |
|  [TRI-STATE STEP PROGRESSION LIFECYCLE]                                  [AUDIO STEP FEEDBACK]    |
|  - Phase 1: Completed (0.75 Opacity, scale-100, CheckCircle2)            - playStepTick() sound   |
|  - Phase 2: Active (1.00 Opacity, scale-102, Halo Glow Ring)              - Synthesized 1800Hz /  |
|  - Phase 3: Future (0.35 Opacity, scale-98, 1.25px Optical Blur)           12ms acoustic click   |
|  - Ephemeral Hover Preview: effectiveStep = hoveredStep ?? activeStep     - Non-blocking WebAudio |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

---

## 2. 6-Tier Space-Separated HSL Token Architecture

### 2.1 The Six Functional Token Tiers

Every theme is mathematically decomposed into 6 functional tiers of space-separated HSL triplets (`H S% L%`):

```less
// 6-Tier Architecture in src/styles/themeTokens.less and gradientTokens.ts
:root {
  // Tier 1: Canvas Base Geometry & Fill
  --pres-canvas-bg:          222 47% 11%;   // Base backdrop
  --pres-canvas-surface:     223 39% 16%;   // Secondary elevation fill

  // Tier 2: Typographic Ink & Hierarchy
  --pres-text-primary:       210 40% 98%;   // Headlines, primary metrics
  --pres-text-secondary:     215 20% 75%;   // Subheadings, body prose
  --pres-text-muted:         215 16% 52%;   // Meta tags, kickers, timestamps

  // Tier 3: Elevation, Glass & Borders
  --pres-card-bg:            223 39% 18%;   // Card background
  --pres-card-border:        216 34% 28%;   // Perimeter structural line
  --pres-glass-surface:      223 39% 18%;   // Glass backdrop (composited with / 0.70)
  --pres-glass-border:       210 40% 98%;   // Glass perimeter (composited with / 0.12)

  // Tier 4: Primary Brand Accents
  --pres-accent-primary:     217 91% 60%;   // Active pills, highlight glow
  --pres-accent-hover:       217 91% 68%;   // Interactive hover highlight
  --pres-accent-subtle:      217 91% 60%;   // Subtle wash (composited with / 0.15)
  --pres-accent-text:        210 40% 98%;   // High-contrast text on accent surfaces

  // Tier 5: Semantic Status Indicators
  --pres-status-success:     142 71% 45%;   // Verified, active, green
  --pres-status-warning:      38 92% 50%;   // Amber, in-progress, pending
  --pres-status-danger:        0 84% 60%;   // Incident, threat, red
  --pres-status-info:        199 89% 48%;   // Cyan, telemetry, metadata

  // Tier 6: Dynamic Micro-Shadow Ramps
  --pres-shadow-ambient:     rgba(0, 0, 0, 0.40);
  --pres-shadow-elevation:   0 12px 32px -4px rgba(0, 0, 0, 0.50);
  --pres-shadow-glow:        0 0 24px -2px hsl(var(--pres-accent-primary) / 0.35);
}
```

### 2.2 Atomic Clean-Pass Teardown Routine

To prevent legacy CSS variable leakage when swapping between themes (e.g. from `true-dark` to `editorial-light`), the runtime executes an atomic teardown pass before mounting the incoming palette tokens:

```typescript
export function applyThemeTokensWithCleanPass(
  targetElement: HTMLElement,
  incomingTokens: Record<string, string>
): void {
  // 1. Collect all existing presentation CSS variables
  const existingVars: string[] = [];
  for (let i = 0; i < targetElement.style.length; i++) {
    const propName = targetElement.style[i];
    if (propName.startsWith('--pres-')) {
      existingVars.push(propName);
    }
  }

  // 2. Atomic purge pass
  for (const varName of existingVars) {
    targetElement.style.removeProperty(varName);
  }

  // 3. Mount incoming token dictionary
  for (const [key, value] of Object.entries(incomingTokens)) {
    targetElement.style.setProperty(key, value);
  }
}
```

---

## 3. Dedicated Dark HUD Chrome Isolation (`--chrome-*`)

Presentation chrome controls (step indicators, slide counter, builder mode toggles, theme flyout menus, and audio toggles) must maintain pristine contrast regardless of the active slide theme.

To guarantee zero legibility failures when displaying pure white or light cream slides, all HUD controls are quarantined into an isolated `--chrome-*` token tier permanently bound to slate-carbon glass:

```less
:root {
  --chrome-bg:               222 47% 8%;    // #080c14 (deep charcoal)
  --chrome-surface:          223 39% 14%;   // #151d2e (elevated surface)
  --chrome-border:           217 33% 24%;   // #293850 (subtle contrast ring)
  --chrome-text:             210 40% 98%;   // #f8fafc (pure crisp text)
  --chrome-subtext:          215 20% 70%;   // #94a3b8 (secondary meta)
  --chrome-accent:           217 91% 60%;   // #3b82f6 (focus ring / active pill)
  --chrome-backdrop-blur:    16px;
  --chrome-shadow:           0 8px 32px 0 rgba(0, 0, 0, 0.45);
}
```

All HUD and floating toolbar components reference `hsl(var(--chrome-*) / <alpha>)` exclusively, ensuring they never inherit inverted text or transparent borders from slide themes.

---

## 4. Hardware-Accelerated 3D Perspective Flip Transitions

Inter-slide transitions implement a fluid 3D spatial flip that maintains presenter focus without visual disorientation.

### 4.1 Physics Parameters
- **Perspective Focal Depth:** `1200px` applied to canvas viewport container.
- **Rotation Arc:** Forward navigation rotates exiting slide $-45^\circ$ around Y-axis, entering slide from $+45^\circ$.
- **Depth Scale:** Recedes slightly to `scale(0.92)` at transition midpoint ($210\text{ms}$).
- **Easing Curve:** Cubic bezier `cubic-bezier(0.22, 1, 0.36, 1)` (spring decay without overshoot).
- **Total Duration:** $420\text{ms}$.

```less
.pres-canvas-viewport {
  perspective: 1200px;
  perspective-origin: center center;
  transform-style: preserve-3d;
}

.pres-slide-transition-flip-forward-exit {
  animation: presSlideFlipForwardExit 420ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.pres-slide-transition-flip-forward-enter {
  animation: presSlideFlipForwardEnter 420ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

@keyframes presSlideFlipForwardExit {
  0% {
    opacity: 1;
    transform: translate3d(0, 0, 0) rotateY(0deg) scale(1);
  }
  50% {
    opacity: 0.65;
    transform: translate3d(-15%, 0, -120px) rotateY(-25deg) scale(0.92);
  }
  100% {
    opacity: 0;
    transform: translate3d(-30%, 0, -240px) rotateY(-45deg) scale(0.86);
  }
}

@keyframes presSlideFlipForwardEnter {
  0% {
    opacity: 0;
    transform: translate3d(30%, 0, -240px) rotateY(45deg) scale(0.86);
  }
  50% {
    opacity: 0.85;
    transform: translate3d(15%, 0, -120px) rotateY(25deg) scale(0.92);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0) rotateY(0deg) scale(1);
  }
}
```

---

## 5. Four Brand-New Signature Kinetic Motion Keyframes

Module 39 introduces 4 dedicated kinetic motion keyframes for deep cloud infrastructure and financial visualization:

### 5.1 Radar Sweep (`pres-radar-sweep`)
Used by `MacroEconomicThreatRadarSlide` to scan quadrants continuously:
- **Geometry:** 360-degree continuous rotation.
- **Sweep Effect:** Conic gradient beam with $45^\circ$ leading glow and trailing dissipation.
- **Cycle Duration:** $4.0\text{s}$ linear infinite.

```less
@keyframes pres-radar-sweep {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.animate-pres-radar-sweep {
  animation: pres-radar-sweep 4s linear infinite;
  transform-origin: center center;
}
```

### 5.2 Raft Heartbeat (`pres-raft-heartbeat`)
Used by `DistributedConsensusRaftLogSlide` to visualize node leader pings and election consensus:
- **Pulse Cadence:** $1.8\text{s}$ cubic-bezier pulse.
- **Ring Expansion:** Concentric halo expanding from $1.0\times$ to $1.4\times$ while fading from $0.65$ to $0.0$.

```less
@keyframes pres-raft-heartbeat {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 hsl(var(--pres-accent-primary, 217 91% 60%) / 0.65);
  }
  50% {
    transform: scale(1.06);
    box-shadow: 0 0 0 14px hsl(var(--pres-accent-primary, 217 91% 60%) / 0.15);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 24px hsl(var(--pres-accent-primary, 217 91% 60%) / 0);
  }
}

.animate-pres-raft-heartbeat {
  animation: pres-raft-heartbeat 1.8s cubic-bezier(0.24, 0, 0.38, 1) infinite;
}
```

### 5.3 Lineage Flow (`pres-lineage-flow`)
Used by `DataPipelineLineageDagSlide` to show continuous data flow between ingestion, lake, and analytics stages:
- **Dash Stroke:** Animated SVG `stroke-dashoffset`.
- **Directional Velocity:** Upstream to downstream at $1.5\text{s}$ cycle.

```less
@keyframes pres-lineage-flow {
  0% {
    stroke-dashoffset: 48;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

.animate-pres-lineage-flow {
  stroke-dasharray: 8 4;
  animation: pres-lineage-flow 1.5s linear infinite;
}
```

### 5.4 Flywheel Orbit (`pres-flywheel-orbit`)
Used by `FlywheelGrowthMomentumOrbitSlide` to animate dual concentric counter-rotating ring anchors:
- **Inner Ring:** Clockwise rotation at $18\text{s}$.
- **Outer Ring:** Counter-clockwise rotation at $28\text{s}$.

```less
@keyframes pres-flywheel-orbit {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes pres-flywheel-orbit-reverse {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.animate-pres-flywheel-orbit {
  animation: pres-flywheel-orbit 18s linear infinite;
  transform-origin: center center;
}

.animate-pres-flywheel-orbit-reverse {
  animation: pres-flywheel-orbit-reverse 28s linear infinite;
  transform-origin: center center;
}
```

---

## 6. Deterministic Intra-Slide Step Progression Engine

### 6.1 The 16 Archetype Progression Matrix

The 16 archetypes divide cleanly into **9 Multi-Step Workflows** and **7 Flat Sovereign Overviews**:

| Index | Archetype Type | Classification | Step Count | Visual Progress Mechanism |
|:---|:---|:---|:---:|:---|
| 01 | `executive-mandate-scorecard` | Multi-Step Workflow | 4 | Mandate review stages (1 to 4) |
| 02 | `board-quorum-resolution-ledger` | Flat Sovereign Overview | 1 | Single-frame voting matrix & seal |
| 03 | `macro-economic-threat-radar` | Multi-Step Workflow | 4 | Threat quadrant inspection (Q1 to Q4) |
| 04 | `zero-trust-network-mesh` | Multi-Step Workflow | 4 | Security perimeter layers (L1 to L4) |
| 05 | `distributed-consensus-raft-log` | Multi-Step Workflow | 4 | Raft consensus pipeline (Entry to Commit) |
| 06 | `data-pipeline-lineage-dag` | Flat Sovereign Overview | 1 | Complete end-to-end lineage graph |
| 07 | `code-walkthrough-syntax-lens` | Multi-Step Workflow | 4 | Syntax walkthrough focal lines (1 to 4) |
| 08 | `tier-comparison-feature-matrix` | Flat Sovereign Overview | 1 | High-density enterprise matrix grid |
| 09 | `arr-growth-bridge-waterfall` | Multi-Step Workflow | 4 | ARR waterfall revenue stages (1 to 4) |
| 10 | `multi-tier-saas-packaging-table`| Flat Sovereign Overview | 1 | 4-tier commercial packaging table |
| 11 | `flywheel-growth-momentum-orbit` | Multi-Step Workflow | 4 | Flywheel velocity phases (1 to 4) |
| 12 | `enterprise-case-study-hero` | Flat Sovereign Overview | 1 | High-impact executive transformation case |
| 13 | `client-wall-social-proof-grid` | Flat Sovereign Overview | 1 | 12-logo client verification marquee |
| 14 | `incident-retrospective-timeline`| Multi-Step Workflow | 4 | Postmortem timeline (Detect to Resolve) |
| 15 | `interactive-faq-tabbed-deck` | Flat Sovereign Overview | 1 | 4-category searchable FAQ index |
| 16 | `audience-decision-fork-matrix` | Multi-Step Workflow | 4 | Strategic fork pathways (A, B, C, Final) |

### 6.2 Tri-State Kinetic Lifecycle

For all multi-step workflows, each stage evaluates into one of three deterministic states:

```typescript
export type StepLifecycleState = 'completed' | 'active' | 'future';

export function getStepLifecycleState(itemIndex: number, activeStep: number): StepLifecycleState {
  if (itemIndex < activeStep) return 'completed';
  if (itemIndex === activeStep) return 'active';
  return 'future';
}
```

```less
// Lifecycle State Styling Classes
.pres-step-completed {
  opacity: 0.75;
  transform: scale(1.0);
  filter: blur(0px);
  transition: all 260ms ease-out;
}

.pres-step-active {
  opacity: 1.0;
  transform: scale(1.02);
  filter: blur(0px);
  box-shadow: 0 0 24px -2px hsl(var(--pres-accent-primary, 217 91% 60%) / 0.45);
  border-color: hsl(var(--pres-accent-primary, 217 91% 60%));
  transition: all 260ms cubic-bezier(0.16, 1, 0.3, 1);
}

.pres-step-future {
  opacity: 0.35;
  transform: scale(0.98);
  filter: blur(1.25px);
  transition: all 260ms ease-out;
}
```

---

## 7. Tactile WebAudio Step Cues

Advancing intra-slide steps triggers an acoustic click generated via synthesized WebAudio without external audio file requests:

```typescript
export function playStepTick(): void {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(1800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.012);

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.012);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.012);
  } catch {
    // Non-blocking fallback for restricted autoplay environments
  }
}
```

---

## 8. Summary of Architectural Guarantees

1. **Zero CSS Variable Leaks:** Guaranteed via `applyThemeTokensWithCleanPass`.
2. **Permanent HUD Contrast:** Enforced through isolated `--chrome-*` tokens.
3. **Smooth 60fps Motion:** Hardware-accelerated 3D flips and CSS keyframe animations.
4. **Zero Phantom Steps:** All 16 slide types mathematically map to either 4 steps or 1 step deterministically.
5. **Positive Booleans Only:** All logic uses `is*` and `has*` flags with zero double negatives.
