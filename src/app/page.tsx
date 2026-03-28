"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowRight, ShieldCheck, Zap, Database, TrendingUp, Infinity, Plus, 
  MessageSquare, UserCheck, Key, Lock, Minus, Code2, Globe, Server, CheckCircle2
} from "lucide-react";
import { Logo } from "@/components/logo";
import { TeamSection } from "@/components/team-section";
import { CareersSection } from "@/components/careers-section";

/** =======================================================
 * DATA LAYERS & COPYWRITING (Approved from Strategy)
 * ======================================================== */

const features = [
  { 
    icon: <MessageSquare className="w-6 h-6 text-[#7C3AED]" />, 
    title: "Neuro-Linguistic DMs", 
    desc: "AI that understands context, tone, and intent with 99.9% accuracy. It mimics your exact syntax to close thousands of leads while you sleep." 
  },
  { 
    icon: <TrendingUp className="w-6 h-6 text-[#3B82F6]" />, 
    title: "Predictive Analytics", 
    desc: "Stop guessing. Track historical engagement velocities to know exactly when and what to post for maximum algorithmic reach." 
  },
  { 
    icon: <Database className="w-6 h-6 text-[#10B981]" />, 
    title: "MongoDB Accelerated", 
    desc: "Built on deeply scalable, distributed data structures. We process 10M+ webhook events securely every single day." 
  },
  { 
    icon: <Infinity className="w-6 h-6 text-[#EC4899]" />, 
    title: "Infinite Parallel Routing", 
    desc: "Engage with 10,000 followers simultaneously without ever hitting conversational rate limits. Scale without the sandbox." 
  },
];

const steps = [
  { num: "01", icon: <Globe />, title: "Connect", desc: "Securely link your Instagram account via official 100% compliant APIs." },
  { num: "02", icon: <Code2 />, title: "Train", desc: "Provide your brand voice. The Quantum Engine maps your historical tone." },
  { num: "03", icon: <Zap />, title: "Scale", desc: "Turn on the OS. Watch your engagement and lead generation scale infinitely." },
];

const faqs = [
  { q: "Is this safe for my Instagram account?", a: "100%. We operate strictly within Instagram's official API guidelines ensuring zero risk of shadowbans or account locks. We do not use scraping." },
  { q: "How human does the AI sound?", a: "The Quantum Engine is trained exclusively on your historical conversational data. It mimics your exact syntax, emojis, and slang. It is indistinguishable from you." },
  { q: "Can I take over a conversation?", a: "Yes. You have a unified dashboard where you can override the AI and instantly take over any high-value conversation in real-time." },
  { q: "What does the Testing Phase waitlist mean?", a: "We are heavily restricting server loads to ensure 99.9% uptime for elite early creators. Waitlist approval currently takes ~48 hours." }
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
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between text-left group py-8 text-black dark:text-white">
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
    <main className="w-full bg-white dark:bg-[#000000] text-black dark:text-white transition-colors duration-500 overflow-clip">

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
               Infinite Scale for <br className="hidden md:block"/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#7C3AED] animate-gradient-x bg-[length:200%_auto]">
                  Elite Creators.
               </span>
            </motion.h1>

            {/* Benefit-Driven Subhead */}
            <motion.p 
               initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }}
               className="text-lg md:text-2xl font-light text-black/60 dark:text-white/60 max-w-3xl leading-relaxed mb-12 sm:px-4"
            >
               Stop capping your revenue with manual DMs. Creonnect is the autonomous AI operating system that manages your community growth 24/7 without breaking a sweat.
            </motion.p>

            {/* Hyper-Optimized CTA Flow */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-2">
               <a href="#offer" className="w-full sm:w-auto min-h-[64px] px-10 rounded-full bg-black dark:bg-white text-white dark:text-black font-black uppercase tracking-[0.15em] text-sm flex items-center justify-center gap-3 hover:scale-105 transition-transform duration-300 group">
                  Secure Sandbox Access <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </a>
               <a href="#problem" className="w-full sm:w-auto min-h-[64px] px-10 rounded-full bg-transparent border border-black/10 dark:border-white/10 text-black dark:text-white font-bold uppercase tracking-[0.15em] text-sm flex items-center justify-center gap-3 hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300">
                  See the Engine
               </a>
            </motion.div>
         </div>
      </section>

      {/* ==========================================
          2 & 3. PROBLEM VS SOLUTION (Juxtaposition Grid)
          ========================================== */}
      <section id="problem" className="py-24 md:py-40 bg-black/[0.02] dark:bg-white/[0.02] border-y border-black/5 dark:border-white/5 relative">
         <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
               
               {/* High-Friction Problem Block */}
               <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 sm:p-12 rounded-[2rem] border border-red-500/20 bg-red-500/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 opacity-10 blur-[80px] rounded-full group-hover:opacity-20 transition-opacity duration-1000" />
                  <SectionBadge text="The Human Bottleneck" colorHex="#EF4444" />
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6">Humans break at scale.</h2>
                  <p className="text-lg text-black/60 dark:text-white/60 leading-relaxed font-light mb-8">
                     When you hit 100k+ followers, manual engagement becomes impossible. Leads sit unread, comments go unliked, and sales are lost because <strong>human hours simply do not scale.</strong>
                  </p>
                  <ul className="space-y-4 font-mono text-sm sm:text-base opacity-70 border-l border-red-500/30 pl-6">
                     <li className="flex items-center gap-3"><span className="text-red-500 font-bold">✗</span> Missed brand inquiries in request folders.</li>
                     <li className="flex items-center gap-3"><span className="text-red-500 font-bold">✗</span> Exhaustion from manual reply cycles.</li>
                     <li className="flex items-center gap-3"><span className="text-red-500 font-bold">✗</span> Revenue left permanently on the table.</li>
                  </ul>
               </motion.div>

               {/* Autonomous Solution Block */}
               <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-8 sm:p-12 rounded-[2rem] border border-[#10B981]/30 bg-[#10B981]/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#10B981] opacity-10 blur-[80px] rounded-full group-hover:opacity-20 transition-opacity duration-1000" />
                  <SectionBadge text="The Quantum Ecosystem" colorHex="#10B981" />
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6">Algorithms scale infinitely.</h2>
                  <p className="text-lg text-black/60 dark:text-white/60 leading-relaxed font-light mb-8">
                     Creonnect replaces rote repetition with predictive AI agents. We handle DMs, analytics, and community management continuously—deploying the exact tone of your brand perfectly safely.
                  </p>
                  <ul className="space-y-4 font-mono text-sm sm:text-base opacity-90 border-l border-[#10B981]/50 pl-6">
                     <li className="flex items-center gap-3"><span className="text-[#10B981] font-bold">✓</span> Contextual auto-closing of leads in DMs.</li>
                     <li className="flex items-center gap-3"><span className="text-[#10B981] font-bold">✓</span> 24/7 autonomous engagement protocols.</li>
                     <li className="flex items-center gap-3"><span className="text-[#10B981] font-bold">✓</span> Zero margin of human error.</li>
                  </ul>
               </motion.div>

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
               <SectionBadge text="System Mechanics" />
               <h2 className="text-4xl sm:text-5xl md:text-[4rem] font-black uppercase tracking-tighter mb-6 leading-[0.9]">
                  The Platform Architecture
               </h2>
               <p className="text-lg sm:text-xl text-black/50 dark:text-white/50 max-w-3xl font-light leading-relaxed">
                  Built exclusively for the top 1%. Our proprietary AI layer operates natively on a high-throughput, horizontally scalable MongoDB blueprint.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
               {features.map((feat, i) => (
                  <motion.div 
                     key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: i * 0.1, duration: 0.5 }}
                     className="p-8 sm:p-12 rounded-[2rem] bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:border-[#7C3AED]/30 transition-all duration-500 group relative overflow-hidden"
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
          5. HOW IT WORKS (Deployment Flow)
          ========================================== */}
      <section className="py-24 md:py-40 bg-black dark:bg-white text-white dark:text-black">
         <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
            <h2 className="text-4xl sm:text-5xl md:text-[4rem] font-black uppercase tracking-tighter mb-16 md:mb-32 text-center leading-[0.9]">
               Deployment Protocol
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-8 relative">
               {/* Desktop Horizontal Line */}
               <div className="absolute top-[4.5rem] left-0 w-full h-[1px] bg-white/10 dark:bg-black/10 hidden lg:block" />
               {/* Mobile Vertical Line */}
               <div className="absolute top-0 bottom-0 left-[3rem] w-[1px] bg-white/10 dark:bg-black/10 block lg:hidden" />
               
               {steps.map((step, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="relative z-10 flex flex-row lg:flex-col items-center lg:items-center text-left lg:text-center gap-6 lg:gap-0">
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
      <section id="offer" className="py-24 md:py-40 relative overflow-hidden">
         <div className="absolute inset-0 bg-[#7C3AED]/[0.02] dark:bg-[#7C3AED]/[0.05] pointer-events-none" />
         <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-[900px] text-center relative z-10">
            
            <SectionBadge text="Closed Testing Phase Active" />
            <h2 className="text-[2.5rem] sm:text-5xl md:text-[5rem] font-black tracking-tighter mb-8 leading-[0.95]">
               Skip the grind. <br/>Enter the Lab.
            </h2>
            <p className="text-lg sm:text-2xl text-black/60 dark:text-white/60 mb-12 sm:mb-16 max-w-2xl mx-auto font-light leading-relaxed">
               We are rigorously onboarding elite creators to our high-availability cluster. Request your early access token today.
            </p>
            
            <div className="bg-white dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 p-6 sm:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden">
               {isWaitlisted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-10">
                     <CheckCircle2 className="w-20 h-20 text-[#10B981] mb-6" />
                     <h3 className="text-2xl sm:text-3xl font-black mb-3">UPLINK SUCCESSFUL</h3>
                     <p className="text-black/50 dark:text-white/50 font-mono tracking-widest text-sm uppercase">You are on the roster. Check your email.</p>
                  </motion.div>
               ) : (
                  <form className="flex flex-col sm:flex-row gap-4 w-full relative z-10" onSubmit={(e) => { e.preventDefault(); setIsWaitlisted(true); }}>
                     <div className="relative flex-1 w-full">
                        <UserCheck className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-black/30 dark:text-white/30" />
                        <input required type="text" placeholder="Your Instagram Handle (@)" className="w-full min-h-[72px] rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 pl-16 pr-6 focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all text-lg font-medium placeholder:font-light" />
                     </div>
                     <button type="submit" className="w-full sm:w-auto min-h-[72px] px-10 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-black uppercase tracking-[0.15em] text-sm sm:text-base hover:scale-[1.02] transition-transform shadow-[0_10px_30px_rgba(124,58,237,0.2)] shrink-0 flex items-center justify-center gap-3">
                        <Key className="w-5 h-5" /> Secure Spot
                     </button>
                  </form>
               )}
            </div>
            <p className="text-xs text-black/40 dark:text-white/40 mt-8 font-mono tracking-[0.2em] uppercase">Private Beta • No credit card required.</p>
         </div>
      </section>

      <TeamSection />
      <CareersSection />

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
      <section className="py-32 md:py-48 bg-black dark:bg-white overflow-hidden relative text-center">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,var(--color-primary)_0%,transparent_60%)] opacity-30 dark:opacity-[0.15] pointer-events-none" />
         <div className="container mx-auto px-4 text-white dark:text-black relative z-10 flex flex-col items-center">
            <h2 className="text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] font-black uppercase tracking-tighter mb-12 sm:mb-16 leading-[0.85]">
               Scale <span className="opacity-80 italic">Without</span><br/> Limits.
            </h2>
            <a href="#offer" className="inline-flex w-full sm:w-auto min-h-[72px] px-12 sm:px-16 rounded-full bg-white dark:bg-black text-black dark:text-white font-black uppercase tracking-[0.2em] text-sm sm:text-base items-center justify-center gap-4 hover:scale-105 transition-transform shadow-[0_0_60px_rgba(255,255,255,0.15)] dark:shadow-[0_0_60px_rgba(0,0,0,0.15)] group">
               Initialize Sequence <ArrowRight className="w-6 h-6 animate-pulse group-hover:translate-x-2 transition-transform" />
            </a>
         </div>
      </section>

      {/* ==========================================
          11. FINAL FOOTER ROUTING
          ========================================== */}
      <footer className="py-16 bg-white dark:bg-black border-t border-black/10 dark:border-white/10">
         <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-4">
               <Link href="/" className="group hover:opacity-80 transition-opacity">
                 <Logo size="md" />
               </Link>
               <p className="text-sm font-mono tracking-widest text-black/40 dark:text-white/40 uppercase mt-2">© 2026 Engine Protocols.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10 font-bold text-xs sm:text-sm uppercase tracking-[0.1em] text-black/60 dark:text-white/60">
               <Link href="/about" className="hover:text-black dark:hover:text-white transition-colors">Mission</Link>
               <Link href="/team" className="hover:text-black dark:hover:text-white transition-colors">Team</Link>
               <Link href="/careers" className="hover:text-black dark:hover:text-white transition-colors">Careers</Link>
               <Link href="/lab" className="hover:text-black dark:hover:text-white transition-colors">Lab Insights</Link>
               <Link href="/contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</Link>
            </div>
         </div>
      </footer>

    </main>
  );
}
