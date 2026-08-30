/**
 * Chronicles of Aethelgard - Weather Ambient Sound Synthesis Engine
 * Synthesizes dynamic rain white-noise, wind gusts, and thunder rolls via Web Audio API.
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Audio = window.Aethelgard.Audio || {};
window.Aethelgard.Audio.WeatherAmbient = (function () {
  let isRaining = false;

  return {
    playRainAmbience() {
      const Synth = window.Aethelgard.Audio.Synth;
      if (!Synth) return;
      isRaining = true;
      Synth.playNoise(1.5, 0.08);
    },
    playThunderStrike() {
      const Synth = window.Aethelgard.Audio.Synth;
      if (!Synth) return;
      Synth.playNoise(0.8, 0.45);
      Synth.playTone(65, "sawtooth", 0.9, 0.05, 0.8, 0.35);
    },
    stopAmbience() {
      isRaining = false;
    }
  };
})();
