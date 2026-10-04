# Subtask 02: GPU Kinetic Animations & Dual-Mode Semantic Styles

> **Task ID:** `Task-02`  
> **Parent:** `51-suite2033-global-ppt-flat-step-and-15-slide-expansion`  
> **Wave:** `Wave 1 (Contracts, Styles, Engine)`  
> **Status:** `PENDING`  
> **Target Files:** `src/styles/animations.less`, `src/styles/presentation.less`  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  

---

## 1. Objective & Scope
Implement the 4 signature hardware-accelerated GPU keyframe animations, responsive utility classes, and dual-mode semantic styling rules for Suite 2033 in strict alignment with [`01-architecture-spec.md`](../../../02-spec/21-app/51-suite2033-global-ppt-flat-step-and-15-slide-expansion/01-architecture-spec.md).

---

## 2. Inviolable Architectural Mandates
1. **Composited GPU Properties Only:** Keyframe animations must animate exclusively composited properties (`transform`, `opacity`, `stroke-dashoffset`, `filter`) with explicit `will-change` declarations to guarantee $60\text{fps}$ rendering.
2. **Dual-Mode Semantic Token Architecture:** Eliminate dark slabs on light themes. Ensure all background, border, and text styles consume semantic variables:
   - `var(--pres-text)`
   - `var(--pres-subtext)`
   - `var(--pres-bg-card)`
   - `var(--pres-border)`
   - `var(--pres-accent)`
   - `var(--pres-accent-glow)`
3. **Northern UI/UX Typography Standard v1.3.3:** Strict $\ge 14\text{px}$ floor on 1080p canvas; mono badges $\ge 16\text{px}$.
4. **Print / PDF Export Compatibility:** Ensure `@media print` rules suppress infinite animations and render high-fidelity crisp vector representations.

---

## 3. Implementation Steps
1. In `src/styles/animations.less`, verify and add keyframe definitions:
   ```less
   @keyframes radarSweepPulse {
     0% { transform: rotate(0deg); opacity: 0.85; filter: drop-shadow(0 0 4px var(--pres-accent)); }
     50% { opacity: 0.4; }
     100% { transform: rotate(360deg); opacity: 0.85; filter: drop-shadow(0 0 12px var(--pres-accent)); }
   }

   @keyframes pipelineDataFlow {
     0% { stroke-dashoffset: 200; opacity: 0.35; filter: drop-shadow(0 0 2px var(--pres-accent)); }
     50% { opacity: 1; filter: drop-shadow(0 0 8px var(--pres-accent)); }
     100% { stroke-dashoffset: 0; opacity: 0.35; filter: drop-shadow(0 0 2px var(--pres-accent)); }
   }

   @keyframes cascadeRampGlow {
     0% { background-position: 0% 50%; box-shadow: 0 0 0 rgba(0, 0, 0, 0); }
     50% { background-position: 100% 50%; box-shadow: 0 0 20px -2px var(--pres-accent-glow); }
     100% { background-position: 200% 50%; box-shadow: 0 0 0 rgba(0, 0, 0, 0); }
   }

   @keyframes metricPulseBeacon {
     0% { transform: scale(0.96); box-shadow: 0 0 0 0 var(--pres-accent-glow); opacity: 0.8; }
     70% { transform: scale(1.04); box-shadow: 0 0 0 12px rgba(0, 0, 0, 0); opacity: 1; }
     100% { transform: scale(0.96); box-shadow: 0 0 0 0 rgba(0, 0, 0, 0); opacity: 0.8; }
   }
   ```
2. Add hardware-accelerated utility classes:
   - `.animate-radar-sweep`
   - `.animate-pipeline-flow`
   - `.animate-cascade-ramp`
   - `.animate-metric-beacon`
3. Verify `@media print` rules in `src/styles/presentation.less`:
   - `@page { size: 1920px 1080px; margin: 0; }`
   - Suppress animation loops during print to guarantee static clarity.

---

## 4. Acceptance Criteria
- [ ] LESS compilation succeeds without syntax errors.
- [ ] Animations run with zero layout recalculations / layout thrashing.
- [ ] Dual-mode light/dark themes adapt cleanly without dark slab artifacts.
