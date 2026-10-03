import React from 'react';
import { ShieldCheck, Leaf, Target, Users } from 'lucide-react';
import type { Scope3AuditPhaseItem } from '../../../../types/customization/enterpriseStrategyTypes';

interface Scope3AuditCardProps {
  phase: Scope3AuditPhaseItem;
  index: number;
  isStepActive: boolean;
}

export const Scope3AuditCard: React.FC<Scope3AuditCardProps> = ({
  phase,
  index,
  isStepActive,
}) => {
  const isHighlighted = isStepActive || phase.isPhaseActive;
  const isAudited = phase.isPhaseAudited;

  return (
    <div
      style={{
        backgroundColor: 'var(--pres-bg-card)',
        borderColor: isHighlighted ? 'var(--pres-accent)' : 'var(--pres-border)',
      }}
      className={`plane-1-raised rounded-2xl border p-5 flex flex-col justify-between transition-all duration-300 ${
        isHighlighted ? 'ring-2 ring-emerald-500/40 shadow-xl' : 'opacity-85'
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30">
            Phase 0{phase.stepIndex || index + 1}
          </span>
          <span className="font-mono text-xs text-sky-700 dark:text-sky-400">
            {phase.ghgProtocolScope}
          </span>
        </div>

        <h3 className="font-ubuntu text-lg font-bold leading-snug mb-3" style={{ color: 'var(--pres-text)' }}>
          {phase.phaseName}
        </h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-xs font-mono p-2 rounded-lg bg-[var(--pres-surface-muted)]">
            <span className="flex items-center gap-1.5" style={{ color: 'var(--pres-text-muted)' }}>
              <Leaf size={13} className="text-emerald-500" /> Emissions
            </span>
            <span className="font-bold text-emerald-700 dark:text-emerald-400">
              {phase.emissionTonsCo2e?.toLocaleString()} tCO2e
            </span>
          </div>

          <div className="flex items-center justify-between text-xs font-mono p-2 rounded-lg bg-[var(--pres-surface-muted)]">
            <span className="flex items-center gap-1.5" style={{ color: 'var(--pres-text-muted)' }}>
              <Users size={13} className="text-sky-500" /> Supplier Coverage
            </span>
            <span className="font-bold text-sky-700 dark:text-sky-400">
              {phase.supplierCoveragePercentage}%
            </span>
          </div>
        </div>

        <div className="space-y-1 mb-3">
          {(phase.reportingStandards || []).slice(0, 3).map((std, idx) => (
            <div key={idx} className="text-[11px] font-mono truncate" style={{ color: 'var(--pres-text-muted)' }}>
              • {std}
            </div>
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between">
        <div className="flex items-center gap-1 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">
          <Target size={13} /> -{phase.reductionTargetPercentage}% Target
        </div>
        <span
          className={`font-mono text-[11px] px-2.5 py-1 rounded-full border flex items-center gap-1 ${
            isAudited
              ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-500/30 font-bold'
              : 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-300 dark:border-cyan-500/30'
          }`}
        >
          <ShieldCheck size={11} /> {isAudited ? 'Verified Audit' : 'In Telemetry'}
        </span>
      </div>
    </div>
  );
};
