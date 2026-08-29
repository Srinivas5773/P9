/**
 * Chronicles of Aethelgard - Main Campaign Story Controller
 */
window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Quests = window.Aethelgard.Quests || {};
window.Aethelgard.Quests.MainStoryQuests = {
  getCurrentChapter() { return 1; },
  getMainQuests() {
    return (window.Aethelgard.Data.Quests || []).filter(q => q.category === "main");
  }
};
