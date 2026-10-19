import React from 'react';
import { Sparkles, Moon, FolderArchive } from 'lucide-react';
import { LanguageCode } from '../types';
import { UI_TRANSLATIONS } from '../data/i18n';

interface FooterProps {
  currentLang: LanguageCode;
  onOpenZipModal: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onOpenZipModal,
  onNavigate
}) => {
  const t = UI_TRANSLATIONS[currentLang] || UI_TRANSLATIONS.en;

  return (
    <footer className="border-t border-slate-200 dark:border-purple-900/40 bg-slate-50/80 dark:bg-[#080914] py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-purple-900/30">
          
          {/* Brand info */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-md">
              <Moon className="w-5 h-5 text-amber-200" />
            </div>
            <div>
              <span className="text-base font-bold text-slate-900 dark:text-white block font-['Outfit']">
                Pip’s Midnight Observatory
              </span>
              <span className="text-xs text-slate-500 dark:text-purple-300/70">
                {t.footerTagline}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-600 dark:text-slate-300">
            <button onClick={() => onNavigate('observatory')} className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors">
              {t.navObservatory}
            </button>
            <button onClick={() => onNavigate('dreams')} className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors">
              {t.navDreams}
            </button>
            <button onClick={() => onNavigate('video')} className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors">
              {t.navVideo}
            </button>
            <button onClick={() => onNavigate('stories')} className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors">
              {t.navStories}
            </button>
            <button onClick={() => onNavigate('journal')} className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors">
              {t.navJournal}
            </button>
            <button
              onClick={onOpenZipModal}
              className="text-purple-600 dark:text-purple-400 font-semibold hover:underline flex items-center gap-1"
            >
              <FolderArchive className="w-3.5 h-3.5" />
              <span>Project ZIP</span>
            </button>
          </div>

        </div>

        {/* Copyright and Accessibility note */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 dark:text-slate-500">
          <p>© {new Date().getFullYear()} Pip's Midnight Observatory. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Designed for gentle bedtime sleep & peaceful dreams</span>
            <span aria-hidden="true">·</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-400 inline" />
          </div>
        </div>

      </div>
    </footer>
  );
};
