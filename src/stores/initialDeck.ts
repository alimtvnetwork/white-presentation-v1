import type { PresentationDeck } from '../types/presentation';
import {
  deckSegmentCore,
  deckSegmentEnterprise,
  deckSegmentGlobalNextGen,
  deckSegmentModern,
  deckSegmentRevolutionMastery,
  deckSegmentSuites,
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
  ],
};

export const initialSlides = INITIAL_DECK.slides;
