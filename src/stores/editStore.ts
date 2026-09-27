import { create } from 'zustand';

export type InspectorPanelType = 'typography' | 'gradient' | 'layout' | 'assets' | null;

interface EditStoreState {
  isEditMode: boolean;
  selectedElementId: string | null;
  activePanel: InspectorPanelType;
  toggleEditMode: () => void;
  setEditMode: (enabled: boolean) => void;
  selectElement: (elementId: string | null) => void;
  setActivePanel: (panel: InspectorPanelType) => void;
}

export const useEditStore = create<EditStoreState>((set, get) => ({
  isEditMode: false,
  selectedElementId: null,
  activePanel: null,

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

  selectElement: (elementId: string | null) => {
    set({ selectedElementId: elementId });
  },

  setActivePanel: (panel: InspectorPanelType) => {
    set({ activePanel: panel });
  },
}));
