import React from 'react';

interface TableTalksLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  showCoBrand?: boolean;
  className?: string;
}

export const TableTalksLogo: React.FC<TableTalksLogoProps> = ({
  variant = 'light',
  size = 'md',
  showSubtitle = true,
  showCoBrand = false,
  className = ''
}) => {
  const isDark = variant === 'dark';
  const textColor = isDark ? 'text-[#0B132B]' : 'text-white';
  const subtitleColor = isDark ? 'text-[#0B132B]/80' : 'text-white/80';

  const titleSize = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl';
  const dotSize = size === 'sm' ? 'w-0.5 h-0.5' : size === 'lg' ? 'w-1.5 h-1.5' : 'w-1 h-1';

  return (
    <div className={`inline-flex flex-col ${className}`}>
      {/* Top Branding Bar */}
      <div className="flex items-center gap-3">
        {/* Dot Matrix Pattern (4 cols x 2 rows) */}
        <div className="grid grid-cols-4 gap-1">
          <div className={`${dotSize} rounded-full bg-[#00D084]`} />
          <div className={`${dotSize} rounded-full bg-[#00D084]`} />
          <div className={`${dotSize} rounded-full bg-[#00D084]`} />
          <div className={`${dotSize} rounded-full bg-[#00D084]`} />
          <div className={`${dotSize} rounded-full bg-[#00D084]`} />
          <div className={`${dotSize} rounded-full bg-[#00D084]`} />
          <div className={`${dotSize} rounded-full bg-[#00D084]`} />
          <div className={`${dotSize} rounded-full bg-[#00D084]`} />
        </div>

        {/* TABLE TALKS */}
        <div className={`flex items-center gap-2 font-display font-bold uppercase tracking-widest ${titleSize}`}>
          <span className={`font-light tracking-wider ${textColor}`}>TABLE</span>
          <span className="font-extrabold text-[#00D084]">TALKS</span>
        </div>
      </div>

      {/* Subtitle */}
      {showSubtitle && (
        <div className={`text-xs sm:text-sm font-medium tracking-wide mt-1.5 ${subtitleColor}`}>
          Conversaciones que nutren el futuro del talento
        </div>
      )}

      {/* Co-Branding AWS + ODILO */}
      {showCoBrand && (
        <div className="flex items-center gap-4 mt-3 pt-3 border-t border-[#00D084]/20">
          <div className="flex items-center gap-1.5 text-xs font-bold tracking-tight text-[#FF9900]">
            {/* AWS Logo text / badge */}
            <span className="font-extrabold text-sm text-[#FF9900]">aws</span>
          </div>
          <span className="h-3 w-px bg-[#00D084]/30" />
          <div className="flex items-center gap-1">
            <svg viewBox="0 0 32 32" className="w-4 h-4 fill-none">
              <circle cx="16" cy="16" r="13" stroke={isDark ? "#0B132B" : "#FFFFFF"} strokeWidth="3" />
              <path d="M12 4 H20 V15 L16 12 L12 15 Z" fill="#00D084" />
            </svg>
            <span className={`font-light text-xs tracking-wider ${textColor}`}>ODILO</span>
          </div>
        </div>
      )}
    </div>
  );
};
