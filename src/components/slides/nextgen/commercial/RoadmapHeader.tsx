import React from 'react';
import { Compass, Users } from 'lucide-react';

interface RoadmapHeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  onboardingTrack?: string;
  engineerPersona?: string;
}

export const RoadmapHeader: React.FC<RoadmapHeaderProps> = ({
  kicker,
  title,
  subtitle,
  onboardingTrack,
  engineerPersona,
}) => (
  <div className="z-10 flex items-start justify-between gap-8 mb-4">
    <div>
      <div className="flex items-center gap-3 mb-2.5">
        <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full inline-flex items-center gap-2 bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">
          <Compass size={13} className="text-violet-500" />
          {kicker || 'ONBOARDING ROADMAP'}
        </span>
        {onboardingTrack ? (
          <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-slate-500/10 text-slate-700 dark:text-slate-300 border border-slate-500/20">
            Track: {onboardingTrack}
          </span>
        ) : null}
      </div>
      <h1
        style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
        className="text-4xl lg:text-5xl font-ubuntu font-bold leading-tight tracking-tight mb-2"
      >
        {title || 'Sprint Engineer Onboarding & Production Readiness'}
      </h1>
      <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-5xl leading-relaxed">
        {subtitle || 'Structured 60-day operational path from repository clone to verified production deployments'}
      </p>
    </div>

    {engineerPersona ? (
      <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 font-mono text-xs flex items-center gap-2.5">
        <Users size={16} className="text-violet-500" />
        <span className="text-slate-800 dark:text-slate-200 font-bold">{engineerPersona}</span>
      </div>
    ) : null}
  </div>
);
