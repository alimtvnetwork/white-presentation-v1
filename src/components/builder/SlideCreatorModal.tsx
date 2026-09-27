import React from 'react';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { SlideType, SlideData } from '../../types/presentation';
import { X, Plus, Layers, GitCompare, UserCheck, DollarSign, ListOrdered } from 'lucide-react';

export const SlideCreatorModal: React.FC = () => {
  const { isSlideCreatorOpen, setSlideCreatorOpen } = useEditStore();
  const { addSlide } = useDeckStore();

  if (!isSlideCreatorOpen) return null;

  const archetypes: Array<{ type: SlideType; label: string; desc: string; icon: React.ReactNode }> = [
    { type: 'steps-chain', label: 'Steps Chain Roadmap', desc: 'Process milestones with sound cues', icon: <ListOrdered size={16} /> },
    { type: 'before-after', label: 'Before & After Contrast', desc: 'Dual-column transformation comparison', icon: <GitCompare size={16} /> },
    { type: 'competitive-edge', label: 'Competitive Benchmark', desc: 'Side-by-side sovereignty matrix', icon: <UserCheck size={16} /> },
    { type: 'tech-stack', label: 'Tech Stack Matrix', desc: 'Categorized enterprise framework grid', icon: <Layers size={16} /> },
    { type: 'pricing', label: 'SaaS Pricing & Proof', desc: '3-tier commercial model with featured plan', icon: <DollarSign size={16} /> },
  ];

  const handleCreate = (type: SlideType) => {
    const id = `slide-${Date.now()}`;
    let newSlide: SlideData;
    if (type === 'competitive-edge') {
      newSlide = {
        id, type: 'competitive-edge', title: 'Competitive Advantage', subtitle: 'Measurable enterprise superiority matrix',
        headers: ['Capability', 'Legacy Models', 'Riseup Sovereign Standard'],
        rows: [
          { feature: 'Autonomous Loop QA', competitor: 'Manual review', us: '100% Deterministic CI' },
          { feature: 'Zero-Defect Latency', competitor: 'Days/weeks', us: '< 2-minute auto-repair' },
        ],
      };
    } else if (type === 'tech-stack') {
      newSlide = {
        id, type: 'tech-stack', title: 'Production Architecture', subtitle: 'Battle-tested enterprise engineering stack',
        categories: [
          { name: 'Core Engine', icon: 'cpu', technologies: [{ name: 'React 19', level: 'Core' }, { name: 'Vite 7', level: 'Core' }] },
          { name: 'Design System', icon: 'zap', technologies: [{ name: 'Less CSS', level: 'Enterprise' }, { name: 'Tailwind 4', level: 'Core' }] },
        ],
      };
    } else if (type === 'steps-chain') {
      newSlide = {
        id, type: 'steps-chain', title: 'Implementation Architecture', subtitle: '4-phase sequential deployment timeline',
        steps: [
          { stepNumber: 1, title: 'Intake & Discovery', description: 'Deep architecture evaluation' },
          { stepNumber: 2, title: 'Engine Synthesis', description: 'Core Less and layout orchestration' },
          { stepNumber: 3, title: 'Interactive Staging', description: 'Builder mode verification' },
          { stepNumber: 4, title: 'Enterprise Release', description: '4K production export' },
        ],
      };
    } else {
      newSlide = {
        id, type: 'title', title: 'New Strategic Keynote', subtitle: 'High-leverage enterprise presentation',
        presenter: { name: 'Alim Ul Karim', role: 'Chief Software Engineer', company: 'Riseup Asia LLC' },
      };
    }

    addSlide(newSlide);
    setSlideCreatorOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="w-[520px] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate__animated animate__zoomIn animate__faster">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white font-ubuntu font-bold text-sm">
            <Plus size={16} className="text-violet-400" />
            <span>Insert New Slide Archetype</span>
          </div>
          <button onClick={() => setSlideCreatorOpen(false)} className="text-slate-400 hover:text-white p-1 cursor-pointer">
            <X size={16} />
          </button>
        </div>

        <div className="p-4 flex flex-col gap-2.5 max-h-[420px] overflow-y-auto">
          {archetypes.map((a) => (
            <div
              key={a.type}
              onClick={() => handleCreate(a.type)}
              className="p-3 bg-slate-950 border border-slate-800 hover:border-violet-500 rounded-xl flex items-center justify-between cursor-pointer transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-violet-950/60 border border-violet-800/50 flex items-center justify-center text-violet-400 group-hover:scale-105 transition-transform">
                  {a.icon}
                </div>
                <div>
                  <div className="text-xs font-ubuntu font-bold text-slate-100 group-hover:text-violet-300">{a.label}</div>
                  <div className="text-[11px] text-slate-400">{a.desc}</div>
                </div>
              </div>
              <Plus size={16} className="text-slate-500 group-hover:text-violet-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
