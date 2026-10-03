import React from 'react';
import type { OkrCascadeAlignmentSlideData } from '../../types/globalPptArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { OkrHeader } from './okr/OkrHeader';
import { OkrTierCard } from './okr/OkrTierCard';
import { ShieldCheck } from 'lucide-react';

export const OkrCascadeAlignmentSlide: React.FC<{
  slide: OkrCascadeAlignmentSlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);

  const tiers = slide.cascadeTiers || [];
  const currentStep = Math.min(activeStep, Math.max(0, tiers.length - 1));

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_90px] flex flex-col justify-between"
    >
      <OkrHeader
        slide={slide}
        isEditMode={isEditMode}
        onUpdateTitle={(title) => applyEdit((s) => ({ ...s, title }))}
        onUpdateSubtitle={(subtitle) => applyEdit((s) => ({ ...s, subtitle }))}
      />

      <div className="grid grid-cols-3 gap-6 z-10 my-auto h-[660px] items-stretch">
        {tiers.map((tier, idx) => (
          <OkrTierCard
            key={tier.id}
            tier={tier}
            isActiveTier={idx === currentStep}
            isCompletedTier={idx < currentStep}
          />
        ))}
      </div>

      <div className="plane-1-raised p-3 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-cyan-400 font-bold">
          <ShieldCheck size={14} /> OKR Cascade Verified | Cross-Functional Alignment Synced
        </span>
        <div className="flex items-center gap-4 text-slate-400">
          <span>Active Tier: {tiers[currentStep]?.tierName || 'All Tiers'}</span>
          <span>Tier {currentStep + 1} of {Math.max(tiers.length, 1)}</span>
        </div>
      </div>
    </div>
  );
};
