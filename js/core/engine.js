/**
 * Chronicles of Aethelgard - Main Game Loop & Lifecycle Engine
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Engine = (function () {
  let isRunning = false;
  let reqId = null;

  function gameLoop(time) {
    if (!isRunning) return;
    const dt = window.Aethelgard.Performance.update(time);
    
    // 1. Process Input & State Logic
    if (window.Aethelgard.Player && window.Aethelgard.StateManager.getState() === "EXPLORATION") {
      window.Aethelgard.Player.update(dt);
    }
    
    // 2. Update Weather, Particles & Day/Night
    if (window.Aethelgard.Weather) window.Aethelgard.Weather.update(dt);
    if (window.Aethelgard.Particles) window.Aethelgard.Particles.update(dt);
    if (window.Aethelgard.DayNight) window.Aethelgard.DayNight.update(dt);
    
    // 3. Render Viewport
    if (window.Aethelgard.CanvasRenderer) {
      window.Aethelgard.CanvasRenderer.render();
    }
    
    reqId = requestAnimationFrame(gameLoop);
  }

  return {
    start() {
      if (isRunning) return;
      isRunning = true;
      reqId = requestAnimationFrame(gameLoop);
      console.log("[Engine] Game engine lifecycle started.");
    },
    stop() {
      isRunning = false;
      if (reqId) cancelAnimationFrame(reqId);
      console.log("[Engine] Game engine lifecycle paused.");
    }
  };
})();

