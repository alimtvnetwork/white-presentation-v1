import React from 'react';
import { PresentationCanvas } from './components/canvas/PresentationCanvas';
import { BuilderPanel } from './components/builder/BuilderPanel';
import { ThemeSelector } from './components/theme/ThemeSelector';
import { useDeckStore } from './stores/deckStore';
import { useEditStore } from './stores/editStore';
import { Sparkles, Edit3 } from 'lucide-react';

export const App: React.FC = () => {
  const { deck } = useDeckStore();
  const { isEditMode, toggleEditMode } = useEditStore();

  return (
    <div className="w-screen h-screen flex flex-col bg-slate-950 text-slate-100 overflow-hidden font-poppins">
      {/* Top Application Navbar */}
      <header className="h-[64px] border-b border-slate-800/80 bg-slate-900/90 backdrop-blur-md px-6 flex items-center justify-between z-30 shrink-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
              <Sparkles size={18} />
            </div>
            <span className="font-ubuntu font-bold text-base tracking-tight text-white">
              White Presentation Engine
            </span>
          </div>

          <span className="text-slate-600">|</span>
          <span className="text-xs text-slate-400 font-mono hidden md:inline truncate max-w-[400px]">
            {deck.title}
          </span>
        </div>

        {/* Center / Right Toolbar Controls */}
        <div className="flex items-center gap-4">
          <ThemeSelector />

          <button
            onClick={toggleEditMode}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
              isEditMode
                ? 'bg-violet-600 border-violet-500 text-white shadow-md shadow-violet-600/30'
                : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Edit3 size={14} />
            <span>{isEditMode ? 'Exit Builder' : 'Builder Mode (B)'}</span>
          </button>
        </div>
      </header>

      {/* Main Viewport & Canvas Area */}
      <main className="flex-1 relative flex overflow-hidden">
        <PresentationCanvas />
        <BuilderPanel />
      </main>
    </div>
  );
};

export default App;
