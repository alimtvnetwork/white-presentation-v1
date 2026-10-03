// lint-allow: file-size reason="ZeroDowntimeBlueGreenSlide kinetic 4-step mesh cutover orchestration" max=120
import React from 'react';
import type { ZeroDowntimeBlueGreenMeshSlideData } from '../../../types/globalPptMasteryArchetypes';
import { createZeroDowntimeBlueGreenSlide } from '../../../utils/globalPptMasteryFactories';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Server, CheckCircle2, ShieldCheck, Activity, ArrowRightLeft } from 'lucide-react';

export const ZeroDowntimeBlueGreenSlide: React.FC<{ slide?: ZeroDowntimeBlueGreenMeshSlideData; data?: ZeroDowntimeBlueGreenMeshSlideData }> = ({ slide, data: pData }) => {
  const fallback = createZeroDowntimeBlueGreenSlide('default-zero-downtime-blue-green');
  const data = slide || pData || fallback;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const stages = data.deploymentStages?.length ? data.deploymentStages : fallback.deploymentStages;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), stages.length - 1);
  const pods = data.podReplicas?.length ? data.podReplicas : fallback.podReplicas;
  const bluePods = pods.filter((p) => p.fleetColor === 'blue');
  const greenPods = pods.filter((p) => p.fleetColor === 'green');

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
              <Server size={15} className="text-violet-500" />{data.kicker || 'CLOUD INFRASTRUCTURE AUTOMATION'}
            </span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-500" /> {data.meshIngressController || 'Istio Ingress Gateway + Envoy 1.30'} • Zero TCP Drops
            </span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data.title || 'Zero-Downtime Blue-Green Mesh: Continuous Automated Cutover'}
          </h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data.subtitle || 'Progressive Envoy route reassignment, real-time error budget tracking, and instant rollback'}
          </p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Active Conns</span><span className="text-lg font-bold text-slate-900 dark:text-emerald-400">{(data.totalActiveConnections || 48290).toLocaleString()}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Region</span><span className="text-lg font-bold text-slate-900 dark:text-sky-400">{data.clusterRegion || 'us-east-1'}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Lead Architect</span><span className="text-xs font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim (Chief Software Engineer)</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        {stages.map((st, idx) => (
          <button key={st.stepIndex} onClick={() => jumpToStep(idx)} className={`text-left p-3 rounded-xl border transition-all cursor-pointer font-mono text-xs flex items-center justify-between ${idx === currentStep ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-[0_0_16px_var(--pres-accent)] text-white' : idx < currentStep ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300' : 'border-slate-800/80 bg-black/20 opacity-40 text-slate-400'}`}>
            <div className="flex items-center gap-2.5">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${idx === currentStep ? 'bg-[var(--pres-accent)] text-white' : idx < currentStep ? 'bg-emerald-500 text-slate-900' : 'bg-slate-800 text-slate-300'}`}>
                {idx < currentStep ? '✓' : idx + 1}
              </span>
              <span className="font-bold">{st.stageName}</span>
            </div>
            <span className="text-[10px] opacity-75 truncate max-w-[120px]">{st.trafficAllocationPercent}% Traffic</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6 z-10 my-auto h-[490px] items-stretch">
        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep >= 2 ? 'border-slate-800/60 opacity-60' : 'border-sky-500/40'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40">
            <span className="font-mono text-sm font-bold text-sky-400 flex items-center gap-2"><Server size={16} /> BLUE FLEET (v2.1.4 Legacy Standard)</span>
            <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30">Traffic: {currentStep >= 2 ? '0%' : currentStep === 1 ? '90%' : '100%'}</span>
          </div>
          <div className="grid grid-cols-2 gap-3 my-3">
            {bluePods.map((pod) => (
              <div key={pod.id} className="p-3 rounded-xl bg-black/25 border border-slate-800 font-mono text-xs space-y-1.5">
                <div className="flex justify-between items-center text-slate-300 font-bold"><span>{pod.podName}</span><span className="text-emerald-400 text-[10px]">{pod.isHealthy ? 'HEALTHY' : 'PROBING'}</span></div>
                <div className="flex justify-between text-slate-400 text-[11px]"><span>P99 Latency</span><span className="text-slate-200">{pod.p99LatencyMs}ms</span></div>
                <div className="flex justify-between text-slate-400 text-[11px]"><span>CPU Util</span><span className="text-slate-200">{pod.cpuUtilizationPercent}%</span></div>
              </div>
            ))}
          </div>
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between font-mono text-xs">
            <span className="text-slate-400">Drain Status:</span>
            <span className={`font-bold ${currentStep >= 2 ? 'text-amber-400' : 'text-emerald-400'}`}>{currentStep >= 3 ? 'CONNECTIONS DRAINED (STANDBY READY)' : currentStep >= 2 ? 'DRAINING RESIDUAL SOCKETS' : 'ACTIVE SERVING TRAFFIC'}</span>
          </div>
        </div>

        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep >= 1 ? 'border-emerald-500/60 ring-1 ring-emerald-500/30 shadow-lg' : 'border-slate-800/60 opacity-60'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40">
            <span className="font-mono text-sm font-bold text-emerald-400 flex items-center gap-2"><Server size={16} /> GREEN FLEET (v2.2.0 Candidate)</span>
            <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">Traffic: {currentStep >= 2 ? '100%' : currentStep === 1 ? '10%' : '0%'}</span>
          </div>
          <div className="grid grid-cols-2 gap-3 my-3">
            {greenPods.map((pod) => (
              <div key={pod.id} className="p-3 rounded-xl bg-black/25 border border-slate-800 font-mono text-xs space-y-1.5">
                <div className="flex justify-between items-center text-slate-300 font-bold"><span>{pod.podName}</span><span className="text-emerald-400 text-[10px]">{pod.isHealthy ? 'PASSED 16/16' : 'PROBING'}</span></div>
                <div className="flex justify-between text-slate-400 text-[11px]"><span>P99 Latency</span><span className="text-emerald-300 font-bold">{pod.p99LatencyMs}ms (-35%)</span></div>
                <div className="flex justify-between text-slate-400 text-[11px]"><span>CPU Headroom</span><span className="text-slate-200">{100 - pod.cpuUtilizationPercent}% Free</span></div>
              </div>
            ))}
          </div>
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between font-mono text-xs">
            <span className="text-slate-400">Canary Error Budget:</span>
            <span className="text-emerald-400 font-bold">0.00x BURN (ZERO ERROR RATE • 100% PROBE PASS)</span>
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> Automated Rollback Sentry Armed</span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Rollback Latency: <strong className="text-slate-200">1.8s (Zero-Downtime Guarantee)</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>mTLS Identity: <span className="text-emerald-400">{data.hasMutualTlsActive ? 'ACTIVE VERIFIED' : 'DISABLED'}</span></span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span className="flex items-center gap-1.5"><ArrowRightLeft size={13} className="text-sky-400" /> Active Stage: {stages[currentStep]?.stageName}</span>
          <span>Step {currentStep + 1} of {stages.length}</span>
        </div>
      </div>
    </div>
  );
};
