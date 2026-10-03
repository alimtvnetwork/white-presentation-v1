import React from 'react';
import type { McpServerNode } from '../../../types/nextGenArchetypes';
import { Server, Activity, CheckCircle2, Lock } from 'lucide-react';

interface McpToolSandboxCardProps {
  servers: McpServerNode[];
}

export const McpToolSandboxCard: React.FC<McpToolSandboxCardProps> = ({ servers }) => {
  return (
    <div className="col-span-7 flex flex-col justify-between">
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-sm font-bold uppercase tracking-wider flex items-center gap-2 text-slate-800 dark:text-slate-200">
          <Server size={16} className="text-violet-400" />
          Active MCP Server Fleet ({servers.length} Registered Endpoints)
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">
          JSON Schema Dynamic Negotiation
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 flex-1">
        {servers.map((srv) => {
          const transportClass =
            srv.transport === 'STDIO'
              ? 'bg-emerald-500/20 text-slate-900 dark:text-emerald-300 border-emerald-500/30'
              : srv.transport === 'SSE'
                ? 'bg-sky-500/20 text-slate-900 dark:text-sky-300 border-sky-500/30'
                : 'bg-violet-500/20 text-slate-900 dark:text-violet-300 border-violet-500/30';

          return (
            <div
              key={srv.serverId}
              style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
              className="plane-1-raised rounded-2xl p-4 border flex flex-col justify-between hover:border-violet-500/50 hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`px-2 py-0.5 rounded-full font-mono text-[10px] font-bold border ${transportClass}`}>
                    {srv.transport}
                  </span>
                  <span className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                    <Activity size={12} /> {srv.pingLatencyMs} ms
                  </span>
                </div>
                <h4 className="text-lg font-bold font-ubuntu text-slate-900 dark:text-slate-100 mb-1">{srv.name}</h4>
                <p style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono mb-2">ID: {srv.serverId}</p>
                <div className="flex items-center gap-3 text-xs font-mono mb-2">
                  <span className="text-slate-700 dark:text-slate-300">Tools: <strong className="text-slate-900 dark:text-slate-100">{srv.toolCount}</strong></span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-700 dark:text-slate-300">Resources: <strong className="text-slate-900 dark:text-slate-100">{srv.resourceCount}</strong></span>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-1.5">
                  {srv.supportedTools.slice(0, 3).map((tool, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 rounded bg-black/10 dark:bg-white/5 border border-white/5 font-mono text-[10px] text-slate-800 dark:text-slate-300">
                      {tool}()
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-2 border-t border-slate-700/40 flex items-center justify-between font-mono text-[11px]">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 size={12} /> {srv.isHealthy ? 'ONLINE' : 'DEGRADED'}
                </span>
                <span className="text-slate-700 dark:text-slate-400 flex items-center gap-1">
                  <Lock size={12} className="text-violet-400" />
                  {srv.isAuthorized ? 'Authenticated' : 'Pending'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
