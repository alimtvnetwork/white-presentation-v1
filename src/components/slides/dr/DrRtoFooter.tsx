import React from 'react';
import { AlertTriangle, CheckCircle2, ShieldCheck, Globe } from 'lucide-react';
import type { DisasterRecoveryDrillSlideData } from '../../../types/sovereignOperationsArchetypes';

interface DrRtoFooterProps {
  slide: DisasterRecoveryDrillSlideData;
  activeStep: number;
}

export const DrRtoFooter: React.FC<DrRtoFooterProps> = ({ slide, activeStep }) => {
  const phases = slide.drillPhases || [];
  const currentStep = Math.min(activeStep, Math.max(0, phases.length - 1));
  const activePhase = phases[currentStep];
  const passedCount = phases.filter((p) => p.isPhasePassed).length;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
      className="plane-1-raised px-5 py-3 rounded-2xl flex items-center justify-between z-10 border font-mono text-xs"
    >
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1.5 text-amber-900 dark:text-amber-400 font-bold">
          <AlertTriangle size={14} /> Disaster Recovery Clearance
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>|</span>
        <span style={{ color: 'var(--pres-text)' }} className="flex items-center gap-1">
          <Globe size={12} className="text-amber-900 dark:text-amber-400 animate-pulse" />
          Active Phase: <strong className="text-amber-900 dark:text-amber-300 font-bold">{activePhase?.phaseName || 'Preparation'}</strong>
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>|</span>
        <span style={{ color: 'var(--pres-text-muted)' }}>
          Target RTO: <span className="text-slate-300">{activePhase?.targetRtoSeconds || 0}s</span>
        </span>
      </div>

      <div className="flex items-center gap-5 text-slate-300">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <CheckCircle2 size={13} />
          <span>{passedCount} of {phases.length} Drill Phases Cleared</span>
        </span>
        <span className="flex items-center gap-1.5 text-amber-900 dark:text-amber-400">
          <ShieldCheck size={13} />
          <span>Autonomous Traffic Reroute</span>
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>
          Phase {currentStep + 1} / {Math.max(phases.length, 1)}
        </span>
      </div>
    </div>
  );
};
