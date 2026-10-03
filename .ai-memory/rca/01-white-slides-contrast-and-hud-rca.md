# 4-Part Root Cause Analysis: Yellow-on-Light Contrast, Information Density, and HUD Usability

> **Incident / Ticket:** `RCA-2026-10-03-WHITE-SLIDES-UX`  
> **Target Subsystem:** White Presentation UI, Slide Archetypes & Presenter HUD  
> **Status:** REMEDIATED & ENFORCED  
> **Impacted Files:** `src/components/slides/TalentPyramidSlide.tsx`, `src/components/slides/StepsSlide.tsx`, `src/components/canvas/NavigationControls.tsx`, `src/components/canvas/SlideIndicator.tsx`

---

## 1. Symptom

In user testing and visual review of white presentation slides (specifically recorded in `assets/screenshots/white-slides-ux-feedback-01.png`):
1. **Low Contrast / Illegible Text:** Kicker badges and highlights rendered in pale yellow/amber on light/white surfaces (`bg-amber-400/20 text-amber-300` on white canvas `#FFFFFF`), yielding a contrast ratio of ~1.4:1 (failing WCAG AA minimum 4.5:1).
2. **Excessive Item Density & Small Typography:** Slides like `TalentPyramidSlide` simultaneously rendered 5 complex cards on the right with small, cramped typography (11px labels, 13px descriptions), causing cognitive overload for executive audiences.
3. **Lack of Interactivity:** Left-side graphic elements (e.g. pyramid tiers, step rows) were static. Hovering or clicking on tiers did not reveal or animate corresponding details on the right.
4. **Poor HUD Controller & Slider UX:** The bottom-left slide number indicator and navigation controller were bulky, rendered at 100% opacity continuously, and lacked informative tooltips (slide titles, shortcuts), cluttering the presentation canvas.

---

## 2. Root Cause Analysis

1. **Dark Theme Direct Porting Without Mode-Specific Contrast Adapters:**
   - Slide components originally ported from dark-mode slide decks (`global-ppt-v1`) utilized Tailwind utilities such as `text-amber-300`, `text-amber-400`, and `bg-amber-400/20` designed for deep slate/black canvases (`#0B0B0E`).
   - When mounted onto light/white backgrounds (`#FFFFFF` in `white-brand`), these pale yellow hues washed out entirely.
2. **Unfocused Information Density Pattern:**
   - Rather than implementing progressive disclosure, all 5 pyramid tier breakdown cards were rendered simultaneously in a vertical flex column, forcing tiny typography (`text-[11px]`, `text-[13px]`) to squeeze onto the 1080p canvas.
3. **Absence of Local/Interactive Selection State:**
   - `TalentPyramidSlide` and `StepsSlide` lacked an active tier/step hover state (`hoveredTier`, `selectedTier`) to drive interactive stage transitions and dynamic detail pane swapping.
4. **Static HUD Docking Without Idle Dissolve:**
   - Navigation controls and slide indicators were given static, heavy dark-glass styling (`bg-slate-900/90`) without mouse-inactivity or idle opacity dimming (~8%–10% idle opacity, wake-on-hover).

---

## 3. Concrete Remediation

1. **Strict Elimination of Yellow/Amber on Light Surfaces:**
   - Banned light amber/yellow tokens (`text-amber-200`, `text-amber-300`, `text-amber-400`, `text-yellow-300`) on white or light backgrounds.
   - Standardized on high-contrast royal violet (`text-violet-700`, `bg-violet-100`, `border-violet-300`) or deep slate (`text-slate-900`) for light themes, while preserving warm amber highlights only on dark/black backgrounds.
2. **Northern UI/UX Typography Scale & Single-Item Focus:**
   - Elevated kicker labels to $\ge 14\text{px}$ (`text-sm font-bold uppercase tracking-[0.2em]`).
   - Replaced multi-card clutter with a single high-focus active card on the right that displays the active tier with large numbers, clear metrics, and bold typography (`text-3xl font-bold`).
3. **Smooth CSS3 Hover & Click Transitions:**
   - Made left-side pyramid tiers and steps interactive: hovering or clicking updates the active tier/step with fluid CSS3 spring transitions (`cubic-bezier(0.22, 1, 0.36, 1)`).
   - Added subtle transform lift (`translateY(-2px)` / `scale(1.02)`) and illuminated borders on hover.
4. **Refined Low-Opacity HUD & Rich Tooltips:**
   - Redesigned `NavigationControls` and `SlideIndicator` with an idle opacity of 8%–10% (`opacity-10 hover:opacity-100 transition-opacity duration-300`).
   - Compacted button footprint and added tooltips showing slide title and keyboard shortcuts (`<kbd>`).

---

## 4. Prevention Guardrails

1. **Coding Guideline Rule #25 Added:** Explicit non-negotiable rule forbidding yellow/amber light colors on light surfaces.
2. **Automated Contrast Verification:** `themeRuntime.ts` contrast audit verifies text luminance against canvas background.
3. **Component Sizing Rule #6 Preservation:** Every modified component (`TalentPyramidSlide.tsx`, `StepsSlide.tsx`, `NavigationControls.tsx`, `SlideIndicator.tsx`) strictly preserved $\le 100$ lines.
