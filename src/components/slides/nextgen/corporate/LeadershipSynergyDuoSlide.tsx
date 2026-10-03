import React from 'react';
import type { LeadershipSynergyDuoSlideData } from '../../../../types/nextGenArchetypes';
import { createLeadershipSynergyDuoSlide } from '../../../../utils/nextGenSlideFactories';
import { useDeckStore } from '../../../../stores/deckStore';
import { THEME_PALETTES } from '../../../../themes/gradientTokens';
import { LeaderHeader } from './LeaderHeader';
import { LeaderCard } from './LeaderCard';
import { SynergyBridgeCard } from './SynergyBridgeCard';

interface LeadershipSynergyDuoSlideProps {
  slide?: LeadershipSynergyDuoSlideData;
  data?: LeadershipSynergyDuoSlideData;
}

export const LeadershipSynergyDuoSlide: React.FC<LeadershipSynergyDuoSlideProps> = ({
  slide,
  data: propsData,
}) => {
  const fallback = createLeadershipSynergyDuoSlide('default-leadership-synergy');
  const data = slide || propsData || fallback;
  const activeThemeId = useDeckStore((s) => s.activeThemeId);
  const isDark = Boolean(THEME_PALETTES[activeThemeId]?.isDark);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_70px] flex flex-col justify-between"
    >
      <LeaderHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        signoff={data.executiveSignoff}
        isDark={isDark}
      />

      <div className="grid grid-cols-3 gap-6 my-auto z-10 h-[680px]">
        <LeaderCard leader={data.leaderAlpha} roleTag="ALPHA" isDark={isDark} />
        <SynergyBridgeCard synergyBridge={data.synergyBridge} isDark={isDark} />
        <LeaderCard leader={data.leaderBeta} roleTag="BETA" isDark={isDark} />
      </div>
    </div>
  );
};
