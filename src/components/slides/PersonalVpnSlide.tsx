import React from 'react';
import type { PersonalVpnSlideData } from '../../types/extendedArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { getStepPhase } from '../../utils/stepProgression';
import { VpnHeader } from './vpn/VpnHeader';
import { VpnNodeCard } from './vpn/VpnNodeCard';
import { VpnProtocolInspector } from './vpn/VpnProtocolInspector';
import { VpnFooter } from './vpn/VpnFooter';

export const PersonalVpnSlide: React.FC<{ slide: PersonalVpnSlideData }> = ({ slide }) => {
  const activeStep = useDeckStore((s) => s.activeStep);
  const { jumpToStep } = useDeckStore();
  const nodes = slide.nodes || [];
  const safeActiveIdx = Math.min(Math.max(0, activeStep), Math.max(0, nodes.length - 1));
  const activeNode = nodes[safeActiveIdx] || nodes[0];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <VpnHeader
        kicker={slide.kicker}
        title={slide.title}
        subtitle={slide.subtitle}
        protocol={slide.activeProtocol}
        encryptionSuite={slide.encryptionSuite}
      />

      <div className="z-10 my-auto grid grid-cols-12 gap-8 items-stretch h-[680px]">
        <div className="col-span-8 flex flex-col justify-between overflow-hidden">
          <div className="flex flex-col gap-4 justify-center flex-1 pr-2">
            {nodes.map((node, idx) => {
              const phase = getStepPhase(idx, activeStep);
              const isActive = idx === safeActiveIdx;
              return (
                <VpnNodeCard
                  key={node.id || idx}
                  node={node}
                  index={idx}
                  phase={phase}
                  isActive={isActive}
                  onSelect={() => jumpToStep(idx)}
                />
              );
            })}
          </div>
        </div>

        <div className="col-span-4 h-full">
          <VpnProtocolInspector
            activeNode={activeNode}
            protocol={slide.activeProtocol || 'WireGuard'}
            encryptionSuite={slide.encryptionSuite || 'ChaCha20-Poly1305'}
          />
        </div>
      </div>

      <VpnFooter
        totalServersCount={slide.totalServersCount}
        totalCountriesCount={slide.totalCountriesCount}
        networkSummaryNotes={slide.networkSummaryNotes}
      />
    </div>
  );
};
