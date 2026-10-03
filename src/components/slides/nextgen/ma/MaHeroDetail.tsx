import React from 'react';
import type { SynergyMilestone, IntegrationStreamProgress } from '../../../../types/nextGenArchetypes';
import { DollarSign, TrendingUp, ShieldCheck, CheckCircle2, ArrowUpRight, Scale } from 'lucide-react';

interface MaHeroDetailProps {
  milestone: SynergyMilestone;
  stepIndex: number;
  streams: IntegrationStreamProgress[];
}

export const MaHeroDetail: React.FC<MaHeroDetailProps> = ({ milestone, stepIndex, streams }) => {
  return (
    <div
      style={{
        backgroundColor: 'var(--pres-bg-card)',
        borderColor: 'var(--pres-border-hover)',
        color: 'var(--pres-text)',
      }}
      className="col-span-7 plane-1-raised rounded-3xl p-7 border flex flex-col justify-between h-full bg-gradient-to-br from-emerald-500/10 via-transparent to-sky-500/5 relative overflow-hidden"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-sm font-bold uppercase tracking-widest px-3.5 py-1 rounded-full bg-emerald-600/20 text-slate-900 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-2">
            <DollarSign size={16} className="text-emerald-400" />
            Active Integration Phase 0{stepIndex + 1}
          </span>
          <span className={`font-mono text-sm px-3 py-1 rounded-full border flex items-center gap-1.5 font-bold ${
            milestone.isEpsAccretive
              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
              : 'bg-sky-500/10 text-sky-400 border-sky-500/20'
          }`}>
            <CheckCircle2 size={15} /> {milestone.isEpsAccretive ? 'EPS Accretive Realization' : 'EBITDA Margin Baseline'}
          </span>
        </div>

        <h2 className="text-4xl lg:text-[42px] font-black font-ubuntu leading-tight tracking-tight mb-2 text-slate-900 dark:text-white">
          {milestone.phaseName}
        </h2>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-sm mb-6 flex items-center gap-3">
          <span className="px-2.5 py-1 rounded bg-black/20 dark:bg-white/5 border border-white/5 font-semibold text-emerald-300">
            {milestone.targetQuarter}
          </span>
          <span>Target Run-Rate: ${milestone.projectedSavingsMillionUsd}M</span>
        </p>

        {/* Hero KPI Stat Banner */}
        <div className="p-5 rounded-2xl bg-black/20 dark:bg-black/40 border border-white/10 mb-6 flex items-center justify-between">
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider block mb-1">
              Delivered EBITDA Savings
            </span>
            <div className="text-5xl lg:text-6xl font-black font-mono tracking-tight text-slate-900 dark:text-emerald-400">
              +${milestone.actualSavingsMillionUsd}M
            </div>
          </div>
          <div className="w-[1px] h-16 bg-slate-700/50" />
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider block mb-1">
              Synergy Execution Beat
            </span>
            <div className="text-5xl lg:text-6xl font-black font-mono tracking-tight text-slate-900 dark:text-sky-400">
              +{(milestone.actualSavingsMillionUsd - milestone.projectedSavingsMillionUsd).toFixed(1)}M
            </div>
          </div>
          <div className="w-[1px] h-16 bg-slate-700/50" />
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider block mb-1">
              Phase Status
            </span>
            <div className="text-5xl lg:text-6xl font-black font-mono tracking-tight text-slate-900 dark:text-violet-400">
              {milestone.isMilestoneAchieved ? '100%' : 'IN-PROG'}
            </div>
          </div>
        </div>

        {/* Primary Value Driver */}
        <div className="p-4 rounded-2xl bg-black/10 dark:bg-white/5 border border-white/5 font-mono mb-4">
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs uppercase tracking-wider block mb-1">
            Primary Value Capture Driver
          </span>
          <p className="text-base font-semibold text-slate-900 dark:text-slate-200">
            {milestone.primaryDriver}
          </p>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-700/40 flex items-center justify-between font-mono text-sm">
        <span className="flex items-center gap-2 text-slate-700 dark:text-emerald-400">
          <TrendingUp size={16} /> Net Synergies Factored into LTM Financial Guidance
        </span>
        <span className="flex items-center gap-2 text-slate-700 dark:text-sky-400">
          <Scale size={16} /> Clean Room Compliant Post-Merger Operational Governance
        </span>
      </div>
    </div>
  );
};
