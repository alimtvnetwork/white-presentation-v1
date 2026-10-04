# 01-Architecture Spec: Suite 2032 Global PPT Presentation Architecture & Kinetic Engine

> **Specification Identifier:** `02-spec/21-app/50-suite2032-global-ppt-and-15-slide-expansion/01-architecture-spec.md`  
> **Status:** `APPROVED CANONICAL ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.6.0` (Suite 2032 Expansion)  
> **Author:** Worker 1 (Spec & Styling Author)  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  
> **Created:** 2026-10-05  
> **Domain:** Global PPT Parity, Suite 2032 Corporate Keynote Architecture, 60/30/10 Visual Spatial Balance, 4-Plane Depth Hierarchy, 1920x1080 Virtual Canvas Scaling, Northern UI/UX Typography Standard v1.3.3 (Floor >= 14px), Pure DOM Live Typography Mandate, Zero Yellow-on-Light Rule, 4 GPU Kinetic Animations, Deterministic 3-Phase Kinetic Step Progression, and Print / PDF Export Architecture.

---

## 1. Architectural Vision & Executive Summary

### 1.1 The Global PPT Synthesis for Suite 2032
Modern mission-critical enterprise presentations delivered to sovereign boards, technical consortia, and executive leadership require institutional visual calm, structural hierarchy, and fluid interactive pacing. Suite 2032 deepens the synthesis between Global PPT executive keynote standards and the White Presentation reactive runtime engine.

The architecture eliminates static presentation fatigue through two complementary slide paradigms:
1. **Kinetic Multi-Step Workflows (8 Archetypes):** Interactive multi-stage operational flows progressing through a deterministic 3-phase lifecycle (`completed`, `active`, `future`).
2. **Flat Sovereign Overviews (7 Archetypes):** Comprehensive situational topologies and multi-metric command cockpits operating as single-step sovereign views ($1$ step).

```
+---------------------------------------------------------------------------------------------------+
|               SUITE 2032 ARCHITECTURAL PILLARS & FOUNDATIONAL TENETS                              |
+---------------------------------------------------------------------------------------------------+
| PILLAR 1: Strict 60/30/10 Visual Spatial Balance & Light-Theme Slab Elimination                   |
| 60% dominant canvas wash, 30% structural glassmorphic cards, <=10% high-energy focal accents.      |
| Enforces translucent ivory cards (rgba(255, 255, 255, 0.94)) on light themes; zero dark slabs.   |
|---------------------------------------------------------------------------------------------------|
| PILLAR 2: 4-Plane Depth & Spatial Elevation Hierarchy                                             |
| Non-overlapping vertical stratification: Plane 0 (Canvas Base z:0), Plane 1 (Raised Bento z:10),  |
| Plane 2 (Elevated Focal Active Step z:20 with 1.02x scale and halo), and Plane 3 (Floating HUD).  |
|---------------------------------------------------------------------------------------------------|
| PILLAR 3: Northern UI/UX Typography Standard v1.3.3 with Inviolable 14px Floor                    |
| Tripartite font family hierarchy: 'Ubuntu' display, 'Poppins' body, 'JetBrains Mono' telemetry.   |
| Absolute physical floor >= 14px on 1080p canvas. Pure DOM live text: zero rasterized bitmaps.     |
|---------------------------------------------------------------------------------------------------|
| PILLAR 4: Zero Yellow-on-Light Contrast Rule & Semantic Color Tokens                              |
| Enforces WCAG AA contrast (CR >= 4.5:1). Yellow/amber accents automatically invert to deep amber  |
| (hsl(28 95% 26%)) or slate ink on light backgrounds to guarantee legibility.                     |
|---------------------------------------------------------------------------------------------------|
| PILLAR 5: GPU Motion Kinetics & Micro-Physics Engine                                              |
| 4 signature hardware-accelerated animations (waterfallBridgeFlow, flywheelOrbitalSpin,            |
| sparklineTrace, terminalCursorPulse) coupled with harmonic spring physics (k=420 N/m, c=28 N·s/m).|
|---------------------------------------------------------------------------------------------------|
| PILLAR 6: Deterministic 3-Phase Kinetic Step Progression Lifecycle                                |
| Stepwise intra-slide disclosure: completed (0.75 opacity + checkmark), active (1.00 + 1.02x scale  |
| + halo glow), future (0.38 opacity + 1.25px optical blur). Zero phantom steps guaranteed.         |
|---------------------------------------------------------------------------------------------------|
| PILLAR 7: High-Fidelity Print & Headless PDF Presentation Export Architecture                     |
| First-class @media print rules with exact 1920x1080 landscape page dimensions, HUD chrome         |
| suppression, and crisp vector typography preservation for uncompromised PDF rendering.           |
+---------------------------------------------------------------------------------------------------+
```

---

## 2. Spatial Balance & 4-Plane Depth Hierarchy

### 2.1 The 60/30/10 Ratio
Every Suite 2032 slide layout strictly allocates visual mass:
- **60% Dominant Base Wash (Plane 0):** Background canvas gradient (`var(--pres-bg-canvas)`), establishing spatial context without visual noise.
- **30% Structural Panels (Plane 1):** Translucent glassmorphism surfaces (`var(--pres-bg-card)`), providing bento-grid containment with subtle hairline borders (`1px solid var(--pres-border)`).
- **10% Focal Accents (Plane 2):** High-salience key elements (`var(--pres-accent)`), badge kickers, active step indicators, and animated data flows.

### 2.2 4-Plane Depth Matrix
```
+---------+--------------------+-----------------------------+------------------------------------+
| Plane   | Layer Name         | Elevation / z-Index         | Visual Treatment & Styling         |
+---------+--------------------+-----------------------------+------------------------------------+
| Plane 0 | Canvas Ground      | z: 0 (Base)                 | Ambient gradient, organic wave     |
| Plane 1 | Raised Bento Panel | z: 10, shadow: 0 8px 30px   | Glass backdrop-filter: blur(12px)  |
| Plane 2 | Elevated Active    | z: 20, scale: 1.02x         | Accent halo glow: 0 0 24px -2px    |
| Plane 3 | Floating HUD       | z: 50+, backdrop blur 20px  | Dark chrome control overlay        |
+---------+--------------------+-----------------------------+------------------------------------+
```

---

## 3. Pure DOM Live Typography & Coordinate System

### 3.1 1920x1080 Virtual Canvas Architecture
The presentation canvas is locked to a reference frame of $1920\text{px} \times 1080\text{px}$ ($16:9$).
- Responsive scaling is executed via CSS transform scale matrix anchored to `transform-origin: center center`.
- Safe margin: $48\text{px}$ perimeter inset ($x \in [48, 1872]$, $y \in [48, 1032]$).
- Header zone: $y \in [48, 180]$ (kicker, title, subtitle, metadata).
- Content zone: $y \in [200, 980]$ (bento grids, telemetry streams, stage cards).
- Footer / navigation zone: $y \in [1000, 1040]$.

### 3.2 Northern UI/UX Typography Standard v1.3.3
- **Display Headings:** `'Ubuntu', sans-serif`, weight 700, size $44\text{px} - 56\text{px}$, line-height 1.15.
- **Subtitles & Body:** `'Poppins', sans-serif`, weight 400/500, size $16\text{px} - 22\text{px}$, line-height 1.5.
- **Telemetry & Labels:** `'JetBrains Mono', monospace`, weight 600, size $14\text{px} - 16\text{px}$, letter-spacing `0.06em`.
- **Inviolable Floor:** No text element may render at less than $14\text{px}$ on the $1080\text{p}$ reference canvas.
- **Live DOM Mandate:** Zero canvas 2D bitmap text or rasterized snapshot typography.

---

## 4. Theme System & Zero Yellow-on-Light Rule

### 4.1 Canonical Palette Contract
Theme tokens are declared in space-separated HSL channels (`--pres-accent-hsl: 262 83% 58%`), allowing variable opacity compositions:
```css
color: hsl(var(--pres-accent-hsl) / 0.95);
background: hsl(var(--pres-accent-hsl) / 0.12);
border-color: hsl(var(--pres-accent-hsl) / 0.28);
```

### 4.2 Zero Yellow-on-Light Contrast Rule
On light themes (`white-brand`, `corporate-clean`, `paper-editorial`, `sapphire-executive-light`, `archival-monaco-cream`):
- Pure yellow (`hsl(45-55, 100%, 50%)`) has insufficient contrast against light backgrounds ($< 2.0:1$).
- Light-theme contrast auto-inversion replaces low-contrast yellow with deep amber-brown (`hsl(28 95% 26%)`) or slate ink (`hsl(222 47% 11%)`), ensuring compliance with WCAG AA ($CR \ge 4.5:1$).

---

## 5. GPU Motion Kinetics & Micro-Physics

Suite 2032 introduces 4 specialized GPU keyframe animations in `src/styles/animations.less`:

```less
// 1. Waterfall bridge flow for cross-border liquidity and routing
@keyframes waterfallBridgeFlow {
  0% { stroke-dashoffset: 160; background-position: 0% 50%; filter: drop-shadow(0 0 2px var(--pres-accent)); }
  50% { stroke-dashoffset: 80; background-position: 100% 50%; filter: drop-shadow(0 0 10px var(--pres-accent)); }
  100% { stroke-dashoffset: 0; background-position: 200% 50%; filter: drop-shadow(0 0 2px var(--pres-accent)); }
}

// 2. Flywheel orbital rotation for continuous data feedback loops
@keyframes flywheelOrbitalSpin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

// 3. Sparkline trace for high-frequency telemetry and sensor streams
@keyframes sparklineTrace {
  0% { stroke-dashoffset: 300; opacity: 0.3; }
  50% { opacity: 1; filter: drop-shadow(0 0 6px var(--pres-accent)); }
  100% { stroke-dashoffset: 0; opacity: 0.85; }
}

// 4. Terminal cursor pulse for agentic CLI and execution environments
@keyframes terminalCursorPulse {
  0%, 100% { opacity: 1; box-shadow: 0 0 8px var(--pres-accent); }
  50% { opacity: 0; box-shadow: none; }
}
```

These are accompanied by utility classes `.animate-waterfall-bridge`, `.animate-flywheel-spin`, `.animate-sparkline-trace`, and `.animate-terminal-cursor-pulse`, all operating with `will-change` hardware acceleration.

---

## 6. Deterministic 3-Phase Kinetic Step Progression

Multi-step slides evaluate child cards against `activeStep` (1-indexed):

```typescript
export function getStepPhase(cardStep: number, activeStep: number): 'completed' | 'active' | 'future' {
  if (cardStep < activeStep) return 'completed';
  if (cardStep === activeStep) return 'active';
  return 'future';
}
```

- **`completed`:** Opacity $0.75$, settled transform, checkmark badge, subdued border ink.
- **`active`:** Opacity $1.00$, scale $1.02\text{x}$, accent halo glow (`0 0 24px -2px var(--pres-accent-glow)`), vibrant border.
- **`future`:** Opacity $0.38$, optical blur $1.25\text{px}$, grayscale tint $20\%$, ghost border.

---

## 7. Print & PDF Presentation Export Architecture

The PDF export subsystem in `src/styles/presentation.less` ensures flawless output:
1. `@page { size: 1920px 1080px; margin: 0; }` enforces 16:9 slide aspect ratio.
2. `print-color-adjust: exact !important;` prevents browsers from stripping canvas backgrounds.
3. Interactive overlays (`.hud-chrome`, `.presenter-hud`, `.builder-panel`, `.camera-overlay`) are removed via `display: none !important`.
4. Stage cards snap to static dimensions with animations suppressed for crisp vector rendering.
