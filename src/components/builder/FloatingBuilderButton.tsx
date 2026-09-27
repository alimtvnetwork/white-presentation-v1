import React, { useState } from 'react';
import { useEditStore } from '../../stores/editStore';
import { Edit3, GripVertical } from 'lucide-react';

export const FloatingBuilderButton: React.FC = () => {
  const { isEditMode, toggleEditMode } = useEditStore();
  const [pos, setPos] = useState({ x: 28, y: 28 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  if (isEditMode) return null;

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragOffset({ x: e.clientX - pos.x, y: e.clientY - pos.y });
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const newX = Math.max(12, Math.min(window.innerWidth - 120, e.clientX - dragOffset.x));
    const newY = Math.max(12, Math.min(window.innerHeight - 50, e.clientY - dragOffset.y));
    setPos({ x: newX, y: newY });
  };

  const onMouseUp = () => setIsDragging(false);

  return (
    <div
      style={{ left: pos.x, top: pos.y }}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      className="fixed z-50 flex items-center bg-slate-900/90 border border-violet-500/70 rounded-full shadow-2xl backdrop-blur-md overflow-hidden select-none hover:border-violet-400 transition-colors animate__animated animate__fadeIn"
    >
      <div
        onMouseDown={onMouseDown}
        className="px-2 py-2.5 text-slate-400 hover:text-slate-200 cursor-move bg-slate-950/60 border-r border-slate-800"
        title="Drag builder launcher button"
      >
        <GripVertical size={14} />
      </div>
      <button
        onClick={toggleEditMode}
        className="flex items-center gap-2 px-3 py-2 text-xs font-ubuntu font-bold text-violet-300 hover:text-white cursor-pointer"
        title="Open Slide Builder Inspector"
      >
        <Edit3 size={14} className="text-violet-400" />
        <span>Builder</span>
      </button>
    </div>
  );
};
