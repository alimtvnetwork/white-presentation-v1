import React from 'react';
import { ToggleRight, UserCheck, ShieldCheck, Zap, Radio } from 'lucide-react';
import type { FeatureFlagRolloutTreeSlideData } from '../../../types/sovereignOperationsArchetypes';

interface FlagHeaderProps {
  slide: FeatureFlagRolloutTreeSlideData;
  isEditMode: boolean;
  onUpdateTitle: (title: string) => void;
  onUpdateSubtitle: (subtitle: string) => void;
}

export const FlagHeader: React.FC<FlagHeaderProps> = ({
  slide,
  isEditMode,
  onUpdateTitle,
  onUpdateSubtitle,
}) => {
  const ownerName = slide.releaseOwner || 'Alim Ul Karim';
  const ownerRole = slide.ownerTitle || 'Chief Software Engineer';
  const isKillSwitchActive = slide.isInstantKillSwitchActive;

  return (
    <div className="z-10 flex items-start justify-between">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-teal-500/10 text-teal-400 border border-teal-500/30 flex items-center gap-1.5">
            <ToggleRight size={13} /> {slide.kicker || 'FEATURE FLAG ROLLOUT TREE'}
          </span>
          <span className="font-mono text-xs text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
            Key: {slide.flagKey || 'feature_kernel_bypass'}
          </span>
          <span className="font-mono text-xs text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
            Target: {slide.targetReleaseVersion || 'v3.2.0'}
          </span>
          <span className="font-mono text-xs text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
            <UserCheck size={11} /> {ownerName} ({ownerRole})
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[38px] font-black tracking-tight leading-none mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => onUpdateTitle(e.currentTarget.textContent || '')}
        >
          {slide.title || 'Ring-Based Progressive Feature Delivery'}
        </h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-4xl leading-relaxed">
          {slide.subtitle || 'Canary Cohort Expansion, Real-Time APM Guardrails & Instant Automated Circuit Breaker'}
        </p>
      </div>

      <div className="flex items-center gap-3 font-mono">
        <div
          style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
          className="plane-1-raised px-4 py-2.5 rounded-xl border flex items-center gap-3"
        >
          <div className="flex items-center gap-2 text-teal-400">
            {isKillSwitchActive ? <Radio size={22} className="text-emerald-400 animate-pulse" /> : <Zap size={22} />}
            <div>
              <div style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] uppercase tracking-wider">
                Circuit Breaker
              </div>
              <div style={{ color: isKillSwitchActive ? '#2dd4bf' : '#38bdf8' }} className="text-sm font-bold">
                {isKillSwitchActive ? 'INSTANT KILL-SWITCH ARMED' : 'CANARY MONITORED'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
