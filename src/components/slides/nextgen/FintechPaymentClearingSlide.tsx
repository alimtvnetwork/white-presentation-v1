import React, { useState } from 'react';
import type { FintechPaymentClearingSlideData } from '../../../types/nextGenArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { DEFAULT_STAGES, DEFAULT_TRANSACTION } from './fintech/defaults';
import { FintechHeader } from './fintech/FintechHeader';
import { ActiveTransactionBar } from './fintech/ActiveTransactionBar';
import { ClearingStageCard } from './fintech/ClearingStageCard';
import { FraudScoringStrip } from './fintech/FraudScoringStrip';

interface FintechPaymentClearingSlideProps {
  slide?: FintechPaymentClearingSlideData;
  data?: FintechPaymentClearingSlideData;
}

export const FintechPaymentClearingSlide: React.FC<FintechPaymentClearingSlideProps> = ({
  slide,
  data: propsData,
}) => {
  const data = slide || propsData || ({} as FintechPaymentClearingSlideData);
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const deckActiveStep = useDeckStore((s) => s.activeStep);

  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const stages = data.clearingStages && data.clearingStages.length > 0 ? data.clearingStages : DEFAULT_STAGES;
  const txn = data.activeTransaction || DEFAULT_TRANSACTION;
  const fraudEngine = data.fraudEngine || {
    riskScoreZeroToOneHundred: 2.4,
    inferenceDurationMs: 11.4,
    modelVersion: 'FraudGuard-XGB-v4.8',
    isApprovedByModel: true,
    hasBiometricAuth: true,
  };
  const telemetry = data.settlementTelemetry || {
    settledTps: 8450,
    dailyVolumeMillionUsd: 624.5,
    isLedgerImmutabilityVerified: true,
    isRealtimeRailsActive: true,
  };

  const rawStep = hoveredStep ?? (data.activeStep ?? deckActiveStep ?? 0);
  const currentStep = Math.min(Math.max(0, rawStep), stages.length - 1);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_70px] flex flex-col justify-between"
    >
      <FintechHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        isEditMode={isEditMode}
        onEditTitle={(val) => applyEdit((s) => ({ ...s, title: val }))}
        onEditSubtitle={(val) => applyEdit((s) => ({ ...s, subtitle: val }))}
        telemetry={telemetry}
      />

      <ActiveTransactionBar txn={txn} />

      <div className="grid grid-cols-4 gap-5 z-10 my-auto h-[460px] items-stretch">
        {stages.map((stage, idx) => (
          <ClearingStageCard
            key={stage.stageId}
            stage={stage}
            index={idx}
            currentStep={currentStep}
            onHover={setHoveredStep}
          />
        ))}
      </div>

      <FraudScoringStrip
        fraudEngine={fraudEngine}
        activeStageName={stages[currentStep]?.name || ''}
        currentStep={currentStep}
        totalStages={stages.length}
      />
    </div>
  );
};
