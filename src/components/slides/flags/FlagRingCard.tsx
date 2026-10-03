import React from 'react';
import { CheckCircle2, ShieldCheck, ToggleRight, Clock, Activity } from 'lucide-react';
import type { FeatureFlagRolloutRingItem } from '../../../types/sovereignOperationsArchetypes';

interface FlagRingCardProps {
  ring: FeatureFlagRolloutRingItem;
  index: number;
  activeStep: number;
}

export const FlagRingCard: React.FC<FlagRingCardProps> = ({ ring, index, activeStep }) => {
  const isCompleted = index < activeStep;
  const isActive = index === activeStep;
  const phaseClass = isActive
    ? 'step-phase-active'
    : isCompleted
      ? 'step-phase-past'
      : 'step-phase-future';

  const guards = ring.telemetryGuards || [];

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
              backgroundColor: isActive ? 'var(--pres-accent)' : 'rgba(20, 184, 166, 0.15)',
              color: isActive ? 'var(--pres-accent-text, #ffffff)' : '#2dd4bf',
            }}
            className="px-2.5 py-1 rounded-md font-mono text-xs font-bold"
          >
            RING {ring.ringIndex || index}
          </span>
          <span className="font-mono text-xs text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
            {ring.allocationPercent}% Audience
          </span>
        </div>

        <h3 style={{ color: 'var(--pres-text)' }} className="text-xl font-bold font-ubuntu tracking-tight mb-2">
          {ring.ringName}
        </h3>

        <div className="flex items-center gap-1.5 font-mono text-xs text-slate-300 mb-3">
          <ToggleRight size={12} className="text-teal-400" />
          <span className="text-teal-300 truncate max-w-[210px]">{ring.userCohortSize} Cohort</span>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4 p-2.5 rounded-lg bg-black/20 border border-white/5 font-mono text-xs">
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block">DWELL TIME</span>
            <span className="text-cyan-300 font-bold">{ring.dwellTimeHours}h Soak</span>
          </div>
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block">HEALTH</span>
            <span className="text-emerald-300 font-bold">
              {ring.hasTelemetryHealthy ? 'P99 Normal' : 'Degraded'}
            </span>
          </div>
        </div>

        <div className="space-y-1.5">
          <div style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] uppercase tracking-wider font-mono">
            Telemetry Guardrails ({guards.length})
          </div>
          {guards.slice(0, 3).map((guard) => (
            <div key={guard.id} className="flex items-center justify-between text-xs font-mono p-1.5 rounded bg-white/5">
              <span className="truncate max-w-[150px]" style={{ color: 'var(--pres-text)' }}>
                {guard.guardMetric}
              </span>
              <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
                <CheckCircle2 size={11} /> {guard.currentTelemetry}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[11px]">
        <span style={{ color: 'var(--pres-text-muted)' }} className="flex items-center gap-1">
          <Clock size={12} className="text-teal-400" />
          {ring.isAutoKillSwitchArmed ? 'Armed Guard' : 'Manual Watch'}
        </span>
        <span className="text-teal-400 font-bold flex items-center gap-1">
          <ShieldCheck size={12} />
          {ring.isRingCompleted ? 'RING COMPLETED' : 'CANARY ACTIVE'}
        </span>
      </div>
    </div>
  );
};
