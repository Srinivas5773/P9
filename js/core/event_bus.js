/**
 * Chronicles of Aethelgard - Event Bus Pub/Sub Architecture
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.EventBus = (function () {
  const listeners = new Map();

  return {
    on(event, callback, priority = 0) {
      if (!listeners.has(event)) {
        listeners.set(event, []);
      }
      listeners.get(event).push({ callback, priority });
      listeners.get(event).sort((a, b) => b.priority - a.priority);
    },
    once(event, callback) {
      const wrapper = (...args) => {
        this.off(event, wrapper);
        callback(...args);
      };
      this.on(event, wrapper);
    },
    off(event, callback) {
      if (!listeners.has(event)) return;
      const filtered = listeners.get(event).filter(item => item.callback !== callback);
      listeners.set(event, filtered);
    },
    emit(event, ...args) {
      if (!listeners.has(event)) return;
      const list = [...listeners.get(event)];
      for (const item of list) {
        try {
          item.callback(...args);
        } catch (err) {
          console.error(`[EventBus] Error in listener for event "${event}":`, err);
        }
      }
    },
    clear() {
      listeners.clear();
    }
  };
})();

