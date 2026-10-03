import React from 'react';
import { Globe, DollarSign, CheckCircle2, ShieldCheck, Percent } from 'lucide-react';
import type { TransferPricingJurisdictionItem } from '../../../../types/customization/sovereignTelemetryTypes';

interface JurisdictionTaxCardProps {
  node: TransferPricingJurisdictionItem;
  index: number;
  isStepActive: boolean;
}

export const JurisdictionTaxCard: React.FC<JurisdictionTaxCardProps> = ({
  node,
  index: _index,
  isStepActive,
}) => {
  const isOecd = node.isOecdCompliant;
  const hasSubstance = node.hasLocalSubstance;

  return (
    <div
      style={{
        backgroundColor: 'var(--pres-bg-card)',
        borderColor: isStepActive ? 'var(--pres-accent)' : 'var(--pres-border)',
      }}
      className={`plane-1-raised rounded-2xl border p-5 flex flex-col justify-between transition-all duration-300 ${
        isStepActive ? 'ring-2 ring-emerald-500/40 shadow-xl' : 'opacity-85'
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30 flex items-center gap-1.5">
            <Globe size={12} /> {node.countryCode}
          </span>
          <span className="font-mono text-xs flex items-center gap-1 font-bold text-sky-700 dark:text-sky-400">
            <Percent size={12} /> {node.effectiveTaxRatePercentage}% ETR
          </span>
        </div>

        <h3 className="font-ubuntu text-base font-bold leading-snug mb-3" style={{ color: 'var(--pres-text)' }}>
          {node.jurisdictionCountry}
        </h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-xs font-mono p-2.5 rounded-lg bg-[var(--pres-surface-muted)]">
            <span className="flex items-center gap-1.5" style={{ color: 'var(--pres-text-muted)' }}>
              <DollarSign size={13} className="text-emerald-500" /> Intercompany Volume
            </span>
            <span className="font-bold text-base text-emerald-700 dark:text-emerald-400">
              ${node.intercompanyVolumeMln}M
            </span>
          </div>

          <div className="text-xs p-2 rounded-lg bg-[var(--pres-surface-muted)]">
            <div className="text-[10px] font-mono uppercase mb-0.5" style={{ color: 'var(--pres-text-muted)' }}>
              Pricing Methodology
            </div>
            <div className="font-mono text-[11px] font-semibold text-indigo-700 dark:text-indigo-400 truncate">
              {node.pricingMethodology}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between">
        <span className="font-mono text-[11px] px-2 py-0.5 rounded-full border bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-500/30 flex items-center gap-1">
          <CheckCircle2 size={11} /> {isOecd ? 'OECD Compliant' : 'Under Review'}
        </span>
        <span className="font-mono text-[11px] px-2 py-0.5 rounded-full border bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-300 dark:border-cyan-500/30 flex items-center gap-1">
          <ShieldCheck size={11} /> {hasSubstance ? 'Substance Verified' : 'Holding Core'}
        </span>
      </div>
    </div>
  );
};
