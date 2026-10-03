import React from 'react';
import { Terminal, Shield, CheckCircle2 } from 'lucide-react';
import type { DeveloperGatewaySandboxSlideData } from '../../../types/globalPptArchetypes';
import { isBooleanTrue } from '../../../utils/booleanGuards';

interface GatewayRouteBarProps {
  slide: DeveloperGatewaySandboxSlideData;
  isEditMode: boolean;
  onUpdateTitle: (title: string) => void;
  onUpdateSubtitle: (subtitle: string) => void;
}

export const GatewayRouteBar: React.FC<GatewayRouteBarProps> = ({
  slide,
  isEditMode,
  onUpdateTitle,
  onUpdateSubtitle,
}) => {
  const isMock = isBooleanTrue(slide.isMockEnabled);
  const statusColor = slide.responseStatus < 300 ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' : 'text-rose-400 bg-rose-500/10 border-rose-500/30';

  return (
    <div className="z-10 flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center gap-1.5">
          <Terminal size={13} /> {slide.kicker || 'DEVELOPER PLATFORM'}
        </span>
        {isMock && (
          <span className="font-mono text-xs text-amber-800 dark:text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
            Mock Engine Enabled
          </span>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h1
            style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
            className="font-ubuntu text-[36px] font-black tracking-tight leading-none mb-1.5"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => onUpdateTitle(e.currentTarget.textContent || '')}
          >
            {slide.title || 'Enterprise API Gateway Architecture & Execution Sandbox'}
          </h1>
          <p style={{ color: 'var(--pres-subtext, var(--pres-text-muted))' }} className="font-poppins text-sm max-w-4xl leading-relaxed">
            {slide.subtitle || 'Edge Route Ingress, Cryptographic Token Verification & Low-Latency Dispatch'}
          </p>
        </div>

        <div className="plane-1-raised px-4 py-2 rounded-xl border border-slate-800 bg-slate-900/80 flex items-center gap-3 font-mono text-xs">
          <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold">
            {slide.httpMethod || 'POST'}
          </span>
          <span className="text-slate-300">{slide.baseHost}{slide.endpointRoute}</span>
          <span className={`px-2 py-0.5 rounded border font-bold flex items-center gap-1 ${statusColor}`}>
            <CheckCircle2 size={11} /> {slide.responseStatus || 200} OK
          </span>
        </div>
      </div>
    </div>
  );
};
