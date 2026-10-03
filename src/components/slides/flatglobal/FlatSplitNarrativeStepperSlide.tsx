import React from 'react';
import type { FlatSplitNarrativeStepperSlideData } from '../../../types/flatGlobalSuiteTypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { SplitNarrativeCard } from './SplitNarrativeCard';
import { BookOpen, UserCheck, ChevronRight, Check } from 'lucide-react';

export const FlatSplitNarrativeStepperSlide: React.FC<{
  slide: FlatSplitNarrativeStepperSlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const stages = slide.stepperSteps || slide.stages || [];
  const currentStep = Math.min(activeStep, Math.max(0, stages.length - 1));

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10 flex items-start justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-amber-500/10 text-amber-900 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
              <BookOpen size={13} /> {slide.kicker || 'STRATEGIC ALIGNMENT'}
            </span>
            <span className="font-mono text-xs text-emerald-800 dark:text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
              <UserCheck size={11} /> Alim Ul Karim (Chief Software Engineer)
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
      </div>

      <div className="grid grid-cols-12 gap-8 z-10 my-auto h-[500px] items-stretch">
        <div className="col-span-6 flex flex-col justify-between p-6 rounded-3xl bg-slate-900/40 border border-slate-800">
          <div>
            <h2 className="font-ubuntu text-2xl font-bold text-slate-100 mb-4">{slide.narrativeHeading}</h2>
            <div className="space-y-3 mb-6">
              {slide.narrativeBodyParagraphs?.map((para, idx) => (
                <p key={idx} className="font-poppins text-xs text-slate-300 leading-relaxed">{para}</p>
              ))}
            </div>
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 font-mono text-xs text-amber-900 dark:text-amber-300 font-medium">
              {slide.strategicCallout}
            </div>
          </div>

          <div className="space-y-2 pt-4 border-t border-slate-800">
            {stages.map((stage, idx) => (
              <div
                key={stage.id || idx}
                className={`p-3 rounded-xl border flex items-center justify-between transition-all duration-200 ${
                  idx === currentStep
                    ? 'border-amber-500/80 bg-amber-500/10 text-slate-100'
                    : idx < currentStep
                    ? 'border-emerald-500/40 bg-emerald-950/20 text-slate-400'
                    : 'border-slate-800/80 bg-slate-950/40 text-slate-500'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-800 text-xs font-mono font-bold flex items-center justify-center">
                    {idx < currentStep ? <Check size={12} className="text-emerald-400" /> : idx + 1}
                  </span>
                  <span className="text-xs font-ubuntu font-bold">{stage.stageTitle}</span>
                </div>
                <ChevronRight size={14} className={idx === currentStep ? 'text-amber-400' : 'text-slate-600'} />
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-6 h-full">
          <SplitNarrativeCard
            activeStage={stages[currentStep]}
            activeStep={currentStep}
            totalSteps={stages.length}
          />
        </div>
      </div>
    </div>
  );
};
