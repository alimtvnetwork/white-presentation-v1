import React, { useState } from 'react';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { ChevronLeft, ChevronRight, Volume2, VolumeX, Maximize2, LayoutGrid } from 'lucide-react';
import { DockPosition } from '../../types/presentation';
import { DockPositionPopover } from './DockPositionPopover';
import { PresenterWebcamButton } from '../webcam/PresenterWebcamButton';

export const NavigationControls: React.FC = () => {
  const { activeSlideIndex, deck, nextSlide, prevSlide, isSoundEnabled, toggleSound } = useDeckStore();
  const { dockPosition } = useEditStore();
  const [showLayout, setShowLayout] = useState(false);

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const dockClassMap: Record<DockPosition, string> = {
    'top-center': 'top-6 left-1/2 -translate-x-1/2 flex-row',
    'top-right': 'top-6 right-8 flex-row',
    'bottom-center': 'bottom-6 left-1/2 -translate-x-1/2 flex-row',
    'bottom-left': 'bottom-6 left-8 flex-row',
    'bottom-right': 'bottom-6 right-8 flex-row',
    left: 'top-1/2 left-6 -translate-y-1/2 flex-col',
    right: 'top-1/2 right-6 -translate-y-1/2 flex-col',
  };

  return (
    <div
      className={`absolute z-40 flex items-center gap-2.5 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-full border border-slate-700/80 shadow-2xl text-sm text-slate-200 transition-all duration-300 ${
        dockClassMap[dockPosition] || dockClassMap['bottom-center']
      }`}
    >
      {showLayout && <DockPositionPopover onClose={() => setShowLayout(false)} />}

      <button
        onClick={toggleSound}
        className={`p-1.5 rounded-full transition-colors cursor-pointer ${
          isSoundEnabled ? 'text-violet-400 hover:bg-slate-800' : 'text-slate-500 hover:bg-slate-800'
        }`}
        title={isSoundEnabled ? 'Mute' : 'Unmute'}
      >
        {isSoundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
      </button>

      <PresenterWebcamButton />

      <button
        onClick={() => setShowLayout(!showLayout)}
        className={`p-1.5 rounded-full transition-colors cursor-pointer ${
          showLayout ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'
        }`}
        title="Choose Controller & Slide Number Position"
      >
        <LayoutGrid size={15} />
      </button>

      <div className="w-[1px] h-4 bg-slate-700 mx-0.5" />

      <button
        onClick={prevSlide}
        disabled={activeSlideIndex === 0}
        className="p-1 rounded-full hover:bg-slate-800 disabled:opacity-30 cursor-pointer transition-colors"
        title="Prev"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        onClick={nextSlide}
        disabled={activeSlideIndex === deck.slides.length - 1}
        className="p-1 rounded-full hover:bg-slate-800 disabled:opacity-30 cursor-pointer transition-colors"
        title="Next"
      >
        <ChevronRight size={18} />
      </button>

      <button
        onClick={handleFullscreen}
        className="p-1 text-slate-400 hover:text-white cursor-pointer transition-colors"
        title="Fullscreen"
      >
        <Maximize2 size={15} />
      </button>
    </div>
  );
};
