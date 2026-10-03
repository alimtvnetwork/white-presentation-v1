import React from 'react';
import { Zap, Server, CheckCircle2, Network } from 'lucide-react';

interface LatencyMetricStripProps {
  globalAverageRttMs: number;
  anycastPopsCount: number;
  overallCacheHitPercent: number;
  transitLinksCount: number;
}

export const LatencyMetricStrip: React.FC<LatencyMetricStripProps> = ({
  globalAverageRttMs,
  anycastPopsCount,
  overallCacheHitPercent,
  transitLinksCount,
}) => {
  const metrics = [
    {
      label: 'Global Average RTT',
      value: `${globalAverageRttMs.toFixed(1)} ms`,
      sub: 'Tier-1 BGP Anycast mesh',
      icon: <Zap size={18} className="text-cyan-400" />,
      tagColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
    },
    {
      label: 'Operational Edge POPs',
      value: `${anycastPopsCount} Nodes`,
      sub: 'Multi-continent footprint',
      icon: <Server size={18} className="text-emerald-400" />,
      tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    },
    {
      label: 'Edge Cache Hit Ratio',
      value: `${overallCacheHitPercent.toFixed(1)}%`,
      sub: 'SSD L1/L2 tiered cache',
      icon: <CheckCircle2 size={18} className="text-indigo-400" />,
      tagColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
    },
    {
      label: 'Dedicated Fiber Transits',
      value: `${transitLinksCount} Links`,
      sub: 'Subsea encrypted backbone',
      icon: <Network size={18} className="text-violet-400" />,
      tagColor: 'text-violet-400 bg-violet-500/10 border-violet-500/30',
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
          <div className={`p-3 rounded-lg border ${m.tagColor}`}>
            {m.icon}
          </div>
        </div>
      ))}
    </div>
  );
};
