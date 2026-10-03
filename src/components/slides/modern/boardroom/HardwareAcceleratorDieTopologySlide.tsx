import React, { useState } from 'react';
import type { HardwareAcceleratorDieTopologySlideData } from '../../../../types/modern/boardroomStrategyTypes';
import { createHardwareAcceleratorDieTopologySlide } from '../../../../utils/modern/boardroomStrategyFactories';
import { SiliconHeader } from './SiliconHeader';
import { DieFloorplanGraphic } from './DieFloorplanGraphic';
import { CoreSpecCard } from './CoreSpecCard';
import { Award, Cpu } from 'lucide-react';

interface HardwareAcceleratorDieTopologySlideProps {
  slide?: HardwareAcceleratorDieTopologySlideData;
  data?: HardwareAcceleratorDieTopologySlideData;
}

export const HardwareAcceleratorDieTopologySlide: React.FC<HardwareAcceleratorDieTopologySlideProps> = ({
  slide,
  data: pData,
}) => {
  const fallback = createHardwareAcceleratorDieTopologySlide();
  const data = slide || pData || fallback;
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);

  const dieBlocks = data.dieBlocks?.length ? data.dieBlocks : fallback.dieBlocks;
  const telemetry = data.packageTelemetry || fallback.packageTelemetry;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between"
    >
      <SiliconHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        siliconArchitect={data.siliconArchitect}
        isDieTapeOutVerified={data.isDieTapeOutVerified}
      />

      <div className="z-10 mb-5">
        <DieFloorplanGraphic packageTelemetry={telemetry} />
      </div>

      <div className="grid grid-cols-4 gap-5 z-10 my-auto h-[480px] items-stretch">
        {dieBlocks.map((block) => (
          <CoreSpecCard
            key={block.id}
            block={block}
            onClick={() => setSelectedBlockId(block.id)}
          />
        ))}
      </div>

      <footer className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 text-amber-400 font-bold">
            <Award size={15} /> Silicon Tape-Out Floorplan Approved
          </span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>
            Chief Software Engineer: <strong className="text-slate-200">Alim Ul Karim, Chief Software Engineer</strong>
          </span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span className="flex items-center gap-1.5 text-cyan-300">
            <Cpu size={13} /> {telemetry.totalTransistorCount} Architecture
          </span>
        </div>
      </footer>
    </div>
  );
};
