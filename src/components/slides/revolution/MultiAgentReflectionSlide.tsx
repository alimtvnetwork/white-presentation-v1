// lint-allow: file-size reason="MultiAgentReflectionSlide kinetic 4-step orchestration" max=120
import React from 'react';
import type { MultiAgentReflectionSlideData } from '../../../types/kineticRevolutionArchetypes';
import { createMultiAgentReflectionSlide } from '../../../utils/kineticRevolutionFactories';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Bot, CheckCircle2, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';

const STAGES = [
  { index: 0, title: 'Planner Proposal', desc: 'DAG task decomposition' },
  { index: 1, title: 'Executor Synthesis', desc: 'Zero-defect code generation' },
  { index: 2, title: 'Critic Stress-Test', desc: 'Adversarial boundary check' },
  { index: 3, title: 'Verifier Proof', desc: 'Formal consensus signoff' },
];

export const MultiAgentReflectionSlide: React.FC<{ slide?: MultiAgentReflectionSlideData; data?: MultiAgentReflectionSlideData }> = ({ slide, data: pData }) => {
  const fallback = createMultiAgentReflectionSlide('default-multi-agent');
  const data = slide || pData || fallback;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), STAGES.length - 1);
  const agents = data.agents?.length ? data.agents : fallback.agents;
  const exchanges = data.exchanges?.length ? data.exchanges : fallback.exchanges;
  const verdicts = data.verdicts?.length ? data.verdicts : fallback.verdicts;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
              <Bot size={15} className="text-violet-500" />
              {data.kicker || 'AUTONOMOUS REASONING ARCHITECTURE'}
            </span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-500" /> Consensus Score: {data.consensusConvergenceScore} Unanimous
            </span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data.title || 'Multi-Agent Reflection & Deliberation: Consensus Reasoning Trees'}
          </h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data.subtitle || 'Autonomous multi-persona deliberation loop where Planner, Executor, Critic, and Verifier agents iteratively converge toward mathematically proven consensus.'}
          </p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Framework</span><span className="text-xs font-bold text-slate-800 dark:text-slate-200">{data.orchestrationFramework}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Deliberation</span><span className="text-lg font-bold text-slate-900 dark:text-sky-400">{data.totalDeliberationRounds} Rounds</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Monadic Result</span><span className="text-xs font-bold text-emerald-400">Validated Pass</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        {STAGES.map((st, idx) => {
          const isActive = idx === currentStep;
          const isCompleted = idx < currentStep;
          return (
            <button key={st.index} onClick={() => jumpToStep(idx)} className={`text-left p-3 rounded-xl border transition-all cursor-pointer font-mono text-xs flex items-center justify-between ${isActive ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-[0_0_16px_var(--pres-accent)] text-white' : isCompleted ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300' : 'border-slate-800/80 bg-black/20 opacity-40 text-slate-400'}`}>
              <div className="flex items-center gap-2.5">
                <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${isActive ? 'bg-[var(--pres-accent)] text-white' : isCompleted ? 'bg-emerald-500 text-slate-900' : 'bg-slate-800 text-slate-300'}`}>{isCompleted ? '✓' : idx + 1}</span>
                <span className="font-bold">{st.title}</span>
              </div>
              <span className="text-[10px] opacity-75 truncate max-w-[130px]">{st.desc}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-12 gap-5 z-10 my-auto h-[490px] items-stretch">
        <div className="col-span-6 grid grid-cols-2 gap-3">
          {agents.map((ag) => (
            <div key={ag.id} className={`plane-2-elevated p-4 rounded-2xl border flex flex-col justify-between ${ag.id === agents[currentStep]?.id ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/10 shadow-[0_0_12px_var(--pres-accent)]' : 'border-slate-700/60'}`}>
              <div className="flex justify-between items-center pb-2 border-b border-slate-700/40">
                <span className="font-mono text-xs font-bold text-slate-100 flex items-center gap-1.5"><Sparkles size={13} className="text-violet-400" /> {ag.agentRole}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">{ag.confidenceScorePercent}% Conf</span>
              </div>
              <p className="font-mono text-[11px] text-slate-400 my-2 leading-relaxed">{ag.agentSpecialization}</p>
              <div className="pt-2 border-t border-slate-700/40 flex justify-between items-center font-mono text-[10px] text-slate-400">
                <span>Model: {ag.modelEngine}</span>
                <span className="text-emerald-400 font-bold">{ag.critiqueIterations} Iterations</span>
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-6 flex flex-col justify-between gap-3">
          <div className="plane-2-elevated p-4 rounded-2xl border border-slate-700/60 flex-1 flex flex-col justify-between">
            <span className="font-mono text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-2"><MessageSquare size={14} /> Deliberation Round Telemetry</span>
            <div className="space-y-2 my-2">
              {exchanges.slice(0, 3).map((ex) => (
                <div key={ex.id} className="p-2.5 rounded-xl border border-slate-700/50 bg-slate-800/20 font-mono text-xs flex justify-between items-start">
                  <div>
                    <span className="text-[10px] text-violet-400 uppercase font-bold block">Round {ex.roundNumber} • {ex.exchangeType}</span>
                    <span className="text-slate-300 text-[11px]">{ex.summaryContent}</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-bold shrink-0 ml-2">Verified</span>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t border-slate-700/40 space-y-1">
              {verdicts.map((v) => (
                <div key={v.id} className="flex justify-between font-mono text-[11px]">
                  <span className="text-slate-400">{v.verdictClause}</span>
                  <span className="text-emerald-400 font-bold">{v.majorityRatio}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> Formal Consensus Attestation: Verified</span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Lead Architect: <strong className="text-slate-200">Alim Ul Karim (Chief Software Engineer)</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>AST Verification: <span className="text-emerald-400">Zero Inconsistencies</span></span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span>Active Stage: {STAGES[currentStep].title}</span>
          <span>Step {currentStep + 1} of {STAGES.length}</span>
        </div>
      </div>
    </div>
  );
};
