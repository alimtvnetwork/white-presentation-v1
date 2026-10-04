# Subtask Plan 01: Architecture & Theme Engine Spec, 25 Global PPT Themes, Contrast Enforcement & Kinetic Physics

> **Subtask Identifier:** `.ai-memory/plans/subtasks/26-presentation-themes-animations-and-15-slide/01-specs-and-themes.md`  
> **Parent Module:** Module 26: Presentation Themes, Animations and 15 Slide Archetypes  
> **Assigned Owner:** Spec Author 01 (Architecture & Theme Engine Systems)  
> **Status:** `COMPLETED`  
> **Target Release:** `v2.2.0`  
> **Author:** Spec Author 01  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  
> **Created:** 2026-10-04  

---

## 1. Objective & Strategic Scope

This subtask governs the architectural specification authoring, 25-theme engine taxonomy, contrast verification runtime, spring physics transitions, and 3-phase kinetic step progression for Module 26 (`26-presentation-themes-animations-and-15-slide`):

1. **Chapter 26 Canonical Architectural Specification:**
   - Author `02-spec/21-app/26-presentation-themes-animations-and-15-slide/01-architecture-spec.md` codifying the theme taxonomy, contrast algorithms, clean-pass purge protocol, spring physics formulas, 6 transitions, 3-phase kinetic step lifecycle, 60/30/10 spatial balance, 4-plane depth hierarchy, and fluid typography floors.
2. **Global PPT 25-Theme Architecture & Family Taxonomy:**
   - Integrate all 25 canonical themes across 5 distinct aesthetic families (`CorporateClean`, `TechModern`, `EditorialArchival`, `ExecutivePrestige`, `BioGrowth`) derived from `src/themes/gradientTokens.ts` and `src/themes/themeRuntime.ts`.
   - Standardize discrete 10-step perceptual lightness ramps ($S_0 \dots S_9$) and unadorned space-separated HSL triplet tokens enabling dynamic alpha composition.
3. **Contrast AA Rules & Zero Yellow-on-Light Inversion:**
   - Enforce WCAG 2.1 AA text-to-canvas contrast ratio $C_R \ge 4.5:1$ across all 25 themes.
   - Implement the Zero Yellow-on-Light contrast rule via `isYellowish` chromatic detection, dynamically routing text glyphs to `--pres-accent-text` with inverted deep ink tones ($C_R \ge 5.5:1$) on light canvases.
   - Mandate clean-pass variable purge (`cleanPreviousThemeVariables` / `purgePresentationVariables`) prior to theme re-rendering to eliminate stale CSS variable bleed.
4. **Natural Kinetic Physics & Hardware-Accelerated Transitions:**
   - Model damped spring dynamics (stiffness $420$, damping $28$, mass $1.0$) with quintic deceleration curve `cubic-bezier(0.22, 1, 0.36, 1)`.
   - Specify 6 standard transition archetypes: `kinetic-morph`, `slide`, `fade`, `zoom`, `rise`, and `flip` with mandatory GPU composite layer isolation (`will-change: transform, opacity; transform: translateZ(0)`).
5. **Deterministic 3-Phase Step Engine:**
   - Standardize multi-step progression: completed ($0.75$ opacity), active ($1.00$ opacity, $1.02$ scale, halo glow), and future ($0.40$ opacity with $1.25\text{px}$ blur).
   - Equip step nodes with direct click-to-jump navigation and non-blocking 1800Hz / 12ms acoustic WebAudio feedback.
6. **Design System & Micro-Text Constraints:**
   - Enforce the 60/30/10 spatial balance and 4-plane depth hierarchy (`plane-0-surface`, `plane-1-raised`, `plane-2-elevated`, `plane-3-floating`) from `02-spec/02-coding-guidelines/24-app-ui-design-system/01-design-principles.md`.
   - Enforce a strict fluid typography floor of $\ge 14\text{px}$ for all micro-text, kickers, tags, and badge labels.
7. **Strict Positive Booleans:**
   - Enforce positive boolean properties (`is*`, `has*`) across all state interfaces and component definitions.

---

## 2. Owned Deliverables & File Registry

| Deliverable Path | Scope & Role | Status |
|:---|:---|:---:|
| `02-spec/21-app/26-presentation-themes-animations-and-15-slide/01-architecture-spec.md` | Canonical architectural specification covering 25 themes, 5 families, WCAG AA, zero-yellow inversion, variable purge, spring motion, 6 transitions, 3-phase steps, 60/30/10 balance, 4-plane depth, $\ge 14\text{px}$ typography floor, and positive booleans. | **COMPLETED** |
| `.ai-memory/plans/subtasks/26-presentation-themes-animations-and-15-slide/01-specs-and-themes.md` | Subtask execution plan, architectural directives, verification gates, and completion ledger. | **COMPLETED** |

---

## 3. Detailed Work Breakdown & Architectural Directives

### 3.1 Deliverable 1: Canonical Architecture Specification (`01-architecture-spec.md`)
- **Theme Taxonomy & Tokens:**
  - Catalog all 25 canonical themes across the 5 defined families:
    1. `CorporateClean` (5): `corporate-clean`, `paper-editorial`, `sapphire-executive-light`, `windows-11`, `github-light`.
    2. `TechModern` (5): `true-dark`, `vscode-dark`, `monokai`, `dracula`, `cyber-neon`.
    3. `EditorialArchival` (4): `white-brand`, `paper-ink`, `warm-editorial-terracotta`, `nord-frost`.
    4. `ExecutivePrestige` (5): `ivory-gold`, `bright-gold`, `noir-gold`, `midnight-luxe`, `crimson-executive`.
    5. `BioGrowth` (6): `clinical-emerald-light`, `emerald-growth`, `sunset-horizon`, `navy-blue`, `macos-sonoma`, `wp-exam-purple`.
  - Defined unadorned space-separated HSL triplet tokens (`--pres-bg-hsl`, `--pres-card-bg-hsl`, `--pres-accent-hsl`, etc.) enabling CSS alpha channels: `hsl(var(--pres-accent-hsl) / <alpha>)`.
  - Detailed 10-stop gradient ramp architecture ($S_0 \dots S_9$).
- **Contrast & Zero Yellow-on-Light Protocol:**
  - Codified IEC 61966-2-1 relative luminance formula and WCAG 2.1 AA/AAA ratios.
  - Specified the `isYellowish` chromatic filter ($R \ge 180$, $G \ge 140$, $B \le 110$) and automatic `--pres-accent-text` inversion for light themes, preventing low-contrast yellow text on white/light surfaces.
  - Codified the clean-pass variable purge routine (`cleanPreviousThemeVariables` / `purgePresentationVariables`) sweeping all managed `--pres-`, `--preset-`, `--gradient-`, `--accent-`, `--step-`, and `--text-shadow-` properties before new theme injection.
- **Kinetic Motion & Transition Physics:**
  - Formulated damped spring oscillator dynamics (stiffness $420$, damping $28$, mass $1.0$, damping ratio $\approx 0.683$, quintic curve `cubic-bezier(0.22, 1, 0.36, 1)`).
  - Specified hardware acceleration mandates (`will-change: transform, opacity; transform: translateZ(0)`).
  - Defined 6 transition archetypes with complete CSS declarations: `kinetic-morph`, `slide`, `fade`, `zoom`, `rise`, `flip`.
- **Deterministic 3-Phase Kinetic Step Engine:**
  - Codified tri-state lifecycle classes:
    - `.step-phase-completed`: Opacity $0.75$, scale $1.00$, hairline border, plane 1.
    - `.step-phase-active`: Opacity $1.00$, scale $1.02$, elevation halo glow, active accent border, plane 2.
    - `.step-phase-future`: Opacity $0.40$, scale $0.98$, filter blur $1.25\text{px}$, hairline border, plane 1.
  - Documented direct click-to-jump affordance and synthesized 1800Hz / 12ms non-blocking WebAudio acoustic feedback.
- **Spatial Design System & Typography:**
  - Codified 60/30/10 spatial balance (60% canvas wash, 30% structural bento panels, 10% vivid focal accents).
  - Codified 4-plane elevation hierarchy (`plane-0-surface` $z=0$, `plane-1-raised` $z=10$, `plane-2-elevated` $z=20$, `plane-3-floating` $z=50+$).
  - Codified fluid typography scale with non-negotiable micro-text floor of $\ge 14\text{px}$.
  - Enforced 100% positive boolean naming conventions (`is*`, `has*`).

### 3.2 Deliverable 2: Subtask Plan & Execution Ledger (`01-specs-and-themes.md`)
- Subtask plan structured in strict accordance with project conventions.
- Documented governance, verification gates, ownership boundaries, and deliverable status.

---

## 4. Verification & Quality Gates Checklist

- [x] **No Git Commands Executed:** Strict adherence to subagent boundaries; zero git commands (`git add`, `git commit`, `git status`) invoked.
- [x] **Strictly Owned Files Respected:** Only the two assigned files (`02-spec/21-app/26-presentation-themes-animations-and-15-slide/01-architecture-spec.md` and `.ai-memory/plans/subtasks/26-presentation-themes-animations-and-15-slide/01-specs-and-themes.md`) created. Zero modifications to any other files.
- [x] **Executive Persona Governance (CODE-RED-011):** Alim Ul Karim styled strictly and exclusively as `"Chief Software Engineer"`.
- [x] **25 Canonical Themes Documented:** Full 25-theme catalog cataloged across all 5 families (`CorporateClean`, `TechModern`, `EditorialArchival`, `ExecutivePrestige`, `BioGrowth`) with 10-step gradient stops and HSL triplets.
- [x] **WCAG AA & Zero Yellow-on-Light Inversion Codified:** `isYellowish` filter, contrast ratio calculation, and `--pres-accent-text` dynamic inversion specified with mathematical rigor.
- [x] **Clean-Pass Variable Purge Codified:** `cleanPreviousThemeVariables` / `purgePresentationVariables` defined to scrub all managed prefixes on stage and document elements.
- [x] **Kinetic Motion & Spring Physics Codified:** Stiffness $420$, damping $28$, mass $1.0$, `cubic-bezier(0.22, 1, 0.36, 1)`, and 6 transition archetypes (`kinetic-morph`, `slide`, `fade`, `zoom`, `rise`, `flip`) with GPU composite layers (`will-change: transform, opacity; transform: translateZ(0)`).
- [x] **3-Phase Step Lifecycle Engine Codified:** Completed ($0.75$), Active ($1.00$, glow, $1.02$), Future ($0.40$, $1.25\text{px}$ blur), direct click-to-jump, and 1800Hz / 12ms acoustic click feedback.
- [x] **60/30/10 Balance & 4-Plane Depth Hierarchy Codified:** Planes 0, 1, 2, 3 specified with exact z-indices, 3D translations, fills, and shadows.
- [x] **Fluid Typography Floor $\ge 14\text{px}$ Enforced:** Micro-text floor strictly mandated; smaller sizes ($< 14\text{px}$) strictly forbidden.
- [x] **Positive Booleans Enforced:** 100% compliance with positive boolean semantics (`is*`, `has*`).
