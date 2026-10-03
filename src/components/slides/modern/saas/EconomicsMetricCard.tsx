import React from 'react';
import type { EconomicPillar } from '../../../../types/modern/saasFinancialTypes';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';

interface EconomicsMetricCardProps {
  pillar: EconomicPillar;
  isCurrentStep: boolean;
  onClick?: () => void;
}

export const EconomicsMetricCard: React.FC<EconomicsMetricCardProps> = ({
  pillar,
  isCurrentStep,
  onClick,
}) => (
  <div
    onClick={onClick}
    className={`p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 cursor-pointer border ${
      isCurrentStep
        ? 'plane-2-elevated border-emerald-500/60 shadow-lg shadow-emerald-500/10 ring-2 ring-emerald-500/20'
        : 'plane-1-raised border-slate-700/50 hover:border-slate-600'
    }`}
  >
    <div>
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-800 text-slate-300">
          Pillar {pillar.stepIndex}
        </span>
        <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 flex items-center gap-1">
          <ArrowUpRight size={12} />
          {pillar.efficiencyVerdict}
        </span>
      </div>

      <h3 className="text-lg font-ubuntu font-bold text-slate-100 mb-4">{pillar.pillarTitle}</h3>

      <div className="mb-4">
        <div className="text-3xl font-ubuntu font-black text-emerald-400 tracking-tight">
          {pillar.primaryMetricValue}
        </div>
        <div className="text-xs uppercase text-slate-400 font-mono tracking-wider font-semibold mt-0.5">
          {pillar.primaryMetricLabel}
        </div>
      </div>

      <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-4">
        <div className="text-sm font-ubuntu font-bold text-slate-200">{pillar.secondaryMetricValue}</div>
        <div className="text-xs text-slate-400 font-mono">{pillar.secondaryMetricLabel}</div>
      </div>
    </div>

    <div>
      <div className="text-xs uppercase text-slate-400 font-mono font-bold tracking-wider mb-2">Key Drivers</div>
      <div className="space-y-1.5">
        {pillar.detailedDrivers.map((driver, idx) => (
          <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
            <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
            <span>{driver}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);
