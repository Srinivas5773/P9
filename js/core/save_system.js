/**
 * Chronicles of Aethelgard - Save / Load / Export / Import System
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.SaveSystem = (function () {
  const SAVE_KEY = "AETHELGARD_CHRONICLE_SAVE";

  return {
    save(slotIndex = 0) {
      try {
        const gameState = {
          version: "1.0.0",
          timestamp: Date.now(),
          player: window.Aethelgard.Player ? window.Aethelgard.Player.serialize() : null,
          kingdom: window.Aethelgard.Kingdom ? window.Aethelgard.Kingdom.serialize() : null,
          quests: window.Aethelgard.Quests ? window.Aethelgard.Quests.serialize() : null,
          world: window.Aethelgard.World ? window.Aethelgard.World.serialize() : null
        };
        localStorage.setItem(`${SAVE_KEY}_${slotIndex}`, JSON.stringify(gameState));
        if (window.Aethelgard.HUD) {
          window.Aethelgard.HUD.showToast("Chronicle successfully recorded to archives. 💾");
        }
        return true;
      } catch (err) {
        console.error("Failed to save game state:", err);
        return false;
      }
    },
    load(slotIndex = 0) {
      try {
        const raw = localStorage.getItem(`${SAVE_KEY}_${slotIndex}`);
        if (!raw) return null;
        const data = JSON.parse(raw);
        return data;
      } catch (err) {
        console.error("Failed to load save file:", err);
        return null;
      }
    },
    hasSave(slotIndex = 0) {
      return !!localStorage.getItem(`${SAVE_KEY}_${slotIndex}`);
    },
    exportJSON(slotIndex = 0) {
      const data = this.load(slotIndex);
      if (!data) return;
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Aethelgard_Chronicle_Save_${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
    },
    importJSON(file, callback) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const parsed = JSON.parse(e.target.result);
          localStorage.setItem(`${SAVE_KEY}_0`, JSON.stringify(parsed));
          if (callback) callback(true, parsed);
        } catch (err) {
          console.error("Malformed save JSON:", err);
          if (callback) callback(false, null);
        }
      };
      reader.readAsText(file);
    }
  };
})();

