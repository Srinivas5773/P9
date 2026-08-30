/**
 * Settlement Happiness and Economic Policy Metrics
 * Balances taxation rates against population happiness and unrest.
 */

class SettlementMetrics {
  constructor() {
    this.baseHappiness = 75;
  }

  evaluateTaxPolicy(taxRatePercent, foodSurplus) {
    let happiness = this.baseHappiness;
    happiness -= taxRatePercent * 1.5;
    if (foodSurplus > 50) happiness += 15;
    else if (foodSurplus < 0) happiness -= 25;

    happiness = Math.max(0, Math.min(100, Math.round(happiness)));
    return {
      happiness,
      unrestRisk: happiness < 40 ? 'HIGH' : (happiness < 60 ? 'MODERATE' : 'LOW'),
      taxRevenueMultiplier: taxRatePercent / 100
    };
  }
}

module.exports = new SettlementMetrics();
