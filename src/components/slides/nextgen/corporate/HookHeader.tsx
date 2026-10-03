import React from 'react';
import { Sparkles, Quote } from 'lucide-react';
import type { ExecutiveHookQuote } from '../../../../types/nextGenArchetypes';

interface HookHeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  quote?: ExecutiveHookQuote;
  inflectionDate?: string;
  isDark?: boolean;
}

export const HookHeader: React.FC<HookHeaderProps> = ({
  kicker,
  title,
  subtitle,
  quote,
  inflectionDate,
  isDark,
}) => (
  <div className="z-10 flex items-start justify-between gap-8 mb-6">
    <div className="max-w-4xl">
      <div className="flex items-center gap-3 mb-2.5">
        <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full inline-flex items-center gap-2 bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">
          <Sparkles size={13} className="text-violet-500" />
          {kicker || 'EXECUTIVE KEYNOTE'}
        </span>
        {inflectionDate ? (
          <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-slate-500/10 text-slate-700 dark:text-slate-300 border border-slate-500/20">
            Target: {inflectionDate}
          </span>
        ) : null}
      </div>
      <h1
        style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
        className="text-4xl lg:text-5xl font-ubuntu font-bold leading-tight tracking-tight mb-2"
      >
        {title || 'The Sovereign Engineering Imperative'}
      </h1>
      <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base leading-relaxed">
        {subtitle || 'Navigating architectural inflection from fragile pipelines to self-healing platforms'}
      </p>
    </div>

    {quote ? (
      <div className="plane-1-raised p-4 rounded-2xl border border-violet-500/20 max-w-md bg-violet-950/20">
        <div className="flex items-start gap-2 mb-1.5">
          <Quote size={16} className={isDark ? 'text-violet-400 shrink-0' : 'text-violet-700 shrink-0'} />
          <p className="font-poppins text-xs italic leading-relaxed text-slate-800 dark:text-slate-200">
            "{quote.quoteText}"
          </p>
        </div>
        <div className="flex items-center justify-between text-[11px] font-mono mt-2 pt-2 border-t border-violet-500/10">
          <span className="font-bold text-slate-900 dark:text-violet-300">{quote.author}</span>
          <span className="text-slate-600 dark:text-slate-400">{quote.authorTitle}</span>
        </div>
      </div>
    ) : null}
  </div>
);
