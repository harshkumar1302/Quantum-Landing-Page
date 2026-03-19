"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const accordionData = [
  {
    title: "1. The Problem",
    content: "Over 100 million people worldwide identify as content creators. Yet fewer than 2% can sustainably monetize their work. The tools available to them are fragmented, expensive, non-compliant, or built for enterprises — not for the solo creator posting from their phone. It shouldn't be this hard."
  },
  {
    title: "2. Our Belief",
    content: "We believe every creator deserves an operating system for their business — one that handles engagement, analytics, monetization, and brand partnerships without requiring a team, a developer, or five different subscriptions."
  },
  {
    title: "3. Our Approach",
    content: "We build AI-native products that understand creator workflows at a fundamental level. Our systems use NLP, computer vision, and time-series analysis to automate what's tedious and surface what's valuable — so creators can focus on creating."
  }
];

export function MissionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 bg-foreground/5 dark:bg-background border-y border-foreground/10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left: Interactive Accordion */}
        <div className="flex-1 w-full max-w-2xl text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-12"
          >
            The Creator Economy Is Broken. <br className="hidden md:block"/>
            <span className="text-primary">We're Fixing It.</span>
          </motion.h2>

          <div className="space-y-4">
            {accordionData.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: i * 0.1 }}
                   className={`border ${isOpen ? 'border-primary shadow-lg bg-background' : 'border-foreground/10 bg-foreground/5'} rounded-2xl overflow-hidden transition-colors duration-300`}
                >
                  <button 
                    onClick={() => toggleOpen(i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <h3 className={`text-xl font-bold ${isOpen ? 'text-primary' : 'text-foreground'}`}>
                      {item.title}
                    </h3>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                      <ChevronDown className="w-5 h-5 opacity-60" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-foreground/70 leading-relaxed text-lg">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right: Animated Abstract Workflow Illustration */}
        <div className="flex-1 w-full max-w-lg hidden lg:flex justify-center relative h-[500px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full h-full relative flex items-center justify-center"
          >
             {/* Central Node */}
             <div className="w-32 h-32 bg-primary/20 rounded-xl rotate-45 flex items-center justify-center relative z-20 border border-primary/50 shadow-2xl backdrop-blur-md">
                <div className="w-16 h-16 bg-gradient-to-tr from-primary to-purple-400 rounded-lg -rotate-45" />
             </div>
             
             {/* Rings & Lines */}
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute inset-0 border-2 border-dashed border-foreground/10 rounded-full"
             />
             <motion.div 
               animate={{ rotate: -360 }}
               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
               className="absolute inset-16 border border-foreground/5 rounded-full"
             />

             {/* Orbital Elements (Fragmented APIs settling into orbit) */}
             {[0, 1, 2, 3].map((orb) => (
                <motion.div
                   key={orb}
                   initial={{ opacity: 0, x: (orb%2===0?-100:100), y: (orb<2?-100:100) }}
                   whileInView={{ opacity: 1, x: 0, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 1, delay: 0.5 + (orb*0.2) }}
                   className="absolute w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center"
                   style={{
                     transformOrigin: '200px 200px',
                   }}
                />
             ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
