import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  src: string; // Path to the SVG file or SVG content itself
  alt: string; // For accessibility
  size?: string | number; // e.g., 'h-5 w-5' or 20 (for 20px)
  className?: string;
}

const Icon: React.FC<IconProps> = ({ src, alt, size, className, ...props }) => {
  const sizeClasses = typeof size === 'string' ? size : `h-${size} w-${size}`;
  
  // If src is a path (ends with .svg), use an img tag for simplicity with SVGR or similar Vite plugins.
  // Otherwise, assume it's inline SVG content (less ideal for this generic component).
  // For production, you'd typically use SVGR to import SVGs as React components.
  if (src.endsWith('.svg')) {
    return (
      <img 
        src={src} 
        alt={alt} 
        className={`${sizeClasses} ${className || ''}`} 
        // SVGs in <img> might not inherit color via `currentColor` easily.
        // Consider using them as React components for better styling control.
      />
    );
  }

  // Fallback for non-SVG paths or direct SVG content (not fully supported here)
  return (
    <span className={`inline-block ${sizeClasses} ${className || ''}`} role="img" aria-label={alt} {...props}>
      {/* This part would need more work to properly render inline SVG strings or other icon types */}
      ⚠️
    </span>
  );
};

export default Icon; 