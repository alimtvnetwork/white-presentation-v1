import React from 'react';
import type { BoardResolutionSummary } from '../../../../types/modern/boardroomStrategyTypes';
import { Award, CheckCircle } from 'lucide-react';

interface MandateHeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  resolutionSummary?: BoardResolutionSummary;
}

export const MandateHeader: React.FC<MandateHeaderProps> = ({
  kicker = 'BOARDROOM ACTION MANDATE',
  title = 'Executive Board Mandate & Capital Allocation Call-to-Action',
  subtitle = 'Unanimous board resolution enacting $24.0M capital allocation for sovereign engineering platforms',
  resolutionSummary,
}) => (
  <header className="z-10 flex items-start justify-between gap-6 mb-4">
    <div>
      <div className="flex items-center gap-3 mb-2">
        <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
          <Award size={14} className="text-emerald-500" />
          {kicker}
        </span>
        {resolutionSummary ? (
          <span className="font-mono text-xs px-3 py-1 rounded-full bg-slate-500/10 text-slate-700 dark:text-slate-300 border border-slate-500/20 font-bold">
            Res: {resolutionSummary.resolutionId}
          </span>
        ) : null}
        {resolutionSummary?.isResolutionAdopted ? (
          <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5 font-bold">
            <CheckCircle size={13} className="text-emerald-500" />
            {resolutionSummary.boardVoteStatus}
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
    {resolutionSummary ? (
      <div className="hidden xl:block text-right">
        <div className="text-xs uppercase text-slate-400 font-mono tracking-wider font-semibold">Capital Tranche</div>
        <div className="font-mono text-xl text-emerald-400 font-black">{resolutionSummary.capitalTrancheAmount}</div>
        <div className="text-xs text-slate-500 font-mono">Target: {resolutionSummary.targetCompletionQuarter}</div>
      </div>
    ) : null}
  </header>
);
