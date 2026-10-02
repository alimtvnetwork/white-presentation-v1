import React from 'react';
import type { CaseStudyImpactSlideData } from '../../types/enterpriseArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { Award, Target, Zap, TrendingUp } from 'lucide-react';

export const CaseStudyImpactSlide: React.FC<{ slide: CaseStudyImpactSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const results = slide.quantifiedResults || [];

  const isChallengeActive = activeStep === 0;
  const isChallengePast = activeStep > 0;
  const challengeStyle: React.CSSProperties = isChallengeActive
    ? { opacity: 1.0, transform: 'scale(1.02)', zIndex: 20 }
    : isChallengePast ? { opacity: 0.75, transform: 'scale(1.0)' }
    : { opacity: 0.4, transform: 'scale(0.98)', filter: 'blur(1.25px)', pointerEvents: 'none' };

  const isSolutionActive = activeStep === 1;
  const isSolutionPast = activeStep > 1;
  const solutionStyle: React.CSSProperties = isSolutionActive
    ? { opacity: 1.0, transform: 'scale(1.02)', zIndex: 20 }
    : isSolutionPast ? { opacity: 0.75, transform: 'scale(1.0)' }
    : { opacity: 0.4, transform: 'scale(0.98)', filter: 'blur(1.25px)', pointerEvents: 'none' };

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-teal-500/10 text-teal-400 border border-teal-500/30">
            {slide.kicker || 'CLIENT IMPACT & QUANTIFIED PROOF'}
          </span>
          <span className="font-mono text-xs text-teal-300 bg-teal-500/10 px-2.5 py-0.5 rounded-full border border-teal-500/20">{slide.clientName} ({slide.clientIndustry})</span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[40px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >{slide.title || 'Case Study: Sovereign Transformation'}</h1>
      </div>

      <div className="z-10 grid grid-cols-12 gap-8 my-auto items-stretch">
        <div className="col-span-6 flex flex-col gap-6">
          <div style={challengeStyle} className={`p-6 rounded-2xl border transition-all duration-300 ${isChallengeActive ? 'bg-rose-500/10 border-rose-500 ring-2 ring-rose-500/40' : 'bg-slate-900/40 border-slate-800'}`}>
            <span className="font-mono text-xs text-rose-400 uppercase tracking-wider flex items-center gap-2 mb-2"><Target size={14} /> Architectural Challenge</span>
            <p className="font-poppins text-sm text-slate-300 leading-relaxed">{slide.challenge}</p>
          </div>
          <div style={solutionStyle} className={`p-6 rounded-2xl border transition-all duration-300 ${isSolutionActive ? 'bg-teal-500/10 border-teal-500 ring-2 ring-teal-500/40' : 'bg-slate-900/40 border-slate-800'}`}>
            <span className="font-mono text-xs text-teal-400 uppercase tracking-wider flex items-center gap-2 mb-2"><Zap size={14} /> Sovereign Solution Architecture</span>
            <p className="font-poppins text-sm text-slate-300 leading-relaxed">{slide.solution}</p>
          </div>
        </div>

        <div className="col-span-6 flex flex-col justify-center gap-4">
          <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">Quantified Business Yield</span>
          {results.map((res, idx) => {
            const stepOffset = idx + 2;
            const isYieldPast = activeStep > stepOffset;
            const isYieldActive = activeStep === stepOffset;
            const yieldStyle: React.CSSProperties = isYieldActive
              ? { opacity: 1.0, transform: 'scale(1.02)', zIndex: 20 }
              : isYieldPast ? { opacity: 0.75, transform: 'scale(1.0)' }
              : { opacity: 0.4, transform: 'scale(0.98)', filter: 'blur(1.25px)', pointerEvents: 'none' };
            return (
              <div key={idx} style={yieldStyle} className={`p-4 rounded-xl border flex items-center justify-between transition-all duration-300 ${isYieldActive ? 'bg-teal-500/20 border-teal-500 ring-2 ring-teal-500/40' : 'bg-slate-900/40 border-slate-800'}`}>
                <div><span className="font-mono text-xs text-slate-400 block">{res.label}</span><span className="font-poppins text-xs text-slate-500">{res.context}</span></div>
                <div className="font-ubuntu text-2xl font-black text-teal-400 flex items-center gap-1.5"><TrendingUp size={18} /> {res.metricValue}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="plane-1-raised p-4 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-teal-400 font-bold"><Award size={14} /> Kinetic Progression: Challenge (0) → Solution (1) → Yield (2+)</span>
        <span style={{ color: 'var(--pres-text-muted)' }}>Focus Stage {activeStep}</span>
      </div>
    </div>
  );
};
