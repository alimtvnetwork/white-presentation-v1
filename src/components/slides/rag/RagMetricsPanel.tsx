import React from 'react';
import { CheckCircle2, Target, BarChart2 } from 'lucide-react';
import type { VectorIndexMetricItem } from '../../../types/globalPptArchetypes';
import { isBooleanTrue } from '../../../utils/booleanGuards';

interface RagMetricsPanelProps {
  metrics: VectorIndexMetricItem[];
}

export const RagMetricsPanel: React.FC<RagMetricsPanelProps> = ({ metrics }) => (
  <div className="plane-1-raised p-4 rounded-xl border border-slate-800 bg-slate-900/60 flex items-center justify-between font-mono text-xs">
    <div className="flex items-center gap-2 text-slate-400">
      <BarChart2 size={15} className="text-purple-400" />
      <span className="uppercase tracking-wider font-bold text-[11px]">
        Retrieval Precision & Accuracy Benchmarks:
      </span>
    </div>

    <div className="flex items-center gap-6">
      {metrics.map((metric) => {
        const isTargetReached = isBooleanTrue(metric.hasTargetReached);

        return (
          <div key={metric.id} className="flex items-center gap-2">
            <span className="text-slate-400">{metric.metricLabel}:</span>
            <span className="text-purple-300 font-bold text-sm">{metric.metricValue}</span>
            {isTargetReached && (
              <span className="text-emerald-400 text-[10px] flex items-center gap-0.5">
                <CheckCircle2 size={11} /> Target Met
              </span>
            )}
          </div>
        );
      })}
    </div>
  </div>
);
