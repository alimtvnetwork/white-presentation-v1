// lint-allow: file-size reason="AgenticEvalRedTeamSlide kinetic 4-stage adversarial harness" max=120
import React from 'react';
import type { AgenticEvalRedTeamSlideData } from '../../../types/globalPptNextGenArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { ShieldAlert, CheckCircle2, ShieldCheck, Activity, Terminal } from 'lucide-react';

const DEF_STAGES = [
  { stepIndex: 1, stageName: 'Adversarial Probing', stageSubtitle: 'DeepMutation Engine v2 (4.2k probes)', evaluatorEngine: 'DeepMutation Engine v2', targetBenchmark: 'OWASP LLM Top 10 + NIST AI RMF', syntheticProbeCount: 4200, isActive: true, isCompleted: false },
  { stepIndex: 2, stageName: 'Execution Isolation', stageSubtitle: 'gVisor MicroVM Sandbox', evaluatorEngine: 'gVisor MicroVM Sandbox', targetBenchmark: 'Kernel Syscall Level 4', syntheticProbeCount: 4200, isActive: false, isCompleted: false },
  { stepIndex: 3, stageName: 'Policy Reflection', stageSubtitle: 'Constitutional AI Critic Agent', evaluatorEngine: 'Constitutional AI Critic Agent', targetBenchmark: 'Hallucination < 0.2%', syntheticProbeCount: 2040, isActive: false, isCompleted: false },
  { stepIndex: 4, stageName: 'Hardened Patch Seal', stageSubtitle: 'Wasm Guardrail Synthesizer', evaluatorEngine: 'Wasm Guardrail Synthesizer', targetBenchmark: 'Zero-Day Regression Guard', syntheticProbeCount: 2040, isActive: false, isCompleted: false },
];
const DEF_VECTORS = [
  { id: 'v1', vectorIndex: 1, attackCategory: 'Jailbreak Inversion', severityBadge: 'CRITICAL', successRatePercent: 0.2, mitigationStatus: 'CONTAINED', isContained: true, hasActiveMitigation: true, isVerified: true },
  { id: 'v2', vectorIndex: 2, attackCategory: 'Indirect Prompt Injection', severityBadge: 'HIGH', successRatePercent: 0.0, mitigationStatus: 'FILTERED', isContained: true, hasActiveMitigation: true, isVerified: true },
  { id: 'v3', vectorIndex: 3, attackCategory: 'Agent Privilege Escalation', severityBadge: 'CRITICAL', successRatePercent: 0.1, mitigationStatus: 'ISOLATED', isContained: true, hasActiveMitigation: true, isVerified: true },
];

export const AgenticEvalRedTeamSlide: React.FC<{ slide?: AgenticEvalRedTeamSlideData; data?: AgenticEvalRedTeamSlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const stages = data?.evalStages?.length ? data.evalStages : DEF_STAGES;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), stages.length - 1);
  const vectors = data?.attackVectors?.length ? data.attackVectors : DEF_VECTORS;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2"><ShieldAlert size={15} className="text-rose-500" />{data?.kicker || 'AUTONOMOUS AI SAFETY & RED-TEAM HARNESS'}</span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500" /> {data?.overallRobustnessScorePercent || 99.4}% Containment • Zero Leakage</span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{data?.title || 'Agentic Eval Red-Team Harness: Autonomous Jailbreak Containment'}</h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>{data?.subtitle || 'Continuous automated adversarial probing, sandboxed model execution, and real-time guardrail synthesis'}</p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Target Model</span><span className="text-sm font-bold text-slate-900 dark:text-sky-300">{data?.targetModelFamily || 'Frontier Swarm v4'}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Attestation</span><span className="text-sm font-bold text-emerald-500">SPDM Hardware RoT</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Chief Software Engineer</span><span className="text-xs font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        {stages.map((st, idx) => (
          <button key={st.stepIndex} onClick={() => jumpToStep(idx)} className={`step-interactive text-left p-3 rounded-xl border transition-all cursor-pointer font-mono text-xs flex items-center justify-between ${idx === currentStep ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-[0_0_16px_var(--pres-accent)] text-white scale-[1.02]' : idx < currentStep ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300 opacity-75' : 'border-slate-800/80 bg-black/20 opacity-40 text-slate-400'}`}>
            <div className="flex items-center gap-2.5">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${idx === currentStep ? 'bg-[var(--pres-accent)] text-white' : idx < currentStep ? 'bg-emerald-500 text-slate-900' : 'bg-slate-800 text-slate-300'}`}>{idx < currentStep ? '✓' : idx + 1}</span>
              <span className="font-bold">{st.stageName}</span>
            </div>
            <span className="text-[10px] opacity-75 truncate max-w-[110px]">{st.syntheticProbeCount} probes</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 z-10 my-auto h-[490px] items-stretch">
        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 0 ? 'border-[var(--pres-accent)] ring-1 ring-[var(--pres-accent)]/50 shadow-lg' : 'border-slate-800/70'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-rose-400">ACTIVE ATTACK VECTORS</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20">Fuzzing Swarm</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            {vectors.map((v) => (
              <div key={v.id} className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
                <div className="flex justify-between items-center"><span className="text-slate-200 font-bold">{v.attackCategory}</span><span className="text-[10px] px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300">{v.severityBadge}</span></div>
                <div className="flex justify-between text-[11px] text-slate-400"><span>Breach Rate: {v.successRatePercent}%</span><span className="text-emerald-400 font-bold">{v.mitigationStatus}</span></div>
              </div>
            ))}
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-slate-400 flex items-center gap-1.5"><Terminal size={13} className="text-rose-400" /> DeepMutation Engine Active</div>
        </div>

        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 1 || currentStep === 2 ? 'border-[var(--pres-accent)] ring-1 ring-[var(--pres-accent)]/50 shadow-lg' : 'border-slate-800/70'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-violet-300">SANDBOX ISOLATION & EVAL</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-violet-500/15 text-violet-300 border border-violet-500/30">gVisor MicroVM</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">CURRENT ENGINE</span>
              <div className="text-violet-300 font-bold text-xs font-mono">{stages[currentStep]?.evaluatorEngine}</div>
              <div className="text-[11px] text-slate-400 leading-relaxed">{stages[currentStep]?.stageSubtitle}</div>
            </div>
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 flex justify-between text-[11px]"><span className="text-slate-400">Target Benchmark:</span><strong className="text-emerald-400">{stages[currentStep]?.targetBenchmark}</strong></div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400">Zero-Trust Egress Sandbox Enforced</div>
        </div>

        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 3 ? 'border-emerald-500/60 ring-1 ring-emerald-500/30 shadow-lg' : 'border-slate-800/70'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-emerald-400">AUTOMATED PATCH & ATTESTATION</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">Wasm Verified</span></div>
          <div className="space-y-2 font-mono text-xs my-3">
            <div className="p-2.5 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">RUNTIME POLICY SYNTHESIS</span>
              <div className="text-emerald-300 font-bold text-xs">Dynamic Guardrail Injection</div>
              <div className="text-[10px] text-slate-400">Latency Overhead: &lt; 1.2ms per token</div>
            </div>
            <div className="p-2.5 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">CRYPTO ATTESTATION</span>
              <div className="text-sky-300 font-bold text-xs">ECDSA P-384 Measurement Hash</div>
              <div className="text-[10px] text-slate-400">Hardware Root-of-Trust Sealed</div>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex justify-between"><span>Audit Status:</span><strong className="font-bold">PASSED ZERO REGRESSION</strong></div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> Automated Red-Team Containment Active</span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Probes Executed: <strong className="text-slate-200">12,640 Synthetic Vectors</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Attestation: <strong className="text-emerald-400">CRYPTOGRAPHICALLY VERIFIED</strong></span>
        </div>
        <div className="flex items-center gap-4 text-slate-400"><span className="flex items-center gap-1.5"><Activity size={13} className="text-sky-400" /> Active Stage: {stages[currentStep]?.stageName}</span><span>Step {currentStep + 1} of {stages.length}</span></div>
      </div>
    </div>
  );
};
