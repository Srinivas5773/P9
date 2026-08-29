/**
 * Chronicles of Aethelgard - High-Performance Particle Emitter
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Particles = (function () {
  const particles = [];
  const MAX_PARTICLES = 500;

  class Particle {
    constructor(x, y, vx, vy, color, size, life) {
      this.x = x; this.y = y; this.vx = vx; this.vy = vy;
      this.color = color; this.size = size; this.maxLife = life; this.life = life;
    }
    update(dt) {
      this.x += this.vx * dt * 60;
      this.y += this.vy * dt * 60;
      this.life -= dt;
      return this.life > 0;
    }
    render(ctx) {
      const alpha = Math.max(0, this.life / this.maxLife);
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  return {
    spawn(x, y, count = 10, color = "#ff4500", speed = 2, size = 3, life = 0.5) {
      for (let i = 0; i < count; i++) {
        if (particles.length >= MAX_PARTICLES) particles.shift();
        const angle = Math.random() * Math.PI * 2;
        const spd = (Math.random() * 0.8 + 0.2) * speed;
        const vx = Math.cos(angle) * spd;
        const vy = Math.sin(angle) * spd;
        particles.push(new Particle(x, y, vx, vy, color, Math.random() * size + 1, Math.random() * life + 0.2));
      }
    },
    update(dt) {
      for (let i = particles.length - 1; i >= 0; i--) {
        if (!particles[i].update(dt)) particles.splice(i, 1);
      }
    },
    render(ctx) {
      for (const p of particles) p.render(ctx);
    }
  };
})();

