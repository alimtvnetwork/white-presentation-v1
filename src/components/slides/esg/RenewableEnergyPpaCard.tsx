import React from 'react';
import type { RenewableEnergyPpaItem } from '../../../types/globalPptArchetypes';
import { isBooleanTrue } from '../../../utils/booleanGuards';
import { Sun, Wind, Droplets, Flame, CheckCircle2, ShieldCheck } from 'lucide-react';

interface RenewableEnergyPpaCardProps {
  cleanEnergyContracts: RenewableEnergyPpaItem[];
}

const getSourceIcon = (source: string) => {
  switch (source) {
    case 'wind':
      return <Wind size={13} className="text-cyan-400" />;
    case 'hydro':
      return <Droplets size={13} className="text-blue-400" />;
    case 'geothermal':
      return <Flame size={13} className="text-orange-600 dark:text-orange-400" />;
    case 'solar':
    default:
      return <Sun size={13} className="text-amber-600 dark:text-amber-400" />;
  }
};

export const RenewableEnergyPpaCard: React.FC<RenewableEnergyPpaCardProps> = ({
  cleanEnergyContracts,
}) => {
  return (
    <div className="plane-1-raised p-5 rounded-2xl border border-slate-800 bg-slate-900/40 flex flex-col gap-3 h-full font-mono text-xs">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold text-slate-300 flex items-center gap-2">
          <Sun size={14} className="text-emerald-400" />
          Clean Energy Power Purchase Agreements (PPA)
        </span>
        <span className="text-slate-400">{cleanEnergyContracts.length} Contracts Active</span>
      </div>

      <div className="space-y-3 overflow-y-auto flex-1 pr-1">
        {cleanEnergyContracts.map((ppa) => {
          const isActive = isBooleanTrue(ppa.isPpaActive);
          const isVerified = isBooleanTrue(ppa.isVerifiedOffset);

          return (
            <div
              key={ppa.id}
              className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded bg-slate-800 border border-slate-700">
                    {getSourceIcon(ppa.energySource)}
                  </span>
                  <span className="font-bold text-slate-100 text-[13px]">{ppa.contractName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold text-[12px]">
                    {ppa.capacityMegawatts} MW
                  </span>
                  <span
                    className={`text-[9px] font-bold px-1.5 py-0.5 rounded border flex items-center gap-1 ${
                      isActive
                        ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                        : 'bg-slate-800 text-slate-400 border-slate-700'
                    }`}
                  >
                    <CheckCircle2 size={10} />
                    {isActive ? 'ACTIVE PPA' : 'QUEUED'}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-800/60">
                <span className="capitalize">Source: <strong className="text-slate-200">{ppa.energySource}</strong></span>
                <span className="flex items-center gap-1 text-[10px] text-emerald-400">
                  <ShieldCheck size={11} className={isVerified ? 'text-emerald-400' : 'text-slate-600'} />
                  {isVerified ? 'Verified Offset' : 'Pending Verification'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
