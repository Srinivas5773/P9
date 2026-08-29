const assert = require('assert');
const test = require('node:test');

test('Save state JSON serialization and deserialization', () => {
  const gameState = {
    version: '1.0.0',
    player: { name: 'Alden', level: 5, gold: 350 },
    timestamp: 1724912000000
  };

  const serialized = JSON.stringify(gameState);
  assert.strictEqual(typeof serialized, 'string');

  const parsed = JSON.parse(serialized);
  assert.strictEqual(parsed.player.name, 'Alden');
  assert.strictEqual(parsed.player.level, 5);
  assert.strictEqual(parsed.player.gold, 350);
});
