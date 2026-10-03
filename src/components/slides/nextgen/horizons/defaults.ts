import type { StrategicHorizon, StrategyPortfolioSummary } from '../../../../types/nextGenArchetypes';

export const DEFAULT_HORIZONS: StrategicHorizon[] = [
  {
    id: 'h1-core',
    horizonNumber: 1,
    name: 'Horizon 1: Core Operations',
    subtitle: 'Defend & Optimize Existing Business Engine',
    timeframeYears: '0 - 12 Months',
    targetCapitalAllocationPercent: 70,
    targetRevenuePercentage: 82,
    strategicFocus: 'Protect enterprise cash cows, drive operational excellence, and automate high-touch clearing workflows.',
    stageGateCriteria: 'Quarterly EBITDA margin >= 34% and client retention SLA >= 99.8%.',
    isHorizonActive: true,
    initiatives: [
      { id: 'init-h1-1', name: 'Enterprise Core Modernization', leadOwner: 'VP Operations', metricTarget: '99.99% Availability', currentValue: '99.98% Actual', isFunded: true, isMilestoneAchieved: true, riskProfile: 'LOW' },
      { id: 'init-h1-2', name: 'Legacy Clearing Automation', leadOwner: 'Head of Settlement', metricTarget: '-42% OpEx Run-Rate', currentValue: '-38% Run-Rate', isFunded: true, isMilestoneAchieved: true, riskProfile: 'LOW' },
      { id: 'init-h1-3', name: 'Tier-1 Customer Expansion', leadOwner: 'Chief Commercial Officer', metricTarget: '$48M Expansion ARR', currentValue: '$44.5M ARR', isFunded: true, isMilestoneAchieved: false, riskProfile: 'BALANCED' },
    ],
  },
  {
    id: 'h2-emerging',
    horizonNumber: 2,
    name: 'Horizon 2: Emerging Growth',
    subtitle: 'Scale High-Velocity Adjacent Platforms',
    timeframeYears: '1 - 3 Years',
    targetCapitalAllocationPercent: 20,
    targetRevenuePercentage: 15,
    strategicFocus: 'Rapidly commercialize sovereign AI orchestration and real-time cross-border programmable liquidity rails.',
    stageGateCriteria: 'Achieve product-market fit with >50 enterprise accounts and positive unit economics.',
    isHorizonActive: false,
    initiatives: [
      { id: 'init-h2-1', name: 'Autonomous Agent Fleet Hub', leadOwner: 'Head of AI Platforms', metricTarget: '1,000+ Enterprise Bots', currentValue: '340 Live Bots', isFunded: true, isMilestoneAchieved: true, riskProfile: 'BALANCED' },
      { id: 'init-h2-2', name: 'Programmable Cross-Border Rails', leadOwner: 'VP FinTech Products', metricTarget: '$120M Monthly Volume', currentValue: '$68M Volume', isFunded: true, isMilestoneAchieved: false, riskProfile: 'BALANCED' },
      { id: 'init-h2-3', name: 'Confidential Data Clean Room', leadOwner: 'Chief Data Officer', metricTarget: '24 Institutional Nodes', currentValue: '18 Nodes Live', isFunded: true, isMilestoneAchieved: true, riskProfile: 'HIGH' },
    ],
  },
  {
    id: 'h3-transformational',
    horizonNumber: 3,
    name: 'Horizon 3: Disruptive Frontier',
    subtitle: 'Seed Transformational Breakthroughs',
    timeframeYears: '3 - 6 Years',
    targetCapitalAllocationPercent: 10,
    targetRevenuePercentage: 3,
    strategicFocus: 'Incubate quantum-resilient cryptographic ledgers, zero-gravity sensory compute, and decentralized sovereign governance.',
    stageGateCriteria: 'Patent grants, successful zero-trust lab pilots, and asymmetric optionality capture.',
    isHorizonActive: false,
    initiatives: [
      { id: 'init-h3-1', name: 'Post-Quantum Cryptographic Mesh', leadOwner: 'Distinguished Fellow', metricTarget: 'NIST Standards Parity', currentValue: 'Phase 2 Validation', isFunded: true, isMilestoneAchieved: false, riskProfile: 'HIGH' },
      { id: 'init-h3-2', name: 'Autonomous Economic Agent Swarms', leadOwner: 'Lead AI Researcher', metricTarget: 'Zero-Human Governance', currentValue: 'Simulation Active', isFunded: true, isMilestoneAchieved: false, riskProfile: 'HIGH' },
    ],
  },
];

export const DEFAULT_PORTFOLIO_SUMMARY: StrategyPortfolioSummary = {
  totalCapExMillionUsd: 145,
  projectedRoiMultiplier: 3.8,
  blendedGrowthRatePercent: 44.5,
  isPortfolioRebalanced: true,
  isReviewApproved: true,
};
