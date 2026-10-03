# Subtask Plan 04: 12-Dimensional Static Verification Gates

> **Subtask Identifier:** `.ai-memory/plans/subtasks/18-presentation-global-ppt-themes-and-15/04-static-verification-gates.md`  
> **Parent Task:** [18-presentation-global-ppt-themes-and-15](../../pending/18-presentation-global-ppt-themes-and-15.md)  
> **Assigned Owner:** Worker Subagent / Quality Engineer  
> **Owned Files:** `linter-scripts/verify-modern-slide-archetypes.py`  
> **Target Release:** `v1.8.0`  
> **Status:** `PLAN-READY`  
> **Author:** Spec Subagent 02  
> **Specification Reference:** [02-component-spec.md](../../../02-spec/21-app/18-presentation-global-ppt-themes-and-15/02-component-spec.md)  

---

## 1. Objective & Strategic Scope

This subtask governs the creation and operationalization of `linter-scripts/verify-modern-slide-archetypes.py`. This standalone, sub-second Python static verification tool audits the codebase against the **12-Dimensional Automated Static Quality Verification Matrix** established in `02-component-spec.md`.

It enforces **Rule R1 (Zero Builds or Full Test Suites in Routine Turns)** by using direct AST inspection, regex pattern matching, and file-scoped checks to guarantee that all 15 Modern Slide Archetypes (Archetypes 31 to 45), stylesheets, and contracts remain 100% compliant without triggering slow compiler emissions or heavy integration test suites.

---

## 2. The 12-Dimensional Quality Gates Breakdown

The script implements 12 isolated verification functions, each returning a tuple `(is_passed: bool, message: str)`:

```
12 Verification Gates:
├── Gate 1:  Hard Rule CODE-RED-006R (<= 100 physical lines per .tsx component)
├── Gate 2:  Rule R1 Zero Heavy Build/Test Invocations (ban on heavy commands)
├── Gate 3:  Fast File-Scoped Checks (Sub-5s `npx tsc --noEmit` & static checks)
├── Gate 4:  100% Affirmative Positive Boolean Naming (`src/utils/booleanGuards.ts`)
├── Gate 5:  Executive Persona Standardization (Alim Ul Karim strictly 'Chief Software Engineer')
├── Gate 6:  Pure Live DOM Typography (Zero canvas fillText/strokeText, zero rasterized text)
├── Gate 7:  Active Step Progression & Zero Phantom Steps (3-Phase Kinetic Lifecycle)
├── Gate 8:  WCAG AAA / AA Contrast Verification (Zero Yellow-on-Light, Inverted Badges)
├── Gate 9:  Secrets Quarantine & Sensitive Data Isolation (Sanitized Mock Fixtures)
├── Gate 10: Relative Path Linter Compliance (Zero Hardcoded Absolute Filesystem Paths)
├── Gate 11: GitMap Atomic Hyphenated Commit Message Validator
└── Gate 12: Canonical 1920x1080 Viewport Geometry & Coordinate Budget Conformance
```

---

## 3. Detailed Technical Specifications for Each Gate

### Gate 1: Hard Rule CODE-RED-006R Line Cap Scanner
- **Target:** All `.tsx` files in `src/components/slides/**/*.tsx` and `src/components/archetypes/**/*.tsx`.
- **Logic:** Reads each file, counts physical newline-separated lines.
- **Assertion:** `len(lines) <= 100`.
- **Reporting:** Reports exact file names and line counts of any files $> 100$ lines.

### Gate 2: Rule R1 Zero Heavy Build/Test Verification
- **Target:** Local command history, shell scripts, and CI runners.
- **Logic:** Confirms that routine verification scripts never invoke `npm run build`, `pnpm build`, `vite build`, `npm test`, or `vitest run`.
- **Assertion:** Routine verification is strictly static and sub-second.

### Gate 3: Fast File-Scoped Checks
- **Target:** TypeScript compilation contracts via `npx tsc --noEmit`.
- **Logic:** Executes `npx tsc --noEmit` with a $5,000\text{ms}$ timeout.
- **Assertion:** Exit code `0` and execution time $\le 5\text{s}$.

### Gate 4: 100% Affirmative Positive Boolean AST Scanner
- **Target:** `src/types/**/*.ts` and `src/components/**/*.tsx`.
- **Logic:** Regex scan for negative polarity properties and double negatives:
  ```python
  NEGATIVE_BOOLEAN_PATTERN = re.compile(r'\b(isNot[A-Z]\w*|disabled\s*:|hidden\s*:|isInvalid\s*:|unverified\s*:|hasNo[A-Z]\w*)\b')
  ```
- **Assertion:** Exactly 0 matches across modern slide types and components.

### Gate 5: Executive Persona Title Validator
- **Target:** `src/**/*.ts`, `src/**/*.tsx`, and `02-spec/**/*.md`.
- **Logic:** Scans for occurrences of "Alim Ul Karim" and validates following title attribute:
  ```python
  # Deterministic title extraction logic avoiding lookahead backtracking:
  m = re.search(r'Alim\s+Ul\s+Karim(?:\s*,\s*|\s*\()([^,\)\n\r]+)', line)
  if m:
      title = m.group(1).strip()
      is_valid_title = (title == "Chief Software Engineer")
  ```
- **Assertion:** Exactly 0 occurrences with unauthorized titles ("Lead Architect", "Founder", "CEO").

### Gate 6: Pure Live DOM Typography AST Scanner
- **Target:** `src/components/slides/**/*.tsx`.
- **Logic:** Scans for Canvas 2D text calls: `\.fillText\s*\(` or `\.strokeText\s*\(`.
- **Assertion:** Exactly 0 occurrences. Text must render via live DOM elements (`<h1>`, `<p>`, `<span>`, `<code>`).

### Gate 7: Active Step Progression & Zero Phantom Steps
- **Target:** `src/utils/stepProgression.ts` and `src/utils/modernSlideFactories.ts`.
- **Logic:** Verifies that `calculateModernSlideStepCount` handles all 15 archetype types:
  - Multi-step kinetic archetypes (31 to 38) evaluate to `items.length` or stage count ($\ge 1$).
  - Flat bento archetypes (39 to 45) evaluate to exactly `1`.
- **Assertion:** All 15 types registered and tested with zero phantom steps.

### Gate 8: WCAG AAA / AA Contrast Verification (Zero Yellow-on-Light)
- **Target:** `src/styles/variables.less`, `src/styles/presentation.less`, `src/themes/gradientTokens.ts`.
- **Logic:** Checks for low-contrast yellow text on light surfaces. Confirms light theme capsule rules use `#78350F` (burnished amber) and `#BE123C` (deep crimson).
- **Assertion:** Zero un-inverted yellow text on light backgrounds.

### Gate 9: Secrets Quarantine Scanner
- **Target:** `src/utils/modernSlideFactories.ts` and all mock slide fixtures.
- **Logic:** Scans for high-entropy tokens, AWS keys (`AKIA[0-9A-Z]{16}`), bearer tokens, or un-sanitized private keys.
- **Assertion:** All fixtures use sanitized IDs (`slide-31-*`) and placeholder Merkle hashes (`0x9b4a...`).

### Gate 10: Relative Path Linter Compliance
- **Target:** `02-spec/**/*.md`, `src/**/*.ts`, `src/**/*.tsx`.
- **Logic:** Scans for hardcoded absolute filesystem paths:
  ```python
  ABS_PATH_PATTERN = re.compile(r'(?:[A-Za-z]:[\\/]|/(?:home|var|tmp|Users)[\\/])')
  ```
- **Assertion:** Exactly 0 occurrences of absolute filesystem paths.

### Gate 11: GitMap Atomic Hyphenated Commit Message Validator
- **Target:** GitMap commit message strings.
- **Logic:** Regex validation: `^(feat|fix|docs|refactor|test|chore)-[a-z0-9]+-[a-z0-9-]+$`.
- **Assertion:** 100% adherence to hyphen-separated format.

### Gate 12: Canonical 1920x1080 Viewport Geometry & Coordinate Budget
- **Target:** Slide wrapper styles and layout coordinate constants.
- **Logic:** Verifies that root containers adhere to $1920 \times 1080$, and safe area budgets ($x \in [80, 1840]\text{px}$, $y \in [60, 1040]\text{px}$) are respected.
- **Assertion:** Zero coordinate clipping or inner presentation scrollbars.

---

## 4. Script Architecture Blueprint: `verify-modern-slide-archetypes.py`

```python
#!/usr/bin/env python3
"""
Canonical Quality Verification Gate Checker for 15 Modern Slide Archetypes.
Adheres strictly to Rule R1 (Zero Builds / Zero Heavy Tests) and CODE-RED-006R.
"""

import sys
import re
import time
import argparse
import pathlib
from typing import List, Tuple, Dict, Any

REPO_ROOT = pathlib.Path(__file__).resolve().parents[1]
COMPONENTS_DIR = REPO_ROOT / "src" / "components" / "slides"
TYPES_DIR = REPO_ROOT / "src" / "types"
STYLES_DIR = REPO_ROOT / "src" / "styles"
SPECS_DIR = REPO_ROOT / "02-spec" / "21-app" / "18-presentation-global-ppt-themes-and-15"

# --- Gate 1: Line Cap ---
def check_gate_01_line_cap(verbose: bool = False) -> Tuple[bool, str]: ...

# --- Gate 2: Zero Heavy Builds ---
def check_gate_02_zero_heavy_builds(verbose: bool = False) -> Tuple[bool, str]: ...

# --- Gate 3: Fast Static Type Checks ---
def check_gate_03_fast_static_checks(verbose: bool = False) -> Tuple[bool, str]: ...

# --- Gate 4: Affirmative Positive Booleans ---
def check_gate_04_affirmative_booleans(verbose: bool = False) -> Tuple[bool, str]: ...

# --- Gate 5: Persona Standardization ---
def check_gate_05_persona_standardization(verbose: bool = False, fix: bool = False) -> Tuple[bool, str]: ...

# --- Gate 6: Pure Live DOM Typography ---
def check_gate_06_pure_dom_typography(verbose: bool = False) -> Tuple[bool, str]: ...

# --- Gate 7: Active Step Progression ---
def check_gate_07_step_progression(verbose: bool = False) -> Tuple[bool, str]: ...

# --- Gate 8: WCAG Contrast & Zero Yellow-on-Light ---
def check_gate_08_wcag_contrast(verbose: bool = False) -> Tuple[bool, str]: ...

# --- Gate 9: Secrets Quarantine ---
def check_gate_09_secrets_quarantine(verbose: bool = False) -> Tuple[bool, str]: ...

# --- Gate 10: Relative Paths ---
def check_gate_10_relative_paths(verbose: bool = False) -> Tuple[bool, str]: ...

# --- Gate 11: GitMap Atomic Commits ---
def check_gate_11_gitmap_commits(verbose: bool = False) -> Tuple[bool, str]: ...

# --- Gate 12: Viewport Geometry & Coordinate Budget ---
def check_gate_12_viewport_geometry(verbose: bool = False) -> Tuple[bool, str]: ...
```

### CLI Interface & Options
```
python linter-scripts/verify-modern-slide-archetypes.py [OPTIONS]

Options:
  --gate N         Run only Gate N (1 through 12).
  --verbose, -v    Display detailed per-file output and scan listings.
  --json           Emit structured JSON output for CI ingestion.
  --fix-persona    Automatically correct non-standard persona occurrences.
  --help, -h       Show help message and exit.
```

---

## 5. Step-by-Step Implementation Blueprint

### Step 5.1: Create `linter-scripts/verify-modern-slide-archetypes.py`
- Write the complete, production-grade Python script with all 12 gate checkers.
- Ensure dependency-free execution using standard Python 3 libraries (`sys`, `re`, `pathlib`, `time`, `argparse`, `json`).
- Ensure Windows and Linux cross-platform path compatibility via `pathlib.Path`.

### Step 5.2: Test Script Locally
- Run `python linter-scripts/verify-modern-slide-archetypes.py --verbose`.
- Verify all 12 gates pass cleanly on current repository state.
- Ensure runtime completes in $< 2,000\text{ms}$.

### Step 5.3: Integrate with Linter Suite
- Document script execution in `linter-scripts/readme.md` or CI dispatch scripts.

---

## 6. Risk Analysis & Mitigation

- **Risk:** `npx tsc --noEmit` takes longer than $5\text{s}$ on cold cache.
- **Mitigation:** Gate 3 runs with a configurable timeout and caches previous type check results if `--fast` flag is passed.
- **Risk:** False positives on regex secret scans with synthetic test IDs.
- **Mitigation:** Patterns explicitly allow synthetic IDs matching `slide-*`, `test-*`, `mock-*`, and deterministic hex fixtures (`0x*`).

---

## 7. Acceptance Criteria Checklist

- [ ] `linter-scripts/verify-modern-slide-archetypes.py` authored with complete implementations of all 12 gates.
- [ ] Dependency-free Python 3 code using only standard library modules.
- [ ] Supports CLI flags `--gate`, `--verbose`, `--json`, and `--fix-persona`.
- [ ] Passes on current codebase with exit code `0`.
- [ ] Execution completes in under $2\text{s}$ (well within the $5\text{s}$ budget).
- [ ] Zero invocations of banned heavy build or test commands (Rule R1 compliant).
