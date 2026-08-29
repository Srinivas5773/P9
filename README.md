# Chronicles of Aethelgard: Realm of the Forgotten Kings

An expansive 2D dark-fantasy tactical RPG and kingdom simulation game built purely using modern web technologies (**HTML5**, **CSS3**, and **Vanilla JavaScript**). Contains **56,000+ lines of code** with zero external runtime dependencies, no API keys, and no `.env` files.

---

## 🌟 Features

- **Procedural World & Dungeon Generation**: Perlin Simplex noise continent generation with 6 distinct biomes, BSP dungeon rooms, and dynamic Fog of War.
- **Web Audio API Sound Engine**: Custom chiptune & orchestral synthesizer with 4-track sequencer and 60+ procedural SFX.
- **Tactical Combat System**: Grid-based initiative combat, 12 distinct hero classes, damage mitigation equations, elemental status ailments, and multi-phase boss encounters.
- **Settlement & Kingdom Management**: Build and upgrade 25+ structures, manage daily resource cycles (Timber, Stone, Iron, Gold, Soul Shards), assign workers, and defend against beast sieges.
- **Crafting & Alchemy Lab**: Blacksmithing forge, rune enchanting, gem cutting, and interactive cauldron brewing minigames.
- **Tavern Mini-Games**: 3-Row tactical card battle game (*Aethelgard Duel*), precision fishing simulator, lockpicking cylinder physics, and celestial constellation puzzles.

---

## 📦 Dependencies

- **Runtime**: Node.js 18+ (optional for HTTP server; game also runs standalone in browser)
- **Production Dependencies**:
  - `express` (^4.21.2) - HTTP routing & static asset server
  - `mime-types` (^2.1.35) - Content type header resolver
  - `ws` (^8.18.0) - Real-time WebSocket layer
- **Development Dependencies**:
  - `jest` (^29.7.0) - Test runner suite
  - `c8` (^10.1.3) - Code coverage reporter

---

## 🚀 Installation

Ensure you have [Node.js](https://nodejs.org/) installed (version 18 or higher recommended).

```bash
# Clone the repository
git clone https://github.com/Srinivas5773/P9.git
cd P9

# Install dependencies and generate package lock
npm install
```

---

## 🔨 Build

Validate project assets, verify directory integrity, and check JavaScript syntax:

```bash
# Run build validation
npm run build
```

---

## 🎮 Run

### Option 1: Run via Node.js Server (Recommended)
```bash
# Start the local server
npm start
```
Then open your browser and visit: `http://localhost:3000`

### Option 2: Run Client-Side Directly
Double-click and open `index.html` directly in Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari.

---

## 🧪 Testing

The repository includes a comprehensive unit testing suite verifying math calculations, combat damage mitigation formulas, save/load serialization, and world generation:

```bash
# Run all unit tests
npm test
```

---

## 🐳 Docker Deployment

You can build and deploy the containerized game using Docker:

```bash
# Build the Docker image
docker build -t chronicles-of-aethelgard .

# Run the container on port 3000
docker run -p 3000:3000 chronicles-of-aethelgard
```

Visit `http://localhost:3000` in your web browser.

---

## 📖 Usage & Keybindings

- **`[W] [A] [S] [D]`** / **`[Arrow Keys]`** : Move player across overworld and dungeons
- **`[C]`** : Character Attributes & Progression Sheet
- **`[I]`** : Inventory & 60-slot Equipment Paperdoll
- **`[K]`** : 12-Class Ascension Skill Trees
- **`[J]`** : Quest Journal & Active Objectives Tracker
- **`[U]`** : Kingdom Settlement Management & Town Grid
- **`[O]`** : Royal Forge & Workshop (Crafting)
- **`[L]`** : Hermetic Alchemy Laboratory
- **`[B]`** : Bestiary Compendium & Creature Lore
- **`[Y]`** : Achievements & Trophies
- **`[Esc]`** : System Options & Chronicle Save/Export

---

## 🏛️ Project Architecture

```
chronicles_of_aethelgard/
├── index.html                   # Main viewport, canvas layers, modal overlays
├── server.js                    # Built-in HTTP and WebSocket game server
├── build.js                     # Asset verification & syntax linting script
├── package.json                 # Project manifest, scripts & dependencies
├── package-lock.json            # Deterministic dependency lockfile
├── Dockerfile                   # Multi-stage production container spec
├── Makefile                     # Standard task automation
├── README.md                    # Installation, build, run & usage guide
├── css/                         # 8 Theme & Component stylesheets
├── js/
│   ├── app.js                   # Application bootstrap & lifecycle router
│   ├── core/                    # Math, EventBus, SaveSystem, Engine
│   ├── audio/                   # Web Audio synth, sound FX, sequencer
│   ├── render/                  # Canvas 2D engine, vector sprites, particles
│   ├── world/                   # Procedural continent & BSP dungeon generator
│   ├── data/                    # Databases (monsters, spells, items, quests, lore)
│   ├── skills/                  # Skill trees & ability resolver
│   ├── items/                   # Loot generator, equipment paperdoll, crafting
│   ├── entities/                # Player, NPC, Monster, Boss classes, AI
│   ├── combat/                  # Turn-based tactical battle engine
│   ├── quests/                  # Story campaign, bounties, dialogue trees
│   ├── kingdom/                 # Town building, economy, worker allocation
│   ├── minigames/               # Cards, Fishing, Lockpicking, Arena
│   └── ui/                      # HUD controller, modal managers
└── tests/                       # Automated unit tests & test runner
```
