import React from 'react';
import { Clock, ShieldCheck, Activity, Globe } from 'lucide-react';
import type { DisasterRecoveryDrillSlideData } from '../../../types/sovereignOperationsArchetypes';

interface DrMetricStripProps {
  slide: DisasterRecoveryDrillSlideData;
}

export const DrMetricStrip: React.FC<DrMetricStripProps> = ({ slide }) => {
  const phases = slide.drillPhases || [];
  const achievedRto = slide.overallRtoAchievedSeconds || 42;
  const isSigned = slide.isExecutiveSignoffAchieved;

  return (
    <div className="z-10 grid grid-cols-4 gap-4">
      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
        className="plane-1-raised p-4 rounded-xl border flex items-center justify-between"
      >
        <div>
          <div style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider">
            Achieved RTO
          </div>
          <div style={{ color: 'var(--pres-text)' }} className="text-2xl font-bold font-ubuntu tracking-tight">
            {achievedRto}s <span className="text-sm font-normal font-mono text-emerald-400">Total Swing</span>
          </div>
        </div>
        <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <Clock size={20} />
        </div>
      </div>

      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
        className="plane-1-raised p-4 rounded-xl border flex items-center justify-between"
      >
        <div>
          <div style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider">
            Target RPO
          </div>
          <div style={{ color: 'var(--pres-text)' }} className="text-2xl font-bold font-ubuntu tracking-tight">
            {slide.targetRpoFormatted || '0s'} <span className="text-sm font-normal font-mono text-cyan-400">Zero Loss</span>
          </div>
        </div>
        <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <ShieldCheck size={20} />
        </div>
      </div>

      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
        className="plane-1-raised p-4 rounded-xl border flex items-center justify-between"
      >
        <div>
          <div style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider">
            Drill Phases
          </div>
          <div style={{ color: 'var(--pres-text)' }} className="text-2xl font-bold font-ubuntu tracking-tight">
            {phases.length} <span className="text-sm font-normal font-mono text-amber-900 dark:text-amber-400">Phases</span>
          </div>
        </div>
        <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-900 dark:text-amber-400 border border-amber-500/20">
          <Activity size={20} />
        </div>
      </div>

      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
        className="plane-1-raised p-4 rounded-xl border flex items-center justify-between"
      >
        <div>
          <div style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider">
            Executive Signoff
          </div>
          <div className="text-sm font-bold font-mono text-emerald-400 flex items-center gap-1.5 mt-1">
            <span>{isSigned ? 'Audit Certified' : 'Board Approved'}</span>
            <span style={{ color: 'var(--pres-text-muted)' }}>•</span>
            <span>Hot Standby</span>
          </div>
        </div>
        <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <Globe size={20} />
        </div>
      </div>
    </div>
  );
};
