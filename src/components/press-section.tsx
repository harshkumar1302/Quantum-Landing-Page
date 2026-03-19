"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck, Cpu, Code2 } from "lucide-react";

export function PressSection() {
  const testimonials = [
    { text: "Creonnect completely changed how I manage my DMs and capture leads. It's like having a full-time assistant that actually works 24/7. My sales went up 40% in two weeks.", author: "Aaditya S.", followers: "1M+", handle: "@aaditya_creates" },
    { text: "The AI analysis helps me understand exactly what my audience wants before I post. Incredible tool. The hook scoring is scary accurate.", author: "Neha K.", followers: "500K+", handle: "@neha_vlogs" }
  ];

  const badges = [
    { icon: <Cpu className="w-5 h-5 text-blue-500" />, text: "Built on Meta's Official API" },
    { icon: <span className="text-lg">🇮🇳</span>, text: "Made in India" },
    { icon: <ShieldCheck className="w-5 h-5 text-green-500" />, text: "Data Encrypted at Rest & Transit" },
    { icon: <Code2 className="w-5 h-5 text-purple-500" />, text: "SOC 2 Type II Compliant" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Backed By People Who <span className="text-primary">Believe in Creators</span>
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-lg text-foreground/60 max-w-2xl mx-auto"
          >
             Trusted by 10,000+ creators across India powering their businesses with QuantumRealm.
          </motion.p>
        </div>

        {/* Testimonials */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 max-w-5xl mx-auto mb-20">
          {testimonials.map((t, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="flex-1 w-full p-8 md:p-10 rounded-3xl bg-foreground/[0.03] border border-foreground/10 hover:border-foreground/20 transition-colors"
            >
               <div className="flex space-x-1 text-yellow-500 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
               </div>
               <p className="text-foreground/80 font-medium text-lg mb-8 leading-relaxed">
                  "{t.text}"
               </p>
               <div className="flex flex-col mt-auto pt-6 border-t border-foreground/10">
                 <span className="font-bold text-foreground">{t.author} <span className="text-foreground/40 font-normal ml-1">{t.handle}</span></span>
                 <span className="text-xs text-foreground/50 font-mono tracking-widest mt-1">{t.followers} Followers</span>
               </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3 }}
           className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
           {badges.map((badge, i) => (
              <div key={i} className="flex items-center space-x-3 bg-foreground/5 px-6 py-3 rounded-full border border-foreground/10">
                 {badge.icon}
                 <span className="text-sm font-semibold text-foreground/80">{badge.text}</span>
              </div>
           ))}
        </motion.div>

      </div>
    </section>
  );
}
