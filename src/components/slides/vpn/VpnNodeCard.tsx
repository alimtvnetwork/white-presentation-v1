import React from 'react';
import type { VpnNodeItem } from '../../../types/extendedArchetypes';
import type { StepPhase } from '../../../utils/stepProgression';
import { getStepPhaseStyle } from '../../../utils/stepProgression';
import { ShieldCheck, Activity, Cpu, Lock, CheckCircle2 } from 'lucide-react';
import { isBooleanTrue } from '../../../utils/booleanGuards';

interface VpnNodeCardProps {
  node: VpnNodeItem;
  index: number;
  phase: StepPhase;
  isActive: boolean;
  onSelect: () => void;
}

export const VpnNodeCard: React.FC<VpnNodeCardProps> = ({
  node,
  phase,
  isActive,
  onSelect,
}) => {
  const phaseStyle = getStepPhaseStyle(phase, '#0284c7');
  const hasKillSwitch = isBooleanTrue(node.isKillSwitchActive);
  const isAuditVerified = isBooleanTrue(node.isVerifiedAudit);

  return (
    <div
      onClick={onSelect}
      style={phaseStyle}
      className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border flex flex-col gap-3 ${
        isActive
          ? 'bg-slate-900/90 border-sky-500/60 shadow-[0_0_24px_-2px_rgba(2,132,199,0.35)]'
          : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700/80'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 font-mono font-bold text-xs">
            {node.country.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-ubuntu text-base font-bold text-slate-100">{node.city}</span>
              <span className="font-poppins text-xs text-slate-400">{node.country}</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-500">
              <Lock size={10} className="text-sky-400" />
              <span>{node.ipAddress} (Encrypted)</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {hasKillSwitch && (
            <span className="flex items-center gap-1 text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <ShieldCheck size={11} /> Kill-Switch
            </span>
          )}
          {isAuditVerified && (
            <span className="flex items-center gap-1 text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20">
              <CheckCircle2 size={11} /> Audit Verified
            </span>
          )}
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
            {node.osDistribution}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 pt-2 border-t border-slate-800/80 font-mono text-xs">
        <div className="flex items-center gap-1.5 text-slate-300">
          <Activity size={13} className="text-sky-400" />
          <span>Latency: <strong className="text-white">{node.latencyMs}ms</strong></span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-300">
          <Cpu size={13} className="text-indigo-400" />
          <span>Bandwidth: <strong className="text-white">{node.bandwidthGbps} Gbps</strong></span>
        </div>
        <div className="flex items-center justify-end gap-2">
          <span className="text-slate-400">Load:</span>
          <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full ${node.serverLoadPct > 80 ? 'bg-rose-500' : 'bg-emerald-400'}`}
              style={{ width: `${node.serverLoadPct}%` }}
            />
          </div>
          <span className="text-slate-200 font-bold">{node.serverLoadPct}%</span>
        </div>
      </div>
    </div>
  );
};
