import React from 'react';
import { Activity, ShieldCheck, Zap } from 'lucide-react';
import type {
  AppWorkspaceState,
  TelemetrySidebarState,
  ViewportCardDetails,
} from '../../../../types/nextGenArchetypes';

interface BrowserViewportProps {
  workspace: AppWorkspaceState;
  telemetry: TelemetrySidebarState;
  viewport: ViewportCardDetails;
  isDark?: boolean;
}

export const BrowserViewport: React.FC<BrowserViewportProps> = ({
  workspace,
  telemetry,
  viewport,
  isDark,
}) => (
  <div className="plane-1-raised rounded-2xl border border-slate-700/60 overflow-hidden flex flex-col h-[520px]">
    <div className="flex items-center gap-2 bg-slate-800/80 px-4 py-2 border-b border-slate-700/40">
      {workspace.availableTabs.map((tab) => (
        <span
          key={tab}
          className={`font-mono text-xs px-3 py-1 rounded-lg ${
            tab === workspace.activeTab
              ? 'bg-violet-600 text-white font-bold'
              : 'text-slate-400 bg-slate-900/40'
          }`}
        >
          {tab}
        </span>
      ))}
    </div>

    <div className="grid grid-cols-4 flex-1 bg-slate-950/60">
      <div className="col-span-3 p-8 flex flex-col justify-between">
        <div>
          <span className="font-mono text-xs px-2.5 py-1 rounded bg-violet-500/20 text-violet-700 dark:text-violet-300 font-bold uppercase mb-4 inline-block">
            Simulated Micro-Frontend
          </span>
          <h2 className="font-ubuntu text-3xl font-bold text-slate-900 dark:text-white mb-2">
            {viewport.headline}
          </h2>
          <p className="font-poppins text-sm text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
            {viewport.summary}
          </p>
        </div>

        <div className="pt-6 border-t border-slate-800 flex items-center gap-8 font-mono">
          <div>
            <span className="text-[10px] text-slate-500 uppercase block">{viewport.metricLabel}</span>
            <span className={`text-3xl font-bold ${isDark ? 'text-violet-300' : 'text-violet-800'}`}>
              {viewport.primaryMetric}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-emerald-400">
            <Zap size={14} /> Low Overhead Virtual DOM
          </div>
        </div>
      </div>

      <div className="p-6 border-l border-slate-800/80 bg-slate-900/40 flex flex-col justify-between font-mono text-xs">
        <div>
          <span className="text-slate-400 uppercase font-bold text-[10px] block mb-4">
            Edge Telemetry
          </span>
          <div className="space-y-3">
            <div>
              <span className="text-slate-500 block text-[10px]">Cluster</span>
              <span className="text-slate-200 font-bold">{telemetry.clusterRegion}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">Active Sessions</span>
              <span className="text-slate-200 font-bold">{telemetry.activeUsers}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">Health</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <Activity size={12} /> {telemetry.systemHealth}
              </span>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-800 text-emerald-400 flex items-center gap-1 text-[11px]">
          <ShieldCheck size={13} /> {telemetry.isOnline ? 'Online' : 'Standby'}
        </div>
      </div>
    </div>
  </div>
);
