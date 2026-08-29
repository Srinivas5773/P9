/**
 * Chronicles of Aethelgard - Master Quest Objective Tracking Engine
 */
window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Quests = window.Aethelgard.Quests || {};
window.Aethelgard.Quests.QuestEngine = (function () {
  const activeQuests = new Map();
  const completedQuests = new Set();

  return {
    acceptQuest(questId) {
      const q = (window.Aethelgard.Data.Quests || []).find(item => item.id === questId);
      if (!q) return;
      activeQuests.set(questId, { ...q, progress: 0 });
      if (window.Aethelgard.HUD) window.Aethelgard.HUD.showToast(`Quest Accepted: ${q.title} 📜`);
    },
    completeQuest(questId) {
      if (!activeQuests.has(questId)) return;
      const q = activeQuests.get(questId);
      activeQuests.delete(questId);
      completedQuests.add(questId);
      if (window.Aethelgard.Player) {
        window.Aethelgard.Player.addGold(q.rewardGold || 50);
      }
      if (window.Aethelgard.HUD) window.Aethelgard.HUD.showToast(`Quest Completed: ${q.title} 🏆`);
    },
    getActive() { return Array.from(activeQuests.values()); },
    serialize() {
      return { active: Array.from(activeQuests.keys()), completed: Array.from(completedQuests) };
    },
    deserialize(data) {
      if (!data) return;
      activeQuests.clear();
      completedQuests.clear();
      (data.active || []).forEach(id => this.acceptQuest(id));
      (data.completed || []).forEach(id => completedQuests.add(id));
    }
  };
})();
