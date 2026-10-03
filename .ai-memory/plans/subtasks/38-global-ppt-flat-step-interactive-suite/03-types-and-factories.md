# Subtask Plan 03: 15 Slide Archetype Types & Default Factories

> **Subtask Identifier:** `.ai-memory/plans/subtasks/38-global-ppt-flat-step-interactive-suite/03-types-and-factories.md`  
> **Parent Module:** Module 38: Global PPT Flat Step Interactive Suite  
> **Assigned Owner:** Worker 01  
> **Owned Files:** `src/types/flatGlobalSuiteTypes.ts`, `src/utils/flatGlobalSuiteFactories.ts`, `src/types/presentation.ts`  
> **Target Release:** `v1.9.0`  
> **Status:** `PLAN-READY`  
> **Author:** Spec Subagent 01 (Worker 1)  

---

## 1. Objective & Strategic Scope

This subtask defines the **Canonical TypeScript Data Contracts** and **Default Factory Generators** for all 15 slide archetypes in Module 38. The contracts enforce:
1. **100% Affirmative Positive Boolean Polarity:** Only `is*`, `has*`, `can*`, `should*`. Zero negative flags.
2. **Deterministic Step Count Calculation:** Seamless evaluation of 4-step interactive workflows vs 1-step flat telemetry overviews.
3. **Standardized Executive Persona Governance:** Consistent designation of **Alim Ul Karim** as **"Chief Software Engineer"** across all default slide fixtures, speaker notes, and review badges (Rule R11).
4. **Rich Production Default Data:** Ensuring every archetype can be rendered instantly in Builder Mode or preview decks with authentic enterprise datasets.

---

## 2. 15 Slide Archetype Catalog

```
+---------------------------------------------------------------------------------------------------+
|                        MODULE 38 SLIDE ARCHETYPE CATALOG (15 TYPES)                               |
+---------------------------------------------------------------------------------------------------+
| GROUP A: 8 Interactive Multi-Step Workflows (4 Steps Each, Kinetic 3-Phase Lifecycle)            |
|  [01] interactive-branching-close       --> max(decisionStages.length, 1) = 4                     |
|  [02] before-after-showcase-pan         --> max(transformationStages.length, 1) = 4               |
|  [03] search-serp-proof-lightbox        --> max(lightboxStages.length, 1) = 4                     |
|  [04] cognitive-inversion-punchline     --> max(punchlineStages.length, 1) = 4                    |
|  [05] talent-pyramid-funnel-svg         --> max(funnelTiers.length, 1) = 4                        |
|  [06] hexagonal-tech-cluster            --> max(inspectionPhases.length, 1) = 4                   |
|  [07] connected-roadmap-rail-pulse      --> max(milestoneStations.length, 1) = 4                  |
|  [08] campaign-performance-lightbox     --> max(campaignChannels.length, 1) = 4                   |
|                                                                                                   |
| GROUP B: 7 High-Density Flat Sovereign Telemetry Overviews (1 Step Flat)                          |
|  [09] cloud-infrastructure-topology     --> 1 Step (Flat)                                         |
|  [10] compliance-matrix-audit-grid      --> 1 Step (Flat)                                         |
|  [11] unit-economics-waterfall-card     --> 1 Step (Flat)                                         |
|  [12] executive-board-governance-deck   --> 1 Step (Flat)                                         |
|  [13] developer-platform-api-surface    --> 1 Step (Flat)                                         |
|  [14] esg-environmental-footprint       --> 1 Step (Flat)                                         |
|  [15] global-partner-ecosystem-grid     --> 1 Step (Flat)                                         |
+---------------------------------------------------------------------------------------------------+
```

---

## 3. TypeScript Contracts Architecture (`src/types/flatGlobalSuiteTypes.ts`)

Contracts are authored in `src/types/flatGlobalSuiteTypes.ts`:

### 3.1 Discriminated Union & Guards
```typescript
export type FlatGlobalSuiteSlideType =
  // Group A
  | 'interactive-branching-close'
  | 'before-after-showcase-pan'
  | 'search-serp-proof-lightbox'
  | 'cognitive-inversion-punchline'
  | 'talent-pyramid-funnel-svg'
  | 'hexagonal-tech-cluster'
  | 'connected-roadmap-rail-pulse'
  | 'campaign-performance-lightbox'
  // Group B
  | 'cloud-infrastructure-topology'
  | 'compliance-matrix-audit-grid'
  | 'unit-economics-waterfall-card'
  | 'executive-board-governance-deck'
  | 'developer-platform-api-surface'
  | 'esg-environmental-footprint'
  | 'global-partner-ecosystem-grid';

export type FlatGlobalSuiteSlideData =
  | InteractiveBranchingCloseSlideData
  | BeforeAfterShowcasePanSlideData
  | SearchSerpProofLightboxSlideData
  | CognitiveInversionPunchlineSlideData
  | TalentPyramidFunnelSvgSlideData
  | HexagonalTechClusterSlideData
  | ConnectedRoadmapRailPulseSlideData
  | CampaignPerformanceLightboxSlideData
  | CloudInfrastructureTopologySlideData
  | ComplianceMatrixAuditGridSlideData
  | UnitEconomicsWaterfallCardSlideData
  | ExecutiveBoardGovernanceDeckSlideData
  | DeveloperPlatformApiSurfaceSlideData
  | EsgEnvironmentalFootprintSlideData
  | GlobalPartnerEcosystemGridSlideData;

export function isFlatGlobalSuiteSlide(slide: unknown): slide is FlatGlobalSuiteSlideData {
  if (typeof slide !== 'object' || slide === null) return false;
  const candidate = slide as { type?: string };
  return typeof candidate.type === 'string' && [
    'interactive-branching-close',
    'before-after-showcase-pan',
    'search-serp-proof-lightbox',
    'cognitive-inversion-punchline',
    'talent-pyramid-funnel-svg',
    'hexagonal-tech-cluster',
    'connected-roadmap-rail-pulse',
    'campaign-performance-lightbox',
    'cloud-infrastructure-topology',
    'compliance-matrix-audit-grid',
    'unit-economics-waterfall-card',
    'executive-board-governance-deck',
    'developer-platform-api-surface',
    'esg-environmental-footprint',
    'global-partner-ecosystem-grid',
  ].includes(candidate.type);
}
```

### 3.2 Dynamic Step Count Calculator
```typescript
export function calculateFlatGlobalSuiteStepCount(slide: FlatGlobalSuiteSlideData): number {
  switch (slide.type) {
    case 'interactive-branching-close':
      return Math.max(slide.decisionStages?.length ?? 4, 1);
    case 'before-after-showcase-pan':
      return Math.max(slide.transformationStages?.length ?? 4, 1);
    case 'search-serp-proof-lightbox':
      return Math.max(slide.lightboxStages?.length ?? 4, 1);
    case 'cognitive-inversion-punchline':
      return Math.max(slide.punchlineStages?.length ?? 4, 1);
    case 'talent-pyramid-funnel-svg':
      return Math.max(slide.funnelTiers?.length ?? 4, 1);
    case 'hexagonal-tech-cluster':
      return Math.max(slide.inspectionPhases?.length ?? 4, 1);
    case 'connected-roadmap-rail-pulse':
      return Math.max(slide.milestoneStations?.length ?? 4, 1);
    case 'campaign-performance-lightbox':
      return Math.max(slide.campaignChannels?.length ?? 4, 1);
    default:
      return 1;
  }
}
```

---

## 4. Default Factory Generators (`src/utils/flatGlobalSuiteFactories.ts`)

The factory module implements dedicated generators with authentic enterprise datasets:

### 4.1 Master Dispatchers
```typescript
export function createFlatGlobalSuiteSlideDefaults(
  type: FlatGlobalSuiteSlideType,
  overrides?: Partial<FlatGlobalSuiteSlideData>
): FlatGlobalSuiteSlideData {
  switch (type) {
    case 'interactive-branching-close':
      return createInteractiveBranchingCloseSlide(overrides as any);
    case 'before-after-showcase-pan':
      return createBeforeAfterShowcasePanSlide(overrides as any);
    case 'search-serp-proof-lightbox':
      return createSearchSerpProofLightboxSlide(overrides as any);
    case 'cognitive-inversion-punchline':
      return createCognitiveInversionPunchlineSlide(overrides as any);
    case 'talent-pyramid-funnel-svg':
      return createTalentPyramidFunnelSvgSlide(overrides as any);
    case 'hexagonal-tech-cluster':
      return createHexagonalTechClusterSlide(overrides as any);
    case 'connected-roadmap-rail-pulse':
      return createConnectedRoadmapRailPulseSlide(overrides as any);
    case 'campaign-performance-lightbox':
      return createCampaignPerformanceLightboxSlide(overrides as any);
    case 'cloud-infrastructure-topology':
      return createCloudInfrastructureTopologySlide(overrides as any);
    case 'compliance-matrix-audit-grid':
      return createComplianceMatrixAuditGridSlide(overrides as any);
    case 'unit-economics-waterfall-card':
      return createUnitEconomicsWaterfallCardSlide(overrides as any);
    case 'executive-board-governance-deck':
      return createExecutiveBoardGovernanceDeckSlide(overrides as any);
    case 'developer-platform-api-surface':
      return createDeveloperPlatformApiSurfaceSlide(overrides as any);
    case 'esg-environmental-footprint':
      return createEsgEnvironmentalFootprintSlide(overrides as any);
    case 'global-partner-ecosystem-grid':
      return createGlobalPartnerEcosystemGridSlide(overrides as any);
  }
}

export function createAllFlatGlobalSuiteSlides(): FlatGlobalSuiteSlideData[] {
  return [
    createInteractiveBranchingCloseSlide(),
    createBeforeAfterShowcasePanSlide(),
    createSearchSerpProofLightboxSlide(),
    createCognitiveInversionPunchlineSlide(),
    createTalentPyramidFunnelSvgSlide(),
    createHexagonalTechClusterSlide(),
    createConnectedRoadmapRailPulseSlide(),
    createCampaignPerformanceLightboxSlide(),
    createCloudInfrastructureTopologySlide(),
    createComplianceMatrixAuditGridSlide(),
    createUnitEconomicsWaterfallCardSlide(),
    createExecutiveBoardGovernanceDeckSlide(),
    createDeveloperPlatformApiSurfaceSlide(),
    createEsgEnvironmentalFootprintSlide(),
    createGlobalPartnerEcosystemGridSlide(),
  ];
}
```

---

## 5. Executive Persona Governance in Fixtures

Every slide fixture referencing Alim Ul Karim must strictly standardize his title:

```typescript
leadArchitect: 'Alim Ul Karim',
leadRole: 'Chief Software Engineer',
chiefAuditor: 'Alim Ul Karim',
auditorRole: 'Chief Software Engineer',
executiveSponsor: 'Alim Ul Karim',
sponsorRole: 'Chief Software Engineer',
leadEvaluator: 'Alim Ul Karim',
evaluatorRole: 'Chief Software Engineer',
presidingOfficer: 'Alim Ul Karim',
officerRole: 'Chief Software Engineer'
```

Variations such as "CEO", "Founder", or "VP of Engineering" are strictly forbidden.

---

## 6. Implementation Steps for Worker 01

1. **Step 1: Create Types File:** Author `src/types/flatGlobalSuiteTypes.ts` implementing all 15 slide interfaces, `FlatGlobalSuiteSlideType`, `FlatGlobalSuiteSlideData`, `isFlatGlobalSuiteSlide()`, and `calculateFlatGlobalSuiteStepCount()`.
2. **Step 2: Affirmative Boolean Audit:** Ensure 100% of boolean fields use `is*`, `has*`, `can*`, `should*` naming conventions.
3. **Step 3: Re-export in Presentation Types:** In `src/types/presentation.ts`, re-export types from `flatGlobalSuiteTypes.ts` and add `FlatGlobalSuiteSlideType` to the global `SlideType` union.
4. **Step 4: Author Default Factories:** Create `src/utils/flatGlobalSuiteFactories.ts` containing all 15 factory generator functions, `createFlatGlobalSuiteSlideDefaults()`, and `createAllFlatGlobalSuiteSlides()`.
5. **Step 5: Verify Persona Standardization:** Ensure every reference to Alim Ul Karim uses "Chief Software Engineer".
6. **Step 6: Static Check:** Run `python 03-ai-scripts/05-guideline-autofixer.py src/types/ src/utils/flatGlobalSuiteFactories.ts --check-only` to ensure affirmative boolean and linter compliance.

---

## 7. Quality Gates & Non-Negotiable Boundaries

- **Zero Test/Build Runs (R1):** Do not run test commands or builds during development.
- **Affirmative Positive Booleans:** 100% positive identifiers. Zero negative booleans.
- **Pure Live DOM:** Zero rasterization of mock data or badges.
- **Disjoint File Bounding Box:** Worker 01 must only modify `src/types/flatGlobalSuiteTypes.ts`, `src/utils/flatGlobalSuiteFactories.ts`, and `src/types/presentation.ts`.
