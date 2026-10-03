import React from 'react';
import { Layers, ChevronRight, Check } from 'lucide-react';
import type { OkrCascadeTierItem } from '../../../types/globalPptArchetypes';
import { OkrKeyResultCard } from './OkrKeyResultCard';
import { isBooleanTrue } from '../../../utils/booleanGuards';

interface OkrTierCardProps {
  tier: OkrCascadeTierItem;
  isActiveTier: boolean;
  isCompletedTier: boolean;
}

export const OkrTierCard: React.FC<OkrTierCardProps> = ({
  tier,
  isActiveTier,
  isCompletedTier,
}) => {
  const isCompleted = isBooleanTrue(tier.isCompleted || isCompletedTier);
  const keyResults = tier.keyResults || [];

  const containerStyle = isActiveTier
    ? 'plane-2-elevated border-cyan-500/80 bg-slate-900/90 ring-2 ring-cyan-500/30 shadow-xl opacity-100'
    : isCompleted
    ? 'plane-1-raised border-slate-700/80 bg-slate-900/60 opacity-80'
    : 'plane-1-raised border-slate-800/60 bg-slate-950/40 opacity-45';

  return (
    <div className={`p-4 rounded-xl border flex flex-col justify-between transition-all duration-300 ${containerStyle}`}>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 font-bold border border-cyan-500/30 flex items-center gap-1">
              <Layers size={11} /> Tier {tier.tierLevel}
            </span>
            <span className="font-ubuntu font-bold text-sm text-white">
              {tier.tierName}
            </span>
          </div>
          {isCompleted && (
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-mono flex items-center gap-1">
              <Check size={11} /> ACHIEVED
            </span>
          )}
        </div>

        <p className="text-xs text-slate-400 font-poppins">
          {tier.tierDescription}
        </p>

        <div className="p-2.5 rounded bg-slate-950/70 border border-slate-800/90 text-xs">
          <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block mb-0.5">
            Strategic Objective:
          </span>
          <p className="text-slate-200 font-ubuntu font-semibold leading-snug">
            {tier.strategicObjective}
          </p>
        </div>

        <div className="space-y-2 mt-1">
          {keyResults.map((kr) => (
            <OkrKeyResultCard key={kr.id} keyResult={kr} />
          ))}
        </div>
      </div>
    </div>
  );
};
