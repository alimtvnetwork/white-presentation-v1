import React from 'react';
import { ShieldCheck, Users, Star } from 'lucide-react';
import type { TestimonialAggregateMetrics } from '../../../../types/nextGenArchetypes';

interface TestimonialMetricsStripProps {
  metrics: TestimonialAggregateMetrics;
}

export const TestimonialMetricsStrip: React.FC<TestimonialMetricsStripProps> = ({ metrics }) => (
  <div className="z-10 plane-1-raised p-4 px-8 rounded-2xl border border-slate-700/60 bg-slate-900/40 flex items-center justify-between font-mono">
    <div className="flex items-center gap-8">
      <div>
        <span className="text-[10px] text-slate-500 uppercase block">Net Promoter Score</span>
        <span className="text-2xl font-bold text-emerald-400 flex items-center gap-1">
          <Star size={18} />
          +{metrics.npsScore} NPS
        </span>
      </div>

      <div className="w-[1px] h-8 bg-slate-700/50" />

      <div>
        <span className="text-[10px] text-slate-500 uppercase block">Enterprise Clients</span>
        <span className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-1">
          <Users size={18} className="text-violet-400" />
          {metrics.enterpriseClientCount}+
        </span>
      </div>
    </div>

    {metrics.isAuditCertified ? (
      <span className="text-xs px-3.5 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5 font-bold">
        <ShieldCheck size={14} className="text-emerald-500" />
        SOC2 Type II & ISO 27001 Certified
      </span>
    ) : null}
  </div>
);
