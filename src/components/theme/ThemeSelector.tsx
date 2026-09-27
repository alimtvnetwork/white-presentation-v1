import React, { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { useDeckStore } from '../../stores/deckStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';

const KEY_ESCAPE = 'Escape';
const FALSE_FLAG = Boolean(0);

export const ThemeSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(FALSE_FLAG);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { activeThemeId, setTheme } = useDeckStore();

  const paletteList = Object.values(THEME_PALETTES);
  const activePalette = THEME_PALETTES[activeThemeId] ?? paletteList[0];
  const handleClose = () => setIsOpen(FALSE_FLAG);

  const handleClickOutside = (e: MouseEvent) => {
    const isInside = Boolean(dropdownRef.current?.contains(e.target as Node));

    if (!isInside) {
      handleClose();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === KEY_ESCAPE) {
      handleClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-700/80 bg-slate-900/90 hover:border-violet-500 hover:bg-slate-800/90 transition-all font-ubuntu font-bold text-xs text-slate-200"
        title="Select Presentation Theme"
      >
        <span className="w-3 h-3 rounded-full border border-white/20 shrink-0" style={{ backgroundColor: activePalette.accentColor }} />
        <span className="truncate">{activePalette.name.split(' (')[0]}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 w-72 bg-slate-900 border border-slate-700/90 rounded-xl shadow-2xl backdrop-blur-xl p-2 z-50 animate__animated animate__fadeIn animate__faster">
          <div className="flex items-center justify-between px-2 py-1.5 mb-1 border-b border-slate-800 text-[11px] font-medium text-slate-400">
            <span>Theme Palettes</span>
            <span>{paletteList.length} Options</span>
          </div>

          <div className="max-h-[320px] overflow-y-auto space-y-1">
            {paletteList.map((palette, i) => {
              const isSelected = palette.id === activeThemeId;
              const hotkey = i < 9 ? `${i + 1}` : i === 9 ? '0' : '';

              return (
                <button
                  key={palette.id}
                  onClick={() => {
                    setTheme(palette.id);
                    handleClose();
                  }}
                  className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs transition-colors ${
                    isSelected ? 'bg-violet-600/20 text-white border border-violet-500/40' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <span className="w-3 h-3 rounded-full border border-white/20 shrink-0" style={{ backgroundColor: palette.accentColor }} />
                  <span className="font-medium truncate flex-1 text-left">{palette.name.split(' (')[0]}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${palette.isDark ? 'bg-slate-800 text-slate-400' : 'bg-amber-500/10 text-amber-300'}`}>
                    {palette.isDark ? 'Dark' : 'Light'}
                  </span>
                  <span className="font-mono text-[10px] text-slate-400 w-3 text-center">{hotkey}</span>
                  <Check className={`w-3.5 h-3.5 text-violet-400 shrink-0 ${isSelected ? 'opacity-100' : 'opacity-0'}`} />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
