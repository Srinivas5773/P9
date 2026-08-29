/**
 * Chronicles of Aethelgard - Monster Entity Class
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Entities = window.Aethelgard.Entities || {};
window.Aethelgard.Entities.Monster = class Monster extends window.Aethelgard.Entities.Entity {
  constructor(data, x, y) {
    super(data.id, data.name, x, y);
    this.level = data.level || 1;
    this.hp = data.maxHp || 50;
    this.maxHp = data.maxHp || 50;
    this.attack = data.attack || 10;
    this.armor = data.armor || 2;
    this.xpReward = data.xpReward || 30;
    this.goldReward = data.goldReward || 10;
  }
};

