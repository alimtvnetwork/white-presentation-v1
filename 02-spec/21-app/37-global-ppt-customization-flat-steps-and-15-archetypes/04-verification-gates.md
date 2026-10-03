# 04-Quality Verification Gates: 12-Dimensional Automated Compliance Matrix & Requirements Traceability for 15 Customization Archetypes

> **Specification Identifier:** `02-spec/21-app/37-global-ppt-customization-flat-steps-and-15-archetypes/04-verification-gates.md`  
> **Status:** `APPROVED CANONICAL ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.9.0`  
> **Author:** Spec Subagent 02  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  
> **Domain:** Automated Quality Assurance, 12-Dimensional Verification Gates, CODE-RED-006R Line Cap, Rule R1 Zero Build Enforcement, WCAG AAA Contrast Compliance, and Requirements Traceability Matrix for Enterprise Customization Archetypes 46 to 60  

---

## 1. System Vision & Governance Protocol

To guarantee zero regressions, deterministic visual scaling, and seamless parallel subagent orchestration across the White Presentation System, all slide components, layouts, contracts, and data models implementing the **15 Enterprise Customization Archetypes (Archetypes 46 to 60)** must satisfy an automated **12-Dimensional Quality Verification Matrix**.

Every dimension represents an inviolable, mathematically defined quality gate. Subagents and developers must pass every gate prior to submitting code for lead orchestrator review.

```
12-Dimensional Automated Quality Verification Matrix:
├── Structural Discipline & Compilation Hygiene
│   ├── Gate 1: Hard Rule CODE-RED-006R (<= 100 Physical Lines per .tsx Component File)
│   ├── Gate 2: Rule R1 Zero Builds or Full Test Suites (Ban on Heavy Invocations in Routine Turns)
│   ├── Gate 3: Fast File-Scoped Checks (Sub-5s npx tsc --noEmit & Python Line Scanners)
│   └── Gate 4: 100% Affirmative Positive Boolean Naming via src/utils/booleanGuards.ts
├── Identity, Typography & Kinetic Interaction
│   ├── Gate 5: Executive Persona Standardization (Alim Ul Karim strictly 'Chief Software Engineer')
│   ├── Gate 6: Pure Live DOM Typography (Zero Rasterized Text, Zero Canvas fillText/strokeText)
│   ├── Gate 7: Active Step Progression & Zero Phantom Steps (3-Phase Kinetic Lifecycle)
│   └── Gate 8: WCAG AAA / AA Contrast Verification (Zero Yellow-on-Light, Auto-Inversion Badges)
└── Security, Path Hygiene & Canvas Bounds
    ├── Gate 9: Secrets Quarantine & Sensitive Data Isolation (Sanitized Mock Fixtures)
    ├── Gate 10: Relative Path Linter Compliance (Zero Hardcoded Absolute Filesystem Paths)
    ├── Gate 11: GitMap Atomic Hyphenated Commit Standards (Type-Scope-Description Hygiene)
    └── Gate 12: Canonical 1920x1080 Viewport Geometry & Coordinate Budget Conformance
```

---

## 2. Inviolable Quality Gates & Enforcement Rules

---

### Gate 1: Hard Rule CODE-RED-006R — Component Sizing Cap ($\le 100$ Physical Lines per `.tsx`)
- **Mandate:** Every React component (`.tsx`) located in `src/components/**/*.tsx` must strictly contain **100 or fewer physical lines of code**.
- **Architectural Decomposition Rules:**
  1. **Subcomponent Folder Isolation:** Each of the 15 enterprise customization slide archetypes must decompose into dedicated leaf subcomponents housed in a dedicated sub-folder under `src/components/slides/customization/`:
     - `src/components/slides/customization/neuralvectorsearch/` (`SearchTopologyCard.tsx`, `VectorTelemetryStrip.tsx`, `HnswStageBadge.tsx`, `NeuralVectorSearchSlide.tsx`)
     - `src/components/slides/customization/modelquantization/` (`QuantizationStageCard.tsx`, `SpeculativePerfStrip.tsx`, `AwqSealBadge.tsx`, `ModelQuantizationSlide.tsx`)
     - `src/components/slides/customization/llmfirewall/` (`FirewallLayerCard.tsx`, `FirewallTelemetryStrip.tsx`, `RedTeamBadge.tsx`, `LlmFirewallSlide.tsx`)
     - `src/components/slides/customization/anycastdirector/` (`AnycastStageCard.tsx`, `NetworkTelemetryStrip.tsx`, `BgpStatusBadge.tsx`, `GlobalAnycastDirectorSlide.tsx`)
     - `src/components/slides/customization/cqrseventsourcing/` (`CqrsStageCard.tsx`, `FabricTelemetryStrip.tsx`, `RaftQuorumBadge.tsx`, `CqrsEventSourcingSlide.tsx`)
     - `src/components/slides/customization/sbomsattestation/` (`SbomPhaseCard.tsx`, `ComplianceTelemetryStrip.tsx`, `Slsa4SealBadge.tsx`, `SbomProvenanceSlide.tsx`)
     - `src/components/slides/customization/postmergerroadmap/` (`HorizonStageCard.tsx`, `SynergyTelemetryStrip.tsx`, `Day1StatusBadge.tsx`, `PostMergerRoadmapSlide.tsx`)
     - `src/components/slides/customization/scope3carbon/` (`Scope3PhaseCard.tsx`, `CarbonTelemetryStrip.tsx`, `CsrdSealBadge.tsx`, `Scope3CarbonAuditSlide.tsx`)
     - `src/components/slides/customization/cspmciemgraph/` (`EntitlementClusterCard.tsx`, `ToxicPathCard.tsx`, `CspmTelemetryStrip.tsx`, `CspmCiemGraphSlide.tsx`)
     - `src/components/slides/customization/confidentialenclave/` (`EnclaveModuleCard.tsx`, `AttestationRegisterCard.tsx`, `CryptoTelemetryStrip.tsx`, `ConfidentialEnclaveSlide.tsx`)
     - `src/components/slides/customization/predictiveautoscaling/` (`NodePoolCapacityCard.tsx`, `WorkloadTierCard.tsx`, `ScalingTelemetryStrip.tsx`, `PredictiveAutoscalingSlide.tsx`)
     - `src/components/slides/customization/capexopexallocation/` (`CapitalPortfolioCard.tsx`, `RoicFinancialCard.tsx`, `CapexTelemetryStrip.tsx`, `CapexOpexAllocationSlide.tsx`)
     - `src/components/slides/customization/transferpricingtopology/` (`JurisdictionNodeCard.tsx`, `IntercompanyFlowCard.tsx`, `TaxTelemetryStrip.tsx`, `TransferPricingSlide.tsx`)
     - `src/components/slides/customization/salesquotamatrix/` (`QuotaTierCard.tsx`, `RepSegmentCard.tsx`, `GtmTelemetryStrip.tsx`, `SalesQuotaMatrixSlide.tsx`)
     - `src/components/slides/customization/executivesuccession/` (`BenchRoleCard.tsx`, `CandidatePipelineCard.tsx`, `BoardTelemetryStrip.tsx`, `ExecutiveSuccessionSlide.tsx`)
  2. **Data & Telemetry Extraction:** Default slide data models, telemetry streams, and mock fixtures must reside in dedicated factory utilities (`src/utils/customizationSlideFactories.ts` and `src/utils/customization/`).
  3. **Pure Compositional Orchestrator:** The top-level slide component serves strictly as a layout orchestrator that consumes store state (`activeStep`, `theme`), defines CSS grid geometry, and delegates rendering to leaf subcomponents.
- **Python Scanner Command:**
  ```bash
  python -c "
  import pathlib, sys
  oversized = [f for f in pathlib.Path('src/components').glob('**/*.tsx') if len(f.read_text(encoding='utf-8').splitlines()) > 100]
  if oversized:
      print('CODE-RED-006R VIOLATION: Oversized components detected:'); [print(f' - {f} ({len(f.read_text(encoding=\"utf-8\").splitlines())} lines)') for f in oversized]; sys.exit(1)
  print('CODE-RED-006R PASS: All React components strictly <= 100 lines.')
  "
  ```
- **Pass Threshold:** Exactly 0 `.tsx` files exceeding 100 physical lines.

---

### Gate 2: Rule R1 Zero Builds or Full Test Suites — Heavy Verification Ban
- **Mandate:** In routine development turns, bug fixes, component authoring, and specification reviews, executing full project builds (`npm run build`, `pnpm build`, `vite build`) or running global test suites (`npm test`, `pnpm test`, `vitest run`) is **STRICTLY FORBIDDEN**.
- **Architectural Rationale:**
  1. Full project builds consume unnecessary CPU cycles, trigger disk I/O bottlenecks, and exhaust context windows with megabytes of compiler output.
  2. Large test suites cause lock timeouts and break parallel subagent execution.
  3. Lead Orchestrators and Subagents must rely entirely on **fast targeted static analysis** and AST-level checks.
- **Strictly Banned Commands in Routine Turns:**
  - ❌ `npm run build`
  - ❌ `npm test`
  - ❌ `pnpm build`
  - ❌ `pnpm test`
  - ❌ `npx vitest run` (unscoped full run)
- **Approved Verification Procedures:**
  - ✅ Fast Python line count scanners
  - ✅ Fast targeted TypeScript typechecking: `npx tsc --noEmit`
  - ✅ Regex AST property scanners
- **Pass Threshold:** 100% compliance; exactly zero invocations of banned build or full test scripts during routine turns.

---

### Gate 3: Fast File-Scoped Checks — `npx tsc --noEmit` & Python Verification
- **Mandate:** Type validation and architectural verification must complete in under 5 seconds using lightweight, targeted tooling.
- **Verification Tools:**
  1. `npx tsc --noEmit`: Performs zero-overhead static AST and type contract verification without emitting JS bundles or writing to disk.
  2. Python static scanning scripts: Audit line counts, boolean naming, and persona titles in milliseconds.
- **Execution Budget:** $\le 5,000\text{ms}$ total execution time.
- **Pass Threshold:** Exit code `0` with 0 diagnostic type errors.

---

### Gate 4: 100% Affirmative Positive Boolean Naming via `src/utils/booleanGuards.ts`
- **Mandate:** All boolean variables, component props, contract fields, and state flags across the entire codebase must use strictly positive, affirmative identifiers (`is*`, `has*`, `can*`, `should*`).
- **Forbidden Anti-Patterns:**
  - ❌ Negative boolean names: `disabled`, `hidden`, `isNotActive`, `unverified`, `isInvalid`, `disallowStep`.
  - ❌ Double negatives: `!disabled`, `!isNotActive`, `!hidden`.
  - ❌ Explicit boolean equality comparisons: `if (slide.isPublished == true)`, `if (isActive === false)`.
- **Approved Customization Standards:**
  - ✅ Affirmative names: `isEnabled`, `isVisible`, `isActive`, `isVerified`, `hasPresenterNotes`, `canAdvance`, `isGpuAccelerated`, `hasHybridLexicalSearch`, `isEmergencySuccessorReady`.
  - ✅ Implicit truth guards via `booleanGuards.ts`:
    ```typescript
    import { isTruthy, isDefined } from '../utils/booleanGuards';
    if (isTruthy(slide.isPublished)) { /* render */ }
    ```
- **AST Scan Regex:**
  ```python
  import re
  NEGATIVE_BOOLEAN_PATTERN = re.compile(r'\b(isNot|disabled|hidden|unverified|isInvalid|hasNo)\w*\b')
  ```
- **Pass Threshold:** Exactly 0 negative boolean property declarations across all customization contracts and components.

---

### Gate 5: Executive Persona Standardization — Alim Ul Karim as "Chief Software Engineer"
- **Mandate:** Any reference to executive Alim Ul Karim in UI badges, presenter notes, JSON fixtures, signoff signatures, or documentation must strictly designate him as **"Chief Software Engineer"** (Rule R11).
- **Forbidden Variations:**
  - ❌ "Lead Architect"
  - ❌ "Principal Software Engineer"
  - ❌ "Chief Technology Officer" / "CTO"
  - ❌ "Senior Architect"
  - ❌ "Engineering Director"
- **Strictly Required Designation:**
  - ✅ **Alim Ul Karim, Chief Software Engineer**
- **Automated Regex Validator:**
  ```python
  import re
  INVALID_PERSONA_PATTERN = re.compile(
      r'Alim\s+Ul\s+Karim(?:\s*,\s*(?!Chief\s+Software\s+Engineer)[A-Za-z\s]+|\s*\((?!Chief\s+Software\s+Engineer)[^)]+\))'
  )
  ```
- **Pass Threshold:** Exactly 0 occurrences of Alim Ul Karim without the title Chief Software Engineer.

---

### Gate 6: Pure Live DOM Typography — 100% Native HTML Text Elements
- **Mandate:** All text rendered on slides—including slide titles, kicker badges, section headers, metric figures, table cells, telemetry labels, and code terminal text—must exist as selectable, screen-reader-accessible, pure HTML DOM nodes (`<h1>`, `<h2>`, `<h3>`, `<p>`, `<span>`, `<code>`, `<div>`).
- **Forbidden Practices:**
  - ❌ Rendering text inside HTML5 `<canvas>` using `ctx.fillText()` or `ctx.strokeText()`.
  - ❌ Generating static image files containing embedded text (e.g., titles pre-baked into PNG/JPEG).
  - ❌ Flattening text into SVG `<path>` vectors without `<text>` or `aria-label` markup.
- **Verification Method:** Inspect DOM tree to ensure text nodes are searchable via `Ctrl+F` and selectable via mouse cursor.
- **Pass Threshold:** 100% DOM-native text elements.

---

### Gate 7: Active Step Progression & Zero Phantom Steps (3-Phase Kinetic Lifecycle)
- **Mandate:** Dynamic step counts must evaluate deterministically without ghost, duplicate, or unreachable steps:
  - **Group A (Archetypes 46 to 53):** Evaluates dynamically via `calculateCustomizationSlideStepCount`, yielding exactly 4 steps corresponding to each workflow stage. Child elements transition across three kinetic states (`completed`, `active`, `future`).
  - **Group B (Archetypes 54 to 60):** Evaluates to exactly 1 step flat. All telemetry panels render simultaneously in unified sovereign state.
- **Mathematical Invariant:**
  $$\text{stepCount} = \max(\text{stages.length}, 1) \quad (\text{Group A: } 4, \quad \text{Group B: } 1)$$
- **Navigation Controls Guard:** Prevents navigation buttons from staying disabled when `maxSteps > 1` and `activeStep < maxSteps`.
- **Pass Threshold:** Zero phantom steps; activeStep transitions bound between $1$ and `maxSteps`.

---

### Gate 8: WCAG AAA / AA Contrast Verification — Zero Yellow-on-Light Standard
- **Mandate:** All foreground elements must satisfy WCAG AAA standards ($C_R \ge 7:1$) for regular body text and WCAG AA ($C_R \ge 4.5:1$) for large display typography and graphical cards.
- **Zero Yellow-on-Light Mandate:**
  - ❌ Never render bright gold, amber, or yellow accents (`#F59E0B`, `#EAB308`, `#FBBF24`) directly against light canvas backgrounds (`#FFFFFF`, `#F8FAFC`, `#F5F0E6`). Contrast ratio falls to unacceptable levels ($< 2.5:1$).
  - ✅ On light themes, automatically invert amber/yellow accents to high-contrast deep bronze (`#92400E`) or dark slate with amber border halo.
- **Verification Script:**
  ```python
  def contrast_ratio(luma1, luma2):
      lighter, darker = max(luma1, luma2), min(luma1, luma2)
      return (lighter + 0.05) / (darker + 0.05)
  ```
- **Pass Threshold:** Contrast ratio $\ge 4.5:1$ across all theme palettes and visual states.

---

### Gate 9: Secrets Quarantine & Sensitive Data Isolation
- **Mandate:** Production fixtures and mock data models must NEVER contain real API keys, cloud access tokens, customer PII, private cryptographic keys, or corporate secrets.
- **Approved Sanitization Patterns:**
  - Mock keys: `sk-ant-mock-xxxxxxxxxxxxxx`
  - Mock hashes: `sha384:9f8e4a27d18c...`
  - Mock ARNs: `arn:aws:iam::123456789012:role/AccountSuperAdmin`
- **Pass Threshold:** Zero actual secret keys or unauthorized credentials committed to repository.

---

### Gate 10: Relative Path Linter Compliance — Zero Hardcoded Absolute Paths
- **Mandate:** Codebase imports, script references, asset URIs, and configuration paths must strictly use **relative path notation** (`./`, `../`) or project-root relative paths.
- **Forbidden Absolute Path Patterns:**
  - ❌ Windows drive paths: `D:\...`, `C:\...`
  - ❌ Posix absolute paths: `/Users/...`, `/home/...`, `/tmp/...`
- **Scanner Command:**
  ```bash
  python -c "
  import pathlib, re, sys
  abs_pattern = re.compile(r'([A-Za-z]:\\\\|/Users/|/home/|/tmp/)')
  violations = []
  for f in pathlib.Path('src').glob('**/*.*'):
      if f.suffix in ('.ts', '.tsx', '.json', '.css'):
          m = abs_pattern.findall(f.read_text(encoding='utf-8', errors='ignore'))
          if m: violations.append((f, m))
  if violations:
      print('PATH VIOLATION: Absolute paths detected:'); [print(f' - {f}: {m}') for f, m in violations]; sys.exit(1)
  print('PATH PASS: Zero hardcoded absolute filesystem paths.')
  "
  ```
- **Pass Threshold:** Exactly 0 absolute filesystem paths in application source code.

---

### Gate 11: GitMap Atomic Hyphenated Commit Standards
- **Mandate:** Commit messages and branch tags must strictly follow the GitMap hyphen-separated atomic convention: `<type>-<scope>-<short-description>`.
- **Allowed Types:** `feat`, `fix`, `refactor`, `spec`, `docs`, `chore`, `test`.
- **Examples:**
  - ✅ `spec-customization-author-contracts-and-gates`
  - ✅ `feat-customization-add-15-enterprise-archetypes`
  - ✅ `fix-navigation-resolve-disabled-step-button`
- **Pass Threshold:** 100% compliance with atomic lowercase hyphen-separated commit syntax.

---

### Gate 12: Canonical $1920 \times 1080$ Viewport Geometry & Coordinate Budget Conformance
- **Mandate:** All slide components must conform mathematically to the virtual $1920 \times 1080$ coordinate space:
  - Slide Container: $1920\text{px} \times 1080\text{px}$, `overflow: hidden`.
  - Header Bounding Box: $x=64, y=48, w=1792, h=120$.
  - Main Stage Grid: $x=64, y=184, w=1792, h=760$.
  - Telemetry Footer: $x=64, y=960, w=1792, h=72$.
- **Transform Scaling Rule:** Outer presentation viewport scales using `transform: scale(var(--scale-factor))` with `transform-origin: top left`, ensuring zero layout reflow across physical monitors.
- **Pass Threshold:** 0 overflow scrolls, 0 visual clipping at $1920 \times 1080$.

---

## 3. Requirements Traceability Matrix

| Requirement ID | Requirement Description | Target Customization Archetypes | Enforced Quality Gates | Target Files |
| :--- | :--- | :--- | :--- | :--- |
| **REQ-01** | Global PPT Color Themes & Animation Engine Integration | All Archetypes (46 to 60) | Gate 6, Gate 8, Gate 12 | `src/themes/`, `src/components/slides/customization/` |
| **REQ-02** | Adhere to Coding Guidelines & Design System Alignment | All Archetypes (46 to 60) | Gate 1, Gate 4, Gate 5, Gate 8 | `src/components/**/*.tsx`, `src/types/customizationArchetypes.ts` |
| **REQ-03** | Update Architecture & Design Specifications | Archetypes 46 to 60 | Gate 2, Gate 10, Gate 11 | `02-spec/21-app/37-global-ppt-customization-flat-steps-and-15-archetypes/` |
| **REQ-04** | Improve & Add 15 New Types of Slides | Archetypes 46 to 60 | Gate 1, Gate 3, Gate 4, Gate 6, Gate 12 | `src/types/`, `src/components/slides/customization/`, `src/utils/` |
| **REQ-05** | Flat Slides & Step-by-Step Interactive Progression | Group A (46-53: 4 Steps), Group B (54-60: Flat) | Gate 7, Gate 12 | `src/components/navigation/`, `src/utils/customization/registry.ts` |
| **ARCH-46** | `neural-vector-search-topology` | Archetype 46 (4-Step Workflow) | Gates 1 to 12 | `src/components/slides/customization/neuralvectorsearch/` |
| **ARCH-47** | `model-quantization-speculative-decoding` | Archetype 47 (4-Step Workflow) | Gates 1 to 12 | `src/components/slides/customization/modelquantization/` |
| **ARCH-48** | `llm-firewall-red-team-matrix` | Archetype 48 (4-Step Workflow) | Gates 1 to 12 | `src/components/slides/customization/llmfirewall/` |
| **ARCH-49** | `global-anycast-traffic-director` | Archetype 49 (4-Step Workflow) | Gates 1 to 12 | `src/components/slides/customization/anycastdirector/` |
| **ARCH-50** | `cqrs-event-sourcing-fabric` | Archetype 50 (4-Step Workflow) | Gates 1 to 12 | `src/components/slides/customization/cqrseventsourcing/` |
| **ARCH-51** | `sbom-slsa-provenance-attestation` | Archetype 51 (4-Step Workflow) | Gates 1 to 12 | `src/components/slides/customization/sbomsattestation/` |
| **ARCH-52** | `post-merger-integration-roadmap` | Archetype 52 (4-Step Workflow) | Gates 1 to 12 | `src/components/slides/customization/postmergerroadmap/` |
| **ARCH-53** | `scope3-carbon-supply-chain-audit` | Archetype 53 (4-Step Workflow) | Gates 1 to 12 | `src/components/slides/customization/scope3carbon/` |
| **ARCH-54** | `cspm-ciem-cloud-entitlement-graph` | Archetype 54 (Flat Sovereign) | Gates 1 to 12 | `src/components/slides/customization/cspmciemgraph/` |
| **ARCH-55** | `confidential-computing-enclave` | Archetype 55 (Flat Sovereign) | Gates 1 to 12 | `src/components/slides/customization/confidentialenclave/` |
| **ARCH-56** | `predictive-autoscaling-pod-matrix` | Archetype 56 (Flat Sovereign) | Gates 1 to 12 | `src/components/slides/customization/predictiveautoscaling/` |
| **ARCH-57** | `capex-opex-capital-allocation` | Archetype 57 (Flat Sovereign) | Gates 1 to 12 | `src/components/slides/customization/capexopexallocation/` |
| **ARCH-58** | `transfer-pricing-tax-topology` | Archetype 58 (Flat Sovereign) | Gates 1 to 12 | `src/components/slides/customization/transferpricingtopology/` |
| **ARCH-59** | `sales-quota-compensation-matrix` | Archetype 59 (Flat Sovereign) | Gates 1 to 12 | `src/components/slides/customization/salesquotamatrix/` |
| **ARCH-60** | `executive-succession-leadership-bench` | Archetype 60 (Flat Sovereign) | Gates 1 to 12 | `src/components/slides/customization/executivesuccession/` |

---

## 4. Lead Orchestrator Automated Signoff Protocol

Prior to submitting code or declaring task completion, execute this sequence:

```bash
# 1. Component Sizing Check (Hard Line Cap: <= 100 lines per .tsx file)
python -c "
import pathlib, sys
bad = [f for f in pathlib.Path('src/components').glob('**/*.tsx') if len(f.read_text(encoding='utf-8').splitlines()) > 100]
assert not bad, f'FAILED: Oversized components: {bad}'
print('PASS: All .tsx components <= 100 lines.')
"

# 2. Affirmative Positive Boolean Check (Zero negative boolean props)
python -c "
import pathlib, re, sys
pattern = re.compile(r'\b(isNot|disabled|hidden|unverified|isInvalid|hasNo)\w*\s*:\s*boolean')
bad = []
for f in pathlib.Path('src').glob('**/*.ts*'):
    m = pattern.findall(f.read_text(encoding='utf-8', errors='ignore'))
    if m: bad.append((f, m))
assert not bad, f'FAILED: Negative booleans found: {bad}'
print('PASS: 100% affirmative positive booleans.')
"

# 3. Persona Standardization Check (Alim Ul Karim strictly 'Chief Software Engineer')
python -c "
import pathlib, re, sys
bad = []
for f in pathlib.Path('src').glob('**/*.*'):
    if f.suffix in ('.ts', '.tsx', '.json', '.md'):
        c = f.read_text(encoding='utf-8', errors='ignore')
        for l in c.splitlines():
            if 'Alim Ul Karim' in l and 'Chief Software Engineer' not in l:
                bad.append((f, l))
assert not bad, f'FAILED: Persona violations: {bad}'
print('PASS: Executive persona strictly standardized.')
"

# 4. Fast Static AST Typecheck (Zero build, zero disk emit, < 5s)
npx tsc --noEmit
```
