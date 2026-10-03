import React from 'react';
import type { DeveloperGatewaySandboxSlideData } from '../../types/globalPptArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { GatewayRouteBar } from './gateway/GatewayRouteBar';
import { GatewayStagePipeline } from './gateway/GatewayStagePipeline';
import { GatewayHeadersPanel } from './gateway/GatewayHeadersPanel';
import { GatewayPayloadViewer } from './gateway/GatewayPayloadViewer';
import { ShieldCheck, Activity } from 'lucide-react';

export const DeveloperGatewaySandboxSlide: React.FC<{
  slide: DeveloperGatewaySandboxSlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);

  const stages = slide.gatewayStages || [];
  const currentStep = Math.min(activeStep, Math.max(0, stages.length - 1));
  const activeStage = stages[currentStep];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_90px] flex flex-col justify-between"
    >
      <GatewayRouteBar
        slide={slide}
        isEditMode={isEditMode}
        onUpdateTitle={(title) => applyEdit((s) => ({ ...s, title }))}
        onUpdateSubtitle={(subtitle) => applyEdit((s) => ({ ...s, subtitle }))}
      />

      <div className="flex flex-col gap-5 z-10 my-auto h-[660px] justify-between">
        <GatewayStagePipeline
          stages={stages}
          activeStep={currentStep}
        />

        <div className="grid grid-cols-12 gap-5 flex-1 items-stretch">
          <div className="col-span-4 flex flex-col">
            <GatewayHeadersPanel headers={slide.requestHeaders || []} />
          </div>

          <div className="col-span-8 flex flex-col">
            <GatewayPayloadViewer
              requestBodyJson={slide.requestBodyJson || '{}'}
              responseBodyJson={slide.responseBodyJson || '{}'}
              responseStatus={slide.responseStatus || 200}
            />
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-3 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-cyan-400 font-bold">
          <ShieldCheck size={14} /> Edge Gateway Verified | mTLS Ingress + ML-KEM-768 Cryptographic Tokens
        </span>
        <div className="flex items-center gap-4 text-slate-400">
          <span>Active Pipeline Stage: {activeStage?.stageName || 'Ingress'}</span>
          <span>Stage {currentStep + 1} of {Math.max(stages.length, 1)}</span>
        </div>
      </div>
    </div>
  );
};
