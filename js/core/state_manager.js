/**
 * Chronicles of Aethelgard - State Machine & Scene Router
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.StateManager = (function () {
  const STATES = {
    TITLE: "TITLE",
    CHAR_CREATION: "CHAR_CREATION",
    EXPLORATION: "EXPLORATION",
    DUNGEON: "DUNGEON",
    COMBAT: "COMBAT",
    KINGDOM: "KINGDOM",
    MINIGAME: "MINIGAME",
    PAUSED: "PAUSED"
  };

  let currentState = STATES.TITLE;
  let previousState = null;

  return {
    STATES,
    getState() { return currentState; },
    setState(newState, payload = {}) {
      if (currentState === newState) return;
      previousState = currentState;
      currentState = newState;
      console.log(`[StateManager] Transition: ${previousState} -> ${currentState}`);
      
      // Update DOM classes
      const root = document.getElementById("game-app");
      if (root) {
        root.className = `game-container state-${newState.toLowerCase()}`;
      }
      
      window.Aethelgard.EventBus.emit("STATE_CHANGED", { state: newState, prev: previousState, payload });
    },
    revertState() {
      if (previousState) {
        this.setState(previousState);
      }
    }
  };
})();

