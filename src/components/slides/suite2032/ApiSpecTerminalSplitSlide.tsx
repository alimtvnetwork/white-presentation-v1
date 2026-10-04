import React from 'react';
import type { ApiSpecTerminalSplitSlideData } from '../../../types/suite2032Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { resolveStepPhase, getStepLifecycleStyle } from '../../../utils/stepProgression';
import { Terminal, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';

export const ApiSpecTerminalSplitSlide: React.FC<{
  slide: ApiSpecTerminalSplitSlideData;
  activeStep?: number;
}> = ({ slide, activeStep: propStep }) => {
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const stages = slide?.terminalStages || [];
  const currentStep = Math.min(Math.max(0, propStep ?? storeStep ?? 0), Math.max(stages.length - 1, 0));
  const activeStage = stages[currentStep] || stages[0];

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] p-[56px_80px] flex flex-col justify-between select-none overflow-hidden font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-[16px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center gap-2">
              <Terminal size={16} /> {slide?.kicker || 'DEVELOPER EXPERIENCE & API ARCHITECTURE'}
            </span>
            <span className="font-mono text-[14px] px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700">OpenAPI {slide?.openApiVersion || 'v3.1.0'}</span>
            <span className="font-mono text-[14px] px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5"><ShieldCheck size={14} /> TLS 1.3 Enforced</span>
          </div>
          <h1 className="text-[40px] font-bold tracking-tight" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{slide?.title}</h1>
          <p className="text-[16px] text-slate-400 mt-1 max-w-5xl">{slide?.subtitle}</p>
        </div>
        <div className="font-mono text-[14px] bg-slate-900/90 border border-slate-800 px-4 py-2 rounded-xl text-cyan-400">{slide?.baseUrl || 'https://api.nexus.enterprise.io/v1'}</div>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto z-10 h-[590px]">
        <div className="col-span-5 plane-1-raised rounded-3xl p-6 border border-slate-800 bg-slate-900/50 flex flex-col justify-between">
          <div>
            <div className="text-[14px] font-mono font-bold uppercase text-[var(--pres-accent)] mb-3 tracking-wider">Operation Endpoints</div>
            <div className="space-y-3">
              {stages.map((st, idx) => {
                const phase = resolveStepPhase(idx, currentStep);
                return (
                  <div key={st.stepIndex} onClick={() => jumpToStep(idx)} style={getStepLifecycleStyle(phase)} className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${phase === 'active' ? 'bg-[var(--pres-card-bg)] border-[var(--pres-accent)] ring-1 ring-[var(--pres-accent)]' : 'bg-slate-950/60 border-slate-800'}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[14px] font-mono font-bold px-2.5 py-0.5 rounded-md ${st.httpMethod === 'POST' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'}`}>{st.httpMethod}</span>
                      <span className="text-[14px] font-mono text-purple-400 font-semibold">{st.latencyBenchmarkMs}ms</span>
                    </div>
                    <div className="text-[15px] font-bold text-slate-100 truncate">{st.operationName}</div>
                    <div className="text-[14px] font-mono text-slate-400 truncate">{st.endpointPath}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="pt-3 border-t border-slate-800/80">
            <div className="text-[14px] font-mono text-slate-400 uppercase mb-1">Required Headers</div>
            {(slide?.standardHeaders || []).slice(0, 2).map((h) => (
              <div key={h.id} className="text-[14px] font-mono flex items-center justify-between py-0.5 text-slate-300">
                <span className="text-cyan-400">{h.headerName}</span>
                <span className="text-slate-500 truncate max-w-[200px]">{h.headerValueDescription}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-7 plane-2-floating rounded-3xl border border-slate-700 bg-slate-950 p-6 flex flex-col justify-between shadow-[0_0_35px_rgba(0,0,0,0.6)]">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-rose-500/80" /><span className="w-3.5 h-3.5 rounded-full bg-amber-500/80" /><span className="w-3.5 h-3.5 rounded-full bg-emerald-500/80" />
                <span className="ml-3 font-mono text-[14px] text-slate-400">cURL Terminal Emulator</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-[14px] font-mono font-bold bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> 200 OK
                </span>
                <span className="text-[14px] font-mono text-slate-400">{activeStage?.latencyBenchmarkMs} ms</span>
              </div>
            </div>
            <div className="mt-3">
              <div className="text-[14px] font-mono text-slate-500 mb-1">$ Request</div>
              <pre className="font-mono text-[15px] text-cyan-300 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 overflow-x-auto whitespace-pre-wrap">{activeStage?.requestSnippet}</pre>
            </div>
            <div className="mt-2.5">
              <div className="text-[14px] font-mono text-slate-500 mb-1">$ Response (application/json)</div>
              <pre className="font-mono text-[15px] text-emerald-300 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 overflow-x-auto whitespace-pre-wrap max-h-[150px]">{activeStage?.responseSnippet}</pre>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 font-mono text-[14px] text-slate-400">
            <span className="text-cyan-400 flex items-center gap-1.5"><Zap size={14} /> Sub-Millisecond Gateway Active</span>
            <span className="text-emerald-400 flex items-center gap-1"><CheckCircle2 size={14} /> Spec Validated</span>
          </div>
        </div>
      </div>
    </div>
  );
};
