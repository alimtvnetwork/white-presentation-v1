import React from 'react';
import { Zap, ShieldCheck } from 'lucide-react';
import type { SynergyBridge } from '../../../../types/nextGenArchetypes';

interface SynergyBridgeCardProps {
  synergyBridge: SynergyBridge;
  isDark?: boolean;
}

export const SynergyBridgeCard: React.FC<SynergyBridgeCardProps> = ({ synergyBridge, isDark }) => (
  <div className="plane-1-raised p-5 rounded-2xl border border-violet-500/30 bg-violet-950/20 flex flex-col justify-between">
    <div className="flex items-center justify-between mb-3">
      <span className="font-mono text-xs px-2.5 py-1 rounded bg-violet-500/20 text-violet-700 dark:text-violet-300 font-bold flex items-center gap-1.5 uppercase">
        <Zap size={14} className="text-violet-500" />
        Synergy Dynamic Bridge
      </span>
      {synergyBridge.isSynergyVerified ? (
        <span className="font-mono text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 flex items-center gap-1">
          <ShieldCheck size={12} />
          Verified
        </span>
      ) : null}
    </div>

    <div className="space-y-3 my-auto">
      <div>
        <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 block font-bold">
          Core Thesis
        </span>
        <p className="font-poppins text-xs font-semibold text-slate-900 dark:text-white leading-snug">
          {synergyBridge.coreThesis}
        </p>
      </div>

      <div>
        <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 block font-bold">
          Collaborative Dynamic
        </span>
        <p className="font-poppins text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
          {synergyBridge.collaborativeDynamic}
        </p>
      </div>

      <div>
        <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 block font-bold">
          Shared Commitment
        </span>
        <p className="font-poppins text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
          {synergyBridge.sharedCommitment}
        </p>
      </div>
    </div>

    <div className="pt-3 border-t border-violet-500/20 flex items-center justify-between">
      <span className="font-mono text-xs text-slate-600 dark:text-slate-400">Target Velocity Impact</span>
      <span className={`font-mono text-xs font-bold ${isDark ? 'text-violet-300' : 'text-violet-800'}`}>
        {synergyBridge.synergyMetric}
      </span>
    </div>
  </div>
);
