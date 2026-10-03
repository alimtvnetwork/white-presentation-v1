import React from 'react';
import { AlertTriangle, ShieldCheck, Users, TrendingDown, CheckCircle2 } from 'lucide-react';
import type { CloudEntitlementMetricItem } from '../../../../types/customization/sovereignTelemetryTypes';

interface EntitlementRiskCardProps {
  metric: CloudEntitlementMetricItem;
  index: number;
  isStepActive: boolean;
}

const getRiskBadgeClass = (tier: string) => {
  switch (tier) {
    case 'CRITICAL': return 'bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-300 dark:border-rose-500/30';
    case 'HIGH': return 'bg-amber-500/10 text-amber-900 dark:text-amber-400 border-amber-300 dark:border-amber-500/30';
    case 'MEDIUM': return 'bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-300 dark:border-sky-500/30';
    default: return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-500/30';
  }
};

export const EntitlementRiskCard: React.FC<EntitlementRiskCardProps> = ({
  metric,
  index: _index,
  isStepActive,
}) => {
  const isCompliant = metric.isCompliant;
  const hasWarning = metric.hasOverPrivilegeWarning;

  return (
    <div
      style={{
        backgroundColor: 'var(--pres-bg-card)',
        borderColor: isStepActive ? 'var(--pres-accent)' : 'var(--pres-border)',
      }}
      className={`plane-1-raised rounded-2xl border p-5 flex flex-col justify-between transition-all duration-300 ${
        isStepActive ? 'ring-2 ring-emerald-500/40 shadow-xl' : 'opacity-85'
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded-md border ${getRiskBadgeClass(metric.riskTier)}`}>
            {metric.riskTier} RISK
          </span>
          <span className="font-mono text-xs flex items-center gap-1 font-bold text-emerald-700 dark:text-emerald-400">
            <TrendingDown size={12} /> {metric.deltaPercentage}%
          </span>
        </div>

        <h3 className="font-ubuntu text-base font-bold leading-snug mb-3" style={{ color: 'var(--pres-text)' }}>
          {metric.metricLabel}
        </h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-xs font-mono p-2.5 rounded-lg bg-[var(--pres-surface-muted)]">
            <span style={{ color: 'var(--pres-text-muted)' }}>Identified Metric</span>
            <span className="font-bold text-base text-sky-700 dark:text-sky-400">
              {metric.metricValue}
            </span>
          </div>

          <div className="flex items-center justify-between text-xs font-mono p-2 rounded-lg bg-[var(--pres-surface-muted)]">
            <span className="flex items-center gap-1.5" style={{ color: 'var(--pres-text-muted)' }}>
              <Users size={13} className="text-sky-500" /> Affected Identities
            </span>
            <span className="font-bold text-sky-700 dark:text-sky-400">
              {metric.affectedIdentitiesCount}
            </span>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between">
        <span className="font-mono text-[11px] px-2 py-0.5 rounded-full border bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-500/30 flex items-center gap-1">
          <CheckCircle2 size={11} /> {isCompliant ? 'Baseline Compliant' : 'Remediation Active'}
        </span>
        <span
          className={`font-mono text-[11px] px-2 py-0.5 rounded-full border flex items-center gap-1 ${
            hasWarning
              ? 'bg-amber-500/10 text-amber-900 dark:text-amber-400 border-amber-300 dark:border-amber-500/30'
              : 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-300 dark:border-cyan-500/30'
          }`}
        >
          <ShieldCheck size={11} /> {hasWarning ? 'Toxic Path Guard' : 'Zero Escalation'}
        </span>
      </div>
    </div>
  );
};
