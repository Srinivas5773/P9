/**
 * Chronicles of Aethelgard - Procedural Continent & Biome World Generator
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.World = window.Aethelgard.World || {};
window.Aethelgard.World.WorldGenerator = (function () {
  let currentMap = null;

  return {
    generateOverworld(width = 100, height = 100, seed = 42) {
      const noise = new window.Aethelgard.MathUtils.PerlinNoise(seed);
      const tiles = new Array(width * height);
      
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const elevation = noise.octaveNoise(x * 0.04, y * 0.04, 4, 0.5);
          let tile = "grass";
          if (elevation < 0.3) tile = "water";
          else if (elevation < 0.38) tile = "sand";
          else if (elevation < 0.65) tile = "grass";
          else if (elevation < 0.8) tile = "dirt";
          else if (elevation < 0.9) tile = "stone";
          else tile = "snow";
          
          tiles[y * width + x] = tile;
        }
      }
      
      currentMap = { width, height, tiles, spawn: { x: 50, y: 50 } };
      return currentMap;
    },
    getCurrentMap() { return currentMap; }
  };
})();

