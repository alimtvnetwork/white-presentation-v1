# Subtask 04: Kinetic Multi-Step Slide Components (Part 1, Archetypes 01-04)

> **Task ID:** `Task-04`  
> **Parent:** `51-suite2033-global-ppt-flat-step-and-15-slide-expansion`  
> **Wave:** `Wave 2 (Slide Components & Deck Integration)`  
> **Status:** `PENDING`  
> **Target Directory:** `src/components/presentation/slides/suite2033/`  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  

---

## 1. Objective & Scope
Implement the first 4 Kinetic Multi-Step slide components adhering to the 4-plane depth hierarchy, 3-phase progression lifecycle (`completed`, `active`, `future` with 1.25px blur and click-to-jump navigation), and the 100-line file size cap (`CODE-RED-006R`).

---

## 2. Target Slide Components
1. **`StrategicInitiativeCascadeSlide.tsx`**
   - Type: `'strategic-initiative-cascade'`
   - Stage Array: `cascadeHorizons` (4 steps)
   - Domain: Executive strategy, strategic horizons H1-H4, capital allocation.
2. **`AiAgentOrchestrationPipelineSlide.tsx`**
   - Type: `'ai-agent-orchestration-pipeline'`
   - Stage Array: `orchestrationPhases` (4 steps)
   - Domain: Multi-agent LLM reasoning pipeline, swarm debate, MCP tool execution, consensus verification.
3. **`MaSynergyRealizationBridgeSlide.tsx`**
   - Type: `'ma-synergy-realization-bridge'`
   - Stage Array: `synergyWaves` (4 steps)
   - Domain: M&A integration, cumulative EBITDA accretion waterfall, PMO audit stamp.
4. **`ZeroDayIncidentContainmentLoopSlide.tsx`**
   - Type: `'zero-day-incident-containment-loop'`
   - Stage Array: `containmentSteps` (4 steps)
   - Domain: Cybersecurity crisis containment loop, MTTD/MTTR telemetry, SOC radar sweep.

---

## 3. Inviolable Architectural Mandates
1. **File Size Limit ($\le 100$ lines):** Every `.tsx` file must strictly stay within 100 lines. Extract sub-panels or cards into helper files if necessary.
2. **Deterministic 3-Phase Step Lifecycle:**
   - Completed: Opacity $0.75$, settled transform, checkmark icon.
   - Active: Opacity $1.00$, elevated scale ($1.02\text{x}$), Plane 2 ($z: 20$), halo glow border.
   - Future: Opacity $0.38$, optical blur ($1.25\text{px}$), clickable to jump directly to that step.
3. **Dual-Mode Semantic Tokens:** Use `var(--pres-text)`, `var(--pres-bg-card)`, etc. Zero hardcoded `text-white` or `bg-slate-900`.
4. **Northern UI/UX Typography Standard v1.3.3:** Pure DOM typography; absolute floor $\ge 14\text{px}$.
5. **Executive Persona Attribution:** Chief Software Engineer Alim Ul Karim (`CODE-RED-011`).

---

## 4. Implementation Steps
1. Create `src/components/presentation/slides/suite2033/StrategicInitiativeCascadeSlide.tsx`
2. Create `src/components/presentation/slides/suite2033/AiAgentOrchestrationPipelineSlide.tsx`
3. Create `src/components/presentation/slides/suite2033/MaSynergyRealizationBridgeSlide.tsx`
4. Create `src/components/presentation/slides/suite2033/ZeroDayIncidentContainmentLoopSlide.tsx`

---

## 5. Acceptance Criteria
- [ ] All 4 components compile with zero TypeScript errors.
- [ ] File size of each `.tsx` file is $\le 100$ lines.
- [ ] Step progression responds fluidly to `activeStep` (1 through 4).
- [ ] Clicking any step card jumps to that step via `onStepChange`.
