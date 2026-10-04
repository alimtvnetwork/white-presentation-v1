import type { PresentationDeck } from '../types/presentation';
import {
  deckSegmentCore,
  deckSegmentEnterprise,
  deckSegmentGlobalNextGen,
  deckSegmentModern,
  deckSegmentRevolutionMastery,
  deckSegmentSuites,
  SUITE_2032_SLIDES,
  SUITE_2033_SLIDES,
} from './deckSegments';

export const INITIAL_DECK: PresentationDeck = {
  id: 'white-presentation-v1',
  title: 'White Presentation System - Executive Keynote',
  version: '1.3.1',
  author: 'Riseup Asia Architectural Team',
  defaultThemeId: 'white-brand',
  canvas: {
    width: 1920,
    height: 1080,
    aspectRatio: '16:9',
  },
  slides: [
    ...deckSegmentCore,
    ...deckSegmentEnterprise,
    ...deckSegmentGlobalNextGen,
    ...deckSegmentModern,
    ...deckSegmentRevolutionMastery,
    ...deckSegmentSuites,
    ...SUITE_2032_SLIDES,
    ...SUITE_2033_SLIDES,
  ],
};

export const INITIAL_SLIDES = INITIAL_DECK.slides;
export const initialSlides = INITIAL_DECK.slides;
