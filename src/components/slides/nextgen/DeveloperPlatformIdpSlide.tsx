import React, { useState } from 'react';
import type { DeveloperPlatformIdpSlideData, GoldenPathTemplate } from '../../../types/nextGenArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Terminal } from 'lucide-react';
import { GoldenPathTemplateCard } from './GoldenPathTemplateCard';
import { IdpMetricsStrip } from './IdpMetricsStrip';

interface DeveloperPlatformIdpSlideProps {
  slide?: DeveloperPlatformIdpSlideData;
  data?: DeveloperPlatformIdpSlideData;
}

const DEFAULT_TEMPLATES: GoldenPathTemplate[] = [
  { templateId: 'tmpl-go-service', name: 'Standard Go Microservice', language: 'Go 1.23', framework: 'Chi + Split-DB', estimatedSetupMinutes: 3, usageCount: 680, isProductionReady: true, isSecurityApproved: true },
  { templateId: 'tmpl-react-spa', name: 'Enterprise Presentation SPA', language: 'TypeScript', framework: 'React 19 + Tailwind', estimatedSetupMinutes: 2, usageCount: 420, isProductionReady: true, isSecurityApproved: true },
  { templateId: 'tmpl-pytorch-ml', name: 'Autonomous Agent ML Runtime', language: 'Python 3.12', framework: 'PyTorch + vLLM', estimatedSetupMinutes: 5, usageCount: 190, isProductionReady: true, isSecurityApproved: true },
  { templateId: 'tmpl-streaming-kafka', name: 'High-Throughput Stream Pipeline', language: 'Rust', framework: 'Tokio + Kafka', estimatedSetupMinutes: 4, usageCount: 130, isProductionReady: true, isSecurityApproved: true },
];

export const DeveloperPlatformIdpSlide: React.FC<DeveloperPlatformIdpSlideProps> = ({ slide, data: propsData }) => {
  const data = slide || propsData || ({} as DeveloperPlatformIdpSlideData);
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const deckActiveStep = useDeckStore((s) => s.activeStep);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const templates = data.goldenTemplates && data.goldenTemplates.length > 0 ? data.goldenTemplates : DEFAULT_TEMPLATES;
  const catalog = data.serviceCatalog || { totalServicesTracked: 1420, compliantServicesPercentage: 96.4, unownedOrphanCount: 0, isCatalogSynchronized: true };
  const pipeline = data.provisioningPipeline || { activeProvisioningsCount: 14, avgProvisioningSeconds: 42.0, successRatePercent: 99.8, isSelfServiceEnabled: true };
  const adoption = data.platformAdoption || { developerSatisfactionScore: 4.8, weeklyActiveEngineers: 2450, onboardingTimeReductionPercent: 78.5, isGoldenPathEnforced: true };
  const currentStep = hoveredStep !== null ? hoveredStep : Math.min(deckActiveStep, Math.max(0, templates.length - 1));

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_70px] flex flex-col justify-between"
    >
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2.5">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
              <Terminal size={15} className="text-violet-500" />
              {data.kicker || 'INTERNAL DEVELOPER PLATFORM (IDP)'}
            </span>
            <span className="font-mono text-sm px-3 py-1 rounded-full bg-violet-500/10 text-slate-900 dark:text-violet-300 border border-violet-500/20">
              CNCF Golden Paths &amp; Backstage Service Catalog
            </span>
          </div>

          <h1
            style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
            className="text-4xl lg:text-5xl font-ubuntu font-bold leading-tight tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data.title || 'Internal Developer Platform (IDP) Hub'}
          </h1>

          <p
            style={{ color: 'var(--pres-text-muted)' }}
            className="font-poppins text-base max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data.subtitle || 'Self-Service Golden Paths, Automated Software Catalog Governance, and 42s Onboarding'}
          </p>
        </div>

        <IdpMetricsStrip variant="header" catalog={catalog} pipeline={pipeline} />
      </div>

      <div className="grid grid-cols-4 gap-6 z-10 my-auto h-[610px] items-stretch">
        {templates.map((tpl, idx) => (
          <GoldenPathTemplateCard
            key={tpl.templateId || idx}
            template={tpl}
            index={idx}
            isActive={idx === currentStep}
            isCompleted={idx < currentStep}
            onHover={setHoveredStep}
          />
        ))}
      </div>

      <IdpMetricsStrip variant="footer" pipeline={pipeline} adoption={adoption} />
    </div>
  );
};
