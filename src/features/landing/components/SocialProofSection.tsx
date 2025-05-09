import React from 'react';
import { SocialProofSectionProps, CompanyLogoItem } from '../landing.types';

const SocialProofSection: React.FC<SocialProofSectionProps> = ({
  overlineText,
  logos,
}) => {
  return (
    <section className="bg-white py-16 md:py-24"> {/* layout_4GMP81: padding 96px 0px */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* layout_GP0FDX: width 1280px, padding 0 32px */}
        <div className="text-center">
          <p className="text-base font-medium text-gray-600 mb-8">
            {/* style_TK5RXW: Inter, 500, 16px, fill_SLXM25 (#535862 -> text-gray-600) */}
            {overlineText}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-8 md:gap-x-12 lg:gap-x-16">
            {/* layout_OIMISA: row, space-between, gap 32px. Using flex-wrap and justify-center for responsiveness. */}
            {/* The Figma design shows 5 logos, but the original component (Untitled UI) often shows 6. */}
            {/* For the 5 logos provided, space-between might spread them too far on large screens. */}
            {/* Using justify-center with gaps should be more balanced. */}
            {logos.map((logoItem: CompanyLogoItem) => (
              <div key={logoItem.id} className="flex justify-center">
                <img 
                  src={logoItem.logoSrc} 
                  alt={logoItem.name} 
                  className="h-8 md:h-10 object-contain" // Adjust height as needed, Figma shows varying heights
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection; 