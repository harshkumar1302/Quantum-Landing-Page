"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Linkedin } from "lucide-react";

export function TeamSection() {
  const team = [
    {
      name: "Sumanth",
      title: "Founder & CEO",
      bio: "Product builder obsessed with creator workflows. Formerly building enterprise AI systems.",
      linkedin: "https://linkedin.com/in/sumanth",
    },
    {
      name: "Aditya N.",
      title: "Co-Founder & CTO",
      bio: "Scaling infrastructure to 10M+ events/day. Previous engineering leadership at Meta.",
      linkedin: "https://linkedin.com/in/adityan",
    }
  ];

  return (
    <section className="py-24 bg-foreground/5 dark:bg-background border-t border-foreground/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            >
              The Minds Behind QuantumRealm
            </motion.h2>
          </div>
          <Link
             href="/team"
             className="inline-flex items-center space-x-2 font-semibold text-primary hover:text-primary/80 transition-colors"
          >
             <span>Meet the Full Team</span>
             <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="group"
             >
                <div className="aspect-square bg-foreground/10 rounded-3xl overflow-hidden mb-6 relative">
                   {/* Placeholder for real team photo */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-foreground/5 to-transparent flex items-center justify-center">
                      <span className="text-foreground/20 font-bold text-6xl group-hover:scale-110 transition-transform">{member.name[0]}</span>
                   </div>
                </div>
                <div className="flex justify-between items-start">
                   <div>
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-primary text-sm font-semibold mb-3">{member.title}</p>
                   </div>
                   <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-foreground/40 hover:text-[#0A66C2] transition-colors rounded-full bg-foreground/5">
                      <Linkedin className="w-4 h-4" />
                   </a>
                </div>
                <p className="text-sm text-foreground/60 leading-relaxed">{member.bio}</p>
             </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3 }}
           className="mt-16 text-center"
        >
           <p className="text-foreground/60 font-medium mb-6">And 15+ engineers, designers, and AI researchers</p>
           <Link
             href="/team"
             className="inline-flex items-center space-x-2 bg-foreground text-background px-6 py-3 rounded-full font-bold hover:bg-foreground/90 transition-colors"
           >
              <span>Meet the Full Team</span>
              <ArrowRight className="w-4 h-4" />
           </Link>
        </motion.div>
      </div>
    </section>
  );
}
