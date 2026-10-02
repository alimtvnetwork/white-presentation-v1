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
  const { deck, stepAdvance, stepRewind, goToSlide, activeThemeId, setTheme, toggleSound } = useDeckStore();
  const { toggleEditMode } = useEditStore();

  const cycleTheme = () => {
    const list = Object.keys(THEME_PALETTES);
    setTheme(list[(list.indexOf(activeThemeId) + 1) % list.length]);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey || isFormField(e.target)) return;

      const k = e.key.toLowerCase();
      if (['arrowright', ' ', 'enter', 'pagedown'].includes(k)) {
        e.preventDefault();
        stepAdvance();
      } else if (['arrowleft', 'backspace', 'pageup'].includes(k)) {
        e.preventDefault();
        stepRewind();
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
      } else if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(k)) {
        const index = k === '0' ? 9 : Number(k) - 1;
        const theme = Object.keys(THEME_PALETTES)[index];
        if (theme) {
          e.preventDefault();
          setTheme(theme);
        }
      }
    };

    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
    };
  }, [deck.slides.length, stepAdvance, stepRewind, goToSlide, activeThemeId, setTheme, toggleSound, toggleEditMode, params]);
};
