import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, Film, Sparkles, PlusCircle, X, ChevronLeft, ChevronRight, Wand2, RefreshCw, AlertCircle, CheckCircle2 } from 'lucide-react';
import { DreamIdea, DreamCategory, LanguageCode } from '../types';
import { DREAM_IDEAS } from '../data/dreamsData';
import { UI_TRANSLATIONS } from '../data/i18n';
import { soundSynth } from '../services/soundSynth';
import { DreamVideoStudio } from './DreamVideoStudio';

interface DreamExplorerProps {
  currentLang: LanguageCode;
  selectedDream: DreamIdea;
  onSelectDream: (dream: DreamIdea) => void;
}

export const DreamExplorer: React.FC<DreamExplorerProps> = ({
  currentLang,
  selectedDream,
  onSelectDream
}) => {
  const t = UI_TRANSLATIONS[currentLang] || UI_TRANSLATIONS.en;
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<DreamCategory | 'all'>('all');

  // Video generation state
  const [isGeneratingVideo, setIsGeneratingVideo] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [generationError, setGenerationError] = useState<string | null>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  // Custom Dream Modal state
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [customWishTitle, setCustomWishTitle] = useState('');
  const [customWishDetails, setCustomWishDetails] = useState('');
  const [customCategory, setCustomCategory] = useState<DreamCategory>('magic');

  // Filter and search
  const filteredDreams = useMemo(() => {
    return DREAM_IDEAS.filter((dream) => {
      const matchesCategory = selectedCategory === 'all' || dream.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        dream.title.toLowerCase().includes(q) ||
        dream.description.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  // Horizontal scroll buttons
  const scrollGallery = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      galleryRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleSelectDream = (dream: DreamIdea) => {
    soundSynth.playStarTwinkle();
    onSelectDream(dream);
    // Do NOT start video generation just by selecting; wait for Create a Video click
    setGenerationError(null);
  };

  const handleCreateVideo = async () => {
    soundSynth.playBellChime();
    setIsGeneratingVideo(true);
    setGenerationProgress(10);
    setGenerationError(null);
    setIsVideoReady(false);

    try {
      // Simulate real progressive scene & sound synthesis initialization for selected dream
      const steps = [
        { progress: 25, delay: 350 },
        { progress: 55, delay: 450 },
        { progress: 85, delay: 450 },
        { progress: 100, delay: 350 }
      ];

      for (const s of steps) {
        await new Promise((resolve) => setTimeout(resolve, s.delay));
        setGenerationProgress(s.progress);
      }

      setIsGeneratingVideo(false);
      setIsVideoReady(true);

      // Smoothly scroll to the generated video
      setTimeout(() => {
        videoContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);

    } catch (err: unknown) {
      console.error('Failed to generate video:', err);
      setIsGeneratingVideo(false);
      setGenerationError('Could not generate the dream video. Please try again.');
    }
  };

  const handleCreateCustomDream = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customWishTitle.trim()) return;

    const text = (customWishTitle + ' ' + customWishDetails).toLowerCase();
    let scene = 'custom';
    if (text.includes('rabbit') || text.includes('bunny')) scene = 'rabbits';
    else if (text.includes('puppy') || text.includes('dog')) scene = 'puppies';
    else if (text.includes('dolphin') || text.includes('fish') || text.includes('ocean') || text.includes('sea')) scene = 'dolphin';
    else if (text.includes('unicorn') || text.includes('pegasus')) scene = 'unicorn';
    else if (text.includes('dragon')) scene = 'dragon';
    else if (text.includes('butterfl')) scene = 'butterflies';
    else if (text.includes('rocket') || text.includes('planet') || text.includes('star') || text.includes('moon')) scene = 'space';
    else if (text.includes('cloud') || text.includes('balloon') || text.includes('fly')) scene = 'cloud';
    else if (text.includes('fairy') || text.includes('mushroom') || text.includes('forest')) scene = 'forest';
    else if (text.includes('train')) scene = 'train';

    const customDream: DreamIdea = {
      id: `custom-${Date.now()}`,
      number: 99,
      title: customWishTitle.trim(),
      description: customWishDetails.trim() || 'A personal dream woven from starlight and pure imagination.',
      category: customCategory,
      categoryLabel: 'Custom Wish',
      icon: '✨',
      sceneType: scene,
      primaryColor: '#8b5cf6',
      accentColor: '#ede9fe',
      elements: ['Personal Wish', 'Starlight Aura', 'Gentle Clouds', 'Night Harmony'],
      captions: {
        act1: `Your bedtime wish takes flight: "${customWishTitle}" begins in twilight peace...`,
        act2: customWishDetails ? `${customWishDetails.slice(0, 75)}...` : 'Magical lights guide your steps into the center of the wish.',
        act3: 'Wonder surrounds you as stars celebrate your dream in radiant colors.',
        act4: 'Carried gently into warm serenity, your heart rests in pure comfort.'
      }
    };

    setIsCustomModalOpen(false);
    setCustomWishTitle('');
    setCustomWishDetails('');
    onSelectDream(customDream);
    soundSynth.playStarTwinkle();
  };

  return (
    <section id="dreams-section" className="py-12 lg:py-16 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Description */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-600 dark:text-purple-300 uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Wishes & Dream Options</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              {t.dreamsHeader}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 max-w-2xl">
              Scroll or swipe horizontally through all 50 dream wishes. Tap any dream title to select it, then click Create a Video to bring it to life!
            </p>
          </div>

          {/* Write My Own Dream Button */}
          <button
            onClick={() => setIsCustomModalOpen(true)}
            className="self-start md:self-auto px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-md shadow-pink-500/20 transition-all flex items-center gap-2 shrink-0"
          >
            <PlusCircle className="w-4 h-4 text-pink-200" />
            <span>{t.writeOwnDream}</span>
          </button>
        </div>

        {/* Filter Controls & Search */}
        <div className="space-y-4 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            
            {/* Search Input */}
            <div className="relative max-w-md w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.dreamsSearchPlaceholder}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl text-xs sm:text-sm border transition-colors bg-white dark:bg-slate-900/90 border-slate-200 dark:border-purple-900/60 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-purple-500 shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
                  aria-label="Clear Search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Gallery Navigation Arrows */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <span className="text-xs text-slate-500 dark:text-purple-300/70 font-medium">
                Swipe or scroll:
              </span>
              <button
                onClick={() => scrollGallery('left')}
                className="p-2 rounded-xl border bg-white dark:bg-slate-900 border-slate-200 dark:border-purple-900/60 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-sm transition-colors"
                aria-label="Scroll dream options left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollGallery('right')}
                className="p-2 rounded-xl border bg-white dark:bg-slate-900 border-slate-200 dark:border-purple-900/60 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-sm transition-colors"
                aria-label="Scroll dream options right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100/90 dark:bg-slate-900/80 border border-slate-200/80 dark:border-purple-900/40">
            <button
              onClick={() => { setSelectedCategory('all'); soundSynth.playStarTwinkle(); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-white dark:bg-purple-900/70 text-purple-700 dark:text-purple-200 shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t.allCategories} ({DREAM_IDEAS.length})
            </button>
            <button
              onClick={() => { setSelectedCategory('animals'); soundSynth.playStarTwinkle(); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === 'animals'
                  ? 'bg-white dark:bg-purple-900/70 text-purple-700 dark:text-purple-200 shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              🐾 {t.catAnimals} (1-10)
            </button>
            <button
              onClick={() => { setSelectedCategory('flying'); soundSynth.playStarTwinkle(); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === 'flying'
                  ? 'bg-white dark:bg-purple-900/70 text-purple-700 dark:text-purple-200 shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              🪽 {t.catFlying} (11-20)
            </button>
            <button
              onClick={() => { setSelectedCategory('magic'); soundSynth.playStarTwinkle(); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === 'magic'
                  ? 'bg-white dark:bg-purple-900/70 text-purple-700 dark:text-purple-200 shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              🪄 {t.catMagic} (21-30)
            </button>
            <button
              onClick={() => { setSelectedCategory('space'); soundSynth.playStarTwinkle(); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === 'space'
                  ? 'bg-white dark:bg-purple-900/70 text-purple-700 dark:text-purple-200 shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              🚀 {t.catSpace} (31-40)
            </button>
            <button
              onClick={() => { setSelectedCategory('cozy'); soundSynth.playStarTwinkle(); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === 'cozy'
                  ? 'bg-white dark:bg-purple-900/70 text-purple-700 dark:text-purple-200 shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              🌙 {t.catCozy} (41-50)
            </button>
          </div>
        </div>

        {/* 2. Horizontally Scrollable Gallery of Dream Titles */}
        <div className="relative">
          <div
            ref={galleryRef}
            className="flex gap-3.5 sm:gap-4 overflow-x-auto pb-4 pt-1 px-1 scroll-smooth snap-x snap-mandatory focus:outline-none"
            tabIndex={0}
            role="region"
            aria-label="Dream options gallery"
          >
            {filteredDreams.map((dream) => {
              const isSelected = selectedDream?.id === dream.id;
              return (
                <button
                  key={dream.id}
                  onClick={() => handleSelectDream(dream)}
                  className={`min-w-[210px] sm:min-w-[250px] md:min-w-[270px] max-w-[290px] shrink-0 snap-start p-4 sm:p-5 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-center min-h-[92px] cursor-pointer ${
                    isSelected
                      ? 'bg-purple-100/90 dark:bg-purple-950/90 border-purple-500 ring-2 ring-purple-400/60 shadow-md transform -translate-y-0.5'
                      : 'bg-white/95 dark:bg-slate-900/80 border-slate-200 dark:border-purple-900/40 hover:border-purple-300 dark:hover:border-purple-700 hover:bg-white dark:hover:bg-slate-800/90 shadow-sm'
                  }`}
                  aria-pressed={isSelected}
                >
                  {/* Shows ONLY its dream title (with subtle active indicator) */}
                  <span className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-snug line-clamp-3">
                    {dream.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {filteredDreams.length === 0 && (
          <div className="text-center py-10 px-4 rounded-2xl border border-dashed border-slate-300 dark:border-purple-900/60 bg-slate-50 dark:bg-slate-900/50 my-4">
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              No dream found matching "{searchQuery}".
            </p>
          </div>
        )}

        {/* 3. Selected Dream Display & "Create a Video" Action Panel */}
        {selectedDream && (
          <div className="mt-6 p-5 sm:p-6 rounded-2xl border transition-all bg-gradient-to-r from-purple-50/95 via-indigo-50/90 to-pink-50/90 dark:from-purple-950/70 dark:via-indigo-950/60 dark:to-slate-900/90 border-purple-200 dark:border-purple-800/80 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              
              {/* Visible Selected Dream Title */}
              <div className="space-y-1">
                <div className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Selected Dream</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                  {selectedDream.title}
                </h4>
              </div>

              {/* Clear Create a Video Button */}
              <button
                onClick={handleCreateVideo}
                disabled={isGeneratingVideo}
                className="px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-500/25 transition-all flex items-center justify-center gap-2 shrink-0 active:scale-95 cursor-pointer disabled:opacity-60"
              >
                <Film className="w-4 h-4 text-amber-200" />
                <span>Create a Video</span>
              </button>

            </div>
          </div>
        )}

        {/* 4. Creating the Video Loading State Animation */}
        {isGeneratingVideo && (
          <div className="mt-8 p-8 sm:p-10 rounded-3xl border border-purple-200 dark:border-purple-800 bg-white dark:bg-[#111428] shadow-xl text-center space-y-4 animate-in fade-in duration-200">
            <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-purple-200 dark:border-purple-900/60 border-t-purple-600 dark:border-t-purple-400 animate-spin" />
              <Film className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-['Outfit']">
                Creating your dream video…
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-purple-200/80 mt-1 max-w-md mx-auto">
                Setting up distinctive scenery, characters, and celestial lullaby chords for "{selectedDream.title}"
              </p>
            </div>

            {/* Progress bar */}
            <div className="max-w-md mx-auto w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden border border-purple-200 dark:border-purple-900/60">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
                style={{ width: `${generationProgress}%` }}
              />
            </div>
            <span className="text-xs font-mono text-purple-600 dark:text-purple-400 font-semibold block">
              {generationProgress}%
            </span>
          </div>
        )}

        {/* Generation Error & Retry Button */}
        {generationError && (
          <div className="mt-6 p-5 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/80 text-red-700 dark:text-red-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <AlertCircle className="w-5 h-5 shrink-0 text-red-500" />
              <span>{generationError}</span>
            </div>
            <button
              onClick={handleCreateVideo}
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-500 transition-colors flex items-center justify-center gap-1.5 shrink-0"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Retry Creating Video</span>
            </button>
          </div>
        )}

        {/* 5. Automatically Display the Generated Video */}
        {isVideoReady && !isGeneratingVideo && (
          <div ref={videoContainerRef} className="mt-8 pt-4">
            <div className="mb-4 flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 px-4 py-2.5 rounded-xl">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Your dream video is ready! Enjoy the 60-second animated story below.</span>
            </div>

            <DreamVideoStudio
              currentLang={currentLang}
              selectedDream={selectedDream}
              onChangeDream={() => {
                setIsVideoReady(false);
                if (galleryRef.current) {
                  galleryRef.current.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              autoPlay={true}
            />
          </div>
        )}

      </div>

      {/* Write My Own Dream Modal */}
      {isCustomModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-lg rounded-3xl p-6 sm:p-7 bg-white dark:bg-[#12162d] border border-slate-200 dark:border-purple-800 shadow-2xl relative">
            <button
              onClick={() => setIsCustomModalOpen(false)}
              className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-slate-100 dark:bg-slate-800"
              aria-label="Close Modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2.5 mb-4">
              <Wand2 className="w-6 h-6 text-pink-500" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {t.writeOwnDream}
              </h3>
            </div>

            <form onSubmit={handleCreateCustomDream} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
                  What is your bedtime wish or dream title?
                </label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={customWishTitle}
                  onChange={(e) => setCustomWishTitle(e.target.value)}
                  placeholder="e.g. Floating on a giant pancake with maple syrup rivers..."
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border transition-colors bg-white dark:bg-slate-900 border-slate-200 dark:border-purple-900/60 text-slate-900 dark:text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
                  Tell Pip more details (characters, colors, feelings)
                </label>
                <textarea
                  rows={3}
                  maxLength={300}
                  value={customWishDetails}
                  onChange={(e) => setCustomWishDetails(e.target.value)}
                  placeholder="e.g. Friendly talking squirrels, warm strawberry jam clouds, and gentle lullaby harps..."
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border transition-colors bg-white dark:bg-slate-900 border-slate-200 dark:border-purple-900/60 text-slate-900 dark:text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
                  Dream Realm Atmosphere
                </label>
                <select
                  value={customCategory}
                  onChange={(e) => setCustomCategory(e.target.value as DreamCategory)}
                  className="w-full px-3 py-2 rounded-xl text-xs sm:text-sm border bg-white dark:bg-slate-900 border-slate-200 dark:border-purple-900/60 text-slate-900 dark:text-white"
                >
                  <option value="animals">Animals & Fluffy Companions</option>
                  <option value="flying">Flying & Floating Above Clouds</option>
                  <option value="magic">Magic Spells & Fairy Kingdoms</option>
                  <option value="space">Deep Space & Glowing Oceans</option>
                  <option value="cozy">Cozy Tea & Quiet Warmth</option>
                </select>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsCustomModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-md shadow-pink-500/20 flex items-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4 text-amber-200" />
                  <span>Select Dream</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
