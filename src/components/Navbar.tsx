import React, { useState, useRef, useEffect } from 'react';
import { Moon, Sun, Volume2, VolumeX, Globe, Sparkles } from 'lucide-react';
import { LanguageCode } from '../types';
import { SUPPORTED_LANGUAGES, UI_TRANSLATIONS } from '../data/i18n';
import { soundSynth } from '../services/soundSynth';

interface NavbarProps {
  currentLang: LanguageCode;
  onSelectLang: (lang: LanguageCode) => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onSelectLang,
  theme,
  onToggleTheme,
  activeSection,
  onNavigate
}) => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isAmbientOn, setIsAmbientOn] = useState(soundSynth.getIsAmbientPlaying());
  const dropdownRef = useRef<HTMLDivElement>(null);
  const t = UI_TRANSLATIONS[currentLang] || UI_TRANSLATIONS.en;

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggleAmbient = () => {
    const active = soundSynth.toggleObservatoryAmbience();
    setIsAmbientOn(active);
  };

  const currentLangObj = SUPPORTED_LANGUAGES.find(l => l.code === currentLang) || SUPPORTED_LANGUAGES[0];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 bg-white/80 dark:bg-[#0c0e1e]/90 border-slate-200/80 dark:border-purple-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 md:gap-8">
        
        {/* Zone 1: Single Brand Wordmark */}
        <button
          onClick={() => onNavigate('observatory')}
          className="flex items-center gap-2.5 text-left group whitespace-nowrap shrink-0 focus:outline-none"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-500 via-indigo-500 to-pink-400 flex items-center justify-center text-white shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-amber-200" />
          </div>
          <div>
            <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-purple-100 block leading-tight font-['Outfit']">
              Pip’s Observatory
            </span>
            <span className="text-[11px] text-purple-600 dark:text-purple-300/80 tracking-wide block leading-tight">
              Midnight Dream World
            </span>
          </div>
        </button>

        {/* Zone 2: Clean 5 Navigation Links (single-line, subtle underlines) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <button
            onClick={() => onNavigate('observatory')}
            className={`whitespace-nowrap transition-colors py-1 ${
              activeSection === 'observatory'
                ? 'text-purple-600 dark:text-purple-300 font-semibold border-b-2 border-purple-500'
                : 'text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-300'
            }`}
          >
            {t.navObservatory}
          </button>
          <button
            onClick={() => onNavigate('stories')}
            className={`whitespace-nowrap transition-colors py-1 ${
              activeSection === 'stories'
                ? 'text-purple-600 dark:text-purple-300 font-semibold border-b-2 border-purple-500'
                : 'text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-300'
            }`}
          >
            {t.navStories}
          </button>
          <button
            onClick={() => onNavigate('dreams')}
            className={`whitespace-nowrap transition-colors py-1 ${
              activeSection === 'dreams'
                ? 'text-purple-600 dark:text-purple-300 font-semibold border-b-2 border-purple-500'
                : 'text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-300'
            }`}
          >
            {t.navDreams}
          </button>
          <button
            onClick={() => onNavigate('video')}
            className={`whitespace-nowrap transition-colors py-1 ${
              activeSection === 'video'
                ? 'text-purple-600 dark:text-purple-300 font-semibold border-b-2 border-purple-500'
                : 'text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-300'
            }`}
          >
            {t.navVideo}
          </button>
          <button
            onClick={() => onNavigate('journal')}
            className={`whitespace-nowrap transition-colors py-1 ${
              activeSection === 'journal'
                ? 'text-purple-600 dark:text-purple-300 font-semibold border-b-2 border-purple-500'
                : 'text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-300'
            }`}
          >
            {t.navJournal}
          </button>
        </nav>

        {/* Zone 3: Controls (Language Dropdown, Ambient Lullaby, Theme Toggle) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          
          {/* Observatory Ambient Lullaby Sound Toggle */}
          <button
            onClick={handleToggleAmbient}
            title={isAmbientOn ? "Pause Observatory Lullaby" : "Play Observatory Lullaby"}
            className={`p-2 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors border ${
              isAmbientOn
                ? 'bg-purple-100 text-purple-900 border-purple-300 dark:bg-purple-900/60 dark:text-purple-200 dark:border-purple-600'
                : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200 dark:bg-slate-800/80 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-800'
            }`}
            aria-label="Toggle Observatory Ambient Lullaby"
          >
            {isAmbientOn ? (
              <>
                <Volume2 className="w-4 h-4 text-purple-600 dark:text-purple-300 animate-pulse" />
                <span className="hidden sm:inline text-xs">Lullaby</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span className="hidden sm:inline text-xs">Music</span>
              </>
            )}
          </button>

          {/* Custom Accessible Multilingual Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="px-2.5 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 border transition-colors bg-white dark:bg-slate-900 border-slate-200 dark:border-purple-900/70 text-slate-800 dark:text-slate-100 hover:border-purple-400 dark:hover:border-purple-500 shadow-sm"
              aria-haspopup="listbox"
              aria-expanded={isLangMenuOpen}
              aria-label="Select Language"
            >
              <Globe className="w-3.5 h-3.5 text-purple-500" />
              <span className="text-base leading-none">{currentLangObj.flag}</span>
              <span className="hidden sm:inline">{currentLangObj.nativeName}</span>
              <span className="text-[10px] text-slate-400">▼</span>
            </button>

            {isLangMenuOpen && (
              <div
                role="listbox"
                className="absolute right-0 mt-2 w-52 rounded-xl shadow-xl border py-1.5 z-50 overflow-hidden bg-white dark:bg-[#13162b] border-slate-200 dark:border-purple-800/80 animate-in fade-in zoom-in-95 duration-150"
              >
                <div className="px-3 py-1 text-[11px] font-semibold text-slate-400 dark:text-purple-300/70 uppercase tracking-wider border-b border-slate-100 dark:border-purple-900/40">
                  Select Language
                </div>
                <div className="max-h-72 overflow-y-auto divide-y divide-slate-100 dark:divide-purple-900/30">
                  {SUPPORTED_LANGUAGES.map((lang) => {
                    const isSelected = lang.code === currentLang;
                    return (
                      <button
                        key={lang.code}
                        onClick={() => {
                          onSelectLang(lang.code);
                          setIsLangMenuOpen(false);
                          soundSynth.playStarTwinkle();
                        }}
                        className={`w-full px-3 py-2 text-left text-xs flex items-center justify-between transition-colors ${
                          isSelected
                            ? 'bg-purple-50 dark:bg-purple-950/80 text-purple-700 dark:text-purple-200 font-semibold'
                            : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-purple-900/40'
                        }`}
                        role="option"
                        aria-selected={isSelected}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-base">{lang.flag}</span>
                          <div>
                            <span className="block font-medium">{lang.nativeName}</span>
                            <span className="block text-[10px] text-slate-400 dark:text-slate-400">{lang.name}</span>
                          </div>
                        </div>
                        {isSelected && (
                          <span className="text-purple-600 dark:text-purple-400 text-xs font-bold">✓</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Enhanced Theme Toggle Button */}
          <button
            type="button"
            onClick={() => {
              onToggleTheme();
              soundSynth.playStarTwinkle();
            }}
            title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer border shadow-sm bg-purple-50 hover:bg-purple-100 text-purple-900 border-purple-200 dark:bg-purple-950/70 dark:hover:bg-purple-900/70 dark:text-purple-200 dark:border-purple-800/80 active:scale-95"
            aria-label="Toggle Light and Dark Mode"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '20s' }} />
                <span>Light</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-indigo-600 transition-transform duration-300 group-hover:-rotate-12" />
                <span>Dark</span>
              </>
            )}
          </button>
        </div>

      </div>

      {/* Mobile navigation row */}
      <div className="lg:hidden flex items-center justify-around border-t px-2 py-1.5 bg-slate-50/80 dark:bg-[#0c0e1e]/95 border-slate-200 dark:border-purple-900/30 text-xs font-medium">
        <button
          onClick={() => onNavigate('observatory')}
          className={`px-2 py-1 rounded ${activeSection === 'observatory' ? 'text-purple-600 dark:text-purple-300 font-bold' : 'text-slate-600 dark:text-slate-300'}`}
        >
          {t.navObservatory}
        </button>
        <button
          onClick={() => onNavigate('stories')}
          className={`px-2 py-1 rounded ${activeSection === 'stories' ? 'text-purple-600 dark:text-purple-300 font-bold' : 'text-slate-600 dark:text-slate-300'}`}
        >
          {t.navStories}
        </button>
        <button
          onClick={() => onNavigate('dreams')}
          className={`px-2 py-1 rounded ${activeSection === 'dreams' ? 'text-purple-600 dark:text-purple-300 font-bold' : 'text-slate-600 dark:text-slate-300'}`}
        >
          {t.navDreams}
        </button>
        <button
          onClick={() => onNavigate('video')}
          className={`px-2 py-1 rounded ${activeSection === 'video' ? 'text-purple-600 dark:text-purple-300 font-bold' : 'text-slate-600 dark:text-slate-300'}`}
        >
          {t.navVideo}
        </button>
        <button
          onClick={() => onNavigate('journal')}
          className={`px-2 py-1 rounded ${activeSection === 'journal' ? 'text-purple-600 dark:text-purple-300 font-bold' : 'text-slate-600 dark:text-slate-300'}`}
        >
          {t.navJournal}
        </button>
      </div>
    </header>
  );
};
