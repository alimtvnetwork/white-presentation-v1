import React from 'react';
import { Quote, CheckCircle2 } from 'lucide-react';
import type { ClientTestimonial } from '../../../../types/nextGenArchetypes';

interface TestimonialCardProps {
  testimonial: ClientTestimonial;
  isDark?: boolean;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, isDark }) => (
  <div className="plane-1-raised p-6 rounded-2xl border border-slate-700/60 bg-slate-900/30 flex flex-col justify-between h-full">
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-violet-500/20 text-violet-700 dark:text-violet-300 font-bold">
          {testimonial.industryVertical}
        </span>
        {testimonial.isVerifiedClient ? (
          <span className="font-mono text-[11px] text-emerald-400 flex items-center gap-1">
            <CheckCircle2 size={12} /> Verified Enterprise
          </span>
        ) : null}
      </div>

      <div className="flex items-start gap-2 mb-4">
        <Quote size={16} className="text-violet-500 shrink-0 mt-0.5" />
        <p className="font-poppins text-xs italic leading-relaxed text-slate-700 dark:text-slate-300">
          "{testimonial.quoteText}"
        </p>
      </div>

      <div className="mb-4">
        <h4 className="font-ubuntu text-sm font-bold text-slate-900 dark:text-white">
          {testimonial.clientName}
        </h4>
        <p className="font-poppins text-[11px] text-slate-500">
          {testimonial.clientTitle} — {testimonial.enterpriseCompany}
        </p>
      </div>
    </div>

    <div className="pt-3 border-t border-slate-700/40 flex items-center justify-between font-mono">
      <span className="text-[11px] text-slate-500">{testimonial.roiMetricLabel}</span>
      <span className={`text-sm font-bold ${isDark ? 'text-violet-300' : 'text-violet-800'}`}>
        {testimonial.quantitativeRoi}
      </span>
    </div>
  </div>
);
