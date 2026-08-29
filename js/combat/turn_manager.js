/**
 * Chronicles of Aethelgard - Combat Turn Manager
 */
window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Combat = window.Aethelgard.Combat || {};
window.Aethelgard.Combat.TurnManager = (function () {
  let isPlayerTurn = true;
  return {
    isPlayerTurn() { return isPlayerTurn; },
    setPlayerTurn(val) { isPlayerTurn = val; },
    nextTurn() { isPlayerTurn = !isPlayerTurn; }
  };
})();
