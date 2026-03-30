import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  // Define sizing classes for a text-only "Original" look
  const sizes = {
    sm: {
      title: "text-lg",
      subtitle: "text-[10px] tracking-[0.2em]",
      container: "gap-1",
    },
    md: {
      title: "text-2xl",
      subtitle: "text-[13px] tracking-[0.2em]",
      container: "gap-1.5",
    },
    lg: {
      title: "text-4xl",
      subtitle: "text-[18px] tracking-[0.2em]",
      container: "gap-2",
    }
  };

  const s = sizes[size];

  return (
    <div className={`flex items-baseline select-none ${s.container} ${className}`}>
      
      {/* Primary Brand Mark */}
      <span className={`font-black font-sans tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-black to-black/60 dark:from-white dark:to-white/60 ${s.title}`}>
        QUANTUMREALM
      </span>

      {/* Integrated Label */}
      <span className={`font-light font-sans text-black/40 dark:text-white/40 uppercase whitespace-nowrap ${s.subtitle}`}>
        AI LABS
      </span>
      
    </div>
  );
}
