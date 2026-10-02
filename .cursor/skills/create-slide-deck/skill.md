---
name: create-slide-deck
description: Autonomously architect, construct, and style high-authority, declarative, 16:9 presentation slide decks, interactive presenter HUDs, 10 production themes, 10-step precision color ramps, and real-time Slide Builder Modes on the 1920x1080 virtual canvas with pure live DOM typography.
---

# Create Presentation Slide Deck & Live Builder System

> **[/goal](slashCommand;goal)** Autonomously architect, construct, and style high-authority, declarative, 16:9 presentation slide decks, interactive presenter HUDs, 10 production themes, 10-step precision color ramps, and real-time Slide Builder Modes on the 1920×1080 virtual canvas with pure live DOM typography and zero hallucinations.
> **[/learn](slashCommand;learn)** Ingest the sequentially numbered slide system specifications under `02-spec/07-design-system/` in exact order before authoring slide schemas, components, or JSON decks.

**Source prompt:** `01-prompts/10-ui-and-design/08-create-slide-deck.md`

---

## 1. When to Use

Activate this skill when:
- Creating or editing 16:9 presentation decks and interactive slide components.
- Implementing the 1920×1080 virtual canvas with uniform scaling.
- Building the floating presenter HUD, 8-position mounting, timer, audio chimes, and PIP webcam overlay.
- Applying any of the 10 production themes (`bright-gold`, `noir-gold`, `vscode-dark`, `dracula`, `monokai`, `github-light`, `paper-ink`, `macos-sonoma`, `windows-11`, `navy-blue`).
- Applying 10-step gradient precision ramps ($S_0$ through $S_9$) or character-by-character hero shading.
- Implementing any of the 20 master slide layouts in `02-spec/07-design-system/34-slide-layout-catalog.md`.
- Managing dual-store Slide Builder mode (`useDeckStore` persisted vs `useEditStore` ephemeral).

---

## 2. Mandatory Reading Sequence (Strict Relative Paths)

AI agents MUST sequentially ingest these specification files:

1. `02-spec/07-design-system/24-slide-presentation-system.md` — Responsive coordinate transforms (`1920×1080` canvas), dual-screen presenter console (`/present`), BroadcastChannel sync, webcam PIP overlay, step reveals, overview grid (`G`), top jumper (`J`).
2. `02-spec/07-design-system/27-slide-canvas-and-themes.md` — Virtual canvas scale formula, 10 production themes (`bright-gold` default), Light Theme Contract.
3. `02-spec/07-design-system/28-slide-layouts.md` — Base slot model, closed layout union, field constraints.
4. `02-spec/07-design-system/29-slide-navigation-and-builder.md` — HUD, transitions, hotkeys (`ArrowRight`, `Space`, `B`/`E`, `G`, `J`, `C`, `F`, `1`–`0`), and builder chrome.
5. `02-spec/07-design-system/30-slide-palette-type-and-shell.md` — Dark amber palette, typography scales, spotlight radial glow, shell layers.
6. `02-spec/07-design-system/31-slide-controller-buttons.md` — Floating top-right HUD controller pill, circular 40×40px action buttons, tabular numbers counter, deep link share, fullscreen toggle, theme popover with live WCAG contrast, webcam PIP overlay, timer, and bottom dot pagination.
7. `02-spec/07-design-system/32-slide-color-options.md` — 10-step gradient precision system ($S_0$ to $S_9$) across 7 flagship palettes, per-slide gradient editor, character-by-character shading engine, 7 semantic pill presets, relative luminance formula, and 9-cell text alignment.
8. `02-spec/07-design-system/34-slide-layout-catalog.md` — Non-Image Text Mandate and the 20 master enterprise slide layouts: Title Hero, Executive Persona, Key Player Bio, Before/After Split, USP Strikethrough, SaaS Pricing, Steps Chain Roadmap, Social Proof, Talent Funnel, 3-Point Master Cards, Center, Left, One-Liner Quote, Process/Timeline, Counter Stat, Reveal Grid/Depth Stack, Embed, Poll/Q&A, Tabletop Hardware & Bike Showcase, and Tech Stack Matrix.
9. `02-spec/07-design-system/35-slide-builder-canvas-inspector.md` — Decoupled dual-store architecture (`useDeckStore` vs `useEditStore`), 7 visual canvas stacking layers, draggable `BuilderPanel`, `convertSlideType` engine, builder hotkeys, bounding box coordinate overrides, and PDF/handout exports.
10. `02-spec/07-design-system/37-image-specifications.md` — Non-image typography mandate, image plates, safe zones, avatar rules, and asset bounds.
11. `02-spec/07-design-system/38-card-and-pricing-components.md` — SaaS pricing card matrix, feature list hierarchy, and highlighted tier geometry.

---

## 3. Hard Architectural Rules

1. **Non-Image Text Mandate (Pure DOM Typography):** ZERO headlines, subheads, bullets, metrics, or captions flattened into raster images. All text must be live DOM elements (`<h1>`, `<h2>`, `<p>`, `<span>`).
2. **Authoritative 1920×1080 Canvas:** Uniform scaling: `scale = min(viewportWidth / 1920, viewportHeight / 1080)`.
3. **Floating HUD on Viewport:** Anchored outside scaled canvas (`z-index: 60`), 2.5s idle fade, Web Audio synthesized chimes.
4. **Dual-Store Architecture:** `useDeckStore` persisted to localStorage; `useEditStore` purely ephemeral selection state.
5. **Strict Relative Git Paths:** No absolute filesystem paths or `file:///` URIs.
6. **Strict Lowercase File Naming:** All generated files must be lowercase kebab-case.
7. **Strict Boolean Standards:** Positive booleans evaluated implicitly (`if isReady`). Zero explicit `== true`.

---

## 4. Grounded Presentation Synthesis & Architectural Mandates (Global PPT & Flat Slide)

1. **Atmospheric Canvas Layer**: Always mount `<SlideBackground />` inside `#presentation-root` with:
   - Radial spotlight glow (`ellipse 65% 55% at 50% 48%`) keyed to `theme.accentColor`.
   - Sub-pixel 48px coordinate grid at 2.5% opacity.
   - Floating architectural vector motifs (`Layers`, `Terminal`, `Cpu`, `Shield`, `Compass`) at 8–12% opacity with wave float animation.
2. **Dynamic Text Micro-Shadows**:
   - Dark themes: `rgb(0 0 0) 1px 0.7px 0px`
   - Light themes: `rgb(255 255 255) 1px 0.7px 0px` (ink-stamp micro-shadow).
3. **Intra-Slide Step Progression Engine**:
   - Multi-step slides (`StepsSlide`, `TimelineRoadmapSlide`, `ProcessCycleSlide`, `DepthStackSlide`, `RevealGridSlide`) must consume `activeStep` from `useDeckStore`.
   - Navigation keys (`ArrowRight`, `Space`, `Enter`) and on-screen chevrons must step through internal phases before advancing slides.
   - Smooth spring transitions (`STEP_TRANSITION = 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)'`) and halos (`getStepHaloStyle`).
4. **Hard Rule #6 Component Sizing**:
   - Every single slide component (`src/components/slides/*.tsx`) MUST be strictly <= 100 lines. Decompose into leaf sub-components if needed.
5. **Master Deck Pre-Seeding**:
   - Every new archetype MUST be registered in `src/stores/initialDeck.ts` in `INITIAL_DECK` so it is immediately playable on load.
6. **Executive Persona Standardization**:
   - Alim Ul Karim is strictly titled `"Chief Software Engineer"` (never `"Founder"` or `"CEO"`).
7. **Positive Booleans Only**:
   - Use `is*` and `has*` prefixes exclusively (e.g. `isDark`, `isEditMode`, `hasCheckmark`, `hasCompetitorASupport`).

