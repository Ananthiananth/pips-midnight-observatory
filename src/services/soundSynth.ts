class SoundSynthService {
  private ctx: AudioContext | null = null;
  private ambientOscs: OscillatorNode[] = [];
  private ambientGain: GainNode | null = null;
  private isAmbientPlaying = false;

  private getAudioContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public playStarTwinkle() {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      const freqs = [1046.5, 1318.5, 1567.98, 2093.0];
      const freq = freqs[Math.floor(Math.random() * freqs.length)];

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, ctx.currentTime + 0.4);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.85);
    } catch {
      // Audio autoplay policy fallback
    }
  }

  public playBellChime() {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(261.63, ctx.currentTime + 1.2);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.5);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 1.55);
    } catch {}
  }

  public playPipGreeting() {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      [440, 659.25, 880].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);
        gain.gain.setValueAtTime(0.06, now + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.35);
      });
    } catch {}
  }

  public toggleObservatoryAmbience(): boolean {
    if (this.isAmbientPlaying) {
      this.stopObservatoryAmbience();
      return false;
    } else {
      this.startObservatoryAmbience();
      return true;
    }
  }

  public startObservatoryAmbience() {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      this.stopObservatoryAmbience();

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 2);
      masterGain.connect(ctx.destination);
      this.ambientGain = masterGain;

      // Generative celestial chords (E minor 9 / C major 7 dreamy interval)
      const baseFreqs = [130.81, 164.81, 196.00, 246.94, 293.66, 329.63];
      this.ambientOscs = baseFreqs.map((f, i) => {
        const osc = ctx.createOscillator();
        const pan = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
        const subGain = ctx.createGain();

        osc.type = i % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(f, ctx.currentTime);

        // subtle frequency wobble for breathing feel
        const lfo = ctx.createOscillator();
        lfo.frequency.setValueAtTime(0.1 + i * 0.04, ctx.currentTime);
        const lfoGain = ctx.createGain();
        lfoGain.gain.setValueAtTime(1.5, ctx.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);
        lfo.start();

        subGain.gain.setValueAtTime(0.12 / baseFreqs.length, ctx.currentTime);

        if (pan) {
          pan.pan.setValueAtTime((i % 2 === 0 ? -1 : 1) * 0.3, ctx.currentTime);
          osc.connect(subGain);
          subGain.connect(pan);
          pan.connect(masterGain);
        } else {
          osc.connect(subGain);
          subGain.connect(masterGain);
        }

        osc.start();
        return osc;
      });

      this.isAmbientPlaying = true;
    } catch {
      this.isAmbientPlaying = false;
    }
  }

  public stopObservatoryAmbience() {
    if (this.ambientGain && this.ctx) {
      try {
        this.ambientGain.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 1);
        setTimeout(() => {
          this.ambientOscs.forEach(osc => {
            try { osc.stop(); osc.disconnect(); } catch {}
          });
          this.ambientOscs = [];
        }, 1100);
      } catch {}
    }
    this.isAmbientPlaying = false;
  }

  public getIsAmbientPlaying(): boolean {
    return this.isAmbientPlaying;
  }

  public createVideoAudioTrack(durationSec: number = 60): MediaStreamAudioDestinationNode | null {
    const ctx = this.getAudioContext();
    if (!ctx) return null;

    const dest = ctx.createMediaStreamDestination();
    const master = ctx.createGain();
    master.gain.setValueAtTime(0.08, ctx.currentTime);
    master.connect(dest);

    // Create celestial pentatonic arpeggio sequence for the video duration
    const pentatonic = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25];
    const step = 2.5; // seconds per chord change
    const totalSteps = Math.ceil(durationSec / step);

    for (let i = 0; i < totalSteps; i++) {
      const time = ctx.currentTime + i * step;
      const noteCount = 3;
      for (let n = 0; n < noteCount; n++) {
        const osc = ctx.createOscillator();
        const noteGain = ctx.createGain();
        const freq = pentatonic[(i + n * 2) % pentatonic.length];

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, time + n * 0.3);

        noteGain.gain.setValueAtTime(0.001, time + n * 0.3);
        noteGain.gain.exponentialRampToValueAtTime(0.05, time + n * 0.3 + 0.1);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, time + n * 0.3 + 2.4);

        osc.connect(noteGain);
        noteGain.connect(master);

        osc.start(time + n * 0.3);
        osc.stop(time + n * 0.3 + 2.5);
      }
    }

    return dest;
  }
}

export const soundSynth = new SoundSynthService();
