import React, { useState } from 'react';
import type { DeveloperVelocityFlywheelSlideData } from '../../../../types/nextgen/deepTechGovernanceTypes';
import { DxHeader } from './DxHeader';
import { DxFlywheelGraphic } from './DxFlywheelGraphic';
import { DxFlywheelNode } from './DxFlywheelNode';
import { RefreshCw, GitCommit } from 'lucide-react';

interface Props {
  slide?: DeveloperVelocityFlywheelSlideData;
  data?: DeveloperVelocityFlywheelSlideData;
}

export const DeveloperVelocityFlywheelSlide: React.FC<Props> = ({ slide, data: propsData }) => {
  const data = slide || propsData;
  const [activeStage, setActiveStage] = useState<number>(0);

  if (!data) return null;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_70px] flex flex-col justify-between"
    >
      <DxHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        acceleration={data.flywheelAcceleration}
      />

      <div className="grid grid-cols-12 gap-6 my-auto items-stretch h-[640px]">
        <div className="col-span-5">
          <DxFlywheelGraphic activeStageIndex={activeStage} />
        </div>

        <div className="col-span-7 grid grid-cols-2 gap-5">
          {data.flywheelStages.map((stage, idx) => (
            <DxFlywheelNode
              key={stage.stageNumber}
              stage={stage}
              isActive={activeStage === idx}
              onClick={() => setActiveStage(idx)}
            />
          ))}
        </div>
      </div>

      <footer className="pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-xs font-mono">
        <span className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
          <RefreshCw size={14} className="text-violet-600 dark:text-violet-400" />
          DORA High-Performer Benchmark • Sub-Second Feedback Loop Enforced
        </span>
        <span className="flex items-center gap-1.5 text-violet-700 dark:text-violet-300 font-bold">
          <GitCommit size={14} /> Zero-Build Static AST Architecture Active
        </span>
      </footer>
    </div>
  );
};
