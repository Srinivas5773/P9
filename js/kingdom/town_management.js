/**
 * Chronicles of Aethelgard - Master Settlement Town Management Controller
 */
window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Kingdom = window.Aethelgard.Kingdom || {};
window.Aethelgard.Kingdom.TownManagement = (function () {
  const builtStructures = new Map();

  return {
    constructBuilding(buildingId) {
      builtStructures.set(buildingId, 1);
      if (window.Aethelgard.HUD) window.Aethelgard.HUD.showToast(`Construction complete: ${buildingId} 🏰`);
    },
    getBuiltBuildings() { return Array.from(builtStructures.entries()); },
    serialize() {
      return { structures: Array.from(builtStructures.entries()) };
    },
    deserialize(data) {
      if (!data) return;
      builtStructures.clear();
      (data.structures || []).forEach(([id, lvl]) => builtStructures.set(id, lvl));
    }
  };
})();
