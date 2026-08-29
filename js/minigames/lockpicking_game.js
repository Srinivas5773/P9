/**
 * Chronicles of Aethelgard - Lockpicking Physics Simulator
 */
window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Minigames = window.Aethelgard.Minigames || {};
window.Aethelgard.Minigames.Lockpicking = {
  start() {
    const overlay = document.getElementById("lockpicking-overlay");
    if (overlay) overlay.classList.add("active-minigame");
  },
  close() {
    const overlay = document.getElementById("lockpicking-overlay");
    if (overlay) overlay.classList.remove("active-minigame");
  }
};
