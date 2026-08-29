/**
 * Chronicles of Aethelgard - Damage & Mitigation Formulas
 */
window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Combat = window.Aethelgard.Combat || {};
window.Aethelgard.Combat.DamageCalculator = {
  calculate(attacker, defender, power = 10, isSpell = false) {
    const base = isSpell ? (attacker.magicPower || 10) + power : (attacker.attack || 15) + power;
    const defense = isSpell ? (defender.magicResist || 0) : (defender.armor || 5);
    const mitigation = 100 / (100 + defense);
    const isCrit = Math.random() < (attacker.critChance || 0.05);
    const rawDamage = base * mitigation * (isCrit ? 1.75 : 1.0);
    return { damage: Math.max(1, Math.floor(rawDamage)), isCrit };
  }
};
