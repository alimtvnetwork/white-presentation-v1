import React, { useState } from 'react';
import type { CustomerExperienceJourneyDeltaSlideData } from '../../../../types/modern/boardroomStrategyTypes';
import { createCustomerExperienceJourneyDeltaSlide } from '../../../../utils/modern/boardroomStrategyFactories';
import { JourneyHeader } from './JourneyHeader';
import { SentimentMeter } from './SentimentMeter';
import { JourneyPhaseSplit } from './JourneyPhaseSplit';
import { Award, Sparkles } from 'lucide-react';

interface CustomerExperienceJourneyDeltaSlideProps {
  slide?: CustomerExperienceJourneyDeltaSlideData;
  data?: CustomerExperienceJourneyDeltaSlideData;
}

export const CustomerExperienceJourneyDeltaSlide: React.FC<CustomerExperienceJourneyDeltaSlideProps> = ({
  slide,
  data: pData,
}) => {
  const fallback = createCustomerExperienceJourneyDeltaSlide();
  const data = slide || pData || fallback;
  const [selectedStageId, setSelectedStageId] = useState<string | null>(null);

  const stages = data.journeyStages?.length ? data.journeyStages : fallback.journeyStages;
  const deltaSummary = data.deltaSummary || fallback.deltaSummary;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between"
    >
      <JourneyHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        customerExperienceLead={data.customerExperienceLead}
        isJourneyValidated={data.isJourneyValidated}
      />

      <div className="z-10 mb-5">
        <SentimentMeter deltaSummary={deltaSummary} />
      </div>

      <div className="grid grid-cols-4 gap-5 z-10 my-auto h-[480px] items-stretch">
        {stages.map((stage) => (
          <JourneyPhaseSplit
            key={stage.id}
            stage={stage}
            onClick={() => setSelectedStageId(stage.id)}
          />
        ))}
      </div>

      <footer className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 text-emerald-400 font-bold">
            <Award size={15} /> Customer Experience Delta Benchmark Exceeded
          </span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>
            Chief Software Engineer: <strong className="text-slate-200">Alim Ul Karim, Chief Software Engineer</strong>
          </span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span className="flex items-center gap-1.5 text-purple-300">
            <Sparkles size={13} /> Net Promoter Score +{deltaSummary.netPromoterScore}
          </span>
        </div>
      </footer>
    </div>
  );
};
