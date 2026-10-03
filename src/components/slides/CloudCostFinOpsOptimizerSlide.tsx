import React from 'react';
import type { CloudCostFinopsOptimizerSlideData } from '../../types/globalPptArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { FinopsHeader } from './finops/FinopsHeader';
import { FinopsKpiStrip } from './finops/FinopsKpiStrip';
import { FinopsProviderCard } from './finops/FinopsProviderCard';
import { FinopsLeverRow } from './finops/FinopsLeverRow';
import { ShieldCheck, Activity } from 'lucide-react';

export const CloudCostFinOpsOptimizerSlide: React.FC<{
  slide: CloudCostFinopsOptimizerSlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const providers = slide.spendByProvider || [];
  const levers = slide.optimizationLevers || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_90px] flex flex-col justify-between"
    >
      <FinopsHeader
        slide={slide}
        isEditMode={isEditMode}
        onUpdateTitle={(title) => applyEdit((s) => ({ ...s, title }))}
        onUpdateSubtitle={(subtitle) => applyEdit((s) => ({ ...s, subtitle }))}
      />

      <FinopsKpiStrip
        totalMonthlySpendUsd={slide.totalMonthlySpendUsd || 142500}
        totalAnnualProjectedSavingsUsd={slide.totalAnnualProjectedSavingsUsd || 384000}
        overallDiscountCoveragePercent={slide.overallDiscountCoveragePercent || 84.5}
      />

      <div className="grid grid-cols-12 gap-6 z-10 my-auto h-[540px] items-stretch">
        <div className="col-span-5 flex flex-col gap-3">
          <div className="font-mono text-xs text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Activity size={12} className="text-cyan-400" /> Multi-Cloud Provider Ingress ({providers.length})
          </div>
          <div className="space-y-3 overflow-y-auto max-h-[500px] pr-1">
            {providers.map((prov) => (
              <FinopsProviderCard key={prov.id} provider={prov} />
            ))}
          </div>
        </div>

        <div className="col-span-7 flex flex-col gap-3">
          <div className="font-mono text-xs text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Activity size={12} className="text-emerald-400" /> Strategic Optimization Levers ({levers.length})
          </div>
          <div className="space-y-2.5 overflow-y-auto max-h-[500px] pr-1">
            {levers.map((lever) => (
              <FinopsLeverRow key={lever.id} lever={lever} />
            ))}
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-3 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-emerald-400 font-bold">
          <ShieldCheck size={14} /> FinOps Governance Verified | 100% Autonomous Waste Reclamation Policy
        </span>
        <div className="flex items-center gap-4 text-slate-400">
          <span>Continuous Cost Auditing</span>
          <span className="text-slate-200">Quarter: {slide.reportingQuarter || 'Q4-2026'}</span>
        </div>
      </div>
    </div>
  );
};
