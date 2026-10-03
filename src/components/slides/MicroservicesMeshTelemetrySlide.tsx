import React from 'react';
import type { MicroservicesMeshTelemetrySlideData } from '../../types/sovereignOperationsArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { MeshHeader } from './servicemesh/MeshHeader';
import { MeshGoldenSignalStrip } from './servicemesh/MeshGoldenSignalStrip';
import { ServiceNodeGrid } from './servicemesh/ServiceNodeGrid';
import { MeshCircuitBreakerFooter } from './servicemesh/MeshCircuitBreakerFooter';

export const MicroservicesMeshTelemetrySlide: React.FC<{
  slide: MicroservicesMeshTelemetrySlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const services = slide.meshServices || [];
  const edges = slide.trafficEdges || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_80px] flex flex-col justify-between"
    >
      <MeshHeader
        kicker={slide.kicker}
        title={slide.title || 'Microservices Mesh Telemetry & Security Fabric'}
        subtitle={slide.subtitle}
        meshName={slide.meshName || 'Istio Ambient Mesh'}
        isStrictMtlsGlobal={slide.isStrictMtlsGlobal}
        isEditMode={isEditMode}
        onUpdateTitle={(title) => applyEdit((s) => ({ ...s, title }))}
        onUpdateSubtitle={(subtitle) => applyEdit((s) => ({ ...s, subtitle }))}
      />

      <MeshGoldenSignalStrip
        totalMeshRps={slide.totalMeshRps ?? 185000}
        overallSuccessRatePercent={slide.overallSuccessRatePercent ?? 99.998}
        servicesCount={services.length}
        isStrictMtlsGlobal={slide.isStrictMtlsGlobal ?? true}
      />

      <ServiceNodeGrid meshServices={services} />

      <MeshCircuitBreakerFooter
        trafficEdges={edges}
        meshArchitect={slide.meshArchitect || 'Alim Ul Karim'}
        architectTitle={slide.architectTitle || 'Chief Software Engineer'}
      />
    </div>
  );
};
