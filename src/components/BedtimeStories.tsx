import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Volume2, Pause, Play, Square, ChevronLeft, ChevronRight, Sparkles, Check, Heart, Bookmark } from 'lucide-react';
import { BedtimeStory, LanguageCode } from '../types';
import { BEDTIME_STORIES } from '../data/storiesData';
import { UI_TRANSLATIONS, SUPPORTED_LANGUAGES } from '../data/i18n';
import { soundSynth } from '../services/soundSynth';

interface BedtimeStoriesProps {
  currentLang: LanguageCode;
}

export const BedtimeStories: React.FC<BedtimeStoriesProps> = ({ currentLang }) => {
  const t = UI_TRANSLATIONS[currentLang] || UI_TRANSLATIONS.en;
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [chosenOption, setChosenOption] = useState<'A' | 'B' | null>(null);
  const [bookmarkedStories, setBookmarkedStories] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('pip-bookmarked-stories');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Speech Narration State
  const [speechState, setSpeechState] = useState<'idle' | 'playing' | 'paused'>('idle');
  const [speechNotice, setSpeechNotice] = useState<string | null>(null);
  const [speechRate, setSpeechRate] = useState<number>(0.9); // gentle bedtime pacing
  const synthRef = useRef<SpeechSynthesis | null>(null);

  const story = BEDTIME_STORIES[currentStoryIndex];

  // Resolve story text based on active language
  const translation = story.translations[currentLang];
  const storyTitle = translation?.title || story.title;
  const storySubtitle = translation?.subtitle || story.subtitle;
  const storyChapters = translation?.chapters || story.chapters;
  const choicePrompt = translation?.choicePrompt || story.choicePrompt;
  const branchOptionA = translation?.branch.optionA || story.branch.optionA;
  const branchOptionB = translation?.branch.optionB || story.branch.optionB;
  const branchTextA = translation?.branch.branchA || story.branch.branchA;
  const branchTextB = translation?.branch.branchB || story.branch.branchB;
  const conclusionText = translation?.conclusion || story.conclusion;

  // Initialize SpeechSynthesis on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    }
  }, []);

  // Reset decision and stop narration when switching stories or language
  useEffect(() => {
    setChosenOption(null);
    stopNarration();
    setSpeechNotice(null);
  }, [currentStoryIndex, currentLang]);

  const toggleBookmark = (id: string) => {
    soundSynth.playStarTwinkle();
    setBookmarkedStories(prev => {
      const updated = prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id];
      try {
        localStorage.setItem('pip-bookmarked-stories', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const handleNextStory = () => {
    soundSynth.playStarTwinkle();
    setCurrentStoryIndex((prev) => (prev + 1) % BEDTIME_STORIES.length);
  };

  const handlePrevStory = () => {
    soundSynth.playStarTwinkle();
    setCurrentStoryIndex((prev) => (prev - 1 + BEDTIME_STORIES.length) % BEDTIME_STORIES.length);
  };

  // Speech Narration handlers
  const startNarration = () => {
    if (!synthRef.current) {
      setSpeechNotice(t.speechUnavailableNotice);
      return;
    }

    synthRef.current.cancel();

    // Prepare full story prose to read
    const textToRead = [
      storyTitle,
      ...storyChapters.map(c => `${c.heading}. ${c.text}`),
      chosenOption === 'A' ? branchTextA : chosenOption === 'B' ? branchTextB : '',
      conclusionText
    ].filter(Boolean).join('. ');

    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.rate = speechRate;
    utterance.pitch = 1.0;

    // Find voice matching current language
    const currentLangMeta = SUPPORTED_LANGUAGES.find(l => l.code === currentLang);
    const targetLangCode = currentLangMeta?.speechLang || 'en-US';
    utterance.lang = targetLangCode;

    const voices = synthRef.current.getVoices();
    const matchingVoice = voices.find(v => v.lang.startsWith(targetLangCode.split('-')[0]) || v.lang === targetLangCode);

    if (matchingVoice) {
      utterance.voice = matchingVoice;
    } else if (currentLang !== 'en') {
      setSpeechNotice(t.speechUnavailableNotice);
    }

    utterance.onstart = () => setSpeechState('playing');
    utterance.onend = () => setSpeechState('idle');
    utterance.onerror = () => {
      setSpeechState('idle');
      setSpeechNotice(t.speechUnavailableNotice);
    };

    synthRef.current.speak(utterance);
    soundSynth.playBellChime();
  };

  const pauseNarration = () => {
    if (synthRef.current && speechState === 'playing') {
      synthRef.current.pause();
      setSpeechState('paused');
    }
  };

  const resumeNarration = () => {
    if (synthRef.current && speechState === 'paused') {
      synthRef.current.resume();
      setSpeechState('playing');
    }
  };

  const stopNarration = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setSpeechState('idle');
    }
  };

  return (
    <section id="stories-section" className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-600 dark:text-purple-300 uppercase tracking-wider mb-2">
              <BookOpen className="w-4 h-4 text-purple-500" />
              <span>Story Adventure · 25 Full Tales</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              {t.storiesHeader}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
              {t.storiesSubtitle}
            </p>
          </div>

          {/* Quick story selector dropdown */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium hidden sm:inline">Jump to Story:</span>
            <select
              value={currentStoryIndex}
              onChange={(e) => setCurrentStoryIndex(Number(e.target.value))}
              className="px-3 py-1.5 rounded-xl text-xs font-medium border bg-white dark:bg-slate-900 border-slate-200 dark:border-purple-900/60 text-slate-900 dark:text-slate-100 shadow-sm"
            >
              {BEDTIME_STORIES.map((s, idx) => {
                const sTrans = s.translations[currentLang];
                return (
                  <option key={s.id} value={idx}>
                    #{s.number}. {sTrans?.title || s.title}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        {/* Story Reader Master Card */}
        <div className="rounded-3xl border border-slate-200 dark:border-purple-900/60 bg-white/95 dark:bg-[#111428] shadow-xl overflow-hidden">
          
          {/* Header of Story Book */}
          <div className="p-6 sm:p-8 border-b border-slate-100 dark:border-purple-900/40 bg-gradient-to-r from-purple-50/50 via-indigo-50/30 to-pink-50/40 dark:from-purple-950/40 dark:via-indigo-950/20 dark:to-slate-900/50 flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            <div className="flex items-start gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-md shrink-0"
                style={{ backgroundColor: `${story.themeColor}20` }}
              >
                {story.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 text-xs text-purple-600 dark:text-purple-400 font-semibold mb-1">
                  <span>Story {story.number} of 25</span>
                  <span aria-hidden="true">·</span>
                  <span>{story.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{story.estimatedMinutes} {t.readTime}</span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                  {storyTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-purple-200/80 mt-1 italic">
                  {storySubtitle}
                </p>
              </div>
            </div>

            {/* Audio Narration Bar & Bookmark */}
            <div className="flex flex-wrap items-center gap-2.5">
              
              {speechState === 'idle' && (
                <button
                  onClick={startNarration}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 shadow-sm transition-colors flex items-center gap-1.5"
                >
                  <Volume2 className="w-4 h-4 text-amber-200" />
                  <span>{t.listenNarration}</span>
                </button>
              )}

              {speechState === 'playing' && (
                <>
                  <button
                    onClick={pauseNarration}
                    className="px-3 py-2 rounded-xl text-xs font-semibold text-amber-900 bg-amber-100 hover:bg-amber-200 transition-colors flex items-center gap-1"
                  >
                    <Pause className="w-3.5 h-3.5" />
                    <span>{t.pauseNarration}</span>
                  </button>
                  <button
                    onClick={stopNarration}
                    className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-200 transition-colors flex items-center gap-1"
                  >
                    <Square className="w-3.5 h-3.5" />
                    <span>{t.stopNarration}</span>
                  </button>
                </>
              )}

              {speechState === 'paused' && (
                <>
                  <button
                    onClick={resumeNarration}
                    className="px-3 py-2 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center gap-1"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>{t.resumeNarration}</span>
                  </button>
                  <button
                    onClick={stopNarration}
                    className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-200 transition-colors"
                  >
                    <Square className="w-3.5 h-3.5" />
                  </button>
                </>
              )}

              {/* Bookmark Button */}
              <button
                onClick={() => toggleBookmark(story.id)}
                className={`p-2 rounded-xl border transition-colors ${
                  bookmarkedStories.includes(story.id)
                    ? 'bg-pink-100 border-pink-300 text-pink-600 dark:bg-pink-950/60 dark:border-pink-800 dark:text-pink-300'
                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400'
                }`}
                title="Bookmark this bedtime tale"
              >
                <Bookmark className="w-4 h-4" />
              </button>

            </div>

          </div>

          {/* Speech fallback notification if voice is missing */}
          {speechNotice && (
            <div className="px-6 py-2.5 bg-amber-50 dark:bg-amber-950/40 border-b border-amber-200 dark:border-amber-900/60 text-xs text-amber-800 dark:text-amber-200 flex items-center justify-between">
              <span>{speechNotice}</span>
              <button
                onClick={() => setSpeechNotice(null)}
                className="text-amber-700 dark:text-amber-300 hover:underline ml-4"
              >
                Dismiss
              </button>
            </div>
          )}

          {/* Story Body Prose */}
          <div className="p-6 sm:p-8 lg:p-10 space-y-8 max-w-4xl mx-auto">
            {storyChapters.map((chap, idx) => (
              <div key={idx} className="space-y-3">
                <h4 className="text-base sm:text-lg font-bold text-slate-800 dark:text-purple-200 font-['Outfit']">
                  {chap.heading}
                </h4>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                  {chap.text}
                </p>
              </div>
            ))}

            {/* Interactive Decision Point */}
            <div className="p-5 sm:p-6 rounded-2xl border bg-purple-50/70 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800/60 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wide">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{choicePrompt}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    soundSynth.playBellChime();
                    setChosenOption('A');
                  }}
                  className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-medium border transition-all ${
                    chosenOption === 'A'
                      ? 'bg-purple-600 text-white border-purple-600 shadow-md'
                      : 'bg-white dark:bg-slate-900/90 text-slate-800 dark:text-slate-100 border-slate-200 dark:border-purple-900/60 hover:border-purple-400'
                  }`}
                >
                  <div className="font-bold text-[11px] uppercase tracking-wider mb-1 opacity-80">Option 1</div>
                  {branchOptionA}
                </button>

                <button
                  onClick={() => {
                    soundSynth.playBellChime();
                    setChosenOption('B');
                  }}
                  className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-medium border transition-all ${
                    chosenOption === 'B'
                      ? 'bg-purple-600 text-white border-purple-600 shadow-md'
                      : 'bg-white dark:bg-slate-900/90 text-slate-800 dark:text-slate-100 border-slate-200 dark:border-purple-900/60 hover:border-purple-400'
                  }`}
                >
                  <div className="font-bold text-[11px] uppercase tracking-wider mb-1 opacity-80">Option 2</div>
                  {branchOptionB}
                </button>
              </div>

              {/* Chosen Branch Resolution */}
              {chosenOption && (
                <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800/80 text-xs sm:text-sm text-slate-800 dark:text-purple-100 leading-relaxed animate-in fade-in duration-300">
                  <div className="flex items-center gap-1.5 font-bold text-purple-600 dark:text-purple-400 text-xs uppercase mb-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>{t.yourDecision}</span>
                  </div>
                  {chosenOption === 'A' ? branchTextA : branchTextB}
                </div>
              )}
            </div>

            {/* Heartwarming Conclusion */}
            <div className="pt-4 border-t border-slate-100 dark:border-purple-900/30 text-center space-y-2">
              <span className="text-xl">🌙</span>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 italic leading-relaxed max-w-2xl mx-auto">
                "{conclusionText}"
              </p>
            </div>

          </div>

          {/* Previous & Next Story Navigation Bottom Bar */}
          <div className="p-4 sm:p-6 border-t border-slate-100 dark:border-purple-900/40 bg-slate-50 dark:bg-slate-950 flex items-center justify-between">
            <button
              onClick={handlePrevStory}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{t.storyPrevious}</span>
            </button>

            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Story {story.number} of {BEDTIME_STORIES.length}
            </span>

            <button
              onClick={handleNextStory}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-950/80 transition-colors flex items-center gap-1.5"
            >
              <span>{t.storyNext}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
