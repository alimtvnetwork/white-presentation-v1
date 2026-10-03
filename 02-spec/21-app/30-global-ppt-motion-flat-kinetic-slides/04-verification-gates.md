# 04-Quality Verification Gates: 12-Dimensional Automated Compliance Matrix

> **Specification Identifier:** `02-spec/21-app/30-global-ppt-motion-flat-kinetic-slides/04-verification-gates`  
> **Status:** `APPROVED CANONICAL SPECIFICATION`  
> **Target Release:** `v1.4.0`  
> **Author:** Spec Author 02  
> **Domain:** Automated Quality Assurance, Static AST Verification, Contrast Auditing, Path Hygiene & Operational Safety  

---

## 1. System Vision & Governance Protocol

To guarantee zero regression, seamless parallel subagent orchestration, and pristine visual fidelity across the White Presentation System, all newly authored or refactored slide components, themes, stores, and utilities must pass an automated **12-Dimensional Quality Verification Matrix**.

Every dimension represents an inviolable quality gate with strict mathematical thresholds, static AST checks, and automated terminal verification procedures:

```
12-Dimensional Automated Quality Verification Matrix:
├── Structural Discipline & Static Typing
│   ├── Gate 1: Component Sizing Cap (<= 100 Lines per .tsx Slide)
│   ├── Gate 2: Affirmative Boolean Rules via src/utils/booleanGuards.ts
│   ├── Gate 3: Persona Standardization (Alim Ul Karim as 'Chief Software Engineer')
│   └── Gate 4: Pure Live DOM Typography (Zero Rasterized Text)
├── Kinetic Interaction & Geometry
│   ├── Gate 5: Active Step Progression & Zero Phantom Steps
│   ├── Gate 6: WCAG 2.1 AA Contrast Ratios (Light/Dark Compliance)
│   ├── Gate 7: Secrets Quarantine & Forbidden Strings
│   └── Gate 8: Relative Path Linter Compliance (Zero Absolute Paths)
└── Operational Hygiene & Safety
    ├── Gate 9: Atomic Commits via GitMap (Standard Hyphen Format)
    ├── Gate 10: Canonical 1920x1080 Canvas Bounds (16:9 Viewport)
    ├── Gate 11: Subagent Concurrency & Lock Collision Prevention
    └── Gate 12: Acoustic Safety & WebAudio Synthesizer Ducking
```

---

## 2. The 12 Quality Verification Gates

### Gate 1: Component Sizing Cap ($\le 100$ Lines per `.tsx` Slide File)
- **Constraint:** Every slide component located in `src/components/slides/*.tsx` must strictly contain **100 or fewer physical lines of code**.
- **Architectural Decomposition Protocol:**
  1. **Factory Extraction:** Offload mock data structures, telemetry fixtures, and default slide models into dedicated factory utilities (e.g., `src/utils/extendedSlideFactories.ts`, `src/utils/enterpriseSlideFactories.ts`).
  2. **Leaf Component Modularization:** Extract nested cards, list items, comparison columns, audio waveforms, interactive meters, and orbital bubbles into dedicated leaf components within archetype subdirectories:
     - `src/components/slides/vpn/`
     - `src/components/slides/transcript/`
     - `src/components/slides/llm/`
     - `src/components/slides/gravity/`
     - `src/components/slides/seo/`
     - `src/components/slides/staff/`
     - `src/components/slides/craft/`
     - `src/components/slides/cadence/`
     - `src/components/slides/moat/`
     - `src/components/slides/feedback/`
     - `src/components/slides/poll/`
     - `src/components/slides/qa/`
     - `src/components/slides/embed/`
     - `src/components/slides/countdown/`
     - `src/components/slides/executive/`
  3. **Lean Container Rule:** The top-level `.tsx` slide file must serve strictly as a compositional orchestrator that consumes store state (`activeStep`, `theme`), defines layout geometry, and delegates rendering to child leaf components.
- **Automated Verification Command:**
  ```powershell
  Get-ChildItem -Path "src/components/slides/*.tsx" | ForEach-Object {
    $lines = (Get-Content $_.FullName | Measure-Object -Line).Lines
    if ($lines -gt 100) { 
      Write-Error "Line Count Failure: $($_.Name) has $lines lines (max allowed: 100)" 
    }
  }
  ```
- **Pass Threshold:** Exactly 0 `.tsx` slide files exceeding 100 lines.

---

### Gate 2: Affirmative Boolean Rules via `src/utils/booleanGuards.ts`
- **Constraint:** Zero raw boolean negations (`!is*`, `!has*`, `!can*`, `!should*`) and zero explicit boolean truth comparisons (`== true`, `=== true`, `== false`, `=== false`).
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

### Gate 3: Persona Standardization (Alim Ul Karim as 'Chief Software Engineer')
- **Constraint:** Throughout all slide decks, metadata fixtures, presenter profile cards, header overlays, and speaker biographies, **Alim Ul Karim** must be strictly and consistently designated as **"Chief Software Engineer"**.
- **Strictly Forbidden Persona Drift:**
  - ❌ Forbidden: "CEO", "Founder", "Tech Lead", "Full-Stack Dev", "Lead Architect", "Staff Engineer", "Director of Engineering".
- **Verification Scope:**
  - Data fixtures: `src/data/*.ts`, `src/utils/*Factories.ts`
  - Slide components: `src/components/slides/**/*.tsx`
  - Store registries: `src/stores/*.ts`
- **Automated Verification Command:**
  ```powershell
  Select-String -Path "src/**/*.ts", "src/**/*.tsx" -Pattern "Alim Ul Karim.*(CEO|Founder|Tech Lead|Lead Architect|Staff Engineer)"
  ```
- **Pass Threshold:** 100% adherence; exactly 0 instances of non-standardized persona designations.

---

### Gate 4: Pure Live DOM Typography (Zero Rasterized Text)
- **Constraint:** Zero rasterized bitmap images (PNG, JPEG, WebP, GIF) containing baked typography. Zero typography rendered onto opaque `<canvas>` 2D bitmap contexts.
- **Architectural Typography Mandate:**
  1. **100% Live Selectable DOM:** All slide titles, kickers, subtitles, paragraph leads, metrics, statistics, table cells, code listings, and speaker quotes must render as native HTML elements (`<h1>`, `<h2>`, `<h3>`, `<p>`, `<span>`, `<code>`, `<div>`).
  2. **Accessibility & Selection:** Text must remain selectable, searchable by browser Ctrl+F, and navigable via screen readers (WCAG 2.1 Criterion 1.4.5: Images of Text).
  3. **Fluid Typography Scaling:** All text sizing must utilize fluid viewport clamp tokens (`clamp(min, preferred, max)`) anchored to the 1920x1080 canvas coordinate space.
  4. **Dynamic Character Shading:** Multi-color headline gradients must use `shadeTextByCharacter()` producing inline styled `<span>` elements with live HSL color values rather than baked image masks.
- **Automated Verification Command:**
  - Audit all `<img>` tags in JSX to confirm image assets reference only approved vector SVG icons or photographic portraits:
  ```powershell
  Select-String -Path "src/components/**/*.tsx" -Pattern "<img[^>]+(title|text|typography|banner)[^>]*>"
  ```
- **Pass Threshold:** 100% pure live DOM text; exactly 0 rasterized typography artifacts.

---

### Gate 5: Active Step Progression & Zero Phantom Steps
- **Constraint:** Every multi-step presentation slide (`stepCount > 1`) must subscribe to and consume `activeStep` directly from the central deck store (`useDeckStore`).
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

### Gate 6: WCAG 2.1 AA Contrast Ratios (Light/Dark Compliance)
- **Constraint:** All 10 Global PPT Master Color Themes must achieve a minimum contrast ratio ($C_R$) satisfying **WCAG 2.1 Level AA**:
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
  - Execute automated contrast calculation on all 10 themes and capsule variants in `src/themes/gradientTokens.ts`.
- **Pass Threshold:** 100% WCAG 2.1 AA compliance across all 10 themes.

---

### Gate 7: Secrets Quarantine & Forbidden Strings
- **Constraint:** Zero hardcoded private tokens, credentials, API keys, passwords, or personal access tokens in any committed file.
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

### Gate 8: Relative Path Linter Compliance (Zero Absolute Paths)
- **Constraint:** Zero absolute filesystem paths in any source file, test fixture, or markdown specification.
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

### Gate 9: Atomic Commits via GitMap (Standard Hyphen Format)
- **Constraint:** All git commits executed by the lead orchestrator must follow the strict **GitMap Hyphen-Separated Standard**:
  ```bash
  gitmap cpf "<scope> - <concise imperative description>"
  ```
- **Strict Syntax Rules:**
  1. **Structure:** Exactly `<scope> - <description>` with a space-hyphen-space separator.
  2. **Scope Names:** Must be one of `presentation`, `spec`, `theme`, `slides`, `audio`, `store`, `docs`, `fix`.
  3. **Verb Mood:** Strictly imperative, present tense ("synthesize", "implement", "refactor", "enforce").
  4. **Punctuation Ban:** Zero trailing periods, exclamation marks, or question marks.
  5. **Conversational Ban:** Zero conversational prefixes (e.g., `Update:`, `Fixed:`, `Merge branch...`).
- **Example Compliant Commit:**
  `gitmap cpf "presentation - synthesize 10 global ppt themes and 15 flat kinetic slide archetypes"`
- **Pass Threshold:** 100% of commits in the git log adhere strictly to this syntax.

---

### Gate 10: Canonical 1920x1080 Canvas Bounds (16:9 Viewport)
- **Constraint:** All presentation components, slide layouts, absolute coordinate systems, and background overlays must be calibrated to the canonical **$1920 \times 1080$ virtual canvas** ($16:9$ aspect ratio).
- **Responsive Geometry Mandate:**
  1. **Virtual Aspect Ratio:** Fixed $1920\text{px} \times 1080\text{px}$ stage dimensions wrapped in an auto-scaling transform container:
     $$\text{scaleFactor} = \min\left(\frac{W_{\text{window}}}{1920}, \frac{H_{\text{window}}}{1080}\right)$$
  2. **Zero Overflow Scrollbars:** The canvas container must enforce `overflow: hidden`. The browser window must display zero horizontal or vertical scrollbars during presentation mode.
  3. **Safe Margin Envelope:** All critical content (headlines, cards, metrics, kickers) must sit within a $48\text{px}$ horizontal and $36\text{px}$ vertical inner safe zone margin.
- **Pass Threshold:** Pixel-perfect 16:9 geometry without layout clipping across any display resolution.

---

### Gate 11: Subagent Concurrency & Lock Collision Prevention
- **Constraint:** Worker subagents and parallel code generation agents must **NEVER** run git CLI commands (`git add`, `git commit`, `git push`, `git status`, `git diff`, `git checkout`, `git branch`).
- **Architectural Rationale:**
  - In a parallel multi-agent environment, running git CLI commands simultaneously creates immediate filesystem lock contention on `.git/index.lock`.
  - Staging or committing from a subagent corrupts the working tree, produces race conditions, and crashes parallel execution pipelines.
  - Staging, committing, and pushing are strictly reserved for the single **Lead Orchestrator** at the final completion gate.
- **Automated Verification Command:**
  - Audit subagent conversation transcripts and execution logs to ensure zero `git *` commands were proposed or executed by workers:
  ```powershell
  # Verification of zero git CLI calls by subagents in transcripts
  Get-ChildItem -Path "brain/**/transcript*.jsonl" -ErrorAction SilentlyContinue | Select-String -Pattern "CommandLine.*git (add|commit|push|checkout)"
  ```
- **Pass Threshold:** Exactly 0 git CLI executions across all worker subagent transcripts.

---

### Gate 12: Acoustic Safety & WebAudio Synthesizer Ducking
- **Constraint:** All client-side synthesized acoustic feedback generated by `src/audio/soundEngine.ts` must strictly comply with hearing conservation standards and presentation ergonomics:
  1. **Master Volume Ceiling:** Master gain output clamped to $\le -12\text{ dB}$ ($0.40$ max linear gain factor).
  2. **Step Click Volume:** Intra-slide step clicks capped at $0.30$ linear gain.
  3. **Narration Ducking:** When presenter voice narration or microphone input is active (`isAudioActive = true`), sound effects attenuate automatically by $-14\text{ dB}$ ($0.20\times$ ducking factor).
  4. **Cooldown Rate-Limiting:** Synthesizer triggers must enforce strict anti-chatter cooldown windows:
     - Keystroke clicks: $\ge 45\text{ms}$
     - Intra-slide step clicks: $\ge 80\text{ms}$
     - Slide transitions: $\ge 120\text{ms}$
  5. **Pure Synthesis:** Zero external MP3, WAV, or OGG file dependencies; 100% pure native browser `AudioContext` synthesis.
- **Pass Threshold:** 100% compliance with gain ceilings, $-14\text{ dB}$ ducking attenuation, and cooldown timers.

---

## 3. Comprehensive 12-Dimensional Compliance Matrix

| Gate ID | Quality Dimension | Verification Target | Inspection Method | Inviolable Pass Threshold |
|:---:|:---|:---|:---|:---:|
| **G1** | **Component Sizing Cap** | `src/components/slides/*.tsx` | Physical line count scanner | $\le 100$ lines per slide file |
| **G2** | **Affirmative Booleans** | All `.ts` and `.tsx` source files | Regex AST pattern scanner | 0 raw `!is*` / `=== true` violations |
| **G3** | **Persona Standardization** | Data fixtures, slides, stores | String matching: "Alim Ul Karim" | Strictly 'Chief Software Engineer' |
| **G4** | **Pure DOM Typography** | JSX render trees & components | AST element audit (`<img text...>`) | 0 rasterized text artifacts |
| **G5** | **Step Progression** | Multi-step slide components | `useDeckStore` `activeStep` consumption | 100% slides consume `activeStep` |
| **G6** | **WCAG 2.1 AA Contrast** | 10 themes & `.capsule-*` badges | Relative luminance formula ($C_R$) | $C_R \ge 4.5:1$ (AA Pass) |
| **G7** | **Secrets Quarantine** | Source code, specs, configs | Regex token & key pattern scanner | Exactly 0 secrets detected |
| **G8** | **Relative Path Linter** | Imports, file references, specs | Regex scanner for drive letters/roots | Exactly 0 absolute paths |
| **G9** | **Atomic GitMap Commits** | Commit history log | GitMap commit syntax parser | Exact `scope - action` format |
| **G10**| **Canvas Bounds (16:9)** | Stage layout container | CSS bounding box & scale transform | Fixed $1920\times 1080$, 0 scrollbars |
| **G11**| **Subagent Concurrency** | Subagent transcripts & logs | Process & command auditor | 0 `git *` calls by worker agents |
| **G12**| **Acoustic Safety** | `src/audio/soundEngine.ts` | AudioContext gain & cooldown audit | $\le -12\text{ dB}$ gain, $-14\text{ dB}$ ducking |

---

## 4. Automated Execution Pipeline

The automated verification suite is executed sequentially by the Lead Orchestrator prior to staging and release:

```powershell
Write-Host "Executing 12-Dimensional Quality Verification Gate Suite..." -ForegroundColor Cyan

# 1. Slide Component Line Count Gate (<= 100 lines)
$oversized = Get-ChildItem -Path "src/components/slides/*.tsx" | Where-Object { 
  (Get-Content $_.FullName | Measure-Object -Line).Lines -gt 100 
}
if ($oversized) {
  Write-Error "Gate 1 FAIL: Oversized slides detected: $($oversized.Name)"
} else {
  Write-Host "Gate 1 PASS: All slides <= 100 lines." -ForegroundColor Green
}

# 2. Affirmative Boolean Evaluation Gate
$boolViolations = Select-String -Path "src/**/*.ts", "src/**/*.tsx" -Pattern "(!is[A-Z]|!has[A-Z]|=== true|=== false)"
if ($boolViolations) {
  Write-Error "Gate 2 FAIL: Boolean guard violations found: $($boolViolations.Count)"
} else {
  Write-Host "Gate 2 PASS: Zero raw boolean negations." -ForegroundColor Green
}

# 3. Persona Standardization Gate
$personaViolations = Select-String -Path "src/**/*.ts", "src/**/*.tsx" -Pattern "Alim Ul Karim.*(CEO|Founder|Tech Lead|Lead Architect)"
if ($personaViolations) {
  Write-Error "Gate 3 FAIL: Unstandardized persona titles found: $($personaViolations.Count)"
} else {
  Write-Host "Gate 3 PASS: Persona strictly standardized to 'Chief Software Engineer'." -ForegroundColor Green
}

# 4. Secrets Quarantine Gate
$secretsFound = Select-String -Path "src/**/*.*", "02-spec/**/*.*" -Pattern "(AKIA[0-9A-Z]{16}|ghp_[0-9a-zA-Z]{36})"
if ($secretsFound) {
  Write-Error "Gate 7 FAIL: Potential secrets found: $($secretsFound.Count)"
} else {
  Write-Host "Gate 7 PASS: Zero hardcoded secrets detected." -ForegroundColor Green
}

# 5. Relative Path Linter Gate
$pathViolations = Select-String -Path "src/**/*.ts", "src/**/*.tsx", "02-spec/**/*.md" -Pattern "([A-Za-z]:[\\/]|/(?:home|Users)/)"
if ($pathViolations) {
  Write-Error "Gate 8 FAIL: Absolute path references found: $($pathViolations.Count)"
} else {
  Write-Host "Gate 8 PASS: Zero absolute filesystem paths detected." -ForegroundColor Green
}
```

When all 12 quality gates return green with zero violations, the release candidate is certified for production deployment under canonical release `v1.4.0`.
