// lint-allow: file-size reason="SovereignQkdBackboneSlide flat sovereign QKD optical backbone telemetry" max=120
import React from 'react';
import type { SovereignQkdBackboneSlideData } from '../../../types/globalPptEvolutionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Radio, CheckCircle2, ShieldCheck, Activity, Network, Zap, Lock } from 'lucide-react';

const DEF_CHANNELS = [
  { channelId: 'ch1', channelIndex: 1, originNode: 'Node-DC-Primary', destinationNode: 'Node-Geneva-CERN', fiberDistanceKilometers: 140, quantumBitErrorRatePercent: 1.84, keyGenerationRateKbps: 12.4, isChannelSecured: true, hasDecoyStateActive: true, isQberWithinThreshold: true },
  { channelId: 'ch2', channelIndex: 2, originNode: 'Node-Geneva-CERN', destinationNode: 'Node-Frankfurt-Hub', fiberDistanceKilometers: 280, quantumBitErrorRatePercent: 1.92, keyGenerationRateKbps: 11.2, isChannelSecured: true, hasDecoyStateActive: true, isQberWithinThreshold: true },
  { channelId: 'ch3', channelIndex: 3, originNode: 'Node-Frankfurt-Hub', destinationNode: 'Node-Zurich-Vault', fiberDistanceKilometers: 195, quantumBitErrorRatePercent: 2.05, keyGenerationRateKbps: 9.8, isChannelSecured: true, hasDecoyStateActive: true, isQberWithinThreshold: true },
  { channelId: 'ch4', channelIndex: 4, originNode: 'Node-Zurich-Vault', destinationNode: 'Node-Paris-Central', fiberDistanceKilometers: 310, quantumBitErrorRatePercent: 1.76, keyGenerationRateKbps: 15.2, isChannelSecured: true, hasDecoyStateActive: true, isQberWithinThreshold: true },
];

export const SovereignQkdBackboneSlide: React.FC<{ slide?: SovereignQkdBackboneSlideData; data?: SovereignQkdBackboneSlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const channels = data?.channels?.length ? data.channels : DEF_CHANNELS;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.12em] uppercase flex items-center gap-2"><Radio size={16} className="text-violet-500" />{data?.kicker || 'QUANTUM INFRASTRUCTURE & OPTICAL ENCRYPTION'}</span>
            <span className="font-mono text-sm px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2"><CheckCircle2 size={15} className="text-emerald-500" /> Decoy-State BB84 Attested</span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{data?.title || 'Sovereign QKD Optical Backbone: Decoy-State BB84 Telemetry'}</h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>{data?.subtitle || 'National optical fiber quantum key distribution network verifying photon transmission, QBER thresholds, and physical-layer quantum encryption'}</p>
        </div>
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-sm">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Fiber Distance</span><span className="text-sm font-bold text-slate-900 dark:text-sky-300">{data?.totalFiberDistanceKm || 2840} km Mesh</span></div>
          <div className="w-[1px] h-8 bg-slate-700/40" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Eavesdropping</span><span className="text-sm font-bold text-emerald-500">0 PROBES DETECTED</span></div>
          <div className="w-[1px] h-8 bg-slate-700/40" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Chief Software Engineer</span><span className="text-sm font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 z-10 my-auto h-[550px] items-stretch">
        {channels.map((ch) => (
          <div key={ch.channelId} className="plane-1-raised p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex flex-col justify-between transition-all hover:scale-[1.01]">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-sm font-bold text-violet-400">CHANNEL 0{ch.channelIndex}</span>
              <span className="font-mono text-sm px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">{ch.fiberDistanceKilometers} km</span>
            </div>
            <div className="space-y-4 font-mono text-sm my-3">
              <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-1">
                <span className="text-sm text-slate-400 block uppercase">Origin Node</span>
                <span className="font-bold text-slate-200 text-sm">{ch.originNode}</span>
                <span className="text-sm text-slate-400 block uppercase mt-2">Destination Node</span>
                <span className="font-bold text-sky-300 text-sm">{ch.destinationNode}</span>
              </div>
              <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
                <div className="flex justify-between items-center"><span className="text-sm text-slate-400">QBER Rate:</span><span className="font-bold text-emerald-400 text-sm">{ch.quantumBitErrorRatePercent}%</span></div>
                <div className="flex justify-between items-center"><span className="text-sm text-slate-400">Key Yield:</span><span className="font-bold text-sky-300 text-sm">{ch.keyGenerationRateKbps} kbps</span></div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] font-mono text-sm text-emerald-400 flex items-center gap-2"><Lock size={16} /> Entanglement Attested</div>
          </div>
        ))}
      </div>

      <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center justify-between font-mono text-sm z-10">
        <div className="flex items-center gap-6"><span className="text-sm uppercase text-slate-400">Aggregate Yield:</span><span className="text-emerald-400 font-bold text-base">48.6 kbps</span><span className="text-sm uppercase text-slate-400">Mean QBER:</span><span className="text-sky-300 font-bold text-base">1.89% (Threshold &lt; 4.5%)</span><span className="text-sm uppercase text-slate-400">Detector Efficiency:</span><span className="text-violet-400 font-bold text-base">94.2% SNSPD</span></div>
        <div className="flex items-center gap-4"><span className="text-sm text-slate-400">Sovereign Audit: <strong className="text-emerald-400">APPROVED</strong></span></div>
      </div>
    </div>
  );
};
