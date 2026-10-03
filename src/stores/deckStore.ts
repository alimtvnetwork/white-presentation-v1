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

export const getExtendedSlideStepCount = getKineticSlideSteps;

const computeSlideMaxSteps = (slide: any): number => {
  const hasSlide = Boolean(slide);
  if (hasSlide) {
    const count =
      getCoreSlideSteps(slide) ||
      getExpandedSlideSteps(slide) ||
      getEnterpriseSlideSteps(slide) ||
      getKineticSlideSteps(slide);
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


interface DeckStoreState {
  deck: PresentationDeck;
  activeSlideIndex: number;
  activeStep: number;
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
  getActiveSlideMaxSteps: () => number;
  setTheme: (themeId: string) => void;
  toggleSound: () => void;
  upsertSlide: (slide: SlideData) => void;
  addSlide: (slide: SlideData) => void;
  deleteSlide: (index: number) => void;
  applyEdit: (updater: (slide: SlideData) => SlideData) => void;
}

export const useDeckStore = create<DeckStoreState>((set, get) => ({
  deck: INITIAL_DECK,
  activeSlideIndex: 0,
  activeStep: 0,
  slideDirection: 1,
  activeThemeId: 'white-brand',
  isSoundEnabled: true,

  getActiveSlideMaxSteps: () => computeSlideMaxSteps(get().deck.slides[get().activeSlideIndex]),

  nextSlide: () => {
    const { activeSlideIndex, deck, isSoundEnabled } = get();
    if (activeSlideIndex < deck.slides.length - 1) {
      if (isSoundEnabled) soundEngine.playSlideWhoosh('next');
      set({ activeSlideIndex: activeSlideIndex + 1, slideDirection: 1, activeStep: 0 });
    }
  },

  prevSlide: () => {
    const { activeSlideIndex, deck, isSoundEnabled } = get();
    if (activeSlideIndex > 0) {
      if (isSoundEnabled) soundEngine.playSlideWhoosh('prev');
      const targetIndex = activeSlideIndex - 1;
      const targetSlide = deck.slides[targetIndex] as any;
      const targetStep = getLastStepOfSlide(targetSlide);
      set({ activeSlideIndex: targetIndex, slideDirection: -1, activeStep: targetStep });
    }
  },

  goToSlide: (index: number) => {
    const { deck, activeSlideIndex, isSoundEnabled } = get();
    if (index >= 0 && index < deck.slides.length) {
      const isNext = index >= activeSlideIndex;
      if (isSoundEnabled) soundEngine.playSlideWhoosh(isNext ? 'next' : 'prev');
      const slideDirection: 1 | -1 = isNext ? 1 : -1;
      set({ activeSlideIndex: index, slideDirection, activeStep: 0 });
    }
  },

  jumpToSlide: (index: number) => {
    get().goToSlide(index);
  },

  stepAdvance: () => {
    const { activeStep, isSoundEnabled } = get();
    const maxSteps = get().getActiveSlideMaxSteps();
    if (activeStep < maxSteps - 1) {
      if (isSoundEnabled) soundEngine.playStepClick();
      set({ activeStep: activeStep + 1 });
    } else {
      get().nextSlide();
    }
  },

  stepRewind: () => {
    const { activeStep, isSoundEnabled } = get();
    if (activeStep > 0) {
      if (isSoundEnabled) soundEngine.playStepClick();
      set({ activeStep: activeStep - 1 });
    } else {
      get().prevSlide();
    }
  },

  jumpToStep: (step: number) => {
    if (get().isSoundEnabled) soundEngine.playStepClick();
    set({ activeStep: Math.max(0, step) });
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
    const { deck, activeSlideIndex } = get();
    const slides = [...deck.slides];
    slides[activeSlideIndex] = slide;
    set({ deck: { ...deck, slides } });
  },

  addSlide: (slide: SlideData) => {
    const { deck } = get();
    const slides = [...deck.slides, slide];
    set({ deck: { ...deck, slides }, activeSlideIndex: slides.length - 1, slideDirection: 1, activeStep: 0 });
  },

  deleteSlide: (index: number) => {
    const { deck, activeSlideIndex } = get();
    if (deck.slides.length <= 1) return;
    const slides = deck.slides.filter((_, i) => i !== index);
    const newIndex = Math.min(activeSlideIndex, slides.length - 1);
    set({ deck: { ...deck, slides }, activeSlideIndex: newIndex, slideDirection: -1, activeStep: 0 });
  },

  applyEdit: (updater: (slide: SlideData) => SlideData) => {
    const { deck, activeSlideIndex } = get();
    const currentSlide = deck.slides[activeSlideIndex];
    const hasCurrentSlide = Boolean(currentSlide);
    if (hasCurrentSlide) {
      const slides = [...deck.slides];
      slides[activeSlideIndex] = updater(currentSlide);
      set({ deck: { ...deck, slides } });
    }
  },
}));
