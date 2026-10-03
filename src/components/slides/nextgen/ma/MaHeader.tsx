import React from 'react';
import { Briefcase, TrendingUp } from 'lucide-react';

interface MaHeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  enterpriseValue: number;
  runRateSynergies: number;
  ebitdaMultiple: number;
  isEditMode: boolean;
  onTitleChange: (v: string) => void;
  onSubtitleChange: (v: string) => void;
}

export const MaHeader: React.FC<MaHeaderProps> = ({
  kicker,
  title,
  subtitle,
  enterpriseValue,
  runRateSynergies,
  ebitdaMultiple,
  isEditMode,
  onTitleChange,
  onSubtitleChange,
}) => {
  return (
    <div className="z-10 flex items-start justify-between">
      <div>
        <div className="flex items-center gap-3 mb-2.5">
          <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
            <Briefcase size={16} className="text-emerald-500" />
            {kicker || 'EXECUTIVE M&A SYNERGY ENGINE'}
          </span>
          <span className="font-mono text-sm px-3 py-1 rounded-full bg-emerald-500/10 text-slate-900 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5">
            <TrendingUp size={15} className="text-emerald-400" />
            EBITDA Waterfall & EPS Accretion Realization
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="text-4xl lg:text-5xl font-ubuntu font-bold leading-tight tracking-tight mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => onTitleChange(e.currentTarget.textContent || '')}
        >
          {title || 'M&A Valuation & Synergy Realization Waterfall'}
        </h1>
        <p
          style={{ color: 'var(--pres-text-muted)' }}
          className="font-poppins text-base max-w-4xl leading-relaxed"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => onSubtitleChange(e.currentTarget.textContent || '')}
        >
          {subtitle || 'Post-Merger Value Creation: Day 1 Harmonization to Year 2 Cloud & Commercial Integration'}
        </p>
      </div>

      <div className="plane-1-raised p-3.5 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-6 font-mono">
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            Enterprise Value
          </span>
          <span className="text-xl font-bold text-slate-900 dark:text-emerald-400">${enterpriseValue}M</span>
        </div>
        <div className="w-[1px] h-8 bg-slate-700/50" />
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            Run-Rate Synergy
          </span>
          <span className="text-xl font-bold text-slate-900 dark:text-sky-400">+${runRateSynergies}M</span>
        </div>
        <div className="w-[1px] h-8 bg-slate-700/50" />
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            EV / EBITDA
          </span>
          <span className="text-xl font-bold text-slate-900 dark:text-violet-400">{ebitdaMultiple}x</span>
        </div>
      </div>
    </div>
  );
};
