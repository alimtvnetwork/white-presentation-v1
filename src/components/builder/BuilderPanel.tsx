import React from 'react';
import { useEditStore } from '../../stores/editStore';
import { ColorPalettePicker } from './ColorPalettePicker';
import { ContentEditor } from './ContentEditor';
import { X, Layers, Type, Sparkles } from 'lucide-react';

export const BuilderPanel: React.FC = () => {
  const { isEditMode, toggleEditMode, activePanel, setActivePanel } = useEditStore();

  if (!isEditMode) return null;

  return (
    <div className="fixed top-0 right-0 w-[360px] h-[calc(100vh-64px)] bg-slate-900 border-l border-slate-800 flex flex-col z-50 shadow-2xl animate__animated animate__fadeInRight animate__faster">
      <div className="p-4 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers size={18} className="text-violet-400" />
          <span className="font-ubuntu font-bold text-sm text-slate-100">
            Slide Builder Inspector
          </span>
        </div>
        <button
          onClick={toggleEditMode}
          className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
          title="Close Builder Mode (B)"
        >
          <X size={16} />
        </button>
      </div>

      <div className="flex border-b border-slate-800 bg-slate-950/40 text-xs font-medium">
        <button
          onClick={() => setActivePanel('typography')}
          className={`flex-1 py-2.5 flex items-center justify-center gap-1.5 border-b-2 transition-colors cursor-pointer ${
            activePanel === 'typography'
              ? 'border-violet-500 text-violet-400 bg-slate-900'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Type size={14} />
          <span>Content</span>
        </button>
        <button
          onClick={() => setActivePanel('gradient')}
          className={`flex-1 py-2.5 flex items-center justify-center gap-1.5 border-b-2 transition-colors cursor-pointer ${
            activePanel === 'gradient'
              ? 'border-violet-500 text-violet-400 bg-slate-900'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Sparkles size={14} />
          <span>Themes</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-6">
        {activePanel === 'gradient' ? <ColorPalettePicker /> : <ContentEditor />}
      </div>

      <div className="p-3 border-t border-slate-800 text-[11px] font-mono text-slate-500 text-center">
        Decoupled Mutator: <code>applyEdit()</code> active
      </div>
    </div>
  );
};
