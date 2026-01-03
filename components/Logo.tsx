
import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", light = false }) => {
  const color = light ? "white" : "#FFCB05";
  const textColor = light ? "white" : "#1e293b"; // slate-800
  const subTextColor = light ? "rgba(255,255,255,0.7)" : "#64748b"; // slate-500
  
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Recreated Logo Icon */}
      <div className="relative w-12 h-12 flex-shrink-0">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Main Network Sphere */}
          <circle cx="50" cy="50" r="42" stroke={color} strokeWidth="1.2" strokeDasharray="3 3" className="opacity-30" />
          <path d="M15 50C15 30.67 30.67 15 50 15C69.33 15 85 30.67 85 50" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
          <path d="M20 70C28 82 42 88 50 88C58 88 72 82 80 70" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
          
          {/* Connecting Dots (Nodes) */}
          <circle cx="50" cy="15" r="3" fill={color} />
          <circle cx="85" cy="50" r="3" fill={color} />
          <circle cx="15" cy="45" r="3" fill={color} />
          <circle cx="35" cy="88" r="3" fill={color} />
          <circle cx="65" cy="88" r="3" fill={color} />
          
          {/* Central Figure */}
          <circle cx="50" cy="42" r="8" fill={color} />
          <path d="M38 72C38 60 42 54 50 54C58 54 62 60 62 72H38Z" fill={color} />
          
          {/* Left Figure */}
          <circle cx="28" cy="48" r="6" fill={color} className="opacity-80" />
          <path d="M20 68C20 60 24 57 28 57C32 57 36 60 36 68H20Z" fill={color} className="opacity-80" />
          
          {/* Right Figure */}
          <circle cx="72" cy="48" r="6" fill={color} className="opacity-80" />
          <path d="M64 68C64 60 68 57 72 57C76 57 80 60 80 68H64Z" fill={color} className="opacity-80" />

          {/* Floating Particle Dots (Top Right) */}
          <circle cx="78" cy="22" r="2" fill={color} className="animate-pulse" />
          <circle cx="86" cy="18" r="1.5" fill={color} />
          <circle cx="92" cy="26" r="2" fill={color} />
          <circle cx="84" cy="30" r="1.5" fill={color} />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center">
        <span 
          className="text-2xl font-black tracking-tight leading-none uppercase" 
          style={{ 
            fontFamily: "'Inter', sans-serif",
            color: textColor 
          }}
        >
          Influencer
        </span>
        <div className="h-[2px] w-full my-1 rounded-full" style={{ backgroundColor: color }}></div>
        <span 
          className="text-[9px] font-extrabold tracking-[0.3em] leading-none uppercase"
          style={{ 
            fontFamily: "'Inter', sans-serif",
            color: subTextColor 
          }}
        >
          Connect Agency
        </span>
      </div>
    </div>
  );
};

export default Logo;
