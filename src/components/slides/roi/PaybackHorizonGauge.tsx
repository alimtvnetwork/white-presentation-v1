import React from 'react';

interface PaybackGaugeProps {
  paybackMonths: number;
  netRoiPercent?: number;
  initialInvestment?: number | string;
  annualSavings?: number | string;
  currencySymbol?: string;
}

export const PaybackHorizonGauge: React.FC<PaybackGaugeProps> = ({
  paybackMonths,
  netRoiPercent = 384,
}) => {
  const safeMonths = Math.max(0.1, paybackMonths);
  const progressPercent = Math.min(100, Math.round((safeMonths / 12) * 100));

  return (
    <div className="plane-2-elevated p-5 rounded-3xl border border-emerald-500/30 bg-slate-900/60 shadow-lg shadow-emerald-950/20">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <h4 className="font-ubuntu text-sm font-bold text-slate-100 uppercase tracking-wider">
            Payback Horizon & Capital Recovery Progress
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
            {safeMonths.toFixed(1)} Months to Full Amortization
          </span>
          <span className="font-mono text-xs font-bold text-emerald-300 bg-emerald-500/20 px-2.5 py-0.5 rounded-full">
            Net ROI: +{netRoiPercent}%
          </span>
        </div>
      </div>

      <div className="relative w-full h-3 bg-slate-950 rounded-full overflow-hidden border border-slate-800 my-2">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 rounded-full transition-all duration-700"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="grid grid-cols-3 gap-2 mt-3 pt-2 border-t border-slate-800/80 font-mono text-[11px]">
        <div className="text-slate-400">
          <span className="text-emerald-400 font-bold block">Phase 1: Capital Outlay</span>
          <span>Deployment & Scaffolding</span>
        </div>
        <div className="text-center text-slate-400">
          <span className="text-teal-300 font-bold block">Phase 2: Breakeven</span>
          <span>Month {safeMonths.toFixed(1)} Realized</span>
        </div>
        <div className="text-right text-slate-400">
          <span className="text-cyan-300 font-bold block">Phase 3: Net Yield</span>
          <span>Compounding Enterprise Margin</span>
        </div>
      </div>
    </div>
  );
};
