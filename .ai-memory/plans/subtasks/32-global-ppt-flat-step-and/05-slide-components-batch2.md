# Subtask 05: Slide Components Batch 2 (Archetypes 09–15) Implementation Plan

> **Module:** `.ai-memory/plans/subtasks/32-global-ppt-flat-step-and/`  
> **Parent Plan:** [Plan 32: Global PPT Flat Step & 15 Slide Archetypes](../../pending/32-global-ppt-flat-step-and.md)  
> **Specification References:**  
> - [01-Overview](../../../02-spec/21-app/32-global-ppt-motion-flat-step-and-15-slide-archetypes/01-overview.md)  
> - [02-Data Contracts](../../../02-spec/21-app/32-global-ppt-motion-flat-step-and-15-slide-archetypes/02-data-contracts.md)  
> - [03-Visual and Motion](../../../02-spec/21-app/32-global-ppt-motion-flat-step-and-15-slide-archetypes/03-visual-and-motion.md)  
> - [04-Verification Gates](../../../02-spec/21-app/32-global-ppt-motion-flat-step-and-15-slide-archetypes/04-verification-gates.md)  
> **Status:** Pending Implementation  
> **Target Release:** `v1.5.0`  

---

## 1. Executive Summary & Subtask Objective

Subtask 05 executes the second production batch of React slide components, implementing archetypes 09 through 15 to complete the 15-archetype enterprise suite. Like Batch 1, each slide component enforces **CODE-RED-006R** ($\le 100$ lines per `.tsx` file) through surgical decomposition into isolated child subcomponents housed in archetype-specific sub-folders.

### Core Architecture Mandates:
1. **Hard Line Cap ($\le 100$ lines per file):** The parent slide component acts strictly as a compositional orchestrator connecting store state (`activeStep`, `theme`) with child presentation nodes.
2. **Subcomponent Folder Isolation:** Child components reside in dedicated folders under `src/components/slides/<archetype>/`.
3. **Active Step Consumption:** Every multi-step slide subscribes to `useDeckStore((state) => state.activeStep)` and partitions elements into the 3-phase kinetic progression lifecycle (`completed`, `active`, `future`).
4. **Pure Live DOM Typography:** Zero rasterized text images, zero `<canvas>` text blits. All headlines, code listings, and badges render via semantic HTML with fluid clamp typography.
5. **Positive Booleans & Guard Helpers:** Zero raw boolean negations (`!is*`) or explicit comparisons (`=== true`). All logic uses affirmative helpers from `src/utils/booleanGuards.ts`.
6. **Persona Standardization:** Any speaker or leadership designation strictly references Alim Ul Karim as **"Chief Software Engineer"**.

---

## 2. File Sizing Budgets & Subcomponent Allocation Matrix

| Slide Archetype | Parent File Path | Child Subcomponents Folder | Line Budget (Parent) | Child Line Budgets |
|:---|:---|:---|:---:|:---:|
| 09. `canary-release-gauge` | `src/components/slides/CanaryReleaseGaugeSlide.tsx` | `src/components/slides/canary/` | $\le 85$ lines | $\le 90$ lines each |
| 10. `incident-rca-postmortem` | `src/components/slides/IncidentRcaPostmortemSlide.tsx` | `src/components/slides/rca/` | $\le 85$ lines | $\le 90$ lines each |
| 11. `slas-and-uptime-status` | `src/components/slides/SlasAndUptimeStatusSlide.tsx` | `src/components/slides/uptime/` | $\le 85$ lines | $\le 90$ lines each |
| 12. `audio-waveform-studio` | `src/components/slides/AudioWaveformStudioSlide.tsx` | `src/components/slides/audio/` | $\le 85$ lines | $\le 90$ lines each |
| 13. `hardware-silicon-spec` | `src/components/slides/HardwareSiliconSpecSlide.tsx` | `src/components/slides/silicon/` | $\le 85$ lines | $\le 90$ lines each |
| 14. `cohort-retention-heatmap` | `src/components/slides/CohortRetentionHeatmapSlide.tsx` | `src/components/slides/cohort/` | $\le 85$ lines | $\le 90$ lines each |
| 15. `verifiable-audit-ledger` | `src/components/slides/VerifiableAuditLedgerSlide.tsx` | `src/components/slides/ledger/` | $\le 85$ lines | $\le 90$ lines each |

---

## 3. Detailed Component Breakdown & Decomposition

### Archetype 09: `CanaryReleaseGaugeSlide` (`canary-release-gauge`)
- **Parent Orchestrator:** `src/components/slides/CanaryReleaseGaugeSlide.tsx`
- **Subcomponents:**
  - `src/components/slides/canary/CanaryRadialGauge.tsx`: SVG semi-circular gauge displaying canary traffic percentage ($0\% \to 100\%$) with animated needle (`@keyframes canaryGaugeSweep`).
  - `src/components/slides/canary/CanaryTelemetryCard.tsx`: Error rate, p99 latency, and automated rollback health indicator cards.
- **Progression Logic:**
  - `step = 0`: Baseline $5\%$ canary rollout to internal dogfooding cluster.
  - `step = 1`: $25\%$ expansion to regional edge nodes with stable telemetry.
  - `step = 2`: $100\%$ full production rollout with automated safety gate certification.

### Archetype 10: `IncidentRcaPostmortemSlide` (`incident-rca-postmortem`)
- **Parent Orchestrator:** `src/components/slides/IncidentRcaPostmortemSlide.tsx`
- **Subcomponents:**
  - `src/components/slides/rca/RcaChronologyTimeline.tsx`: Vertical milestone timeline tracking Detection $\to$ Mitigation $\to$ Resolution timestamps.
  - `src/components/slides/rca/RcaRootCauseCard.tsx`: 4-part Root Cause Analysis card detailing direct trigger, underlying condition, and systemic fix.
- **Progression Logic:**
  - `step = 0`: Incident discovery, severity badge (P1), and blast radius metrics.
  - `step = 1`: 4-part root cause diagnostic analysis with code-level inspection.
  - `step = 2`: Permanent architectural remediations, automated regression tests, and postmortem sign-off.

### Archetype 11: `SlasAndUptimeStatusSlide` (`slas-and-uptime-status`)
- **Parent Orchestrator:** `src/components/slides/SlasAndUptimeStatusSlide.tsx`
- **Subcomponents:**
  - `src/components/slides/uptime/UptimeCalendarGrid.tsx`: 90-day availability strip with color-coded day pills (green = 100%, amber = degraded).
  - `src/components/slides/uptime/SlaMetricSummaryCard.tsx`: 99.999% uptime display card with monthly downtime budget remaining.
- **Progression Logic:**
  - `step = 0`: High-level 99.99% multi-region uptime compliance overview.
  - `step = 1`: 90-day incident calendar inspection with zero unplanned outages highlighted.
  - `step = 2`: SLA contract guarantee summary and customer trust metrics.

### Archetype 12: `AudioWaveformStudioSlide` (`audio-waveform-studio`)
- **Parent Orchestrator:** `src/components/slides/AudioWaveformStudioSlide.tsx`
- **Subcomponents:**
  - `src/components/slides/audio/WaveformVisualizerBars.tsx`: 32-band live synthesized audio spectrum bar animation (`@keyframes audioWaveformPulse`).
  - `src/components/slides/audio/AcousticTelemetryCard.tsx`: Output gain meter ($\le -12\text{ dB}$ safety ceiling), voice ducking indicator, and cooldown status.
- **Progression Logic:**
  - `step = 0`: Idle studio stage with subtle ambient frequency ripples.
  - `step = 1`: Active presentation playback with multi-channel spectrum pulse.
  - `step = 2`: Narration ducking activated ($-14\text{ dB}$ attenuation) and speech sync telemetry display.

### Archetype 13: `HardwareSiliconSpecSlide` (`hardware-silicon-spec`)
- **Parent Orchestrator:** `src/components/slides/HardwareSiliconSpecSlide.tsx`
- **Subcomponents:**
  - `src/components/slides/silicon/SiliconDieFloorplan.tsx`: High-tech SVG semiconductor die floorplan diagram with compute core blocks and cache banks.
  - `src/components/slides/silicon/SiliconBenchmarkCard.tsx`: Memory bandwidth (TB/s), FLOPS compute density, and thermal TDP benchmark card.
- **Progression Logic:**
  - `step = 0`: Overall die architecture and 3nm fabrication specifications.
  - `step = 1`: Neural engine tensor core clusters illuminated via gold accent glow.
  - `step = 2`: Unified memory architecture interconnect and performance-per-watt metrics.

### Archetype 14: `CohortRetentionHeatmapSlide` (`cohort-retention-heatmap`)
- **Parent Orchestrator:** `src/components/slides/CohortRetentionHeatmapSlide.tsx`
- **Subcomponents:**
  - `src/components/slides/cohort/CohortHeatmapTable.tsx`: Multi-month cohort retention matrix with calculated HSL background fills based on percentage.
  - `src/components/slides/cohort/RetentionInsightCard.tsx`: Key retention inflection takeaway card with net revenue retention (NRR) pill.
- **Progression Logic:**
  - `step = 0`: Acquisition cohort sizes and Month 0 baseline retention.
  - `step = 1`: Month 1–6 retention decay curve showing stabilization above 80%.
  - `step = 2`: Long-term expansion cohort highlighting 135% net revenue retention.

### Archetype 15: `VerifiableAuditLedgerSlide` (`verifiable-audit-ledger`)
- **Parent Orchestrator:** `src/components/slides/VerifiableAuditLedgerSlide.tsx`
- **Subcomponents:**
  - `src/components/slides/ledger/AuditBlockCard.tsx`: Immutably chained block card with truncated cryptographic SHA-256 hash, actor pill, and timestamp.
  - `src/components/slides/ledger/LedgerIntegrityCard.tsx`: Cryptographic proof status card confirming zero tampering and Merkle tree verification.
- **Progression Logic:**
  - `step = 0`: Initial genesis block and historical event log entries.
  - `step = 1`: New signed state transition appended with cryptographic linkage hash.
  - `step = 2`: Zero-knowledge proof verification badge and compliance seal.

---

## 4. Implementation Steps & Verification Flow

1. **Step 1:** Create directory structures:
   - `src/components/slides/canary/`
   - `src/components/slides/rca/`
   - `src/components/slides/uptime/`
   - `src/components/slides/audio/`
   - `src/components/slides/silicon/`
   - `src/components/slides/cohort/`
   - `src/components/slides/ledger/`
2. **Step 2:** Implement child leaf components for each archetype ensuring strict $\le 90$ lines per file.
3. **Step 3:** Implement parent slide components connecting to `useDeckStore` with line counts strictly $\le 85$ lines.
4. **Step 4:** Execute fast targeted validation:
   - `python 03-ai-scripts/verify-component-lines.py`
   - `npx tsc --noEmit`
5. **Step 5:** Verify zero git commands executed by worker subagents.
