const assert = require('assert');
const test = require('node:test');

test('Damage calculator formula', () => {
  const calcDamage = (attack, armor) => {
    const mitigation = 100 / (100 + armor);
    return Math.max(1, Math.floor(attack * mitigation));
  };

  const dmg1 = calcDamage(50, 0);
  assert.strictEqual(dmg1, 50, 'Zero armor should take full 50 damage');

  const dmg2 = calcDamage(100, 100);
  assert.strictEqual(dmg2, 50, '100 armor should mitigate 50% damage');
});

test('Status effect duration reduction', () => {
  const effect = { id: 'poison', duration: 3, dot: 10 };
  effect.duration -= 1;
  assert.strictEqual(effect.duration, 2);
  assert.strictEqual(effect.duration > 0, true);
});
