import React from 'react';
import type { LogisticsCorridorNode } from '../../../types/nextGenArchetypes';
import { ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';
import { CorridorRiskBar, getTransitIcon } from './CorridorRiskBar';

interface Props {
  corridor: LogisticsCorridorNode;
  index: number;
  isActive: boolean;
  isCompleted: boolean;
  onHover: (index: number | null) => void;
}

export const LogisticsTwinNodeCard: React.FC<Props> = ({
  corridor, index, isActive, isCompleted, onHover,
}) => {
  const stepPhaseClass = isActive
    ? 'step-phase-active ring-2 ring-violet-500/60 shadow-2xl opacity-100'
    : isCompleted ? 'step-phase-past opacity-75' : 'step-phase-future opacity-40';

  return (
    <div
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      style={{
        backgroundColor: 'var(--pres-bg-card)',
        borderColor: isActive ? 'var(--pres-border-hover)' : 'var(--pres-border)',
        color: 'var(--pres-text)',
      }}
      className={`plane-1-raised rounded-3xl p-6 border flex flex-col justify-between transition-all duration-300 cursor-pointer ${stepPhaseClass} bg-gradient-to-b from-cyan-500/10 to-indigo-500/5`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 rounded-full font-mono text-xs font-bold bg-violet-600/20 text-slate-900 dark:text-violet-200 border border-violet-500/30 flex items-center gap-1.5">
            {getTransitIcon(corridor.transitMode)} {corridor.transitMode} FREIGHT
          </span>
          <span className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-black/10 dark:bg-white/5 px-2.5 py-0.5 rounded-full border border-slate-700/40">
            {corridor.averageTransitDays} Days Avg
          </span>
        </div>

        <div className="space-y-2 mb-3">
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] uppercase font-mono block">Origin Node</span>
            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 font-ubuntu">{corridor.originNode}</h4>
          </div>
          <div className="flex items-center gap-2 text-violet-400">
            <ArrowRight size={14} />
            <span className="text-[10px] font-mono text-slate-500">TRANSIT CORRIDOR</span>
          </div>
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] uppercase font-mono block">Destination Node</span>
            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 font-ubuntu">{corridor.destinationNode}</h4>
          </div>
        </div>

        <CorridorRiskBar node={corridor} />
      </div>

      <div className="pt-2 border-t border-white/10 flex items-center justify-between font-mono text-xs">
        <span className={`flex items-center gap-1.5 font-semibold ${corridor.isCorridorOperational ? 'text-emerald-800 dark:text-emerald-400' : 'text-rose-500'}`}>
          {corridor.isCorridorOperational ? <CheckCircle2 size={13} /> : <AlertTriangle size={13} />}
          {corridor.isCorridorOperational ? 'Operational' : 'Chokepoint Alert'}
        </span>
        {corridor.isReroutingActive && (
          <span className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-800 dark:text-sky-300 border border-sky-500/20 text-[10px] font-bold">
            Autonomous Reroute
          </span>
        )}
      </div>
    </div>
  );
};
