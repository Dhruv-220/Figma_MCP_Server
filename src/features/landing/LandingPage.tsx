import React from 'react';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import SocialProofSection from './components/SocialProofSection';
import FeaturesShowcaseSection from './components/FeaturesShowcaseSection';
import QuoteDisplaySection from './components/QuoteDisplaySection';
import MetricsHighlightSection from './components/MetricsHighlightSection';
import {
  NavLinkItem,
  HeroSectionProps,
  BadgeInfo,
  ButtonAction,
  SocialProofSectionProps,
  CompanyLogoItem,
  FeaturesSectionProps,
  FeatureItem as FeatureItemType,
  QuoteSectionProps,
  MetricsSectionProps,
  MetricItem as MetricItemType,
} from './landing.types';
import userAvatar from '@/assets/figma/user_avatar.png';
import macbookMockup from '@/assets/figma/macbook_screen_mockup.png';
import playCircleIcon from '@/assets/figma/play_circle_icon.svg';
import logoLayers from '@/assets/figma/company_logo_layers.svg';
import logoSisyphus from '@/assets/figma/company_logo_sisyphus.svg';
import logoCircooles from '@/assets/figma/company_logo_circooles.svg';
import logoCatalog from '@/assets/figma/company_logo_catalog.svg';
import logoQuotient from '@/assets/figma/company_logo_quotient.svg';
import featureIconMail from '@/assets/figma/feature_icon_mail.svg';
import featureIconZap from '@/assets/figma/feature_icon_zap.svg';
import featureIconBarchart from '@/assets/figma/feature_icon_barchart.svg';
import featureIconSmile from '@/assets/figma/feature_icon_smile.svg';
import featureIconCommand from '@/assets/figma/feature_icon_command.svg';
import featureIconMessagecircle from '@/assets/figma/feature_icon_messagecircle.svg';
import quoteAuthorAvatar from '@/assets/figma/quote_author_avatar.png';
import metricsImage from '@/assets/figma/metrics_section_image.png';
// import QuoteDisplaySection from './components/QuoteDisplaySection';
// import MetricsHighlightSection from './components/MetricsHighlightSection';
// import CallToActionSection from './components/CallToActionSection';
// import PageFooter from './components/PageFooter';

// TODO: Define interfaces for props if any, in landing.types.ts
// export interface LandingPageProps {}

// Data for NavigationBar
const sampleNavLinks: NavLinkItem[] = [
  { id: 'home', label: 'Home', href: '#' },
  { id: 'products', label: 'Products', href: '#', hasDropdown: true },
  { id: 'resources', label: 'Resources', href: '#', hasDropdown: true },
  { id: 'pricing', label: 'Pricing', href: '#' },
];

// Data for HeroSection
const heroBadge: BadgeInfo = {
  id: 'hero-badge',
  text: 'New feature',
  message: 'Check out the team dashboard',
  href: '#',
  // iconSrc will be handled by HeroSection component internally for now
};

const heroActions: ButtonAction[] = [
  {
    id: 'demo-button',
    text: 'Demo',
    href: '#',
    variant: 'tertiary',
    iconSrc: playCircleIcon, // Pass the imported icon path
  },
  {
    id: 'signup-button',
    text: 'Sign up',
    href: '#',
    variant: 'primary',
  },
];

const heroData: HeroSectionProps = {
  badge: heroBadge,
  heading: 'Beautiful analytics to grow smarter',
  supportingText: 'Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.',
  actions: heroActions,
  mainImageSrc: macbookMockup,
  mainImageAlt: 'MacBook Pro showing analytics dashboard',
};

// Data for SocialProofSection
const companyLogos: CompanyLogoItem[] = [
  { id: 'layers', name: 'Layers', logoSrc: logoLayers },
  { id: 'sisyphus', name: 'Sisyphus', logoSrc: logoSisyphus },
  { id: 'circooles', name: 'Circooles', logoSrc: logoCircooles },
  { id: 'catalog', name: 'Catalog', logoSrc: logoCatalog },
  { id: 'quotient', name: 'Quotient', logoSrc: logoQuotient },
];
const socialProofData: SocialProofSectionProps = {
  overlineText: 'Join 4,000+ companies already growing',
  logos: companyLogos,
};

// Data for FeaturesShowcaseSection
const featuresList: FeatureItemType[] = [
  {
    id: 'feature1',
    iconSrc: featureIconMail,
    title: 'Share team inboxes',
    description: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
  },
  {
    id: 'feature2',
    iconSrc: featureIconZap,
    title: 'Deliver instant answers',
    description: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
  },
  {
    id: 'feature3',
    iconSrc: featureIconBarchart,
    title: 'Manage your team with reports',
    description: 'Measure what matters with Untitled\'s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.',
  },
  {
    id: 'feature4',
    iconSrc: featureIconSmile,
    title: 'Connect with customers',
    description: 'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.',
  },
  {
    id: 'feature5',
    iconSrc: featureIconCommand,
    title: 'Connect the tools you already use',
    description: 'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.',
  },
  {
    id: 'feature6',
    iconSrc: featureIconMessagecircle,
    title: 'Our people make the difference',
    description: "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
  },
];

const featuresData: FeaturesSectionProps = {
  subheading: 'Features',
  heading: "Analytics that feels like it's from the future",
  supportingText: 'Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.',
  features: featuresList,
};

// Data for QuoteDisplaySection
const quoteData: QuoteSectionProps = {
  companyLogoSrc: logoSisyphus,
  companyName: 'Sisyphus',
  quoteText: "We've been using Untitled to kick start every new project and can't imagine working without it.",
  authorName: 'Candice Wu',
  authorRole: 'Product Manager, Sisyphus',
  authorAvatarSrc: quoteAuthorAvatar,
};

// Data for MetricsHighlightSection
const metricItemsList: MetricItemType[] = [
  {
    id: 'metric1',
    value: '4,000+',
    title: 'Global customers',
      description: 'We have helped over 4,000 amazing global companies.',
    },
    {
      id: 'metric2',
      value: '600%',
    title: 'Return on investment',
    description: 'Our customers have reported an average of ~600% ROI.',
  },
  {
    id: 'metric3',
    value: '10k',
    title: 'Global downloads',
    description: 'Our app has been downloaded over 10k times.',
  },
  {
    id: 'metric4',
    value: '200+',
    title: '5-star reviews',
    description: 'We\'re proud of our 5-star rating with over 200 reviews.',
  },
];

const metricsData: MetricsSectionProps = {
  subheading: 'Launch faster',
  heading: 'Build something great',
  supportingText: 'We\'ve done all the heavy lifting so you don\'t have to — get all the data you need to launch and grow your business faster.',
  metricItems: metricItemsList,
  imageSrc: metricsImage,
  imageAlt: 'Abstract representation of data and growth',
};

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <NavigationBar navLinks={sampleNavLinks} userAvatarSrc={userAvatar} />
      <main className="flex-grow">
        <HeroSection {...heroData} />
        <SocialProofSection {...socialProofData} />
        <FeaturesShowcaseSection {...featuresData} />
        <QuoteDisplaySection {...quoteData} />
        <MetricsHighlightSection {...metricsData} />
        {/* <MetricsHighlightSection /> */}
        {/* <CallToActionSection /> */}
      </main>
      {/* <PageFooter /> */}
      <h1 className="text-3xl font-bold underline text-center p-10">
        Landing Page Content (To be implemented based on Figma)
      </h1>
    </div>
  );
};

export default LandingPage; 