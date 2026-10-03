import React from 'react';
import { Flame, ShieldCheck, Activity, RotateCcw } from 'lucide-react';
import type { ChaosEngineeringMatrixSlideData } from '../../../types/sovereignOperationsArchetypes';

interface ChaosKpiStripProps {
  slide: ChaosEngineeringMatrixSlideData;
}

export const ChaosKpiStrip: React.FC<ChaosKpiStripProps> = ({ slide }) => {
  const scenarios = slide.chaosScenarios || [];
  const resilienceScore = slide.resilienceIndexScore || 99.8;
  const steadyStateSlo = slide.steadyStateSloPercent || 99.99;
  const isSafe = slide.isProductionSafeExecution;

  return (
    <div className="z-10 grid grid-cols-4 gap-4">
      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
        className="plane-1-raised p-4 rounded-xl border flex items-center justify-between"
      >
        <div>
          <div style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider">
            Resilience Index
          </div>
          <div style={{ color: 'var(--pres-text)' }} className="text-2xl font-bold font-ubuntu tracking-tight">
            {resilienceScore}% <span className="text-sm font-normal font-mono text-emerald-400">Stable</span>
          </div>
        </div>
        <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <ShieldCheck size={20} />
        </div>
      </div>

      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
        className="plane-1-raised p-4 rounded-xl border flex items-center justify-between"
      >
        <div>
          <div style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider">
            Steady-State SLO
          </div>
          <div style={{ color: 'var(--pres-text)' }} className="text-2xl font-bold font-ubuntu tracking-tight">
            {steadyStateSlo}% <span className="text-sm font-normal font-mono text-rose-400">Retained</span>
          </div>
        </div>
        <div className="p-2.5 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20">
          <Activity size={20} />
        </div>
      </div>

      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
        className="plane-1-raised p-4 rounded-xl border flex items-center justify-between"
      >
        <div>
          <div style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider">
            Injected Scenarios
          </div>
          <div style={{ color: 'var(--pres-text)' }} className="text-2xl font-bold font-ubuntu tracking-tight">
            {scenarios.length} <span className="text-sm font-normal font-mono text-amber-900 dark:text-amber-400">Vectors</span>
          </div>
        </div>
        <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-900 dark:text-amber-400 border border-amber-500/20">
          <Flame size={20} />
        </div>
      </div>

      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
        className="plane-1-raised p-4 rounded-xl border flex items-center justify-between"
      >
        <div>
          <div style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider">
            Self-Healing Guard
          </div>
          <div className="text-sm font-bold font-mono text-rose-400 flex items-center gap-1.5 mt-1">
            <span>{isSafe ? 'Automated Rollback' : 'Manual Overseer'}</span>
            <span style={{ color: 'var(--pres-text-muted)' }}>•</span>
            <span>Fast MTTR</span>
          </div>
        </div>
        <div className="p-2.5 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20">
          <RotateCcw size={20} />
        </div>
      </div>
    </div>
  );
};
