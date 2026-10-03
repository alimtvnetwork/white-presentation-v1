# Subtask Plan 01: Canonical Specification Suite, 20 Themes, Kinetic Motion & 3-Phase Progression Engine

> **Subtask Identifier:** `.ai-memory/plans/subtasks/40-kinetic-deck-revolution-and-step/01-spec-and-themes.md`  
> **Parent Module:** Module 40: Kinetic Deck Revolution, Global PPT Synthesis & 15 Slide Archetypes  
> **Assigned Owner:** Spec Author 01 (Core Architectural Systems)  
> **Status:** `COMPLETED`  
> **Target Release:** `v2.1.0`  
> **Author:** Spec Author 01  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  
> **Created:** 2026-10-04  

---

## 1. Objective & Strategic Scope

This subtask governs the architectural specification authoring, 20-theme token system, kinetic motion keyframes, and 3-phase step engine foundations for Chapter 40 (`40-kinetic-deck-revolution-and-step`):

1. **Chapter 40 Canonical Specification Suite:**
   - Author `02-spec/21-app/40-kinetic-deck-revolution-and-step/readme.md`: Master directory, executive index, and architectural pillars.
   - Author `02-spec/21-app/40-kinetic-deck-revolution-and-step/01-overview.md`: 60/30/10 spatial balance rules, 4-plane elevation hierarchy, Northern UI/UX fluid typography, light-theme slab elimination, and executive persona governance.
   - Author `02-spec/21-app/40-kinetic-deck-revolution-and-step/03-theme-motion-and-flat-progression.md`: 20-theme palette catalog, variable clean-pass teardown protocol, 5 kinetic animation keyframes, and 3-phase step lifecycle with direct click navigation.
2. **Global PPT Visual Alignment & Light-Theme Slab Elimination:**
   - Eliminates hardcoded dark slate containers (`rgba(15, 23, 42, ...)`) on light themes by binding containers to `--pres-bg-card` and `--pres-card-border-hsl`, ensuring light slides render clean ivory/white surfaces with deep ink typography.
3. **5 Signature Kinetic Animation Keyframes:**
   - Hardware-accelerated CSS animations (`fabricNodePulse`, `needleScanGlow`, `ebpfProbeTrace`, `canaryTrafficShift`, `mpcShardAttestation`) for deep systems visualization.
4. **Deterministic 3-Phase Step Engine & Click Navigation:**
   - Standardizes tri-state progression (`completed`: opacity 0.75, `active`: opacity 1.0, scale 1.02, halo glow, `future`: opacity 0.38, blur 1.25px).
   - Equips all step pills and card headers with direct click-to-jump handlers (`onClick={() => jumpToStep(idx)}`) and synthesized 1800Hz / 12ms acoustic click feedback.

---

## 2. Owned Deliverables & File Registry

| Deliverable Path | Role & Content Focus | Execution Status |
|:---|:---|:---:|
| `02-spec/21-app/40-kinetic-deck-revolution-and-step/readme.md` | Executive index, core architectural pillars, document directory, and 15 slide archetypes taxonomy. | **COMPLETED** |
| `02-spec/21-app/40-kinetic-deck-revolution-and-step/01-overview.md` | Problem statement, light-theme slab elimination, 60/30/10 spatial balance, 4-plane depth hierarchy, 1920x1080 canvas scaling, Northern UI/UX typography, and CODE-RED-011 persona governance. | **COMPLETED** |
| `02-spec/21-app/40-kinetic-deck-revolution-and-step/03-theme-motion-and-flat-progression.md` | Complete 20-theme catalog (4 light, 16 dark), variable clean-pass protocol, 5 GPU kinetic keyframes, 3-phase step lifecycle, direct click-to-jump, and WebAudio cues. | **COMPLETED** |
| `.ai-memory/plans/subtasks/40-kinetic-deck-revolution-and-step/01-spec-and-themes.md` | Subtask execution plan, verification gates, and criteria sign-off ledger. | **COMPLETED** |

---

## 3. Detailed Work Breakdown & Architectural Directives

### 3.1 Deliverable 1: Chapter 40 Master Directory (`readme.md`)
- **Title:** Chapter 40 - Kinetic Deck Revolution, Global PPT Synthesis & 15 Slide Archetypes.
- **Scope:** Complete executive summary, 6 core architectural pillars, summary table of all 15 new slide archetypes (8 Kinetic Multi-Step + 7 Flat Sovereign), and document cross-reference directory.
- **Verification:** Verified references to `01-overview.md`, `02-data-contracts.md`, `03-theme-motion-and-flat-progression.md`, and `04-verification-gates.md`.

### 3.2 Deliverable 2: Architectural Vision & Design Standards (`01-overview.md`)
- **Problem Statement:** Detailed breakdown of legacy deficits, specifically the "dark slate slab" anti-pattern where light-themed slides rendered jarring dark containers.
- **60/30/10 Visual Spatial Balance:**
  - 60% Dominant Canvas Base (`--pres-bg`, `--pres-bg-surface`): Deep obsidian for dark modes; pure snow/archival ivory for light modes.
  - 30% Structural Panels (`--pres-bg-card`, `--pres-card-border`): Translucent backdrop filter (blur 14px), hairline borders, and soft diffused shadows. Clean white/ivory on light themes!
  - 10% High-Contrast Focal Accents (`--pres-accent`, `--pres-accent-glow`, `--pres-accent-hover`): Status pills, active step pins, monumental KPI digits.
- **4-Plane Elevation Hierarchy:** Structured z-index and 3D translation coordinates:
  - `Plane 0`: Surface Canvas ($z=0$, `translateZ(0px)`).
  - `Plane 1`: Raised Panels ($z=10$, `translateZ(8px)`).
  - `Plane 2`: Elevated Active Stage ($z=20$, `translateZ(24px)`).
  - `Plane 3`: Floating Overlays & Permanent Dark HUD Chrome ($z=50+$, `translateZ(48px)`).
- **1920x1080 Virtual Canvas Reference:** Uniform scaling engine calculation via `ResizeObserver` and pure DOM live typography mandate (zero raster, zero canvas 2D text).
- **Northern UI/UX Typography Standard v1.3.3:** Fluid `clamp(...)` rules with kickers $\ge 14\text{px}$, section headers $32\text{px}-44\text{px}$, and hero slide titles $44\text{px}-56\text{px}$.
- **Executive Persona Governance (CODE-RED-011):** Strict rule specifying that Alim Ul Karim is styled strictly and exclusively as `"Chief Software Engineer"`.

### 3.3 Deliverable 3: Themes, Motion & Step Progression (`03-theme-motion-and-flat-progression.md`)
- **20-Theme Calibrated Catalog:**
  - 4 Light Themes: `white-brand`, `paper-editorial`, `github-light`, `paper-ink`.
  - 16 Dark Themes: `true-dark`, `emerald-growth`, `wp-exam-purple`, `midnight-luxe`, `sunset-horizon`, `cyber-neon`, `crimson-executive`, `nord-frost`, `bright-gold`, `noir-gold`, `monokai`, `vscode-dark`, `dracula`, `macos-sonoma`, `windows-11`, `navy-blue`.
  - Space-separated HSL triplet token architecture.
  - Variable clean-pass teardown protocol (`cleanPreviousThemeVariables`).
  - Permanent dark HUD chrome isolation (`--chrome-*`).
- **5 Kinetic Motion Keyframes:**
  - `@keyframes fabricNodePulse`: Interconnect rail activity and NVLink bandwidth pulsing.
  - `@keyframes needleScanGlow`: Sweeping laser scan line across context depth matrices.
  - `@keyframes ebpfProbeTrace`: Microsecond kernel hook trace beam traversing between user space and kernel rings.
  - `@keyframes canaryTrafficShift`: Progressive gradient flow shift illustrating real-time canary traffic migrations.
  - `@keyframes mpcShardAttestation`: Cryptographic threshold quorum beacon where $t$-of-$n$ decentralized key shards pulse and converge.
- **Deterministic 3-Phase Step Engine:**
  - Phase 1 (Completed): `opacity: 0.75; transform: scale(1.0);` with subdued border.
  - Phase 2 (Active): `opacity: 1.00; transform: scale(1.02);` with radiant halo glow and elevated plane.
  - Phase 3 (Future): `opacity: 0.38; transform: scale(0.98); filter: blur(1.25px);` with muted ink.
  - Ephemeral hover preview: `effectiveStep = hoveredStep ?? activeStep`.
- **Direct Click Navigation & Audio Synchronization:**
  - Interactive click affordance: `onClick={() => jumpToStep(idx)}` on all step nodes, pills, and card headers with `cursor: pointer`.
  - Non-blocking WebAudio cue (`playStepTick()`): Synthesized 1800Hz / 12ms acoustic click with exponential ramp.
  - Keyboard shortcuts synchronization (ArrowRight, ArrowLeft, Space, Number keys 1-4).

---

## 4. Verification & Quality Gates Checklist

- [x] **No Git Commands Executed:** Strict compliance with worker boundary rules; zero git operations executed.
- [x] **No Commits or Staging:** Repository state untouched by worker; changes isolated to owned files.
- [x] **Light-Theme Slab Elimination Codified:** Light theme card tokens specified as frosted ivory/white surfaces (`rgba(255, 255, 255, 0.88)` / `hsl(0 0% 100% / 0.88)`), eliminating dark slate containers.
- [x] **60/30/10 Balance Enforced:** Mathematical distribution specified across canvas base (60%), structural bento surfaces (30%), and high-contrast focal accents (10%).
- [x] **4-Plane Depth Hierarchy Codified:** `plane-0-surface`, `plane-1-raised`, `plane-2-elevated`, and `plane-3-floating` defined with exact z-indices and 3D translations.
- [x] **Northern UI/UX Typography Standard v1.3.3 Codified:** Fluid `clamp(...)` scales specified; kickers strictly $\ge 14\text{px}$; hero slide titles $44\text{px}-56\text{px}$; pure DOM live typography mandated.
- [x] **Executive Persona Governance (CODE-RED-011) Enforced:** Alim Ul Karim designated strictly and exclusively as `"Chief Software Engineer"`.
- [x] **20 Calibrated Theme Palettes Specified:** All 20 themes cataloged with HSL triplet tokens, light vs dark categorization, and corporate tone.
- [x] **5 Kinetic Keyframes Engineered:** `fabricNodePulse`, `needleScanGlow`, `ebpfProbeTrace`, `canaryTrafficShift`, and `mpcShardAttestation` defined with complete `@keyframes` CSS declarations.
- [x] **3-Phase Step Progression & Click-to-Jump Specified:** Completed (0.75), Active (1.00, halo glow, scale 1.02), Future (0.38, 1.25px blur), and `onClick={() => jumpToStep(idx)}` direct click handlers documented.
- [x] **Non-Blocking WebAudio Synthesizer Documented:** 1800Hz / 12ms acoustic click cue specified without external audio file dependencies.
