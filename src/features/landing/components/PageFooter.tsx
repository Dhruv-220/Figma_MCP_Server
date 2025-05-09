import React from 'react';
import { PageFooterProps, FooterLinkColumn, FooterLink } from '../landing.types';
import { Logo } from '@/components/Logo';

const PageFooter: React.FC<PageFooterProps> = ({
  linkColumns,
  // logoSrc, // Logo component handles its own source
  copyrightText,
}) => {
  // layout_21I90K: padding 64px 0px 48px -> pt-16 pb-12
  // layout_KRY1VO (link container): width 1280px, padding 0 32px, gap 48px
  // layout_8DFT6P (links row): gap 32px
  // layout_HU74OP (link column): gap 16px
  // style_VHKH2Q (column heading): 14px, Inter, 600, fill_8LO2IX (#717680 -> text-gray-500)
  // style_XP9NBK (link text): 16px, Inter, 600, fill_SLXM25 (#535862 -> text-gray-600)
  // style_S7Z9OF (copyright): 16px, Inter, 400, fill_8LO2IX (#717680 -> text-gray-500)
  // fill_0MVLZN (divider): #E9EAEB -> border-gray-200

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
          {/* Adjust grid columns based on number of linkColumns, Figma shows 5 */}
          {linkColumns.map((column) => (
            <div key={column.id} className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                {column.heading}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.id}>
                    <a 
                      href={link.href} 
                      className="text-base text-gray-600 hover:text-gray-900 flex items-center"
                    >
                      {link.text}
                      {link.badgeText && (
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                          {/* Badge style from Figma (I3:13884;...;1507:253530): fill_SFB9P5 (#ECFDF3), text_Z3RGLF (#027A48) */}
                          {link.badgeText}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section: Logo and Copyright */}
        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <Logo />
          <p className="text-base text-gray-500">
            {copyrightText}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter; 