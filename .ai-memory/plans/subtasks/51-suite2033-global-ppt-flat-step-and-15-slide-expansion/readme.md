# Suite 2033 Subtask Execution Roadmap

> **Parent Initiative:** `Suite 2033 Global PPT Flat Step & 15-Slide Expansion`  
> **Target Release:** `v1.6.0`  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  
> **Status:** `PENDING EXECUTION`  
> **Specification References:**  
> - [`01-architecture-spec.md`](../../../02-spec/21-app/51-suite2033-global-ppt-flat-step-and-15-slide-expansion/01-architecture-spec.md)  
> - [`02-component-spec.md`](../../../02-spec/21-app/51-suite2033-global-ppt-flat-step-and-15-slide-expansion/02-component-spec.md)  

---

## Subtask Execution Waves

The implementation of Suite 2033 is structured across two non-conflicting waves:

```
+---------------------------------------------------------------------------------------------------+
|                        SUITE 2033 EXECUTION WAVE ORCHESTRATION                                    |
+---------------------------------------------------------------------------------------------------+
| WAVE 1: CONTRACTS, STYLES & STEP COUNT ENGINE                                                     |
| [Subtask 01] src/types/suite2033SlideTypes.ts & Discriminated Unions                              |
| [Subtask 02] src/styles/animations.less & Dual-Mode Semantic Variables                            |
| [Subtask 03] src/stores/deckSegments/suite2033Factories.ts & Step Engine Integration             |
|---------------------------------------------------------------------------------------------------|
| WAVE 2: SLIDE COMPONENTS & RUNTIME INTEGRATION                                                    |
| [Subtask 04] Kinetic Multi-Step Components Part 1 (Slides 01-04)                                  |
| [Subtask 05] Kinetic Multi-Step Components Part 2 (Slides 05-08)                                  |
| [Subtask 06] Flat Sovereign Overview Components (Slides 09-15)                                    |
| [Subtask 07] Suite2033SlideRenderer.tsx Dispatcher, Deck Injection & End-to-End Verification       |
+---------------------------------------------------------------------------------------------------+
```

---

## Subtask Manifest

| Subtask ID | File | Wave | Focus / Scope | Status |
|:---|:---|:---:|:---|:---:|
| **Task-01** | [`01-contracts-and-types.md`](01-contracts-and-types.md) | Wave 1 | Canonical TypeScript contracts, 100% positive booleans, BaseSlide | PENDING |
| **Task-02** | [`02-styles-and-animations.md`](02-styles-and-animations.md) | Wave 1 | 4 GPU keyframes (`radarSweepPulse`, `pipelineDataFlow`, etc.) & tokens | PENDING |
| **Task-03** | [`03-factories-and-step-engine.md`](03-factories-and-step-engine.md) | Wave 1 | Data factories, step resolver, stage keys, registry updates | PENDING |
| **Task-04** | [`04-kinetic-components-part1.md`](04-kinetic-components-part1.md) | Wave 2 | Kinetic slides 01-04 (Initiative Cascade, Agent Pipe, M&A, SOC Loop) | PENDING |
| **Task-05** | [`05-kinetic-components-part2.md`](05-kinetic-components-part2.md) | Wave 2 | Kinetic slides 05-08 (Cloud Stepper, PLG Funnel, Data Lineage, Burn-Up) | PENDING |
| **Task-06** | [`06-flat-overview-components.md`](06-flat-overview-components.md) | Wave 2 | Flat sovereign slides 09-15 (Infra, SaaS, ESG, CapTable, AI, CISO, Partner) | PENDING |
| **Task-07** | [`07-dispatcher-and-deck-integration.md`](07-dispatcher-and-deck-integration.md) | Wave 2 | Dispatcher renderer, deck segment, initialDeck seeding, verification | PENDING |
