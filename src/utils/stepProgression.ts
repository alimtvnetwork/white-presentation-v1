// lint-allow: file-size reason="Central step progression calculations and kinetic physics" max=800
import type { CSSProperties } from 'react';
import type { SlideData } from '../types/presentation';
import { isModernSlide, calculateModernSlideStepCount } from '../types/modernArchetypes';
import {
  isGlobalPptExpansionSlide,
  calculateGlobalPptExpansionSlideSteps,
} from '../types/globalPptExpansionArchetypes';
import {
  isNextGenSlide,
  calculateNextGenSlideStepCount,
} from '../types/nextGenArchetypes';
import {
  isGlobalPptEvolutionSlide,
  calculateGlobalPptEvolutionStepCount,
} from '../types/globalPptEvolutionArchetypes';
import { isSuite2026Slide } from '../types/suite2026Archetypes';
import {
  isSuite2028Slide,
  calculateSuite2028StepCount,
} from '../types/suite2028Archetypes';

export type StepPhase = 'past' | 'completed' | 'active' | 'future';

export const STEP_EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';
export const STEP_TRANSITION = 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)';

export const PROGRESS_RAIL_SPRING = { type: 'spring', stiffness: 220, damping: 32, mass: 1.0 } as const;
export const STEP_DETAIL_PANE_SPRING = { type: 'spring', stiffness: 420, damping: 17, mass: 0.8 } as const;
export const HARMONIC_SPRING = STEP_DETAIL_PANE_SPRING;
export const HALO_SPRING = { type: 'spring', stiffness: 320, damping: 30, mass: 0.9 } as const;

export function resolveStepPhase(itemIndex: number, activeStep: number): StepPhase {
  if (itemIndex < activeStep) return 'completed';
  if (itemIndex === activeStep) return 'active';
  return 'future';
}

export function getStepPhase(index: number, activeStep: number): StepPhase {
  if (index < activeStep) return 'past';
  if (index === activeStep) return 'active';
  return 'future';
}

export function getStepHaloStyle(isCurrent: boolean, accentColor: string): CSSProperties {
  if (isCurrent) {
    return {
      boxShadow: `0 0 0 1px ${accentColor}40, 0 0 24px -2px ${accentColor}50`,
      borderColor: accentColor,
    };
  }
  return {};
}

export function getStepStyle(phase: StepPhase, accentHalo?: string): CSSProperties {
  const isPastOrCompleted = phase === 'completed' || phase === 'past';
  if (isPastOrCompleted) {
    return {
      opacity: 0.75,
      transform: 'translateZ(8px) scale(1.00)',
      filter: 'none',
      boxShadow: 'none',
      transition: STEP_TRANSITION,
    };
  }
  const isActive = phase === 'active';
  if (isActive) {
    return {
      opacity: 1.0,
      transform: 'translateZ(24px) scale(1.02)',
      filter: 'none',
      boxShadow: accentHalo || '0 0 24px -2px hsl(var(--pres-accent-hsl) / 0.50)',
      zIndex: 20,
      transition: STEP_TRANSITION,
    };
  }
  return {
    opacity: 0.4,
    transform: 'translateZ(8px) scale(0.98)',
    filter: 'blur(1.25px)',
    boxShadow: 'none',
    pointerEvents: 'none',
    transition: STEP_TRANSITION,
  };
}

export function getStepPhaseStyle(phase: StepPhase, accentColor: string = '#3b82f6'): CSSProperties {
  const isPastOrCompleted = phase === 'past' || phase === 'completed';
  if (isPastOrCompleted) {
    return {
      opacity: 0.75,
      transform: 'scale(1)',
      filter: 'none',
      zIndex: 1,
      boxShadow: 'none',
      transition: STEP_TRANSITION,
    };
  }
  const isActive = phase === 'active';
  if (isActive) {
    return {
      opacity: 1,
      transform: 'scale(1.02)',
      filter: 'none',
      zIndex: 20,
      boxShadow: `0 0 24px -2px ${accentColor}50`,
      transition: STEP_TRANSITION,
    };
  }
  return {
    opacity: 0.4,
    transform: 'scale(0.98)',
    filter: 'blur(1.25px)',
    zIndex: 0,
    boxShadow: 'none',
    pointerEvents: 'none',
    transition: STEP_TRANSITION,
  };
}

export interface RailPoint {
  x: number;
  y: number;
}

export interface DynamicRailCoordinates {
  activeX: number;
  progressPercent: number;
  totalSteps: number;
  stepWidth: number;
}

export function calculateProgressRailPercent(activeStep: number, totalSteps: number): number {
  const hasMultipleSteps = totalSteps > 1;
  if (hasMultipleSteps) {
    const clampedStep = Math.max(0, Math.min(activeStep, totalSteps - 1));
    return (clampedStep / (totalSteps - 1)) * 100;
  }
  return 100;
}

export function calculateDynamicRailCoordinates(
  activeStep: number,
  totalSteps: number,
  railWidth: number = 1760,
  startX: number = 80
): DynamicRailCoordinates {
  const hasMultipleSteps = totalSteps > 1;
  const safeTotal = Math.max(1, totalSteps);
  const clampedStep = Math.max(0, Math.min(activeStep, safeTotal - 1));
  const stepWidth = hasMultipleSteps ? railWidth / (safeTotal - 1) : railWidth;
  const activeX = hasMultipleSteps ? startX + clampedStep * stepWidth : startX;
  const progressPercent = calculateProgressRailPercent(clampedStep, safeTotal);

  return { activeX, progressPercent, totalSteps: safeTotal, stepWidth };
}

export function calculateRailNodePositions(
  totalSteps: number,
  startX: number = 80,
  y: number = 300,
  totalWidth: number = 1760
): RailPoint[] {
  const safeCount = Math.max(1, totalSteps);
  const hasSingleStep = safeCount === 1;
  if (hasSingleStep) {
    return [{ x: startX + totalWidth / 2, y }];
  }
  const stepInterval = totalWidth / (safeCount - 1);
  return Array.from({ length: safeCount }, (_, i) => ({
    x: startX + i * stepInterval,
    y,
  }));
}

export function generateSvgQuadraticBezierPath(start: RailPoint, end: RailPoint, curveOffset = 0): string {
  const controlX = (start.x + end.x) / 2;
  const controlY = (start.y + end.y) / 2 + curveOffset;
  return `M ${start.x} ${start.y} Q ${controlX} ${controlY} ${end.x} ${end.y}`;
}

export function generateSvgBezierRailConnector(fromX: number, fromY: number, toX: number, toY: number, curveOffset = 0): string {
  const controlX = (fromX + toX) / 2;
  const controlY = (fromY + toY) / 2 + curveOffset;
  return `M ${fromX} ${fromY} Q ${controlX} ${controlY} ${toX} ${toY}`;
}

const GLOBAL_PPT_TYPES = [
  'executive-governance-matrix', 'okr-cascade-alignment', 'cloud-cost-finops-optimizer',
  'customer-sentiment-radar', 'competitive-battlecard', 'launch-readiness-checklist',
  'developer-gateway-sandbox', 'rag-pipeline-topology', 'soc-incident-war-room',
  'merkle-tree-state-ledger', 'investor-cap-table-waterfall', 'realtime-event-stream-fabric',
  'supply-chain-risk-matrix', 'talent-competency-radar', 'sustainability-esg-scorecard',
];

export function isGlobalPptSlideType(type?: string): boolean {
  return Boolean(type && GLOBAL_PPT_TYPES.includes(type));
}

// lint-allow: function-length reason="exhaustive switch over global ppt slide types" max=40
export function calculateGlobalPptSlideStepCount(slide: any): number {
  const hasSlide = Boolean(slide && typeof slide === 'object');
  if (!hasSlide) return 1;
  switch (slide.type) {
    case 'executive-governance-matrix': return Math.max(slide.governancePillars?.length || 4, 1);
    case 'okr-cascade-alignment': return Math.max(slide.cascadeTiers?.length || 4, 1);
    case 'competitive-battlecard': return Math.max(slide.battlecardPillars?.length || 3, 1);
    case 'launch-readiness-checklist': return Math.max(slide.stageGates?.length || 4, 1);
    case 'developer-gateway-sandbox': return Math.max(slide.gatewayStages?.length || 3, 1);
    case 'rag-pipeline-topology': return Math.max(slide.pipelineStages?.length || 5, 1);
    case 'soc-incident-war-room': return Math.max(slide.incidentPhases?.length || 4, 1);
    case 'merkle-tree-state-ledger': return Math.max(slide.verificationSteps?.length || 4, 1);
    case 'talent-competency-radar': return Math.max(slide.levelMilestones?.length || 3, 1);
    default:
      return 1;
  }
}

const CUSTOMIZATION_TYPES = [
  'neural-vector-search-topology', 'model-quantization-speculative-decoding',
  'llm-firewall-red-team-matrix', 'global-anycast-traffic-director',
  'cqrs-event-sourcing-fabric', 'sbom-slsa-provenance-attestation',
  'post-merger-integration-roadmap', 'scope3-carbon-supply-chain-audit',
  'cspm-ciem-cloud-entitlement-graph', 'confidential-computing-enclave',
  'predictive-autoscaling-pod-matrix', 'capex-opex-capital-allocation',
  'transfer-pricing-tax-topology', 'sales-quota-compensation-matrix',
  'executive-succession-leadership-bench',
];

export function isCustomizationSlideType(type?: string): boolean {
  return Boolean(type && CUSTOMIZATION_TYPES.includes(type));
}

// lint-allow: function-length reason="exhaustive switch over customization slide types" max=40
export function calculateCustomizationSlideStepCount(slide: any): number {
  const hasSlide = Boolean(slide && typeof slide === 'object');
  if (!hasSlide) return 1;
  switch (slide.type) {
    case 'neural-vector-search-topology':
      return Math.max(slide.searchStages?.length || slide.stages?.length || 4, 1);
    case 'model-quantization-speculative-decoding':
      return Math.max(slide.decodingStages?.length || slide.stages?.length || 4, 1);
    case 'llm-firewall-red-team-matrix':
      return Math.max(slide.inspectionLayers?.length || slide.stages?.length || 4, 1);
    case 'global-anycast-traffic-director':
      return Math.max(slide.trafficStages?.length || slide.stages?.length || 4, 1);
    case 'cqrs-event-sourcing-fabric':
      return Math.max(slide.fabricStages?.length || slide.stages?.length || 4, 1);
    case 'sbom-slsa-provenance-attestation':
      return Math.max(slide.pipelinePhases?.length || slide.stages?.length || 4, 1);
    case 'post-merger-integration-roadmap':
      return Math.max(slide.integrationHorizons?.length || slide.stages?.length || 4, 1);
    case 'scope3-carbon-supply-chain-audit':
      return Math.max(slide.auditPhases?.length || slide.stages?.length || 4, 1);
    default:
      return 1;
  }
}

const FLAT_GLOBAL_TYPES = [
  'interactive-branching-close', 'before-after-showcase-pan', 'search-serp-proof-lightbox',
  'cognitive-inversion-punchline', 'talent-pyramid-funnel-svg', 'hexagonal-tech-cluster',
  'connected-roadmap-rail-pulse', 'campaign-performance-lightbox', 'executive-roster-keypad',
  'flat-step-process-flow', 'flat-split-narrative-stepper', 'flat-timeline-milestone-rail',
  'flat-reveal-bento-grid', 'flat-depth-sentence-stack', 'flat-typewriter-code-walkthrough',
];

export function isFlatGlobalSuiteSlideType(type?: string): boolean {
  return Boolean(type && FLAT_GLOBAL_TYPES.includes(type));
}

// lint-allow: function-length reason="exhaustive switch over 15 flat global suite slide types" max=40
export function calculateFlatGlobalSuiteSlideSteps(slide: any): number {
  const hasSlide = Boolean(slide && typeof slide === 'object');
  if (!hasSlide) return 1;
  switch (slide.type) {
    case 'interactive-branching-close': return Math.max(slide.branches?.length || 2, 1);
    case 'before-after-showcase-pan': return Math.max(slide.panItems?.length || 2, 1);
    case 'search-serp-proof-lightbox': return Math.max(slide.proofItems?.length || 3, 1);
    case 'cognitive-inversion-punchline': return Math.max(slide.inversionPillars?.length || 3, 1);
    case 'talent-pyramid-funnel-svg': return Math.max(slide.funnelTiers?.length || 4, 1);
    case 'hexagonal-tech-cluster': return Math.max(slide.clusterNodes?.length || 4, 1);
    case 'connected-roadmap-rail-pulse': return Math.max(slide.railNodes?.length || 4, 1);
    case 'campaign-performance-lightbox':
      return Math.max(slide.lightboxCreatives?.length || slide.performanceChannels?.length || 3, 1);
    case 'executive-roster-keypad': return Math.max(slide.rosterMembers?.length || 4, 1);
    case 'flat-step-process-flow': return Math.max(slide.processSteps?.length || 4, 1);
    case 'flat-split-narrative-stepper':
      return Math.max(slide.stepperSteps?.length || slide.stages?.length || 3, 1);
    case 'flat-timeline-milestone-rail': return Math.max(slide.milestones?.length || 4, 1);
    case 'flat-reveal-bento-grid':
      return Math.max(slide.bentoCards?.length || slide.cards?.length || 4, 1);
    case 'flat-depth-sentence-stack':
      return Math.max(slide.sentenceCards?.length || slide.cards?.length || 3, 1);
    case 'flat-typewriter-code-walkthrough':
      return Math.max(slide.walkthroughSteps?.length || slide.steps?.length || 3, 1);
    default:
      return 1;
  }
}

const REVOLUTION_DYNAMIC_TYPES = new Set([
  'gpu-cluster-fabric-interconnect', 'rag-needle-haystack-benchmark',
  'ai-inference-token-economics', 'progressive-delivery-canary-gate',
  'threat-exposure-ctem-matrix', 'multi-agent-reflection-deliberation',
  'saas-net-revenue-retention-cohort', 'developer-friction-dx-telemetry',
]);

const REVOLUTION_FLAT_TYPES = new Set([
  'ebpf-kernel-telemetry-observability', 'micro-frontend-federation-matrix',
  'data-mesh-federated-governance', 'subsea-cable-global-backbone',
  'semantic-cache-hit-topology', 'confidential-mpc-key-vault',
  'boardroom-m-and-a-synergy-realization',
]);

// lint-allow: function-length reason="kinetic revolution step resolution" max=18
export function getKineticRevolutionSlideSteps(slide: any): number {
  const hasSlide = Boolean(slide && typeof slide === 'object');
  if (!hasSlide) return 0;
  if (REVOLUTION_DYNAMIC_TYPES.has(slide.type)) {
    const stageCount = Array.isArray(slide.stages) ? slide.stages.length : 0;
    return stageCount > 0 ? stageCount : 4;
  }
  if (REVOLUTION_FLAT_TYPES.has(slide.type)) {
    return 1;
  }
  return 0;
}

export function getCoreSlideSteps(slide: any): number {
  const hasSlide = Boolean(slide && typeof slide === 'object');
  if (!hasSlide) return 0;
  if (slide.type === 'steps' && Array.isArray(slide.steps)) return slide.steps.length;
  if (slide.type === 'steps-chain' && Array.isArray(slide.steps)) return slide.steps.length;
  if (slide.type === 'timeline-roadmap' && Array.isArray(slide.milestones)) return slide.milestones.length;
  if (slide.type === 'process-cycle' && Array.isArray(slide.stages)) return slide.stages.length;
  if (slide.type === 'depth-stack' && Array.isArray(slide.cards)) return slide.cards.length;
  if (slide.type === 'reveal-grid' && Array.isArray(slide.items)) return slide.items.length;
  if (slide.type === 'talent-pyramid' && Array.isArray(slide.tiers)) return slide.tiers.length;
  return 0;
}

export function getExpandedSlideSteps(slide: any): number {
  const hasSlide = Boolean(slide && typeof slide === 'object');
  if (!hasSlide) return 0;
  if (slide.type === 'next-steps-sprint' && Array.isArray(slide.sprints)) return slide.sprints.length;
  if (slide.type === 'before-after-showcase' && Array.isArray(slide.features)) return slide.features.length;
  if (slide.type === 'saas-pricing-tiers' && Array.isArray(slide.tiers)) return slide.tiers.length;
  if (slide.type === 'interactive-quiz' && Array.isArray(slide.options)) return slide.options.length;
  if (slide.type === 'hardware-showcase' && Array.isArray(slide.hotspots)) return slide.hotspots.length;
  if (slide.type === 'faq-accordion' && Array.isArray(slide.faqs)) return slide.faqs.length;
  return 0;
}

// lint-allow: function-length reason="enterprise slide step calculation switch" max=30
export function getEnterpriseSlideSteps(slide: any): number {
  const hasSlide = Boolean(slide && typeof slide === 'object');
  if (!hasSlide) return 0;
  switch (slide.type) {
    case 'executive-summary': return slide.strategicPillars?.length || 1;
    case 'system-architecture-flow': return slide.layers?.length || 1;
    case 'roi-metric-calculator': return slide.calculatedMetrics?.length || 1;
    case 'customer-journey-map': return slide.phases?.length || 1;
    case 'matrix-comparison-grid': return slide.features?.length || 1;
    case 'tech-stack-grid': return slide.stackPillars?.length || 1;
    case 'team-hierarchy-org': return slide.departments?.length || 1;
    case 'security-compliance-matrix': return slide.certifications?.length || 1;
    case 'product-roadmap-timeline': return slide.milestones?.length || 1;
    case 'interactive-faq-flow': return slide.faqItems?.length || 1;
    case 'key-metric-scorecard': return slide.scorecards?.length || 1;
    case 'case-study-impact': return slide.quantifiedResults?.length || 3;
    case 'dual-column-pros-cons': return Math.max(slide.pros?.length || 0, slide.cons?.length || 0, 1);
    case 'interactive-code-playground': return 3;
    case 'closing-cta-showcase': return 2;
    case 'timeline-rail': return slide.railNodes?.length || 1;
    default: return 0;
  }
}

// lint-allow: function-length reason="kinetic slide step calculation switch" max=30
export function getKineticSlideSteps(slide: any): number {
  const hasSlide = Boolean(slide && typeof slide === 'object');
  if (!hasSlide) return 0;
  switch (slide.type) {
    case 'personal-vpn': return slide.features?.length || slide.nodes?.length || 4;
    case 'meeting-transcript': return slide.transcriptSegments?.length || slide.speakerTurns?.length || 3;
    case 'llm-benchmark': return slide.modelResults?.length || slide.models?.length || 3;
    case 'services-gravity': return slide.pillars?.length || slide.services?.length || 3;
    case 'seo-dominance': return slide.eras?.length || 4;
    case 'staff-aug-pipeline': return slide.vettingStages?.length || slide.stages?.length || 6;
    case 'craftsmanship-benchmark': return slide.revelations?.length || slide.benchmarks?.length || 3;
    case 'weekly-cadence': return slide.weeklyRituals?.length || slide.days?.length || 5;
    case 'competitive-moat': return slide.moatDimensions?.length || slide.moatPillars?.length || 3;
    case 'rapid-feedback': return slide.cycleStages?.length || slide.loopStages?.length || 4;
    case 'interactive-poll': return 3;
    case 'live-qa': return Math.min(5, slide.curatedQuestions?.length || slide.questions?.length || 3);
    case 'embed-stage': return 2;
    case 'countdown-launch': return slide.launchPhases?.length || slide.launchGates?.length || 3;
    case 'executive-takeaways': return slide.actionProtocols?.length || slide.actionItems?.length || 3;
    default: return 0;
  }
}

const KINETIC_SUITE_FLAT_TYPES = new Set([
  'global-cloud-edge-mesh', 'security-threat-model', 'financial-burn-runway',
  'bento-kpi-mosaic', 'slas-and-uptime-status', 'hardware-silicon-spec',
  'cohort-retention-heatmap',
]);

// lint-allow: function-length reason="kinetic suite slide step calculation switch" max=25
export function getKineticSuiteSlideSteps(slide: any): number {
  const hasSlide = Boolean(slide && typeof slide === 'object');
  if (!hasSlide) return 0;
  switch (slide.type) {
    case 'code-diff-comparison': return slide.diffReveals?.length || slide.diffChunks?.length || 2;
    case 'api-endpoint-inspector': return slide.inspectorSteps?.length || slide.parameters?.length || 3;
    case 'database-schema-erd': return slide.tables?.length || 3;
    case 'ai-agent-swarm-dag': return slide.swarmPhases?.length || slide.nodes?.length || 3;
    case 'canary-release-gauge': return slide.canaryStages?.length || slide.stages?.length || 4;
    case 'incident-rca-postmortem': return slide.rcaPhases?.length || slide.pillars?.length || 4;
    case 'audio-waveform-studio': return slide.audioPhases?.length || slide.tracks?.length || 3;
    case 'verifiable-audit-ledger': return slide.evidenceGates?.length || slide.gates?.length || 4;
    default:
      return KINETIC_SUITE_FLAT_TYPES.has(slide.type) ? 1 : 0;
  }
}

const SOVEREIGN_FLAT_TYPES = new Set([
  'global-latency-topology', 'microservices-mesh-telemetry', 'threat-intelligence-feed',
  'data-lakehouse-governance', 'kubernetes-fleet-orchestrator', 'api-monetization-billing',
  'ai-inference-cluster-telemetry',
]);

// lint-allow: function-length reason="sovereign operations slide step calculation switch" max=25
export function getSovereignOperationsSlideSteps(slide: any): number {
  const hasSlide = Boolean(slide && typeof slide === 'object');
  if (!hasSlide) return 0;
  switch (slide.type) {
    case 'zero-trust-packet-inspection': return slide.inspectionStages?.length || 4;
    case 'database-migration-pipeline': return slide.migrationPhases?.length || 4;
    case 'autonomous-ai-eval-harness': return slide.benchmarkSuites?.length || 4;
    case 'chaos-engineering-matrix': return slide.chaosExperiments?.length || 4;
    case 'ci-cd-artifact-provenance': return slide.provenanceStages?.length || 4;
    case 'disaster-recovery-drill': return slide.drillPhases?.length || 4;
    case 'feature-flag-rollout-tree': return slide.rolloutRings?.length || 4;
    case 'quantum-cryptography-transition': return slide.transitionStages?.length || 4;
    default:
      return SOVEREIGN_FLAT_TYPES.has(slide.type) ? (slide.maxSteps || 1) : 0;
  }
}

export function getGlobalPptSlideSteps(slide: any): number {
  return slide && typeof slide === 'object' && isGlobalPptSlideType(slide.type) ? calculateGlobalPptSlideStepCount(slide) : 0;
}

export function getCustomizationSlideSteps(slide: any): number {
  return slide && typeof slide === 'object' && isCustomizationSlideType(slide.type) ? calculateCustomizationSlideStepCount(slide) : 0;
}

export function getFlatGlobalSuiteSlideSteps(slide: any): number {
  return slide && typeof slide === 'object' && isFlatGlobalSuiteSlideType(slide.type) ? calculateFlatGlobalSuiteSlideSteps(slide) : 0;
}

export function getGlobalPptExpansionSlideSteps(slide: any): number {
  return slide && typeof slide === 'object' && isGlobalPptExpansionSlide(slide) ? calculateGlobalPptExpansionSlideSteps(slide) : 0;
}

export function getNextGenSlideSteps(slide: any): number {
  return slide && typeof slide === 'object' && isNextGenSlide(slide) ? calculateNextGenSlideStepCount(slide) : 0;
}

export function getModernSlideSteps(slide: any): number {
  return slide && typeof slide === 'object' && isModernSlide(slide) ? calculateModernSlideStepCount(slide) : 0;
}

export const getExtendedSlideStepCount = getKineticSlideSteps;

export const MASTERY_DYNAMIC_TYPES = new Set([
  'llm-agentic-workflow-dag', 'zero-downtime-blue-green-mesh',
  'post-quantum-pqc-kem-handshake', 'developer-platform-backstage-portal',
  'soc2-type2-continuous-evidence-stream', 'ai-model-distillation-pipeline',
  'executive-compensation-clawback-matrix', 'enterprise-llm-fine-tuning-loss',
]);

export const MASTERY_FLAT_TYPES = new Set([
  'distributed-vector-index-sharding', 'realtime-financial-fraud-graph',
  'autonomous-cloud-cost-anomalies', 'lakehouse-iceberg-acid-lineage',
  'multi-region-active-active-cockroach', 'supply-chain-carbon-ledger-cbam',
  'chaos-mesh-network-partition-drill',
]);

export function getGlobalPptMasterySlideSteps(slide: any): number {
  const hasSlide = Boolean(slide && typeof slide === 'object');
  if (!hasSlide) return 0;
  if (MASTERY_DYNAMIC_TYPES.has(slide.type)) {
    return slide.stages?.length || 4;
  }
  if (MASTERY_FLAT_TYPES.has(slide.type)) {
    return 1;
  }
  return 0;
}

export const NEXTGEN_DYNAMIC_TYPES = new Set([
  'agentic-eval-red-team-harness', 'gitops-argocd-sync-reconciliation',
  'nvme-over-fabrics-rdma-storage', 'confidential-gpu-attestation-flow',
  'ebpf-ddos-xdp-packet-mitigation', 'active-inference-memory-tiering',
  'sovereign-ai-data-clean-room', 'incident-command-automated-playbook',
]);

export const NEXTGEN_FLAT_TYPES = new Set([
  'gpu-hbm-interconnect-mesh', 'realtime-feature-store-feast',
  'distributed-wal-raft-consensus', 'finops-unit-economics-cloud-matrix',
  'cross-border-privacy-data-residency', 'zero-trust-microsegmentation-spiffe',
  'enterprise-board-capital-allocation',
]);

export function getGlobalPptNextGenSlideSteps(slide: any): number {
  const hasSlide = Boolean(slide && typeof slide === 'object');
  if (!hasSlide) return 0;
  if (NEXTGEN_DYNAMIC_TYPES.has(slide.type)) {
    return slide.evalStages?.length || slide.reconciliationStages?.length || slide.fabricStages?.length
      || slide.attestationStages?.length || slide.mitigationStages?.length || slide.tieringStages?.length
      || slide.cleanRoomStages?.length || slide.playbookStages?.length || slide.stages?.length || 4;
  }
  if (NEXTGEN_FLAT_TYPES.has(slide.type)) {
    return 1;
  }
  return 0;
}

export const EVOLUTION_DYNAMIC_TYPES = new Set([
  'pqc-migration-orchestration-flow',
  'agent-hierarchical-memory-pipeline',
  'active-active-sharding-consensus-mesh',
  'zero-trust-api-mesh-authorization',
  'autonomous-vulnerability-remediation-loop',
  'edge-compute-workload-orchestrator',
  'cloud-finops-unit-amortization-ladder',
  'executive-board-ai-risk-oversight',
]);

export const EVOLUTION_FLAT_TYPES = new Set([
  'sovereign-qkd-optical-backbone',
  'agent-swarm-memory-registry',
  'hyperscale-database-sharding-topology',
  'microservices-zero-trust-policy-map',
  'autonomous-siem-incident-triage-matrix',
  'edge-infrastructure-fleet-density-matrix',
  'executive-board-fiduciary-esg-horizon',
]);

export function getGlobalPptEvolutionSlideSteps(slide: any): number {
  const hasSlide = Boolean(slide && typeof slide === 'object');
  if (!hasSlide) return 0;
  if (isGlobalPptEvolutionSlide(slide)) {
    return calculateGlobalPptEvolutionStepCount(slide);
  }
  if (EVOLUTION_DYNAMIC_TYPES.has(slide.type)) {
    return slide.migrationStages?.length
      || slide.pipelineStages?.length
      || slide.consensusStages?.length
      || slide.authorizationStages?.length
      || slide.remediationStages?.length
      || slide.orchestrationStages?.length
      || slide.amortizationStages?.length
      || slide.oversightStages?.length
      || slide.stages?.length
      || 4;
  }
  if (EVOLUTION_FLAT_TYPES.has(slide.type)) {
    return 1;
  }
  return 0;
}

type StepCalcFn = (slide: any) => number;

export const SUITE_2026_STEP_CALCULATORS: Record<string, StepCalcFn> = {
  'executive-pnl-waterfall-table': () => 4,
  'competitive-feature-heatmap': () => 1,
  'customer-persona-archetype-split': () => 4,
  'global-data-jurisdiction-boundary': () => 1,
  'hardware-interface-blueprint': () => 4,
  'multi-horizon-value-realization-bridge': (s) => Math.max(1, s.horizons?.length || 3),
  'two-sided-ecosystem-flywheel': () => 4,
  'ishikawa-root-cause-fishbone': () => 4,
  'modular-consumption-pricing-calculator': (s) => Math.max(1, s.tiers?.length || 4),
  'live-product-viewport-walkthrough': (s) => Math.max(1, s.steps?.length || 4),
  'enterprise-risk-taxonomy-heatmap': (s) => Math.max(1, s.risks?.length || 4),
  'global-partner-tiering-ladder': (s) => Math.max(1, s.tiers?.length || 4),
  'talent-competency-gap-heatmap': (s) => Math.max(1, s.domains?.length || 4),
  'slo-error-budget-burn-waterfall': (s) => Math.max(1, s.incidents?.length || 3),
  'weighted-decision-tradeoff-matrix': (s) => Math.max(1, s.options?.length || 3),
  'customer-churn-intervention-ladder': (s) => Math.max(1, s.stages?.length || 4),
};

export function getSuite2026SlideSteps(slide: any): number {
  const hasSlide = Boolean(slide && typeof slide === 'object');
  if (!hasSlide) return 0;
  const calc = SUITE_2026_STEP_CALCULATORS[slide.type];
  if (calc) {
    return calc(slide);
  }
  return 0;
}

export const SUITE_2027_STEP_CALCULATORS: Record<string, StepCalcFn> = {
  // Flat Sovereign (return 1)
  'cross-functional-raci-matrix': () => 1,
  'saas-magic-number-efficiency-gauge': () => 1,
  'supply-chain-geopolitical-chokepoint': () => 1,
  'product-market-fit-cohort-triangles': () => 1,
  'developer-productivity-space-framework': () => 1,
  'customer-health-scorecard-matrix': () => 1,

  // Kinetic Multi-Step (return s.stages?.length || 4)
  'ai-inference-cost-token-waterfall': (s) => Math.max(1, s.stages?.length || 4),
  'zero-trust-microsegmentation-map': (s) => Math.max(1, s.stages?.length || 4),
  'incident-sev1-command-timeline': (s) => Math.max(1, s.stages?.length || 4),
  'cloud-finops-unit-rate-optimization': (s) => Math.max(1, s.stages?.length || 4),
  'enterprise-ai-governance-guardrails': (s) => Math.max(1, s.stages?.length || 4),
  'data-lakehouse-medallion-pipeline': (s) => Math.max(1, s.stages?.length || 4),
  'merger-acquisition-synergy-bridge': (s) => Math.max(1, s.stages?.length || 4),
  'hybrid-cloud-dr-failover-topology': (s) => Math.max(1, s.stages?.length || 4),
  'value-stream-bottleneck-flow': (s) => Math.max(1, s.stages?.length || 4),
};

export function getSuite2027SlideSteps(slide: any): number {
  const hasSlide = Boolean(slide && typeof slide === 'object');
  if (!hasSlide) return 0;
  const calc = SUITE_2027_STEP_CALCULATORS[slide.type];
  if (calc) {
    return calc(slide);
  }
  return 0;
}

export const SUITE_2028_STEP_CALCULATORS: Record<string, StepCalcFn> = {
  // Flat Sovereign Overviews (Exactly 1 Step)
  'enterprise-data-clean-room-audit': () => 1,
  'hyperscale-k8s-cost-allocator-matrix': () => 1,
  'cyber-resilience-ransomware-readiness-radar': () => 1,
  'saas-expansion-retention-waterfall-gauge': () => 1,
  'developer-experience-friction-index-heatmap': () => 1,
  'geopolitical-sovereign-cloud-compliance-compass': () => 1,

  // Kinetic Multi-Step Workflows (Dynamic Stage Count or 4)
  'synthetic-data-curation-pipeline': (s) => Math.max(1, s.pipelineStages?.length || 4),
  'cloud-native-wasm-microservice-mesh': (s) => Math.max(1, s.meshStages?.length || 4),
  'sovereign-ai-datacenter-power-grid': (s) => Math.max(1, s.gridStages?.length || 4),
  'autonomous-code-security-patching-loop': (s) => Math.max(1, s.patchingStages?.length || 4),
  'cross-cloud-mesh-latency-routing': (s) => Math.max(1, s.routingStages?.length || 4),
  'enterprise-genai-app-observability': (s) => Math.max(1, s.observabilityStages?.length || 4),
  'zero-downtime-schema-evolution-stepper': (s) => Math.max(1, s.evolutionStages?.length || 4),
  'enterprise-software-supply-chain-chokepoint': (s) => Math.max(1, s.supplyChainStages?.length || 4),
  'ai-agent-multi-turn-orchestration-dag': (s) => Math.max(1, s.orchestrationStages?.length || 4),
};

export function getSuite2028SlideSteps(slide: any): number {
  const hasSlide = Boolean(slide && typeof slide === 'object');
  if (!hasSlide) return 0;
  const calc = SUITE_2028_STEP_CALCULATORS[slide.type];
  if (calc) {
    return calc(slide);
  }
  return 0;
}

// lint-allow: function-length reason="central step progression cascading priority resolver" max=85
export function getSlideMaxSteps(slide: SlideData | any): number {
  const hasSlide = Boolean(slide && typeof slide === 'object');
  if (!hasSlide) {
    return 1;
  }

  const suite2028Steps = getSuite2028SlideSteps(slide);
  if (suite2028Steps > 0) return suite2028Steps;

  const suite2027Steps = getSuite2027SlideSteps(slide);
  if (suite2027Steps > 0) return suite2027Steps;

  const suite2026Steps = getSuite2026SlideSteps(slide);
  if (suite2026Steps > 0) return suite2026Steps;

  const evolutionSteps = getGlobalPptEvolutionSlideSteps(slide);
  if (evolutionSteps > 0) return evolutionSteps;

  const globalPptNextGenSteps = getGlobalPptNextGenSlideSteps(slide);
  if (globalPptNextGenSteps > 0) return globalPptNextGenSteps;

  const masterySteps = getGlobalPptMasterySlideSteps(slide);
  if (masterySteps > 0) return masterySteps;

  const revolutionSteps = getKineticRevolutionSlideSteps(slide);
  if (revolutionSteps > 0) return revolutionSteps;

  const expansionSteps = getGlobalPptExpansionSlideSteps(slide);
  if (expansionSteps > 0) return expansionSteps;

  const flatGlobalSteps = getFlatGlobalSuiteSlideSteps(slide);
  if (flatGlobalSteps > 0) return flatGlobalSteps;

  const customizationSteps = getCustomizationSlideSteps(slide);
  if (customizationSteps > 0) return customizationSteps;

  const coreSteps = getCoreSlideSteps(slide);
  if (coreSteps > 0) return coreSteps;

  const expandedSteps = getExpandedSlideSteps(slide);
  if (expandedSteps > 0) return expandedSteps;

  const enterpriseSteps = getEnterpriseSlideSteps(slide);
  if (enterpriseSteps > 0) return enterpriseSteps;

  const kineticSteps = getKineticSlideSteps(slide);
  if (kineticSteps > 0) return kineticSteps;

  const kineticSuiteSteps = getKineticSuiteSlideSteps(slide);
  if (kineticSuiteSteps > 0) return kineticSuiteSteps;

  const globalPptSteps = getGlobalPptSlideSteps(slide);
  if (globalPptSteps > 0) return globalPptSteps;

  const sovereignSteps = getSovereignOperationsSlideSteps(slide);
  if (sovereignSteps > 0) return sovereignSteps;

  const legacyNextGenSteps = getNextGenSlideSteps(slide);
  if (legacyNextGenSteps > 0) return legacyNextGenSteps;

  const modernSteps = getModernSlideSteps(slide);
  if (modernSteps > 0) return modernSteps;

  const hasExplicitMaxSteps = typeof slide.maxSteps === 'number' && slide.maxSteps > 0;
  if (hasExplicitMaxSteps) {
    return slide.maxSteps;
  }

  return 1;
}

export {
  isGlobalPptExpansionSlide,
  calculateGlobalPptExpansionSlideSteps,
  isGlobalPptEvolutionSlide,
  calculateGlobalPptEvolutionStepCount,
  isSuite2026Slide,
  isSuite2028Slide,
  calculateSuite2028StepCount,
};

export type MotionVariant = 'lift' | 'slide' | 'parallax';

/**
 * Returns the CSS utility class corresponding to a kinetic motion variant.
 */
export function getMotionVariantClass(variant?: 'lift' | 'slide' | 'parallax'): string {
  if (variant === 'lift') return 'motion-variant-lift';
  if (variant === 'slide') return 'motion-variant-slide';
  if (variant === 'parallax') return 'motion-variant-parallax';
  return '';
}
