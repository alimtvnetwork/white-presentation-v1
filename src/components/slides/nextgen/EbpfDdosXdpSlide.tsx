// lint-allow: file-size reason="EbpfDdosXdpSlide kinetic 4-stage XDP packet deflection" max=120
import React from 'react';
import type { EbpfDdosXdpSlideData } from '../../../types/globalPptNextGenArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { ShieldCheck, CheckCircle2, Flame, Activity, Zap, Cpu } from 'lucide-react';

const DEF_STAGES = [
  { stepIndex: 1, stageName: 'RX Ring Parse', stageSubtitle: 'NIC driver ring buffer zero-copy packet header extraction', kernelHookLocation: 'Driver RX Hook', processingBudgetNanoseconds: 8, isActive: true, isCompleted: false },
  { stepIndex: 2, stageName: 'BPF Map Lookup', stageSubtitle: 'Lockless BPF_MAP_TYPE_LPM_TRIE CIDR reputation match', kernelHookLocation: 'eBPF Program Core', processingBudgetNanoseconds: 14, isActive: false, isCompleted: false },
  { stepIndex: 3, stageName: 'XDP_DROP Deflect', stageSubtitle: 'Hardware-offloaded line-rate packet discarding before sk_buff', kernelHookLocation: 'NIC ASIC / SmartNIC', processingBudgetNanoseconds: 4, isActive: false, isCompleted: false },
  { stepIndex: 4, stageName: 'Ringbuf Telemetry', stageSubtitle: 'Zero-overhead asynchronous drop metric emission to user-space', kernelHookLocation: 'BPF RingBuffer', processingBudgetNanoseconds: 6, isActive: false, isCompleted: false },
];
const DEF_FILTERS = [
  { id: 'f1', filterName: 'SYN Flood Guard', actionType: 'XDP_DROP' as const, packetThroughputMpps: 142, droppedPacketsTotal: 8400000000, isFilterActive: true, hasHardwareOffload: true, isHealthy: true },
  { id: 'f2', filterName: 'DNS Amplification Filter', actionType: 'XDP_DROP' as const, packetThroughputMpps: 98, droppedPacketsTotal: 4100000000, isFilterActive: true, hasHardwareOffload: true, isHealthy: true },
  { id: 'f3', filterName: 'Legitimate TLS Traffic', actionType: 'XDP_PASS' as const, packetThroughputMpps: 45, droppedPacketsTotal: 0, isFilterActive: true, hasHardwareOffload: false, isHealthy: true },
];

export const EbpfDdosXdpSlide: React.FC<{ slide?: EbpfDdosXdpSlideData; data?: EbpfDdosXdpSlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const stages = data?.mitigationStages?.length ? data.mitigationStages : DEF_STAGES;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), stages.length - 1);
  const filters = data?.filters?.length ? data.filters : DEF_FILTERS;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2"><Flame size={15} className="text-orange-500" />{data?.kicker || 'LINE-RATE KERNEL PACKET DEFENSE'}</span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500" /> {data?.attackPeakBandwidthTbps || 2.4} Tbps Attack Peak • {data?.droppedPacketRatePercent || 99.8}% Deflected</span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{data?.title || 'eBPF DDoS XDP Packet Mitigation: 100Mpps Line-Rate Deflection'}</h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>{data?.subtitle || 'Zero-copy eXpress Data Path packet filtering inside network driver before kernel socket buffer allocation'}</p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">NIC Interface</span><span className="text-sm font-bold text-slate-900 dark:text-sky-300">{data?.interfaceDevice || 'eth0 (ConnectX-7)'}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Kernel Mode</span><span className="text-sm font-bold text-orange-400">XDP Driver Direct</span></div>
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
            <span className="text-[10px] opacity-75 truncate max-w-[110px]">{st.processingBudgetNanoseconds}ns Budget</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 z-10 my-auto h-[490px] items-stretch">
        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 0 ? 'border-[var(--pres-accent)] ring-1 ring-[var(--pres-accent)]/50 shadow-lg' : 'border-slate-800/70'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-orange-400">NIC DRIVER HOOK</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-orange-500/10 text-orange-300 border border-orange-500/20">Pre-Stack</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">HOOK LOCATION</span>
              <div className="text-slate-200 font-bold">{stages[currentStep]?.kernelHookLocation}</div>
              <div className="text-[11px] text-slate-400">Zero sk_buff memory allocation for dropped traffic</div>
            </div>
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">BUDGET PER PACKET</span>
              <div className="text-emerald-400 font-bold font-mono text-sm">&lt; 32 Nanoseconds Target</div>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex items-center gap-1.5"><Zap size={13} /> Hardware NIC Offload Active</div>
        </div>

        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 1 || currentStep === 2 ? 'border-[var(--pres-accent)] ring-1 ring-[var(--pres-accent)]/50 shadow-lg' : 'border-slate-800/70'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-violet-300">XDP ACTION DECISION</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-violet-500/15 text-violet-300 border border-violet-500/30">XDP_DROP</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">ACTIVE STAGE LOGIC</span>
              <div className="text-violet-300 font-bold text-xs">{stages[currentStep]?.stageSubtitle}</div>
              <div className="text-[11px] text-slate-400 leading-relaxed">Malicious frames deflected at hardware ingress without touching Linux TCP/IP stack.</div>
            </div>
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 flex justify-between text-[11px]"><span className="text-slate-400">Host CPU Utilization:</span><strong className="text-emerald-400">&lt; 1.5% Under Full Load</strong></div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400">Zero Socket Buffer Thrash Guaranteed</div>
        </div>

        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 3 ? 'border-emerald-500/60 ring-1 ring-emerald-500/30 shadow-lg' : 'border-slate-800/70'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-emerald-400">ACTIVE PACKET FILTERS</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">BPF Maps</span></div>
          <div className="space-y-2 font-mono text-xs my-3">
            {filters.map((fil) => (
              <div key={fil.id} className="p-2.5 rounded-xl bg-black/30 border border-slate-800 flex items-center justify-between">
                <div><span className="text-[10px] text-slate-400 block">{fil.filterName}</span><span className="text-slate-200 font-bold text-[11px]">{fil.packetThroughputMpps} Mpps</span></div>
                <div className="text-right"><span className={`text-[10px] px-2 py-0.5 rounded font-bold ${fil.actionType === 'XDP_DROP' ? 'bg-orange-500/20 text-orange-300' : 'bg-emerald-500/20 text-emerald-300'}`}>{fil.actionType}</span></div>
              </div>
            ))}
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex justify-between"><span>Deflection Rate:</span><strong className="font-bold">142,000,000 PPS</strong></div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> eBPF XDP Engine Running</span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Packet Drop Total: <strong className="text-slate-200">12.5 Billion Filtered</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Kernel Bypass: <strong className="text-emerald-400">ACTIVE ON NIC</strong></span>
        </div>
        <div className="flex items-center gap-4 text-slate-400"><span className="flex items-center gap-1.5"><Activity size={13} className="text-sky-400" /> Active Stage: {stages[currentStep]?.stageName}</span><span>Step {currentStep + 1} of {stages.length}</span></div>
      </div>
    </div>
  );
};
