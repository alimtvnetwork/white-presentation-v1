import React from 'react';
import type { ClosingCtaShowcaseSlideData } from '../../types/enterpriseArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { ClosingContactPill } from './cta/ClosingContactPill';
import { Mail, Phone, Globe, Calendar, ArrowRight, ShieldCheck, UserCheck } from 'lucide-react';

export const ClosingCtaShowcaseSlide: React.FC<{ slide: ClosingCtaShowcaseSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const c = slide.contactInfo;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between">
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-violet-500/10 text-violet-400 border border-violet-500/30">
            {slide.kicker || 'STRATEGIC COMMITMENT & NEXT ACTIONS'}
          </span>
          <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
            <ShieldCheck size={12} /> Enterprise SLA Guaranteed
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[42px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Accelerate Your Enterprise Transformation'}
        </h1>
      </div>

      <div className="z-10 my-auto grid grid-cols-12 gap-10 w-full items-center">
        <div className="col-span-7 space-y-6">
          <div className="space-y-3">
            <h2 className="font-ubuntu text-3xl font-black text-slate-100 leading-snug">{slide.ctaHeadline}</h2>
            {slide.subHeadline && <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base leading-relaxed">{slide.subHeadline}</p>}
          </div>

          <div className="flex items-center gap-4 pt-2">
            {slide.primaryCta && (
              <a href={slide.primaryCta.url || '#'} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-ubuntu font-bold text-base flex items-center gap-2 shadow-lg shadow-violet-950/50 hover:brightness-110 transition-all cursor-pointer no-underline">
                <span>{slide.primaryCta.label}</span>
                <ArrowRight size={18} />
              </a>
            )}
            {slide.secondaryCta && (
              <a href={slide.secondaryCta.url || '#'} target="_blank" rel="noopener noreferrer" className="px-6 py-4 rounded-2xl bg-slate-900 border border-slate-700 text-slate-200 font-ubuntu font-bold text-sm hover:bg-slate-800 transition-all cursor-pointer no-underline">
                {slide.secondaryCta.label}
              </a>
            )}
          </div>
        </div>

        <div className="col-span-5 plane-2-elevated p-8 rounded-3xl border border-slate-800 bg-slate-900/60 space-y-5">
          <div className="flex items-center gap-4 pb-4 border-b border-slate-800/80">
            <div className="w-12 h-12 rounded-2xl bg-violet-500/20 border border-violet-500/40 flex items-center justify-center text-violet-400">
              <UserCheck size={24} />
            </div>
            <div>
              <h3 className="font-ubuntu text-lg font-bold text-slate-100">Alim Ul Karim</h3>
              <p className="font-mono text-xs text-violet-400 font-semibold">Chief Software Engineer</p>
            </div>
          </div>

          <div className="space-y-3">
            {c?.email && <ClosingContactPill icon={<Mail size={16} />} label="Direct Channel" value={c.email} href={`mailto:${c.email}`} />}
            {c?.phone && <ClosingContactPill icon={<Phone size={16} />} label="Priority Line" value={c.phone} href={`tel:${c.phone}`} />}
            {c?.website && <ClosingContactPill icon={<Globe size={16} />} label="Sovereign Portal" value={c.website} href={c.website} />}
            {c?.hasCalendarLink && <ClosingContactPill icon={<Calendar size={16} />} label="Architecture Review" value="Book Executive Session" href={slide.primaryCta?.url} />}
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-4 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-violet-400 font-bold">
          <ShieldCheck size={14} /> {slide.socialProofNote || 'Trusted by Tier-1 Sovereign Systems and Autonomous AI Fleets'}
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>Closing Keynote & Executive CTA</span>
      </div>
    </div>
  );
};
