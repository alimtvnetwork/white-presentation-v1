import React from 'react';
import type { ConfidentialMpcKeyVaultSlideData } from '../../../types/kineticRevolutionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Lock, ShieldCheck, KeyRound, Server } from 'lucide-react';

export const ConfidentialMpcKeyVaultSlide: React.FC<{ slide: ConfidentialMpcKeyVaultSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const shards = slide.keyShards || [];
  const logs = slide.auditLog || [];
  const qp = slide.quorumPolicy || { thresholdM: 3, totalN: 5, ellipticCurve: 'Secp256k1', isQuorumSatisfied: true, isSecurityStandardFips140_3: true };
  const lead = 'Alim Ul Karim, Chief Software Engineer';

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="kicker-pill-badge mb-2 font-mono">{slide.kicker || 'DISTRIBUTED CRYPTOGRAPHIC CUSTODY'}</span>
          <h1 className="font-ubuntu text-4xl font-black text-white tracking-tight" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {slide.title || 'Confidential MPC Key Vault: Distributed Enclave Quorum'}
          </h1>
          <p className="font-poppins text-base text-slate-300 mt-1 max-w-[1200px]">{slide.subtitle || 'Threshold cryptographic key-share shards evaluated inside hardware-isolated enclaves with zero single-point compromise.'}</p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="px-3 py-1.5 rounded-full border border-cyan-700/60 bg-cyan-950/40 text-cyan-300 font-bold flex items-center gap-1.5"><KeyRound size={14} /> {slide.thresholdScheme || '3-of-5 Shamir SSS'}</span>
          <span className="px-3 py-1.5 rounded-full border border-emerald-700/60 bg-emerald-950/40 text-emerald-300 font-bold flex items-center gap-1.5"><Lock size={14} /> Attested: {slide.attestationStatus || '100% Valid'}</span>
        </div>
      </div>

      <div className="z-10 grid grid-cols-5 gap-4">
        {shards.slice(0, 5).map((sh) => (
          <div key={sh.id} className={`p-4 rounded-xl border transition-all plane-1-raised ${sh.hasGlow ? 'bg-slate-900/90 border-cyan-500/60 shadow-lg' : 'bg-slate-950/70 border-slate-800/80'}`}>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] font-bold uppercase text-cyan-400 flex items-center gap-1"><Server size={11} /> SHARD #{sh.shardIndex}</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-800/40">ONLINE</span>
            </div>
            <h4 className="font-ubuntu text-sm font-bold text-white truncate">{sh.nodeName}</h4>
            <div className="mt-3 pt-2 border-t border-slate-800/80 font-mono text-[11px] space-y-1">
              <div className="flex justify-between text-slate-400"><span>Enclave:</span> <strong className="text-slate-200">{sh.enclaveType}</strong></div>
              <div className="flex justify-between text-slate-400"><span>Region:</span> <span className="text-cyan-300">{sh.jurisdiction}</span></div>
            </div>
          </div>
        ))}
      </div>

      <div className="z-10 grid grid-cols-12 gap-6 my-auto">
        <div className="col-span-5 space-y-3">
          <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">Threshold Quorum Policy</span>
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/70 font-mono text-xs space-y-3">
            <div className="flex justify-between items-center pb-2 border-b border-slate-800">
              <span className="text-slate-400">Required Quorum:</span>
              <strong className="text-cyan-300 text-sm">{qp.thresholdM} of {qp.totalN} Enclave Signers</strong>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800">
              <span className="text-slate-400">Curve Standard:</span>
              <span className="text-white">{qp.ellipticCurve}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Compliance Gate:</span>
              <span className="text-emerald-400 font-bold">{qp.isSecurityStandardFips140_3 ? 'FIPS 140-3 Level 4' : 'Standard'}</span>
            </div>
          </div>
        </div>

        <div className="col-span-7 space-y-3">
          <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">Cryptographic Session Audit Log</span>
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/80 font-mono text-xs space-y-2">
            {logs.slice(0, 4).map((l) => (
              <div key={l.id} className="flex items-center justify-between py-1 border-b border-slate-900/90 last:border-0 text-[11px]">
                <span className="px-2 py-0.5 rounded font-bold uppercase bg-violet-950/70 text-violet-300 border border-violet-800/40">{l.operationType}</span>
                <span className="text-slate-400 font-mono truncate max-w-[170px]">{l.sessionHash}</span>
                <span className="text-slate-400">{l.latencyMs}ms</span>
                <span className="text-emerald-400 font-bold">VERIFIED</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="z-10 flex items-center justify-between font-mono text-xs text-slate-400 border-t border-slate-800/80 pt-3">
        <span className="flex items-center gap-2">
          <ShieldCheck size={14} className="text-emerald-400" />
          <span>Zero-Knowledge Proof: Active | Hardware Enclave Isolation: 100% | Zero Plaintext Assembly</span>
        </span>
        <span className="text-cyan-400 font-semibold">{lead}</span>
      </div>
    </div>
  );
};
