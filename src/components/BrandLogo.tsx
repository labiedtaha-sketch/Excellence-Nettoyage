import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'light',
  size = 'md',
  className = ''
}) => {
  const isLight = variant === 'light';

  const titleSizes = {
    sm: 'text-base sm:text-lg',
    md: 'text-lg sm:text-xl md:text-2xl',
    lg: 'text-2xl sm:text-3xl'
  };

  const subSizes = {
    sm: 'text-[9px] tracking-widest',
    md: 'text-[10px] sm:text-[11px] tracking-widest',
    lg: 'text-xs sm:text-sm tracking-widest'
  };

  return (
    <div className={`flex flex-col text-left select-none ${className}`}>
      {/* Typography Only - Pure Text */}
      <div className={`font-black font-display tracking-tight leading-none uppercase ${titleSizes[size]} ${isLight ? 'text-white' : 'text-slate-950'}`}>
        EXCELLENCE <span className="text-[#5faedb]">NETTOYAGE</span>
      </div>
      <div className={`font-bold uppercase leading-tight mt-1 ${subSizes[size]} ${isLight ? 'text-slate-300/90' : 'text-slate-600'}`}>
        Propreté & Hygiène Haute Exigence
      </div>
    </div>
  );
};


