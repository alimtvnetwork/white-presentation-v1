# Subtask Plan 03: 15 New Slide Archetype Types & Factories

> **Subtask Identifier:** `.ai-memory/plans/subtasks/32-global-ppt-flat-step-and/03-types-and-factories.md`  
> **Parent Task:** [32-global-ppt-flat-step-and](../../pending/32-global-ppt-flat-step-and.md)  
> **Assigned Owner:** Worker 01  
> **Owned Files:** `src/types/globalPptArchetypes.ts`, `src/utils/globalPptSlideFactories.ts`  
> **Target Release:** `v1.6.0`  
> **Status:** `PLAN-READY`  
> **Author:** Spec Subagent 01  

---

## 1. Objective & Strategic Scope

This subtask governs the authoring of the **TypeScript Data Contracts** (`src/types/globalPptArchetypes.ts`) and **Default Factory Generators** (`src/utils/globalPptSlideFactories.ts`) for the 15 new high-authority slide archetypes. The data model enforces 100% positive boolean polarity, strict persona standardization for **Alim Ul Karim** as **"Chief Software Engineer"**, mathematical step calculation formulas, and comprehensive type guards.

---

## 2. 15 Slide Archetype Catalog

The 15 archetypes are categorized into 8 multi-step operational workflows and 7 flat sovereign telemetry overviews:

```
+---------------------------------------------------------------------------------------------------+
|                        15 GLOBAL PPT SLIDE ARCHETYPES (CATALOG)                                   |
+---------------------------------------------------------------------------------------------------+
|  [01] executive-governance-matrix    --> Multi-step: max(pillars.length, 1)                      |
|  [02] okr-cascade-alignment          --> Multi-step: max(tiers.length, 1)                        |
|  [03] cloud-cost-finops-optimizer    --> Flat: 1                                                 |
|  [04] customer-sentiment-radar       --> Flat: 1                                                 |
|  [05] competitive-battlecard         --> Multi-step: max(pillars.length, 1)                      |
|  [06] launch-readiness-checklist     --> Multi-step: max(gates.length, 1)                        |
|  [07] developer-gateway-sandbox      --> Multi-step: max(stages.length, 1)                       |
|  [08] rag-pipeline-topology          --> Multi-step: max(stages.length, 1)                       |
|  [09] soc-incident-war-room          --> Multi-step: max(phases.length, 1)                       |
|  [10] merkle-tree-state-ledger       --> Multi-step: max(steps.length, 1)                        |
|  [11] investor-cap-table-waterfall   --> Flat: 1                                                 |
|  [12] realtime-event-stream-fabric   --> Flat: 1                                                 |
|  [13] supply-chain-risk-matrix       --> Flat: 1                                                 |
|  [14] talent-competency-radar        --> Multi-step: max(milestones.length, 1)                   |
|  [15] sustainability-esg-scorecard   --> Flat: 1                                                 |
+---------------------------------------------------------------------------------------------------+
```

---

## 3. TypeScript Contracts Architecture (`src/types/globalPptArchetypes.ts`)

Contracts are structured strictly around the positive boolean principle:

1. **Permitted Boolean Identifiers:** `is*`, `has*`, `can*`, `should*` (e.g., `isPassed`, `isCompliant`, `hasAuditSignoff`, `isOnTrack`, `isOptimized`, `isVerified`, `isHealthy`).
2. **Prohibited Boolean Identifiers:** Negative terms such as `disabled`, `hidden`, `isNotActive`, or `unverified` are banned.
3. **Canonical Union Types:**
   ```typescript
   export type GlobalPptSuiteSlideType =
     | 'executive-governance-matrix'
     | 'okr-cascade-alignment'
     | 'cloud-cost-finops-optimizer'
     | 'customer-sentiment-radar'
     | 'competitive-battlecard'
     | 'launch-readiness-checklist'
     | 'developer-gateway-sandbox'
     | 'rag-pipeline-topology'
     | 'soc-incident-war-room'
     | 'merkle-tree-state-ledger'
     | 'investor-cap-table-waterfall'
     | 'realtime-event-stream-fabric'
     | 'supply-chain-risk-matrix'
     | 'talent-competency-radar'
     | 'sustainability-esg-scorecard';

   export type GlobalPptSuiteSlideData =
     | ExecutiveGovernanceMatrixSlideData
     | OkrCascadeAlignmentSlideData
     | CloudCostFinopsOptimizerSlideData
     | CustomerSentimentRadarSlideData
     | CompetitiveBattlecardSlideData
     | LaunchReadinessChecklistSlideData
     | DeveloperGatewaySandboxSlideData
     | RagPipelineTopologySlideData
     | SocIncidentWarRoomSlideData
     | MerkleTreeStateLedgerSlideData
     | InvestorCapTableWaterfallSlideData
     | RealtimeEventStreamFabricSlideData
     | SupplyChainRiskMatrixSlideData
     | TalentCompetencyRadarSlideData
     | SustainabilityEsgScorecardSlideData;
   ```
4. **Type Guard & Step Count Engine:**
   ```typescript
   export function isGlobalPptSlide(slide: any): slide is GlobalPptSuiteSlideData {
     return typeof slide === 'object' && slide !== null && [
       'executive-governance-matrix',
       'okr-cascade-alignment',
       'cloud-cost-finops-optimizer',
       'customer-sentiment-radar',
       'competitive-battlecard',
       'launch-readiness-checklist',
       'developer-gateway-sandbox',
       'rag-pipeline-topology',
       'soc-incident-war-room',
       'merkle-tree-state-ledger',
       'investor-cap-table-waterfall',
       'realtime-event-stream-fabric',
       'supply-chain-risk-matrix',
       'talent-competency-radar',
       'sustainability-esg-scorecard'
     ].includes(slide.type);
   }

   export function calculateGlobalPptSlideStepCount(slide: GlobalPptSuiteSlideData): number {
     switch (slide.type) {
       case 'executive-governance-matrix':
         return Math.max(slide.governancePillars?.length || 1, 1);
       case 'okr-cascade-alignment':
         return Math.max(slide.cascadeTiers?.length || 1, 1);
       case 'competitive-battlecard':
         return Math.max(slide.battlecardPillars?.length || 1, 1);
       case 'launch-readiness-checklist':
         return Math.max(slide.stageGates?.length || 1, 1);
       case 'developer-gateway-sandbox':
         return Math.max(slide.gatewayStages?.length || 1, 1);
       case 'rag-pipeline-topology':
         return Math.max(slide.pipelineStages?.length || 1, 1);
       case 'soc-incident-war-room':
         return Math.max(slide.incidentPhases?.length || 1, 1);
       case 'merkle-tree-state-ledger':
         return Math.max(slide.verificationSteps?.length || 1, 1);
       case 'talent-competency-radar':
         return Math.max(slide.levelMilestones?.length || 1, 1);
       default:
         return 1;
     }
   }
   ```

---

## 4. Default Factory Generators (`src/utils/globalPptSlideFactories.ts`)

The factory module provides default factory methods for all 15 archetypes:
- `createExecutiveGovernanceMatrixSlide(overrides?: Partial<...>): ExecutiveGovernanceMatrixSlideData`
- `createOkrCascadeAlignmentSlide(overrides?: Partial<...>): OkrCascadeAlignmentSlideData`
- `createCloudCostFinopsOptimizerSlide(overrides?: Partial<...>): CloudCostFinopsOptimizerSlideData`
- `createCustomerSentimentRadarSlide(overrides?: Partial<...>): CustomerSentimentRadarSlideData`
- `createCompetitiveBattlecardSlide(overrides?: Partial<...>): CompetitiveBattlecardSlideData`
- `createLaunchReadinessChecklistSlide(overrides?: Partial<...>): LaunchReadinessChecklistSlideData`
- `createDeveloperGatewaySandboxSlide(overrides?: Partial<...>): DeveloperGatewaySandboxSlideData`
- `createRagPipelineTopologySlide(overrides?: Partial<...>): RagPipelineTopologySlideData`
- `createSocIncidentWarRoomSlide(overrides?: Partial<...>): SocIncidentWarRoomSlideData`
- `createMerkleTreeStateLedgerSlide(overrides?: Partial<...>): MerkleTreeStateLedgerSlideData`
- `createInvestorCapTableWaterfallSlide(overrides?: Partial<...>): InvestorCapTableWaterfallSlideData`
- `createRealtimeEventStreamFabricSlide(overrides?: Partial<...>): RealtimeEventStreamFabricSlideData`
- `createSupplyChainRiskMatrixSlide(overrides?: Partial<...>): SupplyChainRiskMatrixSlideData`
- `createTalentCompetencyRadarSlide(overrides?: Partial<...>): TalentCompetencyRadarSlideData`
- `createSustainabilityEsgScorecardSlide(overrides?: Partial<...>): SustainabilityEsgScorecardSlideData`

### Universal Catalog Dispatchers

```typescript
export function createGlobalPptSlideDefaults(type: GlobalPptSuiteSlideType): GlobalPptSuiteSlideData {
  switch (type) {
    case 'executive-governance-matrix': return createExecutiveGovernanceMatrixSlide();
    case 'okr-cascade-alignment': return createOkrCascadeAlignmentSlide();
    case 'cloud-cost-finops-optimizer': return createCloudCostFinopsOptimizerSlide();
    case 'customer-sentiment-radar': return createCustomerSentimentRadarSlide();
    case 'competitive-battlecard': return createCompetitiveBattlecardSlide();
    case 'launch-readiness-checklist': return createLaunchReadinessChecklistSlide();
    case 'developer-gateway-sandbox': return createDeveloperGatewaySandboxSlide();
    case 'rag-pipeline-topology': return createRagPipelineTopologySlide();
    case 'soc-incident-war-room': return createSocIncidentWarRoomSlide();
    case 'merkle-tree-state-ledger': return createMerkleTreeStateLedgerSlide();
    case 'investor-cap-table-waterfall': return createInvestorCapTableWaterfallSlide();
    case 'realtime-event-stream-fabric': return createRealtimeEventStreamFabricSlide();
    case 'supply-chain-risk-matrix': return createSupplyChainRiskMatrixSlide();
    case 'talent-competency-radar': return createTalentCompetencyRadarSlide();
    case 'sustainability-esg-scorecard': return createSustainabilityEsgScorecardSlide();
  }
}

export function createAllGlobalPptSuiteSlides(): GlobalPptSuiteSlideData[] {
  return [
    createExecutiveGovernanceMatrixSlide(),
    createOkrCascadeAlignmentSlide(),
    createCloudCostFinopsOptimizerSlide(),
    createCustomerSentimentRadarSlide(),
    createCompetitiveBattlecardSlide(),
    createLaunchReadinessChecklistSlide(),
    createDeveloperGatewaySandboxSlide(),
    createRagPipelineTopologySlide(),
    createSocIncidentWarRoomSlide(),
    createMerkleTreeStateLedgerSlide(),
    createInvestorCapTableWaterfallSlide(),
    createRealtimeEventStreamFabricSlide(),
    createSupplyChainRiskMatrixSlide(),
    createTalentCompetencyRadarSlide(),
    createSustainabilityEsgScorecardSlide(),
  ];
}
```

---

## 5. Persona Standardization in Factories

Whenever Alim Ul Karim is referenced in slide fixtures, bios, or metadata, the role is non-negotiably set:
```typescript
chiefGovernanceOfficer: "Alim Ul Karim",
cgoTitle: "Chief Software Engineer",
executiveSponsor: "Alim Ul Karim",
sponsorRole: "Chief Software Engineer",
releaseCaptain: "Alim Ul Karim",
captainRole: "Chief Software Engineer",
leadArchitect: "Alim Ul Karim",
leadRole: "Chief Software Engineer",
incidentCommander: "Alim Ul Karim",
commanderRole: "Chief Software Engineer",
auditedBy: "Alim Ul Karim",
auditorRole: "Chief Software Engineer"
```
Any inclusion of "CEO", "Founder", or "Lead Architect" as Alim's title will cause automated linter failure.

---

## 6. Implementation Steps for Worker 01

1. **Step 1:** Author `src/types/globalPptArchetypes.ts` implementing all 15 interfaces specified in `02-spec/21-app/32-global-ppt-motion-flat-step-and-15-slide-archetypes/02-data-contracts.md`.
2. **Step 2:** Ensure all boolean properties use affirmative naming (`is*`, `has*`, `can*`, `should*`).
3. **Step 3:** Implement `calculateGlobalPptSlideStepCount()` and `isGlobalPptSlide()`.
4. **Step 4:** Re-export new types in `src/types/presentation.ts` and add `GlobalPptSuiteSlideType` to `SlideType` union.
5. **Step 5:** Author `src/utils/globalPptSlideFactories.ts` containing all 15 factory generator functions with rich enterprise mock data.
6. **Step 6:** Run file-scoped guideline check: `python 03-ai-scripts/05-guideline-autofixer.py src/types/ src/utils/globalPptSlideFactories.ts --check-only`.

---

## 7. Quality Gates & Non-Negotiable Rules

- **Zero Test/Build Runs (R1):** Do not run test commands or builds during development.
- **Affirmative Positive Booleans:** 100% positive naming.
- **Disjoint File Bounding Box:** Worker 01 must only modify `src/types/globalPptArchetypes.ts`, `src/utils/globalPptSlideFactories.ts`, and re-export in `src/types/presentation.ts`.
