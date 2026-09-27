import React from 'react';
import { useEditStore } from '../../stores/editStore';
import { Camera, Layout, Navigation, Eye } from 'lucide-react';
import { CameraPreset, DockPosition, IndicatorPosition } from '../../types/presentation';

export const CameraEditor: React.FC = () => {
  const {
    cameraPreset, setCameraPreset,
    dockPosition, setDockPosition,
    indicatorPosition, setIndicatorPosition,
  } = useEditStore();

  const presets: Array<{ id: CameraPreset; label: string; desc: string }> = [
    { id: 'overview', label: '1.0x Full Canvas', desc: 'Standard 1920x1080 stage view' },
    { id: 'focus-left', label: '1.35x Left Focus', desc: 'Zoom into headlines & bullet points' },
    { id: 'focus-right', label: '1.35x Right Focus', desc: 'Zoom into media plate or steps cards' },
    { id: 'zoom-in', label: '1.6x Dramatic Zoom', desc: 'Hero focal takeaway view' },
  ];

  const dockPositions: Array<{ id: DockPosition; label: string }> = [
    { id: 'bottom-center', label: 'Bottom Center' },
    { id: 'bottom-left', label: 'Bottom Left' },
    { id: 'bottom-right', label: 'Bottom Right' },
    { id: 'top-right', label: 'Top Right' },
    { id: 'left', label: 'Left Sidebar' },
    { id: 'right', label: 'Right Sidebar' },
  ];

  const indicatorPositions: Array<{ id: IndicatorPosition; label: string }> = [
    { id: 'bottom-left', label: 'Bottom Left' },
    { id: 'bottom-center', label: 'Bottom Center' },
    { id: 'bottom-right', label: 'Bottom Right' },
    { id: 'top-center', label: 'Top Center' },
    { id: 'right', label: 'Right Dock' },
  ];

  return (
    <div className="flex flex-col gap-5 slide-up-anim text-xs">
      <div className="font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
        <Camera size={14} className="text-violet-400" />
        <span>Camera & Viewport Presets</span>
      </div>

      <div className="flex flex-col gap-2">
        {presets.map((p) => (
          <button
            key={p.id}
            onClick={() => setCameraPreset(p.id)}
            className={`p-2.5 rounded-lg border text-left flex items-center justify-between transition-all cursor-pointer ${
              cameraPreset === p.id
                ? 'border-violet-500 bg-violet-950/40 text-violet-200'
                : 'border-slate-800 bg-slate-950 hover:border-slate-700 text-slate-400'
            }`}
          >
            <div>
              <div className="font-medium text-slate-200">{p.label}</div>
              <div className="text-[11px] text-slate-500">{p.desc}</div>
            </div>
            {cameraPreset === p.id && <Eye size={14} className="text-violet-400" />}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-2 pt-2 border-t border-slate-800">
        <div className="font-medium text-slate-300 flex items-center gap-1.5">
          <Navigation size={14} className="text-violet-400" />
          <span>Navigation Controller Dock</span>
        </div>
        <select
          value={dockPosition}
          onChange={(e) => setDockPosition(e.target.value as DockPosition)}
          className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200 cursor-pointer"
        >
          {dockPositions.map((d) => (
            <option key={d.id} value={d.id}>{d.label}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2 pt-2 border-t border-slate-800">
        <div className="font-medium text-slate-300 flex items-center gap-1.5">
          <Layout size={14} className="text-violet-400" />
          <span>Slide Indicator Position</span>
        </div>
        <select
          value={indicatorPosition}
          onChange={(e) => setIndicatorPosition(e.target.value as IndicatorPosition)}
          className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200 cursor-pointer"
        >
          {indicatorPositions.map((i) => (
            <option key={i.id} value={i.id}>{i.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
