/**
 * Chronicles of Aethelgard - Multi-Voice Music Tracker Sequencer
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Audio = window.Aethelgard.Audio || {};
window.Aethelgard.Audio.MusicSequencer = (function () {
  let currentTrack = null;
  let stepIndex = 0;
  let timerId = null;
  let isPlaying = false;

  function playStep() {
    if (!currentTrack || !isPlaying) return;
    const Synth = window.Aethelgard.Audio.Synth;
    const stepDuration = 60 / currentTrack.tempo / 2;
    
    const leadFreq = currentTrack.lead[stepIndex % currentTrack.lead.length];
    const bassFreq = currentTrack.bass[stepIndex % currentTrack.bass.length];
    
    if (leadFreq > 0) Synth.playTone(leadFreq, "triangle", stepDuration * 0.9, 0.02, 0.1, 0.15);
    if (bassFreq > 0) Synth.playTone(bassFreq, "sawtooth", stepDuration * 0.9, 0.03, 0.15, 0.12);
    
    stepIndex++;
    timerId = setTimeout(playStep, stepDuration * 1000);
  }

  return {
    playTrack(trackName) {
      const track = window.Aethelgard.Audio.Tracks[trackName];
      if (!track) return;
      this.stop();
      currentTrack = track;
      stepIndex = 0;
      isPlaying = true;
      playStep();
      console.log(`[MusicSequencer] Playing score: ${trackName}`);
    },
    stop() {
      isPlaying = false;
      if (timerId) clearTimeout(timerId);
    }
  };
})();

