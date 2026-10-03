import React from 'react';
import { ShieldCheck, UserCheck, Network, Lock } from 'lucide-react';
import type { ZeroTrustPacketInspectionSlideData } from '../../../types/sovereignOperationsArchetypes';

interface PacketHeaderProps {
  slide: ZeroTrustPacketInspectionSlideData;
  isEditMode: boolean;
  onUpdateTitle: (title: string) => void;
  onUpdateSubtitle: (subtitle: string) => void;
}

export const PacketHeader: React.FC<PacketHeaderProps> = ({
  slide,
  isEditMode,
  onUpdateTitle,
  onUpdateSubtitle,
}) => {
  const architectName = slide.chiefSecurityArchitect || 'Alim Ul Karim';
  const architectRole = slide.architectTitle || 'Chief Software Engineer';

  return (
    <div className="z-10 flex items-start justify-between">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center gap-1.5">
            <ShieldCheck size={13} /> {slide.kicker || 'ZERO-TRUST PACKET INSPECTION'}
          </span>
          <span className="font-mono text-xs text-sky-300 bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20 flex items-center gap-1">
            <Network size={11} /> Segment: {slide.networkSegment || 'Transit DMZ'}
          </span>
          <span className="font-mono text-xs text-amber-800 dark:text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20 flex items-center gap-1">
            <Lock size={11} /> Mode: {slide.inspectionMode || 'Inline Epoll'}
          </span>
          <span className="font-mono text-xs text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
            <UserCheck size={11} /> {architectName} ({architectRole})
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[38px] font-black tracking-tight leading-none mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => onUpdateTitle(e.currentTarget.textContent || '')}
        >
          {slide.title || 'Zero-Trust Deep Packet Inspection Pipeline'}
        </h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-4xl leading-relaxed">
          {slide.subtitle || 'Multi-Stage In-Flight Cryptographic Attestation & Line-Rate L7 Gateway Validation'}
        </p>
      </div>

      <div className="flex items-center gap-3 font-mono">
        <div
          style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
          className="plane-1-raised px-4 py-2.5 rounded-xl border flex items-center gap-3"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <div>
            <div style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] uppercase tracking-wider">
              Pipeline Status
            </div>
            <div style={{ color: 'var(--pres-text)' }} className="text-sm font-bold">
              ACTIVE ENFORCEMENT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
