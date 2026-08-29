/**
 * Chronicles of Aethelgard - Tile Data Definitions & Biome Palettes
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.World = window.Aethelgard.World || {};
window.Aethelgard.World.TileData = {
  grass: { id: "grass", solid: false, movementCost: 1.0, description: "Lush green meadow." },
  dirt: { id: "dirt", solid: false, movementCost: 1.0, description: "Packed earth road." },
  stone: { id: "stone", solid: true, movementCost: Infinity, description: "Impassable granite rock." },
  water: { id: "water", solid: true, movementCost: Infinity, description: "Deep cold water." },
  sand: { id: "sand", solid: false, movementCost: 1.2, description: "Golden shore dunes." },
  snow: { id: "snow", solid: false, movementCost: 1.3, description: "Crisp mountain snow." },
  dungeon_floor: { id: "dungeon_floor", solid: false, movementCost: 1.0, description: "Ancient flagstone paving." },
  dungeon_wall: { id: "dungeon_wall", solid: true, movementCost: Infinity, description: "Solid masonry wall." }
};

