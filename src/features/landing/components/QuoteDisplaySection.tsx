import React from 'react';
import { QuoteSectionProps } from '../landing.types';

const QuoteDisplaySection: React.FC<QuoteSectionProps> = ({
  companyLogoSrc,
  companyName,
  quoteText,
  authorName,
  authorRole,
  authorAvatarSrc,
}) => {
  // fill_5B0X0X: #FAFAFA -> bg-gray-50
  // layout_7GWHQ8: padding 96px 0px -> py-16 md:py-24
  // style_I5SSTH (quote): 48px, Inter, 500, -2% letter spacing -> text-4xl md:text-5xl font-medium tracking-tight
  // fill_T784M6 (quote text color): #181D27 -> text-gray-900
  // style_8H78IQ (author name): 18px, Inter, 500 -> text-lg font-medium
  // style_SUAHFE (author role): 16px, Inter, 400 -> text-base font-normal
  // fill_SLXM25 (author role color): #535862 -> text-gray-600

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center space-y-8">
          {/* Company Logo */}
          <img src={companyLogoSrc} alt={`${companyName} logo`} className="h-10 md:h-12 object-contain" />

          {/* Quote Text */}
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 tracking-tight">
            <p>&ldquo;{quoteText}&rdquo;</p>
          </blockquote>

          {/* Author Attribution */}
          <div className="flex flex-col items-center space-y-4">
            <img 
              src={authorAvatarSrc} 
              alt={authorName} 
              className="h-16 w-16 rounded-full object-cover"
            />
            <div>
              <p className="text-lg font-medium text-gray-900">{authorName}</p>
              <p className="text-base text-gray-600">{authorRole}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteDisplaySection; 