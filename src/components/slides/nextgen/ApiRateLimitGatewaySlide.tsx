import React, { useState } from 'react';
import type { ApiRateLimitGatewaySlideData } from '../../../types/nextGenArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  DEFAULT_TIERS,
  DEFAULT_REDIS,
  DEFAULT_TELEMETRY,
  GATEWAY_PHASES,
} from './gateway/defaults';
import { GatewayHeader } from './gateway/GatewayHeader';
import { GatewayPhaseTrack } from './gateway/GatewayPhaseTrack';
import { TierEnforcementPanel } from './gateway/TierEnforcementPanel';
import { RedisMeshPanel } from './gateway/RedisMeshPanel';
import { CircuitBreakerPanel } from './gateway/CircuitBreakerPanel';
import { GatewayFooter } from './gateway/GatewayFooter';

interface ApiRateLimitGatewaySlideProps {
  slide?: ApiRateLimitGatewaySlideData;
  data?: ApiRateLimitGatewaySlideData;
}

export const ApiRateLimitGatewaySlide: React.FC<ApiRateLimitGatewaySlideProps> = ({
  slide,
  data: propsData,
}) => {
  const data = slide || propsData || ({} as ApiRateLimitGatewaySlideData);
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const deckActiveStep = useDeckStore((s) => s.activeStep);

  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const tiers = data.gatewayTiers && data.gatewayTiers.length > 0 ? data.gatewayTiers : DEFAULT_TIERS;
  const redis = data.redisMesh || DEFAULT_REDIS;
  const telemetry = data.trafficTelemetry || DEFAULT_TELEMETRY;
  const circuitBreaker = data.circuitBreaker || {
    state: 'CLOSED',
    failureThresholdPercent: 5.0,
    isTripped: false,
    isAutoRecoveryEnabled: true,
  };

  const rawStep = hoveredStep ?? (data.activeStep ?? deckActiveStep ?? 0);
  const currentStep = Math.min(Math.max(0, rawStep), GATEWAY_PHASES.length - 1);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_70px] flex flex-col justify-between"
    >
      <GatewayHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        isEditMode={isEditMode}
        onEditTitle={(val) => applyEdit((s) => ({ ...s, title: val }))}
        onEditSubtitle={(val) => applyEdit((s) => ({ ...s, subtitle: val }))}
        telemetry={telemetry}
        circuitState={circuitBreaker.state}
      />

      <GatewayPhaseTrack
        phases={GATEWAY_PHASES}
        currentStep={currentStep}
        onHover={setHoveredStep}
        onClickStep={setHoveredStep}
      />

      <div className="grid grid-cols-12 gap-6 z-10 my-auto h-[570px] items-stretch">
        <TierEnforcementPanel tiers={tiers} />
        <div className="col-span-4 flex flex-col justify-between gap-5">
          <RedisMeshPanel redis={redis} isActive={currentStep === 2} />
          <CircuitBreakerPanel circuitBreaker={circuitBreaker} isActive={currentStep === 3} />
        </div>
      </div>

      <GatewayFooter
        currentPhaseTitle={GATEWAY_PHASES[currentStep].title}
        currentStep={currentStep}
        totalSteps={GATEWAY_PHASES.length}
      />
    </div>
  );
};
