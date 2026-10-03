import React from 'react';
import type { CustomerExperienceDeltaSummary } from '../../../../types/modern/boardroomStrategyTypes';
import { Heart, Award, Clock, ArrowDownRight, Sparkles } from 'lucide-react';

interface SentimentMeterProps {
  deltaSummary: CustomerExperienceDeltaSummary;
}

export const SentimentMeter: React.FC<SentimentMeterProps> = ({ deltaSummary }) => (
  <div className="plane-1-raised rounded-2xl p-4 px-6 border border-slate-700/50 flex items-center justify-between gap-6 z-10 font-mono text-sm">
    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
        <Heart size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">Consolidated CSAT</div>
        <div className="text-xl font-ubuntu font-black text-emerald-400">{deltaSummary.consolidatedCsatScore} / 5.0</div>
      </div>
    </div>

    <div className="h-8 w-px bg-slate-700/60" />

    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
        <Award size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">Net Promoter Score</div>
        <div className="text-xl font-ubuntu font-black text-purple-400">+{deltaSummary.netPromoterScore} NPS</div>
      </div>
    </div>

    <div className="h-8 w-px bg-slate-700/60" />

    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
        <Clock size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">Onboarding Time</div>
        <div className="text-xl font-ubuntu font-black text-cyan-400">{deltaSummary.averageOnboardingHours} Hours</div>
      </div>
    </div>

    <div className="h-8 w-px bg-slate-700/60" />

    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
        <ArrowDownRight size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">Monthly Churn</div>
        <div className="text-xl font-ubuntu font-black text-amber-400">{deltaSummary.monthlyCustomerChurnPercentage}%</div>
      </div>
    </div>

    {deltaSummary.isSatisfactionExceedingBenchmark ? (
      <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
        <Sparkles size={13} />
        Top 1% Decile
      </div>
    ) : null}
  </div>
);
