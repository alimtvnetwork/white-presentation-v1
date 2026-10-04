# Subtask 06: Flat Sovereign Overview Components (Archetypes 09-15)

> **Task ID:** `Task-06`  
> **Parent:** `51-suite2033-global-ppt-flat-step-and-15-slide-expansion`  
> **Wave:** `Wave 2 (Slide Components & Deck Integration)`  
> **Status:** `PENDING`  
> **Target Directory:** `src/components/presentation/slides/suite2033/`  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  

---

## 1. Objective & Scope
Implement the 7 Flat Sovereign Overview slide components delivering immediate situational clarity, full $1.00$ opacity across all structural panels (zero step dimming/blur), and adhering to the 100-line file size cap (`CODE-RED-006R`).

---

## 2. Target Slide Components
1. **`GlobalInfrastructureTopologyCockpitSlide.tsx`**
   - Type: `'global-infrastructure-topology-cockpit'` (1 step)
   - Domain: Global multi-region cloud datacenter clusters, Anycast BGP edge telemetry.
2. **`SaasUnitEconomicsBreakdownSlide.tsx`**
   - Type: `'saas-unit-economics-breakdown'` (1 step)
   - Domain: Investor SaaS mechanics: CAC, LTV, Gross Margin, Cohort Payback, Rule of 40.
3. **`EsgSustainabilityGovernanceMatrixSlide.tsx`**
   - Type: `'esg-sustainability-governance-matrix'` (1 step)
   - Domain: 3-pillar ESG compliance tracking: Environmental, Social, and Governance.
4. **`CapTableOwnershipWaterfallSlide.tsx`**
   - Type: `'cap-table-ownership-waterfall'` (1 step)
   - Domain: Equity cap table distribution, shareholder classes, liquidation preference waterfall.
5. **`AiModelEvaluationBenchmarkRadarSlide.tsx`**
   - Type: `'ai-model-evaluation-benchmark-radar'` (1 step)
   - Domain: 6-axis frontier AI model evaluation radar comparing reasoning, code, math, and tools.
6. **`EnterpriseSecurityPostureRadarSlide.tsx`**
   - Type: `'enterprise-security-posture-radar'` (1 step)
   - Domain: 6-vector CISO defense radar plotting Zero-Trust, EDR, CSPM, AppSec, and DLP.
7. **`PartnerEcosystemValueMapSlide.tsx`**
   - Type: `'partner-ecosystem-value-map'` (1 step)
   - Domain: Alliances value map: GSIs, Hyperscalers, ISV Technology Alliances, and Channel.

---

## 3. Inviolable Architectural Mandates
1. **Flat Sovereign Clarity ($1$ Step):** `maxSteps` is strictly 1. All cards and telemetry blocks render at full $1.00$ opacity with zero phantom steps or step blur.
2. **File Size Limit ($\le 100$ lines):** Every `.tsx` file must strictly stay within 100 lines (`CODE-RED-006R`).
3. **Dual-Mode Semantic Tokens:** Consume semantic CSS variables (`var(--pres-text)`, `var(--pres-bg-card)`, etc.).
4. **Northern UI/UX Typography Standard v1.3.3:** Pure live DOM typography; absolute floor $\ge 14\text{px}$.

---

## 4. Implementation Steps
1. Create `src/components/presentation/slides/suite2033/GlobalInfrastructureTopologyCockpitSlide.tsx`
2. Create `src/components/presentation/slides/suite2033/SaasUnitEconomicsBreakdownSlide.tsx`
3. Create `src/components/presentation/slides/suite2033/EsgSustainabilityGovernanceMatrixSlide.tsx`
4. Create `src/components/presentation/slides/suite2033/CapTableOwnershipWaterfallSlide.tsx`
5. Create `src/components/presentation/slides/suite2033/AiModelEvaluationBenchmarkRadarSlide.tsx`
6. Create `src/components/presentation/slides/suite2033/EnterpriseSecurityPostureRadarSlide.tsx`
7. Create `src/components/presentation/slides/suite2033/PartnerEcosystemValueMapSlide.tsx`

---

## 5. Acceptance Criteria
- [x] All 7 components compile cleanly with zero TypeScript errors.
- [x] File size of each `.tsx` file is $\le 100$ lines.
- [x] Renders fully at step 1 with complete data density and visual balance.
