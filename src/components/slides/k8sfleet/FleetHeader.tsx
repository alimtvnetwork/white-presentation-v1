import React from 'react';
import { Boxes, GitMerge, ShieldCheck } from 'lucide-react';

interface FleetHeaderProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  fleetName: string;
  isZeroDriftEnforced?: boolean;
  isEditMode: boolean;
  onUpdateTitle: (title: string) => void;
  onUpdateSubtitle: (subtitle: string) => void;
}

export const FleetHeader: React.FC<FleetHeaderProps> = ({
  kicker = 'MULTI-REGION FLEET & GITOPS DRIFT',
  title,
  subtitle,
  fleetName,
  isZeroDriftEnforced = true,
  isEditMode,
  onUpdateTitle,
  onUpdateSubtitle,
}) => {
  return (
    <div className="z-10 flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-sky-500/10 text-sky-400 border border-sky-500/30 flex items-center gap-1.5">
          <Boxes size={13} /> {kicker}
        </span>
        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-slate-800/80 text-slate-300 border border-slate-700 flex items-center gap-1.5">
          <GitMerge size={11} className="text-sky-400" /> Fleet: {fleetName}
        </span>
        {isZeroDriftEnforced && (
          <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
            <ShieldCheck size={12} /> Zero-Drift GitOps Enforced
          </span>
        )}
      </div>

      <h1
        style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
        className="font-ubuntu text-[36px] font-black tracking-tight leading-none"
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => onUpdateTitle(e.currentTarget.textContent || '')}
      >
        {title}
      </h1>

      <p
        style={{ color: 'var(--pres-text-muted)' }}
        className="font-poppins text-sm max-w-5xl leading-relaxed"
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => onUpdateSubtitle(e.currentTarget.textContent || '')}
      >
        {subtitle}
      </p>
    </div>
  );
};
