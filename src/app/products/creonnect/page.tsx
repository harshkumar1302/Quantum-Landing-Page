"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, MessageSquare, TrendingUp, Infinity, ShieldCheck, 
  ArrowRight, Globe, Lock, Cpu, Database, BarChart3, 
  Terminal, Sparkles, Network, Fingerprint
} from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";

/** ==========================================
 * DATA CONSTANTS
 * ========================================== */

const deepFeatures = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Syntactic Mimicry",
    desc: "Our engine doesn't just reply; it adapts to your unique lexical density, emoji frequency, and response latency to remain perfectly human.",
    color: "#7C3AED"
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: "Parallel Routing",
    desc: "Handle 10,000+ simultaneous conversations across multiple account instances without triggering anti-spam latency protocols.",
    color: "#3B82F6"
  },
  {
    icon: <Fingerprint className="w-6 h-6" />,
    title: "Neural Gating",
    desc: "AI identifies high-value brand inquiries and potential collaborations, instantly escalating them to your human-led priority inbox.",
    color: "#10B981"
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Velocity Tracking",
    desc: "Predictive engagement analytics that tell you exactly when your community is most receptive to conversion-led interactions.",
    color: "#EC4899"
  }
];

const technicalSpecs = [
  { label: "Throughput", value: "10M+ events/day", icon: <Database /> },
  { label: "Latency", value: "<120ms Neuro-Response", icon: <Cpu /> },
  { label: "Security", value: "E2E RSA-4096 Encryption", icon: <Lock /> },
  { label: "Architecture", value: "Distributed MongoDB Atlas", icon: <Terminal /> }
];

/** ==========================================
 * COMPONENTS
 * ========================================== */

const SectionBadge = ({ text, color = "#7C3AED" }: { text: string; color?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 mb-8 backdrop-blur-sm"
  >
    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: color }} />
    <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">{text}</span>
  </motion.div>
);

export default function CreonnectPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#000000] text-black dark:text-white transition-colors duration-500 overflow-x-hidden pt-40">
      
      {/* Background Orbital Grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.05),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black_70%,transparent_100%)] opacity-50" />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* HERO SECTION */}
        <section className="flex flex-col items-center text-center mb-40 dark:cursor-none" data-torch-color="#7C3AED">
          <SectionBadge text="Product Deep Dive" />
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[3.5rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] font-black tracking-tighter leading-[0.8] mb-12 uppercase"
          >
            Creonnect <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#7C3AED] animate-gradient-x bg-[length:200%_auto]">Engine.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-black/60 dark:text-white/60 max-w-3xl font-light leading-relaxed mb-16"
          >
            The world's first autonomous AI Operating System designed exclusively for the creator economy's elite 1%. Scale your community across every conversational touchpoint without human intervention.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
             <Link href="#waitlist" className="h-20 px-12 rounded-full bg-black dark:bg-white text-white dark:text-black font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-4 hover:scale-105 transition-transform shadow-[0_0_60px_rgba(124,58,237,0.2)] group dark:cursor-none">
                Secure Sandbox <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </Link>
          </motion.div>
        </section>

        {/* THE CORE PROBLEM */}
        <section className="mb-40 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center dark:cursor-none" data-torch-color="#EF4444">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <SectionBadge text="The Bottleneck" color="#EF4444" />
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Human response scales linearly. <br /><span className="opacity-40 italic">Opportunities do not.</span></h2>
            <p className="text-lg text-black/60 dark:text-white/60 font-light leading-relaxed mb-10">
              As your audience grows to 1M+, you hit a physical limit. You can only reply to so many DMs, react to so many mentions, and close so many sales. Every unread message is a lost lead. Every delayed response is a cooling prospect.
            </p>
            <div className="space-y-6">
              {[
                "Lost conversion rates due to latency.",
                "Inconsistent brand tone across teams.",
                "Platform-imposed rate limits on manual actions."
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-sm font-black uppercase tracking-widest opacity-60">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">×</div>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
          
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/20 to-transparent blur-[100px] animate-pulse" />
            <div className="relative h-full w-full rounded-[3rem] border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-xl flex items-center justify-center overflow-hidden">
               {/* Visual representation of a neural network/bottleneck */}
               <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full bg-[radial-gradient(circle_at_center,var(--color-primary)_1px,transparent_1px)] bg-[size:20px_20px]" />
               </div>
               <Sparkles className="w-32 h-32 text-[#7C3AED] animate-pulse" />
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="mb-40 dark:cursor-none" data-torch-color="#7C3AED">
          <div className="flex flex-col items-center text-center mb-24">
            <SectionBadge text="Neural Architecture" />
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">Engine Specs</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deepFeatures.map((feat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-torch-color={feat.color}
                className="p-12 rounded-[3.5rem] bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 hover:border-[#7C3AED]/30 transition-all duration-700 group dark:cursor-none"
              >
                <div className="w-16 h-16 rounded-[1.5rem] bg-white dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500" style={{ color: feat.color }}>
                  {feat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-6 tracking-tight">{feat.title}</h3>
                <p className="text-lg text-black/60 dark:text-white/60 font-light leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TECHNICAL STACK */}
        <section className="mb-40 py-32 rounded-[4rem] bg-black dark:bg-white text-white dark:text-black overflow-hidden relative dark:cursor-none" data-torch-color="#3B82F6" data-theme-section="inverted">
          <div className="absolute inset-0 opacity-20 mix-blend-overlay">
            <div className="w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          </div>
          
          <div className="container mx-auto px-12 relative z-10">
            <h2 className="text-3xl font-black uppercase tracking-[0.3em] mb-20 text-center opacity-60 italic">Technical Protocol v4.0</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {technicalSpecs.map((spec, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 mb-8 opacity-40">{spec.icon}</div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 opacity-50">{spec.label}</span>
                  <p className="text-2xl font-black uppercase tracking-tight">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="waitlist" className="pb-40 text-center dark:cursor-none" data-torch-color="#7C3AED">
          <div className="inline-flex items-center gap-4 mb-12">
             <div className="h-[1px] w-12 bg-[#7C3AED]/30" />
             <span className="text-sm font-black uppercase tracking-[0.5em] text-[#7C3AED]">Sequence Initialize</span>
             <div className="h-[1px] w-12 bg-[#7C3AED]/30" />
          </div>
          <h2 className="text-[4rem] sm:text-[6rem] md:text-[9rem] font-black uppercase tracking-tighter leading-[0.8] mb-16">
            Enter the <br />
            <span className="italic font-light opacity-20">Quantum</span> Realm.
          </h2>
          <button className="h-24 px-16 rounded-full bg-black dark:bg-white text-white dark:text-black font-black uppercase tracking-[0.2em] text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_80px_rgba(124,58,237,0.3)] group dark:cursor-none">
            Apply for Waitlist <ArrowRight className="w-6 h-6 ml-4 inline-block group-hover:translate-x-2 transition-transform" />
          </button>
          <p className="mt-12 text-sm font-mono opacity-40 uppercase tracking-widest">Next testing batch: 48 Hours Remaining</p>
        </section>

      </div>
    </main>
  );
}
