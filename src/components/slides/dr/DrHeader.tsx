import React from 'react';
import { AlertTriangle, UserCheck, ShieldCheck, CheckCircle2, Globe } from 'lucide-react';
import type { DisasterRecoveryDrillSlideData } from '../../../types/sovereignOperationsArchetypes';

interface DrHeaderProps {
  slide: DisasterRecoveryDrillSlideData;
  isEditMode: boolean;
  onUpdateTitle: (title: string) => void;
  onUpdateSubtitle: (subtitle: string) => void;
}

export const DrHeader: React.FC<DrHeaderProps> = ({
  slide,
  isEditMode,
  onUpdateTitle,
  onUpdateSubtitle,
}) => {
  const commanderName = slide.incidentCommander || 'Alim Ul Karim';
  const commanderRole = slide.commanderTitle || 'Chief Software Engineer';
  const isSignedOff = slide.isExecutiveSignoffAchieved;

  return (
    <div className="z-10 flex items-start justify-between">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
            <AlertTriangle size={13} /> {slide.kicker || 'DISASTER RECOVERY DRILL'}
          </span>
          <span className="font-mono text-xs text-rose-300 bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-500/20">
            Drill: {slide.drillCode || 'SIM-BLACKOUT-01'}
          </span>
          <span className="font-mono text-xs text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20 flex items-center gap-1">
            <Globe size={11} /> RTO: {slide.targetRtoFormatted || '< 60s'} | RPO: {slide.targetRpoFormatted || '0s'}
          </span>
          <span className="font-mono text-xs text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
            <UserCheck size={11} /> {commanderName} ({commanderRole})
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[38px] font-black tracking-tight leading-none mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => onUpdateTitle(e.currentTarget.textContent || '')}
        >
          {slide.title || 'Cross-Continental Failover & RTO Clearance'}
        </h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-4xl leading-relaxed">
          {slide.subtitle || 'Primary Region Blackout Simulation, Autonomous DNS Anycast Swing & Zero-RPO Data Sync'}
        </p>
      </div>

      <div className="flex items-center gap-3 font-mono">
        <div
          style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
          className="plane-1-raised px-4 py-2.5 rounded-xl border flex items-center gap-3"
        >
          <div className="flex items-center gap-2 text-emerald-400">
            {isSignedOff ? <CheckCircle2 size={22} className="text-emerald-400" /> : <ShieldCheck size={22} />}
            <div>
              <div style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] uppercase tracking-wider">
                Drill Governance
              </div>
              <div style={{ color: isSignedOff ? '#34d399' : '#fbbf24' }} className="text-sm font-bold">
                {isSignedOff ? 'EXECUTIVE SIGNOFF' : 'DRILL CLEARED'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
