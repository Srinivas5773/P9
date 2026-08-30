/**
 * Chronicles of Aethelgard - Boss Rage Mechanics & Multi-Phase Transformations
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Combat = window.Aethelgard.Combat || {};
window.Aethelgard.Combat.BossPhases = (function () {
  return {
    evaluatePhase(boss) {
      if (!boss || !boss.maxHp) return;
      const hpPct = boss.hp / boss.maxHp;
      
      if (hpPct <= 0.25 && boss.phase < 3) {
        boss.phase = 3;
        boss.attack = Math.floor(boss.attack * 1.5);
        if (window.Aethelgard.HUD) window.Aethelgard.HUD.showToast(`⚠️ ${boss.name} enters ENRAGED CATACLYSMIC state!`);
        if (window.Aethelgard.Particles) window.Aethelgard.Particles.spawn(640, 360, 40, "#ff0000", 6, 5, 1.0);
      } else if (hpPct <= 0.6 && boss.phase < 2) {
        boss.phase = 2;
        boss.armor = Math.floor(boss.armor * 1.3);
        if (window.Aethelgard.HUD) window.Aethelgard.HUD.showToast(`🛡️ ${boss.name} summons an Abyssal Barrier!`);
      }
    }
  };
})();
