import React from 'react';
import { X, LayoutGrid } from 'lucide-react';
import { useDeckStore } from '../../stores/deckStore';

interface OverviewGridModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OverviewGridModal: React.FC<OverviewGridModalProps> = ({ isOpen, onClose }) => {
  const { deck, activeSlideIndex, goToSlide } = useDeckStore();

  if (!isOpen) {
    return null;
  }

  const handleSelect = (idx: number) => {
    goToSlide(idx);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-6 animate__animated animate__fadeIn">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-2 font-ubuntu font-bold text-white text-base">
            <LayoutGrid size={18} className="text-violet-400" />
            <span>Slide Overview Grid (G)</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
            title="Close (Esc)"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {deck.slides.map((slide, idx) => {
            const isSelected = idx === activeSlideIndex;

            return (
              <div
                key={slide.id}
                onClick={() => handleSelect(idx)}
                className={`p-3 rounded-xl border transition-all cursor-pointer flex flex-col justify-between h-28 group ${
                  isSelected
                    ? 'bg-violet-950/50 border-violet-500 shadow-md shadow-violet-500/20 ring-1 ring-violet-500'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-600 hover:bg-slate-800/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-slate-500 font-bold">
                    #{String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                    {slide.type}
                  </span>
                </div>
                <div className="text-xs font-semibold text-slate-200 line-clamp-2 group-hover:text-violet-300">
                  {slide.title || 'Untitled Slide'}
                </div>
                <div className="text-[10px] text-slate-400 truncate">
                  {slide.subtitle || 'Executive Keynote'}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
