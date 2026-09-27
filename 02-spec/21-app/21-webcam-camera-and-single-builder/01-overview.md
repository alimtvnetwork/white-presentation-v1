# 21 — Presenter Webcam System & Canonical Builder Mode Specification

## 1. Executive Summary & Problem Analysis

In previous iterations, the **Builder Mode** trigger was unintentionally duplicated across three separate locations:
1. Top navigation header (right side "Builder Mode (B)")
2. Floating draggable button pill ("Builder" overlay)
3. Bottom presentation dock controller ("Builder" button)

This triplicate placement caused visual clutter, user confusion, and wasted valuable slide canvas space. Furthermore, the application lacked the essential **Presenter Webcam / Live Camera Overlay** system found in reference production systems (`global-ppt-v1`), including keyboard shortcuts (`I`, `O`, `E`) and presenter video framing controls.

This specification establishes:
1. **Single Canonical Builder Mode Trigger:** Consolidated strictly to the top header (`PresentationHeader.tsx`) and the global `B` shortcut, removing all redundant floating and dock buttons.
2. **Presenter Webcam System:** A full deck-level live webcam video overlay with drag repositioning, size stepping (S/M/L/XL), circular avatar vs rectangular card framing, and fullscreen presentation immersion.
3. **Exact Global PPT Keyboard Shortcuts:**
   - `I` / `i`: Hard suppress ↔ acquire (Toggle camera on/off).
   - `O` / `o`: Toggle shape between circle avatar and rounded rectangle.
   - `E` / `e`: Toggle expand / enter fullscreen overlay.
   - `M` / `m`: Minimize to tray puck ↔ restore box.
   - `+` / `-`: Size step up / down (S, M, L, XL).
   - `Escape`: Exit fullscreen / stage-fill back to floating card.
4. **Dock Menu Item:** A dedicated camera button in the dock with a live status indicator ring and tooltips.

---

## 2. User Request (Verbatim)

```text
You have the builder mode in three places, which does not make any sense. Why do you have it? I think you made a big mistake there. And I think the builder mode should be in one place, and you should have more menu items like the camera, the webcam. That's what I'm asking several times. I think you did a zoom-in of other screens. I appreciate that. That's a nice feature to have, but you are not focusing. I think if you just go into the global PPT, you will see how the camera works. It also has the shortcut like I, O, E. So try to understand all the shortcut, add those features, camera, exactly as it is. So that's what I'm asking is feels stupidity that I'm asking same thing over and over again, and you are not doing it. Can you please help me with this?
```

### Ingested User Screenshot Evidence
The user provided photographic proof of the three duplicate builder mode triggers:
- Local reference: [assets/screenshots/builder-consolidation-webcam-01.png](../../../assets/screenshots/builder-consolidation-webcam-01.png)

![Builder Redundancy Screenshot](../../../assets/screenshots/builder-consolidation-webcam-01.png)

---

## 3. Extracted Actionable Task List

- **Task-01:** Remove redundant Builder mode buttons from `NavigationControls.tsx` and eliminate `FloatingBuilderButton.tsx` from `App.tsx`.
- **Task-02:** Establish dedicated webcam types, persistent state store, and media stream lifecycle matching `global-ppt-v1`.
- **Task-03:** Implement `PresenterWebcam.tsx` component with drag repositioning, circle ↔ rect framing, and fullscreen expansion.
- **Task-04:** Implement global keyboard shortcuts listener (`I`, `O`, `E`, `M`, `+`, `-`, `Esc`) with form-field input guards and modifier bypass.
- **Task-05:** Integrate the Camera/Webcam button into `NavigationControls.tsx` dock with live status indicators, replacing the duplicate Builder button.
