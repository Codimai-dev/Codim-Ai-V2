import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = "", variant = 'dark' }) => {
  const isDark = variant === 'dark';
  const purpleColor = "#8B5CF6";
  const textColor = isDark ? "#161616" : "#FFFFFF";

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {/* 
        Refined CodimAI Symbol: 
        1. First 3 bars = 'A' (Low, High, Mid)
        2. Rhythmic gap (Wider)
        3. 4th bar = 'I' (High)
      */}
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 transition-all duration-500 hover:scale-110">
        <rect x="2" y="16" width="4.5" height="12" rx="2.25" fill={purpleColor} />
        <rect x="8.5" y="4" width="4.5" height="24" rx="2.25" fill={purpleColor} />
        <rect x="15" y="11" width="4.5" height="17" rx="2.25" fill={purpleColor} />
        <rect x="25.5" y="4" width="4.5" height="24" rx="2.25" fill={purpleColor} />
      </svg>

      <div className="font-brand font-[800] text-[24px] tracking-[-0.025em] flex items-baseline select-none transition-colors duration-500" style={{ color: textColor }}>
        <span>Codim</span>
        <span style={{ color: purpleColor }}>AI</span>
      </div>
    </div>
  );
};

export default Logo;