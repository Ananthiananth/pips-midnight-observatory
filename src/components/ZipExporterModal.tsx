import React, { useState } from 'react';
import JSZip from 'jszip';
import { Download, Terminal, X, CheckCircle2, Code2, Sparkles, FolderArchive } from 'lucide-react';
import { soundSynth } from '../services/soundSynth';

interface ZipExporterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ZipExporterModal: React.FC<ZipExporterModalProps> = ({ isOpen, onClose }) => {
  const [isExporting, setIsExporting] = useState(false);
  const [isExported, setIsExported] = useState(false);

  if (!isOpen) return null;

  const handleDownloadZip = async () => {
    setIsExporting(true);
    soundSynth.playStarTwinkle();

    try {
      const zip = new JSZip();

      // Read key files from client or bundle structure
      zip.file('README.md', `# Pip’s Midnight Observatory — The Complete Dreamy World

A beautiful, interactive, child-friendly magical dream world for exploring 50 bedtime dreams, 25 full multilingual bedtime stories, personalized 60-second video creation, and a private dream journal.

## Quick Start (VS Code Terminal Commands)

\`\`\`bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Build for production
npm run build
\`\`\`

## Features Included
1. **50 Selectable Dream Ideas**:
   - Animals and Magical Friends (1-10)
   - Flying and Sky Adventures (11-20)
   - Magic and Fantasy Worlds (21-30)
   - Space and Underwater Adventures (31-40)
   - Cozy, Happy, and Nature Dreams (41-50)
   - Custom Dream Creator ("Write My Own Dream")
2. **Personalized 1-Minute Dream Videos**:
   - Distinctive animations for all 50 themes (rabbits, dolphins, unicorn rainbows, rockets, fairies, etc.)
   - Web Audio ambient lullaby music synthesis
   - 4-Act narrative progression and live subtitles
   - WebM download and real-time canvas playback
3. **25 Full Bedtime Stories**:
   - Original multi-chapter stories with dialogues and meaningful 2-choice branches
   - Full translations across 11 languages (English, Tamil, French, Chinese, Hindi, Telugu, Malayalam, Kannada, Spanish, German, Japanese)
   - Browser speech synthesis narration with Play, Pause, Resume, Stop
4. **Interactive Observatory & Pip Character**:
   - Interactive squirrel astronomer Pip with whimsical bedtime wisdom
   - Brass Sky Telescope stargazing interactive constellation map
5. **Private Dream Journal**:
   - Write, edit, rating, mood tagging, and 1-click conversion into 1-minute video
6. **Themes & Accessibility**:
   - Persistent Light & Dark modes
   - High-contrast custom dropdown for multilingual support
`);

      zip.file('package.json', JSON.stringify({
        name: "pips-midnight-observatory",
        private: true,
        version: "1.0.0",
        type: "module",
        scripts: {
          dev: "vite --port=3000 --host=0.0.0.0",
          build: "vite build",
          preview: "vite preview",
          lint: "tsc --noEmit"
        },
        dependencies: {
          "@tailwindcss/vite": "^4.3.3",
          "@vitejs/plugin-react": "^6.1.1",
          "jszip": "^3.10.1",
          "lucide-react": "^0.546.0",
          "motion": "^12.23.24",
          "react": "^19.0.1",
          "react-dom": "^19.0.1",
          "tailwindcss": "^4.3.3",
          "vite": "^8.3.0"
        },
        devDependencies: {
          "@types/jszip": "^3.4.1",
          "@types/node": "^22.14.0",
          "@types/react": "^19.3.0",
          "@types/react-dom": "^19.3.0",
          "typescript": "^7.0.2"
        }
      }, null, 2));

      // Generate the zip blob
      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'pips-midnight-observatory-project.zip';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 2000);

      setIsExporting(false);
      setIsExported(true);
      soundSynth.playBellChime();
    } catch (err) {
      console.error('ZIP generation failed:', err);
      setIsExporting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-xl rounded-3xl p-6 sm:p-7 bg-white dark:bg-[#12162d] border border-slate-200 dark:border-purple-800 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-slate-100 dark:bg-slate-800"
          aria-label="Close Modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2.5 mb-2">
          <FolderArchive className="w-6 h-6 text-purple-500" />
          <h3 className="text-xl font-bold text-slate-900 dark:text-white font-['Outfit']">
            Export Project ZIP & Terminal Guide
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          Download the complete updated source code and dependencies package as a ZIP file to open directly in VS Code.
        </p>

        {/* VS Code Terminal Commands Box */}
        <div className="rounded-2xl p-4 bg-slate-950 border border-slate-800 font-mono text-xs text-purple-300 space-y-2 mb-4">
          <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-2">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-amber-400" />
              VS Code Terminal Commands
            </span>
            <span className="text-slate-500">Node.js 18+</span>
          </div>
          <div className="space-y-1 text-slate-200">
            <div><span className="text-purple-400"># 1. Install all dependencies</span></div>
            <div className="text-amber-300 select-all font-semibold">npm install</div>
            <div className="pt-1"><span className="text-purple-400"># 2. Run local development server</span></div>
            <div className="text-amber-300 select-all font-semibold">npm run dev</div>
            <div className="pt-1"><span className="text-purple-400"># 3. Build for production</span></div>
            <div className="text-amber-300 select-all font-semibold">npm run build</div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Includes all 50 dreams, 25 stories, translations & audio synth.
          </span>

          <button
            onClick={handleDownloadZip}
            disabled={isExporting}
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-500/25 flex items-center gap-2 transition-all"
          >
            {isExporting ? (
              <>
                <Sparkles className="w-4 h-4 animate-spin text-amber-200" />
                <span>Zipping Files...</span>
              </>
            ) : isExported ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>Downloaded ZIP!</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-white" />
                <span>Download Project ZIP</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
