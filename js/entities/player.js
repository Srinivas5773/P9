/**
 * Chronicles of Aethelgard - Player Controller & Progression Manager
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Player = (function () {
  let x = 1600, y = 1600;
  let speed = 200;
  let name = "Alden Shadowbane";
  let charClass = "paladin";
  let level = 1;
  let xp = 0, xpToNext = 250;
  let hp = 100, maxHp = 100;
  let mana = 50, maxMana = 50;
  let stamina = 80, maxStamina = 80;
  let gold = 250, soulShards = 10;
  let animFrame = 0;
  const keys = {};

  window.addEventListener("keydown", e => { keys[e.key.toLowerCase()] = true; });
  window.addEventListener("keyup", e => { keys[e.key.toLowerCase()] = false; });

  return {
    init(heroName, chosenClass) {
      name = heroName || "Alden";
      charClass = chosenClass || "paladin";
    },
    update(dt) {
      let dx = 0, dy = 0;
      if (keys["w"] || keys["arrowup"]) dy -= 1;
      if (keys["s"] || keys["arrowdown"]) dy += 1;
      if (keys["a"] || keys["arrowleft"]) dx -= 1;
      if (keys["d"] || keys["arrowright"]) dx += 1;
      
      if (dx !== 0 || dy !== 0) {
        const mag = Math.hypot(dx, dy);
        x += (dx / mag) * speed * dt;
        y += (dy / mag) * speed * dt;
        animFrame++;
        
        if (window.Aethelgard.CanvasRenderer) {
          window.Aethelgard.CanvasRenderer.setCamera(x - 640, y - 360);
        }
      }
    },
    render(ctx, cameraX, cameraY) {
      const px = x - cameraX;
      const py = y - cameraY;
      window.Aethelgard.Render.SpriteGenerator.drawHero(ctx, px - 24, py - 32, 48, 64, charClass, animFrame);
    },
    serialize() {
      return { x, y, name, charClass, level, xp, xpToNext, hp, maxHp, mana, maxMana, stamina, maxStamina, gold, soulShards };
    },
    deserialize(data) {
      if (!data) return;
      x = data.x; y = data.y; name = data.name; charClass = data.charClass;
      level = data.level; xp = data.xp; xpToNext = data.xpToNext;
      hp = data.hp; maxHp = data.maxHp; mana = data.mana; maxMana = data.maxMana;
      gold = data.gold; soulShards = data.soulShards;
    },
    getName() { return name; },
    getClass() { return charClass; },
    getGold() { return gold; },
    addGold(amount) { gold += amount; },
    getHp() { return hp; },
    getMaxHp() { return maxHp; }
  };
})();

