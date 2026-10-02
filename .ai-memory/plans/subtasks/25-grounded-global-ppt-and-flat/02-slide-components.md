# Subtask 02: 15 Slide Components & Flat Slide Integration Plan (Task-04 & Task-05)

> **Module:** `.ai-memory/plans/subtasks/25-grounded-global-ppt-and-flat/`  
> **Parent Plan:** [Plan 25: Grounded Global PPT & Flat Slide Show Synthesis](../../pending/25-grounded-global-ppt-and-flat-slide-synthesis.md)  
> **Specification Reference:** [02-Slide Archetypes Data Contracts](../../../02-spec/21-app/25-grounded-global-ppt-and-flat-slide-synthesis/02-slide-archetypes-data-contracts.md) & [04-Verification Gates](../../../02-spec/21-app/25-grounded-global-ppt-and-flat-slide-synthesis/04-verification-gates.md)  
> **Design Guidelines Reference:** [01-Design Principles](../../../02-spec/02-coding-guidelines/24-app-ui-design-system/01-design-principles.md)  
> **Assigned Phases:** Task-04 (15 Slide Archetypes) & Task-05 (Template Factories & Canvas Integration)  
> **Target Release:** `v1.2.0`  
> **Status:** `PLAN-READY`

---

## 1. Executive Summary & Architecture Scope

This subtask defines the comprehensive, step-by-step engineering roadmap for executing **Task-04** (authoring and refactoring 15 high-authority presentation slide archetypes) and **Task-05** (integrating the Flat Slide declarative engine, template factories, canvas renderer, creation modal, and Zustand state store).

Synthesizing proven storytelling patterns from `global-ppt-v1` and the declarative JSON architecture of `flat-slide-show`, these 15 slide archetypes provide enterprise keynote presenters with interactive, mathematically balanced, and highly responsive slide layouts.

```
Architecture & Delivery Roadmap:
├── Task-04: 15 High-Fidelity Slide Components (src/components/slides/*.tsx)
│   ├── Batch 1 (Slides 01–08): Interactive Step, Grid & Structural Archetypes
│   │   ├── 01. StepsSlide (Split sidebar + StepDetailPane spring)
│   │   ├── 02. TimelineSlide (Fluid progress rail + jumping halo)
│   │   ├── 03. ProcessCycleSlide (Connected circle flywheel + SVG arrows)
│   │   ├── 04. DepthStackSlide (3D layered card pop & peel)
│   │   ├── 05. RevealGridSlide (Bento 6-card grid with staggered springs)
│   │   ├── 06. GrowthEngineSlide (4 marketing/revenue growth channels)
│   │   ├── 07. TalentPyramidSlide (Multi-tier talent capability pyramid)
│   │   └── 08. CostComparisonSlide (3-column financial ROI & benchmark comparison)
│   └── Batch 2 (Slides 09–15): Authority, Technical & Conversion Archetypes
│       ├── 09. TechStackSlide (Layered tech ecosystem + category filter pills)
│       ├── 10. ProblemSolutionSlide (Bilateral transformation split)
│       ├── 11. MetricGridSlide (Executive KPI dashboard + delta badges)
│       ├── 12. BeforeAfterShowcaseSlide (Transformation split with interactive wiper)
│       ├── 13. TestimonialsSlide (High-authority client endorsement cards)
│       ├── 14. CodeTerminalSlide (macOS dark terminal chrome + typing reveal)
│       └── 15. CallToActionSlide (High-conversion closing decision frame)
└── Task-05: Flat Slide Engine & Canvas Integration
    ├── Leaf Types Segregation: src/types/archetypes.ts (limit: 300 lines)
    ├── Master Type Re-Exports: src/types/presentation.ts (limit: 300 lines)
    ├── Template Factories: src/utils/slideArchetypeFactories.ts (limit: 300 lines)
    ├── Canvas Dispatch: src/components/presentation/SlideRenderer.tsx
    ├── Creator Modal Catalog: src/components/modals/SlideCreatorModal.tsx
    └── Deck Store Synchronization: src/store/deckStore.ts
```

---

## 2. Hard Governance & Quality Constraints

Every component, utility, and type interface implemented across Task-04 and Task-05 must strictly comply with the canonical verification gates:

1. **100-Line Component Ceiling (Gate 4):** Every React slide component (`src/components/slides/*.tsx`) must remain strictly $\le 100$ lines. Decompose child views into extracted subcomponents (e.g., `StepDetailPane.tsx`, `TimelineRail.tsx`).
2. **Leaf Types Segregation (< 300 Lines, Gate 5):** `src/types/presentation.ts` must not exceed 300 lines. All new slide interfaces must reside in `src/types/archetypes.ts`.
3. **Pure Live DOM Typography (Gate 1):** Zero rasterized text bitmaps. Titles, KPI numbers, and badges must render as pure DOM text nodes styled with fluid `clamp()` formulas.
4. **Positive Boolean Semantics (Gate 7):** All flags must use positive semantics (`isDark`, `hasGlow`, `hasDotMatrix`, `isVisible`, `isInteractive`, `hasActiveStep`). Explicit checks (`== true`, `=== true`) and negative naming (`disabled`, `isNotDark`) are strictly banned.
5. **Standardized Executive Persona:** The executive profile for Alim Ul Karim must be consistently specified as `"Chief Software Engineer"`.
6. **Ink-Stamp Header Shadows:** Text headers must apply `getHeaderShadow(isDark)` (`rgb(0 0 0) 1px 0.7px 0px` for dark; `rgb(255 255 255) 1px 0.7px 0px` for light).
7. **Total Ban on Git CLI Commands:** Subagents and workers must never run `git` commands. Git commits are reserved exclusively for the Lead Orchestrator in Phase 3.
8. **Zero Build/Test Runs in Routine Turns:** Rely on static inspection and linting; avoid running `npm run build` or heavy test runners during iterative turns.

---

## 3. Task-04: The 15 Slide Archetype Specifications

### 3.1 Batch 1 (Slides 01–08): Interactive Step, Grid & Structural Archetypes

#### 01. `StepsSlide` (`src/components/slides/StepsSlide.tsx` - $\le 100$ lines)
- **Role:** Split interactive process breakdown. Left sidebar displays numbered step list; right pane displays the active step's deep narrative card (`StepDetailPane`).
- **Kinetic Physics:** Spring transition on active pane switch:
  $$\text{stiffness} = 420, \quad \text{damping} = 17, \quad \text{mass} = 0.80$$
- **Step Progression:** Clicking a step button or pressing `ArrowRight` increments `activeStep`, playing audio cue `/sounds/click.mp3` and pulsing the step badge.
- **Decomposition:** Extract `StepDetailPane` to `src/components/slides/steps/StepDetailPane.tsx`.

#### 02. `TimelineSlide` (`src/components/slides/TimelineSlide.tsx` - $\le 100$ lines)
- **Role:** Chronological enterprise delivery roadmap across quarters (Q1–Q4) or sprint milestones.
- **Visual Architecture:** Horizontal fluid progress rail connecting circular step nodes. An illuminated halo spring-jumps to the currently active milestone.
- **Spring Constant:** $\text{stiffness} = 320, \quad \text{damping} = 30, \quad \text{mass} = 0.90$.
- **Step Progression:** Advances active quarter milestone with directional SVG beam fill.

#### 03. `ProcessCycleSlide` (`src/components/slides/ProcessCycleSlide.tsx` - $\le 100$ lines)
- **Role:** Continuous operational flywheel (e.g., Discover $\to$ Build $\to$ Measure $\to$ Scale).
- **Visual Architecture:** Circular orbit layout with center brand anchor and 4–5 outer orbiting phase nodes connected by curved SVG arrow vectors.
- **Animation:** Active phase glows with `--pres-accent-glow`; traveling stroke dash on connecting arcs.
- **Step Progression:** Step advances rotation focus to the next stage in the flywheel.

#### 04. `DepthStackSlide` (`src/components/slides/DepthStackSlide.tsx` - $\le 100$ lines)
- **Role:** 3D card depth layering showcasing architectural stacks or strategic priorities.
- **Visual Architecture:** Cards stacked along the z-axis with subtle isometric perspective (`perspective: 1000px`, `transform: rotateX(12deg)`).
- **Kinetic Interaction:** Active card peels forward and pops to the front with shadow bloom, while background cards smoothly rescale.

#### 05. `RevealGridSlide` (`src/components/slides/RevealGridSlide.tsx` - $\le 100$ lines)
- **Role:** Bento 6-card feature grid highlighting sovereign platform capabilities.
- **Visual Architecture:** Asymmetrical Bento grid with primary double-width hero card and 5 satellite feature tiles.
- **Animation:** Staggered spring reveals using `.stagger-1` through `.stagger-6` and `recCardFadeIn`.

#### 06. `GrowthEngineSlide` (`src/components/slides/GrowthEngineSlide.tsx` - $\le 100$ lines)
- **Role:** 4 scalable enterprise growth pillars (SEO & Content, Paid Acquisition, Social Media, AI Video Production) adapted directly from Global PPT.
- **Visual Architecture:** 4-column balanced card deck with channel icon badges, key performance levers, conversion rates, and ROI multipliers.
- **Styling:** Adheres to 60/30/10 balance with elevated cards on Plane 1 and active channel on Plane 2.

#### 07. `TalentPyramidSlide` (`src/components/slides/TalentPyramidSlide.tsx` - $\le 100$ lines)
- **Role:** Engineering talent vetting hierarchy showcasing top 1% recruitment selectivity.
- **Visual Architecture:** Multi-tier tapered pyramid structure:
  - Tier 1 (Apex): Top 1% Principal Architects & Lead AI Engineers.
  - Tier 2: Senior Full-Stack & Systems Engineers.
  - Tier 3: Rigorous Technical Screening & Algorithmic Vetting.
  - Tier 4 (Base): Global Applicant Pool.
- **Decomposition:** Extract individual tier rows into `src/components/slides/pyramid/PyramidTierRow.tsx`.

#### 08. `CostComparisonSlide` (`src/components/slides/CostComparisonSlide.tsx` - $\le 100$ lines)
- **Role:** 3-column financial transparency benchmark comparing Traditional In-House, Conventional Outsourcing, and Sovereign High-Performance Model.
- **Visual Architecture:** 3 comparative cards. The sovereign recommended tier features highlighted accent borders (`--pres-accent`), elevated shadow, and savings badge.
- **Data Points:** Cost per sprint, development velocity, senior talent ratio, and annualized cost savings.

---

### 3.2 Batch 2 (Slides 09–15): Authority, Technical & Conversion Archetypes

#### 09. `TechStackSlide` (`src/components/slides/TechStackSlide.tsx` - $\le 100$ lines)
- **Role:** Layered technology ecosystem catalog categorized by stack tier (Frontend, Backend, AI & Data, Cloud & Infrastructure).
- **Interactive Affordance:** Clickable category filter chips; selecting a category elevates corresponding cards while dimming others.
- **Data Model:** `TechCategory[]` with tech badge items containing name, icon key, and version/status tag.

#### 10. `ProblemSolutionSlide` (`src/components/slides/ProblemSolutionSlide.tsx` - $\le 100$ lines)
- **Role:** Bilateral executive contrast comparing legacy architectural friction against modernized sovereign solutions.
- **Visual Architecture:** Left pane (Legacy Bottlenecks) in muted red/amber with warning badges; right pane (Modernized Architecture) in vibrant accent with checkmark pills.
- **Data Model:** Matched pairs of `{ challenge: string; solution: string; metricImpact: string }`.

#### 11. `MetricGridSlide` (`src/components/slides/MetricGridSlide.tsx` - $\le 100$ lines)
- **Role:** High-impact executive KPI scorecard displaying hard business and engineering performance metrics.
- **Visual Architecture:** 4-card metric grid. Each card displays a massive display number (`clamp(36px, 4vw, 64px)`), directional trend delta pill (`+312% YoY`), timeframe badge, and explanatory narrative footnote.
- **DOM Typography:** Pure live DOM monospace digits using `'JetBrains Mono'`.

#### 12. `BeforeAfterShowcaseSlide` (`src/components/slides/BeforeAfterShowcaseSlide.tsx` - $\le 100$ lines)
- **Role:** Interactive transformation showcase comparing legacy application state to newly engineered architecture.
- **Kinetic Mechanics:** Interactive split slider or click-toggle divider triggering `baScrollPan` animation.
- **Data Model:** Dual state models with titles, visual evidence panels, and comparative benchmark tags.

#### 13. `TestimonialsSlide` (`src/components/slides/TestimonialsSlide.tsx` - $\le 100$ lines)
- **Role:** High-credibility executive endorsements and client validation cards.
- **Visual Architecture:** 2–3 quote cards featuring prominent typographic pull-quotes, client photo/avatar, verified credential badge, company name, and star rating.
- **Visual Restraint:** Cards rest on Plane 1 with subtle borders; active testimonial elevates to Plane 2 with accent aura.

#### 14. `CodeTerminalSlide` (`src/components/slides/CodeTerminalSlide.tsx` - $\le 100$ lines)
- **Role:** Developer-centric technical showcase featuring a live simulated macOS terminal window.
- **Visual Architecture:** Terminal chrome with macOS window control dots (red, yellow, green), tab bar, syntax-colored command sequence, and pulsing terminal cursor.
- **Animation:** Staggered typing reveal of execution commands and success return payloads.

#### 15. `CallToActionSlide` (`src/components/slides/CallToActionSlide.tsx` - $\le 100$ lines)
- **Role:** High-conversion keynote closing slide driving immediate stakeholder decisions.
- **Visual Architecture:** Bold headline display hero, dual magnetic CTA buttons (Primary Accent: "Schedule Architecture Review"; Secondary Glass: "Download Whitepaper"), QR calendar booking card, and direct contact details for Alim Ul Karim ("Chief Software Engineer").

---

## 4. Task-05: Flat Slide Engine & Canvas Integration

Task-05 bridges the 15 slide archetypes with the declarative presentation runtime, ensuring seamless persistence, modal authoring, and canvas rendering:

```
Declarative Integration Architecture:
┌────────────────────────────┐      ┌───────────────────────────────┐
│     JSON Presentation      │ ───> │  slideArchetypeFactories.ts   │
│  (*.deck.json, slide.json) │      │  (Default Mock Data & Schemas)│
└────────────────────────────┘      └───────────────────────────────┘
              │                                     │
              ▼                                     ▼
┌────────────────────────────┐      ┌───────────────────────────────┐
│       src/store/           │ ───> │  SlideRenderer.tsx Dispatch   │
│       deckStore.ts         │      │  (15 Archetype Switch Cases)  │
└────────────────────────────┘      └───────────────────────────────┘
              │                                     │
              ▼                                     ▼
┌────────────────────────────┐      ┌───────────────────────────────┐
│   SlideCreatorModal.tsx    │      │  1920x1080 Reference Canvas   │
│   (15-Archetype Catalog)   │      │  (Pure DOM Live Typography)   │
└────────────────────────────┘      └───────────────────────────────┘
```

### 4.1 Leaf Types Architecture (`src/types/archetypes.ts` - $\le 300$ lines)
- Define dedicated data models for all 15 archetypes:
  - `StepsSlideData`, `TimelineSlideData`, `ProcessCycleSlideData`, `DepthStackSlideData`
  - `RevealGridSlideData`, `GrowthEngineSlideData`, `TalentPyramidSlideData`, `CostComparisonSlideData`
  - `TechStackSlideData`, `ProblemSolutionSlideData`, `MetricGridSlideData`, `BeforeAfterShowcaseSlideData`
  - `TestimonialsSlideData`, `CodeTerminalSlideData`, `CallToActionSlideData`
- Export discriminated union `SlideArchetypeData` combining all 15 interfaces.
- Re-export cleanly from `src/types/presentation.ts` while keeping `presentation.ts` strictly $\le 300$ lines.

### 4.2 Template Factories (`src/utils/slideArchetypeFactories.ts` - $\le 300$ lines)
- Factory generator functions producing complete, production-ready default slide objects with authentic enterprise copy (zero `lorem ipsum`):
  ```typescript
  export function createStepsSlideDefault(): StepsSlideData { ... }
  export function createTimelineSlideDefault(): TimelineSlideData { ... }
  export function createProcessCycleSlideDefault(): ProcessCycleSlideData { ... }
  // ... functions for all 15 archetypes
  ```
- Map helper `createSlideFromArchetype(type: SlideType): BaseSlide & Record<string, unknown>`.

### 4.3 Canvas Dispatcher (`src/components/presentation/SlideRenderer.tsx`)
- Implement exhaustive switch-case mapping the active slide's `type` to its corresponding React component:
  ```typescript
  switch (slide.type) {
    case 'steps': return <StepsSlide slide={slide as StepsSlideData} activeStep={activeStep} />;
    case 'timeline': return <TimelineSlide slide={slide as TimelineSlideData} activeStep={activeStep} />;
    case 'process-cycle': return <ProcessCycleSlide slide={slide as ProcessCycleSlideData} activeStep={activeStep} />;
    // ... all 15 archetype cases
    default: return <FallbackSlide slide={slide} />;
  }
  ```

### 4.4 Slide Creator Catalog (`src/components/modals/SlideCreatorModal.tsx`)
- Visual category groupings:
  - **Process & Narrative:** `steps`, `timeline`, `process-cycle`, `depth-stack`
  - **Capability & Metrics:** `reveal-grid`, `growth-engine`, `talent-pyramid`, `metric-grid`
  - **Comparison & Technical:** `cost-comparison`, `tech-stack`, `problem-solution`, `before-after`, `code-terminal`
  - **Validation & Action:** `testimonials`, `call-to-action`
- Each card shows archetype name, description, category badge, and thumbnail preview.
- Keyboard navigation (Arrow keys + Enter) and quick search filtering.

### 4.5 Deck Store Synchronization (`src/store/deckStore.ts`)
- Atomic Zustand mutators:
  - `addSlideWithArchetype(archetype: SlideType, insertIndex?: number)`
  - `advanceActiveSubStep()`: Increments `activeStep` bounded by `slide.stepCount || 1`, playing audio cue.
  - `rewindActiveSubStep()`: Decrements `activeStep` down to 0.
  - `updateSlideData(slideId: string, partial: Partial<SlideData>)`

---

## 5. File Sizing Budget & File Allocation Table

| Target File | Action | Purpose & Scope | Hard Line Ceiling |
|:---|:---:|:---|:---:|
| `src/types/archetypes.ts` | Create | Leaf type data interfaces for all 15 archetypes | $\le 300$ lines |
| `src/types/presentation.ts` | Edit | Re-export leaf types; update `SlideType` union | $\le 300$ lines |
| `src/utils/slideArchetypeFactories.ts` | Create | Default payload factories for 15 archetypes | $\le 300$ lines |
| `src/components/slides/StepsSlide.tsx` | Create | Split steps slide with sidebar & step detail | $\le 100$ lines |
| `src/components/slides/steps/StepDetailPane.tsx`| Create | Subcomponent for active step card | $\le 80$ lines |
| `src/components/slides/TimelineSlide.tsx` | Create | Progress rail with jumping halo | $\le 100$ lines |
| `src/components/slides/ProcessCycleSlide.tsx` | Create | Connected circular flywheel | $\le 100$ lines |
| `src/components/slides/DepthStackSlide.tsx` | Create | 3D layered card pop & peel | $\le 100$ lines |
| `src/components/slides/RevealGridSlide.tsx` | Create | Bento 6-card grid with staggered springs | $\le 100$ lines |
| `src/components/slides/GrowthEngineSlide.tsx` | Create | 4 marketing/revenue growth channels | $\le 100$ lines |
| `src/components/slides/TalentPyramidSlide.tsx`| Create | Vetting hierarchy pyramid | $\le 100$ lines |
| `src/components/slides/pyramid/PyramidTierRow.tsx`| Create| Subcomponent for pyramid tier | $\le 75$ lines |
| `src/components/slides/CostComparisonSlide.tsx`| Create | 3-column financial comparison | $\le 100$ lines |
| `src/components/slides/TechStackSlide.tsx` | Create | Layered tech ecosystem with filter chips | $\le 100$ lines |
| `src/components/slides/ProblemSolutionSlide.tsx`| Create | Bilateral transformation split | $\le 100$ lines |
| `src/components/slides/MetricGridSlide.tsx` | Create | Executive KPI scorecard with delta pills | $\le 100$ lines |
| `src/components/slides/BeforeAfterShowcaseSlide.tsx`| Create| Split comparison with interactive wiper | $\le 100$ lines |
| `src/components/slides/TestimonialsSlide.tsx` | Create | Executive quote cards with verification | $\le 100$ lines |
| `src/components/slides/CodeTerminalSlide.tsx` | Create | macOS terminal window with typing steps | $\le 100$ lines |
| `src/components/slides/CallToActionSlide.tsx` | Create | Closing conversion frame with dual CTAs | $\le 100$ lines |
| `src/components/presentation/SlideRenderer.tsx`| Edit | 15-archetype dispatcher switch | $\le 120$ lines |
| `src/components/modals/SlideCreatorModal.tsx` | Edit | 15-archetype visual creation modal | $\le 280$ lines |
| `src/store/deckStore.ts` | Edit | Sub-step progression & slide mutation actions | $\le 350$ lines |

---

## 6. Execution Order & Phase 2 Worker Dispatch Plan

```
Phase 2 Implementation Queue:
├── Micro-Batch A: Leaf Types & Data Contracts
│   ├── Step 1: Create src/types/archetypes.ts with all 15 interfaces
│   └── Step 2: Update src/types/presentation.ts to re-export leaf types cleanly
├── Micro-Batch B: Template Factories & State Mutators
│   ├── Step 3: Implement src/utils/slideArchetypeFactories.ts for all 15 slides
│   └── Step 4: Update src/store/deckStore.ts with sub-step progression & mutators
├── Micro-Batch C: Batch 1 Slide Archetypes (Slides 01–08)
│   ├── Step 5: Implement StepsSlide.tsx + StepDetailPane.tsx
│   ├── Step 6: Implement TimelineSlide.tsx
│   ├── Step 7: Implement ProcessCycleSlide.tsx
│   ├── Step 8: Implement DepthStackSlide.tsx
│   ├── Step 9: Implement RevealGridSlide.tsx
│   ├── Step 10: Implement GrowthEngineSlide.tsx
│   ├── Step 11: Implement TalentPyramidSlide.tsx + PyramidTierRow.tsx
│   └── Step 12: Implement CostComparisonSlide.tsx
├── Micro-Batch D: Batch 2 Slide Archetypes (Slides 09–15)
│   ├── Step 13: Implement TechStackSlide.tsx
│   ├── Step 14: Implement ProblemSolutionSlide.tsx
│   ├── Step 15: Implement MetricGridSlide.tsx
│   ├── Step 16: Implement BeforeAfterShowcaseSlide.tsx
│   ├── Step 17: Implement TestimonialsSlide.tsx
│   ├── Step 18: Implement CodeTerminalSlide.tsx
│   └── Step 19: Implement CallToActionSlide.tsx
└── Micro-Batch E: Canvas Dispatch & Creation Modal Integration
    ├── Step 20: Update SlideRenderer.tsx with all 15 cases
    └── Step 21: Update SlideCreatorModal.tsx with visual categories & previews
```

---

## 7. Verification Checklist for Subtask Execution

Each micro-batch must verify compliance against this checklist before marking completion:

- [ ] All `.tsx` slide component files strictly $\le 100$ lines.
- [ ] `src/types/presentation.ts` strictly $\le 300$ lines.
- [ ] `src/types/archetypes.ts` strictly $\le 300$ lines.
- [ ] `src/utils/slideArchetypeFactories.ts` strictly $\le 300$ lines.
- [ ] Zero negative boolean flags (`isNot*`, `disabled`); only positive flags (`isDark`, `hasGlow`).
- [ ] Zero instances of `== true` in conditionals.
- [ ] All text rendered as pure live DOM text nodes (no rasterized bitmaps).
- [ ] Alim Ul Karim executive persona consistently styled as `"Chief Software Engineer"`.
- [ ] Zero Git CLI commands executed during subagent worker execution.
- [ ] Zero unauthorized full build or test commands executed.

---

## 8. Cross-Reference Index

- Master Architecture Overview: [01-architecture-overview.md](../../../02-spec/21-app/25-grounded-global-ppt-and-flat-slide-synthesis/01-architecture-overview.md)
- Slide Archetypes & Data Contracts: [02-slide-archetypes-data-contracts.md](../../../02-spec/21-app/25-grounded-global-ppt-and-flat-slide-synthesis/02-slide-archetypes-data-contracts.md)
- Color & Motion Design System: [03-color-and-motion-design-system.md](../../../02-spec/21-app/25-grounded-global-ppt-and-flat-slide-synthesis/03-color-and-motion-design-system.md)
- Quality Verification Gates: [04-verification-gates.md](../../../02-spec/21-app/25-grounded-global-ppt-and-flat-slide-synthesis/04-verification-gates.md)
- UI Design Principles: [01-design-principles.md](../../../02-spec/02-coding-guidelines/24-app-ui-design-system/01-design-principles.md)
- Subtask 01 Plan: [01-spec-and-themes.md](./01-spec-and-themes.md)
- Subtask 04 Plan (Batch 2 Detail): [04-batch-2-slides.md](./04-batch-2-slides.md)
