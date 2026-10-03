import React from 'react';
import type { MicroFrontendFederationSlideData } from '../../../types/kineticRevolutionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Layers, Network, GitFork, CheckCircle2 } from 'lucide-react';

export const MicroFrontendFederationSlide: React.FC<{ slide: MicroFrontendFederationSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const remotes = slide.remotes || [];
  const deps = slide.sharedDependencies || [];
  const bridges = slide.bridgeLinks || [];
  const lead = 'Alim Ul Karim, Chief Software Engineer';

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="kicker-pill-badge mb-2 font-mono">{slide.kicker || 'FRONTEND PLATFORM ARCHITECTURE'}</span>
          <h1 className="font-ubuntu text-4xl font-black text-white tracking-tight" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {slide.title || 'Micro-Frontend Federation Matrix: Distributed Runtime Mesh'}
          </h1>
          <p className="font-poppins text-base text-slate-300 mt-1 max-w-[1200px]">{slide.subtitle || 'Dynamic module federation composability with shared singleton runtimes and zero code duplication.'}</p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="px-3 py-1.5 rounded-full border border-violet-700/60 bg-violet-950/40 text-violet-300 font-bold flex items-center gap-1.5"><Layers size={14} /> {slide.federationFramework || 'Module Federation 2.0'}</span>
          <span className="px-3 py-1.5 rounded-full border border-cyan-700/60 bg-cyan-950/40 text-cyan-300 font-bold flex items-center gap-1.5"><Network size={14} /> Shared: {slide.sharedLibEfficiencyRatio || '84.2%'}</span>
        </div>
      </div>

      <div className="z-10 grid grid-cols-4 gap-5">
        {remotes.slice(0, 4).map((rem) => (
          <div key={rem.id} className={`p-5 rounded-2xl border transition-all plane-1-raised ${rem.hasGlow ? 'bg-slate-900/90 border-cyan-500/60 shadow-xl' : 'bg-slate-950/70 border-slate-800/80'}`}>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[11px] font-bold uppercase text-cyan-400 flex items-center gap-1.5"><GitFork size={12} /> {rem.teamOwner}</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-emerald-950/60 text-emerald-300 border border-emerald-700/50">{rem.runtimeStatus}</span>
            </div>
            <h3 className="font-ubuntu text-lg font-bold text-white mb-1 truncate">{rem.remoteName}</h3>
            <p className="font-mono text-xs text-slate-400 mb-4">{rem.exposedModulesCount} Exposed Micro-Modules</p>
            <div className="pt-3 border-t border-slate-800/80 font-mono text-xs flex justify-between items-center">
              <span className="text-slate-400">Bundle: <strong className="text-slate-200">{rem.bundleSizeKb} KB</strong></span>
              <span className="text-violet-300 font-semibold">{rem.isSharedSingleton ? 'Singleton' : 'Dynamic'}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="z-10 grid grid-cols-12 gap-6 my-auto">
        <div className="col-span-7 space-y-3">
          <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">Shared Runtime Dependencies</span>
          <div className="grid grid-cols-2 gap-3">
            {deps.slice(0, 4).map((d) => (
              <div key={d.id} className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 font-mono text-xs flex items-center justify-between">
                <div>
                  <span className="font-bold text-white block">{d.packageName}</span>
                  <span className="text-slate-400 text-[11px]">Req: {d.requiredVersion}</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-950/70 text-cyan-300 border border-cyan-800/50">{d.isSingleton ? 'SINGLETON' : 'SCOPED'}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-5 space-y-3">
          <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">Federation Event Bridges</span>
          <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-950/80 font-mono text-xs space-y-2.5">
            {bridges.slice(0, 3).map((b) => (
              <div key={b.id} className="flex items-center justify-between text-[11px] pb-1.5 border-b border-slate-900/90 last:border-0 last:pb-0">
                <span className="text-slate-300 truncate max-w-[170px]">{b.sourceRemoteId} ➔ {b.targetRemoteId}</span>
                <span className="px-2 py-0.5 rounded bg-violet-950/70 text-violet-300 border border-violet-800/40">{b.channelType}</span>
                <span className="text-emerald-400 font-bold">{b.isActive ? 'ONLINE' : 'STANDBY'}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="z-10 flex items-center justify-between font-mono text-xs text-slate-400 border-t border-slate-800/80 pt-3">
        <span className="flex items-center gap-2">
          <CheckCircle2 size={14} className="text-emerald-400" />
          <span>Host: {slide.hostAppName || 'App Shell'} | Zero Duplication: Active | Isolated Sandbox: Pass</span>
        </span>
        <span className="text-cyan-400 font-semibold">{lead}</span>
      </div>
    </div>
  );
};
