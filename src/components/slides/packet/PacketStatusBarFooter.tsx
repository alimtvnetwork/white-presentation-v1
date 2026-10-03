import React from 'react';
import { Shield, CheckCircle2, Lock, Radio } from 'lucide-react';
import type { ZeroTrustPacketInspectionSlideData } from '../../../types/sovereignOperationsArchetypes';

interface PacketStatusBarFooterProps {
  slide: ZeroTrustPacketInspectionSlideData;
  activeStep: number;
}

export const PacketStatusBarFooter: React.FC<PacketStatusBarFooterProps> = ({ slide, activeStep }) => {
  const stages = slide.inspectionStages || [];
  const currentStep = Math.min(activeStep, Math.max(0, stages.length - 1));
  const activeStage = stages[currentStep];
  const verifiedCount = stages.filter((s) => s.isVerified).length;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
      className="plane-1-raised px-5 py-3 rounded-2xl flex items-center justify-between z-10 border font-mono text-xs"
    >
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
          <Shield size={14} /> Zero-Trust Gate Clearance
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>|</span>
        <span style={{ color: 'var(--pres-text)' }} className="flex items-center gap-1">
          <Radio size={12} className="text-emerald-400 animate-pulse" />
          Active Stage: <strong className="text-cyan-300 font-bold">{activeStage?.stageName || 'Initialization'}</strong>
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>|</span>
        <span style={{ color: 'var(--pres-text-muted)' }}>
          Layer: <span className="text-slate-300">{activeStage?.layer || 'L7'}</span>
        </span>
      </div>

      <div className="flex items-center gap-5 text-slate-300">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <CheckCircle2 size={13} />
          <span>{verifiedCount} of {stages.length} Stages Signed</span>
        </span>
        <span className="flex items-center gap-1.5 text-sky-400">
          <Lock size={13} />
          <span>Line-Rate mTLS Enforced</span>
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>
          Phase {currentStep + 1} / {Math.max(stages.length, 1)}
        </span>
      </div>
    </div>
  );
};
