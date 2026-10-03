import React, { useState } from 'react';
import type { ExecutiveMaSynergySlideData, SynergyMilestone, IntegrationStreamProgress } from '../../../types/nextGenArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Briefcase } from 'lucide-react';
import { SynergyEbitdaWaterfallCard } from './SynergyEbitdaWaterfallCard';
import { IntegrationWorkstreamCard } from './IntegrationWorkstreamCard';

interface ExecutiveMaSynergySlideProps {
  slide?: ExecutiveMaSynergySlideData;
  data?: ExecutiveMaSynergySlideData;
}

const DEFAULT_MILESTONES: SynergyMilestone[] = [
  { milestoneId: 'syn-d1', phaseName: 'Day 1 Close & Harmonization', targetQuarter: 'Q1 FY26', projectedSavingsMillionUsd: 15.0, actualSavingsMillionUsd: 16.5, isMilestoneAchieved: true, isEpsAccretive: false, primaryDriver: 'Executive duplication reduction & public filing consolidation' },
  { milestoneId: 'syn-d100', phaseName: 'Day 100 Vendor Deduplication', targetQuarter: 'Q2 FY26', projectedSavingsMillionUsd: 45.0, actualSavingsMillionUsd: 48.2, isMilestoneAchieved: true, isEpsAccretive: true, primaryDriver: 'Consolidated enterprise SaaS licensing & vendor procurement terms' },
  { milestoneId: 'syn-y1', phaseName: 'Year 1 Cloud Infra Consolidation', targetQuarter: 'Q4 FY26', projectedSavingsMillionUsd: 110.0, actualSavingsMillionUsd: 114.0, isMilestoneAchieved: true, isEpsAccretive: true, primaryDriver: 'AWS/GCP reserved instance pooling & DC decommissioning' },
  { milestoneId: 'syn-y3', phaseName: 'Year 3 Full Run-Rate Synergies', targetQuarter: 'Q4 FY28', projectedSavingsMillionUsd: 180.0, actualSavingsMillionUsd: 185.0, isMilestoneAchieved: false, isEpsAccretive: true, primaryDriver: 'Unified cross-sell distribution network and autonomous ops' },
];

const DEFAULT_STREAMS: IntegrationStreamProgress[] = [
  { streamName: 'TECH_INFRA', completionPercentage: 92, riskLevel: 'LOW', isStreamOnSchedule: true, streamLeaderTitle: 'Alim Ul Karim, Chief Software Engineer' },
  { streamName: 'GTM_SALES', completionPercentage: 84, riskLevel: 'MEDIUM', isStreamOnSchedule: true, streamLeaderTitle: 'Chief Commercial Officer' },
  { streamName: 'PEOPLE_OPS', completionPercentage: 96, riskLevel: 'LOW', isStreamOnSchedule: true, streamLeaderTitle: 'Chief People Officer' },
  { streamName: 'LEGAL_REGULATORY', completionPercentage: 100, riskLevel: 'LOW', isStreamOnSchedule: true, streamLeaderTitle: 'General Counsel' },
];

export const ExecutiveMaSynergySlide: React.FC<ExecutiveMaSynergySlideProps> = ({ slide, data: propsData }) => {
  const data = slide || propsData || ({} as ExecutiveMaSynergySlideData);
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const deckActiveStep = useDeckStore((s) => s.activeStep);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const milestones = data.synergyMilestones && data.synergyMilestones.length > 0 ? data.synergyMilestones : DEFAULT_MILESTONES;
  const streams = data.integrationStreams && data.integrationStreams.length > 0 ? data.integrationStreams : DEFAULT_STREAMS;
  const waterfall = data.valuationWaterfall;
  const governance = data.governanceSignoff;
  const currentStep = hoveredStep !== null ? hoveredStep : Math.min(deckActiveStep, Math.max(0, milestones.length - 1));

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_70px] flex flex-col justify-between"
    >
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2.5">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
              <Briefcase size={15} className="text-violet-500" />
              {data.kicker || 'C-SUITE CORPORATE FINANCE & STRATEGY'}
            </span>
            <span className="font-mono text-sm px-3 py-1 rounded-full bg-violet-500/10 text-slate-900 dark:text-violet-300 border border-violet-500/20">
              M&amp;A Valuation &amp; Synergy Realization Waterfall
            </span>
          </div>

          <h1
            style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
            className="text-4xl lg:text-5xl font-ubuntu font-bold leading-tight tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data.title || 'Executive M&A Valuation & Synergy Realization'}
          </h1>

          <p
            style={{ color: 'var(--pres-text-muted)' }}
            className="font-poppins text-base max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data.subtitle || 'Transaction Waterfall, Cost & Revenue Synergies, and Accretive EPS Milestone Roadmap'}
          </p>
        </div>

        <IntegrationWorkstreamCard variant="waterfall" waterfall={waterfall} />
      </div>

      <div className="grid grid-cols-4 gap-6 z-10 my-auto h-[460px] items-stretch">
        {milestones.map((m, idx) => (
          <SynergyEbitdaWaterfallCard
            key={m.milestoneId || idx}
            milestone={m}
            index={idx}
            isActive={idx === currentStep}
            isCompleted={idx < currentStep}
            onHover={setHoveredStep}
          />
        ))}
      </div>

      <IntegrationWorkstreamCard variant="streams" streams={streams} governance={governance} />
    </div>
  );
};
