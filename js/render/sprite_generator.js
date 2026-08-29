/**
 * Chronicles of Aethelgard - Procedural Vector Canvas Sprite Generator
 * Generates animated character models, weapons, monsters, and armor overlays.
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Render = window.Aethelgard.Render || {};
window.Aethelgard.Render.SpriteGenerator = (function () {
  return {
    drawHero(ctx, x, y, width, height, charClass = "paladin", animFrame = 0, state = "idle") {
      ctx.save();
      ctx.translate(x, y);
      
      const bob = Math.sin(animFrame * 0.1) * 3;
      
      // Shadow
      ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
      ctx.beginPath();
      ctx.ellipse(width / 2, height - 4, width * 0.35, height * 0.1, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Body & Armor
      ctx.fillStyle = charClass === "paladin" ? "#e2e8f0" : (charClass === "pyromancer" ? "#c53030" : "#2d3748");
      ctx.fillRect(width * 0.3, height * 0.35 + bob, width * 0.4, height * 0.45);
      
      // Head
      ctx.fillStyle = "#fbd38d";
      ctx.beginPath();
      ctx.arc(width / 2, height * 0.25 + bob, width * 0.18, 0, Math.PI * 2);
      ctx.fill();
      
      // Helm / Hood Trim
      ctx.fillStyle = "#d4af37";
      ctx.fillRect(width * 0.28, height * 0.12 + bob, width * 0.44, height * 0.14);
      
      // Weapon (Mainhand)
      ctx.fillStyle = "#cbd5e0";
      ctx.fillRect(width * 0.72, height * 0.2 + bob, width * 0.08, height * 0.5);
      ctx.fillStyle = "#d4af37";
      ctx.fillRect(width * 0.68, height * 0.45 + bob, width * 0.16, height * 0.06);
      
      ctx.restore();
    },
    drawMonster(ctx, x, y, width, height, monsterType = "goblin", animFrame = 0) {
      ctx.save();
      ctx.translate(x, y);
      const sway = Math.sin(animFrame * 0.08) * 4;
      
      ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
      ctx.beginPath();
      ctx.ellipse(width / 2, height - 4, width * 0.4, height * 0.12, 0, 0, Math.PI * 2);
      ctx.fill();
      
      if (monsterType.includes("goblin")) {
        ctx.fillStyle = "#38a169";
        ctx.fillRect(width * 0.25, height * 0.4 + sway, width * 0.5, height * 0.4);
        ctx.beginPath();
        ctx.arc(width / 2, height * 0.3 + sway, width * 0.22, 0, Math.PI * 2);
        ctx.fill();
        // Glowing Red Eyes
        ctx.fillStyle = "#e53e3e";
        ctx.fillRect(width * 0.4, height * 0.26 + sway, 4, 4);
        ctx.fillRect(width * 0.55, height * 0.26 + sway, 4, 4);
      } else if (monsterType.includes("skeleton")) {
        ctx.fillStyle = "#e2e8f0";
        ctx.fillRect(width * 0.35, height * 0.35 + sway, width * 0.3, height * 0.45);
        ctx.beginPath();
        ctx.arc(width / 2, height * 0.25 + sway, width * 0.18, 0, Math.PI * 2);
        ctx.fill();
        // Dark Eye Sockets
        ctx.fillStyle = "#000000";
        ctx.fillRect(width * 0.42, height * 0.22 + sway, 4, 4);
        ctx.fillRect(width * 0.54, height * 0.22 + sway, 4, 4);
      } else {
        ctx.fillStyle = "#805ad5";
        ctx.fillRect(width * 0.2, height * 0.3 + sway, width * 0.6, height * 0.5);
      }
      
      ctx.restore();
    }
  };
})();

