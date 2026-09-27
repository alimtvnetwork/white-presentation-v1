import React from 'react';
import { useDeckStore } from '../../stores/deckStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';

export const ThemeSelector: React.FC = () => {
  const { activeThemeId, setTheme } = useDeckStore();

  return (
    <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-800 p-1 rounded-lg">
      {Object.values(THEME_PALETTES).map((palette, i) => (
        <button
          key={palette.id}
          onClick={() => setTheme(palette.id)}
          title={`${palette.name} (Key: ${i + 1})`}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium transition-all ${
            palette.id === activeThemeId
              ? 'bg-violet-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
          }`}
        >
          <span
            className="w-2.5 h-2.5 rounded-full border border-white/20"
            style={{ backgroundColor: palette.stops[6].hex }}
          />
          <span className="hidden sm:inline">{palette.name.split(' ')[0]}</span>
          <span className="font-mono text-[10px] text-white/50">{i + 1}</span>
        </button>
      ))}
    </div>
  );
};
