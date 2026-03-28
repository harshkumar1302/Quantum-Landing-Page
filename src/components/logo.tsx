import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  // Define sizing classes
  const sizes = {
    sm: {
      title: "text-lg",
      line: "w-[80%] mt-0.5 mb-1",
      subtitle: "text-[7px] tracking-[0.4em]",
      container: "gap-0 leading-none",
    },
    md: {
      title: "text-2xl",
      line: "w-[85%] mt-1 mb-2",
      subtitle: "text-[9px] tracking-[0.5em]",
      container: "gap-0 leading-none",
    },
    lg: {
      title: "text-4xl",
      line: "w-[85%] mt-2 mb-3",
      subtitle: "text-[12px] tracking-[0.5em]",
      container: "gap-0 leading-none",
    }
  };

  const s = sizes[size];

  return (
    <div className={`flex flex-col items-center justify-center select-none ${s.container} ${className}`}>
      {/* The main brand name */}
      <span className={`font-light font-sans tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#06B6D4] ${s.title}`}>
        QUANTUMREALM
      </span>
      {/* The thin line */}
      <div className={`h-[1px] bg-gradient-to-r from-[#A855F7]/80 to-[#06B6D4]/80 opacity-60 ${s.line}`} />
      {/* The subtitle */}
      <span className={`font-mono text-black dark:text-white/90 uppercase opacity-80 pl-1 ${s.subtitle}`}>
        A I &nbsp;L A B S
      </span>
    </div>
  );
}

