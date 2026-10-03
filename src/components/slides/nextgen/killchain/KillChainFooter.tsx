import React from 'react';
import { ShieldAlert, Award, Activity, Lock } from 'lucide-react';

interface KillChainFooterProps {
  adversaryCodename: string;
  targetAsset: string;
  ciso: string;
  csl?: string;
  isSoarActive: boolean;
}

export const KillChainFooter: React.FC<KillChainFooterProps> = ({
  adversaryCodename,
  targetAsset,
  ciso,
  csl = 'Alim Ul Karim',
  isSoarActive,
}) => {
  return (
    <div className="z-10 plane-1-raised rounded-2xl p-4 px-6 border border-slate-700/60 flex items-center justify-between font-mono text-sm">
      <div className="flex items-center gap-7">
        <div className="flex items-center gap-2">
          <ShieldAlert size={16} className="text-rose-400" />
          <span style={{ color: 'var(--pres-text-muted)' }}>Threat Actor:</span>
          <span className="font-bold text-slate-900 dark:text-rose-300">{adversaryCodename}</span>
        </div>
        <div className="w-[1px] h-5 bg-slate-700/50" />
        <div className="flex items-center gap-2">
          <Lock size={16} className="text-sky-400" />
          <span style={{ color: 'var(--pres-text-muted)' }}>Target Asset:</span>
          <span className="font-bold text-slate-900 dark:text-slate-100">{targetAsset}</span>
        </div>
        <div className="w-[1px] h-5 bg-slate-700/50" />
        <div className="flex items-center gap-2">
          <Award size={16} className="text-capsule-gold" />
          <span style={{ color: 'var(--pres-text-muted)' }}>Security Signoffs:</span>
          <span className="font-bold text-slate-900 dark:text-slate-100">
            {ciso} (CISO) &amp; {csl} (Chief Software Engineer)
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
          <Activity size={14} className="text-emerald-400 animate-pulse" />
          {isSoarActive ? 'SOAR Engine 100% Operational' : 'Manual Triage'}
        </span>
      </div>
    </div>
  );
};
