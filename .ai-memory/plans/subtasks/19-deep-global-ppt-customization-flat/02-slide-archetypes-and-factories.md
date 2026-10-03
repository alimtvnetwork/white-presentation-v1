# Subtask Plan 02: 15 Enterprise Slide Archetypes & Factory Integration (Task-03 & Task-06)

> **Subtask Identifier:** `.ai-memory/plans/subtasks/19-deep-global-ppt-customization-flat/02-slide-archetypes-and-factories.md`  
> **Parent Plan:** `19-deep-global-ppt-customization-flat` (`.ai-memory/plans/pending/19-deep-global-ppt-customization-flat.md`)  
> **Tasks Covered:** **Task-03** (Coding Guidelines & Design System Alignment) & **Task-06** (15 New Distinct Enterprise Slide Types)  
> **Target Release:** `v1.9.0`  
> **Status:** `PLAN-READY`  
> **Author:** Spec Subagent 02  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  

---

## 1. Executive Summary & Strategic Scope

The White Presentation application requires a major architectural expansion introducing **15 new enterprise slide archetypes (Archetypes 46 to 60)**, divided into:
1. **Group A: 8 Multi-Step Kinetic Workflows (Archetypes 46 to 53)** — 4-stage operational lifecycles with dynamic stepwise intra-slide progression (`completed`, `active`, `future`).
2. **Group B: 7 Flat Sovereign Telemetry Overviews (Archetypes 54 to 60)** — High-density, unsegmented master overviews evaluating to exactly 1 flat step.

This subtask plan operationalizes **Task-03** (Design System & Coding Guidelines Alignment) and **Task-06** (15 Enterprise Slide Archetypes Implementation & Factory Wiring) by establishing concrete implementation instructions for worker agents.

---

## 2. Design System Alignment & Coding Guidelines (Task-03)

Every component authored for Archetypes 46 to 60 must strictly implement the design principles codified in `02-spec/02-coding-guidelines/24-app-ui-design-system/01-design-principles.md`:

### 2.1 The 60/30/10 Visual Balance Rule
- **60% Dominant Canvas Wash:** Negative space utilizing `--pres-bg` with ambient gradients and subtle dot-matrix patterns.
- **30% Structural Panels & Bento Cards:** Semi-transparent glassmorphic surfaces (`--pres-bg-card`), hairline borders (`1px solid var(--pres-border)`), and soft drop shadows framing information without dominating the visual plane.
- **10% Vivid Focal Accents:** Precise accent highlights (`--pres-accent`, `--pres-accent-glow`) restricted to active step pins, illuminated badge seals, and primary KPI callouts. Accent area must never exceed 10% of canvas surface area.

### 2.2 4-Plane Depth Hierarchy
- **Plane 0 (Canvas Base, $z=0$):** Ambient gradients, dot-matrix canvas wash, subtle watermarks.
- **Plane 1 (Raised Containers, $z=10$):** Inactive Bento cards, workflow milestone rails, static telemetry panels (`var(--pres-bg-card)`).
- **Plane 2 (Elevated Focus, $z=20$):** Currently active workflow stage card (`activeStep`), hovered cards, highlighted metric callouts (`var(--pres-bg-card-hover)` with glowing border halo).
- **Plane 3 (Floating HUD & Modals, $z=50+$):** Slide creator modal, presenter notes HUD, interactive tooltips.

### 2.3 Fluid Typography Clamps & Northern UI/UX Standards
- Slide Headlines: `font-size: clamp(2rem, 3.2vw, 3.75rem); line-height: 1.1; font-weight: 700;`
- Kicker Badges: `font-size: clamp(0.75rem, 0.9vw, 0.875rem); text-transform: uppercase; letter-spacing: 0.1em;`
- Body & Description: `font-size: clamp(0.875rem, 1.1vw, 1.125rem); line-height: 1.5;`
- Monospace Metrics & Hex Hashes: `font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;`

### 2.4 WCAG AAA Contrast & Zero Yellow-on-Light Mandate
- No bright gold/yellow/amber accents directly against white/light backgrounds ($C_R < 2.5:1$).
- On light themes (`isDark: false`), automatically invert amber badges to dark bronze (`#92400E`) or dark slate with amber border halo to guarantee $C_R \ge 4.5:1$.

### 2.5 100% Affirmative Positive Booleans
- All boolean variables, props, and contract fields must use positive prefixes: `isEnabled`, `isActive`, `isVerified`, `hasGlow`, `canAdvance`, `isGpuAccelerated`, `hasHybridLexicalSearch`, `isEmergencySuccessorReady`.
- Negative boolean names (`disabled`, `hidden`, `unverified`) and explicit truth comparisons (`== true`, `=== false`) are strictly forbidden. Use `src/utils/booleanGuards.ts`.

### 2.6 Executive Persona Governance
- Any mention of executive Alim Ul Karim in mock data, presenter notes, signatures, or UI badges must strictly use **"Alim Ul Karim, Chief Software Engineer"** (Rule R11 / Gate 5).

---

## 3. Directory Structure & File Inventory (Task-06)

To satisfy **CODE-RED-006R** ($\le 100$ lines per `.tsx` file), all components decompose into modular leaf files:

```
src/
├── types/
│   ├── customizationArchetypes.ts                 // Master barrel, union types, typeguards, step counter
│   └── customization/
│       ├── workflowTypes.ts                       // Group A interfaces (Archetypes 46 to 53)
│       └── telemetryTypes.ts                      // Group B interfaces (Archetypes 54 to 60)
│
├── utils/
│   ├── customizationSlideFactories.ts             // Convenience barrel re-export
│   └── customization/
│       ├── factories.ts                           // Hydrated mock factories for Archetypes 46 to 60
│       ├── options.ts                             // CUSTOMIZATION_ARCHETYPE_OPTIONS for creator modal
│       └── registry.ts                            // CUSTOMIZATION_FACTORIES map, step counter, helpers
│
└── components/slides/customization/
    ├── neuralvectorsearch/                        // Archetype 46
    │   ├── SearchTopologyCard.tsx                 // <= 100 lines
    │   ├── VectorTelemetryStrip.tsx               // <= 100 lines
    │   ├── HnswStageBadge.tsx                     // <= 100 lines
    │   └── NeuralVectorSearchSlide.tsx            // Orchestrator <= 100 lines
    ├── modelquantization/                         // Archetype 47
    │   ├── QuantizationStageCard.tsx              // <= 100 lines
    │   ├── SpeculativePerfStrip.tsx               // <= 100 lines
    │   ├── AwqSealBadge.tsx                       // <= 100 lines
    │   └── ModelQuantizationSlide.tsx             // Orchestrator <= 100 lines
    ├── llmfirewall/                               // Archetype 48
    │   ├── FirewallLayerCard.tsx                  // <= 100 lines
    │   ├── FirewallTelemetryStrip.tsx             // <= 100 lines
    │   ├── RedTeamBadge.tsx                       // <= 100 lines
    │   └── LlmFirewallSlide.tsx                   // Orchestrator <= 100 lines
    ├── anycastdirector/                           // Archetype 49
    │   ├── AnycastStageCard.tsx                   // <= 100 lines
    │   ├── NetworkTelemetryStrip.tsx              // <= 100 lines
    │   ├── BgpStatusBadge.tsx                     // <= 100 lines
    │   └── GlobalAnycastDirectorSlide.tsx         // Orchestrator <= 100 lines
    ├── cqrseventsourcing/                         // Archetype 50
    │   ├── CqrsStageCard.tsx                      // <= 100 lines
    │   ├── FabricTelemetryStrip.tsx               // <= 100 lines
    │   ├── RaftQuorumBadge.tsx                    // <= 100 lines
    │   └── CqrsEventSourcingSlide.tsx             // Orchestrator <= 100 lines
    ├── sbomsattestation/                          // Archetype 51
    │   ├── SbomPhaseCard.tsx                      // <= 100 lines
    │   ├── ComplianceTelemetryStrip.tsx           // <= 100 lines
    │   ├── Slsa4SealBadge.tsx                     // <= 100 lines
    │   └── SbomProvenanceSlide.tsx                // Orchestrator <= 100 lines
    ├── postmergerroadmap/                         // Archetype 52
    │   ├── HorizonStageCard.tsx                   // <= 100 lines
    │   ├── SynergyTelemetryStrip.tsx              // <= 100 lines
    │   ├── Day1StatusBadge.tsx                    // <= 100 lines
    │   └── PostMergerRoadmapSlide.tsx             // Orchestrator <= 100 lines
    ├── scope3carbon/                              // Archetype 53
    │   ├── Scope3PhaseCard.tsx                    // <= 100 lines
    │   ├── CarbonTelemetryStrip.tsx               // <= 100 lines
    │   ├── CsrdSealBadge.tsx                      // <= 100 lines
    │   └── Scope3CarbonAuditSlide.tsx             // Orchestrator <= 100 lines
    ├── cspmciemgraph/                             // Archetype 54
    │   ├── EntitlementClusterCard.tsx             // <= 100 lines
    │   ├── ToxicPathCard.tsx                      // <= 100 lines
    │   ├── CspmTelemetryStrip.tsx                 // <= 100 lines
    │   └── CspmCiemGraphSlide.tsx                 // Orchestrator <= 100 lines
    ├── confidentialenclave/                       // Archetype 55
    │   ├── EnclaveModuleCard.tsx                  // <= 100 lines
    │   ├── AttestationRegisterCard.tsx            // <= 100 lines
    │   ├── CryptoTelemetryStrip.tsx               // <= 100 lines
    │   └── ConfidentialEnclaveSlide.tsx           // Orchestrator <= 100 lines
    ├── predictiveautoscaling/                     // Archetype 56
    │   ├── NodePoolCapacityCard.tsx               // <= 100 lines
    │   ├── WorkloadTierCard.tsx                   // <= 100 lines
    │   ├── ScalingTelemetryStrip.tsx              // <= 100 lines
    │   └── PredictiveAutoscalingSlide.tsx         // Orchestrator <= 100 lines
    ├── capexopexallocation/                       // Archetype 57
    │   ├── CapitalPortfolioCard.tsx               // <= 100 lines
    │   ├── RoicFinancialCard.tsx                  // <= 100 lines
    │   ├── CapexTelemetryStrip.tsx                // <= 100 lines
    │   └── CapexOpexAllocationSlide.tsx           // Orchestrator <= 100 lines
    ├── transferpricingtopology/                   // Archetype 58
    │   ├── JurisdictionNodeCard.tsx               // <= 100 lines
    │   ├── IntercompanyFlowCard.tsx               // <= 100 lines
    │   ├── TaxTelemetryStrip.tsx                  // <= 100 lines
    │   └── TransferPricingSlide.tsx               // Orchestrator <= 100 lines
    ├── salesquotamatrix/                          // Archetype 59
    │   ├── QuotaTierCard.tsx                      // <= 100 lines
    │   ├── RepSegmentCard.tsx                     // <= 100 lines
    │   ├── GtmTelemetryStrip.tsx                  // <= 100 lines
    │   └── SalesQuotaMatrixSlide.tsx              // Orchestrator <= 100 lines
    └── executivesuccession/                       // Archetype 60
        ├── BenchRoleCard.tsx                      // <= 100 lines
        ├── CandidatePipelineCard.tsx              // <= 100 lines
        ├── BoardTelemetryStrip.tsx                // <= 100 lines
        └── ExecutiveSuccessionSlide.tsx           // Orchestrator <= 100 lines
```

---

## 4. Factory & Modal Integration Directives

### 4.1 Integration into `src/utils/slideArchetypeFactories.ts`
1. Import customization options and factories:
   ```typescript
   import {
     CUSTOMIZATION_FACTORIES,
     CUSTOMIZATION_ARCHETYPE_OPTIONS,
     createCustomizationSlide,
   } from './customization/registry';
   ```
2. Re-export customization registry:
   ```typescript
   export * from './customization/registry';
   ```
3. Append `...CUSTOMIZATION_ARCHETYPE_OPTIONS` to master `ARCHETYPE_OPTIONS`:
   ```typescript
   export const ARCHETYPE_OPTIONS: ArchetypeOption[] = [
     ...ORIGINAL_ARCHETYPE_OPTIONS,
     ...EXTENDED_ARCHETYPE_OPTIONS,
     ...EXPANDED_ARCHETYPE_OPTIONS,
     ...ENTERPRISE_ARCHETYPE_OPTIONS,
     ...KINETIC_SUITE_ARCHETYPE_OPTIONS,
     ...NEXTGEN_ARCHETYPE_OPTIONS,
     ...MODERN_ARCHETYPE_OPTIONS,
     ...CUSTOMIZATION_ARCHETYPE_OPTIONS,
   ];
   ```
4. Dispatch customization slides in `createArchetypeSlide()`:
   ```typescript
   if (type in CUSTOMIZATION_FACTORIES) {
     return CUSTOMIZATION_FACTORIES[type as keyof typeof CUSTOMIZATION_FACTORIES](id);
   }
   ```

### 4.2 Integration into `src/components/builder/SlideCreatorModal.tsx`
Verify that `CUSTOMIZATION_ARCHETYPE_OPTIONS` are categorized properly under:
- `AI & Search Infrastructure` (Neural Vector, Model Quantization, LLM Firewall)
- `Systems & DevSecOps` (Anycast Director, CQRS Fabric, SBOM SLSA Attestation)
- `Corporate Strategy & Governance` (Post-Merger Roadmap, Scope 3 Carbon, Executive Succession)
- `Cloud & Security Telemetry` (CSPM CIEM Graph, Confidential Enclave, Predictive Autoscaling)
- `Financial & Revenue Operations` (CapEx/OpEx Allocation, Transfer Pricing, Sales Quota Matrix)

### 4.3 Integration into `src/components/slides/SlideRenderer.tsx`
Ensure `SlideRenderer.tsx` routes all 15 `CustomizationSlideType` instances to their dedicated top-level slide orchestrator components.

---

## 5. Step-by-Step Implementation Sequence for Workers

| Stage | Sequence | Action | Verification Check |
| :--- | :--- | :--- | :--- |
| **Phase 1** | Step 1.1 | Author `src/types/customization/workflowTypes.ts` (Group A: Archetypes 46 to 53) | Affirmative booleans, extends `BaseSlide` |
| | Step 1.2 | Author `src/types/customization/telemetryTypes.ts` (Group B: Archetypes 54 to 60) | Affirmative booleans, extends `BaseSlide` |
| | Step 1.3 | Author `src/types/customizationArchetypes.ts` (unions, guards, step calculator) | `calculateCustomizationSlideStepCount` handles all 15 |
| | Step 1.4 | Re-export in `src/types/presentation.ts` | `npx tsc --noEmit` |
| **Phase 2** | Step 2.1 | Author `src/utils/customization/factories.ts` (15 hydrated factories) | Full realistic data, Alim Ul Karim, Chief Software Engineer |
| | Step 2.2 | Author `src/utils/customization/options.ts` (modal metadata & Lucide icons) | Valid Lucide icon identifiers |
| | Step 2.3 | Author `src/utils/customization/registry.ts` (lookup maps and dispatchers) | Zero phantom steps |
| | Step 2.4 | Wire into `src/utils/slideArchetypeFactories.ts` | Modal options populated |
| **Phase 3** | Step 3.1 | Author Group A components (Archetypes 46 to 53) with subcomponent isolation | Every `.tsx` $\le 100$ lines |
| | Step 3.2 | Author Group B components (Archetypes 54 to 60) with subcomponent isolation | Every `.tsx` $\le 100$ lines |
| | Step 3.3 | Wire slide dispatching in `SlideRenderer.tsx` | Clean rendering without errors |
| **Phase 4** | Step 4.1 | Run 12-Dimensional automated Python & TypeScript verification | 100% pass across all 12 Gates |

---

## 6. Verification Criteria & Signoff Checklist

- [ ] **Line Sizing:** Every `.tsx` file in `src/components/slides/customization/` strictly $\le 100$ physical lines.
- [ ] **Affirmative Booleans:** 100% positive naming (`is*`, `has*`, `can*`, `should*`), 0 negative props.
- [ ] **Executive Persona:** 100% of Alim Ul Karim references strictly designate "Chief Software Engineer".
- [ ] **Zero Full Builds/Tests:** No `npm run build` or `npm test` executed (Rule R1).
- [ ] **Fast Static Typecheck:** `npx tsc --noEmit` passes with exit code 0.
- [ ] **Coordinate Budget:** $1920 \times 1080$ virtual canvas layout respected with zero clipping.
- [ ] **WCAG AAA Compliance:** Zero yellow-on-light text, automatic dark-slate/bronze inversion on light palettes.
