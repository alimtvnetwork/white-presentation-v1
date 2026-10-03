import React from 'react';
import { CheckCircle2, ShieldCheck, ArrowRight, Server, Globe } from 'lucide-react';
import type { DrDrillPhaseItem } from '../../../types/sovereignOperationsArchetypes';

interface DrPhaseCardProps {
  phase: DrDrillPhaseItem;
  index: number;
  activeStep: number;
}

export const DrPhaseCard: React.FC<DrPhaseCardProps> = ({ phase, index, activeStep }) => {
  const isCompleted = index < activeStep;
  const isActive = index === activeStep;
  const phaseClass = isActive
    ? 'step-phase-active'
    : isCompleted
      ? 'step-phase-past'
      : 'step-phase-future';

  const services = phase.serviceFailovers || [];

  return (
    <div
      style={{
        backgroundColor: 'var(--pres-bg-card)',
        borderColor: isActive ? 'var(--pres-border-hover)' : 'var(--pres-border)',
        color: 'var(--pres-text)',
      }}
      className={`plane-1-raised p-5 rounded-2xl border flex flex-col justify-between h-[420px] transition-all duration-300 ${phaseClass}`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span
            style={{
              backgroundColor: isActive ? 'var(--pres-accent)' : 'rgba(245, 158, 11, 0.15)',
              color: isActive ? 'var(--pres-accent-text, #ffffff)' : '#fbbf24',
            }}
            className="px-2.5 py-1 rounded-md font-mono text-xs font-bold"
          >
            PHASE {phase.phaseIndex || index + 1}
          </span>
          <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            {phase.elapsedSeconds <= phase.targetRtoSeconds ? 'Within RTO' : 'RTO At Risk'}
          </span>
        </div>

        <h3 style={{ color: 'var(--pres-text)' }} className="text-xl font-bold font-ubuntu tracking-tight mb-2">
          {phase.phaseName}
        </h3>

        <div className="flex items-center gap-1.5 font-mono text-xs text-slate-300 mb-3">
          <Globe size={12} className="text-rose-400" />
          <span className="text-rose-300">{phase.originRegion}</span>
          <ArrowRight size={12} className="text-emerald-400" />
          <span className="text-emerald-300">{phase.failoverRegion}</span>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4 p-2.5 rounded-lg bg-black/20 border border-white/5 font-mono text-xs">
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block">ELAPSED TIME</span>
            <span className="text-emerald-300 font-bold">{phase.elapsedSeconds}s</span>
          </div>
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block">TARGET RTO</span>
            <span className="text-cyan-300 font-bold">{phase.targetRtoSeconds}s</span>
          </div>
        </div>

        <div className="space-y-1.5">
          <div style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] uppercase tracking-wider font-mono">
            Service Reroutes ({services.length})
          </div>
          {services.slice(0, 3).map((item) => (
            <div key={item.id} className="flex items-center justify-between text-xs font-mono p-1.5 rounded bg-white/5">
              <span className="truncate max-w-[150px]" style={{ color: 'var(--pres-text)' }}>
                {item.serviceName}
              </span>
              <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
                <CheckCircle2 size={11} /> {item.rtoAchievedSeconds}s RTO
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[11px]">
        <span style={{ color: 'var(--pres-text-muted)' }} className="flex items-center gap-1">
          <Server size={12} className="text-amber-400" />
          {phase.hasZeroDataLoss ? 'Zero Data Loss' : 'Consensus Synced'}
        </span>
        <span className="text-emerald-400 font-bold flex items-center gap-1">
          <ShieldCheck size={12} />
          {phase.isPhasePassed ? 'PHASE PASSED' : 'FAILOVER ACTIVE'}
        </span>
      </div>
    </div>
  );
};
