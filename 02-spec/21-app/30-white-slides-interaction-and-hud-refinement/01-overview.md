# 01-Overview: White Slides Hover Animation, Northern UI/UX Font Scaling & Low-Opacity HUD Refinement

> **Module:** `02-spec/21-app/30-white-slides-interaction-and-hud-refinement`  
> **Status:** ACTIVE SPECIFICATION  
> **Target Release:** `v1.3.2`  
> **Originating Issue:** User Feedback & Visual Analysis (`assets/screenshots/white-slides-ux-feedback-01.png`)

---

## 1. Executive Summary & Problem Space

During rigorous visual review of white presentation slides (`white-presentation-v1`), several critical UX and visual defects were identified:
1. **Zero Yellow-on-Light Contrast Failure:**
   - Elements used pale amber/yellow badges or text (`bg-amber-400/20 text-amber-300`) on white or light surfaces.
   - On `#FFFFFF`, this results in a catastrophic contrast ratio of ~1.4:1, completely failing WCAG AA (minimum 4.5:1).
   - **Resolution:** Strict non-negotiable ban on light yellow/amber colors on white/light backgrounds. Light modes must use high-contrast dark royal violet or dark slate tokens.
2. **Northern UI/UX Typography Scale & Cognitive Density:**
   - Previous designs suffered from cramped text (10–11px labels, 13px descriptions) and information overload (5 concurrent detailed cards displayed on the right).
   - **Resolution:** Adopt the Northern UI/UX typography standard: large bold kickers ($\ge 14\text{px}$ with `tracking-[0.2em]`), prominent titles ($42\text{px}–56\text{px}$), and single-item executive focus (progressive disclosure via hover/active selection).
3. **Hover Animatable & Step-by-Step Interactions:**
   - Left-hand graphical elements (such as pyramid tiers and step rows) were static.
   - **Resolution:** Hovering or clicking on steps triggers smooth CSS3 transitions (`cubic-bezier(0.22, 1, 0.36, 1)`), causing the corresponding detail card to pop up on the right-hand side.
4. **HUD Controller & Slider Refinement:**
   - The navigation controls and slide indicator sat statically at 100% opacity, obstructing content and cluttering the slide canvas.
   - **Resolution:** Implement low idle opacity (~8%–10%), waking up smoothly to 100% on mouse hover.
   - Compact the button footprint, relocate pagination to avoid bottom-left collisions, and provide rich tooltips showing slide titles and keyboard shortcuts (`<kbd>`).

---

## 2. User Request (Verbatim)

```text
# High Priority Instruction

In the white slides, you need to make this, let's say, hover animatable, and step by step. Let's say if I hover over or click on these steps, I would see the new items popping up in the right-hand side. And also at the same time, try to have bigger fonts and less items. Bigger fonts are easier for the people to focus in. This is the high priority, and never put yellow light color with the light color. This is strictly avoid. Update your documentation and also this thing needs to be updated in the coding guideline as well as the design spec. It is very important. Now, every time I hover over, it should have a nice transition animation, CSS3. And if you just check the slider, it looks very poor. The slider needs to be moved from one place to the another. Same as the controller, should be moved around and probably the opacity very low, wherever we put it. Barely visible, like 8% of the time, and reduce the size of these controllers and also the slide numbers. It should have a tooltip. You can check the slide examples in the global PPT, how it is designed, how the tooltip is. You can get inspiration from there. Do proper research and follow. And do not make the mistakes.

# Actionable Items Must Follow Non-Negotiable

1. Never put yellow light color on light color. Strictly avoid. Update documentation, coding guidelines, and design specs.
2. In white slides, make steps/graphics hover animatable and step-by-step with CSS3 transitions.
3. Hovering or clicking on steps shows new items popping up on the right-hand side.
4. Bigger fonts and less items (reduce density, improve executive focus).
5. Slider and controller: move around, reduce size, and set opacity very low (~8% idle opacity).
6. Controllers and slide numbers must have tooltips (slide title, keyboard shortcuts) inspired by global PPT.
```

---

## 3. Core Architectural Pillars

| Pillar | Principle | Architectural Requirement |
|---|---|---|
| **Pillar 1** | **Contrast Integrity** | ZERO light yellow/amber text on light canvases ($C_R \ge 7.0:1$ target). |
| **Pillar 2** | **Northern Typography** | Minimum kicker font size $14\text{px}$; titles $44\text{px}+$; high legibility floor. |
| **Pillar 3** | **Progressive Disclosure** | 1 focused active card instead of 5 simultaneous crowded cards on hover/click. |
| **Pillar 4** | **Tactile CSS3 Motion** | `cubic-bezier(0.22, 1, 0.36, 1)` easing for hover scaling, lift, and popups. |
| **Pillar 5** | **Subtle Ambient HUD** | $8\%–10\%$ idle opacity with instant wake-up on hover and rich accessible tooltips. |
