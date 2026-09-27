import React, { useState } from 'react';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { X, Download, Copy, Check, FileCode, Sparkles, Presentation } from 'lucide-react';

export const ExportModal: React.FC = () => {
  const { isExportOpen, setExportOpen } = useEditStore();
  const { deck, activeSlideIndex } = useDeckStore();
  const [copiedType, setCopiedType] = useState<string | null>(null);

  if (!isExportOpen) return null;

  const currentSlide = deck.slides[activeSlideIndex];

  const aiPromptSpec = `### AI Autonomous Slide Generation Instruction
Slide Index: ${activeSlideIndex + 1} of ${deck.slides.length}
Slide Type: ${currentSlide.type}
Headline: "${(currentSlide as any).headline || currentSlide.title}"
Subtitle: "${currentSlide.subtitle || ''}"
Key Content Elements:
${JSON.stringify((currentSlide as any).bulletPoints || (currentSlide as any).steps || (currentSlide as any).metrics || {}, null, 2)}
Render Target: 1920x1080 pure DOM layout with hardware-accelerated CSS animations and clean photographic plates.`;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(label);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const downloadJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(deck, null, 2));
    const dl = document.createElement('a');
    dl.setAttribute('href', dataStr);
    dl.setAttribute('download', `${deck.id}-export.json`);
    dl.click();
  };

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="w-[560px] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate__animated animate__zoomIn animate__faster">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white font-ubuntu font-bold text-sm">
            <Presentation size={16} className="text-violet-400" />
            <span>Export Presentation & AI Prompt</span>
          </div>
          <button onClick={() => setExportOpen(false)} className="text-slate-400 hover:text-white p-1 cursor-pointer">
            <X size={16} />
          </button>
        </div>

        <div className="p-5 flex flex-col gap-4 text-xs">
          <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileCode size={20} className="text-indigo-400" />
              <div>
                <div className="font-ubuntu font-bold text-slate-100">Full Presentation Deck (JSON)</div>
                <div className="text-[11px] text-slate-400">Complete JSON schema for deck storage & hydration</div>
              </div>
            </div>
            <button onClick={downloadJson} className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg flex items-center gap-1.5 cursor-pointer">
              <Download size={13} />
              <span>Download</span>
            </button>
          </div>

          <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-xl flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Sparkles size={20} className="text-violet-400" />
                <div>
                  <div className="font-ubuntu font-bold text-slate-100">AI Prompt Spec (Active Slide)</div>
                  <div className="text-[11px] text-slate-400">Exact instruction for an AI agent to recreate this slide</div>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(aiPromptSpec, 'ai')}
                className="px-3 py-1.5 bg-violet-600 hover:bg-violet-500 text-white rounded-lg flex items-center gap-1.5 cursor-pointer"
              >
                {copiedType === 'ai' ? <Check size={13} /> : <Copy size={13} />}
                <span>{copiedType === 'ai' ? 'Copied!' : 'Copy Prompt'}</span>
              </button>
            </div>
            <textarea
              readOnly
              rows={4}
              value={aiPromptSpec}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-[11px] font-mono text-slate-300 focus:outline-none resize-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
