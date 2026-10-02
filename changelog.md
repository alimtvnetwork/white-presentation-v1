# Changelog

All notable changes to the White Presentation System will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
