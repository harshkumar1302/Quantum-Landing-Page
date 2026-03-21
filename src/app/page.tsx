"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";
import { InteractiveAvatar } from "@/components/interactive-avatar";

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

  // Global Scroll Transforms
  const { scrollYProgress } = useScroll();

  // Scene 1 Transforms (Hero)
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.85]);
  const heroOpacity = useTransform(scrollYProgress, [0.05, 0.15], [1, 0]);
  const heroFilter = useTransform(scrollYProgress, [0.05, 0.15], ["blur(0px)", "blur(10px)"]);

  // Scene 2 Transforms (Horizontal Scroll Products)
  const horizontalScrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: horizontalProgress } = useScroll({
    target: horizontalScrollRef,
    offset: ["start start", "end end"]
  });

  // High-performance spring physics to interpolate scroll delta
  const smoothHorizontalProgress = useSpring(horizontalProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Perfect math: container is 400vh, we slide by 200vw to see all 3 screens (100vw each)
  // Math for 2 horizontal cards: container is 300vh, we slide by 100vw to see both screens.
  // We complete the slide early to pause at the end!
  const horizontalScrollX = useTransform(smoothHorizontalProgress, [0, 0.66], ["0vw", "-100vw"]);

  // Scene 3 Transforms (Tech & Text)
  const techBgColor = useTransform(
    scrollYProgress,
    [0.55, 0.65, 0.8, 0.9],
    ["var(--background)", "var(--background)", "var(--background)", "var(--background)"]
  );

  return (
    <div className="w-full bg-background text-foreground transition-colors duration-500 overflow-clip">

      {/* ========================================
          SEO INVISIBLE BLOCK (Strictly for bots)
          ======================================== */}
      <h1 className="sr-only">QuantumRealm AI Labs - The Ultimate AI Creator OS & Instagram Growth Agency Solution</h1>
      <p className="sr-only">
        QuantumRealm AI Labs is the premier AI infrastructure lab building generative UI and predictive ecosystems for the creator economy.
        Our flagship product, Creonnect, is an AI-powered Instagram Growth Platform designed to automate DMs, scheduling, and community analytics
        infinitely without manual intervention. We solve top creators related problems and provide elite brand solutions and agency solutions globally,
        scaling from the Indian market to the Asian and overseas global market. Creonnect by QuantumRealm processes over 10M+ events daily with
        99.9% contextual NLP accuracy, making us the top-tier engine for creators.
      </p>

      {/* 
        ========================================
        SCENE 1: THE ABYSS HERO 
        Using a native sticky container approach to ensure 100% reliable initial render
        ========================================
      */}
      <div className="relative w-full h-[150vh] z-10">
        <motion.section
          className="sticky top-0 left-0 w-full h-screen flex flex-col items-center justify-start overflow-hidden pt-[20vh]"
          style={{
            scale: heroScale,
            opacity: heroOpacity,
            filter: heroFilter,
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
            {/* Premium Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_var(--color-primary)]" />
              <span className="text-[10px] md:text-xs font-mono text-white/80 uppercase tracking-widest">QuantumRealm AI Labs</span>
            </motion.div>

            {/* Premium Gradient Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/30 w-full text-center max-w-5xl leading-[1.05]"
            >
              Building the AI Infrastructure<br/>for the Creator Economy.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1.5 }}
              className="text-foreground/50 font-light text-lg md:text-xl max-w-2xl mt-8 mx-auto leading-relaxed"
            >
              QuantumRealm AI Labs is an AI-first technology company building intelligent tools that help millions of creators turn their passion into a sustainable business. Our flagship product, Creonnect, is transforming how Instagram creators engage, monetize, and grow.
            </motion.p>

            {/* High-End Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-4 mt-12 z-20 pointer-events-auto"
            >
              <a href="https://creonnect.com" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-foreground text-background font-bold tracking-widest uppercase text-xs hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center gap-3 group">
                Explore Creonnect <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link href="/careers" className="px-8 py-4 rounded-full bg-white/[0.03] border border-white/10 text-white font-bold tracking-widest uppercase text-xs hover:bg-white/10 transition-all flex items-center gap-3">
                We're Hiring
              </Link>
            </motion.div>
            
          </div>

          {/* The Visual "Anchor" Graphic deeply faded at the bottom */}
          <motion.div 
             initial={{ opacity: 0, y: 100 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.7, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
             className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl aspect-[2/1] md:aspect-video rounded-t-3xl border-t border-x border-white/10 bg-gradient-to-b from-white/5 to-transparent overflow-hidden flex justify-center pt-8 z-0 pointer-events-none"
             style={{ maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)" }}
          >
             <div className="w-[80%] h-full rounded-t-2xl border-t border-x border-white/20 bg-black/50 shadow-[0_-20px_50px_rgba(124,58,237,0.1)] flex p-4 gap-4">
                {/* Mock Code / UI Graphic */}
                <div className="w-1/3 h-full rounded-xl bg-white/5 border border-white/10 p-4 flex flex-col gap-3">
                   <div className="w-full h-2 bg-white/20 rounded-full" />
                   <div className="w-3/4 h-2 bg-white/10 rounded-full" />
                   <div className="w-5/6 h-2 bg-white/10 rounded-full" />
                   <div className="w-1/2 h-2 bg-white/10 rounded-full mt-4" />
                   <div className="w-full h-2 bg-white/10 rounded-full" />
                </div>
                <div className="w-2/3 h-full rounded-xl bg-white/5 border border-white/10 p-4 flex flex-col gap-4">
                   <div className="w-full aspect-video rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:1rem_1rem]" />
                      <div className="w-12 h-12 rounded-full bg-primary/40 animate-ping" />
                   </div>
                </div>
             </div>
          </motion.div>
        </motion.section>
      </div>

      {/* 
        ========================================
        SCENE 1.5: MISSION STATEMENT
        PRD 5.3 - Why We Exist
        ========================================
      */}
      <section className="relative w-full py-32 px-4 z-20 bg-background border-t border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-foreground/50 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Why We Exist</span>
          </div>
          <p className="text-2xl md:text-5xl font-light leading-tight text-foreground/80">
            The 100M+ creator economy is throttled by highly fragmented, manual tools.
            <span className="text-foreground font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500"> AI is the only scalable answer. </span>
            We believe every creator deserves an operating system for their business —
            <span className="font-bold underline decoration-primary decoration-4 underline-offset-8">and we're building it.</span>
          </p>
        </div>
      </section>

      {/* 
        ========================================
        SCENE 2: HORIZONTAL MONOLITHS 
        300vh container -> 100vw horizontal translation (2 cards total)
        ========================================
      */}
      <div ref={horizontalScrollRef} className="relative w-full h-[300vh] z-20">
        <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center bg-background z-20 transition-colors duration-500">
          {/* Scene 2 Background Glow & Tech Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_50%_at_50%_50%,var(--color-primary),transparent)] opacity-[0.03] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_center,black_50%,transparent_100%)] pointer-events-none" />

          <motion.div
            className="flex h-full items-center relative z-10 w-[200vw] will-change-transform"
            style={{ x: horizontalScrollX }}
          >
            {/* Card 1: Creonnect (Flagship Product) */}
            <div className="w-[100vw] h-full flex items-center justify-center px-4 md:px-12">
              <div className="w-full max-w-6xl h-full max-h-[75vh] relative group pointer-events-auto">
                <div className="absolute inset-0 bg-white/50 dark:bg-[#050B14]/80 border border-blue-500/10 dark:border-blue-500/20 rounded-[40px] overflow-hidden backdrop-blur-3xl transition-all duration-700 shadow-[0_8px_32px_rgba(59,130,246,0.05)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] group-hover:border-blue-500/50 group-hover:shadow-[0_0_80px_rgba(59,130,246,0.2)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#3b82f6_0%,transparent_50%)] opacity-10 dark:opacity-20 group-hover:opacity-20 dark:group-hover:opacity-40 transition-opacity duration-700" />

                  <div className="p-8 md:p-20 h-full flex flex-col justify-end relative z-10 w-full border-t border-white/60 dark:border-white/5 rounded-[40px]">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 w-max mb-6">
                      <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Flagship Product</span>
                    </div>

                    <h2 className="text-5xl md:text-8xl font-black mb-8 uppercase tracking-tighter text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 dark:group-hover:from-white group-hover:to-blue-500 transition-all duration-500 w-max">
                      Creonnect
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-5xl mb-12">
                      <p className="text-slate-700 dark:text-white/70 text-lg md:text-xl font-medium md:font-light leading-relaxed">
                        The flagship Creator Operating System. Built entirely on the Quantum Engine to automate DMs, scheduling, and community analytics infinitely without manual intervention.
                      </p>
                      <ul className="text-slate-800 dark:text-white/60 font-mono text-sm space-y-5 border-l-2 border-blue-500/30 pl-6 h-max mt-2">
                        <li className="flex items-center gap-4">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Auto DM Automation
                        </li>
                        <li className="flex items-center gap-4">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> AI Post Analysis
                        </li>
                        <li className="flex items-center gap-4">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Brand Marketplace
                        </li>
                        <li className="mt-4 text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-900/30 w-max px-3 py-1 rounded-lg">
                          10,000+ creators on waitlist
                        </li>
                      </ul>
                    </div>

                    <a href="https://creonnect.com" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden inline-flex items-center justify-center md:justify-start gap-4 text-white bg-blue-600 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] font-black transition-all duration-300 uppercase tracking-[0.2em] text-xs md:text-sm group-hover:gap-6 w-full md:w-max px-8 py-5 rounded-2xl group/btn">
                      <span className="relative z-10 flex items-center gap-4">Visit Creonnect <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" /></span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Future Products Placeholder */}
            <div className="w-[100vw] h-full flex items-center justify-center px-4 md:px-12">
              <div className="w-full max-w-6xl h-full max-h-[75vh] relative group pointer-events-auto">
                <div className="absolute inset-0 bg-white/30 dark:bg-foreground/[0.02] border border-dashed border-black/10 dark:border-foreground/20 rounded-[40px] overflow-hidden backdrop-blur-3xl transition-all duration-700 shadow-[0_8px_32px_rgba(0,0,0,0.02)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.2)] group-hover:border-primary/40 group-hover:bg-white/50 dark:group-hover:bg-foreground/[0.04] flex flex-col items-center justify-center">

                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_60%)] opacity-5 group-hover:opacity-20 animate-pulse transition-opacity duration-[2000ms]" />

                  <div className="p-8 md:p-24 h-full flex flex-col items-center justify-center text-center relative z-10 w-full border-t border-white/40 dark:border-white/5 rounded-[40px]">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-100 dark:bg-foreground/5 border border-slate-200 dark:border-foreground/10 text-slate-500 dark:text-foreground/40 w-max mb-10">
                      <span className="w-2 h-2 rounded-full bg-slate-400 dark:bg-foreground/30 animate-pulse" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Internal Incubation</span>
                    </div>

                    <h2 className="text-4xl md:text-7xl font-black mb-8 uppercase tracking-tighter text-slate-800 dark:text-foreground text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-400 dark:from-foreground dark:to-foreground/40 transform group-hover:scale-105 transition-transform duration-700 relative">
                      More Products
                      <br />Coming Soon
                    </h2>

                    <p className="text-slate-600 dark:text-foreground/50 text-base md:text-lg font-medium max-w-xl leading-relaxed">
                      QuantumRealm is a multi-product intelligence studio. We are currently architecting the next generation of automation tools for agencies, brands, and creators.
                    </p>
                  </div>
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
        {/* Company Metrics (PRD 5.5) */}
        <div className="max-w-7xl mx-auto px-4 w-full mb-40 mt-32">
          <div className="flex flex-col items-center mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground mb-4">QuantumRealm by the Numbers</h2>
            <p className="text-foreground/50 font-mono text-sm max-w-2xl">Real-time telemetry from our operating infrastructure.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {[
              { label: "Engineering Team", value: "15+", suffix: "Top Talent" },
              { label: "Products", value: "3", suffix: "1 Live, 2 R&D" },
              { label: "Creators Served", value: "50k+", suffix: "Globally" },
              { label: "API Processed/mo", value: "10M+", suffix: "Events" }
            ].map((metric, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 dark:bg-black/20 border border-black/5 dark:border-white/10 flex flex-col items-center text-center shadow-lg hover:border-primary/50 transition-colors group">
                <div className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-primary dark:from-primary dark:to-blue-600 mb-4 group-hover:scale-110 transition-transform duration-500">
                  {metric.value}
                </div>
                <div className="text-foreground font-bold text-lg mb-1">{metric.label}</div>
                <div className="text-foreground/40 font-mono text-xs uppercase tracking-widest">{metric.suffix}</div>
              </div>
            ))}
          </div>
        </div>        {/* Tech Section (Proprietary Infrastructure) */}
        <div className="max-w-7xl mx-auto px-4 w-full mb-40">
           <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              
              {/* Text Core */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                 <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 w-max mb-10">
                   <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_var(--color-primary)]" />
                   <span className="text-[10px] font-bold text-foreground/60 uppercase tracking-[0.2em]">Core Infrastructure</span>
                 </div>
                 
                 <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter text-foreground leading-[1.05] mb-8">
                   Engineering<br/>Predictive<br/>Ecosystems
                 </h2>
                 
                 <p className="text-foreground/60 text-lg lg:text-xl font-light leading-relaxed mb-12 max-w-lg">
                   We are architecting the foundational AI infrastructure that powers Creonnect and our future creator tools. Our proprietary neural networks analyze audience sentiment, predict viral trajectories, and automate community engagement—giving creators an enterprise-grade operating system.
                 </p>
                 
                 {/* Premium Feature Stack */}
                 <div className="flex flex-col gap-4 w-full max-w-lg">
                    <div className="group flex items-center justify-between p-5 rounded-2xl bg-foreground/[0.02] border border-foreground/10 hover:bg-foreground/[0.04] hover:border-foreground/20 transition-all duration-300">
                       <div className="flex items-center gap-5">
                          <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-500 shadow-[0_0_15px_rgba(59,130,246,0)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-shadow">
                             <span className="font-black text-xs">01</span>
                          </div>
                          <span className="font-mono text-sm font-bold text-foreground">Quantum Neural Matrix</span>
                       </div>
                       <span className="font-mono text-[10px] text-foreground/40 uppercase tracking-[0.2em]">Active</span>
                    </div>

                    <div className="group flex items-center justify-between p-5 rounded-2xl bg-foreground/[0.02] border border-foreground/10 hover:bg-foreground/[0.04] hover:border-foreground/20 transition-all duration-300">
                       <div className="flex items-center gap-5">
                          <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0)] group-hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-shadow">
                             <span className="font-black text-xs">02</span>
                          </div>
                          <span className="font-mono text-sm font-bold text-foreground">Predictive Trend Analytics</span>
                       </div>
                       <span className="font-mono text-[10px] text-foreground/40 uppercase tracking-[0.2em]">Active</span>
                    </div>

                    <div className="group flex items-center justify-between p-5 rounded-2xl bg-foreground/[0.02] border border-foreground/10 hover:bg-foreground/[0.04] hover:border-foreground/20 transition-all duration-300">
                       <div className="flex items-center gap-5">
                          <div className="w-10 h-10 rounded-full bg-fuchsia-500/10 flex items-center justify-center border border-fuchsia-500/20 text-fuchsia-500 shadow-[0_0_15px_rgba(217,70,239,0)] group-hover:shadow-[0_0_15px_rgba(217,70,239,0.3)] transition-shadow">
                             <span className="font-black text-xs">03</span>
                          </div>
                          <span className="font-mono text-sm font-bold text-foreground">Creonnect OS Integration</span>
                       </div>
                       <span className="font-mono text-[10px] text-foreground/40 uppercase tracking-[0.2em]">Active</span>
                    </div>
                 </div>
              </div>
              
              {/* Visual Avatar Card (Interactive 3D Component) */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
                 <InteractiveAvatar />
              </div>

           </div>
        </div>

        {/* Team Teaser (PRD 5.7) */}
        <div className="max-w-7xl mx-auto px-4 w-full flex flex-col md:flex-row justify-between items-end gap-10 mb-32 border-t border-black/5 dark:border-white/10 pt-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground mb-4">The Minds Behind<br />QuantumRealm</h2>
            <p className="text-foreground/60 text-lg max-w-xl">
              A multidisciplinary team of engineers, researchers, and designers committed to destroying the boundaries between human intent and machine execution.
            </p>
          </div>
          <Link href="/team" className="px-8 py-4 rounded-full bg-primary text-white font-bold tracking-widest uppercase text-sm hover:bg-primary/80 transition-colors shadow-[0_0_20px_rgba(124,58,237,0.4)] flex items-center gap-3 shrink-0">
            Meet the Full Team &rarr;
          </Link>
        </div>

        {/* Careers CTA Block (PRD 5.8) */}
        <div className="max-w-7xl mx-auto px-4 w-full mb-32">
          <div className="w-full bg-slate-900 dark:bg-[#050B14] border border-blue-900/30 rounded-[40px] p-10 md:p-20 overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.2)_0%,transparent_60%)]" />
            <div className="relative z-10 flex flex-col items-center text-center">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">Join the Quantum Leap</h2>
              <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-12">
                We're looking for world-class engineers, designers, and AI researchers who want to build the future backbone of the creator economy.
              </p>
              <Link href="/careers" className="px-10 py-5 rounded-full bg-blue-600 text-white font-black tracking-widest uppercase text-sm hover:bg-blue-500 transition-colors shadow-[0_0_30px_rgba(59,130,246,0.6)] flex items-center gap-3 hover:scale-105 transform duration-300">
                View Open Roles &rarr;
              </Link>
            </div>
          </div>
        </div>

        <BlogSection />
        <ContactSection />

        {/* PRD 5.10 Footer */}
        <footer className="w-full pt-20 pb-10 px-8 border-t border-foreground/10 flex flex-col items-center gap-12 text-sm text-foreground/50 bg-background transition-colors duration-500 relative z-40">
          <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
            <div className="flex flex-col gap-4">
              <div className="text-xl font-black uppercase tracking-widest text-foreground">QuantumRealm AI Labs</div>
              <div className="font-mono text-xs">Building the AI Infrastructure for the Creator Economy.</div>
              <div className="font-mono text-xs mt-2 text-foreground/30 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                HQ: Bengaluru, Karnataka, India
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 font-mono text-xs uppercase tracking-widest">
              <div className="flex flex-col gap-4">
                <span className="text-foreground font-bold mb-2">Company</span>
                <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                <Link href="/team" className="hover:text-primary transition-colors">Team</Link>
                <Link href="/careers" className="hover:text-primary transition-colors">Careers</Link>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-foreground font-bold mb-2">Resources</span>
                <Link href="/press" className="hover:text-primary transition-colors">Press</Link>
                <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
              </div>
              <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
                <span className="text-foreground font-bold mb-2">Legal</span>
                <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>

          <div className="w-full max-w-7xl border-t border-foreground/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-xs uppercase tracking-[0.2em] text-foreground/30">
            <div>&copy; 2026 QuantumRealm AI Labs Pvt. Ltd. All rights reserved.</div>
            <div className="flex items-center gap-8">
              <a href="https://creonnect.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 font-bold transition-colors">Flagship: Creonnect</a>
              <div className="flex gap-6">
                <a href="https://linkedin.com/company/quantumrealm" className="hover:text-foreground transition-colors">LinkedIn</a>
                <a href="https://x.com/quantumrealm" className="hover:text-foreground transition-colors">X (Twitter)</a>
                <a href="https://instagram.com/quantumrealm" className="hover:text-foreground transition-colors">Instagram</a>
              </div>
            </div>
          </div>
        </footer>

      </motion.div>

      <style dangerouslySetInnerHTML={{
        __html: `
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
