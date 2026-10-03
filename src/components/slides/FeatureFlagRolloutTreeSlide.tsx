import React from 'react';
import type { FeatureFlagRolloutTreeSlideData } from '../../types/sovereignOperationsArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { FlagHeader } from './flags/FlagHeader';
import { FlagMetricStrip } from './flags/FlagMetricStrip';
import { FlagRingCard } from './flags/FlagRingCard';
import { ShieldCheck, Activity } from 'lucide-react';

export const FeatureFlagRolloutTreeSlide: React.FC<{
  slide: FeatureFlagRolloutTreeSlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);

  const rings = slide.rolloutRings || [];
  const currentStep = Math.min(activeStep, Math.max(0, rings.length - 1));

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_90px] flex flex-col justify-between"
    >
      <FlagHeader
        slide={slide}
        isEditMode={isEditMode}
        onUpdateTitle={(title) => applyEdit((s) => ({ ...s, title }))}
        onUpdateSubtitle={(subtitle) => applyEdit((s) => ({ ...s, subtitle }))}
      />

      <div className="flex flex-col gap-6 z-10 my-auto h-[640px] justify-between">
        <FlagMetricStrip slide={slide} />

        <div className="grid grid-cols-4 gap-5 flex-1 items-stretch">
          {rings.map((ring, idx) => (
            <FlagRingCard
              key={ring.id || idx}
              ring={ring}
              index={idx}
              activeStep={currentStep}
            />
          ))}
        </div>
      </div>

      <div className="z-10 plane-1-raised rounded-xl p-3.5 px-6 border border-slate-700/60 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-slate-900 dark:text-slate-200 font-bold">
            <ShieldCheck size={14} className="text-emerald-400" />
            Release Governance:
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }}>
            {slide.releaseOwner || 'Alim Ul Karim'} ({slide.ownerTitle || 'Chief Software Engineer'}) | Instant Kill Switch Armed
          </span>
        </div>
        <span className="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-300 font-bold">
          <Activity size={13} className="text-emerald-400" />
          APM Canary Telemetry Active
        </span>
      </div>
    </div>
  );
};
