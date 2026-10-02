# Subtask 02: Motion, Theming & Flat Slide Progression Implementation Plan

> **Module:** `.ai-memory/plans/subtasks/05-26-global-ppt-color-motion-and/`  
> **Parent Task:** `26-global-ppt-color-motion-and-expanded-slides`  
> **Specification Reference:** [03-Color & Motion Design System](../../../../02-spec/21-app/26-global-ppt-color-motion-and-expanded-slides/03-color-and-motion-design-system.md)  
> **Quality Gate Reference:** [04-Verification Gates](../../../../02-spec/21-app/26-global-ppt-color-motion-and-expanded-slides/04-verification-gates.md)  
> **Status:** Pending Implementation  
> **Target Release:** `v1.3.0`  

---

## 1. Executive Summary & Subtask Goal

Subtask 02 upgrades and unifies the White Presentation visual runtime with the color themes, mathematical 10-step gradient precision ramps, kinetic motion physics, 4-plane elevation hierarchy, and step-by-step flat slide progression synthesized from Global PPT and White Presentation master specs.

This implementation establishes:
1. **Calibrated 10-Theme Palette Ramps:** Full 10-step gradient coordinates ($S_0 \dots S_9$) with verified relative luminance $L$ and WCAG AAA contrast metrics across all 10 light and dark themes.
2. **Unified Dynamic CSS Variables:** Complete `--pres-*` runtime dictionary injected into `#presentation-root` with zero component-level color hardcoding.
3. **4-Plane Depth Hierarchy:** Strict spatial layering (`.plane-0-surface`, `.plane-1-raised`, `.plane-2-elevated`, `.plane-3-floating`) with backdrop blur filters and volumetric accent glows.
4. **Button Variants & Magnetic Tactile Physics:** Tactile buttons (`.btn-primary-accent`, `.btn-secondary-glass`, `.btn-ghost-outline`) with quadratic magnetic cursor deflection (`computeMagneticOffset`).
5. **Kinetic Motion Variants & Stepwise Animations:** GPU-accelerated motion variants (`lift`, `slide`, `parallax`), quintic deceleration easing `cubic-bezier(0.22, 1, 0.36, 1)`, and stepwise keyframes (`recCardFadeIn`, `reveal-pulse`, `baScrollPan`).
6. **Flat Slide Progression Enhancements:** Enhanced step-by-step advance animations, active pill highlights, and progressive disclosure for `StepsSlide`, `TimelineRoadmapSlide`, `ProcessCycleSlide`, and `DepthStackSlide`.
7. **Tactile Sound Synchronization & Dynamic Ducking:** Centralized sound engine with `calculateStepVolume(masterVolume)`, debounced triggers, and automatic audio ducking during media playback.

---

## 2. File Sizing Budgets & Target Scope

| File Path | Action | Role / Purpose | Physical Line Ceiling |
|:---|:---:|:---|:---:|
| `src/themes/gradientTokens.ts` | Edit | 10-theme palette dictionary, S0–S9 gradient ramps, luminance metrics | $\le 350$ lines (with lint-allow) |
| `src/themes/themeRuntime.ts` | Edit | Runtime CSS variable injection, broadcast channel sync | $\le 120$ lines |
| `src/styles/variables.less` | Edit | Design tokens, Less variable bindings for `--pres-*` | $\le 100$ lines |
| `src/styles/animations.less` | Edit | GPU keyframe animations, stagger classes, reduced-motion overrides | $\le 220$ lines |
| `src/styles/presentation.less` | Edit | 4-plane depth classes, button variants, elevation shadows | $\le 220$ lines |
| `src/utils/motionPhysics.ts` | Edit | Spring constants, magnetic offset math, stagger delays, shadow helpers | $\le 150$ lines |
| `src/audio/soundEngine.ts` | Edit | Sound engine, `calculateStepVolume`, debouncing, dynamic audio ducking | $\le 180$ lines |
| `src/components/slides/StepsSlide.tsx` | Edit | Step-by-step card progression, active step highlights | $\le 100$ lines |
| `src/components/slides/TimelineRoadmapSlide.tsx` | Edit | Milestone reveal progression, connector beam glow | $\le 100$ lines |
| `src/components/slides/ProcessCycleSlide.tsx` | Edit | Cycle flywheel node progression, rotating focus ring | $\le 100$ lines |
| `src/components/slides/DepthStackSlide.tsx` | Edit | 3D layered stack reveal progression with parallax offsets | $\le 100$ lines |

---

## 3. Step-by-Step Implementation Sequence

### Step 1: Update Theme Tokens in `src/themes/gradientTokens.ts`
- Ensure all 10 theme palettes (`white-brand`, `paper-editorial`, `true-dark`, `emerald-growth`, `wp-exam-purple`, `midnight-luxe`, `sunset-horizon`, `cyber-neon`, `crimson-executive`, `nord-frost`) expose:
  - `isDark: boolean` (strictly positive boolean).
  - Precise canvas background (`canvasBg`), text color (`textColor`), subtitle color (`subtextColor`), card background (`cardBg`), border (`cardBorder`), and accent (`accentColor`).
  - High-definition ink-stamp `headerShadow`: `rgb(0 0 0) 1px 0.7px 0px` (dark) vs `rgb(255 255 255) 1px 0.7px 0px` (light).
  - Complete 10-step gradient ramps (`stops[0..9]`) with calculated relative luminance and contrast metrics matching Section 2 of `03-color-and-motion-design-system.md`.

### Step 2: Harmonize Runtime CSS Variables in `src/themes/themeRuntime.ts` & `src/styles/variables.less`
- Expand `applyTheme` in `src/themes/themeRuntime.ts` to inject all canonical runtime variables:
  - `--pres-bg`, `--pres-bg-surface`, `--pres-bg-card`, `--pres-bg-card-hover`
  - `--pres-accent`, `--pres-accent-glow`, `--pres-accent-hover`
  - `--pres-text`, `--pres-text-muted`, `--pres-text-subtle`
  - `--pres-border`, `--pres-border-hover`, `--pres-header-shadow`
  - `--preset-display-font`, `--preset-body-font`, `--preset-mono-font`
- Update `src/styles/variables.less` to bind all Less tokens cleanly to CSS custom properties with robust fallbacks.

### Step 3: Implement 4-Plane Depth Hierarchy & Button Variants in `src/styles/presentation.less`
- Implement elevation utility classes:
  - `.plane-0-surface`: Root stage plane ($z=0$), transparent/flat base.
  - `.plane-1-raised`: Structural containers ($z=10$), backdrop blur 12px, hairline border, subtle shadow.
  - `.plane-2-elevated`: Content cards ($z=20$), backdrop blur 16px, hover elevation `translateY(-4px)`, accent border glow.
  - `.plane-3-floating`: Overlays and HUDs ($z=50$), backdrop blur 32px, deep drop shadow.
- Implement button variant classes:
  - `.btn-primary-accent`: Solid accent fill, high-contrast text, accent glow shadow, hover scale 1.02.
  - `.btn-secondary-glass`: Glassmorphic card fill, subtle border, hover border highlight.
  - `.btn-ghost-outline`: Transparent fill, hairline border, subtle accent hover wash.

### Step 4: Add Magnetic Tactile Physics Math in `src/utils/motionPhysics.ts`
- Implement `computeMagneticOffset(cursorX, cursorY, centerX, centerY, pullRadius, maxOffset)`:
  - Quadratic falloff formula $(1 - d/R_{\text{pull}})^2$.
  - Returns `{ offsetX, offsetY, isAttracted }`.
- Export spring physics configs:
  - `STEP_DETAIL_PANE_SPRING`: `{ type: 'spring', stiffness: 420, damping: 17, mass: 0.8 }`.
  - `PROGRESS_RAIL_SPRING`: `{ type: 'spring', stiffness: 220, damping: 32, mass: 1.0 }`.
  - `HALO_SPRING`: `{ type: 'spring', stiffness: 320, damping: 30, mass: 0.9 }`.
- Export easing curves:
  - `PRESENTATION_EASE = [0.22, 1, 0.36, 1]`.
  - `ARC_EASE = [0.4, 0, 0.2, 1]`.
- Export helper utilities:
  - `getHeaderShadow(isDark: boolean): string`.
  - `getStaggerDelay(index: number): number`.

### Step 5: Implement Keyframe Animations & Stagger Classes in `src/styles/animations.less`
- Implement quintic deceleration curve `@ease-presentation: cubic-bezier(0.22, 1, 0.36, 1);`.
- Implement stepwise keyframes:
  - `@keyframes recCardFadeIn` (0% translate 16px scale 0.96 -> 70% translate -2px scale 1.005 -> 100% scale 1.0).
  - `@keyframes revealPulse` (0% scale 1.0 -> 40% scale 1.06 box-shadow spread 14px -> 100% scale 1.0).
  - `@keyframes baScrollPan` (clip-path sweep from 100% to 0% with brightness modulation).
- Implement kinetic motion variants:
  - `[data-motion-variant="lift"]` (vertical lift with shadow bloom).
  - `[data-motion-variant="slide"]` (24px translation with stagger delays).
  - `[data-motion-variant="parallax"]` (multi-layer velocity separation).
- Implement stagger classes `.stagger-1` through `.stagger-8` with $0.08\text{s}$ offsets.
- Guarantee comprehensive `@media (prefers-reduced-motion: reduce)` overrides.

### Step 6: Upgrade Sound Engine & Dynamic Ducking in `src/audio/soundEngine.ts`
- Implement `calculateStepVolume(masterVolume: number): number`:
  ```typescript
  export function calculateStepVolume(masterVolume: number): number {
    if (masterVolume < 0.30) return masterVolume;
    return Math.max(0.30, masterVolume - 0.30);
  }
  ```
- Implement audio triggers:
  - `playSlideWhoosh(direction)`: $120\text{ms}$ debounce window, pitch sweep ($240\text{Hz} \to 480\text{Hz}$).
  - `playStepClick()`: $80\text{ms}$ debounce window, triangle click ($750\text{Hz} \to 320\text{Hz}$), volume clamped via `calculateStepVolume`.
  - `playStepPop()`: $60\text{ms}$ debounce window, sine chirp ($220\text{Hz} \to 880\text{Hz}$).
  - `playThemeChime()`: $100\text{ms}$ debounce window, dual sine chord ($880\text{Hz} + 1320\text{Hz}$).
- Implement dynamic audio ducking API:
  - `startAudioDucking()`: Drops ambient/music gain to $20\%$ over $400\text{ms}$.
  - `stopAudioDucking()`: Restores gain to $100\%$ over $800\text{ms}$.

### Step 7: Enhance Step-by-Step Slide Progression in Flat Slide Archetypes
- **`src/components/slides/StepsSlide.tsx`:**
  - Bind card items to `.plane-2-elevated` and `rec-card-fade-in`.
  - Apply active step pulse `.reveal-pulse-anim` on current step badge.
  - Ensure file remains $\le 100$ lines.
- **`src/components/slides/TimelineRoadmapSlide.tsx`:**
  - Progressive node disclosure based on `activeStep`.
  - Highlight active milestone with glowing connector rail.
  - Ensure file remains $\le 100$ lines.
- **`src/components/slides/ProcessCycleSlide.tsx`:**
  - Flywheel node advancement with active node illumination.
  - Staggered entry for active node description pane.
  - Ensure file remains $\le 100$ lines.
- **`src/components/slides/DepthStackSlide.tsx`:**
  - 3D isometric or card stack layer reveal progression.
  - Active layer translation and volumetric shadow bloom.
  - Ensure file remains $\le 100$ lines.

---

## 4. Verification & Quality Gates Checklist

- [ ] **Gate 1 (Live DOM Text):** All typography across slide templates renders as pure live HTML elements.
- [ ] **Gate 2 (100-Line Component Cap):** All modified slide archetype files remain $\le 100$ physical lines.
- [ ] **Gate 3 (Leaf Type Segregation):** Type declaration updates preserve `presentation.ts` $\le 300$ lines.
- [ ] **Gate 4 (Canvas Geometry):** Stage layouts anchored to 1920x1080 virtual coordinate space.
- [ ] **Gate 5 (Positive Booleans):** Strictly positive boolean flags (`is*`, `has*`, `can*`, zero negative checks).
- [ ] **Gate 6 (4-Plane Depth):** Surfaces use `.plane-0` through `.plane-3` without ad-hoc z-indices.
- [ ] **Gate 7 (Zero Git CLI):** Execution completed with zero Git CLI commands.
- [ ] **Gate 8 (Zero Routine Builds/Tests):** No `npm run build` or `vitest` calls during subtask turn.
- [ ] **Gate 9 (Relative Paths):** All Markdown and code imports use relative paths and lowercase filenames.
- [ ] **Gate 10 (WCAG AAA Contrast):** All 10 themes verified for $C_R \ge 7.0:1$ (body) and $C_R \ge 4.5:1$ (large).
- [ ] **Gate 11 (Kinetic Motion):** 60fps GPU-accelerated motion with reduced-motion compliance.
- [ ] **Gate 12 (Acoustic Safety):** Debounced audio triggers with `calculateStepVolume` and audio ducking.

---

## 5. Cross-Reference Index

- Color & Motion Design System: [03-color-and-motion-design-system.md](../../../../02-spec/21-app/26-global-ppt-color-motion-and-expanded-slides/03-color-and-motion-design-system.md)
- Quality Verification Gates: [04-verification-gates.md](../../../../02-spec/21-app/26-global-ppt-color-motion-and-expanded-slides/04-verification-gates.md)
- Architecture Overview: [01-overview.md](../../../../02-spec/21-app/26-global-ppt-color-motion-and-expanded-slides/01-overview.md)
- Slide Archetypes & Data Contracts: [02-slide-archetypes-data-contracts.md](../../../../02-spec/21-app/26-global-ppt-color-motion-and-expanded-slides/02-slide-archetypes-data-contracts.md)
- Theme Runtime: [src/themes/themeRuntime.ts](../../../../src/themes/themeRuntime.ts)
- Kinetic Motion Utility: [src/utils/motionPhysics.ts](../../../../src/utils/motionPhysics.ts)
- Sound Engine: [src/audio/soundEngine.ts](../../../../src/audio/soundEngine.ts)
