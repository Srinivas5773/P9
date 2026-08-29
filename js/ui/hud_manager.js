/**
 * Chronicles of Aethelgard - HUD & Toast Notification Manager
 */
window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.HUD = (function () {
  return {
    showToast(message) {
      const container = document.getElementById("toast-container");
      if (!container) return;
      const toast = document.createElement("div");
      toast.className = "toast-item";
      toast.textContent = message;
      container.appendChild(toast);
      setTimeout(() => toast.remove(), 3500);
    },
    updateVitals() {
      if (!window.Aethelgard.Player) return;
      const p = window.Aethelgard.Player;
      const hpBar = document.getElementById("hud-health-bar");
      const hpText = document.getElementById("hud-health-text");
      const goldText = document.getElementById("hud-gold-count");
      const clockText = document.getElementById("hud-time-clock");
      
      if (hpBar) hpBar.style.width = `${(p.getHp() / p.getMaxHp()) * 100}%`;
      if (hpText) hpText.textContent = `${p.getHp()} / ${p.getMaxHp()}`;
      if (goldText) goldText.textContent = p.getGold();
      if (clockText && window.Aethelgard.DayNight) clockText.textContent = window.Aethelgard.DayNight.getTimeString();
    }
  };
})();
