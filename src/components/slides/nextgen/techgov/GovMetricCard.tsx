import React from 'react';
import { Activity, Lock, CheckCircle2, Hash } from 'lucide-react';
import type { GovernorMetrics } from '../../../../types/nextgen/deepTechGovernanceTypes';

interface GovMetricCardProps {
  metrics: GovernorMetrics;
}

export const GovMetricCard: React.FC<GovMetricCardProps> = ({ metrics }) => (
  <div
    style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
    className="plane-1-raised rounded-3xl p-6 border flex flex-col justify-between"
  >
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-700 dark:text-violet-300">
          <Activity size={16} />
        </div>
        <span className="font-mono text-xs uppercase tracking-wider font-bold text-slate-800 dark:text-slate-200">
          Telemetry & Verifications
        </span>
      </div>
      <span className="font-mono text-xs px-2.5 py-1 rounded-full font-bold bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
        <CheckCircle2 size={12} />
        {metrics.isComplianceCertified ? 'SOC2 / ISO CERTIFIED' : 'PENDING'}
      </span>
    </div>

    <div className="grid grid-cols-2 gap-4 mb-4">
      <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-[11px] font-mono block uppercase">
          Live Inferences
        </span>
        <span className="text-xl font-bold font-ubuntu text-slate-900 dark:text-slate-100">
          {metrics.totalEvaluationsCount}
        </span>
      </div>

      <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-[11px] font-mono block uppercase">
          Violation Rate
        </span>
        <span className="text-xl font-bold font-ubuntu text-emerald-700 dark:text-emerald-400">
          {(metrics.violationRatePercentage * 100).toFixed(4)}%
        </span>
      </div>
    </div>

    <div className="p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
      <div className="flex items-center justify-between mb-1">
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] font-mono uppercase flex items-center gap-1">
          <Hash size={11} /> Merkle Audit State
        </span>
        <span className="text-[10px] font-mono text-violet-700 dark:text-violet-300 font-bold flex items-center gap-1">
          <Lock size={10} /> Immutable
        </span>
      </div>
      <p className="font-mono text-[11px] text-slate-700 dark:text-slate-300 truncate">
        {metrics.auditHash}
      </p>
    </div>
  </div>
);
