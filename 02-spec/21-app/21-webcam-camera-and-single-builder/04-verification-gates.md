# 04 — Verification Gates: Presenter Webcam & Consolidated Builder

## 1. Acceptance Gates

1. **Gate 1: Single Builder Location Verification**
   - Confirm only ONE "Builder Mode" button exists in the interface (top header).
   - Confirm `FloatingBuilderButton` is completely unmounted.
   - Confirm dock controller has no "Builder" button.

2. **Gate 2: Camera Stream & Hardware Lifecycle**
   - Requesting camera activates `navigator.mediaDevices.getUserMedia({ video: true, audio: false })`.
   - Turning camera off invokes `track.stop()` on all video tracks, turning off camera hardware light.
   - Denied permission sets `phase: 'denied'` without throwing unhandled exceptions.

3. **Gate 3: Global Shortcut Accuracy**
   - Pressing `I` or `i` toggles camera on/off.
   - Pressing `O` or `o` toggles shape between circle avatar and rounded rectangle.
   - Pressing `E` or `e` enters/exits fullscreen camera mode.
   - Pressing `M` or `m` minimizes to puck / restores.
   - Pressing `+` / `-` steps size.
   - Pressing `Escape` exits fullscreen.
   - Typing in text fields does not trigger any camera shortcuts.

4. **Gate 4: Architectural Constraints**
   - Every React component in `src/components/` must be $\le 100$ lines.
   - `python 03-ai-scripts/06-cicd-local-runner.py --all` passes 36/36 quality gates.
   - `npm run build` passes with 0 errors.
