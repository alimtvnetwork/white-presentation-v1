# 01-Architecture-Spec: Global PPT Themes, Type Disambiguation & 15 Modern Slide Archetypes

> **Specification Identifier:** `02-spec/21-app/18-presentation-global-ppt-themes-and-15/01-architecture-spec.md`  
> **Status:** `APPROVED CANONICAL ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.7.0`  
> **Author:** Spec Subagent 01  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  
> **Created:** 2026-10-03  
> **Domain:** Type System Disambiguation, Multi-Step Engine Unification, Slide Creator Modal Integration, 15 Modern Enterprise Slide Archetypes, Northern UI/UX Typography Standard  

---

## 1. Executive Summary & Problem Space

Enterprise presentation runtimes demand uncompromising type integrity, seamless kinetic navigation, and modular component extension. In the current White Presentation codebase, three critical architectural friction points have emerged across the type layer, step progression runtime, and slide creation workflow:

1. **TS2308 Duplicate Export Collision (`FlywheelStage`):**  
   Both modern transformation types (`src/types/modern/transformationTypes.ts`) and next-gen deep-tech types (`src/types/nextgen/deepTechGovernanceTypes.ts`) export an interface named `FlywheelStage`. When both modules are re-exported via wildcard exports (`export * from './modernArchetypes'` and `export * from './nextGenArchetypes'`), the TypeScript compiler issues `TS2308: Module ... has already exported a member named 'FlywheelStage'`. This blocks strict zero-warning compilation.

2. **Fragmented Multi-Step Navigation Engine (`getSlideMaxSteps`):**  
   The primary navigation store (`src/stores/deckStore.ts`) already integrates `isModernSlide` and `calculateModernSlideStepCount`. However, the utility step progression engine (`src/utils/stepProgression.ts`) maintains an outdated `getSlideMaxSteps(slide)` implementation that only accounts for `isGlobalPptSlideType`. Consequently, auxiliary HUD progress rails, dynamic bezier connector calculations, and standalone step calculators default to `1` step for all modern slides, breaking intra-slide step advancement and visual progress indicators.

3. **Slide Creator Modal Isolation:**  
   The slide archetype registry (`src/utils/slideArchetypeFactories.ts`) aggregates and re-exports extended, expanded, enterprise, kinetic suite, and next-gen archetypes into `ARCHETYPE_OPTIONS`. However, the 15 modern slide archetypes—despite having complete factories and metadata in `src/utils/modern/registry.ts`—are absent from `ARCHETYPE_OPTIONS` and omitted from the dispatch switch in `createArchetypeSlide()`. As a result, the Slide Creator Modal (`src/components/builder/SlideCreatorModal.tsx`) cannot list or instantiate any of the 15 modern slides.

```
+---------------------------------------------------------------------------------------------------+
|                        MODERN ARCHETYPE INTEGRATION ARCHITECTURE                                  |
+---------------------------------------------------------------------------------------------------+
|  [Type Disambiguation]        --> Rename modern FlywheelStage -> AiFlywheelStage                  |
|                                   Eliminates TS2308 duplicate export collision with NextGen       |
|  [Step Engine Unification]    --> Standardize getSlideMaxSteps in stepProgression.ts & deckStore  |
|                                   Evaluates isModernSlide & calculateModernSlideStepCount         |
|  [Slide Creator Modal]        --> Register MODERN_ARCHETYPE_OPTIONS in slideArchetypeFactories.ts |
|                                   Dispatch MODERN_FACTORIES in createArchetypeSlide()             |
|  [15 Modern Archetypes]       --> 5 Transformation Workflows + 5 SaaS Financials + 5 Boardroom    |
|  [Northern UI/UX Standard]    --> >= 16px Kickers, 4-Plane Depth, 60/30/10 Balance, WCAG AAA      |
+---------------------------------------------------------------------------------------------------+
```

---

## 2. Type System Disambiguation: `AiFlywheelStage` Standard

### 2.1 The TS2308 Duplicate Identifier Problem

The TypeScript module system strictly forbids exporting distinct interfaces with identical names through ambient re-exports in the same declaration scope:

```typescript
// Collision point in barrel files:
// src/types/modernArchetypes.ts
export * from './modern/transformationTypes'; // exports interface FlywheelStage

// src/types/nextGenArchetypes.ts
export * from './nextgen/deepTechGovernanceTypes'; // exports interface FlywheelStage
```

When consuming modules import from both files or when types are unified in master registries, the TypeScript compiler fails with:
```
error TS2308: Module '"src/types/modernArchetypes"' has already exported a member named 'FlywheelStage'. Consider using 'export { FlywheelStage as ... }' to resolve the ambiguity.
```

### 2.2 Semantic Domain Differentiation

The two interfaces model fundamentally distinct data contracts:

1. **Modern AI Data Flywheel Stage (`AiDataFlywheelLifecycleSlideData`):**  
   Represents runtime AI data harvesting, continuous QLoRA fine-tuning, TensorRT serving, and preference feedback loops. It requires telemetry metrics such as `throughputRate`, `coreMetricName`, `coreMetricValue`, and an `isAutonomous` boolean flag.

2. **Next-Gen Developer Velocity Flywheel Stage (`DeveloperVelocityFlywheelSlideData`):**  
   Represents engineering workflow stages (e.g., Code & Review, Build & Test, Deploy & Telemetry) with metric properties tailored to CI/CD throughput.

### 2.3 Canonical Resolution Specification

To preserve semantic clarity and eliminate the TS2308 collision at the root definition, `src/types/modern/transformationTypes.ts` standardizes the interface name as `AiFlywheelStage`:

```typescript
// File: src/types/modern/transformationTypes.ts

export interface AiFlywheelStage {
  id: string;
  stepIndex: number;
  stageName: string;
  subsystemTitle: string;
  throughputRate: string;
  coreMetricName: string;
  coreMetricValue: string;
  isStageActive: boolean;
  isAutonomous: boolean;
  capabilities: string[];
}

export interface FlywheelAccelerationBanner {
  dailyProcessedTokens: string;
  modelPerplexityScore: number;
  p99LatencyMs: number;
  feedbackConversionRate: string;
  isFlywheelAccelerating: boolean;
}

export interface AiDataFlywheelLifecycleSlideData extends BaseSlide {
  type: 'ai-data-flywheel-lifecycle';
  telemetry: FlywheelAccelerationBanner;
  flywheelStages: AiFlywheelStage[];
  modelFamilyName: string;
  isLoopClosed: boolean;
}
```

### 2.4 Downstream Contract & Component Traceability Matrix

Every consumer of the modern transformation interface must be updated in lockstep:

| Target File | Prior Declaration | Updated Declaration | Rationale |
|:---|:---|:---|:---|
| `src/types/modern/transformationTypes.ts` | `export interface FlywheelStage` | `export interface AiFlywheelStage` | Primary canonical contract rename. |
| `src/components/slides/modern/transformation/FlywheelStageNode.tsx` | `import type { FlywheelStage } ...` | `import type { AiFlywheelStage } ...` | Props interface typing (`stage: AiFlywheelStage`). |
| `src/components/slides/modern/transformation/AiDataFlywheelLifecycleSlide.tsx` | Implicit stage typing | Explicit `AiFlywheelStage` consumption | Prevents type narrowing mismatch. |
| `src/utils/modern/transformationFactories.ts` | Implicit stage array typing | `flywheelStages: AiFlywheelStage[]` | Factory return type validation. |

---

## 3. Multi-Step Engine Unification & Navigation Architecture

### 3.1 Discrepancy Analysis

The application features two parallel step calculation implementations:

- **`src/stores/deckStore.ts`:** Accurately imports `calculateModernSlideStepCount` and evaluates `getModernSlideSteps(slide)` in its `computeSlideMaxSteps` pipeline.
- **`src/utils/stepProgression.ts`:** Exposes `getSlideMaxSteps(slide: any)` used by external progression utilities, progress rails, and HUD indicators. This function currently checks only `isGlobalPptSlideType(slide.type)`. Modern slides evaluate to `1`, causing HUD progress tracking and dynamic rail nodes to remain static during presentation playback.

### 3.2 Unified Step Progression Logic

`src/utils/stepProgression.ts` must be upgraded to import `isModernSlide` and `calculateModernSlideStepCount` from `../types/modernArchetypes`:

```typescript
// File: src/utils/stepProgression.ts
import { isModernSlide, calculateModernSlideStepCount } from '../types/modernArchetypes';

export function getSlideMaxSteps(slide: any): number {
  const hasSlide = Boolean(slide && typeof slide === 'object');
  if (hasSlide) {
    if (isGlobalPptSlideType(slide.type)) {
      return calculateGlobalPptSlideStepCount(slide);
    }
    if (isModernSlide(slide)) {
      return calculateModernSlideStepCount(slide);
    }
  }
  return 1;
}
```

### 3.3 15 Modern Archetype Step Allocation Table

The step count algorithm in `calculateModernSlideStepCount` divides modern slides into multi-step interactive operational workflows and flat sovereign telemetry overviews:

| # | Slide Type Identifier | Category | Intra-Steps | Step Determinant Property | UI Motion Mechanism |
|:---:|:---|:---|:---:|:---|:---|
| **01** | `enterprise-cloud-migration-funnel` | Transformation | 4 | `slide.funnelPhases.length` | Phase opacity reveal, risk pill badge highlight |
| **02** | `zero-trust-identity-perimeter` | Transformation | 4 | `slide.securityPerimeterLayers.length` | Perimeter depth elevation, latency budget halo |
| **03** | `ai-data-flywheel-lifecycle` | Transformation | 4 | `slide.flywheelStages.length` | Stage card border illumination, throughput glow |
| **04** | `incident-command-war-room` | Transformation | 4 | `slide.incidentPhases.length` | War room timeline tick, MTTR metric alert |
| **05** | `regulatory-gdpr-data-lineage` | Transformation | 4 | `slide.lineageNodes.length` | Provenance node verification, cipher lock |
| **06** | `saas-unit-economics-breakdown` | SaaS Financial | 4 | `slide.economicPillars.length` | Pillar scale lift, margin percentage focus |
| **07** | `global-fintech-ledger-settlement` | SaaS Financial | 4 | `slide.settlementSteps.length` | Double-entry rail propagation, SLA counter |
| **08** | `multi-tenant-database-sharding` | SaaS Financial | 4 | `slide.shardingTiers.length` | Hash-ring partition illuminate, tenant badge |
| **09** | `continuous-compliance-posture` | SaaS Financial | 1 | Flat Overview (`1`) | Unified radar & compliance posture card |
| **10** | `developer-platform-catalog-mesh` | SaaS Financial | 1 | Flat Overview (`1`) | Mesh topology and golden paths mosaic |
| **11** | `boardroom-market-inflection-thesis`| Boardroom | 1 | Flat Overview (`1`) | High-stakes TAM thesis & CAGR breakdown |
| **12** | `asymmetric-threat-defense-matrix` | Boardroom | 1 | Flat Overview (`1`) | 2x2 threat defense posture grid |
| **13** | `hardware-accelerator-die-topology`| Boardroom | 1 | Flat Overview (`1`) | 3nm silicon floorplan & HBM3e layout |
| **14** | `customer-experience-journey-delta` | Boardroom | 1 | Flat Overview (`1`) | Bilateral legacy vs autonomous delta |
| **15** | `executive-board-mandate-cta` | Boardroom | 1 | Flat Overview (`1`) | Executive resolution & capital allocation CTA |

---

## 4. Slide Creator Modal & Factory Architecture

### 4.1 Master Registry Aggregation

`src/utils/modern/registry.ts` already encapsulates:
- `MODERN_FACTORIES`: Complete `Record<ModernSlideType, (id?: string) => ModernSlideData>` mapping.
- `MODERN_ARCHETYPE_OPTIONS`: Metadata array containing `type`, `label`, `category`, `desc`, and `icon` for all 15 modern slides.
- `createModernSlide(type, id)`: Standalone instantiator.
- `createAllModernSlides()`: Bulk test seeder.

To connect this suite to the global presentation runtime, `src/utils/slideArchetypeFactories.ts` must:
1. Re-export the modern registry.
2. Incorporate `MODERN_ARCHETYPE_OPTIONS` into `ARCHETYPE_OPTIONS`.
3. Add a delegation check in `createArchetypeSlide(type, id)`.

```typescript
// File: src/utils/slideArchetypeFactories.ts
import {
  MODERN_FACTORIES,
  MODERN_ARCHETYPE_OPTIONS,
  createModernSlide,
} from './modern/registry';
export * from './modern/registry';

// Combined archetype options
export const ARCHETYPE_OPTIONS: ArchetypeOption[] = [
  ...ORIGINAL_ARCHETYPE_OPTIONS,
  ...EXTENDED_ARCHETYPE_OPTIONS,
  ...EXPANDED_ARCHETYPE_OPTIONS,
  ...ENTERPRISE_ARCHETYPE_OPTIONS,
  ...KINETIC_SUITE_ARCHETYPE_OPTIONS,
  ...NEXTGEN_ARCHETYPE_OPTIONS,
  ...MODERN_ARCHETYPE_OPTIONS, // Injects all 15 Modern templates
];

// Factory instantiation dispatcher
export const createArchetypeSlide = (type: SlideType, id = `slide-${Date.now()}`): SlideData => {
  if (type in MODERN_FACTORIES) {
    return MODERN_FACTORIES[type as keyof typeof MODERN_FACTORIES](id);
  }
  // Subsequent factory checks...
};
```

### 4.2 Modal UI/UX Experience

The `SlideCreatorModal` (`src/components/builder/SlideCreatorModal.tsx`) consumes `ARCHETYPE_OPTIONS`:
- **Template Count Header:** Automatically increments to include the 15 modern templates (`ARCHETYPE_OPTIONS.length`).
- **Icon Resolution:** Each modern archetype option maps to a Lucide icon (`Cloud`, `ShieldCheck`, `Cpu`, `AlertTriangle`, `FileText`, `TrendingUp`, `DollarSign`, `Database`, `Award`, `Layers`, `Target`, `Shield`, `Server`, `Users`, `CheckCircle`).
- **Categorization:** Modern slides neatly populate existing category buckets (`Product & Architecture`, `Strategy & Metrics`, `Story & Conversion`), providing instant searchability.
- **Insertion Action:** Clicking an option invokes `addSlide(createArchetypeSlide(type))` in `deckStore`, immediately appending a populated modern slide to the active presentation.

---

## 5. Design System Compliance & Quality Invariants

All 15 modern slide implementations and their supporting modules must rigorously adhere to the canonical system rules:

1. **Northern UI/UX Typography Standard (v1.3.3):**
   - Kicker tags and category labels must enforce a minimum font size of `16px` (`font-mono text-xs uppercase tracking-wider`).
   - Slide main titles must range between `44px` and `56px` (`text-4xl` to `text-5xl font-bold font-ubuntu`).
   - Card headlines and node titles must be $\ge 20\text{px}$ (`text-xl`).

2. **60/30/10 Visual Balance Rule:**
   - **60% Dominant Base:** `var(--pres-bg)` ambient canvas wash.
   - **30% Structural Form:** Glassmorphic surfaces using `.plane-1-raised` and `.plane-2-elevated` cards.
   - **10% Accent Radiance:** High-impact focal highlights using `var(--pres-accent)` for active step halos, active badges, and metric pills.

3. **Zero Yellow-on-Light Contrast Invariant:**
   - On light backgrounds (`white-brand`, `paper-editorial`), amber/yellow accents are strictly inverted or shadowed to preserve WCAG AAA contrast ($C_R \ge 7.0:1$).
   - Text elements must bind to `var(--pres-text)` or verified high-contrast Tailwind slate tokens (`text-slate-100`, `text-slate-200` on dark surfaces; dark neutral tokens on light).

4. **Strict Persona Governance:**
   - Presenter and author references throughout the modern suite must strictly designate **Alim Ul Karim** as **"Chief Software Engineer"**. Zero role variations (such as "CTO", "VP of Engineering", or "Architect") are permitted.

---

## 6. Verification Protocol & Quality Gates

The implementation of this architecture must satisfy strict verification criteria:

| Gate # | Dimension | Tool / Command | Acceptance Criteria |
|:---:|:---|:---|:---|
| **QG-01** | Type Safety | `pnpm exec tsc --noEmit` | **0 errors**. Zero TS2308 collisions between modern and next-gen types. |
| **QG-02** | Step Progression | Unit verification in `stepProgression.ts` | `getSlideMaxSteps(slide)` returns exact counts for all 15 modern archetypes. |
| **QG-03** | Registry Completeness | Assertion in `slideArchetypeFactories.ts` | `ARCHETYPE_OPTIONS` contains all 15 modern archetypes; `createArchetypeSlide` handles all 15 types. |
| **QG-04** | Modal Render | Runtime / Component inspection | `SlideCreatorModal` renders cards with correct Lucide icons and adds slides to `deckStore`. |
| **QG-05** | Coding Guidelines | Repo linter scripts | 100% adherence to single-word commits, relative paths, lowercase filenames. |
