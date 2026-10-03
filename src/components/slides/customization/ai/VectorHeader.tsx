import React from 'react';
import { Cpu, Zap, Activity, UserCheck } from 'lucide-react';

export interface VectorHeaderProps {
  kicker?: string;
  title: string;
  subtitle: string;
  dimension: number;
  metric: string;
  vectorCount: string;
  p99LatencyMs: number;
  isGpuAccelerated: boolean;
  isEditMode: boolean;
  onUpdateTitle: (val: string) => void;
  onUpdateSubtitle: (val: string) => void;
}

export const VectorHeader: React.FC<VectorHeaderProps> = ({
  kicker = 'AI INFRASTRUCTURE & RETRIEVAL',
  title,
  subtitle,
  dimension,
  metric,
  vectorCount,
  p99LatencyMs,
  isGpuAccelerated,
  isEditMode,
  onUpdateTitle,
  onUpdateSubtitle,
}) => (
  <div className="z-10 flex items-start justify-between gap-6">
    <div className="flex-1">
      <div className="flex items-center gap-3 mb-2 flex-wrap">
        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30 flex items-center gap-1.5">
          <Cpu size={13} /> {kicker}
        </span>
        <span className="font-mono text-xs text-emerald-800 dark:text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
          <UserCheck size={11} /> Alim Ul Karim (Chief Software Engineer)
        </span>
        {isGpuAccelerated && (
          <span className="font-mono text-xs text-cyan-800 dark:text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20 flex items-center gap-1">
            <Zap size={11} /> GPU Accelerated
          </span>
        )}
      </div>
      <h1
        style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
        className="font-ubuntu text-[38px] font-black tracking-tight leading-none mb-2"
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => onUpdateTitle(e.currentTarget.textContent || '')}
      >
        {title}
      </h1>
      <p
        style={{ color: 'var(--pres-text-muted)' }}
        className="font-poppins text-base max-w-4xl leading-relaxed"
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => onUpdateSubtitle(e.currentTarget.textContent || '')}
      >
        {subtitle}
      </p>
    </div>

    <div className="plane-1-raised px-4 py-3 rounded-2xl border border-slate-700/60 dark:border-slate-800 bg-slate-900/60 flex items-center gap-5 font-mono text-xs">
      <div>
        <div className="text-[10px] text-slate-400 uppercase tracking-wider">Vectors</div>
        <div className="text-amber-900 dark:text-amber-300 font-bold text-base">{vectorCount}</div>
      </div>
      <div className="w-px h-8 bg-slate-700/40" />
      <div>
        <div className="text-[10px] text-slate-400 uppercase tracking-wider">Dims & Metric</div>
        <div className="text-cyan-400 font-bold text-xs">{dimension}d · {metric}</div>
      </div>
      <div className="w-px h-8 bg-slate-700/40" />
      <div>
        <div className="text-[10px] text-slate-400 uppercase tracking-wider">P99 Latency</div>
        <div className="text-emerald-400 font-bold text-base flex items-center gap-1">
          <Activity size={12} /> {p99LatencyMs}ms
        </div>
      </div>
    </div>
  </div>
);
