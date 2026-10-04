# Subtask 07: Dispatcher Renderer, Deck Injection & End-to-End Verification

> **Task ID:** `Task-07`  
> **Parent:** `51-suite2033-global-ppt-flat-step-and-15-slide-expansion`  
> **Wave:** `Wave 2 (Slide Components & Deck Integration)`  
> **Status:** `COMPLETED`  
> **Target Files:** `src/components/presentation/slides/suite2033/Suite2033SlideRenderer.tsx`, `src/stores/deckSegments/suite2033Segment.ts`, `src/stores/initialDeck.ts`  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  

---

## 1. Objective & Scope
Construct the master slide dispatcher `Suite2033SlideRenderer.tsx`, wire it into the main presentation rendering chain (cascading from `Suite2032SlideRenderer.tsx`), assemble the pre-seeded `suite2033Segment.ts` deck segment, and verify flawless runtime presentation across all themes and viewports.

---

## 2. Inviolable Architectural Mandates
1. **File Size Limit ($\le 100$ lines):** `Suite2033SlideRenderer.tsx` must strictly stay within 100 lines (`CODE-RED-006R`).
2. **Cascaded Dispatch Fallback:**
   - If `slide.type` matches any of the 15 Suite 2033 types, dispatch to the respective component.
   - Otherwise, delegate to the next renderer or fallback.
3. **Pre-Seeded Deck Segment:**
   - Create `src/stores/deckSegments/suite2033Segment.ts` containing all 15 slide archetypes pre-populated with realistic institutional data.
   - Inject `suite2033Segment` into `src/stores/initialDeck.ts`.
4. **Zero Yellow-on-Light & Dark Slab Elimination Verification:**
   - Verify all 15 slides render cleanly under light themes (`white-brand`, `corporate-clean`, `paper-editorial`) and dark themes (`midnight-executive`, `obsidian-minimal`).
5. **Print / PDF Presentation Export Check:**
   - Verify that `@media print` renders all slides with high-fidelity vector text.

---

## 3. Implementation Steps
1. Create `src/components/presentation/slides/suite2033/index.ts` (barrel export).
2. Create `src/components/presentation/slides/suite2033/Suite2033SlideRenderer.tsx`:
   - Switch statement over `slide.type` for all 15 archetypes.
   - Pass `activeStep`, `onStepChange`, and `isPrintMode` props.
3. Wire `Suite2033SlideRenderer` into the presentation slide rendering pipeline.
4. Create `src/stores/deckSegments/suite2033Segment.ts`:
   - Export an array of 15 slide data objects constructed via `suite2033Factories.ts`.
5. Update `src/stores/initialDeck.ts` to include `suite2033Segment`.
6. Run build / type check verification to guarantee zero regressions.

---

## 4. Acceptance Criteria
- [x] `npm run build` or `pnpm build` (or Vite typecheck) passes with zero errors.
- [x] All 15 slides display in the presentation navigator and can be toggled through.
- [x] Intra-slide step progression functions on all 8 kinetic multi-step slides.
- [x] 7 flat sovereign slides display full content without pagination.
