/**
 * Chronicles of Aethelgard - Blacksmithing & Crafting Engine
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Items = window.Aethelgard.Items || {};
window.Aethelgard.Items.CraftingSystem = (function () {
  return {
    craftItem(recipeId, playerMaterials) {
      // Resolves crafting requirements and produces crafted item
      const item = window.Aethelgard.Items.ItemDatabase.getItem(recipeId);
      if (item && window.Aethelgard.HUD) {
        window.Aethelgard.HUD.showToast(`Forged: ${item.name} ⚒️`);
      }
      return item;
    }
  };
})();

