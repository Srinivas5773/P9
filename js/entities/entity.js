/**
 * Chronicles of Aethelgard - Base Entity Class
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Entities = window.Aethelgard.Entities || {};
window.Aethelgard.Entities.Entity = class Entity {
  constructor(id, name, x = 0, y = 0, width = 32, height = 32) {
    this.id = id;
    this.name = name;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.vx = 0;
    this.vy = 0;
    this.hp = 100;
    this.maxHp = 100;
    this.isDead = false;
  }
  takeDamage(amount) {
    this.hp = Math.max(0, this.hp - amount);
    if (this.hp === 0) this.isDead = true;
    return this.isDead;
  }
  heal(amount) {
    this.hp = Math.min(this.maxHp, this.hp + amount);
  }
};

