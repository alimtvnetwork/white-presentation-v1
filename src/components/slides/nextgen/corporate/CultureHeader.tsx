import React from 'react';
import { Compass, Flame } from 'lucide-react';

interface CultureHeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  cultureVision?: string;
  isDark?: boolean;
}

export const CultureHeader: React.FC<CultureHeaderProps> = ({
  kicker,
  title,
  subtitle,
  cultureVision,
  isDark,
}) => (
  <div className="z-10 flex items-start justify-between gap-8 mb-4">
    <div className="max-w-4xl">
      <div className="flex items-center gap-3 mb-2.5">
        <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full inline-flex items-center gap-2 bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">
          <Compass size={13} className="text-violet-500" />
          {kicker || 'ENGINEERING CULTURE'}
        </span>
      </div>
      <h1
        style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
        className="text-4xl lg:text-5xl font-ubuntu font-bold leading-tight tracking-tight mb-2"
      >
        {title || 'High-Rigor Engineering Culture & Operating Tenets'}
      </h1>
      <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base leading-relaxed">
        {subtitle || 'Codified rituals, deterministic quality gates, and asynchronous craftsmanship'}
      </p>
    </div>

    {cultureVision ? (
      <div className={`plane-1-raised p-4 rounded-2xl border border-violet-500/20 max-w-sm ${
        isDark ? 'bg-slate-900/60' : 'bg-slate-100/90'
      }`}>
        <div className="flex items-center gap-2 mb-1.5 font-mono text-[11px] font-bold text-violet-700 dark:text-violet-300 uppercase">
          <Flame size={14} className="text-violet-500" />
          Culture North Star
        </div>
        <p className="font-poppins text-xs text-slate-700 dark:text-slate-300 leading-snug">
          {cultureVision}
        </p>
      </div>
    ) : null}
  </div>
);
