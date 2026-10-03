import { create } from 'zustand';
import { PresentationDeck, SlideData } from '../types/presentation';
import { soundEngine } from '../audio/soundEngine';
import { INITIAL_DECK } from './initialDeck';

const getCoreSlideSteps = (slide: any): number => {
  if (slide.type === 'steps' && Array.isArray(slide.steps)) return slide.steps.length;
  if (slide.type === 'steps-chain' && Array.isArray(slide.steps)) return slide.steps.length;
  if (slide.type === 'timeline-roadmap' && Array.isArray(slide.milestones)) return slide.milestones.length;
  if (slide.type === 'process-cycle' && Array.isArray(slide.stages)) return slide.stages.length;
  if (slide.type === 'depth-stack' && Array.isArray(slide.cards)) return slide.cards.length;
  if (slide.type === 'reveal-grid' && Array.isArray(slide.items)) return slide.items.length;
  if (slide.type === 'talent-pyramid' && Array.isArray(slide.tiers)) return slide.tiers.length;
  return 0;
};

const getExpandedSlideSteps = (slide: any): number => {
  if (slide.type === 'next-steps-sprint' && Array.isArray(slide.sprints)) return slide.sprints.length;
  if (slide.type === 'before-after-showcase' && Array.isArray(slide.features)) return slide.features.length;
  if (slide.type === 'saas-pricing-tiers' && Array.isArray(slide.tiers)) return slide.tiers.length;
  if (slide.type === 'interactive-quiz' && Array.isArray(slide.options)) return slide.options.length;
  if (slide.type === 'hardware-showcase' && Array.isArray(slide.hotspots)) return slide.hotspots.length;
  if (slide.type === 'faq-accordion' && Array.isArray(slide.faqs)) return slide.faqs.length;
  return 0;
};

const getEnterpriseSlideSteps = (slide: SlideData | any): number => {
  if (slide.type === 'executive-summary') return slide.strategicPillars?.length || 1;
  if (slide.type === 'system-architecture-flow') return slide.layers?.length || 1;
  if (slide.type === 'roi-metric-calculator') return slide.calculatedMetrics?.length || 1;
  if (slide.type === 'customer-journey-map') return slide.phases?.length || 1;
  if (slide.type === 'matrix-comparison-grid') return slide.features?.length || 1;
  if (slide.type === 'tech-stack-grid') return slide.stackPillars?.length || 1;
  if (slide.type === 'team-hierarchy-org') return slide.departments?.length || 1;
  if (slide.type === 'security-compliance-matrix') return slide.certifications?.length || 1;
  if (slide.type === 'product-roadmap-timeline') return slide.milestones?.length || 1;
  if (slide.type === 'interactive-faq-flow') return slide.faqItems?.length || 1;
  if (slide.type === 'key-metric-scorecard') return slide.scorecards?.length || 1;
  if (slide.type === 'case-study-impact') return slide.quantifiedResults?.length || 3;
  if (slide.type === 'dual-column-pros-cons') return Math.max(slide.pros?.length || 0, slide.cons?.length || 0, 1);
  if (slide.type === 'interactive-code-playground') return 3;
  if (slide.type === 'closing-cta-showcase') return 2;
  if (slide.type === 'timeline-rail') return slide.railNodes?.length || 1;
  return 0;
};

export const getKineticSlideSteps = (slide: any): number => {
  if (!slide || typeof slide !== 'object') return 0;

  switch (slide.type) {
    case 'personal-vpn':
      return slide.features?.length || slide.nodes?.length || 4;
    case 'meeting-transcript':
      return slide.transcriptSegments?.length || slide.speakerTurns?.length || 3;
    case 'llm-benchmark':
      return slide.modelResults?.length || slide.models?.length || 3;
    case 'services-gravity':
      return slide.pillars?.length || slide.services?.length || 3;
    case 'seo-dominance':
      return slide.eras?.length || 4;
    case 'staff-aug-pipeline':
      return slide.vettingStages?.length || slide.stages?.length || 6;
    case 'craftsmanship-benchmark':
      return slide.revelations?.length || slide.benchmarks?.length || 3;
    case 'weekly-cadence':
      return slide.weeklyRituals?.length || slide.days?.length || 5;
    case 'competitive-moat':
      return slide.moatDimensions?.length || slide.moatPillars?.length || 3;
    case 'rapid-feedback':
      return slide.cycleStages?.length || slide.loopStages?.length || 4;
    case 'interactive-poll':
      return 3;
    case 'live-qa':
      return Math.min(5, slide.curatedQuestions?.length || slide.questions?.length || 3);
    case 'embed-stage':
      return 2;
    case 'countdown-launch':
      return slide.launchPhases?.length || slide.launchGates?.length || 3;
    case 'executive-takeaways':
      return slide.actionProtocols?.length || slide.actionItems?.length || 3;
    default:
      return 0;
  }
};

export const getKineticSuiteSlideSteps = (slide: any): number => {
  if (!slide || typeof slide !== 'object') return 0;

  switch (slide.type) {
    case 'code-diff-comparison':
      return slide.diffReveals?.length || slide.diffChunks?.length || 2;
    case 'api-endpoint-inspector':
      return slide.inspectorSteps?.length || slide.parameters?.length || 3;
    case 'database-schema-erd':
      return slide.tables?.length || 3;
    case 'ai-agent-swarm-dag':
      return slide.swarmPhases?.length || slide.nodes?.length || 3;
    case 'canary-release-gauge':
      return slide.canaryStages?.length || slide.stages?.length || 4;
    case 'incident-rca-postmortem':
      return slide.rcaPhases?.length || slide.pillars?.length || 4;
    case 'audio-waveform-studio':
      return slide.audioPhases?.length || slide.tracks?.length || 3;
    case 'verifiable-audit-ledger':
      return slide.evidenceGates?.length || slide.gates?.length || 4;
    case 'global-cloud-edge-mesh':
    case 'security-threat-model':
    case 'financial-burn-runway':
    case 'bento-kpi-mosaic':
    case 'slas-and-uptime-status':
    case 'hardware-silicon-spec':
    case 'cohort-retention-heatmap':
      return 1;
    default:
      return 1;
  }
};

export const getExtendedSlideStepCount = getKineticSlideSteps;

export const getGlobalPptSlideSteps = (slide: any): number => {
  if (!slide || typeof slide !== 'object') return 0;

  switch (slide.type) {
    case 'executive-governance-matrix':
      return slide.governancePillars?.length || 4;
    case 'okr-cascade-alignment':
      return slide.cascadeTiers?.length || 4;
    case 'competitive-battlecard':
      return slide.battlecardPillars?.length || 3;
    case 'launch-readiness-checklist':
      return slide.stageGates?.length || 4;
    case 'developer-gateway-sandbox':
      return slide.gatewayStages?.length || 3;
    case 'rag-pipeline-topology':
      return slide.pipelineStages?.length || 5;
    case 'soc-incident-war-room':
      return slide.incidentPhases?.length || 4;
    case 'merkle-tree-state-ledger':
      return slide.verificationSteps?.length || 4;
    case 'talent-competency-radar':
      return slide.levelMilestones?.length || 3;
    case 'cloud-cost-finops-optimizer':
    case 'customer-sentiment-radar':
    case 'investor-cap-table-waterfall':
    case 'realtime-event-stream-fabric':
    case 'supply-chain-risk-matrix':
    case 'sustainability-esg-scorecard':
      return 1;
    default:
      return 0;
  }
};

export const getSovereignOperationsSlideSteps = (slide: any): number => {
  if (!slide || typeof slide !== 'object') return 0;

  switch (slide.type) {
    case 'zero-trust-packet-inspection':
      return slide.inspectionStages?.length || 4;
    case 'database-migration-pipeline':
      return slide.migrationPhases?.length || 4;
    case 'autonomous-ai-eval-harness':
      return slide.benchmarkSuites?.length || 4;
    case 'chaos-engineering-matrix':
      return slide.chaosExperiments?.length || 4;
    case 'ci-cd-artifact-provenance':
      return slide.provenanceStages?.length || 4;
    case 'disaster-recovery-drill':
      return slide.drillPhases?.length || 4;
    case 'feature-flag-rollout-tree':
      return slide.rolloutRings?.length || 4;
    case 'quantum-cryptography-transition':
      return (slide as any).transitionStages?.length || 4;
    case 'global-latency-topology':
    case 'microservices-mesh-telemetry':
    case 'threat-intelligence-feed':
    case 'data-lakehouse-governance':
    case 'kubernetes-fleet-orchestrator':
    case 'api-monetization-billing':
    case 'ai-inference-cluster-telemetry':
      return slide.maxSteps || 1;
    default:
      return 0;
  }
};

export const getNextGenSlideSteps = (slide: any): number => {
  if (!slide || typeof slide !== 'object') return 0;

  switch (slide.type) {
    case 'three-horizons-strategy-matrix':
      return slide.horizons?.length || 3;
    case 'ai-agent-fleet-topology':
    case 'api-rate-limit-gateway':
    case 'multi-cloud-dr-failover-mesh':
    case 'fintech-payment-clearing-engine':
    case 'model-context-protocol-mesh':
    case 'data-clean-room-collaboration':
    case 'supply-chain-digital-twin-lattice':
    case 'voice-ai-realtime-conversational-mesh':
      return slide.maxSteps || 4;
    case 'executive-mergers-acquisitions-synergy':
      return (slide as any).synergyMilestones?.length || (slide as any).maxSteps || 4;
    case 'esg-decarbonization-roadmap':
      return slide.milestoneYears?.length || 4;
    case 'developer-platform-idp-hub':
      return slide.goldenTemplates?.length || 4;
    case 'cyber-threat-kill-chain-matrix':
      return slide.killChainStages?.length || 4;
    case 'compliance-audit-soc2-readiness-ladder':
      return (slide as any).ladderSteps?.length || (slide as any).trustCriteriaScores?.length || 5;
    case 'value-stream-engineering-dora-flywheel':
      return (slide as any).flywheelQuadrants?.length || 4;
    default:
      return 0;
  }
};

const computeSlideMaxSteps = (slide: any): number => {
  const hasSlide = Boolean(slide);
  if (hasSlide) {
    const count =
      getCoreSlideSteps(slide) ||
      getExpandedSlideSteps(slide) ||
      getEnterpriseSlideSteps(slide) ||
      getKineticSlideSteps(slide) ||
      getKineticSuiteSlideSteps(slide) ||
      getGlobalPptSlideSteps(slide) ||
      getSovereignOperationsSlideSteps(slide) ||
      getNextGenSlideSteps(slide);
    const hasMultipleSteps = count > 0;
    if (hasMultipleSteps) {
      return count;
    }
  }
  return 1;
};

const getLastStepOfSlide = (targetSlide: any): number => {
  const maxSteps = computeSlideMaxSteps(targetSlide);
  return Math.max(0, maxSteps - 1);
};

const computeStepIndicators = (slide: any, step: number) => {
  const maxSteps = computeSlideMaxSteps(slide);
  const hasIntraSteps = maxSteps > 1;
  const canAdvanceStep = hasIntraSteps && step < maxSteps - 1;
  const canRewindStep = step > 0;
  return { hasIntraSteps, canAdvanceStep, canRewindStep };
};

interface DeckStoreState {
  deck: PresentationDeck;
  activeSlideIndex: number;
  currentSlideIndex: number;
  activeStep: number;
  currentStepIndex: number;
  canAdvanceStep: boolean;
  canRewindStep: boolean;
  hasIntraSteps: boolean;
  slideDirection: 1 | -1;
  activeThemeId: string;
  isSoundEnabled: boolean;
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (index: number) => void;
  jumpToSlide: (index: number) => void;
  stepAdvance: () => void;
  stepRewind: () => void;
  jumpToStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  setStep: (stepIndex: number) => void;
  setActiveStep: (stepIndex: number) => void;
  getActiveSlideMaxSteps: () => number;
  setTheme: (themeId: string) => void;
  toggleSound: () => void;
  upsertSlide: (slide: SlideData) => void;
  addSlide: (slide: SlideData) => void;
  deleteSlide: (index: number) => void;
  applyEdit: (updater: (slide: SlideData) => SlideData) => void;
}

const initialSlide = INITIAL_DECK.slides[0] as any;
const initialIndicators = computeStepIndicators(initialSlide, 0);

export const useDeckStore = create<DeckStoreState>((set, get) => ({
  deck: INITIAL_DECK,
  activeSlideIndex: 0,
  currentSlideIndex: 0,
  activeStep: 0,
  currentStepIndex: 0,
  ...initialIndicators,
  slideDirection: 1,
  activeThemeId: 'white-brand',
  isSoundEnabled: true,

  getActiveSlideMaxSteps: () => computeSlideMaxSteps(get().deck.slides[get().activeSlideIndex]),

  nextSlide: () => {
    const { activeSlideIndex, deck, isSoundEnabled } = get();
    const canAdvanceSlide = activeSlideIndex < deck.slides.length - 1;
    if (canAdvanceSlide) {
      if (isSoundEnabled) soundEngine.playSlideWhoosh('next');
      const nextIndex = activeSlideIndex + 1;
      const targetSlide = deck.slides[nextIndex] as any;
      const indicators = computeStepIndicators(targetSlide, 0);
      set({
        activeSlideIndex: nextIndex,
        currentSlideIndex: nextIndex,
        slideDirection: 1,
        activeStep: 0,
        currentStepIndex: 0,
        ...indicators,
      });
    }
  },

  prevSlide: () => {
    const { activeSlideIndex, deck, isSoundEnabled } = get();
    const canRewindSlide = activeSlideIndex > 0;
    if (canRewindSlide) {
      if (isSoundEnabled) soundEngine.playSlideWhoosh('prev');
      const targetIndex = activeSlideIndex - 1;
      const targetSlide = deck.slides[targetIndex] as any;
      const targetStep = getLastStepOfSlide(targetSlide);
      const indicators = computeStepIndicators(targetSlide, targetStep);
      set({
        activeSlideIndex: targetIndex,
        currentSlideIndex: targetIndex,
        slideDirection: -1,
        activeStep: targetStep,
        currentStepIndex: targetStep,
        ...indicators,
      });
    }
  },

  goToSlide: (index: number) => {
    const { deck, activeSlideIndex, isSoundEnabled } = get();
    const isIndexValid = index >= 0 && index < deck.slides.length;
    if (isIndexValid) {
      const isNext = index >= activeSlideIndex;
      if (isSoundEnabled) soundEngine.playSlideWhoosh(isNext ? 'next' : 'prev');
      const slideDirection: 1 | -1 = isNext ? 1 : -1;
      const targetSlide = deck.slides[index] as any;
      const indicators = computeStepIndicators(targetSlide, 0);
      set({
        activeSlideIndex: index,
        currentSlideIndex: index,
        slideDirection,
        activeStep: 0,
        currentStepIndex: 0,
        ...indicators,
      });
    }
  },

  jumpToSlide: (index: number) => {
    get().goToSlide(index);
  },

  stepAdvance: () => {
    const { activeStep, isSoundEnabled, activeSlideIndex, deck } = get();
    const currentSlide = deck.slides[activeSlideIndex] as any;
    const maxSteps = computeSlideMaxSteps(currentSlide);
    const canAdvance = activeStep < maxSteps - 1;
    if (canAdvance) {
      if (isSoundEnabled) soundEngine.playStepClick();
      const nextStepIndex = activeStep + 1;
      const indicators = computeStepIndicators(currentSlide, nextStepIndex);
      set({
        activeStep: nextStepIndex,
        currentStepIndex: nextStepIndex,
        ...indicators,
      });
    } else {
      get().nextSlide();
    }
  },

  stepRewind: () => {
    const { activeStep, isSoundEnabled, activeSlideIndex, deck } = get();
    const currentSlide = deck.slides[activeSlideIndex] as any;
    const canRewind = activeStep > 0;
    if (canRewind) {
      if (isSoundEnabled) soundEngine.playStepClick();
      const prevStepIndex = activeStep - 1;
      const indicators = computeStepIndicators(currentSlide, prevStepIndex);
      set({
        activeStep: prevStepIndex,
        currentStepIndex: prevStepIndex,
        ...indicators,
      });
    } else {
      get().prevSlide();
    }
  },

  jumpToStep: (step: number) => {
    const { isSoundEnabled, activeSlideIndex, deck } = get();
    const currentSlide = deck.slides[activeSlideIndex] as any;
    if (isSoundEnabled) soundEngine.playStepClick();
    const safeStep = Math.max(0, step);
    const indicators = computeStepIndicators(currentSlide, safeStep);
    set({
      activeStep: safeStep,
      currentStepIndex: safeStep,
      ...indicators,
    });
  },

  nextStep: () => {
    get().stepAdvance();
  },

  prevStep: () => {
    get().stepRewind();
  },

  setStep: (stepIndex: number) => {
    get().jumpToStep(stepIndex);
  },

  setActiveStep: (stepIndex: number) => {
    get().jumpToStep(stepIndex);
  },

  setTheme: (themeId: string) => {
    if (get().isSoundEnabled) soundEngine.playStepClick();
    set({ activeThemeId: themeId });
  },

  toggleSound: () => {
    const isCurrentSoundEnabled = get().isSoundEnabled;
    const isNextSoundEnabled = isCurrentSoundEnabled ? false : true;
    soundEngine.setMuted(isCurrentSoundEnabled);
    set({ isSoundEnabled: isNextSoundEnabled });
  },

  upsertSlide: (slide: SlideData) => {
    const { deck, activeSlideIndex, activeStep } = get();
    const slides = [...deck.slides];
    slides[activeSlideIndex] = slide;
    const indicators = computeStepIndicators(slide, activeStep);
    set({ deck: { ...deck, slides }, ...indicators });
  },

  addSlide: (slide: SlideData) => {
    const { deck } = get();
    const slides = [...deck.slides, slide];
    const newIndex = slides.length - 1;
    const indicators = computeStepIndicators(slide, 0);
    set({
      deck: { ...deck, slides },
      activeSlideIndex: newIndex,
      currentSlideIndex: newIndex,
      slideDirection: 1,
      activeStep: 0,
      currentStepIndex: 0,
      ...indicators,
    });
  },

  deleteSlide: (index: number) => {
    const { deck, activeSlideIndex } = get();
    const hasEnoughSlides = deck.slides.length > 1;
    if (hasEnoughSlides) {
      const slides = deck.slides.filter((_, i) => i !== index);
      const newIndex = Math.min(activeSlideIndex, slides.length - 1);
      const targetSlide = slides[newIndex] as any;
      const indicators = computeStepIndicators(targetSlide, 0);
      set({
        deck: { ...deck, slides },
        activeSlideIndex: newIndex,
        currentSlideIndex: newIndex,
        slideDirection: -1,
        activeStep: 0,
        currentStepIndex: 0,
        ...indicators,
      });
    }
  },

  applyEdit: (updater: (slide: SlideData) => SlideData) => {
    const { deck, activeSlideIndex, activeStep } = get();
    const currentSlide = deck.slides[activeSlideIndex];
    const hasCurrentSlide = Boolean(currentSlide);
    if (hasCurrentSlide) {
      const slides = [...deck.slides];
      const updatedSlide = updater(currentSlide);
      slides[activeSlideIndex] = updatedSlide;
      const indicators = computeStepIndicators(updatedSlide, activeStep);
      set({ deck: { ...deck, slides }, ...indicators });
    }
  },
}));
