import React from 'react';
import { KeyRound, ShieldCheck, CheckCircle2, GitMerge, FileCheck } from 'lucide-react';

export interface CryptographicBadgeProps {
  evidenceType: 'signature' | 'sbom' | 'linter' | 'integration' | 'merkle';
  isVerified: boolean;
  hasAuditGap: boolean;
}

export const CryptographicBadge: React.FC<CryptographicBadgeProps> = ({
  evidenceType,
  isVerified,
  hasAuditGap,
}) => {
  const getIcon = () => {
    switch (evidenceType) {
      case 'signature':
        return <KeyRound size={12} className="text-amber-600 dark:text-amber-400" />;
      case 'sbom':
        return <FileCheck size={12} className="text-cyan-400" />;
      case 'linter':
        return <CheckCircle2 size={12} className="text-emerald-400" />;
      case 'integration':
        return <ShieldCheck size={12} className="text-purple-400" />;
      case 'merkle':
        return <GitMerge size={12} className="text-blue-400" />;
      default:
        return <CheckCircle2 size={12} className="text-slate-400" />;
    }
  };

  return (
    <div className="flex items-center gap-2 font-mono text-[11px]">
      <span className="px-2 py-0.5 rounded-md bg-slate-950/80 border border-slate-800 text-slate-300 flex items-center gap-1 uppercase tracking-wider">
        {getIcon()}
        {evidenceType}
      </span>
      <span
        className={`px-2 py-0.5 rounded-md font-bold uppercase ${
          hasAuditGap
            ? 'bg-rose-500/15 text-rose-300 border border-rose-500/30'
            : isVerified
            ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
            : 'bg-amber-500/15 text-amber-900 dark:text-amber-300 border border-amber-500/30'
        }`}
      >
        {hasAuditGap ? 'GAP DETECTED' : isVerified ? 'PASSED' : 'VERIFYING'}
      </span>
    </div>
  );
};
