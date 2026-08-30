/**
 * Tactical Combat Mechanics and Damage Calculations
 * Calculates armor penetration, critical strikes, and active shield deflections.
 */

class TacticalMechanics {
  constructor() {
    this.baseCritMultiplier = 1.75;
  }

  calculateDamage(attacker, defender) {
    const rawDamage = attacker.attack || 10;
    const defense = defender.defense || 0;
    const isCrit = Math.random() < (attacker.critChance || 0.15);
    const multiplier = isCrit ? this.baseCritMultiplier : 1.0;

    const netDamage = Math.max(1, Math.round((rawDamage * multiplier) - (defense * 0.5)));
    return {
      damage: netDamage,
      isCrit,
      blocked: defense > rawDamage
    };
  }
}

module.exports = new TacticalMechanics();
