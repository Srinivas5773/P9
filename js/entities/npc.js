/**
 * Chronicles of Aethelgard - NPC Class
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Entities = window.Aethelgard.Entities || {};
window.Aethelgard.Entities.NPC = class NPC extends window.Aethelgard.Entities.Entity {
  constructor(id, name, x, y, dialogueId) {
    super(id, name, x, y);
    this.dialogueId = dialogueId;
  }
  interact() {
    window.Aethelgard.EventBus.emit("OPEN_DIALOGUE", { dialogueId: this.dialogueId });
  }
};

