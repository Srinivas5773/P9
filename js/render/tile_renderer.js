/**
 * Chronicles of Aethelgard - Tilemap Rendering Engine
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Render = window.Aethelgard.Render || {};
window.Aethelgard.Render.TileRenderer = (function () {
  const TILE_SIZE = 32;

  const TILE_COLORS = {
    grass: "#2e7d32",
    dirt: "#795548",
    stone: "#607d8b",
    water: "#1565c0",
    sand: "#d4af37",
    snow: "#e0e7ff",
    dungeon_floor: "#263238",
    dungeon_wall: "#10141a"
  };

  return {
    TILE_SIZE,
    renderMap(ctx, mapData, cameraX, cameraY, viewWidth, viewHeight) {
      if (!mapData || !mapData.tiles) return;
      
      const startCol = Math.max(0, Math.floor(cameraX / TILE_SIZE));
      const endCol = Math.min(mapData.width, Math.ceil((cameraX + viewWidth) / TILE_SIZE));
      const startRow = Math.max(0, Math.floor(cameraY / TILE_SIZE));
      const endRow = Math.min(mapData.height, Math.ceil((cameraY + viewHeight) / TILE_SIZE));
      
      for (let r = startRow; r < endRow; r++) {
        for (let c = startCol; c < endCol; c++) {
          const tileType = mapData.tiles[r * mapData.width + c] || "grass";
          const px = c * TILE_SIZE - cameraX;
          const py = r * TILE_SIZE - cameraY;
          
          ctx.fillStyle = TILE_COLORS[tileType] || "#2e7d32";
          ctx.fillRect(px, py, TILE_SIZE, TILE_SIZE);
          
          // Subtle grid outline
          ctx.strokeStyle = "rgba(0, 0, 0, 0.08)";
          ctx.strokeRect(px, py, TILE_SIZE, TILE_SIZE);
        }
      }
    }
  };
})();

