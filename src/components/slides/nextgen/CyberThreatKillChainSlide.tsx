import React, { useState } from 'react';
import type { CyberThreatKillChainSlideData, KillChainStageDetail } from '../../../types/nextGenArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { ShieldAlert } from 'lucide-react';
import { KillChainStageCard } from './KillChainStageCard';
import { SoarContainmentStrip } from './SoarContainmentStrip';

interface CyberThreatKillChainSlideProps {
  slide?: CyberThreatKillChainSlideData;
  data?: CyberThreatKillChainSlideData;
}

const DEFAULT_STAGES: KillChainStageDetail[] = [
  { stageIndex: 1, stageName: 'Recon & Weaponization', mitreTacticId: 'TA0043 / TA0001', primaryThreatVector: 'Attack surface OSINT port scans & phishing payloads', activeDefenseControl: 'Magic Transit & Zero-Trust Email Sandbox', containmentStatus: 'NEUTRALIZED', mttdMinutes: 0.4, isDefended: true, isAutomatedPlaybookTriggered: true },
  { stageIndex: 2, stageName: 'Delivery & Exploitation', mitreTacticId: 'TA0002 / TA0004', primaryThreatVector: 'Edge Ingress CVE-2026-4412 buffer overflow attempt', activeDefenseControl: 'Kernel eBPF Coraza WAF & Exploit Shield', containmentStatus: 'CONTAINED', mttdMinutes: 1.1, isDefended: true, isAutomatedPlaybookTriggered: true },
  { stageIndex: 3, stageName: 'Lateral Movement & C2', mitreTacticId: 'TA0008 / TA0011', primaryThreatVector: 'East-west microservice hopping via Kerberos ticket', activeDefenseControl: 'Cilium L7 Network Policy & Mutual TLS', containmentStatus: 'CONTAINED', mttdMinutes: 1.4, isDefended: true, isAutomatedPlaybookTriggered: true },
  { stageIndex: 4, stageName: 'Action on Objectives', mitreTacticId: 'TA0010 / TA0040', primaryThreatVector: 'Encrypted S3 bucket dumping via compromised account', activeDefenseControl: 'GuardDuty Anomaly Sensor & Automated Revoke', containmentStatus: 'NEUTRALIZED', mttdMinutes: 0.8, isDefended: true, isAutomatedPlaybookTriggered: true },
];

export const CyberThreatKillChainSlide: React.FC<CyberThreatKillChainSlideProps> = ({ slide, data: propsData }) => {
  const data = slide || propsData || ({} as CyberThreatKillChainSlideData);
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const deckActiveStep = useDeckStore((s) => s.activeStep);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const stages = data.killChainStages && data.killChainStages.length > 0 ? data.killChainStages : DEFAULT_STAGES;
  const actor = data.threatActor;
  const soc = data.socTelemetry;
  const review = data.cisoReview;
  const currentStep = hoveredStep !== null ? hoveredStep : Math.min(deckActiveStep, Math.max(0, stages.length - 1));

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_70px] flex flex-col justify-between"
    >
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2.5">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
              <ShieldAlert size={15} className="text-violet-500" />
              {data.kicker || 'ZERO-TRUST THREAT INTELLIGENCE & MITRE ATT&CK'}
            </span>
            <span className="font-mono text-sm px-3 py-1 rounded-full bg-violet-500/10 text-slate-900 dark:text-violet-300 border border-violet-500/20">
              Lockheed Martin 7-Stage Kill Chain Matrix
            </span>
          </div>

          <h1
            style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
            className="text-4xl lg:text-5xl font-ubuntu font-bold leading-tight tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data.title || 'Cyber Threat Kill Chain & MITRE Matrix'}
          </h1>

          <p
            style={{ color: 'var(--pres-text-muted)' }}
            className="font-poppins text-base max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data.subtitle || 'Lockheed Martin 7-Stage Kill Chain Defense, MITRE ATT&CK Mapping & Automated SOAR Playbooks'}
          </p>
        </div>

        <SoarContainmentStrip variant="header" actor={actor} soc={soc} />
      </div>

      <div className="grid grid-cols-4 gap-6 z-10 my-auto h-[610px] items-stretch">
        {stages.map((stage, idx) => (
          <KillChainStageCard
            key={stage.stageIndex || idx}
            stage={stage}
            index={idx}
            isActive={idx === currentStep}
            isCompleted={idx < currentStep}
            onHover={setHoveredStep}
          />
        ))}
      </div>

      <SoarContainmentStrip variant="footer" actor={actor} soc={soc} review={review} />
    </div>
  );
};
