# Subtask 05: Slide Factories, Renderers & Demo Deck Registration

> **Subtask Code:** `Task-05`  
> **Parent Task:** `46-global-ppt-suite2028-slide-expansion`  
> **Assigned Role:** `Worker 01`  
> **Target Files:**
> - `src/utils/suite2028SlideFactories.ts`
> - `src/utils/slideArchetypeFactories.ts`
> - `src/components/slides/Suite2028SlideRenderer.tsx`
> - `src/components/slides/Suite2027SlideRenderer.tsx`
> - `src/stores/initialDeck.ts`

---

## Technical Scope

1. **`src/utils/suite2028SlideFactories.ts`**:
   - Create 15 production factory functions: `createSyntheticDataCurationPipelineSlide()`, `createCloudNativeWasmMicroserviceMeshSlide()`, `createSovereignAiDatacenterPowerGridSlide()`, etc.
   - Inject realistic production numbers, affirmative positive booleans, telemetry fields, and stages/panels.
2. **`src/utils/slideArchetypeFactories.ts`**:
   - Re-export everything from `./suite2028SlideFactories`.
3. **`src/components/slides/Suite2028SlideRenderer.tsx`**:
   - Functional React component switching on all 15 `Suite2028SlideType` cases.
   - Passes `slide` and `activeStep` to each component.
   - Falls back to `<WhiteMasterSlide slide={slide as any} />`.
4. **`src/components/slides/Suite2027SlideRenderer.tsx`**:
   - Update default case: instead of falling back directly to `WhiteMasterSlide`, fallback to `<Suite2028SlideRenderer slide={slide} activeStep={activeStep} />`.
5. **`src/stores/initialDeck.ts`**:
   - Raise lint-allow file-size cap from 650 to 750 lines.
   - Import Suite 2028 factories.
   - Register 15 demo slides starting at `slide-260` through `slide-274`.
   - Update deck comments and total slide count.
