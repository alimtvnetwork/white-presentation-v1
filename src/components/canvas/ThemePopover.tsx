import React from 'react';
import { useDeckStore } from '../../stores/deckStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { Check, X } from 'lucide-react';

export const ThemePopover: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { activeThemeId, setTheme } = useDeckStore();

  return (
    <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-72 bg-slate-900/95 border border-slate-700/80 rounded-2xl shadow-2xl p-3 z-50 backdrop-blur-xl">
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-xs font-semibold text-slate-300">
        <span>Presentation Themes</span>
        <button onClick={onClose} className="text-slate-400 hover:text-white p-0.5 rounded cursor-pointer">
          <X size={14} />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-1.5 max-h-56 overflow-y-auto pr-1">
        {Object.entries(THEME_PALETTES).slice(0, 10).map(([id, theme]) => {
          const isSelected = activeThemeId === id;
          return (
            <button
              key={id}
              onClick={() => {
                setTheme(id);
                onClose();
              }}
              className={`flex items-center gap-2 p-2 rounded-xl text-left text-xs transition-all cursor-pointer ${
                isSelected
                  ? 'bg-violet-600/30 border border-violet-500/80 text-white font-medium'
                  : 'hover:bg-slate-800/80 border border-transparent text-slate-300'
              }`}
            >
              <div
                className="w-3.5 h-3.5 rounded-full shrink-0 border border-white/20 shadow-sm"
                style={{ backgroundColor: theme.accentColor }}
              />
              <span className="truncate flex-1 text-[11px]">{theme.name.split(' (')[0]}</span>
              {isSelected && <Check size={12} className="text-violet-400 shrink-0" />}
            </button>
          );
        })}
      </div>
    </div>
  );
};
