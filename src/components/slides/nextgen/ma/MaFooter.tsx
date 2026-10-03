import React from 'react';
import { Briefcase, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface MaFooterProps {
  ceo: string;
  cfo: string;
  csl?: string;
  isBoardApproved: boolean;
  isAntitrustCleared: boolean;
}

export const MaFooter: React.FC<MaFooterProps> = ({
  ceo,
  cfo,
  csl = 'Alim Ul Karim',
  isBoardApproved,
  isAntitrustCleared,
}) => {
  return (
    <div className="z-10 plane-1-raised rounded-2xl p-4 px-6 border border-slate-700/60 flex items-center justify-between font-mono text-sm">
      <div className="flex items-center gap-7">
        <div className="flex items-center gap-2">
          <Briefcase size={16} className="text-emerald-400" />
          <span style={{ color: 'var(--pres-text-muted)' }}>CEO Signoff:</span>
          <span className="font-bold text-slate-900 dark:text-slate-100">{ceo}</span>
        </div>
        <div className="w-[1px] h-5 bg-slate-700/50" />
        <div className="flex items-center gap-2">
          <Briefcase size={16} className="text-sky-400" />
          <span style={{ color: 'var(--pres-text-muted)' }}>CFO Signoff:</span>
          <span className="font-bold text-slate-900 dark:text-slate-100">{cfo}</span>
        </div>
        <div className="w-[1px] h-5 bg-slate-700/50" />
        <div className="flex items-center gap-2">
          <Award size={16} className="text-capsule-gold" />
          <span style={{ color: 'var(--pres-text-muted)' }}>Tech Signoff:</span>
          <span className="font-bold text-slate-900 dark:text-slate-100">
            {csl} (Chief Software Engineer)
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
          <CheckCircle2 size={14} className="text-emerald-400" />
          {isBoardApproved ? 'Board Approved' : 'Pending Review'}
        </span>
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-sky-500/10 text-sky-800 dark:text-sky-300 border border-sky-500/30 flex items-center gap-1.5">
          <ShieldCheck size={14} className="text-sky-400" />
          {isAntitrustCleared ? 'Antitrust Hart-Scott-Rodino Cleared' : 'In Review'}
        </span>
      </div>
    </div>
  );
};
