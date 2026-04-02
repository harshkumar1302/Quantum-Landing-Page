"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowRight, ShieldCheck, Zap, Database, TrendingUp, Infinity, Plus, 
  MessageSquare, UserCheck, Key, Lock, Minus, Code2, Globe, Server, CheckCircle2
} from "lucide-react";
import { Logo } from "@/components/logo";
import { CareersSection } from "@/components/careers-section";

/** =======================================================
 * DATA LAYERS & COPYWRITING (Approved from Strategy)
 * ======================================================== */

const features = [
  { 
    color: "#7C3AED",
    icon: <MessageSquare className="w-6 h-6 text-[#7C3AED]" />, 
    title: "AI DM Automation", 
    desc: "100% Meta API compliant lead capture from comments & stories. Personalized sequences that mirror your exact syntax." 
  },
  { 
    color: "#3B82F6",
    icon: <TrendingUp className="w-6 h-6 text-[#3B82F6]" />, 
    title: "Deep Neural Analytics", 
    desc: "Proprietary ERA scoring, hook-rate analysis, and save-ratio optimization. Move beyond vanity metrics to real performance." 
  },
  { 
    color: "#10B981",
    icon: <Database className="w-6 h-6 text-[#10B981]" />, 
    title: "Digital Store & 1:1s", 
    desc: "Convert attention into revenue instantly. Sell digital products, courses, and consult-sessions directly via bio-links." 
  },
  { 
    color: "#EC4899",
    icon: <Server className="w-6 h-6 text-[#EC4899]" />, 
    title: "Agency Infrastructure", 
    desc: "Data-powered roster management, intake funnels, and automated pitching for agencies scaling creator portfolios." 
  },
];

const marketGaps = [
  { title: "Broken Discovery", desc: "Brands struggle to find relevant creators while mid-tier voices remain invisible." },
  { title: "No Data Decisons", desc: "Decisions made on gut-feeling rather than audience quality or ROI forecasting." },
  { title: "Chaotic Workflows", desc: "Communication fragmented across email, DMs, and messaging apps." },
  { title: "Pricing Opacity", desc: "Lack of standardized pricing models leading to a massive trust deficit." },
  { title: "Unmeasurable ROI", desc: "Metrics are platform-dependent and disconnected from actual business outcomes." },
  { title: "Rampant Fraud", desc: "Fake followers and bot engagement distort the true reach of campaigns." },
  { title: "Zero Intelligence", desc: "Lack of predictive performance or automated campaign optimization." },
  { title: "Fragmented Tools", desc: "Agencies using disconnected platforms for basic operations." }
];

const thesisPoints = [
  { title: "AI Fit > Human Brokers", desc: "Influencer marketing is a matching problem, not a marketplace problem. AI predicts fits better than humans." },
  { title: "Compliance as a Moat", desc: "We only build on official Meta APIs. No scraping, no session hijacking, zero account risk." },
  { title: "India-First, Global Ambition", desc: "Leveraging India's massive creator base to build world-class infrastructure for the global economy." },
  { title: "Full-Stack Creator OS", desc: "We aren't a feature; we are the operating system for analytics, AI tools, and commerce." }
];

const steps = [
  { num: "01", icon: <Globe />, title: "Connect", desc: "Securely link your Instagram account via official 100% compliant APIs.", color: "#3B82F6" },
  { num: "02", icon: <Code2 />, title: "Train", desc: "Provide your brand voice. The Quantum Engine maps your historical tone.", color: "#EC4899" },
  { num: "03", icon: <Zap />, title: "Scale", desc: "Turn on the OS. Watch your engagement and lead generation scale infinitely.", color: "#10B981" },
];

const faqs = [
  { q: "Is this safe for my Instagram account?", a: "100%. We are a Meta Verified partner, operating strictly within Instagram's official API guidelines. We never use scraping or session-hijacking techniques." },
  { q: "How does the AI matching work?", a: "The Quantum Engine analyzes millions of audience data points and engagement trends to match brands with creators based on deep psychological fit, not just follower counts." },
  { q: "What is the ERA score?", a: "Engagement Relevance Accuracy (ERA) is our proprietary metric that filters out bot activity and measures the true influence of a creator on their audience's purchasing decisions." },
  { q: "Is it suitable for agencies?", a: "Yes. Creonnect provides full agency infrastructure, including roster analytics, unified pitching tools, and automated campaign tracking." }
];

/** =======================================================
 * REUSABLE ANIMATED COMPONENTS
 * ======================================================== */

const SectionBadge = ({ text, colorHex = "#7C3AED" }: { text: string, colorHex?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 mb-8 backdrop-blur-sm"
  >
    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: colorHex }} />
    <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-black dark:text-white opacity-80">{text}</span>
  </motion.div>
);

const FAQItem = ({ faq, index }: { faq: typeof faqs[0], index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
      className="border-b border-black/10 dark:border-white/10"
    >
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between text-left group py-8 text-black dark:text-white dark:cursor-none">
        <h3 className="text-xl sm:text-2xl font-bold pr-6 opacity-90 group-hover:opacity-100 transition-opacity">{faq.q}</h3>
        <span className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-[#7C3AED] text-white' : 'bg-black/5 dark:bg-white/5 group-hover:bg-black/10 dark:group-hover:bg-white/10'}`}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <p className="pb-8 text-black/60 dark:text-white/60 font-light leading-relaxed text-lg max-w-3xl">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/** =======================================================
 * MAIN PAGE COMPOENT
 * ======================================================== */

export default function Home() {
  const [isWaitlisted, setIsWaitlisted] = useState(false);

  return (
    <main className="w-full bg-white dark:bg-[#000000] text-black dark:text-white transition-colors duration-500 overflow-x-hidden">

      {/* ==========================================
          1. HERO (Value + Trust + CTA)
          ========================================== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 pt-32 pb-20 overflow-hidden">
         {/* Premium Lighting Effects */}
         <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#7C3AED] opacity-[0.05] dark:opacity-[0.15] blur-[120px] rounded-full pointer-events-none" />
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black_70%,transparent_100%)] pointer-events-none" />

         <div className="relative z-10 flex flex-col items-center text-center max-w-[1200px] mx-auto w-full">
            
            {/* Actionable Trust Badge */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
               className="mb-10 px-4 py-2 rounded-full border border-[#10B981]/30 bg-[#10B981]/5 flex items-center gap-3 backdrop-blur-md shadow-[0_0_30px_rgba(16,185,129,0.1)]"
            >
               <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-60" />
                  <span className="relative inline-flex rounded-full h-full w-full bg-[#10B981]" />
               </div>
               <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#059669] dark:text-[#34D399]">
                  Accelerated by MongoDB
               </span>
            </motion.div>

            {/* Massive Hero Headline */}
            <motion.h1 
               initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
               className="text-[3rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem] font-black tracking-tighter leading-[0.95] mb-8"
            >
               The AI Layer for <br className="hidden md:block"/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#7C3AED] animate-gradient-x bg-[length:200%_auto]">
                  the Creator Economy.
               </span>
            </motion.h1>

            {/* Benefit-Driven Subhead */}
            <motion.p 
               initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }}
               className="text-lg md:text-2xl font-light text-black/60 dark:text-white/60 max-w-4xl leading-relaxed mb-12 sm:px-4"
            >
               QuantumRealm is an AI-first technology company building the intelligent infrastructure that helps creators scale, brands discover, and agencies automate growth.
            </motion.p>

            {/* Hyper-Optimized CTA Flow */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-2">
               <a href="https://creonnect.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto min-h-[64px] px-10 rounded-full bg-black dark:bg-white text-white dark:text-black font-black uppercase tracking-[0.15em] text-sm flex items-center justify-center gap-3 hover:scale-105 transition-transform duration-300 group dark:cursor-none">
                  Explore Creonnect <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </a>
               <a href="#problem" className="w-full sm:w-auto min-h-[64px] px-10 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 text-black dark:text-white font-bold uppercase tracking-[0.15em] text-sm flex items-center justify-center gap-3 hover:bg-black/10 dark:hover:bg-white/20 transition-all duration-300 dark:cursor-none backdrop-blur-sm">
                  Market Thesis
               </a>
            </motion.div>
         </div>
      </section>

      {/* ==========================================
          1.1 MARKET CONTEXT (NEW)
          ========================================== */}
      <section className="py-20 border-b border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01]">
         <div className="container mx-auto px-4 text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
               <div className="text-left">
                  <SectionBadge text="Market Opportunity" colorHex="#3B82F6" />
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase">A $250B Market <br/> on Broken Rails.</h2>
                  <p className="text-xl text-black/60 dark:text-white/60 font-light leading-relaxed">
                     The creator economy is exploding, yet the underlying infrastructure is fragmented, opaque, and human-dependent. We are building the rails for the next decade of digital commerce.
                  </p>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div data-torch-color="#3B82F6" className="p-8 rounded-3xl bg-white dark:bg-black border border-black/5 dark:border-white/5 shadow-sm group hover:border-[#3B82F6]/30 transition-all dark:cursor-none">
                     <div className="text-4xl font-black mb-2">$250B</div>
                     <div className="text-[10px] uppercase tracking-widest opacity-50">Market Size</div>
                  </div>
                  <div data-torch-color="#7C3AED" className="p-8 rounded-3xl bg-white dark:bg-black border border-black/5 dark:border-white/5 shadow-sm group hover:border-[#7C3AED]/30 transition-all dark:cursor-none">
                     <div className="text-4xl font-black mb-2">3-Sided</div>
                     <div className="text-[10px] uppercase tracking-widest opacity-50">Platform Ecosystem</div>
                  </div>
                  <div data-torch-color="#10B981" className="p-8 rounded-3xl bg-white dark:bg-black border border-black/5 dark:border-white/5 shadow-sm group hover:border-[#10B981]/30 transition-all dark:cursor-none">
                     <div className="text-4xl font-black mb-2">100%</div>
                     <div className="text-[10px] uppercase tracking-widest opacity-50">API Compliance</div>
                  </div>
                  <div data-torch-color="#EC4899" className="p-8 rounded-3xl bg-white dark:bg-black border border-black/5 dark:border-white/5 shadow-sm group hover:border-[#EC4899]/30 transition-all dark:cursor-none">
                     <div className="text-4xl font-black mb-2">AI-First</div>
                     <div className="text-[10px] uppercase tracking-widest opacity-50">Core Architecture</div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ==========================================
          2. THE 8 CRITICAL GAPS (Expanded Problem)
          ========================================== */}
      <section id="problem" className="py-24 md:py-40 relative">
         <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-20">
               <SectionBadge text="The Challenge" colorHex="#EF4444" />
               <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6">Systemic Failures.</h2>
               <p className="text-xl text-black/50 dark:text-white/50 max-w-3xl mx-auto font-light">
                  Today's creator ecosystem suffers from 8 core friction points that prevent true scale. We've identified the broken nodes.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {marketGaps.map((gap, i) => (
                  <motion.div 
                     key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                     data-torch-color="#EF4444"
                     className="p-8 rounded-3xl border border-black/5 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] hover:bg-red-500/5 hover:border-red-500/20 transition-all group dark:cursor-none will-change-transform"
                  >
                     <div className="text-xs font-mono mb-4 opacity-30 group-hover:opacity-100 group-hover:text-red-500 transition-all">GAP_0{i+1}</div>
                     <h3 className="text-xl font-bold mb-3 tracking-tight">{gap.title}</h3>
                     <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed font-light">{gap.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* ==========================================
          2.1 THE QUANTUM THESIS (NEW)
          ========================================== */}
      <section className="py-24 md:py-40 bg-black/[0.02] dark:bg-white/[0.02] border-y border-black/5 dark:border-white/5 overflow-hidden relative">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7C3AED] opacity-[0.05] blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
         <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div>
                  <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-8 leading-[0.85]">What We <br/> Believe.</h2>
                  <p className="text-xl text-black/50 dark:text-white/50 font-light leading-relaxed max-w-xl">
                     Our roadmap is driven by a set of core conviction points that differentiate us from "just another marketplace."
                  </p>
               </div>
               <div className="space-y-6">
                  {thesisPoints.map((point, i) => (
                     <motion.div 
                        key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                        data-torch-color="#7C3AED"
                        className="flex gap-8 p-8 rounded-[2.5rem] bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:border-[#7C3AED]/30 transition-all duration-500 dark:cursor-none group relative overflow-hidden"
                     >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div className="text-4xl font-black opacity-20 shrink-0 group-hover:opacity-100 group-hover:text-[#7C3AED] transition-all relative z-10">0{i+1}</div>
                        <div className="relative z-10">
                           <h3 className="text-2xl font-bold mb-3 tracking-tight">{point.title}</h3>
                           <p className="text-black/50 dark:text-white/50 leading-relaxed font-light text-lg">{point.desc}</p>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* ==========================================
          4. FEATURES (The Tech Platform Engine)
          ========================================== */}
      <section className="py-24 md:py-40 relative overflow-hidden">
         {/* Background Grid Accent */}
         <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />
         
         <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
            <div className="flex flex-col items-center text-center mb-16 md:mb-24">
               <SectionBadge text="Ecosystem Architecture" />
               <h2 className="text-4xl sm:text-5xl md:text-[4rem] font-black uppercase tracking-tighter mb-6 leading-[0.9]">
                  Infinite Creator Rails.
               </h2>
               <p className="text-lg sm:text-xl text-black/50 dark:text-white/50 max-w-3xl font-light leading-relaxed">
                  Our proprietary AI layer operates natively on a high-throughput, horizontally scalable MongoDB blueprint, ensuring 99.9% uptime and official Meta API security for the global elite.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
               {features.map((feat, i) => (
                  <motion.div 
                     key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: i * 0.1, duration: 0.5 }}
                     data-torch-color={feat.color}
                     className="p-8 sm:p-12 rounded-[2rem] bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:border-[#7C3AED]/30 transition-all duration-500 group relative overflow-hidden dark:cursor-none"
                  >
                     {/* Hover Glow */}
                     <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                     
                     <div className="w-16 h-16 rounded-2xl bg-white dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 flex items-center justify-center mb-8 shadow-sm group-hover:-translate-y-2 transition-transform duration-500 relative z-10">
                        {feat.icon}
                     </div>
                     <h3 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight relative z-10">{feat.title}</h3>
                     <p className="text-black/60 dark:text-white/60 leading-relaxed text-lg font-light relative z-10">{feat.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
      {/* ==========================================
          5. TARGET AUDIENCES (NEW)
          ========================================== */}
      <section className="py-24 md:py-40 border-y border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01]">
         <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-20">
               <SectionBadge text="Who We Power" colorHex="#7C3AED" />
               <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6">Built for the <br/> Whole Ecosystem.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               { [
                  { 
                    title: "Creators", 
                    focus: "Growth & Revenue", 
                    color: "#7C3AED",
                    desc: "Focus on creating content while our AI handles lead capture, DMs, and monetization 24/7." 
                  },
                  { 
                    title: "Brands", 
                    focus: "ROI & Discovery", 
                    color: "#3B82F6",
                    desc: "Find the right voices using deep psychological matching and verified performance data." 
                  },
                  { 
                    title: "Agencies", 
                    focus: "Scale & Efficiency", 
                    color: "#10B981",
                    desc: "Manage massive creator rosters with automated pitching, tracking, and intake funnels." 
                  }
               ].map((audience, i) => (
                  <motion.div 
                     key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                     data-torch-color={audience.color}
                     className="p-10 rounded-[3rem] bg-white dark:bg-black border border-black/5 dark:border-white/5 shadow-xl group hover:-translate-y-2 transition-all duration-500 dark:cursor-none"
                  >
                     <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#7C3AED] mb-4 group-hover:text-primary transition-colors">{audience.focus}</div>
                     <h3 className="text-3xl font-bold mb-6 tracking-tight">{audience.title}</h3>
                     <p className="text-black/60 dark:text-white/60 leading-relaxed font-light">{audience.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* ==========================================
          5. HOW IT WORKS (Deployment Flow)
          ========================================== */}
      <section data-theme-section="inverted" className="py-24 md:py-40 bg-black dark:bg-white text-white dark:text-black">
         <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
            <h2 className="text-4xl sm:text-5xl md:text-[4rem] font-black uppercase tracking-tighter mb-16 md:mb-32 text-center leading-[0.9]">
               Scale Sequence
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-8 relative">
               {/* Desktop Horizontal Line */}
               <div className="absolute top-[4.5rem] left-0 w-full h-[1px] bg-white/10 dark:bg-black/10 hidden lg:block" />
               {/* Mobile Vertical Line */}
               <div className="absolute top-0 bottom-0 left-[3rem] w-[1px] bg-white/10 dark:bg-black/10 block lg:hidden" />
               
               {steps.map((step, i) => (
                  <motion.div key={i} data-torch-color={step.color} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="relative z-10 flex flex-row lg:flex-col items-center lg:items-center text-left lg:text-center gap-6 lg:gap-0 cursor-crosshair">
                     <div className="w-[6rem] h-[6rem] sm:w-[8rem] sm:h-[8rem] lg:w-[9rem] lg:h-[9rem] shrink-0 rounded-full bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-center lg:mb-10 border-8 border-black dark:border-white shadow-[0_0_40px_rgba(255,255,255,0.05)] dark:shadow-[0_0_40px_rgba(0,0,0,0.05)] relative">
                        <span className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] opacity-40 mb-1 sm:mb-2">{step.num}</span>
                        {step.icon}
                     </div>
                     <div>
                        <h3 className="text-2xl sm:text-3xl font-black mb-3">{step.title}</h3>
                        <p className="text-white/60 dark:text-black/60 leading-relaxed text-base sm:text-lg max-w-xs">{step.desc}</p>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* ==========================================
          6 & 7. SOCIAL PROOF & TRUST INDICATORS
          ========================================== */}
      <section className="py-24 border-b border-black/5 dark:border-white/5 relative overflow-hidden">
         <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-10 text-center border border-black/10 dark:border-white/10 md:border-0 rounded-[2rem] md:rounded-none overflow-hidden bg-black/[0.01] dark:bg-white/[0.01] md:bg-transparent">
               <div className="p-10 md:p-8 border-b md:border-b-0 md:border-r border-black/10 dark:border-white/10 flex flex-col items-center justify-center">
                  <ShieldCheck className="w-12 h-12 text-[#7C3AED] mb-6" />
                  <h3 className="text-5xl font-black mb-3">100%</h3>
                  <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-black/50 dark:text-white/50">API Compliant</p>
               </div>
               <div className="p-10 md:p-8 border-b md:border-b-0 md:border-r border-black/10 dark:border-white/10 flex flex-col items-center justify-center">
                  <Server className="w-12 h-12 text-[#10B981] mb-6" />
                  <h3 className="text-5xl font-black mb-3">Tier 1</h3>
                  <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-black/50 dark:text-white/50">MongoDB Accelerated</p>
               </div>
               <div className="p-10 md:p-8 flex flex-col items-center justify-center">
                  <Lock className="w-12 h-12 text-[#3B82F6] mb-6" />
                  <h3 className="text-5xl font-black mb-3">E2E</h3>
                  <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-black/50 dark:text-white/50">Encrypted Setup</p>
               </div>
            </div>
         </div>
      </section>

      {/* ==========================================
          8 & 9. EXCLUSIVE OFFER (Waitlist) & CX UI
          ========================================== */}


      {/* ==========================================
          9. FAQ ACCORDIONS
          ========================================== */}
      <section className="py-24 md:py-40 bg-black/[0.02] dark:bg-white/[0.02] border-y border-black/5 dark:border-white/5">
         <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-4xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-16 text-center tracking-tight">Technical & Protocol FAQs</h2>
            <div className="border-t border-black/10 dark:border-white/10">
               {faqs.map((faq, i) => <FAQItem key={i} index={i} faq={faq} />)}
            </div>
         </div>
      </section>

      {/* ==========================================
          10. FINAL URGENCY CTA
          ========================================== */}
      <section data-theme-section="inverted" className="py-32 md:py-48 bg-black dark:bg-white overflow-hidden relative text-center">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,var(--color-primary)_0%,transparent_60%)] opacity-30 dark:opacity-[0.15] pointer-events-none" />
         <div className="container mx-auto px-4 text-white dark:text-black relative z-10 flex flex-col items-center">
            <h2 className="text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] font-black uppercase tracking-tighter mb-12 sm:mb-16 leading-[0.85]">
               Build <span className="opacity-80 italic">The</span><br/> Future.
            </h2>
            <a href="https://creonnect.com" target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto min-h-[72px] px-12 sm:px-16 rounded-full bg-white dark:bg-black text-black dark:text-white font-black uppercase tracking-[0.2em] text-sm sm:text-base items-center justify-center gap-4 hover:scale-105 transition-transform shadow-[0_0_60px_rgba(255,255,255,0.15)] dark:shadow-[0_0_60px_rgba(0,0,0,0.15)] group dark:cursor-none">
               Initialize Creonnect <ArrowRight className="w-6 h-6 animate-pulse group-hover:translate-x-2 transition-transform" />
            </a>
         </div>
      </section>

      <CareersSection />


    </main>
  );
}
