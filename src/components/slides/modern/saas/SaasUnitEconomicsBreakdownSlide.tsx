import React, { useState } from 'react';
import type { SaasUnitEconomicsBreakdownSlideData } from '../../../../types/modern/saasFinancialTypes';
import { createSaasUnitEconomicsBreakdownSlide } from '../../../../utils/modern/saasFinancialFactories';
import { useDeckStore } from '../../../../stores/deckStore';
import { EconomicsHeader } from './EconomicsHeader';
import { LtvCacGauge } from './LtvCacGauge';
import { EconomicsMetricCard } from './EconomicsMetricCard';
import { Award, Layers } from 'lucide-react';

interface SaasUnitEconomicsBreakdownSlideProps {
  slide?: SaasUnitEconomicsBreakdownSlideData;
  data?: SaasUnitEconomicsBreakdownSlideData;
}

export const SaasUnitEconomicsBreakdownSlide: React.FC<SaasUnitEconomicsBreakdownSlideProps> = ({
  slide,
  data: pData,
}) => {
  const fallback = createSaasUnitEconomicsBreakdownSlide();
  const data = slide || pData || fallback;
  const deckActiveStep = useDeckStore((s) => s.activeStep);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const pillars = data.economicPillars?.length ? data.economicPillars : fallback.economicPillars;
  const healthStrip = data.healthStrip || fallback.healthStrip;
  const rawStep = hoveredStep ?? (data.activeStep ?? deckActiveStep ?? 1);
  const currentStep = Math.min(Math.max(1, rawStep), pillars.length);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between"
    >
      <EconomicsHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        fiscalQuarter={data.fiscalQuarter}
        isAuditVerified={data.isAuditVerified}
      />

      <div className="z-10 mb-5">
        <LtvCacGauge healthStrip={healthStrip} />
      </div>

      <div className="grid grid-cols-4 gap-5 z-10 my-auto h-[480px] items-stretch">
        {pillars.map((pillar) => (
          <EconomicsMetricCard
            key={pillar.id}
            pillar={pillar}
            isCurrentStep={pillar.stepIndex === currentStep}
            onClick={() => setHoveredStep(pillar.stepIndex)}
          />
        ))}
      </div>

      <footer className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 text-emerald-400 font-bold">
            <Award size={15} /> SaaS Unit Economics Validated
          </span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>
            Chief Software Engineer: <strong className="text-slate-200">Alim Ul Karim, Chief Software Engineer</strong>
          </span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span className="flex items-center gap-1.5 text-cyan-300">
            <Layers size={13} /> Active Pillar: {currentStep} of {pillars.length}
          </span>
        </div>
      </footer>
    </div>
  );
};
