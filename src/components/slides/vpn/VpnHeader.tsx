import React from 'react';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { ShieldCheck, Server } from 'lucide-react';
import { isBooleanTrue } from '../../../utils/booleanGuards';

interface VpnHeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  protocol?: string;
  encryptionSuite?: string;
}

export const VpnHeader: React.FC<VpnHeaderProps> = ({
  kicker,
  title,
  subtitle,
  protocol = 'WireGuard',
  encryptionSuite,
}) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const isEditable = isBooleanTrue(isEditMode);

  return (
    <div className="z-10 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30">
            {kicker || 'ZERO-TRUST EDGE'}
          </span>
          <span className="flex items-center gap-1.5 font-mono text-xs text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
            <ShieldCheck size={13} /> {protocol} • {encryptionSuite || 'ChaCha20-Poly1305'}
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-slate-400 bg-slate-800/40 px-3 py-1 rounded-full border border-slate-700/50">
          <Server size={13} className="text-emerald-400" />
          <span>Bare-Metal Mesh Node Fabric</span>
        </div>
      </div>

      <h1
        style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
        className="font-ubuntu text-[38px] font-black tracking-tight leading-tight"
        contentEditable={isEditable}
        suppressContentEditableWarning
        onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
      >
        {title || 'Consumer Infrastructure & Sovereign Network Mesh'}
      </h1>

      <p
        style={{ color: 'var(--pres-text-secondary)' }}
        className="font-poppins text-base font-normal -mt-1"
        contentEditable={isEditable}
        suppressContentEditableWarning
        onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
      >
        {subtitle || 'Bare-metal FreeBSD edge nodes with WireGuard ChaCha20-Poly1305 encryption'}
      </p>
    </div>
  );
};
