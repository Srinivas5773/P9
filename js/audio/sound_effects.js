/**
 * Chronicles of Aethelgard - Sound Effects Catalog
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Audio = window.Aethelgard.Audio || {};
window.Aethelgard.Audio.SFX = (function () {
  const Synth = () => window.Aethelgard.Audio.Synth;

  return {
    swordSlash() {
      Synth().playNoise(0.12, 0.3);
      Synth().playTone(180, "sawtooth", 0.15, 0.01, 0.08, 0.2);
    },
    magicCast() {
      Synth().playTone(440, "sine", 0.35, 0.05, 0.2, 0.25);
      Synth().playTone(880, "triangle", 0.35, 0.08, 0.2, 0.2);
    },
    fireballImpact() {
      Synth().playNoise(0.35, 0.5);
      Synth().playTone(90, "sawtooth", 0.4, 0.02, 0.3, 0.4);
    },
    holyHeal() {
      Synth().playTone(523.25, "sine", 0.4, 0.05, 0.2, 0.2); // C5
      setTimeout(() => Synth().playTone(659.25, "sine", 0.4, 0.05, 0.2, 0.2), 80); // E5
      setTimeout(() => Synth().playTone(783.99, "sine", 0.5, 0.05, 0.3, 0.2), 160); // G5
    },
    goldPickup() {
      Synth().playTone(987.77, "sine", 0.15, 0.01, 0.1, 0.15); // B5
      setTimeout(() => Synth().playTone(1318.51, "sine", 0.2, 0.01, 0.15, 0.2), 60); // E6
    },
    uiClick() {
      Synth().playTone(600, "square", 0.04, 0.005, 0.02, 0.08);
    },
    levelUp() {
      const notes = [440, 554.37, 659.25, 880];
      notes.forEach((freq, idx) => {
        setTimeout(() => Synth().playTone(freq, "triangle", 0.35, 0.02, 0.2, 0.25), idx * 90);
      });
    }
  };
})();

