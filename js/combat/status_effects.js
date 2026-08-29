/**
 * Chronicles of Aethelgard - Status Afflictions & Buffs
 */
window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Combat = window.Aethelgard.Combat || {};
window.Aethelgard.Combat.StatusEffects = {
  poison: { id: "poison", name: "Poisoned", dotDamage: 12, duration: 4, icon: "🧪" },
  burn: { id: "burn", name: "Burning", dotDamage: 20, duration: 3, icon: "🔥" },
  freeze: { id: "freeze", name: "Frozen", stun: true, duration: 1, icon: "❄️" },
  bless: { id: "bless", name: "Blessed", damageBuff: 0.25, duration: 5, icon: "✨" }
};
