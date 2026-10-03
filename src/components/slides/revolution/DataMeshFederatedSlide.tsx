import React from 'react';
import type { DataMeshFederatedSlideData } from '../../../types/kineticRevolutionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Database, ShieldCheck, FileCheck, Layers } from 'lucide-react';

export const DataMeshFederatedSlide: React.FC<{ slide: DataMeshFederatedSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const domains = slide.domains || [];
  const contracts = slide.contracts || [];
  const policies = slide.policies || [];
  const lead = 'Alim Ul Karim, Chief Software Engineer';

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="kicker-pill-badge mb-2 font-mono">{slide.kicker || 'ENTERPRISE DATA MESH'}</span>
          <h1 className="font-ubuntu text-4xl font-black text-white tracking-tight" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {slide.title || 'Data Mesh Federated Governance: Computational Contracts'}
          </h1>
          <p className="font-poppins text-base text-slate-300 mt-1 max-w-[1200px]">{slide.subtitle || 'Domain-oriented decentralized data ownership with automated schema lineage and cryptographic audit gates.'}</p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="px-3 py-1.5 rounded-full border border-cyan-700/60 bg-cyan-950/40 text-cyan-300 font-bold flex items-center gap-1.5"><Database size={14} /> {slide.governanceStandard || 'ODCS v2.2'}</span>
          <span className="px-3 py-1.5 rounded-full border border-emerald-700/60 bg-emerald-950/40 text-emerald-300 font-bold flex items-center gap-1.5"><FileCheck size={14} /> {slide.activeContractsCount || 24} Active Contracts</span>
        </div>
      </div>

      <div className="z-10 grid grid-cols-4 gap-5">
        {domains.slice(0, 4).map((d) => (
          <div key={d.id} className="p-5 rounded-2xl border border-slate-800/80 bg-slate-900/60 plane-1-raised">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[11px] font-bold uppercase text-cyan-400 flex items-center gap-1.5"><Layers size={12} /> {d.governanceTier}</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-emerald-950/60 text-emerald-300 border border-emerald-700/50">SLA {d.slasMetPercent}%</span>
            </div>
            <h3 className="font-ubuntu text-lg font-bold text-white mb-1 truncate">{d.domainName}</h3>
            <p className="font-mono text-xs text-slate-400 mb-3">Lead: {d.domainLead}</p>
            <div className="pt-3 border-t border-slate-800/80 font-mono text-xs flex justify-between items-center text-slate-300">
              <span>Data Products:</span>
              <strong className="text-white">{d.dataProductCount} Products</strong>
            </div>
          </div>
        ))}
      </div>

      <div className="z-10 grid grid-cols-12 gap-6 my-auto">
        <div className="col-span-7 space-y-3">
          <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">Active Computational Contracts</span>
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/80 font-mono text-xs space-y-2">
            {contracts.slice(0, 4).map((c) => (
              <div key={c.id} className="flex items-center justify-between py-1.5 border-b border-slate-900/90 last:border-0">
                <span className="font-bold text-white truncate max-w-[200px]">{c.contractName}</span>
                <span className="text-slate-400 text-[11px]">Consumer: <strong className="text-cyan-300">{c.consumerDomain}</strong></span>
                <span className="text-slate-400 text-[11px]">Schema: {c.schemaVersion}</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950/70 text-emerald-300 border border-emerald-800/40">VERIFIED</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-5 space-y-3">
          <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">Governance Policies</span>
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/70 font-mono text-xs space-y-2.5">
            {policies.slice(0, 3).map((p) => (
              <div key={p.id} className="flex items-center justify-between py-1 border-b border-slate-800/80 last:border-0">
                <span className="text-slate-200 truncate max-w-[190px]">{p.policyTitle}</span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-violet-950/60 text-violet-300 border border-violet-800/40">{p.enforcementMode}</span>
                <span className="text-emerald-400 font-bold text-[11px]">{p.isEnforced ? 'ENFORCED' : 'AUDIT'}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="z-10 flex items-center justify-between font-mono text-xs text-slate-400 border-t border-slate-800/80 pt-3">
        <span className="flex items-center gap-2">
          <ShieldCheck size={14} className="text-emerald-400" />
          <span>Scope: {slide.enterpriseScope || 'Global Operations'} | Federated Access: Compliant | Automated Lineage Sync</span>
        </span>
        <span className="text-cyan-400 font-semibold">{lead}</span>
      </div>
    </div>
  );
};
