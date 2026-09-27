import React, { useState } from 'react';
import { useEditStore, InspectorPanelType } from '../../stores/editStore';
import { ColorPalettePicker } from './ColorPalettePicker';
import { ContentEditor } from './ContentEditor';
import { LayersEditor } from './LayersEditor';
import { CameraEditor } from './CameraEditor';
import { X, Layers, Type, Sparkles, Camera, Minus, Maximize2, Plus, Download, GripHorizontal } from 'lucide-react';

export const BuilderPanel: React.FC = () => {
  const { isEditMode, toggleEditMode, isMinimized, toggleMinimize, activePanel, setActivePanel, panelPos, setPanelPos, setExportOpen, setSlideCreatorOpen } = useEditStore();
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  if (!isEditMode) return null;

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragOffset({ x: e.clientX - panelPos.x, y: e.clientY - panelPos.y });
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPanelPos({ x: Math.max(10, e.clientX - dragOffset.x), y: Math.max(10, e.clientY - dragOffset.y) });
  };

  const onMouseUp = () => setIsDragging(false);

  if (isMinimized) {
    return (
      <div
        style={{ top: panelPos.y, left: panelPos.x }}
        className="fixed z-50 flex items-center gap-2 p-2 bg-slate-900/95 border border-violet-500/80 rounded-full shadow-2xl backdrop-blur-md cursor-move animate__animated animate__fadeIn"
        onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp}
      >
        <button onClick={toggleMinimize} className="p-1.5 text-violet-400 hover:text-white cursor-pointer" title="Expand Builder">
          <Maximize2 size={16} />
        </button>
        <span className="text-xs font-ubuntu font-bold text-slate-200 pr-2">Builder Inspector</span>
        <button onClick={toggleEditMode} className="p-1 text-slate-400 hover:text-white cursor-pointer" title="Close">
          <X size={14} />
        </button>
      </div>
    );
  }

  const tabs: Array<{ id: InspectorPanelType; label: string; icon: React.ReactNode }> = [
    { id: 'typography', label: 'Content', icon: <Type size={13} /> },
    { id: 'layers', label: 'Layers', icon: <Layers size={13} /> },
    { id: 'gradient', label: 'Themes', icon: <Sparkles size={13} /> },
    { id: 'camera', label: 'Camera', icon: <Camera size={13} /> },
  ];

  return (
    <div
      style={{ top: panelPos.y, left: panelPos.x }}
      className="fixed w-[370px] max-h-[85vh] bg-slate-900/95 border border-slate-700/80 rounded-2xl flex flex-col z-50 shadow-2xl backdrop-blur-md overflow-hidden animate__animated animate__fadeIn"
      onMouseMove={onMouseMove} onMouseUp={onMouseUp}
    >
      <div
        onMouseDown={onMouseDown}
        className="p-3 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between cursor-move select-none"
      >
        <div className="flex items-center gap-2 text-xs font-ubuntu font-bold text-slate-100">
          <GripHorizontal size={16} className="text-violet-400" />
          <span>Slide Builder Inspector</span>
        </div>
        <div className="flex items-center gap-1">
          <button onClick={() => setSlideCreatorOpen(true)} className="p-1 text-slate-400 hover:text-violet-300 cursor-pointer" title="Add Slide"><Plus size={15} /></button>
          <button onClick={() => setExportOpen(true)} className="p-1 text-slate-400 hover:text-violet-300 cursor-pointer" title="Export"><Download size={15} /></button>
          <button onClick={toggleMinimize} className="p-1 text-slate-400 hover:text-white cursor-pointer" title="Minimize"><Minus size={15} /></button>
          <button onClick={toggleEditMode} className="p-1 text-slate-400 hover:text-white cursor-pointer" title="Close"><X size={15} /></button>
        </div>
      </div>

      <div className="flex border-b border-slate-800 bg-slate-950/40 text-xs font-medium">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActivePanel(t.id)}
            className={`flex-1 py-2 flex items-center justify-center gap-1 border-b-2 transition-colors cursor-pointer ${
              activePanel === t.id ? 'border-violet-500 text-violet-400 bg-slate-900' : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            {t.icon}
            <span>{t.label}</span>
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
        {activePanel === 'typography' && <ContentEditor />}
        {activePanel === 'layers' && <LayersEditor />}
        {activePanel === 'gradient' && <ColorPalettePicker />}
        {activePanel === 'camera' && <CameraEditor />}
      </div>
    </div>
  );
};
