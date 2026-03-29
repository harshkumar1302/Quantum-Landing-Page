"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Kamal Gurnani",
    role: "Founder & Chief Architect",
    linkedin: "https://linkedin.com/in/kamalgurnani",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Kawaljeet Rekhi",
    role: "Head of AI Research",
    linkedin: "https://linkedin.com/in/kawaljeetrekhi",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Srinandan HM",
    role: "Product Engineering",
    linkedin: "https://linkedin.com/in/srinandanhm",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
  }
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#000000] text-black dark:text-white pt-40 pb-24 overflow-hidden selection:bg-[#7C3AED]/30">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-[#7C3AED]/5 dark:bg-[#7C3AED]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 md:mb-32">
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 mb-8 backdrop-blur-sm"
          >
             <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
             <span className="text-xs font-black uppercase tracking-[0.2em] opacity-80 text-black dark:text-white">Active Roster</span>
          </motion.div>
          
          <motion.h1 
             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
             className="text-[3rem] sm:text-5xl md:text-[5rem] font-black uppercase tracking-tighter mb-8 leading-[0.9]"
          >
             The Engineering <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-[#7C3AED] dark:from-white dark:to-[#7C3AED]">Core.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }}
            className="text-lg md:text-2xl font-light text-black/60 dark:text-white/60 leading-relaxed max-w-2xl px-4"
          >
            A collective of builders, researchers, and designers obsessed with autonomous intelligence. Founder-market fit at the core.
          </motion.p>
          
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {team.map((member, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0, y: 40 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 + (i * 0.1), duration: 0.6 }}
               className="group relative flex flex-col"
            >
               {/* Image Container with Hover Mechanics (Blur + Icon) */}
               <a 
                 href={member.linkedin} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="relative w-full aspect-[4/5] overflow-hidden rounded-[2rem] bg-black/5 dark:bg-white/5 mb-6 border border-black/10 dark:border-white/10 cursor-pointer"
               >
                  <img 
                     src={member.image} 
                     alt={member.name}
                     className="w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:blur-md group-hover:opacity-40"
                  />
                  
                  {/* Overlay LinkedIn Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                     <div className="w-16 h-16 rounded-full bg-black/40 dark:bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                        <Linkedin className="w-8 h-8 fill-current" />
                     </div>
                  </div>
               </a>

               {/* Meta Data */}
               <div className="flex flex-col flex-1 pl-2">
                  <h3 className="text-2xl font-black tracking-tight mb-1">{member.name}</h3>
                  <p className="text-sm font-mono tracking-widest uppercase text-black/50 dark:text-white/50">{member.role}</p>
               </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}
