import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Database, History } from 'lucide-react';
import type { DbMigrationPhaseItem } from '../../../types/sovereignOperationsArchetypes';

interface MigrationPhaseCardProps {
  phase: DbMigrationPhaseItem;
  index: number;
  activeStep: number;
}

export const MigrationPhaseCard: React.FC<MigrationPhaseCardProps> = ({ phase, index, activeStep }) => {
  const isCompleted = index < activeStep;
  const isActive = index === activeStep;
  const phaseClass = isActive
    ? 'step-phase-active'
    : isCompleted
      ? 'step-phase-past'
      : 'step-phase-future';

  const checks = phase.verificationChecks || [];

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
              backgroundColor: isActive ? 'var(--pres-accent)' : 'rgba(16, 185, 129, 0.15)',
              color: isActive ? 'var(--pres-accent-text, #ffffff)' : '#34d399',
            }}
            className="px-2.5 py-1 rounded-md font-mono text-xs font-bold"
          >
            PHASE {phase.phaseIndex || index + 1}
          </span>
          <span className="font-mono text-xs text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
            {phase.isZeroDowntime ? 'Zero-Downtime' : 'Maintenance'}
          </span>
        </div>

        <h3 style={{ color: 'var(--pres-text)' }} className="text-xl font-bold font-ubuntu tracking-tight mb-2">
          {phase.phaseName}
        </h3>

        <div className="flex items-center gap-1.5 font-mono text-xs text-slate-300 mb-3">
          <Database size={12} className="text-cyan-400" />
          <span className="text-cyan-300">{phase.sourceDb}</span>
          <ArrowRight size={12} className="text-emerald-400" />
          <span className="text-emerald-300">{phase.targetDb}</span>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4 p-2.5 rounded-lg bg-black/20 border border-white/5 font-mono text-xs">
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block">REPLICATION LAG</span>
            <span className="text-emerald-300 font-bold">{phase.replicationLagMs} ms</span>
          </div>
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block">TRANSFERRED</span>
            <span className="text-sky-300 font-bold">{phase.recordsTransferred}</span>
          </div>
        </div>

        <div className="space-y-1.5">
          <div style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] uppercase tracking-wider font-mono">
            Table Checksums ({checks.length})
          </div>
          {checks.slice(0, 3).map((check) => (
            <div key={check.id} className="flex items-center justify-between text-xs font-mono p-1.5 rounded bg-white/5">
              <span className="truncate max-w-[160px]" style={{ color: 'var(--pres-text)' }}>
                {check.targetTable}
              </span>
              <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
                <CheckCircle2 size={11} /> {check.checksumMatchPercent}% Match
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[11px]">
        <span style={{ color: 'var(--pres-text-muted)' }} className="flex items-center gap-1">
          <History size={12} className="text-sky-400" />
          {phase.isRollbackAvailable ? 'Rollback Guard' : 'Forward Only'}
        </span>
        <span className="text-emerald-400 font-bold flex items-center gap-1">
          <ShieldCheck size={12} />
          {phase.isCutoverReady ? 'CUTOVER READY' : 'REPLICATING'}
        </span>
      </div>
    </div>
  );
};
