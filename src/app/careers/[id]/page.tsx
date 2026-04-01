"use client";

import { motion } from "framer-motion";
import {
   ArrowLeft, Share2, Send, CheckCircle2,
   MapPin, Clock, Briefcase, Zap, Globe, Cpu, Users
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const jobsData = [
   {
      id: "CRE-CTR-001",
      title: "Content & GTM Lead",
      department: "Creative Collective",
      location: "Remote",
      level: "Mid-Senior",
      type: "Full-Time | Growth Track",
      color: "#EC4899",
      pay: "₹20,000 – ₹30,000 per month",
      workingHours: "Flexible — output driven",
      about: "We’re an early-stage startup building from scratch, looking for a creative powerhouse to shape our brand narrative, lead go-to-market, and turn ideas into scroll-stopping content—someone who wants real ownership and a front-row seat to building something people genuinely love. At the core is Creonnect, an AI-powered influencer marketing platform rethinking how brands and creators collaborate by fixing broken discovery, eliminating fake metrics, and unifying scattered workflows into a single intelligent system that drives meaningful matches and measurable ROI.",
      jd: "We’re on the hunt for a Content & GTM Lead — someone who doesn’t just 'do content' but builds the entire growth engine. You’ll shape how the world sees us, plan the GTM strategy, create video-first content, run campaigns, and become the face and voice of the brand. If you eat, sleep, and breathe digital content and growth, we want to hear from you!",
      responsibilities: [
         "Build and execute the Go-To-Market (GTM) strategy from scratch — positioning, messaging, and launch playbooks.",
         "Plan and own the brand direction — define our voice, visual identity, and content pillars.",
         "Create compelling content across formats — Instagram Reels, YouTube Shorts, LinkedIn posts, Twitter/X threads, and short videos.",
         "Be the face of the brand — script, shoot, and produce video content that builds trust and authority.",
         "Own social media end-to-end: planning, posting, community engagement, and growth.",
         "Run performance marketing campaigns (Meta Ads, Google Ads) to drive measurable acquisition.",
         "Collaborate with the founding team and product/design to bring ideas to life across platforms.",
         "Keep your finger on the pulse — analyze trends, insights, and competitors to generate fresh marketing concepts.",
         "Monitor the reach, engagement, and overall impact of the content you create."
      ],
      requirements: [
         "0–2 years of experience in content creation, social media marketing, or GTM roles (freshers with a killer portfolio welcome!).",
         "Fluent communication skills — both spoken and written English.",
         "A solid grasp of social media trends, tools, algorithms, and content styles.",
         "Proven ability to create engaging short-form video content (Reels, Shorts, TikToks).",
         "Experience running paid ad campaigns with measurable ROI.",
         "Excellent copywriting skills — you can write a tweet that slaps and a LinkedIn post that converts.",
         "A clear and confident communicator with a creative mindset.",
         "Comfortable being on camera and becoming the voice/face of a brand.",
         "Data-driven — you track, measure, and optimize everything.",
         "Bonus: Should be good at art, doodling, or sketching."
      ],
      stack: ["Premiere Pro", "CapCut", "Figma", "Canva", "Meta Ads", "HubSpot", "After Effects"],
      benefits: [
         "A fun, energetic, and creative work environment.",
         "Plenty of room for professional growth and learning.",
         "Full creative freedom — no micromanagement, just ownership.",
         "Direct access to founders — your ideas shape the company.",
         "Role converts to full-time salaried position post product launch + seed raise.",
         "Learning budget and access to premium tools.",
         "Fully remote — work from anywhere."
      ]
   }
];

export default function JobDetailPage() {
   const { id } = useParams();
   const [copied, setCopied] = useState(false);
   const [isApplying, setIsApplying] = useState(false);

   const job = jobsData.find(j => j.id === id) || jobsData[0];

   const handleShare = () => {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
   };

   const handleApply = async () => {
      if (isApplying) return;
      setIsApplying(true);

      // Mind-blowing delay for animation sequence
      await new Promise(resolve => setTimeout(resolve, 800));

      window.location.href = `mailto:hello@quantumrealm.cloud?subject=Application for ${job.title} (${job.id})`;

      // Reset after a delay if they come back
      setTimeout(() => setIsApplying(false), 2000);
   };

   return (
      <main className="min-h-screen bg-white dark:bg-[#000000] text-black dark:text-white pt-40 pb-48 px-4 md:px-8 transition-colors duration-500 overflow-x-hidden relative selection:bg-primary/30 selection:text-white" data-torch-light-disabled>

         {/* Background Lighting */}
         <div className="fixed inset-0 pointer-events-none z-0">
            <div
               className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1000px] opacity-[0.05] blur-[150px] rounded-full"
               style={{ backgroundColor: job.color }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black_70%,transparent_100%)] opacity-30" />
         </div>

         <div className="container mx-auto max-w-5xl relative z-10">

            {/* Header Navigation */}
            <Link
               href="/careers"
               className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] opacity-40 hover:opacity-100 hover:text-primary transition-all mb-12 group dark:cursor-none"
               data-torch-color={job.color}
            >
            </Link>

            {/* Job Header Card */}
            <header className="mb-20 dark:cursor-none" data-torch-color={job.color}>
               <div className="flex flex-wrap items-center gap-4 mb-8">
                  <span className="px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                     PROTOCOL_{job.id}
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-white dark:bg-black border border-black/10 dark:border-white/10 text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
                     {job.type}
                  </span>
               </div>

               <h1 className="text-[3.5rem] sm:text-[5rem] lg:text-[7rem] font-black tracking-tighter uppercase leading-[0.8] mb-8">
                  {job.title}
               </h1>

               <div className="flex flex-wrap gap-10">
                  <div className="flex flex-col gap-2">
                     <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-30">Cluster</span>
                     <div className="flex items-center gap-2 font-bold uppercase tracking-tight text-lg">
                        <Briefcase className="w-4 h-4 opacity-40" /> {job.department}
                     </div>
                  </div>
                  <div className="flex flex-col gap-2">
                     <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-30">Clock</span>
                     <div className="flex items-center gap-2 font-bold uppercase tracking-tight text-lg">
                        <Clock className="w-4 h-4 opacity-40" /> {job.workingHours || "Flexible"}
                     </div>
                  </div>
                  <div className="flex flex-col gap-2">
                     <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-30">Compensation</span>
                     <div className="flex items-center gap-2 font-bold uppercase tracking-tight text-lg text-primary">
                        <Zap className="w-4 h-4 opacity-40" /> {job.pay || "Competitive"}
                     </div>
                  </div>
               </div>
            </header>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">

               {/* Left Column: JD & Info */}
               <div className="lg:col-span-2 space-y-24">

                  <section className="dark:cursor-none" data-torch-color={job.color}>
                     <h2 className="text-2xl font-black uppercase tracking-[0.2em] mb-8 flex items-center gap-4">
                        <Globe className="w-5 h-5 text-primary" /> About the Lab
                     </h2>
                     <p className="text-base text-black/60 dark:text-white/60 leading-relaxed mb-12">
                        {job.about}
                     </p>

                     <h2 className="text-2xl font-black uppercase tracking-[0.2em] mb-8 flex items-center gap-4">
                        <Cpu className="w-5 h-5 text-primary" /> The Mission
                     </h2>
                     <p className="text-lg md:text-xl font-light text-black/60 dark:text-white/60 leading-relaxed italic pr-12 border-l-2 border-primary/20 pl-8 ml-2">
                        "{job.jd}"
                     </p>
                  </section>

                  <section className="dark:cursor-none" data-torch-color={job.color}>
                     <h2 className="text-2xl font-black uppercase tracking-[0.2em] mb-8 flex items-center gap-4">
                        <Send className="w-5 h-5 text-primary" /> Roles & Responsibilities
                     </h2>
                     <ul className="space-y-6">
                        {job.responsibilities && job.responsibilities.map((res, i) => (
                           <li key={i} className="flex gap-6 group">
                              <div className="w-2 h-2 rounded-full border border-primary/40 mt-3 group-hover:bg-primary transition-colors" />
                              <span className="text-base text-black/60 dark:text-white/60 font-light leading-relaxed">{res}</span>
                           </li>
                        ))}
                     </ul>
                  </section>

                  <section className="dark:cursor-none" data-torch-color={job.color}>
                     <h2 className="text-2xl font-black uppercase tracking-[0.2em] mb-8 flex items-center gap-4">
                        <CheckCircle2 className="w-5 h-5 text-primary" /> Neural Requirements
                     </h2>
                     <ul className="space-y-6 mb-12">
                        {job.requirements.map((req, i) => (
                           <li key={i} className="flex gap-6 group">
                              <div className="w-2 h-2 rounded-full border border-primary/40 mt-3 group-hover:bg-primary transition-colors" />
                              <span className="text-base text-black/60 dark:text-white/60 font-light leading-relaxed">{req}</span>
                           </li>
                        ))}
                     </ul>

                     <div className="relative group/btn inline-block">
                        <motion.button
                           onClick={handleApply}
                           disabled={isApplying}
                           animate={isApplying ? {
                              scale: [1, 0.9, 1.2, 1],
                              opacity: [1, 1, 0.8, 1],
                              filter: ["blur(0px)", "blur(4px)", "blur(0px)"]
                           } : { scale: 1, opacity: 1 }}
                           transition={{ duration: 0.6, ease: "easeOut" }}
                           className="relative px-8 h-12 rounded-full bg-black dark:bg-white text-white dark:text-black font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-lg group dark:cursor-none overflow-hidden"
                           style={{ boxShadow: isApplying ? `0 0 30px ${job.color}` : "" }}
                        >
                           <motion.span
                              animate={isApplying ? { y: [-10, 10, 0], opacity: [0, 0, 1] } : { y: 0, opacity: 1 }}
                              className="flex items-center gap-3"
                           >
                              {isApplying ? "TRANSMITTED" : "Apply Now"}
                              {!isApplying && <Send className="w-3.5 h-3.5 transition-all duration-500" />}
                           </motion.span>

                           {/* Inner Glitch Effect on Hover */}
                           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-shimmer pointer-events-none" />
                        </motion.button>

                        {/* QUANTUM SHOCKWAVE EFFECT */}
                        {isApplying && (
                           <>
                              <motion.div
                                 initial={{ scale: 0.8, opacity: 0.5 }}
                                 animate={{ scale: 3, opacity: 0 }}
                                 transition={{ duration: 0.8, ease: "easeOut" }}
                                 className="absolute inset-0 rounded-full pointer-events-none z-[-1]"
                                 style={{ border: `2px solid ${job.color}` }}
                              />
                              <motion.div
                                 initial={{ scale: 0.8, opacity: 0.8 }}
                                 animate={{ scale: 5, opacity: 0, filter: "blur(20px)" }}
                                 transition={{ duration: 0.6, ease: "easeOut" }}
                                 className="absolute inset-0 rounded-full pointer-events-none z-[-1]"
                                 style={{ backgroundColor: job.color }}
                              />
                              {/* Particle Burst */}
                              {[...Array(8)].map((_, i) => (
                                 <motion.div
                                    key={i}
                                    initial={{ x: 0, y: 0, scale: 1 }}
                                    animate={{
                                       x: Math.cos(i * 45) * 150,
                                       y: Math.sin(i * 45) * 150,
                                       scale: 0,
                                       opacity: 0
                                    }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                    className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full pointer-events-none"
                                    style={{ backgroundColor: job.color }}
                                 />
                              ))}
                           </>
                        )}
                     </div>
                  </section>

               </div>

               {/* Right Column: Tech Stack & Benefits */}
               <div className="space-y-12">

                  {/* Sidebar Action Cluster (NEW) */}
                  <section className="p-8 rounded-[3rem] border border-black/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] shadow-xl dark:cursor-none flex flex-col gap-4 sticky top-40" data-torch-color={job.color}>
                     <div className="relative group/sideBtn">
                        <button
                           onClick={handleApply}
                           disabled={isApplying}
                           className="w-full h-20 rounded-3xl bg-black dark:bg-white text-white dark:text-black font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_40px_rgba(0,0,0,0.1)] group dark:cursor-none relative overflow-hidden"
                        >
                           <span className={isApplying ? "opacity-0" : "flex items-center gap-4"}>
                              Apply Now <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                           </span>
                           {isApplying && <span className="absolute inset-0 flex items-center justify-center animate-pulse">TRANSMITTING...</span>}
                        </button>

                        {isApplying && (
                           <motion.div
                              initial={{ scale: 1, opacity: 1 }}
                              animate={{ scale: 2, opacity: 0 }}
                              className="absolute inset-0 rounded-3xl bg-primary/20 pointer-events-none"
                           />
                        )}
                     </div>

                     <button
                        onClick={handleShare}
                        className="w-full h-16 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-black/10 dark:hover:bg-white/10 transition-all dark:cursor-none"
                     >
                        <Share2 className="w-4 h-4 opacity-60" /> {copied ? "Link Copied!" : "Share Job"}
                     </button>
                  </section>

                  <section className="p-10 rounded-[3rem] bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 dark:cursor-none" data-torch-color={job.color}>
                     <h3 className="text-sm font-black uppercase tracking-[0.3em] mb-8 opacity-40 flex items-center gap-2">
                        <Globe className="w-4 h-4" /> Nucleus Stack
                     </h3>
                     <div className="flex flex-wrap gap-3">
                        {job.stack.map((s, i) => (
                           <span key={i} className="px-5 py-2 rounded-2xl bg-white dark:bg-black border border-black/5 dark:border-white/10 text-xs font-bold tracking-tight shadow-sm">
                              {s}
                           </span>
                        ))}
                     </div>
                  </section>

                  <section className="p-10 rounded-[3rem] bg-primary/[0.03] border border-primary/10 dark:cursor-none" data-torch-color={job.color}>
                     <h3 className="text-sm font-black uppercase tracking-[0.3em] mb-8 opacity-40 flex items-center gap-2">
                        <Users className="w-4 h-4" /> Lab Benefits
                     </h3>
                     <ul className="space-y-4">
                        {job.benefits && job.benefits.map((ben, i) => (
                           <li key={i} className="text-sm text-black/60 dark:text-white/60 font-light leading-snug flex items-start gap-3">
                              <div className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                              {ben}
                           </li>
                        ))}
                     </ul>
                  </section>

                  <section className="p-10 rounded-[3rem] border border-black/5 dark:border-white/5 dark:cursor-none" data-torch-color={job.color}>
                     <h3 className="text-sm font-black uppercase tracking-[0.3em] mb-6 opacity-40 flex items-center gap-2">
                        <Zap className="w-4 h-4" /> Lab Culture
                     </h3>
                     <p className="text-sm text-black/60 dark:text-white/60 font-light leading-relaxed">
                        We iterate in 48-hour cycles. We value architecture over speed, but we move with velocity. No ego, only engineering excellence.
                     </p>
                  </section>

               </div>

            </div>

         </div>

      </main>
   );
}
