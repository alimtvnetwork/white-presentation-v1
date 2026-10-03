import type {
  BoardroomMarketInflectionThesisSlideData, AsymmetricThreatDefenseMatrixSlideData,
  HardwareAcceleratorDieTopologySlideData, CustomerExperienceJourneyDeltaSlideData,
  ExecutiveBoardMandateCtaSlideData,
} from '../../types/modern/boardroomStrategyTypes';

export function createBoardroomMarketInflectionThesisSlide(id = 'slide-market-thesis'): BoardroomMarketInflectionThesisSlideData {
  return {
    id, type: 'boardroom-market-inflection-thesis',
    title: 'Boardroom Market Inflection Thesis & Strategic Moat',
    subtitle: 'Transitioning from legacy manual software delivery to autonomous agentic platforms',
    kicker: 'BOARDROOM EXECUTIVE STRATEGY', themeId: 'corporate-clean', activeStep: 1, maxSteps: 1,
    executiveSponsor: 'Alim Ul Karim, Chief Software Engineer', isStrategicPriority: true,
    tamSummary: { totalAddressableMarket: '$184B TAM by 2028', compoundAnnualGrowthRate: '34.8% CAGR', currentMarketPenetration: '3.8% Enterprise', projectedAnnualRevenue: '$185M ARR', isBoardApproved: true },
    thesisPillars: [
      { id: 'tp1', pillarTitle: 'Legacy Architecture Paradox', coreThesisStatement: 'Enterprises spend 78% of engineering payroll maintaining brittle CI/CD scripts.', quantitativeProof: '$42.8M Annual Waste', strategicOutcome: 'Replacement wedge created.', isPillarValidated: true, hasCompetitiveMoat: false, strategicEnablers: ['Debt Audit', 'DORA Collapse'] },
      { id: 'tp2', pillarTitle: 'Autonomous Scaffolding Wedge', coreThesisStatement: 'Autonomous multi-agent loops compress 6-month software cycles into hours.', quantitativeProof: '12x Velocity Acceleration', strategicOutcome: 'Time-to-market advantage.', isPillarValidated: true, hasCompetitiveMoat: true, strategicEnablers: ['Rule R1 Zero Build', 'Sub-100-line AST'] },
      { id: 'tp3', pillarTitle: 'Defensibility Data Moat', coreThesisStatement: 'Design token architectures and mathematical contrast engines eliminate switching.', quantitativeProof: '138% Net Retention', strategicOutcome: 'Unmatched switching friction.', isPillarValidated: true, hasCompetitiveMoat: true, strategicEnablers: ['Northern UI/UX', 'WCAG AAA'] },
      { id: 'tp4', pillarTitle: 'Financial Trajectory', coreThesisStatement: 'Expanding gross margins to 82.4% with Rule of 40 performance.', quantitativeProof: '62% Rule of 40 Score', strategicOutcome: 'Top-decile public market profile.', isPillarValidated: true, hasCompetitiveMoat: true, strategicEnablers: ['20% FCF', 'High LTV:CAC'] },
    ],
  };
}

export function createAsymmetricThreatDefenseMatrixSlide(id = 'slide-threat-defense'): AsymmetricThreatDefenseMatrixSlideData {
  return {
    id, type: 'asymmetric-threat-defense-matrix',
    title: 'Asymmetric Threat Defense Matrix & Zero-Day Isolation',
    subtitle: 'Continuous mapping of hostile cyber vectors against autonomous eBPF containment and SLSA Level 4 provenance',
    kicker: 'MISSION-CRITICAL CYBER DEFENSE', themeId: 'corporate-clean', activeStep: 1, maxSteps: 1,
    securityAuditor: 'Alim Ul Karim, Chief Software Engineer', isPerimeterHardened: true,
    defenseHeader: { activeDefenseStatus: 'Hardened Perimeter Defense (Optimal)', mitreCoveragePercentage: 98.4, meanTimeToContainSeconds: 6.8, dailyQuarantinedProbes: 8420, isAirGapActive: true },
    threatVectors: [
      { id: 'tv1', threatName: 'Ransomware & East-West Propagation', mitreAttackId: 'T1486', hostileVectorDescription: 'Automated horizontal lateral traversal', autonomousDefenseMechanism: 'Cilium eBPF socket kill & snapshot rollback', meanTimeToContainSeconds: 4.2, mitigationConfidencePercentage: 99.98, isVectorMitigated: true, hasAutomatedRollback: true, countermeasures: ['Socket Isolation', 'Ephemeral Rootfs'] },
      { id: 'tv2', threatName: 'Software Supply Chain Compromise', mitreAttackId: 'T1195', hostileVectorDescription: 'Malicious upstream package manifest injection', autonomousDefenseMechanism: 'SLSA Level 4 hermetic compilation & Cosign', meanTimeToContainSeconds: 2.1, mitigationConfidencePercentage: 100, isVectorMitigated: true, hasAutomatedRollback: true, countermeasures: ['Hermetic Builds', 'Cosign Signing'] },
      { id: 'tv3', threatName: 'Zero-Day RCE Exploitation', mitreAttackId: 'T1203', hostileVectorDescription: 'Memory safety exploit bypassing standard WAF', autonomousDefenseMechanism: 'eBPF kernel syscall monitoring & container eviction', meanTimeToContainSeconds: 8.4, mitigationConfidencePercentage: 98.2, isVectorMitigated: true, hasAutomatedRollback: true, countermeasures: ['Syscall Profiler', 'Seccomp-BPF'] },
      { id: 'tv4', threatName: 'Privilege Escalation & Rogue Tokens', mitreAttackId: 'T1078', hostileVectorDescription: 'Compromised administrative token database dump', autonomousDefenseMechanism: 'Casbin Just-In-Time RBAC multi-party signoff', meanTimeToContainSeconds: 1.2, mitigationConfidencePercentage: 99.99, isVectorMitigated: true, hasAutomatedRollback: true, countermeasures: ['Two-Man Rule', 'HSM Revocation'] },
    ],
  };
}

export function createHardwareAcceleratorDieTopologySlide(id = 'slide-hardware-die'): HardwareAcceleratorDieTopologySlideData {
  return {
    id, type: 'hardware-accelerator-die-topology',
    title: 'Hardware Accelerator Silicon Die Package Topology',
    subtitle: 'Micro-architectural floorplan of monolithic 3nm tensor compute accelerator with 192GB HBM3e stacks',
    kicker: 'SEMICONDUCTOR COMPUTE SYSTEMS', themeId: 'corporate-clean', activeStep: 1, maxSteps: 1,
    siliconArchitect: 'Alim Ul Karim, Chief Software Engineer', isDieTapeOutVerified: true,
    packageTelemetry: { processNodeNanometers: 'TSMC 3nm N3P FinFET', totalTransistorCount: '184B Transistors', hbm3eCapacityGigabytes: 192, memoryBandwidthTerabytesPerSec: 8.0, peakComputeTflopsFp8: 2400, thermalDesignPowerWatts: 700, averageDieTemperatureCelsius: 68.4, isLiquidCoolingActive: true },
    dieBlocks: [
      { id: 'db1', blockName: 'Tensor Processing Matrix', blockType: 'COMPUTE', transistorCountBillions: 92, powerConsumptionWatts: 420, areaSquareMillimeters: 412, isBlockOperational: true, hasHardwareIsolation: true },
      { id: 'db2', blockName: 'HBM3e Controller Mesh', blockType: 'MEMORY', transistorCountBillions: 38, powerConsumptionWatts: 140, areaSquareMillimeters: 186, isBlockOperational: true, hasHardwareIsolation: true },
      { id: 'db3', blockName: '256MB Shared L2 SRAM Cache', blockType: 'MEMORY', transistorCountBillions: 32, powerConsumptionWatts: 65, areaSquareMillimeters: 118, isBlockOperational: true, hasHardwareIsolation: true },
      { id: 'db4', blockName: '900 GB/s NVLink Transceivers', blockType: 'INTERCONNECT', transistorCountBillions: 22, powerConsumptionWatts: 75, areaSquareMillimeters: 98, isBlockOperational: true, hasHardwareIsolation: true },
    ],
  };
}

export function createCustomerExperienceJourneyDeltaSlide(id = 'slide-cx-delta'): CustomerExperienceJourneyDeltaSlideData {
  return {
    id, type: 'customer-experience-journey-delta',
    title: 'Customer Experience Journey Transformation & Value Delta',
    subtitle: 'Side-by-side comparison of legacy friction versus autonomous platform workflows driving +74 NPS',
    kicker: 'CUSTOMER EXPERIENCE TRANSFORMATION', themeId: 'corporate-clean', activeStep: 1, maxSteps: 1,
    customerExperienceLead: 'Alim Ul Karim, Chief Software Engineer', isJourneyValidated: true,
    deltaSummary: { consolidatedCsatScore: 4.88, netPromoterScore: 74, averageOnboardingHours: 2.0, monthlyCustomerChurnPercentage: 0.38, isSatisfactionExceedingBenchmark: true },
    journeyStages: [
      { id: 'js1', stageName: 'Initial Discovery & Sign-Up', legacyPainPoints: ['14-Field Form', '3-Day Sales Delay'], modernSovereignExperience: ['Passkey WebAuthn Login', 'Sandboxed Preview'], timeToCompleteDelta: '-99.9% (45 Seconds)', satisfactionUpliftPercentage: 42, isFrictionEliminated: true, hasAutonomousSupport: true },
      { id: 'js2', stageName: 'Enterprise Team Onboarding', legacyPainPoints: ['21-Day Services Engagement', 'Manual IAM Scripts'], modernSovereignExperience: ['Golden Path Scaffolding', 'SSO SCIM Federation'], timeToCompleteDelta: '-99.6% (2 Hours)', satisfactionUpliftPercentage: 58.5, isFrictionEliminated: true, hasAutonomousSupport: true },
      { id: 'js3', stageName: 'Daily Production Delivery Loop', legacyPainPoints: ['14-Day Code Review Queues', 'Flaky Staging'], modernSovereignExperience: ['Sub-Second AST Checking', 'Ephemeral Previews'], timeToCompleteDelta: '14 Days to 18 Minutes', satisfactionUpliftPercentage: 64.2, isFrictionEliminated: true, hasAutonomousSupport: true },
      { id: 'js4', stageName: 'Renewal & Sovereign Expansion', legacyPainPoints: ['Adversarial Procurement', 'Overage Cost Shocks'], modernSovereignExperience: ['Real-Time Economics HUD', 'Predictable Flat-Tier'], timeToCompleteDelta: 'Signed in 24 Hours', satisfactionUpliftPercentage: 36.8, isFrictionEliminated: true, hasAutonomousSupport: true },
    ],
  };
}

export function createExecutiveBoardMandateCtaSlide(id = 'slide-board-mandate'): ExecutiveBoardMandateCtaSlideData {
  return {
    id, type: 'executive-board-mandate-cta',
    title: 'Executive Board Mandate & Capital Allocation Call-to-Action',
    subtitle: 'Unanimous board resolution enacting $24.0M capital allocation for sovereign engineering platforms',
    kicker: 'BOARDROOM ACTION MANDATE', themeId: 'corporate-clean', activeStep: 1, maxSteps: 1,
    chiefSoftwareEngineer: 'Alim Ul Karim', cryptographicSignoffHash: '0xe819f72b9a103c8471da9284fe2091c34a8e0f17b38c291849a62efc3104821a', hasBoardApprovalSeal: true,
    resolutionSummary: { resolutionId: 'BOD-RES-2026-10-45', capitalTrancheAmount: '$24.0M Strategic Allocation', boardVoteStatus: 'Unanimously Approved (7-0)', targetCompletionQuarter: 'FY2027-Q2', isResolutionAdopted: true },
    mandatePillars: [
      { id: 'mp1', pillarTitle: 'Tranche 1 Capital Allocation', primaryActionLabel: '$24.0M Deployment', keyMetricOrTarget: '60% Platform, 25% GTM, 15% Reserves', executionWindow: '30-Day Drawdown', isActionApproved: true, isExecutionReady: true, deliverables: ['Fund Fleet', 'Scale Split-DB'] },
      { id: 'mp2', pillarTitle: '90-Day Execution Milestones', primaryActionLabel: 'Wave 1 Cutover', keyMetricOrTarget: 'Cutover 42 Mission-Critical Services', executionWindow: 'Day 1 to Day 90', isActionApproved: true, isExecutionReady: true, deliverables: ['Migrate Auth', 'Deploy eBPF'] },
      { id: 'mp3', pillarTitle: 'Governance & Cryptographic Audit', primaryActionLabel: 'Immutable Signoff', keyMetricOrTarget: 'Zero-Drift Compliance & SOC 2 Ledger', executionWindow: 'Ongoing Monitoring', isActionApproved: true, isExecutionReady: true, deliverables: ['Alim Ul Karim, Chief Software Engineer Signoff', 'Merkle Proof Archival'] },
      { id: 'mp4', pillarTitle: 'Immediate Boardroom Action CTA', primaryActionLabel: 'Formal Enactment', keyMetricOrTarget: 'Execute Closing Signatures & Treasury Wire', executionWindow: 'Session Adjournment', isActionApproved: true, isExecutionReady: true, deliverables: ['Charter Amendment', 'Publish Notice'] },
    ],
  };
}
