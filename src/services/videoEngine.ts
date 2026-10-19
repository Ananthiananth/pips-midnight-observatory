import { DreamIdea } from '../types';

export interface VideoRenderState {
  currentTime: number; // 0 to 60 seconds
  isPlaying: boolean;
  duration: number; // 60 seconds
  currentAct: 1 | 2 | 3 | 4;
  captionText: string;
}

export class DreamVideoRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private dream: DreamIdea;
  private duration = 60; // 60 seconds
  private particles: Array<{
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
    opacity: number;
  }> = [];

  constructor(canvas: HTMLCanvasElement, dream: DreamIdea) {
    this.canvas = canvas;
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Could not get 2D canvas context');
    this.ctx = context;
    this.dream = dream;
    this.initParticles();
  }

  public setDream(dream: DreamIdea) {
    this.dream = dream;
    this.initParticles();
  }

  private initParticles() {
    this.particles = [];
    const count = 45;
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: (Math.random() - 0.5) * 0.6,
        color: i % 2 === 0 ? this.dream.primaryColor : '#ffffff',
        opacity: Math.random() * 0.7 + 0.3
      });
    }
  }

  public render(time: number, customSubtitles?: string) {
    const t = Math.min(Math.max(time, 0), this.duration);
    const { width, height } = this.canvas;
    const ctx = this.ctx;

    // Determine current act (0-15s: Act 1, 15-30s: Act 2, 30-45s: Act 3, 45-60s: Act 4)
    let act: 1 | 2 | 3 | 4 = 1;
    let actCaption = this.dream.captions.act1;
    if (t >= 45) {
      act = 4;
      actCaption = this.dream.captions.act4;
    } else if (t >= 30) {
      act = 3;
      actCaption = this.dream.captions.act3;
    } else if (t >= 15) {
      act = 2;
      actCaption = this.dream.captions.act2;
    }

    const displayCaption = customSubtitles || actCaption;

    ctx.clearRect(0, 0, width, height);

    // 1. Draw Scenery Background based on dream category and sceneType
    this.drawBackground(t, act);

    // 2. Draw Floating Atmosphere & Particles
    this.drawParticles(t);

    // 3. Draw Thematic Scenery & Animated Characters (Specific to Dream Type)
    this.drawThemeSpecificScene(t, act);

    // 4. Draw Dreamy Vignette & Cinematic Overlay
    this.drawCinematicOverlay(t, act);

    // 5. Draw Subtitles and Progress Timeline Banner
    this.drawSubtitles(displayCaption, t, act);
  }

  private drawBackground(t: number, act: number) {
    const { width, height } = this.canvas;
    const ctx = this.ctx;
    const st = this.dream.sceneType;

    const grad = ctx.createLinearGradient(0, 0, 0, height);

    if (st.includes('ocean') || st.includes('dolphin') || st.includes('turtle') || st.includes('mermaid') || st.includes('underwater') || st.includes('coral')) {
      // Underwater Oceanic Gradient
      grad.addColorStop(0, '#042f2e');
      grad.addColorStop(0.4, '#0f766e');
      grad.addColorStop(1, '#083344');
    } else if (st.includes('space') || st.includes('rocket') || st.includes('planet') || st.includes('alien') || st.includes('saturn') || st.includes('meteor')) {
      // Deep Cosmic Nebula Gradient
      grad.addColorStop(0, '#09090b');
      grad.addColorStop(0.5, '#2e1065');
      grad.addColorStop(1, '#0f172a');
    } else if (st.includes('rabbit') || st.includes('puppies') || st.includes('meadow') || st.includes('flowers') || st.includes('cherry')) {
      // Sunset Pastel Meadow Sky
      grad.addColorStop(0, '#312e81');
      grad.addColorStop(0.4, '#831843');
      grad.addColorStop(0.75, '#f43f5e');
      grad.addColorStop(1, '#fdba74');
    } else if (st.includes('cloud') || st.includes('balloon') || st.includes('angel') || st.includes('rainbow') || st.includes('sunrise')) {
      // Golden Twilight Sky
      grad.addColorStop(0, '#1e1b4b');
      grad.addColorStop(0.4, '#6366f1');
      grad.addColorStop(0.8, '#ec4899');
      grad.addColorStop(1, '#fde68a');
    } else {
      // Enchanted Midnight Purple Forest
      grad.addColorStop(0, '#0b0c16');
      grad.addColorStop(0.5, '#1e1b4b');
      grad.addColorStop(1, '#3b0764');
    }

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Celestial Moon or Sun
    const moonX = width * 0.82;
    const moonY = height * 0.22 + Math.sin(t * 0.3) * 6;
    const moonRadius = 46;

    // Moon Glow
    const moonGlow = ctx.createRadialGradient(moonX, moonY, 10, moonX, moonY, moonRadius * 2.5);
    moonGlow.addColorStop(0, 'rgba(254, 240, 138, 0.45)');
    moonGlow.addColorStop(1, 'rgba(254, 240, 138, 0)');
    ctx.fillStyle = moonGlow;
    ctx.beginPath();
    ctx.arc(moonX, moonY, moonRadius * 2.5, 0, Math.PI * 2);
    ctx.fill();

    // Crescent Moon
    ctx.fillStyle = '#fef08a';
    ctx.beginPath();
    ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(moonX + 16, moonY - 10, moonRadius * 0.88, 0, Math.PI * 2);
    ctx.fill();
  }

  private drawParticles(t: number) {
    const { width, height } = this.canvas;
    const ctx = this.ctx;

    this.particles.forEach((p, idx) => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      const twinkle = Math.sin(t * 3 + idx) * 0.35 + 0.65;
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity * twinkle;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1.0;
  }

  private drawThemeSpecificScene(t: number, act: number) {
    const { width, height } = this.canvas;
    const ctx = this.ctx;
    const st = this.dream.sceneType;

    // Route to distinctive renderers so every dream looks unique
    if (st.includes('rabbit')) {
      this.renderRabbitScene(t, act, width, height, ctx);
    } else if (st.includes('puppies')) {
      this.renderPuppyScene(t, act, width, height, ctx);
    } else if (st.includes('dolphin') || st.includes('mermaid') || st.includes('coral') || st.includes('underwater')) {
      this.renderOceanScene(t, act, width, height, ctx);
    } else if (st.includes('unicorn')) {
      this.renderUnicornScene(t, act, width, height, ctx);
    } else if (st.includes('dragon')) {
      this.renderDragonScene(t, act, width, height, ctx);
    } else if (st.includes('butterfly') || st.includes('butterflies')) {
      this.renderButterflyScene(t, act, width, height, ctx);
    } else if (st.includes('space') || st.includes('rocket') || st.includes('saturn') || st.includes('planet') || st.includes('alien')) {
      this.renderSpaceScene(t, act, width, height, ctx);
    } else if (st.includes('cloud') || st.includes('balloon') || st.includes('angel') || st.includes('rainbow')) {
      this.renderSkyCloudScene(t, act, width, height, ctx);
    } else if (st.includes('forest') || st.includes('mushroom') || st.includes('fairy')) {
      this.renderFairyForestScene(t, act, width, height, ctx);
    } else if (st.includes('train')) {
      this.renderDreamTrainScene(t, act, width, height, ctx);
    } else {
      this.renderStarlightSanctuaryScene(t, act, width, height, ctx);
    }
  }

  // 1. RABBITS THEME
  private renderRabbitScene(t: number, act: number, w: number, h: number, ctx: CanvasRenderingContext2D) {
    // Rolling grassy hills
    ctx.fillStyle = '#14532d';
    ctx.beginPath();
    ctx.ellipse(w * 0.3, h * 0.95, w * 0.6, h * 0.35, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#166534';
    ctx.beginPath();
    ctx.ellipse(w * 0.75, h * 0.92, w * 0.55, h * 0.32, 0, 0, Math.PI * 2);
    ctx.fill();

    // Wildflowers
    for (let i = 0; i < 18; i++) {
      const fx = (i * 73 + t * 4) % (w - 40) + 20;
      const fy = h * 0.82 + Math.sin(i * 1.5) * 25;
      ctx.fillStyle = i % 2 === 0 ? '#f472b6' : '#fef08a';
      ctx.beginPath();
      ctx.arc(fx, fy, 4, 0, Math.PI * 2);
      ctx.fill();
    }

    // Hopping Bunnies
    const hopProgress = (t * 2) % (Math.PI * 2);
    const hopY = Math.abs(Math.sin(hopProgress)) * -32;
    const rabbitX = (w * 0.2 + (t * 25) % (w * 0.6));
    const rabbitY = h * 0.74 + hopY;

    // Body
    ctx.fillStyle = '#fdf4ff';
    ctx.beginPath();
    ctx.ellipse(rabbitX, rabbitY, 26, 20, 0, 0, Math.PI * 2);
    ctx.fill();

    // Head
    ctx.beginPath();
    ctx.arc(rabbitX + 18, rabbitY - 10, 15, 0, Math.PI * 2);
    ctx.fill();

    // Ears
    ctx.fillStyle = '#fdf4ff';
    ctx.beginPath();
    ctx.ellipse(rabbitX + 16, rabbitY - 32, 6, 18, -0.15, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(rabbitX + 24, rabbitY - 30, 5, 17, 0.15, 0, Math.PI * 2);
    ctx.fill();

    // Inner pink ears
    ctx.fillStyle = '#fbcfe8';
    ctx.beginPath();
    ctx.ellipse(rabbitX + 16, rabbitY - 32, 3, 12, -0.15, 0, Math.PI * 2);
    ctx.fill();

    // Fluffy tail
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(rabbitX - 26, rabbitY + 2, 8, 0, Math.PI * 2);
    ctx.fill();

    // Eye
    ctx.fillStyle = '#374151';
    ctx.beginPath();
    ctx.arc(rabbitX + 22, rabbitY - 12, 2.5, 0, Math.PI * 2);
    ctx.fill();

    // Crunchy Carrot in Act 2 & 3
    if (act >= 2) {
      const carrotX = rabbitX + 28;
      const carrotY = rabbitY - 6;
      ctx.fillStyle = '#ea580c';
      ctx.beginPath();
      ctx.moveTo(carrotX, carrotY);
      ctx.lineTo(carrotX + 18, carrotY - 6);
      ctx.lineTo(carrotX + 6, carrotY + 12);
      ctx.closePath();
      ctx.fill();
      // carrot greens
      ctx.fillStyle = '#22c55e';
      ctx.fillRect(carrotX - 3, carrotY - 4, 6, 4);
    }
  }

  // 2. PUPPY THEME
  private renderPuppyScene(t: number, act: number, w: number, h: number, ctx: CanvasRenderingContext2D) {
    // Soft lawn
    ctx.fillStyle = '#15803d';
    ctx.beginPath();
    ctx.rect(0, h * 0.72, w, h * 0.28);
    ctx.fill();

    // Bouncing puppy
    const pupX = w * 0.45 + Math.sin(t * 1.5) * 80;
    const pupBounce = Math.abs(Math.cos(t * 4)) * -18;
    const pupY = h * 0.75 + pupBounce;

    // Body
    ctx.fillStyle = '#d97706';
    ctx.beginPath();
    ctx.ellipse(pupX, pupY, 32, 24, 0, 0, Math.PI * 2);
    ctx.fill();

    // Head
    ctx.beginPath();
    ctx.arc(pupX + 24, pupY - 16, 20, 0, Math.PI * 2);
    ctx.fill();

    // Floppy ears
    ctx.fillStyle = '#b45309';
    ctx.beginPath();
    ctx.ellipse(pupX + 14, pupY - 10, 8, 18, -0.3, 0, Math.PI * 2);
    ctx.fill();

    // Wagging tail
    const wag = Math.sin(t * 12) * 0.4;
    ctx.beginPath();
    ctx.ellipse(pupX - 34, pupY - 8 + wag * 10, 6, 18, -0.8 + wag, 0, Math.PI * 2);
    ctx.fill();

    // Eye and cute nose
    ctx.fillStyle = '#1e293b';
    ctx.beginPath();
    ctx.arc(pupX + 32, pupY - 18, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(pupX + 38, pupY - 12, 4, 0, Math.PI * 2);
    ctx.fill();

    // Shimmering soap bubbles
    for (let b = 0; b < 6; b++) {
      const bx = (w * 0.3 + b * 90 + t * 20) % w;
      const by = h * 0.55 + Math.sin(t * 2 + b) * 35;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(bx, by, 14 + (b % 3) * 4, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  // 3. OCEAN / DOLPHIN / CORAL SCENE
  private renderOceanScene(t: number, act: number, w: number, h: number, ctx: CanvasRenderingContext2D) {
    // Water surface rays
    const sunbeam = ctx.createLinearGradient(0, 0, 0, h);
    sunbeam.addColorStop(0, 'rgba(56, 189, 248, 0.35)');
    sunbeam.addColorStop(0.6, 'rgba(14, 116, 144, 0.1)');
    sunbeam.addColorStop(1, 'rgba(0, 0, 0, 0.4)');
    ctx.fillStyle = sunbeam;
    ctx.fillRect(0, 0, w, h);

    // Coral Reef at the bottom
    for (let c = 0; c < 12; c++) {
      const cx = c * (w / 11);
      const cy = h * 0.82;
      ctx.fillStyle = c % 2 === 0 ? '#ec4899' : '#06b6d4';
      ctx.beginPath();
      ctx.ellipse(cx, cy, 38, 55, 0, 0, Math.PI);
      ctx.fill();
    }

    // Leaping Dolphin
    const dolphinT = (t * 0.8) % 6;
    const dX = (t * 60) % (w + 140) - 70;
    const dY = h * 0.45 + Math.sin(t * 2) * 50;

    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.ellipse(dX, dY, 48, 18, Math.cos(t * 2) * 0.35, 0, Math.PI * 2);
    ctx.fill();

    // Dolphin dorsal fin
    ctx.beginPath();
    ctx.moveTo(dX - 5, dY - 14);
    ctx.lineTo(dX - 14, dY - 32);
    ctx.lineTo(dX + 8, dY - 14);
    ctx.closePath();
    ctx.fill();

    // Dolphin snout & tail
    ctx.beginPath();
    ctx.arc(dX + 42, dY + 4, 6, 0, Math.PI * 2);
    ctx.fill();

    // Bubbles
    for (let b = 0; b < 14; b++) {
      const bx = (b * 80 + Math.sin(t + b) * 30) % w;
      const by = (h * 0.85 - ((t * 40 + b * 50) % (h * 0.8)));
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.beginPath();
      ctx.arc(bx, by, 5 + (b % 4), 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // 4. UNICORN THEME
  private renderUnicornScene(t: number, act: number, w: number, h: number, ctx: CanvasRenderingContext2D) {
    // Rainbow Arc Bridge
    const rainbowColors = ['#f43f5e', '#fb923c', '#facc15', '#4ade80', '#38bdf8', '#818cf8', '#c084fc'];
    rainbowColors.forEach((color, i) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 10;
      ctx.globalAlpha = 0.65;
      ctx.beginPath();
      ctx.arc(w * 0.5, h * 0.95, w * 0.42 - i * 10, Math.PI, 0, false);
      ctx.stroke();
    });
    ctx.globalAlpha = 1.0;

    // Prancing Unicorn
    const uniX = w * 0.35 + Math.sin(t * 1.2) * 90;
    const uniY = h * 0.52 + Math.abs(Math.sin(t * 3)) * -22;

    // Body
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.ellipse(uniX, uniY, 44, 26, -0.1, 0, Math.PI * 2);
    ctx.fill();

    // Neck & Head
    ctx.beginPath();
    ctx.moveTo(uniX + 28, uniY + 10);
    ctx.lineTo(uniX + 48, uniY - 30);
    ctx.lineTo(uniX + 22, uniY - 14);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(uniX + 46, uniY - 30, 16, 0, Math.PI * 2);
    ctx.fill();

    // Golden Spiral Horn with glow
    ctx.fillStyle = '#facc15';
    ctx.beginPath();
    ctx.moveTo(uniX + 54, uniY - 36);
    ctx.lineTo(uniX + 80, uniY - 55);
    ctx.lineTo(uniX + 46, uniY - 42);
    ctx.closePath();
    ctx.fill();

    // Flowing starlight mane
    const maneColor = '#f472b6';
    ctx.fillStyle = maneColor;
    for (let m = 0; m < 5; m++) {
      ctx.beginPath();
      ctx.ellipse(uniX + 24 - m * 10, uniY - 24 + m * 6, 8, 16, 0.4 + Math.sin(t * 4 + m) * 0.2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // 5. BABY DRAGON THEME
  private renderDragonScene(t: number, act: number, w: number, h: number, ctx: CanvasRenderingContext2D) {
    // Crystal Grotto stones
    ctx.fillStyle = '#1e293b';
    ctx.beginPath();
    ctx.rect(0, h * 0.78, w, h * 0.22);
    ctx.fill();

    // Baby dragon
    const dragX = w * 0.48;
    const dragY = h * 0.65 + Math.sin(t * 2) * 8;

    // Body
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.ellipse(dragX, dragY, 36, 28, 0, 0, Math.PI * 2);
    ctx.fill();

    // Head
    ctx.beginPath();
    ctx.arc(dragX + 28, dragY - 18, 22, 0, Math.PI * 2);
    ctx.fill();

    // Emerald Wings flapping
    const wingFlap = Math.sin(t * 6) * 20;
    ctx.fillStyle = '#34d399';
    ctx.beginPath();
    ctx.moveTo(dragX - 6, dragY - 10);
    ctx.lineTo(dragX - 25, dragY - 45 + wingFlap);
    ctx.lineTo(dragX + 15, dragY - 25);
    ctx.closePath();
    ctx.fill();

    // Friendly eye
    ctx.fillStyle = '#fef08a';
    ctx.beginPath();
    ctx.arc(dragX + 34, dragY - 22, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#065f46';
    ctx.beginPath();
    ctx.arc(dragX + 35, dragY - 22, 2.5, 0, Math.PI * 2);
    ctx.fill();

    // Sparkle Breath (bursts of violet & gold sparks)
    for (let s = 0; s < 15; s++) {
      const sx = dragX + 50 + (t * 80 + s * 30) % 200;
      const sy = dragY - 20 + Math.sin(t * 4 + s) * 30;
      ctx.fillStyle = s % 2 === 0 ? '#c084fc' : '#fde047';
      ctx.beginPath();
      ctx.arc(sx, sy, 3 + (s % 3), 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // 6. BUTTERFLY THEME
  private renderButterflyScene(t: number, act: number, w: number, h: number, ctx: CanvasRenderingContext2D) {
    // Flowery backdrop
    ctx.fillStyle = '#064e3b';
    ctx.fillRect(0, h * 0.8, w, h * 0.2);

    for (let b = 0; b < 7; b++) {
      const bx = (w * 0.2 + b * 110 + Math.sin(t + b) * 50) % (w - 40) + 20;
      const by = h * 0.45 + Math.sin(t * 2 + b * 1.5) * 60;
      const flap = Math.abs(Math.sin(t * 8 + b));

      ctx.fillStyle = b % 2 === 0 ? '#a855f7' : '#ec4899';
      // Left wing
      ctx.beginPath();
      ctx.ellipse(bx - 12 * flap, by, 16 * flap, 18, -0.2, 0, Math.PI * 2);
      ctx.fill();
      // Right wing
      ctx.beginPath();
      ctx.ellipse(bx + 12 * flap, by, 16 * flap, 18, 0.2, 0, Math.PI * 2);
      ctx.fill();
      // Body
      ctx.fillStyle = '#1e1b4b';
      ctx.fillRect(bx - 2, by - 12, 4, 24);
    }
  }

  // 7. SPACE & ROCKET THEME
  private renderSpaceScene(t: number, act: number, w: number, h: number, ctx: CanvasRenderingContext2D) {
    // Distant Ringed Planet
    const px = w * 0.25;
    const py = h * 0.35;
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.arc(px, py, 42, 0, Math.PI * 2);
    ctx.fill();

    // Planet rings
    ctx.strokeStyle = '#fde68a';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.ellipse(px, py, 75, 18, -0.3, 0, Math.PI * 2);
    ctx.stroke();

    // Cruising Rocket
    const rx = (t * 40) % (w + 160) - 80;
    const ry = h * 0.5 + Math.sin(t * 1.2) * 40;

    // Rocket body
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.moveTo(rx + 40, ry);
    ctx.lineTo(rx - 20, ry - 14);
    ctx.lineTo(rx - 20, ry + 14);
    ctx.closePath();
    ctx.fill();

    // Cabin window
    ctx.fillStyle = '#67e8f9';
    ctx.beginPath();
    ctx.arc(rx + 10, ry, 7, 0, Math.PI * 2);
    ctx.fill();

    // Exhaust flame
    const flameSize = Math.sin(t * 15) * 8 + 24;
    ctx.fillStyle = '#facc15';
    ctx.beginPath();
    ctx.moveTo(rx - 20, ry - 8);
    ctx.lineTo(rx - 20 - flameSize, ry);
    ctx.lineTo(rx - 20, ry + 8);
    ctx.closePath();
    ctx.fill();
  }

  // 8. SKY & CLOUDS & BALLOON
  private renderSkyCloudScene(t: number, act: number, w: number, h: number, ctx: CanvasRenderingContext2D) {
    // Puffy cloud layers
    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
    for (let c = 0; c < 5; c++) {
      const cx = (c * 240 + t * 15) % (w + 200) - 100;
      const cy = h * 0.72 + (c % 2) * 30;
      ctx.beginPath();
      ctx.arc(cx, cy, 60, 0, Math.PI * 2);
      ctx.arc(cx + 45, cy - 20, 50, 0, Math.PI * 2);
      ctx.arc(cx + 90, cy, 55, 0, Math.PI * 2);
      ctx.fill();
    }

    // Hot-air Balloon
    const bx = w * 0.5 + Math.sin(t * 0.8) * 60;
    const by = h * 0.35 + Math.sin(t * 1.4) * 20;

    // Balloon envelope
    ctx.fillStyle = '#f43f5e';
    ctx.beginPath();
    ctx.arc(bx, by, 40, 0, Math.PI * 2);
    ctx.fill();

    // Stripes
    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.ellipse(bx, by, 18, 40, 0, 0, Math.PI * 2);
    ctx.fill();

    // Basket
    ctx.fillStyle = '#78350f';
    ctx.fillRect(bx - 10, by + 52, 20, 16);
    ctx.strokeStyle = '#d4d4d8';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(bx - 8, by + 40);
    ctx.lineTo(bx - 8, by + 52);
    ctx.moveTo(bx + 8, by + 40);
    ctx.lineTo(bx + 8, by + 52);
    ctx.stroke();
  }

  // 9. FAIRY FOREST & MUSHROOMS
  private renderFairyForestScene(t: number, act: number, w: number, h: number, ctx: CanvasRenderingContext2D) {
    // Deep moss ground
    ctx.fillStyle = '#064e3b';
    ctx.fillRect(0, h * 0.75, w, h * 0.25);

    // Glowing Bioluminescent Mushrooms
    const shrooms = [
      { x: w * 0.2, y: h * 0.78, r: 35, color: '#a855f7' },
      { x: w * 0.5, y: h * 0.76, r: 48, color: '#06b6d4' },
      { x: w * 0.78, y: h * 0.79, r: 32, color: '#ec4899' }
    ];

    shrooms.forEach(s => {
      // Mushroom Stalk
      ctx.fillStyle = '#f1f5f9';
      ctx.fillRect(s.x - 8, s.y, 16, 50);

      // Glowing Cap
      ctx.fillStyle = s.color;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, Math.PI, 0, false);
      ctx.fill();

      // White spots
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(s.x - 12, s.y - 14, 4, 0, Math.PI * 2);
      ctx.arc(s.x + 10, s.y - 18, 5, 0, Math.PI * 2);
      ctx.fill();
    });

    // Fluttering Fairies
    const fx = w * 0.45 + Math.sin(t * 2) * 50;
    const fy = h * 0.4 + Math.cos(t * 1.8) * 30;
    ctx.fillStyle = '#fef08a';
    ctx.beginPath();
    ctx.arc(fx, fy, 6, 0, Math.PI * 2);
    ctx.fill();
    // Fairy glow
    ctx.strokeStyle = 'rgba(254, 240, 138, 0.5)';
    ctx.lineWidth = 8;
    ctx.stroke();
  }

  // 10. DREAM TRAIN
  private renderDreamTrainScene(t: number, act: number, w: number, h: number, ctx: CanvasRenderingContext2D) {
    // Starlight Tracks
    ctx.strokeStyle = '#c084fc';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(0, h * 0.72);
    ctx.lineTo(w, h * 0.72);
    ctx.stroke();

    // Train movement
    const tx = (t * 55) % (w + 250) - 120;
    const ty = h * 0.62;

    // Locomotive body
    ctx.fillStyle = '#312e81';
    ctx.fillRect(tx, ty, 80, 40);

    // Cab
    ctx.fillStyle = '#4338ca';
    ctx.fillRect(tx + 50, ty - 25, 30, 25);

    // Chimney & Puffs of Sparkle Steam
    ctx.fillStyle = '#1e1b4b';
    ctx.fillRect(tx + 12, ty - 18, 14, 18);

    for (let p = 0; p < 5; p++) {
      const px = tx + 12 - (p * 25 + (t * 30) % 60);
      const py = ty - 25 - p * 12;
      ctx.fillStyle = 'rgba(244, 114, 182, 0.45)';
      ctx.beginPath();
      ctx.arc(px, py, 10 + p * 3, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // 11. GENERAL STARLIGHT SANCTUARY (River of lights, starry beds, sunrise)
  private renderStarlightSanctuaryScene(t: number, act: number, w: number, h: number, ctx: CanvasRenderingContext2D) {
    // Flowing river of starlight
    ctx.fillStyle = '#1e1b4b';
    ctx.beginPath();
    ctx.moveTo(0, h * 0.7);
    ctx.bezierCurveTo(w * 0.3, h * 0.65, w * 0.6, h * 0.85, w, h * 0.75);
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();
    ctx.fill();

    // Gentle cedar boat
    const bx = w * 0.45 + Math.sin(t * 0.8) * 40;
    const by = h * 0.74 + Math.sin(t * 1.6) * 6;

    ctx.fillStyle = '#78350f';
    ctx.beginPath();
    ctx.ellipse(bx, by, 45, 14, 0.05, 0, Math.PI);
    ctx.fill();

    // Lantern on boat
    ctx.fillStyle = '#fef08a';
    ctx.beginPath();
    ctx.arc(bx + 26, by - 10, 6, 0, Math.PI * 2);
    ctx.fill();
  }

  private drawCinematicOverlay(t: number, act: number) {
    const { width, height } = this.canvas;
    const ctx = this.ctx;

    // Gentle vignette
    const vignette = ctx.createRadialGradient(width / 2, height / 2, width * 0.35, width / 2, height / 2, width * 0.68);
    vignette.addColorStop(0, 'rgba(0,0,0,0)');
    vignette.addColorStop(1, 'rgba(10, 10, 25, 0.55)');
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, width, height);

    // Sleepy fade-in during the first 2 seconds & fade to starlight at the final 3 seconds
    if (t < 2.0) {
      ctx.fillStyle = `rgba(10, 10, 25, ${1.0 - t / 2.0})`;
      ctx.fillRect(0, 0, width, height);
    } else if (t > 57.0) {
      const fadeOut = (t - 57.0) / 3.0;
      ctx.fillStyle = `rgba(15, 10, 30, ${fadeOut * 0.8})`;
      ctx.fillRect(0, 0, width, height);
    }
  }

  private drawSubtitles(text: string, t: number, act: number) {
    const { width, height } = this.canvas;
    const ctx = this.ctx;

    // Subtitle background plate
    const padX = 24;
    const boxH = 74;
    const boxY = height - boxH - 24;

    ctx.fillStyle = 'rgba(15, 23, 42, 0.78)';
    ctx.beginPath();
    // Rounded rect
    const r = 16;
    ctx.roundRect ? ctx.roundRect(padX, boxY, width - padX * 2, boxH, r) : ctx.rect(padX, boxY, width - padX * 2, boxH);
    ctx.fill();

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Act Pill Tag
    ctx.fillStyle = '#c084fc';
    ctx.font = '600 12px "Outfit", sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`ACT ${act} OF 4  ·  ${Math.floor(t)}s / 60s`, padX + 20, boxY + 24);

    // Caption prose text
    ctx.fillStyle = '#f8fafc';
    ctx.font = '500 15px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(text, padX + 20, boxY + 50);

    // Progress bar across the very bottom of the canvas
    const progWidth = (t / this.duration) * width;
    ctx.fillStyle = 'rgba(168, 85, 247, 0.85)';
    ctx.fillRect(0, height - 6, progWidth, 6);
  }
}
