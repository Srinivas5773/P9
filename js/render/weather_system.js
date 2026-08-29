/**
 * Chronicles of Aethelgard - Ambient Weather Simulation (Rain, Snow, Thunder, Fog)
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Weather = (function () {
  let currentWeather = "clear";
  const raindrops = [];
  const snowflakes = [];

  for (let i = 0; i < 150; i++) {
    raindrops.push({ x: Math.random() * 1280, y: Math.random() * 720, speed: Math.random() * 6 + 12, len: Math.random() * 10 + 15 });
    snowflakes.push({ x: Math.random() * 1280, y: Math.random() * 720, speed: Math.random() * 1.5 + 0.8, size: Math.random() * 2 + 1 });
  }

  return {
    setWeather(type) { currentWeather = type; },
    getWeather() { return currentWeather; },
    update(dt) {
      if (currentWeather === "rain" || currentWeather === "storm") {
        for (const drop of raindrops) {
          drop.y += drop.speed * dt * 60;
          drop.x += (drop.speed * 0.2) * dt * 60;
          if (drop.y > 720) { drop.y = -20; drop.x = Math.random() * 1280; }
        }
      } else if (currentWeather === "snow") {
        for (const flake of snowflakes) {
          flake.y += flake.speed * dt * 60;
          flake.x += Math.sin(flake.y * 0.02) * 0.5;
          if (flake.y > 720) { flake.y = -10; flake.x = Math.random() * 1280; }
        }
      }
    },
    render(ctx) {
      ctx.clearRect(0, 0, 1280, 720);
      if (currentWeather === "rain" || currentWeather === "storm") {
        ctx.strokeStyle = "rgba(180, 210, 255, 0.6)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (const drop of raindrops) {
          ctx.moveTo(drop.x, drop.y);
          ctx.lineTo(drop.x + 3, drop.y + drop.len);
        }
        ctx.stroke();
      } else if (currentWeather === "snow") {
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        for (const flake of snowflakes) {
          ctx.beginPath();
          ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
  };
})();

