/**
 * Chronicles of Aethelgard - Epic Boss Encounters & Multi-Phase Mechanics
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Entities = window.Aethelgard.Entities || {};
window.Aethelgard.Entities.Bosses = {
  createCryptLich() {
    return {
      id: "boss_crypt_lich",
      name: "Arch-Lich Morvath",
      maxHp: 1200,
      hp: 1200,
      phase: 1,
      abilities: ["shadow_bolt", "summon_skeletons", "death_nova"]
    };
  },
  createNetherKing() {
    return {
      id: "boss_nether_king",
      name: "Malakor the Nether King",
      maxHp: 5000,
      hp: 5000,
      phase: 1,
      abilities: ["void_rend", "cataclysmic_meteor", "abyssal_shield"]
    };
  }
};

