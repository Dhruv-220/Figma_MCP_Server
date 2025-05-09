import React from 'react';
import { FeaturesSectionProps, FeatureItem as FeatureItemType } from '../landing.types';
import { Icon } from '@/components/Icon';

interface FeatureItemProps extends FeatureItemType {
  id: string; // Make id required
}

const FeatureItem: React.FC<FeatureItemProps> = ({ iconSrc, title, description }) => {
  // style_2UAE6C (title): 20px, Inter, 500 -> text-xl font-medium
  // style_SUAHFE (description): 16px, Inter, 400 -> text-base font-normal
  // Featured icon (e.g. 3:13797): fill_I8ZMNH (#F4EBFF), stroke_4PCDN1 (#F9F5FF)
  // Icon itself (e.g. mail): stroke_P4HM45 (#7F56D9)
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="flex items-center justify-center w-12 h-12 mb-5 rounded-full bg-purple-100 ring-8 ring-purple-50">
        {/* Approximate colors: bg-purple-100 for #F4EBFF, ring-purple-50 for #F9F5FF */}
        <Icon src={iconSrc} alt={title} size="h-6 w-6" className="text-purple-600" /> {/* #7F56D9 is approx text-purple-600 */}
      </div>
      <h3 className="text-xl font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-base text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesShowcaseSection: React.FC<FeaturesSectionProps> = ({
  subheading,
  heading,
  supportingText,
  features,
}) => {
  // layout_7GWHQ8: padding 96px 0px
  // layout_GP0FDX (header container): width 1280px, padding 0 32px
  // layout_DEBNEF (text content in header): width 768px
  // style_I3AD7J (subheading): 16px, Inter, 600, fill_23QK5B (#6941C6 -> text-purple-600)
  // style_2GKXA0 (heading): 36px, Inter, 600, -2% letter spacing, fill_T784M6 (#181D27 -> text-gray-900)
  // style_64G9R1 (supportingText): 20px, Inter, 400, fill_SLXM25 (#535862 -> text-gray-600)
  // layout_X51LQ4 (features grid container): width 1280px, padding 0 32px
  // layout_8DFT6P (grid row): gap 32px

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-base font-semibold text-purple-600 mb-3">{subheading}</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-5">{heading}</h2>
          <p className="text-lg md:text-xl text-gray-600">{supportingText}</p>
        </div>

        {features && features.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
            {/* Figma shows 2 rows of 3. Grid should handle this. Gap from layout_8DFT6P is 32px (gap-8) */}
            {features.map((feature) => (
              <FeatureItem
                key={feature.id}
                iconSrc={feature.iconSrc}
                title={feature.title}
                description={feature.description} id={''} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturesShowcaseSection; 