# 03 — Visual and UX: Presenter Webcam & Consolidated Builder

## 1. Single Canonical Builder Mode Trigger

The Builder Mode button is placed exclusively in the top presentation header:
- Header right cluster: `[ThemeSelector] [Builder Mode (B)]`
- Triggering toggles the draggable, minimizable `BuilderPanel` inspector.
- Floating draggable button overlay (`FloatingBuilderButton`) is removed.
- Dock controller `Builder` button is replaced by the `Camera` controller.

---

## 2. Presenter Webcam Visual Framing

### Floating Mode
- Rounded corners (`rounded-2xl` for rectangle, `rounded-full` for circle).
- Frosted glass control bar visible on hover with quick toggles:
  - Drag handle grip
  - Shape toggle (Circle / Rect)
  - Size controls (+ / -)
  - Expand to fullscreen
  - Minimize to puck
  - Close / Turn off
- Smooth transition during dragging and resizing.
- Ambient glow or border conforming to current presentation theme.

### Minimized Puck
- Compact 96x96 circular avatar button in corner.
- Live pulsing green dot indicating active video capture.
- Click to expand back to previous position.

### Fullscreen Stage Takeover
- `fixed inset-0 z-50 bg-black` video layer.
- Keyboard navigation passthrough: Next/Prev keys continue advancing slides underneath.
- Subtle floating controls overlay at bottom right with escape button.

---

## 3. Dock Camera Controller Button

In `NavigationControls.tsx`:
- Replaces duplicate Builder button.
- Video camera icon (`Video` when off, `VideoOff` with accent badge when on).
- Tooltip shows shortcuts: `"Camera (I: toggle, O: circle/rect, E: expand)"`.
- Clicking toggles camera stream on/off.
