"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

export function InteractiveAvatar() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="w-full flex justify-center lg:justify-end" style={{ perspective: "1500px" }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] bg-[#020617] shadow-2xl overflow-visible cursor-crosshair mx-auto transition-shadow hover:shadow-[0_20px_50px_rgba(34,211,238,0.2)]"
      >
        <div 
          className="absolute inset-0 z-0 rounded-[2.5rem] overflow-hidden bg-black"
          style={{ transform: "translateZ(-30px)" }}
        >
          <img 
            src="/images/personal-ai-avatar.png" 
            alt="Personalized AI Avatar" 
            className="w-full h-full object-cover opacity-90 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent" />
        </div>

        <div 
          className="absolute bottom-10 left-10 right-10 z-20 flex flex-col pointer-events-none"
          style={{ transform: "translateZ(80px)" }}
        >
           <div className="flex items-end gap-1.5 h-16 w-full mb-8">
              {[...Array(24)].map((_, i) => (
                 <motion.div
                    key={i}
                    animate={{ height: ["15%", "100%", "20%", "85%", "15%"] }}
                    transition={{ repeat: Infinity, duration: 1 + (i * 0.05), ease: "easeInOut", repeatType: "mirror", delay: i * 0.02 }}
                    className="w-1.5 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)] opacity-90"
                 />
              ))}
           </div>
           
           <div className="flex items-center justify-between w-full border-t border-white/20 pt-6">
              <div className="flex flex-col">
                 <span className="text-white font-black text-sm uppercase tracking-widest mb-1 shadow-black drop-shadow-lg">Neural Persona</span>
                 <span className="text-white/60 font-mono text-[10px] uppercase tracking-[0.3em] shadow-black drop-shadow-md">QuantumRealm Active</span>
              </div>
              <div className="w-3 h-3 rounded-full bg-fuchsia-500 shadow-[0_0_20px_#d946ef] animate-pulse" />
           </div>
        </div>
      </motion.div>
    </div>
  );
}
