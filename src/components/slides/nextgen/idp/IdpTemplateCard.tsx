import React from 'react';
import type { GoldenPathTemplate } from '../../../../types/nextGenArchetypes';
import { Box, Clock, CheckCircle2, Code2, ArrowRight } from 'lucide-react';

interface IdpTemplateCardProps {
  template: GoldenPathTemplate;
  index: number;
  isActive: boolean;
  isCompleted: boolean;
  onSelect: (index: number) => void;
  onHover: (index: number | null) => void;
}

export const IdpTemplateCard: React.FC<IdpTemplateCardProps> = ({
  template,
  index,
  isActive,
  isCompleted,
  onSelect,
  onHover,
}) => {
  const kineticClass = isActive
    ? 'step-phase-active opacity-100 ring-2 ring-violet-500/70 shadow-2xl scale-[1.02]'
    : isCompleted
      ? 'step-phase-past opacity-75'
      : 'step-phase-future opacity-40 blur-[1.25px]';

  return (
    <div
      onClick={() => onSelect(index)}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      style={{
        backgroundColor: 'var(--pres-bg-card)',
        borderColor: isActive ? 'var(--pres-border-hover)' : 'var(--pres-border)',
        color: 'var(--pres-text)',
      }}
      className={`plane-1-raised rounded-2xl p-4 border flex items-center justify-between transition-all duration-300 cursor-pointer ${kineticClass}`}
    >
      <div className="flex items-center gap-3.5">
        <div
          className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-sm ${
            isActive
              ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/30'
              : isCompleted
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'bg-black/20 dark:bg-white/5 text-slate-400'
          }`}
        >
          {isCompleted ? <CheckCircle2 size={18} className="text-emerald-400" /> : `0${index + 1}`}
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-sm font-bold text-slate-900 dark:text-slate-100">{template.name}</span>
            <span className="font-mono text-xs px-2 py-0.5 rounded-full bg-violet-500/10 text-slate-900 dark:text-violet-300 border border-violet-500/20">
              {template.language}
            </span>
          </div>
          <p style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono flex items-center gap-2">
            <span className="flex items-center gap-1"><Clock size={12} className="text-sky-400" /> ~{template.estimatedSetupMinutes}m SLA</span>
            <span>•</span>
            <span className="text-slate-700 dark:text-emerald-400 font-semibold">{template.usageCount} Live Repos</span>
          </p>
        </div>
      </div>
      <ArrowRight size={16} className={`transition-transform ${isActive ? 'text-violet-400 translate-x-1' : 'text-slate-600'}`} />
    </div>
  );
};
