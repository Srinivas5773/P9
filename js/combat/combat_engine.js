/**
 * Chronicles of Aethelgard - Tactical Battle Engine
 */
window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Combat = window.Aethelgard.Combat || {};
window.Aethelgard.Combat.CombatEngine = (function () {
  let activeEnemies = [];
  let isInCombat = false;

  return {
    startEncounter(enemyDataList) {
      activeEnemies = enemyDataList || [window.Aethelgard.Data.Monsters[0]];
      isInCombat = true;
      window.Aethelgard.StateManager.setState("COMBAT");
      if (window.Aethelgard.Audio && window.Aethelgard.Audio.MusicSequencer) {
        window.Aethelgard.Audio.MusicSequencer.playTrack("combatTheme");
      }
      const overlay = document.getElementById("combat-overlay");
      if (overlay) overlay.classList.add("active-combat");
      this.renderEnemies();
    },
    renderEnemies() {
      const container = document.getElementById("combat-enemies-container");
      if (!container) return;
      container.innerHTML = "";
      activeEnemies.forEach((e, idx) => {
        const card = document.createElement("div");
        card.className = "combat-enemy-card targeted";
        card.innerHTML = `
          <div class="enemy-sprite-container"><canvas id="enemy-canvas-${idx}" width="120" height="140"></canvas></div>
          <div class="enemy-vitals">
            <div class="enemy-name">${e.name}</div>
            <div class="enemy-health-bar-bg"><div class="enemy-health-bar-fill" style="width: 100%;"></div></div>
          </div>
        `;
        container.appendChild(card);
        const cvs = document.getElementById(`enemy-canvas-${idx}`);
        if (cvs) {
          const ctx = cvs.getContext("2d");
          window.Aethelgard.Render.SpriteGenerator.drawMonster(ctx, 10, 10, 100, 120, e.spriteType || "goblin");
        }
      });
    },
    playerAttack() {
      if (!isInCombat || activeEnemies.length === 0) return;
      const enemy = activeEnemies[0];
      const res = window.Aethelgard.Combat.ActionResolver.resolveAttack(window.Aethelgard.Player || { attack: 25 }, enemy);
      enemy.maxHp = enemy.maxHp || 50;
      enemy.hp = (enemy.hp !== undefined ? enemy.hp : enemy.maxHp) - res.damage;
      if (window.Aethelgard.Audio && window.Aethelgard.Audio.SFX) window.Aethelgard.Audio.SFX.swordSlash();
      
      if (enemy.hp <= 0) {
        this.victory();
      }
    },
    victory() {
      isInCombat = false;
      const overlay = document.getElementById("combat-overlay");
      if (overlay) overlay.classList.remove("active-combat");
      window.Aethelgard.StateManager.setState("EXPLORATION");
      if (window.Aethelgard.Audio && window.Aethelgard.Audio.MusicSequencer) {
        window.Aethelgard.Audio.MusicSequencer.playTrack("townTheme");
      }
      if (window.Aethelgard.HUD) window.Aethelgard.HUD.showToast("Victory achieved! Loot gained. 🏆");
    }
  };
})();
