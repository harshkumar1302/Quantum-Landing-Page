"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Box, Cpu, Network } from "lucide-react";
import React, { useRef } from "react";

const TiltCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
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
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative rounded-3xl group ${className}`}
    >
      {/* Glow Behind */}
      <motion.div 
         className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
         style={{ transform: "translateZ(-50px)" }}
      />
      {children}
    </motion.div>
  );
};

export function ProductsShowcase() {
  return (
    <section className="py-32 bg-background text-foreground overflow-hidden relative transition-colors duration-500" id="products">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6 border border-foreground/10 bg-foreground/5 rounded-full px-4 py-1.5 backdrop-blur-sm"
          >
             <Box className="w-4 h-4 text-purple-400" />
             <span className="text-xs uppercase tracking-widest font-bold text-foreground/80">Ecosystem Architecture</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-8"
          >
            One Core Engine. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Infinite Applications.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-foreground/50 leading-relaxed"
          >
            QuantumRealm isn't just a suite of tools. It's a foundational AI layer—the Quantum Engine—capable of understanding nuanced creator workflows and adapting seamlessly to any surface area.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto perspective-1000">
           
           {/* Core Infrastructure */}
           <div className="lg:col-span-8 h-full">
              <TiltCard className="h-full bg-gradient-to-br from-foreground/[0.05] to-transparent border border-foreground/10 overflow-hidden">
                 <div className="absolute inset-0" style={{ transform: "translateZ(-20px)" }}>
                    {/* SVG Grid Node BG */}
                    <svg className="absolute inset-0 w-full h-full opacity-10" width="100%" height="100%">
                       <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                         <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                       </pattern>
                       <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                 </div>
                 
                 <div className="relative p-10 md:p-16 h-full flex flex-col justify-end min-h-[500px]" style={{ transform: "translateZ(30px)" }}>
                    <div className="absolute top-10 left-10 w-16 h-16 rounded-2xl bg-primary/20 border border-primary/50 flex items-center justify-center backdrop-blur-xl">
                       <Cpu className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h3 className="text-3xl md:text-5xl font-black mb-4">Quantum Engine API</h3>
                    <p className="text-foreground/60 text-lg mb-8 max-w-lg leading-relaxed">
                       Our proprietary intelligence layer. Processing NLP, computer vision, and predictive time-series data at 10M+ events per day with single-digit millisecond latency.
                    </p>
                    <a href="#tech" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all w-max uppercase tracking-widest text-sm">
                       Explore Infrastructure <ArrowRight className="w-4 h-4" />
                    </a>
                 </div>
              </TiltCard>
           </div>

           {/* Core App */}
           <div className="lg:col-span-4 flex flex-col gap-8 h-full">
              <TiltCard className="flex-1 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 p-8 flex flex-col">
                 <div style={{ transform: "translateZ(30px)" }}>
                    <div className="w-12 h-12 rounded-xl overflow-hidden border border-blue-500/30 flex items-center justify-center mb-6 bg-white dark:bg-zinc-900">
                       <img src="/images/products/creonnect-logo.jpg" alt="Creonnect Logo" className="w-full h-full object-cover" />
                    </div>
                    <span className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest bg-blue-500/20 text-blue-400 mb-4 inline-block">Flagship App</span>
                    <a href="https://creonnect.com" target="_blank" rel="noopener noreferrer" className="group/title block">
                       <h3 className="text-2xl font-bold mb-3 group-hover/title:text-blue-400 transition-colors">Creonnect</h3>
                    </a>
                    <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                       The complete Creator Operating System built entirely on the Quantum Engine. Automates DMs, scheduling, and community analytics intelligently.
                    </p>
                    <a href="https://creonnect.com" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 text-foreground font-bold hover:text-blue-400 transition-colors text-sm">
                       Visit Creonnect.com <ArrowRight className="w-4 h-4" />
                    </a>
                 </div>
              </TiltCard>
              
              <TiltCard className="flex-1 bg-foreground/5 border border-foreground/10 p-8 flex flex-col justify-center items-center text-center">
                 <div style={{ transform: "translateZ(20px)" }}>
                    <h3 className="text-xl font-bold mb-3 text-foreground/40">Project X</h3>
                    <p className="text-foreground/30 text-xs uppercase tracking-widest w-full border-t border-foreground/10 pt-4 mt-4">
                       In stealth mode
                    </p>
                 </div>
              </TiltCard>
           </div>

        </div>
      </div>
    </section>
  );
}
