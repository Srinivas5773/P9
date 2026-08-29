/**
 * Chronicles of Aethelgard - Interactive Ascension Skill Tree Controller
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Skills = window.Aethelgard.Skills || {};
window.Aethelgard.Skills.SkillTree = (function () {
  const unlockedTalents = new Map();

  return {
    allocatePoint(talentId) {
      const current = unlockedTalents.get(talentId) || 0;
      const talent = window.Aethelgard.Skills.PassiveTalents[talentId];
      if (!talent || current >= talent.maxRank) return false;
      
      unlockedTalents.set(talentId, current + 1);
      window.Aethelgard.EventBus.emit("TALENT_ALLOCATED", { talentId, rank: current + 1 });
      return true;
    },
    getTalentRank(talentId) {
      return unlockedTalents.get(talentId) || 0;
    },
    resetTalents() {
      unlockedTalents.clear();
      window.Aethelgard.EventBus.emit("TALENTS_RESET");
    }
  };
})();

