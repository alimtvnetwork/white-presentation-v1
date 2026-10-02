import React from 'react';
import type { ExecutiveContactSlideData } from '../../types/expandedArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { CheckCircle2, Calendar, Mail, MapPin, QrCode } from 'lucide-react';

export const ExecutiveContactSlide: React.FC<{ slide: ExecutiveContactSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const persona = slide.persona;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-violet-500/10 text-violet-400 border border-violet-500/30">
            {slide.kicker || 'EXECUTIVE ACCESS & CLOSE'}
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">• Direct Partnership</span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[42px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Direct Executive Partnership & Next Steps'}
        </h1>
      </div>

      <div className="grid grid-cols-12 gap-8 z-10 my-auto items-stretch">
        <div className="col-span-7 plane-1-raised p-8 rounded-3xl border border-violet-500/20 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-violet-500/20 border-2 border-violet-500 flex items-center justify-center font-ubuntu font-bold text-xl text-violet-300">AK</div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-ubuntu text-2xl font-bold text-slate-100">{persona.name}</h2>
                  {Boolean(persona.isVerified) && (
                    <span className="flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30"><CheckCircle2 size={12} /> Verified</span>
                  )}
                </div>
                <div className="text-sm font-mono text-violet-400 font-bold">{persona.role}</div>
              </div>
            </div>
            <p className="font-poppins italic text-xs text-slate-300 mb-4 bg-slate-900/60 p-3 rounded-xl border border-slate-800">"{persona.quote}"</p>
            <div className="space-y-1.5 mb-4">
              {(persona.bioBullets || []).map((b, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs font-poppins text-slate-300"><span className="text-violet-400 font-bold">•</span> <span>{b}</span></div>
              ))}
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-violet-500/10 border border-violet-500/20 text-xs font-poppins text-violet-200">
            <strong>Personal Delivery Guarantee:</strong> {slide.guaranteeNote}
          </div>
        </div>

        <div className="col-span-5 plane-2-elevated p-8 rounded-3xl border border-violet-500/30 flex flex-col justify-between items-center text-center">
          <div className="w-full">
            <h3 className="font-ubuntu text-xl font-bold text-slate-100 mb-1">Reserve Architecture Briefing</h3>
            <p className="font-poppins text-xs text-slate-400 mb-6">Direct 30-minute sovereign architecture session</p>
            <a href={slide.bookingUrl} target="_blank" rel="noreferrer" className="btn-primary-accent w-full py-3 text-sm mb-6 flex items-center justify-center gap-2">
              <Calendar size={16} /> {slide.ctaButtonText || 'Book Strategic Call'}
            </a>
            <div className="w-[180px] h-[180px] mx-auto p-3 rounded-2xl bg-white flex items-center justify-center shadow-lg border border-slate-200 mb-4">
              <div className="flex flex-col items-center justify-center text-slate-900">
                <QrCode size={110} />
                <span className="text-[10px] font-mono mt-1 font-bold">SCAN TO OPEN CALENDAR</span>
              </div>
            </div>
          </div>
          <div className="text-xs font-mono text-slate-400 space-y-1">
            <div className="flex items-center gap-1.5 justify-center text-violet-300"><Mail size={12} /> {slide.email}</div>
            <div className="text-[10px] text-slate-500">{slide.bookingUrl}</div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between z-10 pt-4 border-t border-slate-800 font-mono text-xs text-slate-400">
        <span className="text-violet-400 font-bold">Chief Software Engineer Direct Access</span>
        <span>Zero Third-Party Intermediaries</span>
      </div>
    </div>
  );
};
