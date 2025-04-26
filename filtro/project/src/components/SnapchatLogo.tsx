import React from 'react';
import { Ghost } from 'lucide-react';

interface SnapchatLogoProps {
  className?: string;
}

export const SnapchatLogo: React.FC<SnapchatLogoProps> = ({ className = '' }) => {
  return (
    <div className={`animate-float ${className}`}>
      <Ghost className="w-full h-full" />
    </div>
  );
};