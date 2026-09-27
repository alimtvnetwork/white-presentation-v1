# Consolidated Execution Plan: Presenter Webcam & Consolidated Builder Mode

Spec Reference: [02-spec/21-app/21-webcam-camera-and-single-builder/01-overview.md](../../../02-spec/21-app/21-webcam-camera-and-single-builder/01-overview.md)

## 1. Execution Summary
- **Initial Task:** Eliminate triplicate Builder Mode triggers (header, floating button, dock) identified in user screenshot [assets/screenshots/builder-consolidation-webcam-01.png](../../../assets/screenshots/builder-consolidation-webcam-01.png). Implement full presenter webcam overlay system with keyboard shortcuts (`I`, `O`, `E`, `M`, `+`, `-`, `Esc`) following reference production standard (`global-ppt-v1`).
- **Total Steps/Loops Executed:** 1 continuous self-loop turn with 2 parallel subagents (Worker 01 & Worker 02) executing 4 subtasks.
- **Outcome:** 100% green verification across all 36 local CI quality gates.

---

## 2. Completed Subtasks Ledger

### Subtask 01: Builder Mode Consolidation to Single Canonical Location
- **Traceability ID:** `Task-01`
- **Target Files:** `src/App.tsx`, `src/components/canvas/NavigationControls.tsx`
- **Action Taken:** Removed `FloatingBuilderButton` from `App.tsx` and removed the component file. Removed the duplicate Builder button from `NavigationControls.tsx`. Builder Mode is now exclusively triggered from the top header button (`Builder Mode (B)`) or hotkey `B`.
- **Status:** Completed & Verified.

### Subtask 02: Webcam Types & Decoupled State Store
- **Traceability ID:** `Task-02`
- **Target Files:** `src/types/webcam.ts`, `src/stores/webcamStore.ts`
- **Action Taken:** Defined `WebcamPhase`, `WebcamSizeStep`, `WEBCAM_SIZES` (S: 240x135, M: 320x180, L: 480x270, XL: 720x405), and Zustand store `useWebcamStore` with media stream acquisition (`getUserMedia`), hardware track termination on close (`track.stop()`), size stepping, shape toggles, and safe `riseup.white.webcam.*` persistence.
- **Status:** Completed & Verified.

### Subtask 03: Presenter Webcam Overlay & Visual Sub-Components
- **Traceability ID:** `Task-03`
- **Target Files:** `src/components/webcam/PresenterWebcam.tsx`, `src/components/webcam/WebcamFrame.tsx`, `src/components/webcam/WebcamToolbar.tsx`
- **Action Taken:** Built modular overlay components with draggable pointer tracking, circular avatar framing (`rounded-full`) vs card framing (`rounded-2xl`), live pulsing green indicator in minimized 96px puck, and fullscreen immersive takeover.
- **Status:** Completed & Verified.

### Subtask 04: Dock Controller Integration & Global Keyboard Shortcuts
- **Traceability ID:** `Task-04`
- **Target Files:** `src/hooks/useWebcamHotkeys.ts`, `src/components/canvas/NavigationControls.tsx`, `src/components/webcam/PresenterWebcamButton.tsx`
- **Action Taken:** Implemented `useWebcamHotkeys` hook supporting `I` (acquire/close), `O` (circle/rect shape), `E` (expand/fullscreen), `M` (minimize), `+`/`-` (size step), and `Escape` (exit fullscreen) with modifier and form-input bypass. Replaced duplicate builder button in dock with `PresenterWebcamButton`.
- **Status:** Completed & Verified.

---

## 3. Component Line-Cap Verification (Hard Rule #6: <= 100 Lines)
- `src/components/webcam/WebcamFrame.tsx`: 36 lines
- `src/components/webcam/WebcamToolbar.tsx`: 86 lines
- `src/components/webcam/PresenterWebcam.tsx`: 93 lines
- `src/components/webcam/PresenterWebcamButton.tsx`: 26 lines
- `src/hooks/useWebcamHotkeys.ts`: 85 lines
- `src/components/canvas/NavigationControls.tsx`: 91 lines
- `src/stores/webcamStore.ts`: 95 lines
- `src/types/webcam.ts`: 54 lines
- `src/App.tsx`: 67 lines
