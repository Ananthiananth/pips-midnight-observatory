import React, { useState } from 'react';
import { X, Sparkles, Eye, Compass, Info } from 'lucide-react';
import { soundSynth } from '../services/soundSynth';

interface InteractiveTelescopeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Constellation {
  id: string;
  name: string;
  myth: string;
  lore: string;
  color: string;
  stars: Array<{ x: number; y: number; size: number }>;
  lines: Array<[number, number]>;
}

const CONSTELLATIONS: Constellation[] = [
  {
    id: 'pip-star',
    name: "Pip's Stargazer Constellation",
    myth: "The friendly squirrel astronomer watching over night wanderers.",
    lore: "Pip discovered this constellation himself on a crisp winter solstice. It guides children who are seeking cozy blankets and sweet thoughts.",
    color: '#facc15',
    stars: [
      { x: 260, y: 140, size: 4.5 },
      { x: 310, y: 170, size: 5 },
      { x: 280, y: 220, size: 4 },
      { x: 240, y: 200, size: 4 },
      { x: 350, y: 220, size: 6 }
    ],
    lines: [[0, 1], [1, 2], [2, 3], [3, 0], [1, 4]]
  },
  {
    id: 'pegasus',
    name: 'Pegasus & The Rainbow Bridge',
    myth: 'The winged celestial steed that flies across pastel clouds.',
    lore: 'Legend says every time Pegasus flaps its silver wings, a shower of gentle shooting stars carries goodnight wishes down to sleeping towns.',
    color: '#c084fc',
    stars: [
      { x: 480, y: 120, size: 5 },
      { x: 560, y: 130, size: 4 },
      { x: 580, y: 210, size: 5.5 },
      { x: 500, y: 200, size: 4.5 },
      { x: 440, y: 250, size: 4 }
    ],
    lines: [[0, 1], [1, 2], [2, 3], [3, 0], [3, 4]]
  },
  {
    id: 'phoenix',
    name: 'The Phoenix of Sweet Dreams',
    myth: 'The bird of gentle golden fire that renews weary spirits.',
    lore: 'When the night is long, the Phoenix sings a low, resonant chord that warms cold toes and brings peaceful restful sleep.',
    color: '#fb923c',
    stars: [
      { x: 140, y: 280, size: 5 },
      { x: 200, y: 310, size: 4.5 },
      { x: 180, y: 370, size: 6 },
      { x: 230, y: 360, size: 4 }
    ],
    lines: [[0, 1], [1, 2], [1, 3]]
  },
  {
    id: 'ursa-major',
    name: 'Ursa Major (The Cozy Honey Bear)',
    myth: 'The celestial bear looking for slumber among the starry hives.',
    lore: 'The great bear loves to curl its paws around the North Star, sleeping contentedly for six months at a time.',
    color: '#38bdf8',
    stars: [
      { x: 400, y: 320, size: 5 },
      { x: 450, y: 315, size: 4.5 },
      { x: 490, y: 340, size: 5 },
      { x: 530, y: 335, size: 6 },
      { x: 520, y: 385, size: 4 },
      { x: 470, y: 390, size: 5 },
      { x: 490, y: 340, size: 4.5 }
    ],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 2]]
  }
];

export const InteractiveTelescopeModal: React.FC<InteractiveTelescopeModalProps> = ({
  isOpen,
  onClose
}) => {
  const [selectedConstellation, setSelectedConstellation] = useState<Constellation>(CONSTELLATIONS[0]);
  const [showConstellationLines, setShowConstellationLines] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-4xl rounded-3xl bg-[#090b17] border border-purple-800/80 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Top Bar */}
        <div className="px-5 py-4 border-b border-purple-900/60 bg-[#0d0f22] flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-300" />
            <div>
              <h3 className="text-base sm:text-lg font-bold font-['Outfit']">
                Pip’s Great Brass Sky Telescope
              </h3>
              <span className="text-[11px] text-purple-300/80 block">
                Point at any star constellation to reveal celestial lore
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowConstellationLines(!showConstellationLines)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors flex items-center gap-1.5 ${
                showConstellationLines
                  ? 'bg-purple-900/80 text-purple-200 border-purple-600'
                  : 'bg-slate-800 text-slate-300 border-slate-700'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{showConstellationLines ? 'Lines: ON' : 'Lines: OFF'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-white bg-slate-800/80"
              aria-label="Close Telescope"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stargazing Interactive Canvas / SVG view */}
        <div className="relative flex-1 bg-gradient-to-b from-[#060712] via-[#0e1026] to-[#120f29] min-h-[340px] sm:min-h-[420px] flex items-center justify-center overflow-hidden">
          
          {/* Subtle telescope reticle ring */}
          <div className="absolute w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] rounded-full border border-purple-500/20 pointer-events-none" />
          <div className="absolute w-[200px] h-[200px] rounded-full border border-purple-500/15 pointer-events-none" />
          <div className="absolute w-full h-[1px] bg-purple-500/10 pointer-events-none" />
          <div className="absolute h-full w-[1px] bg-purple-500/10 pointer-events-none" />

          {/* Background ambient stars */}
          {Array.from({ length: 70 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white animate-twinkle"
              style={{
                top: `${(i * 19) % 95}%`,
                left: `${(i * 37) % 95}%`,
                width: `${(i % 3) + 1}px`,
                height: `${(i % 3) + 1}px`,
                opacity: 0.25 + ((i % 5) * 0.15),
                animationDelay: `${(i * 0.2) % 4}s`
              }}
            />
          ))}

          {/* Interactive Constellations SVG Map */}
          <svg className="w-full h-full max-w-[720px] max-h-[460px] relative z-10" viewBox="0 0 720 460">
            {CONSTELLATIONS.map((c) => {
              const isSelected = selectedConstellation.id === c.id;
              return (
                <g
                  key={c.id}
                  onClick={() => {
                    soundSynth.playStarTwinkle();
                    setSelectedConstellation(c);
                  }}
                  className="cursor-pointer group"
                >
                  {/* Constellation Lines */}
                  {showConstellationLines &&
                    c.lines.map(([i1, i2], lineIdx) => {
                      const p1 = c.stars[i1];
                      const p2 = c.stars[i2];
                      return (
                        <line
                          key={lineIdx}
                          x1={p1.x}
                          y1={p1.y}
                          x2={p2.x}
                          y2={p2.y}
                          stroke={isSelected ? c.color : 'rgba(255, 255, 255, 0.25)'}
                          strokeWidth={isSelected ? 2 : 1}
                          strokeDasharray={isSelected ? 'none' : '4 3'}
                          className="transition-all"
                        />
                      );
                    })}

                  {/* Stars */}
                  {c.stars.map((star, sIdx) => (
                    <g key={sIdx}>
                      <circle
                        cx={star.x}
                        cy={star.y}
                        r={star.size * (isSelected ? 1.4 : 1)}
                        fill={isSelected ? c.color : '#ffffff'}
                        className="transition-transform duration-300"
                      />
                      {isSelected && (
                        <circle
                          cx={star.x}
                          cy={star.y}
                          r={star.size * 2.5}
                          fill="none"
                          stroke={c.color}
                          strokeWidth={1}
                          opacity={0.4}
                          className="animate-pulse"
                        />
                      )}
                    </g>
                  ))}

                  {/* Label */}
                  <text
                    x={c.stars[0].x}
                    y={c.stars[0].y - 12}
                    fill={isSelected ? c.color : 'rgba(255, 255, 255, 0.6)'}
                    fontSize={12}
                    fontWeight={isSelected ? 'bold' : 'normal'}
                    fontFamily="Outfit, sans-serif"
                  >
                    {c.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Constellation Details Drawer */}
        <div className="p-4 sm:p-5 bg-[#0a0c1a] border-t border-purple-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1 max-w-xl">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" style={{ color: selectedConstellation.color }} />
              <h4 className="text-base font-bold text-white font-['Outfit']">
                {selectedConstellation.name}
              </h4>
            </div>
            <p className="text-xs text-purple-200 font-medium">
              "{selectedConstellation.myth}"
            </p>
            <p className="text-xs text-slate-300 leading-relaxed">
              {selectedConstellation.lore}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {CONSTELLATIONS.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  soundSynth.playStarTwinkle();
                  setSelectedConstellation(c);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                  selectedConstellation.id === c.id
                    ? 'bg-purple-600 text-white shadow'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {c.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
