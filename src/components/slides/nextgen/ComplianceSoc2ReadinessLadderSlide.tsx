import React, { useState } from 'react';
import type { ComplianceSoc2ReadinessLadderSlideData, Soc2LadderStep, TrustCriteriaScore } from '../../../types/nextGenArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { ShieldCheck } from 'lucide-react';
import { Soc2CriterionCard } from './Soc2CriterionCard';
import { AuditEvidenceStrip } from './AuditEvidenceStrip';

interface ComplianceSoc2ReadinessLadderSlideProps {
  slide?: ComplianceSoc2ReadinessLadderSlideData;
  data?: ComplianceSoc2ReadinessLadderSlideData;
}

const DEFAULT_STEPS: Soc2LadderStep[] = [
  { stepIndex: 1, title: 'Scoping & Gap Analysis', timeframe: 'Month 1', controlPassRatioPercent: 100, totalControlsMonitored: 45, status: 'COMPLETED', isStepCompleted: true, isAuditorSignedOff: true, primaryEvidenceArtifact: 'ARTIFACT-GAP-V1.pdf' },
  { stepIndex: 2, title: 'Evidence Automation', timeframe: 'Months 2-3', controlPassRatioPercent: 100, totalControlsMonitored: 120, status: 'COMPLETED', isStepCompleted: true, isAuditorSignedOff: true, primaryEvidenceArtifact: 'ARTIFACT-DRIFT.json' },
  { stepIndex: 3, title: 'Type I Attestation', timeframe: 'Month 4', controlPassRatioPercent: 100, totalControlsMonitored: 180, status: 'COMPLETED', isStepCompleted: true, isAuditorSignedOff: true, primaryEvidenceArtifact: 'ARTIFACT-TYPE-I.pdf' },
  { stepIndex: 4, title: 'Type II Observation', timeframe: 'Months 5-10', controlPassRatioPercent: 100, totalControlsMonitored: 180, status: 'IN_PROGRESS', isStepCompleted: false, isAuditorSignedOff: false, primaryEvidenceArtifact: 'ARTIFACT-TELEMETRY.jsonl' },
  { stepIndex: 5, title: 'Clean Final Report', timeframe: 'Month 11', controlPassRatioPercent: 100, totalControlsMonitored: 180, status: 'NOT_STARTED', isStepCompleted: false, isAuditorSignedOff: false, primaryEvidenceArtifact: 'ARTIFACT-FINAL.pdf' },
];

const DEFAULT_CRITERIA: TrustCriteriaScore[] = [
  { criteriaName: 'SECURITY', passedControlsCount: 68, totalControlsCount: 68, isCriteriaPassed: true },
  { criteriaName: 'AVAILABILITY', passedControlsCount: 32, totalControlsCount: 32, isCriteriaPassed: true },
  { criteriaName: 'CONFIDENTIALITY', passedControlsCount: 24, totalControlsCount: 24, isCriteriaPassed: true },
  { criteriaName: 'PROCESSING_INTEGRITY', passedControlsCount: 28, totalControlsCount: 28, isCriteriaPassed: true },
  { criteriaName: 'PRIVACY', passedControlsCount: 28, totalControlsCount: 28, isCriteriaPassed: true },
];

export const ComplianceSoc2ReadinessLadderSlide: React.FC<ComplianceSoc2ReadinessLadderSlideProps> = ({ slide, data: propsData }) => {
  const data = slide || propsData || ({} as ComplianceSoc2ReadinessLadderSlideData);
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const deckActiveStep = useDeckStore((s) => s.activeStep);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = data.ladderSteps && data.ladderSteps.length > 0 ? data.ladderSteps : DEFAULT_STEPS;
  const criteria = data.trustCriteriaScores && data.trustCriteriaScores.length > 0 ? data.trustCriteriaScores : DEFAULT_CRITERIA;
  const currentStep = hoveredStep !== null ? hoveredStep : Math.min(deckActiveStep, Math.max(0, steps.length - 1));

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_70px] flex flex-col justify-between">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2.5">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
              <ShieldCheck size={15} className="text-violet-500" />
              {data.kicker || 'ENTERPRISE GOVERNANCE, RISK & COMPLIANCE'}
            </span>
            <span className="font-mono text-sm px-3 py-1 rounded-full bg-violet-500/10 text-slate-900 dark:text-violet-300 border border-violet-500/20">
              AICPA SOC 2 Type II Readiness Ladder
            </span>
          </div>

          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl lg:text-5xl font-ubuntu font-bold leading-tight tracking-tight mb-2" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data.title || 'Continuous SOC 2 Type II Compliance Readiness Ladder'}
          </h1>

          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data.subtitle || 'Ascending Trust Ladder Across 5 AICPA Criteria to an Unqualified Independent Audit Opinion'}
          </p>
        </div>

        <AuditEvidenceStrip variant="header" compliance={data.continuousCompliance} />
      </div>

      <div className="grid grid-cols-5 gap-5 z-10 my-auto h-[460px] items-stretch">
        {steps.map((st, idx) => (
          <Soc2CriterionCard key={st.stepIndex || idx} step={st} index={idx} isActive={idx === currentStep} isCompleted={idx < currentStep} onHover={setHoveredStep} />
        ))}
      </div>

      <AuditEvidenceStrip variant="footer" criteria={criteria} auditFirm={data.auditFirm} />
    </div>
  );
};
