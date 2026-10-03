import React from 'react';
import type { VendorDependencyItem } from '../../../types/globalPptArchetypes';
import { isBooleanTrue } from '../../../utils/booleanGuards';
import { Box, ShieldAlert, CheckCircle, Clock } from 'lucide-react';

interface VendorDependenciesTableProps {
  vendors: VendorDependencyItem[];
}

export const VendorDependenciesTable: React.FC<VendorDependenciesTableProps> = ({ vendors }) => {
  return (
    <div className="plane-1-raised p-5 rounded-2xl border border-slate-800 bg-slate-900/40 flex flex-col gap-3 h-full font-mono text-xs">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold text-slate-300 flex items-center gap-2">
          <Box size={14} className="text-amber-600 dark:text-amber-400" />
          Multi-Tier Supplier Dependencies & Lead Times
        </span>
        <span className="text-slate-400">{vendors.length} Strategic Vendors</span>
      </div>

      <div className="space-y-3 overflow-y-auto flex-1 pr-1">
        {vendors.map((ven) => {
          const isCritical = isBooleanTrue(ven.isCriticalVendor);
          const hasSpof = isBooleanTrue(ven.hasSinglePointOfFailure);

          return (
            <div
              key={ven.id}
              className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded font-bold text-[10px] bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/20">
                    Tier {ven.tierLevel}
                  </span>
                  <span className="font-bold text-slate-100 text-[13px]">{ven.vendorName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${
                      isCritical
                        ? 'bg-rose-500/15 text-rose-300 border-rose-500/30'
                        : 'bg-slate-800 text-slate-400 border-slate-700'
                    }`}
                  >
                    {isCritical ? 'CRITICAL PATH' : 'STANDARD'}
                  </span>
                  <span
                    className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${
                      hasSpof
                        ? 'bg-red-500/20 text-red-300 border-red-500/40'
                        : 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                    }`}
                  >
                    {hasSpof ? 'SPOF' : 'REDUNDANT'}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span>Component: <strong className="text-slate-200">{ven.componentProvided}</strong></span>
                <span className="flex items-center gap-1">
                  <Clock size={11} className="text-amber-600 dark:text-amber-400" />
                  Lead Time: <strong className="text-slate-200">{ven.leadTimeWeeks} Weeks</strong>
                </span>
              </div>

              <div className="flex items-center gap-3 pt-1 border-t border-slate-800/60 text-[11px]">
                <span className="text-slate-400">Vulnerability Score:</span>
                <div className="flex-1 bg-slate-800/80 h-1.5 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${Math.min(100, ven.riskScorePercent)}%` }}
                    className="bg-amber-400 h-full rounded-full"
                  />
                </div>
                <span className="text-amber-600 dark:text-amber-400 font-bold">{ven.riskScorePercent.toFixed(1)}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
