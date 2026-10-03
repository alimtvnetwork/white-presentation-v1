import React, { useState } from 'react';
import type { GlobalFintechLedgerSettlementSlideData } from '../../../../types/modern/saasFinancialTypes';
import { createGlobalFintechLedgerSettlementSlide } from '../../../../utils/modern/saasFinancialFactories';
import { useDeckStore } from '../../../../stores/deckStore';
import { FintechHeader } from './FintechHeader';
import { ThroughputBar } from './ThroughputBar';
import { SettlementNodeCard } from './SettlementNodeCard';
import { Award, Layers } from 'lucide-react';

interface GlobalFintechLedgerSettlementSlideProps {
  slide?: GlobalFintechLedgerSettlementSlideData;
  data?: GlobalFintechLedgerSettlementSlideData;
}

export const GlobalFintechLedgerSettlementSlide: React.FC<GlobalFintechLedgerSettlementSlideProps> = ({
  slide,
  data: pData,
}) => {
  const fallback = createGlobalFintechLedgerSettlementSlide();
  const data = slide || pData || fallback;
  const deckActiveStep = useDeckStore((s) => s.activeStep);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = data.settlementSteps?.length ? data.settlementSteps : fallback.settlementSteps;
  const telemetry = data.telemetry || fallback.telemetry;
  const rawStep = hoveredStep ?? (data.activeStep ?? deckActiveStep ?? 1);
  const currentStep = Math.min(Math.max(1, rawStep), steps.length);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between"
    >
      <FintechHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        currencyPair={data.settlementCurrencyPair}
        isRegulatoryCompliant={data.isRegulatoryCompliant}
      />

      <div className="z-10 mb-5">
        <ThroughputBar telemetry={telemetry} />
      </div>

      <div className="grid grid-cols-4 gap-5 z-10 my-auto h-[480px] items-stretch">
        {steps.map((step) => (
          <SettlementNodeCard
            key={step.id}
            step={step}
            isCurrentStep={step.stepIndex === currentStep}
            onClick={() => setHoveredStep(step.stepIndex)}
          />
        ))}
      </div>

      <footer className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 text-cyan-400 font-bold">
            <Award size={15} /> Distributed Settlement Ledger Verified
          </span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>
            Chief Software Engineer: <strong className="text-slate-200">Alim Ul Karim, Chief Software Engineer</strong>
          </span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span className="flex items-center gap-1.5 text-emerald-300">
            <Layers size={13} /> Active Clearing Stage: {currentStep} of {steps.length}
          </span>
        </div>
      </footer>
    </div>
  );
};
