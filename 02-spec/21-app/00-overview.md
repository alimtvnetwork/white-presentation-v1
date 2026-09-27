# 00-Overview: Next-Generation White Presentation System

## 1. System Vision & Purpose
The **White Presentation System** is a high-profile, declarative, AI-ready presentation framework engineered for ultra-crisp white, dark, emerald, violet, and custom brand decks. It synthesizes the best architectural achievements across five flagship presentation platforms:
- **`flat-slide-show`**: Pure JSON data contracts, reactive Builder Mode, sub-step animations, camera focus regions, and decoupled audio cues.
- **`global-ppt-v1`**: Corporate authority, bespoke executive persona slides, interactive before/after showcase carousels, and financial comparison matrices.
- **`bsrm-presentation-hiltrax`**: Clinical credibility, evidence-based visual hierarchy, tabletop demonstrations, and patient/physician profiling.
- **`ki-health-ppt`**: Modern SaaS visual cadence, 3-point proof card clusters, bold typographic statements, and metric badges.
- **`wp-exam`**: Enterprise design token scoping (`--wp-exam-*`), strict HSL color coordinate systems, and multi-tenant user authentication patterns.

---

## 2. Core Architectural Pillars

### 2.1 Pure DOM Text Rendering Mandate (Zero Baked-In Text)
In traditional marketing slides, text is frequently flattened into raster images, causing blurry rendering at high DPI, zero accessibility, un-selectable text, and complete inability for AI or localized engines to edit content.
**Non-Negotiable Rule:** All text elements (headlines, subheads, kicker bars, bullet text, numeric callouts, author bios) MUST be rendered as pure DOM HTML/SVG text nodes styled with CSS typography tokens. Raster images (`.png`, `.jpg`, `.webp`) are restricted exclusively to visual photography (e.g. right-side couple silhouette, team avatars, proof screenshots) and vector logos.

### 2.2 1920 × 1080 Virtual Canvas & Adaptive Uniform Scaling
All layout positioning, bounding boxes, element padding, font sizes, and icon dimensions are authored in a virtual reference coordinate canvas of `1920 × 1080` (16:9). At runtime:
- `ScaledSlide` detects container dimensions via `ResizeObserver`.
- Computes uniform scale factor $\text{scale} = \min(\text{width}/1920, \text{height}/1080)$.
- Applies hardware-accelerated CSS vector scaling (`transform: scale(var(--stage-scale))`) with `contain: layout paint` and `isolation: isolate`.
- Displays at native vector sharpness on 1080p, 2K, 4K UHD, and mobile responsive containers without horizontal or vertical clipping.

### 2.3 10-Step Gradient & Shade Precision System
To guarantee deterministic rendering by any AI model or human designer, every theme defines a mathematical 10-step gradient and shade ramp. Every color stop is explicitly documented across **HSL**, **RGB**, and **HEX** formats. Text transitions (e.g. character-by-character color progressions as seen in `CEOSlide`) and background curves adhere strictly to these 10 discrete intervals ($S_0$ through $S_9$).

### 2.4 Blind AI-Ready Declarative Schema
Any AI agent or LLM can author, edit, or validate complete presentations simply by producing or consuming JSON objects matching the schema. The schema is strongly typed, self-documenting, and free from procedural side-effects.

---

## 3. Specification Module Index

| Sequence | Module | Target File | Scope & Deliverables |
|:---|:---|:---|:---|
| 01 | **Flat Slide System** | [01-flat-slide-system-spec.md](01-flat-slide-system-spec.md) | JSON schemas, discriminated union, builder mode, coordinate space, edit store. |
| 02 | **Global PPT Corporate** | [02-global-ppt-corporate-spec.md](02-global-ppt-corporate-spec.md) | Storytelling narrative, pacing, typography hierarchies, layout grids. |
| 03 | **BSRM / ASRM Clinical & Persona** | [03-bsrm-asrm-presentation-spec.md](03-bsrm-asrm-presentation-spec.md) | Executive/physician profiling, before/after showcases, split-screen comparisons. |
| 04 | **KI Health Modern SaaS** | [04-ki-health-presentation-spec.md](04-ki-health-presentation-spec.md) | Healthtech visual hierarchy, 3-card proof blocks, USP typographic strikes. |
| 05 | **White Presentation Master** | [05-white-presentation-master-spec.md](05-white-presentation-master-spec.md) | Ground-truth sample implementation, neon heart glow, 3 bullet cards, bottom wave. |
| 06 | **10-Step Color Gradient System** | [06-color-theme-10-step-gradient-system.md](06-color-theme-10-step-gradient-system.md) | 10-step ramps in HSL/RGB/HEX across White, Dark, Green, Purple, WP Exam palettes. |
| 07 | **Animation, Audio & Export** | [07-animation-sound-and-export-quality-spec.md](07-animation-sound-and-export-quality-spec.md) | Motion easing, whoosh/click debouncing, 4K/60fps headless capture, multi-user DB. |
| 08 | **Compare & Contrast Matrix** | [08-multi-deck-compare-contrast-matrix.md](08-multi-deck-compare-contrast-matrix.md) | Deep comparative audit across 5 repositories: strengths, gaps, anti-patterns. |
