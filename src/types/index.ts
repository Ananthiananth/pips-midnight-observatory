export type LanguageCode =
  | 'en'
  | 'ta'
  | 'fr'
  | 'zh'
  | 'hi'
  | 'te'
  | 'ml'
  | 'kn'
  | 'es'
  | 'de'
  | 'ja';

export interface LanguageInfo {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  speechLang: string;
}

export type DreamCategory =
  | 'animals'
  | 'flying'
  | 'magic'
  | 'space'
  | 'cozy';

export interface DreamIdea {
  id: string;
  number: number;
  title: string;
  description: string;
  category: DreamCategory;
  categoryLabel: string;
  icon: string;
  sceneType: string;
  primaryColor: string;
  accentColor: string;
  elements: string[];
  captions: {
    act1: string;
    act2: string;
    act3: string;
    act4: string;
  };
}

export interface StoryBranch {
  optionA: string;
  optionB: string;
  branchA: string;
  branchB: string;
}

export interface StoryChapter {
  heading: string;
  text: string;
}

export interface StoryTranslation {
  title: string;
  subtitle: string;
  chapters: StoryChapter[];
  choicePrompt: string;
  branch: StoryBranch;
  conclusion: string;
}

export interface BedtimeStory {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  category: string;
  themeColor: string;
  icon: string;
  estimatedMinutes: number;
  chapters: StoryChapter[];
  choicePrompt: string;
  branch: StoryBranch;
  conclusion: string;
  translations: Partial<Record<LanguageCode, StoryTranslation>>;
}

export interface JournalEntry {
  id: string;
  title: string;
  content: string;
  mood: 'peaceful' | 'magical' | 'happy' | 'cosmic' | 'adventurous';
  rating: number;
  date: string;
  dreamThemeId?: string;
  customKeywords?: string[];
}
