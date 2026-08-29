/**
 * Chronicles of Aethelgard - Procedural Loot Generator & Affix Roller
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Items = window.Aethelgard.Items || {};
window.Aethelgard.Items.LootGenerator = (function () {
  const PREFIXES = ["Flaming", "Frozen", "Thunderous", "Holy", "Abyssal", "Fortified", "Ancient", "Radiant"];
  const SUFFIXES = ["of the Bear", "of the Eagle", "of the Archon", "of the Slayer", "of Annihilation", "of the Phoenix"];

  return {
    generateLoot(level = 1, rarity = "rare") {
      const allItems = window.Aethelgard.Items.ItemDatabase.getAll();
      if (!allItems || allItems.length === 0) return null;
      
      const base = allItems[Math.floor(Math.random() * allItems.length)];
      const prefix = PREFIXES[Math.floor(Math.random() * PREFIXES.length)];
      const suffix = SUFFIXES[Math.floor(Math.random() * SUFFIXES.length)];
      
      return {
        ...base,
        id: `${base.id}_roll_${Date.now()}`,
        name: `${prefix} ${base.name} ${suffix}`,
        rarity,
        attack: Math.floor(base.attack * (1 + level * 0.15)),
        armor: Math.floor(base.armor * (1 + level * 0.15)),
        value: Math.floor(base.value * (1 + level * 0.2))
      };
    }
  };
})();

