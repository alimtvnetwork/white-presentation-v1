import React from 'react';
import { useDeckStore } from '../../stores/deckStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { Check } from 'lucide-react';

export const ColorPalettePicker: React.FC = () => {
  const { activeThemeId, setTheme } = useDeckStore();

  return (
    <div className="flex flex-col gap-4">
      <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
        10-Step Theme Ramps
      </div>

      <div className="flex flex-col gap-3">
        {Object.values(THEME_PALETTES).map((palette) => {
          const isSelected = palette.id === activeThemeId;

          return (
            <div
              key={palette.id}
              onClick={() => setTheme(palette.id)}
              className={`p-3 rounded-xl border transition-all cursor-pointer ${
                isSelected
                  ? 'border-violet-500 bg-slate-800/80 shadow-md'
                  : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-ubuntu font-bold text-slate-200">
                  {palette.name}
                </span>
                {isSelected && <Check size={14} className="text-violet-400" />}
              </div>

              {/* 10 Gradient Step Swatches */}
              <div className="grid grid-cols-10 h-4 rounded-md overflow-hidden border border-slate-700/60">
                {palette.stops.map((stop) => (
                  <div
                    key={stop.step}
                    style={{ backgroundColor: stop.hex }}
                    title={`Step ${stop.step}: ${stop.label} (${stop.hex})`}
                    className="h-full hover:scale-110 transition-transform"
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
