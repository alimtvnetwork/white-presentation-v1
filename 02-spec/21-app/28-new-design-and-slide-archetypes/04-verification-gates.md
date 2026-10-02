# 04-Quality Verification Gates: 12-Dimensional Automated Quality Matrix & Verification Protocols

> **Specification Identifier:** `02-spec/21-app/28-new-design-and-slide-archetypes/04-verification-gates`  
> **Status:** `APPROVED ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.3.0`  
> **Author:** Spec Author 02  
> **Updated:** 2026-10-02  
> **Domain:** Quality Assurance, Static AST Verification, Ergonomics & Automated Quality Compliance  

---

## 1. System Overview & Quality Protocol Mandate

The **White Presentation Engine** enforces a rigorous, automated, zero-defect quality governance architecture across all newly introduced presentation archetypes, theme systems, kinetic motion equations, state stores, and documentation artifacts. To prevent visual regressions, font rasterization, file size bloat, keyboard navigation deadlocks, multi-agent git index lock collisions, and turn latency explosions, every deliverable must pass the **12-Dimensional Automated Quality Matrix**.

```
12-Dimensional Automated Quality Matrix:
├── Ground Truth, Persona & Typography Integrity
│   ├── Gate 01: Verbatim Request Ingestion Gate
│   ├── Gate 02: Pure Live DOM Typography (Zero Raster Text)
│   └── Gate 08: Executive Persona Standardization (Chief Software Engineer)
├── Architectural Topology & Size Ceilings
│   ├── Gate 03: React Component 100-Line Ceiling (Hard Rule #6)
│   ├── Gate 04: Type Safety & Leaf Type Architecture (presentation.ts <= 300 lines)
│   ├── Gate 05: Template Factory Isolation (<= 300 lines per factory file)
│   └── Gate 06: Store Sizing Limits (deckStore.ts <= 250 lines)
├── Linguistic & Semantic Discipline
│   └── Gate 07: Positive Booleans Only (is*, has*, zero == true)
├── Accessibility, Interaction & Contrast
│   ├── Gate 09: Interactive Step-by-Step Navigation & Keyboard Accessibility
│   └── Gate 10: Light/Dark Contrast Compliance (WCAG AA/AAA)
└── Operational Hygiene & Concurrency Safety
    ├── Gate 11: Zero Routine Build/Test Violation Rule
    └── Gate 12: Clean GitMap Hyphen Commit & Version Bump Release Ceremony
```

---

## 2. The 12 Quality Dimensions & Concrete Verification Protocols

### Gate 01: Verbatim Request Ingestion Gate
- **Rule:** Every active parent plan (`.ai-memory/plans/pending/*.md`) and primary architectural specification must ingest and preserve the verbatim user instruction without redaction, editorial summarizing, or cognitive omission.
- **Verification Protocol:**
  1. Inspect the Markdown source of `.ai-memory/plans/pending/28-deep-global-ppt-and-flat-slide-synthesis.md` and `01-overview.md`.
  2. Verify the presence of the exact user prompt string beginning with `is it really?` and concluding with `learn /learn if you have to learn something and /plan stuff before working please.`.
- **Pass Threshold:** 100% exact verbatim text match; zero missing clauses or altered requirements.

---

### Gate 02: Pure Live DOM Typography (Zero Raster Text)
- **Rule:** Every piece of visible presentation typography—including display titles, hero numbers, subtitles, kicker pill badges, card narrative, code blocks, tabular cells, and footnote micro-copy—must render as pure, selectable, live HTML DOM text nodes (`<h1>`, `<h2>`, `<h3>`, `<p>`, `<span>`, `<div>`, `<code>`).
- **Strictly Prohibited:**
  - Baking text into raster graphics (PNG, JPEG, WebP).
  - Flattening text onto HTML5 `<canvas>` rendering contexts.
  - Rendering static SVG `<text>` elements as a replacement for live DOM typography.
- **Verification Protocol:**
  1. AST inspection of all slide `.tsx` files in `src/components/slides/`.
  2. Confirm all textual content is rendered via standard semantic JSX tags with CSS variable typography styling.
  3. Validate text selection and screen-reader accessibility in rendered DOM.
- **Pass Threshold:** Exactly 0 rasterized text images; 100% live HTML DOM text nodes.

---

### Gate 03: React Component 100-Line Ceiling (Hard Rule #6)
- **Rule:** Every slide archetype component file located in `src/components/slides/*.tsx` must strictly remain under **100 physical lines of code**. Monolithic templates must be decomposed into dedicated child subcomponents (each $\le 80$ lines) and template factory generators.
- **Decomposition Architecture:**
  - Complex slide layouts must extract modular child units (e.g., `ScorecardQuad.tsx`, `FaqAccordionItem.tsx`, `TimelineMilestoneNode.tsx`, `CodeEditorPane.tsx`).
  - Slide root components retain single responsibility: layout grid orchestration, step state binding, and child composition.
- **Verification Protocol:**
  - Run physical line count verification script:
    ```powershell
    Get-ChildItem src\components\slides\*.tsx | ForEach-Object {
      $lines = (Get-Content $_.FullName).Length
      if ($lines -gt 100) { Write-Error "$($_.Name) has $lines lines (> 100)" }
    }
    ```
- **Pass Threshold:** 0 slide archetype component files exceeding 100 physical lines.

---

### Gate 04: Type Safety & Leaf Type Architecture
- **Rule:** Core type declaration hub `src/types/presentation.ts` must strictly remain under **300 physical lines of code**. All newly introduced slide archetypes, data interfaces, and nested structures must be isolated in dedicated leaf type files (e.g., `src/types/archetypes.ts`, `src/types/extendedArchetypes.ts`, `src/types/expandedArchetypes.ts`, `src/types/enterpriseArchetypes.ts`).
- **Discriminated Union Integration:**
  - Root `presentation.ts` imports and re-exports leaf types into the global `SlideType` and `SlideData` discriminated unions.
- **Verification Protocol:**
  - Verify `(Get-Content src\types\presentation.ts).Length -le 300`.
  - Validate TypeScript compilation without type assertion bypasses (`any` or `@ts-ignore`).
- **Pass Threshold:** `src/types/presentation.ts` $\le 300$ physical lines; zero uncontained archetype type definitions.

---

### Gate 05: Template Factory Isolation (<= 300 Lines)
- **Rule:** Default slide creation payload generators and fixtures must be isolated into dedicated utility factory files (e.g., `src/utils/slideArchetypeFactories.ts`, `src/utils/expandedSlideFactories.ts`, `src/utils/enterpriseSlideFactories.ts`), with each factory file strictly remaining $\le 300$ physical lines.
- **Verification Protocol:**
  - Inspect `src/utils/*Factories.ts` physical line counts.
  - Verify every factory exports deterministic, valid default payloads matching its leaf TypeScript interface.
- **Pass Threshold:** 0 factory files exceeding 300 physical lines; 100% factory schema coverage for all slide archetypes.

---

### Gate 06: Store Sizing Limits (`deckStore.ts` <= 250 Lines)
- **Rule:** The centralized presentation state store `src/stores/deckStore.ts` must maintain clean, focused state management and strictly remain under **250 physical lines of code**.
- **Scope Discipline:**
  - Store must only manage presentation playback state: `deck`, `activeSlideIndex`, `activeStep`, `slideDirection`, `activeThemeId`, `isSoundEnabled`, step navigation actions, and theme switching.
  - Ephemeral editor state belongs strictly in `src/stores/editStore.ts`.
  - Initial seed data belongs in `src/stores/initialDeck.ts`.
- **Verification Protocol:**
  - Verify `(Get-Content src\stores\deckStore.ts).Length -le 250`.
- **Pass Threshold:** `src/stores/deckStore.ts` $\le 250$ physical lines.

---

### Gate 07: Positive Booleans Only (`is*`, `has*`, Zero `== true`)
- **Rule:** All boolean variables, props, state keys, and database flags must use positive naming semantics (`is*`, `has*`, `can*`, `should*`). Negative boolean naming (`isNot*`, `hasNo*`, `disabled`, `unselected`, `hidden`) and explicit comparisons (`== true`, `=== true`, `== false`, `=== false`) are strictly prohibited.
- **Syntax Standards:**
  - ❌ Forbidden: `if (slide.hasSoundFeedback == true)`, `isDisabled`, `isNotDark`
  - ✅ Authorized: `if (slide.hasSoundFeedback)`, `isInteractive`, `isDark`
- **Verification Protocol:**
  - AST / regex audit scanning for forbidden prefixes and explicit truth checks.
- **Pass Threshold:** Exactly 0 negative boolean variables; exactly 0 explicit equality comparisons.

---

### Gate 08: Executive Persona Standardization (Alim Ul Karim)
- **Rule:** Across all slide layouts, mock fixtures, biographical summaries, quote callouts, and documentation, executive Alim Ul Karim is strictly and exclusively designated as **"Chief Software Engineer"**.
- **Strictly Prohibited Titles:**
  - ❌ "Founder", "Co-Founder", "CEO", "Chief Executive Officer", "Managing Director", "Principal Partner".
- **Verification Protocol:**
  - Search codebase files for prohibited titles associated with Alim Ul Karim:
    ```powershell
    Select-String -Path src\*, 02-spec\* -Pattern "Alim.*(Founder|CEO|Chief Executive)"
    ```
- **Pass Threshold:** 0 instances of prohibited executive titles; 100% compliance with "Chief Software Engineer".

---

### Gate 09: Interactive Step-by-Step Navigation & Keyboard Accessibility
- **Rule:** All multi-phase slides (`steps`, `steps-chain`, `timeline-roadmap`, `process-cycle`, `depth-stack`, `reveal-grid`, and enterprise multi-step archetypes) must consume `activeStep` and `getActiveSlideMaxSteps()` from `useDeckStore`.
- **Interaction Contracts:**
  - `ArrowRight`, `Space`, `Enter`: Advance intra-slide step until `activeStep === maxSteps - 1`, then advance to next slide.
  - `ArrowLeft`: Rewind intra-slide step until `activeStep === 0`, then rewind to previous slide at its last step.
  - Screen readers must receive updated ARIA attributes (`aria-current="step"`, `aria-live="polite"`).
- **Verification Protocol:**
  - Step progression logic verification in `deckStore.ts` (`stepAdvance`, `stepRewind`, `getLastStepOfSlide`).
- **Pass Threshold:** 100% seamless stepwise navigation with zero slide skips on multi-step archetypes.

---

### Gate 10: Light/Dark Contrast Compliance (WCAG AA/AAA)
- **Rule:** Every theme in the 10-theme master matrix must satisfy WCAG 2.1 AAA contrast guidelines:
  - Small body and table text ($\le 20\text{px}$): Contrast ratio $C_R \ge 7.0:1$.
  - Large display headlines and hero badges ($\ge 24\text{px}$ bold or $\ge 32\text{px}$ regular): Contrast ratio $C_R \ge 4.5:1$.
  - Both Dark Obsidian and Light Editorial themes must pass automated contrast calculations against canvas background (`canvasBg`) and card surface (`cardBg`).
- **Verification Protocol:**
  - Execute automated luminance ratio check using `themeRuntime.ts` `auditThemeContrast()`.
- **Pass Threshold:** 10/10 themes passing WCAG AA/AAA verification with zero chromatic failures.

---

### Gate 11: Zero Routine Build/Test Violation Rule
- **Rule:** Worker subagents and automated assistants must NEVER run full project builds (`npm run build`, `pnpm build`, `vite build`) or broad test suites (`npm test`, `vitest run`) during routine editing and specification turns.
- **Operational Rationale:**
  - Prevents CPU resource starvation, multi-agent file access contention, turn latency timeouts, and context window exhaustion.
  - Verification during editing turns relies on fast static AST inspections, line counters, and targeted module checks. Full build verification is executed solely by the lead orchestrator at release time.
- **Verification Protocol:**
  - Subagent command execution log audit.
- **Pass Threshold:** Exactly 0 routine build or test CLI executions during worker subagent turns.

---

### Gate 12: Clean GitMap Hyphen Commit & Version Bump Release Ceremony
- **Rule:** Subagents must NEVER execute git commands (`git add`, `git commit`, `git push`, `git checkout`). All git staging and commits are reserved strictly for the lead orchestrator upon verified completion of parent milestones.
- **Commit Format:**
  - Must follow GitMap hyphen-separated atomic commit convention:
    `white-pres - feat: <feature-description>`
- **Release Ceremony:**
  - When releasing, lead orchestrator updates `package.json` version, pins version in root `readme.md`, updates changelog, and pushes Git tags.
- **Verification Protocol:**
  - Worker subagent command logs confirm 0 git executions.
- **Pass Threshold:** Exactly 0 worker git CLI commands; 100% atomic hyphen-separated commits by lead orchestrator.

---

## 3. Automated Quality Verification Audit Matrix (Table)

| Gate # | Quality Dimension | Exact Target / Constraint | Verification Method | Failure Remediation | Pass Threshold |
|:---:|:---|:---|:---|:---|:---:|
| **G01** | Verbatim Request Ingestion | Exact prompt retained in pending plan & overview | Regex string match | Re-insert full prompt block | 100% Match |
| **G02** | Pure Live DOM Typography | 0 raster text images, 0 canvas text | AST JSX node inspection | Refactor to semantic HTML (`h1-h3`, `p`) | 100% Live DOM |
| **G03** | React Component 100-Line Ceiling | $\le 100$ lines per `.tsx` slide file | Physical line counter script | Decompose into child subcomponents | 0 files > 100 lines |
| **G04** | Leaf Type Architecture | `presentation.ts` $\le 300$ lines | Line counter & import check | Move interfaces to leaf type files | $\le 300$ lines |
| **G05** | Template Factory Isolation | $\le 300$ lines per factory utility | Static line counter script | Split factories into modular utilities | 0 files > 300 lines |
| **G06** | Store Sizing Limits | `deckStore.ts` $\le 250$ lines | Static line counter script | Extract helper functions & initial state | $\le 250$ lines |
| **G07** | Positive Booleans Only | `is*`, `has*`, zero `== true` | AST regex property check | Invert negative flags, strip `== true` | 0 violations |
| **G08** | Executive Persona Title | Alim Ul Karim = "Chief Software Engineer" | Full codebase text grep | Replace "Founder"/"CEO" with canonical title | 0 violations |
| **G09** | Interactive Step Navigation | `activeStep` progression & keyboard sync | State transition unit check | Wire `computeSlideMaxSteps` & `stepAdvance` | 100% Compliant |
| **G10** | WCAG Contrast Compliance | Body $\ge 7.0:1$, Headlines $\ge 4.5:1$ | `auditThemeContrast()` | Adjust $S_0$ or $S_9$ luminance stops | 10/10 Themes Pass |
| **G11** | Zero Routine Builds/Tests | 0 build/test runs in standard turns | Subagent command log audit | Remove routine build/test commands | Exactly 0 builds |
| **G12** | Clean GitMap Hyphen Commits | 0 worker git calls; hyphen commits | Git command log audit | Strip git commands from worker agents | 0 worker git calls |

---

## 4. Static Verification Scripts Reference

Downstream orchestrators can execute automated static verification using standard shell commands without triggering heavy compilations:

```powershell
# 1. Verify React Slide Component 100-line ceiling (G03)
Get-ChildItem src\components\slides\*.tsx | ForEach-Object {
  $c = (Get-Content $_.FullName).Length
  if ($c -gt 100) { Write-Host "VIOLATION [G03]: $($_.Name) has $c lines" -ForegroundColor Red }
}

# 2. Verify Leaf Type & Store Size limits (G04, G06)
$presLines = (Get-Content src\types\presentation.ts).Length
if ($presLines -gt 300) { Write-Host "VIOLATION [G04]: presentation.ts has $presLines lines (> 300)" -ForegroundColor Red }

$storeLines = (Get-Content src\stores\deckStore.ts).Length
if ($storeLines -gt 250) { Write-Host "VIOLATION [G06]: deckStore.ts has $storeLines lines (> 250)" -ForegroundColor Red }

# 3. Check for unauthorized Persona titles (G08)
Select-String -Path src\stores\initialDeck.ts, src\utils\*.ts -Pattern "Alim.*(Founder|CEO|Chief Executive)"

# 4. Check for explicit truth comparisons (G07)
Select-String -Path src\components\slides\*.tsx, src\stores\*.ts -Pattern "==\s*true|===\s*true"
```
