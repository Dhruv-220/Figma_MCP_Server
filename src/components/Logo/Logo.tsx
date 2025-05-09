import React from 'react';
import logoMark from '@/assets/figma/logo_mark_grid.svg';
import logoType from '@/assets/figma/logo_logotype.svg';

export interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <a href="/" className={`flex items-center space-x-2 ${className || ''}`}>
      {/* The Figma data shows a complex logo structure, this is a simplified version combining the mark and type */}
      <img src={logoMark} alt="Logo Mark" className="h-8 w-auto" /> 
      <img src={logoType} alt="Untitled UI Logotype" className="h-6 w-auto" />
    </a>
  );
};

export default Logo; 