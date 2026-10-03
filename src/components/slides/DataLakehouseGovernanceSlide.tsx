import React from 'react';
import type { DataLakehouseGovernanceSlideData } from '../../types/sovereignOperationsArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { LakehouseHeader } from './lakehouse/LakehouseHeader';
import { LakehouseMetricStrip } from './lakehouse/LakehouseMetricStrip';
import { DataProductGrid } from './lakehouse/DataProductGrid';
import { LakehouseTierMatrix } from './lakehouse/LakehouseTierMatrix';
import { LakehouseFooter } from './lakehouse/LakehouseFooter';

export const DataLakehouseGovernanceSlide: React.FC<{
  slide: DataLakehouseGovernanceSlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const domains = slide.dataDomains || [];
  const rules = slide.governanceRules || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_80px] flex flex-col justify-between"
    >
      <LakehouseHeader
        kicker={slide.kicker}
        title={slide.title || 'Data Lakehouse Governance & Compliance Fabric'}
        subtitle={slide.subtitle}
        catalogName={slide.catalogName || 'Sovereign Enterprise Iceberg v2'}
        isCasbinRbacEnforced={slide.isCasbinRbacEnforced}
        isEditMode={isEditMode}
        onUpdateTitle={(title) => applyEdit((s) => ({ ...s, title }))}
        onUpdateSubtitle={(subtitle) => applyEdit((s) => ({ ...s, subtitle }))}
      />

      <LakehouseMetricStrip
        totalDataManagedPb={slide.totalDataManagedPb ?? 18.6}
        complianceAuditScorePercent={slide.complianceAuditScorePercent ?? 99.8}
        domainsCount={domains.length}
        rulesCount={rules.length}
      />

      <DataProductGrid dataDomains={domains} />

      <LakehouseTierMatrix governanceRules={rules} />

      <LakehouseFooter
        lakehouseArchitect={slide.lakehouseArchitect || 'Alim Ul Karim'}
        architectTitle={slide.architectTitle || 'Chief Software Engineer'}
        isCasbinRbacEnforced={slide.isCasbinRbacEnforced ?? true}
      />
    </div>
  );
};
