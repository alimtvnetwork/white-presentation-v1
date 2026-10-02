import React from 'react';
import type { CaseStudyResultItem } from '../../../types/enterpriseArchetypes';
import { Sparkles } from 'lucide-react';

interface CaseStudyResultPillProps {
  result: CaseStudyResultItem;
}

export const CaseStudyResultPill: React.FC<CaseStudyResultPillProps> = ({ result }) => {
  const isHeadline = Boolean(result.isHeadlineMetric);

  return (
    <div
      className={`p-4 rounded-2xl border transition-all ${
        isHeadline
          ? 'plane-2-elevated bg-emerald-500/10 border-emerald-500/40 shadow-emerald-950/20'
          : 'plane-1-raised bg-slate-900/50 border-slate-800'
      }`}
    >
      <div className="flex items-center justify-between mb-1">
        <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs uppercase tracking-wider">
          {result.label}
        </span>
        {isHeadline && (
          <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/30 font-bold">
            <Sparkles size={10} /> Headline KPI
          </span>
        )}
      </div>

      <div style={{ color: 'var(--pres-accent)' }} className="font-ubuntu text-3xl font-black mb-1">
        {result.metricValue}
      </div>

      {result.context && (
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-xs">
          {result.context}
        </p>
      )}
    </div>
  );
};
