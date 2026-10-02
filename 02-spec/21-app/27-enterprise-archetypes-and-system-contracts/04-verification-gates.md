# 04-Quality Verification Gates: 12 Quality Dimensions & Automated Compliance

> **Specification Identifier:** `02-spec/21-app/26-new-design-and-slide-archetypes/04-verification-gates`  
> **Status:** `APPROVED ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.3.0`  
> **Author:** Spec Author 01  
> **Updated:** 2026-10-02  
> **Domain:** Quality Assurance, Static AST Verification, Ergonomics & Automated Compliance  

---

## 1. System Overview & Quality Protocol Mandate

The White Presentation System enforces deterministic, zero-defect quality gates across all architectural additions, slide archetypes, theme definitions, motion physics curves, and declarative contracts. To protect production presentations against UI regressions, runtime performance dips, font rasterization artifacts, and multi-agent concurrency collisions, every implementation artifact must strictly comply with the 12 quality dimensions specified herein.

```
Quality Governance Framework:
├── Ground Truth & Typography Integrity
│   ├── Gate 1: Pure Live DOM Text Mandate
│   ├── Gate 2: 100-Line React Component Ceiling
│   └── Gate 3: Leaf Type Segregation (< 300 Lines Limit)
├── Geometry, Theming & Physics
│   ├── Gate 4: Virtual Canvas Geometry (1920x1080)
│   ├── Gate 5: Positive Boolean Evaluation
│   └── Gate 6: 4-Plane Depth Hierarchy & Elevation Compliance
├── Operational Safety & Velocity
│   ├── Gate 7: Zero Git CLI Commands in Subagent Execution
│   ├── Gate 8: Zero Routine Builds or Tests in Standard Turns
│   └── Gate 9: Relative Paths & Lowercase Hygiene
└── Perceptual Accessibility & Audio Ergonomics
    ├── Gate 10: WCAG AAA Color Contrast Verification
    ├── Gate 11: Magnetic & Kinetic Motion Performance
    └── Gate 12: Acoustic Feedback Attenuation & Safety
```

---

## 2. Core Quality Dimensions (Gates 1 through 12)

### Gate 1: Pure Live DOM Text Mandate
- **Rule:** Every textual element across all slide archetypes—including display headlines, hero metrics, kicker pills, narrative paragraphs, table cells, bullet items, and quote citations—must render as pure, selectable, live HTML DOM text nodes (`<h1>`, `<h2>`, `<p>`, `<span>`, `<div>`, `<code>`).
- **Strictly Prohibited:** Baking text into raster bitmaps (PNG, JPEG, WebP) or rendering typography onto opaque `<canvas>` buffers.
- **Verification Protocol:**
  1. Inspect JSX to ensure all typography uses standard HTML elements styled via CSS custom properties and Less tokens.
  2. Verify that images are restricted strictly to authorized SVG icons, presenter portraits, or external diagrams.
  3. Validate that text remains selectable and screen-reader accessible.
- **Pass Threshold:** Exactly 0 rasterized text graphics; 100% pure live DOM text nodes.

---

### Gate 2: 100-Line React Component Ceiling
- **Rule:** Every slide archetype component file located in `src/components/slides/*.tsx` must strictly remain under **100 physical lines of code**. Monolithic slide templates must be decomposed into dedicated child subcomponents (e.g., `ArchitectureTierCol.tsx`, `ScorecardQuad.tsx`, `CodeViewerPane.tsx`) and template factory defaults.
- **Decomposition Guidelines:**
  - Offload default slide payload structures into `src/utils/slideArchetypeFactories.ts` or `src/utils/expandedSlideFactories.ts`.
  - Extract repetitive grid items, interactive cards, or badge rows into modular helper components.
  - Keep slide root components focused purely on declarative layout composition, data binding, and step state.
- **Pass Threshold:** 0 slide archetype files exceeding 100 physical lines.

---

### Gate 3: Leaf Type Segregation (< 300 Lines Limit)
- **Rule:** Core type declaration files—specifically `src/types/presentation.ts`—must strictly remain under **300 physical lines of code**. All newly introduced slide archetypes, data interfaces, and nested entity models must be defined in dedicated leaf type files (e.g., `src/types/archetypes.ts` or `src/types/expandedArchetypes.ts`).
- **Integration Architecture:**
  1. Define individual archetype data interfaces in leaf type files.
  2. In `src/types/presentation.ts`, re-export leaf types and include them in discriminated unions (`SlideType`, `SlideData`).
- **Pass Threshold:** `src/types/presentation.ts` $\le 300$ physical lines; all archetype interfaces partitioned into leaf modules.

---

### Gate 4: Virtual Canvas Geometry (1920x1080)
- **Rule:** All coordinate systems, fluid typography clamp calculations, and layout bounding boxes must be anchored to the standard $1920 \times 1080$ virtual canvas (16:9 aspect ratio). Outer stage wrappers must apply letterboxed fit-scaling to adapt to arbitrary display viewports without content clipping.
- **Verification Protocol:**
  - Confirm the stage container enforces `width: 1920px; height: 1080px; overflow: hidden;`.
  - Verify responsive scaling scales the entire canvas via CSS `transform: scale(...)` or container query aspect preservation.
- **Pass Threshold:** Full visual integrity on the reference 1920x1080 canvas without horizontal or vertical scrollbars.

---

### Gate 5: Positive Boolean Evaluation
- **Rule:** All boolean variables, props, state fields, and schema definitions must use positive naming semantics (`is*`, `has*`, `can*`, `should*`). Negative prefixes (`isNot*`, `hasNo*`, `disabled`, `unselected`) and explicit equality checks (`== true`, `=== true`, `== false`) are strictly prohibited.
- **Examples:**
  - ❌ BAD: `hasNoGlow: boolean`, `isNotDark: boolean`, `if (slide.enabled == true)`
  - ✅ GOOD: `hasGlow: boolean`, `isDark: boolean`, `if (slide.hasGlow)`
- **Pass Threshold:** 100% compliance; 0 instances of negative boolean identifiers or explicit truth comparisons.

---

### Gate 6: 4-Plane Depth Hierarchy & Elevation Compliance
- **Rule:** Every slide archetype layout must map its visual components across the 4 distinct spatial z-planes:
  - **Plane 0 ($z=0$):** Canvas background, ambient radial wash, subtle dot-matrix grid.
  - **Plane 1 ($z=10$):** Structural frosted glass cards, bento borders, backdrop blur (`16px`).
  - **Plane 2 ($z=20$):** Active elevated step cards, expanded accordions, interactive panels.
  - **Plane 3 ($z=30$):** Ambient focus halos, active step connector beams, HUD overlays.
- **Pass Threshold:** All card components and interactive stages declare explicit depth planes without z-index collisions.

---

### Gate 7: Zero Git CLI Commands in Subagent Execution
- **Rule:** Subagents and workers running in parallel environments must NEVER execute git commands (`git add`, `git commit`, `git push`, `git status`, `git diff`, `git checkout`). In shared workspaces, parallel worker git commands trigger index lock collisions (`.git/index.lock`), immediately crashing parallel runs.
- **Governance:** Git staging, commits, and branch management are strictly reserved for the single orchestrator / lead agent upon verified task completion.
- **Pass Threshold:** Exactly 0 git CLI executions by worker subagents.

---

### Gate 8: Zero Routine Builds or Tests in Standard Turns
- **Rule:** Subagents and automated workers must NOT run full compilation commands (`npm run build`), broad test runners (`npm test`), or heavy continuous suites during standard iteration turns.
- **Rationale:** Prevents context exhaustion, CPU thrashing, build lock contention, and excessive turn latency.
- **Pass Threshold:** 0 routine build or test invocations during turn execution.

---

### Gate 9: Relative Paths & Lowercase Hygiene
- **Rule:** All authored file paths, imports, Markdown links, and schema references must be strictly relative to the repository root. Absolute system paths (e.g., `C:\...`, `/home/...`) are strictly forbidden. All newly created files and directories must use lowercase alphanumeric characters and hyphens only (`a-z`, `0-9`, `-`).
- **Pass Threshold:** 0 absolute paths; 100% lowercase directory and file names.

---

### Gate 10: WCAG AAA Color Contrast Verification
- **Rule:** All color tokens across the 10-theme matrix must satisfy WCAG 2.1 AAA contrast standards:
  - Small body and table text ($\le 20\text{px}$): Contrast ratio $C_R \ge 7.0:1$.
  - Large display headlines and badges ($\ge 24\text{px}$ bold or $\ge 32\text{px}$ regular): Contrast ratio $C_R \ge 4.5:1$.
- **Pass Threshold:** 0 contrast violations across all 10 theme palettes.

---

### Gate 11: Magnetic & Kinetic Motion Performance
- **Rule:** All animated transitions (intra-slide step progression, card reveals, active halos) must be hardware-accelerated using CSS `transform` and `opacity` properties only. Animating layout-triggering properties (`width`, `height`, `top`, `left`, `margin`, `padding`) is strictly prohibited.
- **Physics Calibration:** Springs must be configured with $k = 420\text{ N/m}$, $\zeta = 0.85$, $m = 0.8\text{ kg}$, delivering smooth 60fps frame rates with zero layout thrashing.
- **Pass Threshold:** Zero CSS layout-triggering animations; 60fps smooth kinetic motion on reference hardware.

---

### Gate 12: Acoustic Feedback Attenuation & Safety
- **Rule:** All tactile sound effects must adhere to strict auditory safety thresholds:
  - Master volume capped at $-12\text{ dB}$.
  - Automated voice ducking of $-14\text{ dB}$ whenever speech or media playback is active (`isAudioActive`).
  - Rapid trigger debouncing at 80ms to prevent acoustic clipping or distortion.
- **Pass Threshold:** 100% compliance with sound attenuation and debouncing constraints.

---

## 3. Compliance Verification Summary Table

| Gate | Dimension | Target Metric / Constraint | Automated Verification Method | Pass Threshold |
|:---:|:---|:---|:---|:---:|
| **G1** | Pure Live DOM Text | 0 rasterized typography | JSX / AST element audit | 100% DOM Text |
| **G2** | 100-Line Component Cap | $\le 100$ lines per slide | Static physical line counter | 0 files > 100 lines |
| **G3** | Leaf Type Segregation | `presentation.ts` $\le 300$ lines | Static line counter | $\le 300$ lines |
| **G4** | Virtual Canvas Geometry | $1920 \times 1080$ viewport | CSS / container dimension check | Exactly 16:9 |
| **G5** | Positive Booleans Only | `is*`, `has*`, no `== true` | AST regex property check | 0 violations |
| **G6** | 4-Plane Depth Hierarchy | Planes 0, 1, 2, 3 z-stacking | CSS z-index and elevation audit | 100% compliant |
| **G7** | Zero Worker Git Calls | 0 `git *` invocations | Subagent command log audit | Exactly 0 git calls |
| **G8** | Zero Routine Builds/Tests| 0 build/test runs in turn | Subagent command log audit | Exactly 0 builds |
| **G9** | Relative Paths & Lowercase | Zero absolute paths, lowercase | Filename and link audit | 100% compliant |
| **G10**| WCAG AAA Contrast | $\ge 7.0:1$ body, $\ge 4.5:1$ head | Luminance contrast formula | 100% AAA pass |
| **G11**| Kinetic Motion 60fps | Hardware-accelerated transforms | CSS property allowlist | 0 layout animations |
| **G12**| Acoustic Ergonomics | Max $-12\text{ dB}$, 80ms debounce | Audio telemetry check | 100% safe audio |
