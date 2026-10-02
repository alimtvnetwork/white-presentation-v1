# Subtask 01: Slide Archetypes Architecture, Data Contracts & Component Implementation

> **Subtask Identifier:** `.ai-memory/plans/subtasks/05-26-global-ppt-color-motion-and/01-architecture-and-archetypes.md`  
> **Parent Plan:** Task 26: Global PPT Color, Motion & Expanded Slides (`26-global-ppt-color-motion-and-expanded-slides`)  
> **Assigned Agent Role:** Spec Author 01 / Implementation Workers  
> **Target Release:** `v1.3.0`  
> **Status:** `SPEC-READY`  
> **Author:** Spec Author 01  
> **Updated:** 2026-10-02  

---

## 1. Objective & Scope

This subtask governs the architectural implementation and component delivery for the **15 New Enterprise Slide Archetypes** specified in `02-spec/21-app/26-global-ppt-color-motion-and-expanded-slides/02-slide-archetypes-data-contracts.md`.

The implementation ensures that each slide archetype satisfies:
1. **Pure Live DOM Typography Mandate:** Zero baked-in text in images; all text nodes are rendered directly as accessible, selectable HTML elements with inline editing capabilities.
2. **Canonical 16:9 1920x1080 Viewport Geometry:** Bounding boxes, layout grids, and coordinates conform strictly to the $1920 \times 1080$ virtual reference canvas with zero fractional coordinate drift.
3. **Strict 100-Line Component Modularity:** Every React slide component in `src/components/slides/*.tsx` is strictly bounded to $\le 100$ lines of code, cleanly extracting subcomponents (such as cards, quadrants, and pin hotspots) into `src/components/slides/sub/`.
4. **Positive Boolean Naming Conventions Only:** All state flags, props, and contract fields use positive polarity (`is*`, `has*`, `can*`). Inverted negative flags and explicit `== true` evaluations are strictly forbidden.
5. **Standardized Executive Persona:** The executive persona for **Alim Ul Karim** is strictly designated as **"Chief Software Engineer"** across all templates and components.

---

## 2. Multi-Phase Implementation Roadmap

```
+---------------------------------------------------------------------------------------------------+
|                              SUBTASK 01 IMPLEMENTATION ROADMAP                                    |
+---------------------------------------------------------------------------------------------------+
|  [Phase 1] Leaf-Type Declarations & Contract Unions (src/types/archetypes.ts)                     |
|  [Phase 2] Template Factories & Default JSON Payloads (src/utils/slideArchetypeFactories.ts)      |
|  [Phase 3] Component Implementation Batch A (Slides 01–05: Hook, Commodity, Chapter, Lose, Sprint)|
|  [Phase 4] Component Implementation Batch B (Slides 06–10: Contact, USP, Pricing, FAQ, Logos)    |
|  [Phase 5] Component Implementation Batch C (Slides 11–15: SWOT, Quiz, Hardware, Matrix, Pyramid) |
|  [Phase 6] Canvas Engine Integration (SlideRenderer.tsx, SlideCreatorModal.tsx, deckStore.ts)    |
|  [Phase 7] Quality Gate Verification (TypeScript compilation, AST linter, DOM assertion)         |
+---------------------------------------------------------------------------------------------------+
```

---

### Phase 1: Leaf-Type Declarations & Contract Unions

**Target Files:**
- `src/types/archetypes.ts` (Extend with 15 new slide contracts)
- `src/types/presentation.ts` (Re-export new contracts and expand `SlideData` and `SlideType` unions)

**Action Items:**
1. Declare strongly-typed interfaces extending `BaseSlide`:
   - `AuthenticityHookSlideData`
   - `AvoidCommoditySlideData`
   - `ChapterDividerSlideData`
   - `LoseVsInvestSlideData`
   - `NextStepsSprintSlideData`
   - `ExecutiveContactSlideData`
   - `UspStrikethroughSlideData`
   - `SaaSPricingTiersSlideData`
   - `FaqAccordionSlideData`
   - `ClientLogoWallSlideData`
   - `SwotAnalysisSlideData`
   - `InteractiveQuizSlideData`
   - `HardwareShowcaseSlideData`
   - `CompetitorMatrixSlideData`
   - `ValuePyramidSlideData`
2. Define supporting sub-types (`RealityGapPoint`, `CommodityComparisonItem`, `ChapterTopic`, `ConsequenceItem`, `PayoffItem`, `SprintPhase`, `ExecutivePersona`, `ProofCard`, `PricingTier`, `PricingFeatureItem`, `FaqItem`, `ClientLogo`, `TrustBadge`, `SwotQuadrant`, `QuizOption`, `HardwareHotspot`, `HardwareSpecItem`, `MatrixCapabilityRow`, `PyramidTier`).
3. Enforce positive booleans across all sub-types (`isHighlighted`, `isCompleted`, `isActive`, `isRecommended`, `isIncluded`, `isCorrect`, `isRevealed`, `isKeyDifferentiator`, `hasCriticalImpact`, `hasVerificationBadge`, `isVerified`).
4. Re-export in `src/types/presentation.ts` while keeping total line count under 300 lines.

---

### Phase 2: Template Factories & Catalog Mock Fixtures

**Target Files:**
- `src/utils/slideArchetypeFactories.ts` (Factory generator functions)
- `src/data/initialDeck.ts` (Catalog seed data)

**Action Items:**
1. Implement factory creators with production-grade default content:
   - `createAuthenticityHookSlide(id?: string): AuthenticityHookSlideData`
   - `createAvoidCommoditySlide(id?: string): AvoidCommoditySlideData`
   - `createChapterDividerSlide(id?: string): ChapterDividerSlideData`
   - `createLoseVsInvestSlide(id?: string): LoseVsInvestSlideData`
   - `createNextStepsSprintSlide(id?: string): NextStepsSprintSlideData`
   - `createExecutiveContactSlide(id?: string): ExecutiveContactSlideData`
   - `createUspStrikethroughSlide(id?: string): UspStrikethroughSlideData`
   - `createSaaSPricingTiersSlide(id?: string): SaaSPricingTiersSlideData`
   - `createFaqAccordionSlide(id?: string): FaqAccordionSlideData`
   - `createClientLogoWallSlide(id?: string): ClientLogoWallSlideData`
   - `createSwotAnalysisSlide(id?: string): SwotAnalysisSlideData`
   - `createInteractiveQuizSlide(id?: string): InteractiveQuizSlideData`
   - `createHardwareShowcaseSlide(id?: string): HardwareShowcaseSlideData`
   - `createCompetitorMatrixSlide(id?: string): CompetitorMatrixSlideData`
   - `createValuePyramidSlide(id?: string): ValuePyramidSlideData`
2. Validate that persona in `createExecutiveContactSlide` uses:
   - `name: "Alim Ul Karim"`
   - `role: "Chief Software Engineer"`
   - `bookingUrl: "https://cal.com/riseup-asia"`
3. Register all 15 creators in `ARCHETYPE_FACTORY_MAP`.

---

### Phase 3: Component Implementation Batch A (Slides 01–05)

**Target Files:**
- `src/components/slides/AuthenticityHookSlide.tsx` (Slide 01)
- `src/components/slides/AvoidCommoditySlide.tsx` (Slide 02)
- `src/components/slides/ChapterDividerSlide.tsx` (Slide 03)
- `src/components/slides/LoseVsInvestSlide.tsx` (Slide 04)
- `src/components/slides/NextStepsSprintSlide.tsx` (Slide 05)
- Supporting subcomponents in `src/components/slides/sub/` (e.g. `RealityPointCard.tsx`, `SprintCard.tsx`)

**Action Items:**
1. Construct each component strictly under 100 lines of code.
2. Implement 1920x1080 canonical bounds with `w-[1920px] h-[1080px]`.
3. Support inline editing via `contentEditable={isEditMode}` and `suppressContentEditableWarning`.
4. Implement bilateral contrast columns in `AvoidCommoditySlide` and `LoseVsInvestSlide`.
5. Implement watermark numeral `03` at `fontSize: 380px` in `ChapterDividerSlide`.
6. Implement 4-card horizontal sprint layout in `NextStepsSprintSlide`.

---

### Phase 4: Component Implementation Batch B (Slides 06–10)

**Target Files:**
- `src/components/slides/ExecutiveContactSlide.tsx` (Slide 06)
- `src/components/slides/UspStrikethroughSlide.tsx` (Slide 07)
- `src/components/slides/SaaSPricingTiersSlide.tsx` (Slide 08)
- `src/components/slides/FaqAccordionSlide.tsx` (Slide 09)
- `src/components/slides/ClientLogoWallSlide.tsx` (Slide 10)
- Supporting subcomponents in `src/components/slides/sub/` (e.g. `PricingTierCard.tsx`, `FaqCard.tsx`, `LogoTile.tsx`)

**Action Items:**
1. Construct each component strictly under 100 lines of code.
2. In `ExecutiveContactSlide`, render pure DOM SVG QR code frame and standardized persona for Alim Ul Karim as Chief Software Engineer.
3. In `UspStrikethroughSlide`, implement monumental heading (96–116px) with dynamic strikethrough styling and 3-point proof cluster.
4. In `SaaSPricingTiersSlide`, implement 3-column layout with 1.04x scale elevation and glowing accent border on the recommended tier.
5. In `FaqAccordionSlide`, implement 2-column bento accordion layout with smooth expansion states.
6. In `ClientLogoWallSlide`, implement 2x5 logo grid with hover states and trust badge footer.

---

### Phase 5: Component Implementation Batch C (Slides 11–15)

**Target Files:**
- `src/components/slides/SwotAnalysisSlide.tsx` (Slide 11)
- `src/components/slides/InteractiveQuizSlide.tsx` (Slide 12)
- `src/components/slides/HardwareShowcaseSlide.tsx` (Slide 13)
- `src/components/slides/CompetitorMatrixSlide.tsx` (Slide 14)
- `src/components/slides/ValuePyramidSlide.tsx` (Slide 15)
- Supporting subcomponents in `src/components/slides/sub/` (e.g. `SwotQuadrantBox.tsx`, `QuizOptionCard.tsx`, `HardwareCalloutPin.tsx`, `CompetitorRow.tsx`, `PyramidTierBar.tsx`)

**Action Items:**
1. Construct each component strictly under 100 lines of code.
2. In `SwotAnalysisSlide`, implement 2x2 bento quadrant grid with theme-coordinated accent borders.
3. In `InteractiveQuizSlide`, implement interactive option cards (A, B, C, D) with answer reveal logic and explanatory drawer.
4. In `HardwareShowcaseSlide`, implement isometric frame with interactive pulsing callout pins (`xCoord`, `yCoord`) and specification drawer.
5. In `CompetitorMatrixSlide`, implement tabular matrix with sticky capability column and prominently highlighted our-platform column.
6. In `ValuePyramidSlide`, implement 4-tier horizontal trapezoidal stack with active tier narrative pane.

---

### Phase 6: Canvas Engine & Creator Modal Integration

**Target Files:**
- `src/components/canvas/SlideRenderer.tsx` (Register all 15 new components in render switch)
- `src/components/builder/SlideCreatorModal.tsx` (Add 15 archetypes to creation catalog)
- `src/stores/deckStore.ts` (Verify action dispatchers support new archetype types)

**Action Items:**
1. Add cases for all 15 new types in `SlideRenderer.tsx` using lazy dynamic imports or direct modular imports:
   ```tsx
   case 'authenticity-hook': return <AuthenticityHookSlide slide={slide} />;
   case 'avoid-commodity': return <AvoidCommoditySlide slide={slide} />;
   case 'chapter-divider': return <ChapterDividerSlide slide={slide} />;
   case 'lose-vs-invest': return <LoseVsInvestSlide slide={slide} />;
   case 'next-steps-sprint': return <NextStepsSprintSlide slide={slide} />;
   case 'executive-contact': return <ExecutiveContactSlide slide={slide} />;
   case 'usp-strikethrough': return <UspStrikethroughSlide slide={slide} />;
   case 'saas-pricing-tiers': return <SaaSPricingTiersSlide slide={slide} />;
   case 'faq-accordion': return <FaqAccordionSlide slide={slide} />;
   case 'client-logo-wall': return <ClientLogoWallSlide slide={slide} />;
   case 'swot-analysis': return <SwotAnalysisSlide slide={slide} />;
   case 'interactive-quiz': return <InteractiveQuizSlide slide={slide} />;
   case 'hardware-showcase': return <HardwareShowcaseSlide slide={slide} />;
   case 'competitor-matrix': return <CompetitorMatrixSlide slide={slide} />;
   case 'value-pyramid': return <ValuePyramidSlide slide={slide} />;
   ```
2. Keep `SlideRenderer.tsx` under 300 lines by delegating component rendering cleanly.
3. Register all 15 archetypes in `SlideCreatorModal.tsx` with thumbnail icons, categories, and descriptions.

---

### Phase 7: Quality Gate Verification & Criteria

**Action Items:**
1. Ensure TypeScript compiler passes with 0 type errors on all slide contracts and props.
2. Verify that every single component is $\le 100$ lines of code.
3. Verify that zero negative boolean variables (`isDisabled`, `isNotActive`) exist.
4. Verify that zero rasterized text exists in any archetype.
5. Verify that persona for Alim Ul Karim is strictly "Chief Software Engineer" (zero occurrences of "CEO" or "Founder").

---

## 3. Detailed Verification Gates Checklist

- [ ] **Gate 01: TypeScript Type Checking**  
  Every slide interface must compile without type assertions (`as any`) and extend `BaseSlide` cleanly.
- [ ] **Gate 02: Pure Live DOM Mandate**  
  Zero text embedded in SVG images or raster graphics; all headlines and bullets must be inspectable HTML DOM elements.
- [ ] **Gate 03: 100-Line Component Cap**  
  Every `.tsx` file under `src/components/slides/` must not exceed 100 lines.
- [ ] **Gate 04: Positive Boolean Standard**  
  All state flags use positive prefixes (`is*`, `has*`, `can*`). Zero explicit `== true` evaluations.
- [ ] **Gate 05: Executive Persona Standard**  
  Executive profile must state "Alim Ul Karim" and "Chief Software Engineer" with zero exceptions.
- [ ] **Gate 06: Canonical 1920x1080 Viewport**  
  All slides render without horizontal or vertical scrollbars on a 16:9 canvas.
