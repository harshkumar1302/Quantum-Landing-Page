import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  withGraphic?: boolean;
}

export function Logo({ className = "", size = "md", withGraphic = true }: LogoProps) {
  // Define sizing classes
  const sizes = {
    sm: {
      graphic: "w-6 h-6",
      title: "text-lg",
      line: "w-[80%] mt-0.5 mb-1",
      subtitle: "text-[7px] tracking-[0.4em]",
      container: "gap-0 leading-none",
    },
    md: {
      graphic: "w-8 h-8",
      title: "text-2xl",
      line: "w-[85%] mt-1 mb-2",
      subtitle: "text-[9px] tracking-[0.5em]",
      container: "gap-0 leading-none",
    },
    lg: {
      graphic: "w-12 h-12",
      title: "text-4xl",
      line: "w-[85%] mt-2 mb-3",
      subtitle: "text-[12px] tracking-[0.5em]",
      container: "gap-0 leading-none",
    }
  };

  const s = sizes[size];

  return (
    <div className={`flex items-center select-none ${className}`}>
      
      {/* Premium SVG Abstract Q Icon */}
      {withGraphic && (
        <div className={`${s.graphic} shrink-0 bg-gradient-to-br from-[#7C3AED]/20 to-[#06B6D4]/20 rounded-md sm:rounded-lg border border-white/20 dark:border-white/10 flex items-center justify-center p-1.5 relative shadow-[0_0_15px_rgba(124,58,237,0.15)] mr-3 overflow-hidden backdrop-blur-md`}>
           <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10 drop-shadow-sm">
              <circle cx="11.5" cy="11.5" r="7" stroke="url(#paint0_linear)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.5 16.5L21 21" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="paint0_linear" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7C3AED" />
                  <stop offset="1" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
           </svg>
        </div>
      )}

      {/* Typography Block */}
      <div className={`flex flex-col items-center justify-center ${s.container}`}>
        <span className={`font-light font-sans tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#06B6D4] ${s.title}`}>
          QUANTUMREALM
        </span>
        <div className={`h-[1px] bg-gradient-to-r from-[#A855F7]/80 to-[#06B6D4]/80 opacity-60 ${s.line}`} />
        <span className={`font-mono text-black dark:text-white/90 uppercase opacity-80 pl-1 ${s.subtitle}`}>
          A I &nbsp;L A B S
        </span>
      </div>
      
    </div>
  );
}

