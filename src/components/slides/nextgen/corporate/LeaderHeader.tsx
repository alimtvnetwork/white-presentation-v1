import React from 'react';
import { Users, CheckCircle2 } from 'lucide-react';

interface LeaderHeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  signoff?: {
    reviewer: string;
    reviewerTitle: string;
    isApproved: boolean;
  };
  isDark?: boolean;
}

export const LeaderHeader: React.FC<LeaderHeaderProps> = ({
  kicker,
  title,
  subtitle,
  signoff,
  isDark,
}) => (
  <div className="z-10 flex items-start justify-between gap-8 mb-4">
    <div>
      <div className="flex items-center gap-3 mb-2.5">
        <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full inline-flex items-center gap-2 bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">
          <Users size={13} className="text-violet-500" />
          {kicker || 'EXECUTIVE LEADERSHIP'}
        </span>
        {signoff && signoff.isApproved ? (
          <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5 font-bold">
            <CheckCircle2 size={13} className="text-emerald-500" />
            Approved by {signoff.reviewer} ({signoff.reviewerTitle})
          </span>
        ) : null}
      </div>
      <h1
        style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
        className="text-4xl lg:text-5xl font-ubuntu font-bold leading-tight tracking-tight mb-2"
      >
        {title || 'Architectural Rigor & Enterprise Strategy'}
      </h1>
      <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-5xl leading-relaxed">
        {subtitle || 'Co-equal leadership alignment uniting platform precision with customer realization'}
      </p>
    </div>

    <div className={`plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 font-mono text-xs flex items-center gap-3 ${
      isDark ? 'bg-slate-900/60' : 'bg-slate-100/90'
    }`}>
      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
      <span className="text-slate-800 dark:text-slate-200 font-bold">Executive Board Alignment</span>
    </div>
  </div>
);
