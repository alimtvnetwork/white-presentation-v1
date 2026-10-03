# Subtask Plan 02: Step Progression Engine, Branching Shortcuts & Audio Cues

> **Subtask Identifier:** `.ai-memory/plans/subtasks/38-global-ppt-flat-step-interactive-suite/02-step-engine-and-shortcuts.md`  
> **Parent Module:** Module 38: Global PPT Flat Step Interactive Suite  
> **Assigned Owner:** Worker 02  
> **Owned Files:** `src/utils/stepProgression.ts`, `src/hooks/useDeckShortcuts.ts`, `src/audio/soundEngine.ts`, `src/stores/deckStore.ts`  
> **Target Release:** `v1.9.0`  
> **Status:** `PLAN-READY`  
> **Author:** Spec Subagent 01 (Worker 1)  

---

## 1. Objective & Strategic Scope

This subtask equips the presentation platform with dynamic intra-slide stepping, keyboard-driven decision branching, and procedural audio cues:
1. **Dynamic Step Calculation Integration:** Integrates `calculateFlatGlobalSuiteStepCount()` into `src/utils/stepProgression.ts`, ensuring all 15 Module 38 archetypes report deterministic step boundaries without phantom steps.
2. **Interactive Decision Branching Shortcuts (`Y` / `N`):** Enhances `src/hooks/useDeckShortcuts.ts` to intercept `Y` and `N` keypresses when viewing an `interactive-branching-close` slide, updating state and triggering responsive 3D card reveals.
3. **Procedural Step Tick Audio Cues:** Implements zero-dependency Web Audio API sound synthesizers (`playStepTickAudio`, `playBranchSelect`) in `src/audio/soundEngine.ts` to give presenters subtle, tactile auditory feedback on step advance and branch selection.
4. **Deck Store Branching State:** Exposes branch selection actions in `src/stores/deckStore.ts` while maintaining 100% positive boolean polarity.

---

## 2. Dynamic Step Count Engine Integration (`src/utils/stepProgression.ts`)

The universal step resolver `getSlideMaxSteps()` must recognize Module 38 slide types and invoke `calculateFlatGlobalSuiteStepCount()`:

```typescript
import {
  isFlatGlobalSuiteSlide,
  calculateFlatGlobalSuiteStepCount,
} from '../types/flatGlobalSuiteTypes';

export function getSlideMaxSteps(slide: any): number {
  if (typeof slide === 'object' && slide !== null) {
    if (isFlatGlobalSuiteSlide(slide)) {
      return calculateFlatGlobalSuiteStepCount(slide);
    }
    // Existing suite resolvers...
  }
  return 1;
}
```

### 2.1 Step Phase Resolution & 3D Styling
Each multi-step item resolves its kinetic phase via `resolveStepPhase()`:

```typescript
export function resolveStepPhase(itemIndex: number, activeStep: number): StepPhase {
  if (itemIndex < activeStep) return 'completed';
  if (itemIndex === activeStep) return 'active';
  return 'future';
}
```

Phase visual properties:
- **`completed`:** `{ opacity: 0.75, transform: 'translateZ(8px) scale(1.00)' }`
- **`active`:** `{ opacity: 1.00, transform: 'translateZ(24px) scale(1.02)', boxShadow: '0 0 24px -2px hsl(var(--pres-accent) / 0.50)' }`
- **`future`:** `{ opacity: 0.35, transform: 'translateZ(0px) scale(0.98)', filter: 'blur(1.25px)' }`

---

## 3. Keyboard Navigation & Branching Shortcuts (`src/hooks/useDeckShortcuts.ts`)

In addition to standard navigation keys (`ArrowRight`, `Space`, `PageDown`, `ArrowLeft`, `PageUp`) and numeric step jumps (`1`–`9`), the hook must intercept branch keys when on an `interactive-branching-close` slide:

```typescript
// Inside onKey handler in useDeckShortcuts:
const isInteractiveBranching = activeSlide?.type === 'interactive-branching-close';

if (isInteractiveBranching && (k === 'y' || k === 'n')) {
  e.preventDefault();
  const isAffirmative = k === 'y';
  const branchKey = isAffirmative ? 'Y' : 'N';
  
  // Update branch selection in deck store
  selectSlideBranch(branchKey);
  
  // Trigger procedural audio feedback
  soundEngine.playBranchSelect(isAffirmative);
  return;
}
```

### 3.1 Shortcut Decision Matrix

| Key | Context | Action | Audio Cue |
|:---|:---|:---|:---|
| **`Y` / `y`** | `interactive-branching-close` | Select Path Y (Enterprise Rollout) | `playBranchSelect(true)` (880Hz $\to$ 1320Hz chime) |
| **`N` / `n`** | `interactive-branching-close` | Select Path N (30-Day Sandbox Pilot)| `playBranchSelect(false)` (520Hz $\to$ 440Hz soft tone) |
| **`Space` / `ArrowRight`** | Any Multi-Step Slide | Increment `activeStep` (or next slide) | `playStepTickAudio()` (750Hz $\to$ 320Hz click) |
| **`ArrowLeft` / `Backspace`**| Any Multi-Step Slide | Decrement `activeStep` (or prev slide) | `playStepTickAudio()` |
| **`1` through `9`** | Any Multi-Step Slide | Direct step jump ($k - 1$) | `playStepTickAudio()` |

---

## 4. Procedural Step Audio Engine (`src/audio/soundEngine.ts`)

All audio cues are synthesized in real-time via the Web Audio API without fetching external sound files:

```typescript
export class PresentationSoundEngine {
  // Existing methods...

  /**
   * Subtle tactile tick on intra-slide sub-step transition.
   */
  public playStepTickAudio(frequency = 750, volumeModifier = 1.0): void {
    if (this.isMuted) return;
    const now = performance.now();
    const hasElapsed = (now - this.lastStepClickMs) >= 60;
    if (!hasElapsed) return;
    this.lastStepClickMs = now;

    const ctx = this.initContext();
    if (!ctx) return;

    const gain = stepVolume(this.masterVolume) * 0.25 * volumeModifier;
    try {
      triggerTone(ctx, {
        type: 'triangle',
        startFreq: frequency,
        endFreq: frequency * 0.45,
        gain,
        duration: 0.05,
      });
    } catch {
      // AudioContext policy suppression fallback
    }
  }

  /**
   * Resonant feedback for executive branching selection (Y/N).
   */
  public playBranchSelect(isAffirmative: boolean): void {
    if (this.isMuted) return;
    const ctx = this.initContext();
    if (!ctx) return;

    const gain = stepVolume(this.masterVolume) * 0.35;
    const startFreq = isAffirmative ? 880 : 520;
    const endFreq = isAffirmative ? 1320 : 440;

    try {
      triggerTone(ctx, {
        type: 'sine',
        startFreq,
        endFreq,
        gain,
        duration: 0.16,
      });
    } catch {
      // AudioContext policy suppression fallback
    }
  }
}
```

---

## 5. Store State Extensions (`src/stores/deckStore.ts`)

Add affirmative branching state management to `deckStore`:

```typescript
interface DeckState {
  // Existing state...
  activeBranchKey?: 'Y' | 'N';
  hasActiveBranch: boolean;

  // Branching actions
  selectSlideBranch: (branchKey: 'Y' | 'N') => void;
  resetSlideBranch: () => void;
}
```

Implementation:
```typescript
selectSlideBranch: (branchKey: 'Y' | 'N') => {
  set((state) => ({
    activeBranchKey: branchKey,
    hasActiveBranch: true,
  }));
},
resetSlideBranch: () => {
  set({
    activeBranchKey: undefined,
    hasActiveBranch: false,
  });
},
```

---

## 6. Implementation Steps for Worker 02

1. **Step 1: Wire Step Count Engine:** In `src/utils/stepProgression.ts`, import `isFlatGlobalSuiteSlide` and `calculateFlatGlobalSuiteStepCount` from `src/types/flatGlobalSuiteTypes.ts`. Wire into `getSlideMaxSteps()`.
2. **Step 2: Add Procedural Audio Methods:** In `src/audio/soundEngine.ts`, implement `playStepTickAudio()` and `playBranchSelect(isAffirmative)`.
3. **Step 3: Update Deck Store:** In `src/stores/deckStore.ts`, add `activeBranchKey`, `hasActiveBranch`, `selectSlideBranch`, and `resetSlideBranch`. Reset branch state when turning slides (`nextSlide()`, `prevSlide()`).
4. **Step 4: Update Shortcuts Hook:** In `src/hooks/useDeckShortcuts.ts`, intercept `y` and `n` keys for `interactive-branching-close` slides, calling `selectSlideBranch` and `soundEngine.playBranchSelect`.
5. **Step 5: Connect Step Tick on Step Advance:** Ensure `stepAdvance()` and `stepRewind()` call `soundEngine.playStepTickAudio()`.
6. **Step 6: Static Check:** Run `python 03-ai-scripts/05-guideline-autofixer.py src/utils/stepProgression.ts src/hooks/useDeckShortcuts.ts src/audio/soundEngine.ts src/stores/deckStore.ts --check-only` to ensure affirmative boolean compliance.

---

## 7. Quality Gates & Non-Negotiable Boundaries

- **Zero Test/Build Runs (R1):** Do not run test commands or builds during development.
- **Affirmative Positive Booleans:** Only `canAdvance`, `canRewind`, `hasMultipleSteps`, `isAffirmative`, `hasActiveBranch`. Zero negative flags.
- **Pure Live DOM:** Zero rasterization of step pills or branching UI.
- **Disjoint File Bounding Box:** Worker 02 must only touch `src/utils/stepProgression.ts`, `src/hooks/useDeckShortcuts.ts`, `src/audio/soundEngine.ts`, and `src/stores/deckStore.ts`.
