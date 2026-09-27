import { useEffect } from 'react';
import { useWebcamStore } from '../stores/webcamStore';

const isFormField = (target: EventTarget | null): boolean => {
  const el = target as HTMLElement | null;
  if (!el) {
    return false;
  }

  const tag = el.tagName;
  const isInputOrTextArea = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';

  return isInputOrTextArea || Boolean(el.isContentEditable);
};

export const useWebcamHotkeys = (): void => {
  const { phase, toggle, toggleShape, toggleExpand, toggleMinimize, growSize, shrinkSize } =
    useWebcamStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey || isFormField(e.target)) {
        return;
      }

      const key = e.key;

      if (key === 'i' || key === 'I') {
        e.preventDefault();
        void toggle();

        return;
      }

      if (key === 'o' || key === 'O') {
        e.preventDefault();
        toggleShape();

        return;
      }

      if (key === 'e' || key === 'E') {
        e.preventDefault();
        toggleExpand();

        return;
      }

      if (key === 'm' || key === 'M') {
        e.preventDefault();
        toggleMinimize();

        return;
      }

      if (key === '+' || key === '=') {
        e.preventDefault();
        growSize();

        return;
      }

      if (key === '-' || key === '_') {
        e.preventDefault();
        shrinkSize();

        return;
      }

      if (key === 'Escape' && phase === 'fullscreen') {
        e.preventDefault();
        toggleExpand();

        return;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [phase, toggle, toggleShape, toggleExpand, toggleMinimize, growSize, shrinkSize]);
};
