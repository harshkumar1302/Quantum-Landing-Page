"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  
  // Custom Spotlight for Hero
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const spotY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Global Scroll Transforms (Omit target to track entire window scroll forced by SmoothScroll wrapper)
  const { scrollYProgress } = useScroll();

  // Scene 1 Transforms (Hero)
  const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);
  const heroOpacity = useTransform(scrollYProgress, [0.08, 0.15], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -100]);
  const heroBlur = useTransform(scrollYProgress, [0.05, 0.15], ["blur(0px)", "blur(20px)"]);
  const heroZIndex = useTransform(scrollYProgress, [0.15, 0.16], [10, -1]);
  const heroVisibility = useTransform(scrollYProgress, [0.15, 0.16], ["visible", "hidden"]);

  // Scene 2 Transforms (Horizontal Scroll Products)
  const horizontalScrollX = useTransform(scrollYProgress, [0.25, 0.6], ["0%", "-66.66%"]);
  
  // Scene 3 Transforms (Tech & Text)
  const techBgColor = useTransform(
    scrollYProgress, 
    [0.55, 0.65, 0.8, 0.9], 
    ["var(--background)", "var(--background)", "var(--background)", "var(--background)"]
  );

  return (
    <div className="w-full bg-background text-foreground transition-colors duration-500 overflow-hidden">
      
      {/* 
        ========================================
        SCENE 1: THE ABYSS HERO 
        Sticky to stay visible while scrolling first 100vh
        ========================================
      */}
      <motion.section 
        className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ 
          scale: heroScale, 
          opacity: heroOpacity, 
          y: heroY,
          filter: heroBlur,
          zIndex: heroZIndex,
          visibility: heroVisibility as any,
          pointerEvents: "none"
        }}
      >
        {/* Dynamic Spotlight */}
        <motion.div 
          className="absolute inset-0 z-0 bg-transparent mix-blend-screen dark:mix-blend-screen mix-blend-multiply opacity-50 dark:opacity-100"
          style={{
            background: `radial-gradient(circle 600px at ${spotX}px ${spotY}px, var(--color-primary), transparent 80%)`,
          }}
        />

        <div className="relative z-10 text-center flex flex-col items-center w-full px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10px] uppercase tracking-[0.5em] font-bold text-primary mb-8"
          >
            QuantumRealm AI Labs
          </motion.div>

          <h1 className="text-[12vw] leading-[0.85] font-black tracking-tighter text-foreground uppercase mix-blend-difference w-full text-center">
            Mind Of
            <br />
            <span className="text-transparent border-text">The Internet</span>
          </h1>

          <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1, duration: 2 }}
             className="text-foreground/40 font-mono text-sm max-w-md mt-12 lowercase"
          >
             scroll to descend into the architecture
          </motion.p>
        </div>
      </motion.section>

      {/* SPACER FOR FIXED HERO */}
      <div className="w-full h-screen" />

      {/* 
        ========================================
        SCENE 2: HORIZONTAL MONOLITHS 
        300vh container. The sticky element stays pinned for that duration.
        ========================================
      */}
      <div className="relative w-full h-[300vh] z-20">
        <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center bg-background z-20 transition-colors duration-500">
           {/* Scene 2 Background Glow */}
           <div className="absolute inset-0 bg-[radial-gradient(circle_50%_at_50%_50%,var(--color-primary),transparent)] opacity-[0.03] pointer-events-none" />
          <motion.div 
            className="flex h-full items-center pl-[10vw] relative z-10"
            style={{ x: horizontalScrollX, width: "300vw" }}
          >
          {/* Monolith 1: The Engine */}
          <div className="w-[85vw] sm:w-[60vw] h-[80vh] mr-[5vw] relative group pointer-events-auto shrink-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-foreground/[0.02] border border-foreground/10 rounded-[40px] overflow-hidden backdrop-blur-xl transition-all duration-700 group-hover:bg-foreground/[0.05] group-hover:border-foreground/20">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-primary)_0%,transparent_40%)] opacity-10" />
               <div className="p-12 md:p-24 h-full flex flex-col justify-end relative z-10">
                  <h2 className="text-5xl md:text-8xl font-black mb-8 uppercase tracking-tighter text-foreground">Quantum Engine API</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
                     <p className="text-foreground/50 text-xl font-light leading-relaxed">
                       Our proprietary intelligence layer. Engineered from the metal up to process natural language, computer vision, and predictive time-series data at 10M+ events per day with single-digit millisecond latency.
                     </p>
                     <ul className="text-foreground/40 font-mono text-sm space-y-4">
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Zero-Trust Architecture</li>
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Real-time Graph Processing</li>
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Distributed State Network</li>
                     </ul>
                  </div>
               </div>
            </div>
          </div>

          {/* Monolith 2: Creonnect */}
          <div className="w-[85vw] sm:w-[60vw] h-[80vh] mr-[5vw] relative group pointer-events-auto shrink-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-blue-500/[0.02] border border-blue-500/20 rounded-[40px] overflow-hidden backdrop-blur-xl transition-all duration-700 group-hover:bg-blue-500/[0.05]">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#3b82f6_0%,transparent_50%)] opacity-20" />
               <div className="p-12 md:p-24 h-full flex flex-col justify-end relative z-10">
                  <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.3em] mb-6 block border border-blue-500/30 w-max px-4 py-1.5 rounded-full">Application 001</span>
                  <h2 className="text-5xl md:text-8xl font-black mb-8 uppercase tracking-tighter text-foreground">Creonnect</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl mb-12">
                     <p className="text-foreground/60 text-xl font-light leading-relaxed">
                       The flagship Creator Operating System. Built entirely on the Quantum Engine to automate DMs, scheduling, and community analytics infinitely without manual intervention.
                     </p>
                     <p className="text-foreground/40 font-mono text-sm leading-relaxed border-l border-foreground/10 pl-6">
                       Currently powering 50,000+ creators globally. Routing over 1M messages daily with 99.9% contextual NLP accuracy.
                     </p>
                  </div>
                  <a href="https://creonnect.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-foreground font-bold hover:text-blue-500 transition-colors uppercase tracking-[0.2em] text-sm group-hover:gap-6" data-magnetic>
                    Explore Platform <ArrowRight className="w-5 h-5" />
                  </a>
               </div>
            </div>
          </div>

          {/* Monolith 3: Atlas Protocol */}
          <div className="w-[85vw] sm:w-[60vw] h-[80vh] relative group pointer-events-auto shrink-0 flex items-center justify-center pr-[10vw]">
            <div className="absolute inset-0 bg-white/[0.01] border border-dashed border-white/20 rounded-[40px] overflow-hidden backdrop-blur-xl transition-all duration-700 hover:border-white/50">
               <div className="p-12 md:p-24 h-full flex flex-col items-center justify-center text-center relative z-10">
                  <span className="text-white/30 font-mono text-xs uppercase tracking-[0.3em] mb-8 block">Project Atlas [Classified]</span>
                  <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter text-white/50">Predictive Ecosystems</h2>
                  <p className="text-white/30 text-lg font-mono max-w-xl leading-relaxed">
                    The next evolution of the Quantum Engine. Generative UI layers that adapt to user biometric and behavioral signaling in real-time. Entering closed beta Q4 2026.
                  </p>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
      </div>

      {/* 
        ========================================
        SCENE 3 & 4: DATA STREAM & VOID FOOTER
        Normal scroll flow
        ========================================
      */}
      <motion.div 
         className="relative w-full z-30 flex flex-col"
         style={{ backgroundColor: techBgColor }}
      >
        <div className="w-full overflow-hidden whitespace-nowrap py-16 border-y border-foreground/5 bg-background/80 backdrop-blur-xl mt-[20vh] transition-colors duration-500">
           <motion.div 
             className="inline-block text-[10vw] font-black uppercase text-transparent border-text opacity-40 mix-blend-difference"
             animate={{ x: ["0%", "-50%"] }}
             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
           >
             COMPLIANCE IS NON-NEGOTIABLE &mdash; INTELLIGENCE AT THE EDGE &mdash; SHIP FAST LEARN FASTER &mdash; COMPLIANCE IS NON-NEGOTIABLE &mdash; INTELLIGENCE AT THE EDGE &mdash; SHIP FAST LEARN FASTER &mdash; 
           </motion.div>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-40 grid grid-cols-1 lg:grid-cols-2 gap-20">
           <div>
              <h3 className="text-4xl md:text-7xl font-light mb-12 tracking-tighter leading-[0.9]">
                 We do not accept <br />
                 <span className="font-black italic text-primary">the current limitations</span><br />
                 of software.
              </h3>
              <p className="text-foreground/50 text-xl font-light leading-relaxed max-w-md">
                 Our lab is dedicated to destroying the boundaries between human intent and machine execution. We are engineers, researchers, and designers building the foundational tools for the next internet era.
              </p>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-8 border border-foreground/10 bg-foreground/5 rounded-3xl hover:bg-foreground/10 transition-colors">
                 <div className="text-5xl font-black mb-4">10M+</div>
                 <div className="text-foreground/40 font-mono text-xs uppercase tracking-widest">Events Processed Daily</div>
              </div>
              <div className="p-8 border border-foreground/10 bg-foreground/5 rounded-3xl hover:bg-foreground/10 transition-colors">
                 <div className="text-5xl font-black mb-4">8ms</div>
                 <div className="text-foreground/40 font-mono text-xs uppercase tracking-widest">Average Edge Latency</div>
              </div>
              <div className="p-8 border border-foreground/10 bg-foreground/5 rounded-3xl hover:bg-foreground/10 transition-colors">
                 <div className="text-5xl font-black mb-4">99%</div>
                 <div className="text-foreground/40 font-mono text-xs uppercase tracking-widest">Intent Parsing Accuracy</div>
              </div>
              <div className="p-8 border border-foreground/10 bg-foreground/5 rounded-3xl flex items-center justify-center group">
                 <Link href="/about" data-magnetic className="text-foreground font-bold uppercase tracking-[0.2em] text-sm group-hover:text-primary transition-colors">
                    Enter the Lab &rarr;
                 </Link>
              </div>
           </div>
        </div>

        <BlogSection />
        <ContactSection />

        {/* Void Footer */}
        <footer className="w-full py-16 px-8 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-mono uppercase tracking-[0.2em] text-foreground/30 pointer-events-auto bg-background transition-colors duration-500">
           <div>&copy; 2026 QuantumRealm AI Labs. All rights reserved.</div>
           <div className="flex gap-12">
              <a href="https://x.com/quantumrealm" data-magnetic className="hover:text-foreground transition-colors">X (Twitter)</a>
              <a href="https://linkedin.com/company/quantumrealm" data-magnetic className="hover:text-foreground transition-colors">LinkedIn</a>
           </div>
           <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" style={{ boxShadow: "0 0 10px var(--color-primary)" }} />
              Global Systems Online
           </div>
        </footer>

      </motion.div>

      <style dangerouslySetInnerHTML={{__html: `
        .border-text {
          -webkit-text-stroke: 1px var(--foreground);
          color: transparent;
        }
        .border-text-muted {
          -webkit-text-stroke: 1px color-mix(in srgb, var(--foreground), transparent 80%);
          color: transparent;
        }
      `}} />

    </div>
  );
}
