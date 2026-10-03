import React from 'react';
import type { VerifiableAuditLedgerSlideData } from '../../types/kineticSuiteArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { AuditGateRow } from './audit/AuditGateRow';
import { MerkleRootDisplay } from './audit/MerkleRootDisplay';
import { ShieldCheck, Lock } from 'lucide-react';

export const VerifiableAuditLedgerSlide: React.FC<{ slide: VerifiableAuditLedgerSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);

  const gates = slide.evidenceGates || slide.gates || [];
  const currentGateIndex = Math.min(activeStep, Math.max(0, gates.length - 1));
  const activeGate = gates[currentGateIndex];
  const verifiedCount = gates.filter((g) => g.isVerified).length;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center gap-1.5">
            <Lock size={12} /> {slide.kicker || 'VERIFIABLE AUDIT LEDGER'}
          </span>
          <span className="font-mono text-xs text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
            Gate {currentGateIndex + 1} of {Math.max(gates.length, 1)}: {activeGate?.gateName || 'Evidence Root'}
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[40px] font-black tracking-tight leading-none mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Cryptographic Evidence Gate & Audit Ledger'}
        </h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-4xl leading-relaxed">
          {slide.subtitle || 'Tamper-evident verification guaranteeing zero guideline violations and verified signatures.'}
        </p>
      </div>

      <div className="z-10 grid grid-cols-12 gap-8 my-auto items-stretch h-[610px]">
        <div className="col-span-8 flex flex-col justify-between">
          <div className="space-y-3 overflow-y-auto max-h-[580px] pr-1">
            {gates.map((gate, idx) => (
              <AuditGateRow
                key={gate.id}
                gate={gate}
                isActiveGate={idx === currentGateIndex}
                isCompletedGate={idx < currentGateIndex}
              />
            ))}
          </div>
        </div>

        <div className="col-span-4 flex flex-col">
          <MerkleRootDisplay
            merkleRootHash={slide.merkleRootHash || '0x7f28ab49c10928e498d3901ba32cff918'}
            chiefAuditorName={slide.chiefAuditorName || 'Alim Ul Karim'}
            chiefAuditorTitle={slide.chiefAuditorTitle || 'Chief Software Engineer'}
            isTamperEvident={slide.isTamperEvident}
            totalGatesCount={gates.length}
            verifiedGatesCount={verifiedCount}
          />
        </div>
      </div>

      <div className="plane-1-raised p-3 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-cyan-400 font-bold">
          <ShieldCheck size={14} /> Merkle Tree Proof Verified | Zero Audit Gaps | Immutable Ed25519 Signatures
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>Step: {activeStep}</span>
      </div>
    </div>
  );
};
