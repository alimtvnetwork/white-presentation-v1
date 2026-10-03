import React from 'react';
import type { EmbedStageSlideData } from '../../types/extendedArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { EmbedFrameContainer } from './embed/EmbedFrameContainer';
import { LayoutTemplate, ShieldCheck } from 'lucide-react';

export const EmbedStageSlide: React.FC<{ slide: EmbedStageSlideData }> = ({ slide }) => {
  const currentStep = useDeckStore((s) => s.activeStep);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-violet-500/10 text-violet-400 border border-violet-500/30">
            {slide.kicker || 'LIVE DEMO STAGE'}
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs flex items-center gap-1">
            <LayoutTemplate size={12} /> Sandboxed Web Application Viewport
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[38px] font-black tracking-tight leading-none mb-1.5"
        >
          {slide.title || 'Sandboxed Interactive Web Application Stage'}
        </h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-4xl leading-relaxed">
          {slide.subtitle || 'Live interactive demonstration running within a cryptographically isolated browser viewport.'}
        </p>
      </div>

      <div className="z-10 my-auto">
        <EmbedFrameContainer
          slide={slide}
          currentStep={currentStep}
          accentColor="var(--pres-accent, #8b5cf6)"
        />
      </div>

      <div className="plane-1-raised p-3.5 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="text-violet-400 font-bold flex items-center gap-2">
          <ShieldCheck size={14} /> Sandbox Security Isolation
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }} className="flex items-center gap-4">
          <span>Permissions: {slide.isSandboxStrict ? 'Strict Least Privilege' : 'Standard'}</span>
          <span>Camera: {slide.isCameraAllowed ? 'Permitted' : 'Blocked'}</span>
          <span>Mic: {slide.isMicrophoneAllowed ? 'Permitted' : 'Blocked'}</span>
          <span className="text-emerald-400 font-semibold">• Frame-Busting Guard Active</span>
        </span>
      </div>
    </div>
  );
};
