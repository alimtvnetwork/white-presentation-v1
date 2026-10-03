import React from 'react';
import { Rocket, Gauge } from 'lucide-react';

interface DoraHeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  deploysPerDay: number;
  leadTimeHours: number;
  isElite: boolean;
  isEditMode: boolean;
  onTitleChange: (v: string) => void;
  onSubtitleChange: (v: string) => void;
}

export const DoraHeader: React.FC<DoraHeaderProps> = ({
  kicker,
  title,
  subtitle,
  deploysPerDay,
  leadTimeHours,
  isElite,
  isEditMode,
  onTitleChange,
  onSubtitleChange,
}) => {
  return (
    <div className="z-10 flex items-start justify-between">
      <div>
        <div className="flex items-center gap-3 mb-2.5">
          <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
            <Rocket size={16} className="text-amber-900 dark:text-amber-400" />
            {kicker || 'VALUE STREAM ENGINEERING & DORA METRICS'}
          </span>
          <span className="font-mono text-sm px-3 py-1 rounded-full bg-emerald-500/10 text-slate-900 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5">
            <Gauge size={15} className="text-emerald-400" />
            {isElite ? 'DORA Elite Tier Classification' : 'High Velocity Tier'}
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="text-4xl lg:text-5xl font-ubuntu font-bold leading-tight tracking-tight mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => onTitleChange(e.currentTarget.textContent || '')}
        >
          {title || 'DORA Delivery Flywheel & Flow Metrics Engine'}
        </h1>
        <p
          style={{ color: 'var(--pres-text-muted)' }}
          className="font-poppins text-base max-w-4xl leading-relaxed"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => onSubtitleChange(e.currentTarget.textContent || '')}
        >
          {subtitle || 'Continuous Automated Flow: Sub-Hour Commit-to-Production, Flow Efficiency, and Fast Recovery'}
        </p>
      </div>

      <div className="plane-1-raised p-3.5 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-6 font-mono">
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            Deploy Frequency
          </span>
          <span className="text-xl font-bold text-slate-900 dark:text-emerald-400">{deploysPerDay}/Day</span>
        </div>
        <div className="w-[1px] h-8 bg-slate-700/50" />
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            Lead Time
          </span>
          <span className="text-xl font-bold text-slate-900 dark:text-sky-400">{leadTimeHours} Hours</span>
        </div>
        <div className="w-[1px] h-8 bg-slate-700/50" />
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            DORA Status
          </span>
          <span className="text-xl font-bold text-slate-900 dark:text-emerald-400">ELITE</span>
        </div>
      </div>
    </div>
  );
};
