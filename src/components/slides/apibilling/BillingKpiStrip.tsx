import React from 'react';
import { DollarSign, TrendingUp, Layers, ShieldCheck } from 'lucide-react';

interface BillingKpiStripProps {
  totalMrrFormatted: string;
  grossMarginOverallPercent: number;
  tiersCount: number;
  isRealtimeMeteringActive: boolean;
}

export const BillingKpiStrip: React.FC<BillingKpiStripProps> = ({
  totalMrrFormatted,
  grossMarginOverallPercent,
  tiersCount,
  isRealtimeMeteringActive,
}) => {
  const metrics = [
    {
      label: 'Monthly Recurring Revenue',
      value: totalMrrFormatted,
      sub: 'Base subscription subscriptions',
      icon: <DollarSign size={18} className="text-emerald-400" />,
      tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    },
    {
      label: 'Blended Gross Margin',
      value: `${grossMarginOverallPercent.toFixed(1)}%`,
      sub: 'Infra & egress deduplicated',
      icon: <TrendingUp size={18} className="text-cyan-400" />,
      tagColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
    },
    {
      label: 'Commercial Monetization Tiers',
      value: `${tiersCount} Tiers`,
      sub: 'Self-serve to hyperscale custom',
      icon: <Layers size={18} className="text-indigo-400" />,
      tagColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
    },
    {
      label: 'Metering Engine State',
      value: isRealtimeMeteringActive ? 'Real-Time' : 'Batch',
      sub: 'Sub-second quota enforcement',
      icon: <ShieldCheck size={18} className="text-purple-400" />,
      tagColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
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
