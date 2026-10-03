import React from 'react';
import { ShieldCheck, ChevronRight } from 'lucide-react';
import type { BattlecardPillarItem } from '../../../types/globalPptArchetypes';

interface BattlecardPillarSelectorProps {
  pillars: BattlecardPillarItem[];
  activeStep: number;
}

export const BattlecardPillarSelector: React.FC<BattlecardPillarSelectorProps> = ({
  pillars,
  activeStep,
}) => (
  <div className="space-y-3">
    {pillars.map((pillar, idx) => {
      const isActive = idx === activeStep;
      const isCompleted = idx < activeStep;

      const style = isActive
        ? 'plane-2-elevated border-indigo-500/80 bg-slate-900/90 ring-2 ring-indigo-500/30 opacity-100 shadow-xl'
        : isCompleted
        ? 'plane-1-raised border-slate-700/80 bg-slate-900/60 opacity-80'
        : 'plane-1-raised border-slate-800/60 bg-slate-950/40 opacity-45';

      return (
        <div
          key={pillar.id || idx}
          className={`p-3.5 rounded-xl border flex flex-col gap-2 transition-all duration-300 ${style}`}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 font-bold border border-indigo-500/20">
              Pillar {idx + 1}
            </span>
            <div className="flex items-center gap-1.5 font-mono text-xs">
              <span className="text-slate-400">Moat Score:</span>
              <span className="text-emerald-400 font-bold">{pillar.ourAdvantageScore}%</span>
            </div>
          </div>

          <h2 className="font-ubuntu text-sm font-bold text-white leading-snug">
            {pillar.pillarTitle}
          </h2>

          <p className="text-xs text-slate-400 font-poppins leading-relaxed line-clamp-2">
            {pillar.strategicMoatDescription}
          </p>

          {isActive && (
            <div className="flex items-center gap-1 text-[11px] font-mono text-indigo-400 font-semibold pt-1 border-t border-slate-800">
              <ShieldCheck size={12} />
              <span>Active Deep Dive View</span>
              <ChevronRight size={12} className="ml-auto" />
            </div>
          )}
        </div>
      );
    })}
  </div>
);
