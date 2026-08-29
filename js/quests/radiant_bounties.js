/**
 * Chronicles of Aethelgard - Radiant Bounty Generator
 */
window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Quests = window.Aethelgard.Quests || {};
window.Aethelgard.Quests.RadiantBounties = {
  generateBounty(level = 1) {
    return {
      id: `bounty_${Date.now()}`,
      title: `Bounty: Threat in the Highlands`,
      description: `Slay hostile creatures threatening the local trade passes.`,
      rewardGold: level * 80,
      rewardXp: level * 150
    };
  }
};
