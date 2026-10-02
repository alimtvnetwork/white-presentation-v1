# 04-Quality Verification Gates: 12-Dimensional Automated Compliance Matrix

> **Specification Identifier:** `02-spec/21-app/29-corporate-ppt-kinetic-flat-slides/04-verification-gates`  
> **Status:** `APPROVED CANONICAL SPECIFICATION`  
> **Target Release:** `v1.3.0`  
> **Author:** Spec Author 02  
> **Updated:** 2026-10-02  
> **Domain:** Automated Quality Assurance, Static AST Verification, Contrast Auditing & Operational Safety  

---

## 1. System Vision & Governance Protocol

To guarantee zero regression, seamless parallel subagent execution, and pristine visual fidelity across the White Presentation System, all newly authored or refactored components, themes, stores, and utilities must pass an automated **12-Dimensional Quality Verification Matrix**.

Every dimension represents an inviolable quality gate with strict mathematical thresholds and automated verification procedures:

```
Quality Governance Framework:
├── Structural & Code Sizing Discipline
│   ├── Gate 1: Strict Component Sizing Gate (<= 100 Lines per .tsx Slide)
│   ├── Gate 2: Positive Boolean Evaluation Gate (Zero Raw Negations & == true)
│   ├── Gate 3: File Cap & Leaf Utility Segregation Gate (<= 300 Lines Limit)
│   └── Gate 4: Subagent Concurrency & Process Isolation Gate (Zero Git CLI Commands)
├── Ground Truth Typography & Persona Integrity
│   ├── Gate 5: Pure Live DOM Typography Gate (Zero Rasterized Text)
│   └── Gate 6: Persona Standardization Gate ('Chief Software Engineer' Canon)
├── Responsive Geometry & Kinetic Interaction
│   ├── Gate 7: Virtual Canvas Geometry Gate (1920x1080 Viewport)
│   ├── Gate 8: Step Progression Verification Gate (100% Active Step Consumption)
│   └── Gate 9: Acoustic Feedback Attenuation & Safety Gate (WebAudio Limits)
└── Security, Theming & Repository Hygiene
    ├── Gate 10: Light/Dark Contrast Verification Gate (WCAG 2.1 AA Compliance)
    ├── Gate 11: Secrets & Credential Quarantine Gate (Zero Private Keys/Tokens)
    └── Gate 12: Atomic Commit Hygiene Gate (Clean GitMap Hyphen Format)
```

---

## 2. The 12 Quality Verification Gates

### Gate 1: Strict Component Sizing Gate ($\le 100$ Lines per `.tsx` Slide File)
- **Constraint:** Every slide component in `src/components/slides/*.tsx` must strictly contain **100 or fewer physical lines of code**.
- **Architectural Decomposition Mandate:**
  1. Offload mock datasets and default slide configs into factory files (`src/utils/enterpriseSlideFactories.ts`, `src/utils/slideArchetypeFactories.ts`).
  2. Extract cards, columns, tabs, and child widgets into dedicated leaf components within subdirectories (e.g., `src/components/slides/rail/`, `src/components/slides/architecture/`).
  3. Ensure the parent slide component focuses solely on layout composition, active step consumption, and theme token bindings.
- **Automated Verification:**
  ```powershell
  Get-ChildItem -Path "src/components/slides/*.tsx" | ForEach-Object {
    $lines = (Get-Content $_.FullName | Measure-Object -Line).Lines
    if ($lines -gt 100) { Write-Error "$($_.Name) exceeds 100 lines: $lines lines" }
  }
  ```
- **Pass Threshold:** Exactly 0 `.tsx` slide files exceeding 100 lines.

---

### Gate 2: Positive Boolean Evaluation Gate
- **Constraint:** Zero raw boolean negations (`!is*`, `!has*`, `!can*`, `!should*`) and zero explicit boolean comparisons (`== true`, `=== true`, `== false`, `=== false`).
- **Remediation via `src/utils/booleanGuards.ts`:**
  - Raw boolean negations must be replaced with affirmative helper functions:
    ```typescript
    // Instead of: !isDark
    isFalse(isDark)
    // Instead of: !hasGlow
    hasNot(hasGlow)
    // Instead of: !item || !item.name
    isUndefinedOrNull(item) || isBlank(item.name)
    ```
  - State variables and interface properties must always use affirmative semantic prefixes:
    - ❌ Prohibited: `hasNoShadow`, `disabled`, `isNotActive`, `unselected`
    - ✅ Required: `hasShadow`, `isEnabled`, `isActive`, `isSelected`
- **Automated Verification:**
  ```powershell
  Select-String -Path "src/**/*.ts", "src/**/*.tsx" -Pattern "(!is[A-Z]|!has[A-Z]|==\s*true|===\s*true|==\s*false|===\s*false)"
  ```
- **Pass Threshold:** Exactly 0 raw boolean negation or explicit truth comparison violations.

---

### Gate 3: Persona Standardization Gate (Alim Ul Karim Canon)
- **Constraint:** Throughout all slides, data fixtures, presenter biographies, footers, and metadata arrays, **Alim Ul Karim** must be strictly designated as **"Chief Software Engineer"**.
- **Strictly Prohibited:** Legacy or informal variations such as "CEO", "Founder", "Tech Lead", "Full-Stack Dev", or generic executive titles.
- **Verification Rule:**
  Any slide showcasing the executive profile (e.g., `CEOSlide.tsx`, `KeyPlayerBioSlide.tsx`, `LeadershipDuoSlide.tsx`, `ClosingCtaShowcaseSlide.tsx`) must bind Alim Ul Karim's title directly to `"Chief Software Engineer"`.
- **Automated Verification:**
  ```powershell
  # Search for Alim Ul Karim coupled with incorrect titles
  Select-String -Path "src/**/*.ts", "src/**/*.tsx" -Pattern "Alim Ul Karim.*(CEO|Founder|Lead Architect)"
  ```
- **Pass Threshold:** 100% adherence; 0 instances of unstandardized persona titles.

---

### Gate 4: Pure Live DOM Typography Gate
- **Constraint:** Zero rasterized text images (PNG, JPEG, WebP, GIF) containing baked typography. Zero typography rendered onto opaque `<canvas>` rendering contexts.
- **Architectural Mandate:**
  - 100% of presentation titles, hero metrics, labels, quotes, descriptions, and code snippets must render as selectable, accessible live HTML DOM nodes (`<h1>`, `<h2>`, `<h3>`, `<p>`, `<span>`, `<div>`, `<code>`).
  - Typography must scale fluidly via CSS clamp rules anchored to the 1920x1080 canvas.
  - Decorative character gradients must use `shadeTextByCharacter()` producing live `<span>` elements with inline HSL styles.
- **Automated Verification:**
  - Inspect all `<img>` tags to ensure `src` points strictly to approved SVG icons, presenter photos, or client logos. No image with baked text.
- **Pass Threshold:** 100% pure live DOM text; 0 rasterized text artifacts.

---

### Gate 5: Step Progression Verification Gate
- **Constraint:** 100% of multi-step presentation slides must consume `activeStep` directly from the central presentation store (`useDeckStore`).
- **Zero Phantom Steps Mandate:**
  - If a slide declares $N$ progressive milestones, cards, or bullet reveals in its schema (`stepCount = N`), the component must actively partition items into the 3-phase lifecycle:
    - Phase 1: `past` ($index < activeStep$) $\to$ `pres-step-past` (opacity $0.45$, scale $0.98$).
    - Phase 2: `active` ($index === activeStep$) $\to$ `pres-step-active` (opacity $1.00$, scale $1.02$, `layoutId="active-step-halo"`).
    - Phase 3: `future` ($index > activeStep$) $\to$ `pres-step-future` (opacity $0.18$, scale $0.96$, blur $1.25\text{px}$).
  - Advancing steps in the HUD must visually transition intra-slide content before advancing the global slide index.
- **Automated Verification:**
  ```powershell
  # Audit that every slide implementing multi-step layouts imports and uses activeStep
  Select-String -Path "src/components/slides/*.tsx" -Pattern "activeStep"
  ```
- **Pass Threshold:** Zero multi-step slides ignoring `activeStep`.

---

### Gate 6: Light/Dark Contrast Verification Gate (WCAG 2.1 AA Compliance)
- **Constraint:** All 10 Global PPT Master Color Themes must achieve a minimum contrast ratio of **$4.5:1$ for normal text** ($\le 20\text{px}$) and **$3.0:1$ for large text/headlines** ($\ge 24\text{px}$ bold or $\ge 32\text{px}$ regular) against their respective container surfaces across both dark and light modes.
- **Mathematical Relative Luminance ($L$) & Contrast Ratio ($C_R$):**
  $$C_R = \frac{L_1 + 0.05}{L_2 + 0.05} \ge 4.5$$
- **Automatic Capsule Inversion:**
  - Light themes (`paper-ink`, `github-light`) must invert dark HUD navigation pills to high-contrast dark slate capsule wrappers (`rgba(15, 23, 42, 0.95)`) to maintain crystal-clear visibility regardless of slide canvas brightness.
- **Automated Verification:**
  - Execute contrast validation across all 10 theme palettes defined in `src/themes/gradientTokens.ts`.
- **Pass Threshold:** 100% WCAG 2.1 AA compliance across all 10 themes with zero contrast warnings.

---

### Gate 7: Secrets & Credential Quarantine Gate
- **Constraint:** Absolute quarantine against private tokens, API keys, passwords, bearer authorization tokens, or internal corporate credentials.
- **Scope:**
  - Source files (`src/**/*.ts`, `src/**/*.tsx`, `src/**/*.css`).
  - Specifications (`02-spec/**/*.md`).
  - Task memory and logs (`.ai-memory/**/*.md`, `.ai-memory/**/*.json`).
- **Automated Verification:**
  ```powershell
  Select-String -Path "src/**/*.*", "02-spec/**/*.*" -Pattern "(AKIA[0-9A-Z]{16}|ghp_[0-9a-zA-Z]{36}|bearer\s+[a-zA-Z0-9_\-\.]{20,}|password\s*[:=]\s*['\"][^'\"]+)"
  ```
- **Pass Threshold:** Exactly 0 credentials or secret patterns detected.

---

### Gate 8: File Cap & Leaf Utility Segregation Gate ($\le 300$ Lines Limit)
- **Constraint:** TypeScript utility, store, and type files (`src/utils/*.ts`, `src/stores/*.ts`, `src/types/*.ts`) must not exceed **300 physical lines of code**.
- **Exception Clause:**
  - Large dictionary registries (such as the 10-theme master palette dictionary `src/themes/gradientTokens.ts` or comprehensive test fixture factories) may contain up to 430 lines only when an explicit top-of-file authorization comment is present:
    `// lint-allow: file-size reason="authentic 10-theme corporate palette dictionary" max=430`
  - Core type files (`src/types/presentation.ts`) must offload slide interfaces into leaf type modules (`src/types/archetypes.ts`, `src/types/expandedArchetypes.ts`, `src/types/enterpriseArchetypes.ts`).
- **Automated Verification:**
  ```powershell
  Get-ChildItem -Path "src/utils/*.ts", "src/types/*.ts" | ForEach-Object {
    $lines = (Get-Content $_.FullName | Measure-Object -Line).Lines
    if ($lines -gt 300) {
      $hasAllow = (Get-Content $_.FullName -TotalCount 2 | Select-String "lint-allow: file-size")
      if (-not $hasAllow) { Write-Error "$($_.Name) exceeds 300 lines without directive: $lines" }
    }
  }
  ```
- **Pass Threshold:** 0 unauthorized files exceeding 300 physical lines.

---

### Gate 9: Atomic Commit Hygiene Gate
- **Constraint:** All commit messages generated by the lead orchestrator must follow the strict **GitMap Hyphen-Separated Standard**:
  `gitmap cpf "<scope> - <concise imperative description>"`
- **Rules:**
  - Must never use conversational fluff, punctuation suffixes (`.`), or redundant prefixes (`Merge...`, `Commit: ...`).
  - Example: `gitmap cpf "presentation - synthesize global ppt themes motion and 15 slide archetypes with flat progression"`
- **Pass Threshold:** 100% compliance on every committed changeset.

---

### Gate 10: Virtual Canvas Geometry Gate (1920x1080 Viewport)
- **Constraint:** All slide coordinate systems, bounding boxes, and absolute positions must be calibrated to the reference **$1920 \times 1080$ virtual canvas** (16:9 aspect ratio).
- **Responsive Preservation:**
  - The presentation viewport wraps the canvas inside a responsive CSS transform scale container (`transform: scale(scaleFactor)`).
  - Content must never produce horizontal or vertical browser scrollbars on the presentation stage.
- **Pass Threshold:** Pixel-perfect 16:9 aspect ratio preservation across all screen sizes without layout clipping.

---

### Gate 11: Subagent Concurrency & Process Isolation Gate
- **Constraint:** Subagents and parallel workers must **NEVER** run git CLI commands (`git add`, `git commit`, `git push`, `git status`, `git diff`, `git checkout`).
- **Rationale:**
  - Running git commands in parallel workers causes immediate index lock contention (`.git/index.lock`), corrupting the working tree and crashing parallel multi-agent runs.
  - Staging, committing, and pushing are strictly reserved for the single lead orchestrator at the completion gate.
- **Pass Threshold:** Exactly 0 git CLI executions across all subagent worker transcripts.

---

### Gate 12: Acoustic Feedback Attenuation & Safety Gate
- **Constraint:** Synthesized WebAudio events must strictly adhere to auditory ergonomics and safety thresholds:
  1. Master volume clamped to $\le -12\text{ dB}$ ($0.40$ gain factor).
  2. Step click tone volume capped at $0.30$ gain factor.
  3. Automated $-14\text{ dB}$ audio ducking during speech narration or active media playback.
  4. Cooldown rate-limiting ($\ge 45\text{ms}$ keystroke, $\ge 80\text{ms}$ step click, $\ge 120\text{ms}$ slide whoosh) to prevent acoustic distortion or speaker clipping.
- **Pass Threshold:** 100% compliance with volume clamping and cooldown rate limits.

---

## 3. Automated Verification Matrix Summary

| Gate ID | Quality Dimension | Verification Target | Automated Verification Tool / Method | Pass Criteria |
|:---:|:---|:---|:---|:---:|
| **G1** | Strict Component Sizing | `src/components/slides/*.tsx` | Physical line count scanner | $\le 100$ lines per slide |
| **G2** | Positive Boolean Evaluation | All `.ts` and `.tsx` files | Regex AST scanner (`!is*`, `== true`) | Exactly 0 violations |
| **G3** | Persona Standardization | All slide files & stores | String matching for "Alim Ul Karim" | Strictly 'Chief Software Engineer' |
| **G4** | Pure DOM Typography | JSX render trees | AST element inspection | 0 rasterized text images |
| **G5** | Step Progression | Multi-step slides | `useDeckStore` `activeStep` audit | 100% slides consume `activeStep` |
| **G6** | Light/Dark Contrast | 10 theme palettes | WCAG 2.1 relative luminance calculation | $C_R \ge 4.5:1$ (AA Pass) |
| **G7** | Secrets Quarantine | Entire codebase & specs | Regex scanner for credentials/tokens | Exactly 0 secrets detected |
| **G8** | File Cap Discipline | Utility & type files | Physical line count scanner | $\le 300$ lines (unless lint-allowed) |
| **G9** | Atomic Commit Format | Commit log | GitMap commit parser | Exact `scope - action` syntax |
| **G10**| Virtual Canvas Geometry | Stage container | CSS 16:9 bounding box audit | $1920 \times 1080$ with GPU scaling |
| **G11**| Subagent Isolation | Worker execution logs | Process & command auditor | 0 `git *` calls by workers |
| **G12**| Acoustic Safety | `soundEngine.ts` | AudioContext gain & cooldown check | Max $-12\text{ dB}$, $\ge 45\text{ms}$ cooldown |

---

## 4. Automated Execution Pipeline

The automated verification suite is executed prior to final staging and commit:

```bash
# 1. Guideline & Positive Boolean Check
python 03-ai-scripts/05-guideline-autofixer.py src --check-only

# 2. Slide Component Line Count Gate (<= 100 lines)
pwsh -Command "Get-ChildItem -Path 'src/components/slides/*.tsx' | Where-Object { (Get-Content $_.FullName | Measure-Object -Line).Lines -gt 100 } | Select-Object Name"

# 3. Persona Standardization Gate ('Chief Software Engineer')
pwsh -Command "Select-String -Path 'src/**/*.ts', 'src/**/*.tsx' -Pattern 'Alim Ul Karim.*(CEO|Founder|Lead Architect)'"

# 4. Secrets Scan Gate
pwsh -Command "Select-String -Path 'src/**/*.*', '02-spec/**/*.*' -Pattern '(AKIA[0-9A-Z]{16}|ghp_[0-9a-zA-Z]{36})'"
```
When all 12 gates return green, the codebase is certified for production deployment.
