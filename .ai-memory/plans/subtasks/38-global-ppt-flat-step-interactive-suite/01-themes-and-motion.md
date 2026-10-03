# Subtask Plan 01: 7 New Themes, Variable Clean-Pass & Kinetic Keyframes

> **Subtask Identifier:** `.ai-memory/plans/subtasks/38-global-ppt-flat-step-interactive-suite/01-themes-and-motion.md`  
> **Parent Module:** Module 38: Global PPT Flat Step Interactive Suite  
> **Assigned Owner:** Worker 01  
> **Owned Files:** `src/themes/gradientTokens.ts`, `src/themes/themeRuntime.ts`, `src/styles/animations.less`  
> **Target Release:** `v1.9.0`  
> **Status:** `PLAN-READY`  
> **Author:** Spec Subagent 01 (Worker 1)  

---

## 1. Objective & Strategic Scope

This subtask governs the visual styling foundations for Module 38. It implements:
1. **7 New Corporate Theme Presets** added to `src/themes/gradientTokens.ts`, bringing high-authority palettes for executive boardrooms, deep-tech terminal keynotes, and light editorial research.
2. **The Variable Clean-Pass Protocol** in `src/themes/themeRuntime.ts`, ensuring that all stale CSS custom properties are actively cleansed from `#presentation-root` on theme or slide changes before new tokens are applied.
3. **Permanent Dark Chrome HUD Isolation**, ensuring `--chrome-*` variables maintain permanent dark slate carbon contrast ($C_R \ge 12:1$) regardless of whether the slide canvas is light or dark.
4. **GPU-Composited Keyframe Choreographies** in `src/styles/animations.less` for 3D perspective flips, horizontal showcase panning, transit rail pulses, and modal lightbox zoom transitions.

---

## 2. 7 New Production Theme Presets

The 7 new themes are declared in `src/themes/gradientTokens.ts` using unadorned space-separated HSL triplets (`H S% L%`) without outer wrappers to enable dynamic slash-alpha CSS opacity compositing:

| # | Theme Identifier | Name | Canvas Bg HSL | Accent HSL | Card Bg HSL | Mode | Boardroom & Keynote Identity |
|:---:|:---|:---|:---:|:---:|:---:|:---:|:---|
| **01** | `sapphire-executive` | Deep Royal Sapphire | `222 75% 4%` | `199 89% 48%` | `220 50% 8%` | Dark | Sovereign enterprise IT, planetary cloud infrastructure, executive reviews. |
| **02** | `emerald-terminal` | Obsidian Phosphor | `160 60% 3%` | `158 80% 45%` | `162 40% 7%` | Dark | Developer platforms, high-throughput systems engineering, terminal aesthetics. |
| **03** | `amethyst-deep` | Sovereign Imperial | `270 70% 5%` | `280 85% 65%` | `268 45% 9%` | Dark | Premium brand unveilings, strategic M&A announcements, venture capital summits. |
| **04** | `carbon-obsidian` | Pure Carbon Void | `0 0% 3%` | `210 20% 88%` | `0 0% 7%` | Dark | Minimalist monochrome OLED, mission-critical incident war rooms, high-DPI contrast. |
| **05** | `sandstone-editorial`| Warm Archival Sandstone| `38 35% 94%` | `220 70% 38%` | `40 25% 90%` | Light | Institutional whitepapers, sovereign wealth reports, research reading fidelity. |
| **06** | `crimson-vector` | Burgundy Authority | `348 65% 5%` | `352 85% 55%` | `346 45% 9%` | Dark | Risk governance, crisis management, cyber incident post-mortems, regulatory audits. |
| **07** | `cyber-copper` | Industrial Bronze | `24 40% 5%` | `28 92% 54%` | `22 30% 9%` | Dark | Hardware engineering, robotics, silicon enclaves, physical infrastructure. |

### 2.1 Mathematical 10-Step Gradient Ramps ($S_0$–$S_9$)
Each theme includes an array of 10 stops calculated via the perceptual sigmoid power curve:

$$L_k = L_{\min} + \left(\frac{k}{9}\right)^{1.2} \cdot (L_{\max} - L_{\min}), \quad k \in \{0, \dots, 9\}$$

- $S_0$–$S_1$: Background canvas wash and ambient radial glow.
- $S_2$–$S_3$: Frosted translucent Bento card backgrounds (`Plane 1`).
- $S_4$–$S_5$: Tabular divider lines and connector rails.
- $S_6$–$S_7$: Monospace kicker pills and secondary typography.
- $S_8$–$S_9$: Active halo pulse rings (`Plane 2`), KPI numerals, and primary CTA buttons.

---

## 3. Variable Clean-Pass Protocol (`src/themes/themeRuntime.ts`)

To eliminate style bleed across slide transitions, the runtime implements `cleanPreviousThemeVariables()`:

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

/**
 * Actively purges managed CSS custom properties from the presentation root
 * before applying the target theme or slide override.
 */
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

This function is invoked at the very beginning of `applyThemeRuntimeVariables()`:

```typescript
export function applyThemeRuntimeVariables(theme: ThemePalette, rootEl: HTMLElement): void {
  cleanPreviousThemeVariables(rootEl);
  // Proceed with attaching fresh variables...
}
```

---

## 4. Dark HUD Chrome Isolation

Presenter controls must remain readable regardless of the canvas theme:
- The function `buildChromeVars()` in `src/themes/themeRuntime.ts` provides immutable `--chrome-*` properties.
- Permanent dark values:
  - `--chrome-bg: rgba(15, 23, 42, 0.94)`
  - `--chrome-border: rgba(255, 255, 255, 0.12)`
  - `--chrome-text: #F8FAFC`
  - `--chrome-subtext: #94A3B8`
  - `--chrome-accent: #6366F1`
  - `--chrome-glass-blur: 16px`
  - `--chrome-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.36)`

---

## 5. Kinetic Keyframe Choreographies (`src/styles/animations.less`)

GPU-composited keyframes using `transform` and `opacity` to power Module 38 archetypes:

```less
// 3D Perspective Card Flip for Archetype 01 & 02
@keyframes perspectiveFlip3D {
  0% {
    transform: perspective(1200px) rotateY(0deg) translateZ(8px);
  }
  50% {
    transform: perspective(1200px) rotateY(90deg) translateZ(40px);
  }
  100% {
    transform: perspective(1200px) rotateY(180deg) translateZ(8px);
  }
}

// Continuous or Step-Based Horizontal Showcase Pan for Archetype 02
@keyframes showcasePan {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(var(--pan-target-offset, -50%));
  }
}

// Traveling SVG Laser Dash Along Connective Transit Rail for Archetype 07
@keyframes railPulse {
  0% {
    stroke-dashoffset: 64;
    filter: drop-shadow(0 0 2px hsl(var(--pres-accent) / 0.40));
  }
  50% {
    filter: drop-shadow(0 0 10px hsl(var(--pres-accent) / 0.90));
  }
  100% {
    stroke-dashoffset: -64;
    filter: drop-shadow(0 0 2px hsl(var(--pres-accent) / 0.40));
  }
}

// Honeycomb Hexagonal Node Active Beacon for Archetype 06
@keyframes hexBeacon {
  0%, 100% {
    transform: scale(1.00);
    filter: drop-shadow(0 0 4px hsl(var(--pres-accent) / 0.30));
  }
  50% {
    transform: scale(1.04);
    filter: drop-shadow(0 0 18px hsl(var(--pres-accent) / 0.85));
  }
}

// High-Precision Modal Lightbox Scale-In for Archetypes 03 & 08
@keyframes lightboxZoom {
  0% {
    opacity: 0;
    transform: scale(0.92) translateY(20px);
  }
  100% {
    opacity: 1;
    transform: scale(1.00) translateY(0);
  }
}
```

---

## 6. Implementation Steps for Worker 01

1. **Step 1: Expand Theme Dictionary:** In `src/themes/gradientTokens.ts`, add the 7 new theme IDs to `CANONICAL_THEME_IDS` and construct their `ThemePalette` entries in `CANONICAL_THEMES`.
2. **Step 2: Calibrate Stops:** Ensure all 10 stops ($S_0$–$S_9$) for each of the 7 themes have valid hex, HSL, RGB, and contrast metadata.
3. **Step 3: Implement Clean-Pass:** In `src/themes/themeRuntime.ts`, add `cleanPreviousThemeVariables(rootEl)` and call it prior to variable assignment.
4. **Step 4: Verify Chrome Tokens:** Confirm `buildChromeVars()` outputs are applied to root and remain unchanged when light themes are activated.
5. **Step 5: Inject Keyframes:** Append `@keyframes perspectiveFlip3D`, `@keyframes showcasePan`, `@keyframes railPulse`, `@keyframes hexBeacon`, and `@keyframes lightboxZoom` into `src/styles/animations.less`.
6. **Step 6: Static Check:** Run `python 03-ai-scripts/05-guideline-autofixer.py src/themes/ src/styles/ --check-only` to ensure zero lint or boolean regressions.

---

## 7. Quality Gates & Non-Negotiable Boundaries

- **Zero Test/Build Runs (R1):** Do not run test commands or builds during development.
- **Affirmative Positive Booleans:** Only `isDark`, `isHighContrast`, `isDefaultTheme`, `isManaged`. Zero negative booleans.
- **Pure Live DOM:** Zero canvas rasterization of theme labels or badge pills.
- **Disjoint File Bounding Box:** Worker 01 must only modify `src/themes/gradientTokens.ts`, `src/themes/themeRuntime.ts`, and `src/styles/animations.less`.
