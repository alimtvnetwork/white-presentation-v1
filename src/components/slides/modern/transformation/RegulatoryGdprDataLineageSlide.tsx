import React, { useState } from 'react';
import type { RegulatoryGdprDataLineageSlideData } from '../../../../types/modern/transformationTypes';
import { useDeckStore } from '../../../../stores/deckStore';
import { useEditStore } from '../../../../stores/editStore';
import { createRegulatoryGdprDataLineageSlide } from '../../../../utils/modern/transformationFactories';
import { LineageHeader } from './LineageHeader';
import { LineageStageRow } from './LineageStageRow';
import { AuditTrailFooter } from './AuditTrailFooter';

interface RegulatoryGdprDataLineageSlideProps {
  slide?: RegulatoryGdprDataLineageSlideData;
  data?: RegulatoryGdprDataLineageSlideData;
}

export const RegulatoryGdprDataLineageSlide: React.FC<RegulatoryGdprDataLineageSlideProps> = ({
  slide,
  data: propsData,
}) => {
  const fallback = createRegulatoryGdprDataLineageSlide();
  const data = slide || propsData || fallback;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const deckActiveStep = useDeckStore((s) => s.activeStep);

  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const nodes = data.lineageNodes && data.lineageNodes.length > 0
    ? data.lineageNodes
    : fallback.lineageNodes;
  const auditSummary = data.auditSummary || fallback.auditSummary;
  const dataProtectionOfficer = data.dataProtectionOfficer || fallback.dataProtectionOfficer;
  const hasCryptographicAuditTrail = data.hasCryptographicAuditTrail ?? fallback.hasCryptographicAuditTrail;

  const rawStep = hoveredStep ?? (data.activeStep ?? deckActiveStep ?? 0);
  const currentStep = Math.min(Math.max(0, rawStep), nodes.length - 1);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_70px] flex flex-col justify-between"
    >
      <LineageHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        isEditMode={isEditMode}
        onEditTitle={(val) => applyEdit((s) => ({ ...s, title: val }))}
        onEditSubtitle={(val) => applyEdit((s) => ({ ...s, subtitle: val }))}
        dataProtectionOfficer={dataProtectionOfficer}
        auditSummary={auditSummary}
      />

      <div className="grid grid-cols-4 gap-5 z-10 my-auto h-[460px] items-stretch">
        {nodes.map((node, idx) => (
          <LineageStageRow
            key={node.id}
            node={node}
            index={idx}
            currentStep={currentStep}
            onHover={setHoveredStep}
          />
        ))}
      </div>

      <AuditTrailFooter
        auditSummary={auditSummary}
        hasCryptographicAuditTrail={hasCryptographicAuditTrail}
        activeNodeTitle={nodes[currentStep]?.nodeTitle || ''}
      />
    </div>
  );
};
