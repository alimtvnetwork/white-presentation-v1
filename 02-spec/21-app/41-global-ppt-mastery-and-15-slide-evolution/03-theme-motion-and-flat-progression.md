# 03-Theme Motion & Flat Progression: 20-Theme Catalog, Kinetic Keyframes & Step Engine

> **Specification Identifier:** `02-spec/21-app/41-global-ppt-mastery-and-15-slide-evolution/03-theme-motion-and-flat-progression.md`  
> **Status:** `APPROVED CANONICAL ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v2.2.0`  
> **Author:** Spec Subagent 02 (Motion, Progression & Quality Gates Architect)  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  
> **Created:** 2026-10-04  
> **Domain:** 20-Theme Calibrated Palette Catalog (4 Light, 16 Dark), Unadorned Space-Separated HSL Triplets, Light-Theme Slab Elimination, Variable Clean-Pass Teardown, 5 New Hardware-Accelerated Kinetic Keyframe Animations, Spring Physics Mathematical Modeling, Deterministic 3-Phase Step Progression Lifecycle, Direct Click-to-Jump Navigation, 1800Hz / 12ms WebAudio Acoustic Feedback, and Presenter HUD Intra-Step Progress Indicators  

---

## 1. System Vision & Architectural Motion Philosophy

Chapter 41 formalizes the runtime presentation architecture that unites enterprise Global PPT keynote authority with cloud-native system visualization. High-stakes executive and architectural presentations demand fluidity, precision, and optical legibility under diverse projection environments—from high-ambient-light boardrooms to immersive dark-mode auditoriums.

To achieve this, Chapter 41 addresses four foundational interaction and rendering challenges identified across previous presentation engines:

1. **Light-Theme Container Contamination ("Dark Slab Anti-Pattern"):** In legacy implementations, light themes frequently inherited hardcoded dark slate card containers (`rgba(15, 23, 42, 0.85)` or `#0f172a`), creating jarring visual discord. Chapter 41 strictly eliminates this defect by dynamically binding container fills to `--pres-bg-card` and `--pres-card-border-hsl`, ensuring light slides render pristine frosted ivory, paper, and white surfaces with deep ink typography.
2. **CSS Variable Retention & Theme Bleed:** Rapid slide transitions or palette swaps previously left orphan CSS variables on `:root` and `#presentation-root`. Chapter 41 mandates an atomic teardown pass (`cleanPreviousThemeVariables()`) executed before mounting any slide or theme.
3. **Rigid Step Traversal & Spatial Disconnect:** Linear-only slide progression forces presenters into rigid sequences. Chapter 41 formalizes direct click-to-jump step progression across all multi-step workflows (`onClick={() => jumpToStep(idx)}`), synchronized with synthesized 1800Hz / 12ms acoustic sine-wave feedback.
4. **Static Topology Representation:** Complex distributed paradigms (agentic DAGs, blue-green deployment shifts, post-quantum handshakes, platform portals, and ACID lakehouse lineage) require kinetic choreography. Chapter 41 introduces five signature GPU-accelerated CSS keyframe animations powered by analytical spring physics.

```
+---------------------------------------------------------------------------------------------------+
|               CHAPTER 41 THEME, MOTION & STEP PROGRESSION RUNTIME                                 |
+---------------------------------------------------------------------------------------------------+
|  [20-THEME PALETTES]                 [VARIABLE CLEAN-PASS]             [5 KINETIC KEYFRAMES]      |
|  - 4 Light / 16 Dark Palettes        - Atomic purge of `--pres-*`      - agentDagNodePulse        |
|  - Space-Separated HSL Triplets      - Clean custom prop teardown      - blueGreenTrafficShift    |
|  - Light-Theme Frosted Cards         - Decoupled `--chrome-*` HUD      - pqcHandshakeBeacon       |
|  - 'corporate-clean' Alias           - Zero cross-slide bleed          - idpGoldenPathTravel      |
|                                                                        - icebergBranchReveal      |
|          │                                   │                                 │                  |
|          ▼                                   ▼                                 ▼                  |
|  ┌─────────────────────────────────────────────────────────────────────────────────────────────┐  |
|  │ VIRTUAL PRESENTATION CANVAS (1920x1080 Viewport Reference Geometry, Uniform Matrix Scaling) │  |
|  └───────────────────────────────────────┬─────────────────────────────────────────────────────┘  |
|                                          │                                                        |
|                  ┌───────────────────────┴───────────────────────┐                                |
|                  ▼                                               ▼                                |
|  [3-PHASE STEP PROGRESSION ENGINE]                     [PRESENTER HUD INTRA-STEP SYNC]            |
|  - Phase 1 (Completed): opacity 0.75, scale 1.00       - `hasIntraSteps = maxSteps > 1`           |
|  - Phase 2 (Active): opacity 1.00, scale 1.02, halo    - Segmented micro-progress track           |
|  - Phase 3 (Future): opacity 0.38, blur 1.25px         - Real-time step counter: Step X/Y         |
|  - Hover Preview: effectiveStep = hovered ?? active    - Direct click-to-jump + WebAudio cue      |
+---------------------------------------------------------------------------------------------------+
```

---

## 2. Complete 20-Theme Palette Catalog Adaptation

All 20 presentation themes are codified as space-separated unadorned HSL triplets (`H S% L%`). This architecture permits dynamic alpha compositing via standard CSS functional notation `hsl(var(--token) / <alpha>)`, enabling subpixel borders, frosted backdrops, and radiant glow rings without color degradation.

```css
:root {
  --pres-bg: hsl(var(--pres-bg-hsl));
  --pres-bg-card: hsl(var(--pres-card-bg-hsl) / var(--pres-card-opacity, 0.72));
  --pres-border: hsl(var(--pres-card-border-hsl) / 0.18);
  --pres-accent: hsl(var(--pres-accent-hsl));
  --pres-accent-glow: hsl(var(--pres-accent-hsl) / 0.32);
}
```

### 2.1 Complete 20-Theme Architectural Matrix

| # | Theme Identifier | Display Name | Mode | Canvas Bg HSL | Card Bg HSL | Card Border HSL | Accent HSL | Contrast Ratio | Executive Tone & Boardroom Identity |
|:---:|:---|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---|
| **01** | `white-brand` | Pure White Editorial | Light | `0 0% 100%` | `0 0% 100%` | `220 15% 85%` | `262 83% 58%` | 8.4:1 | Crisp white paper, royal violet brand authority, high print fidelity. |
| **02** | `paper-editorial` | Warm Archival Sandstone | Light | `38 35% 94%` | `40 25% 90%` | `35 20% 80%` | `220 70% 38%` | 9.6:1 | Institutional whitepapers, sovereign wealth reports, research reading fidelity. |
| **03** | `github-light` | GitHub Editorial Light | Light | `210 29% 97%` | `0 0% 100%` | `210 18% 87%` | `212 92% 43%` | 7.9:1 | Modern engineering documentation, API reference decks, developer summits. |
| **04** | `paper-ink` | Archival Paper Ink | Light | `45 25% 95%` | `45 20% 92%` | `40 15% 82%` | `28 80% 28%` | 10.2:1 | Legal briefs, fiduciary resolution transcripts, historical monographs. |
| **05** | `true-dark` | Obsidian Core | Dark | `222 47% 7%` | `223 39% 14%` | `216 34% 28%` | `217 91% 60%` | 14.8:1 | Mission-critical cloud architecture, operations war rooms, keynote stages. |
| **06** | `emerald-growth` | Emerald Growth | Dark | `160 60% 4%` | `162 40% 9%` | `160 30% 22%` | `158 80% 45%` | 12.6:1 | Venture capital pitches, high-velocity SaaS expansion, ESG sustainability. |
| **07** | `wp-exam-purple` | Deep Iris Executive | Dark | `265 65% 5%` | `268 45% 10%` | `265 30% 24%` | `280 85% 65%` | 13.4:1 | Enterprise software unveiling, AI platform strategy, product keynotes. |
| **08** | `midnight-luxe` | Midnight Royale | Dark | `230 50% 5%` | `228 35% 10%` | `226 25% 24%` | `43 96% 56%` | 15.1:1 | Luxury brand strategy, private equity portfolio reviews, wealth governance. |
| **09** | `sunset-horizon` | Sunset Crimson | Dark | `15 55% 5%` | `12 40% 10%` | `15 30% 24%` | `12 90% 62%` | 13.8:1 | Market disruption narratives, competitive displacement, visionary founders. |
| **10** | `cyber-neon` | Cyberpunk Electric | Dark | `225 50% 4%` | `224 40% 8%` | `220 35% 20%` | `174 100% 50%` | 16.2:1 | Autonomous AI, cutting-edge developer platforms, zero-trust cybersecurity. |
| **11** | `crimson-executive`| Imperial Crimson | Dark | `348 65% 5%` | `346 45% 9%` | `345 30% 22%` | `352 85% 55%` | 12.9:1 | Risk governance, crisis management, cyber incident post-mortems, regulatory audits. |
| **12** | `nord-frost` | Arctic Glacial | Dark | `220 30% 8%` | `222 25% 13%` | `219 20% 26%` | `193 43% 67%` | 11.5:1 | Nordic minimalism, engineering elegance, algorithmic efficiency reviews. |
| **13** | `bright-gold` | Sovereign Aureate | Dark | `40 50% 5%` | `38 35% 10%` | `40 25% 24%` | `45 95% 50%` | 14.2:1 | Capital allocation, treasury management, macroeconomic forecast briefings. |
| **14** | `noir-gold` | Dark Obsidian Gold | Dark | `0 0% 4%` | `0 0% 9%` | `40 20% 20%` | `42 85% 55%` | 15.6:1 | High-authority boardroom presentations, annual shareholder assemblies. |
| **15** | `monokai` | Hacker Monokai | Dark | `70 8% 8%` | `70 8% 12%` | `70 10% 24%` | `80 90% 50%` | 12.1:1 | Deep code walkthroughs, kernel debugging sessions, developer workshops. |
| **16** | `vscode-dark` | Visual Studio Dark | Dark | `220 13% 11%` | `220 13% 16%` | `220 10% 28%` | `207 90% 54%` | 11.8:1 | Developer productivity metrics, CI/CD telemetry, platform engineering. |
| **17** | `dracula` | Dracula Nocturne | Dark | `231 15% 11%` | `232 14% 17%` | `230 12% 28%` | `326 100% 74%`| 13.7:1 | Modern cloud-native toolchains, open-source community presentations. |
| **18** | `macos-sonoma` | Sonoma Metal | Dark | `215 25% 8%` | `215 20% 13%` | `215 15% 25%` | `212 95% 62%` | 13.2:1 | Premium enterprise client showcases, product design reviews. |
| **19** | `windows-11` | Mica Fluent | Dark | `225 30% 9%` | `223 25% 14%` | `220 18% 26%` | `206 100% 50%`| 12.5:1 | Enterprise architecture, hybrid-cloud enterprise roadmaps. |
| **20** | `navy-blue` | Deep Oceanic Navy | Dark | `222 55% 6%` | `220 40% 11%` | `218 30% 24%` | `200 95% 52%` | 14.5:1 | Sovereign IT, planetary networks, global multi-region deployments. |

### 2.2 Global PPT 'corporate-clean' Canonical Alias
To ensure complete backwards compatibility with enterprise templates requesting `corporate-clean`, the runtime maps `'corporate-clean'` as a first-class alias to `paper-editorial`:
```typescript
export const THEME_ALIASES: Record<string, string> = {
  'corporate-clean': 'paper-editorial',
  'standard-white': 'white-brand',
  'enterprise-dark': 'true-dark',
};
```

### 2.3 Elimination of the Dark Slate Slab Anti-Pattern on Light Themes
To guarantee that light themes never render dark slate containers or low-contrast slabs:
- When `isDark === false` (evaluating themes `white-brand`, `paper-editorial`, `github-light`, and `paper-ink`), the runtime automatically projects:
  ```css
  --pres-bg: hsl(var(--pres-bg-hsl));                    /* pure white or sandstone */
  --pres-bg-card: rgba(255, 255, 255, 0.90);             /* translucent ivory/white */
  --pres-border: hsl(var(--pres-card-border-hsl) / 0.75); /* crisp hairline border */
  --pres-text-primary: hsl(222 47% 11%);                 /* deep ink headline */
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

## 3. Five New Hardware-Accelerated Kinetic Animation Keyframes

Chapter 41 introduces five purpose-built, GPU-accelerated CSS animations declared in `src/styles/animations.less`. Each animation leverages hardware composite-only properties (`transform`, `opacity`, `filter`) and enforces GPU layer promotion via `will-change`.

```less
// ============================================================================
// CHAPTER 41: GLOBAL PPT MASTERY & KINETIC SYNTHESIS ANIMATIONS
// Hardware-accelerated GPU choreographies for deep systems visualization
// ============================================================================

// 1. LLM Agentic DAG Node Pulse (Execution Glow & Edge Routing)
@keyframes agentDagNodePulse {
  0%, 100% {
    box-shadow: 0 0 10px rgba(99, 102, 241, 0.22),
                0 0 0 1px rgba(99, 102, 241, 0.30);
    border-color: rgba(99, 102, 241, 0.40);
    transform: translateY(0) scale(1.0);
  }
  50% {
    box-shadow: 0 0 28px rgba(99, 102, 241, 0.65),
                0 0 0 2px rgba(99, 102, 241, 0.85);
    border-color: rgba(99, 102, 241, 1.0);
    transform: translateY(-2.5px) scale(1.02);
  }
}

// 2. Zero-Downtime Blue/Green Traffic Shift (Progressive Ramp 10% -> 100%)
@keyframes blueGreenTrafficShift {
  0% {
    background-position: 0% 50%;
    transform: scale(0.995);
    box-shadow: 0 0 12px rgba(59, 130, 246, 0.25);
  }
  50% {
    background-position: 100% 50%;
    transform: scale(1.015);
    box-shadow: 0 0 24px rgba(16, 185, 129, 0.50);
  }
  100% {
    background-position: 0% 50%;
    transform: scale(0.995);
    box-shadow: 0 0 12px rgba(59, 130, 246, 0.25);
  }
}

// 3. Post-Quantum PQC KEM Handshake Beacon (Lattice Quorum Oscillation)
@keyframes pqcHandshakeBeacon {
  0%, 100% {
    transform: scale(1.0) rotate(0deg);
    box-shadow: 0 0 12px rgba(168, 85, 247, 0.25),
                inset 0 0 8px rgba(168, 85, 247, 0.15);
    border-color: rgba(168, 85, 247, 0.35);
  }
  50% {
    transform: scale(1.03) rotate(1.2deg);
    box-shadow: 0 0 32px rgba(168, 85, 247, 0.70),
                inset 0 0 16px rgba(168, 85, 247, 0.35),
                0 0 0 2px rgba(168, 85, 247, 0.90);
    border-color: rgba(168, 85, 247, 1.0);
  }
}

// 4. Developer Platform IDP Golden Path Travel (Pipeline Beam Wave)
@keyframes idpGoldenPathTravel {
  0% {
    stroke-dashoffset: 140;
    opacity: 0.25;
    filter: drop-shadow(0 0 2px rgba(245, 158, 11, 0.2));
  }
  50% {
    opacity: 1.0;
    filter: drop-shadow(0 0 10px rgba(245, 158, 11, 0.85));
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 0.25;
    filter: drop-shadow(0 0 2px rgba(245, 158, 11, 0.2));
  }
}

// 5. Lakehouse Iceberg Branch Reveal (ACID Snapshot Partition Commit Wave)
@keyframes icebergBranchReveal {
  0% {
    opacity: 0.30;
    transform: translateY(4px) scale(0.98);
    box-shadow: 0 0 0 0 rgba(6, 182, 212, 0);
  }
  50% {
    opacity: 1.0;
    transform: translateY(-2px) scale(1.015);
    box-shadow: 0 0 24px rgba(6, 182, 212, 0.55),
                0 0 0 1.5px rgba(6, 182, 212, 0.80);
  }
  100% {
    opacity: 0.85;
    transform: translateY(0) scale(1.0);
    box-shadow: 0 0 12px rgba(6, 182, 212, 0.30);
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
- $\omega_0 = \sqrt{\frac{k}{m}} \approx 13.42\text{ rad/s}$: Undamped angular frequency
- $\zeta = \frac{c}{2 \sqrt{m k}} \approx \frac{16}{26.83} \approx 0.596$: Underdamped ratio ($\zeta < 1$)
- $\omega_d = \omega_0 \sqrt{1 - \zeta^2} \approx 10.77\text{ rad/s}$: Damped natural frequency

The displacement trajectory $x(t)$ for step activation scaling ($1.00 \to 1.02$) is:

$$x(t) = 1 - e^{-\zeta \omega_0 t} \left( \cos(\omega_d t) + \frac{\zeta}{\sqrt{1 - \zeta^2}} \sin(\omega_d t) \right)$$

This mathematical curve ensures instantaneous responsive onset ($\Delta t_{90\%} \approx 180\text{ms}$) with a gentle, non-oscillatory settling tail completed at $320\text{ms}$, eliminating perceptual UI lag.

---

## 4. Deterministic 3-Phase Step Progression Lifecycle

Chapter 41 standardizes the step progression lifecycle across all multi-step interactive workflows:

```
+---------------------------------------------------------------------------------------------------+
|               DETERMINISTIC 3-PHASE STEP PROGRESSION LIFECYCLE                                    |
+---------------------------------------------------------------------------------------------------+
| PHASE 1: COMPLETED (stepIndex < activeStep)                                                       |
| - Opacity: 0.75                                                                                   |
| - Transform: scale(1.00) | translateY(0)                                                          |
| - Border: 1px solid var(--pres-border)                                                            |
| - Indicator: Verified checkmark badge [✓] / dimmed sequence badge                                 |
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

### 4.1 Ephemeral Hover Preview Mode
Presenters can hover over any future or past step node to inspect downstream details without permanently modifying the deck's active step pointer:

$$\text{effectiveStep} = \text{hoveredStep} \;\;?\!??\;\; \text{activeStep}$$

```typescript
const [hoveredStep, setHoveredStep] = useState<number | null>(null);
const effectiveStep = hoveredStep !== null ? hoveredStep : activeStep;
```

---

## 5. Direct Click-to-Jump Step Progression & WebAudio Feedback

### 5.1 Direct Click-to-Jump Affordance
Every step node, card container, and indicator pill is equipped with an accessible interactive click handler:

```tsx
<div
  role="button"
  tabIndex={0}
  aria-label={`Jump to Step ${idx + 1}: ${step.title}`}
  onClick={() => {
    jumpToStep(idx);
    playStepTick();
  }}
  onMouseEnter={() => setHoveredStep(idx)}
  onMouseLeave={() => setHoveredStep(null)}
  className={getStepPhaseClass(idx, effectiveStep)}
  style={{ cursor: 'pointer' }}
>
  {/* Step Content */}
</div>
```

### 5.2 Non-Blocking WebAudio Step Feedback (`playStepTick()`)
Step navigation triggers an instant, synthesized 1800Hz / 12ms acoustic click without external audio file latency:

```typescript
let audioCtx: AudioContext | null = null;

export function playStepTick(): void {
  try {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(1800, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.012);

    gain.gain.setValueAtTime(0.14, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.012);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.012);
  } catch {
    // Non-blocking fallback in restricted or headless audio environments
  }
}
```

### 5.3 Keyboard Shortcuts & Cancelable Event Handling
- `ArrowRight` / `Space`: Advances to next intra-slide step. If already on final step (`activeStep === maxSteps - 1`), advances to the next slide in the deck.
- `ArrowLeft`: Steps backward to the previous intra-slide step. If on step 0, navigates to the previous slide.
- `1`, `2`, `3`, `4`: Directly jumps to steps 1 through 4.
- Event dispatch: Dispatches a cancelable `deck:step-jump` custom event, permitting plugins or presenter recorders to log navigational telemetry.

---

## 6. Presenter HUD Intra-Step Progress Indicator

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

### 6.1 State Computation Contract
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

### 6.2 Micro-Segment Visual States
1. **Completed Segment (`idx < currentStepIndex`):** Solid accent fill (`hsl(var(--pres-accent-hsl))`), checkmark glyph, `opacity: 0.80`.
2. **Active Segment (`idx === currentStepIndex`):** Radiant pulsing halo (`animation: agentDagNodePulse 2s infinite ease-in-out`), 100% white pill with accent border, elevated transform `scale(1.15)`.
3. **Future Segment (`idx > currentStepIndex`):** Translucent unfilled ring (`border: 1px solid rgba(255, 255, 255, 0.25)`), `opacity: 0.40`.

### 6.3 Single-Stage Sovereign Overview Fallback
When `hasIntraSteps === false` (`maxSteps === 1`), the intra-step micro-rail is cleanly dismantled from the DOM, rendering only the global slide counter (`Slide 14 / 28`), preventing phantom or redundant step indicators.
