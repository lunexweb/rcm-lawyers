import React from 'react';

const Logo = ({ className = "w-12 h-12" }: { className?: string }) => {
  return (
    <div className={`${className} relative`}>
      {/* Circular emblem with gold ring */}
      <div className="w-full h-full rounded-full border-4 border-yellow-600 bg-gradient-to-br from-yellow-50 to-yellow-100 flex items-center justify-center shadow-lg">
        {/* Scales of Justice */}
        <svg 
          viewBox="0 0 100 100" 
          className="w-3/4 h-3/4 text-dark-blue"
          fill="currentColor"
        >
          {/* Central pillar */}
          <rect x="48" y="20" width="4" height="60" />
          {/* Pillar base */}
          <rect x="40" y="75" width="20" height="8" />
          {/* Pillar top */}
          <polygon points="50,15 45,25 55,25" />
          {/* Horizontal beam */}
          <rect x="20" y="18" width="60" height="4" />
          {/* Left pan */}
          <ellipse cx="25" cy="30" rx="8" ry="3" />
          <rect x="22" y="30" width="6" height="8" />
          {/* Right pan */}
          <ellipse cx="75" cy="30" rx="8" ry="3" />
          <rect x="72" y="30" width="6" height="8" />
        </svg>
      </div>
    </div>
  );
};

export default Logo;
