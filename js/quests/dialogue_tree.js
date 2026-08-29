/**
 * Chronicles of Aethelgard - Dialogue Branching Engine
 */
window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Quests = window.Aethelgard.Quests || {};
window.Aethelgard.Quests.DialogueTree = {
  getNode(dialogueId) {
    return window.Aethelgard.Data.Dialogues[dialogueId] || null;
  }
};
