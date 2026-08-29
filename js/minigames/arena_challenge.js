/**
 * Chronicles of Aethelgard - Arena of Champions Survival Mode
 */
window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Minigames = window.Aethelgard.Minigames || {};
window.Aethelgard.Minigames.Arena = {
  startWave(waveNum = 1) {
    const m = window.Aethelgard.Data.Monsters || [];
    window.Aethelgard.Combat.CombatEngine.startEncounter([m[waveNum % m.length]]);
  }
};
