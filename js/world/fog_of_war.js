/**
 * Chronicles of Aethelgard - Dynamic Fog of War & Raycast Visibility Grid
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.World = window.Aethelgard.World || {};
window.Aethelgard.World.FogOfWar = (function () {
  let explored = [];
  let width = 0, height = 0;

  return {
    init(mapWidth, mapHeight) {
      width = mapWidth; height = mapHeight;
      explored = new Uint8Array(width * height);
    },
    reveal(tileX, tileY, radius = 6) {
      for (let dy = -radius; dy <= radius; dy++) {
        for (let dx = -radius; dx <= radius; dx++) {
          if (dx * dx + dy * dy <= radius * radius) {
            const x = tileX + dx;
            const y = tileY + dy;
            if (x >= 0 && x < width && y >= 0 && y < height) {
              explored[y * width + x] = 1;
            }
          }
        }
      }
    },
    isExplored(x, y) {
      if (x < 0 || x >= width || y < 0 || y >= height) return false;
      return explored[y * width + x] === 1;
    }
  };
})();

