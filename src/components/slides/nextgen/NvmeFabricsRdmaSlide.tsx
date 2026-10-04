// lint-allow: file-size reason="NvmeFabricsRdmaSlide kinetic 4-stage DMA storage fabrics" max=120
import React from 'react';
import type { NvmeFabricsRdmaSlideData } from '../../../types/globalPptNextGenArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { HardDrive, CheckCircle2, ShieldCheck, Activity, Zap, Cpu } from 'lucide-react';

const DEF_STAGES = [
  { stepIndex: 1, stageName: 'Queue Pair Setup', stageSubtitle: 'Reliable Connected QP handshake with address pinning', protocolLayer: 'RoCEv2 Transport', bandwidthGbps: 400, isActive: true, isCompleted: false },
  { stepIndex: 2, stageName: 'RDMA Direct DMA', stageSubtitle: 'Kernel-bypass memory injection into GPU HBM space', protocolLayer: 'InfiniBand Verbs', bandwidthGbps: 400, isActive: false, isCompleted: false },
  { stepIndex: 3, stageName: 'NVMe Submission', stageSubtitle: 'Hardware doorbell ring & lockless controller arbitration', protocolLayer: 'NVMe 2.0 Set', bandwidthGbps: 400, isActive: false, isCompleted: false },
  { stepIndex: 4, stageName: 'IOPS Attestation', stageSubtitle: 'Telemetry validation under 10.2M sustained 4K IOPS', protocolLayer: 'Telemetry Sentry', bandwidthGbps: 400, isActive: false, isCompleted: false },
];
const DEF_QPS = [
  { id: 'qp1', queuePairId: 'QP-001-A', transportProtocol: 'RoCEv2' as const, bufferSizeMb: 256, iopsThroughput: 2550000, latencyMicroseconds: 4.2, isEstablished: true, hasZeroCopyActive: true, isHealthy: true },
  { id: 'qp2', queuePairId: 'QP-002-B', transportProtocol: 'RoCEv2' as const, bufferSizeMb: 256, iopsThroughput: 2550000, latencyMicroseconds: 4.1, isEstablished: true, hasZeroCopyActive: true, isHealthy: true },
  { id: 'qp3', queuePairId: 'QP-003-C', transportProtocol: 'RoCEv2' as const, bufferSizeMb: 256, iopsThroughput: 2550000, latencyMicroseconds: 4.4, isEstablished: true, hasZeroCopyActive: true, isHealthy: true },
];

export const NvmeFabricsRdmaSlide: React.FC<{ slide?: NvmeFabricsRdmaSlideData; data?: NvmeFabricsRdmaSlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const stages = data?.fabricStages?.length ? data.fabricStages : DEF_STAGES;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), stages.length - 1);
  const qps = data?.queuePairs?.length ? data.queuePairs : DEF_QPS;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2"><HardDrive size={15} className="text-emerald-500" />{data?.kicker || 'HIGH-PERFORMANCE FABRIC STORAGE'}</span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500" /> {data?.aggregateIopsMillion || 10.2}M IOPS • {data?.p99LatencyMicros || 7.8}μs P99</span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{data?.title || 'NVMe-over-Fabrics RDMA Storage: Sub-Microsecond Memory Pooling'}</h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>{data?.subtitle || 'High-bandwidth zero-copy storage disaggregation leveraging RoCEv2 and hardware kernel bypass'}</p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Cluster</span><span className="text-sm font-bold text-slate-900 dark:text-sky-300">{data?.storageClusterName || 'ApexFlash Tier 0'}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Fabric</span><span className="text-sm font-bold text-emerald-400">400GbE RoCEv2</span></div>
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
            <span className="text-[10px] opacity-75 truncate max-w-[110px]">{st.bandwidthGbps} Gbps</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 z-10 my-auto h-[490px] items-stretch">
        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 0 ? 'border-[var(--pres-accent)] ring-1 ring-[var(--pres-accent)]/50 shadow-lg' : 'border-slate-800/70'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-emerald-400">RDMA QUEUE PAIRS</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">RC Connection</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            {qps.map((qp) => (
              <div key={qp.id} className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
                <div className="flex justify-between items-center"><span className="text-slate-200 font-bold">{qp.queuePairId}</span><span className="text-[10px] text-emerald-400 font-bold">{qp.latencyMicroseconds}μs DMA</span></div>
                <div className="flex justify-between text-[11px] text-slate-400"><span>IOPS: {(qp.iopsThroughput / 1000000).toFixed(2)}M</span><span className="text-sky-300">{qp.bufferSizeMb}MB Buffer</span></div>
              </div>
            ))}
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex items-center gap-1.5"><Zap size={13} /> Zero-Copy Kernel Bypass Active</div>
        </div>

        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 1 || currentStep === 2 ? 'border-[var(--pres-accent)] ring-1 ring-[var(--pres-accent)]/50 shadow-lg' : 'border-slate-800/70'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-violet-300">DMA BEAM & ARBITRATION</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-violet-500/15 text-violet-300 border border-violet-500/30">Sub-5μs Direct</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">PROTOCOL LAYER</span>
              <div className="text-violet-300 font-bold text-xs">{stages[currentStep]?.protocolLayer}</div>
              <div className="text-[11px] text-slate-400 leading-relaxed">{stages[currentStep]?.stageSubtitle}</div>
            </div>
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 flex justify-between text-[11px]"><span className="text-slate-400">Doorbell Overhead:</span><strong className="text-emerald-400">&lt; 380ns Lockless</strong></div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400">Lockless Controller Ring Buffer Enforced</div>
        </div>

        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 3 ? 'border-emerald-500/60 ring-1 ring-emerald-500/30 shadow-lg' : 'border-slate-800/70'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-emerald-400">FABRIC SUSTAINED THROUGHPUT</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">400 Gbps</span></div>
          <div className="space-y-2 font-mono text-xs my-3">
            <div className="p-2.5 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">RANDOM 4K READ IOPS</span>
              <div className="text-emerald-300 font-bold text-xl font-mono">10,240,000 IOPS</div>
              <div className="text-[10px] text-slate-400">P99.9 Tail Latency: 12.4μs</div>
            </div>
            <div className="p-2.5 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">GPU DIRECT STORAGE (GDS)</span>
              <div className="text-sky-300 font-bold text-xs">Direct to 8x H100 HBM3e Memory</div>
              <div className="text-[10px] text-slate-400">Zero Host CPU Memory Bounce</div>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex justify-between"><span>Multipath State:</span><strong className="font-bold">ACTIVE-ACTIVE 4-PORT</strong></div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> RDMA Fabric Online</span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Hardware Checksum: <strong className="text-slate-200">OFFLOADED</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>P99 Latency: <strong className="text-emerald-400">7.8μs CERTIFIED</strong></span>
        </div>
        <div className="flex items-center gap-4 text-slate-400"><span className="flex items-center gap-1.5"><Activity size={13} className="text-sky-400" /> Active Stage: {stages[currentStep]?.stageName}</span><span>Step {currentStep + 1} of {stages.length}</span></div>
      </div>
    </div>
  );
};
