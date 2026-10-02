import React from 'react';
import type { CustomerJourneyPhase } from '../../../types/enterpriseArchetypes';
import { Sparkles, Smile, Meh, Frown, AlertTriangle, Lightbulb } from 'lucide-react';

const EmotionBadge: React.FC<{ emotion: string }> = ({ emotion }) => {
  const isDelighted = emotion === 'delighted';
  const isSatisfied = emotion === 'satisfied';
  const isFrustrated = emotion === 'frustrated';
  if (isDelighted) {
    return <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30"><Sparkles size={12} /> Delighted</span>;
  }
  if (isSatisfied) {
    return <span className="flex items-center gap-1 text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/30"><Smile size={12} /> Satisfied</span>;
  }
  if (isFrustrated) {
    return <span className="flex items-center gap-1 text-[11px] font-mono text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/30"><Frown size={12} /> Frustrated</span>;
  }
  return <span className="flex items-center gap-1 text-[11px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/30"><Meh size={12} /> Neutral</span>;
};

interface JourneyStageCardProps {
  phase: CustomerJourneyPhase;
  phaseIdx: number;
  isSelected: boolean;
  onSelect: () => void;
}

export const JourneyStageCard: React.FC<JourneyStageCardProps> = ({
  phase,
  phaseIdx,
  isSelected,
  onSelect,
}) => (
  <div
    onClick={onSelect}
    className={`flex-1 p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
      isSelected
        ? 'plane-2-elevated border-amber-500/50 bg-amber-500/10 shadow-lg shadow-amber-950/30 ring-1 ring-amber-500/30'
        : 'plane-1-raised border-slate-800 bg-slate-900/50 hover:border-slate-700'
    }`}
  >
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-[11px] font-bold uppercase text-amber-400">Step 0{phaseIdx + 1}</span>
        <EmotionBadge emotion={phase.emotion} />
      </div>
      <h3 className="font-ubuntu text-base font-bold text-slate-100 mb-1">{phase.phaseTitle}</h3>
      <div className="p-2 rounded-lg bg-slate-950/40 border border-slate-800/80 mb-3">
        <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-[10px] uppercase block mb-0.5">Touchpoint</span>
        <span className="font-poppins text-xs font-semibold text-slate-200">{phase.touchpoint}</span>
      </div>
    </div>
    <div className="space-y-2 mt-2">
      {phase.painPoint && (
        <div className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-xs">
          <div className="flex items-center gap-1 text-[10px] font-mono font-bold uppercase text-rose-400 mb-0.5"><AlertTriangle size={11} /> Pain Point</div>
          <span className="font-poppins text-[11px] text-slate-300">{phase.painPoint}</span>
        </div>
      )}
      {phase.opportunity && (
        <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs">
          <div className="flex items-center gap-1 text-[10px] font-mono font-bold uppercase text-emerald-400 mb-0.5"><Lightbulb size={11} /> Opportunity</div>
          <span className="font-poppins text-[11px] text-slate-300">{phase.opportunity}</span>
        </div>
      )}
    </div>
  </div>
);
