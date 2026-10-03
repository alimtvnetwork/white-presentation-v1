import React, { useState } from 'react';
import type { DeveloperPlatformCatalogMeshSlideData } from '../../../../types/modern/saasFinancialTypes';
import { createDeveloperPlatformCatalogMeshSlide } from '../../../../utils/modern/saasFinancialFactories';
import { IdpHeader } from './IdpHeader';
import { DeployVelocityStrip } from './DeployVelocityStrip';
import { IdpServiceCard } from './IdpServiceCard';
import { Award, Terminal, Route } from 'lucide-react';

interface DeveloperPlatformCatalogMeshSlideProps {
  slide?: DeveloperPlatformCatalogMeshSlideData;
  data?: DeveloperPlatformCatalogMeshSlideData;
}

export const DeveloperPlatformCatalogMeshSlide: React.FC<DeveloperPlatformCatalogMeshSlideProps> = ({
  slide,
  data: pData,
}) => {
  const fallback = createDeveloperPlatformCatalogMeshSlide();
  const data = slide || pData || fallback;
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const services = [...(data.tierOneServices || []), ...(data.dataStreamingServices || [])];
  const health = data.platformHealth || fallback.platformHealth;
  const goldenPaths = data.goldenPaths || fallback.goldenPaths;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between"
    >
      <IdpHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        platformArchitect={data.platformArchitect}
        isPlatformStandardized={data.isPlatformStandardized}
      />

      <div className="z-10 mb-4">
        <DeployVelocityStrip health={health} />
      </div>

      <div className="z-10 mb-4 plane-1-raised p-3 px-6 rounded-2xl border border-slate-800 flex items-center gap-4">
        <span className="text-xs uppercase font-mono font-bold text-slate-400 flex items-center gap-1.5 shrink-0">
          <Route size={14} className="text-indigo-400" /> Golden Paths:
        </span>
        <div className="flex flex-wrap gap-2">
          {goldenPaths.map((path, idx) => (
            <span
              key={idx}
              className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-200"
            >
              {path}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4 z-10 my-auto h-[400px] items-stretch">
        {services.slice(0, 5).map((service) => (
          <IdpServiceCard
            key={service.id}
            service={service}
            onClick={() => setSelectedServiceId(service.id)}
          />
        ))}
      </div>

      <footer className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 text-indigo-400 font-bold">
            <Award size={15} /> Developer Platform Mesh Certified
          </span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>
            Chief Software Engineer: <strong className="text-slate-200">Alim Ul Karim, Chief Software Engineer</strong>
          </span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <Terminal size={13} /> {health.totalRegisteredServices} Services Registered
          </span>
        </div>
      </footer>
    </div>
  );
};
