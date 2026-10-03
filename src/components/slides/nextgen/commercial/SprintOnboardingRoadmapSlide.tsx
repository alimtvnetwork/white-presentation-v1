import React from 'react';
import type { SprintOnboardingRoadmapSlideData } from '../../../../types/nextGenArchetypes';
import { createSprintOnboardingRoadmapSlide } from '../../../../utils/nextGenSlideFactories';
import { RoadmapHeader } from './RoadmapHeader';
import { RoadmapPhaseCard } from './RoadmapPhaseCard';
import { ReadinessScoreBar } from './ReadinessScoreBar';

interface SprintOnboardingRoadmapSlideProps {
  slide?: SprintOnboardingRoadmapSlideData;
  data?: SprintOnboardingRoadmapSlideData;
}

export const SprintOnboardingRoadmapSlide: React.FC<SprintOnboardingRoadmapSlideProps> = ({
  slide,
  data: propsData,
}) => {
  const fallback = createSprintOnboardingRoadmapSlide('default-onboarding');
  const data = slide || propsData || fallback;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_70px] flex flex-col justify-between"
    >
      <RoadmapHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        onboardingTrack={data.onboardingTrack}
        engineerPersona={data.engineerPersona}
      />

      <div className="grid grid-cols-4 gap-5 my-auto z-10 h-[520px]">
        {data.milestones.map((milestone, idx) => (
          <RoadmapPhaseCard key={milestone.id} milestone={milestone} index={idx} />
        ))}
      </div>

      <ReadinessScoreBar score={data.readinessScore} />
    </div>
  );
};
