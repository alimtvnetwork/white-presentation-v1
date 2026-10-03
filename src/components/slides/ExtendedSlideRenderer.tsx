import React from 'react';
import type { SlideData } from '../../types/presentation';
import { PersonalVpnSlide } from './PersonalVpnSlide';
import { MeetingTranscriptSlide } from './MeetingTranscriptSlide';
import { LlmBenchmarkSlide } from './LlmBenchmarkSlide';
import { ServicesGravitySlide } from './ServicesGravitySlide';
import { SeoDominanceSlide } from './SeoDominanceSlide';
import { StaffAugPipelineSlide } from './StaffAugPipelineSlide';
import { CraftsmanshipBenchmarkSlide } from './CraftsmanshipBenchmarkSlide';
import { WeeklyCadenceSlide } from './WeeklyCadenceSlide';
import { CompetitiveMoatSlide } from './CompetitiveMoatSlide';
import { RapidFeedbackSlide } from './RapidFeedbackSlide';
import { InteractivePollSlide } from './InteractivePollSlide';
import { LiveQaSlide } from './LiveQaSlide';
import { EmbedStageSlide } from './EmbedStageSlide';
import { CountdownLaunchSlide } from './CountdownLaunchSlide';
import { ExecutiveTakeawaysSlide } from './ExecutiveTakeawaysSlide';
import { ExpandedSlideRenderer } from './ExpandedSlideRenderer';
import { EnterpriseSlideRenderer } from './EnterpriseSlideRenderer';

export const ExtendedSlideRenderer: React.FC<{ slide: SlideData }> = ({ slide }) => {
  switch (slide.type) {
    case 'personal-vpn': return <PersonalVpnSlide slide={slide as any} />;
    case 'meeting-transcript': return <MeetingTranscriptSlide slide={slide as any} />;
    case 'llm-benchmark': return <LlmBenchmarkSlide slide={slide as any} />;
    case 'services-gravity': return <ServicesGravitySlide slide={slide as any} />;
    case 'seo-dominance': return <SeoDominanceSlide slide={slide as any} />;
    case 'staff-aug-pipeline': return <StaffAugPipelineSlide slide={slide as any} />;
    case 'craftsmanship-benchmark': return <CraftsmanshipBenchmarkSlide slide={slide as any} />;
    case 'weekly-cadence': return <WeeklyCadenceSlide slide={slide as any} />;
    case 'competitive-moat': return <CompetitiveMoatSlide slide={slide as any} />;
    case 'rapid-feedback': return <RapidFeedbackSlide slide={slide as any} />;
    case 'interactive-poll': return <InteractivePollSlide slide={slide as any} />;
    case 'live-qa': return <LiveQaSlide slide={slide as any} />;
    case 'embed-stage': return <EmbedStageSlide slide={slide as any} />;
    case 'countdown-launch': return <CountdownLaunchSlide slide={slide as any} />;
    case 'executive-takeaways': return <ExecutiveTakeawaysSlide slide={slide as any} />;
    default: return <ExpandedSlideRenderer slide={slide} />;
  }
};
