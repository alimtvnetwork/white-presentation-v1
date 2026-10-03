import React from 'react';
import { ShieldCheck, Cloud, Users, CheckCircle2 } from 'lucide-react';
import type { CspmCiemCloudEntitlementGraphSlideData } from '../../../../types/customization/sovereignTelemetryTypes';
import { useDeckStore } from '../../../../stores/deckStore';
import { useEditStore } from '../../../../stores/editStore';
import { EntitlementRiskCard } from './EntitlementRiskCard';

export const CspmCiemCloudEntitlementGraphSlide: React.FC<{
  slide: CspmCiemCloudEntitlementGraphSlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const storeStep = useDeckStore((s) => s.activeStep);
  const activeStep = slide.activeStep ?? storeStep ?? 1;
  const metricsList = slide.entitlementMetrics || [];
  const ciso = slide.chiefInformationSecurityOfficer || 'Dr. Elena Rostova';

  const metrics = [
    { label: 'Accounts Monitored', val: `${slide.cloudAccountsMonitored || 128} Accounts`, icon: Cloud, color: 'text-emerald-700 dark:text-emerald-400' },
    { label: 'Identities Analyzed', val: `${slide.totalIdentitiesAnalyzed?.toLocaleString() || '14,820'} IAM`, icon: Users, color: 'text-sky-700 dark:text-sky-400' },
    { label: 'Permissions Evaluated', val: `${slide.effectivePermissionsEvaluated || '2.4M'} Rules`, icon: ShieldCheck, color: 'text-indigo-700 dark:text-indigo-400' },
    { label: 'Toxic Path Elimination', val: slide.hasZeroCriticalPaths ? 'Zero Toxic Paths' : 'Remediating', icon: CheckCircle2, color: 'text-violet-700 dark:text-violet-400' },
  ];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30 flex items-center gap-1.5">
            <Cloud size={13} /> {slide.kicker || 'CLOUD IDENTITY TELEMETRY'}
          </span>
          <span className="font-mono text-xs text-sky-700 dark:text-sky-400 bg-sky-500/10 px-3 py-0.5 rounded-full border border-sky-300 dark:border-sky-500/30">
            Least Privilege: {slide.isLeastPrivilegeEnforced ? 'Enforced' : 'Auditing'}
          </span>
          <span className="font-mono text-xs text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-3 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-500/30 flex items-center gap-1.5">
            <ShieldCheck size={12} /> CISO: {ciso}
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-4xl font-black tracking-tight leading-none mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'CSPM & CIEM Cloud Entitlement Graph'}
        </h1>
        <p
          style={{ color: 'var(--pres-text-muted)' }}
          className="font-poppins text-base max-w-5xl leading-relaxed"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
        >
          {slide.subtitle || 'Multi-cloud identity governance and least-privilege risk topology'}
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6 my-auto">
        {metrics.map((m, idx) => (
          <div key={idx} className="plane-1-raised rounded-xl border border-[var(--pres-border)] p-3.5 flex items-center gap-3">
            <div className={`w-9 h-9 rounded-lg bg-emerald-500/10 ${m.color} flex items-center justify-center font-bold`}>
              <m.icon size={18} />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase" style={{ color: 'var(--pres-text-muted)' }}>{m.label}</div>
              <div className={`text-lg font-bold font-mono ${m.color}`}>{m.val}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-6 h-[460px] items-stretch">
        {metricsList.map((metric, idx) => (
          <EntitlementRiskCard key={metric.id || idx} metric={metric} index={idx} isStepActive={activeStep === idx + 1} />
        ))}
      </div>

      <div className="flex items-center justify-between text-xs font-mono pt-3 border-t border-[var(--pres-border)]" style={{ color: 'var(--pres-text-muted)' }}>
        <span>Graph-Based CIEM Privilege Surface Analyzer • Automated Zero-Trust Policy Push</span>
        <span>Standardized Engineering Sponsor: Alim Ul Karim, Chief Software Engineer</span>
      </div>
    </div>
  );
};
