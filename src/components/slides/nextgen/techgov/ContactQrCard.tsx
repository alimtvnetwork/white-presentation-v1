import React from 'react';
import { Mail, Key, ShieldCheck, QrCode } from 'lucide-react';
import type { ExecutiveContact } from '../../../../types/nextgen/deepTechGovernanceTypes';

interface ContactQrCardProps {
  contact: ExecutiveContact;
}

export const ContactQrCard: React.FC<ContactQrCardProps> = ({ contact }) => (
  <div
    style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
    className={`plane-1-raised rounded-3xl p-5 border flex items-center justify-between gap-5 flex-1 transition-all duration-300 ${
      contact.isChiefEngineer ? 'ring-2 ring-violet-500/50' : ''
    }`}
  >
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-2">
        <span
          className={`font-mono text-xs font-bold px-2.5 py-0.5 rounded-full border ${
            contact.isChiefEngineer
              ? 'bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/20'
              : 'bg-black/5 dark:bg-white/5 text-slate-700 dark:text-slate-300 border-black/10 dark:border-white/10'
          }`}
        >
          {contact.isChiefEngineer ? 'AUTHORITY LEAD' : 'ENGAGEMENT DESK'}
        </span>
        <span className="font-mono text-[11px] text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
          <ShieldCheck size={12} />
          {contact.isAvailableForBriefing ? 'BRIEFING AVAILABLE' : 'EN ROUTE'}
        </span>
      </div>

      <h4 className="text-xl font-ubuntu font-bold text-slate-900 dark:text-slate-100 mb-0.5">
        {contact.name}
      </h4>
      <p className="text-xs font-mono text-violet-700 dark:text-violet-300 font-bold mb-1">
        {contact.executiveTitle}
      </p>
      <p style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono mb-3">
        {contact.organization}
      </p>

      <div className="flex flex-col gap-1.5 font-mono text-xs">
        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
          <Mail size={12} className="text-violet-600 dark:text-violet-400" />
          <span>{contact.emailContact}</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-slate-500">
          <Key size={12} />
          <span>PGP: {contact.securityKeyFingerprint}</span>
        </div>
      </div>
    </div>

    <div className="w-24 h-24 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 p-2 flex flex-col items-center justify-center shrink-0">
      <QrCode size={56} className="text-violet-700 dark:text-violet-300" />
      <span className="text-[9px] font-mono text-slate-500 uppercase mt-1">VERIFY KEY</span>
    </div>
  </div>
);
