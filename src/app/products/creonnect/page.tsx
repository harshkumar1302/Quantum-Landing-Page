"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MessageSquare, ArrowRight, Network, Fingerprint } from "lucide-react";
import React, { useRef } from "react";
import Link from "next/link";

/** ==========================================
 * DATA CONSTANTS
 * ========================================== */

const teaserProtocols = [
  {
    icon: <MessageSquare />,
    title: "Syntactic Mimicry",
    tagline: "Neural Adaptation Protocol",
    desc: "Adapts to unique lexical density and emoji frequency to remain perfectly human.",
    color: "#7C3AED"
  },
  {
    icon: <Network />,
    title: "Parallel Iteration",
    tagline: "Scaling Architecture",
    desc: "Deploy unlimited instances across multiple platforms with synchronized intelligence.",
    color: "#3B82F6"
  },
  {
    icon: <Fingerprint />,
    title: "Neural Gating",
    tagline: "Surgical Priority",
    desc: "Instantly identifies and prioritizes the elite 1% of community interactions.",
    color: "#10B981"
  }
];

/** ==========================================
 * COMPONENTS
 * ========================================== */

const ProtocolBadge = ({ text }: { text: string }) => (
  <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 mb-12 shadow-sm">
    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
    <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-60 italic">{text}</span>
  </div>
);

const TeaserCard = ({ icon, title, tagline, desc, i }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 30 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -12, scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ 
        delay: i * 0.1, 
        duration: 0.8,
        y: { type: "spring", stiffness: 800, damping: 40 },
        scale: { type: "spring", stiffness: 800, damping: 40 }
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative flex flex-col items-center text-center p-10 md:p-12 rounded-[3rem] bg-white dark:bg-zinc-900/40 border border-black/[0.04] dark:border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] dark:shadow-2xl dark:shadow-black/40 hover:border-primary/30 transition-all duration-700 perspective-1000 cursor-none"
    >
      {/* Neural Grid Teaser Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none group-hover:opacity-[0.07] transition-opacity duration-700"
        style={{ transform: "translateZ(-20px)" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,black_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      </div>

      {/* Primary Glow Bloom */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-40 h-40 bg-primary/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
        style={{ transform: "translateZ(-40px)" }}
      />
      
      {/* Icon Cluster */}
      <div 
        className="relative z-10 w-16 h-16 rounded-[1.5rem] bg-black/5 dark:bg-white/5 flex items-center justify-center text-black/20 dark:text-white/20 group-hover:text-primary group-hover:bg-primary/5 transition-all duration-500 [&>svg]:w-7 [&>svg]:h-7"
        style={{ transform: "translateZ(50px)" }}
      >
        {icon}
        <div className="absolute inset-0 rounded-[1.5rem] bg-primary/20 scale-0 group-hover:scale-150 blur-2xl transition-transform duration-700 opacity-0 group-hover:opacity-40" />
      </div>
      
      <div className="relative z-10 space-y-6" style={{ transform: "translateZ(30px)" }}>
        <div className="space-y-3">
          <span className="text-[9px] font-black uppercase tracking-[0.5em] text-primary/80 italic drop-shadow-sm">Neural Adaptation Protocol</span>
          <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase leading-none">{title}</h3>
        </div>
        <p className="text-base md:text-lg text-black/50 dark:text-white/40 leading-relaxed font-light px-6">
          {desc}
        </p>
      </div>
      
      {/* Quantum Card Shimmer */}
      <div className="absolute inset-0 rounded-[3rem] overflow-hidden pointer-events-none" style={{ transform: "translateZ(10px)" }}>
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent -translate-x-full group-hover:animate-quantum-scan" />
      </div>
    </motion.div>
  );
};

export default function CreonnectPage() {
  return (
    <div className="w-full bg-white dark:bg-[#050505] text-black dark:text-white transition-colors duration-700 min-h-screen pt-40 overflow-x-hidden flex flex-col items-center">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[800px] bg-[radial-gradient(circle_at_50%_0%,rgba(92,39,254,0.06),transparent_70%)] opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10 flex flex-col items-center">
        
        {/* RECONSTRUCTED HERO */}
        <section className="flex flex-col items-center text-center mb-40 md:mb-60 dark:cursor-none" data-torch-color="#5C27FE">
          <ProtocolBadge text="Product Identification: Creonnect" />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[7.5rem] font-black tracking-tighter leading-[0.85] uppercase italic mb-10">
              Creonnect <br />
              <span className="text-black/5 dark:text-white/10">Engine.</span>
            </h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-4 max-w-3xl mb-16"
            >
              <p className="text-lg md:text-xl text-black/60 dark:text-white/40 font-medium tracking-tight leading-relaxed px-4">
                The definitive AI Operating System for the creator economy's elite 1%.
              </p>
              <p className="text-base md:text-lg text-black/40 dark:text-white/20 font-light tracking-tight leading-relaxed">
                Scaling community interaction with surgical precision.
              </p>
            </motion.div>

            <Link 
              href="https://www.creonnect.com" 
              target="_blank"
              className="group relative h-20 px-14 rounded-[2rem] bg-black dark:bg-white text-white dark:text-black font-black uppercase tracking-[0.3em] text-[11px] flex items-center justify-center gap-6 overflow-hidden shadow-2xl transition-all hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity" />
              Secure Sandbox Access <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </section>

        {/* 3-CARD TEASER SUITE (WITH 3D TILT) */}
        <section className="pb-60 w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 dark:cursor-none" data-torch-color="#7C3AED">
          {teaserProtocols.map((protocol, i) => (
            <TeaserCard key={i} {...protocol} i={i} />
          ))}
        </section>

      </div>

      <style jsx global>{`
        @keyframes quantum-scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-quantum-scan {
          animation: quantum-scan 2.5s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
      `}</style>
    </div>
  );
}
