import React, { useState } from 'react';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { ChevronLeft, ChevronRight, Volume2, VolumeX, Maximize2, LayoutGrid, Palette } from 'lucide-react';
import { DockPosition } from '../../types/presentation';
import { DockPositionPopover } from './DockPositionPopover';
import { ThemePopover } from './ThemePopover';
import { PresenterWebcamButton } from '../webcam/PresenterWebcamButton';

export const NavigationControls: React.FC = () => {
  const {
    activeSlideIndex,
    deck,
    stepAdvance,
    stepRewind,
    isSoundEnabled,
    toggleSound,
    canAdvanceStep,
    canRewindStep,
    activeStep,
    hasIntraSteps,
    getActiveSlideMaxSteps,
  } = useDeckStore();
  const { dockPosition } = useEditStore();
  const [showLayout, setShowLayout] = useState(false);
  const [showTheme, setShowTheme] = useState(false);

  const maxSteps = getActiveSlideMaxSteps();
  const hasMultipleSteps = Boolean(hasIntraSteps && maxSteps > 1);

  const isRewindDisabled = activeSlideIndex === 0 && !canRewindStep;
  const isAdvanceDisabled = activeSlideIndex === deck.slides.length - 1 && !canAdvanceStep;

  const handleFullscreen = () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => {});
    else document.exitFullscreen().catch(() => {});
  };

  const dockClassMap: Record<DockPosition, string> = {
    'top-center': 'top-4 left-1/2 -translate-x-1/2 flex-row',
    'top-right': 'top-4 right-6 flex-row',
    'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2 flex-row',
    'bottom-left': 'bottom-4 left-6 flex-row',
    'bottom-right': 'bottom-4 right-6 flex-row',
    left: 'top-1/2 left-4 -translate-y-1/2 flex-col',
    right: 'top-1/2 right-4 -translate-y-1/2 flex-col',
  };

  return (
    <div
      className={`absolute z-40 flex items-center gap-1.5 bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-700/60 shadow-xl text-xs text-slate-200 opacity-[0.08] hover:opacity-100 transition-all duration-300 ${
        dockClassMap[dockPosition] || dockClassMap['top-right']
      }`}
    >
      {showLayout && <DockPositionPopover onClose={() => setShowLayout(false)} />}
      {showTheme && <ThemePopover onClose={() => setShowTheme(false)} />}

      <button
        onClick={toggleSound}
        className={`p-1 rounded-full transition-colors cursor-pointer ${isSoundEnabled ? 'text-violet-400 hover:bg-slate-800' : 'text-slate-500 hover:bg-slate-800'}`}
        title={isSoundEnabled ? 'Mute Audio [M]' : 'Unmute Audio [M]'}
      >
        {isSoundEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
      </button>

      <PresenterWebcamButton />

      <button
        onClick={() => { setShowTheme(!showTheme); setShowLayout(false); }}
        className={`p-1 rounded-full transition-colors cursor-pointer ${showTheme ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
        title="Theme Selector [T]"
      >
        <Palette size={14} />
      </button>

      <button
        onClick={() => { setShowLayout(!showLayout); setShowTheme(false); }}
        className={`p-1 rounded-full transition-colors cursor-pointer ${showLayout ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
        title="Reposition Controller & HUD [D]"
      >
        <LayoutGrid size={14} />
      </button>

      <div className="w-[1px] h-3.5 bg-slate-700/80 mx-0.5" />

      <button
        onClick={stepRewind}
        disabled={isRewindDisabled}
        className="p-1 rounded-full hover:bg-slate-800 disabled:opacity-30 cursor-pointer transition-colors"
        title="Rewind Step / Previous Slide [←]"
      >
        <ChevronLeft size={16} />
      </button>

      {hasMultipleSteps && (
        <span
          className="px-1.5 py-0.5 rounded bg-violet-950/60 border border-violet-500/30 text-[10px] font-mono text-violet-300 font-semibold"
          title={`Step ${activeStep + 1} of ${maxSteps}`}
        >
          {activeStep + 1}/{maxSteps}
        </span>
      )}

      <button
        onClick={stepAdvance}
        disabled={isAdvanceDisabled}
        className="p-1 rounded-full hover:bg-slate-800 disabled:opacity-30 cursor-pointer transition-colors"
        title="Advance Step / Next Slide [→ / Space]"
      >
        <ChevronRight size={16} />
      </button>

      <button
        onClick={handleFullscreen}
        className="p-1 text-slate-400 hover:text-white cursor-pointer transition-colors"
        title="Toggle Fullscreen [F]"
      >
        <Maximize2 size={14} />
      </button>
    </div>
  );
};
