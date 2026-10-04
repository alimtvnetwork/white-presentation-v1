# 01-Architecture Spec: Suite 2033 Global PPT Presentation Architecture & Kinetic Engine

> **Specification Identifier:** `02-spec/21-app/51-suite2033-global-ppt-flat-step-and-15-slide-expansion/01-architecture-spec.md`  
> **Status:** `APPROVED CANONICAL ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.6.0` (Suite 2033 Expansion)  
> **Author:** Spec Subagent 01 (Core Architectural Systems, Theme & Motion Architect)  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  
> **Created:** 2026-10-05  
> **Domain:** Global PPT Parity, Suite 2033 Corporate Keynote Architecture, 60/30/10 Visual Spatial Balance, 4-Plane Depth Hierarchy, 1920x1080 Virtual Canvas Scaling, Dual-Mode Semantic Token Architecture, Northern UI/UX Typography Standard v1.3.3 (Floor >= 14px), Pure DOM Live Typography Mandate, 4 GPU Kinetic Animations (radarSweepPulse, pipelineDataFlow, cascadeRampGlow, metricPulseBeacon), 3-Phase Kinetic Step Progression Lifecycle vs Flat Sovereign Clarity, and 15 Brand-New Slide Archetypes (8 Kinetic Multi-Step + 7 Flat Sovereign).

---

## 1. Architectural Vision & Executive Summary

### 1.1 The Global PPT Synthesis for Suite 2033
Modern boardroom keynotes, sovereign regulatory presentations, and mission-critical enterprise briefings require extreme clarity, narrative pacing, and optical calm. Executive audiences reject visual chaos, harsh contrast collisions, unreadable small text, and static bullet-point fatigue. Suite 2033 deepens the architectural synthesis between Global PPT corporate presentation standards and the White Presentation reactive runtime engine.

Suite 2033 establishes two complementary slide operational paradigms:
1. **Kinetic Multi-Step Workflows (8 Archetypes):** Interactive multi-stage operational flows progressing through a deterministic 3-phase lifecycle (`completed`, `active`, `future` with 1.25px optical blur and click-to-jump navigation).
2. **Flat Sovereign Overviews (7 Archetypes):** Comprehensive situational topologies, strategic governance cockpits, and multi-dimensional matrices operating as single-step sovereign views ($1$ step) with all structural cards rendered at full 1.0 opacity.

```
+---------------------------------------------------------------------------------------------------+
|               SUITE 2033 ARCHITECTURAL PILLARS & FOUNDATIONAL TENETS                              |
+---------------------------------------------------------------------------------------------------+
| PILLAR 1: Strict 60/30/10 Visual Spatial Balance & Dual-Mode Semantic Tokens                       |
| 60% dominant negative space wash, 30% structural glassmorphic panels, <=10% vivid focal accents.  |
| Dual-mode semantic tokens eliminate dark slabs on light themes (var(--pres-text),                |
| var(--pres-bg-card), var(--pres-border)); zero hardcoded text-white or bg-slate-900.             |
|---------------------------------------------------------------------------------------------------|
| PILLAR 2: 4-Plane Depth & Spatial Elevation Hierarchy                                             |
| Non-overlapping vertical stratification: Plane 0 (Canvas Base z:0), Plane 1 (Raised Bento z:10),  |
| Plane 2 (Elevated Focal Active Step z:20 with 1.02x scale and halo), and Plane 3 (Floating HUD).  |
|---------------------------------------------------------------------------------------------------|
| PILLAR 3: Northern UI/UX Typography Standard v1.3.3 with Inviolable 14px Floor                    |
| Tripartite font family hierarchy: 'Ubuntu' display, 'Poppins' body, 'JetBrains Mono' telemetry.   |
| Absolute physical floor >= 14px on 1080p canvas. Pure DOM live text: zero rasterized bitmaps.     |
|---------------------------------------------------------------------------------------------------|
| PILLAR 4: Zero Yellow-on-Light Contrast Rule & Contrast Inversion                                |
| Enforces WCAG AA contrast (CR >= 4.5:1). Yellow/amber accents automatically invert to deep amber  |
| (hsl(28 95% 26%)) or slate ink on light backgrounds to guarantee uncompromised legibility.        |
|---------------------------------------------------------------------------------------------------|
| PILLAR 5: 4 Hardware-Accelerated GPU Kinetic Motion Keyframes                                     |
| 4 signature GPU keyframe animations (radarSweepPulse, pipelineDataFlow, cascadeRampGlow,         |
| metricPulseBeacon) operating on composited properties (transform, opacity, stroke-dashoffset).    |
|---------------------------------------------------------------------------------------------------|
| PILLAR 6: 3-Phase Kinetic Step Progression vs Flat Sovereign Clarity                              |
| Multi-step slides: completed (0.75 opacity + checkmark), active (1.00 + 1.02x scale + halo glow), |
| future (0.38 opacity + 1.25px blur + click-to-jump affordance). Flat sovereign slides: 1.00 all.  |
|---------------------------------------------------------------------------------------------------|
| PILLAR 7: 15 Distinct High-Authority Enterprise Archetypes                                        |
| 8 kinetic multi-step workflows + 7 flat sovereign overviews covering cyber threat defense, data   |
| lineage pipelines, capital liquidity, sovereign cloud mesh, identity perimeter, and governance.  |
+---------------------------------------------------------------------------------------------------+
```

---

## 2. Spatial Balance & 4-Plane Depth Hierarchy

### 2.1 The 60/30/10 Ratio
Every Suite 2033 slide layout strictly allocates visual mass:
- **60% Dominant Base Wash (Plane 0):** Background canvas gradient (`var(--pres-bg-canvas)`), establishing spatial context without visual noise.
- **30% Structural Panels (Plane 1):** Translucent glassmorphism surfaces (`var(--pres-bg-card)`), providing bento-grid containment with subtle hairline borders (`1px solid var(--pres-border)`).
- **10% Focal Accents (Plane 2):** High-salience key elements (`var(--pres-accent)`), badge kickers, active step indicators, and animated data flows.

### 2.2 4-Plane Depth Matrix
```
+---------+--------------------+-----------------------------+------------------------------------+
| Plane   | Layer Name         | Elevation / z-Index         | Visual Treatment & Styling         |
+---------+--------------------+-----------------------------+------------------------------------+
| Plane 0 | Canvas Ground      | z: 0 (Base)                 | Ambient gradient, organic wave     |
| Plane 1 | Raised Bento Panel | z: 10, shadow: 0 8px 30px   | Glass backdrop-filter: blur(12px)  |
| Plane 2 | Elevated Active    | z: 20, scale: 1.02x         | Accent halo glow: 0 0 24px -2px    |
| Plane 3 | Floating HUD       | z: 50+, backdrop blur 20px  | Dark chrome control overlay        |
+---------+--------------------+-----------------------------+------------------------------------+
```

---

## 3. Dual-Mode Semantic Token Architecture

### 3.1 Total Elimination of Light-Theme Dark Slabs
A major anti-pattern in presentation decks is hardcoded dark styling (`text-white`, `bg-slate-900`, `border-slate-800`). When switching to light themes (`white-brand`, `corporate-clean`, `paper-editorial`, `sapphire-executive-light`, `archival-monaco-cream`), these hardcoded values create jarring dark slabs that destroy cognitive flow and break visual balance.

Suite 2033 enforces a dual-mode semantic token contract:
- **Never use hardcoded utility classes:** Disallow `text-white`, `text-slate-100`, `bg-slate-900`, `bg-slate-950`, `border-slate-800`.
- **Always use semantic CSS variables:**
  - Primary text: `color: var(--pres-text)` (adapts from crisp light on dark to rich charcoal ink `hsl(222 47% 11%)` on light).
  - Secondary / subtext: `color: var(--pres-subtext)` (adapts to muted slate ink `hsl(215 16% 47%)` on light).
  - Card background: `background: var(--pres-bg-card)` (adapts to translucent ivory `rgba(255, 255, 255, 0.94)` on light, glassmorphic dark on dark).
  - Borders: `border: 1px solid var(--pres-border)` (adapts to hairline border ink `rgba(15, 23, 42, 0.08)` on light).
  - Accent color: `var(--pres-accent)`.
  - Accent text: `var(--pres-accent-text)`.

### 3.2 Canonical Palette Contract
Theme tokens are declared in space-separated HSL channels (`--pres-accent-hsl: 262 83% 58%`), allowing variable opacity compositions:
```css
color: hsl(var(--pres-accent-hsl) / 0.95);
background: hsl(var(--pres-accent-hsl) / 0.12);
border-color: hsl(var(--pres-accent-hsl) / 0.28);
```

### 3.3 Zero Yellow-on-Light Contrast Rule
On light themes:
- Pure yellow (`hsl(45-55, 100%, 50%)`) has insufficient contrast against light backgrounds ($< 2.0:1$).
- Light-theme contrast auto-inversion replaces low-contrast yellow with deep amber-brown (`hsl(28 95% 26%)`) or slate ink (`hsl(222 47% 11%)`), ensuring compliance with WCAG AA ($CR \ge 4.5:1$).

---

## 4. Northern UI/UX Typography Standard v1.3.3

### 4.1 1920x1080 Virtual Canvas Scaling
The presentation canvas is locked to an exact reference coordinate space of $1920\text{px} \times 1080\text{px}$ ($16:9$).
- Scaling is executed via CSS transform matrix anchored to `transform-origin: center center`.
- Safe margin: $48\text{px}$ perimeter inset ($x \in [48, 1872]$, $y \in [48, 1032]$).
- Header zone: $y \in [48, 180]$ (kicker, title, subtitle, metadata).
- Content zone: $y \in [200, 980]$ (bento grids, telemetry streams, stage cards).
- Footer / navigation zone: $y \in [1000, 1040]$.

### 4.2 Northern UI/UX Hierarchy
- **Display Headings:** `'Ubuntu', sans-serif`, weight 700, size $44\text{px} - 56\text{px}$, line-height 1.15.
- **Subtitles & Section Heads:** `'Poppins', sans-serif`, weight 500/600, size $20\text{px} - 28\text{px}$, line-height 1.3.
- **Narrative Body Text:** `'Poppins', sans-serif`, weight 400/500, size $16\text{px} - 20\text{px}$, line-height 1.5.
- **Telemetry & Labels:** `'JetBrains Mono', monospace`, weight 600, size $14\text{px} - 16\text{px}$, letter-spacing `0.06em`.
- **Inviolable Floor:** Under Northern UI/UX standard v1.3.3, NO text element may render at less than $14\text{px}$ on the $1080\text{p}$ reference canvas.
- **Pure DOM Live Typography:** Zero rasterized canvas 2D bitmaps or static PNG slide captures. All text elements are live DOM nodes supporting subpixel antialiasing and native text selection.

---

## 5. GPU Kinetic Motion Keyframes

Suite 2033 introduces 4 signature hardware-accelerated GPU keyframe animations in `src/styles/animations.less`:

```less
// 1. Radar sweep pulse for threat matrices, perimeter surveillance, and spatial scanning
@keyframes radarSweepPulse {
  0% { transform: rotate(0deg); opacity: 0.85; filter: drop-shadow(0 0 4px var(--pres-accent)); }
  50% { opacity: 0.4; }
  100% { transform: rotate(360deg); opacity: 0.85; filter: drop-shadow(0 0 12px var(--pres-accent)); }
}

// 2. Pipeline data flow for streaming ETL, real-time message routing, and event pipelines
@keyframes pipelineDataFlow {
  0% { stroke-dashoffset: 200; opacity: 0.35; filter: drop-shadow(0 0 2px var(--pres-accent)); }
  50% { opacity: 1; filter: drop-shadow(0 0 8px var(--pres-accent)); }
  100% { stroke-dashoffset: 0; opacity: 0.35; filter: drop-shadow(0 0 2px var(--pres-accent)); }
}

// 3. Cascade ramp glow for multi-tier liquidity waterfalls, capital tranches, and yield ramps
@keyframes cascadeRampGlow {
  0% { background-position: 0% 50%; box-shadow: 0 0 0 rgba(0, 0, 0, 0); }
  50% { background-position: 100% 50%; box-shadow: 0 0 20px -2px var(--pres-accent-glow); }
  100% { background-position: 200% 50%; box-shadow: 0 0 0 rgba(0, 0, 0, 0); }
}

// 4. Metric pulse beacon for distributed node health, consensus telemetry, and edge beacons
@keyframes metricPulseBeacon {
  0% { transform: scale(0.96); box-shadow: 0 0 0 0 var(--pres-accent-glow); opacity: 0.8; }
  70% { transform: scale(1.04); box-shadow: 0 0 0 12px rgba(0, 0, 0, 0); opacity: 1; }
  100% { transform: scale(0.96); box-shadow: 0 0 0 0 rgba(0, 0, 0, 0); opacity: 0.8; }
}
```

Accompanying utility classes operate with hardware acceleration:
- `.animate-radar-sweep` (`animation: radarSweepPulse 4s linear infinite; will-change: transform;`)
- `.animate-pipeline-flow` (`animation: pipelineDataFlow 2.5s ease-in-out infinite; will-change: stroke-dashoffset;`)
- `.animate-cascade-ramp` (`animation: cascadeRampGlow 3s ease infinite; will-change: box-shadow;`)
- `.animate-metric-beacon` (`animation: metricPulseBeacon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; will-change: transform;`)

---

## 6. Deterministic 3-Phase Kinetic Step Progression Lifecycle

### 6.1 Kinetic Multi-Step Lifecycle
For the 8 Kinetic Multi-Step slide archetypes, child cards evaluate their status against `activeStep` (1-indexed):

```typescript
export function getStepPhase(cardStep: number, activeStep: number): 'completed' | 'active' | 'future' {
  if (cardStep < activeStep) return 'completed';
  if (cardStep === activeStep) return 'active';
  return 'future';
}
```

- **`completed` Phase:**
  - Opacity: $0.75$.
  - Transform: Normal scale ($1.00\text{x}$).
  - Badge: Accent/green completed checkmark icon (`✓`) with settled border ink.
  - Interactive affordance: Clickable to jump back to that step.
- **`active` Phase:**
  - Opacity: $1.00$.
  - Transform: Elevated scale ($1.02\text{x}$) on Plane 2 ($z\text{-index}: 20$).
  - Halo glow: `box-shadow: 0 0 24px -2px var(--pres-accent-glow)`.
  - Border: Vibrant accent border (`1.5px solid var(--pres-accent)`).
  - Status beacon: Pulsing active badge.
- **`future` Phase:**
  - Opacity: $0.38$.
  - Optical filter: `backdrop-filter: blur(1.25px)` with subtle $20\%$ grayscale tint.
  - Border: Hairline ghost border (`1px solid var(--pres-border)` at $0.4$ opacity).
  - Interactive affordance: Clickable to jump forward directly to that step.

### 6.2 Flat Sovereign Clarity
For the 7 Flat Sovereign Overview archetypes:
- `maxSteps` is strictly locked to $1$.
- No step phase dimming or blur is applied; every card and panel renders at full $1.00$ opacity.
- Preserves holistic situational awareness across high-density governance, architecture, and matrix overviews.

---

## 7. Taxonomical Overview of 15 Brand-New Slide Archetypes

Suite 2033 expands the platform catalog with 15 brand-new, enterprise-grade slide archetypes divided into 8 Kinetic Multi-Step Workflows and 7 Flat Sovereign Overviews:

```
+---------------------------------------------------------------------------------------------------+
|               SUITE 2033 SLIDE ARCHETYPE TAXONOMY (15 BRAND-NEW ARCHETYPES)                       |
+----+---------------------------------------+-------------+-------+--------------------------------|
| No | Archetype Name                        | Paradigm    | Steps | Key Domain / Strategic Focus   |
+----+---------------------------------------+-------------+-------+--------------------------------|
| 01 | strategic-initiative-cascade          | Kinetic     | 4     | Executive Horizons & Capital   |
| 02 | ai-agent-orchestration-pipeline       | Kinetic     | 4     | Multi-Agent LLM Reasoning Pipe |
| 03 | ma-synergy-realization-bridge         | Kinetic     | 4     | M&A EBITDA Bridge Waterfall    |
| 04 | zero-day-incident-containment-loop    | Kinetic     | 4     | SOC Crisis Containment & MTTD  |
| 05 | cloud-migration-wave-stepper          | Kinetic     | 4     | Multi-DC Cloud Cutover Stepper |
| 06 | customer-lifecycle-expansion-funnel   | Kinetic     | 4     | B2B PLG NRR Expansion Funnel   |
| 07 | data-lineage-governance-flow          | Kinetic     | 4     | Cryptographic Data Provenance  |
| 08 | product-release-burn-up-cadence       | Kinetic     | 4     | Quality-Gated Release Cadence  |
| 09 | global-infrastructure-topology-cockpit| Sovereign   | 1     | Multi-Region Cloud & Anycast   |
| 10 | saas-unit-economics-breakdown         | Sovereign   | 1     | Investor SaaS Unit Metrics     |
| 11 | esg-sustainability-governance-matrix  | Sovereign   | 1     | 3-Pillar ESG Compliance Matrix |
| 12 | cap-table-ownership-waterfall         | Sovereign   | 1     | Equity Dilution & Preferences  |
| 13 | ai-model-evaluation-benchmark-radar   | Sovereign   | 1     | 6-Axis Frontier AI Radar       |
| 14 | enterprise-security-posture-radar     | Sovereign   | 1     | 6-Vector CISO Defense Radar    |
| 15 | partner-ecosystem-value-map           | Sovereign   | 1     | Global Alliances Value Map     |
+----+---------------------------------------+-------------+-------+--------------------------------+
```

### 7.1 Detailed Descriptions of Kinetic Multi-Step Archetypes (4 Steps)
1. **`strategic-initiative-cascade` (`cascadeHorizons`):**
   - 4-horizon strategic execution roadmap: (1) Foundation & Margin Modernization, (2) Scaled Multi-Tenant Platform Expansion, (3) Ecosystem Primacy & Network Lock, (4) Autonomous Frontier Intelligence.
   - Staggered capital allocation and OKR milestone mapping.
2. **`ai-agent-orchestration-pipeline` (`orchestrationPhases`):**
   - 4-phase autonomous agent reasoning: (1) Ingestion & Intent Decomposition, (2) Swarm Deliberation & Adversarial Debate, (3) Sandboxed MCP Tool Execution, (4) Dual-Verifier Attestation & Final Synthesis.
   - Live token throughput telemetry, worker node state badges, and cryptographic consensus seal.
3. **`ma-synergy-realization-bridge` (`synergyWaves`):**
   - 4-wave post-merger integration bridge: (1) Day 1-100 Continuity & Immediate Cost Cuts, (2) Month 4-9 Procurement Harmonization, (3) Month 10-18 Enterprise IT & Cloud Convergence, (4) Month 19-24 Commercial Cross-Sell & Run-Rate Full Capture.
   - Cumulative EBITDA accretion waterfall and integration office signoff seal.
4. **`zero-day-incident-containment-loop` (`containmentSteps`):**
   - 4-stage cybersecurity crisis containment loop: (1) Anomaly Detection & Threat Intel Triage, (2) Zero-Trust Isolation & Blast Radius Quarantining, (3) Kernel Remediation & Exploit Patching, (4) Cryptographic Forensic Attestation & Safe Reseeding.
   - Leverages `radarSweepPulse` on SOC radar badge and `metricPulseBeacon` on severity indicator.
5. **`cloud-migration-wave-stepper` (`migrationWaves`):**
   - 4 structured cloud migration waves: (1) Discovery & Dev/Staging Enclaves, (2) Tier-2 Services & Data Analytics Lakes, (3) Tier-1 Transactional Core & Payment Rails, (4) Legacy DC Evacuation & Decommissioning.
   - Displays workload inventory breakdown, downtime meters, and rollback plan armed status.
6. **`customer-lifecycle-expansion-funnel` (`expansionStages`):**
   - 4 post-sales customer lifecycle milestones: (1) Self-Serve Land & User Activation, (2) Departmental Standardization, (3) Enterprise Wall-to-Wall Platform License, (4) Global Strategic Co-Innovation & Advocacy.
   - Renders net revenue retention (NRR) milestones, health scores, and account expansion revenue telemetry.
7. **`data-lineage-governance-flow` (`governanceHops`):**
   - 4-hop cryptographic data lineage pipeline: (1) Raw Ingestion & Schema Discovery, (2) Automated PII Masking & Tokenization, (3) Semantic Feature Engineering & Stitching, (4) Sovereign Audited Board Analytics.
   - Leverages `pipelineDataFlow` GPU keyframe animation on SVG stream connector lines with moving packets.
8. **`product-release-burn-up-cadence` (`releaseGates`):**
   - 4 strict release quality gates: (1) Scope Lock & Feature Completeness, (2) Security Fuzzing & Static Analysis Zero-Defect Pass, (3) High-Concurrency P99 Stress Benchmarks, (4) Executive Release Candidate Signoff.
   - Displays story points burn-up chart, Sev-1 defect convergence gauge, and Chief Software Engineer Alim Ul Karim signoff stamp.

### 7.2 Detailed Descriptions of Flat Sovereign Overview Archetypes (1 Step)
9. **`global-infrastructure-topology-cockpit`:**
   - Single-step visual topology mapping multi-region cloud infrastructures across Americas, EMEA, APAC, and Sovereign Edge Anycast PoPs with latency telemetry and BGP route health.
10. **`saas-unit-economics-breakdown`:**
    - High-authority executive mosaic presenting investor-grade SaaS unit economics: CAC Breakdown, LTV Mechanics, Gross Margin, Cohort Payback Curves, and Rule of 40 score.
11. **`esg-sustainability-governance-matrix`:**
    - Tri-pillar sustainability matrix tracking Environmental (Scope 1-3, PUE 1.12), Social (diversity benchmarks, zero pay gap), and Governance (independent board majority, anti-bribery).
12. **`cap-table-ownership-waterfall`:**
    - Multi-class equity ownership stacked bar and 5 shareholder class cards (Founders, Seed, Series A, Series B, ESOP Pool) with 1x non-participating liquidation preference waterfall stack.
13. **`ai-model-evaluation-benchmark-radar`:**
    - 6-axis AI model evaluation radar comparing frontier LLM architectures against leading models across MMLU-Pro, SWE-bench, MATH, IFEval, Hallucination Resistance, and Tool Calling.
14. **`enterprise-security-posture-radar`:**
    - 6-vector CISO defense radar plotting maturity across Identity & Zero-Trust, Endpoint EDR, Cloud CSPM, AppSec SAST/DAST, Data Loss Prevention, and Automated Recovery SLA.
15. **`partner-ecosystem-value-map`:**
    - Hub-and-spoke alliance value map illustrating central platform hub connected to 4 partner pillars: Global System Integrators, Cloud Hyperscalers, ISV Tech Alliances, and Channel Resellers.

---

## 8. Print & PDF Presentation Export Architecture

The PDF export subsystem in `src/styles/presentation.less` ensures uncompromised vector output for Suite 2033:
1. `@page { size: 1920px 1080px; margin: 0; }` enforces strict 16:9 slide landscape aspect ratio.
2. `print-color-adjust: exact !important;` prevents browsers from stripping background washes and card fills.
3. Interactive overlays (`.hud-chrome`, `.presenter-hud`, `.builder-panel`, `.camera-overlay`) are suppressed via `display: none !important`.
4. Stage cards snap to static dimensions with animations suppressed for sharp, high-resolution vector PDF printing.
