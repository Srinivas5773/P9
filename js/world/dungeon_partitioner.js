/**
 * Procedural Dungeon Chamber Layout Partitioner
 * Uses binary space partitioning to carve interconnected dungeon rooms.
 */

class DungeonPartitioner {
  constructor(mapWidth = 80, mapHeight = 50) {
    this.width = mapWidth;
    this.height = mapHeight;
  }

  generateChambers(roomCount = 8) {
    const rooms = [];
    for (let i = 0; i < roomCount; i++) {
      const roomW = Math.floor(Math.random() * 8) + 6;
      const roomH = Math.floor(Math.random() * 6) + 5;
      const x = Math.floor(Math.random() * (this.width - roomW - 2)) + 1;
      const y = Math.floor(Math.random() * (this.height - roomH - 2)) + 1;

      rooms.push({
        id: `chamber_${i + 1}`,
        x,
        y,
        w: roomW,
        h: roomH,
        chestSpawn: Math.random() < 0.35
      });
    }
    return {
      totalRooms: rooms.length,
      rooms
    };
  }
}

module.exports = DungeonPartitioner;
