# 4-Part Root Cause Analysis: Northern UI/UX Typography Standard & Header Scaling

> **Incident / Ticket:** `RCA-2026-10-03-NORTHERN-TYPOGRAPHY-AND-CONTRAST`  
> **Target Subsystem:** White Presentation Canvas, Slide Header Geometry & Northern Design Hierarchy  
> **Status:** REMEDIATED & ENFORCED  
> **Impacted Files:** `src/components/slides/*.tsx`, `src/components/slides/TalentPyramidSlide.tsx`, `src/components/slides/StepsSlide.tsx`, `02-spec/02-coding-guidelines/24-app-ui-design-system/01-design-principles.md`

---

## 1. Symptom

In executive review of the white presentation slides (specifically captured and annotated in `assets/screenshots/white-slides-ux-feedback-01.png`):
1. **Micro-Text at Top of Canvas:** The kicker badge (e.g. `ENGINEERING TALENT`) and the category subtitle directly beside it (`• Selectivity Pyramid`) were rendered in tiny `text-xs` (11px–12px) font sizes. Viewed on a 1920x1080 display or projector from standard viewing distances, this text was unreadable without squinting.
2. **Low-Contrast Yellow Kicker:** The kicker was wrapped in a pale yellow badge (`bg-amber-400/20 text-amber-300`) directly on the pure white `#FFFFFF` canvas, resulting in near-zero contrast ($C_R \approx 1.4:1$).
3. **Black Text Beside It Too Small:** The descriptive category text beside the kicker (`• Selectivity Pyramid`) was rendered in subtle dark gray/black at micro-scale, violating executive presentation clarity.
4. **Cognitive Crowding:** The right-hand column simultaneously displayed five cramped tier cards, preventing comfortable reading and diluting the presenter's focal point.

---

## 2. Root Cause Analysis

1. **Defaulting to Web Application Font Sizes Rather Than Presentation Canvas Scale:**
   - Standard web design systems utilize `text-xs` (12px) or `text-sm` (14px) for badges and metadata.
   - However, on a 1920x1080 presentation canvas viewed in presentation mode or projected onto conference displays, 12px text is completely illegible.
   - The Northern UI/UX design philosophy mandates bold, confident, oversized typography with minimal competing elements so audiences can instantly grasp key points in under 3 seconds.
2. **Leakage of Dark Mode Color Tokens to Light Canvas:**
   - Dark mode palettes commonly rely on light yellow/gold highlights (`text-amber-300`) for high-contrast visibility against pitch black.
   - When ported into `white-presentation-v1`, developers failed to invert or replace these tokens with high-contrast light-mode alternatives (e.g., deep royal violet `text-violet-800`, or deep bronze `text-amber-900` with $C_R \ge 8.6:1$).
3. **Multi-Card Layout Bias:**
   - Developers attempted to dump all five tier definitions onto the canvas at once instead of using interactive hover/step state machines to elevate one large hero card at a time.

---

## 3. Concrete Remediation

1. **Northern UI/UX Typography Standard Enforced Across Slide Headers:**
   - **Kicker Badges:** Scaled up from `text-xs` / `text-sm` to `text-base` (16px) or `text-lg` (18px) with `font-mono font-bold tracking-[0.2em] uppercase px-5 py-2 rounded-full`.
   - **Category Text Beside Kicker:** Scaled up to `text-base` or `text-lg` with `font-mono font-semibold` and high-contrast styling (`text-slate-800 dark:text-slate-200`).
   - **Main Slide Headings:** Scaled up from 40px–48px to **54px–62px font-black** (`font-ubuntu leading-none tracking-tight`).
   - **Active Detail Headings:** Scaled up to **42px–46px font-black** for immediate executive scanning.
2. **Zero Yellow-on-Light Invariant:**
   - Upgraded all badges and kickers to deep royal violet (`bg-violet-100 text-violet-800 border-violet-300 dark:bg-violet-900/40 dark:text-violet-300`) or deep amber (`bg-amber-100 text-amber-900 border-amber-300`).
   - Guaranteed minimum contrast ratio $C_R \ge 8.6:1$ on white surfaces.
3. **Interactive Single-Card Focus:**
   - Pyramid tiers and steps are made interactive (`onMouseEnter`, `onClick`, `jumpToStep`).
   - Right-side pane elevates a single focused card with generous whitespace, large font sizes (18px–22px body copy), and smooth CSS3 spring animations (`scale-105 ring-4`).
4. **Ambient 8% Presenter HUD:**
   - Controls docked away from slide content (top-right for controller, bottom-center for pagination).
   - Set to `opacity-[0.08]` when idle, awakening to `opacity-100` on hover in 300ms.

---

## 4. Permanent Prevention Guardrails

1. **Section 7 of Coding Guidelines Updated:** Codified the Northern UI/UX Typography Scale and Zero Yellow-on-Light invariant in `02-spec/02-coding-guidelines/24-app-ui-design-system/01-design-principles.md`.
2. **Linter & Component Sizing Enforcement:** React components strictly capped at $\le 100$ lines (Hard Rule #6) while upholding the enlarged typography scale.
3. **Automated Verification:** Any pull request or subagent execution must pass TypeScript typecheck, build verification, and version synchronization before release.
