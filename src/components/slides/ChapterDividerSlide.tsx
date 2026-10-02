import React from 'react';
import type { ChapterDividerSlideData } from '../../types/expandedArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { Layers, Bookmark } from 'lucide-react';

export const ChapterDividerSlide: React.FC<{ slide: ChapterDividerSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const topics = slide.topics || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[80px_120px] flex flex-col justify-between"
    >
      <div className="absolute right-[80px] top-[100px] text-[380px] font-ubuntu font-black leading-none select-none pointer-events-none opacity-[0.04] text-slate-100">
        {slide.actNumber || '03'}
      </div>

      <div className="z-10 mt-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-violet-500/10 text-violet-400 border border-violet-500/30 mb-4">
          <Bookmark size={12} /> {slide.actLabel || 'ACT 03'} {slide.kicker ? `// ${slide.kicker}` : ''}
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[64px] font-black italic tracking-tight leading-tight max-w-[1400px] mb-4"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'The Sovereign Capability Engine'}
        </h1>
        <div className="w-[180px] h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 mb-6" />
        <p className="font-poppins text-xl max-w-[1200px] leading-relaxed text-slate-300">
          {slide.preamble}
        </p>
      </div>

      <div className="z-10 mb-4">
        {Boolean(slide.topicKicker) && (
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-violet-400 mb-3 flex items-center gap-1.5">
            <Layers size={14} /> {slide.topicKicker}
          </div>
        )}
        <div className="grid grid-cols-3 gap-6">
          {topics.map((t, idx) => {
            const isPrimary = Boolean(t.isPrimaryFocus);
            return (
              <div
                key={t.id || idx}
                className={`plane-2-elevated p-6 rounded-2xl border transition-all ${isPrimary ? 'border-violet-500/50 bg-violet-500/10 shadow-lg' : 'bg-slate-900/40 border-slate-800'}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-sm font-bold text-violet-400">{t.indexStr}</span>
                  {isPrimary && (
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
                      Core Focus
                    </span>
                  )}
                </div>
                <h3 className="font-ubuntu text-lg font-bold mb-2 text-slate-100">{t.title}</h3>
                <p className="font-poppins text-xs leading-relaxed text-slate-400">{t.summary}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between z-10 pt-4 border-t border-slate-800 font-mono text-xs text-slate-400">
        <span className="font-bold text-violet-400">Chapter Transition Anchor</span>
        <span>Deterministic Act Navigation</span>
      </div>
    </div>
  );
};
