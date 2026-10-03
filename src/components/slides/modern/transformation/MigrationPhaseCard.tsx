import React from 'react';
import { Layers, Clock, ShieldAlert, Check } from 'lucide-react';
import type { MigrationFunnelPhase } from '../../../../types/modern/transformationTypes';

interface MigrationPhaseCardProps {
  phase: MigrationFunnelPhase;
  index: number;
  currentStep: number;
  onHover: (idx: number | null) => void;
}

export const MigrationPhaseCard: React.FC<MigrationPhaseCardProps> = ({
  phase,
  index,
  currentStep,
  onHover,
}) => {
  const isCurrent = index === currentStep;
  const isPast = index < currentStep;

  const cardOpacity = isCurrent ? 'opacity-100' : isPast ? 'opacity-75' : 'opacity-35';
  const cardBorder = isCurrent ? 'border-sky-500 shadow-[0_0_24px_rgba(56,189,248,0.25)]' : 'border-slate-700/60';
  const riskColor = phase.riskTier === 'LOW' ? 'text-emerald-400 bg-emerald-500/10' : phase.riskTier === 'MEDIUM' ? 'text-amber-400 bg-amber-500/10' : 'text-rose-400 bg-rose-500/10';

  return (
    <div
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className={`plane-1-raised rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between ${cardOpacity} ${cardBorder}`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-sky-500/15 text-sky-400 font-bold border border-sky-500/30">
            PHASE 0{index + 1}
          </span>
          <span className={`font-mono text-xs px-2.5 py-0.5 rounded-full font-bold ${riskColor}`}>
            {phase.riskTier} RISK
          </span>
        </div>

        <h3 style={{ color: 'var(--pres-text)' }} className="text-xl font-bold font-ubuntu mb-2">
          {phase.phaseName}
        </h3>

        <div className="space-y-2 text-sm font-mono mb-4">
          <div className="flex items-center justify-between text-slate-400">
            <span className="flex items-center gap-1.5"><Layers size={14} className="text-sky-400" /> Workloads</span>
            <span className="text-slate-200 font-bold">{phase.workloadCount} {phase.workloadType}</span>
          </div>
          <div className="flex items-center justify-between text-slate-400">
            <span className="flex items-center gap-1.5"><Clock size={14} className="text-amber-400" /> Duration</span>
            <span className="text-slate-200 font-bold">{phase.durationWeeks} Weeks</span>
          </div>
          <div className="flex items-center justify-between text-slate-400">
            <span className="flex items-center gap-1.5"><ShieldAlert size={14} className="text-emerald-400" /> Success Rate</span>
            <span className="text-emerald-400 font-bold">{phase.successRatePercentage}%</span>
          </div>
        </div>
      </div>

      <div>
        <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block mb-2">
          Key Milestones
        </span>
        <div className="flex flex-wrap gap-1.5">
          {phase.keyMilestones.map((milestone) => (
            <span
              key={milestone}
              className="text-xs px-2 py-1 rounded-md bg-slate-800/80 border border-slate-700/50 text-slate-300 flex items-center gap-1 font-mono"
            >
              <Check size={12} className="text-sky-400" />
              {milestone}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
