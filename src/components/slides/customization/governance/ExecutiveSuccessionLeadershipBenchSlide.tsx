import React from 'react';
import { Users, ShieldCheck, Award, Calendar } from 'lucide-react';
import type { ExecutiveSuccessionLeadershipBenchSlideData } from '../../../../types/customization/sovereignTelemetryTypes';
import { useDeckStore } from '../../../../stores/deckStore';
import { useEditStore } from '../../../../stores/editStore';
import { SuccessionRoleCard } from './SuccessionRoleCard';

export const ExecutiveSuccessionLeadershipBenchSlide: React.FC<{
  slide: ExecutiveSuccessionLeadershipBenchSlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const storeStep = useDeckStore((s) => s.activeStep);
  const activeStep = slide.activeStep ?? storeStep ?? 1;
  const roles = slide.successionRoles || [];
  const committeeChair = slide.chairCompensationCommittee || 'Lord Alistair Vance';

  const metrics = [
    { label: 'Emergency Coverage', val: `${slide.emergencySuccessionCoveragePercentage || 100}% Covered`, icon: Users, color: 'text-emerald-700 dark:text-emerald-400' },
    { label: 'Retention Budget', val: `$${slide.retentionBudgetMln || 18}M Pool`, icon: Award, color: 'text-sky-700 dark:text-sky-400' },
    { label: 'Board Quorum', val: slide.isQuorumApproved ? 'Quorum Approved' : 'In Review', icon: ShieldCheck, color: 'text-indigo-700 dark:text-indigo-400' },
    { label: 'Immediate Successor', val: slide.isImmediateSuccessorIdentified ? 'Identified & Vetted' : 'Evaluating', icon: Award, color: 'text-violet-700 dark:text-violet-400' },
  ];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30 flex items-center gap-1.5">
            <Users size={13} /> {slide.kicker || 'BOARDROOM GOVERNANCE & TALENT'}
          </span>
          <span className="font-mono text-xs text-sky-700 dark:text-sky-400 bg-sky-500/10 px-3 py-0.5 rounded-full border border-sky-300 dark:border-sky-500/30 flex items-center gap-1">
            <Calendar size={11} /> Review Date: {slide.governanceReviewDate || 'Q4 2026'}
          </span>
          <span className="font-mono text-xs text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-3 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-500/30 flex items-center gap-1.5">
            <ShieldCheck size={12} /> Committee Chair: {committeeChair}
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-4xl font-black tracking-tight leading-none mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Executive Succession & Leadership Bench'}
        </h1>
        <p
          style={{ color: 'var(--pres-text-muted)' }}
          className="font-poppins text-base max-w-5xl leading-relaxed"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
        >
          {slide.subtitle || 'Nine-box grid leadership readiness, emergency transition protocols, and talent retention'}
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
        {roles.map((role, idx) => (
          <SuccessionRoleCard key={role.id || idx} role={role} index={idx} isStepActive={activeStep === idx + 1} />
        ))}
      </div>

      <div className="flex items-center justify-between text-xs font-mono pt-3 border-t border-[var(--pres-border)]" style={{ color: 'var(--pres-text-muted)' }}>
        <span>Nine-Box Leadership Capability Matrix • Confidential Board Nominations Committee Protocol</span>
        <span>Standardized Engineering Sponsor: Alim Ul Karim, Chief Software Engineer</span>
      </div>
    </div>
  );
};
