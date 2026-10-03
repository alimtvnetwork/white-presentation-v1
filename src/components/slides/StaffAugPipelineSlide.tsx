import React from 'react';
import type { StaffAugPipelineSlideData } from '../../types/extendedArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { VettingStagePill } from './pipeline/VettingStagePill';
import { Filter, Sparkles } from 'lucide-react';

export const StaffAugPipelineSlide: React.FC<{ slide: StaffAugPipelineSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const stages = slide.stages || slide.vettingStages || [];
  const activeStage = stages[activeStep] || stages[0];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="relative w-[1920px] h-[1080px] overflow-hidden select-none p-[80px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
            <Filter size={12} /> {slide.kicker || 'TALENT ARCHITECTURE'}
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">• Selectivity: {slide.yieldRatioText || '1,000 : 3 (0.3%)'}</span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[48px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Elite Engineering Vetting Funnel (1000:3 Ratio)'}
        </h1>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto z-10 items-stretch">
        <div className="col-span-8 flex flex-col gap-3">
          {stages.map((stage, idx) => (
            <VettingStagePill key={stage.id || idx} stage={stage} isActive={idx === activeStep} isPast={idx < activeStep} isFuture={idx > activeStep} />
          ))}
        </div>

        <div style={{ backgroundColor: 'var(--pres-card-bg, rgba(255, 255, 255, 0.05))', borderColor: 'var(--pres-card-border, rgba(255, 255, 255, 0.1))' }} className="col-span-4 p-6 rounded-3xl border flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-wider">Stage Inspector</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Gate 0{activeStage?.stageNumber || 1}
              </span>
            </div>
            <h3 className="font-ubuntu text-2xl font-bold mb-4" style={{ color: 'var(--pres-text)' }}>{activeStage?.stageName}</h3>
            <div className="space-y-4 text-xs font-mono" style={{ color: 'var(--pres-text-muted)' }}>
              <div className="p-3.5 rounded-xl bg-black/20 border border-white/5">
                <div className="text-[10px] uppercase tracking-wider mb-1 text-slate-300">Filter Criteria</div>
                <div className="font-poppins text-slate-200 leading-relaxed">{activeStage?.primaryFilterCriteria}</div>
              </div>
              <div className="p-3.5 rounded-xl bg-black/20 border border-white/5">
                <div className="text-[10px] uppercase tracking-wider mb-1 text-slate-300">Assessment Tool</div>
                <div className="font-poppins text-cyan-300 leading-relaxed">{activeStage?.assessmentTool}</div>
              </div>
              <div className="p-3.5 rounded-xl bg-black/20 border border-white/5">
                <div className="text-[10px] uppercase tracking-wider mb-1 text-slate-300">Technical Evaluator</div>
                <div className="font-poppins text-emerald-400 font-bold">Alim Ul Karim, Chief Software Engineer</div>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 font-mono text-xs flex items-center justify-between">
            <span className="text-emerald-300 font-bold flex items-center gap-1.5"><Sparkles size={14} /> Final Yield Ratio</span>
            <span className="text-emerald-400 font-bold">{slide.yieldRatioText || '1,000 : 3'}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between z-10 pt-4 border-t border-slate-700/30 font-mono text-xs" style={{ color: 'var(--pres-text-muted)' }}>
        <span className="text-emerald-400 font-bold">Bilateral Technical Evaluation • Extreme Ownership & Architecture Defense</span>
        <span className="opacity-80">Certified Deployable Engineering Roster</span>
      </div>
    </div>
  );
};
