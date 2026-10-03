import React from 'react';
import { AlertTriangle, Leaf, Award, Activity } from 'lucide-react';
import type { SupplyChainDisruption } from '../../../../types/nextGenArchetypes';

interface DigitalTwinFooterProps {
  disruptions: SupplyChainDisruption[];
  fuelSavingsTons: number;
  isGreenLogistics: boolean;
  csl?: string;
}

export const DigitalTwinFooter: React.FC<DigitalTwinFooterProps> = ({
  disruptions,
  fuelSavingsTons,
  isGreenLogistics,
  csl = 'Alim Ul Karim',
}) => {
  const primaryDisruption = disruptions[0];

  return (
    <div className="z-10 plane-1-raised rounded-2xl p-4 px-6 border border-slate-700/60 flex items-center justify-between font-mono text-sm">
      <div className="flex items-center gap-7">
        {primaryDisruption && (
          <div className="flex items-center gap-2">
            <AlertTriangle size={16} className="text-amber-900 dark:text-amber-400" />
            <span style={{ color: 'var(--pres-text-muted)' }}>Disruption Alert:</span>
            <span className="font-bold text-amber-900 dark:text-amber-400 dark:text-amber-400">
              {primaryDisruption.chokepointName} (${primaryDisruption.inventoryValueAtRiskMillionUsd}M At Risk)
            </span>
          </div>
        )}
        <div className="w-[1px] h-5 bg-slate-700/50" />
        <div className="flex items-center gap-2">
          <Leaf size={16} className="text-emerald-400" />
          <span style={{ color: 'var(--pres-text-muted)' }}>Green Fuel Saved:</span>
          <span className="font-bold text-slate-900 dark:text-emerald-300">
            {fuelSavingsTons} MT CO₂e
          </span>
        </div>
        <div className="w-[1px] h-5 bg-slate-700/50" />
        <div className="flex items-center gap-2">
          <Award size={16} className="text-capsule-gold" />
          <span style={{ color: 'var(--pres-text-muted)' }}>Verification:</span>
          <span className="font-bold text-slate-900 dark:text-slate-100">
            {csl} (Chief Software Engineer)
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5">
          <Activity size={14} className="text-cyan-400 animate-pulse" />
          Twin Lattice 100% Synced
        </span>
      </div>
    </div>
  );
};
