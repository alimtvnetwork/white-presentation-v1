import React from 'react';
import type { SupplyChainRiskMatrixSlideData } from '../../types/globalPptArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { SupplyResilienceKpiStrip } from './supplychain/SupplyResilienceKpiStrip';
import { VendorDependenciesTable } from './supplychain/VendorDependenciesTable';
import { GeopoliticalRiskCard } from './supplychain/GeopoliticalRiskCard';
import { Truck, ShieldCheck, Award } from 'lucide-react';

export const SupplyChainRiskMatrixSlide: React.FC<{ slide: SupplyChainRiskMatrixSlideData }> = ({
  slide,
}) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const vendors = slide.vendors || [];
  const riskFactors = slide.riskFactors || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_80px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30 flex items-center gap-1.5">
            <Truck size={12} /> {slide.kicker || 'OPERATIONS RESILIENCE'}
          </span>
          <span className="font-mono text-xs text-amber-800 dark:text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
            Supply Chain Risk Matrix
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[38px] font-black tracking-tight leading-none mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Global Supply Chain Resilience & Dependency Risk Matrix'}
        </h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-4xl leading-relaxed">
          {slide.subtitle || 'Tier 1-3 Supplier Governance, Single-Point-of-Failure Elimination & Buffer Assurance'}
        </p>
      </div>

      <div className="z-10 flex flex-col gap-5 my-auto">
        <SupplyResilienceKpiStrip
          overallSupplyResilienceScore={slide.overallSupplyResilienceScore ?? 94.2}
          totalMonitoredSuppliers={slide.totalMonitoredSuppliers ?? 84}
          criticalSpofCount={slide.criticalSpofCount ?? 0}
          riskDirector={slide.riskDirector || 'Alim Ul Karim'}
          directorRole={slide.directorRole || 'Chief Software Engineer'}
        />

        <div className="grid grid-cols-12 gap-6 items-stretch h-[500px]">
          <div className="col-span-6 h-full">
            <VendorDependenciesTable vendors={vendors} />
          </div>
          <div className="col-span-6 h-full">
            <GeopoliticalRiskCard riskFactors={riskFactors} />
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-3 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold">
          <ShieldCheck size={14} className="text-emerald-400" />
          ISO 28000 Supply Chain Security Certified | Zero Critical Single Points of Failure
        </span>
        <span className="flex items-center gap-1.5 text-slate-400">
          <Award size={12} />
          Director: {slide.riskDirector || 'Alim Ul Karim'} ({slide.directorRole || 'Chief Software Engineer'})
        </span>
      </div>
    </div>
  );
};
