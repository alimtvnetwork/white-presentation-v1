# What to Read in the White Presentation System

> **Repository:** `alimtvnetwork/white-presentation-v1`
> **Status:** All Specifications 100% Verified, Remediated & All 36 CI Quality Gates Green
> **Audit Gap Status:** 100% Closed & Archived

---

## 1. Master Documentation Hierarchy

1. **System Entry Point & Overview:**
   - [`readme.md`](../readme.md) — Root documentation, system architecture, visual sample, quick links.
   - [`02-spec/21-app/readme.md`](../02-spec/21-app/readme.md) — Complete specification catalog and navigation index.

2. **Core Architectural Specifications (`02-spec/21-app/`):**
   - [`00-overview.md`](../02-spec/21-app/00-overview.md) — Architectural pillars, pure DOM text mandate, $1920 \times 1080$ coordinate space.
   - [`01-flat-slide-system-spec.md`](../02-spec/21-app/01-flat-slide-system-spec.md) — Dual-store state engine (`useDeck` persistent vs `useEditMode` ephemeral), 7-layer canvas stack.
   - [`05-white-presentation-master-spec.md`](../02-spec/21-app/05-white-presentation-master-spec.md) — Pixel-perfect flagship keynote slide ("Stories Are Emotional Bridges"), feather-masked image, neon heart glow, organic bottom wave.
   - [`06-color-theme-10-step-gradient-system.md`](../02-spec/21-app/06-color-theme-10-step-gradient-system.md) — 10-step mathematical ramps ($S_0$–$S_9$) and character-by-character color interpolation algorithm.
   - [`07-animation-sound-and-export-quality-spec.md`](../02-spec/21-app/07-animation-sound-and-export-quality-spec.md) — 60fps physics, Web Audio synthesizer, vector print/PDF exports, and PostgreSQL multi-tenant schema.
   - [`08-multi-deck-compare-contrast-matrix.md`](../02-spec/21-app/08-multi-deck-compare-contrast-matrix.md) — 12-point synthesis matrix across 5 presentation platforms.

3. **Slide Archetypes (Modules 10–25):**
   - [`10-title-hero-slide-spec.md`](../02-spec/21-app/10-title-hero-slide-spec.md) to [`18-builder-mode-interactive-canvas-spec.md`](../02-spec/21-app/18-builder-mode-interactive-canvas-spec.md) — 9 foundational archetype specifications.
   - [`02-spec/21-app/24-expanded-slide-system-and-global-ppt-synthesis/01-overview.md`](../02-spec/21-app/24-expanded-slide-system-and-global-ppt-synthesis/01-overview.md) — Expanded 15 slide archetypes and Global PPT synthesis.
   - [`02-spec/21-app/25-grounded-global-ppt-and-flat-slide-synthesis/01-overview.md`](../02-spec/21-app/25-grounded-global-ppt-and-flat-slide-synthesis/01-overview.md) — Grounded synthesis from Global PPT & Flat Slide repos, active step progression engine, spring physics, and 15 production archetypes.

4. **Quality & Remediation History:**
   - [`02-spec/25-app-spec-audit/readme.md`](../02-spec/25-app-spec-audit/readme.md) — Audit directory catalog (zero open audit gaps).
   - [`.ai-memory/plans/completed/04-spec-remediation-completed.md`](plans/completed/04-spec-remediation-completed.md) — Remediation ledger record, verification proofs, and all 36 CI quality gates exit 0.
   - [`.ai-memory/plans/readme.md`](plans/readme.md) — Master index of completed plans.

5. **Machine Schemas (`schemas/`):**
   - [`schemas/white-presentation-slide.json`](../schemas/white-presentation-slide.json) — Validated Draft-07 schema for slide geometry and styling.
