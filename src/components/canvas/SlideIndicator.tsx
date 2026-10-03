import React, { useState } from 'react';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { IndicatorPosition } from '../../types/presentation';

export const SlideIndicator: React.FC = () => {
  const { deck, activeSlideIndex, goToSlide } = useDeckStore();
  const { indicatorPosition, setIndicatorPosition, dockPosition } = useEditStore();
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);

  const cyclePosition = () => {
    const seq: IndicatorPosition[] = ['bottom-center', 'bottom-left', 'bottom-right', 'top-center'];
    const nextPos = seq[(seq.indexOf(indicatorPosition) + 1) % seq.length];
    setIndicatorPosition(nextPos);
  };

  const isStacked =
    (indicatorPosition === 'bottom-center' && dockPosition === 'bottom-center') ||
    (indicatorPosition === 'bottom-left' && dockPosition === 'bottom-left') ||
    (indicatorPosition === 'bottom-right' && dockPosition === 'bottom-right');

  const posMap: Record<IndicatorPosition, string> = {
    'bottom-left': isStacked ? 'bottom-16 left-6 flex-row' : 'bottom-4 left-6 flex-row',
    'bottom-center': isStacked ? 'bottom-16 left-1/2 -translate-x-1/2 flex-row' : 'bottom-4 left-1/2 -translate-x-1/2 flex-row',
    'bottom-right': isStacked ? 'bottom-16 right-6 flex-row' : 'bottom-4 right-6 flex-row',
    'top-center': 'top-4 left-1/2 -translate-x-1/2 flex-row',
    left: 'top-1/2 left-4 -translate-y-1/2 flex-col',
    right: 'top-1/2 right-4 -translate-y-1/2 flex-col',
  };

  const hoveredSlide = hoveredDot !== null ? deck.slides[hoveredDot] : null;

  return (
    <div
      className={`absolute z-40 flex items-center gap-1.5 bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-full border border-slate-700/60 shadow-lg text-[11px] font-mono opacity-[0.08] hover:opacity-100 transition-all duration-300 group ${
        posMap[indicatorPosition] || posMap['bottom-center']
      }`}
    >
      {hoveredDot !== null && (
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 pointer-events-none whitespace-nowrap z-50 rounded-full border border-violet-500/40 bg-slate-950/95 px-3 py-1 text-xs text-white shadow-xl backdrop-blur-md animate__animated animate__fadeIn">
          <span className="text-violet-400 font-bold font-mono mr-1.5">{hoveredDot + 1}.</span>
          <span className="font-poppins">{hoveredSlide?.title || `Slide ${hoveredDot + 1}`}</span>
        </div>
      )}

      <button
        onClick={cyclePosition}
        title="Click to reposition pagination (Center / Left / Right)"
        className="flex items-center gap-0.5 hover:text-white transition-colors cursor-pointer px-1 py-0.5"
      >
        <span className="text-violet-400 font-bold">{String(activeSlideIndex + 1).padStart(2, '0')}</span>
        <span className="text-slate-600">/</span>
        <span className="text-slate-400">{String(deck.slides.length).padStart(2, '0')}</span>
      </button>

      <div className="flex items-center gap-1 ml-1 border-l border-slate-700/80 pl-2 max-w-[420px] overflow-x-auto no-scrollbar py-0.5">
        {deck.slides.map((s, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            onMouseEnter={() => setHoveredDot(i)}
            onMouseLeave={() => setHoveredDot(null)}
            title={`${i + 1}. ${s.title || `Slide ${i + 1}`}`}
            className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
              i === activeSlideIndex
                ? 'bg-violet-500 w-4 ring-2 ring-violet-400/40'
                : 'bg-slate-700 hover:bg-slate-400 w-1.5'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
