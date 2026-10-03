import React from 'react';
import type { LaunchReadinessChecklistSlideData } from '../../types/globalPptArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { ReadinessHeader } from './readiness/ReadinessHeader';
import { ReadinessGateTabs } from './readiness/ReadinessGateTabs';
import { ReadinessGateDetail } from './readiness/ReadinessGateDetail';
import { ShieldCheck } from 'lucide-react';

export const LaunchReadinessChecklistSlide: React.FC<{
  slide: LaunchReadinessChecklistSlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);

  const gates = slide.stageGates || [];
  const currentStep = Math.min(activeStep, Math.max(0, gates.length - 1));
  const activeGate = gates[currentStep];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_90px] flex flex-col justify-between"
    >
      <ReadinessHeader
        slide={slide}
        isEditMode={isEditMode}
        onUpdateTitle={(title) => applyEdit((s) => ({ ...s, title }))}
        onUpdateSubtitle={(subtitle) => applyEdit((s) => ({ ...s, subtitle }))}
      />

      <div className="flex flex-col gap-6 z-10 my-auto h-[640px] justify-between">
        <ReadinessGateTabs
          stageGates={gates}
          activeStep={currentStep}
        />

        <div className="flex-1">
          <ReadinessGateDetail gate={activeGate} />
        </div>
      </div>

      <div className="plane-1-raised p-3 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-emerald-400 font-bold">
          <ShieldCheck size={14} /> Production Clearance Validated | Continuous Stage-Gate Assurance
        </span>
        <div className="flex items-center gap-4 text-slate-400">
          <span>Active Gate: {activeGate?.gateName || 'All Gates'}</span>
          <span>Gate {currentStep + 1} of {Math.max(gates.length, 1)}</span>
        </div>
      </div>
    </div>
  );
};
