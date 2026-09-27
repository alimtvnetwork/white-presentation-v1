import React from 'react';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { IndicatorPosition } from '../../types/presentation';

export const SlideIndicator: React.FC = () => {
  const { deck, activeSlideIndex, goToSlide } = useDeckStore();
  const { indicatorPosition } = useEditStore();

  const posMap: Record<IndicatorPosition, string> = {
    'bottom-left': 'bottom-6 left-8 flex-row',
    'bottom-center': 'bottom-6 left-1/2 -translate-x-1/2 flex-row',
    'bottom-right': 'bottom-6 right-8 flex-row',
    'top-center': 'top-6 left-1/2 -translate-x-1/2 flex-row',
    'right': 'top-1/2 right-6 -translate-y-1/2 flex-col',
  };

  return (
    <div
      className={`absolute z-40 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-700/60 shadow-lg text-xs font-mono transition-all duration-300 ${
        posMap[indicatorPosition] || posMap['bottom-left']
      }`}
    >
      <span className="text-violet-400 font-bold">
        {String(activeSlideIndex + 1).padStart(2, '0')}
      </span>
      <span className="text-slate-500">/</span>
      <span className="text-slate-400">
        {String(deck.slides.length).padStart(2, '0')}
      </span>

      <div className="flex items-center gap-1.5 ml-2 border-l border-slate-700 pl-3">
        {deck.slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            title={`Slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer ${
              i === activeSlideIndex
                ? 'bg-violet-500 w-5 ring-2 ring-violet-400/40'
                : 'bg-slate-700 hover:bg-slate-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
