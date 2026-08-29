/**
 * Chronicles of Aethelgard - AI Behavior Tree & Aggro Controller
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Entities = window.Aethelgard.Entities || {};
window.Aethelgard.Entities.AIController = (function () {
  return {
    chooseCombatAction(monster, player) {
      if (monster.hp < monster.maxHp * 0.3 && Math.random() < 0.5) {
        return { type: "skill", action: "heal_self" };
      }
      return { type: "attack", action: "strike" };
    }
  };
})();

