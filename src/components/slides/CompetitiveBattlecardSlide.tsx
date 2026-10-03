import React from 'react';
import type { CompetitiveBattlecardSlideData } from '../../types/globalPptArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { BattlecardHeader } from './battlecard/BattlecardHeader';
import { BattlecardPillarSelector } from './battlecard/BattlecardPillarSelector';
import { BattlecardCompetitorTable } from './battlecard/BattlecardCompetitorTable';
import { BattlecardObjectionDrawer } from './battlecard/BattlecardObjectionDrawer';
import { ShieldCheck } from 'lucide-react';

export const CompetitiveBattlecardSlide: React.FC<{
  slide: CompetitiveBattlecardSlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);

  const pillars = slide.battlecardPillars || [];
  const currentStep = Math.min(activeStep, Math.max(0, pillars.length - 1));
  const activePillar = pillars[currentStep];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_90px] flex flex-col justify-between"
    >
      <BattlecardHeader
        slide={slide}
        isEditMode={isEditMode}
        onUpdateTitle={(title) => applyEdit((s) => ({ ...s, title }))}
        onUpdateSubtitle={(subtitle) => applyEdit((s) => ({ ...s, subtitle }))}
      />

      <div className="grid grid-cols-12 gap-8 z-10 my-auto h-[640px] items-stretch">
        <div className="col-span-5 flex flex-col justify-between overflow-y-auto pr-1">
          <BattlecardPillarSelector
            pillars={pillars}
            activeStep={currentStep}
          />
        </div>

        <div className="col-span-7 flex flex-col justify-between overflow-y-auto space-y-4 pr-1">
          <div>
            <div className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2">
              Competitive Parity & Market Share Breakdown
            </div>
            <BattlecardCompetitorTable
              competitors={activePillar?.competitors || []}
            />
          </div>

          <div>
            <div className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2">
              Hardened Objection Handling & Evidentiary Proof Points
            </div>
            <BattlecardObjectionDrawer
              objections={activePillar?.objections || []}
            />
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-3 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-indigo-400 font-bold">
          <ShieldCheck size={14} /> Competitive Intelligence Verified | 100% Objection Proof Points Backed by Metrics
        </span>
        <div className="flex items-center gap-4 text-slate-400">
          <span>Active Pillar: {activePillar?.pillarTitle || 'All Pillars'}</span>
          <span>Pillar {currentStep + 1} of {Math.max(pillars.length, 1)}</span>
        </div>
      </div>
    </div>
  );
};
