// lint-allow: file-size reason="GpuClusterFabricSlide kinetic 4-step orchestration" max=120
import React from 'react';
import type { GpuClusterFabricSlideData } from '../../../types/kineticRevolutionArchetypes';
import { createGpuClusterFabricSlide } from '../../../utils/kineticRevolutionFactories';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Cpu, Network, CheckCircle2, ShieldCheck, Activity } from 'lucide-react';

const STAGES = [
  { index: 0, title: 'Intra-Node NVLink', desc: '900 GB/s P2P all-to-all rails' },
  { index: 1, title: 'NVSwitch Crossbar', desc: '51.2 Tbps non-blocking spine' },
  { index: 2, title: 'Rail-Optimized RoCEv2', desc: '3.2 Tbps dual-rail RDMA NIC' },
  { index: 3, title: 'Tensor All-Reduce', desc: '98.4% scaling ring collective' },
];

export const GpuClusterFabricSlide: React.FC<{ slide?: GpuClusterFabricSlideData; data?: GpuClusterFabricSlideData }> = ({ slide, data: pData }) => {
  const fallback = createGpuClusterFabricSlide('default-gpu-cluster-fabric');
  const data = slide || pData || fallback;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), STAGES.length - 1);
  const nodes = data.nodes?.length ? data.nodes : fallback.nodes;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
              <Cpu size={15} className="text-violet-500" />
              {data.kicker || 'AI INFRASTRUCTURE ACCELERATION'}
            </span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-500" /> {data.interconnectProtocol || 'RoCEv2'} Spine Fabric • 51.2 Tbps
            </span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data.title || 'GPU Cluster Fabric Interconnect: 3.2 Tbps NVLink & RoCEv2 Rails'}
          </h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data.subtitle || 'Distributed non-blocking optical switching topology orchestrating 8-node GPU acceleration across high-throughput collective primitives.'}
          </p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Cluster FLOPs</span><span className="text-lg font-bold text-slate-900 dark:text-emerald-400">{data.totalFlopsFormatted || '128 PFLOPS'}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Bisection BW</span><span className="text-lg font-bold text-slate-900 dark:text-sky-400">{data.bisectionBandwidthTbps || 51.2} Tbps</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Lead Architect</span><span className="text-xs font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim (Chief Software Engineer)</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        {STAGES.map((st, idx) => {
          const isActive = idx === currentStep;
          const isCompleted = idx < currentStep;
          return (
            <button key={st.index} onClick={() => jumpToStep(idx)} className={`text-left p-3 rounded-xl border transition-all cursor-pointer font-mono text-xs flex items-center justify-between ${isActive ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-[0_0_16px_var(--pres-accent)] text-white' : isCompleted ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300' : 'border-slate-800/80 bg-black/20 opacity-40 text-slate-400'}`}>
              <div className="flex items-center gap-2.5">
                <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${isActive ? 'bg-[var(--pres-accent)] text-white' : isCompleted ? 'bg-emerald-500 text-slate-900' : 'bg-slate-800 text-slate-300'}`}>
                  {isCompleted ? '✓' : idx + 1}
                </span>
                <span className="font-bold">{st.title}</span>
              </div>
              <span className="text-[10px] opacity-75 truncate max-w-[130px]">{st.desc}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-auto h-[490px] items-stretch">
        {nodes.slice(0, 8).map((node, i) => (
          <div key={node.id} className={`plane-2-elevated p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep >= 1 ? 'border-slate-700/80 hover:border-slate-500' : 'border-slate-800/60'}`}>
            <div className="flex items-center justify-between pb-2 border-b border-slate-700/40">
              <span className="font-mono text-xs font-bold text-slate-900 dark:text-sky-300 flex items-center gap-2"><Network size={14} className="text-sky-400" /> {node.name || `Node ${i + 1}`}</span>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">{node.bandwidthGbps} Gbps</span>
            </div>
            <div className="my-2 space-y-2 font-mono text-xs">
              <div className="flex justify-between text-slate-400 text-[11px]"><span>GPU Accelerator</span><span className="text-slate-200 font-bold">8x H100 SXM5</span></div>
              <div className="flex justify-between text-slate-400 text-[11px]"><span>HBM3e Memory</span><span className="text-slate-200 font-bold">{node.memoryGb} GB</span></div>
              <div className="flex justify-between text-slate-400 text-[11px]"><span>Operating Temp</span><span className="text-emerald-400 font-bold">{node.temperatureCelsius}°C</span></div>
              <div className="flex justify-between text-slate-400 text-[11px]"><span>RoCEv2 Transport</span><span className="text-violet-400 font-bold">{node.hasRoceV2Enabled ? 'Dual-Rail Active' : 'Single-Rail'}</span></div>
            </div>
            <div className="pt-2 border-t border-slate-700/40 flex items-center justify-between font-mono text-[10px] text-slate-400">
              <span>All-Reduce Util</span>
              <span className="text-emerald-400 font-bold">{97.5 + (i % 3) * 0.7}%</span>
            </div>
          </div>
        ))}
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> RoCEv2 Optical Spine Online</span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Packet Loss: <strong className="text-slate-200">0.000%</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>P99 Fabric Latency: <strong className="text-slate-200">1.25 µs</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Adaptive Routing: <span className="text-emerald-400">{data.hasAdaptiveRoutingEnabled ? 'Hardware Congestion Notif (ECN)' : 'Static'}</span></span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span className="flex items-center gap-1.5"><Activity size={13} className="text-sky-400" /> Active Stage: {STAGES[currentStep].title}</span>
          <span>Step {currentStep + 1} of {STAGES.length}</span>
        </div>
      </div>
    </div>
  );
};
