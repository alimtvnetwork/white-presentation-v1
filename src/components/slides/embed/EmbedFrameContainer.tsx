import React, { useState } from 'react';
import type { EmbedStageSlideData } from '../../../types/extendedArchetypes';
import { isBooleanTrue } from '../../../utils/booleanGuards';
import { Lock, RefreshCw, Activity, Terminal, Shield, Play } from 'lucide-react';

interface EmbedFrameContainerProps {
  slide: EmbedStageSlideData;
  currentStep: number;
  accentColor?: string;
}

export const EmbedFrameContainer: React.FC<EmbedFrameContainerProps> = ({
  slide,
  currentStep,
  accentColor = '#8b5cf6',
}) => {
  const [reloadKey, setReloadKey] = useState(0);
  const isActive = currentStep >= 1;
  const isSandbox = isBooleanTrue(slide.isSandboxStrict);

  return (
    <div
      style={{
        boxShadow: isActive ? `0 0 0 1px ${accentColor}50, 0 0 32px -4px ${accentColor}40` : 'none',
        transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
      className={`w-full rounded-2xl border overflow-hidden flex flex-col h-[650px] ${
        isActive ? 'border-violet-500/60 bg-slate-950 plane-2-elevated' : 'border-slate-800 bg-slate-900/50 plane-1-raised'
      }`}
    >
      <div className="h-12 bg-slate-900 border-b border-slate-800 px-4 flex items-center justify-between font-mono text-xs select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600" />
          <span className="ml-3 text-slate-400 font-ubuntu font-bold text-xs truncate max-w-xs">{slide.displayTitle}</span>
        </div>

        <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 w-[600px] justify-between">
          <div className="flex items-center gap-2 truncate">
            <Lock size={12} className="text-emerald-400 shrink-0" />
            <span className="text-[11px] text-slate-300 truncate">{slide.embedUrl}</span>
          </div>
          <button
            onClick={() => setReloadKey((k) => k + 1)}
            className="text-slate-500 hover:text-slate-300 transition-colors p-0.5"
            title="Reload sandbox"
          >
            <RefreshCw size={12} />
          </button>
        </div>

        <div className="flex items-center gap-2">
          {isSandbox && (
            <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
              <Shield size={10} /> Sandboxed
            </span>
          )}
          <span className="px-2 py-0.5 rounded-full text-[10px] bg-violet-500/15 text-violet-300 border border-violet-500/30 flex items-center gap-1">
            <Activity size={10} /> {slide.telemetryBadgeText || '60 FPS • 0 Drops'}
          </span>
        </div>
      </div>

      <div className="relative flex-1 bg-slate-950 flex items-center justify-center overflow-hidden">
        {isActive ? (
          <iframe
            key={reloadKey}
            src={slide.embedUrl}
            title={slide.displayTitle}
            sandbox="allow-scripts allow-same-origin allow-forms"
            className="w-full h-full border-0 bg-slate-950"
          />
        ) : (
          <div className="text-center p-8 max-w-lg z-10 flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 mb-4 animate-bounce">
              <Play size={28} className="ml-1" />
            </div>
            <h3 className="font-ubuntu text-2xl font-bold text-white mb-2">{slide.displayTitle}</h3>
            <p className="font-poppins text-sm text-slate-400 leading-relaxed mb-4">
              Cryptographically isolated iframe container ready for real-time live interaction. Advance step to unlock execution.
            </p>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-violet-500/20 text-violet-300 border border-violet-500/40">
              Step 0: Security Inspection • Next: Live Stage
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
