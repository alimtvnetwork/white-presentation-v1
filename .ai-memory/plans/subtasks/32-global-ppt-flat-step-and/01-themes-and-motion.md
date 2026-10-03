# Subtask Plan 01: Global PPT Color Themes & Kinetic Animations

> **Subtask Identifier:** `.ai-memory/plans/subtasks/32-global-ppt-flat-step-and/01-themes-and-motion.md`  
> **Parent Task:** [32-global-ppt-flat-step-and](../../pending/32-global-ppt-flat-step-and.md)  
> **Assigned Owner:** Worker 01  
> **Owned Files:** `src/themes/gradientTokens.ts`, `src/themes/themeRuntime.ts`, `src/styles/animations.less`  
> **Target Release:** `v1.6.0`  
> **Status:** `PLAN-READY`  
> **Author:** Spec Subagent 01  

---

## 1. Objective & Strategic Scope

This subtask governs the architectural upgrade of the White Presentation color theming engine and kinetic motion system. It replaces derivative theme aliases with **10 authentic Global PPT master palettes**, injects **raw HSL triplet tokens** (`accentHsl`, `canvasBgHsl`) enabling slash-alpha CSS opacity syntax (`hsl(var(--pres-accent) / 0.35)`), establishes mathematical 10-step gradient ramps ($S_0$–$S_9$), implements light-theme capsule contrast inversions, locks the Presenter HUD to permanent dark chrome (`--chrome-*`), and equips `src/styles/animations.less` with GPU-accelerated keyframe choreographies.

---

## 2. 10 Authentic Global PPT Master Palettes

Each theme is declared with mathematical precision in `src/themes/gradientTokens.ts`. Unadorned HSL triplets (`H S% L%`) without outer wrappers allow dynamic alpha composition across cards and active step halos.

| # | Theme Identifier | Name | Canvas Bg HSL | Accent HSL | Mode | Boardroom & Keynote Identity |
|:---:|:---|:---|:---:|:---:|:---:|:---|
| **01** | `white-brand` | Pure White Editorial | `0 0% 100%` | `262 83% 58%` | Light | Crisp white paper, royal violet brand authority, high print fidelity. |
| **02** | `paper-editorial` | Archival Cream | `40 33% 93%` | `224 76% 48%` | Light | Classical warm parchment, navy ink typography, institutional research. |
| **03** | `true-dark` | Obsidian Abyss | `222 78% 3%` | `239 84% 67%` | Dark | Ultra-deep carbon obsidian, luminescent indigo, mission-critical keynotes. |
| **04** | `emerald-growth` | Forest Capital | `168 84% 9%` | `160 84% 39%` | Dark | Deep botanical emerald, vivid mint highlights, ESG & sustainability summits. |
| **05** | `wp-exam-purple` | Sovereign Violet | `255 70% 9%` | `271 91% 65%` | Dark | Deep cosmic purple, sovereign neon violet, premium product unveilings. |
| **06** | `midnight-luxe` | Executive Slate | `214 60% 11%` | `201 100% 43%` | Dark | Deep maritime navy slate, cyan accent beams, enterprise IT infrastructure. |
| **07** | `sunset-horizon` | Warm Ember | `0 41% 7%` | `25 95% 53%` | Dark | Smoked obsidian, radiant amber & coral embers, venture capital pitches. |
| **08** | `cyber-neon` | Matrix Terminal | `0 0% 2%` | `189 94% 43%` | Dark | Pure OLED black, radioactive cyan & lime accents, cybersecurity briefings. |
| **09** | `crimson-executive`| Ruby Authority | `344 50% 6%` | `347 77% 50%` | Dark | Deep wine obsidian, vivid ruby red, crisis management & board governance. |
| **10** | `nord-frost` | Arctic Precision | `218 45% 10%` | `199 89% 48%` | Dark | Glacial navy slate, arctic sky blue, developer platforms & cloud tools. |

---

## 3. Mathematical 10-Step Gradient Ramps ($S_0$–$S_9$)

For each palette, the 10 gradient stops are calibrated across luminosity and saturation curves:
$$L_k = L_{\min} + \left(\frac{k}{9}\right)^\gamma \cdot (L_{\max} - L_{\min}), \quad k \in \{0, \dots, 9\}$$
Where $\gamma = 1.2$ provides a gentle perceptual sigmoid curve preventing banding on high-gamut HDR monitors.

Stops map semantically to UI layers:
- $S_0$–$S_1$: Deep canvas ground and ambient atmospheric backdrop.
- $S_2$–$S_3$: Frosted card backgrounds (`Plane 1`).
- $S_4$–$S_5$: Tabular grid borders and inactive divider rails.
- $S_6$–$S_7$: Secondary typography and subdued metadata tags.
- $S_8$–$S_9$: Vivid focal points, active halo glows (`Plane 2`), and quantitative KPI digits.

---

## 4. Runtime Variable Injection (`src/themes/themeRuntime.ts`)

The theme runtime dynamically synthesizes and attaches CSS custom properties to `#presentation-root` whenever `themeId` changes in `deckStore`:

```typescript
export function applyThemeRuntimeVariables(theme: ThemePalette, rootEl: HTMLElement): void {
  // Canvas Base (60%)
  rootEl.style.setProperty('--pres-canvas-bg', theme.canvasBg);
  rootEl.style.setProperty('--pres-canvas-bg-hsl', theme.canvasBgHsl);
  
  // Structural Surface (30%)
  rootEl.style.setProperty('--pres-card-bg', theme.cardBg);
  rootEl.style.setProperty('--pres-card-border', theme.cardBorder);
  rootEl.style.setProperty('--pres-text-primary', theme.textColor);
  rootEl.style.setProperty('--pres-text-secondary', theme.subtextColor);
  
  // High-Energy Accent (10%)
  rootEl.style.setProperty('--pres-accent', theme.accentColor);
  rootEl.style.setProperty('--pres-accent-hsl', theme.accentHsl);
  rootEl.style.setProperty('--pres-accent-glow', `hsl(${theme.accentHsl} / 0.50)`);

  // 10-Step Gradient Stops
  theme.stops.forEach((stop, index) => {
    rootEl.style.setProperty(`--pres-gradient-stop-${index}`, stop.hex);
    rootEl.style.setProperty(`--pres-gradient-stop-${index}-hsl`, stop.hsl);
  });

  // Permanent Dark Presenter HUD Chrome
  rootEl.style.setProperty('--chrome-bg', 'rgba(15, 23, 42, 0.94)');
  rootEl.style.setProperty('--chrome-border', 'rgba(255, 255, 255, 0.12)');
  rootEl.style.setProperty('--chrome-text', '#F8FAFC');
  rootEl.style.setProperty('--chrome-subtext', '#94A3B8');
  rootEl.style.setProperty('--chrome-accent', '#6366F1');

  // Light vs Dark Mode Class Tag
  if (theme.isDark) {
    rootEl.classList.add('theme-dark');
    rootEl.classList.remove('theme-light');
  } else {
    rootEl.classList.add('theme-light');
    rootEl.classList.remove('theme-dark');
  }
}
```

---

## 5. Kinetic Keyframe Choreographies (`src/styles/animations.less`)

GPU-composited animations are declared in `src/styles/animations.less` utilizing only `transform` and `opacity`:

```less
// Active Step Halo Pulse
@keyframes haloPulse {
  0% {
    box-shadow: 0 0 0 0 hsl(var(--pres-accent) / 0.60);
  }
  70% {
    box-shadow: 0 0 0 16px hsl(var(--pres-accent) / 0.00);
  }
  100% {
    box-shadow: 0 0 0 0 hsl(var(--pres-accent) / 0.00);
  }
}

// Traveling SVG Stroke Dash for Connective Rails
@keyframes svgStrokeDash {
  to {
    stroke-dashoffset: -32;
  }
}

// 3D Perspective Card Pop for Step Focus
@keyframes cardPop3D {
  0% {
    transform: translateZ(8px) scale(1.00);
  }
  100% {
    transform: translateZ(24px) scale(1.02);
  }
}

// Directed DAG Node Execution Pulse
@keyframes dagNodeTraverse {
  0%, 100% {
    filter: drop-shadow(0 0 4px hsl(var(--pres-accent) / 0.30));
  }
  50% {
    filter: drop-shadow(0 0 20px hsl(var(--pres-accent) / 0.80));
  }
}

// Progressive Canary Traffic Sweep
@keyframes canaryGaugeSweep {
  from {
    stroke-dasharray: 0 100;
  }
  to {
    stroke-dasharray: var(--canary-percent) 100;
  }
}
```

---

## 6. Implementation Steps for Worker 01

1. **Step 1:** Audit `src/themes/gradientTokens.ts`. Ensure all 10 Global PPT themes provide authentic `accentHsl` and `canvasBgHsl` triplet strings.
2. **Step 2:** Ensure all 10-step gradient arrays (`stops[0..9]`) are populated with non-zero mathematical values.
3. **Step 3:** Update `src/themes/themeRuntime.ts` to inject `--pres-accent-hsl`, `--pres-canvas-bg-hsl`, and `--chrome-*` tokens.
4. **Step 4:** Add missing keyframes (`haloPulse`, `svgStrokeDash`, `dagNodeTraverse`, `canaryGaugeSweep`) to `src/styles/animations.less`.
5. **Step 5:** Verify light-mode contrast inversion rules for `.capsule-*` pills in `presentation.less`.
6. **Step 6:** Run file-scoped guideline check: `python 03-ai-scripts/05-guideline-autofixer.py src/themes/ src/styles/ --check-only`.

---

## 7. Quality Gates & Non-Negotiable Rules

- **Zero Test/Build Runs (R1):** Do not run test commands or builds during development.
- **Affirmative Positive Booleans:** Only `isDark`, `isHighContrast`, `isDefaultTheme`. Zero negative booleans.
- **Pure Live DOM:** Zero canvas rasterization of theme labels or badge pills.
- **Disjoint File Bounding Box:** Worker 01 must only modify `src/themes/` and `src/styles/animations.less`.
