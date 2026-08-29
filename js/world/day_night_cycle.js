/**
 * Chronicles of Aethelgard - In-Game Calendar & Day/Night Celestial Clock
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.DayNight = (function () {
  let totalSeconds = 8 * 3600; // Start at 8:00 AM
  let dayCount = 1;
  const TIME_SCALE = 60; // 1 real second = 1 game minute

  return {
    update(dt) {
      totalSeconds += dt * TIME_SCALE;
      if (totalSeconds >= 86400) {
        totalSeconds -= 86400;
        dayCount++;
        window.Aethelgard.EventBus.emit("NEW_DAY_BEGUN", { day: dayCount });
      }
    },
    getTimeString() {
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const period = hours >= 12 ? "PM" : "AM";
      const displayHours = hours % 12 || 12;
      const padMin = String(minutes).padStart(2, "0");
      return `Day ${dayCount} - ${displayHours}:${padMin} ${period}`;
    },
    getAmbientDarkness() {
      const hour = totalSeconds / 3600;
      if (hour >= 6 && hour < 18) {
        return 0.1; // Daytime
      } else if (hour >= 18 && hour < 21) {
        return 0.1 + ((hour - 18) / 3) * 0.6; // Dusk
      } else if (hour >= 21 || hour < 4) {
        return 0.75; // Midnight Darkness
      } else {
        return 0.75 - ((hour - 4) / 2) * 0.65; // Dawn
      }
    }
  };
})();

