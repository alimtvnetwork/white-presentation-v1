# Subtask 02: Motion, Theming & Background Atmospheric Systems Implementation Plan

> **Module:** `.ai-memory/plans/subtasks/25-grounded-global-ppt-and-flat/`  
> **Parent Plan:** [Plan 25: Grounded Global PPT & Flat Slide Show Synthesis](../../pending/25-grounded-global-ppt-and-flat-slide-synthesis.md)  
> **Specification Reference:** [03-Color & Motion Design System](../../../02-spec/21-app/25-grounded-global-ppt-and-flat-slide-synthesis/03-color-and-motion-design-system.md)  
> **Status:** Pending Implementation  
> **Target Release:** `v1.2.0`  

---

## 1. Executive Summary & Subtask Goal

Subtask 02 upgrades and harmonizes the White Presentation visual runtime with the unified color and motion architecture synthesized from `global-ppt-v1`, `flat-slide-show`, and `slides-spec`. 

This implementation establishes:
1. **Grounded Color Token Integration:** Full support for dark obsidian canvas tokens (`#0B0B0E`, `#121217`, `#F5A623`, `#2A2A30`) and light archival canvas tokens (`#FEFEFE`, `#FCFCFC`, `#F1EAFA`, `#101B39`, `#7030A0`) across all 10 theme palettes.
2. **Atmospheric Canvas Background Layer:** Radial spotlight glow ($60\% \times 55\%$), $48\text{px} \times 48\text{px}$ geometric cross-hatch grid at $2.5\%$ opacity, and floating tech outline icons at $8\%\text{--}12\%$ opacity.
3. **Kinetic Spring Physics Engine:** Deterministic springs for `StepDetailPane` ($420, 17, 0.8$), `ProgressRail` ($220, 32, 1.0$), and `Halo` ($320, 30, 0.9$), alongside quintic deceleration easing (`cubic-bezier(0.22, 1, 0.36, 1)`).
4. **Tactile Acoustic Synchronization:** Integration of Whoosh ($0.45\text{s}$), Click ($0.05\text{s}$), and Pop cues with volume ducking and step attenuation.

---

## 2. File Sizing Budgets & Target Scope

| File Path | Action | Role / Purpose | Line Ceiling |
|:---|:---:|:---|:---:|
| `src/themes/gradientTokens.ts` | Edit | 10-theme palette dictionary, S0–S9 gradient ramps, canvas tokens | $\le 350$ lines (with lint-allow) |
| `src/styles/animations.less` | Edit / Create | Hardware-accelerated keyframes, easing curves, stagger classes | $\le 220$ lines |
| `src/utils/motionPhysics.ts` | Create | Spring physics constants, easing arrays, reduced motion hooks | $\le 120$ lines |
| `src/components/canvas/SlideBackground.tsx` | Edit / Create | Canvas background renderer (spotlight, grid, tech icons) | $\le 100$ lines |
| `src/lib/sound.ts` | Edit | Audio cues, debouncing, `stepVolume`, narration ducking | $\le 380$ lines |

---

## 3. Step-by-Step Implementation Sequence

### Step 1: Update Theme Tokens in `src/themes/gradientTokens.ts`
- Ensure all 10 theme palettes (`white-brand`, `paper-editorial`, `true-dark`, `emerald-growth`, `wp-exam-purple`, `midnight-luxe`, `sunset-horizon`, `cyber-neon`, `crimson-executive`, `nord-frost`) expose:
  - `isDark: boolean` (positive boolean).
  - Grounded dark canvas (`#0B0B0E`, `#121217`) or light canvas (`#FEFEFE`, `#FCFCFC`).
  - Primary amber accent (`#FFAD01` / `#F5A623`) or purple accent (`#7030A0`).
  - Correct `headerShadow`: `rgb(0 0 0) 1px 0.7px 0px` (dark) vs `rgb(255 255 255) 1px 0.7px 0px` (light).
  - Accurate logo asset mapping (`WT.png`/`white.svg` vs `BK.png`).
  - Full 10-step gradient ramps (`stops[0..9]`) with calculated relative luminance and contrast metrics.

### Step 2: Implement Kinetic Motion Module in `src/utils/motionPhysics.ts`
- Export canonical spring physics configs:
  ```typescript
  export const STEP_DETAIL_PANE_SPRING = { type: 'spring', stiffness: 420, damping: 17, mass: 0.8 } as const;
  export const PROGRESS_RAIL_SPRING = { type: 'spring', stiffness: 220, damping: 32, mass: 1.0 } as const;
  export const HALO_SPRING = { type: 'spring', stiffness: 320, damping: 30, mass: 0.9 } as const;
  ```
- Export easing curves:
  ```typescript
  export const PRESENTATION_EASE = [0.22, 1, 0.36, 1] as const;
  export const ARC_EASE = [0.4, 0, 0.2, 1] as const;
  ```
- Export dynamic text shadow resolver:
  ```typescript
  export function getHeaderShadow(isDarkTheme: boolean): string {
    return isDarkTheme ? 'rgb(0 0 0) 1px 0.7px 0px' : 'rgb(255 255 255) 1px 0.7px 0px';
  }
  ```
- Export stagger helper:
  ```typescript
  export function getStaggerDelay(index: number): number {
    return (index + 1) * 0.08;
  }
  ```

### Step 3: Enhance CSS & Less Animations in `src/styles/animations.less`
- Add `@ease-presentation: cubic-bezier(0.22, 1, 0.36, 1);` and `@ease-arc: cubic-bezier(0.4, 0, 0.2, 1);`.
- Implement keyframes:
  - `@keyframes slideInUpSoft` (28px vertical travel, quintic ease).
  - `@keyframes popScale` (0.94 to 1.02 to 1.0 scale with soft pop).
  - `@keyframes pulseHalo` (box-shadow pulse for active timeline/process nodes).
  - `@keyframes waveFloat` (organic gentle floating drift).
  - `@keyframes badgeShimmer` (horizontal light glint sweep).
- Implement stagger classes `.stagger-1` through `.stagger-8` with $0.08\text{s}$ steps.
- Add comprehensive `@media (prefers-reduced-motion: reduce)` block with instant zero-duration overrides.

### Step 4: Refactor / Create `src/components/canvas/SlideBackground.tsx`
- Ensure component strictly stays under 100 lines.
- Implement 3 atmospheric layers:
  1. Base canvas fill + radial spotlight glow (ellipse $60\% \times 55\%$ at $50\%\ 50\%$).
  2. Cross-hatch geometric grid ($48\text{px} \times 48\text{px}$, $2.5\%$ opacity).
  3. Floating tech outline icon layer ($8\%\text{--}12\%$ opacity, `pointer-events: none`, `aria-hidden="true"`).

### Step 5: Refine Acoustic Feedback in `src/lib/sound.ts`
- Implement `calculateStepVolume(masterVolume: number): number`:
  ```typescript
  export function calculateStepVolume(masterVolume: number): number {
    if (masterVolume < 0.30) return masterVolume;
    return Math.max(0.30, masterVolume - 0.30);
  }
  ```
- Support audio triggers:
  - `whoosh`: $0.45\text{s}$ duration, `/sounds/fade_swoosh_v4.mp3`, $120\text{ms}$ debounce window.
  - `click`: $0.05\text{s}$ duration, `/sounds/click.mp3`, $60\text{ms}$ debounce window.
  - `pop`: procedural sine upchirp ($220\text{Hz} \to 880\text{Hz}$) for step reveals.
- Enforce narration ducking to $20\%$ nominal volume during active presenter narration or webcam speech.

---

## 4. Verification & Quality Gates Checklist

- [ ] **Hard Rule #6 (100-line cap):** `SlideBackground.tsx` $\le 100$ lines.
- [ ] **Leaf Module Caps:** `motionPhysics.ts` $\le 120$ lines; `animations.less` $\le 220$ lines; `gradientTokens.ts` $\le 350$ lines.
- [ ] **Positive Booleans:** Zero instances of `disabled`, `noShadow`, or `isNotDark`.
- [ ] **Contrast Compliance:** All 10 themes verified against WCAG AAA criteria.
- [ ] **Zero Git Commands:** Execution strictly modifies local files without invoking `git *`.
- [ ] **Zero Routine Build/Test:** No `npm run build` or `vitest` calls during subtask turn.
