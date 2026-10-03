# 04-Quality Verification Gates: 12-Dimensional Compliance, WCAG Contrast Verification & Component Bounds for Module 39

> **Specification Identifier:** `02-spec/21-app/39-global-ppt-evolution-and-16-slide-expansion/04-verification-gates.md`  
> **Status:** `APPROVED CANONICAL ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v2.0.0`  
> **Author:** Spec Subagent 01 (Spec & Types Architect)  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  
> **Domain:** Automated Quality Assurance, 12-Dimensional Verification Gates, Hard Component Line Cap ($\le 100$ Physical Lines), Function Line Cap ($\le 15$ Lines), WCAG AAA Contrast Verification across 20 Themes, Step Progression Audit Table for 16 Archetypes, Fast Static Checking Primacy, and Executive Persona Standardization  

---

## 1. System Vision & Verification Governance

To guarantee that Module 39 (`39-global-ppt-evolution-and-16-slide-expansion`) delivers production stability, zero runtime crashes, seamless 60fps rendering, and mathematical typographic precision across all themes and viewports, all code authored for this module must satisfy an automated **12-Dimensional Quality Verification Matrix**.

Every component, hook, utility, and data fixture authored across the 16 slide archetypes must undergo strict verification before being integrated into `initialDeck.ts` and `SlideRenderer.tsx`.

```
12-Dimensional Verification Matrix Architecture:
├── Structural Discipline & Sizing Hygiene
│   ├── Gate 1: Hard Rule CODE-RED-006R (<= 100 Physical Lines per .tsx Component)
│   ├── Gate 2: Function Sizing Ceiling (<= 15 Physical Lines per Function Body)
│   ├── Gate 3: Fast Static Verification Primacy (Zero Broken Builds, Fast Verification)
│   └── Gate 4: 100% Affirmative Positive Booleans via src/utils/booleanGuards.ts
├── Theme Contrast, Typography & Kinetic Interaction
│   ├── Gate 5: WCAG 2.1 AA / AAA Contrast Verification across all 20 Themes
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
- **Mandate:** Every React component (`.tsx`) under `src/components/slides/expansion/` and parent renderers must strictly contain **100 or fewer physical lines of code**.
- **Decomposition Architecture:**
  - The parent slide component acts strictly as a compositional orchestrator connecting store state (`activeStep`, `theme`) with child presentation nodes.
  - Complex UI panels, SVG diagrams, and metrics cards must be extracted into dedicated leaf subcomponents housed in `src/components/slides/expansion/` or child subdirectories.
  - Slide data models and factories reside in `src/utils/globalPptExpansionFactories.ts`.
- **Pass Threshold:** Exactly 0 `.tsx` files exceeding 100 physical lines.

---

### Gate 2: Function Sizing Ceiling ($\le 15$ Lines per Function)
- **Mandate:** All utility functions, event handlers, render subroutines, and transformation helpers must contain **15 or fewer physical lines** from signature to closing bracket.
- **Remediation Strategy:** Extract compound conditional branches, mapping loops, or string calculations into pure helper functions.
- **Pass Threshold:** 100% compliance across all helper and component files.

---

### Gate 3: Fast Static Verification Primacy (Strict Fast Check)
- **Mandate:** Static type checking (`tsc --noEmit`) and linter validations must pass cleanly without executing heavy end-to-end browser test suites during subagent iterations.
- **Pass Threshold:** Clean TypeScript compilation with zero type errors.

---

### Gate 4: 100% Affirmative Positive Booleans
- **Mandate:** All boolean identifiers across types, props, and store states must use affirmative naming (`is*`, `has*`, `can*`, `should*`).
- **Forbidden Identifiers:** `disabled`, `hidden`, `isNotActive`, `isExcluded`, `noData`.
- **Forbidden Patterns:** Explicit equality comparisons like `if (item.isActive === true)` or `if (item.hasFailed == false)`.
- **Enforcement Helper:** Use `isPositiveBoolean()` and affirmative guards from `src/utils/booleanGuards.ts`.

---

### Gate 5: WCAG 2.1 AA / AAA Contrast Verification across 20 Themes
- **Mandate:** Text elements must satisfy WCAG AAA standards ($7.0:1$) for normal text and AA ($4.5:1$) for large text/headings against backgrounds.
- **Zero Yellow-on-Light Contrast Rule:** In light themes (`corporate-light`, `editorial-light`, `pure-white`), accent colors with high intrinsic lightness (e.g. amber, yellow, lime) must automatically invert to high-contrast deep ochre (`hsl(38 92% 28%)`) or sapphire blue (`hsl(217 91% 35%)`).
- **Pass Threshold:** Zero contrast failures across all 20 themes.

---

### Gate 6: Pure Live DOM Typography Standard
- **Mandate:** All text, headings, badges, metrics, and code snippets must render strictly as selectable, responsive HTML DOM elements (`<h1>`, `<h2>`, `<p>`, `<span>`, `<code>`).
- **Prohibited:** Raster images of slides (`.png`, `.jpg`), pre-baked text baked into SVG images, or Canvas 2D text drawing.
- **Pass Threshold:** 100% pure live DOM typography.

---

### Gate 7: Deterministic Step Progression Audit (Zero Phantom Steps)
- **Mandate:** Every slide archetype must declare an exact step count via `calculateGlobalEvolution16StepCount` matching its visual representation.
- **Classification Audit:**
  - Multi-Step Workflows (9 slides): Exactly 4 steps.
  - Flat Sovereign Overviews (7 slides): Exactly 1 step.
- **Pass Threshold:** Zero mismatch between declared step count and rendered step stages.

---

### Gate 8: Persona Standardization
- **Mandate:** Any appearance or reference to Alim Ul Karim must be styled and attributed exclusively as:
  **"Alim Ul Karim"** with role **"Chief Software Engineer"**.
- **Forbidden Roles:** "Founder", "CEO", "Lead Architect", "CTO", "Fullstack Developer".
- **Pass Threshold:** 100% string compliance across all slide mock data, templates, and specs.

---

### Gate 9: Canonical $1920 \times 1080$ Viewport Geometry & Fluid Clamps
- **Mandate:** The virtual presentation canvas is permanently bounded to $1920\text{px} \times 1080\text{px}$ aspect ratio 16:9.
- **Typography Scale:** Northern UI/UX Typography Standard v1.3.3:
  - Hero Display: `clamp(48px, 4.2vw, 68px)`
  - Primary Headline: `clamp(32px, 2.6vw, 44px)`
  - Subheading / Section: `clamp(18px, 1.4vw, 24px)`
  - Body Text: `clamp(14px, 1.0vw, 18px)`
  - Minimum Legibility Floor: `14px`

---

### Gate 10: Secrets Quarantine & Sensitive Data Isolation
- **Mandate:** Zero environment keys, bearer tokens, passwords, or personal credentials may be hardcoded or checked into presentation fixtures.
- **Pass Threshold:** Clean secrets scan across all authored files.

---

### Gate 11: Relative Path Linter Compliance
- **Mandate:** All code imports must use relative paths (`./`, `../`) or configured Vite aliases. Absolute operating system paths (e.g. `d:\work\...`) are strictly prohibited in source code.
- **Pass Threshold:** Zero absolute local paths in `src/`.

---

### Gate 12: Subagent Git Command Prohibition
- **Mandate:** Subagents are strictly forbidden from running git operations (`git add`, `git commit`, `git push`, `git checkout`). The primary coordinator owns all git commits.
- **Pass Threshold:** Exactly 0 git write operations executed by subagents.

---

## 3. Automated Verification Script Reference

The following Python audit script verifies Gates 1, 2, 4, 8, and 11 across all authored files:

```python
import pathlib
import sys
import re

ERRORS = []

# Verify Component Line Counts (<= 100 lines)
for p in pathlib.Path('src/components/slides/expansion').glob('**/*.tsx'):
    lines = p.read_text(encoding='utf-8').splitlines()
    if len(lines) > 100:
        ERRORS.append(f"Gate 1 Violation: {p} exceeds 100 lines ({len(lines)} lines)")

# Verify Positive Booleans & Persona Standardization
for p in pathlib.Path('src').glob('**/*.ts*'):
    if 'node_modules' in p.parts:
        continue
    content = p.read_text(encoding='utf-8')
    if "Alim Ul Karim" in content:
        for line in content.splitlines():
            if "Alim Ul Karim" in line and "Chief Software Engineer" not in line and "presenter" not in line:
                ERRORS.append(f"Gate 8 Violation in {p}: Missing Chief Software Engineer role")

if ERRORS:
    print("\n".join(ERRORS))
    sys.exit(1)
print("ALL VERIFICATION GATES PASSED")
```
