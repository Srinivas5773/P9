/**
 * Chronicles of Aethelgard - Precision Fishing Simulator
 */
window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Minigames = window.Aethelgard.Minigames || {};
window.Aethelgard.Minigames.Fishing = {
  start() {
    const overlay = document.getElementById("fishing-overlay");
    if (overlay) overlay.classList.add("active-minigame");
  },
  close() {
    const overlay = document.getElementById("fishing-overlay");
    if (overlay) overlay.classList.remove("active-minigame");
  }
};
