import type {
  ComplianceSoc2ReadinessLadderSlideData,
  ValueStreamDoraFlywheelSlideData,
} from '../../types/presentation';

// =============================================================================
// Archetype 14: Compliance Audit SOC 2 Readiness Ladder (compliance-audit-soc2-readiness-ladder)
// =============================================================================
export const createComplianceSoc2ReadinessLadderSlide = (
  id = `slide-soc2-ladder-${Date.now()}`,
  overrides?: Partial<ComplianceSoc2ReadinessLadderSlideData>
): ComplianceSoc2ReadinessLadderSlideData => ({
  id,
  type: 'compliance-audit-soc2-readiness-ladder',
  title: 'Continuous SOC 2 Type II Compliance Readiness Ladder',
  subtitle: 'Ascending Trust Ladder Across 5 AICPA Criteria to an Unqualified Independent Audit Opinion',
  kicker: 'Enterprise Governance & Trust',
  activeStep: 1,
  maxSteps: 5,
  auditFirm: {
    firmName: 'PricewaterhouseCoopers LLP',
    leadAuditorName: 'Senior Audit Partner',
    observationWindowMonths: 6,
    isUnqualifiedOpinionExpected: true,
  },
  continuousCompliance: {
    automatedEvidenceIngestionPercent: 98.4,
    failingControlsCount: 0,
    isContinuousMonitoringActive: true,
  },
  trustCriteriaScores: [
    {
      criteriaName: 'SECURITY',
      passedControlsCount: 68,
      totalControlsCount: 68,
      isCriteriaPassed: true,
    },
    {
      criteriaName: 'AVAILABILITY',
      passedControlsCount: 32,
      totalControlsCount: 32,
      isCriteriaPassed: true,
    },
    {
      criteriaName: 'CONFIDENTIALITY',
      passedControlsCount: 24,
      totalControlsCount: 24,
      isCriteriaPassed: true,
    },
    {
      criteriaName: 'PROCESSING_INTEGRITY',
      passedControlsCount: 28,
      totalControlsCount: 28,
      isCriteriaPassed: true,
    },
    {
      criteriaName: 'PRIVACY',
      passedControlsCount: 28,
      totalControlsCount: 28,
      isCriteriaPassed: true,
    },
  ],
  ladderSteps: [
    {
      stepIndex: 1,
      title: 'Scoping & Gap Analysis',
      timeframe: 'Month 1',
      controlPassRatioPercent: 100,
      totalControlsMonitored: 45,
      status: 'COMPLETED',
      isStepCompleted: true,
      isAuditorSignedOff: true,
      primaryEvidenceArtifact: 'ARTIFACT-SOC2-GAP-ASSESSMENT-V1.pdf',
    },
    {
      stepIndex: 2,
      title: 'Continuous Evidence Ingestion Automation',
      timeframe: 'Months 2 - 3',
      controlPassRatioPercent: 100,
      totalControlsMonitored: 120,
      status: 'COMPLETED',
      isStepCompleted: true,
      isAuditorSignedOff: true,
      primaryEvidenceArtifact: 'ARTIFACT-TERRAFORM-DRIFT-INGEST.json',
    },
    {
      stepIndex: 3,
      title: 'SOC 2 Type I Readiness Attestation',
      timeframe: 'Month 4',
      controlPassRatioPercent: 100,
      totalControlsMonitored: 180,
      status: 'COMPLETED',
      isStepCompleted: true,
      isAuditorSignedOff: true,
      primaryEvidenceArtifact: 'ARTIFACT-SOC2-TYPE-I-SIGNED.pdf',
    },
    {
      stepIndex: 4,
      title: '6-Month Type II Continuous Observation',
      timeframe: 'Months 5 - 10',
      controlPassRatioPercent: 100,
      totalControlsMonitored: 180,
      status: 'IN_PROGRESS',
      isStepCompleted: false,
      isAuditorSignedOff: false,
      primaryEvidenceArtifact: 'ARTIFACT-CONTINUOUS-TELEMETRY-LOG.jsonl',
    },
    {
      stepIndex: 5,
      title: 'Independent Clean Type II Audit Report',
      timeframe: 'Month 11',
      controlPassRatioPercent: 100,
      totalControlsMonitored: 180,
      status: 'NOT_STARTED',
      isStepCompleted: false,
      isAuditorSignedOff: false,
      primaryEvidenceArtifact: 'ARTIFACT-SOC2-TYPE-II-FINAL.pdf',
    },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 15: Value Stream Engineering & DORA Flywheel (value-stream-engineering-dora-flywheel)
// =============================================================================
export const createValueStreamDoraFlywheelSlide = (
  id = `slide-dora-flywheel-${Date.now()}`,
  overrides?: Partial<ValueStreamDoraFlywheelSlideData>
): ValueStreamDoraFlywheelSlideData => ({
  id,
  type: 'value-stream-engineering-dora-flywheel',
  title: 'Value Stream Engineering & DORA Metrics Flywheel',
  subtitle: 'Connecting Elite Continuous Delivery to Business Revenue Acceleration and Flow Efficiency',
  kicker: 'High-Velocity Engineering',
  activeStep: 1,
  maxSteps: 4,
  doraMetrics: {
    deploymentFrequencyPerDay: 48.2,
    deploymentFrequencyTier: 'ELITE',
    leadTimeHours: 1.2,
    leadTimeTier: 'ELITE',
    changeFailureRatePercent: 0.8,
    changeFailureTier: 'ELITE',
    mttrMinutes: 14.0,
    mttrTier: 'ELITE',
    isEliteStatusAchieved: true,
  },
  flowFramework: {
    flowVelocityItemsPerSprint: 142,
    flowEfficiencyPercent: 84.0,
    flowTimeDays: 2.4,
    flowLoadActiveItems: 28,
    isWipLimitEnforced: true,
  },
  valueImpact: {
    shippedFeaturesQuarterCount: 84,
    revenueImpactMillionUsd: 42.5,
    developerSatisfactionScore: 4.9,
    isDeliveryPredictable: true,
  },
  flywheelQuadrants: [
    {
      quadrantIndex: 1,
      name: 'Flow Velocity & Elite Deployments',
      description: 'Continuous automated release orchestration with zero-storage GitHub Actions and automated gate verification',
      keyMetric: '48.2 Production Deploys / Day',
      status: 'ACCELERATING',
      isFlywheelAccelerating: true,
    },
    {
      quadrantIndex: 2,
      name: 'Flow Efficiency & Friction Elimination',
      description: 'Streamlining PR reviews, hermetic build caching, and self-service Golden Paths in Backstage',
      keyMetric: '84.0% Active Flow Time Ratio',
      status: 'STABLE',
      isFlywheelAccelerating: true,
    },
    {
      quadrantIndex: 3,
      name: 'Operational Resilience & Fast MTTR',
      description: 'Automated canary analysis, eBPF telemetry, and sub-15 minute automated rollback capabilities',
      keyMetric: '14.0 Minutes Mean Time to Recovery',
      status: 'STABLE',
      isFlywheelAccelerating: false,
    },
    {
      quadrantIndex: 4,
      name: 'Business Value & Revenue Accretion',
      description: 'Direct translation of high engineering velocity into market expansion, ARR growth, and high customer retention',
      keyMetric: '$42.5M Attributed Quarterly Value',
      status: 'ACCELERATING',
      isFlywheelAccelerating: true,
    },
  ],
  ...overrides,
});
