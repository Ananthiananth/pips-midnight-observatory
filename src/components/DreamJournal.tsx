import React, { useState, useEffect } from 'react';
import { BookMarked, Plus, Trash2, Film, Star, Sparkles, Edit2, Calendar, Smile } from 'lucide-react';
import { JournalEntry, LanguageCode, DreamIdea } from '../types';
import { UI_TRANSLATIONS } from '../data/i18n';
import { soundSynth } from '../services/soundSynth';

interface DreamJournalProps {
  currentLang: LanguageCode;
  onTurnJournalIntoVideo: (dream: DreamIdea) => void;
}

const DEFAULT_EXAMPLE_PROMPTS = [
  "I was floating inside a giant strawberry cheesecake over Paris...",
  "A little blue owl taught me how to read constellations with starlight goggles...",
  "We held a tea party under an ancient willow with talking hedgehogs...",
  "I dove into a warm ocean where the fish were made of glowing stained glass..."
];

const INITIAL_ENTRIES: JournalEntry[] = [
  {
    id: 'entry-seed-1',
    title: 'The Sky Whale with Golden Fins',
    content: 'Last night I floated on top of a giant celestial whale. It swam through purple storm clouds and blew stars from its spout. Everything was quiet and smelled like sweet vanilla rain.',
    mood: 'peaceful',
    rating: 5,
    date: 'Yesterday Night',
    dreamThemeId: 'dream-15'
  },
  {
    id: 'entry-seed-2',
    title: 'Tiny Acorn Bakery with Fairies',
    content: 'I shrunk down to the size of a ladybug and visited a bakery inside an oak knot. The fairies gave me cinnamon star cookies that made me float two inches off the floor!',
    mood: 'magical',
    rating: 5,
    date: 'Two nights ago',
    dreamThemeId: 'dream-22'
  }
];

export const DreamJournal: React.FC<DreamJournalProps> = ({
  currentLang,
  onTurnJournalIntoVideo
}) => {
  const t = UI_TRANSLATIONS[currentLang] || UI_TRANSLATIONS.en;
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    try {
      const saved = localStorage.getItem('pip-dream-journal');
      return saved ? JSON.parse(saved) : INITIAL_ENTRIES;
    } catch {
      return INITIAL_ENTRIES;
    }
  });

  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formTitle, setFormTitle] = useState('');
  const [formContent, setFormContent] = useState('');
  const [formMood, setFormMood] = useState<JournalEntry['mood']>('magical');
  const [formRating, setFormRating] = useState(5);
  const [validationError, setValidationError] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('pip-dream-journal', JSON.stringify(entries));
    } catch {}
  }, [entries]);

  const handleOpenNew = () => {
    setEditingId(null);
    setFormTitle('');
    setFormContent('');
    setFormMood('magical');
    setFormRating(5);
    setValidationError(null);
    setIsEditorOpen(true);
    soundSynth.playStarTwinkle();
  };

  const handleEdit = (entry: JournalEntry) => {
    setEditingId(entry.id);
    setFormTitle(entry.title);
    setFormContent(entry.content);
    setFormMood(entry.mood);
    setFormRating(entry.rating);
    setValidationError(null);
    setIsEditorOpen(true);
  };

  const handleDelete = (id: string) => {
    soundSynth.playStarTwinkle();
    setEntries(prev => prev.filter(e => e.id !== id));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim()) {
      setValidationError('Please give your dream a gentle title.');
      return;
    }
    if (!formContent.trim()) {
      setValidationError('Please write a few words describing your dream.');
      return;
    }
    if (formContent.trim().length > 1000) {
      setValidationError('Dream description should be under 1,000 characters so it fits comfortably in the vault.');
      return;
    }

    soundSynth.playBellChime();

    if (editingId) {
      setEntries(prev =>
        prev.map(item =>
          item.id === editingId
            ? { ...item, title: formTitle.trim(), content: formContent.trim(), mood: formMood, rating: formRating }
            : item
        )
      );
    } else {
      const newEntry: JournalEntry = {
        id: `journal-${Date.now()}`,
        title: formTitle.trim(),
        content: formContent.trim(),
        mood: formMood,
        rating: formRating,
        date: new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
      };
      setEntries(prev => [newEntry, ...prev]);
    }

    setIsEditorOpen(false);
  };

  const handleConvertToVideo = (entry: JournalEntry) => {
    soundSynth.playStarTwinkle();

    const lower = (entry.title + ' ' + entry.content).toLowerCase();
    let scene = 'custom';
    if (lower.includes('rabbit') || lower.includes('bunny')) scene = 'rabbits';
    else if (lower.includes('puppy') || lower.includes('dog')) scene = 'puppies';
    else if (lower.includes('whale')) scene = 'flying_whale';
    else if (lower.includes('dragon')) scene = 'dragon';
    else if (lower.includes('cloud') || lower.includes('sky')) scene = 'cloud';
    else if (lower.includes('space') || lower.includes('star')) scene = 'space';
    else if (lower.includes('ocean') || lower.includes('sea') || lower.includes('fish')) scene = 'dolphin';
    else if (lower.includes('fairy') || lower.includes('forest')) scene = 'fairy_forest';

    const dreamIdea: DreamIdea = {
      id: `journal-video-${entry.id}`,
      number: 88,
      title: entry.title,
      description: entry.content,
      category: 'cozy',
      categoryLabel: 'Journal Dream',
      icon: '📖',
      sceneType: scene,
      primaryColor: '#8b5cf6',
      accentColor: '#ede9fe',
      elements: ['Personal Memory', 'Stardust Reflection', 'Gentle Night Wind'],
      captions: {
        act1: `From your personal dream vault: "${entry.title}" awakens gently...`,
        act2: `${entry.content.slice(0, 80)}...`,
        act3: 'Sweet starlight illuminates your memory across the midnight horizon.',
        act4: 'Resting safe in your heart, this dream wraps you in soothing peace.'
      }
    };

    onTurnJournalIntoVideo(dreamIdea);
  };

  return (
    <section id="journal-section" className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-600 dark:text-purple-300 uppercase tracking-wider mb-2">
              <BookMarked className="w-4 h-4 text-pink-500" />
              <span>Private Starlight Vault</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              {t.journalHeader}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
              {t.journalSubtitle}
            </p>
          </div>

          <button
            onClick={handleOpenNew}
            className="self-start md:self-auto px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-500/20 transition-all flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4 text-white" />
            <span>{t.journalNewEntry}</span>
          </button>
        </div>

        {/* Example prompts strip */}
        <div className="mb-8 p-4 rounded-2xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900/50">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-700 dark:text-purple-300 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Need inspiration for tonight's entry? Click any seed prompt:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {DEFAULT_EXAMPLE_PROMPTS.map((prompt, i) => (
              <button
                key={i}
                onClick={() => {
                  setFormTitle(`Dream of ${prompt.slice(0, 24)}...`);
                  setFormContent(prompt);
                  setIsEditorOpen(true);
                  soundSynth.playStarTwinkle();
                }}
                className="text-xs px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800 text-slate-700 dark:text-slate-300 hover:border-purple-400 transition-colors"
              >
                "{prompt}"
              </button>
            ))}
          </div>
        </div>

        {/* Entries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="p-5 rounded-2xl border transition-all duration-200 bg-white dark:bg-slate-900/90 border-slate-200 dark:border-purple-900/50 hover:border-purple-300 dark:hover:border-purple-700 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-purple-300/70 mb-2">
                  <span className="flex items-center gap-1 font-medium">
                    <Calendar className="w-3 h-3 text-purple-500" />
                    {entry.date}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: entry.rating }).map((_, r) => (
                      <Star key={r} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {entry.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed whitespace-pre-wrap">
                  {entry.content}
                </p>
              </div>

              {/* Bottom Actions */}
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-purple-900/30 flex items-center justify-between gap-2">
                <button
                  onClick={() => handleConvertToVideo(entry)}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all flex items-center gap-1.5 shadow-sm"
                  title="Generate 1-Minute Video from this entry"
                >
                  <Film className="w-3.5 h-3.5 text-amber-200" />
                  <span>{t.journalConvertToVideo}</span>
                </button>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleEdit(entry)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                    title="Edit Entry"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleDelete(entry.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-red-500"
                    title="Delete Entry"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {entries.length === 0 && (
          <div className="text-center py-12 px-4 rounded-2xl border border-dashed border-slate-300 dark:border-purple-900/60 bg-slate-50 dark:bg-slate-900/40">
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              {t.journalEmpty}
            </p>
          </div>
        )}

      </div>

      {/* Editor Modal */}
      {isEditorOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-lg rounded-3xl p-6 sm:p-7 bg-white dark:bg-[#12162d] border border-slate-200 dark:border-purple-800 shadow-2xl relative">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              {editingId ? 'Edit Dream Entry' : 'Record a New Dream'}
            </h3>

            {validationError && (
              <div className="p-3 mb-4 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 text-xs text-red-600 dark:text-red-300">
                {validationError}
              </div>
            )}

            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
                  Dream Title
                </label>
                <input
                  type="text"
                  required
                  maxLength={120}
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="e.g. Sailing on a cloud of strawberry cream..."
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border bg-white dark:bg-slate-900 border-slate-200 dark:border-purple-900/60 text-slate-900 dark:text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
                  What happened in your dream?
                </label>
                <textarea
                  rows={4}
                  required
                  maxLength={1000}
                  value={formContent}
                  onChange={(e) => setFormContent(e.target.value)}
                  placeholder="Describe the colors, who you met, and how cozy you felt..."
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border bg-white dark:bg-slate-900 border-slate-200 dark:border-purple-900/60 text-slate-900 dark:text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
                    Dream Mood
                  </label>
                  <select
                    value={formMood}
                    onChange={(e) => setFormMood(e.target.value as JournalEntry['mood'])}
                    className="w-full px-3 py-2 rounded-xl text-xs border bg-white dark:bg-slate-900 border-slate-200 dark:border-purple-900/60 text-slate-900 dark:text-white"
                  >
                    <option value="peaceful">Peaceful & Calm</option>
                    <option value="magical">Magical Wonder</option>
                    <option value="happy">Joyful & Silly</option>
                    <option value="cosmic">Cosmic Space</option>
                    <option value="adventurous">Courageous Quest</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
                    Star Sweetness Rating
                  </label>
                  <select
                    value={formRating}
                    onChange={(e) => setFormRating(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl text-xs border bg-white dark:bg-slate-900 border-slate-200 dark:border-purple-900/60 text-slate-900 dark:text-white"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ 5 Stars (Unforgettable)</option>
                    <option value={4}>⭐⭐⭐⭐ 4 Stars (Very Sweet)</option>
                    <option value={3}>⭐⭐⭐ 3 Stars (Gentle & Cozy)</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsEditorOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-500/20"
                >
                  {t.journalSave}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
