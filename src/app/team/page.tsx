"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Linkedin, ArrowUpRight } from "lucide-react";
import React, { useRef, useState } from "react";

const team = [
  {
    name: "Dheerendra",
    role: "Founder / CEO",
    description: "Leads product vision. Who knows exactly what's broken and how to fix it.",
    image: "/images/dheerendra.jpg",
  },
  {
    name: "Krishna",
    role: "Co-Founder / Director of Engineering",
    description: "The engine behind the engine. Architects everything that runs under the hood.",
    image: "/images/krishna.jpg",
  },
  {
    name: "Ayush",
    role: "Co-Founder / CTO",
    description: "The backbone. Builds and owns everything that runs behind the scenes.",
    image: "/images/ayush.jpg",
  },
  {
    name: "Sharath",
    role: "Founding AI Engineer",
    description: "Teaches the machine how to think. The AI layer is entirely his.",
    image: "/images/sharath.jpg",
  },
  {
    name: "Harsh",
    role: "Growth / Marketing",
    description: "The growth brain. Making sure the right people hear about Creonnect at the right time.",
    image: "/images/harsh.jpg",
  }
];

function KineticTeamCard({ member, index }: { member: any; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative group w-full lg:w-[260px] cursor-none"
      data-torch-color="#7C3AED"
    >
      {/* 3D Depth Card Structure */}
      <div 
        className="relative h-full transition-all duration-500 rounded-[2.5rem] bg-black/[0.02] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 overflow-hidden backdrop-blur-sm group-hover:border-black/20 dark:group-hover:border-white/20 group-hover:bg-black/[0.04] dark:group-hover:bg-white/[0.05]"
        style={{ transform: "translateZ(20px)" }}
      >
        {/* Border Glow Trace (Orbit Effect) */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}>
            <div className="absolute inset-[-2px] bg-gradient-to-r from-transparent via-[#7C3AED]/30 to-transparent blur-sm animate-[shimmer_3s_infinite_linear]" />
        </div>

        {/* Floating Headshot */}
        <div 
          className="relative aspect-square w-full scale-95 p-2"
          style={{ transform: "translateZ(40px)" }}
        >
          <div className="w-full h-full rounded-[2rem] overflow-hidden border border-black/5 dark:border-white/5 relative group-hover:shadow-2xl transition-all duration-500">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            />
            {/* Overlay Gradient on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white ml-auto">
                    <Linkedin className="w-4 h-4" />
                </div>
            </div>
          </div>
        </div>

        {/* Content Reveal Platform */}
        <div 
          className="flex flex-col p-6 pt-2"
          style={{ transform: "translateZ(60px)" }}
        >
          <h3 className="text-xl font-black tracking-tighter uppercase mb-0.5 leading-none">{member.name}</h3>
          <p className="text-[10px] font-black tracking-[0.3em] uppercase text-black/40 dark:text-white/40 mb-3">{member.role}</p>
          
          {/* Animated Description Unmask */}
          <motion.div
            initial={false}
            animate={{ 
              height: isHovered ? "auto" : 0, 
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-sm font-light text-black/60 dark:text-white/60 leading-tight pr-2 pb-2">
              {member.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Background Shadow for 3D Feel */}
      <div className="absolute -inset-4 bg-black/10 dark:bg-white/5 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />
    </motion.div>
  );
}

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#000000] text-black dark:text-white pt-40 pb-24 overflow-hidden selection:bg-[#7C3AED]/30 perspective-[2000px]">
      
      {/* Dynamic Background Mesh */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden h-screen w-screen z-0">
         <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.03),transparent_40%)]" />
         <div className="absolute bottom-0 right-0 w-full h-[600px] bg-gradient-to-t from-[#7C3AED]/5 to-transparent blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-[1600px] relative z-10">
        
        {/* Header Section: "The Matrix" Roster */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20 md:mb-40">
          
          <motion.div 
             initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] mb-12 backdrop-blur-xl"
          >
             <div className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] shadow-[0_0_15px_#7C3AED]" />
             <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 text-black dark:text-white">The Founding Node</span>
          </motion.div>
          
          <motion.h1 
             initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 1 }}
             className="text-[4rem] sm:text-7xl md:text-[9rem] font-black uppercase tracking-[-0.05em] mb-10 leading-[0.8] relative"
          >
             Quantum <br/> <span className="italic font-light tracking-[-0.08em] opacity-40">Architects</span>
          </motion.h1>

          <motion.div 
            initial={{ width: 0 }} animate={{ width: "120px" }} transition={{ delay: 0.5, duration: 1.5 }}
            className="h-1 bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent mb-10"
          />
          
        </div>

        {/* The Kinetic Roster (3D Interactive Row) */}
        <div className="flex flex-col lg:flex-row flex-nowrap items-center justify-center gap-4 lg:gap-8 min-h-[500px] px-4">
          {team.map((member, i) => (
            <KineticTeamCard key={i} member={member} index={i} />
          ))}
        </div>

      </div>

      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(0deg); }
          100% { transform: translateX(200%) rotate(0deg); }
        }
      `}</style>
    </main>
  );
}
