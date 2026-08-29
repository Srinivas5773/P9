/**
 * Chronicles of Aethelgard - Modal & Screen Manager
 */
window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.UI = window.Aethelgard.UI || {};
window.Aethelgard.UI.ModalManager = (function () {
  return {
    openModal(modalId) {
      this.closeAll();
      const el = document.getElementById(modalId);
      if (el) el.classList.add("active");
      if (window.Aethelgard.Audio && window.Aethelgard.Audio.SFX) window.Aethelgard.Audio.SFX.uiClick();
    },
    closeModal(modalId) {
      const el = document.getElementById(modalId);
      if (el) el.classList.remove("active");
    },
    closeAll() {
      document.querySelectorAll(".game-modal.active").forEach(m => m.classList.remove("active"));
    }
  };
})();
