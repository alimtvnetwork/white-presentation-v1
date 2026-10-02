import React from 'react';
import { useDeckStore } from '../../stores/deckStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { Layers, Shield, Cpu, Terminal, Compass } from 'lucide-react';

export const SlideBackground: React.FC = () => {
  const { activeThemeId } = useDeckStore();
  const theme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];
  const isDark = Boolean(theme.isDark);

  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0" aria-hidden="true">
      {/* 1. Atmospheric Radial Spotlight Glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 65% 55% at 50% 48%, ${theme.accentColor}${isDark ? '1c' : '12'} 0%, transparent 72%)`,
        }}
      />

      {/* 2. Geometric Cross-Hatch Subtle Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, ${isDark ? 'rgba(255,255,255,0.025)' : 'rgba(0,0,0,0.025)'} 1px, transparent 1px),
                            linear-gradient(to bottom, ${isDark ? 'rgba(255,255,255,0.025)' : 'rgba(0,0,0,0.025)'} 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* 3. Floating Architectural Vector Motifs (8-12% Opacity) */}
      <div className={`absolute top-12 right-16 ${isDark ? 'text-white/8' : 'text-slate-900/6'} wave-float-anim`}>
        <Layers size={96} strokeWidth={1} />
      </div>
      <div className={`absolute bottom-16 left-16 ${isDark ? 'text-white/6' : 'text-slate-900/5'} wave-float-anim`} style={{ animationDelay: '3s' }}>
        <Terminal size={80} strokeWidth={1} />
      </div>
      <div className={`absolute top-1/3 left-12 ${isDark ? 'text-white/5' : 'text-slate-900/4'} wave-float-anim`} style={{ animationDelay: '1.5s' }}>
        <Cpu size={72} strokeWidth={1} />
      </div>
      <div className={`absolute bottom-24 right-24 ${isDark ? 'text-white/7' : 'text-slate-900/5'} wave-float-anim`} style={{ animationDelay: '4.5s' }}>
        <Shield size={84} strokeWidth={1} />
      </div>
      <div className={`absolute top-16 left-1/2 -translate-x-1/2 ${isDark ? 'text-white/4' : 'text-slate-900/3'}`}>
        <Compass size={64} strokeWidth={0.8} />
      </div>
    </div>
  );
};
