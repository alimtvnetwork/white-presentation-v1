import React, { useEffect, useRef, useState } from 'react';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { SlideRenderer } from '../slides/SlideRenderer';
import { SlideTransition } from './SlideTransition';
import { SlideBackground } from './SlideBackground';
import { NavigationControls } from './NavigationControls';
import { SlideIndicator } from './SlideIndicator';
import { SlideCreatorModal } from '../builder/SlideCreatorModal';
import { ExportModal } from '../builder/ExportModal';
import { KeyboardShortcutsModal } from '../navigation/KeyboardShortcutsModal';
import { OverviewGridModal } from '../navigation/OverviewGridModal';
import { useDeckShortcuts } from '../../hooks/useDeckShortcuts';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { applyTheme } from '../../themes/themeRuntime';

const getCameraTransform = (preset: string, scale: number) => {
  if (preset === 'focus-left') return { camScale: scale * 1.35, camOrigin: '22% 40%' };
  if (preset === 'focus-right') return { camScale: scale * 1.35, camOrigin: '78% 40%' };
  if (preset === 'zoom-in') return { camScale: scale * 1.6, camOrigin: '50% 50%' };
  return { camScale: scale, camOrigin: 'center center' };
};

export const PresentationCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);

  const { deck, activeSlideIndex, activeThemeId } = useDeckStore();
  const slideDirection = useDeckStore((state) => state.slideDirection || 1);
  const { isEditMode, cameraPreset } = useEditStore();
  const activeSlide = deck.slides[activeSlideIndex];
  const theme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];

  useEffect(() => { applyTheme(activeThemeId); }, [activeThemeId]);

  useDeckShortcuts({
    onToggleShortcutsModal: () => setIsShortcutsOpen((prev) => !prev),
    onToggleOverviewGrid: () => setIsOverviewOpen((prev) => !prev),
    onCloseModals: () => { setIsShortcutsOpen(false); setIsOverviewOpen(false); },
  });

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const hasFullscreen = Boolean(document.fullscreenElement);
      setIsFullscreen(hasFullscreen);
      const sX = (window.innerWidth - (isEditMode ? 100 : 0)) / 1920;
      const sY = (window.innerHeight - (hasFullscreen ? 0 : 64)) / 1080;
      setScale(Math.min(sX, sY, 1));
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    document.addEventListener('fullscreenchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('fullscreenchange', handleResize);
    };
  }, [isEditMode]);

  const { camScale, camOrigin } = getCameraTransform(cameraPreset, scale);

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${isFullscreen ? 'h-screen' : 'h-[calc(100vh-64px)]'} flex items-center justify-center bg-slate-950 overflow-hidden`}
    >
      <div
        id="presentation-root"
        style={{
          width: 1920,
          height: 1080,
          backgroundColor: theme.canvasBg,
          transform: `scale(${camScale})`,
          transformOrigin: camOrigin,
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="relative shadow-2xl overflow-hidden shrink-0 select-none"
      >
        <SlideBackground />
        {activeSlide && (
          <SlideTransition transitionKey={activeSlide.id} direction={slideDirection} transitionType="slide">
            <SlideRenderer slide={activeSlide} />
          </SlideTransition>
        )}
      </div>
      <SlideIndicator />
      <NavigationControls />
      <SlideCreatorModal />
      <ExportModal />
      <KeyboardShortcutsModal isOpen={isShortcutsOpen} onClose={() => setIsShortcutsOpen(false)} />
      <OverviewGridModal isOpen={isOverviewOpen} onClose={() => setIsOverviewOpen(false)} />
    </div>
  );
};
