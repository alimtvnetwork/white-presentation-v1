import React from 'react';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { ARCHETYPE_OPTIONS, createArchetypeSlide } from '../../utils/slideArchetypeFactories';
import {
  X, Plus, Layers, Sparkles, TrendingUp, Grid, GitCompare, Calendar,
  LayoutGrid, Terminal, RotateCw, Users, Award, Quote, Columns3, CheckCircle2,
  BarChart3, Shield, Search, Zap, HelpCircle, Database, ListChecks, Flame,
} from 'lucide-react';

const ICONS: Record<string, React.FC<{ size?: number }>> = {
  BarChart3, Sparkles, TrendingUp, Grid, GitCompare, Calendar, LayoutGrid, Layers,
  Terminal, RotateCw, Users, Award, Quote, Columns3, CheckCircle2,
  Shield, Search, Zap, HelpCircle, Database, ListChecks, Flame,
};

export const SlideCreatorModal: React.FC = () => {
  const { isSlideCreatorOpen, setSlideCreatorOpen } = useEditStore();
  const { addSlide } = useDeckStore();

  if (!isSlideCreatorOpen) return null;

  const handleSelect = (type: any) => {
    addSlide(createArchetypeSlide(type));
    setSlideCreatorOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="w-[580px] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate__animated animate__zoomIn animate__faster">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white font-ubuntu font-bold text-sm">
            <Plus size={16} className="text-violet-400" />
            <span>Insert New Slide Archetype ({ARCHETYPE_OPTIONS.length} Templates)</span>
          </div>
          <button onClick={() => setSlideCreatorOpen(false)} className="text-slate-400 hover:text-white p-1 cursor-pointer">
            <X size={16} />
          </button>
        </div>
        <div className="p-4 flex flex-col gap-2.5 max-h-[520px] overflow-y-auto">
          {ARCHETYPE_OPTIONS.map((opt) => {
            const Icon = ICONS[opt.icon] || Layers;
            return (
              <div
                key={opt.type}
                onClick={() => handleSelect(opt.type)}
                className="p-3 bg-slate-950 border border-slate-800 hover:border-violet-500 rounded-xl flex items-center justify-between cursor-pointer transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-violet-950/60 border border-violet-800/50 flex items-center justify-center text-violet-400 group-hover:scale-105 transition-transform">
                    <Icon size={16} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-ubuntu font-bold text-slate-100 group-hover:text-violet-300">{opt.label}</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 bg-slate-800 text-slate-400 rounded">{opt.category}</span>
                    </div>
                    <div className="text-[11px] text-slate-400">{opt.desc}</div>
                  </div>
                </div>
                <Plus size={16} className="text-slate-500 group-hover:text-violet-400" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
