import React, { useState } from 'react';
import type { SearchSerpProofLightboxSlideData, SerpProofItem } from '../../../types/flatGlobalSuiteTypes';
import { SerpProofCard } from './SerpProofCard';
import { Search, Sparkles, X, CheckCircle, ExternalLink } from 'lucide-react';

export const SearchSerpProofLightboxSlide: React.FC<{
  slide: SearchSerpProofLightboxSlideData;
}> = ({ slide }) => {
  const [activeItem, setActiveItem] = useState<SerpProofItem | null>(null);
  const proofItems = slide.proofItems || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between"
    >
      <div className="z-10 flex items-center justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="kicker-pill-badge mb-2">{slide.kicker || 'MARKET DOMINANCE VERIFICATION'}</span>
          <h1 className="font-ubuntu text-4xl font-black text-white tracking-tight">
            {slide.title || 'Global Organic Visibility & SERP Authority Proof'}
          </h1>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-slate-300">
          <span className="px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 font-semibold flex items-center gap-1.5">
            <Sparkles size={14} /> AI Overview Citation Active
          </span>
          <span className="text-slate-400">Indexed: {slide.totalResultsIndexed || '4.8M'} ({slide.searchExecutionDurationMs || 180}ms)</span>
        </div>
      </div>

      <div className="z-10 plane-1-raised p-4 rounded-2xl border border-slate-700 bg-slate-950/80 flex items-center gap-4 my-1">
        <Search size={20} className="text-indigo-400 shrink-0" />
        <span className="font-mono text-base text-slate-100 flex-1 truncate">
          {slide.searchQueryPhrase || 'enterprise autonomous presentation engine architecture'}
        </span>
        <span className="text-xs font-mono text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-lg bg-emerald-500/10 flex items-center gap-1">
          <CheckCircle size={14} /> 100% Top-3 Penetration
        </span>
      </div>

      <div className="grid grid-cols-3 gap-6 z-10 my-auto">
        {proofItems.map((item, idx) => (
          <SerpProofCard
            key={item.id || idx}
            item={item}
            index={idx}
            isSelected={activeItem?.id === item.id}
            onSelect={(selected) => setActiveItem(selected)}
          />
        ))}
      </div>

      <div className="z-10 flex items-center justify-between text-xs font-mono text-slate-400 border-t border-slate-800/80 pt-3">
        <span>Engine: {slide.searchEngineName || 'Google Search Enterprise Index'}</span>
        <span>Click any card to trigger high-fidelity lightbox inspection</span>
      </div>

      {activeItem && (
        <div className="absolute inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-16">
          <div className="plane-2-floating bg-slate-950 border border-indigo-500/60 rounded-3xl p-8 max-w-[1000px] w-full shadow-2xl relative">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300"
            >
              <X size={20} />
            </button>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              SERP RANK #{activeItem.searchRank} • {activeItem.verificationBadge}
            </span>
            <h2 className="font-ubuntu text-2xl font-bold text-white mt-4 mb-2">{activeItem.resultTitle}</h2>
            <div className="font-mono text-xs text-indigo-400 mb-4 flex items-center gap-1.5">
              <span>{activeItem.destinationUrl}</span>
              <ExternalLink size={13} />
            </div>
            <p className="font-poppins text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800 mb-4">
              {activeItem.snippetText}
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setActiveItem(null)}
                className="px-6 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-bold"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
