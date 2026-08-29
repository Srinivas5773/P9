/**
 * Chronicles of Aethelgard - Spell Animation & Particle Resolver
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Skills = window.Aethelgard.Skills || {};
window.Aethelgard.Skills.SpellEffects = (function () {
  return {
    trigger(spellId, caster, target) {
      const spell = window.Aethelgard.Data.Spells[spellId];
      if (!spell) return;
      
      const color = spell.particleColor || "#ffd700";
      const fxType = spell.effectType || "flame_blast";
      
      if (window.Aethelgard.Particles && target) {
        window.Aethelgard.Particles.spawn(target.x || 640, target.y || 360, 25, color, 4, 4, 0.6);
      }
      
      if (window.Aethelgard.Audio && window.Aethelgard.Audio.SFX) {
        if (spell.school === "pyromancy") window.Aethelgard.Audio.SFX.fireballImpact();
        else if (spell.school === "holy") window.Aethelgard.Audio.SFX.holyHeal();
        else window.Aethelgard.Audio.SFX.magicCast();
      }
    }
  };
})();

