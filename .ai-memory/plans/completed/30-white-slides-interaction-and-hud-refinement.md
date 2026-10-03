# Parent Plan: White Slides Hover Animation, Step Interactions, Northern UI/UX Font Scaling & Low-Opacity HUD Refinement

> **Task Slug:** `30-white-slides-interaction-and-hud-refinement`  
> **Status:** `COMPLETED`  
> **Protocol:** `@[.agents/skills/execute-parent-task-with-n-steps-v6]` ($N = 300, A = 2, H = 2, C = 30$)  
> **SQLite Coordination DB:** `.ai-memory/temp-agents/13-white-slides-hover-animation-step-interaction/agent-task.db`  
> **Shipped Release:** `v1.3.2`

---

## User Request (Verbatim)

```text
# High Priority Instruction

In the white slides, you need to make this, let's say, hover animatable, and step by step. Let's say if I hover over or click on these steps, I would see the new items popping up in the right-hand side. And also at the same time, try to have bigger fonts and less items. Bigger fonts are easier for the people to focus in. This is the high priority, and never put yellow light color with the light color. This is strictly avoid. Update your documentation and also this thing needs to be updated in the coding guideline as well as the design spec. It is very important. Now, every time I hover over, it should have a nice transition animation, CSS3. And if you just check the slider, it looks very poor. The slider needs to be moved from one place to the another. Same as the controller, should be moved around and probably the opacity very low, wherever we put it. Barely visible, like 8% of the time, and reduce the size of these controllers and also the slide numbers. It should have a tooltip. You can check the slide examples in the global PPT, how it is designed, how the tooltip is. You can get all these ideas and apply in your system. So another thing, do not have this type of small writing in the top. The yellow one I have highlighted, and also the besides black color is also very small. Never have the small writing, but make the writings bigger. This is the northern UI/UX concept. Do you understand all these factors? Can you please improve and also write the root cause analysis, why you did it, how you did it, so that you don't apply or do things in the future. Is it clear?

# Actionable Items Must Follow Non-Negotiable

1. Write a plan and spec first
2. Make hover animations and step-by-step interactions
3. Use bigger fonts and fewer items for focus
4. Avoid using yellow light color with light color
5. Update documentation, coding guidelines, and design specs
6. Implement CSS3 transition animations for hover effects
7. Improve slider appearance and functionality
8. Ensure controllers and slide numbers have low opacity and tooltips
9. Avoid small writing; use larger text for better readability
10. Conduct root cause analysis and document improvements

Must follow and spawn agent using 

@[.agents/skills/execute-parent-task-with-n-steps-v6]

## Additional Instructions

learn /learn if you have to learn something and /plan stuff before working please.
```

---

## Visual Evidence & Feedback Artifacts
- **User Annotated Screenshot:** ![User Feedback Screenshot](../../assets/screenshots/white-slides-ux-feedback-01.png)
  - **Issue 1 (Top Kicker):** Yellow light badge text on light background (`ENGINEERING TALENT`) + tiny subhead text. Remedied with `bg-violet-100 text-violet-800` ($C_R \ge 6.1:1$) and scaled to $\ge 14\text{px}$.
  - **Issue 2 (Left Graphic):** Pyramid steps made interactive (hoverable and clickable), driving step reveals.
  - **Issue 3 (Right Cards):** Single focused active card pops up on step hover/click with large typography.
  - **Issue 4 (Bottom Slider & Controller):** Relocated, reduced size, set to 8% idle opacity with rich title tooltips.

---

## Deliverables & Subtask Breakdown (100% Completed)

- **Subtask-01:** ✅ COMPLETED - Global PPT HUD Controller, Tooltip & Slider Architecture Research.
- **Subtask-02:** ✅ COMPLETED - Contrast Guidelines, Northern UI/UX Font Scaling & Hover Mechanics Research.
- **Subtask-03:** ✅ COMPLETED - 4-Part Root Cause Analysis (`.ai-memory/rca/01-white-slides-contrast-and-hud-rca.md`) & Comprehensive Architecture Specification (`02-spec/21-app/30-white-slides-interaction-and-hud-refinement/`).
- **Subtask-04:** ✅ COMPLETED - Coding Guidelines & Design Specs Update (`02-spec/02-coding-guidelines/24-app-ui-design-system/01-design-principles.md`).
- **Subtask-05:** ✅ COMPLETED - Slide Component Refactoring: TalentPyramidSlide & StepsSlide with hover animations, step reveals, bigger typography, and elimination of yellow-on-light.
- **Subtask-06:** ✅ COMPLETED - HUD Controller & Slider Refactoring: Low idle opacity (~8%), compact footprint, smooth CSS3 transitions, tooltips.
- **Subtask-07:** ✅ COMPLETED - Testing, Verification, Version Bump to `v1.3.2`, GitMap Atomic Hyphen Commit & Release Tagging.
