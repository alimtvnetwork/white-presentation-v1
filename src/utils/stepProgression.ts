// lint-allow: file-size reason="Central step progression calculations and kinetic physics" max=450
import type { CSSProperties } from 'react';
import { isModernSlide, calculateModernSlideStepCount } from '../types/modernArchetypes';

export type StepPhase = 'past' | 'completed' | 'active' | 'future';

export const STEP_EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';
export const STEP_TRANSITION = 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)';

export const PROGRESS_RAIL_SPRING = {
  type: 'spring',
  stiffness: 220,
  damping: 32,
  mass: 1.0,
} as const;

export const STEP_DETAIL_PANE_SPRING = {
  type: 'spring',
  stiffness: 420,
  damping: 17,
  mass: 0.8,
} as const;

export const HARMONIC_SPRING = STEP_DETAIL_PANE_SPRING;

export const HALO_SPRING = {
  type: 'spring',
  stiffness: 320,
  damping: 30,
  mass: 0.9,
} as const;

export function resolveStepPhase(itemIndex: number, activeStep: number): StepPhase {
  if (itemIndex < activeStep) {
    return 'completed';
  }
  if (itemIndex === activeStep) {
    return 'active';
  }
  return 'future';
}

export function getStepPhase(index: number, activeStep: number): StepPhase {
  if (index < activeStep) {
    return 'past';
  }
  if (index === activeStep) {
    return 'active';
  }
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

  return {
    activeX,
    progressPercent,
    totalSteps: safeTotal,
    stepWidth,
  };
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

export function generateSvgQuadraticBezierPath(
  start: RailPoint,
  end: RailPoint,
  curveOffset: number = 0
): string {
  const controlX = (start.x + end.x) / 2;
  const controlY = (start.y + end.y) / 2 + curveOffset;
  return `M ${start.x} ${start.y} Q ${controlX} ${controlY} ${end.x} ${end.y}`;
}

export function generateSvgBezierRailConnector(
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  curveOffset: number = 0
): string {
  const controlX = (fromX + toX) / 2;
  const controlY = (fromY + toY) / 2 + curveOffset;
  return `M ${fromX} ${fromY} Q ${controlX} ${controlY} ${toX} ${toY}`;
}

export function isGlobalPptSlideType(type?: string): boolean {
  const globalTypes = [
    'executive-governance-matrix',
    'okr-cascade-alignment',
    'cloud-cost-finops-optimizer',
    'customer-sentiment-radar',
    'competitive-battlecard',
    'launch-readiness-checklist',
    'developer-gateway-sandbox',
    'rag-pipeline-topology',
    'soc-incident-war-room',
    'merkle-tree-state-ledger',
    'investor-cap-table-waterfall',
    'realtime-event-stream-fabric',
    'supply-chain-risk-matrix',
    'talent-competency-radar',
    'sustainability-esg-scorecard',
  ];
  return Boolean(type && globalTypes.includes(type));
}

export function calculateGlobalPptSlideStepCount(slide: any): number {
  const hasSlide = Boolean(slide && typeof slide === 'object');
  if (hasSlide) {
    switch (slide.type) {
      case 'executive-governance-matrix':
        return Math.max(slide.governancePillars?.length || 4, 1);
      case 'okr-cascade-alignment':
        return Math.max(slide.cascadeTiers?.length || 4, 1);
      case 'competitive-battlecard':
        return Math.max(slide.battlecardPillars?.length || 3, 1);
      case 'launch-readiness-checklist':
        return Math.max(slide.stageGates?.length || 4, 1);
      case 'developer-gateway-sandbox':
        return Math.max(slide.gatewayStages?.length || 3, 1);
      case 'rag-pipeline-topology':
        return Math.max(slide.pipelineStages?.length || 5, 1);
      case 'soc-incident-war-room':
        return Math.max(slide.incidentPhases?.length || 4, 1);
      case 'merkle-tree-state-ledger':
        return Math.max(slide.verificationSteps?.length || 4, 1);
      case 'talent-competency-radar':
        return Math.max(slide.levelMilestones?.length || 3, 1);
      case 'cloud-cost-finops-optimizer':
      case 'customer-sentiment-radar':
      case 'investor-cap-table-waterfall':
      case 'realtime-event-stream-fabric':
      case 'supply-chain-risk-matrix':
      case 'sustainability-esg-scorecard':
        return 1;
      default:
        return 1;
    }
  }
  return 1;
}

export function isCustomizationSlideType(type?: string): boolean {
  const customizationTypes = [
    'neural-vector-search-topology',
    'model-quantization-speculative-decoding',
    'llm-firewall-red-team-matrix',
    'global-anycast-traffic-director',
    'cqrs-event-sourcing-fabric',
    'sbom-slsa-provenance-attestation',
    'post-merger-integration-roadmap',
    'scope3-carbon-supply-chain-audit',
    'cspm-ciem-cloud-entitlement-graph',
    'confidential-computing-enclave',
    'predictive-autoscaling-pod-matrix',
    'capex-opex-capital-allocation',
    'transfer-pricing-tax-topology',
    'sales-quota-compensation-matrix',
    'executive-succession-leadership-bench',
  ];
  return Boolean(type && customizationTypes.includes(type));
}

export function calculateCustomizationSlideStepCount(slide: any): number {
  const hasSlide = Boolean(slide && typeof slide === 'object');
  if (hasSlide) {
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
      case 'cspm-ciem-cloud-entitlement-graph':
      case 'confidential-computing-enclave':
      case 'predictive-autoscaling-pod-matrix':
      case 'capex-opex-capital-allocation':
      case 'transfer-pricing-tax-topology':
      case 'sales-quota-compensation-matrix':
      case 'executive-succession-leadership-bench':
        return 1;
      default:
        return 1;
    }
  }
  return 1;
}

export function isFlatGlobalSuiteSlideType(type?: string): boolean {
  const flatGlobalTypes = [
    'interactive-branching-close',
    'before-after-showcase-pan',
    'search-serp-proof-lightbox',
    'cognitive-inversion-punchline',
    'talent-pyramid-funnel-svg',
    'hexagonal-tech-cluster',
    'connected-roadmap-rail-pulse',
    'campaign-performance-lightbox',
    'executive-roster-keypad',
    'flat-step-process-flow',
    'flat-split-narrative-stepper',
    'flat-timeline-milestone-rail',
    'flat-reveal-bento-grid',
    'flat-depth-sentence-stack',
    'flat-typewriter-code-walkthrough',
  ];
  return Boolean(type && flatGlobalTypes.includes(type));
}

// lint-allow: function-length reason="exhaustive switch over 15 flat global suite slide types" max=50
export function calculateFlatGlobalSuiteSlideSteps(slide: any): number {
  const hasSlide = Boolean(slide && typeof slide === 'object');
  if (!hasSlide) {
    return 1;
  }
  switch (slide.type) {
    case 'interactive-branching-close':
      return Math.max(slide.branches?.length || 2, 1);
    case 'before-after-showcase-pan':
      return Math.max(slide.panItems?.length || 2, 1);
    case 'search-serp-proof-lightbox':
      return Math.max(slide.proofItems?.length || 3, 1);
    case 'cognitive-inversion-punchline':
      return Math.max(slide.inversionPillars?.length || 3, 1);
    case 'talent-pyramid-funnel-svg':
      return Math.max(slide.funnelTiers?.length || 4, 1);
    case 'hexagonal-tech-cluster':
      return Math.max(slide.clusterNodes?.length || 4, 1);
    case 'connected-roadmap-rail-pulse':
      return Math.max(slide.railNodes?.length || 4, 1);
    case 'campaign-performance-lightbox':
      return Math.max(slide.lightboxCreatives?.length || slide.performanceChannels?.length || 3, 1);
    case 'executive-roster-keypad':
      return Math.max(slide.rosterMembers?.length || 4, 1);
    case 'flat-step-process-flow':
      return Math.max(slide.processSteps?.length || 4, 1);
    case 'flat-split-narrative-stepper':
      return Math.max(slide.stepperSteps?.length || slide.stages?.length || 3, 1);
    case 'flat-timeline-milestone-rail':
      return Math.max(slide.milestones?.length || 4, 1);
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

export function getSlideMaxSteps(slide: any): number {
  const hasSlide = Boolean(slide && typeof slide === 'object');
  if (!hasSlide) {
    return 1;
  }
  if (isFlatGlobalSuiteSlideType(slide.type)) {
    return calculateFlatGlobalSuiteSlideSteps(slide);
  }
  if (isCustomizationSlideType(slide.type)) {
    return calculateCustomizationSlideStepCount(slide);
  }
  if (isGlobalPptSlideType(slide.type)) {
    return calculateGlobalPptSlideStepCount(slide);
  }
  if (isModernSlide(slide)) {
    return calculateModernSlideStepCount(slide);
  }
  return 1;
}

export type MotionVariant = 'lift' | 'slide' | 'parallax';

/**
 * Returns the CSS utility class corresponding to a kinetic motion variant.
 */
export function getMotionVariantClass(variant?: 'lift' | 'slide' | 'parallax'): string {
  if (variant === 'lift') {
    return 'motion-variant-lift';
  }
  if (variant === 'slide') {
    return 'motion-variant-slide';
  }
  if (variant === 'parallax') {
    return 'motion-variant-parallax';
  }
  return '';
}
