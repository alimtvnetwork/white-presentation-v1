# Subtask 01: Grounded Spec Authoring & Theme Engine Synthesis

> **Subtask Identifier:** `.ai-memory/plans/subtasks/25-grounded-global-ppt-and-flat/01-spec-and-themes.md`  
> **Parent Plan:** [25-grounded-global-ppt-and-flat-slide-synthesis.md](../../pending/25-grounded-global-ppt-and-flat-slide-synthesis.md)  
> **Assigned Phases:** Task-01 (Spec Foundations) & Task-03 (Themes & Animation Ramps)  
> **Target Release:** `v1.2.0`  
> **Status:** `SPEC-READY`  
> **Author:** Spec Author 01  

---

## 1. Objective & Scope

This subtask governs the architectural specification and visual design foundations for synthesizing **Global PPT** and **Flat Slide Show**. It establishes the complete declarative schema, 10 corporate color palettes, runtime CSS variable injection engine (`--pres-*`), hardware-accelerated Less animations, and audio cue triggers required to power 15 refined presentation slide archetypes.

### Discrete Deliverable Scope

1. **Task-01: Architectural Specifications (`02-spec/21-app/25-grounded-global-ppt-and-flat-slide-synthesis/`):**
   - `01-overview.md`: Executive vision, verbatim user request, 5 core architectural pillars, 10 Global PPT theme roster, standardized executive persona for Alim Ul Karim ("Chief Software Engineer").
   - `02-slide-archetypes-data-contracts.md`: Exhaustive TypeScript data contracts, 1920x1080 ASCII wireframe geometries, step progression physics, and live inline editing contracts across all 15 archetypes.
2. **Task-03: Theme Engine & Animation Ramps:**
   - Calibrated 10-step gradient stop ramps (`stops[0..9]`) in `src/themes/gradientTokens.ts`.
   - Dynamic injection of runtime CSS custom properties (`--pres-*`) on `#presentation-root`.
   - Motion design system in `src/styles/animations.less` with spring curves, pulsing halos, traveling SVG stroke dashes, and ink-stamp shadows.
   - Synchronized audio click feedback on step advancement and rewinding.

---

## 2. Step-by-Step Implementation Roadmap

```
+--------------------------------------------------------------------------------------------------+
|                              SUBTASK 01 EXECUTION ROADMAP                                        |
+--------------------------------------------------------------------------------------------------+
|  [Phase 1] Spec Authoring & Schema Contracts (Overview + 15 Archetype Wireframes)  [COMPLETED]   |
|  [Phase 2] Runtime CSS Variable Injection Engine (--pres-* Custom Properties)      [READY]       |
|  [Phase 3] 10 Global PPT Calibrated Color Themes (10-Step Ramps & Contrast WCAG)   [READY]       |
|  [Phase 4] Motion & Keyframe Choreography (Pulsing Halo, SVG Paths, Spring Less)   [READY]       |
|  [Phase 5] Audio Feedback Verification & Quality Gate Sign-off                     [READY]       |
+--------------------------------------------------------------------------------------------------+
```

### Phase 1: Spec Authoring & Schema Contracts

- Authored `02-spec/21-app/25-grounded-global-ppt-and-flat-slide-synthesis/01-overview.md` capturing the 5 core pillars, verbatim user request, and executive persona constraints.
- Authored `02-spec/21-app/25-grounded-global-ppt-and-flat-slide-synthesis/02-slide-archetypes-data-contracts.md` defining TypeScript interfaces, 1920x1080 wireframes, and inline editing patterns for all 15 archetypes:
  1. `steps` (StepsSlide)
  2. `timeline` (TimelineSlide)
  3. `process-cycle` (ProcessCycleSlide)
  4. `depth-stack` (DepthStackSlide)
  5. `reveal-grid` (RevealGridSlide)
  6. `growth-engine` (GrowthEngineSlide)
  7. `talent-pyramid` (TalentPyramidSlide)
  8. `cost-comparison` (CostComparisonSlide)
  9. `tech-stack` (TechStackSlide)
  10. `problem-solution` (ProblemSolutionSlide)
  11. `metric-grid` (MetricGridSlide)
  12. `before-after` (BeforeAfterShowcaseSlide)
  13. `testimonials` (TestimonialsSlide)
  14. `code-terminal` (CodeTerminalSlide)
  15. `call-to-action` (CallToActionSlide)

### Phase 2: Runtime CSS Variable Injection Engine

- Inject dynamic CSS custom properties directly onto the `#presentation-root` container when active theme changes in `deckStore`:
  ```css
  --pres-canvas-bg: [theme.canvasBg];
  --pres-text-primary: [theme.textColor];
  --pres-text-secondary: [theme.subtextColor];
  --pres-card-bg: [theme.cardBg];
  --pres-card-border: [theme.cardBorder];
  --pres-accent: [theme.accentColor];
  --pres-header-shadow: [theme.headerShadow];
  --pres-gradient-stop-0 .. --pres-gradient-stop-9: [theme.stops[i].hex];
  ```
- Eliminate hardcoded color styles in React presentation components, ensuring instant switching with zero layout thrash.

### Phase 3: Calibrate 10 Global PPT Palettes (`src/themes/gradientTokens.ts`)

- Provide 10 calibrated palettes:
  - Light mode (2): `white-brand`, `paper-editorial`
  - Dark mode (8): `true-dark`, `emerald-growth`, `wp-exam-purple`, `midnight-luxe`, `sunset-horizon`, `cyber-neon`, `crimson-executive`, `nord-frost`
- Ensure every theme has 10 gradient stops with verified contrast against canvas background.
- Include explicit `headerShadow` definitions for crisp typographic legibility over dot-matrix patterns.

### Phase 4: Motion & Keyframe Choreography (`src/styles/animations.less`)

- Implement hardware-accelerated animations:
  - `@keyframes haloPulse`: Dual-layer radial expansion for active milestone and step nodes.
  - `@keyframes svgStrokeDash`: Dynamic dash offset travel along connecting pipeline arrows.
  - `@keyframes bentoReveal`: Spring-based entry for reveal grid cards.
  - `@keyframes cardPop3D`: Perspective depth adjustment for depth stack cards.
- Calibrate spring physics parameters across Framer Motion hooks:
  - `stiffness: 420, damping: 17, mass: 0.8` for snappy, organic UI responsiveness.

### Phase 5: Audio Cue Feedback Integration

- Verify that intra-slide step events (`stepAdvance`, `stepRewind`) trigger audio feedback via `src/audio/soundEffects.ts`.
- Ensure audio is volume-ducked and muted when `isAudioMuted` is toggled.

---

## 3. Targeted File Artifacts

| Action | File Path | Description |
|:---|:---|:---|
| Create | `02-spec/21-app/25-grounded-global-ppt-and-flat-slide-synthesis/01-overview.md` | System vision, 5 pillars, user request, and themes |
| Create | `02-spec/21-app/25-grounded-global-ppt-and-flat-slide-synthesis/02-slide-archetypes-data-contracts.md` | 15 slide schemas, TypeScript types, wireframes, and editing |
| Create | `.ai-memory/plans/subtasks/25-grounded-global-ppt-and-flat/01-spec-and-themes.md` | This implementation and governance subtask plan |
| Update | `src/themes/gradientTokens.ts` | Theme definitions with 10-step gradient stop ramps |
| Update | `src/styles/animations.less` | Motion classes, halo pulses, and CSS custom properties |
| Update | `src/types/archetypes.ts` | Leaf type definitions for the 15 slide archetypes |
| Update | `src/types/presentation.ts` | Re-exports and discriminated union extension |

---

## 4. Strict Quality Gates & Non-Negotiables

1. **Total Ban on Git Commands:** Subagents MUST NOT execute any git command (`git add`, `git commit`, `git push`, `git status`, `git diff`, `git checkout`). All git operations are reserved exclusively for the Lead Orchestrator in Phase 3 via GitMap.
2. **File Size Boundaries:** Every slide component in `src/components/slides/` must remain strictly $\le 100$ lines. Leaf types and factories must be extracted cleanly to keep `src/types/presentation.ts` $\le 300$ lines.
3. **Positive Boolean Polarity:** Only positive boolean properties (`is*`, `has*`) are permitted. Zero negative prefixes (`not*`, `disable*`, `un*`), and strictly zero `== true` comparisons.
4. **Pure Live DOM Typography:** Zero text rasterized or flattened into images. 100% of headers, numbers, and bullet points must render as editable DOM nodes.
5. **Executive Persona Standardization:** Alim Ul Karim MUST be titled strictly as "Chief Software Engineer". The title "Founder" is strictly banned.

---

## 5. Verification Commands

The following verification commands must pass with zero errors:

```bash
python linter-scripts/check-markdown-headings.py 02-spec/21-app/25-grounded-global-ppt-and-flat-slide-synthesis/01-overview.md
python linter-scripts/check-markdown-headings.py 02-spec/21-app/25-grounded-global-ppt-and-flat-slide-synthesis/02-slide-archetypes-data-contracts.md
python linter-scripts/check-markdown-headings.py .ai-memory/plans/subtasks/25-grounded-global-ppt-and-flat/01-spec-and-themes.md

python linter-scripts/check-relative-paths.py
python linter-scripts/check-spec-cross-links.py

python linter-scripts/check-boolean-guidelines.py
python linter-scripts/check-forbidden-strings.py
python linter-scripts/check-file-sizes.py
```

---

## 6. Cross-References

| Reference | Target Path | Description |
|:---|:---|:---|
| Overview Specification | [01-overview.md](../../../02-spec/21-app/25-grounded-global-ppt-and-flat-slide-synthesis/01-overview.md) | High-level system vision, 5 pillars, and theme palette roster |
| Slide Archetypes Spec | [02-slide-archetypes-data-contracts.md](../../../02-spec/21-app/25-grounded-global-ppt-and-flat-slide-synthesis/02-slide-archetypes-data-contracts.md) | TypeScript interfaces, wireframes, and live editing contracts |
| Master Pending Plan | [25-grounded-global-ppt-and-flat-slide-synthesis.md](../../pending/25-grounded-global-ppt-and-flat-slide-synthesis.md) | Master orchestrator roadmap for task 25 |
