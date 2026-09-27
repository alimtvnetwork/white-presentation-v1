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
Target: 1920x1080 16:9 Canvas | Archetype: ${currentSlide.type} (Slide ${activeSlideIndex + 1}/${deck.slides.length})
Layout: Left 40% editorial text | Right 60% structured cards/clean plate without baked text collisions.
Headline: "${(currentSlide as any).headline || currentSlide.title}" | Kicker: "${currentSlide.kicker || ''}"
Content Elements: ${JSON.stringify((currentSlide as any).bulletPoints || (currentSlide as any).steps || (currentSlide as any).rows || (currentSlide as any).metrics || {})}`;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(label);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const downloadFile = (content: string, filename: string, mime: string) => {
    const dl = document.createElement('a');
    dl.href = `data:${mime};charset=utf-8,` + encodeURIComponent(content);
    dl.download = filename;
    dl.click();
  };

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="w-[560px] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate__animated animate__zoomIn animate__faster">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white font-ubuntu font-bold text-sm">
            <Presentation size={16} className="text-violet-400" /> <span>Export Presentation & AI Prompt</span>
          </div>
          <button onClick={() => setExportOpen(false)} className="text-slate-400 hover:text-white p-1 cursor-pointer"><X size={16} /></button>
        </div>

        <div className="p-5 flex flex-col gap-3.5 text-xs">
          <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <FileCode size={18} className="text-indigo-400" />
              <div><div className="font-ubuntu font-bold text-slate-100">Full Deck (JSON)</div><div className="text-[11px] text-slate-400">Complete JSON schema</div></div>
            </div>
            <button onClick={() => downloadFile(JSON.stringify(deck, null, 2), `${deck.id}.json`, 'text/json')} className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg flex items-center gap-1.5 cursor-pointer">
              <Download size={13} /> <span>Download</span>
            </button>
          </div>

          <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Presentation size={18} className="text-amber-400" />
              <div><div className="font-ubuntu font-bold text-slate-100">PowerPoint XML Schema (.pptx)</div><div className="text-[11px] text-slate-400">OpenXML presentation manifest</div></div>
            </div>
            <button onClick={() => downloadFile(`<?xml version="1.0" encoding="UTF-8"?><p:presentation xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"><p:sldMasterIdLst><p:sldMasterId id="2147483648"/></p:sldMasterIdLst><p:sldIdLst>${deck.slides.map((s, i) => `<p:sldId id="${256 + i}" title="${s.title}"/>`).join('')}</p:sldIdLst></p:presentation>`, `${deck.id}-powerpoint.xml`, 'application/xml')} className="px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-white rounded-lg flex items-center gap-1.5 cursor-pointer">
              <Download size={13} /> <span>Export PPTX</span>
            </button>
          </div>

          <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-xl flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-violet-400" />
                <span className="font-ubuntu font-bold text-slate-100">AI Prompt Spec (Active Slide)</span>
              </div>
              <button onClick={() => copyToClipboard(aiPromptSpec, 'ai')} className="px-2.5 py-1 bg-violet-600 hover:bg-violet-500 text-white rounded-lg flex items-center gap-1 cursor-pointer">
                {copiedType === 'ai' ? <Check size={12} /> : <Copy size={12} />} <span>{copiedType === 'ai' ? 'Copied!' : 'Copy Prompt'}</span>
              </button>
            </div>
            <textarea readOnly rows={3} value={aiPromptSpec} className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-[11px] font-mono text-slate-300 focus:outline-none resize-none" />
          </div>
        </div>
      </div>
    </div>
  );
};
