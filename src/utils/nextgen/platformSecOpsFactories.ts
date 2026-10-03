import type {
  DeveloperPlatformIdpSlideData,
  ExecutiveMaSynergySlideData,
  CyberThreatKillChainSlideData,
} from '../../types/presentation';

// =============================================================================
// Archetype 09: Developer Platform IDP Hub (developer-platform-idp-hub)
// =============================================================================
export const createDeveloperPlatformIdpSlide = (
  id = `slide-idp-hub-${Date.now()}`,
  overrides?: Partial<DeveloperPlatformIdpSlideData>
): DeveloperPlatformIdpSlideData => ({
  id,
  type: 'developer-platform-idp-hub',
  title: 'Internal Developer Platform (IDP) Hub',
  subtitle: 'Self-Service Golden Paths, Automated Software Catalog Governance, and 42s Onboarding',
  kicker: 'Enterprise Developer Productivity',
  activeStep: 1,
  maxSteps: 4,
  serviceCatalog: {
    totalServicesTracked: 1420,
    compliantServicesPercentage: 96.4,
    unownedOrphanCount: 0,
    isCatalogSynchronized: true,
  },
  provisioningPipeline: {
    activeProvisioningsCount: 14,
    avgProvisioningSeconds: 42.0,
    successRatePercent: 99.8,
    isSelfServiceEnabled: true,
  },
  platformAdoption: {
    developerSatisfactionScore: 4.8,
    weeklyActiveEngineers: 2450,
    onboardingTimeReductionPercent: 78.5,
    isGoldenPathEnforced: true,
  },
  goldenTemplates: [
    {
      templateId: 'tmpl-go-service',
      name: 'Standard Go Microservice',
      language: 'Go 1.23',
      framework: 'Chi Router + Split-DB + AppError',
      estimatedSetupMinutes: 3,
      usageCount: 680,
      isProductionReady: true,
      isSecurityApproved: true,
    },
    {
      templateId: 'tmpl-react-spa',
      name: 'Enterprise Presentation SPA',
      language: 'TypeScript',
      framework: 'React 19 + Tailwind CSS + Lucide',
      estimatedSetupMinutes: 2,
      usageCount: 420,
      isProductionReady: true,
      isSecurityApproved: true,
    },
    {
      templateId: 'tmpl-pytorch-ml',
      name: 'Autonomous Agent ML Runtime',
      language: 'Python 3.12',
      framework: 'PyTorch + vLLM + Ray Distributed',
      estimatedSetupMinutes: 5,
      usageCount: 190,
      isProductionReady: true,
      isSecurityApproved: true,
    },
    {
      templateId: 'tmpl-streaming-kafka',
      name: 'High-Throughput Stream Pipeline',
      language: 'Rust',
      framework: 'Tokio + Apache Kafka + Arrow',
      estimatedSetupMinutes: 4,
      usageCount: 130,
      isProductionReady: true,
      isSecurityApproved: true,
    },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 10: Executive M&A Synergy Waterfall (executive-mergers-acquisitions-synergy)
// =============================================================================
export const createExecutiveMaSynergySlide = (
  id = `slide-ma-synergy-${Date.now()}`,
  overrides?: Partial<ExecutiveMaSynergySlideData>
): ExecutiveMaSynergySlideData => ({
  id,
  type: 'executive-mergers-acquisitions-synergy',
  title: 'Executive M&A Valuation & Synergy Realization',
  subtitle: 'Transaction Waterfall, Cost & Revenue Synergies, and Accretive EPS Milestone Roadmap',
  kicker: 'C-Suite Corporate Finance',
  activeStep: 1,
  maxSteps: 4,
  valuationWaterfall: {
    enterpriseValueMillionUsd: 4200.0,
    equityValueMillionUsd: 3650.0,
    runRateSynergiesMillionUsd: 180.0,
    netDebtMillionUsd: 550.0,
    ebitdaMultiple: 14.2,
  },
  governanceSignoff: {
    chiefExecutiveOfficer: 'Elena Vance, Chief Executive Officer',
    chiefFinancialOfficer: 'Executive Vice President Finance',
    chiefSoftwareEngineer: 'Alim Ul Karim, Chief Software Engineer',
    isBoardApproved: true,
    isAntitrustCleared: true,
  },
  integrationStreams: [
    {
      streamName: 'TECH_INFRA',
      completionPercentage: 92,
      riskLevel: 'LOW',
      isStreamOnSchedule: true,
      streamLeaderTitle: 'Alim Ul Karim, Chief Software Engineer',
    },
    {
      streamName: 'GTM_SALES',
      completionPercentage: 84,
      riskLevel: 'MEDIUM',
      isStreamOnSchedule: true,
      streamLeaderTitle: 'Chief Commercial Officer',
    },
    {
      streamName: 'PEOPLE_OPS',
      completionPercentage: 96,
      riskLevel: 'LOW',
      isStreamOnSchedule: true,
      streamLeaderTitle: 'Chief People Officer',
    },
    {
      streamName: 'LEGAL_REGULATORY',
      completionPercentage: 100,
      riskLevel: 'LOW',
      isStreamOnSchedule: true,
      streamLeaderTitle: 'General Counsel',
    },
  ],
  synergyMilestones: [
    {
      milestoneId: 'syn-d1',
      phaseName: 'Day 1 Transaction Close',
      targetQuarter: 'Q1 FY26',
      projectedSavingsMillionUsd: 15.0,
      actualSavingsMillionUsd: 16.5,
      isMilestoneAchieved: true,
      isEpsAccretive: false,
      primaryDriver: 'Immediate executive duplication reduction & public filing consolidation',
    },
    {
      milestoneId: 'syn-d100',
      phaseName: 'Day 100 Vendor & Tool Deduplication',
      targetQuarter: 'Q2 FY26',
      projectedSavingsMillionUsd: 45.0,
      actualSavingsMillionUsd: 48.2,
      isMilestoneAchieved: true,
      isEpsAccretive: true,
      primaryDriver: 'Consolidated enterprise SaaS licensing & vendor procurement terms',
    },
    {
      milestoneId: 'syn-y1',
      phaseName: 'Year 1 Deep Cloud Consolidation',
      targetQuarter: 'Q4 FY26',
      projectedSavingsMillionUsd: 110.0,
      actualSavingsMillionUsd: 114.0,
      isMilestoneAchieved: true,
      isEpsAccretive: true,
      primaryDriver: 'AWS/GCP reserved instance pooling and legacy datacenter decommissioning',
    },
    {
      milestoneId: 'syn-y3',
      phaseName: 'Year 3 Full Run-Rate Synergies',
      targetQuarter: 'Q4 FY28',
      projectedSavingsMillionUsd: 180.0,
      actualSavingsMillionUsd: 185.0,
      isMilestoneAchieved: false,
      isEpsAccretive: true,
      primaryDriver: 'Unified cross-sell distribution network and autonomous operations',
    },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 11: Cyber Threat Kill Chain Matrix (cyber-threat-kill-chain-matrix)
// =============================================================================
export const createCyberThreatKillChainSlide = (
  id = `slide-kill-chain-${Date.now()}`,
  overrides?: Partial<CyberThreatKillChainSlideData>
): CyberThreatKillChainSlideData => ({
  id,
  type: 'cyber-threat-kill-chain-matrix',
  title: 'Cyber Threat Kill Chain & MITRE Matrix',
  subtitle: 'Lockheed Martin 7-Stage Kill Chain Defense, MITRE ATT&CK Mapping & Automated SOAR Playbooks',
  kicker: 'Zero-Trust Threat Defense',
  activeStep: 1,
  maxSteps: 4,
  threatActor: {
    adversaryCodename: 'APT-29 (Cozy Bear)',
    originCountry: 'State-Sponsored Advanced Threat',
    targetAsset: 'Customer Identity Database & HSM Root Keys',
    threatSeverity: 'CRITICAL',
    isAttributed: true,
  },
  socTelemetry: {
    activeAlertsCount: 2,
    meanTimeToContainMinutes: 1.4,
    automatedContainmentRatePercent: 99.4,
    isSoarActive: true,
  },
  cisoReview: {
    chiefInformationSecurityOfficer: 'Sarah Jenkins, CISO',
    chiefSoftwareEngineer: 'Alim Ul Karim, Chief Software Engineer',
    isExecutiveBriefingCompleted: true,
  },
  killChainStages: [
    {
      stageIndex: 1,
      stageName: 'Reconnaissance & Weaponization',
      mitreTacticId: 'TA0043 / TA0001',
      primaryThreatVector: 'External Attack Surface OSINT Port Scans & Phishing Payloads',
      activeDefenseControl: 'Cloudflare Magic Transit & Zero-Trust Email Sandbox',
      containmentStatus: 'NEUTRALIZED',
      mttdMinutes: 0.4,
      isDefended: true,
      isAutomatedPlaybookTriggered: true,
    },
    {
      stageIndex: 2,
      stageName: 'Delivery & Exploitation',
      mitreTacticId: 'TA0002 / TA0004',
      primaryThreatVector: 'Edge Ingress CVE-2026-4412 Buffer Overflow Attempt',
      activeDefenseControl: 'Kernel eBPF Coraza WAF & Memory Exploit Shield',
      containmentStatus: 'CONTAINED',
      mttdMinutes: 1.1,
      isDefended: true,
      isAutomatedPlaybookTriggered: true,
    },
    {
      stageIndex: 3,
      stageName: 'Lateral Movement & C2 Communication',
      mitreTacticId: 'TA0008 / TA0011',
      primaryThreatVector: 'East-West Microservice Hopping via Stolen Kerberos Ticket',
      activeDefenseControl: 'Cilium Zero-Trust L7 Network Policy & Mutual TLS',
      containmentStatus: 'CONTAINED',
      mttdMinutes: 1.4,
      isDefended: true,
      isAutomatedPlaybookTriggered: true,
    },
    {
      stageIndex: 4,
      stageName: 'Actions on Objectives & Exfiltration',
      mitreTacticId: 'TA0010 / TA0040',
      primaryThreatVector: 'Encrypted S3 Bucket Dumping via Compromised Service Account',
      activeDefenseControl: 'AWS GuardDuty Anomaly Sensor & Automated IAM Policy Revoke',
      containmentStatus: 'NEUTRALIZED',
      mttdMinutes: 0.8,
      isDefended: true,
      isAutomatedPlaybookTriggered: true,
    },
  ],
  ...overrides,
});
