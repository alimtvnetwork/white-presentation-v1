# Subtask 03: Flat Slide & Step-by-Step Slide Engine Improvements

> **Task ID:** `Task-03`  
> **Parent:** `47-global-ppt-suite2029-slide-expansion`  
> **Status:** `PENDING`  
> **Owner:** Worker 01  

---

## Scope & Target Files
1. `src/components/slides/StepsSlide.tsx`
   - Upgrade step progression rendering with the 3-phase kinetic lifecycle:
     - Active step: Plane 2 elevated ($+24\text{px}$ Z-elevation, scale $1.02$, accent glow halo).
     - Completed steps: Plane 1 raised ($0.75$ opacity, subdued border).
     - Future steps: $0.38$ opacity with optical blur (`filter: blur(1.25px)`).
   - Add direct node click-to-jump navigation and magnetic hover micro-interactions.
2. `src/components/slides/StepByStepSlide.tsx`
   - Enhance 2-column sequential step reveal with tactile card physics, single-item focus, and smooth cubic-bezier transitions.
