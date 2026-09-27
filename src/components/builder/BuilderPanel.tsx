import React from 'react';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { ColorPalettePicker } from './ColorPalettePicker';
import { X, Layers, Type, Sparkles } from 'lucide-react';

export const BuilderPanel: React.FC = () => {
  const { deck, activeSlideIndex, applyEdit } = useDeckStore();
  const { isEditMode, toggleEditMode, selectedElementId, activePanel, setActivePanel } = useEditStore();

  if (!isEditMode) return null;

  const currentSlide = deck.slides[activeSlideIndex];

  return (
    <div className="fixed top-0 right-0 w-[360px] h-[calc(100vh-64px)] bg-slate-900 border-l border-slate-800 flex flex-col z-50 shadow-2xl">
      {/* Panel Header */}
      <div className="p-4 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers size={18} className="text-violet-400" />
          <span className="font-ubuntu font-bold text-sm text-slate-100">
            Slide Builder Inspector
          </span>
        </div>
        <button
          onClick={toggleEditMode}
          className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800"
          title="Close Builder Mode (B)"
        >
          <X size={16} />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-800 bg-slate-950/40 text-xs font-medium">
        <button
          onClick={() => setActivePanel('typography')}
          className={`flex-1 py-2.5 flex items-center justify-center gap-1.5 border-b-2 transition-colors ${
            activePanel === 'typography'
              ? 'border-violet-500 text-violet-400 bg-slate-900'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Type size={14} />
          <span>Content</span>
        </button>
        <button
          onClick={() => setActivePanel('gradient')}
          className={`flex-1 py-2.5 flex items-center justify-center gap-1.5 border-b-2 transition-colors ${
            activePanel === 'gradient'
              ? 'border-violet-500 text-violet-400 bg-slate-900'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Sparkles size={14} />
          <span>Themes</span>
        </button>
      </div>

      {/* Panel Body */}
      <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-6">
        {activePanel === 'gradient' ? (
          <ColorPalettePicker />
        ) : (
          <div className="flex flex-col gap-5">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Live Content Fields ({currentSlide.type})
            </div>

            {/* Title / Headline Input */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-slate-300">Headline / Title</label>
              <textarea
                rows={2}
                value={
                  currentSlide.type === 'white-master'
                    ? currentSlide.headline
                    : currentSlide.title
                }
                onChange={(e) => {
                  const val = e.target.value;
                  applyEdit((slide) => {
                    if (slide.type === 'white-master') {
                      return { ...slide, headline: val, title: val };
                    }
                    return { ...slide, title: val };
                  });
                }}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-100 focus:outline-none focus:border-violet-500"
              />
            </div>

            {/* Subtitle Input */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-slate-300">Subtitle</label>
              <textarea
                rows={3}
                value={currentSlide.subtitle || ''}
                onChange={(e) => {
                  const val = e.target.value;
                  applyEdit((slide) => ({ ...slide, subtitle: val }));
                }}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-100 focus:outline-none focus:border-violet-500"
              />
            </div>

            {/* Kicker Input */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-slate-300">Kicker Pill</label>
              <input
                type="text"
                value={currentSlide.kicker || ''}
                onChange={(e) => {
                  const val = e.target.value;
                  applyEdit((slide) => ({ ...slide, kicker: val }));
                }}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-100 focus:outline-none focus:border-violet-500"
              />
            </div>

            {selectedElementId && (
              <div className="p-3 bg-violet-950/40 border border-violet-800/60 rounded-lg text-xs text-violet-300">
                Active Selection: <span className="font-mono font-bold">{selectedElementId}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div className="p-3 border-t border-slate-800 text-[11px] font-mono text-slate-500 text-center">
        Decoupled Mutator: `applyEdit()` active
      </div>
    </div>
  );
};
