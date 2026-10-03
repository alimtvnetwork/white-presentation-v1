import React from 'react';
import type { ThreatIntelligenceFeedSlideData } from '../../types/sovereignOperationsArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { ThreatHeader } from './threatintel/ThreatHeader';
import { ThreatSeverityStrip } from './threatintel/ThreatSeverityStrip';
import { ThreatActorList } from './threatintel/ThreatActorList';
import { CveVulnerabilityTable } from './threatintel/CveVulnerabilityTable';
import { ThreatPerimeterFooter } from './threatintel/ThreatPerimeterFooter';

export const ThreatIntelligenceFeedSlide: React.FC<{
  slide: ThreatIntelligenceFeedSlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const threatFeed = slide.threatFeed || [];
  const perimeterZones = slide.perimeterZones || [];
  const totalBlocked = perimeterZones.reduce((acc, z) => acc + (z.blockedAttacksLast24h || 0), 0);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_80px] flex flex-col justify-between"
    >
      <ThreatHeader
        kicker={slide.kicker}
        title={slide.title || 'Real-Time Threat Intelligence & Defense Perimeter'}
        subtitle={slide.subtitle}
        feedSource={slide.feedSource || 'Enterprise SIEM Engine'}
        isAutomatedMitigationActive={slide.isAutomatedMitigationActive}
        isEditMode={isEditMode}
        onUpdateTitle={(title) => applyEdit((s) => ({ ...s, title }))}
        onUpdateSubtitle={(subtitle) => applyEdit((s) => ({ ...s, subtitle }))}
      />

      <ThreatSeverityStrip
        threatLevel={slide.threatLevel || 'GUARDED'}
        containmentRatePercent={slide.containmentRatePercent ?? 99.7}
        activeThreatsCount={threatFeed.length}
        blockedAttacks24h={totalBlocked || 421852}
      />

      <div className="grid grid-cols-12 gap-6 items-stretch z-10 my-auto">
        <div className="col-span-7 h-full">
          <ThreatActorList threatFeed={threatFeed} />
        </div>
        <div className="col-span-5 h-full">
          <CveVulnerabilityTable perimeterZones={perimeterZones} />
        </div>
      </div>

      <ThreatPerimeterFooter
        socCommander={slide.socCommander || 'Alim Ul Karim'}
        commanderTitle={slide.commanderTitle || 'Chief Software Engineer'}
        isAutomatedMitigationActive={slide.isAutomatedMitigationActive ?? true}
      />
    </div>
  );
};
