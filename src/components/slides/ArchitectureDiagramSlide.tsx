import React from 'react';
import { ArchitectureDiagramSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { Server, ArrowDown } from 'lucide-react';

export const ArchitectureDiagramSlide: React.FC<{ slide: ArchitectureDiagramSlideData }> = ({ slide }) => {
  const { activeThemeId, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const theme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];
  const isDark = Boolean(theme.isDark);
  const logoSrc = isDark ? '/assets/logos/5 - Riseup Asia Logo Transparent Only WT.png' : '/assets/logos/6 - Riseup Asia Logo Transparent Only BK.png';
  const tiers = slide.layers || (slide as any).tiers || [];

  return (
    <div
      style={{ backgroundColor: theme.canvasBg, color: theme.textColor }}
      className={`relative w-[1920px] h-[1080px] overflow-hidden select-none p-[90px] flex flex-col justify-between animate__animated animate__fadeIn ${theme.dotMatrix ? 'dot-matrix-bg' : ''}`}
    >
      <div className="flex items-center justify-between z-20">
        <div>
          <div className="text-[13px] font-bold tracking-[0.25em] uppercase text-violet-500 mb-2 font-mono" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, kicker: e.currentTarget.textContent || '' }))}>
            {slide.kicker || 'FOUR-TIER PLATFORM ARCHITECTURE'}
          </div>
          <h1 style={{ color: theme.textColor, textShadow: theme.headerShadow }} className="font-ubuntu text-[48px] font-extrabold tracking-tight leading-tight slide-up-anim" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {slide.title}
          </h1>
          {slide.subtitle && (
            <p style={{ color: theme.subtextColor }} className="font-poppins text-[17px] max-w-[1000px] mt-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
              {slide.subtitle}
            </p>
          )}
        </div>
        <img src={logoSrc} alt="Logo" className="h-[40px] w-auto object-contain filter contrast-125" />
      </div>

      <div className="flex flex-col gap-3 my-auto z-20 w-full max-w-[1550px] mx-auto">
        {tiers.map((layer: any, idx: number) => {
          const num = layer.layerNumber || layer.tierNumber || idx + 1;
          const protocol = layer.badge || layer.protocol || 'gRPC / TLS';
          const modules = layer.components || (layer.modules || []).map((m: any) => m.name || m);

          return (
            <React.Fragment key={idx}>
              <div
                style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
                className={`p-5 rounded-2xl border backdrop-blur-md shadow-lg flex items-center justify-between transition-all duration-200 hover:scale-[1.008] slide-up-anim stagger-${idx + 1}`}
              >
                <div className="flex items-center gap-5 w-[360px] shrink-0">
                  <div style={{ backgroundColor: theme.accentColor }} className="w-10 h-10 rounded-xl text-white font-mono font-bold text-sm flex items-center justify-center shadow">
                    0{num}
                  </div>
                  <div>
                    <h3 style={{ color: theme.textColor }} className="font-ubuntu text-lg font-bold leading-tight">{layer.name}</h3>
                    <span className="font-mono text-[11px] text-violet-400 font-semibold tracking-wider uppercase">{protocol}</span>
                  </div>
                </div>

                <div className="flex-1 flex items-center gap-3 flex-wrap px-4">
                  {modules.map((mod: any, mIdx: number) => {
                    const modName = typeof mod === 'string' ? mod : mod.name;
                    const isPri = typeof mod === 'object' && Boolean(mod.isPrimary);

                    return (
                      <span
                        key={mIdx}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium border flex items-center gap-1.5 ${
                          isPri ? 'bg-violet-600 text-white border-violet-500 shadow-sm' : isDark ? 'bg-white/5 text-slate-200 border-white/10' : 'bg-slate-100 text-slate-700 border-slate-200'
                        }`}
                      >
                        <Server size={12} className={isPri ? 'text-white' : 'text-violet-400'} />
                        <span>{modName}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
              {idx < tiers.length - 1 && (
                <div className="flex justify-center -my-1 text-violet-400/60 pointer-events-none">
                  <ArrowDown size={16} />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div className="flex items-center justify-between z-20 font-mono text-[13px]" style={{ color: theme.subtextColor }}>
        <span>{slide.protocolFlow || 'Encrypted TLS 1.3 • gRPC Service Mesh Telemetry'}</span>
        <span className="opacity-75">4-Tier Sovereign Platform Stack</span>
      </div>
    </div>
  );
};
