"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Telescope, Zap, Shield, Rocket, Users } from "lucide-react";

export default function AboutPage() {
  const values = [
    { icon: <Users className="w-6 h-6 text-blue-500" />, title: "Build for the 99%", desc: "Not enterprise. Not agencies. Individual creators who do everything themselves." },
    { icon: <Zap className="w-6 h-6 text-yellow-500" />, title: "AI-Native, Not AI-Bolted", desc: "Our products don't add AI as a checkbox. They're designed around AI from line one." },
    { icon: <Shield className="w-6 h-6 text-green-500" />, title: "Compliance Is Non-Negotiable", desc: "We only build on official APIs. No shortcuts, no scraping, no account risk." },
    { icon: <Rocket className="w-6 h-6 text-purple-500" />, title: "Ship Fast, Learn Faster", desc: "Two-week sprints. Real user feedback. Iterate relentlessly." }
  ];

  const timeline = [
    { quarter: "2025 Q3", title: "Company Founded", desc: "QuantumRealm formed in Bengaluru." },
    { quarter: "2025 Q4", title: "First Engineering Hires", desc: "Core AI architecture established." },
    { quarter: "2026 Q1", title: "Creonnect MVP", desc: "Closed beta launch with 100 creators." },
    { quarter: "2026 Q2", title: "Waitlist Scaling", desc: "Crossed 10,000 creators on the waitlist." },
    { quarter: "2026 Q3", title: "Creonnect GA Launch", desc: "Public availability target." },
    { quarter: "2026 Q4", title: "Product #2 Announcement", desc: "Expanding the CreatorOS ecosystem." }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-52 bg-background text-foreground transition-colors duration-500 dark:cursor-none" data-torch-color="#7C3AED">
      {/* Hero */}
      <section className="py-20 md:py-32 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,var(--color-primary)_0%,transparent_50%)] opacity-10 mix-blend-screen" />
         <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
            <motion.h1 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] mb-8"
            >
               Intelligence <br />
               <span className="text-transparent border-text">Redefined</span>
            </motion.h1>
            <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="text-xl md:text-2xl text-muted max-w-3xl mx-auto font-light leading-relaxed"
            >
               We're building the infrastructure for the next generation of the internet's most powerful businesses: Creators.
            </motion.p>
         </div>
      </section>

      {/* Origin, Mission, Vision */}
      <section className="py-20 bg-foreground/[0.02] border-y border-foreground/10">
         <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
               
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 decoration-primary decoration-4 underline-offset-8">Origin</h2>
                  <p className="text-muted leading-relaxed text-lg">
                     The creator economy has 100M+ people, but almost none have the tools they need to run a real business. We saw creators stitching together 5 different expensive tools just to manage their audience. Founded in 2025 in Bengaluru, QuantumRealm was born from a single insight: Creators don't need more tools; they need a unified, intelligent system.
                  </p>
               </motion.div>

               <div className="flex flex-col gap-12">
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                     <h2 className="text-2xl font-bold mb-4 flex items-center gap-3"><Target className="w-6 h-6 text-primary" /> Our Mission</h2>
                     <p className="text-muted leading-relaxed text-lg border-l-2 border-primary pl-4">
                        To build the AI infrastructure that powers every creator's business.
                     </p>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                     <h2 className="text-2xl font-bold mb-4 flex items-center gap-3"><Telescope className="w-6 h-6 text-primary" /> Our Vision</h2>
                     <p className="text-muted leading-relaxed text-lg border-l-2 border-primary pl-4">
                        A world where any creator — regardless of team size, technical skill, or budget — can run a sustainable business using intelligent tools that understand their workflow.
                     </p>
                  </motion.div>
               </div>
            </div>
         </div>
      </section>

      {/* Values */}
      <section className="py-24">
         <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-bold mb-4">Values</h2>
               <p className="text-muted max-w-2xl mx-auto">The principles that guide our day-to-day engineering and product decisions.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {values.map((val, i) => (
                  <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="p-8 rounded-3xl bg-foreground/[0.02] border border-foreground/10 hover:border-primary/30 transition-colors cursor-pointer group"
                  >
                     <div className="w-12 h-12 bg-background border border-foreground/10 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                        {val.icon}
                     </div>
                     <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                     <p className="text-muted leading-relaxed text-sm">{val.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-foreground border-y border-foreground text-background overflow-hidden relative">
         <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-6xl font-black mb-20 text-center uppercase tracking-tighter italic">The Journey</h2>
            
            <div className="relative max-w-6xl mx-auto">
               <div className="absolute top-1/2 left-0 w-full h-[1px] bg-background/20 -translate-y-1/2 hidden md:block" />
               
               <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
                  {timeline.map((step, i) => (
                     <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="relative flex flex-col items-center text-center group"
                     >
                        <div className="w-6 h-6 rounded-full bg-background border-4 border-foreground z-10 mb-6 flex items-center justify-center group-hover:scale-125 transition-transform duration-500">
                           <div className="w-1 h-1 rounded-full bg-primary" />
                        </div>
                        <div className="bg-background/10 p-5 rounded-2xl w-full border border-background/20 hover:bg-background/20 transition-all duration-500 backdrop-blur-sm">
                           <span className="text-primary font-mono text-[10px] font-black block mb-2 tracking-widest">{step.quarter}</span>
                           <h4 className="font-bold text-xs mb-2 uppercase tracking-tight">{step.title}</h4>
                           <p className="text-[10px] text-background/60 leading-relaxed">{step.desc}</p>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-32">
         <div className="container mx-auto px-4 text-center">
            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="max-w-3xl mx-auto bg-primary/5 border border-primary/20 rounded-[40px] p-12 md:p-24"
            >
               <h2 className="text-3xl md:text-5xl font-black mb-6 text-foreground tracking-tighter">JOIN THE COLLECTIVE</h2>
               <p className="text-xl text-muted mb-12 font-light">We're always looking for exceptional talent to join our team.</p>
               <Link
                  href="/careers"
                  className="inline-flex items-center space-x-3 bg-foreground text-background px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform"
               >
                  <span>OPEN ROLES</span>
                  <ArrowRight className="w-5 h-5" />
               </Link>
            </motion.div>
         </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .border-text {
          -webkit-text-stroke: 1px var(--foreground);
          color: transparent;
        }
      `}} />

    </div>
  );
}
