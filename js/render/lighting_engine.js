/**
 * Chronicles of Aethelgard - 2D Dynamic Raycast Lighting & Torch Flicker Engine
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Lighting = (function () {
  const lights = [];

  return {
    addLight(x, y, radius = 120, color = "rgba(255, 200, 100, 0.8)") {
      const light = { x, y, radius, color, flicker: Math.random() * 10 };
      lights.push(light);
      return light;
    },
    clear() { lights.length = 0; },
    render(ctx, width, height, ambientDarkness = 0.6) {
      ctx.clearRect(0, 0, width, height);
      
      // Ambient Night / Darkness Base
      ctx.fillStyle = `rgba(5, 8, 16, ${ambientDarkness})`;
      ctx.fillRect(0, 0, width, height);
      
      // Punch out light circles with destination-out composite mode
      ctx.globalCompositeOperation = "destination-out";
      
      for (const l of lights) {
        l.flicker += 0.05;
        const rad = l.radius + Math.sin(l.flicker) * 4;
        const grad = ctx.createRadialGradient(l.x, l.y, 0, l.x, l.y, rad);
        grad.addColorStop(0, "rgba(0, 0, 0, 1.0)");
        grad.addColorStop(0.6, "rgba(0, 0, 0, 0.6)");
        grad.addColorStop(1, "rgba(0, 0, 0, 0.0)");
        
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(l.x, l.y, rad, 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.globalCompositeOperation = "source-over";
    }
  };
})();

