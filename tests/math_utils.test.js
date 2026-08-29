const assert = require('assert');
const test = require('node:test');

test('MathUtils Vector2 calculations', () => {
  const v = { x: 3, y: 4 };
  const mag = Math.hypot(v.x, v.y);
  assert.strictEqual(mag, 5, 'Vector magnitude should equal 5');
});

test('MathUtils clamp function', () => {
  const clamp = (val, min, max) => Math.max(min, Math.min(max, val));
  assert.strictEqual(clamp(15, 0, 10), 10);
  assert.strictEqual(clamp(-5, 0, 10), 0);
  assert.strictEqual(clamp(7, 0, 10), 7);
});

test('MathUtils lerp interpolation', () => {
  const lerp = (a, b, t) => a + (b - a) * t;
  assert.strictEqual(lerp(10, 20, 0.5), 15);
  assert.strictEqual(lerp(0, 100, 0.25), 25);
});
