/**
 * Chronicles of Aethelgard - Procedural BSP Dungeon & Cave Generator
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.World = window.Aethelgard.World || {};
window.Aethelgard.World.DungeonGenerator = (function () {
  return {
    generate(width = 60, height = 60, seed = 999) {
      const tiles = new Array(width * height).fill("dungeon_wall");
      const rooms = [];
      const rng = new window.Aethelgard.MathUtils.SeededRNG(seed);
      
      // Generate 8-12 BSP style rooms
      const roomCount = rng.rangeInt(8, 14);
      for (let i = 0; i < roomCount; i++) {
        const rw = rng.rangeInt(6, 12);
        const rh = rng.rangeInt(6, 12);
        const rx = rng.rangeInt(2, width - rw - 2);
        const ry = rng.rangeInt(2, height - rh - 2);
        
        // Carve room floor
        for (let y = ry; y < ry + rh; y++) {
          for (let x = rx; x < rx + rw; x++) {
            tiles[y * width + x] = "dungeon_floor";
          }
        }
        rooms.push({ x: rx, y: ry, w: rw, h: rh, cx: Math.floor(rx + rw / 2), cy: Math.floor(ry + rh / 2) });
      }
      
      // Connect rooms with corridors
      for (let i = 0; i < rooms.length - 1; i++) {
        const rA = rooms[i];
        const rB = rooms[i + 1];
        
        // Horizontal then Vertical corridor
        let x = rA.cx;
        while (x !== rB.cx) {
          tiles[rA.cy * width + x] = "dungeon_floor";
          x += x < rB.cx ? 1 : -1;
        }
        let y = rA.cy;
        while (y !== rB.cy) {
          tiles[y * width + rB.cx] = "dungeon_floor";
          y += y < rB.cy ? 1 : -1;
        }
      }
      
      return { width, height, tiles, rooms, spawn: rooms[0] ? { x: rooms[0].cx, y: rooms[0].cy } : { x: 5, y: 5 } };
    }
  };
})();

