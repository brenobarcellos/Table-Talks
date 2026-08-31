import React from 'react';

export interface LetminoLogoProps {
  className?: string;
  variant?: 'horizontal' | 'compact' | 'vertical';
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  asteriskColor?: string;
}

export const AsteriskIcon: React.FC<{ className?: string; color?: string }> = ({ 
  className = 'w-4 h-4', 
  color = '#4995FF' 
}) => {
  return (
    <svg 
      viewBox="0 0 24 24" 
      className={`inline-block flex-shrink-0 ${className}`} 
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* 8-pointed rounded asterisk symbol in fixed brand blue #4995FF */}
      <g transform="translate(12,12)">
        {[0, 45, 90, 135].map((angle) => (
          <rect
            key={angle}
            x="-2.2"
            y="-10"
            width="4.4"
            height="20"
            rx="2.2"
            transform={`rotate(${angle})`}
          />
        ))}
      </g>
    </svg>
  );
};

export const LetminoLogo: React.FC<LetminoLogoProps> = ({
  className = '',
  variant = 'horizontal',
  theme = 'light',
  size = 'md',
  showSubtitle = false,
  asteriskColor = '#4995FF',
}) => {
  // Theme: 'light' means light page (black text #0F0F0F), 'dark' means dark page (#F0F0EE)
  const isDarkPage = theme === 'dark';
  const textColor = isDarkPage ? 'text-[#F0F0EE]' : 'text-[#0F0F0F]';
  const subtextColor = isDarkPage ? 'text-[#F0F0EE]/70' : 'text-[#484848]';

  // Scaled dimensions
  const fontSizes = {
    sm: {
      letmino: 'text-base sm:text-lg',
      tableTalks: 'text-[11px] sm:text-xs',
      asterisk: 'w-3.5 h-3.5',
      sub: 'text-[9px]',
      gap: 'gap-2',
    },
    md: {
      letmino: 'text-xl sm:text-2xl',
      tableTalks: 'text-xs sm:text-sm',
      asterisk: 'w-4 h-4',
      sub: 'text-[10px] sm:text-[11px]',
      gap: 'gap-2.5 sm:gap-3',
    },
    lg: {
      letmino: 'text-3xl sm:text-4xl md:text-5xl',
      tableTalks: 'text-sm sm:text-base md:text-lg',
      asterisk: 'w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7',
      sub: 'text-[10px] sm:text-xs md:text-sm',
      gap: 'gap-3 sm:gap-4',
    },
  }[size];

  return (
    <div className={`inline-flex flex-col items-center text-center ${className}`}>
      <div className={`inline-flex items-center ${fontSizes.gap} select-none`}>
        {/* LETMINO Wordmark in one line */}
        <span className={`font-display font-extrabold ${fontSizes.letmino} tracking-tight ${textColor} leading-none uppercase`}>
          LETMINO
        </span>

        {/* 8-Pointed Asterisk in fixed brand blue #4995FF */}
        <AsteriskIcon className={fontSizes.asterisk} color={asteriskColor} />

        {/* TABLE TALKS */}
        <div className="flex items-center gap-1.5 font-display uppercase tracking-wider leading-none">
          <span className={`${fontSizes.tableTalks} font-medium ${textColor}`}>TABLE</span>
          <span className={`${fontSizes.tableTalks} font-extrabold ${textColor}`}>TALKS</span>
        </div>
      </div>

      {showSubtitle && (
        <p className={`font-mono uppercase tracking-wider font-semibold ${subtextColor} ${fontSizes.sub} mt-3`}>
          CONVERSACIONES QUE NUTREN EL FUTURO DEL TALENTO
        </p>
      )}
    </div>
  );
};
