import React from 'react';
import { Cpu, Sparkles } from 'lucide-react';
import type { FlywheelAccelerationBanner } from '../../../../types/modern/transformationTypes';

interface AiFlywheelHeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  isEditMode?: boolean;
  onEditTitle?: (val: string) => void;
  onEditSubtitle?: (val: string) => void;
  modelFamilyName?: string;
  telemetry: FlywheelAccelerationBanner;
}

export const AiFlywheelHeader: React.FC<AiFlywheelHeaderProps> = ({
  kicker,
  title,
  subtitle,
  isEditMode,
  onEditTitle,
  onEditSubtitle,
  modelFamilyName,
  telemetry,
}) => (
  <div className="z-10 flex items-start justify-between">
    <div>
      <div className="flex items-center gap-3 mb-2.5">
        <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
          <Cpu size={16} className="text-violet-500" />
          {kicker || 'ENTERPRISE AI ACCELERATION'}
        </span>
        <span className="font-mono text-sm px-3.5 py-1 rounded-full bg-violet-500/10 text-slate-900 dark:text-violet-300 border border-violet-500/20 flex items-center gap-1.5 font-bold">
          <Sparkles size={14} className="text-violet-500" />
          Model: {modelFamilyName || 'Sovereign-Llama-3.3-70B-Enterprise'}
        </span>
      </div>

      <h1
        style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
        className="text-4xl lg:text-5xl font-ubuntu font-bold leading-tight tracking-tight mb-2"
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => onEditTitle?.(e.currentTarget.textContent || '')}
      >
        {title || 'Enterprise Generative AI Data Flywheel Lifecycle'}
      </h1>

      <p
        style={{ color: 'var(--pres-text-muted)' }}
        className="font-poppins text-base max-w-5xl leading-relaxed"
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => onEditSubtitle?.(e.currentTarget.textContent || '')}
      >
        {subtitle || 'Closed-loop pipeline transforming runtime telemetry into continuous model fine-tuning and inference'}
      </p>
    </div>

    <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-6 font-mono text-sm">
      <div>
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
          Daily Tokens
        </span>
        <span className="text-2xl font-bold text-slate-900 dark:text-violet-400">
          {telemetry.dailyProcessedTokens}
        </span>
      </div>
      <div className="w-[1px] h-8 bg-slate-700/50" />
      <div>
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
          Perplexity
        </span>
        <span className="text-2xl font-bold text-slate-900 dark:text-emerald-400">
          {telemetry.modelPerplexityScore}
        </span>
      </div>
      <div className="w-[1px] h-8 bg-slate-700/50" />
      <div>
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
          p99 Latency
        </span>
        <span className="text-2xl font-bold text-slate-900 dark:text-sky-400">
          {telemetry.p99LatencyMs}ms
        </span>
      </div>
    </div>
  </div>
);
