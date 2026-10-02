import React from 'react';
import type { MetricScorecardItem } from '../../../types/enterpriseArchetypes';
import { TrendingUp, CheckCircle2, Target } from 'lucide-react';

interface ScorecardMetricCardProps {
  item: MetricScorecardItem;
}

export const ScorecardMetricCard: React.FC<ScorecardMetricCardProps> = ({ item }) => {
  const isExceeded = Boolean(item.isTargetExceeded);
  const statusColor = item.statusColor || '#10B981';

  return (
    <div className="plane-2-elevated p-6 rounded-2xl border border-slate-800 bg-slate-900/50 flex flex-col justify-between transition-all hover:border-slate-700">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs uppercase tracking-wider">
            {item.metricTitle}
          </span>
          <div className="flex items-center gap-1.5">
            {isExceeded && (
              <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                <CheckCircle2 size={10} /> Target Met
              </span>
            )}
            <span
              style={{ color: statusColor, borderColor: `${statusColor}40`, backgroundColor: `${statusColor}15` }}
              className="flex items-center gap-1 text-xs font-mono font-bold px-2 py-0.5 rounded-full border"
            >
              <TrendingUp size={12} />
              <span>{item.varianceDelta}</span>
            </span>
          </div>
        </div>

        <div style={{ color: 'var(--pres-accent)' }} className="font-ubuntu text-4xl font-black mb-2">
          {item.currentValue}
        </div>
      </div>

      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
        <span style={{ color: 'var(--pres-text-muted)' }} className="flex items-center gap-1.5">
          <Target size={12} /> Target SLA:
        </span>
        <span className="text-slate-200 font-bold">{item.targetValue}</span>
      </div>
    </div>
  );
};
