import React, { useState } from 'react';
import type { ContinuousCompliancePostureSlideData } from '../../../../types/modern/saasFinancialTypes';
import { createContinuousCompliancePostureSlide } from '../../../../utils/modern/saasFinancialFactories';
import { ComplianceHeader } from './ComplianceHeader';
import { AuditRadarPill } from './AuditRadarPill';
import { FrameworkPostureCard } from './FrameworkPostureCard';
import { Award, Lock, FileCheck } from 'lucide-react';

interface ContinuousCompliancePostureSlideProps {
  slide?: ContinuousCompliancePostureSlideData;
  data?: ContinuousCompliancePostureSlideData;
}

export const ContinuousCompliancePostureSlide: React.FC<ContinuousCompliancePostureSlideProps> = ({
  slide,
  data: pData,
}) => {
  const fallback = createContinuousCompliancePostureSlide();
  const data = slide || pData || fallback;
  const [selectedFrameworkId, setSelectedFrameworkId] = useState<string | null>(null);

  const frameworks = data.frameworks?.length ? data.frameworks : fallback.frameworks;
  const globalHeader = data.globalHeader || fallback.globalHeader;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between"
    >
      <ComplianceHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        merkleRootHash={data.merkleRootHash}
        hasCryptographicSeal={data.hasCryptographicSeal}
      />

      <div className="z-10 mb-5">
        <AuditRadarPill header={globalHeader} />
      </div>

      <div className="grid grid-cols-4 gap-5 z-10 my-auto h-[480px] items-stretch">
        {frameworks.map((fw) => (
          <FrameworkPostureCard
            key={fw.id}
            card={fw}
            onClick={() => setSelectedFrameworkId(fw.id)}
          />
        ))}
      </div>

      <footer className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 text-emerald-400 font-bold">
            <Award size={15} /> Continuous Audit Governance Certified
          </span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>
            Chief Auditor: <strong className="text-slate-200">{data.chiefAuditor || 'Alim Ul Karim, Chief Software Engineer'}</strong>
          </span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span className="flex items-center gap-1.5 text-indigo-300">
            <Lock size={13} /> Merkle Proof Attestation Active
          </span>
          <span className="flex items-center gap-1.5 text-emerald-400">
            <FileCheck size={13} /> 100% Passing Controls
          </span>
        </div>
      </footer>
    </div>
  );
};
