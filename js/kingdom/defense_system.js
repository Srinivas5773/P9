/**
 * Chronicles of Aethelgard - Fortress Fortifications & Invasion Defense
 */
window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Kingdom = window.Aethelgard.Kingdom || {};
window.Aethelgard.Kingdom.Defense = {
  getDefenseRating() { return 120; },
  triggerRaidDefense() {
    if (window.Aethelgard.HUD) window.Aethelgard.HUD.showToast("Garrison successfully repelled goblin raiders! 🛡️");
  }
};
