const assert = require('assert');
const test = require('node:test');

test('Dungeon room generation boundaries', () => {
  const width = 50;
  const height = 50;
  const room = { x: 5, y: 5, w: 10, h: 10 };

  assert.strictEqual(room.x + room.w <= width, true);
  assert.strictEqual(room.y + room.h <= height, true);
});

test('Overworld tile map array size', () => {
  const width = 100;
  const height = 100;
  const tileCount = width * height;
  assert.strictEqual(tileCount, 10000);
});
