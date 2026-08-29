/**
 * Chronicles of Aethelgard - Mercenary Companions & Pet Summon Engine
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Entities = window.Aethelgard.Entities || {};
window.Aethelgard.Entities.Companion = class Companion extends window.Aethelgard.Entities.Entity {
  constructor(name, role = "healer") {
    super(`comp_${Date.now()}`, name);
    this.role = role;
  }
};

