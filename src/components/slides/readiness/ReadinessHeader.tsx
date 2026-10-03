import React from 'react';
import { Rocket, UserCheck, Calendar, CheckCircle2, AlertOctagon } from 'lucide-react';
import type { LaunchReadinessChecklistSlideData } from '../../../types/globalPptArchetypes';
import { isBooleanTrue } from '../../../utils/booleanGuards';

interface ReadinessHeaderProps {
  slide: LaunchReadinessChecklistSlideData;
  isEditMode: boolean;
  onUpdateTitle: (title: string) => void;
  onUpdateSubtitle: (subtitle: string) => void;
}

export const ReadinessHeader: React.FC<ReadinessHeaderProps> = ({
  slide,
  isEditMode,
  onUpdateTitle,
  onUpdateSubtitle,
}) => {
  const isGo = isBooleanTrue(slide.isGoForLaunch);

  return (
    <div className="z-10 flex items-start justify-between">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
            <Rocket size={13} /> {slide.kicker || 'RELEASE GOVERNANCE'}
          </span>
          <span className="font-mono text-xs text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
            RC: {slide.releaseCandidateTag || 'v1.6.0-rc3'}
          </span>
          <span className="font-mono text-xs text-slate-300 bg-slate-800/60 px-2.5 py-0.5 rounded-full border border-slate-700 flex items-center gap-1">
            <Calendar size={11} /> Target: {slide.targetLaunchDate || '2026-10-15'}
          </span>
          <span className="font-mono text-xs text-slate-300 bg-slate-800/60 px-2.5 py-0.5 rounded-full border border-slate-700 flex items-center gap-1">
            <UserCheck size={11} className="text-emerald-400" />
            <span>Captain: {slide.releaseCaptain || 'Alim Ul Karim'}</span>
            <span className="text-slate-400">({slide.captainRole || 'Chief Software Engineer'})</span>
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[38px] font-black tracking-tight leading-none mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => onUpdateTitle(e.currentTarget.textContent || '')}
        >
          {slide.title || 'Production Launch Readiness & Stage-Gate Clearance'}
        </h1>
        <p style={{ color: 'var(--pres-subtext, var(--pres-text-muted))' }} className="font-poppins text-base max-w-4xl leading-relaxed">
          {slide.subtitle || 'Multi-Phase Quality Assurance, Security Auditing & Release Candidate Verification'}
        </p>
      </div>

      <div className="flex items-center gap-3 font-mono">
        {isGo ? (
          <div className="plane-1-raised px-5 py-3 rounded-xl border border-emerald-500/40 bg-emerald-950/40 flex items-center gap-3 text-emerald-400">
            <CheckCircle2 size={24} />
            <div>
              <div className="text-[10px] uppercase tracking-wider text-emerald-300">Launch Verdict</div>
              <div className="text-lg font-bold">GO FOR LAUNCH</div>
            </div>
          </div>
        ) : (
          <div className="plane-1-raised px-5 py-3 rounded-xl border border-rose-500/40 bg-rose-950/40 flex items-center gap-3 text-rose-400">
            <AlertOctagon size={24} />
            <div>
              <div className="text-[10px] uppercase tracking-wider text-rose-300">Launch Verdict</div>
              <div className="text-lg font-bold">NO-GO (BLOCKED)</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
