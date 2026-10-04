import React, { useState } from 'react';
import { useDeckStore } from '../../stores/deckStore';
import { CANONICAL_THEME_IDS, CANONICAL_THEMES, getThemeFamilyLabel } from '../../themes/gradientTokens';
import { Check, X } from 'lucide-react';

const TABS = ['All', 'Corporate', 'Tech', 'Editorial', 'Prestige', 'Bio'] as const;
type TabType = (typeof TABS)[number];

export const ThemePopover: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { activeThemeId, setTheme } = useDeckStore();
  const [activeTab, setActiveTab] = useState<TabType>('All');

  const themes = CANONICAL_THEME_IDS.map((id) => CANONICAL_THEMES[id]).filter(Boolean);
  const filteredThemes = activeTab === 'All'
    ? themes
    : themes.filter((t) => getThemeFamilyLabel(t.id) === activeTab);

  return (
    <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-[340px] bg-slate-900/95 border border-slate-700/80 rounded-2xl shadow-2xl p-3 z-50 backdrop-blur-xl">
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-xs font-semibold text-slate-300">
        <span>Presentation Themes ({filteredThemes.length})</span>
        <button onClick={onClose} className="text-slate-400 hover:text-white p-0.5 rounded cursor-pointer">
          <X size={14} />
        </button>
      </div>

      <div className="flex items-center gap-1 pb-2 mb-2 border-b border-slate-800/80 overflow-x-auto no-scrollbar">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-2 py-0.5 rounded-md text-[10px] font-medium transition-all shrink-0 cursor-pointer ${
              activeTab === tab ? 'bg-violet-600 text-white' : 'bg-slate-800/60 text-slate-400 hover:text-slate-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-1.5 max-h-60 overflow-y-auto pr-1">
        {filteredThemes.map((theme) => {
          const isSelected = activeThemeId === theme.id;
          const family = getThemeFamilyLabel(theme.id);
          return (
            <button
              key={theme.id}
              onClick={() => {
                setTheme(theme.id);
                onClose();
              }}
              className={`flex items-center gap-2 p-2 rounded-xl text-left text-xs transition-all cursor-pointer ${
                isSelected
                  ? 'bg-violet-600/30 border border-violet-500/80 text-white font-medium'
                  : 'hover:bg-slate-800/80 border border-slate-800/40 text-slate-300'
              }`}
            >
              <div
                className="w-4 h-4 rounded-md shrink-0 border border-white/20 shadow-sm flex items-center justify-center"
                style={{ backgroundColor: theme.canvasBg }}
              >
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.accentColor }} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-[11px] leading-tight text-slate-200">{theme.name.split(' (')[0]}</div>
                <div className="text-[9px] text-slate-400 truncate leading-none mt-0.5">{family}</div>
              </div>
              {isSelected && <Check size={12} className="text-violet-400 shrink-0" />}
            </button>
          );
        })}
      </div>
    </div>
  );
};
