import React from 'react';
import type { AgentWorkerNode } from '../../../types/nextGenArchetypes';
import { Layers, Server, CheckCircle2, ShieldCheck } from 'lucide-react';

interface AgentWorkerPoolCardProps {
  workers: AgentWorkerNode[];
}

export const AgentWorkerPoolCard: React.FC<AgentWorkerPoolCardProps> = ({ workers }) => {
  return (
    <div className="col-span-8 flex flex-col justify-between">
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-sm font-bold uppercase tracking-wider flex items-center gap-2 text-slate-800 dark:text-slate-200">
          <Layers size={16} className="text-violet-400" />
          Specialized Agent Worker Pool ({workers.length} Nodes)
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">
          Direct AUM Subagent Execution Fabric
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 flex-1">
        {workers.map((worker) => {
          const statusClass =
            worker.status === 'EXECUTING'
              ? 'bg-emerald-500/20 text-slate-900 dark:text-emerald-300 border-emerald-500/30'
              : worker.status === 'WAITING_IO'
                ? 'bg-amber-500/20 text-amber-800 dark:text-amber-300 border-amber-500/30'
                : 'bg-sky-500/20 text-slate-900 dark:text-sky-300 border-sky-500/30';

          return (
            <div
              key={worker.id}
              style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
              className="plane-1-raised rounded-2xl p-4 border flex flex-col justify-between hover:border-violet-500/50 hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                    <Server size={13} className="text-violet-400" />
                    {worker.name}
                  </span>
                  <span className={`px-2 py-0.5 rounded-full font-mono text-[10px] font-bold border ${statusClass}`}>
                    {worker.status}
                  </span>
                </div>
                <h4 className="text-base font-bold font-ubuntu text-slate-900 dark:text-slate-100 mb-1">{worker.role}</h4>
                <p style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-poppins mb-2.5 line-clamp-2">{worker.specialization}</p>
                <div className="p-2 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5 font-mono text-xs mb-2.5 space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span style={{ color: 'var(--pres-text-muted)' }}>Active Tool</span>
                    <span className="text-violet-600 dark:text-violet-300 font-bold truncate max-w-[140px]">{worker.activeToolName}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span style={{ color: 'var(--pres-text-muted)' }}>Tokens Consumed</span>
                    <span className="text-slate-900 dark:text-slate-200 font-bold">{(worker.activeTokensUsed / 1000).toFixed(1)}k</span>
                  </div>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-700/40 flex items-center justify-between font-mono text-[11px]">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 size={12} /> {worker.taskSuccessRatePercent}% Pass Rate
                </span>
                <span className="text-slate-700 dark:text-slate-400 flex items-center gap-1">
                  <ShieldCheck size={12} className="text-sky-400" />
                  {worker.isSandboxIsolated ? 'Isolated Sandbox' : 'Shared Host'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
