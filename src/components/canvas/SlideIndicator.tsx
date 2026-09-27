import React from 'react';
import { useDeckStore } from '../../stores/deckStore';

export const SlideIndicator: React.FC = () => {
  const { deck, activeSlideIndex, goToSlide } = useDeckStore();

  return (
    <div className="absolute bottom-6 left-8 flex items-center gap-2 z-40 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-700/60 shadow-lg text-xs font-mono">
      <span className="text-violet-400 font-bold">
        {String(activeSlideIndex + 1).padStart(2, '0')}
      </span>
      <span className="text-slate-500">/</span>
      <span className="text-slate-400">
        {String(deck.slides.length).padStart(2, '0')}
      </span>

      {/* Progress Dots */}
      <div className="flex items-center gap-1.5 ml-2 border-l border-slate-700 pl-3">
        {deck.slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            title={`Slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
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
