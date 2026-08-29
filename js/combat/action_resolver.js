/**
 * Chronicles of Aethelgard - Combat Action Resolver
 */
window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Combat = window.Aethelgard.Combat || {};
window.Aethelgard.Combat.ActionResolver = {
  resolveAttack(attacker, defender) {
    return window.Aethelgard.Combat.DamageCalculator.calculate(attacker, defender, 10, false);
  }
};
