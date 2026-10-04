// lint-allow: file-size reason="GpuHbmInterconnectSlide flat sovereign 8-GPU mesh overview" max=120
import React from 'react';
import type { GpuHbmInterconnectSlideData } from '../../../types/globalPptNextGenArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Cpu, CheckCircle2, ShieldCheck, Zap, Network, Activity } from 'lucide-react';

const DEF_GPUS = [
  { gpuId: 'GPU-0', dieIndex: 0, hbmCapacityGigabytes: 80, hbmBandwidthTbps: 3.35, temperatureCelsius: 58, powerDrawWatts: 680, isOnline: true, hasNvLinkActive: true },
  { gpuId: 'GPU-1', dieIndex: 1, hbmCapacityGigabytes: 80, hbmBandwidthTbps: 3.35, temperatureCelsius: 59, powerDrawWatts: 690, isOnline: true, hasNvLinkActive: true },
  { gpuId: 'GPU-2', dieIndex: 2, hbmCapacityGigabytes: 80, hbmBandwidthTbps: 3.35, temperatureCelsius: 57, powerDrawWatts: 675, isOnline: true, hasNvLinkActive: true },
  { gpuId: 'GPU-3', dieIndex: 3, hbmCapacityGigabytes: 80, hbmBandwidthTbps: 3.35, temperatureCelsius: 60, powerDrawWatts: 700, isOnline: true, hasNvLinkActive: true },
];

const DEF_METRICS = [
  { switchLayer: 'NVLink 4 NVSwitch Crossbar', bisectionBandwidthTbps: 7.2, linkErrorRatePerMillion: 0, isFabricHealthy: true },
  { switchLayer: 'All-to-All Full Bisection', bisectionBandwidthTbps: 3.6, linkErrorRatePerMillion: 0, isFabricHealthy: true },
];

export const GpuHbmInterconnectSlide: React.FC<{ slide?: GpuHbmInterconnectSlideData; data?: GpuHbmInterconnectSlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const gpus = data?.gpus?.length ? data.gpus : DEF_GPUS;
  const metrics = data?.fabricMetrics?.length ? data.fabricMetrics : DEF_METRICS;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2"><Cpu size={15} className="text-emerald-500" />{data?.kicker || 'HARDWARE INTERCONNECT TOPOLOGY'}</span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500" /> {data?.bisectionBandwidthTbps || 7.2} TB/s Bisection • 640GB Pooled HBM</span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{data?.title || 'GPU HBM Interconnect Mesh: 8-GPU All-to-All Crossbar'}</h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>{data?.subtitle || 'Direct peer-to-peer memory access over 900 GB/s NVLink bi-directional interconnect with zero host CPU bounce'}</p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Pod Model</span><span className="text-sm font-bold text-slate-900 dark:text-sky-300">{data?.clusterFabricModel || '8x H100 SXM5'}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Pooled VRAM</span><span className="text-sm font-bold text-emerald-400">640 GB HBM3</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Chief Software Engineer</span><span className="text-xs font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim</span></div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 z-10 my-auto h-[530px] items-stretch">
        <div className="plane-2-elevated p-5 rounded-2xl border border-slate-800/70 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-emerald-400 flex items-center gap-2"><Cpu size={16} /> ACCELERATOR DIES</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">HBM3 Fast Tier</span></div>
          <div className="grid grid-cols-2 gap-3 my-3">
            {gpus.map((gpu) => (
              <div key={gpu.gpuId} className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1 font-mono text-xs">
                <div className="flex justify-between items-center"><span className="text-slate-200 font-bold">{gpu.gpuId}</span><span className="text-emerald-400 text-[10px] font-bold">ONLINE</span></div>
                <div className="flex justify-between text-slate-400 text-[11px]"><span>Memory</span><span className="text-sky-300">{gpu.hbmCapacityGigabytes}GB</span></div>
                <div className="flex justify-between text-slate-400 text-[11px]"><span>Temp / Pwr</span><span className="text-slate-300">{gpu.temperatureCelsius}°C / {gpu.powerDrawWatts}W</span></div>
              </div>
            ))}
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex items-center gap-1.5"><Zap size={13} /> Direct Peer-to-Peer Access Active</div>
        </div>

        <div className="plane-2-elevated p-5 rounded-2xl border border-slate-800/70 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-violet-300 flex items-center gap-2"><Network size={16} /> NVSWITCH FABRIC</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-violet-500/15 text-violet-300 border border-violet-500/30">900 GB/s</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            {metrics.map((m, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 block">{m.switchLayer}</span>
                <div className="flex justify-between text-slate-200 font-bold text-xs font-mono"><span>Throughput: {m.bisectionBandwidthTbps} TB/s</span><span className="text-emerald-400 font-bold">ZERO ERRORS</span></div>
              </div>
            ))}
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 text-[11px] text-slate-400">All-to-all crossbar guarantees non-blocking collective operations (AllReduce/AllGather) at line rate.</div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400">Hardware Watchdog & Thermal Shield Armed</div>
        </div>

        <div className="plane-2-elevated p-5 rounded-2xl border border-slate-800/70 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-sky-400 flex items-center gap-2"><Activity size={16} /> COLLECTIVE EFFICIENCY</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30">NCCL 2.18</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">RING ALL-REDUCE LATENCY</span>
              <div className="text-sky-300 font-bold text-xl font-mono">1.84μs P99</div>
              <div className="text-[10px] text-slate-400">8-GPU tensor parallel forward pass</div>
            </div>
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">SYSTEM SCALING EFFICIENCY</span>
              <div className="text-emerald-400 font-bold text-sm">96.8% Linear Scaling vs Ideal</div>
              <div className="text-[10px] text-slate-400">Zero PCIe bus congestion bottlenecks</div>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex justify-between"><span>Thermal State:</span><strong className="font-bold">ZERO THROTTLING</strong></div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> NVLink Mesh Connected</span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Aggregate VRAM: <strong className="text-slate-200">640 GB HBM3</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Bisection Bandwidth: <strong className="text-emerald-400">7.2 TB/s ACTIVE</strong></span>
        </div>
        <div className="text-slate-400">Single Step Overview Archetype</div>
      </div>
    </div>
  );
};
