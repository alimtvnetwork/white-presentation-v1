import React from 'react';
import type { SaaSExecutiveHealthStrip } from '../../../../types/modern/saasFinancialTypes';
import { TrendingUp, Sparkles, Target, Zap } from 'lucide-react';

interface LtvCacGaugeProps {
  healthStrip: SaaSExecutiveHealthStrip;
}

export const LtvCacGauge: React.FC<LtvCacGaugeProps> = ({ healthStrip }) => (
  <div className="plane-1-raised rounded-2xl p-4 px-6 border border-slate-700/50 flex items-center justify-between gap-6 z-10 font-mono text-sm">
    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
        <TrendingUp size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">ARR Velocity</div>
        <div className="text-xl font-ubuntu font-black text-emerald-400">{healthStrip.annualRecurringRevenue}</div>
      </div>
    </div>

    <div className="h-8 w-px bg-slate-700/60" />

    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
        <Target size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">Rule of 40</div>
        <div className="text-xl font-ubuntu font-black text-indigo-400">{healthStrip.ruleOfFortyScore}%</div>
      </div>
    </div>

    <div className="h-8 w-px bg-slate-700/60" />

    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
        <Zap size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">Net Retention (NRR)</div>
        <div className="text-xl font-ubuntu font-black text-cyan-400">{healthStrip.netRevenueRetentionPercentage}%</div>
      </div>
    </div>

    <div className="h-8 w-px bg-slate-700/60" />

    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
        <Sparkles size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">LTV / CAC Ratio</div>
        <div className="text-xl font-ubuntu font-black text-amber-400">{healthStrip.lifetimeValueToCacRatio}x</div>
      </div>
    </div>

    {healthStrip.isTopDecilePerformance ? (
      <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
        <Sparkles size={13} />
        Top Decile
      </div>
    ) : null}
  </div>
);
