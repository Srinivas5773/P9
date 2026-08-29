/**
 * Chronicles of Aethelgard - Math & Geometry Utilities
 * Vectors, collision detection, seeded pseudo-randomness, noise, and pathfinding.
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.MathUtils = (function () {
  class Vector2 {
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
    set(x, y) { this.x = x; this.y = y; return this; }
    clone() { return new Vector2(this.x, this.y); }
    add(v) { this.x += v.x; this.y += v.y; return this; }
    sub(v) { this.x -= v.x; this.y -= v.y; return this; }
    mul(scalar) { this.x *= scalar; this.y *= scalar; return this; }
    div(scalar) { if (scalar !== 0) { this.x /= scalar; this.y /= scalar; } return this; }
    magSq() { return this.x * this.x + this.y * this.y; }
    mag() { return Math.sqrt(this.magSq()); }
    normalize() {
      const m = this.mag();
      if (m > 0) this.div(m);
      return this;
    }
    dist(v) { return Math.hypot(this.x - v.x, this.y - v.y); }
    angle() { return Math.atan2(this.y, this.x); }
    dot(v) { return this.x * v.x + this.y * v.y; }
    lerp(v, t) {
      this.x += (v.x - this.x) * t;
      this.y += (v.y - this.y) * t;
      return this;
    }
  }

  class Rect {
    constructor(x = 0, y = 0, w = 0, h = 0) {
      this.x = x; this.y = y; this.w = w; this.h = h;
    }
    contains(px, py) {
      return px >= this.x && px <= this.x + this.w && py >= this.y && py <= this.y + this.h;
    }
    intersects(other) {
      return !(this.x + this.w < other.x || this.x > other.x + other.w ||
               this.y + this.h < other.y || this.y > other.y + other.h);
    }
  }

  class SeededRNG {
    constructor(seed = 123456789) {
      this.seed = seed;
    }
    next() {
      this.seed = (this.seed * 9301 + 49297) % 233280;
      return this.seed / 233280;
    }
    range(min, max) {
      return min + this.next() * (max - min);
    }
    rangeInt(min, max) {
      return Math.floor(this.range(min, max + 1));
    }
    choice(arr) {
      if (!arr || arr.length === 0) return null;
      return arr[this.rangeInt(0, arr.length - 1)];
    }
  }

  // 2D Perlin Simplex Noise Implementation
  class PerlinNoise {
    constructor(seed = 42) {
      this.p = new Uint8Array(512);
      const permutation = new Uint8Array(256);
      for (let i = 0; i < 256; i++) permutation[i] = i;
      let rng = new SeededRNG(seed);
      for (let i = 255; i > 0; i--) {
        let j = rng.rangeInt(0, i);
        let tmp = permutation[i];
        permutation[i] = permutation[j];
        permutation[j] = tmp;
      }
      for (let i = 0; i < 512; i++) {
        this.p[i] = permutation[i & 255];
      }
    }
    fade(t) { return t * t * t * (t * (t * 6 - 15) + 10); }
    lerp(t, a, b) { return a + t * (b - a); }
    grad(hash, x, y) {
      let h = hash & 7;
      let u = h < 4 ? x : y;
      let v = h < 4 ? y : x;
      return ((h & 1) ? -u : u) + ((h & 2) ? -2.0 * v : 2.0 * v);
    }
    noise2D(x, y) {
      let X = Math.floor(x) & 255;
      let Y = Math.floor(y) & 255;
      x -= Math.floor(x);
      y -= Math.floor(y);
      let u = this.fade(x);
      let v = this.fade(y);
      let A = this.p[X] + Y, B = this.p[X + 1] + Y;
      return this.lerp(v,
        this.lerp(u, this.grad(this.p[A], x, y), this.grad(this.p[B], x - 1, y)),
        this.lerp(u, this.grad(this.p[A + 1], x, y - 1), this.grad(this.p[B + 1], x - 1, y - 1))
      );
    }
    octaveNoise(x, y, octaves = 4, persistence = 0.5) {
      let total = 0, frequency = 1, amplitude = 1, maxValue = 0;
      for (let i = 0; i < octaves; i++) {
        total += this.noise2D(x * frequency, y * frequency) * amplitude;
        maxValue += amplitude;
        amplitude *= persistence;
        frequency *= 2;
      }
      return total / maxValue;
    }
  }

  return {
    Vector2,
    Rect,
    SeededRNG,
    PerlinNoise,
    clamp(val, min, max) { return Math.max(min, Math.min(max, val)); },
    lerp(a, b, t) { return a + (b - a) * t; },
    degToRad(deg) { return (deg * Math.PI) / 180; },
    radToDeg(rad) { return (rad * 180) / Math.PI; }
  };
})();

