import React from 'react';
import { NavigationBarProps, NavLinkItem } from '../landing.types';
import { Logo } from '@/components/Logo'; // Using shared Logo component
import { Icon } from '@/components/Icon';   // Using shared Icon component
import chevronDownIcon from '@/assets/figma/chevron_down.svg';
import userAvatarPlaceholder from '@/assets/figma/user_avatar.png'; // Using downloaded avatar

// Placeholder for an Avatar component - This could be a shared component
const Avatar: React.FC<{ src?: string; alt?: string }> = ({ src, alt }) => (
  <img
    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
    src={src || userAvatarPlaceholder} // Use downloaded or default placeholder
    alt={alt || 'User Avatar'}
  />
);

const NavigationBar: React.FC<NavigationBarProps> = ({
  navLinks,
  userAvatarSrc, // This prop will now directly take the path to the avatar
}) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Figma data: Container width 1280px, padding 0 32px. Tailwind's `container` with `px` should achieve similar results */}
        {/* Figma data: Header height 80px. Tailwind's h-20 = 5rem = 80px */}
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Logo /> {/* Removed src prop, Logo component handles its assets */}
          </div>

          <nav className="hidden md:flex items-center space-x-8"> {/* Figma: gap 40px (space-x-10 is 2.5rem), space-x-8 is 2rem, text uses gap 32px */}
            {navLinks.map((link: NavLinkItem) => (
              <a
                key={link.id}
                href={link.href}
                className="text-base font-medium text-gray-500 hover:text-gray-900 flex items-center"
                // style_XP9NBK: Inter, 600, 16px. Tailwind: text-base (16px), font-medium (500). font-semibold (600)
                // fill_SLXM25: #535862 (text-gray-500 is close #6B7280, text-gray-600 is #4B5563)
              >
                {link.label}
                {link.hasDropdown && (
                  <Icon src={chevronDownIcon} alt="Dropdown" size="h-5 w-5" className="ml-1 text-gray-400" />
                  // stroke_DT7VAI: #535862. text-gray-400 (#9CA3AF) or text-gray-500
                )}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {userAvatarSrc ? (
              <Avatar src={userAvatarSrc} />
            ) : (
              <>
                 {/* Figma shows Avatar, not login/signup in this specific nav instance I3:13762 */}
                 {/* For now, let's assume avatar is always present based on design, or pass specific props for these buttons */}
                <Avatar src={userAvatarPlaceholder} /> 
              </>
            )}
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar; 