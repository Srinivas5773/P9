const assert = require('assert');
const test = require('node:test');

test('Kingdom daily resource accrual', () => {
  const treasury = { gold: 100, wood: 50, stone: 30 };
  const dailyProduction = { gold: 25, wood: 15, stone: 10 };

  treasury.gold += dailyProduction.gold;
  treasury.wood += dailyProduction.wood;
  treasury.stone += dailyProduction.stone;

  assert.strictEqual(treasury.gold, 125);
  assert.strictEqual(treasury.wood, 65);
  assert.strictEqual(treasury.stone, 40);
});
