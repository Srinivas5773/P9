/**
 * Chronicles of Aethelgard - Spatial Hashing Grid for Ultra-Fast Collision & Viewport Culling
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Core = window.Aethelgard.Core || {};
window.Aethelgard.Core.SpatialHash = class SpatialHash {
  constructor(cellSize = 64) {
    this.cellSize = cellSize;
    this.grid = new Map();
  }
  _key(cx, cy) { return `${cx}:${cy}`; }
  insert(entity) {
    const cx = Math.floor(entity.x / this.cellSize);
    const cy = Math.floor(entity.y / this.cellSize);
    const k = this._key(cx, cy);
    if (!this.grid.has(k)) this.grid.set(k, []);
    this.grid.get(k).push(entity);
  }
  query(x, y, radius) {
    const minX = Math.floor((x - radius) / this.cellSize);
    const maxX = Math.floor((x + radius) / this.cellSize);
    const minY = Math.floor((y - radius) / this.cellSize);
    const maxY = Math.floor((y + radius) / this.cellSize);
    const results = [];
    for (let cx = minX; cx <= maxX; cx++) {
      for (let cy = minY; cy <= maxY; cy++) {
        const list = this.grid.get(this._key(cx, cy));
        if (list) results.push(...list);
      }
    }
    return results;
  }
  clear() { this.grid.clear(); }
};
