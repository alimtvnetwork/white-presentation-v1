import React from 'react';
import type { CognitiveInversionPillarItem } from '../../../types/flatGlobalSuiteTypes';
import { Sparkles, TrendingUp } from 'lucide-react';

export interface InversionPillarCardProps {
  pillar: CognitiveInversionPillarItem;
  index: number;
}

export const InversionPillarCard: React.FC<InversionPillarCardProps> = ({ pillar, index }) => {
  return (
    <div className="plane-1-raised rounded-2xl p-6 border border-slate-800 bg-slate-950/70 flex flex-col justify-between h-[230px] shadow-lg hover:border-slate-700 transition-colors">
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-xs font-bold text-slate-400">PILLAR 0{index + 1}</span>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-1">
            <TrendingUp size={12} /> {pillar.breakthroughMetric}
          </span>
        </div>
        <p className="font-ubuntu text-xs text-rose-300/80 line-through leading-relaxed mb-2">
          {pillar.conventionalPremise}
        </p>
        <p className="font-ubuntu text-sm font-bold text-slate-100 leading-snug flex items-start gap-1.5">
          <Sparkles size={14} className="text-amber-400 shrink-0 mt-0.5" />
          <span>{pillar.invertedReality}</span>
        </p>
      </div>

      <div className="pt-2 border-t border-slate-800/80 text-[10px] font-mono text-slate-400">
        Empirical Inversion Verified
      </div>
    </div>
  );
};
