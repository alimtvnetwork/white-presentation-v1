import { useEffect } from 'react';
import { useDeckStore } from '../stores/deckStore';
import { useEditStore } from '../stores/editStore';
import { THEME_PALETTES } from '../themes/gradientTokens';

const isFormField = (target: EventTarget | null): boolean => {
  const el = target as HTMLElement | null;
  if (!el) {
    return false;
  }

  const tag = el.tagName;

  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || Boolean(el.isContentEditable);
};

interface DeckShortcutsParams {
  onToggleShortcutsModal: () => void;
  onToggleOverviewGrid: () => void;
  onCloseModals: () => void;
}

const toggleFullscreen = (): void => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
};

export const useDeckShortcuts = (params: DeckShortcutsParams): void => {
  const {
    deck,
    activeStep,
    stepAdvance,
    stepRewind,
    jumpToStep,
    nextSlide,
    prevSlide,
    goToSlide,
    getActiveSlideMaxSteps,
    activeThemeId,
    setTheme,
    toggleSound,
  } = useDeckStore();
  const { toggleEditMode } = useEditStore();

  const cycleTheme = () => {
    const list = Object.keys(THEME_PALETTES);
    setTheme(list[(list.indexOf(activeThemeId) + 1) % list.length]);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey || isFormField(e.target)) return;

      const k = e.key.toLowerCase();
      const hasShift = Boolean(e.shiftKey);

      if (hasShift && (k === 'arrowright' || k === ' ')) {
        e.preventDefault();
        nextSlide();
        return;
      }

      if (hasShift && k === 'arrowleft') {
        e.preventDefault();
        prevSlide();
        return;
      }

      if (['arrowright', ' ', 'enter', 'pagedown'].includes(k)) {
        e.preventDefault();
        const maxSteps = getActiveSlideMaxSteps();
        const hasMultipleSteps = maxSteps > 1;
        const canAdvance = activeStep < maxSteps - 1;
        const canStepForward = hasMultipleSteps && canAdvance;
        if (canStepForward) {
          stepAdvance();
        } else {
          nextSlide();
        }
      } else if (['arrowleft', 'backspace', 'pageup'].includes(k)) {
        e.preventDefault();
        const canRewind = activeStep > 0;
        if (canRewind) {
          stepRewind();
        } else {
          prevSlide();
        }
      } else if (k === 'f') {
        e.preventDefault();
        toggleFullscreen();
      } else if (k === 'g') {
        e.preventDefault();
        params.onToggleOverviewGrid();
      } else if (k === 't') {
        e.preventDefault();
        cycleTheme();
      } else if (k === 'm') {
        e.preventDefault();
        toggleSound();
      } else if (k === 'b') {
        e.preventDefault();
        toggleEditMode();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(deck.slides.length - 1);
      } else if (k === '?' || k === '/') {
        e.preventDefault();
        params.onToggleShortcutsModal();
      } else if (e.key === 'Escape') {
        params.onCloseModals();
      } else if (['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(k)) {
        e.preventDefault();
        const stepNumber = Number(k);
        const targetStepIndex = stepNumber - 1;
        const maxSteps = getActiveSlideMaxSteps();
        const isStepInRange = targetStepIndex < maxSteps;
        if (isStepInRange) {
          jumpToStep(targetStepIndex);
        }
      } else if (k === '0') {
        e.preventDefault();
        jumpToStep(0);
      }
    };

    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
    };
  }, [
    deck.slides.length,
    activeStep,
    stepAdvance,
    stepRewind,
    jumpToStep,
    nextSlide,
    prevSlide,
    goToSlide,
    getActiveSlideMaxSteps,
    activeThemeId,
    setTheme,
    toggleSound,
    toggleEditMode,
    params,
  ]);
};
