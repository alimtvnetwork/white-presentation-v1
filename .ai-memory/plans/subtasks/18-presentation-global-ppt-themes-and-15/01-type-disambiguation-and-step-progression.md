# Subtask Plan 01: Type Disambiguation & Step Progression Unification

> **Subtask Identifier:** `.ai-memory/plans/subtasks/18-presentation-global-ppt-themes-and-15/01-type-disambiguation-and-step-progression.md`  
> **Parent Task:** [18-presentation-global-ppt-themes-and-15](../../pending/18-presentation-global-ppt-themes-and-15.md)  
> **Assigned Owner:** Worker 01  
> **Owned Files:**  
> - `src/types/modern/transformationTypes.ts`  
> - `src/components/slides/modern/transformation/FlywheelStageNode.tsx`  
> - `src/components/slides/modern/transformation/AiDataFlywheelLifecycleSlide.tsx`  
> - `src/utils/modern/transformationFactories.ts`  
> - `src/utils/stepProgression.ts`  
> **Target Release:** `v1.7.0`  
> **Status:** `PLAN-READY`  
> **Author:** Spec Subagent 01  

---

## 1. Objective & Strategic Scope

This subtask resolves two foundational architectural issues within the White Presentation presentation engine:

1. **TS2308 Duplicate Export Disambiguation:**  
   Eliminate the naming collision between `FlywheelStage` declared in modern transformation types (`src/types/modern/transformationTypes.ts`) and next-gen deep-tech types (`src/types/nextgen/deepTechGovernanceTypes.ts`). Both are currently re-exported as barrel wildcards, causing compiler collisions when imported across common consumers. We standardize the modern transformation interface as `AiFlywheelStage` and update all caller components and factories.

2. **Multi-Step Progression Engine Unification:**  
   Unify `getSlideMaxSteps(slide)` in `src/utils/stepProgression.ts` with `isModernSlide` and `calculateModernSlideStepCount`. This ensures that standalone step calculators, HUD progress bars, and dynamic bezier rails correctly calculate intra-slide step counts (4 steps for multi-step transformation and financial workflows, 1 step for flat overviews) across all 15 modern slide archetypes, matching the internal calculations of `src/stores/deckStore.ts`.

---

## 2. File Implementation Directives

### 2.1 Standardize `AiFlywheelStage` in `src/types/modern/transformationTypes.ts`

Rename `FlywheelStage` to `AiFlywheelStage` and update `AiDataFlywheelLifecycleSlideData.flywheelStages`:

```typescript
// Line 41: Rename interface
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

### 2.2 Update `src/components/slides/modern/transformation/FlywheelStageNode.tsx`

Update imports and `FlywheelStageNodeProps` to reference `AiFlywheelStage`:

```typescript
import React from 'react';
import { Cpu, Zap, Activity, Check } from 'lucide-react';
import type { AiFlywheelStage } from '../../../../types/modern/transformationTypes';

interface FlywheelStageNodeProps {
  stage: AiFlywheelStage;
  index: number;
  currentStep: number;
  onHover: (idx: number | null) => void;
}
```

### 2.3 Update `src/components/slides/modern/transformation/AiDataFlywheelLifecycleSlide.tsx`

Ensure `stages` array and fallback references correctly resolve as `AiFlywheelStage[]`:

```typescript
import type {
  AiDataFlywheelLifecycleSlideData,
  AiFlywheelStage,
} from '../../../../types/modern/transformationTypes';

// Inside component:
const stages: AiFlywheelStage[] = data.flywheelStages && data.flywheelStages.length > 0
  ? data.flywheelStages
  : fallback.flywheelStages;
```

### 2.4 Update `src/utils/modern/transformationFactories.ts`

Ensure `createAiDataFlywheelLifecycleSlide` produces valid typed stages:

```typescript
import type {
  EnterpriseCloudMigrationFunnelSlideData,
  ZeroTrustIdentityPerimeterSlideData,
  AiDataFlywheelLifecycleSlideData,
  AiFlywheelStage,
  IncidentCommandWarRoomSlideData,
  RegulatoryGdprDataLineageSlideData,
} from '../../types/modern/transformationTypes';

export function createAiDataFlywheelLifecycleSlide(id = 'slide-ai-flywheel'): AiDataFlywheelLifecycleSlideData {
  const flywheelStages: AiFlywheelStage[] = [
    { id: 's1', stepIndex: 1, stageName: 'Data Harvesting', subsystemTitle: 'Privacy-Preserving Ingestion', throughputRate: '120k rec/s', coreMetricName: 'PII Scrub Efficiency', coreMetricValue: '100%', isStageActive: true, isAutonomous: true, capabilities: ['Synthetic Expansion', 'Redaction'] },
    { id: 's2', stepIndex: 2, stageName: 'Continuous Fine-Tuning', subsystemTitle: 'Distributed QLoRA & DPO', throughputRate: '8x H100 Nodes', coreMetricName: 'Validation Loss Delta', coreMetricValue: '-18.2%', isStageActive: false, isAutonomous: true, capabilities: ['Checkpoints', 'DPO Alignment'] },
    { id: 's3', stepIndex: 3, stageName: 'High-Throughput Serving', subsystemTitle: 'TensorRT-LLM Serving Mesh', throughputRate: '42,000 req/s', coreMetricName: 'Time to First Token', coreMetricValue: '14ms', isStageActive: false, isAutonomous: true, capabilities: ['Dynamic Batching', 'Paged KV'] },
    { id: 's4', stepIndex: 4, stageName: 'Active Feedback Loop', subsystemTitle: 'Automated Preference Pairs', throughputRate: '1.2M ratings/d', coreMetricName: 'Acceptance Rate', coreMetricValue: '96.8%', isStageActive: false, isAutonomous: true, capabilities: ['Preference Pairs', 'Auto-Retrain'] },
  ];

  return {
    id,
    type: 'ai-data-flywheel-lifecycle',
    title: 'Enterprise Generative AI Data Flywheel Lifecycle',
    subtitle: 'Closed-loop pipeline transforming runtime telemetry into continuous model fine-tuning and inference',
    kicker: 'ENTERPRISE AI ACCELERATION',
    themeId: 'corporate-clean',
    activeStep: 1,
    maxSteps: 4,
    modelFamilyName: 'Sovereign-Llama-3.3-70B-Enterprise',
    isLoopClosed: true,
    telemetry: {
      dailyProcessedTokens: '4.8B Tokens',
      modelPerplexityScore: 1.28,
      p99LatencyMs: 18,
      feedbackConversionRate: '99.4%',
      isFlywheelAccelerating: true,
    },
    flywheelStages,
  };
}
```

### 2.5 Unify `getSlideMaxSteps` in `src/utils/stepProgression.ts`

Import `isModernSlide` and `calculateModernSlideStepCount` from `../types/modernArchetypes`, and branch within `getSlideMaxSteps`:

```typescript
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

---

## 3. Step Progression Mapping Across 15 Modern Archetypes

Once unified, `getSlideMaxSteps(slide)` will return:

| Slide Type | Intra-Step Count | Source Array / Property |
|:---|:---:|:---|
| `enterprise-cloud-migration-funnel` | 4 | `slide.funnelPhases.length` |
| `zero-trust-identity-perimeter` | 4 | `slide.securityPerimeterLayers.length` |
| `ai-data-flywheel-lifecycle` | 4 | `slide.flywheelStages.length` |
| `incident-command-war-room` | 4 | `slide.incidentPhases.length` |
| `regulatory-gdpr-data-lineage` | 4 | `slide.lineageNodes.length` |
| `saas-unit-economics-breakdown` | 4 | `slide.economicPillars.length` |
| `global-fintech-ledger-settlement` | 4 | `slide.settlementSteps.length` |
| `multi-tenant-database-sharding` | 4 | `slide.shardingTiers.length` |
| `continuous-compliance-posture` | 1 | Flat Sovereign Overview |
| `developer-platform-catalog-mesh` | 1 | Flat Sovereign Overview |
| `boardroom-market-inflection-thesis` | 1 | Flat Sovereign Overview |
| `asymmetric-threat-defense-matrix` | 1 | Flat Sovereign Overview |
| `hardware-accelerator-die-topology` | 1 | Flat Sovereign Overview |
| `customer-experience-journey-delta` | 1 | Flat Sovereign Overview |
| `executive-board-mandate-cta` | 1 | Flat Sovereign Overview |

---

## 4. Verification Protocol & Quality Gates

| Gate # | Check Description | Command | Success Metric |
|:---:|:---|:---|:---|
| **V-01** | Strict Type Check | `pnpm exec tsc --noEmit` | **0 errors**. No TS2308 duplicate identifier errors. |
| **V-02** | No Implicit Any / Mismatches | Targeted file scan | `AiFlywheelStage` properly imported in all 4 consumers. |
| **V-03** | Step Count Parity | `getSlideMaxSteps` test evaluation | Matches `computeSlideMaxSteps` in `deckStore.ts` for all 15 modern types. |
| **V-04** | Style & Formatting | Repo standards | Strict lowercase file naming, relative paths, clean code blocks. |
