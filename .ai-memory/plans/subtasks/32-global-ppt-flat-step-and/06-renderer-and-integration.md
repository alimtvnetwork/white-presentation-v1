# Subtask 06: Tier-6 Slide Renderer, Deck Integration & Quality Verification Plan

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

Subtask 06 integrates the 15 new slide archetypes into the core presentation engine. It constructs the dedicated **Tier-6 Slide Renderer** (`src/components/slides/GlobalPptSuiteSlideRenderer.tsx`), chains it into the master `SlideRenderer.tsx`, seeds the production presentation deck in `src/stores/initialDeck.ts` with authentic multi-step slides, and executes the complete 12-Dimensional Quality Verification Matrix.

### Core Architecture Mandates:
1. **Tier-6 Renderer Sizing Cap ($\le 100$ lines):** `GlobalPptSuiteSlideRenderer.tsx` must route all 15 archetypes cleanly using lazy or modular dispatch while remaining strictly $\le 100$ physical lines.
2. **Backward Compatibility:** Existing slide types in `SlideRenderer.tsx` must continue functioning seamlessly; unrecognized types gracefully pass through to the Tier-6 delegate.
3. **Multi-Step Seed Slides:** `initialDeck.ts` is expanded with authentic, multi-step presentations showcasing the 15 new archetypes with real enterprise technical data and step progression.
4. **Persona Standardization:** All slide fixtures in `initialDeck.ts` designating Alim Ul Karim must strictly use **"Chief Software Engineer"**.
5. **Rule R1 Zero Builds/Tests Ban:** No `npm run build` or full test suite invocations during routine development; all checks use fast static analysis and `npx tsc --noEmit`.
6. **Worker Git Command Ban:** Subagents must never run git commands (`git add`, `git commit`, `git push`, `git status`).

---

## 2. File Sizing Budgets & Target Scope

| File Path | Action | Description | Physical Line Ceiling |
|:---|:---:|:---|:---:|
| `src/components/slides/GlobalPptSuiteSlideRenderer.tsx` | Create | Tier-6 dispatch router for all 15 new slide archetypes | $\le 95$ lines |
| `src/components/slides/SlideRenderer.tsx` | Modify | Master renderer chaining delegation to `GlobalPptSuiteSlideRenderer` | $\le 100$ lines |
| `src/stores/initialDeck.ts` | Modify | Seed presentation deck containing sample slides for the 15 archetypes | $\le 450$ lines |
| `src/stores/deckStore.ts` | Verify | Confirm `activeStep` and `jumpToStep` actions operate across new slide types | $\le 250$ lines |

---

## 3. Step-by-Step Implementation Sequence

### Step 1: Implement `GlobalPptSuiteSlideRenderer.tsx`
- Create `src/components/slides/GlobalPptSuiteSlideRenderer.tsx`.
- Map all 15 slide types to their respective component imports:
  - `code-diff-comparison` $\to$ `<CodeDiffComparisonSlide />`
  - `global-cloud-edge-mesh` $\to$ `<GlobalCloudEdgeMeshSlide />`
  - `api-endpoint-inspector` $\to$ `<ApiEndpointInspectorSlide />`
  - `database-schema-erd` $\to$ `<DatabaseSchemaErdSlide />`
  - `security-threat-model` $\to$ `<SecurityThreatModelSlide />`
  - `ai-agent-swarm-dag` $\to$ `<AiAgentSwarmDagSlide />`
  - `financial-burn-runway` $\to$ `<FinancialBurnRunwaySlide />`
  - `bento-kpi-mosaic` $\to$ `<BentoKpiMosaicSlide />`
  - `canary-release-gauge` $\to$ `<CanaryReleaseGaugeSlide />`
  - `incident-rca-postmortem` $\to$ `<IncidentRcaPostmortemSlide />`
  - `slas-and-uptime-status` $\to$ `<SlasAndUptimeStatusSlide />`
  - `audio-waveform-studio` $\to$ `<AudioWaveformStudioSlide />`
  - `hardware-silicon-spec` $\to$ `<HardwareSiliconSpecSlide />`
  - `cohort-retention-heatmap` $\to$ `<CohortRetentionHeatmapSlide />`
  - `verifiable-audit-ledger` $\to$ `<VerifiableAuditLedgerSlide />`
- If the slide type does not match any of the 15, return `null` or fallback gracefully.
- Verify the physical line count of `GlobalPptSuiteSlideRenderer.tsx` is strictly $\le 95$ lines.

### Step 2: Wire Delegation into `SlideRenderer.tsx`
- In `src/components/slides/SlideRenderer.tsx`:
  - Import `GlobalPptSuiteSlideRenderer`.
  - In the default / fallback branch of the existing slide switch or chain, invoke `<GlobalPptSuiteSlideRenderer slide={slide} />`.
  - Maintain the physical line count of `SlideRenderer.tsx` strictly $\le 100$ lines.

### Step 3: Seed Authentic Slides in `src/stores/initialDeck.ts`
- Import new slide factory helpers from `src/utils/globalPptSlideFactories.ts`.
- Construct sample presentation slides for the new archetypes, configuring:
  - Multi-step configurations (`stepCount: 3` for each multi-step archetype).
  - High-authority corporate content, realistic code diffs, DAG nodes, and financial runways.
  - Alim Ul Karim standardized strictly as "Chief Software Engineer".
- Verify that every multi-step slide in the deck has valid data for all steps.

### Step 4: Execute 12-Dimensional Quality Verification Matrix
Run the fast targeted verification suite:
1. **Gate 1 (CODE-RED-006R):** Run Python component line counter across all `src/components/**/*.tsx` to ensure zero files exceed 100 lines:
   ```bash
   python -c "import pathlib, sys; bad = [f for f in pathlib.Path('src/components').glob('**/*.tsx') if len(f.read_text(encoding='utf-8').splitlines()) > 100]; sys.exit(1 if bad else 0)"
   ```
2. **Gate 2 (Rule R1 Zero Builds/Tests):** Ensure zero executions of `npm run build` or full test suites in any turn.
3. **Gate 3 (Fast Targeted Checks):**
   ```bash
   npx tsc --noEmit
   ```
4. **Gate 4 (Affirmative Booleans):** Verify zero raw `!is*` or `=== true` violations:
   ```powershell
   Select-String -Path "src/**/*.ts", "src/**/*.tsx" -Pattern "(!is[A-Z]|!has[A-Z]|=== true|=== false)"
   ```
5. **Gate 5 (Persona Standardization):** Verify Alim Ul Karim title across code:
   ```powershell
   Select-String -Path "src/**/*.ts", "src/**/*.tsx" -Pattern "Alim Ul Karim.*(CEO|Founder|Tech Lead|Lead Architect)"
   ```
6. **Gate 8 (WCAG 2.1 AA Contrast):** Validate theme contrast tokens and capsule inversions for `paper-ink` and `github-light`.
7. **Gate 9 & 10 (Secrets & Relative Paths):**
   ```powershell
   Select-String -Path "src/**/*.*", "02-spec/**/*.*" -Pattern "([A-Za-z]:[\\/]|/(?:home|Users)/)"
   ```
8. **Gate 12 (Subagent Git Isolation):** Confirm no worker subagent ran git commands.

---

## 4. Verification Checklist & Success Criteria

- [ ] `GlobalPptSuiteSlideRenderer.tsx` implemented and strictly $\le 95$ lines.
- [ ] `SlideRenderer.tsx` successfully delegates to `GlobalPptSuiteSlideRenderer` and remains strictly $\le 100$ lines.
- [ ] `initialDeck.ts` updated with multi-step slides and Alim Ul Karim as "Chief Software Engineer".
- [ ] Fast typecheck passes with `npx tsc --noEmit` returning exit code 0.
- [ ] Zero `.tsx` components in `src/components/` exceed 100 lines.
- [ ] All boolean checks use affirmative guards from `src/utils/booleanGuards.ts`.
- [ ] Zero git commands executed by subagents.
- [ ] Ready for final atomic GitMap commit by the Lead Orchestrator.
