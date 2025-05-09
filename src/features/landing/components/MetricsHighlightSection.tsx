import React from 'react';
import { MetricsSectionProps, MetricItem as MetricItemType } from '../landing.types';

interface MetricItemDisplayProps extends MetricItemType {}

const MetricItemDisplay: React.FC<MetricItemDisplayProps> = ({ value, title, description }) => {
  // style_000OL3 (value, e.g. 4,000+): 60px, Inter, 600 -> text-5xl md:text-6xl font-semibold
  // fill_NR6J3N (value color): #7F56D9 -> text-purple-600
  // style_8H78IQ (title): 18px, Inter, 500 -> text-lg font-medium
  // fill_T784M6 (title color): #181D27 -> text-gray-900
  // style_SUAHFE (description): 16px, Inter, 400 -> text-base
  // fill_SLXM25 (description color): #535862 -> text-gray-600
  return (
    <div className="flex flex-col items-start text-left"> {/* layout_EQ8GGK for metrics is items-center, but Figma visual is items-start for this section style */}
      <p className="text-5xl md:text-6xl font-semibold text-purple-600 mb-3">{value}</p>
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-base text-gray-600">{description}</p>
    </div>
  );
};

const MetricsHighlightSection: React.FC<MetricsSectionProps> = ({
  subheading,
  heading,
  supportingText,
  metricItems,
  imageSrc,
  imageAlt,
}) => {
  // layout_7GWHQ8: padding 96px 0px
  // layout_GP0FDX (header container): width 1280px, padding 0 32px
  // layout_0U6W39 (text content in header): width 768px
  // style_XP9NBK (subheading): 16px, Inter, 600, fill_23QK5B (#6941C6 -> text-purple-600)
  // style_20XYRT (heading): 36px, Inter, 600, -2% letter spacing, fill_T784M6 (#181D27 -> text-gray-900)
  // style_1BKDO0 (supportingText): 20px, Inter, 400, fill_SLXM25 (#535862 -> text-gray-600)
  // layout_O0Y9Z5 (main content container): row, gap 96px
  // layout_5JFGSW (metrics grid container): column, gap 64px
  // layout_8DFT6P (grid row): gap 32px

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Text */}
        <div className="max-w-3xl mb-16 text-left"> {/* Figma: width 768px for text content */}
          <p className="text-base font-semibold text-purple-600 mb-3">{subheading}</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-5">{heading}</h2>
          <p className="text-lg md:text-xl text-gray-600">{supportingText}</p>
        </div>

        {/* Content: Metrics Grid and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Metrics Grid (2x2) */}
          {metricItems && metricItems.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 md:gap-y-16">
              {metricItems.map((item) => (
                <MetricItemDisplay
                  key={item.id}
                  id={item.id}
                  value={item.value}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          )}

          {/* Image */}
          <div>
            <img src={imageSrc} alt={imageAlt} className="rounded-lg w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsHighlightSection; 