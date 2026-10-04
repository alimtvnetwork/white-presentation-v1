// lint-allow: file-size reason="Central deck presentation store and step navigation" max=350
import { create } from 'zustand';
import { PresentationDeck, SlideData } from '../types/presentation';
import { soundEngine } from '../audio/soundEngine';
import {
  getSlideMaxSteps,
  getKineticSlideSteps,
  getKineticSuiteSlideSteps,
  getExtendedSlideStepCount,
  getGlobalPptSlideSteps,
  getSovereignOperationsSlideSteps,
  getNextGenSlideSteps,
  getModernSlideSteps,
  getCustomizationSlideSteps,
  calculateCustomizationSlideStepCount,
  getFlatGlobalSuiteSlideSteps,
  getGlobalPptExpansionSlideSteps,
  getGlobalPptMasterySlideSteps,
} from '../utils/stepProgression';
import { INITIAL_DECK } from './initialDeck';

export {
  getSlideMaxSteps,
  getKineticSlideSteps,
  getKineticSuiteSlideSteps,
  getExtendedSlideStepCount,
  getGlobalPptSlideSteps,
  getSovereignOperationsSlideSteps,
  getNextGenSlideSteps,
  getModernSlideSteps,
  getCustomizationSlideSteps,
  calculateCustomizationSlideStepCount,
  getFlatGlobalSuiteSlideSteps,
  getGlobalPptExpansionSlideSteps,
  getGlobalPptMasterySlideSteps,
};

const computeSlideMaxSteps = (slide: any): number => {
  return getSlideMaxSteps(slide);
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
  transitionType: 'slide' | 'fade' | 'zoom' | 'rise' | 'flip';
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
  setTransitionType: (type: 'slide' | 'fade' | 'zoom' | 'rise' | 'flip') => void;
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
  transitionType: 'slide',
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
    if (!canAdvance) {
      get().nextSlide();
      return;
    }
    const nextStepIndex = activeStep + 1;
    if (isSoundEnabled) {
      const isFinalStep = nextStepIndex === maxSteps - 1;
      if (isFinalStep) {
        soundEngine.playStageComplete();
      } else {
        soundEngine.playStepAdvance();
      }
    }
    const indicators = computeStepIndicators(currentSlide, nextStepIndex);
    set({
      activeStep: nextStepIndex,
      currentStepIndex: nextStepIndex,
      ...indicators,
    });
  },

  stepRewind: () => {
    const { activeStep, isSoundEnabled, activeSlideIndex, deck } = get();
    const currentSlide = deck.slides[activeSlideIndex] as any;
    const canRewind = activeStep > 0;
    if (!canRewind) {
      get().prevSlide();
      return;
    }
    if (isSoundEnabled) {
      soundEngine.playStepRewind();
    }
    const prevStepIndex = activeStep - 1;
    const indicators = computeStepIndicators(currentSlide, prevStepIndex);
    set({
      activeStep: prevStepIndex,
      currentStepIndex: prevStepIndex,
      ...indicators,
    });
  },

  jumpToStep: (step: number) => {
    const { isSoundEnabled, activeSlideIndex, deck } = get();
    const currentSlide = deck.slides[activeSlideIndex] as any;
    if (isSoundEnabled) soundEngine.playStepClick();
    const maxSteps = computeSlideMaxSteps(currentSlide);
    const safeStep = Math.max(0, Math.min(step, Math.max(0, maxSteps - 1)));
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

  setTransitionType: (type: 'slide' | 'fade' | 'zoom' | 'rise' | 'flip') => {
    set({ transitionType: type });
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
