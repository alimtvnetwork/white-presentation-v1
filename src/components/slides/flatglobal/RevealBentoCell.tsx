import React from 'react';
import type { FlatBentoTileItem } from '../../../types/flatGlobalSuiteTypes';
import { Sparkles, Lock, ShieldCheck, Activity, Award } from 'lucide-react';

interface RevealBentoCellProps {
  card: FlatBentoTileItem;
  index: number;
  isRevealed: boolean;
  isActive: boolean;
}

export const RevealBentoCell: React.FC<RevealBentoCellProps> = ({
  card,
  index,
  isRevealed,
  isActive,
}) => {
  const spanClass = card.gridSpan === 'col-2' ? 'col-span-2' : 'col-span-1';

  if (!isRevealed) {
    return (
      <div className={`p-6 rounded-2xl border-2 border-dashed border-slate-800/80 bg-slate-950/30 flex flex-col justify-center items-center text-center opacity-40 ${spanClass}`}>
        <Lock size={20} className="text-slate-600 mb-2" />
        <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">
          Pending Step Reveal (0{index + 1})
        </span>
      </div>
    );
  }

  const activeStyles = isActive
    ? 'border-amber-500/80 bg-amber-500/10 shadow-[0_0_24px_rgba(245,158,11,0.25)] ring-1 ring-amber-500/30'
    : 'border-slate-700/60 bg-slate-900/50 hover:border-slate-600';

  return (
    <div className={`plane-1-raised flex flex-col justify-between p-6 rounded-2xl border transition-all duration-300 ${spanClass} ${activeStyles}`}>
      <div>
        <div className="flex items-center justify-between gap-3 mb-3">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 text-amber-900 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1">
            <Sparkles size={10} /> {card.statusBadge || 'VERIFIED'}
          </span>
          {card.highlightMetric && (
            <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20">
              {card.highlightMetric}
            </span>
          )}
        </div>

        <h3 className="font-ubuntu font-bold text-xl text-slate-100 mb-2">{card.tileTitle}</h3>
        <p className="font-poppins text-xs text-slate-300 leading-relaxed">{card.tileDescription}</p>
      </div>

      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between font-mono text-[10px] text-slate-400">
        <span className="flex items-center gap-1 text-emerald-400">
          <ShieldCheck size={11} /> Enterprise Feature
        </span>
        <span>Tile 0{index + 1}</span>
      </div>
    </div>
  );
};
