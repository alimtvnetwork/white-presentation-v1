# 04-Quality Verification Gates: 12 Quality Dimensions & Automated Compliance

> **Module:** `02-spec/21-app/26-global-ppt-color-motion-and-expanded-slides`  
> **Status:** Canonical Quality Protocol  
> **Target Release:** `v1.3.0`  
> **Governance Enforcement:** Continuous Self-Audit, Static AST Analysis & Verification Scripts

---

## 1. System Overview & Quality Protocol Mandate

The White Presentation System enforces deterministic, zero-defect quality gates across all architectural additions, slide archetypes, theme definitions, motion physics curves, and declarative contracts. To protect production presentations against UI regressions, runtime performance dips, font rasterization artifacts, and conversational drift, every implementation artifact must strictly comply with the 12 quality dimensions specified herein.

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
- **Rule:** Every slide archetype component file located in `src/components/slides/*.tsx` must strictly remain under **100 physical lines of code**. Monolithic slide templates must be decomposed into dedicated child subcomponents (e.g., `StepDetailPane.tsx`, `TimelineRail.tsx`, `PyramidTier.tsx`) and template factory defaults.
- **Decomposition Guidelines:**
  - Offload default slide payload structures into `src/utils/slideArchetypeFactories.ts` or `src/utils/expandedSlideFactories.ts`.
  - Extract repetitive grid items, interactive cards, or badge rows into modular helper components.
  - Keep slide root components focused purely on declarative layout composition, data binding, and step state.
- **Audit Script (PowerShell):**
  ```powershell
  Get-ChildItem -Path "src/components/slides/*.tsx" | ForEach-Object {
    $lineCount = (Get-Content $_.FullName).Count
    if ($lineCount -gt 100) {
      Write-Error "VIOLATION: $($_.Name) has $lineCount lines (limit: 100)"
    }
  }
  ```
- **Pass Threshold:** 0 slide archetype files exceeding 100 physical lines.

---

### Gate 3: Leaf Type Segregation (< 300 Lines Limit)
- **Rule:** Core type declaration files—specifically `src/types/presentation.ts`—must strictly remain under **300 physical lines of code**. All newly introduced slide archetypes, data interfaces, and nested entity models must be defined in dedicated leaf type files (e.g., `src/types/expandedArchetypes.ts`).
- **Integration Architecture:**
  1. Define individual archetype data interfaces in `src/types/expandedArchetypes.ts`.
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
- **Audit Script (PowerShell):**
  ```powershell
  Get-ChildItem -Path "src", "02-spec" -Recurse -Include "*.ts","*.tsx","*.md" | ForEach-Object {
    $matches = Select-String -Path $_.FullName -Pattern "==\s*true|===\s*true|!=\s*false|!==\s*false|disabled\s*:"
    if ($matches) {
      Write-Warning "Potential negative boolean or explicit true comparison in $($_.FullName)"
    }
  }
  ```
- **Pass Threshold:** Exactly 0 instances of `== true`, `=== true`, or negative boolean property flags.

---

### Gate 6: 4-Plane Depth Hierarchy & Elevation Compliance
- **Rule:** All slide container surfaces, Bento panels, interactive cards, and floating overlays must strictly adhere to the 4-plane elevation system:
  - `.plane-0-surface`: Root canvas plane ($z=0$), zero elevation, canvas background, optional atmospheric radial glow / dot matrix.
  - `.plane-1-raised`: Bento boards, sidebars, section dividers ($z=10$), backdrop blur 12px, border 1px solid `--pres-border`.
  - `.plane-2-elevated`: Metric KPI tiles, step cards, interactive elements ($z=20$), hover lift `translateY(-4px)` with accent glow.
  - `.plane-3-floating`: Modals, theme dropdowns, presenter HUDs, camera preview ($z=50$), backdrop blur 32px, prominent drop shadow.
- **Strictly Prohibited:** Hardcoded ad-hoc `z-index: 9999` or inconsistent, unlayered surface elevations.
- **Pass Threshold:** 100% adherence to defined elevation classes and z-index layers.

---

### Gate 7: Zero Git CLI Commands in Subagent Execution
- **Rule:** Subagents and worker execution contexts are under a total ban from executing any Git CLI command (`git add`, `git commit`, `git push`, `git status`, `git diff`, `git checkout`). Concurrent worker git commands cause lock collisions and corrupt the git index.
- **Governance:** Git staging, commits, and branch management are handled exclusively by the Lead Orchestrator via GitMap in Phase 3.
- **Pass Threshold:** Exactly 0 Git commands executed by subagents.

---

### Gate 8: Zero Routine Builds or Tests in Standard Turns
- **Rule:** Subtask and editing turns must strictly avoid running full application build commands (`npm run build`, `vite build`) or heavy test runners (`vitest`, `playwright`). Full builds consume massive system resources and trigger asynchronous timeout failures.
- **Governance:** Rely on static type checking and targeted code inspection during development. Full builds and release validation are executed solely by the designated test lead in Phase 3.
- **Pass Threshold:** Exactly 0 unauthorized full build/test commands executed in standard turns.

---

### Gate 9: Relative Paths & Lowercase Hygiene
- **Rule:** All documentation links, schema references, and code imports must strictly utilize valid relative paths. Absolute system drive paths (e.g., `D:\work\...`, `C:\Users\...`) and uppercase letters or spaces in authored file paths are strictly forbidden.
- **Verification Protocol:**
  - Scan all files in `02-spec/` and `.ai-memory/` for absolute drive letters or backslashes in Markdown links.
  - Enforce lowercase kebab-case naming for all newly created specification and script files.
- **Pass Threshold:** 100% relative link resolution; 0 absolute paths; 0 uppercase filenames in authored directories.

---

### Gate 10: WCAG AAA Color Contrast Verification
- **Rule:** Contrast ratios across all 10 theme ramps ($S_0 \dots S_9$) must meet or exceed WCAG 2.1 AAA thresholds:
  - Small text and captions ($\le 20\text{px}$): $C_R \ge 7.0:1$.
  - Large display headings ($\ge 24\text{px}$ bold or $\ge 32\text{px}$ regular): $C_R \ge 4.5:1$.
- **Theme Support:** Both light editorial canvases (`white-brand`, `paper-editorial`) and dark obsidian palettes (`true-dark`, `emerald-growth`, `wp-exam-purple`, `midnight-luxe`, `sunset-horizon`, `cyber-neon`, `crimson-executive`, `nord-frost`) must maintain verified contrast tokens.
- **Pass Threshold:** 100% compliance across all 10 theme palettes; zero low-contrast text violations.

---

### Gate 11: Magnetic & Kinetic Motion Performance
- **Rule:** All interactive motion variants (`lift`, `slide`, `parallax`), stepwise click animations (`recCardFadeIn`, `reveal-pulse`, `baScrollPan`), and magnetic button offsets (`computeMagneticOffset`) must strictly manipulate GPU-accelerated CSS properties (`transform` and `opacity`).
- **Timing & Curves:** All transitions must follow quintic deceleration easing `cubic-bezier(0.22, 1, 0.36, 1)`.
- **Accessibility:** Full support for `@media (prefers-reduced-motion: reduce)` zeroing out spatial displacements and keyframe loops.
- **Pass Threshold:** 60fps hardware-accelerated animations; zero layout thrashing; 100% reduced-motion compliance.

---

### Gate 12: Acoustic Feedback Attenuation & Safety
- **Rule:** Audio cues must adhere to strict gain ceilings and anti-fatigue debouncing:
  - Sub-step advance clicks debounced at $\ge 80\text{ms}$ with volume clamped via $\text{stepVolume}(m)$.
  - Slide transitions debounced at $\ge 120\text{ms}$.
  - Dynamic audio ducking drops background music/ambient audio to $20\%$ nominal gain within $400\text{ms}$ whenever video or narration plays, restoring over $800\text{ms}$.
- **Pass Threshold:** Zero audio playback distortion or rapid-fire click overlaps during fast keyboard navigation.

---

## 3. Automated Static Verification Checklist

Before reporting completion or handing off subtasks, agents must verify each gate against this operational checklist:

| Quality Gate | Target Metric | Verification Command / Method | Status |
|:---|:---:|:---|:---:|
| **Gate 1: Live DOM Text** | 0 baked bitmaps | Manual JSX code inspection | GATED |
| **Gate 2: Component Lines** | $\le 100$ lines | PowerShell line count loop | GATED |
| **Gate 3: Leaf Types Size** | $\le 300$ lines | PowerShell line count check | GATED |
| **Gate 4: Canvas Geometry** | 1920x1080 | Canvas coordinate & clamp review | GATED |
| **Gate 5: Positive Booleans** | 0 negatives | Regex audit (`== true`, negative props) | GATED |
| **Gate 6: Depth Hierarchy** | 4 planes | Verify `.plane-0` through `.plane-3` | GATED |
| **Gate 7: Zero Git CLI** | 0 commands | Enforce CLI execution policy | GATED |
| **Gate 8: Zero Build/Test** | 0 commands | Rely on static code inspection | GATED |
| **Gate 9: Relative Paths** | 100% relative | Scan for drive letters (`D:/`, `C:/`) | GATED |
| **Gate 10: WCAG AAA Contrast**| $C_R \ge 7.0:1$ | Luminance formula audit table | GATED |
| **Gate 11: Kinetic Motion** | 60fps / GPU | Transform/opacity & reduced motion audit | GATED |
| **Gate 12: Acoustic Debounce**| $\ge 80\text{ms}$ | Audio event parameter review | GATED |

---

## 4. Cross-Reference Index

- Architecture Overview: [01-overview.md](./01-overview.md)
- Slide Archetypes & Data Contracts: [02-slide-archetypes-data-contracts.md](./02-slide-archetypes-data-contracts.md)
- Color & Motion Design System: [03-color-and-motion-design-system.md](./03-color-and-motion-design-system.md)
- Subtask Execution Plan: [../../../.ai-memory/plans/subtasks/05-26-global-ppt-color-motion-and/02-motion-and-theming.md](../../../.ai-memory/plans/subtasks/05-26-global-ppt-color-motion-and/02-motion-and-theming.md)
- Theme Runtime Engine: [src/themes/themeRuntime.ts](../../../src/themes/themeRuntime.ts)
- Kinetic Motion Utility: [src/utils/motionPhysics.ts](../../../src/utils/motionPhysics.ts)
