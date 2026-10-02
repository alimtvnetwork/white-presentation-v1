import React from 'react';
import { TeamGridSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { Users, Award } from 'lucide-react';

export const TeamGridSlide: React.FC<{ slide: TeamGridSlideData }> = ({ slide }) => {
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
          {slide.kicker || 'CORE LEADERSHIP'}
        </div>
        <img src="/assets/logos/6 - Riseup Asia Logo Transparent Only BK.png" alt="Logo" className="h-[40px] w-auto object-contain filter contrast-125" />
      </div>

      <div className="z-20 mb-4">
        <div className="flex items-center gap-3 mb-1">
          <Users size={28} style={{ color: theme.accentColor }} />
          <h1
            style={{ color: theme.textColor, textShadow: theme.headerShadow }} className="font-ubuntu text-[46px] font-black tracking-tight"
            contentEditable={isEditMode} suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {slide.title}
          </h1>
        </div>
        <p style={{ color: theme.subtextColor }} className="font-poppins text-[20px] max-w-[1200px]" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
          {slide.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6 z-20 my-auto">
        {slide.members.map((m, idx) => (
          <div key={m.id || idx} style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }} className="p-6 rounded-2xl border shadow-xl flex flex-col justify-between hover:scale-[1.01] transition-transform">
            <div>
              <div className="relative mb-4 flex items-center justify-center">
                <img src={m.avatarUrl} alt={m.name} className="w-[105px] h-[105px] rounded-full object-cover border-2 shadow-md" style={{ borderColor: theme.accentColor }} />
                {m.pedigree && (
                  <span style={{ backgroundColor: theme.accentColor }} className="absolute -bottom-2 px-3 py-0.5 rounded-full text-[11px] font-mono font-bold text-white shadow-sm flex items-center gap-1">
                    <Award size={12} /> {m.pedigree}
                  </span>
                )}
              </div>
              <div style={{ color: theme.textColor }} className="font-ubuntu text-[22px] font-bold text-center mt-2" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => {
                if (s.type !== 'team-grid') return s;
                const members = [...s.members]; members[idx] = { ...members[idx], name: e.currentTarget.textContent || '' };
                return { ...s, members };
              })}>
                {m.name}
              </div>
              <div style={{ color: theme.accentColor }} className="font-mono text-[14px] font-bold text-center mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => {
                if (s.type !== 'team-grid') return s;
                const members = [...s.members]; members[idx] = { ...members[idx], role: e.currentTarget.textContent || '' };
                return { ...s, members };
              })}>
                {m.role}
              </div>
              <div style={{ color: theme.subtextColor }} className="font-poppins text-[13px] text-center leading-relaxed mb-3" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => {
                if (s.type !== 'team-grid') return s;
                const members = [...s.members]; members[idx] = { ...members[idx], specialty: e.currentTarget.textContent || '' };
                return { ...s, members };
              })}>
                {m.specialty}
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 justify-center pt-3 border-t" style={{ borderColor: theme.cardBorder }}>
              {m.tags.map((tag, tIdx) => (
                <span key={tIdx} style={{ backgroundColor: theme.canvasBg, color: theme.subtextColor, borderColor: theme.cardBorder }} className="px-2 py-0.5 rounded-md text-[11px] font-mono border">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ borderColor: theme.cardBorder }} className="flex items-center justify-between z-20 pt-4 border-t">
        <div style={{ color: theme.subtextColor }} className="font-mono text-[14px]">Alim Ul Karim • Chief Software Engineer • Enterprise Systems Leadership</div>
        <div style={{ color: theme.subtextColor }} className="font-mono text-[14px]">WHITE SOVEREIGN ENGINE</div>
      </div>
    </div>
  );
};
