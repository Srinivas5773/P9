/**
 * Chronicles of Aethelgard - Tactical Grid System
 */
window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Combat = window.Aethelgard.Combat || {};
window.Aethelgard.Combat.TacticalGrid = {
  getDistance(posA, posB) {
    return Math.abs(posA.x - posB.x) + Math.abs(posA.y - posB.y);
  }
};
