import React, { useState } from 'react';
import type { AsymmetricThreatDefenseMatrixSlideData } from '../../../../types/modern/boardroomStrategyTypes';
import { createAsymmetricThreatDefenseMatrixSlide } from '../../../../utils/modern/boardroomStrategyFactories';
import { ThreatMatrixHeader } from './ThreatMatrixHeader';
import { DwellTimeCounter } from './DwellTimeCounter';
import { ThreatActorRow } from './ThreatActorRow';
import { Award, ShieldAlert } from 'lucide-react';

interface AsymmetricThreatDefenseMatrixSlideProps {
  slide?: AsymmetricThreatDefenseMatrixSlideData;
  data?: AsymmetricThreatDefenseMatrixSlideData;
}

export const AsymmetricThreatDefenseMatrixSlide: React.FC<AsymmetricThreatDefenseMatrixSlideProps> = ({
  slide,
  data: pData,
}) => {
  const fallback = createAsymmetricThreatDefenseMatrixSlide();
  const data = slide || pData || fallback;
  const [selectedThreatId, setSelectedThreatId] = useState<string | null>(null);

  const vectors = data.threatVectors?.length ? data.threatVectors : fallback.threatVectors;
  const defenseHeader = data.defenseHeader || fallback.defenseHeader;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between"
    >
      <ThreatMatrixHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        securityAuditor={data.securityAuditor}
        isPerimeterHardened={data.isPerimeterHardened}
      />

      <div className="z-10 mb-5">
        <DwellTimeCounter header={defenseHeader} />
      </div>

      <div className="grid grid-cols-4 gap-5 z-10 my-auto h-[480px] items-stretch">
        {vectors.map((vec) => (
          <ThreatActorRow
            key={vec.id}
            vector={vec}
            onClick={() => setSelectedThreatId(vec.id)}
          />
        ))}
      </div>

      <footer className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 text-red-400 font-bold">
            <Award size={15} /> Zero-Day Perimeter Attestation Active
          </span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>
            Chief Software Engineer: <strong className="text-slate-200">Alim Ul Karim, Chief Software Engineer</strong>
          </span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <ShieldAlert size={13} /> {defenseHeader.mitreCoveragePercentage}% MITRE Mapped
          </span>
        </div>
      </footer>
    </div>
  );
};
