import React from 'react';
import type { InteractiveBranchingCloseSlideData } from '../../../types/flatGlobalSuiteTypes';
import { useDeckStore } from '../../../stores/deckStore';
import { BranchingActionCard } from './BranchingActionCard';
import { HelpCircle, AlertOctagon, UserCheck } from 'lucide-react';

const QUESTIONS = [
  'Can monolithic database write locks survive 10x traffic spikes?',
  'Will centralized gateway timeouts breach customer SLAs in 2027?',
  'Is your organization prepared to accept 1,400ms edge latency?',
];

export const InteractiveBranchingCloseSlide: React.FC<{
  slide: InteractiveBranchingCloseSlideData;
}> = ({ slide }) => {
  const { deck, goToSlide, nextSlide } = useDeckStore();
  const yesTarget = slide.yesTargetSlideId || slide.yesOption?.targetSlideId;
  const noTarget = slide.noTargetSlideId || slide.noOption?.targetSlideId;

  const handleBranchSelect = (targetId?: string) => {
    const targetIdx = targetId ? deck.slides.findIndex((s) => s.id === targetId) : -1;
    const hasValidTarget = targetIdx >= 0;
    if (hasValidTarget) {
      goToSlide(targetIdx);
      return;
    }
    nextSlide();
  };

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_90px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center justify-between mb-3">
          <span className="kicker-pill-badge">{slide.kicker || 'STRATEGIC DECISION GATEWAY'}</span>
          <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <UserCheck size={14} className="text-cyan-400" /> {slide.executivePresenter || 'Alim Ul Karim, Chief Software Engineer'}
          </span>
        </div>
        <h1 className="font-ubuntu text-5xl font-black tracking-tight text-white mb-2">
          {slide.headline || 'Strategic Inflection Point: Two Divergent Architectures'}
        </h1>
        <p className="font-poppins text-lg text-slate-300 max-w-[1400px]">
          {slide.promptQuestion || 'Select an execution trajectory to proceed with deployment verification.'}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5 z-10">
        {QUESTIONS.map((q, idx) => (
          <div key={idx} className="plane-1-raised p-4 rounded-2xl border border-slate-800 bg-slate-950/60 flex items-start gap-3">
            <HelpCircle size={18} className="text-indigo-400 shrink-0 mt-0.5" />
            <p className="font-mono text-xs text-slate-300 leading-relaxed">{q}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-8 z-10">
        <BranchingActionCard
          keyTrigger="Y"
          label={slide.yesOption?.label || 'Authorize Autonomous Global Rollout'}
          description={slide.yesOption?.description || 'Deploy real-time mesh with multi-region zero-trust consensus and sub-10ms routing.'}
          badge={slide.yesOption?.badge}
          isRecommendedOption={true}
          hasKeyboardHints={slide.hasKeyboardHints ?? true}
          onSelect={() => handleBranchSelect(yesTarget)}
        />
        <BranchingActionCard
          keyTrigger="N"
          label={slide.noOption?.label || 'Retain Monolithic Quarantine'}
          description={slide.noOption?.description || 'Defer sovereign edge deployment and maintain existing centralized database locks.'}
          badge={slide.noOption?.badge}
          isRecommendedOption={false}
          hasKeyboardHints={slide.hasKeyboardHints ?? true}
          onSelect={() => handleBranchSelect(noTarget)}
        />
      </div>

      <div className="plane-1-raised p-3.5 rounded-xl border border-amber-500/30 bg-amber-950/20 z-10 flex items-center justify-between font-mono text-xs">
        <span className="text-amber-300 flex items-center gap-2">
          <AlertOctagon size={16} /> {slide.scarcityWarning || 'Decision window closes in 48 hours before automated quarantine reallocation.'}
        </span>
        <span className="text-slate-400">Context: {slide.decisionContext || 'Sub-10ms failover active'}</span>
      </div>
    </div>
  );
};
