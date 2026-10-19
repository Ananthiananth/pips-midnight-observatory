import React, { useState } from 'react';
import { Telescope, Compass, BookOpen, Volume2, Sparkles, MessageCircle, Box } from 'lucide-react';
import { LanguageCode } from '../types';
import { UI_TRANSLATIONS } from '../data/i18n';
import { soundSynth } from '../services/soundSynth';
import { Pip3DModel } from './Pip3DModel';

interface PipObservatoryHeroProps {
  currentLang: LanguageCode;
  theme: 'light' | 'dark';
  onOpenTelescope: () => void;
  onNavigate: (sectionId: string) => void;
}

const PIP_WISDOMS: Record<LanguageCode, string[]> = {
  en: [
    "Welcome to my observatory! Look through the brass telescope to find your lucky constellation tonight.",
    "Did you know? Every star in the sky is listening to your quiet bedtime wishes.",
    "Rabbits hop higher when the moon is full, and unicorns love raspberry stardust tea!",
    "When you close your eyes, your imagination takes flight to places words can hardly describe.",
    "Don't worry about tomorrow yet, little dreamer. Tonight is for rest, wonder, and sweet dreams."
  ],
  ta: [
    "என் வானாய்வகத்திற்கு நல்வரவு! தொலைநோக்கியில் உங்கள் விண்மீன் கூட்டத்தைக் கண்டுபிடியுங்கள்.",
    "வானத்தில் உள்ள ஒவ்வொரு நட்சத்திரமும் உங்களின் நல்ல ஆசைகளைக் கனிவோடு கேட்கிறது.",
    "முழு நிலவு நாளில் முயல்கள் மிக உயரமாகத் துள்ளி விளையாடும் என்று உங்களுக்குத் தெரியுமா?",
    "கண்களை மூடும் போது உங்கள் கற்பனை சிறகடித்து பறந்து அற்புத உலகங்களுக்கு அழைத்துச் செல்லும்.",
    "நாளைய கவலைகளை மறந்து விட்டு இன்றிரவு நிலவொளியில் இனிதே ஓய்வெடுங்கள்."
  ],
  fr: [
    "Bienvenue dans mon observatoire ! Regarde à travers le télescope en cuivre pour trouver ton étoile.",
    "Chaque étoile dans le ciel écoute patiemment tes souhaits les plus doux.",
    "Quand tu fermes les yeux, ton imagination s'envole vers des royaumes féeriques.",
    "Repose-toi bien ce soir, petit rêveur. Demain sera plein de merveilles."
  ],
  zh: [
    "欢迎来到我的午夜天文台！透过铜制望远镜，寻找今晚守护你的专属星座吧。",
    "你知道吗？天上的每一颗星星，都在温柔倾听你悄悄许下的睡前愿望。",
    "闭上双眼，你的想象力就会插上星光的翅膀，飞往梦境的奇迹之地。",
    "好好休息吧，亲爱的小梦想家。今夜属于安宁、甜蜜与星光。"
  ],
  hi: [
    "मेरी वेधशाला में आपका स्वागत है! दूरबीन से देखिए और अपना प्यारा नक्षत्र ढूंढिए।",
    "क्या आप जानते हैं? रात का हर तारा आपकी प्यारी इच्छाओं को बड़े प्यार से सुनता है।",
    "आँखें बंद कीजिए और सपनों के सुंदर जहाँ में सैर कीजिए।",
    "चिंताओं को छोड़िए और तारों की छांव में मीठी नींद लीजिए।"
  ],
  te: [
    "నా నక్షత్రశాలకు స్వాగతం! టెలిస్కోప్ ద్వారా మీ అదృష్ట నక్షత్రాన్ని చూడండి.",
    "ఆకాశంలోని ప్రతి తార మీ మంచి కోరికలను వింటుందని మీకు తెలుసా?",
    "కళ్ళు మూసుకుని చక్కని కలల లోకంలో విహరించండి. శుభరాత్రి!"
  ],
  ml: [
    "എന്റെ നിരീക്ഷണാലയത്തിലേക്ക് സ്വാഗതം! ടെലിസ്കോപ്പിലൂടെ നിങ്ങളുടെ നക്ഷത്രത്തെ കണ്ടെത്തൂ.",
    "നിങ്ങൾ കണ്ണുകൾ അടയ്ക്കുമ്പോൾ ഭാവന ചിറകടിച്ചു പറക്കും. സുഖമായി ഉറങ്ങൂ!"
  ],
  kn: [
    "ನನ್ನ ಖಗೋಳಾಲಯಕ್ಕೆ ಸ್ವಾಗತ! ದೂರದರ್ಶಕದ ಮೂಲಕ ನಿಮ್ಮ ನಕ್ಷತ್ರವನ್ನು ನೋಡಿ.",
    "ಕಣ್ಣು ಮುಚ್ಚಿ ಸುಂದರ ಕನಸಿನ ಲೋಕಕ್ಕೆ ತೆರಳಿ. ಶುಭರಾತ್ರಿ!"
  ],
  es: [
    "¡Bienvenido a mi observatorio! Mira por el telescopio para hallar tu constelación guardiana.",
    "Cada estrella del firmamento escucha tus susurros antes de dormir.",
    "Descansa esta noche, pequeño soñador. El universo vela por ti."
  ],
  de: [
    "Willkommen in meiner Sternwarte! Blicke durch das Messingteleskop und finde dein Sternbild.",
    "Jeder Stern am Himmel lauscht deinen leisen Wünschen.",
    "Schlaf gut, kleiner Träumer. Morgen wartet ein neuer Zauber auf dich."
  ],
  ja: [
    "ぼくの天文台へようこそ！しんちゅうの望遠鏡でのぞいて、今夜の星座を探してみてね。",
    "夜空の星たちは、きみのやさしい願いごとをいつも静かに聞いてくれているよ。",
    "目を閉じれば、星の光の向こうにある素敵な夢の世界へ旅立てるよ。おやすみなさい。"
  ]
};

export const PipObservatoryHero: React.FC<PipObservatoryHeroProps> = ({
  currentLang,
  theme,
  onOpenTelescope,
  onNavigate
}) => {
  const t = UI_TRANSLATIONS[currentLang] || UI_TRANSLATIONS.en;
  const wisdomList = PIP_WISDOMS[currentLang] || PIP_WISDOMS.en;
  const [wisdomIndex, setWisdomIndex] = useState(0);
  const [isWaving, setIsWaving] = useState(false);
  const [heroView, setHeroView] = useState<'3d-model' | 'observatory-dome'>('3d-model');

  const handlePipClick = () => {
    soundSynth.playPipGreeting();
    setIsWaving(true);
    setWisdomIndex((prev) => (prev + 1) % wisdomList.length);
    setTimeout(() => setIsWaving(false), 800);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background ambient radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-purple-400/15 via-indigo-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Kicker Tag */}
        <div className="flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
          <span>{t.heroBadge}</span>
          <span aria-hidden="true">·</span>
          <span>50 Dream Journeys</span>
          <span aria-hidden="true">·</span>
          <span>11 Languages</span>
        </div>

        {/* 2-Column Desktop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Column 1: Copy and Primary Actions */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              {t.heroTitle}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-purple-100/90 leading-relaxed max-w-2xl font-normal">
              {t.heroSubtitle}
            </p>

            {/* Primary CTA Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => {
                  soundSynth.playStarTwinkle();
                  onNavigate('stories');
                }}
                className="px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-amber-200" />
                <span>{t.heroCtaStories}</span>
              </button>

              <button
                onClick={() => {
                  soundSynth.playStarTwinkle();
                  onNavigate('dreams');
                }}
                className="px-5 py-3 rounded-xl text-sm font-semibold text-purple-900 dark:text-purple-100 bg-purple-100/80 hover:bg-purple-200/90 dark:bg-purple-900/40 dark:hover:bg-purple-900/70 border border-purple-200 dark:border-purple-700/60 transition-all flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-purple-600 dark:text-purple-300" />
                <span>{t.heroCtaDreams}</span>
              </button>

              <button
                onClick={() => {
                  soundSynth.playBellChime();
                  onOpenTelescope();
                }}
                className="px-4 py-3 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors flex items-center gap-2 shadow-sm"
              >
                <Telescope className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                <span>{t.heroTelescopeBtn}</span>
              </button>
            </div>

            {/* Interactive Pip Speech Bubble */}
            <div className="pt-3">
              <div
                onClick={handlePipClick}
                className="cursor-pointer group p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 bg-gradient-to-r from-purple-50/90 via-indigo-50/70 to-pink-50/80 dark:from-purple-950/60 dark:via-indigo-950/40 dark:to-slate-900/80 border-purple-200/80 dark:border-purple-800/60 hover:border-purple-400 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="relative shrink-0">
                    <img
                      src="/src/assets/images/pip_astronomer_portrait_1792337958181.jpg"
                      alt="Pip the Astronomer"
                      className={`w-12 h-12 rounded-full border-2 border-amber-300 shadow-md object-cover transition-transform duration-300 ${isWaving ? 'scale-110 -rotate-6' : 'group-hover:scale-105'}`}
                    />
                    <span className="absolute -bottom-1 -right-1 bg-amber-400 text-[10px] text-amber-950 font-bold px-1 rounded-full shadow">
                      Pip
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between text-xs text-purple-700 dark:text-purple-300 font-semibold mb-1">
                      <span className="flex items-center gap-1.5">
                        <MessageCircle className="w-3.5 h-3.5 text-purple-500" />
                        Pip's Observatory Whisper
                      </span>
                      <span className="text-[11px] text-slate-400 group-hover:text-purple-500 transition-colors">
                        Click Pip for more ✨
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 italic font-medium leading-relaxed">
                      "{wisdomList[wisdomIndex]}"
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Column 2: Interactive 3D Pip Model & Observatory Artwork Card */}
          <div className="lg:col-span-5 space-y-3">
            {/* View Switcher Tabs */}
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center p-1 rounded-2xl bg-purple-100/80 dark:bg-slate-900/90 border border-purple-200/80 dark:border-purple-800/60 shadow-sm">
                <button
                  type="button"
                  onClick={() => {
                    setHeroView('3d-model');
                    soundSynth.playStarTwinkle();
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    heroView === '3d-model'
                      ? 'bg-white dark:bg-purple-900/80 text-purple-700 dark:text-purple-200 shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-300'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>3D Pip Model</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setHeroView('observatory-dome');
                    soundSynth.playStarTwinkle();
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    heroView === 'observatory-dome'
                      ? 'bg-white dark:bg-purple-900/80 text-purple-700 dark:text-purple-200 shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-300'
                  }`}
                >
                  <Telescope className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Observatory Dome</span>
                </button>
              </div>

              <span className="text-[11px] font-semibold text-purple-600 dark:text-purple-300/80 hidden sm:inline">
                {heroView === '3d-model' ? '✨ Drag to spin Pip' : '🔭 Brass Telescope'}
              </span>
            </div>

            {/* Content Display based on active tab */}
            {heroView === '3d-model' ? (
              <div className="animate-in fade-in duration-200">
                <Pip3DModel theme={theme} />
              </div>
            ) : (
              <div className="relative rounded-3xl overflow-hidden border border-purple-200/80 dark:border-purple-800/60 shadow-2xl shadow-purple-900/15 group animate-in fade-in duration-200">
                <img
                  src="/src/assets/images/pip_observatory_hero_1792337958673.jpg"
                  alt="Pip's Midnight Observatory under Moon and Starlight"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim Overlay with quick actions */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-amber-300 block">
                        Active Constellation
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                        Pegasus & The Starlight Bridge
                      </h3>
                    </div>
                    <button
                      onClick={() => {
                        soundSynth.playBellChime();
                        onOpenTelescope();
                      }}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/30 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <Telescope className="w-3.5 h-3.5" />
                      <span>View Sky</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
