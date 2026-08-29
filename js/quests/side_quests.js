/**
 * Chronicles of Aethelgard - Side Quests Registry
 */
window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Quests = window.Aethelgard.Quests || {};
window.Aethelgard.Quests.SideQuests = {
  getAvailable() {
    return (window.Aethelgard.Data.Quests || []).filter(q => q.category === "side");
  }
};
