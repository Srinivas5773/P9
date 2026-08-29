/**
 * Chronicles of Aethelgard - Rune Socketing & Elemental Infusion Engine
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Items = window.Aethelgard.Items || {};
window.Aethelgard.Items.EnchantingSystem = (function () {
  return {
    socketRune(targetItem, runeItem) {
      if (!targetItem || !runeItem) return targetItem;
      targetItem.enchanted = true;
      targetItem.attack = (targetItem.attack || 0) + 15;
      targetItem.name = `Infused ${targetItem.name}`;
      return targetItem;
    }
  };
})();

