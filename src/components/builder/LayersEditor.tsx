import React from 'react';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { Layers, Image as ImageIcon, Heart, Users, MessageCircle, Sparkles, Shield, Zap, ArrowUp, ArrowDown } from 'lucide-react';

export const LayersEditor: React.FC = () => {
  const { deck, activeSlideIndex, applyEdit } = useDeckStore();
  const { selectedElementId } = useEditStore();
  const slide = deck.slides[activeSlideIndex];
  if (!slide) return null;

  const icons = [
    { id: 'heart', label: 'Heart', Icon: Heart }, { id: 'users', label: 'Users', Icon: Users },
    { id: 'chat', label: 'Chat', Icon: MessageCircle }, { id: 'sparkles', label: 'Sparkles', Icon: Sparkles },
    { id: 'shield', label: 'Shield', Icon: Shield }, { id: 'zap', label: 'Zap', Icon: Zap },
  ];

  return (
    <div className="flex flex-col gap-4 slide-up-anim text-xs">
      <div className="font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
        <Layers size={14} className="text-violet-400" /> <span>Canvas Layers & Stacking</span>
      </div>

      <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-lg flex items-center justify-between">
        <div>
          <div className="text-slate-400 text-[11px]">Selected Layer Focus</div>
          <div className="font-mono text-violet-300 font-bold">{selectedElementId ? `#${selectedElementId}` : 'Canvas Default'}</div>
        </div>
        <div className="flex items-center gap-1.5">
          <button className="p-1.5 bg-slate-900 border border-slate-750 hover:border-violet-500 rounded text-slate-300 cursor-pointer" title="Bring Forward"><ArrowUp size={13} /></button>
          <button className="p-1.5 bg-slate-900 border border-slate-750 hover:border-violet-500 rounded text-slate-300 cursor-pointer" title="Send Backward"><ArrowDown size={13} /></button>
        </div>
      </div>

      {slide.type === 'white-master' && (
        <div className="flex flex-col gap-2 pt-2 border-t border-slate-800">
          <div className="flex items-center gap-1.5 font-medium text-slate-300">
            <ImageIcon size={14} className="text-violet-400" /> <span>Visual Plate Source</span>
          </div>
          <input
            type="text"
            value={slide.heroImage.src}
            onChange={(e) => {
              const src = e.target.value;
              applyEdit((s) => (s.type === 'white-master' ? { ...s, heroImage: { ...s.heroImage, src } } : s));
            }}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200 font-mono text-[11px] focus:outline-none focus:border-violet-500"
          />
          <div className="flex gap-2">
            <button onClick={() => applyEdit((s) => (s.type === 'white-master' ? { ...s, heroImage: { ...s.heroImage, src: '/assets/screenshots/hero-speaker-clean.png' } } : s))} className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-[11px] cursor-pointer">
              Clean Speaker
            </button>
            <button onClick={() => applyEdit((s) => (s.type === 'white-master' ? { ...s, heroImage: { ...s.heroImage, src: '/assets/logos/6 - Riseup Asia Logo Transparent Only BK.png' } } : s))} className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-[11px] cursor-pointer">
              Riseup Logo
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-2 pt-2 border-t border-slate-800">
        <div className="font-medium text-slate-300">Swap Bullet / Feature Icons</div>
        <div className="grid grid-cols-3 gap-2">
          {icons.map(({ id, label, Icon }) => (
            <button
              key={id}
              onClick={() => {
                applyEdit((s) => {
                  if (s.type !== 'white-master') return s;
                  const bulletPoints = s.bulletPoints.map((bp: any) => ({ ...bp, icon: id }));

                  return { ...s, bulletPoints };
                });
              }}
              className="flex items-center gap-1.5 p-2 bg-slate-950 border border-slate-800 hover:border-violet-500 rounded-lg text-slate-300 cursor-pointer"
            >
              <Icon size={14} className="text-violet-400" /> <span className="text-[11px]">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
