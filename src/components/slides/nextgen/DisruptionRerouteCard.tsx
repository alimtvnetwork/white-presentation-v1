import React from 'react';
import type { SupplyChainDisruption, SupplyChainDigitalTwinSlideData } from '../../../types/nextGenArchetypes';
import { AlertTriangle, Navigation, Leaf, ShieldCheck, Activity } from 'lucide-react';

interface DisruptionRerouteCardProps {
  disruptions: SupplyChainDisruption[];
  co2?: SupplyChainDigitalTwinSlideData['co2Optimization'];
}

export const DisruptionRerouteCard: React.FC<DisruptionRerouteCardProps> = ({
  disruptions,
  co2,
}) => {
  const activeDisruption = disruptions.length > 0 ? disruptions[0] : null;
  const fuelSavings = (co2?.fuelSavingsMetricTons ?? 14200).toLocaleString();

  return (
    <div className="z-10 space-y-3 font-mono text-xs">
      {activeDisruption && (
        <div className="plane-1-raised rounded-2xl p-3.5 px-6 border border-rose-500/30 bg-rose-500/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-600 dark:text-rose-300 border border-rose-500/40 flex items-center gap-1.5 font-bold uppercase">
              <AlertTriangle size={13} /> Active Global Chokepoint
            </span>
            <span className="font-bold text-slate-900 dark:text-slate-100">
              {activeDisruption.chokepointName}
            </span>
            <span style={{ color: 'var(--pres-text-muted)' }}>
              Delay Impact: +{activeDisruption.estimatedDelayDays} Days | Inventory at Risk: ${activeDisruption.inventoryValueAtRiskMillionUsd}M
            </span>
          </div>
          <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-semibold">
            <Navigation size={13} className="text-emerald-400" />
            Contingency Routing Dispatched via Cape of Good Hope
          </div>
        </div>
      )}

      <div className="plane-1-raised rounded-2xl p-3.5 px-6 border border-slate-700/60 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Leaf size={14} className="text-emerald-400" />
            <span style={{ color: 'var(--pres-text-muted)' }}>CO2 Fuel Savings:</span>
            <span className="font-bold text-slate-900 dark:text-emerald-400">
              {fuelSavings} Metric Tons
            </span>
          </div>
          <div className="w-[1px] h-4 bg-slate-700/50" />
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-sky-400" />
            <span style={{ color: 'var(--pres-text-muted)' }}>Lead Architect:</span>
            <span className="font-bold text-slate-900 dark:text-slate-200">
              Alim Ul Karim, Chief Software Engineer
            </span>
          </div>
        </div>
        <span className="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-300 font-bold">
          <Activity size={13} className="animate-pulse text-emerald-400" />
          Simulation Twin Synchronized
        </span>
      </div>
    </div>
  );
};
