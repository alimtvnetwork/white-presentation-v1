# 02-Interaction & Hover Contracts: Step Animations, Northern Scale & Focused Detail Cards

> **Module:** `02-spec/21-app/30-white-slides-interaction-and-hud-refinement`  
> **Status:** ACTIVE SPECIFICATION  
> **Component Focus:** `TalentPyramidSlide.tsx`, `StepsSlide.tsx`, `WhiteMasterSlide.tsx`

---

## 1. Zero Yellow-on-Light Color Contract

### 1.1 Forbidden Patterns
The following patterns are **strictly prohibited** in light mode components:
- `text-amber-200`, `text-amber-300`, `text-amber-400`, `text-yellow-200`, `text-yellow-300`, `text-yellow-400` on white or light backgrounds.
- `bg-amber-400/20 text-amber-300` on any light card or canvas.
- Amber or gold outlines with opacity $\le 0.4$ on light backgrounds.

### 1.2 Mandatory Replacements for Light Modes
- **Primary Kicker Badges:**
  ```tsx
  // Light Mode (High Contrast):
  <span className="px-3.5 py-1.5 rounded-full bg-violet-100 text-violet-800 border border-violet-200/80 font-mono text-xs font-bold tracking-[0.2em]">
    ENGINEERING TALENT
  </span>
  ```
- **Focal Highlights:**
  Use `text-violet-700` or `text-slate-900` on white canvas; reserve bright amber (`text-amber-400`) exclusively for dark canvas modes (`isDark === true`).

---

## 2. Northern UI/UX Typography Scale

To ensure high executive legibility and prevent visual crowding:

| Token / Role | Minimum Font Size | Tailwind Class | Letter Spacing | Contrast Requirement |
|---|---|---|---|---|
| **Category Kicker** | $14\text{px}$ | `text-sm font-bold` | `tracking-[0.2em]` | $\ge 7:1$ vs canvas |
| **Slide Main Title** | $44\text{px}–52\text{px}$ | `text-4xl md:text-5xl font-black` | `tracking-tight` | $\ge 12:1$ vs canvas |
| **Subtitle / Thesis** | $20\text{px}–24\text{px}$ | `text-lg md:text-xl font-medium` | `tracking-normal` | $\ge 4.5:1$ vs canvas |
| **Focused Card Title** | $28\text{px}–32\text{px}$ | `text-2xl md:text-3xl font-bold` | `tracking-tight` | $\ge 7:1$ vs card bg |
| **Card Metric Stat** | $48\text{px}–56\text{px}$ | `text-4xl md:text-5xl font-black` | `tracking-tight` | $\ge 7:1$ vs card bg |
| **Card Body Copy** | $16\text{px}–18\text{px}$ | `text-base md:text-lg` | `leading-relaxed` | $\ge 4.5:1$ vs card bg |

---

## 3. Hover Interaction & Step-by-Step Popups

### 3.1 Step Hover & Click Mechanic
When a user hovers over or clicks any step/tier on the left-hand visual:
1. **Interactive Feedback:**
   - Active tier expands slightly: `transform: scale(1.025) translateY(-2px);`
   - Active border illuminates: `border-color: var(--pres-accent); box-shadow: 0 10px 25px -5px rgba(124, 58, 237, 0.25);`
   - Acoustic subtle pop/click cue triggered via `soundEngine.playPop()`.
2. **Dynamic Detail Card Popup on the Right:**
   - Instead of rendering all 5 tiers at once, the right pane displays **one prominent, highly detailed card** for the currently hovered or active tier.
   - Smooth CSS3 enter/exit transitions:
     ```css
     transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
     transform: translateY(0);
     opacity: 1;
     ```
   - Previous card fades down slightly while new card slides up smoothly (`keyframes slideInUpSoft`).

---

## 4. Line Limit Preservation (Hard Rule #6)

Every slide component (`TalentPyramidSlide.tsx`, `StepsSlide.tsx`, etc.) must remain **strictly $\le 100$ lines**.
- Decompose complex sub-elements into leaf components under `src/components/slides/pyramid/` or `src/components/slides/steps/` if necessary.
