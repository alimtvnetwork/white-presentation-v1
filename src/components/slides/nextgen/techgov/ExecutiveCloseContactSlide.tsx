import React from 'react';
import type { ExecutiveCloseContactSlideData } from '../../../../types/nextgen/deepTechGovernanceTypes';
import { CloseHeader } from './CloseHeader';
import { CallToActionCard } from './CallToActionCard';
import { ContactQrCard } from './ContactQrCard';
import { Award, Lock } from 'lucide-react';

interface Props {
  slide?: ExecutiveCloseContactSlideData;
  data?: ExecutiveCloseContactSlideData;
}

export const ExecutiveCloseContactSlide: React.FC<Props> = ({ slide, data: propsData }) => {
  const data = slide || propsData;
  if (!data) return null;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_70px] flex flex-col justify-between"
    >
      <CloseHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        deadline={data.strategicCallToAction.decisionDeadline}
        isApproved={data.strategicCallToAction.isActionApproved}
      />

      <div className="grid grid-cols-12 gap-6 my-auto items-stretch h-[640px]">
        <div className="col-span-6">
          <CallToActionCard
            cta={data.strategicCallToAction}
            seal={data.verificationSeal}
          />
        </div>

        <div className="col-span-6 flex flex-col justify-between gap-5">
          {data.executiveContacts.map((contact) => (
            <ContactQrCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>

      <footer className="pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-xs font-mono">
        <span className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
          <Award size={14} className="text-violet-600 dark:text-violet-400" />
          Technical Steering Council Certified • Confidential Briefing Material
        </span>
        <span className="flex items-center gap-1.5 text-violet-700 dark:text-violet-300 font-bold">
          <Lock size={14} /> End-to-End PGP Cryptographic Signature Verified
        </span>
      </footer>
    </div>
  );
};
