import React from 'react';
import type { DefensiveControlItem } from '../../../types/kineticSuiteArchetypes';
import { ShieldCheck, Cpu, Lock } from 'lucide-react';

export interface PerimeterLayerRowProps {
  control: DefensiveControlItem;
  hasBorder?: boolean;
}

export const PerimeterLayerRow: React.FC<PerimeterLayerRowProps> = ({ control, hasBorder = true }) => {
  const isHardware = control.isHardwareAccelerated;
  const isEnforced = control.isEnforced;

  return (
    <div
      className={`p-3 rounded-xl border flex items-center justify-between font-mono text-xs transition-all ${
        hasBorder ? 'border-slate-800' : 'border-transparent'
      } ${isEnforced ? 'bg-slate-900/50' : 'bg-slate-950/40'}`}
    >
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
          <ShieldCheck size={14} />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-100">{control.name}</span>
            {isHardware && (
              <span className="text-[9px] font-bold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                <Cpu size={9} /> HW
              </span>
            )}
          </div>
          <span className="text-[10px] text-slate-400">Layer: {control.enforcementLayer}</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-[10px] text-slate-400 flex items-center gap-1 font-mono">
          <Lock size={10} className="text-amber-600 dark:text-amber-400" /> {control.cipherSuite}
        </span>
        <span
          className={`text-[9px] font-bold px-2 py-0.5 rounded-full border uppercase ${
            isEnforced
              ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
              : 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-500/30'
          }`}
        >
          {isEnforced ? 'Enforced' : 'Auditing'}
        </span>
      </div>
    </div>
  );
};
