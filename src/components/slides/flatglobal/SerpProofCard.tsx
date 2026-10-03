import React from 'react';
import type { SerpProofItem } from '../../../types/flatGlobalSuiteTypes';
import { Globe, ShieldCheck, ZoomIn, ExternalLink } from 'lucide-react';

export interface SerpProofCardProps {
  item: SerpProofItem;
  index: number;
  isSelected?: boolean;
  onSelect: (item: SerpProofItem) => void;
}

export const SerpProofCard: React.FC<SerpProofCardProps> = ({
  item,
  index,
  isSelected = false,
  onSelect,
}) => {
  const isRankOne = item.searchRank === 1;

  return (
    <div
      onClick={() => onSelect(item)}
      className={`plane-1-raised rounded-2xl p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between h-[420px] group ${
        isSelected
          ? 'border-indigo-400 bg-slate-900 ring-2 ring-indigo-500/40 shadow-2xl scale-[1.02]'
          : isRankOne
          ? 'border-indigo-500/40 bg-slate-950/80 hover:border-indigo-400'
          : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-mono font-black text-sm flex items-center justify-center shadow-md">
              #{item.searchRank}
            </span>
            <span className="font-mono text-xs text-indigo-300 font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
              {item.verificationBadge}
            </span>
          </div>
          <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
            <ShieldCheck size={13} className="text-emerald-400" /> Live Crawl
          </span>
        </div>

        <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400 mb-2 truncate">
          <Globe size={13} className="text-cyan-400 shrink-0" />
          <span className="truncate">{item.destinationUrl}</span>
        </div>

        <h3 className="font-ubuntu text-xl font-bold text-slate-100 group-hover:text-indigo-300 transition-colors mb-3 leading-snug">
          {item.resultTitle}
        </h3>

        <p className="font-poppins text-xs text-slate-300 leading-relaxed line-clamp-4">
          {item.snippetText}
        </p>
      </div>

      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
        <span className="text-slate-400">Verified Oct 2026 • AI Citation</span>
        <button
          type="button"
          className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
        >
          <ZoomIn size={14} /> Lightbox Preview
        </button>
      </div>
    </div>
  );
};
