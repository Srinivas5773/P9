/**
 * Chronicles of Aethelgard - Web Audio API Procedural Synthesizer
 * Complete chiptune & orchestral audio synthesis (oscillators, filters, noise, envelopes).
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Audio = window.Aethelgard.Audio || {};
window.Aethelgard.Audio.Synth = (function () {
  let ctx = null;
  let masterGain = null;
  let musicGain = null;
  let sfxGain = null;

  function initAudio() {
    if (ctx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    ctx = new AudioContext();
    masterGain = ctx.createGain();
    musicGain = ctx.createGain();
    sfxGain = ctx.createGain();
    
    masterGain.gain.setValueAtTime(0.8, ctx.currentTime);
    musicGain.gain.setValueAtTime(0.7, ctx.currentTime);
    sfxGain.gain.setValueAtTime(0.85, ctx.currentTime);
    
    musicGain.connect(masterGain);
    sfxGain.connect(masterGain);
    masterGain.connect(ctx.destination);
  }

  return {
    init: initAudio,
    getContext() {
      if (!ctx) initAudio();
      if (ctx && ctx.state === "suspended") ctx.resume();
      return ctx;
    },
    setMasterVolume(val) {
      if (masterGain && ctx) masterGain.gain.setValueAtTime(val, ctx.currentTime);
    },
    setMusicVolume(val) {
      if (musicGain && ctx) musicGain.gain.setValueAtTime(val, ctx.currentTime);
    },
    setSFXVolume(val) {
      if (sfxGain && ctx) sfxGain.gain.setValueAtTime(val, ctx.currentTime);
    },
    playTone(freq, type = "sine", duration = 0.3, attack = 0.02, decay = 0.1, gainVal = 0.3) {
      const audioCtx = this.getContext();
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(gainVal, audioCtx.currentTime + attack);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(sfxGain);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    },
    playNoise(duration = 0.2, gainVal = 0.25) {
      const audioCtx = this.getContext();
      if (!audioCtx) return;
      const bufferSize = audioCtx.sampleRate * duration;
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
      const noise = audioCtx.createBufferSource();
      noise.buffer = buffer;
      const filter = audioCtx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.value = 1000;
      const gain = audioCtx.createGain();
      gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(sfxGain);
      noise.start();
    }
  };
})();

