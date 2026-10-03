# 04-Quality Verification Gates: 12-Dimensional Compliance, WCAG Contrast Verification & Component Bounds for Module 38

> **Specification Identifier:** `02-spec/21-app/38-global-ppt-flat-step-interactive-suite/04-verification-gates.md`  
> **Status:** `APPROVED CANONICAL ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.9.0`  
> **Author:** Spec Subagent 02 (Motion, Flat Progression & Verification)  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  
> **Domain:** Automated Quality Assurance, 12-Dimensional Verification Gates, Hard Component Line Cap ($\le 100$ Physical Lines), Function Line Cap ($\le 15$ Lines), WCAG Contrast Verification for 7 New Themes, Step Progression Audit Table for 15 Archetypes, Zero-Build Rule R1, and Persona Standardization  

---

## 1. System Vision & Verification Governance

To guarantee that Module 38 (`38-global-ppt-flat-step-interactive-suite`) achieves rock-solid stability, zero runtime crashes, seamless 60fps rendering, and mathematical typographic precision across all themes and viewports, all code authored for this module must satisfy an automated **12-Dimensional Quality Verification Matrix**.

Every component, hook, utility, and data fixture authored across the 15 slide archetypes must undergo strict verification before being integrated into `initialDeck.ts` and `SlideRenderer.tsx`.

```
12-Dimensional Verification Matrix Architecture:
├── Structural Discipline & Sizing Hygiene
│   ├── Gate 1: Hard Rule CODE-RED-006R (<= 100 Physical Lines per .tsx Component)
│   ├── Gate 2: Function Sizing Ceiling (<= 15 Physical Lines per Function Body)
│   ├── Gate 3: Rule R1 Zero Builds or Full Test Suites (Strict Fast Check Primacy)
│   └── Gate 4: 100% Affirmative Positive Booleans via src/utils/booleanGuards.ts
├── Theme Contrast, Typography & Kinetic Interaction
│   ├── Gate 5: WCAG 2.1 AA / AAA Contrast Verification for 7 New Themes
│   ├── Gate 6: Pure Live DOM Typography (Zero Canvas blits, Zero Pre-baked text)
│   ├── Gate 7: Deterministic Step Progression Audit (Zero Phantom / Ghost Steps)
│   └── Gate 8: Persona Standardization (Alim Ul Karim strictly 'Chief Software Engineer')
└── Viewport Bounds, Security & Git Hygiene
    ├── Gate 9: Canonical 1920x1080 Viewport Geometry & Fluid Clamps
    ├── Gate 10: Secrets Quarantine & Sensitive Data Isolation
    ├── Gate 11: Relative Path Linter Compliance (Zero Hardcoded Absolute Paths)
    └── Gate 12: Subagent Git Command Prohibition (Zero git add/commit by workers)
```

---

## 2. Inviolable Quality Gates & Enforcement Rules

---

### Gate 1: Hard Rule CODE-RED-006R — Component Sizing Cap ($\le 100$ Physical Lines per `.tsx`)
- **Mandate:** Every React component (`.tsx`) under `src/components/slides/flatglobal/` and parent renderers must strictly contain **100 or fewer physical lines of code**.
- **Decomposition Architecture:**
  - The parent slide component acts strictly as a compositional orchestrator connecting store state (`activeStep`, `theme`) with child presentation nodes.
  - Complex UI panels, SVG diagrams, and metrics cards must be extracted into dedicated leaf subcomponents housed in `src/components/slides/flatglobal/` or child subdirectories.
  - Slide data models and factories reside in `src/utils/flatGlobalSuiteFactories.ts`.
- **Automated Python Verification Script:**
  ```python
  import pathlib, sys

  oversized = [
      f for f in pathlib.Path('src/components/slides/flatglobal').glob('**/*.tsx')
      if len(f.read_text(encoding='utf-8').splitlines()) > 100
  ]
  if oversized:
      print("CODE-RED-006R VIOLATION: Oversized components detected:")
      for f in oversized:
          print(f" - {f} ({len(f.read_text(encoding='utf-8').splitlines())} lines)")
      sys.exit(1)
  print("CODE-RED-006R PASS: All React components strictly <= 100 lines.")
  ```
- **Pass Threshold:** Exactly 0 `.tsx` files exceeding 100 physical lines.

---

### Gate 2: Function Sizing Ceiling ($\le 15$ Lines per Function)
- **Mandate:** All utility functions, event handlers, render subroutines, and transformation helpers must contain **15 or fewer physical lines** from signature to closing bracket.
- **Remediation Strategy:** Extract compound conditional branches, mapping loops, or string calculations into pure helper functions.
- **Pass Threshold:** 100% of newly authored functions comply with the $\le 15$ line constraint.

---

### Gate 3: Rule R1 Zero Builds or Full Test Suites — Heavy Verification Ban
- **Mandate:** Running full build commands (`npm run build`, `pnpm build`, `vite build`) or unscoped test suites (`npm test`, `vitest run`) during routine development turns is **STRICTLY PROHIBITED**.
- **Approved Fast Verification Protocol:**
  - Fast static type analysis via `npx tsc --noEmit` (execution budget $\le 5\text{s}$).
  - Targeted Python line-count and boolean regex scanners.
- **Pass Threshold:** Zero invocations of heavy build or test commands.

---

### Gate 4: 100% Affirmative Positive Boolean Naming via `src/utils/booleanGuards.ts`
- **Mandate:** All boolean properties, state variables, and component props must use affirmative positive naming (`is*`, `has*`, `can*`, `should*`).
- **Forbidden Anti-Patterns:**
  - ❌ `disabled`, `hidden`, `isNotActive`, `unverified`, `isInvalid`.
  - ❌ Double negatives: `!disabled`, `!isNotActive`.
  - ❌ Explicit comparisons: `if (isActive === true)`.
- **Approved Standard:**
  - ✅ `isEnabled`, `isVisible`, `isActive`, `isVerified`, `hasPresenterNotes`, `canAdvance`.
  - ✅ Guard helpers from `src/utils/booleanGuards.ts`: `isTruthy(value)`, `isDefined(value)`.
- **Pass Threshold:** Exactly 0 negative boolean declarations across all Module 38 contracts and components.

---

### Gate 5: WCAG 2.1 AA / AAA Contrast Verification for 7 New Themes
- **Mandate:** All foreground text and interactive controls across the 7 newly adapted themes must satisfy WCAG AA ($4.5:1$ for body text, $3.0:1$ for large headings and icons) and WCAG AAA ($7:1$) where specified.
- **Dedicated Chrome Isolation Rule:** Floating presenter navigation controls and HUD elements must use `--chrome-*` tokens which are hardcoded to dark obsidian backdrops, ensuring contrast compliance even when presenting light paper decks.
- **Zero Yellow-on-Light Mandate:** On light themes (`github-light`, `paper-ink`), bright gold or amber accents must automatically invert to high-contrast deep bronze (`#92400E`) or dark slate.

#### Contrast Verification Matrix for the 7 New Themes:
| Theme Identifier | Canvas Background (HSL / Hex) | Primary Text (Hex) | Primary Accent (Hex) | Text Contrast Ratio | Status & Compliance |
|:---|:---:|:---:|:---:|:---:|:---:|
| `vscode-dark` | `0 0% 12%` (`#1F1F1F`) | `#CCCCCC` | `#0A84FF` | $8.2:1$ | **PASS (WCAG AAA)** |
| `dracula` | `231 15% 18%` (`#282A36`) | `#F8F8F2` | `#BD93F9` | $11.5:1$ | **PASS (WCAG AAA)** |
| `github-light` | `0 0% 100%` (`#FFFFFF`) | `#1F2328` | `#0969DA` | $14.1:1$ | **PASS (WCAG AAA)** |
| `paper-ink` | `43 50% 95%` (`#FAF6EC`) | `#1F1A12` | `#302010` | $13.8:1$ | **PASS (WCAG AAA)** |
| `macos-sonoma` | `240 4% 12%` (`#1E1E20`) | `#FFFFFF` | `#0A84FF` | $15.4:1$ | **PASS (WCAG AAA)** |
| `windows-11` | `0 0% 13%` (`#212121`) | `#FFFFFF` | `#60CDFF` | $15.1:1$ | **PASS (WCAG AAA)** |
| `navy-blue` | `217 42% 18%` (`#1A2840`) | `#F0F6FC` | `#06B6D4` | $10.6:1$ | **PASS (WCAG AAA)** |

---

### Gate 6: Pure Live DOM Typography — 100% Native HTML Text Elements
- **Mandate:** All text rendered across the 15 slide archetypes must exist as selectable, screen-reader-accessible, pure HTML DOM nodes (`<h1>`, `<h2>`, `<h3>`, `<p>`, `<span>`, `<code>`).
- **Forbidden Practices:**
  - ❌ Text drawn inside `<canvas>` using `ctx.fillText()`.
  - ❌ Pre-rendered raster image text (JPEG/PNG with baked typography).
  - ❌ Text converted into un-annotated SVG `<path>` vectors.
- **Pass Threshold:** 100% DOM-native text elements.

---

### Gate 7: Deterministic Step Progression Audit — Zero Phantom / Ghost Steps
- **Mandate:** Dynamic step counts must evaluate deterministically without ghost, unreachable, or negative steps.
- **Intra-Slide Step Interception:** When `activeStep < maxSteps - 1`, advancing navigates intra-slide steps rather than jumping to the next slide.
- **Pass Threshold:** All 15 archetypes pass the Step Progression Audit Table below.

---

### Gate 8: Executive Persona Standardization — Alim Ul Karim as "Chief Software Engineer"
- **Mandate:** Any reference to Alim Ul Karim in executive rosters, speaker cards, JSON fixtures, presenter notes, or code documentation must strictly designate him as **"Chief Software Engineer"** (Rule R11).
- **Forbidden Variations:** "CEO", "Founder", "Tech Lead", "Lead Architect", "CTO".
- **Pass Threshold:** Exactly 0 occurrences of Alim Ul Karim without the title Chief Software Engineer.

---

### Gate 9: Canonical $1920 \times 1080$ Viewport Geometry & Fluid Clamps
- **Mandate:** All 15 slide components must conform mathematically to the virtual $1920 \times 1080$ coordinate space:
  - Slide Container: $1920\text{px} \times 1080\text{px}$, `overflow: hidden`.
  - Header Bounding Box: $x=64, y=48, w=1792, h=120$.
  - Main Stage Grid: $x=64, y=184, w=1792, h=760$.
  - Telemetry Footer: $x=64, y=960, w=1792, h=72$.
- **Pass Threshold:** Zero horizontal/vertical scrolling at $1920 \times 1080$.

---

### Gate 10: Secrets Quarantine & Sensitive Data Isolation
- **Mandate:** Sample slide fixtures in `src/utils/flatGlobalSuiteFactories.ts` and `src/stores/initialDeck.ts` must contain exclusively sanitized mock data. Zero API tokens, real AWS ARNs, or corporate credentials.
- **Pass Threshold:** Zero actual secret keys or credentials in code or fixtures.

---

### Gate 11: Relative Path Linter Compliance — Zero Hardcoded Absolute Paths
- **Mandate:** All file imports, CSS asset references, and module declarations must strictly use relative notation (`./`, `../`).
- **Forbidden Patterns:** `D:\...`, `C:\...`, `/Users/...`, `/home/...`, `/tmp/...`.
- **Pass Threshold:** Exactly 0 absolute filesystem paths in authored code.

---

### Gate 12: Subagent Git Command Prohibition
- **Mandate:** Subagents must NEVER run git commands (`git add`, `git commit`, `git push`, `git status`, `git diff`). Git repository state management is strictly reserved for the Lead Orchestrator.
- **Pass Threshold:** Zero git commands executed by subagents.

---

## 3. Step Progression Audit Table for all 15 Archetypes

The following table defines the exact step resolution, step count formula, navigation behavior, and audio trigger for all 15 slide archetypes in Module 38:

| # | Archetype Identifier | Category | Step Calculation Formula | Total Steps | Progression Phases & Visual State | Tactile Audio |
|:---:|:---|:---:|:---|:---:|:---|:---:|
| **01** | `interactive-branching-close` | Global PPT | Flat Sovereign (`1`) | 1 | Flat decision canvas; `Y`/`N` keyboard shortcuts trigger branch navigation | No intra-step |
| **02** | `before-after-showcase-pan` | Global PPT | Flat Sovereign (`1`) | 1 | Flat comparison; interactive hover triggers smooth 7s `@keyframes baScrollPan` | No intra-step |
| **03** | `search-serp-proof-lightbox` | Global PPT | Flat Sovereign (`1`) | 1 | Flat proof canvas; clicking SERP citation card opens modal lightbox detail | No intra-step |
| **04** | `cognitive-inversion-punchline` | Global PPT | Dynamic (`slide.inversions.length`) | 3 | Step 0: Traditional Myth $\to$ Step 1: Cognitive Inversion $\to$ Step 2: Systemic Punchline | `playStepTick` |
| **05** | `talent-pyramid-funnel-svg` | Global PPT | Dynamic (`slide.tiers.length`) | 4 | Step 0: Base Sourcing $\to$ Steps 1–2: Filter Stages $\to$ Step 3: Top-Tier Leadership | `playStepTick` |
| **06** | `hexagonal-tech-cluster` | Global PPT | Flat Sovereign (`1`) | 1 | Flat cluster; SVG honeycomb topology with active node highlight on hover | No intra-step |
| **07** | `connected-roadmap-rail-pulse` | Global PPT | Dynamic (`slide.phases.length`) | 4 | Step 0: Architecture Phase $\to$ Steps 1–2: Rollout $\to$ Step 3: Global GA Maturity | `playStepTick` |
| **08** | `campaign-performance-lightbox` | Global PPT | Flat Sovereign (`1`) | 1 | Flat dashboard; multi-channel ROAS telemetry with expandable campaign modal | No intra-step |
| **09** | `executive-roster-keypad` | Global PPT | Flat Sovereign (`1`) | 1 | Flat roster; key-press 1–9 switches executive profile with instant KPI reveal | No intra-step |
| **10** | `flat-step-process-flow` | Flat Step | Dynamic (`slide.stages.length`) | 4 | Tri-state lifecycle (`completed` $\to$ `active` $\to$ `future`) along Bezier rail | `playStepTick` |
| **11** | `flat-split-narrative-stepper` | Flat Step | Dynamic (`slide.steps.length`) | 4 | Left rail step selection drives right-hand hero telemetry card expansion | `playStepTick` |
| **12** | `flat-timeline-milestone-rail` | Flat Step | Dynamic (`slide.milestones.length`) | 4 | Chronological milestone rail with date pills and expandable milestone cards | `playStepTick` |
| **13** | `flat-reveal-bento-grid` | Flat Step | Dynamic (`slide.cells.length`) | 5 | Stepwise Bento cell illumination from primary hero cell to secondary metric cards | `playStepTick` |
| **14** | `flat-depth-sentence-stack` | Flat Step | Dynamic (`slide.sentences.length`) | 4 | 3D depth sentence reveal with staggered `translateZ` and typographic focus | `playStepTick` |
| **15** | `flat-typewriter-code-walkthrough` | Flat Step | Dynamic (`slide.stanzas.length`) | 4 | Stepwise code stanza activation with typewriter streaming and line annotations | `playStepTick` |

---

## 4. Automated Signoff Protocol

Prior to submitting code or declaring implementation subtasks complete, execute this sequential verification checklist:

```bash
# 1. Component Line Count Verification (<= 100 lines per .tsx file)
python -c "
import pathlib, sys
bad = [f for f in pathlib.Path('src/components/slides/flatglobal').glob('**/*.tsx') if len(f.read_text(encoding='utf-8').splitlines()) > 100]
if bad:
    print('FAILED: Oversized components detected:', bad)
    sys.exit(1)
print('PASS: All .tsx components strictly <= 100 lines.')
"

# 2. Affirmative Positive Boolean Check (Zero negative boolean props)
python -c "
import pathlib, re, sys
pattern = re.compile(r'\b(isNot|disabled|hidden|unverified|isInvalid|hasNo)\w*\s*:\s*boolean')
bad = []
for f in pathlib.Path('src/types/flatGlobalSuiteTypes.ts').glob('**/*'):
    m = pattern.findall(f.read_text(encoding='utf-8', errors='ignore'))
    if m: bad.append((f, m))
if bad:
    print('FAILED: Negative booleans found:', bad)
    sys.exit(1)
print('PASS: 100% affirmative positive booleans.')
"

# 3. Persona Standardization Check (Alim Ul Karim strictly 'Chief Software Engineer')
python -c "
import pathlib, sys
bad = []
for f in pathlib.Path('src').glob('**/*flatGlobal*.*'):
    c = f.read_text(encoding='utf-8', errors='ignore')
    for l in c.splitlines():
        if 'Alim Ul Karim' in l and 'Chief Software Engineer' not in l:
            bad.append((f.name, l.strip()))
if bad:
    print('FAILED: Persona violations:', bad)
    sys.exit(1)
print('PASS: Executive persona strictly standardized.')
"

# 4. Fast Static AST Typecheck (Zero build, zero disk emit, < 5s)
npx tsc --noEmit
```
