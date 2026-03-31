"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box, Cpu, Sparkles, Orbit } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: "creonnect",
    name: "Creonnect",
    tagline: "The Creator OS",
    description: "Autonomous AI engagement and DM management for the elite creator economy. Scale beyond human limits.",
    image: "/images/products/creonnect-logo.webp",
    live: true,
    href: "/products/creonnect"
  }
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#000000] text-black dark:text-white pt-40 pb-24 px-4 transition-colors duration-500 overflow-hidden relative">
      
      {/* Background Orbital Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-[#7C3AED] opacity-[0.03] dark:opacity-[0.06] blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="mb-32 flex flex-col items-center text-center gap-6 border-b border-black/5 dark:border-white/5 pb-24">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 mb-4 backdrop-blur-sm">
             <Orbit className="w-3 h-3 text-[#7C3AED] animate-spin-slow" />
             <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">The Ecosystem</span>
           </div>

           <h1 className="text-[4rem] sm:text-[6rem] md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] mb-8">
              Product <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#7C3AED] animate-gradient-x bg-[length:200%_auto]">Universe.</span>
           </h1>
           <p className="text-lg md:text-2xl text-black/60 dark:text-white/60 font-light max-w-2xl leading-relaxed">
              Explore the autonomous tools and neural infrastructure powering the future of human-AI collaboration.
           </p>
        </div>

        {/* Product Grid - Centered for single product */}
        <div className="flex justify-center max-w-2xl mx-auto">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group p-10 rounded-[3.5rem] bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 hover:border-[#7C3AED]/30 transition-all duration-700 overflow-hidden relative ${!product.live ? "grayscale opacity-60" : ""}`}
            >
              {/* Product Visual */}
              <div className="w-20 h-20 rounded-3xl bg-white dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                 {product.image ? (
                   <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                 ) : (
                   <div className="text-[#7C3AED]"><Sparkles /></div>
                 )}
              </div>

              <div className="flex flex-col gap-4">
                 <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#7C3AED] font-mono">{product.tagline}</span>
                    {!product.live && <span className="px-3 py-1 rounded-full text-[8px] font-black uppercase bg-black/10 dark:bg-white/10 tracking-widest">Dev Protocol</span>}
                 </div>
                 <h3 className="text-3xl font-bold tracking-tight group-hover:text-[#7C3AED] transition-colors">{product.name}</h3>
                 <p className="text-sm font-light text-black/50 dark:text-white/50 leading-relaxed mb-8">{product.description}</p>
                 
                 {product.live ? (
                    <Link 
                      href={product.href}
                      className="mt-auto inline-flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-black uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all shadow-lg"
                    >
                      Initialize Link <ArrowRight className="w-4 h-4" />
                    </Link>
                 ) : (
                    <div className="mt-auto w-full py-4 text-center text-[10px] font-black uppercase tracking-[0.3em] opacity-30 italic">
                       Authentication Required
                    </div>
                 )}
              </div>

              {/* Decorative Orb */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#7C3AED] opacity-0 group-hover:opacity-[0.05] transition-opacity blur-[50px] rounded-full pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </main>
  );
}
