import React from 'react';
import type { MerkleTreeStateLedgerSlideData } from '../../types/globalPptArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { MerkleRootBanner } from './merkle/MerkleRootBanner';
import { MerkleTreeHierarchySvg } from './merkle/MerkleTreeHierarchySvg';
import { MerkleLeafAuditTable } from './merkle/MerkleLeafAuditTable';
import { GitBranch, ShieldCheck, Binary } from 'lucide-react';

export const MerkleTreeStateLedgerSlide: React.FC<{ slide: MerkleTreeStateLedgerSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const steps = slide.verificationSteps || [];
  const leaves = slide.leafNodes || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_80px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 flex items-center gap-1.5">
            <GitBranch size={12} /> {slide.kicker || 'CRYPTOGRAPHIC STATE LEDGER'}
          </span>
          <span className="font-mono text-xs text-indigo-300 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
            Proof Step {activeStep + 1} of {Math.max(steps.length, 1)}
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[38px] font-black tracking-tight leading-none mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Cryptographic State Ledger & Merkle Proof Inclusion'}
        </h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-4xl leading-relaxed">
          {slide.subtitle || 'Hierarchical Hash Tree Validation, Tamper-Evident Blocks & Audit Assurance'}
        </p>
      </div>

      <div className="z-10 flex flex-col gap-5 my-auto">
        <MerkleRootBanner
          rootStateHash={slide.rootStateHash || '0x8f2a41d99b0c27e8a93ef01824ab11993b4a'}
          blockNumber={slide.blockNumber ?? 14892100}
          algorithmName={slide.algorithmName || 'SHA-256 Merkle-Tree-Verify'}
          isRootFinalized={slide.isRootFinalized ?? true}
          auditedBy={slide.auditedBy || 'Alim Ul Karim'}
          auditorRole={slide.auditorRole || 'Chief Software Engineer'}
        />

        <div className="grid grid-cols-12 gap-6 items-stretch h-[500px]">
          <div className="col-span-7 h-full">
            <MerkleTreeHierarchySvg
              steps={steps}
              activeStep={activeStep}
              rootHash={slide.rootStateHash || '0x8f2a41d99b0c27e8a93ef01824ab11993b4a'}
            />
          </div>
          <div className="col-span-5 h-full">
            <MerkleLeafAuditTable leafNodes={leaves} />
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-3 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-indigo-400 font-bold">
          <ShieldCheck size={14} className="text-emerald-400" />
          Zero-Knowledge Proof Verified | Mathematical Non-Repudiation Enforced
        </span>
        <span className="flex items-center gap-1.5 text-slate-400">
          <Binary size={12} />
          Audited by: {slide.auditedBy || 'Alim Ul Karim'} ({slide.auditorRole || 'Chief Software Engineer'})
        </span>
      </div>
    </div>
  );
};
