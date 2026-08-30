/**
 * Dynamic Ambient Weather Synthesizer
 * Generates noise profiles for atmospheric rain, howling wind, and lightning cracks.
 */

class AmbientWeatherSynth {
  constructor() {
    this.weatherProfiles = {
      clear: { noiseGain: 0.05, filterFreq: 8000, thunderChance: 0.0 },
      rain: { noiseGain: 0.45, filterFreq: 2400, thunderChance: 0.05 },
      blizzard: { noiseGain: 0.75, filterFreq: 1200, thunderChance: 0.0 },
      thunderstorm: { noiseGain: 0.85, filterFreq: 3000, thunderChance: 0.35 }
    };
  }

  getWeatherAudioProfile(weatherState) {
    return this.weatherProfiles[weatherState] || this.weatherProfiles.clear;
  }
}

module.exports = new AmbientWeatherSynth();
