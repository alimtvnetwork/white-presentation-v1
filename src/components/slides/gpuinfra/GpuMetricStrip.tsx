import React from 'react';
import { Cpu, Zap, Activity, CheckCircle2 } from 'lucide-react';

interface GpuMetricStripProps {
  totalGpuAccelerators: number;
  aggregateTokensPerSecFormatted: string;
  averageComputeUtilizationPercent: number;
  isContinuousBatchingActive: boolean;
}

export const GpuMetricStrip: React.FC<GpuMetricStripProps> = ({
  totalGpuAccelerators,
  aggregateTokensPerSecFormatted,
  averageComputeUtilizationPercent,
  isContinuousBatchingActive,
}) => {
  const metrics = [
    {
      label: 'HPC Tensor Accelerators',
      value: `${totalGpuAccelerators} GPUs`,
      sub: 'H100 SXM5 & B200 Blackwell',
      icon: <Cpu size={18} className="text-purple-400" />,
      tagColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
    },
    {
      label: 'Aggregate Token Velocity',
      value: aggregateTokensPerSecFormatted,
      sub: 'Multi-head paged attention',
      icon: <Zap size={18} className="text-cyan-400" />,
      tagColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
    },
    {
      label: 'Sustained Compute Util',
      value: `${averageComputeUtilizationPercent.toFixed(1)}%`,
      sub: 'FP8 tensor core operations',
      icon: <Activity size={18} className="text-emerald-400" />,
      tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    },
    {
      label: 'Scheduler Engine',
      value: isContinuousBatchingActive ? 'vLLM Paged' : 'Static',
      sub: 'Sub-millisecond queue latency',
      icon: <CheckCircle2 size={18} className="text-indigo-400" />,
      tagColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 z-10">
      {metrics.map((m, idx) => (
        <div
          key={idx}
          style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
          className="p-4 rounded-xl border flex items-center justify-between shadow-sm"
        >
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400">{m.label}</div>
            <div className="text-2xl font-mono font-bold mt-1 text-slate-100">{m.value}</div>
            <div className="text-xs text-slate-400 mt-0.5">{m.sub}</div>
          </div>
          <div className={`p-3 rounded-lg border ${m.tagColor}`}>{m.icon}</div>
        </div>
      ))}
    </div>
  );
};
