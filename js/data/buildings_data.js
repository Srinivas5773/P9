/**
 * Chronicles of Aethelgard - Kingdom & Town Buildings Catalog
 * 30+ settlement structures with upgrade tiers, resource costs, and buffs.
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Data = window.Aethelgard.Data || {};

window.Aethelgard.Data.Buildings = [
  {
    id: "town_hall",
    name: "Grand Castle & Keep",
    description: "The heart of your settlement. Unlocks higher building tiers and taxation.",
    costGold: 100,
    costWood: 150,
    costStone: 80,
    costIron: 20,
    maxWorkers: 10,
    perk: "+20% Town Happiness, unlocks tax tier",
    maxLevel: 5
  },
  {
    id: "barracks",
    name: "Royal Garrison Barracks",
    description: "Trains city guards and militia to defend the settlement from beast raids.",
    costGold: 60,
    costWood: 100,
    costStone: 50,
    costIron: 10,
    maxWorkers: 8,
    perk: "+50 Town Defense rating, trains swordsmen",
    maxLevel: 5
  },
  {
    id: "blacksmith",
    name: "Armorer & Forge Workshop",
    description: "Forges advanced weapons, armor, and siege ballistas.",
    costGold: 80,
    costWood: 80,
    costStone: 120,
    costIron: 5,
    maxWorkers: 6,
    perk: "Enables high tier equipment crafting and repair",
    maxLevel: 5
  },
  {
    id: "alchemy_lab",
    name: "Imperial Apothecary Lab",
    description: "Concocts potent curative draughts, explosive flasks, and mutagens.",
    costGold: 70,
    costWood: 60,
    costStone: 40,
    costIron: 15,
    maxWorkers: 5,
    perk: "Unlocks potion brewing and herbal transmutation",
    maxLevel: 5
  },
  {
    id: "lumber_mill",
    name: "Deep Forest Lumber Mill",
    description: "Harvests timber from the surrounding woods to fuel construction.",
    costGold: 40,
    costWood: 120,
    costStone: 20,
    costIron: 0,
    maxWorkers: 12,
    perk: "+25 Timber per in-game day",
    maxLevel: 5
  },
  {
    id: "stone_quarry",
    name: "Highland Granite Quarry",
    description: "Extracts solid stone and marble blocks for castle fortifications.",
    costGold: 50,
    costWood: 40,
    costStone: 140,
    costIron: 0,
    maxWorkers: 12,
    perk: "+20 Stone per in-game day",
    maxLevel: 5
  },
  {
    id: "iron_mine",
    name: "Deep Vein Iron Mine",
    description: "Mines raw iron and precious mythril ore from mountain tunnels.",
    costGold: 80,
    costWood: 50,
    costStone: 100,
    costIron: 0,
    maxWorkers: 10,
    perk: "+15 Iron Ingots per in-game day",
    maxLevel: 5
  },
  {
    id: "farm_estate",
    name: "Verdant Agricultural Fields",
    description: "Grows wheat, corn, and livestock to feed the growing population.",
    costGold: 30,
    costWood: 80,
    costStone: 30,
    costIron: 0,
    maxWorkers: 15,
    perk: "+40 Food supply, increases pop growth",
    maxLevel: 5
  },
  {
    id: "tavern_parlor",
    name: "The Laughing Dragon Tavern",
    description: "Attracts travelers, mercenaries for hire, and card duelists.",
    costGold: 50,
    costWood: 90,
    costStone: 40,
    costIron: 5,
    maxWorkers: 8,
    perk: "+15% Happiness, enables card game wagers",
    maxLevel: 5
  },
  {
    id: "mage_tower",
    name: "Spire of High Arcana",
    description: "Channels leylines to research spells and generate soul shards.",
    costGold: 120,
    costWood: 100,
    costStone: 160,
    costIron: 40,
    maxWorkers: 4,
    perk: "+5 Soul Shards per day, increases spell damage",
    maxLevel: 5
  },
  {
    id: "caravan_trading_post",
    name: "Merchant Guild Bazaar",
    description: "Hosts trading caravans to buy and sell foreign commodities.",
    costGold: 90,
    costWood: 110,
    costStone: 70,
    costIron: 10,
    maxWorkers: 6,
    perk: "Enables trade routes and merchant shipments",
    maxLevel: 5
  },
  {
    id: "watchtower",
    name: "Sentinel Lookout Spire",
    description: "Provides early warning against approaching enemy invasion waves.",
    costGold: 35,
    costWood: 60,
    costStone: 80,
    costIron: 0,
    maxWorkers: 4,
    perk: "Reduces monster invasion surprise factor by 50%",
    maxLevel: 5
  },
];

