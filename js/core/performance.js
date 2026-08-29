/**
 * Chronicles of Aethelgard - Performance Monitor & Frame Rate Regulator
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Performance = (function () {
  let lastTime = performance.now();
  let frameCount = 0;
  let fps = 60;
  let delta = 0;
  let renderDuration = 0;

  return {
    update(currentTime) {
      delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;
      frameCount++;
      if (frameCount % 30 === 0) {
        fps = Math.round(1 / delta);
      }
      return Math.min(delta, 0.1);
    },
    getFPS() { return fps; },
    getDelta() { return delta; },
    startRenderMeasure() { this.renderStart = performance.now(); },
    endRenderMeasure() { renderDuration = performance.now() - this.renderStart; },
    getRenderDuration() { return renderDuration; }
  };
})();

