# Subtask 06: Flat Global Suite Slide Renderer, Delegation & Deck Integration Plan

> **Module:** `.ai-memory/plans/subtasks/38-global-ppt-flat-step-interactive-suite/`  
> **Parent Plan:** Module 38: Global PPT Flat Step Interactive Suite  
> **Specification References:**  
> - [01-Overview](../../../02-spec/21-app/38-global-ppt-flat-step-interactive-suite/01-overview.md)  
> - [02-Data Contracts](../../../02-spec/21-app/38-global-ppt-flat-step-interactive-suite/02-data-contracts.md)  
> - [03-Theme Motion & Flat Progression](../../../02-spec/21-app/38-global-ppt-flat-step-interactive-suite/03-theme-motion-and-flat-progression.md)  
> - [04-Verification Gates](../../../02-spec/21-app/38-global-ppt-flat-step-interactive-suite/04-verification-gates.md)  
> **Status:** Pending Implementation  
> **Target Release:** `v1.9.0`  

---

## 1. Executive Summary & Subtask Objective

Subtask 06 integrates the 15 new slide archetypes of Module 38 into the master presentation rendering pipeline. It constructs the dedicated dispatcher `FlatGlobalSuiteSlideRenderer.tsx`, inserts it into `CustomizationSlideRenderer.tsx` as an upstream delegate before `WhiteMasterSlide`, registers sample presentation fixtures in `src/stores/initialDeck.ts`, and verifies complete compliance with the 12-Dimensional Quality Verification Matrix.

### Core Architecture Mandates:
1. **Renderer Sizing Cap ($\le 100$ lines):** `FlatGlobalSuiteSlideRenderer.tsx` routes all 15 archetypes using concise modular dispatch while strictly remaining $\le 100$ physical lines.
2. **Backward Compatible Delegation Cascade:** Unrecognized slide types seamlessly pass down the renderer chain without breaking existing archetypes (1 to 60).
3. **Multi-Step Presentation Seeding:** `initialDeck.ts` incorporates authentic demo slides for the 15 archetypes with realistic technical and operational enterprise content.
4. **Persona Standardization:** All slide fixtures referencing Alim Ul Karim must strictly designate him as **"Chief Software Engineer"**.
5. **Rule R1 Zero Full Builds/Tests Ban:** No `npm run build` or full test suite invocations during routine turns; verification is performed exclusively via fast static checks (`npx tsc --noEmit` and targeted Python scripts).
6. **Subagent Git Isolation:** Workers must not execute any git commands (`git add`, `git commit`, `git push`, `git status`).

---

## 2. File Sizing Budgets & Target Scope

| File Path | Action | Description | Physical Line Ceiling |
|:---|:---:|:---|:---:|
| `src/components/slides/FlatGlobalSuiteSlideRenderer.tsx` | Create | Modular dispatcher for archetypes 01 through 15 | $\le 95$ lines |
| `src/components/slides/CustomizationSlideRenderer.tsx` | Modify | Master customization renderer chaining delegation to `FlatGlobalSuiteSlideRenderer` | $\le 100$ lines |
| `src/stores/initialDeck.ts` | Modify | Presentation deck registration with authentic multi-step sample slides | $\le 550$ lines |
| `src/utils/stepProgression.ts` | Modify | Step count calculation registration for the new archetypes | $\le 180$ lines |

---

## 3. Step-by-Step Implementation Sequence

### Step 1: Implement `FlatGlobalSuiteSlideRenderer.tsx`
- Create `src/components/slides/FlatGlobalSuiteSlideRenderer.tsx`.
- Import the 15 slide components from `src/components/slides/flatglobal/`:
  1. `interactive-branching-close` $\to$ `<InteractiveBranchingCloseSlide slide={slide} />`
  2. `before-after-showcase-pan` $\to$ `<BeforeAfterShowcasePanSlide slide={slide} />`
  3. `search-serp-proof-lightbox` $\to$ `<SearchSerpProofLightboxSlide slide={slide} />`
  4. `cognitive-inversion-punchline` $\to$ `<CognitiveInversionPunchlineSlide slide={slide} />`
  5. `talent-pyramid-funnel-svg` $\to$ `<TalentPyramidFunnelSvgSlide slide={slide} />`
  6. `hexagonal-tech-cluster` $\to$ `<HexagonalTechClusterSlide slide={slide} />`
  7. `connected-roadmap-rail-pulse` $\to$ `<ConnectedRoadmapRailPulseSlide slide={slide} />`
  8. `campaign-performance-lightbox` $\to$ `<CampaignPerformanceLightboxSlide slide={slide} />`
  9. `executive-roster-keypad` $\to$ `<ExecutiveRosterKeypadSlide slide={slide} />`
  10. `flat-step-process-flow` $\to$ `<FlatStepProcessFlowSlide slide={slide} />`
  11. `flat-split-narrative-stepper` $\to$ `<FlatSplitNarrativeStepperSlide slide={slide} />`
  12. `flat-timeline-milestone-rail` $\to$ `<FlatTimelineMilestoneRailSlide slide={slide} />`
  13. `flat-reveal-bento-grid` $\to$ `<FlatRevealBentoGridSlide slide={slide} />`
  14. `flat-depth-sentence-stack` $\to$ `<FlatDepthSentenceStackSlide slide={slide} />`
  15. `flat-typewriter-code-walkthrough` $\to$ `<FlatTypewriterCodeWalkthroughSlide slide={slide} />`
- If the slide type does not match any of the 15, return `null`.
- Verify the physical line count of `FlatGlobalSuiteSlideRenderer.tsx` is strictly $\le 95$ lines.

### Step 2: Wire Delegation into `CustomizationSlideRenderer.tsx`
- In `src/components/slides/CustomizationSlideRenderer.tsx`:
  - Import `FlatGlobalSuiteSlideRenderer`.
  - In the default fallback branch prior to `WhiteMasterSlide`, delegate to `<FlatGlobalSuiteSlideRenderer slide={slide} />`.
  - Maintain the physical line count of `CustomizationSlideRenderer.tsx` strictly $\le 100$ lines.

### Step 3: Register Step Count Resolution in `src/utils/stepProgression.ts`
- Add step count resolvers for the multi-step archetypes:
  - `flat-step-process-flow` $\to$ `slide.stages.length`
  - `flat-split-narrative-stepper` $\to$ `slide.steps.length`
  - `flat-timeline-milestone-rail` $\to$ `slide.milestones.length`
  - `flat-reveal-bento-grid` $\to$ `slide.cells.length`
  - `flat-depth-sentence-stack` $\to$ `slide.sentences.length`
  - `flat-typewriter-code-walkthrough` $\to$ `slide.stanzas.length`
  - `cognitive-inversion-punchline` $\to$ `slide.inversions.length`
  - `talent-pyramid-funnel-svg` $\to$ `slide.tiers.length`
  - `connected-roadmap-rail-pulse` $\to$ `slide.phases.length`
  - All flat sovereign archetypes resolve to `1`.

### Step 4: Seed Presentation Slides in `src/stores/initialDeck.ts`
- Use type-safe factory helpers from `src/utils/flatGlobalSuiteFactories.ts` to instantiate sample slides for each of the 15 archetypes.
- Standardize all executive references: Alim Ul Karim, Chief Software Engineer.
- Ensure all multi-step slides have complete stage, milestone, and sentence data.

### Step 5: Execute 12-Dimensional Quality Verification Matrix
Execute fast targeted checks:
1. **Component Sizing ($\le 100$ lines):**
   ```bash
   python -c "import pathlib, sys; bad = [f for f in pathlib.Path('src/components').glob('**/*.tsx') if len(f.read_text(encoding='utf-8').splitlines()) > 100]; sys.exit(1 if bad else 0)"
   ```
2. **Rule R1 Zero Full Builds/Tests:** Confirm no build or test scripts were invoked.
3. **Typecheck (< 5s):**
   ```bash
   npx tsc --noEmit
   ```
4. **Positive Booleans:** Confirm zero negative booleans (`isNot*`, `disabled`).
5. **Persona Standardization:** Confirm Alim Ul Karim is strictly "Chief Software Engineer".
6. **Subagent Git Command Check:** Confirm zero git commands executed.

---

## 4. Verification Checklist & Success Criteria

- [ ] `FlatGlobalSuiteSlideRenderer.tsx` implemented and strictly $\le 95$ lines.
- [ ] `CustomizationSlideRenderer.tsx` successfully delegates to `FlatGlobalSuiteSlideRenderer` and remains strictly $\le 100$ lines.
- [ ] `initialDeck.ts` seeded with 15 new slide archetypes with Alim Ul Karim as "Chief Software Engineer".
- [ ] `stepProgression.ts` resolves step counts for all 15 archetypes without phantom steps.
- [ ] Fast typecheck passes with `npx tsc --noEmit` returning exit code 0.
- [ ] Zero `.tsx` components in `src/components/` exceed 100 lines.
- [ ] All functions contain $\le 15$ lines.
- [ ] Zero git commands executed by subagents.
- [ ] Ready for final atomic GitMap commit by the Lead Orchestrator.
