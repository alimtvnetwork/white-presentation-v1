import React from 'react';
import type { CohortRetentionHeatmapSlideData } from '../../types/kineticSuiteArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { CohortMatrixTable } from './cohort/CohortMatrixTable';
import { RetentionMetricBanner } from './cohort/RetentionMetricBanner';
import { LineChart, CheckCircle2 } from 'lucide-react';

export const CohortRetentionHeatmapSlide: React.FC<{ slide: CohortRetentionHeatmapSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const cohorts = slide.cohorts || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
            <LineChart size={12} /> {slide.kicker || 'INVESTOR TRACTION'}
          </span>
          <span className="font-mono text-xs text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
            {slide.netRevenueRetentionPercent ?? 138}% NRR | {slide.grossLogoRetentionPercent ?? 97.4}% Logo Retention | {slide.ltvToCacRatio ?? 6.2}x LTV/CAC
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[40px] font-black tracking-tight leading-none mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Enterprise Cohort Retention & Expansion Matrix'}
        </h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-4xl leading-relaxed">
          {slide.subtitle || `${slide.netRevenueRetentionPercent ?? 138}% Net Revenue Retention with curve stabilization strictly above 94% retention.`}
        </p>
      </div>

      <div className="z-10 grid grid-cols-12 gap-8 my-auto items-stretch h-[610px]">
        <div className="col-span-8 flex flex-col">
          <CohortMatrixTable
            cohorts={cohorts}
            hasColorShading={slide.hasColorShading}
          />
        </div>

        <div className="col-span-4 flex flex-col">
          <RetentionMetricBanner
            netRevenueRetentionPercent={slide.netRevenueRetentionPercent ?? 138}
            grossLogoRetentionPercent={slide.grossLogoRetentionPercent ?? 97.4}
            ltvToCacRatio={slide.ltvToCacRatio ?? 6.2}
          />
        </div>
      </div>

      <div className="plane-1-raised p-3 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-emerald-400 font-bold">
          <CheckCircle2 size={14} /> Cohort Data Synced via Stripe Billing | GAAP Validated Revenue Recognition
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>Status: Compound Expansion</span>
      </div>
    </div>
  );
};
