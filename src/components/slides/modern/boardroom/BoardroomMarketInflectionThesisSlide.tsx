import React, { useState } from 'react';
import type { BoardroomMarketInflectionThesisSlideData } from '../../../../types/modern/boardroomStrategyTypes';
import { createBoardroomMarketInflectionThesisSlide } from '../../../../utils/modern/boardroomStrategyFactories';
import { ThesisHeader } from './ThesisHeader';
import { InflectionCurveGraphic } from './InflectionCurveGraphic';
import { InflectionPillarCard } from './InflectionPillarCard';
import { Award, Target } from 'lucide-react';

interface BoardroomMarketInflectionThesisSlideProps {
  slide?: BoardroomMarketInflectionThesisSlideData;
  data?: BoardroomMarketInflectionThesisSlideData;
}

export const BoardroomMarketInflectionThesisSlide: React.FC<BoardroomMarketInflectionThesisSlideProps> = ({
  slide,
  data: pData,
}) => {
  const fallback = createBoardroomMarketInflectionThesisSlide();
  const data = slide || pData || fallback;
  const [selectedPillarId, setSelectedPillarId] = useState<string | null>(null);

  const pillars = data.thesisPillars?.length ? data.thesisPillars : fallback.thesisPillars;
  const tamSummary = data.tamSummary || fallback.tamSummary;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between"
    >
      <ThesisHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        executiveSponsor={data.executiveSponsor}
        isStrategicPriority={data.isStrategicPriority}
      />

      <div className="z-10 mb-5">
        <InflectionCurveGraphic tamSummary={tamSummary} />
      </div>

      <div className="grid grid-cols-4 gap-5 z-10 my-auto h-[480px] items-stretch">
        {pillars.map((pillar) => (
          <InflectionPillarCard
            key={pillar.id}
            pillar={pillar}
            onClick={() => setSelectedPillarId(pillar.id)}
          />
        ))}
      </div>

      <footer className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 text-purple-400 font-bold">
            <Award size={15} /> Boardroom Strategy Thesis Approved
          </span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>
            Chief Software Engineer: <strong className="text-slate-200">Alim Ul Karim, Chief Software Engineer</strong>
          </span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span className="flex items-center gap-1.5 text-cyan-300">
            <Target size={13} /> High-Moat Inflection Verified
          </span>
        </div>
      </footer>
    </div>
  );
};
