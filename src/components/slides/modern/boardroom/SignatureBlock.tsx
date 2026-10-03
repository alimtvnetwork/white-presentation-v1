import React from 'react';
import { Award, Lock, FileSignature } from 'lucide-react';

interface SignatureBlockProps {
  chiefSoftwareEngineer?: string;
  cryptographicSignoffHash?: string;
  hasBoardApprovalSeal?: boolean;
}

export const SignatureBlock: React.FC<SignatureBlockProps> = ({
  chiefSoftwareEngineer = 'Alim Ul Karim, Chief Software Engineer',
  cryptographicSignoffHash = '0xe819f72b9a103c8471da9284fe2091c34a8e0f17b38c291849a62efc3104821a',
  hasBoardApprovalSeal = true,
}) => (
  <div className="plane-1-raised rounded-2xl p-4 px-6 border border-slate-700/50 flex items-center justify-between gap-6 z-10 font-mono text-sm">
    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
        <FileSignature size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">Signoff Officer</div>
        <div className="text-base font-ubuntu font-bold text-slate-100">{chiefSoftwareEngineer}</div>
      </div>
    </div>

    <div className="h-8 w-px bg-slate-700/60" />

    <div className="flex items-center gap-3 max-w-xl truncate">
      <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
        <Lock size={20} />
      </div>
      <div className="truncate">
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">Cryptographic Attestation</div>
        <div className="text-xs text-indigo-300 font-mono truncate">{cryptographicSignoffHash}</div>
      </div>
    </div>

    {hasBoardApprovalSeal ? (
      <div className="px-4 py-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
        <Award size={15} />
        Board Approval Seal Verified
      </div>
    ) : null}
  </div>
);
