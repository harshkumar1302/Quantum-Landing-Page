"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Database, BrainCircuit, Lock, CloudLightning } from "lucide-react";

export function TechSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const pillars = [
    { icon: <BrainCircuit />, title: "Contextual NLP", desc: "Understanding creator-audience intent beyond keywords. 99% accuracy on localized intent parsing." },
    { icon: <Database />, title: "Distributed State", desc: "Highly available graph datastore tracking millions of edge relationships instantly." },
    { icon: <CloudLightning />, title: "Edge Processing", desc: "Responses served globally in under 20ms using distributed Cloudflare Workers." },
    { icon: <Lock />, title: "Zero-Trust Sec", desc: "End-to-end encrypted pipelines ensuring creator data sovereignty." }
  ];

  return (
    <section 
       ref={containerRef} 
       id="tech"
       className="py-32 bg-[#05050A] text-white overflow-hidden relative border-t border-white/10"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
           {/* Left Copy */}
           <div className="flex-1">
              <motion.h2 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                 className="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-[1.1]"
              >
                 Architecture Designed for scale.
              </motion.h2>
              <motion.p
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                 className="text-xl text-white/50 mb-12 leading-relaxed"
              >
                 We don't rely on wrapper APIs. The Quantum Engine is built from the metal up to handle the immense throughput of creator ecosystems securely.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {pillars.map((pillar, i) => (
                    <motion.div 
                       key={i}
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.8, delay: 0.3 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
                       className="group"
                    >
                       <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                          {pillar.icon}
                       </div>
                       <h4 className="text-xl font-bold mb-2">{pillar.title}</h4>
                       <p className="text-sm text-white/40 leading-relaxed">{pillar.desc}</p>
                    </motion.div>
                 ))}
              </div>
           </div>

           {/* Right Abstract SVG Parallax Art */}
           <div className="flex-1 relative h-[600px] w-full flex items-center justify-center">
              {/* Central Glowing Core */}
              <motion.div 
                 style={{ scale, opacity }}
                 className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_50%)] opacity-20 blur-3xl z-0"
              />
              
              {/* Floating Element 1 */}
              <motion.div style={{ y: y1 }} className="absolute z-20 top-20 left-10 w-32 h-32 rounded-3xl bg-white/5 border border-white/20 backdrop-blur-xl flex items-center justify-center shadow-2xl overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/10" />
                 <span className="font-mono text-xs text-white/60">Node A</span>
              </motion.div>

              {/* Floating Element 2 */}
              <motion.div style={{ y: y2 }} className="absolute z-20 bottom-32 right-10 w-48 h-24 rounded-2xl bg-primary/10 border border-primary/30 backdrop-blur-xl flex flex-col items-center justify-center shadow-2xl p-4">
                 <div className="w-full h-2 bg-white/10 rounded-full mb-2 overflow-hidden">
                    <motion.div 
                       className="h-full bg-primary"
                       animate={{ width: ["0%", "100%", "0%"] }}
                       transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
                    />
                 </div>
                 <span className="font-mono text-[10px] text-primary uppercase tracking-widest">Routing 10M Events/s</span>
              </motion.div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" style={{ filter: "drop-shadow(0 0 10px rgba(255,255,255,0.1))" }}>
                 <motion.path 
                    d="M 128 144 C 200 144, 300 300, 384 464" 
                    fill="none" 
                    stroke="rgba(255,255,255,0.2)" 
                    strokeWidth="2"
                    strokeDasharray="10 10"
                 />
                 <motion.circle cx="128" cy="144" r="4" fill="#ffffff" />
                 <motion.circle cx="384" cy="464" r="4" fill="var(--color-primary)" />
              </svg>

              {/* Central Abstract Ring */}
              <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                 className="relative z-10 w-80 h-80 rounded-full border border-dashed border-white/20 flex items-center justify-center"
              >
                 <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-64 h-64 rounded-full border border-primary/30 flex items-center justify-center"
                 >
                    <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-primary to-purple-500 blur-lg opacity-50" />
                 </motion.div>
              </motion.div>

           </div>
        </div>
      </div>
    </section>
  );
}
