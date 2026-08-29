/**
 * Chronicles of Aethelgard - Equipment Paperdoll & Stat Aggregator
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Items = window.Aethelgard.Items || {};
window.Aethelgard.Items.EquipmentSystem = (function () {
  const equipped = {};

  return {
    equip(slot, item) {
      const previous = equipped[slot] || null;
      equipped[slot] = item;
      window.Aethelgard.EventBus.emit("EQUIPMENT_CHANGED", { slot, item, previous });
      return previous;
    },
    unequip(slot) {
      const item = equipped[slot] || null;
      delete equipped[slot];
      window.Aethelgard.EventBus.emit("EQUIPMENT_CHANGED", { slot, item: null, previous: item });
      return item;
    },
    getEquipped(slot) { return equipped[slot] || null; },
    getAllEquipped() { return { ...equipped }; },
    calculateStats() {
      let totalAttack = 0, totalArmor = 0, totalMagic = 0;
      for (const key in equipped) {
        const item = equipped[key];
        if (item) {
          totalAttack += item.attack || 0;
          totalArmor += item.armor || 0;
          totalMagic += item.magicPower || 0;
        }
      }
      return { totalAttack, totalArmor, totalMagic };
    }
  };
})();

