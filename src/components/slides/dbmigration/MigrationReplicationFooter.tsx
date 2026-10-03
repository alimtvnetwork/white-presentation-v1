import React from 'react';
import { Database, CheckCircle2, ShieldCheck, Activity } from 'lucide-react';
import type { DatabaseMigrationPipelineSlideData } from '../../../types/sovereignOperationsArchetypes';

interface MigrationReplicationFooterProps {
  slide: DatabaseMigrationPipelineSlideData;
  activeStep: number;
}

export const MigrationReplicationFooter: React.FC<MigrationReplicationFooterProps> = ({
  slide,
  activeStep,
}) => {
  const phases = slide.pipelinePhases || [];
  const currentStep = Math.min(activeStep, Math.max(0, phases.length - 1));
  const activePhase = phases[currentStep];
  const cutoverReadyCount = phases.filter((p) => p.isCutoverReady).length;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
      className="plane-1-raised px-5 py-3 rounded-2xl flex items-center justify-between z-10 border font-mono text-xs"
    >
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
          <Database size={14} /> Migration Cutover Clearance
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>|</span>
        <span style={{ color: 'var(--pres-text)' }} className="flex items-center gap-1">
          <Activity size={12} className="text-cyan-400 animate-pulse" />
          Active Phase: <strong className="text-emerald-300 font-bold">{activePhase?.phaseName || 'Preparation'}</strong>
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>|</span>
        <span style={{ color: 'var(--pres-text-muted)' }}>
          Lag: <span className="text-slate-300">{activePhase?.replicationLagMs || 0} ms</span>
        </span>
      </div>

      <div className="flex items-center gap-5 text-slate-300">
        <span className="flex items-center gap-1.5 text-cyan-400">
          <CheckCircle2 size={13} />
          <span>{cutoverReadyCount} of {phases.length} Phases Cutover Ready</span>
        </span>
        <span className="flex items-center gap-1.5 text-emerald-400">
          <ShieldCheck size={13} />
          <span>Zero Data Loss Guaranteed</span>
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>
          Phase {currentStep + 1} / {Math.max(phases.length, 1)}
        </span>
      </div>
    </div>
  );
};
