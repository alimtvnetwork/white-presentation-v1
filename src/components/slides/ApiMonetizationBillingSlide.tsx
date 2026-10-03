import React from 'react';
import type { ApiMonetizationBillingSlideData } from '../../types/sovereignOperationsArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { BillingHeader } from './apibilling/BillingHeader';
import { BillingKpiStrip } from './apibilling/BillingKpiStrip';
import { TierBillingCards } from './apibilling/TierBillingCards';
import { MonetizationMetricsTable } from './apibilling/MonetizationMetricsTable';
import { BillingReconciliationFooter } from './apibilling/BillingReconciliationFooter';

export const ApiMonetizationBillingSlide: React.FC<{
  slide: ApiMonetizationBillingSlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const pricingTiers = slide.pricingTiers || [];
  const metricSummaries = slide.metricSummaries || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_80px] flex flex-col justify-between"
    >
      <BillingHeader
        kicker={slide.kicker}
        title={slide.title || 'API Monetization & Real-Time Billing Engine'}
        subtitle={slide.subtitle}
        billingCycle={slide.billingCycle || 'FY2026-Q4 Executive Billing Cycle'}
        isRealtimeMeteringActive={slide.isRealtimeMeteringActive}
        isEditMode={isEditMode}
        onUpdateTitle={(title) => applyEdit((s) => ({ ...s, title }))}
        onUpdateSubtitle={(subtitle) => applyEdit((s) => ({ ...s, subtitle }))}
      />

      <BillingKpiStrip
        totalMrrFormatted={slide.totalMrrFormatted || '$2.84M'}
        grossMarginOverallPercent={slide.grossMarginOverallPercent ?? 84.6}
        tiersCount={pricingTiers.length}
        isRealtimeMeteringActive={slide.isRealtimeMeteringActive ?? true}
      />

      <TierBillingCards pricingTiers={pricingTiers} />

      <MonetizationMetricsTable metricSummaries={metricSummaries} />

      <BillingReconciliationFooter
        billingArchitect={slide.billingArchitect || 'Alim Ul Karim'}
        architectTitle={slide.architectTitle || 'Chief Software Engineer'}
        isRealtimeMeteringActive={slide.isRealtimeMeteringActive ?? true}
      />
    </div>
  );
};
