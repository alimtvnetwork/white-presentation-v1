import React from 'react';
import type { TalentFunnelTierItem } from '../../../types/flatGlobalSuiteTypes';
import { Crown, Users, CheckCircle2 } from 'lucide-react';

export interface PyramidTierBandProps {
  tier: TalentFunnelTierItem;
  index: number;
  isActive: boolean;
  onSelect: (index: number) => void;
}

export const PyramidTierBand: React.FC<PyramidTierBandProps> = ({
  tier,
  index,
  isActive,
  onSelect,
}) => {
  const isApex = tier.isApexTier || index === 3 || index === 4;

  return (
    <div
      onClick={() => onSelect(index)}
      className={`plane-1-raised rounded-2xl p-4 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
        isActive
          ? 'border-indigo-400 bg-slate-900 ring-2 ring-indigo-500/40 shadow-xl scale-[1.01]'
          : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-slate-400">
            STAGE 0{tier.tierLevel || index + 1}
          </span>
          <span className="font-ubuntu text-sm font-bold text-slate-100">{tier.tierName}</span>
          {isApex && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
              <Crown size={11} /> APEX SELECTION
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-slate-300 flex items-center gap-1">
            <Users size={12} className="text-cyan-400" /> {tier.candidateVolume}
          </span>
          <span className="px-2 py-0.5 rounded font-mono text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            {tier.passRatePercentage}% PASS
          </span>
        </div>
      </div>
      <p className="font-poppins text-xs text-slate-300 leading-relaxed flex items-center gap-1.5">
        <CheckCircle2 size={13} className="text-indigo-400 shrink-0" />
        <span>{tier.vettingGateSummary}</span>
      </p>
    </div>
  );
};
