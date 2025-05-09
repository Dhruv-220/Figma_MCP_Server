// This file will contain TypeScript interfaces and types specific to the Landing Page feature.

export interface NavLinkItem {
  id: string;
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface NavigationBarProps {
  logoSrc?: string; // Optional, could be an SVG component too
  navLinks: NavLinkItem[];
  userName?: string; // For avatar/user display
  userAvatarSrc?: string;
}

export interface BadgeInfo {
  id: string;
  text: string;
  message: string;
  href: string;
  iconSrc?: string; // for the arrow icon
}

export interface ButtonAction {
  id: string;
  text: string;
  href: string;
  variant: 'primary' | 'secondary' | 'tertiary'; // tertiary for the demo button with icon
  iconSrc?: string; // for the play icon
}

export interface HeroSectionProps {
  badge?: BadgeInfo;
  heading: string;
  supportingText: string;
  actions: ButtonAction[];
  mainImageSrc: string;
  mainImageAlt: string;
}

// Example:
// export interface HeroSectionProps {
//   title: string;
//   subtitle: string;
//   ctaTextPrimary: string;
//   ctaTextSecondary: string;
// }

export interface CompanyLogoItem {
  id: string;
  name: string; // For alt text
  logoSrc: string; // Path to the SVG/image file
}

export interface SocialProofSectionProps {
  overlineText: string;
  logos: CompanyLogoItem[];
}

export interface FeatureItem {
  id: string;
  iconSrc: string; // Path to the SVG icon file
  title: string;
  description: string;
  // iconBackgroundColor?: string; // From Figma: fill_I8ZMNH (#F4EBFF), stroke_4PCDN1 (#F9F5FF)
}

export interface FeaturesSectionProps {
  subheading: string;
  heading: string;
  supportingText: string;
  features: FeatureItem[];
}

export interface QuoteSectionProps {
  companyLogoSrc: string;
  companyName: string; // For alt text
  quoteText: string;
  authorName: string;
  authorRole: string;
  authorAvatarSrc: string;
}

export interface MetricItem {
  id: string;
  value: string; // e.g., "4,000+", "600%"
  title: string;
  description: string;
}

export interface MetricsSectionProps {
  subheading: string;
  heading: string;
  supportingText: string;
  metricItems: MetricItem[];
  imageSrc: string;
  imageAlt: string;
}

export interface CallToActionSectionProps {
  heading: string;
  supportingText: string;
  actions: ButtonAction[]; // Reusing ButtonAction from HeroSection
}

export interface FooterLink {
  id: string;
  text: string;
  href: string;
  badgeText?: string; // For the "New" badge on Solutions
}

export interface FooterLinkColumn {
  id: string;
  heading: string;
  links: FooterLink[];
}

export interface PageFooterProps {
  linkColumns: FooterLinkColumn[];
  logoSrc?: string; // Assuming same logo as header
  copyrightText: string;
}

// Add other interfaces as components are developed.
// export {}; // Ensures this file is treated as a module. (Removed as we now have exports) 