# 04-Verification Gates: 12 Quality Dimensions & Zero-Defect Governance

> **Module:** `02-spec/21-app/24-expanded-slide-system-and-global-ppt-synthesis`  
> **Status:** Canonical Quality Protocol  
> **Target Release:** `v1.1.0`  
> **Governance Enforcement:** Continuous Self-Audit & Automated Lint Verification

---

## 1. System Overview & Quality Protocol Mandate

The White Presentation System enforces strict, deterministic quality gates across all architectural extensions, slide archetypes, and theme definitions. To prevent technical debt, UI regressions, performance degradation, and conversational drift, every implementation artifact must pass the **12 Quality Dimensions** defined in this specification.

```
Verification Hierarchy:
├── Ground Truth Compliance (Dimensions 1–2)
│   ├── D1: Verbatim Adherence & Zero Hallucination
│   └── D2: Pure Live DOM Text Mandate
├── Code Health & Architectural Boundaries (Dimensions 3–6)
│   ├── D3: 100-Line React Component Ceiling
│   ├── D4: Zero Build / Test in Routine Turns
│   ├── D5: Relative Links Integrity
│   └── D6: Leaf Types Architecture & 300-Line Ceiling
├── Acoustic & Visual Precision (Dimensions 7–10)
│   ├── D7: Audio Cues & Acoustic Synchronization
│   ├── D8: Positive Boolean Naming Standards
│   ├── D9: Virtual Canvas Geometry (1920x1080)
│   └── D10: Theme Responsiveness & Contrast Compliance
└── Operational & State Hygiene (Dimensions 11–12)
    ├── D11: In-Place Content Authoring & Store Decoupling
    └── D12: Zero Git CLI Commands Rule
```

---

## 2. The 12 Quality Dimensions

### Dimension 1: Verbatim Adherence & Zero Hallucination
- **Definition:** Every feature, component, prop, and schema implemented must trace directly back to explicit user requests, master specifications, or approved architectural plans. Agents and engineers must never invent fictional design tokens, unauthorized external dependencies, or unprompted behavioral changes.
- **Verification Protocol:**
  1. Cross-reference all newly introduced props with `.ai-memory/plans/pending/24-expanded-slide-system-and-global.md`.
  2. Verify that slide archetype identifiers strictly match the catalog (`metric-grid`, `problem-solution`, `quadrant-matrix`, `market-opportunity`, `timeline-roadmap`, `feature-grid`, `architecture-diagram`, `quote-callout`, `stats-callout`, `team-grid`, `case-study`, `comparison-columns`, `process-cycle`, `code-terminal`, `call-to-action`).
  3. Validate that template copy reflects high-authority enterprise themes without lorem ipsum filler.
- **Pass Threshold:** 100% traceability to task requirements; zero hallucinated abstractions.

---

### Dimension 2: Pure Live DOM Text Mandate
- **Definition:** All typography—including titles, subtitles, kicker labels, KPI numbers, bullet points, table headers, and badges—must render as pure, selectable, live HTML DOM text nodes. Text must **never** be baked into raster bitmaps (PNG, JPEG, WebP) or opaque pre-rendered canvas layers.
- **Verification Protocol:**
  1. Inspect component JSX to confirm typography uses standard text elements (`<h1>`, `<h2>`, `<p>`, `<span>`, `<div>`) styled via CSS/Tailwind.
  2. Confirm images are strictly utilized for photographic portraits, logos, or illustrative backdrops.
  3. Validate text accessibility by verifying DOM elements are inspectable and selectable in headless capture tools.
- **Pass Threshold:** 0 baked-in text graphics; 100% pure DOM text rendering.

---

### Dimension 3: 100-Line React Component Ceiling
- **Definition:** Every React slide component (`src/components/slides/*.tsx`) must strictly remain under **100 physical lines of code**. Large components must be decomposed into modular child subcomponents, extracted helper hooks, or dedicated template factories.
- **Decomposition Patterns:**
  - Extract repetitive card rows or grid items into sibling subcomponents.
  - Offload default data generators and mock payloads into `src/utils/slideArchetypeFactories.ts`.
  - Extract complex calculations into utility modules (`src/utils/`).
- **Verification Protocol:**
  ```powershell
  # Static line count audit for slide components
  Get-ChildItem "src/components/slides/*.tsx" | ForEach-Object {
    $lines = (Get-Content $_.FullName).Count
    if ($lines -gt 100) { Write-Error "$($_.Name) exceeds 100 lines ($lines lines)" }
  }
  ```
- **Pass Threshold:** Line count $\le 100$ for all slide components without exception.

---

### Dimension 4: Zero Build / Test in Routine Turns
- **Definition:** Routine editing, authoring, and subtask turns must **strictly avoid running full application builds** (`npm run build`, `vite build`) or heavy test runners (`vitest`, `playwright`). Full builds and tests consume massive compute resources, disrupt intermediate state, and violate task execution velocity.
- **Verification Protocol:**
  1. Rely on static type analysis, ESLint diagnostics, and manual file inspection.
  2. Strictly avoid executing `npm run build`, `pnpm build`, `npm test`, or `vitest run` in standard execution cycles.
  3. Only the designated final validation lead may execute targeted smoke checks if explicitly instructed by user protocol.
- **Pass Threshold:** Zero unauthorized build or test process executions.

---

### Dimension 5: Relative Links Integrity
- **Definition:** All documentation links, cross-references, import paths, and schema pointers must strictly utilize valid relative paths. Absolute system paths (e.g., `D:\work\...`, `C:\Users\...`) and broken local anchors are strictly prohibited.
- **Verification Protocol:**
  1. Scan all markdown files in `02-spec/` and `.ai-memory/` for absolute drive prefixes (`D:/`, `C:/`).
  2. Verify that all relative links (`[title](../path/file.md)`) resolve to existing files on disk.
  3. Ensure code imports use clean relative paths (`../../types/presentation`) or configured aliases.
- **Pass Threshold:** 100% relative link resolution; 0 absolute local filesystem paths.

---

### Dimension 6: Leaf Types Architecture & 300-Line Ceiling
- **Definition:** Master type definition files (specifically `src/types/presentation.ts`) have a hard ceiling of 300 lines (currently at 262 lines). When introducing new slide schemas, developers must implement the **Leaf Types Architecture**:
  1. All new archetype data interfaces are defined in a dedicated leaf file: `src/types/archetypes.ts`.
  2. `src/types/presentation.ts` re-exports the leaf types and updates the discriminated `SlideType` and `SlideData` union types cleanly.
- **Verification Protocol:**
  1. Verify `src/types/archetypes.ts` houses all 15 new slide archetype schemas.
  2. Audit `src/types/presentation.ts` line count to ensure it remains strictly under 300 lines.
- **Pass Threshold:** `src/types/presentation.ts` $< 300$ lines; leaf types cleanly segregated.

---

### Dimension 7: Audio Cues & Acoustic Synchronization
- **Definition:** Tactical audio feedback must provide crisp sensory reinforcement while respecting cognitive load. Sounds must utilize precise debouncing, calibrated volume curves (`stepVolume`), and dynamic ducking.
- **Verification Protocol:**
  1. Verify `stepVolume(m)` attenuates sub-step clicks when master volume is high ($\max(0.3, m - 0.3)$).
  2. Confirm transition sounds (`fade_swoosh_v4.mp3`) enforce a $120\text{ms}$ debounce window to prevent audio stutter during rapid slide navigation.
  3. Validate that background music ducks to $20\%$ nominal gain within $400\text{ms}$ upon active narration or media playback.
- **Pass Threshold:** Audio triggers adhere strictly to formulas defined in `03-color-and-motion-design-system.md`.

---

### Dimension 8: Positive Boolean Naming Standards
- **Definition:** All boolean variables, state properties, interface fields, and function arguments must use **positive naming prefixes** (`is*`, `has*`, `can*`, `should*`). Negative or inverted polarity booleans (e.g., `noShadow`, `disabled`, `isNotActive`, `unlocked`) are strictly banned.
- **Allowed Patterns:**
  - `isDark` (NOT `isLightModeOff`)
  - `hasDotMatrix` (NOT `noDotMatrix`)
  - `isEditable` (NOT `disableEdit`)
  - `hasBadge` (NOT `withoutBadge`)
  - `isVisible` (NOT `isHidden`)
- **Verification Protocol:**
  1. Inspect all TypeScript interfaces in `src/types/` for negative boolean flags.
  2. Check component props in `src/components/` for non-compliant boolean names.
- **Pass Threshold:** 100% positive boolean naming compliance across codebase.

---

### Dimension 9: Virtual Canvas Geometry ($1920 \times 1080$)
- **Definition:** The presentation viewport operates in a deterministic fixed coordinate canvas of **$1920 \times 1080$ pixels** (16:9 aspect ratio). Responsive scaling is achieved via uniform CSS transform matrix scaling (`transform: scale(...)`), preventing layout drift, element overlap, or font reflow across different screen dimensions.
- **Verification Protocol:**
  1. Confirm canvas container enforces `width: 1920px; height: 1080px; position: absolute;`.
  2. Verify scaling container applies `transform-origin: center center;` (or `top left`) based on viewport letterboxing.
  3. Confirm coordinates, padding, font sizes, and card dimensions are authored assuming native $1920 \times 1080$ coordinate space.
- **Pass Threshold:** 0 viewport reflow bugs; pixel-accurate presentation at any display resolution.

---

### Dimension 10: Theme Responsiveness & Contrast Compliance
- **Definition:** All slides must respond dynamically to the active theme palette (`THEME_PALETTES[activeThemeId]`). They must strictly enforce the light/dark contrast rules:
  - **Light Themes:** `headerShadow: "rgb(255 255 255) 1px 0.7px 0px"`, black brand logo (`/assets/logos/6 - Riseup Asia Logo Transparent Only BK.png`).
  - **Dark Themes:** `headerShadow: "rgb(0 0 0) 1px 0.7px 0px"`, white brand logo (`/assets/logos/riseup_asia_white.svg`).
  - **Luminance Contrast:** Large typography $\ge 4.5:1$, body copy $\ge 7:1$ on canvas background.
- **Verification Protocol:**
  1. Switch between all 10 themes in runtime/spec; verify that header shadows and brand logo paths adapt automatically.
  2. Validate that card borders, card backgrounds, and accent colors read from the active theme palette rather than hardcoded inline values.
- **Pass Threshold:** Full 10-theme support; 100% compliance with contrast and logo polarity rules.

---

### Dimension 11: In-Place Content Authoring & Store Decoupling
- **Definition:** The slide presentation engine supports live inline content editing during authoring mode. Slide components must implement `contentEditable={isEditMode}` and persist edits via `applyEdit` on blur. The state architecture must maintain clean decoupling:
  - `useDeckStore`: Houses persistent deck data, slide contents, active theme, and slide order.
  - `useEditStore`: Houses ephemeral UI state (e.g., `isEditMode`, `activeSlideId`, `isSlideCreatorOpen`, `inspectorPosition`).
- **Verification Protocol:**
  1. Confirm persistent deck mutations are routed through `useDeckStore`.
  2. Confirm modal visibility and authoring flags are stored in `useEditStore`.
  3. Confirm text fields support inline editing without resetting state on re-render.
- **Pass Threshold:** 0 cross-store leaks; robust inline content editing persistence.

---

### Dimension 12: Zero Git CLI Commands Rule
- **Definition:** In accordance with repository autonomous execution guidelines, subagents and engineers must **never run git CLI commands** (`git add`, `git commit`, `git checkout`, `git push`, `git reset`, `git status`) during task execution turns. Git history and commits are strictly managed by parent coordinator protocols.
- **Verification Protocol:**
  1. Inspect command logs to confirm zero invocations of `git *`.
  2. Ensure file creation and editing is performed solely via file system tools (`write_to_file`, `replace_file_content`).
- **Pass Threshold:** Exactly 0 git CLI executions.

---

## 3. Quality Gates Verification Matrix

| # | Dimension | Primary Scope | Verification Tool / Method | Passing Threshold | Failure Severity |
|:---:|:---|:---|:---|:---:|:---:|
| **D1** | Verbatim Adherence | Specifications & Plans | Semantic diff vs prompt requirements | 100% Traceable | BLOCKING |
| **D2** | Pure Live DOM Text | Slide Components (`.tsx`) | JSX tree inspection for raster text | 0 Raster Text | CRITICAL |
| **D3** | 100-Line Component Ceiling | `src/components/slides/*.tsx` | Physical line count scan | $\le 100$ lines | BLOCKING |
| **D4** | Zero Build/Test in Turns | Execution Runtime | Process activity log inspection | 0 Invocations | BLOCKING |
| **D5** | Relative Links Integrity | `02-spec/` & `.ai-memory/` | Regex path scan (`(D:\|C:)/`) | 100% Relative | HIGH |
| **D6** | Leaf Types Architecture | `src/types/` | Line count of `presentation.ts` | $< 300$ lines | CRITICAL |
| **D7** | Audio Synchronization | `src/audio/` & Components | Mathematical formula verification | Exact formula | MEDIUM |
| **D8** | Positive Boolean Naming | All TS interfaces & props | AST / Grep pattern audit (`is*`, `has*`)| 100% Positive | HIGH |
| **D9** | Virtual Canvas Geometry | Canvas Layout Engine | Viewport CSS inspection ($1920 \times 1080$)| Native $1920\text{px}$ | CRITICAL |
| **D10**| Theme Contrast Rules | All 10 Theme Palettes | Shadow & logo polarity evaluation | WCAG AAA | HIGH |
| **D11**| In-Place Authoring | Slides & Store Architecture| `useDeck` vs `useEdit` decoupling | 0 State Leaks | HIGH |
| **D12**| Zero Git Commands Rule | Subagent Operations | Shell history audit | 0 Git Commands | BLOCKING |

---

## 4. Self-Audit Execution Protocol

Before reporting task completion, every autonomous agent or engineer must complete this 3-phase checklist:

### Phase 1: Pre-Flight Static Check
- [ ] Verify all modified or created files use strictly lowercase directory paths and filenames.
- [ ] Check line counts on all `.tsx` slide components ($\le 100$ lines) and `src/types/presentation.ts` ($< 300$ lines).
- [ ] Confirm no git commands were proposed or executed.

### Phase 2: Structural Verification
- [ ] Verify that all 15 slide archetypes are accounted for in either batch 1 or batch 2 specifications and subtasks.
- [ ] Ensure `headerShadow` and logo polarity formulas are identical to canonical standards.
- [ ] Validate that all Markdown links between specs and memory files use valid relative paths.

### Phase 3: Sign-Off
- [ ] Generate comprehensive summary detailing verified files and line counts.
- [ ] Notify parent coordinator agent with structured report and hand off for next execution batch.
