import React from 'react';
import { Sparkles, CheckCircle } from 'lucide-react';

interface JourneyHeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  customerExperienceLead?: string;
  isJourneyValidated?: boolean;
}

export const JourneyHeader: React.FC<JourneyHeaderProps> = ({
  kicker = 'CUSTOMER EXPERIENCE TRANSFORMATION',
  title = 'Customer Experience Journey Transformation & Value Delta',
  subtitle = 'Side-by-side comparison of legacy friction versus autonomous platform workflows driving +74 NPS',
  customerExperienceLead = 'Alim Ul Karim, Chief Software Engineer',
  isJourneyValidated = true,
}) => (
  <header className="z-10 flex items-start justify-between gap-6 mb-4">
    <div>
      <div className="flex items-center gap-3 mb-2">
        <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
          <Sparkles size={14} className="text-emerald-500" />
          {kicker}
        </span>
        {isJourneyValidated ? (
          <span className="font-mono text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20 flex items-center gap-1.5 font-bold">
            <CheckCircle size={13} className="text-blue-500" />
            Empirically Validated
          </span>
        ) : null}
      </div>
      <h1
        style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
        className="text-4xl lg:text-5xl font-ubuntu font-black leading-tight tracking-tight mb-2"
      >
        {title}
      </h1>
      <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-5xl leading-relaxed">
        {subtitle}
      </p>
    </div>
    <div className="hidden xl:block text-right">
      <div className="text-xs uppercase text-slate-400 font-mono tracking-wider font-semibold">CX Executive Lead</div>
      <div className="font-mono text-xs text-emerald-300 font-bold">{customerExperienceLead}</div>
    </div>
  </header>
);
