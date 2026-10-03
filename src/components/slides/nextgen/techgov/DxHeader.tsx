import React from 'react';
import { Gauge, Flame } from 'lucide-react';
import type { FlywheelAcceleration } from '../../../../types/nextgen/deepTechGovernanceTypes';

interface DxHeaderProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  acceleration: FlywheelAcceleration;
}

export const DxHeader: React.FC<DxHeaderProps> = ({ kicker, title, subtitle, acceleration }) => (
  <header className="flex items-start justify-between gap-6 mb-6">
    <div className="flex-1">
      <div className="flex items-center gap-3 mb-2">
        <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full inline-flex items-center gap-2 bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">
          <Flame size={14} className="text-violet-600 dark:text-violet-400" />
          {kicker || 'DORA VELOCITY'}
        </span>
        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 border border-emerald-500/20">
          {acceleration.isFlywheelAccelerating ? 'COMPOUNDING VELOCITY' : 'BASELINE LINEAR'}
        </span>
      </div>
      <h1 className="text-4xl font-ubuntu font-bold tracking-tight text-slate-900 dark:text-slate-50">
        {title}
      </h1>
      {subtitle && (
        <p style={{ color: 'var(--pres-text-muted)' }} className="text-base font-normal mt-1 max-w-4xl">
          {subtitle}
        </p>
      )}
    </div>

    <div
      style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
      className="plane-1-raised rounded-2xl p-3 border flex items-center gap-4 min-w-[320px]"
    >
      <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-700 dark:text-violet-300">
        <Gauge size={20} />
      </div>
      <div className="flex items-center gap-4 font-mono">
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] uppercase block">
            Cycle Reduction
          </span>
          <span className="text-lg font-bold text-emerald-700 dark:text-emerald-400">
            -{acceleration.cycleTimeReductionPercent}%
          </span>
        </div>
        <div className="w-px h-8 bg-black/10 dark:bg-white/10" />
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] uppercase block">
            Deploy Cadence
          </span>
          <span className="text-lg font-bold text-violet-700 dark:text-violet-300">
            {acceleration.deploymentFrequencyMultiplier}
          </span>
        </div>
      </div>
    </div>
  </header>
);
