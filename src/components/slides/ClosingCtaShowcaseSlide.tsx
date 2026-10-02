import React from 'react';
import type { ClosingCtaShowcaseSlideData } from '../../types/enterpriseArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { ArrowRight, Calendar, Mail, Globe, QrCode } from 'lucide-react';

export const ClosingCtaShowcaseSlide: React.FC<{ slide: ClosingCtaShowcaseSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);

  const isPrimaryActive = activeStep === 0;
  const isPrimaryPast = activeStep > 0;
  const primaryStyle: React.CSSProperties = isPrimaryActive
    ? { opacity: 1.0, transform: 'scale(1.02)', zIndex: 20 }
    : isPrimaryPast ? { opacity: 0.75, transform: 'scale(1.0)' }
    : { opacity: 0.4, transform: 'scale(0.98)', filter: 'blur(1.25px)', pointerEvents: 'none' };

  const isSecondaryActive = activeStep >= 1;
  const secondaryStyle: React.CSSProperties = isSecondaryActive
    ? { opacity: 1.0, transform: 'scale(1.02)', zIndex: 20 }
    : { opacity: 0.4, transform: 'scale(0.98)', filter: 'blur(1.25px)', pointerEvents: 'none' };

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-blue-500/10 text-blue-400 border border-blue-500/30">
          {slide.kicker || 'EXECUTIVE ENGAGEMENT'}
        </span>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[44px] font-black tracking-tight leading-none mt-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >{slide.ctaHeadline}</h1>
        {slide.subHeadline && <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-lg mt-3 max-w-3xl">{slide.subHeadline}</p>}
      </div>

      <div className="z-10 grid grid-cols-12 gap-8 my-auto items-stretch">
        <div
          style={primaryStyle}
          className={`col-span-7 p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
            isPrimaryActive ? 'bg-gradient-to-br from-blue-600/20 to-indigo-600/10 border-blue-500 ring-2 ring-blue-500/40 shadow-2xl' : 'bg-slate-900/40 border-slate-800'
          }`}
        >
          <div>
            <span className="font-mono text-xs text-blue-400 uppercase tracking-wider block mb-2">Primary Engagement Portal</span>
            <h2 className="font-ubuntu text-2xl font-black text-slate-100 mb-4">Schedule Architecture Briefing & Workshop</h2>
            <p className="font-poppins text-sm text-slate-300 leading-relaxed mb-6">
              Connect directly with our Chief Software Engineer and technical leadership to audit your sovereign presentation infrastructure.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a href={slide.primaryCta.url || '#'} className="bg-blue-600 hover:bg-blue-500 text-white font-ubuntu font-bold px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg transition-all">
              <span>{slide.primaryCta.label}</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div
          style={secondaryStyle}
          className={`col-span-5 p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
            isSecondaryActive ? 'bg-slate-900/90 border-indigo-500 ring-2 ring-indigo-500/40 shadow-2xl' : 'bg-slate-900/40 border-slate-800'
          }`}
        >
          <div>
            <span className="font-mono text-xs text-indigo-400 uppercase tracking-wider block mb-3">Direct Contact & Fast Portal</span>
            <div className="flex flex-col gap-3 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2.5"><Mail size={14} className="text-blue-400" /><span>{slide.contactInfo?.email || 'chief@riseup.enterprise'}</span></div>
              <div className="flex items-center gap-2.5"><Globe size={14} className="text-indigo-400" /><span>{slide.contactInfo?.website || 'https://white-pres.dev'}</span></div>
              <div className="flex items-center gap-2.5"><Calendar size={14} className="text-emerald-400" /><span>Calendar Booking Active</span></div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between mt-4">
            <span className="font-mono text-[11px] text-slate-400">Scan to Access Mobile HUD</span>
            <QrCode size={36} className="text-indigo-400" />
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-4 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-blue-400 font-bold"><Calendar size={14} /> Kinetic Finale: Primary CTA (0) → Calendar & Fast Portal (1)</span>
        <span style={{ color: 'var(--pres-text-muted)' }}>{slide.socialProofNote || 'Trusted by Enterprise Teams Worldwide'}</span>
      </div>
    </div>
  );
};
