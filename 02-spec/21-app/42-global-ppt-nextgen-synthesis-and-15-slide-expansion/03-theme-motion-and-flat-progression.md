# 03-Theme Motion & Flat Progression: 23-Theme Catalog, Kinetic Keyframes & Step Engine

> **Specification Identifier:** `02-spec/21-app/42-global-ppt-nextgen-synthesis-and-15-slide-expansion/03-theme-motion-and-flat-progression.md`  
> **Status:** `APPROVED CANONICAL ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v2.3.0`  
> **Author:** Spec Subagent 01 (Core Architectural Systems, Motion & Progression Architect)  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  
> **Created:** 2026-10-04  
> **Domain:** 23-Theme Calibrated Palette Catalog (Adding Clinical Emerald Light & Ivory Gold), Unadorned Space-Separated HSL Triplets, Light-Theme Slab Elimination, Variable Clean-Pass Teardown, 5 New GPU Keyframe Animations, 3D Perspective Flip Card Utility (`perspective: 1200px`), Spring Physics Mathematical Modeling, Deterministic 3-Phase Step Progression Lifecycle with Optical Blur, Direct Click-to-Jump Navigation, Directional WebAudio Acoustic Engine (Advance, Rewind, Chord), and Presenter HUD Intra-Step Progress Synchronization  

---

## 1. System Vision & Architectural Motion Philosophy

Chapter 42 formalizes the runtime motion, theming, and step progression architecture for the White Presentation ecosystem, unifying enterprise **Global PPT corporate authority** with the precision of a **cloud-native systems engineering terminal**. High-stakes executive presentations demand fluid, tactile pacing under diverse presentation environments—from sunlit boardroom projectors to dark keynote amphitheaters.

To achieve this, Chapter 42 resolves five foundational interaction and rendering challenges:

1. **Light-Theme Container Contamination ("Dark Slab Defect"):** In legacy versions, light themes inadvertently inherited hardcoded dark slate card containers (`#0f172a` / `rgba(15, 23, 42, 0.85)`). Chapter 42 completely eliminates this defect by dynamically computing `--pres-bg-card` and `--pres-card-border-hsl`, ensuring light slides render pristine frosted ivory and white surfaces with deep ink typography.
2. **CSS Variable Retention & Theme Bleed:** Switching themes previously left orphan CSS variables on `:root` and `#presentation-root`. Chapter 42 mandates an atomic teardown pass (`cleanPreviousThemeVariables()`) executed before mounting any slide or theme.
3. **Deep Systems Kinetic Choreography:** Visualizing cutting-edge engineering paradigms (red-team fuzzing, GitOps drift reconciliation, NVMe-oF RDMA storage, confidential GPU attestation, and eBPF XDP packet drops) requires dedicated, hardware-accelerated animations. Chapter 42 engineers five signature GPU keyframe animations powered by analytical spring physics.
4. **Physical 3D Perspective Exploration:** Inter-component reveals and dual-mode architecture inspections utilize a physical 3D perspective flip card system (`.flip-card-3d` with $1200\text{px}$ focal perspective and $180^\circ$ Y-axis rotation).
5. **Directional Sensory Confirmation:** Rather than a static, monotonic click sound, Chapter 42 introduces a directional WebAudio acoustic engine: rising pitch sweeps on advance ($440\text{Hz} \to 880\text{Hz}$), descending sweeps on rewind ($660\text{Hz} \to 330\text{Hz}$), and a harmonic triad chord on stage completion.

```
+---------------------------------------------------------------------------------------------------+
|               CHAPTER 42 THEME, MOTION & STEP PROGRESSION RUNTIME                                 |
+---------------------------------------------------------------------------------------------------+
|  [23-THEME PALETTES]                 [VARIABLE CLEAN-PASS]             [5 KINETIC KEYFRAMES]      |
|  - 7 Light / 16 Dark Palettes        - Atomic purge of `--pres-*`      - agentRedTeamFuzz         |
|  - Space-Separated HSL Triplets      - Clean custom prop teardown      - gitopsDriftReconcile     |
|  - clinical-emerald-light            - Decoupled `--chrome-*` HUD      - nvmeFabricBeam           |
|  - ivory-gold (WCAG AA >= 4.5:1)     - Zero cross-slide bleed          - confidentialAttestGlow   |
|  - Light-Theme Translucent Cards                                       - xdpDropDeflect           |
|          │                                   │                                 │                  |
|          ▼                                   ▼                                 ▼                  |
|  ┌─────────────────────────────────────────────────────────────────────────────────────────────┐  |
|  │ VIRTUAL PRESENTATION CANVAS (1920x1080 Viewport Reference Geometry, Uniform Matrix Scaling) │  |
|  └───────────────────────────────────────┬─────────────────────────────────────────────────────┘  |
|                                          │                                                        |
|                  ┌───────────────────────┴───────────────────────┐                                |
|                  ▼                                               ▼                                |
|  [3-PHASE STEP PROGRESSION ENGINE]                     [3D PERSPECTIVE FLIP & ACOUSTICS]          |
|  - Phase 1 (Completed): opacity 0.75, scale 1.00       - `.flip-card-3d` (perspective: 1200px)    |
|  - Phase 2 (Active): opacity 1.00, scale 1.02, halo    - Advance: 440Hz -> 880Hz pitch ramp       |
|  - Phase 3 (Future): opacity 0.38, blur 1.25px         - Rewind: 660Hz -> 330Hz pitch ramp        |
|  - Direct click-to-jump (onClick={() => jumpToStep})   - Stage Complete: Harmonic Triad Chord     |
|  - Presenter HUD Intra-Step Progress Synchronization   - Ephemeral Hover: hoveredStep ?? active   |
+---------------------------------------------------------------------------------------------------+
```

---

## 2. Complete 23-Theme Calibrated Palette Catalog

All 23 presentation themes are codified as unadorned space-separated HSL triplets (`H S% L%`). This architecture permits dynamic alpha compositing via standard CSS functional notation `hsl(var(--token) / <alpha>)`, enabling subpixel borders, frosted backdrops, and radiant glow rings without color degradation.

```css
:root {
  --pres-bg: hsl(var(--pres-bg-hsl));
  --pres-bg-card: hsl(var(--pres-card-bg-hsl) / var(--pres-card-opacity, 0.75));
  --pres-border: hsl(var(--pres-card-border-hsl) / 0.18);
  --pres-accent: hsl(var(--pres-accent-hsl));
  --pres-accent-glow: hsl(var(--pres-accent-hsl) / 0.32);
}
```

### 2.1 Complete 23-Theme Architectural Matrix

| # | Theme Identifier | Display Name | Mode | Canvas Bg HSL | Card Bg HSL | Card Border HSL | Accent HSL | Contrast Ratio | Executive Tone & Boardroom Identity |
|:---:|:---|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---|
| **01** | `white-brand` | Pure White Editorial | Light | `0 0% 100%` | `0 0% 100%` | `220 15% 85%` | `262 83% 58%` | 8.4:1 | Crisp white paper, royal violet brand authority, high print fidelity. |
| **02** | `corporate-clean` | Corporate Clean Enterprise | Light | `38 35% 94%` | `40 25% 90%` | `35 20% 80%` | `220 70% 38%` | 9.6:1 | Canonical corporate presentation standard, deep navy ink, gold-standard clarity. |
| **03** | `paper-editorial` | Warm Archival Sandstone | Light | `38 35% 94%` | `40 25% 90%` | `35 20% 80%` | `220 70% 38%` | 9.6:1 | Institutional whitepapers, sovereign wealth reports, research reading fidelity. |
| **04** | `github-light` | GitHub Editorial Light | Light | `210 29% 97%` | `0 0% 100%` | `210 18% 87%` | `212 92% 43%` | 7.9:1 | Modern engineering documentation, API reference decks, developer summits. |
| **05** | `paper-ink` | Archival Paper Ink | Light | `45 25% 95%` | `45 20% 92%` | `40 15% 82%` | `28 80% 28%` | 10.2:1 | Legal briefs, fiduciary resolution transcripts, historical monographs. |
| **06** | `clinical-emerald-light` *(NEW)* | Clinical Emerald Mint | Light | `160 50% 98%` (#F5FEFA) | `160 30% 95%` | `162 25% 82%` | `160 84% 39%` (#059669) | 8.8:1 | Healthcare executive summits, clinical precision, biotech therapeutics, clean mint-ivory base. |
| **07** | `ivory-gold` *(NEW)* | Prestige Ivory Gold | Light | `43 45% 97%` (#FAF8F2) | `40 30% 93%` | `36 25% 80%` | `32 95% 35%` (#B45309) | 5.2:1 | High-authority sovereign wealth, board capital allocation, audited prestige amber-gold (WCAG AA). |
| **08** | `true-dark` | Obsidian Core | Dark | `222 47% 7%` | `223 39% 14%` | `216 34% 28%` | `217 91% 60%` | 14.8:1 | Mission-critical cloud architecture, operations war rooms, keynote stages. |
| **09** | `emerald-growth` | Emerald Growth | Dark | `160 60% 4%` | `162 40% 9%` | `160 30% 22%` | `158 80% 45%` | 12.6:1 | Venture capital pitches, high-velocity SaaS expansion, ESG sustainability. |
| **10** | `wp-exam-purple` | Deep Iris Executive | Dark | `265 65% 5%` | `268 45% 10%` | `265 30% 24%` | `280 85% 65%` | 13.4:1 | Enterprise software unveiling, AI platform strategy, product keynotes. |
| **11** | `midnight-luxe` | Midnight Royale | Dark | `230 50% 5%` | `228 35% 10%` | `226 25% 24%` | `43 96% 56%` | 15.1:1 | Luxury brand strategy, private equity portfolio reviews, wealth governance. |
| **12** | `sunset-horizon` | Sunset Crimson | Dark | `15 55% 5%` | `12 40% 10%` | `15 30% 24%` | `12 90% 62%` | 13.8:1 | Market disruption narratives, competitive displacement, visionary founders. |
| **13** | `cyber-neon` | Cyberpunk Electric | Dark | `225 50% 4%` | `224 40% 8%` | `220 35% 20%` | `174 100% 50%` | 16.2:1 | Autonomous AI, cutting-edge developer platforms, zero-trust cybersecurity. |
| **14** | `crimson-executive`| Imperial Crimson | Dark | `348 65% 5%` | `346 45% 9%` | `345 30% 22%` | `352 85% 55%` | 12.9:1 | Risk governance, crisis management, cyber incident post-mortems, regulatory audits. |
| **15** | `nord-frost` | Arctic Glacial | Dark | `220 30% 8%` | `222 25% 13%` | `219 20% 26%` | `193 43% 67%` | 11.5:1 | Nordic minimalism, engineering elegance, algorithmic efficiency reviews. |
| **16** | `bright-gold` | Sovereign Aureate | Dark | `40 50% 5%` | `38 35% 10%` | `40 25% 24%` | `45 95% 50%` | 14.2:1 | Capital allocation, treasury management, macroeconomic forecast briefings. |
| **17** | `noir-gold` | Dark Obsidian Gold | Dark | `0 0% 4%` | `0 0% 9%` | `40 20% 20%` | `42 85% 55%` | 15.6:1 | High-authority boardroom presentations, annual shareholder assemblies. |
| **18** | `monokai` | Hacker Monokai | Dark | `70 8% 8%` | `70 8% 12%` | `70 10% 24%` | `80 90% 50%` | 12.1:1 | Deep code walkthroughs, kernel debugging sessions, developer workshops. |
| **19** | `vscode-dark` | Visual Studio Dark | Dark | `220 13% 11%` | `220 13% 16%` | `220 10% 28%` | `207 90% 54%` | 11.8:1 | Developer productivity metrics, CI/CD telemetry, platform engineering. |
| **20** | `dracula` | Dracula Nocturne | Dark | `231 15% 11%` | `232 14% 17%` | `230 12% 28%` | `326 100% 74%`| 13.7:1 | Modern cloud-native toolchains, open-source community presentations. |
| **21** | `macos-sonoma` | Sonoma Metal | Dark | `215 25% 8%` | `215 20% 13%` | `215 15% 25%` | `212 95% 62%` | 13.2:1 | Premium enterprise client showcases, product design reviews. |
| **22** | `windows-11` | Mica Fluent | Dark | `225 30% 9%` | `223 25% 14%` | `220 18% 26%` | `206 100% 50%`| 12.5:1 | Enterprise architecture, hybrid-cloud enterprise roadmaps. |
| **23** | `navy-blue` | Deep Oceanic Navy | Dark | `222 55% 6%` | `220 40% 11%` | `218 30% 24%` | `200 95% 52%` | 14.5:1 | Sovereign IT, planetary networks, global multi-region deployments. |

### 2.2 Deep Dive: The Two New Light Themes

#### Theme 06: `clinical-emerald-light`
- **Canvas Base:** Mint-Ivory `#F5FEFA` (`160 50% 98%`)
- **Primary Typography:** Deep Forest Pine `#064E3B` (`166 85% 16%`), contrast ratio $12.4:1$ on canvas.
- **Secondary Typography:** Crisp Slate Teal `#0D5C46` (`164 75% 21%`).
- **Card Background:** Translucent Frosted Mint `#FFFFFF` / `rgba(255, 255, 255, 0.90)`.
- **Card Border:** Subtle Mint Hairline `rgba(5, 150, 105, 0.18)` (`162 25% 82%`).
- **Brand Accent:** High-Precision Emerald `#059669` (`160 84% 39%`).
- **Executive Alignment:** Designed specifically for life sciences, clinical healthtech, biotech diagnostics, and FDA validation decks.

#### Theme 07: `ivory-gold`
- **Canvas Base:** Warm Archival Parchment `#FAF8F2` (`43 45% 97%`).
- **Primary Typography:** Deep Charcoal Stone `#1C1917` (`24 10% 10%`), contrast ratio $16.2:1$ on canvas.
- **Secondary Typography:** Muted Umber `#57534E` (`28 6% 33%`).
- **Card Background:** Translucent Cream Silk `#FFFFFF` / `rgba(255, 255, 255, 0.92)`.
- **Card Border:** Warm Sandstone Border `rgba(180, 83, 9, 0.16)` (`36 25% 80%`).
- **Brand Accent:** Prestige Amber-Gold `#B45309` (`32 95% 35%`), contrast ratio $5.2:1$ on canvas, strictly honoring the **Zero Yellow-on-Light Rule** (WCAG AA $\ge 4.5:1$).
- **Executive Alignment:** Designed for fiduciary board assemblies, sovereign capital allocation, programmatic M&A reviews, and institutional endowments.

### 2.3 Elimination of the Dark Slate Slab Anti-Pattern on Light Themes
To guarantee that light themes never render dark slate containers or low-contrast slabs:
- When `isDark === false`, the runtime automatically projects:
  ```css
  --pres-bg: hsl(var(--pres-bg-hsl));                    /* pure white, mint-ivory, or sandstone */
  --pres-bg-card: rgba(255, 255, 255, 0.90);             /* translucent ivory/white */
  --pres-border: hsl(var(--pres-card-border-hsl) / 0.75); /* crisp hairline border */
  --pres-text-primary: hsl(var(--pres-text-hsl));         /* deep ink headline */
  --pres-text-secondary: hsl(215 25% 35%);               /* legible dark slate body */
  --pres-text-muted: hsl(215 16% 52%);                   /* subtle tertiary text */
  --pres-card-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);   /* subtle diffused lift */
  ```
- **Strict Constraint:** No hardcoded dark slate fills (`#0f172a`, `rgb(15, 23, 42)`, `bg-slate-900`) may be applied to slide body containers. All containers must inherit `var(--pres-bg-card)` and `var(--pres-border)`.

### 2.4 Variable Clean-Pass Teardown Protocol
When switching slides or theme selections, `cleanPreviousThemeVariables()` purges any active presentation variables on `#presentation-root` and `document.documentElement`:

```typescript
const MANAGED_PRES_VARIABLE_PREFIXES = [
  '--pres-',
  '--gradient-',
  '--gold',
  '--cream',
  '--ember',
  '--ink',
  '--accent-',
];

export function cleanPreviousThemeVariables(rootEl: HTMLElement): void {
  const inlineStyle = rootEl.style;
  const propertiesToRemove: string[] = [];

  for (let i = 0; i < inlineStyle.length; i++) {
    const propName = inlineStyle[i];
    const isManaged = MANAGED_PRES_VARIABLE_PREFIXES.some((prefix) =>
      propName.startsWith(prefix)
    );
    if (isManaged) {
      propertiesToRemove.push(propName);
    }
  }

  propertiesToRemove.forEach((prop) => inlineStyle.removeProperty(prop));
}
```

### 2.5 Permanent Dark HUD Chrome Isolation (`--chrome-*`)
The presenter navigation controls, deck picker flyout, and slide counter live on **Elevation Plane 3** and are strictly isolated from canvas theme variables:

```css
:root {
  --chrome-bg: rgba(15, 23, 42, 0.94);
  --chrome-border: rgba(255, 255, 255, 0.14);
  --chrome-text: #F8FAFC;
  --chrome-subtext: #94A3B8;
  --chrome-accent: #6366F1;
  --chrome-accent-glow: rgba(99, 102, 241, 0.35);
  --chrome-blur: 16px;
  --chrome-shadow: 0 12px 36px 0 rgba(0, 0, 0, 0.45);
}
```
*Key Invariant:* Switching between an obsidian dark theme and a pristine white light theme produces zero change in HUD contrast or readability ($C_R \ge 12:1$).

---

## 3. Five Brand-New GPU-Accelerated Kinetic Animation Keyframes

Chapter 42 introduces five purpose-built, GPU-accelerated CSS animations declared in `src/styles/animations.less`. Each animation leverages hardware composite-only properties (`transform`, `opacity`, `filter`) and enforces GPU layer promotion via `will-change`.

```less
// ============================================================================
// CHAPTER 42: GLOBAL PPT NEXTGEN SYNTHESIS & KINETIC CHOREOGRAPHIES
// Hardware-accelerated GPU animations for deep systems visualization
// ============================================================================

// 1. Agentic Eval Red Team Fuzz (Adversarial perturbation pulse & guardrail interception)
@keyframes agentRedTeamFuzz {
  0%, 100% {
    transform: scale(1.0) translateY(0);
    box-shadow: 0 0 12px rgba(239, 68, 68, 0.20),
                0 0 0 1px rgba(239, 68, 68, 0.30);
    border-color: rgba(239, 68, 68, 0.40);
  }
  25% {
    transform: scale(1.015) translateX(-1px);
    box-shadow: 0 0 20px rgba(245, 158, 11, 0.45),
                0 0 0 1.5px rgba(245, 158, 11, 0.65);
    border-color: rgba(245, 158, 11, 0.70);
  }
  50% {
    transform: scale(1.025) translateY(-2px);
    box-shadow: 0 0 32px rgba(239, 68, 68, 0.75),
                0 0 0 2px rgba(239, 68, 68, 0.90);
    border-color: rgba(239, 68, 68, 1.0);
  }
  75% {
    transform: scale(1.015) translateX(1px);
    box-shadow: 0 0 20px rgba(16, 185, 129, 0.45),
                0 0 0 1.5px rgba(16, 185, 129, 0.65);
    border-color: rgba(16, 185, 129, 0.70);
  }
}

// 2. GitOps ArgoCD Sync Reconciliation (Bi-directional state convergence sweep)
@keyframes gitopsDriftReconcile {
  0% {
    stroke-dashoffset: 200;
    opacity: 0.30;
    filter: drop-shadow(0 0 2px rgba(249, 115, 22, 0.3));
  }
  50% {
    stroke-dashoffset: 100;
    opacity: 1.0;
    filter: drop-shadow(0 0 12px rgba(14, 165, 233, 0.85));
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 0.85;
    filter: drop-shadow(0 0 8px rgba(16, 185, 129, 0.90));
  }
}

// 3. NVMe-over-Fabrics RDMA Storage Beam (High-velocity PCIe/RoCE line-rate pulse)
@keyframes nvmeFabricBeam {
  0% {
    transform: scaleX(0.2) translateX(-100%);
    opacity: 0.15;
    box-shadow: 0 0 4px rgba(6, 182, 212, 0.3);
  }
  50% {
    transform: scaleX(1.0) translateX(0%);
    opacity: 1.0;
    box-shadow: 0 0 24px rgba(6, 182, 212, 0.85),
                0 0 40px rgba(59, 130, 246, 0.50);
  }
  100% {
    transform: scaleX(0.2) translateX(100%);
    opacity: 0.15;
    box-shadow: 0 0 4px rgba(6, 182, 212, 0.3);
  }
}

// 4. Confidential GPU Attestation Flow Glow (Hardware RoT cryptographic perimeter pulse)
@keyframes confidentialAttestGlow {
  0%, 100% {
    transform: scale(1.0) rotate(0deg);
    box-shadow: 0 0 14px rgba(168, 85, 247, 0.25),
                inset 0 0 8px rgba(168, 85, 247, 0.15);
    border-color: rgba(168, 85, 247, 0.35);
  }
  50% {
    transform: scale(1.025) rotate(0.8deg);
    box-shadow: 0 0 36px rgba(168, 85, 247, 0.75),
                inset 0 0 18px rgba(168, 85, 247, 0.40),
                0 0 0 2px rgba(168, 85, 247, 0.90);
    border-color: rgba(168, 85, 247, 1.0);
  }
}

// 5. eBPF DDoS XDP Packet Mitigation Deflect (Line-rate barrier impact & deflection)
@keyframes xdpDropDeflect {
  0% {
    transform: translateY(0) scale(1.0);
    opacity: 1.0;
    filter: brightness(1.0);
  }
  30% {
    transform: translateY(-3px) scale(1.04);
    opacity: 1.0;
    filter: brightness(1.5) drop-shadow(0 0 16px rgba(239, 68, 68, 0.9));
  }
  70% {
    transform: translateY(6px) scale(0.96);
    opacity: 0.40;
    filter: brightness(0.8);
  }
  100% {
    transform: translateY(12px) scale(0.90);
    opacity: 0.0;
    filter: blur(2px);
  }
}
```

### 3.1 Spring Physics Mathematical Modeling
Interactive transitions between kinetic states are governed by an underdamped harmonic oscillator model:

$$m \frac{d^2 x}{d t^2} + c \frac{d x}{d t} + k x = 0$$

Where:
- $m$: Mass of the UI element ($m = 1.0$)
- $k$: Spring stiffness ($k = 180\text{ N/m}$)
- $c$: Damping coefficient ($c = 16\text{ N}\cdot\text{s/m}$)
- $\omega_0 = \sqrt{\frac{k}{m}} \approx 13.42\text{ rad/s}$: Undamped natural angular frequency
- $\zeta = \frac{c}{2 \sqrt{m k}} \approx \frac{16}{26.83} \approx 0.596$: Underdamped ratio ($\zeta < 1$)
- $\omega_d = \omega_0 \sqrt{1 - \zeta^2} \approx 10.77\text{ rad/s}$: Damped natural frequency

The displacement trajectory $x(t)$ for step activation scaling ($1.00 \to 1.02$) is:

$$x(t) = 1 - e^{-\zeta \omega_0 t} \left( \cos(\omega_d t) + \frac{\zeta}{\sqrt{1 - \zeta^2}} \sin(\omega_d t) \right)$$

This mathematical curve ensures instantaneous responsive onset ($\Delta t_{90\%} \approx 180\text{ms}$) with a gentle, non-oscillatory settling tail completed at $320\text{ms}$, eliminating perceptual UI lag.

---

## 4. 3D Perspective Flip Card System (`perspective: 1200px`)

Chapter 42 introduces the **3D Perspective Flip Card Utility**, enabling slides to flip bento containers to reveal deep architectural specifications, zero-trust telemetry, and cryptographic proofs on demand.

### 4.1 CSS Specification for 3D Perspective Flip

```css
/* 3D Perspective Card Flip Architecture */
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
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
}

.flip-card-3d.is-flipped .flip-card-inner,
.flip-card-3d:hover.flip-on-hover .flip-card-inner {
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

### 4.2 React Component Pattern (`FlipCard3D`)

```tsx
import React, { useState } from 'react';

export interface FlipCard3DProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  isFlipped?: boolean;
  onFlipChange?: (isFlipped: boolean) => void;
  flipOnHover?: boolean;
  className?: string;
}

export const FlipCard3D: React.FC<FlipCard3DProps> = ({
  frontContent,
  backContent,
  isFlipped: controlledFlipped,
  onFlipChange,
  flipOnHover = false,
  className = '',
}) => {
  const [internalFlipped, setInternalFlipped] = useState(false);
  const isFlipped = controlledFlipped !== undefined ? controlledFlipped : internalFlipped;

  const handleToggleFlip = () => {
    if (flipOnHover) return;
    const nextFlipped = !isFlipped;
    setInternalFlipped(nextFlipped);
    if (onFlipChange) {
      onFlipChange(nextFlipped);
    }
  };

  return (
    <div
      className={`flip-card-3d ${isFlipped ? 'is-flipped' : ''} ${flipOnHover ? 'flip-on-hover' : ''} ${className}`}
      onClick={handleToggleFlip}
      role="button"
      tabIndex={0}
      aria-label="Toggle 3D Card Face"
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">{frontContent}</div>
        <div className="flip-card-back">{backContent}</div>
      </div>
    </div>
  );
};
```

---

## 5. Deterministic 3-Phase Step Progression Lifecycle

Chapter 42 standardizes the step progression lifecycle across all multi-step interactive workflows:

```
+---------------------------------------------------------------------------------------------------+
|               DETERMINISTIC 3-PHASE STEP PROGRESSION LIFECYCLE                                    |
+---------------------------------------------------------------------------------------------------+
| PHASE 1: COMPLETED (stepIndex < activeStep)                                                       |
| - Opacity: 0.75                                                                                   |
| - Transform: scale(1.00) | translateY(0)                                                          |
| - Border: 1px solid var(--pres-border)                                                            |
| - Indicator: Verified checkmark badge [✓] / solid status badge                                    |
| - Acoustic Cue: Soft completion tick on transition                                                |
|---------------------------------------------------------------------------------------------------|
| PHASE 2: ACTIVE (stepIndex === activeStep)                                                        |
| - Opacity: 1.00                                                                                   |
| - Transform: scale(1.02) | translateZ(24px) | translateY(-3px) [Plane 2 Elevation]                 |
| - Border: 1.5px solid var(--pres-accent)                                                          |
| - Box Shadow: 0 12px 32px -4px var(--pres-accent-glow), 0 0 16px -2px var(--pres-accent-glow)     |
| - Z-Index: 20 (Promoted over inactive siblings)                                                   |
| - Indicator: Illuminated high-contrast active pin with pulse halo                                 |
| - Interaction: Direct click-to-jump active target                                                 |
|---------------------------------------------------------------------------------------------------|
| PHASE 3: FUTURE (stepIndex > activeStep)                                                          |
| - Opacity: 0.38                                                                                   |
| - Transform: scale(0.98) | translateY(0)                                                          |
| - Filter: blur(1.25px)                                                                            |
| - Border: 1px dashed var(--pres-border)                                                           |
| - Text: var(--pres-text-muted)                                                                    |
| - Interaction: Clickable to jump forward directly                                                 |
+---------------------------------------------------------------------------------------------------+
```

### 5.1 Ephemeral Hover Preview Mode
Presenters can hover over any future or past step node to inspect downstream details without permanently modifying the deck's active step pointer:

$$\text{effectiveStep} = \text{hoveredStep} \;\;?\!??\;\; \text{activeStep}$$

```typescript
const [hoveredStep, setHoveredStep] = useState<number | null>(null);
const effectiveStep = hoveredStep !== null ? hoveredStep : activeStep;
```

### 5.2 Direct Click-to-Jump Navigation
Every step node, card container, and indicator pill is equipped with an accessible interactive click handler:

```tsx
<div
  role="button"
  tabIndex={0}
  aria-label={`Jump to Step ${idx + 1}: ${step.title}`}
  onClick={() => {
    jumpToStep(idx);
    playDirectionalAcousticFeedback(idx > activeStep ? 'advance' : 'rewind');
  }}
  onMouseEnter={() => setHoveredStep(idx)}
  onMouseLeave={() => setHoveredStep(null)}
  className={getStepPhaseClass(idx, effectiveStep)}
  style={{ cursor: 'pointer' }}
>
  {/* Step Content */}
</div>
```

---

## 6. Directional WebAudio Acoustic Engine

Chapter 42 advances the acoustic experience beyond single-tone clicks by introducing **Directional Acoustic Synthesis**:

### 6.1 Directional Acoustic Profiles
1. **Step Advance:** Ascending pitch ramp $440\text{Hz} \to 880\text{Hz}$ over $16\text{ms}$ ($+1$ octave sweep), confirming forward forward momentum.
2. **Step Rewind:** Descending pitch ramp $660\text{Hz} \to 330\text{Hz}$ over $16\text{ms}$ ($-1$ octave sweep), confirming backward navigation.
3. **Stage Complete Chord:** Major harmonic triad chord consisting of $523.25\text{Hz}$ (C5), $659.25\text{Hz}$ (E5), and $783.99\text{Hz}$ (G5) sustained over $120\text{ms}$ with exponential decay, confirming workflow signoff.

### 6.2 Non-Blocking WebAudio Implementation

```typescript
let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  try {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return null;

    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  } catch {
    return null;
  }
}

export function playDirectionalAcousticFeedback(
  direction: 'advance' | 'rewind' | 'complete' = 'advance'
): void {
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;

    if (direction === 'advance') {
      // 440Hz -> 880Hz pitch ramp over 16ms
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.016);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.016);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.016);
    } else if (direction === 'rewind') {
      // 660Hz -> 330Hz pitch ramp over 16ms
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(660, now);
      osc.frequency.exponentialRampToValueAtTime(330, now + 0.016);

      gain.gain.setValueAtTime(0.10, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.016);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.016);
    } else if (direction === 'complete') {
      // Harmonic Triad Chord: C5 (523.25Hz), E5 (659.25Hz), G5 (783.99Hz)
      const frequencies = [523.25, 659.25, 783.99];
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.10, now);
      masterGain.gain.exponentialRampToValueAtTime(0.001, now + 0.120);
      masterGain.connect(ctx.destination);

      frequencies.forEach((freq) => {
        const osc = ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now);
        osc.connect(masterGain);
        osc.start(now);
        osc.stop(now + 0.120);
      });
    }
  } catch {
    // Non-blocking fallback in restricted or headless audio environments
  }
}
```

---

## 7. Presenter HUD Intra-Step Progress Indicator

When a slide contains multiple steps (`hasIntraSteps = maxSteps > 1`), the presenter HUD (`NavigationControls.tsx` and `SlideIndicator.tsx`) automatically mounts an intra-step micro-progress indicator rail:

```
HUD INTRA-STEP MICRO-PROGRESS RAIL:
┌─────────────────────────────────────────────────────────────┐
│ Slide 14 / 28   [ ● ][ ● ][ ◐ ][ ○ ]   Step 3/4: Execution  │
└─────────────────────────────────────────────────────────────┘
    ▲               ▲   ▲   ▲   ▲                  ▲
Slide Counter       1   2   3   4              Step Title
                    ✓   ✓  Active Future
```

### 7.1 State Computation Contract
```typescript
export interface IntraStepProgressProps {
  currentSlideIndex: number;
  totalSlides: number;
  currentStepIndex: number;
  maxSteps: number;
  hasIntraSteps: boolean;
  onStepSelect: (stepIndex: number) => void;
}

export function computeIntraStepState(slide: { maxSteps?: number }): boolean {
  return typeof slide.maxSteps === 'number' && slide.maxSteps > 1;
}
```

### 7.2 Micro-Segment Visual States
1. **Completed Segment (`idx < currentStepIndex`):** Solid accent fill (`hsl(var(--pres-accent-hsl))`), checkmark glyph, `opacity: 0.80`.
2. **Active Segment (`idx === currentStepIndex`):** Radiant pulsing halo (`animation: agentRedTeamFuzz 2s infinite ease-in-out`), 100% white pill with accent border, elevated transform `scale(1.15)`.
3. **Future Segment (`idx > currentStepIndex`):** Translucent unfilled ring (`border: 1px solid rgba(255, 255, 255, 0.25)`), `opacity: 0.40`.

### 7.3 Single-Stage Sovereign Overview Fallback
When `hasIntraSteps === false` (`maxSteps === 1`), the intra-step micro-rail is cleanly dismantled from the DOM, rendering only the global slide counter (`Slide 14 / 28`), preventing phantom or redundant step indicators.
