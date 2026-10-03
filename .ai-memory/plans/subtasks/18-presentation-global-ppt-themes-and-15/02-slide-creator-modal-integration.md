# Subtask Plan 02: Slide Creator Modal & Archetype Factory Integration

> **Subtask Identifier:** `.ai-memory/plans/subtasks/18-presentation-global-ppt-themes-and-15/02-slide-creator-modal-integration.md`  
> **Parent Task:** [18-presentation-global-ppt-themes-and-15](../../pending/18-presentation-global-ppt-themes-and-15.md)  
> **Assigned Owner:** Worker 02  
> **Owned Files:**  
> - `src/utils/slideArchetypeFactories.ts`  
> **Target Release:** `v1.7.0`  
> **Status:** `PLAN-READY`  
> **Author:** Spec Subagent 01  

---

## 1. Objective & Strategic Scope

The White Presentation Slide Creator Modal (`src/components/builder/SlideCreatorModal.tsx`) provides an interactive in-canvas dialog for users to insert new slide templates into their active deck. While 15 high-fidelity modern slide archetypes (covering transformation lifecycles, SaaS financial mechanics, and boardroom strategies) have been fully developed in `src/components/slides/modern/` and registered in `src/utils/modern/registry.ts`, they remain completely disconnected from the creator modal.

This subtask connects the 15 modern slide archetypes to the global archetype registry by:
1. Importing `MODERN_ARCHETYPE_OPTIONS`, `MODERN_FACTORIES`, and `createModernSlide` from `./modern/registry` into `src/utils/slideArchetypeFactories.ts`.
2. Re-exporting `./modern/registry` to ensure backward compatibility and clean consumer module paths.
3. Appending `...MODERN_ARCHETYPE_OPTIONS` to `ARCHETYPE_OPTIONS`.
4. Updating `createArchetypeSlide(type: SlideType, id)` to dispatch to `MODERN_FACTORIES` when a modern slide type is requested.
5. Verifying that `SlideCreatorModal` dynamically displays all 15 templates with valid Lucide icons, categorized metadata, and instantaneous slide creation.

---

## 2. File Implementation Directives

### 2.1 Import & Re-Export in `src/utils/slideArchetypeFactories.ts`

Import the modern registry components and re-export the module:

```typescript
// Near imports at the top of src/utils/slideArchetypeFactories.ts
import {
  MODERN_FACTORIES,
  MODERN_ARCHETYPE_OPTIONS,
  createModernSlide,
} from './modern/registry';

// Barrel re-exports:
export * from './extendedSlideFactories';
export * from './expandedSlideFactories';
export * from './enterpriseSlideFactories';
export * from './kineticSuiteSlideFactories';
export * from './nextGenSlideFactories';
export * from './modern/registry';
```

### 2.2 Expand `ARCHETYPE_OPTIONS` Array

Append `...MODERN_ARCHETYPE_OPTIONS` to the unified `ARCHETYPE_OPTIONS` collection:

```typescript
export const ARCHETYPE_OPTIONS: ArchetypeOption[] = [
  ...ORIGINAL_ARCHETYPE_OPTIONS,
  ...EXTENDED_ARCHETYPE_OPTIONS,
  ...EXPANDED_ARCHETYPE_OPTIONS,
  ...ENTERPRISE_ARCHETYPE_OPTIONS,
  ...KINETIC_SUITE_ARCHETYPE_OPTIONS,
  ...NEXTGEN_ARCHETYPE_OPTIONS,
  ...MODERN_ARCHETYPE_OPTIONS,
];
```

### 2.3 Dispatch Modern Archetypes in `createArchetypeSlide()`

Add the modern factory delegation at the top of the factory chain in `createArchetypeSlide()`:

```typescript
export const createArchetypeSlide = (type: SlideType, id = `slide-${Date.now()}`): SlideData => {
  if (type in MODERN_FACTORIES) {
    return MODERN_FACTORIES[type as keyof typeof MODERN_FACTORIES](id);
  }
  if (type in SLIDE_ARCHETYPE_FACTORIES) {
    return SLIDE_ARCHETYPE_FACTORIES[type].factory(id);
  }
  if (type in NEXTGEN_FACTORIES) {
    return NEXTGEN_FACTORIES[type as keyof typeof NEXTGEN_FACTORIES](id);
  }
  const kineticSlide = createKineticSuiteSlide(type as any, id);
  if (kineticSlide) {
    return kineticSlide;
  }
  if (type in ENTERPRISE_FACTORIES) {
    return ENTERPRISE_FACTORIES[type as keyof typeof ENTERPRISE_FACTORIES](id);
  }
  if (type in EXTENDED_FACTORIES) {
    return EXTENDED_FACTORIES[type as keyof typeof EXTENDED_FACTORIES](id);
  }
  if (type in EXPANDED_FACTORIES) {
    return EXPANDED_FACTORIES[type as keyof typeof EXPANDED_FACTORIES](id);
  }
  const builtInMap = getBuiltInArchetypeMap();
  const factory = builtInMap[type];
  return factory ? factory(id) : createFallbackTitleSlide(id);
};
```

---

## 3. Registered Modern Archetype Options & Modal Mapping

The 15 modern archetypes injected into `SlideCreatorModal` via `MODERN_ARCHETYPE_OPTIONS`:

| # | Type | Label | Category | Description | Modal Icon |
|:---:|:---|:---|:---|:---|:---:|
| **01** | `enterprise-cloud-migration-funnel` | Cloud Migration | Product & Architecture | 4-phase enterprise workload migration funnel | `Cloud` |
| **02** | `zero-trust-identity-perimeter` | Zero-Trust Perimeter | Product & Architecture | Hardware identity & micro-segmentation | `ShieldCheck` |
| **03** | `ai-data-flywheel-lifecycle` | AI Flywheel | Product & Architecture | Continuous fine-tuning & edge inference | `Cpu` |
| **04** | `incident-command-war-room` | Incident War Room | Strategy & Metrics | P0 incident command & MTTR resolution | `AlertTriangle` |
| **05** | `regulatory-gdpr-data-lineage` | GDPR Data Lineage | Strategy & Metrics | PII provenance & right-to-erasure ledger | `FileText` |
| **06** | `saas-unit-economics-breakdown` | SaaS Economics | Strategy & Metrics | CAC, NRR, gross margin & Rule of 40 | `TrendingUp` |
| **07** | `global-fintech-ledger-settlement` | FinTech Settlement | Product & Architecture | Double-entry ledger & atomic RTGS | `DollarSign` |
| **08** | `multi-tenant-database-sharding` | Database Sharding | Product & Architecture | Hash-ring routing & tenant isolation | `Database` |
| **09** | `continuous-compliance-posture` | Compliance Posture | Strategy & Metrics | Continuous SOC 2, ISO 27001 & HIPAA | `Award` |
| **10** | `developer-platform-catalog-mesh` | IDP Catalog Mesh | Product & Architecture | Service registry & developer golden paths | `Layers` |
| **11** | `boardroom-market-inflection-thesis`| Market Thesis | Strategy & Metrics | TAM expansion, moat & 3-year CAGR | `Target` |
| **12** | `asymmetric-threat-defense-matrix` | Threat Defense Matrix | Product & Architecture | MITRE ATT&CK mapping & eBPF containment | `Shield` |
| **13** | `hardware-accelerator-die-topology`| Die Topology | Product & Architecture | 3nm silicon floorplan & HBM3e stacks | `Server` |
| **14** | `customer-experience-journey-delta` | CX Journey Delta | Story & Conversion | Legacy friction vs autonomous experience | `Users` |
| **15** | `executive-board-mandate-cta` | Board Mandate CTA | Story & Conversion | Capital allocation & boardroom resolution | `CheckCircle` |

### 3.1 Modal Behavior Verification

1. **Header Count:** `Insert New Slide Archetype (N Templates)` dynamically increments by 15.
2. **Icon Rendering:** In `SlideCreatorModal.tsx`, the `ICONS` map resolves icons by name (`ICONS[opt.icon] || Layers`). If any icon is missing from the local lookup table, it cleanly falls back to `Layers` without throwing.
3. **Dispatch Flow:** When clicked:
   `handleSelect(opt.type)` $\rightarrow$ `addSlide(createArchetypeSlide(opt.type))` $\rightarrow$ Appended to `deck.slides` $\rightarrow$ Closes modal $\rightarrow$ Immediately renders the new slide on the canvas.

---

## 4. Verification Protocol & Quality Gates

| Gate # | Check Description | Command / Test | Success Metric |
|:---:|:---|:---|:---|
| **V-01** | TypeScript Compilation | `pnpm exec tsc --noEmit` | **0 errors**. Clean resolution of types and factories. |
| **V-02** | Archetype Options Count | Assertion check | `ARCHETYPE_OPTIONS.length` includes all 15 modern options. |
| **V-03** | Factory Instantiation | Unit test / smoke call | `createArchetypeSlide('ai-data-flywheel-lifecycle')` returns valid slide object with `type: 'ai-data-flywheel-lifecycle'`. |
| **V-04** | File Size Hygiene | Line count check | `src/utils/slideArchetypeFactories.ts` remains within file size limits. |
