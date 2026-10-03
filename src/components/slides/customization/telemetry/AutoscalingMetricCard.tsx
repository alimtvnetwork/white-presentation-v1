import React from 'react';
import { Server, TrendingUp, Clock, ShieldCheck, Zap } from 'lucide-react';
import type { PredictiveAutoscalingMetricItem } from '../../../../types/customization/sovereignTelemetryTypes';

interface AutoscalingMetricCardProps {
  metric: PredictiveAutoscalingMetricItem;
  index: number;
  isStepActive: boolean;
}

export const AutoscalingMetricCard: React.FC<AutoscalingMetricCardProps> = ({
  metric,
  index: _index,
  isStepActive,
}) => {
  const isScaling = metric.isScalingActive;
  const isAccurate = metric.isPredictionAccurate;

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
          <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30 flex items-center gap-1.5">
            <Server size={12} /> {metric.id}
          </span>
          <span className="font-mono text-xs flex items-center gap-1 font-bold text-sky-700 dark:text-sky-400">
            <Clock size={12} /> {metric.leadTimeMinutes}m Lookahead
          </span>
        </div>

        <h3 className="font-ubuntu text-base font-bold leading-snug mb-3" style={{ color: 'var(--pres-text)' }}>
          {metric.workloadCluster}
        </h3>

        <div className="space-y-2 mb-4">
          <div className="p-2.5 rounded-lg bg-[var(--pres-surface-muted)] flex items-center justify-between">
            <span className="text-xs font-mono" style={{ color: 'var(--pres-text-muted)' }}>
              Replicas (Live → Pred)
            </span>
            <span className="font-mono font-bold text-sm text-sky-700 dark:text-sky-400">
              {metric.currentReplicas} → <span className="text-emerald-700 dark:text-emerald-400">{metric.predictedReplicas}</span>
            </span>
          </div>

          <div className="flex items-center justify-between text-xs font-mono p-2 rounded-lg bg-[var(--pres-surface-muted)]">
            <span className="flex items-center gap-1.5" style={{ color: 'var(--pres-text-muted)' }}>
              <TrendingUp size={13} className="text-emerald-500" /> Cost Efficiency
            </span>
            <span className="font-bold text-emerald-700 dark:text-emerald-400">
              +{metric.costEfficiencyPercentage}%
            </span>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between">
        <span className="font-mono text-[11px] px-2 py-0.5 rounded-full border bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-500/30 flex items-center gap-1">
          <Zap size={11} /> {isScaling ? 'Scaling Engaged' : 'Baseline'}
        </span>
        <span className="font-mono text-[11px] px-2 py-0.5 rounded-full border bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-300 dark:border-cyan-500/30 flex items-center gap-1">
          <ShieldCheck size={11} /> {isAccurate ? '99.4% Accurate' : 'Calibrating'}
        </span>
      </div>
    </div>
  );
};
