import React from 'react';

interface OdiloLogoProps {
  className?: string;
  showSubtitle?: boolean;
  variant?: 'light' | 'dark';
}

export const OdiloLogo: React.FC<OdiloLogoProps> = ({ 
  className = '', 
  showSubtitle = false,
  variant = 'light'
}) => {
  const isDark = variant === 'dark';
  const textColor = isDark ? 'text-[#0B132B]' : 'text-white';
  const subtextColor = isDark ? 'text-[#0B132B]/70' : 'text-white/70';

  return (
    <div className={`inline-flex flex-col gap-0.5 ${className}`}>
      <div className="flex items-center gap-2">
        {/* ODILO Wordmark with signature Green Bookmark Ribbon on the O */}
        <div className="flex items-center tracking-tight font-sans font-normal text-2xl">
          {/* Circle 'O' with Green Bookmark Ribbon */}
          <div className="relative inline-flex items-center justify-center w-7 h-7 mr-0.5">
            <svg viewBox="0 0 32 32" className="w-7 h-7 fill-none">
              <circle cx="16" cy="16" r="13" stroke={isDark ? "#0B132B" : "#FFFFFF"} strokeWidth="2.5" />
              {/* Green Bookmark Ribbon */}
              <path d="M12 4 H20 V15 L16 12 L12 15 Z" fill="#00D084" />
            </svg>
          </div>
          <span className={`font-light tracking-wide ${textColor}`}>DILO</span>
        </div>

        <span className={`h-4 w-px ${isDark ? 'bg-[#0B132B]/20' : 'bg-white/20'} mx-1`} />

        {/* TABLE TALKS Brand Badge with Dot Matrix */}
        <div className="flex items-center gap-1.5">
          {/* Dot Matrix 4x2 */}
          <div className="grid grid-cols-4 gap-0.5 w-3.5">
            <div className="w-0.5 h-0.5 rounded-full bg-[#00D084]" />
            <div className="w-0.5 h-0.5 rounded-full bg-[#00D084]" />
            <div className="w-0.5 h-0.5 rounded-full bg-[#00D084]" />
            <div className="w-0.5 h-0.5 rounded-full bg-[#00D084]" />
            <div className="w-0.5 h-0.5 rounded-full bg-[#00D084]" />
            <div className="w-0.5 h-0.5 rounded-full bg-[#00D084]" />
            <div className="w-0.5 h-0.5 rounded-full bg-[#00D084]" />
            <div className="w-0.5 h-0.5 rounded-full bg-[#00D084]" />
          </div>
          <div className="flex items-center gap-1 text-sm tracking-widest font-bold uppercase">
            <span className={`font-light ${textColor}`}>TABLE</span>
            <span className="font-extrabold text-[#00D084]">TALKS</span>
          </div>
        </div>
      </div>

      {showSubtitle && (
        <span className={`text-[10px] tracking-wider uppercase font-medium ${subtextColor} pl-0.5`}>
          Conversaciones que nutren el futuro del talento
        </span>
      )}
    </div>
  );
};

