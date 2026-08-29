/**
 * Chronicles of Aethelgard - Tactical Combat AI
 */
window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Combat = window.Aethelgard.Combat || {};
window.Aethelgard.Combat.CombatAI = {
  decideTurn(enemy, player) {
    return { action: "attack", target: player };
  }
};
