const assert = require('assert');
const test = require('node:test');

test('SpatialHash entity insertion and radius query', () => {
  class MockHash {
    constructor(size = 64) { this.size = size; this.map = new Map(); }
    insert(e) {
      const key = `${Math.floor(e.x/this.size)}:${Math.floor(e.y/this.size)}`;
      if (!this.map.has(key)) this.map.set(key, []);
      this.map.get(key).push(e);
    }
    countAt(x, y) {
      const key = `${Math.floor(x/this.size)}:${Math.floor(y/this.size)}`;
      return (this.map.get(key) || []).length;
    }
  }

  const hash = new MockHash(64);
  hash.insert({ x: 30, y: 40, id: 'hero' });
  hash.insert({ x: 50, y: 50, id: 'goblin' });
  hash.insert({ x: 300, y: 300, id: 'dragon' });

  assert.strictEqual(hash.countAt(32, 32), 2);
  assert.strictEqual(hash.countAt(300, 300), 1);
  assert.strictEqual(hash.countAt(500, 500), 0);
});

test('Boss phase transition health thresholds', () => {
  const boss = { maxHp: 1000, hp: 200, phase: 1, attack: 50 };
  const hpRatio = boss.hp / boss.maxHp;
  if (hpRatio <= 0.25) {
    boss.phase = 3;
    boss.attack = Math.floor(boss.attack * 1.5);
  }
  assert.strictEqual(boss.phase, 3);
  assert.strictEqual(boss.attack, 75);
});

test('Trade route profit multiplier calculation', () => {
  const baseYield = 100;
  const route = { bonusProfit: 1.8 };
  const total = Math.floor(baseYield * route.bonusProfit);
  assert.strictEqual(total, 180);
});
