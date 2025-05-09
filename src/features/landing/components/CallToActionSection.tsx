import React from 'react';
import { CallToActionSectionProps } from '../landing.types';
import { Button } from '@/components/Button';

const CallToActionSection: React.FC<CallToActionSectionProps> = ({
  heading,
  supportingText,
  actions,
}) => {
  // fill_5B0X0X: #FAFAFA -> bg-gray-50
  // layout_7GWHQ8: padding 96px 0px -> py-16 md:py-24
  // layout_GP0FDX (container): width 1280px, padding 0 32px
  // layout_WEJ90Z (content): width ?, align center, gap 40px
  // layout_DEBNEF (text content): width 768px, align center, gap 20px
  // style_2GKXA0 (heading): 36px, Inter, 600, -2% ls -> text-3xl md:text-4xl font-semibold tracking-tight
  // fill_T784M6 (heading color): #181D27 -> text-gray-900
  // style_64G9R1 (supporting text): 20px, Inter, 400 -> text-lg md:text-xl
  // fill_SLXM25 (support text color): #535862 -> text-gray-600
  // layout_SVMLER (actions): row, gap 12px -> gap-3
  // Button 1 (Learn More): Secondary style (stroke_GUG8PN) - Use variant 'secondary'
  // Button 2 (Get started): Primary style (fill_NR6J3N) - Use variant 'primary'
  // Button padding (style_KWK8UM): 12px 20px -> size 'lg' in Button component approx (px-6 py-3)

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-5">
            {heading}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            {supportingText}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            {actions.map((action) => (
              <Button
                key={action.id}
                href={action.href}
                variant={action.variant}
                size="lg" // Figma buttons use 12px 20px padding (py-3 px-5), lg is px-6 py-3
              >
                {action.text}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection; 