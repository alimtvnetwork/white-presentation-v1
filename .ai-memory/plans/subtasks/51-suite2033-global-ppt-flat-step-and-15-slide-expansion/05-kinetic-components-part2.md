# Subtask 05: Kinetic Multi-Step Slide Components (Part 2, Archetypes 05-08)

> **Task ID:** `Task-05`  
> **Parent:** `51-suite2033-global-ppt-flat-step-and-15-slide-expansion`  
> **Wave:** `Wave 2 (Slide Components & Deck Integration)`  
> **Status:** `PENDING`  
> **Target Directory:** `src/components/presentation/slides/suite2033/`  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  

---

## 1. Objective & Scope
Implement Kinetic Multi-Step slide components 05 through 08 adhering to the 4-plane depth hierarchy, 3-phase progression lifecycle (`completed`, `active`, `future` with 1.25px blur and click-to-jump navigation), and the 100-line file size cap (`CODE-RED-006R`).

---

## 2. Target Slide Components
1. **`CloudMigrationWaveStepperSlide.tsx`**
   - Type: `'cloud-migration-wave-stepper'`
   - Stage Array: `migrationWaves` (4 steps)
   - Domain: Enterprise multi-DC cloud cutover, server inventory, downtime meters.
2. **`CustomerLifecycleExpansionFunnelSlide.tsx`**
   - Type: `'customer-lifecycle-expansion-funnel'`
   - Stage Array: `expansionStages` (4 steps)
   - Domain: B2B SaaS PLG customer journey, ACV bracket tiers, NRR cohort metrics.
3. **`DataLineageGovernanceFlowSlide.tsx`**
   - Type: `'data-lineage-governance-flow'`
   - Stage Array: `governanceHops` (4 steps)
   - Domain: End-to-end data provenance, cryptographic hashing, PII masking, compliance.
4. **`ProductReleaseBurnUpCadenceSlide.tsx`**
   - Type: `'product-release-burn-up-cadence'`
   - Stage Array: `releaseGates` (4 steps)
   - Domain: Quality-gated enterprise software delivery, story point burn-up, signoff by Alim Ul Karim.

---

## 3. Inviolable Architectural Mandates
1. **File Size Limit ($\le 100$ lines):** Every `.tsx` file must strictly stay within 100 lines (`CODE-RED-006R`).
2. **Deterministic 3-Phase Step Lifecycle:**
   - Completed: Opacity $0.75$, settled transform, checkmark icon.
   - Active: Opacity $1.00$, elevated scale ($1.02\text{x}$), Plane 2 ($z: 20$), halo glow border.
   - Future: Opacity $0.38$, optical blur ($1.25\text{px}$), clickable to jump directly to that step.
3. **Dual-Mode Semantic Tokens:** Consume semantic CSS variables (`var(--pres-text)`, `var(--pres-bg-card)`, etc.).
4. **Northern UI/UX Typography Standard v1.3.3:** Pure live DOM typography; absolute floor $\ge 14\text{px}$.
5. **Executive Persona Standard:** Chief Software Engineer Alim Ul Karim (`CODE-RED-011`).

---

## 4. Implementation Steps
1. Create `src/components/presentation/slides/suite2033/CloudMigrationWaveStepperSlide.tsx`
2. Create `src/components/presentation/slides/suite2033/CustomerLifecycleExpansionFunnelSlide.tsx`
3. Create `src/components/presentation/slides/suite2033/DataLineageGovernanceFlowSlide.tsx`
4. Create `src/components/presentation/slides/suite2033/ProductReleaseBurnUpCadenceSlide.tsx`

---

## 5. Acceptance Criteria
- [x] All 4 components compile cleanly with zero TypeScript errors.
- [x] File size of each `.tsx` file is $\le 100$ lines.
- [x] Step progression responds fluidly to `activeStep` (1 through 4).
- [x] Direct click navigation works seamlessly.
