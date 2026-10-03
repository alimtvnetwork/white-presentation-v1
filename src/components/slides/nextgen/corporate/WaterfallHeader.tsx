import React from 'react';
import { DollarSign, BarChart3 } from 'lucide-react';

interface WaterfallHeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  currencySymbol?: string;
  unitMagnitude?: string;
}

export const WaterfallHeader: React.FC<WaterfallHeaderProps> = ({
  kicker,
  title,
  subtitle,
  currencySymbol = '$',
  unitMagnitude = 'Million USD',
}) => (
  <div className="z-10 flex items-start justify-between gap-8 mb-4">
    <div>
      <div className="flex items-center gap-3 mb-2.5">
        <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full inline-flex items-center gap-2 bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">
          <DollarSign size={13} className="text-violet-500" />
          {kicker || 'FINANCIAL WATERFALL'}
        </span>
        <span className="font-mono text-xs px-3 py-1 rounded-full bg-slate-500/10 text-slate-700 dark:text-slate-300 border border-slate-500/20 flex items-center gap-1.5 font-bold">
          <BarChart3 size={13} />
          Denominated in {currencySymbol} ({unitMagnitude})
        </span>
      </div>
      <h1
        style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
        className="text-4xl lg:text-5xl font-ubuntu font-bold leading-tight tracking-tight mb-2"
      >
        {title || 'Opportunity Cost & Financial Value Waterfall'}
      </h1>
      <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-5xl leading-relaxed">
        {subtitle || 'Quantifying friction reduction and efficiency gains delivering verified net ROI'}
      </p>
    </div>
  </div>
);
