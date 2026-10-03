import React from 'react';
import { Bot, Zap } from 'lucide-react';

interface FleetHeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  isEditMode?: boolean;
  onEditTitle?: (val: string) => void;
  onEditSubtitle?: (val: string) => void;
  telemetry: {
    activeAgentsCount: number;
    completedTasksCount: number;
    p95TaskLatencySeconds: number;
    isFleetSynchronized: boolean;
  };
}

export const FleetHeader: React.FC<FleetHeaderProps> = ({
  kicker,
  title,
  subtitle,
  isEditMode,
  onEditTitle,
  onEditSubtitle,
  telemetry,
}) => (
  <div className="z-10 flex items-start justify-between">
    <div>
      <div className="flex items-center gap-3 mb-2.5">
        <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
          <Bot size={16} className="text-violet-500" />
          {kicker || 'AUTONOMOUS MULTI-AGENT SWARM ORCHESTRATION'}
        </span>
        <span className="font-mono text-sm px-3.5 py-1 rounded-full bg-emerald-500/10 text-slate-900 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5">
          <Zap size={14} className="text-emerald-500" />
          Fleet Synchronized ({telemetry.p95TaskLatencySeconds}s p95 Latency)
        </span>
      </div>

      <h1
        style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
        className="text-4xl lg:text-5xl font-ubuntu font-bold leading-tight tracking-tight mb-2"
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => onEditTitle?.(e.currentTarget.textContent || '')}
      >
        {title || 'AI Agent Fleet Topology & Distributed Task Consensus'}
      </h1>

      <p
        style={{ color: 'var(--pres-text-muted)' }}
        className="font-poppins text-base max-w-5xl leading-relaxed"
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => onEditSubtitle?.(e.currentTarget.textContent || '')}
      >
        {subtitle ||
          'Hierarchical multi-agent runtime pairing central supervisor dispatch with sandbox-isolated worker swarms, token-budget safety governors, and telemetry feedback.'}
      </p>
    </div>

    <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-6 font-mono text-sm">
      <div>
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
          Active Swarm
        </span>
        <span className="text-2xl font-bold text-slate-900 dark:text-emerald-400">
          {telemetry.activeAgentsCount} Agents
        </span>
      </div>
      <div className="w-[1px] h-8 bg-slate-700/50" />
      <div>
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
          Completed Tasks
        </span>
        <span className="text-2xl font-bold text-slate-900 dark:text-sky-400">
          {telemetry.completedTasksCount.toLocaleString()}
        </span>
      </div>
      <div className="w-[1px] h-8 bg-slate-700/50" />
      <div>
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
          P95 Task Latency
        </span>
        <span className="text-2xl font-bold text-slate-900 dark:text-violet-400">
          {telemetry.p95TaskLatencySeconds}s
        </span>
      </div>
    </div>
  </div>
);
