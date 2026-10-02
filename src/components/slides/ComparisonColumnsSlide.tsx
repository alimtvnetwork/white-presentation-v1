import React from 'react';
import { ComparisonColumnsSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { Check, X, Sparkles } from 'lucide-react';

export const ComparisonColumnsSlide: React.FC<{ slide: ComparisonColumnsSlideData }> = ({ slide }) => {
  const { activeThemeId, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const theme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];

  return (
    <div
      style={{ backgroundColor: theme.canvasBg, color: theme.textColor }}
      className={`relative w-[1920px] h-[1080px] overflow-hidden select-none flex flex-col justify-between p-[80px] animate__animated animate__fadeIn ${theme.dotMatrix ? 'dot-matrix-bg' : ''}`}
    >
      <div className="flex items-center justify-between z-20">
        <div
          className="text-[14px] font-bold tracking-[0.25em] uppercase font-mono px-3 py-1 rounded border"
          style={{ color: theme.accentColor, borderColor: theme.cardBorder, backgroundColor: theme.cardBg }}
          contentEditable={isEditMode} suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, kicker: e.currentTarget.textContent || '' }))}
        >
          {slide.kicker || 'COMPARATIVE EVALUATION'}
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

      <div className="grid grid-cols-3 gap-8 z-20 my-auto items-stretch">
        {slide.columns.map((col, cIdx) => (
          <div
            key={col.id || cIdx}
            style={{
              backgroundColor: theme.cardBg,
              borderColor: col.isFeatured ? theme.accentColor : theme.cardBorder,
              boxShadow: col.isFeatured ? `0 0 30px ${theme.accentColor}25` : undefined,
            }}
            className={`p-7 rounded-3xl border flex flex-col justify-between relative transition-all ${col.isFeatured ? 'ring-2 ring-violet-500/30' : ''}`}
          >
            {col.isFeatured && (
              <div style={{ backgroundColor: theme.accentColor }} className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[12px] font-mono font-bold text-white shadow-md flex items-center gap-1.5">
                <Sparkles size={13} /> SOVEREIGN STANDARD
              </div>
            )}
            <div>
              <div className="flex items-center justify-between mb-1">
                <div style={{ color: theme.textColor }} className="font-ubuntu text-[24px] font-bold" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => {
                  if (s.type !== 'comparison-columns') return s;
                  const cols = [...s.columns]; cols[cIdx] = { ...cols[cIdx], title: e.currentTarget.textContent || '' };
                  return { ...s, columns: cols };
                })}>{col.title}</div>
                {col.badge && <span style={{ borderColor: theme.cardBorder, color: col.isFeatured ? theme.accentColor : theme.subtextColor }} className="px-2.5 py-0.5 rounded-full text-[12px] font-mono border font-semibold">{col.badge}</span>}
              </div>
              <div style={{ color: theme.subtextColor }} className="font-poppins text-[14px] mb-5">{col.subtitle}</div>

              <div className="space-y-3 pt-3 border-t" style={{ borderColor: theme.cardBorder }}>
                {col.attributes.map((attr, aIdx) => (
                  <div key={aIdx} className="flex items-center justify-between text-[14px] py-1">
                    <span style={{ color: theme.subtextColor }} className="font-poppins font-medium">{attr.label}</span>
                    <div className="flex items-center gap-2">
                      <span style={{ color: theme.textColor }} className="font-ubuntu font-bold">{attr.value}</span>
                      {attr.isPositive ? <Check size={16} className="text-emerald-500 stroke-[3]" /> : <X size={16} className="text-slate-400 stroke-[2.5]" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t font-poppins text-[13px] leading-relaxed italic" style={{ borderColor: theme.cardBorder, color: theme.subtextColor }}>
              {col.summary}
            </div>
          </div>
        ))}
      </div>

      <div style={{ borderColor: theme.cardBorder }} className="flex items-center justify-between z-20 pt-4 border-t">
        <div style={{ color: theme.subtextColor }} className="font-mono text-[14px]">Feature Matrix • 1080p Pure Live DOM Elements</div>
        <div style={{ color: theme.subtextColor }} className="font-mono text-[14px]">WHITE SOVEREIGN ENGINE</div>
      </div>
    </div>
  );
};
