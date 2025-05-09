import React from 'react';
import { Icon, IconProps } from '@/components/Icon';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  leftIconSrc?: string;
  rightIconSrc?: string;
  iconProps?: Omit<IconProps, 'src' | 'alt'>;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  leftIconSrc,
  rightIconSrc,
  iconProps,
  className,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150 ease-in-out';
  // TODO: Refine these styles based on Figma variables later in tailwind.config.js
  const variantStyles = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 border border-transparent shadow-sm',
    secondary: 'bg-white text-gray-700 hover:bg-gray-50 focus:ring-indigo-500 border border-gray-300 shadow-sm',
    tertiary: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-indigo-500 border border-gray-300 shadow-sm', // Figma demo button is like secondary but with icon
    link: 'text-indigo-600 hover:text-indigo-500 underline focus:ring-indigo-500',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs rounded',
    md: 'px-4 py-2 text-sm rounded-md', // Figma buttons are 16px/28px padding (py-2/py-4, px-4/px-7)
    lg: 'px-6 py-3 text-base rounded-md',
    xl: 'px-7 py-4 text-base rounded-md', // Matched from Figma for Sign Up (16px text, padding 16px 28px)
  };
  
  const demoButtonPadding = 'px-7 py-4'; // style_INIJCV & style_UMTLB6 (padding: 16px 28px)

  const combinedClassName = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${variant === 'tertiary' ? demoButtonPadding : sizeStyles[size]}
    ${className || ''}
  `;

  const content = (
    <>
      {leftIconSrc && <Icon src={leftIconSrc} alt="" {...iconProps} className={`mr-2 ${iconProps?.size || 'h-5 w-5'}`} />}
      {children}
      {rightIconSrc && <Icon src={rightIconSrc} alt="" {...iconProps} className={`ml-2 ${iconProps?.size || 'h-5 w-5'}`} />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClassName.trim()}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={combinedClassName.trim()} {...props}>
      {content}
    </button>
  );
};

export default Button; 