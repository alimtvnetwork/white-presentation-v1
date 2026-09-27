import React, { useEffect, useRef, useState } from 'react';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { SlideRenderer } from '../slides/SlideRenderer';
import { NavigationControls } from './NavigationControls';
import { SlideIndicator } from './SlideIndicator';

export const PresentationCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  const { deck, activeSlideIndex, nextSlide, prevSlide, setTheme } = useDeckStore();
  const { isEditMode, toggleEditMode } = useEditStore();

  const activeSlide = deck.slides[activeSlideIndex];

  // Responsive scaling to fit window maintaining 16:9 ratio
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // When edit mode is active, reserve 360px on right for builder panel
      const availableWidth = isEditMode ? windowWidth - 360 : windowWidth;
      const availableHeight = windowHeight - 64; // reserve bottom control bar

      const scaleX = availableWidth / 1920;
      const scaleY = availableHeight / 1080;
      const finalScale = Math.min(scaleX, scaleY, 1);

      setScale(finalScale);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isEditMode]);

  // Global Presentation Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing inside an input or textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          prevSlide();
          break;
        case 'b':
        case 'B':
          e.preventDefault();
          toggleEditMode();
          break;
        case '1':
          setTheme('white-brand');
          break;
        case '2':
          setTheme('midnight-luxe');
          break;
        case '3':
          setTheme('emerald-growth');
          break;
        case '4':
          setTheme('wp-exam-blue');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, toggleEditMode, setTheme]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[calc(100vh-64px)] flex items-center justify-center bg-slate-950 overflow-hidden"
    >
      {/* 1920x1080 Scaled Viewport Container */}
      <div
        style={{
          width: 1920,
          height: 1080,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
        }}
        className="relative bg-white shadow-2xl overflow-hidden shrink-0 select-none"
      >
        {activeSlide && <SlideRenderer slide={activeSlide} />}
      </div>

      {/* Floating Canvas UI Controls */}
      <SlideIndicator />
      <NavigationControls />
    </div>
  );
};
