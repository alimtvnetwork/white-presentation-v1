import React from 'react';
import { CaseStudySlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { Award, Quote, CheckCircle, AlertCircle } from 'lucide-react';

export const CaseStudySlide: React.FC<{ slide: CaseStudySlideData }> = ({ slide }) => {
  const { activeThemeId, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const theme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];

  return (
    <div
      style={{ backgroundColor: theme.canvasBg, color: theme.textColor }}
      className={`relative w-[1920px] h-[1080px] overflow-hidden select-none flex flex-col justify-between p-[80px] animate__animated animate__fadeIn ${theme.dotMatrix ? 'dot-matrix-bg' : ''}`}
    >
      <div className="flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          <div
            className="text-[14px] font-bold tracking-[0.25em] uppercase font-mono px-3 py-1 rounded border"
            style={{ color: theme.accentColor, borderColor: theme.cardBorder, backgroundColor: theme.cardBg }}
            contentEditable={isEditMode} suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, kicker: e.currentTarget.textContent || '' }))}
          >
            {slide.kicker || 'ENTERPRISE CASE STUDY'}
          </div>
          <span style={{ color: theme.textColor, borderColor: theme.cardBorder, backgroundColor: theme.cardBg }} className="px-3 py-1 rounded text-[13px] font-mono border">
            {slide.clientName} • {slide.clientIndustry}
          </span>
        </div>
        <img src="/assets/logos/6 - Riseup Asia Logo Transparent Only BK.png" alt="Logo" className="h-[40px] w-auto object-contain filter contrast-125" />
      </div>

      <div className="z-20 mb-3">
        <h1 style={{ color: theme.textColor, textShadow: theme.headerShadow }} className="font-ubuntu text-[42px] font-black tracking-tight" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
          {slide.title}
        </h1>
        <p style={{ color: theme.subtextColor }} className="font-poppins text-[19px] max-w-[1300px]" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
          {slide.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 z-20 my-auto">
        <div className="flex flex-col gap-5">
          <div style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }} className="p-6 rounded-2xl border shadow-lg">
            <div className="flex items-center gap-2 mb-2 text-rose-500 font-ubuntu font-bold text-[18px]"><AlertCircle size={20} /> The Enterprise Challenge</div>
            <p style={{ color: theme.textColor }} className="font-poppins text-[16px] leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => (s.type === 'case-study' ? { ...s, challenge: e.currentTarget.textContent || '' } : s))}>{slide.challenge}</p>
          </div>
          <div style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }} className="p-6 rounded-2xl border shadow-lg">
            <div className="flex items-center gap-2 mb-2 text-emerald-500 font-ubuntu font-bold text-[18px]"><CheckCircle size={20} /> Sovereign Implemented Solution</div>
            <p style={{ color: theme.textColor }} className="font-poppins text-[16px] leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => (s.type === 'case-study' ? { ...s, solution: e.currentTarget.textContent || '' } : s))}>{slide.solution}</p>
          </div>
        </div>

        <div className="flex flex-col gap-5 justify-between">
          <div className="grid grid-cols-3 gap-4">
            {slide.metrics.map((m, idx) => (
              <div key={idx} style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }} className="p-5 rounded-2xl border shadow-md text-center">
                <div style={{ color: theme.accentColor }} className="font-ubuntu text-[38px] font-black leading-none mb-2" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => {
                  if (s.type !== 'case-study') return s;
                  const metrics = [...s.metrics]; metrics[idx] = { ...metrics[idx], value: e.currentTarget.textContent || '' };
                  return { ...s, metrics };
                })}>{m.value}</div>
                <div style={{ color: theme.textColor }} className="font-ubuntu text-[13px] font-bold mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => {
                  if (s.type !== 'case-study') return s;
                  const metrics = [...s.metrics]; metrics[idx] = { ...metrics[idx], label: e.currentTarget.textContent || '' };
                  return { ...s, metrics };
                })}>{m.label}</div>
                {m.detail && <div style={{ color: theme.subtextColor }} className="font-poppins text-[12px]">{m.detail}</div>}
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }} className="p-6 rounded-2xl border shadow-lg relative">
            <Quote size={28} style={{ color: theme.accentColor }} className="opacity-40 mb-2" />
            <p style={{ color: theme.textColor }} className="font-poppins text-[16px] italic leading-relaxed mb-3" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => (s.type === 'case-study' ? { ...s, testimonialQuote: e.currentTarget.textContent || '' } : s))}>"{slide.testimonialQuote}"</p>
            <div style={{ color: theme.subtextColor }} className="font-ubuntu text-[13px] font-semibold text-right" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => (s.type === 'case-study' ? { ...s, testimonialAuthor: e.currentTarget.textContent || '' } : s))}>— {slide.testimonialAuthor}</div>
          </div>
        </div>
      </div>

      <div style={{ borderColor: theme.cardBorder }} className="flex items-center justify-between z-20 pt-4 border-t">
        <div style={{ color: theme.subtextColor }} className="font-mono text-[14px] flex items-center gap-2"><Award size={16} style={{ color: theme.accentColor }} /> Verified Enterprise Transformation Outcome</div>
        <div style={{ color: theme.subtextColor }} className="font-mono text-[14px]">WHITE SOVEREIGN ENGINE</div>
      </div>
    </div>
  );
};
