import React from 'react';
import { SearchSerpProofSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { Search, Trophy, CheckCircle2, TrendingUp } from 'lucide-react';

export const SearchSerpProofSlide: React.FC<{ slide: SearchSerpProofSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const searchQueries = slide.searchQueries || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="relative w-[1920px] h-[1080px] overflow-hidden select-none p-[80px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-amber-500/10 text-amber-400 border border-amber-500/30">
            {slide.kicker || 'VERIFIABLE ORGANIC PROOF'}
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">• Google SERP Dominance</span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[48px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Live Search Engine Dominance & Organic Authority'}
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-8 my-auto z-10">
        {searchQueries.map((queryItem, idx) => {
          const isVerified = Boolean(queryItem.isVerified);
          return (
            <div
              key={idx}
              style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
              className="p-8 rounded-3xl border shadow-xl flex flex-col justify-between relative transition-all duration-300 hover:scale-[1.02]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
                    <Trophy size={13} /> {queryItem.rank}
                  </span>
                  <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs font-semibold">
                    {queryItem.searchVolume}
                  </span>
                </div>

                <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/60 border border-slate-700/40 mb-5">
                  <Search size={15} className="text-amber-400 shrink-0" />
                  <span className="font-ubuntu text-sm font-bold text-white truncate">{queryItem.query}</span>
                </div>

                <div className="space-y-1.5 p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                  <div className="text-[11px] font-mono text-emerald-400 truncate">https://example.com/case-studies</div>
                  <div className="text-xs font-poppins text-slate-200 line-clamp-3 leading-relaxed">{queryItem.urlSnippet}</div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/20 flex items-center justify-between font-mono text-xs">
                <span className="text-slate-400">Position Integrity</span>
                {isVerified && (
                  <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <CheckCircle2 size={13} /> VERIFIED LIVE
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between z-10 pt-4 border-t border-slate-700/30 font-mono text-xs" style={{ color: 'var(--pres-text-muted)' }}>
        <span className="flex items-center gap-2 text-amber-400 font-bold">
          <TrendingUp size={14} /> {slide.aggregateGrowth || '+420% Organic Search Authority & High-Intent Pipeline'}
        </span>
        <span className="opacity-70">Deterministic Organic Proof Architecture</span>
      </div>
    </div>
  );
};
