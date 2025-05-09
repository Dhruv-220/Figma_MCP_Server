import React from 'react';
import { HeroSectionProps } from '../landing.types';
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import badgeArrowIconSrc from '@/assets/figma/badge_arrow_right.svg';
import playCircleIconSrc from '@/assets/figma/play_circle_icon.svg';

const HeroSection: React.FC<HeroSectionProps> = ({
  badge,
  heading,
  supportingText,
  actions,
  mainImageSrc,
  mainImageAlt,
}) => {
  // Tailwind text size mapping based on Figma:
  // Heading (3:13769): 60px, Inter, 600, -2% letter spacing -> text-6xl font-semibold tracking-tighter (approx)
  // Supporting text (3:13770): 20px, Inter, 400 -> text-xl font-normal
  // Badge text (I3:13768;1046:9111;1046:3821;1046:26): 14px, Inter, 500 -> text-sm font-medium
  // Badge message (I3:13768;1046:9113): 14px, Inter, 500 -> text-sm font-medium
  // Button text (I3:13772;...;1292:158628 & I3:13773;...;1292:158602): 18px, Inter, 600 -> text-lg font-semibold

  return (
    <section className="bg-white pt-24 pb-16 md:pb-24"> {/* py-24 from figma layout (padding 96px 0px 0px) then section gap 64px */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Max width 1280px, padding 32px horizontal */}
        <div className="text-center max-w-4xl mx-auto"> {/* Content width 1024px for text part */}
          {badge && (
            <a 
              href={badge.href} 
              className="inline-flex items-center bg-purple-50 text-purple-700 rounded-full p-1 pr-3 mb-6 text-sm font-medium hover:bg-purple-100"
              // fill_TLI5RI: #F9F5FF (bg-purple-50), fill_23QK5B: #6941C6 (text-purple-700)
              // borderRadius: 16px (rounded-full)
              // padding: 4px 10px 4px 4px (p-1 pr-2 approx)
            >
              <span className="px-3 py-0.5 text-purple-600 bg-white rounded-full text-xs mr-2 border border-purple-200">
                {/* fill_3NOX5W (bg-white), stroke_Q4SQRU (#E9D7FE border-purple-200), style_HHLN74 (14px text-xs, text_23QK5B text-purple-600) */}
                {badge.text}
              </span>
              {badge.message}
              <Icon src={badgeArrowIconSrc} alt="" size="h-4 w-4" className="ml-1" />
              {/* stroke_YCWQVG: #9E77ED */}
            </a>
          )}
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 mb-6">
            {/* style_000OL3: 60px, Inter, 600. text-gray-900 (fill_T784M6) */}
            {heading}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            {/* style_64G9R1: 20px, Inter, 400. text-gray-600 (fill_SLXM25) */}
            {supportingText}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            {/* layout_SVMLER: row, gap 12px */}
            {actions.map((action) => (
              <Button
                key={action.id}
                href={action.href}
                variant={action.variant}
                size="xl" // Figma buttons Demo and Sign up use 16px 28px padding -> size xl in Button component
                leftIconSrc={action.variant === 'tertiary' ? action.iconSrc : undefined}
                iconProps={{ size: 'h-5 w-5' }} // play-circle icon size from Figma appears to be 20px
              >
                {action.text}
              </Button>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-16 md:mt-24"> {/* Gap 64px below text content */}
          <img 
            src={mainImageSrc} 
            alt={mainImageAlt} 
            className="mx-auto rounded-lg shadow-2xl w-full max-w-5xl" 
            // TODO: The Figma mockup is complex with shadows and device frame.
            // This is a simplified version. A dedicated component could be made for the MacBook frame.
            // For now, using fill_XLTELS for the screen content.
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;