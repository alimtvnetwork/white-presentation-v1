import React from 'react';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import {
  ChevronLeft,
  ChevronRight,
  Edit3,
  Volume2,
  VolumeX,
  Palette,
  Maximize2,
} from 'lucide-react';

export const NavigationControls: React.FC = () => {
  const {
    activeSlideIndex,
    deck,
    nextSlide,
    prevSlide,
    isSoundEnabled,
    toggleSound,
  } = useDeckStore();
  const { isEditMode, toggleEditMode, setActivePanel, activePanel } = useEditStore();

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  return (
    <div className="absolute bottom-6 right-8 flex items-center gap-3 z-40 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-700/60 shadow-lg text-sm text-slate-200">
      {/* Sound Toggle */}
      <button
        onClick={toggleSound}
        className={`p-2 rounded-full transition-colors ${
          isSoundEnabled ? 'text-violet-400 hover:bg-slate-800' : 'text-slate-500 hover:bg-slate-800'
        }`}
        title={isSoundEnabled ? 'Mute Audio Cues' : 'Enable Audio Cues'}
      >
        {isSoundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
      </button>

      {/* Builder Mode Toggle */}
      <button
        onClick={toggleEditMode}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-medium transition-colors ${
          isEditMode
            ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
            : 'text-slate-300 hover:bg-slate-800'
        }`}
        title="Toggle Visual Builder Mode (B)"
      >
        <Edit3 size={15} />
        <span>Builder</span>
      </button>

      {isEditMode && (
        <button
          onClick={() => setActivePanel(activePanel === 'gradient' ? 'typography' : 'gradient')}
          className="p-2 rounded-full text-slate-300 hover:bg-slate-800 transition-colors"
          title="Theme Palette"
        >
          <Palette size={18} />
        </button>
      )}

      <div className="w-[1px] h-5 bg-slate-700 mx-1" />

      {/* Previous Slide */}
      <button
        onClick={prevSlide}
        disabled={activeSlideIndex === 0}
        className="p-1.5 rounded-full hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
        title="Previous Slide (Left Arrow)"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Next Slide */}
      <button
        onClick={nextSlide}
        disabled={activeSlideIndex === deck.slides.length - 1}
        className="p-1.5 rounded-full hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
        title="Next Slide (Right Arrow / Space)"
      >
        <ChevronRight size={20} />
      </button>

      {/* Fullscreen */}
      <button
        onClick={handleFullscreen}
        className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        title="Toggle Fullscreen"
      >
        <Maximize2 size={16} />
      </button>
    </div>
  );
};
