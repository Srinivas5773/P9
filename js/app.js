/**
 * Chronicles of Aethelgard - Application Bootstrap & Event Router
 */

window.addEventListener("DOMContentLoaded", () => {
  console.log("=== Chronicles of Aethelgard: Initializing Standalone Game Engine ===");
  
  // Setup Button Navigation
  document.querySelectorAll("[data-modal]").forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-modal");
      window.Aethelgard.UI.ModalManager.openModal(modalId);
    });
  });
  
  document.querySelectorAll("[data-close]").forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-close");
      window.Aethelgard.UI.ModalManager.closeModal(modalId);
    });
  });
  
  // Title Screen Buttons
  const btnNewGame = document.getElementById("title-btn-new-game");
  if (btnNewGame) {
    btnNewGame.onclick = () => {
      document.getElementById("screen-title").classList.remove("active-screen");
      document.getElementById("screen-char-creation").classList.add("active-screen");
    };
  }
  
  const btnStartGame = document.getElementById("btn-start-game");
  if (btnStartGame) {
    btnStartGame.onclick = () => {
      document.getElementById("screen-char-creation").classList.remove("active-screen");
      
      // Start Audio Engine
      if (window.Aethelgard.Audio && window.Aethelgard.Audio.Synth) {
        window.Aethelgard.Audio.Synth.init();
        window.Aethelgard.Audio.MusicSequencer.playTrack("townTheme");
      }
      
      // Generate Overworld
      window.Aethelgard.World.WorldGenerator.generateOverworld(100, 100, 42);
      
      // Set State to Exploration and Start Engine
      window.Aethelgard.StateManager.setState("EXPLORATION");
      window.Aethelgard.Engine.start();
      
      if (window.Aethelgard.HUD) window.Aethelgard.HUD.showToast("Welcome to Aethelgard, champion! ⚔️");
    };
  }
  
  // Combat Strike button test
  const btnStrike = document.getElementById("btn-combat-attack");
  if (btnStrike) {
    btnStrike.onclick = () => window.Aethelgard.Combat.CombatEngine.playerAttack();
  }
  
  // Tavern Card Button on Title Screen
  const btnTavern = document.getElementById("title-btn-card-tavern");
  if (btnTavern) {
    btnTavern.onclick = () => window.Aethelgard.Minigames.CardGame.startDuel();
  }
  
  // Arena button on Title Screen
  const btnArena = document.getElementById("title-btn-arena");
  if (btnArena) {
    btnArena.onclick = () => window.Aethelgard.Minigames.Arena.startWave(1);
  }
  
  // Periodic HUD update
  setInterval(() => {
    if (window.Aethelgard.HUD) window.Aethelgard.HUD.updateVitals();
  }, 250);
  
  console.log("=== Chronicles of Aethelgard: Ready for Adventuring! ===");
});
