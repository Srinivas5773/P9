/**
 * Chronicles of Aethelgard - Gamepad API & Accessibility Input Controller
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Input = window.Aethelgard.Input || {};
window.Aethelgard.Input.GamepadController = (function () {
  let connectedGamepad = null;

  window.addEventListener("gamepadconnected", (e) => {
    connectedGamepad = e.gamepad;
    if (window.Aethelgard.HUD) window.Aethelgard.HUD.showToast(`🎮 Controller connected: ${e.gamepad.id}`);
  });

  window.addEventListener("gamepaddisconnected", () => {
    connectedGamepad = null;
    if (window.Aethelgard.HUD) window.Aethelgard.HUD.showToast("🎮 Controller disconnected");
  });

  return {
    pollInput() {
      const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
      if (!gamepads || !gamepads[0]) return { dx: 0, dy: 0, actionA: false };
      const gp = gamepads[0];
      const dx = Math.abs(gp.axes[0]) > 0.15 ? gp.axes[0] : 0;
      const dy = Math.abs(gp.axes[1]) > 0.15 ? gp.axes[1] : 0;
      const actionA = gp.buttons[0] && gp.buttons[0].pressed;
      return { dx, dy, actionA };
    }
  };
})();
