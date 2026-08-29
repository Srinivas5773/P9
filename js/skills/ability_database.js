/**
 * Chronicles of Aethelgard - Runtime Ability Resolver & Cooldown Tracker
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Skills = window.Aethelgard.Skills || {};
window.Aethelgard.Skills.AbilityDatabase = (function () {
  const cooldowns = new Map();

  return {
    isOnCooldown(spellId) {
      const expires = cooldowns.get(spellId) || 0;
      return Date.now() < expires;
    },
    getRemainingCooldown(spellId) {
      const expires = cooldowns.get(spellId) || 0;
      return Math.max(0, (expires - Date.now()) / 1000);
    },
    triggerCooldown(spellId, seconds) {
      cooldowns.set(spellId, Date.now() + seconds * 1000);
    },
    getSpell(spellId) {
      return window.Aethelgard.Data.Spells[spellId] || null;
    }
  };
})();

