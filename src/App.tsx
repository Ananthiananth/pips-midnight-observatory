import React, { useState, useEffect } from 'react';
import { LanguageCode, DreamIdea } from './types';
import { DREAM_IDEAS } from './data/dreamsData';
import { Navbar } from './components/Navbar';
import { PipObservatoryHero } from './components/PipObservatoryHero';
import { DreamExplorer } from './components/DreamExplorer';
import { BedtimeStories } from './components/BedtimeStories';
import { DreamJournal } from './components/DreamJournal';
import { InteractiveTelescopeModal } from './components/InteractiveTelescopeModal';
import { ZipExporterModal } from './components/ZipExporterModal';
import { Footer } from './components/Footer';

export default function App() {
  // Theme state
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const saved = localStorage.getItem('pip-theme');
      return (saved === 'light' || saved === 'dark') ? saved : 'dark';
    } catch {
      return 'dark';
    }
  });

  // Language state
  const [currentLang, setCurrentLang] = useState<LanguageCode>(() => {
    try {
      const saved = localStorage.getItem('pip-language');
      return (saved as LanguageCode) || 'en';
    } catch {
      return 'en';
    }
  });

  // Selected Dream for the 1-Minute Video Studio
  const [selectedDream, setSelectedDream] = useState<DreamIdea>(DREAM_IDEAS[0]);

  // Active navigation section
  const [activeSection, setActiveSection] = useState<string>('observatory');

  // Modals
  const [isTelescopeOpen, setIsTelescopeOpen] = useState(false);
  const [isZipModalOpen, setIsZipModalOpen] = useState(false);

  // Sync theme with HTML class, attribute, and localStorage
  useEffect(() => {
    try {
      localStorage.setItem('pip-theme', theme);
    } catch {}

    const root = document.documentElement;
    const body = document.body;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      body.classList.add('dark');
      body.classList.remove('light');
      root.setAttribute('data-theme', 'dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      body.classList.remove('dark');
      body.classList.add('light');
      root.setAttribute('data-theme', 'light');
      root.style.colorScheme = 'light';
    }
  }, [theme]);

  // Sync language with localStorage
  const handleSelectLang = (lang: LanguageCode) => {
    setCurrentLang(lang);
    try {
      localStorage.setItem('pip-language', lang);
    } catch {}
  };

  const handleToggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'observatory') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetId = sectionId === 'video' ? 'dreams-section' : `${sectionId}-section`;
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'dark' : 'light'} bg-[#f8f9fe] text-slate-800 dark:bg-[#070913] dark:text-slate-100 selection:bg-purple-300 selection:text-purple-950`}>
      
      {/* Top Bar */}
      <Navbar
        currentLang={currentLang}
        onSelectLang={handleSelectLang}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area in exact required order:
          1. Meet Pip / Introduction
          2. Stories
          3. Wishes / Dream Options
      */}
      <main>
        {/* 1. Meet Pip / Introduction — Pip's existing character, details, and introduction */}
        <div id="observatory-section">
          <PipObservatoryHero
            currentLang={currentLang}
            theme={theme}
            onOpenTelescope={() => setIsTelescopeOpen(true)}
            onNavigate={handleNavigate}
          />
        </div>

        {/* 2. Stories — the existing stories section */}
        <div id="stories-section">
          <BedtimeStories
            currentLang={currentLang}
          />
        </div>

        {/* 3. Wishes / Dream Options — horizontally scrollable dream options with Create a Video and player */}
        <div id="dreams-section">
          <DreamExplorer
            currentLang={currentLang}
            selectedDream={selectedDream}
            onSelectDream={(dream) => setSelectedDream(dream)}
          />
        </div>

        {/* 4. Secret Dream Journal */}
        <div id="journal-section">
          <DreamJournal
            currentLang={currentLang}
            onTurnJournalIntoVideo={(dream) => {
              setSelectedDream(dream);
              handleNavigate('dreams');
            }}
          />
        </div>
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onOpenZipModal={() => setIsZipModalOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Modals */}
      <InteractiveTelescopeModal
        isOpen={isTelescopeOpen}
        onClose={() => setIsTelescopeOpen(false)}
      />

      <ZipExporterModal
        isOpen={isZipModalOpen}
        onClose={() => setIsZipModalOpen(false)}
      />

    </div>
  );
}
