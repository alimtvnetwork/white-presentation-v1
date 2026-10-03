import React from 'react';
import { Users, Award } from 'lucide-react';
import type { TestimonialAggregateMetrics } from '../../../../types/nextGenArchetypes';

interface WallHeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  metrics?: TestimonialAggregateMetrics;
}

export const WallHeader: React.FC<WallHeaderProps> = ({
  kicker,
  title,
  subtitle,
  metrics,
}) => (
  <div className="z-10 flex items-start justify-between gap-8 mb-4">
    <div>
      <div className="flex items-center gap-3 mb-2.5">
        <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full inline-flex items-center gap-2 bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">
          <Users size={13} className="text-violet-500" />
          {kicker || 'CLIENT TESTIMONIALS'}
        </span>
      </div>
      <h1
        style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
        className="text-4xl lg:text-5xl font-ubuntu font-bold leading-tight tracking-tight mb-2"
      >
        {title || 'Enterprise Customer Trust & Verified Impact'}
      </h1>
      <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-5xl leading-relaxed">
        {subtitle || 'Realized business outcomes and engineering testimonials across Fortune 500 deployments'}
      </p>
    </div>

    {metrics ? (
      <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 font-mono text-xs flex items-center gap-3">
        <Award size={18} className="text-violet-500" />
        <div>
          <span className="text-slate-500 uppercase text-[10px] block">Verified SLA</span>
          <span className="text-emerald-400 font-bold text-sm">{metrics.verifiedUptimeSla}</span>
        </div>
      </div>
    ) : null}
  </div>
);
