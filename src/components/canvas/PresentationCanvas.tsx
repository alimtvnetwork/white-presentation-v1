import React, { useEffect, useRef, useState } from 'react';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { SlideRenderer } from '../slides/SlideRenderer';
import { NavigationControls } from './NavigationControls';
import { SlideIndicator } from './SlideIndicator';
import { SlideCreatorModal } from '../builder/SlideCreatorModal';
import { ExportModal } from '../builder/ExportModal';

export const PresentationCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const { deck, activeSlideIndex, nextSlide, prevSlide } = useDeckStore();
  const { isEditMode, toggleEditMode, cameraPreset } = useEditStore();
  const activeSlide = deck.slides[activeSlideIndex];

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const sX = (window.innerWidth - (isEditMode ? 100 : 0)) / 1920;
      const sY = (window.innerHeight - 64) / 1080;
      setScale(Math.min(sX, sY, 1));
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isEditMode]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); nextSlide(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); prevSlide(); }
      if (e.key === 'b' || e.key === 'B') { e.preventDefault(); toggleEditMode(); }
    };
    window.addEventListener('keydown', onKey);

    return () => window.removeEventListener('keydown', onKey);
  }, [nextSlide, prevSlide, toggleEditMode]);

  let camScale = scale;
  let camOrigin = 'center center';
  if (cameraPreset === 'focus-left') { camScale = scale * 1.35; camOrigin = '22% 40%'; }
  if (cameraPreset === 'focus-right') { camScale = scale * 1.35; camOrigin = '78% 40%'; }
  if (cameraPreset === 'zoom-in') { camScale = scale * 1.6; camOrigin = '50% 50%'; }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[calc(100vh-64px)] flex items-center justify-center bg-slate-950 overflow-hidden"
    >
      <div
        style={{
          width: 1920,
          height: 1080,
          transform: `scale(${camScale})`,
          transformOrigin: camOrigin,
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="relative bg-white shadow-2xl overflow-hidden shrink-0 select-none"
      >
        {activeSlide && <SlideRenderer slide={activeSlide} />}
      </div>
      <SlideIndicator />
      <NavigationControls />
      <SlideCreatorModal />
      <ExportModal />
    </div>
  );
};
