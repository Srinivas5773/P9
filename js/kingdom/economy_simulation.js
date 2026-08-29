/**
 * Chronicles of Aethelgard - Daily Kingdom Resource Economy Simulation
 */
window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Kingdom = window.Aethelgard.Kingdom || {};
window.Aethelgard.Kingdom.Economy = (function () {
  let timber = 150, stone = 80, iron = 40, goldTreasury = 250;
  return {
    produceDailyYield() {
      timber += 25;
      stone += 20;
      iron += 15;
      goldTreasury += 65;
      console.log("[KingdomEconomy] Daily resource yield collected.");
    },
    getResources() { return { timber, stone, iron, goldTreasury }; }
  };
})();
