# 04-Quality Verification Gates: 12-Dimensional Automated Compliance Matrix

> **Specification Identifier:** `02-spec/21-app/31-global-ppt-motion-design-and-15-kinetic-archetypes/04-verification-gates`  
> **Status:** `APPROVED CANONICAL ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.5.0`  
> **Author:** Spec Author Subagent 02  
> **Created:** 2026-10-03  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  
> **Domain:** Automated Quality Assurance, Static AST Verification, Contrast Auditing, Path Hygiene, Rule R1 Zero Builds, CODE-RED-006R Line Cap & Operational Safety  

---

## 1. System Vision & Governance Protocol

To guarantee zero regression, seamless parallel subagent orchestration, and pristine visual fidelity across the White Presentation System, all newly authored or refactored slide components, themes, stores, and utilities must pass an automated **12-Dimensional Quality Verification Matrix**.

Every dimension represents an inviolable quality gate with strict mathematical thresholds, static AST checks, and automated terminal verification procedures:

```
12-Dimensional Automated Quality Verification Matrix:
├── Structural Discipline & Execution Safety
│   ├── Gate 1: Hard Rule CODE-RED-006R (<= 100 Lines per .tsx Component, Subcomponents in Sub-folders)
│   ├── Gate 2: Rule R1 Zero Builds or Full Test Suites (Total Ban on `npm run build`, `npm test` in Routine Turns)
│   ├── Gate 3: Fast Targeted Checks (Python Line Count Verification & `npx tsc --noEmit`)
│   └── Gate 4: Affirmative Boolean Rules via src/utils/booleanGuards.ts
├── Identity, Typography & Kinetic Interaction
│   ├── Gate 5: Persona Standardization (Alim Ul Karim as 'Chief Software Engineer')
│   ├── Gate 6: Pure Live DOM Typography (Zero Rasterized Text Graphics)
│   ├── Gate 7: Active Step Progression & Zero Phantom Steps (3-Phase Kinetic Lifecycle)
│   └── Gate 8: WCAG 2.1 AA Contrast Ratios (Light/Dark Compliance & Capsule Auto-Inversion)
└── Operational Hygiene & Safety
    ├── Gate 9: Secrets Quarantine & Forbidden Strings
    ├── Gate 10: Relative Path Linter Compliance (Zero Absolute Paths)
    ├── Gate 11: Atomic Commits via GitMap (Standard Hyphen Format)
    └── Gate 12: Canonical 1920x1080 Bounds, Subagent Concurrency & Acoustic Safety
```

---

## 2. Inviolable Quality Gates & Enforcement Rules

### Gate 1: Hard Rule CODE-RED-006R — Component Sizing Cap ($\le 100$ Physical Lines per `.tsx`)
- **Mandate:** Every React component (`.tsx`) located in `src/components/**/*.tsx` must strictly remain **100 or fewer physical lines of code**.
- **Decomposition Architecture Protocol:**
  1. **Subcomponent Folder Isolation:** Any complex slide archetype must decompose into dedicated subcomponents housed in a dedicated sub-folder (e.g., `src/components/slides/vpn/`, `src/components/slides/transcript/`, `src/components/slides/llm/`, `src/components/slides/gravity/`).
  2. **Data & Telemetry Extraction:** Default slide data models, telemetry streams, and mock fixtures must reside in dedicated factory utilities (e.g., `src/utils/extendedSlideFactories.ts`, `src/utils/enterpriseSlideFactories.ts`).
  3. **Pure Compositional Orchestrator:** The top-level `.tsx` slide file must serve strictly as a compositional orchestrator that consumes store state (`activeStep`, `theme`), defines grid geometry, and delegates rendering to child leaf components.
- **Python Fast Scanner Command:**
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

### Gate 2: Rule R1 Zero Builds or Full Test Suites — Ban on Heavy Verification
- **Mandate:** In routine development turns, bug fixes, component authoring, and specification reviews, running full project builds (`npm run build`, `pnpm build`, `vite build`) or running global test suites (`npm test`, `pnpm test`, `vitest run`) is **STRICTLY FORBIDDEN**.
- **Architectural Rationale:**
  1. Full project builds consume unnecessary CPU cycles, trigger disk I/O bottlenecks, and exhaust context windows with megabytes of compiler output.
  2. Large test suites cause lock timeouts and break parallel subagent execution.
  3. Lead Orchestrators and Subagents must rely entirely on **fast targeted static analysis** and AST-level checks.
- **Forbidden Commands in Routine Turns:**
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

### Gate 3: Fast Targeted Checks — Python Line Verification & `npx tsc --noEmit`
- **Mandate:** Type validation and architectural verification must complete in under 5 seconds using lightweight, targeted tooling.
- **Verification Tools:**
  1. **Python Line Counter:** High-speed, zero-dependency filesystem walk that inspects physical line counts across all `.tsx` and `.ts` files.
  2. **Direct TypeScript Compiler Check:** `npx tsc --noEmit` to verify type completeness, interface compliance, and import resolution without generating output bundles.
- **Targeted Commands:**
  ```powershell
  # Fast Typecheck
  npx tsc --noEmit

  # Fast Line Count Verification Script
  python 03-ai-scripts/verify-component-lines.py
  ```
- **Pass Threshold:** Exit code `0` from `npx tsc --noEmit` with zero diagnostic errors.

---

### Gate 4: Affirmative Boolean Rules via `src/utils/booleanGuards.ts`
- **Mandate:** Zero raw boolean negations (`!is*`, `!has*`, `!can*`, `!should*`) and zero explicit boolean truth comparisons (`== true`, `=== true`, `== false`, `=== false`).
- **Standardized Guard Helpers:**
  All conditional evaluations must use affirmative semantic guards imported from `src/utils/booleanGuards.ts`:
  ```typescript
  // ❌ Prohibited Anti-Patterns:
  if (!isDark) { ... }
  if (hasGlow === true) { ... }
  if (!item || !item.label) { ... }
  const isNotActive = !isActive;

  // ✅ Mandated Architectural Patterns:
  if (isFalse(isDark)) { ... }
  if (isTrue(hasGlow)) { ... }
  if (isUndefinedOrNull(item) || isBlank(item.label)) { ... }
  const isInactive = isFalse(isActive);
  ```
- **Affirmative Interface Property Naming:**
  All TypeScript interfaces and state properties must declare affirmative boolean names:
  - ❌ Prohibited: `hasNoShadow`, `disabled`, `isNotSelected`, `unlocked`
  - ✅ Required: `hasShadow`, `isEnabled`, `isSelected`, `isLocked`
- **Automated Verification Command:**
  ```powershell
  Select-String -Path "src/**/*.ts", "src/**/*.tsx" -Pattern "(!is[A-Z]|!has[A-Z]|!can[A-Z]|!should[A-Z]|===\s*true|==\s*true|===\s*false|==\s*false)"
  ```
- **Pass Threshold:** Exactly 0 raw boolean negation or explicit comparison violations.

---

### Gate 5: Persona Standardization (Alim Ul Karim as 'Chief Software Engineer')
- **Mandate:** Throughout all slide decks, metadata fixtures, presenter profile cards, header overlays, and speaker biographies, **Alim Ul Karim** must be strictly and consistently designated as **"Chief Software Engineer"**.
- **Strictly Forbidden Persona Drift:**
  - ❌ Forbidden: "CEO", "Founder", "Tech Lead", "Full-Stack Dev", "Lead Architect", "Staff Engineer", "Director of Engineering".
- **Verification Scope:**
  - Data fixtures: `src/data/*.ts`, `src/utils/*Factories.ts`
  - Slide components: `src/components/slides/**/*.tsx`
  - Store registries: `src/stores/*.ts`
- **Automated Verification Command:**
  ```powershell
  Select-String -Path "src/**/*.ts", "src/**/*.tsx" -Pattern "Alim Ul Karim.*(CEO|Founder|Tech Lead|Lead Architect|Staff Engineer|Director)"
  ```
- **Pass Threshold:** 100% adherence; exactly 0 instances of non-standardized persona designations.

---

### Gate 6: Pure Live DOM Typography (Zero Rasterized Text)
- **Mandate:** Zero rasterized bitmap images (PNG, JPEG, WebP, GIF) containing baked typography. Zero typography rendered onto opaque `<canvas>` 2D bitmap contexts.
- **Architectural Typography Mandate:**
  1. **100% Live Selectable DOM:** All slide titles, kickers, subtitles, paragraph leads, metrics, statistics, table cells, code listings, and speaker quotes must render as native HTML elements (`<h1>`, `<h2>`, `<h3>`, `<p>`, `<span>`, `<code>`, `<div>`).
  2. **Accessibility & Selection:** Text must remain selectable, searchable by browser Ctrl+F, and navigable via screen readers (WCAG 2.1 Criterion 1.4.5: Images of Text).
  3. **Fluid Typography Scaling:** All text sizing must utilize fluid viewport clamp tokens (`clamp(min, preferred, max)`) anchored to the 1920x1080 canvas coordinate space.
  4. **Dynamic Character Shading:** Multi-color headline gradients must use `shadeTextByCharacter()` producing inline styled `<span>` elements with live HSL color values rather than baked image masks.
- **Automated Verification Command:**
  ```powershell
  Select-String -Path "src/components/**/*.tsx" -Pattern "<img[^>]+(title|text|typography|banner)[^>]*>"
  ```
- **Pass Threshold:** 100% pure live DOM text; exactly 0 rasterized typography artifacts.

---

### Gate 7: Active Step Progression & Zero Phantom Steps
- **Mandate:** Every multi-step presentation slide (`stepCount > 1`) must subscribe to and consume `activeStep` directly from the central deck store (`useDeckStore`).
- **Zero Phantom Steps Mandate:**
  - If a slide declares `stepCount = N` in its archetype schema or factory, the UI must render exactly $N$ distinct visual states.
  - Advancing steps via keyboard (Right Arrow, Space) or HUD click must visibly update intra-slide content before advancing to the next global slide index.
  - Every step must partition items into the 3-phase kinetic progression lifecycle:
    - `completed` ($index < activeStep$): Opacity $0.75$, Scale $0.99$, desaturation $10\%$.
    - `active` ($index === activeStep$): Opacity $1.00$, Scale $1.02$, glowing halo (`layoutId="active-step-halo"`), spring snap.
    - `future` ($index > activeStep$): Opacity $0.40$, Scale $0.97$, optical blur $1.25\text{px}$, pointer-events disabled.
- **Automated Verification Command:**
  ```powershell
  Select-String -Path "src/components/slides/*.tsx" -Pattern "activeStep"
  ```
- **Pass Threshold:** 100% of multi-step slide components consume and visually reflect `activeStep`.

---

### Gate 8: WCAG 2.1 AA Contrast Ratios (Light/Dark Compliance)
- **Mandate:** All 10 Global PPT Master Color Themes must achieve a minimum contrast ratio ($C_R$) satisfying **WCAG 2.1 Level AA**:
  - **Normal Body Text ($\le 20\text{px}$):** $C_R \ge 4.5:1$
  - **Large Text / Headlines ($\ge 24\text{px}$ bold or $\ge 32\text{px}$ regular):** $C_R \ge 3.0:1$
- **Mathematical Relative Luminance Formula:**
  $$C_R = \frac{L_1 + 0.05}{L_2 + 0.05}$$
  where $L_1$ is the relative luminance of the lighter color and $L_2$ is the relative luminance of the darker color.
- **Capsule Inversion Verification:**
  - Light themes (`paper-ink`, `github-light`) must automatically apply `.capsule-*` contrast inversions:
    - `.capsule-gold` inverts from `#EAB308` (fails on white: $1.9:1$) to `#9B6805` (passes on white: $5.2:1$).
    - `.capsule-cream` inverts to deep navy chip `#0A1128` ($18.5:1$).
    - `.capsule-ember` inverts to deep crimson `#BE123C` ($5.8:1$).
- **Automated Verification Command:**
  - Run contrast matrix validation on all 10 themes and capsule variants in `src/themes/gradientTokens.ts`.
- **Pass Threshold:** 100% WCAG 2.1 AA compliance across all 10 themes.

---

### Gate 9: Secrets Quarantine & Forbidden Strings
- **Mandate:** Zero hardcoded private tokens, credentials, API keys, passwords, or personal access tokens in any committed file.
- **Quarantine Scope:**
  - Source code (`src/**/*.ts`, `src/**/*.tsx`, `src/**/*.less`)
  - Specifications (`02-spec/**/*.md`)
  - Configuration files (`package.json`, `tsconfig.json`, `vite.config.ts`)
- **Forbidden Patterns:**
  - AWS access keys: `AKIA[0-9A-Z]{16}`
  - GitHub personal access tokens: `ghp_[0-9a-zA-Z]{36}`, `github_pat_[0-9a-zA-Z_]{82}`
  - Generic Bearer tokens: `Bearer [a-zA-Z0-9_\-\.]{25,}`
  - Hardcoded passwords: `password\s*[:=]\s*['"][^'"]+['"]`
- **Automated Verification Command:**
  ```powershell
  Select-String -Path "src/**/*.*", "02-spec/**/*.*" -Pattern "(AKIA[0-9A-Z]{16}|ghp_[0-9a-zA-Z]{36}|github_pat_[0-9a-zA-Z_]{20,}|Bearer\s+[a-zA-Z0-9_\-\.]{25,}|password\s*[:=]\s*['\"][^'\"]+['\"])"
  ```
- **Pass Threshold:** Exactly 0 credentials or secrets patterns detected.

---

### Gate 10: Relative Path Linter Compliance (Zero Absolute Paths)
- **Mandate:** Zero absolute filesystem paths in any source file, test fixture, or markdown specification.
- **Architectural Rationale:**
  Hardcoding absolute paths (e.g., `X:\path\...`, `/root/user/...`) breaks cross-platform builds, corrupts CI/CD runners, violates repository portability, and leaks host environment telemetry.
- **Mandated Syntax:**
  - Internal TypeScript module imports: Relative paths (`./`, `../`) or root-relative aliases (`@/`).
  - Documentation and specification links: Markdown relative links (`[file](01-overview.md)` or `[spec](../../02-spec/...)`).
  - Asset URLs: Root-relative public paths (`/assets/...`) or imported module paths.
- **Forbidden Patterns:**
  - Windows drive letters: `[A-Za-z]:[\\/]`
  - Unix user directories: `/(?:home|Users)/`
- **Automated Verification Command:**
  ```powershell
  Select-String -Path "src/**/*.ts", "src/**/*.tsx", "02-spec/**/*.md" -Pattern "([A-Za-z]:[\\/]|/(?:home|Users)/)"
  ```
- **Pass Threshold:** Exactly 0 absolute path references.

---

### Gate 11: Atomic Commits via GitMap (Standard Hyphen Format)
- **Mandate:** All git commits executed by the lead orchestrator must follow the strict **GitMap Hyphen-Separated Standard**:
  ```bash
  gitmap cpf "<scope> - <concise imperative description>"
  ```
- **Strict Syntax Rules:**
  1. **Structure:** Exactly `<scope> - <description>` with a space-hyphen-space separator.
  2. **Scope Names:** Must be one of `presentation`, `spec`, `theme`, `slides`, `audio`, `store`, `docs`, `fix`.
  3. **Verb Mood:** Strictly imperative, present tense ("synthesize", "implement", "refactor", "enforce").
  4. **Punctuation Ban:** Zero trailing periods, exclamation marks, or question marks.
  5. **Conversational Ban:** Zero conversational prefixes (e.g., `Update:`, `Fixed:`, `Merge branch...`).
- **Pass Threshold:** 100% of commits in the git log adhere strictly to this syntax.

---

### Gate 12: Canonical 1920x1080 Bounds, Subagent Concurrency & Acoustic Safety
- **Mandates:**
  1. **Canonical 16:9 Geometry:** Virtual $1920\times 1080$ stage dimensions wrapped in an auto-scaling transform container with `overflow: hidden` and zero scrollbars.
  2. **Subagent Concurrency:** Worker subagents must **NEVER** run git CLI commands (`git add`, `git commit`, `git push`, `git checkout`). Only the Lead Orchestrator commits.
  3. **Acoustic Safety:**
     - Master gain output clamped to $\le -12\text{ dB}$ ($0.40$ max linear factor).
     - Intra-slide step clicks capped at $0.30$ linear gain.
     - Narration ducking: $-14\text{ dB}$ ($0.20\times$ ducking factor) when speech is active.
     - Cooldown anti-chatter timers: keystroke $\ge 45\text{ms}$, step click $\ge 80\text{ms}$, slide transition $\ge 120\text{ms}$.
     - Pure WebAudio synthesis: zero external MP3/WAV file dependencies.
- **Pass Threshold:** 100% compliance across canvas scaling, subagent git isolation, and acoustic safety envelopes.

---

## 3. Comprehensive Acceptance Criteria Matrix

| Gate ID | Quality Dimension | Verification Target | Inspection Method | Inviolable Pass Threshold |
|:---:|:---|:---|:---|:---:|
| **G1** | **CODE-RED-006R Line Cap** | `src/components/**/*.tsx` | Python line count scanner | $\le 100$ lines per `.tsx` component |
| **G2** | **Rule R1 Zero Builds** | Terminal invocation history | Shell command auditor | 0 `npm run build` or full test runs |
| **G3** | **Fast Targeted Checks** | Whole repository codebase | `npx tsc --noEmit` & line scripts | Zero TypeScript compiler errors |
| **G4** | **Affirmative Booleans** | All `.ts` and `.tsx` source files | Regex AST pattern scanner | 0 raw `!is*` / `=== true` violations |
| **G5** | **Persona Standardization** | Data fixtures, slides, stores | String matching: "Alim Ul Karim" | Strictly 'Chief Software Engineer' |
| **G6** | **Pure DOM Typography** | JSX render trees & components | AST element audit (`<img text...>`) | 0 rasterized text artifacts |
| **G7** | **Step Progression** | Multi-step slide components | `useDeckStore` `activeStep` consumption | 100% slides consume `activeStep` |
| **G8** | **WCAG 2.1 AA Contrast** | 10 themes & `.capsule-*` badges | Relative luminance formula ($C_R$) | $C_R \ge 4.5:1$ (AA Pass) |
| **G9** | **Secrets Quarantine** | Source code, specs, configs | Regex token & key pattern scanner | Exactly 0 secrets detected |
| **G10**| **Relative Path Linter** | Imports, file references, specs | Regex scanner for drive letters/roots | Exactly 0 absolute paths |
| **G11**| **Atomic GitMap Commits** | Commit history log | GitMap commit syntax parser | Exact `scope - action` format |
| **G12**| **Acoustic & Canvas Safety** | Stage layout & `soundEngine.ts` | CSS bounding box & AudioContext audit | $1920\times 1080$, $\le -12\text{ dB}$, 0 worker `git *` |

---

## 4. Automated Execution Pipeline

The automated verification suite is executed sequentially prior to staging and final certification:

```powershell
Write-Host "Executing 12-Dimensional Quality Verification Gate Suite..." -ForegroundColor Cyan

# 1. Slide Component Line Count Gate (CODE-RED-006R <= 100 lines)
$oversized = Get-ChildItem -Path "src/components" -Recurse -Filter "*.tsx" | Where-Object { 
  (Get-Content $_.FullName | Measure-Object -Line).Lines -gt 100 
}
if ($oversized) {
  Write-Error "Gate 1 FAIL: Oversized components detected: $($oversized.Name)"
} else {
  Write-Host "Gate 1 PASS: All components strictly <= 100 lines." -ForegroundColor Green
}

# 2. Fast Targeted TypeScript Check
npx tsc --noEmit
if ($LASTEXITCODE -ne 0) {
  Write-Error "Gate 3 FAIL: TypeScript compilation errors detected."
} else {
  Write-Host "Gate 3 PASS: Zero TypeScript compilation errors." -ForegroundColor Green
}

# 3. Affirmative Boolean Evaluation Gate
$boolViolations = Select-String -Path "src/**/*.ts", "src/**/*.tsx" -Pattern "(!is[A-Z]|!has[A-Z]|=== true|=== false)"
if ($boolViolations) {
  Write-Error "Gate 4 FAIL: Boolean guard violations found: $($boolViolations.Count)"
} else {
  Write-Host "Gate 4 PASS: Zero raw boolean negations." -ForegroundColor Green
}

# 4. Persona Standardization Gate
$personaViolations = Select-String -Path "src/**/*.ts", "src/**/*.tsx" -Pattern "Alim Ul Karim.*(CEO|Founder|Tech Lead|Lead Architect)"
if ($personaViolations) {
  Write-Error "Gate 5 FAIL: Unstandardized persona titles found: $($personaViolations.Count)"
} else {
  Write-Host "Gate 5 PASS: Persona strictly standardized to 'Chief Software Engineer'." -ForegroundColor Green
}

# 5. Secrets Quarantine Gate
$secretsFound = Select-String -Path "src/**/*.*", "02-spec/**/*.*" -Pattern "(AKIA[0-9A-Z]{16}|ghp_[0-9a-zA-Z]{36})"
if ($secretsFound) {
  Write-Error "Gate 9 FAIL: Potential secrets found: $($secretsFound.Count)"
} else {
  Write-Host "Gate 9 PASS: Zero hardcoded secrets detected." -ForegroundColor Green
}

# 6. Relative Path Linter Gate
$pathViolations = Select-String -Path "src/**/*.ts", "src/**/*.tsx", "02-spec/**/*.md" -Pattern "([A-Za-z]:[\\/]|/(?:home|Users)/)"
if ($pathViolations) {
  Write-Error "Gate 10 FAIL: Absolute path references found: $($pathViolations.Count)"
} else {
  Write-Host "Gate 10 PASS: Zero absolute filesystem paths detected." -ForegroundColor Green
}
```

When all 12 quality gates return green with zero violations, the release candidate is certified for production deployment under canonical release `v1.5.0`.
