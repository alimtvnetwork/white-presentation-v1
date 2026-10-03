import React from 'react';
import type { FlatTimelineMilestoneRailSlideData } from '../../../types/flatGlobalSuiteTypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { TimelineMilestoneNode } from './TimelineMilestoneNode';
import { CalendarRange, Activity, Flag, CheckCircle } from 'lucide-react';

export const FlatTimelineMilestoneRailSlide: React.FC<{
  slide: FlatTimelineMilestoneRailSlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const milestones = slide.milestones || [];
  const currentStep = Math.min(activeStep, Math.max(0, milestones.length - 1));
  const progressPercent = Math.round(((currentStep + 1) / Math.max(milestones.length, 1)) * 100);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10 flex items-start justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-amber-500/10 text-amber-900 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
              <CalendarRange size={13} /> {slide.kicker || 'PROJECT TIMELINE'}
            </span>
            <span className="font-mono text-xs text-cyan-800 dark:text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20 flex items-center gap-1">
              <Flag size={11} /> Target: {slide.targetCompletionDate}
            </span>
          </div>
          <h1
            style={{ color: 'var(--pres-text)' }}
            className="font-ubuntu text-[38px] font-black tracking-tight leading-none mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >{slide.title}</h1>
          <p
            style={{ color: 'var(--pres-text-muted)' }}
            className="font-poppins text-base max-w-4xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >{slide.subtitle}</p>
        </div>

        <div className="plane-1-raised px-5 py-3 rounded-2xl border border-slate-700/60 bg-slate-900/60 flex items-center gap-4 font-mono text-xs">
          <div>
            <div className="text-[10px] text-slate-400 uppercase">Progress Velocity</div>
            <div className="text-amber-900 dark:text-amber-300 font-bold text-lg">{progressPercent}%</div>
          </div>
          <div className="w-28 h-2 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-300" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 z-10 my-auto h-[480px] items-stretch">
        {milestones.map((m, idx) => (
          <TimelineMilestoneNode
            key={m.id || idx}
            milestone={m}
            index={idx}
            isActive={idx === currentStep}
            isCompleted={idx < currentStep}
          />
        ))}
      </div>

      <div className="plane-1-raised p-4 rounded-2xl border border-slate-700/60 dark:border-slate-800 bg-slate-950/80 z-10 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-6 text-slate-300">
          <span className="text-amber-900 dark:text-amber-300 font-bold flex items-center gap-1.5">
            <Activity size={14} /> Active Phase:
          </span>
          <span className="text-slate-100 font-bold">{milestones[currentStep]?.milestoneTitle}</span>
          <span className="text-cyan-400">{milestones[currentStep]?.dateRangeLabel}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-emerald-400 flex items-center gap-1 font-bold text-[11px]">
            <CheckCircle size={13} /> Velocity On Schedule
          </span>
          <span className="text-slate-400 text-xs">Checkpoint {currentStep + 1} of {milestones.length}</span>
        </div>
      </div>
    </div>
  );
};
