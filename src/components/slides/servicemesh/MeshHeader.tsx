import React from 'react';
import { Network, Lock, ShieldCheck } from 'lucide-react';

interface MeshHeaderProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  meshName: string;
  isStrictMtlsGlobal?: boolean;
  isEditMode: boolean;
  onUpdateTitle: (title: string) => void;
  onUpdateSubtitle: (subtitle: string) => void;
}

export const MeshHeader: React.FC<MeshHeaderProps> = ({
  kicker = 'ENVOY DATA PLANE & MTLS TELEMETRY',
  title,
  subtitle,
  meshName,
  isStrictMtlsGlobal = true,
  isEditMode,
  onUpdateTitle,
  onUpdateSubtitle,
}) => {
  return (
    <div className="z-10 flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 flex items-center gap-1.5">
          <Network size={13} /> {kicker}
        </span>
        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-slate-800/80 text-slate-300 border border-slate-700">
          Engine: {meshName}
        </span>
        {isStrictMtlsGlobal && (
          <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
            <ShieldCheck size={12} /> Strict SPIFFE mTLS
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
