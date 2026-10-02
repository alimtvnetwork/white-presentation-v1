import { create } from 'zustand';
import { PresentationDeck, SlideData } from '../types/presentation';
import { soundEngine } from '../audio/soundEngine';
import { INITIAL_DECK } from './initialDeck';

interface DeckStoreState {
  deck: PresentationDeck;
  activeSlideIndex: number;
  activeStep: number;
  activeThemeId: string;
  isSoundEnabled: boolean;
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (index: number) => void;
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
  activeThemeId: 'white-brand',
  isSoundEnabled: true,

  getActiveSlideMaxSteps: () => {
    const { deck, activeSlideIndex } = get();
    const currentSlide = deck.slides[activeSlideIndex] as any;
    if (!currentSlide) return 1;
    if (currentSlide.type === 'steps' && Array.isArray(currentSlide.steps)) return currentSlide.steps.length;
    if (currentSlide.type === 'timeline-roadmap' && Array.isArray(currentSlide.milestones)) return currentSlide.milestones.length;
    if (currentSlide.type === 'process-cycle' && Array.isArray(currentSlide.stages)) return currentSlide.stages.length;
    if (currentSlide.type === 'depth-stack' && Array.isArray(currentSlide.cards)) return currentSlide.cards.length;
    if (currentSlide.type === 'reveal-grid' && Array.isArray(currentSlide.items)) return currentSlide.items.length;
    return 1;
  },

  nextSlide: () => {
    const { activeSlideIndex, deck, isSoundEnabled } = get();
    if (activeSlideIndex < deck.slides.length - 1) {
      if (isSoundEnabled) soundEngine.playSlideWhoosh('next');
      set({ activeSlideIndex: activeSlideIndex + 1, activeStep: 0 });
    }
  },

  prevSlide: () => {
    const { activeSlideIndex, isSoundEnabled } = get();
    if (activeSlideIndex > 0) {
      if (isSoundEnabled) soundEngine.playSlideWhoosh('prev');
      set({ activeSlideIndex: activeSlideIndex - 1, activeStep: 0 });
    }
  },

  goToSlide: (index: number) => {
    const { deck, isSoundEnabled } = get();
    if (index >= 0 && index < deck.slides.length) {
      if (isSoundEnabled) soundEngine.playSlideWhoosh('next');
      set({ activeSlideIndex: index, activeStep: 0 });
    }
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
    const { isSoundEnabled } = get();
    if (isSoundEnabled) soundEngine.playStepClick();
    set({ activeStep: Math.max(0, step) });
  },

  setTheme: (themeId: string) => {
    if (get().isSoundEnabled) soundEngine.playStepClick();
    set({ activeThemeId: themeId });
  },

  toggleSound: () => {
    const nextState = !get().isSoundEnabled;
    soundEngine.setMuted(!nextState);
    set({ isSoundEnabled: nextState });
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
    set({ deck: { ...deck, slides }, activeSlideIndex: slides.length - 1, activeStep: 0 });
  },

  deleteSlide: (index: number) => {
    const { deck, activeSlideIndex } = get();
    if (deck.slides.length <= 1) return;
    const slides = deck.slides.filter((_, i) => i !== index);
    const newIndex = Math.min(activeSlideIndex, slides.length - 1);
    set({ deck: { ...deck, slides }, activeSlideIndex: newIndex, activeStep: 0 });
  },

  applyEdit: (updater: (slide: SlideData) => SlideData) => {
    const { deck, activeSlideIndex } = get();
    const currentSlide = deck.slides[activeSlideIndex];
    if (!currentSlide) return;
    const updated = updater(currentSlide);
    const slides = [...deck.slides];
    slides[activeSlideIndex] = updated;
    set({ deck: { ...deck, slides } });
  },
}));
