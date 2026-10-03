import React from 'react';
import { Compass } from 'lucide-react';
import type { StrategyPortfolioSummary } from '../../../../types/nextGenArchetypes';

interface HorizonHeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  isEditMode?: boolean;
  onEditTitle?: (val: string) => void;
  onEditSubtitle?: (val: string) => void;
  summary: StrategyPortfolioSummary;
}

export const HorizonHeader: React.FC<HorizonHeaderProps> = ({
  kicker,
  title,
  subtitle,
  isEditMode,
  onEditTitle,
  onEditSubtitle,
  summary,
}) => (
  <div className="z-10 flex items-start justify-between">
    <div>
      <div className="flex items-center gap-3 mb-2.5">
        <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
          <Compass size={16} className="text-violet-500" />
          {kicker || 'STRATEGIC PORTFOLIO FRAMEWORK'}
        </span>
        <span className="font-mono text-sm px-3.5 py-1 rounded-full bg-violet-500/10 text-slate-900 dark:text-violet-300 border border-violet-500/20">
          McKinsey 70:20:10 Capital Allocation Standard
        </span>
      </div>
      <h1
        style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
        className="text-4xl lg:text-5xl font-ubuntu font-bold leading-tight tracking-tight mb-2"
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => onEditTitle?.(e.currentTarget.textContent || '')}
      >
        {title || 'Three Horizons Strategic Growth & Capital Allocation Matrix'}
      </h1>
      <p
        style={{ color: 'var(--pres-text-muted)' }}
        className="font-poppins text-base max-w-5xl leading-relaxed"
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => onEditSubtitle?.(e.currentTarget.textContent || '')}
      >
        {subtitle ||
          'Sovereign capital orchestration balancing Horizon 1 core defense, Horizon 2 high-velocity scaling, and Horizon 3 transformational frontier bets.'}
      </p>
    </div>
    <div className="plane-1-raised p-3.5 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-6 font-mono text-sm">
      <div>
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
          Total CapEx
        </span>
        <span className="text-2xl font-bold text-slate-900 dark:text-emerald-400">
          ${summary.totalCapExMillionUsd}M
        </span>
      </div>
      <div className="w-[1px] h-8 bg-slate-700/50" />
      <div>
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
          ROI Multiplier
        </span>
        <span className="text-2xl font-bold text-slate-900 dark:text-sky-400">
          {summary.projectedRoiMultiplier}x
        </span>
      </div>
      <div className="w-[1px] h-8 bg-slate-700/50" />
      <div>
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
          Blended Growth
        </span>
        <span className="text-2xl font-bold text-slate-900 dark:text-violet-400">
          +{summary.blendedGrowthRatePercent}%
        </span>
      </div>
    </div>
  </div>
);
