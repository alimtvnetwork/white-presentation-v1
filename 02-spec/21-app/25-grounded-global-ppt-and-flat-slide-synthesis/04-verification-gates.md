# 04-Verification Gates: Quality Dimensions & Zero-Defect Governance

> **Module:** `02-spec/21-app/25-grounded-global-ppt-and-flat-slide-synthesis`  
> **Status:** Canonical Quality Protocol  
> **Target Release:** `v1.2.0`  
> **Governance Enforcement:** Continuous Self-Audit & Static Verification Scripts

---

## 1. System Overview & Quality Protocol Mandate

The White Presentation System enforces strict, deterministic quality gates across all architectural extensions, slide archetypes, theme definitions, and declarative data contracts. To prevent technical debt, UI regressions, performance degradation, and conversational drift, every implementation artifact must pass the quality dimensions and automated static audit protocols specified herein.

```
Quality Governance Framework:
├── Ground Truth & Content Integrity
│   ├── Gate 1: Pure Live DOM Text Mandate
│   ├── Gate 2: Verbatim Adherence & Zero Hallucination
│   └── Gate 3: In-Place Content Authoring & Store Decoupling
├── Architecture & Code Size Limits
│   ├── Gate 4: 100-Line React Component Ceiling
│   ├── Gate 5: Leaf Type Segregation (< 300 Lines)
│   └── Gate 6: Relative Paths & Lowercase Hygiene
├── Linguistic & Boolean Conventions
│   ├── Gate 7: Positive Boolean Evaluation
│   └── Gate 8: Zero Secret Tokens & Security Clearance
└── Operational Velocity & Safe Execution
    ├── Gate 9: Zero Git CLI Commands in Subagent Execution
    ├── Gate 10: Zero Build / Test Runs in Routine Turns
    ├── Gate 11: Virtual Canvas Geometry (1920x1080)
    └── Gate 12: Acoustic Feedback Safety & Debounce Window
```

---

## 2. Core Quality Dimensions

### Gate 1: Pure Live DOM Text Mandate
- **Rule:** Every textual element—including display hero typography, slide titles, kicker tags, metric values, delta badges, bullet items, table cells, and quote attributions—must render as pure, selectable, live HTML DOM text nodes (`<h1>`, `<h2>`, `<p>`, `<span>`, `<div>`, `<code>`).
- **Strictly Prohibited:** Baking text into raster bitmaps (PNG, JPEG, WebP) or opaque pre-rendered canvas layers.
- **Verification Protocol:**
  1. Inspect component JSX to confirm typography uses standard text elements styled via Tailwind / Less.
  2. Confirm bitmap images are restricted exclusively to photographic portraits, authorized brand emblems, and illustrative assets.
  3. Validate text accessibility by verifying text nodes are inspectable and selectable in headless browser renders.
- **Pass Threshold:** Exactly 0 baked-in text graphics; 100% pure DOM text rendering.

---

### Gate 2: Verbatim Adherence & Zero Hallucination
- **Rule:** Every newly added archetype, property, or schema must trace directly to approved master specifications, user requests, or `.ai-memory/plans/pending/25-grounded-global-ppt-and-flat-slide-synthesis.md`.
- **Strictly Prohibited:** Inventing fictional color themes, creating unprompted external dependencies, or introducing unauthorized layout abstractions.
- **Pass Threshold:** 100% traceability to task requirements; zero unprompted dependencies.

---

### Gate 3: In-Place Content Authoring & Store Decoupling
- **Rule:** Slide components must be pure presentation renderers that receive their data props from declarative contracts. All editing operations (text updates, step navigation, theme switching) must dispatch through the central Zustand store (`deckStore.ts`) using atomic action mutators.
- **Pass Threshold:** Zero tight coupling between slide presentation components and network side effects.

---

### Gate 4: 100-Line React Component Ceiling
- **Rule:** Every slide archetype component file located in `src/components/slides/*.tsx` must strictly remain under **100 physical lines of code**. Monolithic components must be decomposed into dedicated child subcomponents (e.g., `StepDetailPane.tsx`, `TimelineRail.tsx`, `PyramidTier.tsx`) and template factory defaults.
- **Decomposition Guidelines:**
  - Extract repetitive grid items or card elements into sibling subcomponents.
  - Offload default mock payloads into `src/utils/slideArchetypeFactories.ts`.
  - Place complex mathematical or formatting calculations into utility helpers in `src/utils/`.
- **Audit Script (PowerShell):**
  ```powershell
  Get-ChildItem -Path "src/components/slides/*.tsx" | ForEach-Object {
    $lineCount = (Get-Content $_.FullName).Count
    if ($lineCount -gt 100) {
      Write-Error "VIOLATION: $($_.Name) has $lineCount lines (limit: 100)"
    }
  }
  ```
- **Pass Threshold:** 0 slide component files exceeding 100 physical lines.

---

### Gate 5: Leaf Type Segregation (< 300 Lines Limit)
- **Rule:** Core type declaration files—specifically `src/types/presentation.ts`—must strictly remain under **300 physical lines of code**. All new slide archetypes, data interfaces, and nested structures introduced in this release must be defined in a dedicated leaf type file: `src/types/archetypes.ts`.
- **Integration Architecture:**
  1. Define individual archetype data interfaces in `src/types/archetypes.ts`.
  2. In `src/types/presentation.ts`, re-export leaf types and include them in the discriminated unions (`SlideType`, `SlideData`).
- **Audit Script (PowerShell):**
  ```powershell
  $presTypes = (Get-Content "src/types/presentation.ts").Count
  if ($presTypes -gt 300) {
    Write-Error "VIOLATION: src/types/presentation.ts has $presTypes lines (limit: 300)"
  }
  ```
- **Pass Threshold:** `src/types/presentation.ts` $\le 300$ physical lines.

---

### Gate 6: Relative Paths & Lowercase Hygiene
- **Rule:** All documentation links, schema references, and code imports must strictly utilize valid relative paths. Absolute system drive paths (e.g., `D:\work\...`, `C:\Users\...`) and uppercase letters or spaces in authored file paths are strictly forbidden.
- **Verification Protocol:**
  - Scan all files in `02-spec/` and `.ai-memory/` for absolute drive letters or backslashes in Markdown links.
  - Enforce lowercase kebab-case naming for all newly created specification and script files.
- **Pass Threshold:** 100% relative link resolution; 0 absolute paths; 0 uppercase filenames in authored directories.

---

### Gate 7: Positive Boolean Evaluation
- **Rule:** All boolean variables, props, state fields, and schema definitions must use positive naming semantics (`is*`, `has*`, `can*`, `should*`). Negative prefixes (`isNot*`, `hasNo*`, `disabled`, `unselected`) and explicit equality checks (`== true`, `=== true`, `== false`) are strictly prohibited.
- **Examples:**
  - ❌ BAD: `hasNoGlow: boolean`, `isNotDark: boolean`, `if (slide.enabled == true)`
  - ✅ GOOD: `hasGlow: boolean`, `isDark: boolean`, `if (slide.hasGlow)`
- **Audit Script (PowerShell):**
  ```powershell
  Get-ChildItem -Path "src", "02-spec" -Recurse -Include "*.ts","*.tsx","*.md" | ForEach-Object {
    $matches = Select-String -Path $_.FullName -Pattern "==\s*true|===\s*true|!=\s*false|!==\s*false|disabled\s*:"
    if ($matches) {
      Write-Warning "Potential negative boolean or explicit true comparison in $($_.FullName)"
    }
  }
  ```
- **Pass Threshold:** Zero instances of `== true` or negative boolean flags.

---

### Gate 8: Zero Secret Tokens & Security Clearance
- **Rule:** Zero hardcoded API keys, bearer tokens, passwords, private keys, or cloud credentials may appear in any committed source code, configuration file, or specification document.
- **Pass Threshold:** 0 detected secret patterns or tokens.

---

### Gate 9: Zero Git CLI Commands in Subagent Execution
- **Rule:** Subagents and worker execution contexts are under a total ban from executing any Git CLI command (`git add`, `git commit`, `git push`, `git status`, `git diff`, `git checkout`). Concurrent worker git commands cause lock collisions and corrupt the git index.
- **Governance:** Git commits and release branching are reserved exclusively for the Lead Orchestrator via GitMap in Phase 3.
- **Pass Threshold:** Exactly 0 Git commands executed by subagents.

---

### Gate 10: Zero Build / Test Runs in Routine Turns
- **Rule:** Subtask and editing turns must strictly avoid running full application build commands (`npm run build`, `vite build`) or heavy test runners (`vitest`, `playwright`). Full builds consume massive system resources and cause long async timeouts.
- **Governance:** Use static type checking and targeted code inspection during development. Full builds and release validation are executed solely by the designated test lead in Phase 3.
- **Pass Threshold:** Exactly 0 unauthorized full build/test commands executed in standard turns.

---

### Gate 11: Virtual Canvas Geometry (1920x1080)
- **Rule:** All coordinate systems, fluid typography clamp calculations, and layout bounding boxes must be anchored to the standard $1920 \times 1080$ virtual canvas (16:9 aspect ratio). Outer wrappers must apply letterboxed fit-scaling to adapt to arbitrary viewport aspect ratios.
- **Pass Threshold:** Full UI integrity on the reference 1920x1080 canvas without horizontal or vertical content clipping.

---

### Gate 12: Acoustic Feedback Safety & Debounce Window
- **Rule:** Audio cues must adhere to strict gain ceilings and anti-fatigue debouncing:
  - Sub-step advance clicks debounced at $80\text{ms}$ with volume clamped via $\text{stepVolume}(m)$.
  - Slide transitions debounced at $120\text{ms}$.
  - Master volume slider clamped to $[0.0, 1.0]$.
- **Pass Threshold:** Zero audio playback distortion or rapid-fire click overlaps during fast keyboard navigation.

---

## 3. Automated Static Verification Checklist

Before reporting completion or handing off subtasks, agents must verify each gate against this operational checklist:

| Quality Gate | Target Metric | Verification Command / Method | Status |
|:---|:---:|:---|:---:|
| **Gate 1: Live DOM Text** | 0 baked bitmaps | Manual JSX code inspection | GATED |
| **Gate 2: Verbatim Adherence** | 100% matched | Cross-check with task specifications | GATED |
| **Gate 3: Store Decoupling** | Pure renderers | Zustand store action audit | GATED |
| **Gate 4: Component Lines** | $\le 100$ lines | PowerShell line count loop | GATED |
| **Gate 5: Leaf Types Size** | $\le 300$ lines | PowerShell line count check | GATED |
| **Gate 6: Relative Paths** | 100% relative | Scan for drive letters (`D:/`, `C:/`) | GATED |
| **Gate 7: Positive Booleans** | 0 negatives | Regex audit (`== true`, negative props) | GATED |
| **Gate 8: Secret Clearance** | 0 secrets | Regex scan for token patterns | GATED |
| **Gate 9: Zero Git CLI** | 0 commands | Enforce CLI execution policy | GATED |
| **Gate 10: Zero Build/Test** | 0 commands | Rely on static code inspection | GATED |
| **Gate 11: Canvas Geometry** | 1920x1080 | Canvas coordinate & clamp review | GATED |
| **Gate 12: Acoustic Debounce** | $\ge 80\text{ms}$ | Audio event parameter review | GATED |

---

## 4. Cross-Reference Index

- Architecture Overview: [01-overview.md](./01-overview.md)
- Slide Archetypes & Data Contracts: [02-slide-archetypes-data-contracts.md](./02-slide-archetypes-data-contracts.md)
- Color & Motion Design System: [03-color-and-motion-design-system.md](./03-color-and-motion-design-system.md)
- UI Design Principles: [../../02-coding-guidelines/24-app-ui-design-system/01-design-principles.md](../../02-coding-guidelines/24-app-ui-design-system/01-design-principles.md)
- Subtask Execution Plan: [../../../.ai-memory/plans/subtasks/25-grounded-global-ppt-and-flat/02-motion-and-theming.md](../../../.ai-memory/plans/subtasks/25-grounded-global-ppt-and-flat/02-motion-and-theming.md)
