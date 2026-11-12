import React from 'react';

const PALETTES = {
  archaeological: {
    bgFrom: '#1B2D3A',
    bgVia: '#305B6B',
    bgTo: '#5C3A21',
    accent: '#EA9940',
    accentSoft: '#F3C88B',
    tag: 'ARCHAEOLOGY'
  },
  inscription: {
    bgFrom: '#162430',
    bgVia: '#264354',
    bgTo: '#3D484F',
    accent: '#94C2C1',
    accentSoft: '#ECE7DC',
    tag: 'EPIGRAPHY'
  },
  coin: {
    bgFrom: '#1E2530',
    bgVia: '#3A3222',
    bgTo: '#524328',
    accent: '#F59E0B',
    accentSoft: '#FDE68A',
    tag: 'NUMISMATICS & TRADE'
  },
  sculpture: {
    bgFrom: '#12212E',
    bgVia: '#234A57',
    bgTo: '#4B3A29',
    accent: '#EA9940',
    accentSoft: '#F7D8A8',
    tag: 'SCULPTURE & TEMPLE ART'
  },
  craft: {
    bgFrom: '#14292A',
    bgVia: '#1F5556',
    bgTo: '#523B26',
    accent: '#34D399',
    accentSoft: '#A7F3D0',
    tag: 'GI & LIVING CRAFT'
  },
  literature: {
    bgFrom: '#1B1F38',
    bgVia: '#313961',
    bgTo: '#46372C',
    accent: '#EA9940',
    accentSoft: '#ECE7DC',
    tag: 'CLASSICAL LITERATURE'
  },
  manuscript: {
    bgFrom: '#241B14',
    bgVia: '#473626',
    bgTo: '#624A30',
    accent: '#FBBF24',
    accentSoft: '#FDE68A',
    tag: 'PALM-LEAF & PRINT'
  }
};

const renderMotifSvg = (type, palette) => {
  switch (type) {
    case 'archaeological':
      return (
        <svg viewBox="0 0 120 90" className="w-28 h-20 drop-shadow-md" aria-hidden="true">
          <defs>
            <linearGradient id="urnGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#EA9940" />
              <stop offset="100%" stopColor="#9A4E1C" />
            </linearGradient>
          </defs>
          <path d="M10 78 Q40 71 60 76 T110 76" fill="none" stroke={palette.accentSoft} strokeWidth="1.2" opacity="0.45" />
          <ellipse cx="60" cy="22" rx="16" ry="4.5" fill="none" stroke={palette.accentSoft} strokeWidth="2.4" />
          <path d="M44 22 C31 32 28 54 43 70 C50 77 70 77 77 70 C92 54 89 32 76 22 Z" fill="url(#urnGrad)" opacity="0.92" />
          <path d="M36 44 Q60 51 84 44" fill="none" stroke="#12212E" strokeWidth="1.8" opacity="0.6" />
          <path d="M38 52 Q60 59 82 52" fill="none" stroke={palette.accentSoft} strokeWidth="1.2" opacity="0.6" />
          <circle cx="96" cy="24" r="6" fill="none" stroke={palette.accentSoft} strokeWidth="1.5" opacity="0.6" />
          <path d="M96 14 L96 34 M88 24 L104 24" stroke={palette.accentSoft} strokeWidth="1.1" opacity="0.4" />
        </svg>
      );
    case 'inscription':
      return (
        <svg viewBox="0 0 120 90" className="w-28 h-20 drop-shadow-md" aria-hidden="true">
          <path d="M24 78 L30 22 C31 14 42 11 60 11 C78 11 89 14 90 22 L96 78 Z" fill="#233746" stroke={palette.accent} strokeWidth="1.8" />
          <line x1="40" y1="27" x2="80" y2="27" stroke={palette.accentSoft} strokeWidth="2" strokeDasharray="6 3 4 2" opacity="0.85" />
          <line x1="38" y1="38" x2="82" y2="38" stroke={palette.accent} strokeWidth="2" strokeDasharray="8 3 5 3" opacity="0.85" />
          <line x1="37" y1="49" x2="83" y2="49" stroke={palette.accentSoft} strokeWidth="2" strokeDasharray="5 4 7 2" opacity="0.8" />
          <line x1="39" y1="60" x2="74" y2="60" stroke={palette.accent} strokeWidth="2" strokeDasharray="4 3 6 3" opacity="0.7" />
          <path d="M52 17 L60 14 L68 17" fill="none" stroke={palette.accent} strokeWidth="1.6" />
        </svg>
      );
    case 'coin':
      return (
        <svg viewBox="0 0 120 90" className="w-28 h-20 drop-shadow-md" aria-hidden="true">
          <circle cx="48" cy="48" r="24" fill="#B47B2B" stroke={palette.accentSoft} strokeWidth="2" />
          <circle cx="48" cy="48" r="19" fill="none" stroke="#3A2910" strokeWidth="1.2" strokeDasharray="2 2" />
          <circle cx="48" cy="48" r="7" fill="none" stroke={palette.accentSoft} strokeWidth="1.5" />
          <path d="M48 34 L48 41 M48 55 L48 62 M34 48 L41 48 M55 48 L62 48" stroke={palette.accentSoft} strokeWidth="1.4" />
          <rect x="64" y="25" width="32" height="32" rx="4" transform="rotate(8 80 41)" fill="#94A3B8" stroke="#F8FAFC" strokeWidth="1.5" opacity="0.92" />
          <path d="M74 35 L86 35 L80 46 Z" fill="none" stroke="#1E293B" strokeWidth="1.6" />
          <circle cx="80" cy="49" r="3" fill="#1E293B" />
        </svg>
      );
    case 'sculpture':
      return (
        <svg viewBox="0 0 120 90" className="w-28 h-20 drop-shadow-md" aria-hidden="true">
          <circle cx="60" cy="43" r="27" fill="none" stroke={palette.accent} strokeWidth="2.5" strokeDasharray="5 3" />
          <circle cx="60" cy="43" r="22" fill="none" stroke={palette.accentSoft} strokeWidth="1" opacity="0.6" />
          <circle cx="60" cy="27" r="4.5" fill={palette.accent} />
          <path d="M60 32 L60 52 M46 40 Q60 35 74 40 M60 52 L50 67 M60 52 L69 62" fill="none" stroke={palette.accentSoft} strokeWidth="2.4" strokeLinecap="round" />
          <rect x="40" y="69" width="40" height="8" rx="2" fill={palette.accent} opacity="0.85" />
          <path d="M36 77 L84 77" stroke={palette.accentSoft} strokeWidth="1.5" />
        </svg>
      );
    case 'craft':
      return (
        <svg viewBox="0 0 120 90" className="w-28 h-20 drop-shadow-md" aria-hidden="true">
          <path d="M44 76 L76 76 L65 66 L55 66 Z" fill={palette.accent} opacity="0.9" />
          <line x1="60" y1="24" x2="60" y2="66" stroke={palette.accentSoft} strokeWidth="3.5" />
          <ellipse cx="60" cy="30" rx="14" ry="4" fill={palette.accent} />
          <ellipse cx="60" cy="46" rx="10" ry="3" fill={palette.accentSoft} opacity="0.8" />
          <path d="M60 12 C64 17 64 22 60 24 C56 22 56 17 60 12 Z" fill="#FBBF24" />
          <circle cx="28" cy="45" r="12" fill="none" stroke={palette.accentSoft} strokeWidth="1.3" opacity="0.45" />
          <circle cx="92" cy="45" r="12" fill="none" stroke={palette.accentSoft} strokeWidth="1.3" opacity="0.45" />
        </svg>
      );
    case 'manuscript':
      return (
        <svg viewBox="0 0 120 90" className="w-28 h-20 drop-shadow-md" aria-hidden="true">
          <rect x="20" y="28" width="80" height="17" rx="3" fill="#D4A359" stroke="#FDE68A" strokeWidth="1.2" />
          <rect x="22" y="45" width="76" height="17" rx="3" fill="#B88642" stroke="#FDE68A" strokeWidth="1.2" />
          <circle cx="38" cy="36.5" r="2.2" fill="#241B14" />
          <circle cx="82" cy="36.5" r="2.2" fill="#241B14" />
          <circle cx="38" cy="53.5" r="2.2" fill="#241B14" />
          <circle cx="82" cy="53.5" r="2.2" fill="#241B14" />
          <path d="M38 25 L38 66 M82 25 L82 66" stroke="#EA580C" strokeWidth="1.6" />
          <line x1="46" y1="36.5" x2="74" y2="36.5" stroke="#241B14" strokeWidth="1.3" strokeDasharray="3 2" />
          <line x1="46" y1="53.5" x2="74" y2="53.5" stroke="#241B14" strokeWidth="1.3" strokeDasharray="4 2" />
          <line x1="25" y1="73" x2="96" y2="69" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'literature':
    default:
      return (
        <svg viewBox="0 0 120 90" className="w-28 h-20 drop-shadow-md" aria-hidden="true">
          <path d="M24 22 Q42 18 60 25 Q78 18 96 22 L96 68 Q78 64 60 71 Q42 64 24 68 Z" fill="#1E293B" stroke={palette.accent} strokeWidth="2" />
          <line x1="60" y1="25" x2="60" y2="71" stroke={palette.accentSoft} strokeWidth="1.5" />
          <line x1="32" y1="34" x2="52" y2="34" stroke={palette.accentSoft} strokeWidth="1.5" opacity="0.8" />
          <line x1="32" y1="43" x2="52" y2="43" stroke={palette.accent} strokeWidth="1.5" opacity="0.8" />
          <line x1="32" y1="52" x2="49" y2="52" stroke={palette.accentSoft} strokeWidth="1.5" opacity="0.7" />
          <line x1="68" y1="34" x2="88" y2="34" stroke={palette.accentSoft} strokeWidth="1.5" opacity="0.8" />
          <line x1="68" y1="43" x2="88" y2="43" stroke={palette.accent} strokeWidth="1.5" opacity="0.8" />
          <line x1="68" y1="52" x2="85" y2="52" stroke={palette.accentSoft} strokeWidth="1.5" opacity="0.7" />
        </svg>
      );
  }
};

const inferType = (recordType = '', category = '') => {
  if (recordType && PALETTES[recordType]) return recordType;
  const lower = (category || '').toLowerCase();
  if (lower.includes('archaeolog')) return 'archaeological';
  if (lower.includes('inscript') || lower.includes('epigraph')) return 'inscription';
  if (lower.includes('coin') || lower.includes('trade')) return 'coin';
  if (lower.includes('sculpt') || lower.includes('temple')) return 'sculpture';
  if (lower.includes('craft') || lower.includes('gi')) return 'craft';
  if (lower.includes('manuscript')) return 'manuscript';
  return 'literature';
};

export const HeritageArtwork = ({
  recordType,
  category,
  title = 'Tamil Heritage',
  tamilName = '',
  subCategory = '',
  compact = false,
  className = ''
}) => {
  const type = inferType(recordType, category);
  const palette = PALETTES[type] || PALETTES.archaeological;

  return (
    <div
      className={`relative overflow-hidden flex flex-col items-center justify-center text-white select-none ${className}`}
      style={{
        background: `linear-gradient(135deg, ${palette.bgFrom} 0%, ${palette.bgVia} 55%, ${palette.bgTo} 100%)`
      }}
    >
      {/* Subtle geometric Tamil kolam-inspired corner watermark */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 25%, #ffffff 1px, transparent 1px), radial-gradient(circle at 80% 75%, #ffffff 1px, transparent 1px)',
          backgroundSize: '22px 22px'
        }}
      />

      {!compact && (
        <span
          className="relative z-10 mb-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-[0.16em] uppercase border"
          style={{
            color: palette.accentSoft,
            borderColor: `${palette.accent}55`,
            backgroundColor: 'rgba(18, 33, 46, 0.45)'
          }}
        >
          {subCategory || palette.tag}
        </span>
      )}

      <div className={`relative z-10 ${compact ? 'scale-75' : ''}`}>
        {renderMotifSvg(type, palette)}
      </div>

      {!compact && (
        <div className="relative z-10 px-4 text-center max-w-full">
          {tamilName && (
            <p className="text-[11px] font-medium truncate opacity-90" style={{ color: palette.accentSoft }}>
              {tamilName}
            </p>
          )}
          <p className="font-serif font-bold text-xs sm:text-sm line-clamp-1 text-white/95 mt-0.5">
            {title}
          </p>
        </div>
      )}
    </div>
  );
};

export default HeritageArtwork;

