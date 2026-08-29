/**
 * Chronicles of Aethelgard - Main Viewport Canvas Controller
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.CanvasRenderer = (function () {
  let gameCanvas, gameCtx;
  let weatherCanvas, weatherCtx;
  let lightingCanvas, lightingCtx;
  let particleCanvas, particleCtx;
  let cameraX = 0, cameraY = 0;

  function init() {
    gameCanvas = document.getElementById("game-canvas");
    if (gameCanvas) gameCtx = gameCanvas.getContext("2d");
    
    weatherCanvas = document.getElementById("weather-canvas");
    if (weatherCanvas) weatherCtx = weatherCanvas.getContext("2d");
    
    lightingCanvas = document.getElementById("lighting-canvas");
    if (lightingCanvas) lightingCtx = lightingCanvas.getContext("2d");
    
    particleCanvas = document.getElementById("particle-canvas");
    if (particleCanvas) particleCtx = particleCanvas.getContext("2d");
  }

  return {
    init,
    setCamera(x, y) { cameraX = x; cameraY = y; },
    render() {
      if (!gameCtx) init();
      if (!gameCtx) return;
      
      // Clear canvas
      gameCtx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
      
      // 1. Render World Map / Dungeon
      if (window.Aethelgard.World && window.Aethelgard.World.getCurrentMap()) {
        window.Aethelgard.Render.TileRenderer.renderMap(
          gameCtx,
          window.Aethelgard.World.getCurrentMap(),
          cameraX,
          cameraY,
          gameCanvas.width,
          gameCanvas.height
        );
      }
      
      // 2. Render Player
      if (window.Aethelgard.Player) {
        window.Aethelgard.Player.render(gameCtx, cameraX, cameraY);
      }
      
      // 3. Render Particles & Weather
      if (particleCtx && window.Aethelgard.Particles) {
        particleCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
        window.Aethelgard.Particles.render(particleCtx);
      }
      if (weatherCtx && window.Aethelgard.Weather) {
        window.Aethelgard.Weather.render(weatherCtx);
      }
      
      // 4. Render Dynamic Lighting
      if (lightingCtx && window.Aethelgard.Lighting) {
        const darkness = window.Aethelgard.DayNight ? window.Aethelgard.DayNight.getAmbientDarkness() : 0.5;
        window.Aethelgard.Lighting.render(lightingCtx, lightingCanvas.width, lightingCanvas.height, darkness);
      }
    }
  };
})();

