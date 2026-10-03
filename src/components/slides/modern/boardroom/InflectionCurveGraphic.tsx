import React from 'react';
import type { BoardroomTamSummary } from '../../../../types/modern/boardroomStrategyTypes';
import { Globe, TrendingUp, PieChart, DollarSign, Award } from 'lucide-react';

interface InflectionCurveGraphicProps {
  tamSummary: BoardroomTamSummary;
}

export const InflectionCurveGraphic: React.FC<InflectionCurveGraphicProps> = ({ tamSummary }) => (
  <div className="plane-1-raised rounded-2xl p-4 px-6 border border-slate-700/50 flex items-center justify-between gap-6 z-10 font-mono text-sm">
    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
        <Globe size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">Total Market (TAM)</div>
        <div className="text-xl font-ubuntu font-black text-purple-400">{tamSummary.totalAddressableMarket}</div>
      </div>
    </div>

    <div className="h-8 w-px bg-slate-700/60" />

    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
        <TrendingUp size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">Growth Velocity</div>
        <div className="text-xl font-ubuntu font-black text-emerald-400">{tamSummary.compoundAnnualGrowthRate}</div>
      </div>
    </div>

    <div className="h-8 w-px bg-slate-700/60" />

    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
        <PieChart size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">Current Penetration</div>
        <div className="text-xl font-ubuntu font-black text-cyan-400">{tamSummary.currentMarketPenetration}</div>
      </div>
    </div>

    <div className="h-8 w-px bg-slate-700/60" />

    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
        <DollarSign size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">Projected Run-Rate</div>
        <div className="text-xl font-ubuntu font-black text-indigo-400">{tamSummary.projectedAnnualRevenue}</div>
      </div>
    </div>

    {tamSummary.isBoardApproved ? (
      <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
        <Award size={13} />
        Board Approved
      </div>
    ) : null}
  </div>
);
