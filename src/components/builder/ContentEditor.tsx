import React from 'react';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { PlusCircle } from 'lucide-react';

export const ContentEditor: React.FC = () => {
  const { deck, activeSlideIndex, applyEdit } = useDeckStore();
  const { selectedElementId } = useEditStore();
  const slide = deck.slides[activeSlideIndex];
  if (!slide) return null;

  const titleVal = slide.type === 'white-master' ? slide.headline : slide.title;

  return (
    <div className="flex flex-col gap-5 slide-up-anim">
      <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
        Slide Content ({slide.type})
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-slate-300">Headline / Title</label>
        <textarea
          rows={2}
          value={titleVal}
          onChange={(e) => {
            const v = e.target.value;
            applyEdit((s) => (s.type === 'white-master' ? { ...s, headline: v, title: v } : { ...s, title: v }));
          }}
          className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-100 focus:outline-none focus:border-violet-500"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-slate-300">Subtitle</label>
        <textarea
          rows={3}
          value={slide.subtitle || ''}
          onChange={(e) => {
            const v = e.target.value;
            applyEdit((s) => ({ ...s, subtitle: v }));
          }}
          className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-100 focus:outline-none focus:border-violet-500"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-slate-300">Kicker Pill</label>
        <input
          type="text"
          value={slide.kicker || ''}
          onChange={(e) => {
            const v = e.target.value;
            applyEdit((s) => ({ ...s, kicker: v }));
          }}
          className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-100 focus:outline-none focus:border-violet-500"
        />
      </div>

      {slide.type === 'white-master' && (
        <div className="flex flex-col gap-2 pt-2 border-t border-slate-800">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Bullet Points ({slide.bulletPoints.length})</span>
            <button
              onClick={() => {
                applyEdit((s) => {
                  if (s.type !== 'white-master') return s;
                  const newBp = {
                    id: `bp-${Date.now()}`,
                    icon: 'heart',
                    title: 'New Key Point',
                    description: 'Directly edited and built via interactive Builder Mode.',
                  };

                  return { ...s, bulletPoints: [...s.bulletPoints, newBp] };
                });
              }}
              className="flex items-center gap-1 text-[11px] text-violet-400 hover:text-violet-300 cursor-pointer"
            >
              <PlusCircle size={13} />
              <span>Add Point</span>
            </button>
          </div>
        </div>
      )}

      {selectedElementId && (
        <div className="p-2.5 bg-violet-950/40 border border-violet-800/60 rounded-lg text-xs text-violet-300">
          Selected Node: <span className="font-mono font-bold">{selectedElementId}</span>
        </div>
      )}
    </div>
  );
};
