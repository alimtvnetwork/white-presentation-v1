import React from 'react';
import type { McpActiveInvocation } from '../../../types/nextGenArchetypes';
import { Cpu, Zap, Terminal, CheckCircle2 } from 'lucide-react';

interface McpHostCardProps {
  clientHost: {
    hostName: string;
    agentVersion: string;
    protocolVersion: string;
    isConnected: boolean;
    hasToolAutoApproval: boolean;
  };
  invocation: McpActiveInvocation;
  currentStep: number;
}

export const McpHostCard: React.FC<McpHostCardProps> = ({
  clientHost,
  invocation,
  currentStep,
}) => {
  return (
    <div className="col-span-5 flex flex-col justify-between gap-5 flex-1">
      <div
        style={{
          backgroundColor: 'var(--pres-bg-card)',
          borderColor: currentStep === 0 ? 'var(--pres-border-hover)' : 'var(--pres-border)',
        }}
        className={`plane-1-raised rounded-3xl p-5 border flex flex-col justify-between transition-all duration-300 ${
          currentStep === 0 ? 'step-phase-active ring-2 ring-violet-500/50' : 'step-phase-past opacity-85'
        }`}
      >
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-violet-500/20 text-slate-900 dark:text-violet-300 border border-violet-500/30 flex items-center gap-1.5">
              <Cpu size={14} className="text-violet-400" /> CLIENT HOST RUNTIME
            </span>
            <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-slate-900 dark:text-emerald-400 border border-emerald-500/20">
              {clientHost.isConnected ? 'CONNECTED' : 'DISCONNECTED'}
            </span>
          </div>
          <h3 className="text-xl font-ubuntu font-bold tracking-tight mb-1 text-slate-900 dark:text-slate-100">{clientHost.hostName}</h3>
          <p style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono mb-2">
            Agent: {clientHost.agentVersion} | Protocol: {clientHost.protocolVersion}
          </p>
        </div>
        <div className="pt-2 border-t border-slate-700/40 flex items-center justify-between text-xs font-mono">
          <span className="text-slate-700 dark:text-slate-300 flex items-center gap-1.5"><Zap size={12} className="text-amber-800 dark:text-amber-300" /> Auto-Approval</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">{clientHost.hasToolAutoApproval ? 'ACTIVE' : 'MANUAL'}</span>
        </div>
      </div>

      <div
        style={{
          backgroundColor: 'var(--pres-bg-card)',
          borderColor: currentStep === 2 ? 'var(--pres-border-hover)' : 'var(--pres-border)',
        }}
        className={`plane-1-raised rounded-3xl p-5 border flex flex-col justify-between flex-1 transition-all duration-300 ${
          currentStep === 2 ? 'step-phase-active ring-2 ring-violet-500/50' : 'step-phase-past opacity-85'
        }`}
      >
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-500/20 text-slate-900 dark:text-sky-300 border border-sky-500/30 flex items-center gap-1.5">
              <Terminal size={14} className="text-sky-400" /> LIVE TOOL INVOCATION
            </span>
            <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-slate-900 dark:text-emerald-400 border border-emerald-500/20">
              {invocation.isCompleted ? 'EXECUTED' : 'STREAMING'}
            </span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-mono font-bold text-slate-900 dark:text-slate-100">{invocation.requestedTool}()</h3>
            <span className="font-mono text-xs text-slate-700 dark:text-slate-300">via {invocation.serverSource}</span>
          </div>
          <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 font-mono text-xs text-sky-300 mb-2.5 overflow-x-auto whitespace-pre max-h-[100px]">
            {invocation.parametersJson}
          </div>
        </div>
        <div className="pt-2 border-t border-slate-700/40 flex items-center justify-between text-xs font-mono">
          <span className="text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
            <CheckCircle2 size={12} className="text-emerald-500" /> Duration: <strong className="text-slate-900 dark:text-slate-100">{invocation.executionDurationMs} ms</strong>
          </span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">{invocation.isPolicyPermitted ? 'POLICY CLEARED' : 'BLOCKED'}</span>
        </div>
      </div>
    </div>
  );
};
