import React from 'react';
import { Lock, RefreshCw } from 'lucide-react';
import type { BrowserChromeHeader, AppWorkspaceState } from '../../../../types/nextGenArchetypes';

interface BrowserChromeProps {
  header: BrowserChromeHeader;
  workspace: AppWorkspaceState;
}

export const BrowserChrome: React.FC<BrowserChromeProps> = ({ header, workspace }) => (
  <div className="bg-slate-900 border-b border-slate-700/80 p-3 px-5 rounded-t-2xl flex items-center justify-between font-mono text-xs">
    <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
      <span className="ml-3 text-slate-400 font-bold truncate max-w-xs">{header.windowTitle}</span>
    </div>

    <div className="flex items-center gap-2 bg-slate-950/80 px-4 py-1.5 rounded-xl border border-slate-700/60 max-w-md w-full justify-between">
      <div className="flex items-center gap-1.5 text-slate-300 truncate">
        <Lock size={12} className="text-emerald-400 shrink-0" />
        <span className="text-slate-500">{header.protocol}</span>
        <span className="truncate">{header.simulatedUrl.replace('https://', '')}</span>
      </div>
      <RefreshCw size={12} className="text-slate-500 shrink-0" />
    </div>

    <div className="flex items-center gap-3 text-slate-400">
      <span>{workspace.simulatedFps} FPS</span>
      <span>{workspace.roundTripLatencyMs}ms</span>
    </div>
  </div>
);
