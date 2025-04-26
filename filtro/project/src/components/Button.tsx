import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  href, 
  target, 
  rel,
  ...props 
}) => {
  const baseClasses = `
    relative 
    inline-flex 
    items-center 
    justify-center 
    w-full 
    py-4 
    px-6 
    text-lg 
    font-medium 
    text-white 
    bg-yellow-500 
    rounded-xl 
    shadow-lg 
    transition-all 
    duration-300 
    overflow-hidden 
    group 
    hover:bg-yellow-400 
    hover:scale-[1.03] 
    focus:outline-none 
    focus:ring-2 
    focus:ring-yellow-400 
    focus:ring-offset-2 
    focus:ring-offset-gray-900
  `;

  if (href) {
    return (
      <a 
        href={href} 
        target={target} 
        rel={rel}
        className={baseClasses}
      >
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 overflow-hidden rounded-xl">
          <span className="absolute -inset-[100%] bg-gradient-to-r from-yellow-400/0 via-yellow-400/40 to-yellow-400/0 animate-shimmer" />
        </span>
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 overflow-hidden rounded-xl">
        <span className="absolute -inset-[100%] bg-gradient-to-r from-yellow-400/0 via-yellow-400/40 to-yellow-400/0 animate-shimmer" />
      </span>
    </button>
  );
};