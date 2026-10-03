import React, { useState } from 'react';
import type { ExecutiveBoardMandateCtaSlideData } from '../../../../types/modern/boardroomStrategyTypes';
import { createExecutiveBoardMandateCtaSlide } from '../../../../utils/modern/boardroomStrategyFactories';
import { MandateHeader } from './MandateHeader';
import { MilestoneCard } from './MilestoneCard';
import { SignatureBlock } from './SignatureBlock';
import { Award, CheckCircle } from 'lucide-react';

interface ExecutiveBoardMandateCtaSlideProps {
  slide?: ExecutiveBoardMandateCtaSlideData;
  data?: ExecutiveBoardMandateCtaSlideData;
}

export const ExecutiveBoardMandateCtaSlide: React.FC<ExecutiveBoardMandateCtaSlideProps> = ({
  slide,
  data: pData,
}) => {
  const fallback = createExecutiveBoardMandateCtaSlide();
  const data = slide || pData || fallback;
  const [selectedPillarId, setSelectedPillarId] = useState<string | null>(null);

  const pillars = data.mandatePillars?.length ? data.mandatePillars : fallback.mandatePillars;
  const resolutionSummary = data.resolutionSummary || fallback.resolutionSummary;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between"
    >
      <MandateHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        resolutionSummary={resolutionSummary}
      />

      <div className="grid grid-cols-4 gap-5 z-10 my-auto h-[480px] items-stretch">
        {pillars.map((pillar) => (
          <MilestoneCard
            key={pillar.id}
            pillar={pillar}
            onClick={() => setSelectedPillarId(pillar.id)}
          />
        ))}
      </div>

      <div className="z-10 mb-2">
        <SignatureBlock
          chiefSoftwareEngineer={data.chiefSoftwareEngineer || 'Alim Ul Karim, Chief Software Engineer'}
          cryptographicSignoffHash={data.cryptographicSignoffHash}
          hasBoardApprovalSeal={data.hasBoardApprovalSeal}
        />
      </div>

      <footer className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 text-emerald-400 font-bold">
            <Award size={15} /> Board Resolution Enacted & Adopted
          </span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>
            Signoff: <strong className="text-slate-200">Alim Ul Karim, Chief Software Engineer</strong>
          </span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span className="flex items-center gap-1.5 text-cyan-300">
            <CheckCircle size={13} /> {resolutionSummary.boardVoteStatus}
          </span>
        </div>
      </footer>
    </div>
  );
};
