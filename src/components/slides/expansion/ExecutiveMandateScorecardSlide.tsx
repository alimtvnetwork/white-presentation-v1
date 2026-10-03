import React from 'react';
import type { ExecutiveMandateScorecardSlideData } from '../../../types/globalPptExpansionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { ShieldCheck, CheckCircle2, Award, TrendingUp } from 'lucide-react';

export const ExecutiveMandateScorecardSlide: React.FC<{ slide: ExecutiveMandateScorecardSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const stages = slide.mandateStages || [];
  const items = slide.mandateItems || [];
  const currentStep = Math.min(activeStep, Math.max(0, stages.length - 1));
  const lead = `${slide.leadArchitect || 'Alim Ul Karim'}, ${slide.leadRole || 'Chief Software Engineer'}`;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="kicker-pill-badge mb-2 font-mono">{slide.kicker || 'STRATEGIC GOVERNANCE'}</span>
          <h1
            className="font-ubuntu text-4xl font-black text-white tracking-tight"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >{slide.title || 'Executive Mandate Scorecard: Strategic Capital Alignment'}</h1>
          <p className="font-poppins text-base text-slate-300 mt-1 max-w-[1200px]">{slide.subtitle || 'Quarterly governance review tracking capital allocation and operational execution across strategic pillars.'}</p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60 font-bold text-cyan-300">
            <Award size={14} className="text-cyan-400" /> {slide.reportingFiscalYear || 'FY2027'}-{slide.reportingQuarter || 'Q1'}
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60 font-bold text-emerald-300">
            <TrendingUp size={14} className="text-emerald-400" /> {slide.capitalEfficiencyRatio || '3.85x ROI'}
          </span>
        </div>
      </div>

      <div className="z-10 grid grid-cols-4 gap-4 p-3 bg-slate-950/60 border border-slate-800/80 rounded-2xl">
        {stages.map((st, idx) => (
          <div key={st.stepIndex || idx} className={`p-3 rounded-xl border transition-all ${idx === currentStep ? 'bg-cyan-950/40 border-cyan-400/80 shadow-lg' : idx < currentStep ? 'bg-slate-900/50 border-emerald-500/40' : 'bg-slate-900/20 border-slate-800/40 opacity-60'}`}>
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-xs font-bold text-slate-400">STAGE 0{st.stepIndex}</span>
              {idx < currentStep ? <CheckCircle2 size={14} className="text-emerald-400" /> : <div className={`w-2 h-2 rounded-full ${idx === currentStep ? 'bg-cyan-400 animate-ping' : 'bg-slate-600'}`} />}
            </div>
            <h4 className="font-ubuntu text-sm font-bold text-white truncate">{st.stageName}</h4>
            <p className="font-poppins text-xs text-slate-400 truncate mt-0.5">{st.stageDescription}</p>
          </div>
        ))}
      </div>

      <div className="z-10 grid grid-cols-4 gap-5 my-auto">
        {items.slice(0, 4).map((it, idx) => (
          <div key={it.id || idx} className={`p-5 rounded-2xl border transition-all flex flex-col justify-between h-[420px] ${it.isActive || idx === currentStep ? 'bg-slate-900/90 border-cyan-500/60 shadow-xl' : 'bg-slate-950/70 border-slate-800/80'}`}>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-cyan-400">{it.pillar}</span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase border ${it.ragStatus === 'green' ? 'bg-emerald-950/60 text-emerald-300 border-emerald-700/50' : it.ragStatus === 'amber' ? 'bg-amber-950/60 text-amber-900 dark:text-amber-300 border-amber-700/50' : 'bg-cyan-950/60 text-cyan-300 border-cyan-700/50'}`}>{it.ragStatus}</span>
              </div>
              <h3 className="font-ubuntu text-base font-bold text-white leading-snug mb-2">{it.mandateName}</h3>
              <p className="font-poppins text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4">{it.objectiveSummary}</p>
            </div>
            <div className="space-y-3 pt-3 border-t border-slate-800 font-mono text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Owner:</span>
                <span className="font-bold text-slate-200">{it.executiveOwner}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Capital:</span>
                <span className="font-bold text-emerald-400">{it.allocatedCapitalFormatted}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Target ROI:</span>
                <span className="font-bold text-cyan-300">{it.roiProjected}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="z-10 flex items-center justify-between font-mono text-xs text-slate-400 border-t border-slate-800/80 pt-3">
        <span className="flex items-center gap-2">
          <ShieldCheck size={14} className="text-emerald-400" />
          <span>Fiduciary Governance: Audit committee endorsement verified under strict statutory oversight</span>
        </span>
        <span className="text-cyan-400 font-semibold">{lead}</span>
      </div>
    </div>
  );
};
