# 32-Global PPT Motion, Flat Step & 15 Slide Archetypes: Master Specification Suite

> **Specification Suite Identifier:** `02-spec/21-app/32-global-ppt-motion-flat-step-and-15-slide-archetypes`  
> **Status:** `APPROVED CANONICAL ARCHITECTURE`  
> **Target Release:** `v1.5.0`  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  
> **Domain:** Global PPT Institutional Authority, Flat Slide Show Kinetic Step Progression, 15 Kinetic Slide Archetypes, Space-Separated HSL Triplet Tokens, Capsule Hierarchy, Framer Motion Spring Physics, Directional Transitions, Bubble Physics & Quality Governance  

---

## 1. Executive Summary & Architectural Synthesis

The **32-Global PPT Motion, Flat Step & 15 Slide Archetypes** specification suite formalizes the deep unification of two foundational presentation engineering paradigms:

1. **Global PPT Institutional Authority (`global-ppt-v1`)**:
   - Executive-level boardroom authority, typographic clarity, and bilateral corporate narrative structures.
   - 10 authentic Global PPT master color themes defined strictly via unadorned, space-separated **HSL triplet tokens** (`H S% L%`), unlocking direct alpha compositing (`hsl(var(--pres-accent) / <alpha>)`).
   - `.capsule-*` class hierarchy (`capsule-gold`, `capsule-ember`, `capsule-cream`, `capsule-ink`, `capsule-outline`, `capsule-meta`) with light-theme contrast auto-inversions for `paper-ink` and `github-light`.
   - Optical micro-shadow tokens (`--text-shadow-weight-*`) providing sub-pixel typography sharpness across high-DPI displays and conference room projectors.
   - Fixed high-contrast dark Presenter HUD chrome tokens (`--chrome-*`).
   - Bubble physics simulation engine with 4 tuned presets (`servicesDefault`, `calm`, `dense`, `lively`) and pairwise force relaxation.

2. **Flat Slide Show Kinetic Step Progression (`flat-slide-show`)**:
   - Intra-slide micro-stages with a deterministic **3-Phase Kinetic Lifecycle**:
     - `completed` (opacity $0.75$, scale $0.99$, desaturated $10\%$, verified checkmark badge, macro context preserved).
     - `active` (opacity $1.00$, scale $1.02$, elevated with glowing accent halo `layoutId="active-step-halo"` and spring snap).
     - `future` (opacity $0.40$, scale $0.97$, optical Gaussian blur at $1.25\text{px}$, pointer-events disabled).
   - Damped harmonic spring physics ($k = 420\text{ N/m}$, $c = 17\text{ N}\cdot\text{s/m}$, $m = 0.8\text{ kg}$, damping ratio $\zeta = 0.85$).
   - Dynamic kinetic keyframes (`@keyframes haloPulse`, `svgStrokeDash`, `bentoReveal`, `cardPop3D`, `audioWaveformPulse`, `dagNodeTraverse`, `canaryGaugeSweep`).
   - Directional slide transitions ($\pm 80\text{px}$) with kinetic motion variant CSS classes (`[data-motion-variant="lift"]`, `[data-motion-variant="slide"]`, `[data-motion-variant="parallax"]`).
   - **Pure Live DOM Typography Mandate**: zero rasterized text graphics, 100% accessible, selectable, and screen-reader compliant.
   - 15 Kinetic Slide Archetypes with active step consumption and zero phantom steps.

---

## 2. Specification Suite Document Index

| Document | File Path | Scope & Core Technical Coverage | Author |
|:---|:---|:---|:---:|
| **01-Overview** | [01-overview.md](01-overview.md) | Narrative arc architecture, 60/30/10 visual balance rules, 4-plane depth hierarchy, pure live DOM typography mandate, fluid typographic scaling on the 1920x1080 canvas, and persona standardization guidelines. | Spec Subagent 01 |
| **02-Data Contracts** | [02-data-contracts.md](02-data-contracts.md) | Canonical TypeScript schemas, discriminated union definitions, ASCII wireframes, pixel coordinate budgets, step count formulas, and JSON fixtures for all 15 kinetic slide archetypes. | Spec Subagent 01 |
| **03-Visual & Motion** | [03-visual-and-motion.md](03-visual-and-motion.md) | 10 Global PPT Master Color Themes with authentic HSL triplet tokens, 10 canonical legacy aliases, light-theme capsule contrast inversions, dynamic micro-shadow contrast architecture, Framer Motion spring physics ($k=420, c=17, m=0.8, \zeta=0.85$), dynamic kinetic keyframes (`haloPulse`, `svgStrokeDash`, `bentoReveal`, etc.), directional slide transitions ($\pm 80\text{px}$), kinetic variant CSS classes, bubble physics presets, transition curves, 3-phase step lifecycle, and WebAudio synthesizer sound engine. | Spec Subagent 02 |
| **04-Verification Gates** | [04-verification-gates.md](04-verification-gates.md) | 12-dimensional automated quality verification matrix: Hard Rule CODE-RED-006R ($\le 100$ lines per `.tsx` component), Rule R1 Zero Builds / Test Suites ban, fast targeted checks (Python line counter, `npx tsc --noEmit`), affirmative boolean rules (`booleanGuards.ts`), persona standardization ("Chief Software Engineer"), pure live DOM text, active step progression, WCAG 2.1 AA contrast, secrets quarantine, relative path compliance, atomic GitMap commits, canvas geometry, and acoustic safety. | Spec Subagent 02 |

---

## 3. The 15 Kinetic Slide Archetypes

1. **`code-diff-comparison`**: Side-by-side legacy vs refactored code diff viewer with live syntax highlighting, line annotations, and step-by-step diff reveals.
2. **`global-cloud-edge-mesh`**: Global cloud points of presence (PoP), edge latency topography, animated packet flow, and regional tier filtering.
3. **`api-endpoint-inspector`**: Interactive REST/GraphQL payload viewer, HTTP verb badges, query parameter inspector, and live JSON response tree.
4. **`database-schema-erd`**: Entity Relationship Diagram with interactive foreign key highlights, table column typing, and migration step progression.
5. **`security-threat-model`**: Multi-tier defense-in-depth security model, attack vector analysis, CVE severity badges, and mitigation protocol cards.
6. **`ai-agent-swarm-dag`**: Directed Acyclic Graph (DAG) for autonomous AI multi-agent orchestration, state machine transitions, and task delegation streams.
7. **`financial-burn-runway`**: Executive burn rate, runway projection charts, monthly capital expenditures, and funding milestone targets.
8. **`bento-kpi-mosaic`**: Multi-dimensional Bento grid KPI showcase with live counter spring animations, status pills, and trend indicators.
9. **`canary-release-gauge`**: Blue/Green and Canary release deployment progress gauge, error budget burn down, and automated rollback telemetry.
10. **`incident-rca-postmortem`**: 4-part Root Cause Analysis timeline, blast radius severity gauge, detection-to-resolution metrics, and prevention action items.
11. **`slas-and-uptime-status`**: Service Level Agreement compliance dashboard, 99.999% uptime status bars, incident history calendar, and latency percentiles.
12. **`audio-waveform-studio`**: Multi-track audio and acoustic visualizer stage, real-time frequency bar pulses, and narrator ducking state display.
13. **`hardware-silicon-spec`**: High-performance compute chip architecture, core topology layout, memory bandwidth benchmarks, and thermal profiles.
14. **`cohort-retention-heatmap`**: Multi-month user cohort retention heatmap table with chromatic density gradient cells and churn analysis indicators.
15. **`verifiable-audit-ledger`**: Cryptographically verifiable audit log with block sequence hashes, timestamp verification badges, and immutability proofs.

---

## 4. Implementation Roadmap & Source File Mapping

```
Codebase Implementation Mapping:
├── Color Theming, Capsule System & Physics
│   ├── src/themes/gradientTokens.ts       (10 HSL master themes + 10-step ramps + 10 canonical aliases)
│   ├── src/themes/themeRuntime.ts         (CSS custom properties injection & runtime persistence)
│   ├── src/styles/variables.less          (Space-separated HSL tokens, --chrome-* tokens, micro-shadows)
│   ├── src/styles/presentation.less       (.capsule-* classes and light-theme contrast auto-inversions)
│   ├── src/styles/animations.less         (Kinetic variant classes and keyframes: haloPulse, svgStrokeDash, etc.)
│   ├── src/utils/motionPhysics.ts         (Spring physics constants, bubble physics presets & simulation)
│   ├── src/audio/soundEngine.ts           (Web Audio API synthesized sound cues, whooshes, clicks)
│   └── src/components/canvas/SlideBackground.tsx (Micro-shadows, radial wash, dot-matrix)
├── Store, Types & Slide Factories
│   ├── src/types/globalPptArchetypes.ts   (TypeScript discriminated unions & schemas for 15 archetypes)
│   ├── src/types/presentation.ts          (Register types in SlideType and SlideData)
│   ├── src/stores/deckStore.ts            (Intra-slide activeStep management & stepCount formulas)
│   └── src/utils/globalPptSlideFactories.ts (Factory defaults & step calculation)
├── First Batch Slide Components (<= 100 lines each)
│   ├── src/components/slides/CodeDiffComparisonSlide.tsx + diff/
│   ├── src/components/slides/GlobalCloudEdgeMeshSlide.tsx + edge/
│   ├── src/components/slides/ApiEndpointInspectorSlide.tsx + api/
│   ├── src/components/slides/DatabaseSchemaErdSlide.tsx + erd/
│   ├── src/components/slides/SecurityThreatModelSlide.tsx + security/
│   ├── src/components/slides/AiAgentSwarmDagSlide.tsx + dag/
│   ├── src/components/slides/FinancialBurnRunwaySlide.tsx + runway/
│   └── src/components/slides/BentoKpiMosaicSlide.tsx + mosaic/
├── Second Batch Slide Components & Renderer (<= 100 lines each)
│   ├── src/components/slides/CanaryReleaseGaugeSlide.tsx + canary/
│   ├── src/components/slides/IncidentRcaPostmortemSlide.tsx + rca/
│   ├── src/components/slides/SlasAndUptimeStatusSlide.tsx + uptime/
│   ├── src/components/slides/AudioWaveformStudioSlide.tsx + audio/
│   ├── src/components/slides/HardwareSiliconSpecSlide.tsx + silicon/
│   ├── src/components/slides/CohortRetentionHeatmapSlide.tsx + cohort/
│   ├── src/components/slides/VerifiableAuditLedgerSlide.tsx + ledger/
│   ├── src/components/slides/GlobalPptSuiteSlideRenderer.tsx (6th tier routing for all 15 archetypes)
│   ├── src/components/slides/SlideRenderer.tsx (Slide chain delegation)
│   └── src/stores/initialDeck.ts          (Deck registration with authentic steps)
└── Coding Guidelines Remediation & Quality Gates
    ├── src/utils/booleanGuards.ts         (Affirmative boolean helpers)
    └── affected component files          (Strict compliance: CODE-RED-006R, Rule R1, 100% affirmative booleans)
```
