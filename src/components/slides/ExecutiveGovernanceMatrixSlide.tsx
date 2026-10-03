import React from 'react';
import type { ExecutiveGovernanceMatrixSlideData } from '../../types/globalPptArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { GovernanceHeader } from './governance/GovernanceHeader';
import { GovernanceMetricStrip } from './governance/GovernanceMetricStrip';
import { GovernancePillarCard } from './governance/GovernancePillarCard';
import { ShieldCheck } from 'lucide-react';

export const ExecutiveGovernanceMatrixSlide: React.FC<{
  slide: ExecutiveGovernanceMatrixSlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);

  const pillars = slide.governancePillars || [];
  const currentStep = Math.min(activeStep, Math.max(0, pillars.length - 1));
  const totalResolutions = pillars.reduce((acc, p) => acc + (p.resolutions?.length || 0), 0);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_90px] flex flex-col justify-between"
    >
      <GovernanceHeader
        slide={slide}
        isEditMode={isEditMode}
        onUpdateTitle={(title) => applyEdit((s) => ({ ...s, title }))}
        onUpdateSubtitle={(subtitle) => applyEdit((s) => ({ ...s, subtitle }))}
      />

      <GovernanceMetricStrip
        overallComplianceScore={slide.overallComplianceScore || 98.6}
        chiefGovernanceOfficer={slide.chiefGovernanceOfficer || 'Alim Ul Karim'}
        cgoTitle={slide.cgoTitle || 'Chief Software Engineer'}
        isRegulatoryAuditPassed={slide.isRegulatoryAuditPassed ?? true}
        totalResolutions={totalResolutions}
      />

      <div className="grid grid-cols-3 gap-6 z-10 my-auto h-[610px] items-stretch">
        {pillars.map((pillar, idx) => (
          <GovernancePillarCard
            key={pillar.id}
            pillar={pillar}
            isActivePillar={idx === currentStep}
            isCompletedPillar={idx < currentStep}
          />
        ))}
      </div>

      <div className="plane-1-raised p-3 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold">
          <ShieldCheck size={14} /> Board Governance Charter Verified | Zero Regulatory Non-Compliance
        </span>
        <div className="flex items-center gap-4 text-slate-400">
          <span>Active Committee: {pillars[currentStep]?.pillarName || 'All Committees'}</span>
          <span>Step {currentStep + 1} of {Math.max(pillars.length, 1)}</span>
        </div>
      </div>
    </div>
  );
};
