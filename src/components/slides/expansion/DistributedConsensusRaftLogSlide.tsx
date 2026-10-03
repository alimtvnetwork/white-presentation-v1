import React from 'react';
import type { DistributedConsensusRaftLogSlideData } from '../../../types/globalPptExpansionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { ShieldCheck, Cpu, Activity, CheckCircle2 } from 'lucide-react';

export const DistributedConsensusRaftLogSlide: React.FC<{ slide: DistributedConsensusRaftLogSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const stages = slide.consensusStages || [];
  const nodes = slide.raftNodes || [];
  const currentStep = Math.min(activeStep, Math.max(0, stages.length - 1));
  const lead = `${slide.leadArchitect || 'Alim Ul Karim'}, ${slide.leadRole || 'Chief Software Engineer'}`;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="kicker-pill-badge mb-2 font-mono">{slide.kicker || 'DISTRIBUTED SYSTEMS & CONSENSUS'}</span>
          <h1
            className="font-ubuntu text-4xl font-black text-white tracking-tight"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >{slide.title || 'Distributed Consensus Raft Log: State Machine Replication'}</h1>
          <p className="font-poppins text-base text-slate-300 mt-1 max-w-[1200px]">{slide.subtitle || 'Deterministic leader election and quorum log commitment ensuring linearizable data consistency.'}</p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60 text-cyan-300 font-bold">
            <Cpu size={14} className="text-cyan-400" /> Quorum: {slide.clusterQuorumRequirement || '3 of 5 Nodes'}
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60 text-emerald-300 font-bold">
            <Activity size={14} className="text-emerald-400" /> Heartbeat: {slide.heartbeatIntervalMs ?? 50}ms
          </span>
        </div>
      </div>

      <div className="z-10 grid grid-cols-4 gap-4 p-3 bg-slate-950/60 border border-slate-800/80 rounded-2xl font-mono text-xs">
        {stages.map((st, idx) => (
          <div key={st.stepIndex || idx} className={`p-3 rounded-xl border transition-all ${idx === currentStep ? 'bg-cyan-950/40 border-cyan-400/80 shadow-lg' : 'bg-slate-900/40 border-slate-800/60 opacity-70'}`}>
            <span className="text-[11px] font-bold text-slate-400 block mb-1">PHASE 0{st.stepIndex}</span>
            <h4 className="font-ubuntu text-sm font-bold text-white truncate">{st.stageName}</h4>
            <p className="font-poppins text-[11px] text-slate-400 truncate mt-0.5">{st.operationDescription}</p>
          </div>
        ))}
      </div>

      <div className="z-10 grid grid-cols-3 gap-6 my-auto">
        {nodes.slice(0, 3).map((nd, idx) => (
          <div key={nd.nodeId || idx} className={`p-5 rounded-2xl border transition-all h-[420px] flex flex-col justify-between ${nd.isLeader ? 'bg-slate-900/95 border-cyan-400/80 shadow-xl' : 'bg-slate-950/70 border-slate-800/80'}`}>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold uppercase border ${nd.isLeader ? 'bg-cyan-950/60 text-cyan-300 border-cyan-600/50' : 'bg-slate-800 text-slate-300 border-slate-700'}`}>{nd.nodeRole}</span>
                <span className="font-mono text-xs text-slate-400">Term: <strong className="text-white">{nd.currentTerm}</strong></span>
              </div>
              <h3 className="font-ubuntu text-lg font-bold text-white mb-2">{nd.nodeName}</h3>
              <p className="font-mono text-xs text-slate-400 mb-4">Heartbeat: <span className="text-emerald-400">{nd.lastHeartbeatMsAgo}ms ago</span></p>
            </div>
            <div className="bg-slate-950/80 rounded-xl p-3 border border-slate-800/80 font-mono text-xs space-y-2">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Log Replication Stream</span>
              {(nd.logEntries || []).slice(0, 3).map((log, lIdx) => (
                <div key={lIdx} className="flex items-center justify-between p-1.5 rounded bg-slate-900/60 border border-slate-800/60">
                  <span className="text-slate-400">Idx {log.logIndex}: <strong className="text-cyan-300">{log.command}</strong></span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1"><CheckCircle2 size={11} /> COMM</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="z-10 flex items-center justify-between font-mono text-xs text-slate-400 border-t border-slate-800/80 pt-3">
        <span className="flex items-center gap-2">
          <ShieldCheck size={14} className="text-emerald-400" />
          <span>Zero Split-Brain Invariant Guaranteed: Raft state machine replication active across cluster</span>
        </span>
        <span className="text-cyan-400 font-semibold">{lead}</span>
      </div>
    </div>
  );
};
