/**
 * Chronicles of Aethelgard - Trade Caravan Regional Market & Ambush Simulation
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Kingdom = window.Aethelgard.Kingdom || {};
window.Aethelgard.Kingdom.TradeEvents = (function () {
  const routes = [
    { id: "route_oakhaven_drakon", name: "Drakon Mountain Pass", risk: 0.35, bonusProfit: 1.8 },
    { id: "route_sunken_coast", name: "Sunken Coastline Highway", risk: 0.15, bonusProfit: 1.25 },
    { id: "route_golden_plains", name: "Royal Golden Plains Way", risk: 0.05, bonusProfit: 1.1 }
  ];

  return {
    getRoutes() { return routes; },
    simulateDispatchedCaravan(routeId) {
      const route = routes.find(r => r.id === routeId) || routes[0];
      const isAmbushed = Math.random() < route.risk;
      
      if (isAmbushed) {
        if (window.Aethelgard.HUD) window.Aethelgard.HUD.showToast(`⚔️ Caravan on ${route.name} ambushed by bandits!`);
        return { success: false, profit: 0, ambushed: true };
      } else {
        const profit = Math.floor(120 * route.bonusProfit);
        if (window.Aethelgard.HUD) window.Aethelgard.HUD.showToast(`💰 Caravan returned safely! Yield: +${profit} Gold`);
        return { success: true, profit, ambushed: false };
      }
    }
  };
})();
