import React from 'react';
import type { MoatPillarItem } from '../../../types/extendedArchetypes';
import { getStepPhase, getStepPhaseStyle } from '../../../utils/stepProgression';
import { isBooleanTrue } from '../../../utils/booleanGuards';
import { Shield, Sparkles, CheckCircle2 } from 'lucide-react';

interface MoatPillarCardProps {
  pillar: MoatPillarItem;
  index: number;
  currentStep: number;
  accentColor?: string;
}

export const MoatPillarCard: React.FC<MoatPillarCardProps> = ({
  pillar,
  index,
  currentStep,
  accentColor = '#8b5cf6',
}) => {
  const phase = getStepPhase(index, currentStep);
  const phaseStyle = getStepPhaseStyle(phase, accentColor);
  const isDominant = isBooleanTrue(pillar.isDominantAdvantage);
  const isPast = phase === 'past';
  const isActive = phase === 'active';

  return (
    <div
      style={phaseStyle}
      className={`rounded-2xl border p-5 flex flex-col justify-between transition-all duration-300 ${
        isActive ? 'bg-slate-900/90 border-violet-500/60 plane-2-elevated' : 'bg-slate-900/40 border-slate-800 plane-1-raised'
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-violet-500/15 text-violet-300 border border-violet-500/30">
            {pillar.category}
          </span>
          {isDominant && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/40 flex items-center gap-1">
              <Sparkles size={10} /> Dominant
            </span>
          )}
          {isPast && (
            <span className="text-emerald-400 flex items-center gap-1 text-[10px] font-mono">
              <CheckCircle2 size={12} /> Verified
            </span>
          )}
        </div>

        <h3 className="font-ubuntu text-lg font-bold text-white mb-2 leading-snug">{pillar.pillarTitle}</h3>
        <p className="text-xs text-slate-300 font-poppins leading-relaxed mb-4 line-clamp-3">{pillar.coreMechanism}</p>

        <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-slate-950/50 border border-slate-800/80 mb-3 font-mono text-xs">
          <div>
            <div className="text-[10px] text-slate-400 uppercase">Barrier Score</div>
            <div className="text-sm font-bold text-violet-300 mt-0.5">{pillar.barrierScore10} / 10</div>
          </div>
          <div>
            <div className="text-[10px] text-slate-400 uppercase">Replication</div>
            <div className="text-sm font-bold text-cyan-300 mt-0.5">{pillar.timeToReplicateYears} Years</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {(pillar.keyAssets || []).map((asset, aIdx) => (
            <span key={aIdx} className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-800/60 text-slate-300 border border-slate-700/50">
              {asset}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
        <span>Pillar 0{index + 1}</span>
        {isActive && <span className="text-violet-400 font-semibold flex items-center gap-1"><Shield size={12} /> Insurmountable</span>}
      </div>
    </div>
  );
};
