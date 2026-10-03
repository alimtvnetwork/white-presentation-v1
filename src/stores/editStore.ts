import { create } from 'zustand';
import { DockPosition, IndicatorPosition, CameraPreset } from '../types/presentation';

export type InspectorPanelType = 'typography' | 'gradient' | 'layers' | 'camera' | null;

interface EditStoreState {
  isEditMode: boolean;
  isMinimized: boolean;
  selectedElementId: string | null;
  activePanel: InspectorPanelType;
  panelPos: { x: number; y: number };
  dockPosition: DockPosition;
  indicatorPosition: IndicatorPosition;
  cameraPreset: CameraPreset;
  isExportOpen: boolean;
  isSlideCreatorOpen: boolean;
  toggleEditMode: () => void;
  setEditMode: (enabled: boolean) => void;
  toggleMinimize: () => void;
  selectElement: (elementId: string | null) => void;
  setActivePanel: (panel: InspectorPanelType) => void;
  setPanelPos: (pos: { x: number; y: number }) => void;
  setDockPosition: (pos: DockPosition) => void;
  setIndicatorPosition: (pos: IndicatorPosition) => void;
  setCameraPreset: (preset: CameraPreset) => void;
  setExportOpen: (open: boolean) => void;
  setSlideCreatorOpen: (open: boolean) => void;
}

export const useEditStore = create<EditStoreState>((set, get) => ({
  isEditMode: false,
  isMinimized: false,
  selectedElementId: null,
  activePanel: 'typography',
  panelPos: { x: window.innerWidth - 380, y: 80 },
  dockPosition: 'top-right',
  indicatorPosition: 'bottom-center',
  cameraPreset: 'overview',
  isExportOpen: false,
  isSlideCreatorOpen: false,

  toggleEditMode: () => {
    const next = !get().isEditMode;
    set({
      isEditMode: next,
      selectedElementId: next ? get().selectedElementId : null,
      activePanel: next ? 'typography' : null,
    });
  },

  setEditMode: (enabled: boolean) => {
    set({
      isEditMode: enabled,
      selectedElementId: enabled ? get().selectedElementId : null,
      activePanel: enabled ? 'typography' : null,
    });
  },

  toggleMinimize: () => set({ isMinimized: !get().isMinimized }),
  selectElement: (elementId: string | null) => set({ selectedElementId: elementId }),
  setActivePanel: (panel: InspectorPanelType) => set({ activePanel: panel }),
  setPanelPos: (pos: { x: number; y: number }) => set({ panelPos: pos }),
  setDockPosition: (pos: DockPosition) => set({ dockPosition: pos }),
  setIndicatorPosition: (pos: IndicatorPosition) => set({ indicatorPosition: pos }),
  setCameraPreset: (preset: CameraPreset) => set({ cameraPreset: preset }),
  setExportOpen: (open: boolean) => set({ isExportOpen: open }),
  setSlideCreatorOpen: (open: boolean) => set({ isSlideCreatorOpen: open }),
}));
