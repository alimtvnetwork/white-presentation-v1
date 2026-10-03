import React from 'react';
import type { SustainabilityEsgScorecardSlideData } from '../../types/globalPptArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { EsgRatingBanner } from './esg/EsgRatingBanner';
import { EmissionsScopesGrid } from './esg/EmissionsScopesGrid';
import { RenewableEnergyPpaCard } from './esg/RenewableEnergyPpaCard';
import { Leaf, ShieldCheck, Award } from 'lucide-react';

export const SustainabilityEsgScorecardSlide: React.FC<{ slide: SustainabilityEsgScorecardSlideData }> = ({
  slide,
}) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const scopes = slide.scopes || [];
  const contracts = slide.cleanEnergyContracts || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_80px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
            <Leaf size={12} /> {slide.kicker || 'ESG GOVERNANCE'}
          </span>
          <span className="font-mono text-xs text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
            Carbon Neutrality Scorecard
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[38px] font-black tracking-tight leading-none mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Corporate Sustainability & Carbon Neutrality Scorecard'}
        </h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-4xl leading-relaxed">
          {slide.subtitle || 'Scope 1-3 Greenhouse Gas Telemetry, Renewable Energy PPAs & Net-Zero 2030 Alignment'}
        </p>
      </div>

      <div className="z-10 flex flex-col gap-5 my-auto">
        <EsgRatingBanner
          reportingFiscalYear={slide.reportingFiscalYear || 'FY2026'}
          totalCarbonFootprintMetricTons={slide.totalCarbonFootprintMetricTons ?? 4200}
          renewableEnergyPercent={slide.renewableEnergyPercent ?? 98.4}
          esgRatingGrade={slide.esgRatingGrade || 'AAA'}
          hasRegulatorySignoff={slide.hasRegulatorySignoff ?? true}
          sustainabilityLead={slide.sustainabilityLead || 'Alim Ul Karim'}
          leadRole={slide.leadRole || 'Chief Software Engineer'}
        />

        <div className="grid grid-cols-12 gap-6 items-stretch h-[500px]">
          <div className="col-span-6 h-full">
            <EmissionsScopesGrid scopes={scopes} />
          </div>
          <div className="col-span-6 h-full">
            <RenewableEnergyPpaCard cleanEnergyContracts={contracts} />
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-3 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-emerald-400 font-bold">
          <ShieldCheck size={14} />
          GHG Protocol Corporate Standard Audited | 100% Verified Additionality
        </span>
        <span className="flex items-center gap-1.5 text-slate-400">
          <Award size={12} />
          Lead: {slide.sustainabilityLead || 'Alim Ul Karim'} ({slide.leadRole || 'Chief Software Engineer'})
        </span>
      </div>
    </div>
  );
};
