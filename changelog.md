# Changelog

All notable changes to the White Presentation System will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.2.2] - 2026-10-02

### Added
- **Canvas Atmospheric Layer Activation:**
  - Integrated `SlideBackground` directly into `PresentationCanvas.tsx` inside `#presentation-root` behind active slides.
  - Activates the full Global PPT atmospheric background: radial spotlight glow (`ellipse 65% 55% at 50% 48%`), 48px cross-hatch coordinate grid, and floating vector tech motifs at 8–12% opacity with wave float animation.
- **Verification & Build Validation:**
  - Automated TypeScript compile check passed with 0 errors (`pnpm exec tsc --noEmit`).
  - Production Vite bundle compilation verified with 0 errors (`pnpm run build`).

## [v1.2.1] - 2026-10-02

### Added
- **Master Presentation Deck Pre-Seeding:**
  - Fully wired all 25 slide archetypes directly into the default `INITIAL_DECK` in `src/stores/initialDeck.ts`.
  - When opening the application or presenting, all 20+ newly synthesized slide archetypes (`GrowthEngine`, `TalentPyramid`, `CostComparison`, `MetricGrid`, `ProblemSolution`, `QuadrantMatrix`, `MarketOpportunity`, `TimelineRoadmap`, `FeatureGrid`, `ArchitectureDiagram`, `DepthStack`, `RevealGrid`, `ProcessCycle`, `StatsCallout`, `CodeTerminal`, `TeamGrid`, `CaseStudy`, `QuoteCallout`, `ComparisonColumns`, `CallToAction`) are loaded and interactively browsable immediately out-of-the-box.
- **Verification & Quality Gates Passed:**
  - Automated TypeScript compile check passed with 0 errors (`pnpm exec tsc --noEmit`).
  - Production Vite bundle compilation verified with 0 errors (`pnpm run build`).
  - Strict <= 100-line component rule validated across all 46 `.tsx` slide components.

## [v1.2.0] - 2026-10-02

### Added
- **Grounded Global PPT & Flat Slide Show Synthesis:**
  - `GrowthEngineSlide` (`growth-engine`): 4-vector compounding growth matrix adapted directly from `global-ppt-v1` (SEO, Ads, Content/Social, AI Video) with growth deltas and live DOM typography.
  - `TalentPyramidSlide` (`talent-pyramid`): Multi-tier capability pyramid with trapezoidal geometric tiers and selectivity filter ratios ("Top 1%", "20 / 1,000").
  - `CostComparisonSlide` (`cost-comparison`): 3-column financial comparison (In-House vs Legacy Agency vs Sovereign Engine) with ROI calculation and net savings summary.
  - `DepthStackSlide` (`depth-stack`): 3D depth-stacked perspective cards with peel-away reveal and step progression.
  - `RevealGridSlide` (`reveal-grid`): Bento feature matrix with staggered spring cell entrance and sequential unveiling.
  - `BeforeAfterShowcaseSlide` (`before-after-showcase`): Bilateral contrast transformation frame with interactive toggle between comparison and focused sovereign views.
- **Intra-Slide Step Progression Engine:**
  - Added `activeStep`, `stepAdvance()`, `stepRewind()`, `jumpToStep()`, and `getActiveSlideMaxSteps()` to `deckStore.ts`.
  - Upgraded `useDeckShortcuts.ts` so `ArrowRight`, `Space`, `Enter`, `PageDown` advance intra-slide steps before advancing slides, enabling fluid presentation pacing.
  - Upgraded `NavigationControls.tsx` chevron controls to trigger intra-slide step progression.
  - Synchronized `StepsSlide`, `TimelineRoadmapSlide`, `ProcessCycleSlide`, `DepthStackSlide`, and `RevealGridSlide` to store-level step state.
- **Atmospheric Canvas & Kinetic Physics Layer:**
  - `SlideBackground.tsx`: Added 3-tier atmospheric layer (radial spotlight glow, 48px geometric cross-hatch grid, and floating vector tech motifs at 8-12% opacity).
  - `motionPhysics.ts`: Exported calibrated spring physics (`STEP_DETAIL_PANE_SPRING [420, 17, 0.8]`, `PROGRESS_RAIL_SPRING [220, 32, 1.0]`, `HALO_SPRING [320, 30, 0.9]`), quintic deceleration easing curves (`[0.22, 1, 0.36, 1]`), and `getHeaderShadow(isDark)`.
- **Architectural & File Sizing Governance:**
  - Extracted seed slides to `src/stores/initialDeck.ts`, reducing `deckStore.ts` from 447 lines to 131 lines.
  - Decomposed `WhiteMasterSlide.tsx` using `WhiteMasterHeroPlate.tsx`, reducing it to 78 lines.
  - 100% of all 45 `.tsx` slide components strictly comply with the $\le 100$-line ceiling (Hard Rule #6).
  - Executive Persona standardization: Alim Ul Karim is consistently titled "Chief Software Engineer".
- **Grounded Specifications & Planning:**
  - Authored comprehensive Module 25 specifications in `02-spec/21-app/25-grounded-global-ppt-and-flat-slide-synthesis/` (01-overview, 02-slide-archetypes-data-contracts, 03-color-and-motion-design-system, 04-verification-gates).

## [v1.1.0] - 2026-10-02

### Added
- **15 New Enterprise Slide Archetypes:**
  - `MetricGridSlide` (`metric-grid`): 4–6 KPI performance cards with delta badges and timeframe pills.
  - `ProblemSolutionSlide` (`problem-solution`): Bilateral challenge vs sovereign solution breakdown.
  - `QuadrantMatrixSlide` (`quadrant-matrix`): 2x2 strategic positioning matrix with plotted nodes.
  - `MarketOpportunitySlide` (`market-opportunity`): TAM / SAM / SOM concentric opportunity sizing tiers with CAGR.
  - `TimelineRoadmapSlide` (`timeline-roadmap`): 4-quarter sequential roadmap with milestone delivery status pills.
  - `FeatureGridSlide` (`feature-grid`): 6-card Bento feature matrix with Lucide icons.
  - `ArchitectureDiagramSlide` (`architecture-diagram`): 4-tier cloud platform layers (Client -> Edge -> Service -> DB).
  - `QuoteCalloutSlide` (`quote-callout`): Massive editorial pull-quote with avatar and credentials.
  - `StatsCalloutSlide` (`stats-callout`): Monumental single metric (10x, 99.99%) with comparison chips.
  - `TeamGridSlide` (`team-grid`): Executive and engineering roster with roles and pedigree.
  - `CaseStudySlide` (`case-study`): Enterprise customer transformation story: Client, Problem, Solution, ROI.
  - `ComparisonColumnsSlide` (`comparison-columns`): 3-column side-by-side model comparison with checkmarks.
  - `ProcessCycleSlide` (`process-cycle`): Continuous 4-stage circular flywheel loop around a central hub.
  - `CodeTerminalSlide` (`code-terminal`): macOS window chrome, syntax-colored logs and command steps.
  - `CallToActionSlide` (`call-to-action`): Closing frame with dual CTAs, contact info, and verification badge.
- **Global PPT Presentation Synthesis:**
  - 10 theme palettes with dark/light dynamic contrast, ink-stamp micro-shadows, and high-contrast text shadows.
  - Kinetic animation classes (`.slide-up-anim`, `.stagger-fade-in`, `.bento-glow-pulse`, `.terminal-cursor-blink`, `.flywheel-spin-slow`).
  - Quintic easing curves (`PRESENTATION_EASE = [0.22, 1, 0.36, 1]`) and audio sync math (`stepVolume(m)`, ducking).
- **Leaf Types & Template Factory Architecture:**
  - `src/types/archetypes.ts`: Leaf type definitions strictly under 300 lines.
  - `src/utils/slideArchetypeFactories.ts`: Decoupled template payloads keeping `SlideCreatorModal.tsx` and `deckStore.ts` strictly within sizing limits.
- **Pure DOM Text Mandate:** 100% live HTML/React typography across all slides with in-place live editing (`contentEditable={isEditMode}`) and theme reactivity.
- **Comprehensive Specifications:** Authored `02-spec/21-app/24-expanded-slide-system-and-global-ppt-synthesis/` (overview, data contracts, design system, verification gates).
