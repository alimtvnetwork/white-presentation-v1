# Subtask Plan 02: Step Progression Engine & Keyboard Shortcuts

> **Subtask Identifier:** `.ai-memory/plans/subtasks/32-global-ppt-flat-step-and/02-step-engine-and-shortcuts.md`  
> **Parent Task:** [32-global-ppt-flat-step-and](../../pending/32-global-ppt-flat-step-and.md)  
> **Assigned Owner:** Worker 02  
> **Owned Files:** `src/utils/stepProgression.ts`, `src/hooks/useDeckShortcuts.ts`, `src/stores/deckStore.ts`  
> **Target Release:** `v1.6.0`  
> **Status:** `PLAN-READY`  
> **Author:** Spec Subagent 01  

---

## 1. Objective & Strategic Scope

This subtask enhances the **Intra-Slide Step Progression Engine** and **Keyboard Navigation Shortcuts** across the presentation framework. In high-stakes executive briefings, multi-stage slides must not overwhelm attendees by dumping full-stage diagrams at once. Instead, pressing `Space` or `ArrowRight` advances sub-steps sequentially within the active slide, highlighting items through a 3-phase kinetic state machine before advancing to the next slide.

---

## 2. 3-Phase Step Lifecycle State Machine

Items in multi-step archetypes evaluate their visual state through the deterministic formula:

```typescript
export type StepPhase = 'completed' | 'active' | 'future';

export function resolveStepPhase(itemIndex: number, activeStep: number): StepPhase {
  if (itemIndex < activeStep) return 'completed';
  if (itemIndex === activeStep) return 'active';
  return 'future';
}
```

### Visual Token & Physics Mapping

| Phase | Predicate | Opacity | Transform Scale | Depth Plane | Optical Filter | Illumination / Border |
|:---:|:---:|:---:|:---:|:---:|:---:|:---|
| **`completed`** | `index < activeStep` | `0.75` | `scale(1.00)` | Plane 1 | None | Neutral desaturated border, positive checkmark badge (`CheckCircle2`). |
| **`active`** | `index === activeStep` | `1.00` | `scale(1.02)` | Plane 2 | None | Luminescent accent halo (`box-shadow: 0 0 24px -2px hsl(var(--pres-accent) / 0.50)`). Harmonic spring arrival ($k=420, c=17, m=0.8$). |
| **`future`** | `index > activeStep` | `0.40` | `scale(0.98)` | Plane 1 | `blur(1.25px)` | Subdued border, prevents audience reading ahead. |

---

## 3. Keyboard Navigation Choreography (`src/hooks/useDeckShortcuts.ts`)

Navigation keys (`ArrowRight`, `Space`, `PageDown`, `ArrowLeft`, `PageUp`) must seamlessly bridge intra-slide stepping and slide transitions:

```
[Key: ArrowRight / Space / PageDown]
       │
       ▼
Is activeStep < maxSteps - 1 ?
       ├── YES ──> Call nextStep() -> activeStep increments -> Item state transitions to 'active'
       └── NO  ──> Call nextSlide() -> Slide increments -> activeStep resets to 0

[Key: ArrowLeft / PageUp]
       │
       ▼
Is activeStep > 0 ?
       ├── YES ──> Call prevStep() -> activeStep decrements -> Item reverts
       └── NO  ──> Call prevSlide() -> Slide decrements -> activeStep sets to target slide's maxSteps - 1
```

### Direct Step Jump Keys (Keys `1` through `9`)

Pressing numerical digits `1` to `9` jumps directly to that step index ($k - 1$) if $k \le \text{maxSteps}$. This empowers presenters to field executive questions out of sequence instantly.

---

## 4. Step Count Engine Integration (`src/utils/stepProgression.ts`)

The step calculation engine must cleanly delegate to type-specific step count resolvers across all slide suites:

```typescript
export function getSlideMaxSteps(slide: SlideData): number {
  if ('type' in slide) {
    // Global PPT Suite Archetypes
    if (isGlobalPptSlide(slide)) {
      return calculateGlobalPptSlideStepCount(slide);
    }
    // Kinetic Suite Archetypes
    if (isKineticSlide(slide)) {
      return calculateKineticSlideStepCount(slide);
    }
    // Extended & Enterprise Archetypes
    if (isExtendedSlide(slide)) {
      return calculateExtendedSlideStepCount(slide);
    }
  }
  return 1;
}
```

---

## 5. Deck Store Synchronization (`src/stores/deckStore.ts`)

The central Zustand store manages `currentSlideIndex` and `currentStepIndex`:

```typescript
interface DeckState {
  currentSlideIndex: number;
  currentStepIndex: number;
  
  // Positive Boolean Indicators
  canAdvanceStep: boolean;
  canRewindStep: boolean;
  hasIntraSteps: boolean;

  // Actions
  nextStep: () => void;
  prevStep: () => void;
  setStep: (stepIndex: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
}
```

When `nextSlide()` or `prevSlide()` is invoked, `currentStepIndex` resets gracefully to 0 (or `maxSteps - 1` for reverse navigation).

---

## 6. Implementation Steps for Worker 02

1. **Step 1:** In `src/utils/stepProgression.ts`, implement `resolveStepPhase()`, `getStepStyle()`, and wire `calculateGlobalPptSlideStepCount()`.
2. **Step 2:** Ensure `getStepStyle(phase)` returns calibrated CSS properties:
   - `completed`: `{ opacity: 0.75, transform: 'translateZ(8px) scale(1.00)' }`
   - `active`: `{ opacity: 1.00, transform: 'translateZ(24px) scale(1.02)', boxShadow: '0 0 24px -2px hsl(var(--pres-accent) / 0.50)' }`
   - `future`: `{ opacity: 0.40, transform: 'translateZ(8px) scale(0.98)', filter: 'blur(1.25px)' }`
3. **Step 3:** Update `src/stores/deckStore.ts` with `currentStepIndex`, `nextStep`, `prevStep`, and `setStep`.
4. **Step 4:** Refactor `src/hooks/useDeckShortcuts.ts` to intercept `ArrowRight`, `Space`, `ArrowLeft`, and digit keys `1-9` for intra-slide stepping before triggering slide turns.
5. **Step 5:** Verify positive boolean naming throughout: `canAdvanceStep`, `canRewindStep`, `hasIntraSteps`. Zero negative flags.
6. **Step 6:** Run guideline check: `python 03-ai-scripts/05-guideline-autofixer.py src/utils/stepProgression.ts src/hooks/useDeckShortcuts.ts src/stores/deckStore.ts --check-only`.

---

## 7. Quality Gates & Non-Negotiable Rules

- **Zero Test/Build Runs (R1):** Do not run test commands or builds during development.
- **Affirmative Positive Booleans:** Only `canAdvanceStep`, `canRewindStep`, `hasIntraSteps`, `isFirstSlide`, `isLastSlide`.
- **Pure Live DOM:** Zero rasterization of step indicators or navigation badges.
- **Disjoint File Bounding Box:** Worker 02 must only touch `src/utils/stepProgression.ts`, `src/hooks/useDeckShortcuts.ts`, and `src/stores/deckStore.ts`.
