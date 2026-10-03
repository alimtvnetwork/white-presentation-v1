// lint-allow: file-size reason="AutonomousCloudCostSlide sovereign eBPF FinOps telemetry overview" max=120
import React from 'react';
import type { AutonomousCloudCostAnomaliesSlideData } from '../../../types/globalPptMasteryArchetypes';
import { createAutonomousCloudCostSlide } from '../../../utils/globalPptMasteryFactories';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Gauge, CheckCircle2, ShieldCheck, Cpu, DollarSign } from 'lucide-react';

export const AutonomousCloudCostSlide: React.FC<{ slide?: AutonomousCloudCostAnomaliesSlideData; data?: AutonomousCloudCostAnomaliesSlideData }> = ({ slide, data: pData }) => {
  const fallback = createAutonomousCloudCostSlide('default-autonomous-cloud-cost');
  const data = slide || pData || fallback;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const anomalies = data.anomalies?.length ? data.anomalies : fallback.anomalies;
  const allocations = data.cgroupAllocations?.length ? data.cgroupAllocations : fallback.cgroupAllocations;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
              <Gauge size={15} className="text-violet-500" />
              {data.kicker || 'FINOPS KERNEL AUTOMATION'}
            </span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-500" /> Linux eBPF cgroup v2 • {data.activeEbpfProbesCount || 256} Kernel Probes
            </span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data.title || 'Autonomous Cloud Cost Anomalies: eBPF Pod-to-Dollar Attribution'}
          </h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data.subtitle || 'Linux kernel cgroup v2 accounting intercepting runaway compute spend in sub-15 seconds'}
          </p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Run Rate</span><span className="text-lg font-bold text-slate-900 dark:text-sky-300">{data.clusterSpendRunRateFormatted || '$1.24M/yr'}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Monthly Savings</span><span className="text-lg font-bold text-slate-900 dark:text-emerald-400">{data.totalMonthlySavingsFormatted || '$186,000/mo'}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Lead Architect</span><span className="text-xs font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim (Chief Software Engineer)</span></div>
        </div>
      </div>

      <div className="plane-1-raised p-4 px-6 rounded-2xl border border-slate-800 z-10 flex items-center justify-between font-mono text-xs my-2">
        <div className="flex items-center gap-4">
          <span className="text-sky-400 font-bold flex items-center gap-1.5"><DollarSign size={15} /> KERNEL FINOPS SENTRY:</span>
          <span className="text-slate-200">3 Runaway Workloads Intercepted • Zero Service Downtime</span>
        </div>
        <div className="flex items-center gap-5 text-slate-400">
          <span>Mean Time to Detect: <strong className="text-emerald-400">3.2 Seconds</strong></span>
          <span>Intervention Action: <strong className="text-emerald-400">cgroup CPU Quota Capped</strong></span>
          <span>False Positives: <strong className="text-emerald-400">0.00% (100% Correct)</strong></span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 z-10 my-auto h-[460px] items-stretch">
        {anomalies.map((anom, idx) => (
          <div key={idx} className="plane-2-elevated p-5 rounded-2xl border border-slate-800 hover:border-slate-600 transition-all flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-slate-700/40">
              <span className="font-mono text-xs font-bold text-sky-400">WORKLOAD 0{idx + 1}</span>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-rose-500/15 text-rose-300 border border-rose-500/30 font-bold">
                {anom.anomalyMultiplierFormatted}
              </span>
            </div>
            <div className="space-y-3 font-mono text-xs my-3">
              <div>
                <div className="text-slate-100 font-bold text-sm">{anom.workloadName}</div>
                <div className="text-[11px] text-slate-400">Namespace: {anom.podNamespace}</div>
              </div>
              <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1.5">
                <div className="flex justify-between text-slate-400 text-[11px]">
                  <span>Baseline Spend:</span>
                  <span className="text-slate-300 font-bold">{anom.baselineCostFormatted}</span>
                </div>
                <div className="flex justify-between text-slate-400 text-[11px]">
                  <span>Projected Unmitigated:</span>
                  <span className="text-rose-400 font-bold">{anom.projectedMonthlyCostFormatted}</span>
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px] text-slate-300 space-y-1">
                <span className="text-[10px] text-sky-400 block font-bold">EBPF MITIGATION APPLIED</span>
                <div>Linux cgroup v2 cpu.max clamped to 50% quota. Memory leak contained.</div>
              </div>
            </div>
            <div className="pt-2.5 border-t border-slate-700/40 flex items-center justify-between font-mono text-[10px] text-slate-400">
              <span>Status:</span>
              <span className="text-emerald-400 font-bold">THROTTLED & ISOLATED</span>
            </div>
          </div>
        ))}
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> Kernel eBPF Accounting Active</span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Probing Overhead: <strong className="text-slate-200">0.12% CPU (Zero Trace Impact)</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Budget Governance: <strong className="text-emerald-400">100% AUTOMATED PROTECTED</strong></span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span>Sovereign Telemetry Overview</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
};
