# 21-App: Presentation Specifications Index

This directory houses the canonical, sequential specifications for the **White Presentation System** and the synthesized multi-deck platform. Any AI model or human engineer can implement, extend, or generate compliant presentations by adhering to these documents.

---

## Specification Catalog

| File | Title & Focus | Key Concepts & Deliverables |
|:---|:---|:---|
| [00-overview.md](00-overview.md) | **Platform Vision & Pillars** | Architectural overview, pure DOM text mandate, virtual canvas coordinates, 10-step gradient rules. |
| [01-flat-slide-system-spec.md](01-flat-slide-system-spec.md) | **Flat Slide System & Builder Mode** | JSON slide contracts, 17 discriminated slide types, builder mode stores, layering hierarchy, audio triggers. |
| [02-global-ppt-corporate-spec.md](02-global-ppt-corporate-spec.md) | **Corporate Storytelling & Pacing** | 6-phase narrative arc, executive presentations, Ubuntu/Poppins typography hierarchy, section dividers. |
| [03-bsrm-asrm-presentation-spec.md](03-bsrm-asrm-presentation-spec.md) | **Clinical, Persona & Comparisons** | Executive/physician profiling (`CEOSlide`), character-by-character color shading, dual-pane before/after showcases. |
| [04-ki-health-presentation-spec.md](04-ki-health-presentation-spec.md) | **Modern SaaS & Proof Blocks** | Healthtech visual hierarchy, typographic strike hooks, 3-card proof clusters, SaaS pricing grids. |
| [05-white-presentation-master-spec.md](05-white-presentation-master-spec.md) | **White Presentation Master System** | Ground-truth sample implementation: pure DOM text, right silhouette with neon glowing heart, top-right transparent Riseup Asia logo, 3 bullet cards with vertical dividers, bottom organic gradient wave. |
| [06-color-theme-10-step-gradient-system.md](06-color-theme-10-step-gradient-system.md) | **10-Step Color Gradient System** | Mathematical 10-step ramps in HSL/RGB/HEX across White, Dark, Green, Purple, and WP Exam Blue palettes. |
| [07-animation-sound-and-export-quality-spec.md](07-animation-sound-and-export-quality-spec.md) | **Animation, Audio & Multi-User Architecture** | Motion curves, whoosh/click debouncing, audio ducking, 4K/60fps headless export, multi-tenant relational database schema. |
| [08-multi-deck-compare-contrast-matrix.md](08-multi-deck-compare-contrast-matrix.md) | **Multi-Deck Compare & Contrast Matrix** | Deep audit across 5 platforms (`flat-slide-show`, `global-ppt-v1`, `bsrm-hiltrax`, `ki-health-ppt`, `wp-exam`): strengths, gaps, anti-patterns. |
| [09-comprehensive-audit-specification.md](09-comprehensive-audit-specification.md) | **Blind-AI Audit & Release Readiness** | Release sign-off, verbatim verification matrix, 100/100 confidence score, cross-link to `02-spec/25-app-spec-audit/`. |

---

## Machine-Readable JSON Schemas
Accompanying schemas are maintained in the root `schemas/` directory:
- [`schemas/presentation.schema.json`](../../schemas/presentation.schema.json) — Full deck and settings schema.
- [`schemas/slide.schema.json`](../../schemas/slide.schema.json) — Discriminated slide schema.
- [`schemas/theme-gradient.schema.json`](../../schemas/theme-gradient.schema.json) — 10-step gradient and shade ramp schema.
- [`schemas/white-presentation-slide.json`](../../schemas/white-presentation-slide.json) — Concrete reference data model for the white presentation slide.
