# 03-Theme Motion & Flat Progression: 20-Theme Catalog, Kinetic Keyframes & Step Engine

> **Specification Identifier:** `02-spec/21-app/40-kinetic-deck-revolution-and-step/03-theme-motion-and-flat-progression.md`  
> **Status:** `APPROVED CANONICAL ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v2.1.0`  
> **Author:** Spec Author 01 (Core Architectural Systems)  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  
> **Created:** 2026-10-04  
> **Domain:** 20-Theme Calibrated Catalog (4 Light, 16 Dark), Light-Theme Slab Elimination, Space-Separated HSL Triplets, Variable Clean-Pass Teardown, 5 New Hardware-Accelerated Kinetic Keyframes, Deterministic 3-Phase Step Lifecycle, Direct Click-to-Jump Navigation, and WebAudio Acoustic Cues  

---

## 1. System Vision & Architectural Motion Philosophy

Module 40 formalizes the presentation runtime that harmonizes corporate keynote authority with the dynamic demands of cloud-native and deep-tech presentations. It addresses the fundamental interaction flaws identified in legacy slide engines:

1. **Light-Theme Container Contamination:** Eliminates hardcoded dark slate containers (`rgba(15, 23, 42, ...)`) on light themes by dynamically binding container fills to `--pres-bg-card` and `--pres-card-border-hsl`, ensuring light slides render clean ivory and paper surfaces.
2. **Variable Retention Bleed:** Implements an atomic teardown pass before mounting new slides or themes, purging all prior CSS custom properties.
3. **Rigid Step Progression:** Replaces linear-only keyboard navigation with direct click-to-jump step traversal across all multi-step workflows, synchronized with 1800Hz / 12ms acoustic feedback.
4. **Static Architecture Diagrams:** Introduces 5 signature hardware-accelerated kinetic animations to bring complex distributed topologies to life.

```
+---------------------------------------------------------------------------------------------------+
|               CHAPTER 40 THEME, MOTION & STEP PROGRESSION RUNTIME                                 |
+---------------------------------------------------------------------------------------------------+
|  [20 THEME PALETTES]                 [VARIABLE CLEAN-PASS]             [5 KINETIC KEYFRAMES]      |
|  4 Light / 16 Dark                   Atomic removal of `--pres-*`      fabricNodePulse            |
|  Pure HSL Triplets                   Prevents cross-slide bleed        needleScanGlow             |
|  Light-Theme White Cards             Isolates `--chrome-*` HUD         ebpfProbeTrace             |
|          │                                   │                         canaryTrafficShift         |
|          │                                   │                         mpcShardAttestation        |
|          ▼                                   ▼                                 │                  |
|  ┌─────────────────────────────────────────────────────────────────────────────┐                  |
|  │ VIRTUAL PRESENTATION CANVAS (1920x1080 Viewport Geometry, Uniform Scaling)  │                  |
|  └───────────────────────────────────────┬─────────────────────────────────────┘                  |
|                                          │                                                        |
|                  ┌───────────────────────┴───────────────────────┐                                |
|                  ▼                                               ▼                                |
|  [3-PHASE STEP PROGRESSION ENGINE]                     [DIRECT CLICK & AUDIO CUE]                 |
|  - Phase 1 (Completed): opacity 0.75, scale 1.0        - onClick={() => jumpToStep(idx)}          |
|  - Phase 2 (Active): opacity 1.00, scale 1.02, halo    - playStepTick(): 1800Hz / 12ms acoustic   |
|  - Phase 3 (Future): opacity 0.38, 1.25px blur         - Keyboard: Arrow keys, Space, 1-4 keys    |
|  - Hover Preview: effectiveStep = hovered ?? active    - Cancelable event: deck:nav               |
+---------------------------------------------------------------------------------------------------+
```

---

## 2. Complete 20-Theme Palette Catalog

All 20 themes in the presentation system are authored as space-separated unadorned HSL triplets (`H S% L%`), permitting dynamic alpha compositing via `hsl(var(--token) / <alpha>)`:

```
:root {
  --pres-bg: hsl(var(--pres-bg-hsl));
  --pres-bg-card: hsl(var(--pres-card-bg-hsl) / var(--pres-card-opacity, 0.70));
  --pres-border: hsl(var(--pres-card-border-hsl) / 0.15);
  --pres-accent: hsl(var(--pres-accent-hsl));
}
```

### 2.1 Exhaustive 20-Theme Matrix

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

### 2.2 Eliminating the Dark Slate Slab Anti-Pattern on Light Themes
To guarantee that light themes never render dark slate containers:
- **`src/themes/themeRuntime.ts` Integration:**
  When `isDark === false`, the runtime automatically configures:
  ```css
  --pres-bg: hsl(var(--pres-bg-hsl));                  /* pure white or sandstone */
  --pres-bg-card: rgba(255, 255, 255, 0.88);           /* translucent ivory/white */
  --pres-border: hsl(var(--pres-card-border-hsl) / 0.70); /* crisp hairline border */
  --pres-text-primary: hsl(222 47% 11%);               /* deep ink headline */
  --pres-text-secondary: hsl(215 25% 35%);             /* legible dark slate body */
  --pres-card-shadow: 0 8px 30px rgba(0, 0, 0, 0.06); /* subtle diffused lift */
  ```
- No hardcoded dark slate (`#0f172a`, `rgb(15,23,42)`) may be used inside slide containers. All containers must inherit `var(--pres-bg-card)`.

### 2.3 Variable Clean-Pass Teardown Protocol
When switching slides or theme selections, `cleanPreviousThemeVariables()` purges any active presentation variables on `#presentation-root`:

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

### 2.4 Permanent Dark HUD Chrome Isolation (`--chrome-*`)
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

Chapter 40 adds 5 purpose-built, GPU-accelerated CSS animations declared in `src/styles/animations.less`:

```less
// ============================================================================
// CHAPTER 40: KINETIC DECK REVOLUTION ANIMATIONS
// Hardware-accelerated GPU choreographies
// ============================================================================

// 1. GPU Fabric Node Pulse (Interconnect Rail Activity)
@keyframes fabricNodePulse {
  0%, 100% {
    box-shadow: 0 0 10px rgba(99, 102, 241, 0.20),
                0 0 0 1px rgba(99, 102, 241, 0.25);
    border-color: rgba(99, 102, 241, 0.35);
  }
  50% {
    box-shadow: 0 0 24px rgba(99, 102, 241, 0.60),
                0 0 0 2px rgba(99, 102, 241, 0.80);
    border-color: rgba(99, 102, 241, 0.90);
    transform: translateY(-2px) scale(1.015);
  }
}

// 2. RAG Needle Scan Glow (Laser Context Depth Sweep)
@keyframes needleScanGlow {
  0% {
    background-position: -200% 0;
    box-shadow: 0 0 0 0 rgba(245, 158, 11, 0);
  }
  50% {
    box-shadow: 0 0 28px rgba(245, 158, 11, 0.50),
                inset 0 0 16px rgba(245, 158, 11, 0.25);
  }
  100% {
    background-position: 200% 0;
    box-shadow: 0 0 0 0 rgba(245, 158, 11, 0);
  }
}

// 3. eBPF Kernel Probe Trace (Microsecond Syscall Hook Flow)
@keyframes ebpfProbeTrace {
  0% {
    stroke-dashoffset: 120;
    opacity: 0.30;
  }
  50% {
    opacity: 1.0;
    filter: drop-shadow(0 0 8px #10B981);
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 0.30;
  }
}

// 4. Progressive Delivery Canary Traffic Shift (5% -> 100% Flow)
@keyframes canaryTrafficShift {
  0% {
    background-position: 0% 50%;
    transform: scale(0.99);
  }
  50% {
    background-position: 100% 50%;
    transform: scale(1.01);
    box-shadow: 0 0 20px rgba(16, 185, 129, 0.40);
  }
  100% {
    background-position: 0% 50%;
    transform: scale(0.99);
  }
}

// 5. MPC Shard Attestation (Threshold Quorum Cryptographic Convergence)
@keyframes mpcShardAttestation {
  0%, 100% {
    transform: scale(1) rotate(0deg);
    box-shadow: 0 0 12px rgba(168, 85, 247, 0.25);
    border-color: rgba(168, 85, 247, 0.35);
  }
  50% {
    transform: scale(1.035) rotate(1.5deg);
    box-shadow: 0 0 32px rgba(168, 85, 247, 0.65),
                0 0 0 2px rgba(168, 85, 247, 0.85);
    border-color: rgba(168, 85, 247, 1);
  }
}
```

---

## 4. Deterministic 3-Phase Step Progression Lifecycle

Chapter 40 formalizes the step progression lifecycle across all multi-step slides:

```
+---------------------------------------------------------------------------------------------------+
|               DETERMINISTIC 3-PHASE STEP PROGRESSION LIFECYCLE                                    |
+---------------------------------------------------------------------------------------------------+
| PHASE 1: COMPLETED (stepIndex < activeStep)                                                       |
| - Opacity: 0.75                                                                                   |
| - Transform: scale(1.0) | translateY(0)                                                           |
| - Border: 1px solid var(--pres-border)                                                            |
| - Indicator: Verified checkmark badge / dimmed numbering pill                                     |
| - Acoustic Cue: Soft completion tick on transition                                                |
|---------------------------------------------------------------------------------------------------|
| PHASE 2: ACTIVE (stepIndex === activeStep)                                                        |
| - Opacity: 1.00                                                                                   |
| - Transform: scale(1.02) | translateY(-3px) [Plane 2 Elevation]                                   |
| - Border: 1.5px solid var(--pres-accent)                                                          |
| - Box Shadow: 0 12px 32px -4px var(--pres-accent-glow), 0 0 16px -2px var(--pres-accent-glow)     |
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
Presenters can hover over any step node to inspect downstream details without permanently modifying the deck's active step pointer:

$$\text{effectiveStep} = \text{hoveredStep} \;\;?\!??\;\; \text{activeStep}$$

```typescript
const [hoveredStep, setHoveredStep] = useState<number | null>(null);
const effectiveStep = hoveredStep !== null ? hoveredStep : activeStep;
```

---

## 5. Direct Click-to-Jump Step Progression & Audio Synchronization

### 5.1 Click-to-Jump Affordance
Every step node, card, and indicator pill is equipped with an accessible interactive click handler:

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
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
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
    // Non-blocking fallback in restricted audio environments
  }
}
```

### 5.3 Keyboard Shortcuts & Cancelable Event Handling
- `ArrowRight` / `Space`: Advances to next intra-slide step. If already on final step, advances to next slide.
- `ArrowLeft`: Steps backward to previous intra-slide step. If on step 0, navigates to previous slide.
- `1`, `2`, `3`, `4`: Directly jumps to steps 1 through 4.
- Intercepted cleanly via `slide.onStepNavigate()` and `event.preventDefault()`.
