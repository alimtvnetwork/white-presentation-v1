// lint-allow: file-size reason="IshikawaRootCauseFishboneSlide kinetic RCA defect fishbone decomposition" max=160
import React from 'react';
import type { IshikawaRootCauseFishboneSlideData } from '../../types/suite2026Archetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { AlertTriangle, CheckCircle2, ShieldAlert, GitBranch, ArrowRight, Wrench, Bug } from 'lucide-react';

const DEF_SPINES = [
  { id: 'sp1', spineCategory: 'Infrastructure & Machine', primaryCause: 'Unbounded heap allocation during cross-region shard consensus spikes', contributingFactors: ['Go runtime GC pause exceeding 12ms', 'OOM killer evicting follower vnodes', 'Lack of kernel cgroup memory limits'], severityRating: 9, isCriticalPath: true, hasRemediationPlan: true, isPositive: false },
  { id: 'sp2', spineCategory: 'Deployment & Process', primaryCause: 'Canary pipeline failed to simulate geo-distributed partition latencies', contributingFactors: ['Mock test environment lacked packet drops', 'Gradual traffic shift was unmonitored at P99.9', 'Automated rollback triggered after 45s threshold'], severityRating: 8, isCriticalPath: true, hasRemediationPlan: true, isPositive: false },
  { id: 'sp3', spineCategory: 'Telemetry & Measurement', primaryCause: 'Prometheus scrape interval aliased high-frequency burst drops', contributingFactors: ['15s scrape cadence missed 2s transient spikes', 'Dashboard alerted on average rather than P99', 'Tracing sampled at only 0.1% rate'], severityRating: 7, isCriticalPath: false, hasRemediationPlan: true, isPositive: false },
  { id: 'sp4', spineCategory: 'Permanent Architectural Remediation', primaryCause: 'Lock-free CRDT memory pooling & kernel eBPF rate-limiting guard', contributingFactors: ['Zero-allocation buffer reuse across all vnodes', 'Deterministic eBPF drop-tail queue on overload', 'Sub-second canary circuit breaker deployment'], severityRating: 10, isCriticalPath: true, hasRemediationPlan: true, isPositive: true },
];

const STAGES = [
  { step: 1, name: 'Machine / Compute', index: 0, desc: 'Heap memory and GC pressure under high-frequency ingress' },
  { step: 2, name: 'Deployment Process', index: 1, desc: 'Canary rollout thresholds and distributed simulation gaps' },
  { step: 3, name: 'Measurement Signals', index: 2, desc: 'Scrape cadence aliasing and P99 monitoring deficiencies' },
  { step: 4, name: 'Permanent Remediation', index: 3, desc: 'Zero-allocation CRDT buffers and eBPF kernel isolation' },
];

export const IshikawaRootCauseFishboneSlide: React.FC<{ slide?: IshikawaRootCauseFishboneSlideData; data?: IshikawaRootCauseFishboneSlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const spines = data?.spines?.length ? data.spines : DEF_SPINES;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), STAGES.length - 1);
  const activeSpine = spines[currentStep] || spines[0];

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-rose-500/10 text-rose-800 dark:text-rose-300 border border-rose-500/20 flex items-center gap-2">
              <ShieldAlert size={16} className="text-rose-500" /> {data?.kicker || 'INCIDENT ROOT CAUSE ANALYSIS (RCA)'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30 flex items-center gap-2">
              <AlertTriangle size={14} /> Severity: {data?.incidentSeverityLevel || 'SEV-1 Post-Mortem Audit'}
            </span>
          </div>
          <h1 className="text-[48px] font-ubuntu font-bold tracking-tight mb-2" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data?.title || 'Ishikawa Root Cause Fishbone: Distributed Latency Anomaly'}
          </h1>
          <p className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data?.subtitle || 'Rigorous Ishikawa cause-and-effect fishbone isolating contributory vectors down to zero-allocation memory fixes.'}
          </p>
        </div>
        <div className="p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div><span className="text-slate-400 block uppercase">Root Cause</span><span className="text-emerald-400 font-bold">IDENTIFIED & FIXED</span></div>
          <div className="w-[1px] h-8 bg-slate-700/40" />
          <div><span className="text-slate-400 block uppercase">Chief Software Engineer</span><span className="text-slate-800 dark:text-slate-200 font-bold">Alim Ul Karim</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        {STAGES.map((st, idx) => (
          <button key={st.step} onClick={() => jumpToStep(idx)} className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer font-mono text-[14px] flex items-center justify-between ${idx === currentStep ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-xl scale-[1.02] text-white ring-2 ring-[var(--pres-accent)]' : idx < currentStep ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300 opacity-75' : 'border-[var(--pres-border)] bg-[var(--pres-bg-card)] opacity-40 text-slate-400'}`}>
            <div className="flex items-center gap-3">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${idx === currentStep ? 'bg-[var(--pres-accent)] text-white' : idx < currentStep ? 'bg-emerald-500 text-slate-900' : 'bg-slate-800 text-slate-300'}`}>{idx < currentStep ? '✓' : idx + 1}</span>
              <span className="font-bold">{st.name}</span>
            </div>
            <span className="text-[12px] opacity-75">Spine {st.step}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-8 z-10 my-auto h-[480px]">
        {/* Left: Fishbone Spine Categories */}
        <div className="col-span-7 grid grid-cols-2 gap-4 my-auto">
          {spines.map((sp, idx) => {
            const isSelected = idx === currentStep;
            return (
              <div
                key={sp.id}
                onClick={() => jumpToStep(idx)}
                className={`plane-1-raised p-5 rounded-2xl border transition-all cursor-pointer shadow-lg ${
                  isSelected
                    ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/20 ring-2 ring-[var(--pres-accent)] scale-[1.02] shadow-2xl'
                    : 'border-slate-800/80 bg-black/20 opacity-65 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 mb-3 font-mono text-xs">
                  <span className={`font-bold uppercase ${isSelected ? 'text-[var(--pres-accent)]' : 'text-slate-400'}`}>
                    {sp.spineCategory}
                  </span>
                  <span className={`px-2 py-0.5 rounded font-bold ${sp.isPositive ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'}`}>
                    Severity {sp.severityRating}/10
                  </span>
                </div>
                <div className="font-ubuntu text-base font-bold text-slate-100 mb-2">{sp.primaryCause}</div>
                <div className="space-y-1 font-mono text-xs text-slate-400">
                  {sp.contributingFactors.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2">
                      <span className="text-violet-400">•</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Problem Statement & Resolution Head */}
        <div className="col-span-5 plane-1-raised p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex flex-col justify-between shadow-2xl">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)] font-mono text-sm">
            <span className="text-rose-400 font-bold uppercase flex items-center gap-2"><Bug size={16} /> INCIDENT PROBLEM STATEMENT</span>
            <span className="px-2 py-0.5 rounded bg-rose-500/15 text-rose-300 text-xs font-bold">RCA ACTIVE</span>
          </div>

          <div className="space-y-4 my-4 font-mono text-[14px]">
            <div className="p-4 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-xs text-slate-400 uppercase">Observable Anomaly:</span>
              <div className="text-lg font-bold text-rose-300">
                {data?.incidentProblemStatement || 'Transient P99.9 latency breach (>180ms) and dropped Raft leases during Q3 peak traffic.'}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black/30 border border-slate-800 space-y-2">
              <span className="text-xs text-slate-400 uppercase">Active Spine Investigation:</span>
              <div className="text-base font-bold text-slate-100">{activeSpine.spineCategory}</div>
              <div className="text-xs text-slate-300 font-poppins">{activeSpine.primaryCause}</div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
              <span className="text-xs text-emerald-400 font-bold uppercase flex items-center gap-1.5"><Wrench size={14} /> Permanent Fix Verified:</span>
              <div className="text-xs text-emerald-300 font-poppins">
                Zero-allocation ring buffer deployed with eBPF network backpressure. Post-incident chaos fuzzing passed 10M iterations with 0 dropped leases.
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-black/20 border border-slate-800 font-mono text-xs text-slate-400 flex items-center justify-between">
            <span>Remediation Status: 100% PATCHED IN PRODUCTION</span>
            <span className="text-emerald-400 font-bold">CLOSED</span>
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-400 uppercase">Investigation Focus:</span>
          <span className="text-[var(--pres-accent)] font-bold">{activeSpine.spineCategory} — {STAGES[currentStep]?.desc}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-400">Step {currentStep + 1} of 4</span>
          <span className="text-emerald-400 font-bold flex items-center gap-1"><CheckCircle2 size={16} /> Zero Recurring Vulnerability</span>
        </div>
      </div>
    </div>
  );
};
