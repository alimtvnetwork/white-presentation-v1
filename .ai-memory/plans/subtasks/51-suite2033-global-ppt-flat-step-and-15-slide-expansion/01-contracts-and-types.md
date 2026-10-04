# Subtask 01: Canonical TypeScript Contracts, Discriminated Unions & Type Guards

> **Task ID:** `Task-01`  
> **Parent:** `51-suite2033-global-ppt-flat-step-and-15-slide-expansion`  
> **Wave:** `Wave 1 (Contracts, Styles, Engine)`  
> **Status:** `PENDING`  
> **Target File:** `src/types/suite2033SlideTypes.ts`  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  

---

## 1. Objective & Scope
Define the canonical TypeScript data contracts, interfaces, discriminated unions, and runtime type guards for all 15 Suite 2033 slide archetypes (8 Kinetic Multi-Step Workflows + 7 Flat Sovereign Overviews) in strict alignment with [`02-component-spec.md`](../../../02-spec/21-app/51-suite2033-global-ppt-flat-step-and-15-slide-expansion/02-component-spec.md).

---

## 2. Inviolable Architectural Mandates
1. **100% Affirmative Positive Booleans:** Every boolean field MUST use affirmative naming (`is...`, `has...`, `can...`, `should...`). Strictly disallow negative booleans (`disabled`, `hidden`, `isNot...`, `noData`).
2. **BaseSlide Extension:** Every slide data contract must extend `BaseSlide` from `../presentation` or `./presentation`.
3. **Executive Persona Standardization:** Any executive persona referencing Alim Ul Karim must designate the role as **"Chief Software Engineer"** (`CODE-RED-011`).
4. **Exported Type Catalogs:**
   - `SUITE_2033_STEP_SLIDE_TYPES` (8 types)
   - `SUITE_2033_FLAT_SLIDE_TYPES` (7 types)
   - `SUITE_2033_SLIDE_TYPES` (15 types)
   - `Suite2033SlideData` discriminated union
5. **Stage Key Mapping Dictionary:**
   - Map each kinetic slide type to its stage array property:
     - `'strategic-initiative-cascade'`: `'cascadeHorizons'`
     - `'ai-agent-orchestration-pipeline'`: `'orchestrationPhases'`
     - `'ma-synergy-realization-bridge'`: `'synergyWaves'`
     - `'zero-day-incident-containment-loop'`: `'containmentSteps'`
     - `'cloud-migration-wave-stepper'`: `'migrationWaves'`
     - `'customer-lifecycle-expansion-funnel'`: `'expansionStages'`
     - `'data-lineage-governance-flow'`: `'governanceHops'`
     - `'product-release-burn-up-cadence'`: `'releaseGates'`

---

## 3. Implementation Steps
1. Create `src/types/suite2033SlideTypes.ts` containing:
   - Constant string union arrays: `SUITE_2033_STEP_SLIDE_TYPES`, `SUITE_2033_FLAT_SLIDE_TYPES`, `SUITE_2033_SLIDE_TYPES`.
   - Child sub-interfaces for all 15 archetypes.
   - 15 main slide data interfaces extending `BaseSlide`.
   - Discriminated union types `Suite2033StepSlideData`, `Suite2033FlatSlideData`, `Suite2033SlideData`.
   - Type guards: `isSuite2033StepSlideType`, `isSuite2033FlatSlideType`, `isSuite2033SlideType`, `isSuite2033Slide`.
2. Update `src/types/presentation.ts` or `src/types/index.ts`:
   - Export all types from `./suite2033SlideTypes`.
   - Include `Suite2033SlideData` in the master `SlideData` union.

---

## 4. Acceptance Criteria
- [x] TypeScript compilation passes with zero type errors.
- [x] Exactly 15 distinct slide types defined.
- [x] 100% positive affirmative booleans throughout all interfaces.
- [x] Discriminated union resolves cleanly in TypeScript switch statements.
