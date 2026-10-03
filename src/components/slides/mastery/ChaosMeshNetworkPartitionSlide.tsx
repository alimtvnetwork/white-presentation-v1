// lint-allow: file-size reason="ChaosMeshNetworkPartitionSlide sovereign SRE chaos drill overview" max=120
import React from 'react';
import type { ChaosMeshNetworkPartitionDrillSlideData } from '../../../types/globalPptMasteryArchetypes';
import { createChaosMeshNetworkPartitionSlide } from '../../../utils/globalPptMasteryFactories';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Radar, CheckCircle2, ShieldCheck, Server, AlertTriangle } from 'lucide-react';

export const ChaosMeshNetworkPartitionSlide: React.FC<{ slide?: ChaosMeshNetworkPartitionDrillSlideData; data?: ChaosMeshNetworkPartitionDrillSlideData }> = ({ slide, data: pData }) => {
  const fallback = createChaosMeshNetworkPartitionSlide('default-chaos-mesh-partition');
  const data = slide || pData || fallback;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const nodes = data.nodes?.length ? data.nodes : fallback.nodes;
  const phases = data.recoveryPhases?.length ? data.recoveryPhases : fallback.recoveryPhases;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2"><Radar size={15} className="text-violet-500" />{data.kicker || 'CHAOS ENGINEERING & SRE RESILIENCE'}</span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500" /> {data.drillExperimentName} • MTTR: {data.mttrSeconds}s</span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{data.title || 'Chaos Mesh Network Partition Drill: Split-Brain Prevention'}</h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>{data.subtitle || 'Simulated trans-oceanic network split proving majority quorum resilience and 3.8s MTTR'}</p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">MTTR Recovery</span><span className="text-lg font-bold text-slate-900 dark:text-emerald-400">{data.mttrSeconds}s</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Quorum Rule</span><span className="text-lg font-bold text-slate-900 dark:text-sky-300">Majority (3/5)</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Lead Architect</span><span className="text-xs font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim (Chief Software Engineer)</span></div>
        </div>
      </div>

      <div className="plane-1-raised p-4 px-6 rounded-2xl border border-slate-800 z-10 flex items-center justify-between font-mono text-xs my-2">
        <div className="flex items-center gap-4"><span className="text-rose-400 font-bold flex items-center gap-1.5"><AlertTriangle size={15} /> CHAOS INJECTION:</span><span className="text-slate-200">100% Packet Drop on 2 WAN Partition Nodes</span></div>
        <div className="flex items-center gap-5 text-slate-400"><span>Majority: <strong className="text-emerald-400">3 Nodes Live</strong></span><span>Minority: <strong className="text-amber-400">2 Nodes Fenced</strong></span><span>Split-Brain: <strong className="text-emerald-400">0.00%</strong></span></div>
      </div>

      <div className="grid grid-cols-2 gap-6 z-10 my-auto h-[460px] items-stretch">
        <div className="plane-2-elevated p-5 rounded-2xl border border-emerald-500/40 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40">
            <span className="font-mono text-xs font-bold text-emerald-400 flex items-center gap-1.5"><Server size={14} /> QUORUM MAJORITY PARTITION (3/5 NODES)</span>
            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-bold">READ/WRITE SERVING</span>
          </div>
          <div className="space-y-3 font-mono text-xs my-3">
            {nodes.slice(0, 3).map((node, i) => (
              <div key={node.nodeId} className="p-3 rounded-xl bg-black/30 border border-slate-800 flex items-center justify-between">
                <div><div className="text-slate-200 font-bold">{node.nodeId} ({node.nodeRole})</div><div className="text-[11px] text-slate-400">Failure: None (WAN Quorum Maintained)</div></div>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">{i === 0 ? 'ELECTED LEADER' : 'ACTIVE FOLLOWER'}</span>
              </div>
            ))}
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex justify-between"><span>Consensus State:</span><strong>3/3 QUORUM VOTE PASSED</strong></div>
        </div>

        <div className="plane-2-elevated p-5 rounded-2xl border border-rose-500/40 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40">
            <span className="font-mono text-xs font-bold text-rose-400 flex items-center gap-1.5"><Server size={14} /> ISOLATED MINORITY PARTITION (2/5 NODES)</span>
            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-rose-500/15 text-rose-300 border border-rose-500/30 font-bold">FENCED / SAFE ISOLATION</span>
          </div>
          <div className="space-y-3 font-mono text-xs my-3">
            {nodes.slice(3, 5).map((node) => (
              <div key={node.nodeId} className="p-3 rounded-xl bg-black/30 border border-slate-800 flex items-center justify-between">
                <div><div className="text-slate-200 font-bold">{node.nodeId} (Isolated Follower)</div><div className="text-[11px] text-rose-300">Failure: {node.injectedFailureType}</div></div>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold">FENCED</span>
              </div>
            ))}
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-slate-400 text-[10px] block">RECOVERY DRILL PHASES</span>
              {phases.map((ph, idx) => (
                <div key={idx} className="flex justify-between text-[11px] text-slate-300"><span>{ph.drillPhase}:</span><strong className="text-emerald-400">{ph.elapsedSeconds}s (Avail: {ph.clusterAvailabilityPercent}%)</strong></div>
              ))}
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-amber-400 flex justify-between"><span>Safety State:</span><strong>SPLIT-BRAIN PREVENTED • NO DIRTY WRITES</strong></div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> SRE Chaos Verification Passed</span>
          <span className="text-slate-600">|</span><span style={{ color: 'var(--pres-text-muted)' }}>Automated Failover: <strong className="text-slate-200">1.8s Election</strong></span>
          <span className="text-slate-600">|</span><span style={{ color: 'var(--pres-text-muted)' }}>Data Loss: <strong className="text-emerald-400">0.00% Zero Inconsistency</strong></span>
        </div>
        <div className="flex items-center gap-4 text-slate-400"><span>Sovereign Telemetry Overview</span><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /></div>
      </div>
    </div>
  );
};
