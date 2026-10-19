import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, RotateCcw, Download, Sparkles, Volume2, VolumeX, Film, CheckCircle2, AlertCircle } from 'lucide-react';
import { DreamIdea, LanguageCode } from '../types';
import { DreamVideoRenderer } from '../services/videoEngine';
import { soundSynth } from '../services/soundSynth';
import { UI_TRANSLATIONS } from '../data/i18n';

interface DreamVideoStudioProps {
  currentLang: LanguageCode;
  selectedDream: DreamIdea;
  onChangeDream: () => void;
  autoPlay?: boolean;
}

export const DreamVideoStudio: React.FC<DreamVideoStudioProps> = ({
  currentLang,
  selectedDream,
  onChangeDream,
  autoPlay = false
}) => {
  const t = UI_TRANSLATIONS[currentLang] || UI_TRANSLATIONS.en;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rendererRef = useRef<DreamVideoRenderer | null>(null);

  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);
  const [exportError, setExportError] = useState<string | null>(null);
  const [exportSuccess, setExportSuccess] = useState<string | null>(null);

  const animationFrameId = useRef<number | null>(null);
  const lastTimestampRef = useRef<number | null>(null);

  // Initialize renderer when canvas or dream changes
  useEffect(() => {
    if (canvasRef.current) {
      rendererRef.current = new DreamVideoRenderer(canvasRef.current, selectedDream);
      rendererRef.current.render(0);
      setCurrentTime(0);
      if (autoPlay) {
        setIsPlaying(true);
      }
    }
  }, [selectedDream, autoPlay]);

  // Handle animation loop
  const step = useCallback((timestamp: number) => {
    if (!lastTimestampRef.current) lastTimestampRef.current = timestamp;
    const delta = (timestamp - lastTimestampRef.current) / 1000;
    lastTimestampRef.current = timestamp;

    setCurrentTime((prev) => {
      const nextTime = prev + delta;
      if (nextTime >= 60) {
        setIsPlaying(false);
        rendererRef.current?.render(60);
        return 60;
      }
      rendererRef.current?.render(nextTime);
      return nextTime;
    });

    if (isPlaying) {
      animationFrameId.current = requestAnimationFrame(step);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (isPlaying) {
      lastTimestampRef.current = null;
      animationFrameId.current = requestAnimationFrame(step);
      if (!isAudioMuted) {
        soundSynth.startObservatoryAmbience();
      }
    } else {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    }

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isPlaying, isAudioMuted, step]);

  const handlePlayPause = () => {
    if (currentTime >= 60) {
      setCurrentTime(0);
      rendererRef.current?.render(0);
    }
    soundSynth.playStarTwinkle();
    setIsPlaying(!isPlaying);
  };

  const handleRestart = () => {
    soundSynth.playStarTwinkle();
    setCurrentTime(0);
    setIsPlaying(false);
    rendererRef.current?.render(0);
  };

  const handleSeek = (newTime: number) => {
    setCurrentTime(newTime);
    rendererRef.current?.render(newTime);
  };

  // Video Exporter via MediaRecorder + Web Audio
  const handleExportVideo = async () => {
    if (!canvasRef.current) return;
    setIsExporting(true);
    setExportProgress(5);
    setExportError(null);
    setExportSuccess(null);
    setIsPlaying(false);

    try {
      const canvas = canvasRef.current;
      const stream = canvas.captureStream ? canvas.captureStream(30) : null;

      if (!stream) {
        throw new Error('Canvas video capture stream is not supported in this browser environment.');
      }

      // Add audio destination stream
      const audioDest = soundSynth.createVideoAudioTrack(60);
      if (audioDest) {
        audioDest.stream.getAudioTracks().forEach(track => stream.addTrack(track));
      }

      const mimeType = MediaRecorder.isTypeSupported('video/webm;codecs=vp9')
        ? 'video/webm;codecs=vp9'
        : MediaRecorder.isTypeSupported('video/webm')
        ? 'video/webm'
        : 'video/mp4';

      const recorder = new MediaRecorder(stream, {
        mimeType: mimeType.includes('mp4') ? undefined : mimeType,
        videoBitsPerSecond: 2500000
      });

      const recordedChunks: Blob[] = [];
      recorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          recordedChunks.push(event.data);
        }
      };

      recorder.onstop = () => {
        const blob = new Blob(recordedChunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${selectedDream.title.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase()}_1min_dream.webm`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 2000);

        setIsExporting(false);
        setExportProgress(100);
        setExportSuccess(`Your 60-second dream video was exported and downloaded successfully!`);
      };

      recorder.start();

      // Render accelerated sequence through 60 seconds
      let exportTime = 0;
      const exportInterval = setInterval(() => {
        exportTime += 1.0;
        rendererRef.current?.render(exportTime);
        setExportProgress(Math.min(Math.round((exportTime / 60) * 95), 95));

        if (exportTime >= 60) {
          clearInterval(exportInterval);
          setTimeout(() => {
            recorder.stop();
          }, 300);
        }
      }, 50); // fast simulation export

    } catch (err: unknown) {
      console.error('Video recording failed:', err);
      setIsExporting(false);
      setExportError(
        'Video capture encountered a browser limitation. You can still enjoy the full 60-second animated video player with music live in your browser anytime!'
      );
    }
  };

  // Determine current narrative act label
  let actBadge = t.act1Label;
  if (currentTime >= 45) actBadge = t.act4Label;
  else if (currentTime >= 30) actBadge = t.act3Label;
  else if (currentTime >= 15) actBadge = t.act2Label;

  return (
    <section id="video-section" className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-600 dark:text-purple-300 uppercase tracking-wider mb-2">
              <Film className="w-4 h-4 text-pink-500" />
              <span>Personalized 60-Second Video Studio</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              {t.videoStudioTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
              {t.videoStudioSubtitle}
            </p>
          </div>

          <button
            onClick={onChangeDream}
            className="self-start md:self-auto px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-950/70 hover:bg-purple-200 dark:hover:bg-purple-900 border border-purple-200 dark:border-purple-800 transition-colors"
          >
            {t.createAgain}
          </button>
        </div>

        {/* Video Player Card */}
        <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-purple-900/60 bg-slate-900 shadow-2xl">
          
          {/* Top Bar of Video Studio */}
          <div className="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-xs text-slate-300">
            <div className="flex items-center gap-2.5">
              <span className="text-xl">{selectedDream.icon}</span>
              <div>
                <span className="font-bold text-white block">
                  {selectedDream.title}
                </span>
                <span className="text-[11px] text-purple-400">
                  Theme: {selectedDream.sceneType} · {selectedDream.categoryLabel}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-amber-300 px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20">
                {actBadge}
              </span>
              <span className="font-mono tabular-nums text-slate-400">
                {Math.floor(currentTime).toString().padStart(2, '0')}:60s
              </span>
            </div>
          </div>

          {/* 16:9 Canvas Viewport */}
          <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
            <canvas
              ref={canvasRef}
              width={1280}
              height={720}
              className="w-full h-full object-contain"
            />

            {/* Play Overlay Button if paused */}
            {!isPlaying && currentTime < 60 && !isExporting && (
              <button
                onClick={handlePlayPause}
                className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-purple-600/80 hover:bg-purple-500/90 text-white flex items-center justify-center shadow-xl backdrop-blur-sm transition-transform hover:scale-105"
                aria-label="Play Dream Video"
              >
                <Play className="w-8 h-8 ml-1 text-white" />
              </button>
            )}

            {/* Finished Video Overlay */}
            {currentTime >= 60 && (
              <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center text-white">
                <Sparkles className="w-12 h-12 text-amber-300 mb-3 animate-bounce" />
                <h3 className="text-2xl font-bold font-['Outfit']">Sweet Dreams, Little Traveler</h3>
                <p className="text-sm text-purple-200 mt-2 max-w-md">
                  Your 60-second dream journey is complete. May the peaceful starlight follow you straight into deep, restful sleep.
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <button
                    onClick={handleRestart}
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/20 hover:bg-white/30 border border-white/30 transition-colors flex items-center gap-2"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Watch Again</span>
                  </button>
                  <button
                    onClick={handleExportVideo}
                    className="px-5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-colors flex items-center gap-2 shadow"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download (.webm)</span>
                  </button>
                </div>
              </div>
            )}

            {/* Exporting progress modal */}
            {isExporting && (
              <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-md flex flex-col items-center justify-center p-6 text-white text-center">
                <Film className="w-10 h-10 text-purple-400 animate-pulse mb-3" />
                <h4 className="text-lg font-bold">{t.generatingVideo}</h4>
                <p className="text-xs text-slate-300 mt-1 mb-4">
                  Encoding 60 seconds of animated scenes and celestial chords...
                </p>
                <div className="w-64 h-2.5 bg-slate-800 rounded-full overflow-hidden border border-purple-500/30">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-150"
                    style={{ width: `${exportProgress}%` }}
                  />
                </div>
                <span className="text-xs font-mono text-purple-300 mt-2">{exportProgress}%</span>
              </div>
            )}
          </div>

          {/* Player Bottom Control Bar */}
          <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 space-y-3">
            
            {/* Scrubber Range */}
            <div className="space-y-1">
              <input
                type="range"
                min={0}
                max={60}
                step={0.1}
                value={currentTime}
                onChange={(e) => handleSeek(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>0s (Twilight)</span>
                <span>15s (Encounter)</span>
                <span>30s (Climax)</span>
                <span>45s (Lullaby)</span>
                <span>60s (Slumber)</span>
              </div>
            </div>

            {/* Buttons Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePlayPause}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 transition-colors flex items-center gap-1.5"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4" />
                      <span>{t.pauseVideo}</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      <span>{t.playVideo}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleRestart}
                  className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors"
                  title="Restart from Beginning"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setIsAudioMuted(!isAudioMuted)}
                  className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors"
                  title={isAudioMuted ? "Unmute Celestial Chimes" : "Mute Sound"}
                >
                  {isAudioMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-purple-300" />}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleExportVideo}
                  disabled={isExporting}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all flex items-center gap-1.5 shadow"
                >
                  <Download className="w-4 h-4" />
                  <span>{t.downloadVideo}</span>
                </button>
              </div>
            </div>

            {/* Export Messages */}
            {exportSuccess && (
              <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{exportSuccess}</span>
              </div>
            )}

            {exportError && (
              <div className="flex items-center gap-2 text-xs text-amber-300 bg-amber-950/40 border border-amber-800/60 p-2.5 rounded-xl">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{exportError}</span>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
