import React from 'react';
import { LetminoLogo, AsteriskIcon } from './LetminoLogo';

interface TableTalksLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  showCoBrand?: boolean;
  logoVariant?: 'horizontal' | 'vertical' | 'compact';
  className?: string;
}

export const TableTalksLogo: React.FC<TableTalksLogoProps> = ({
  variant = 'light',
  size = 'md',
  showSubtitle = true,
  showCoBrand = false,
  logoVariant = 'horizontal',
  className = ''
}) => {
  const isDarkPage = variant === 'dark';
  const textColor = isDarkPage ? 'text-[#F0F0EE]' : 'text-[#0F0F0F]';
  const borderColor = isDarkPage ? 'border-white/10' : 'border-[#0F0F0F]/10';
  const dividerColor = isDarkPage ? 'bg-white/20' : 'bg-[#0F0F0F]/15';

  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      <LetminoLogo
        variant={logoVariant}
        theme={variant}
        size={size}
        showSubtitle={showSubtitle}
        asteriskColor="#4995FF"
      />

      {/* Co-Branding AWS + LETMINO */}
      {showCoBrand && (
        <div className={`flex items-center justify-center gap-3 sm:gap-4 mt-5 pt-3.5 border-t ${borderColor} w-full`}>
          {/* AWS Logo text / badge */}
          <div className="flex items-center">
            <span className="font-extrabold text-sm sm:text-base text-[#FF9900] tracking-wider lowercase">aws</span>
          </div>

          <span className={`h-3.5 w-px ${dividerColor}`} />

          {/* Letmino mini logo with blue asterisk */}
          <div className="flex items-center gap-1.5 font-display font-extrabold text-xs sm:text-sm tracking-tight select-none">
            <AsteriskIcon className="w-3.5 h-3.5" color="#4995FF" />
            <span className={`tracking-tight ${textColor} uppercase`}>LETMINO</span>
          </div>
        </div>
      )}
    </div>
  );
};
