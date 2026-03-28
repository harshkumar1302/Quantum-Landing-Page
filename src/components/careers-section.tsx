"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CareersSection() {
  const roles = [
    { title: "UI Engineer Intern", dept: "Engineering" },
    { title: "Social Media Creator", dept: "Marketing" }
  ];

  return (
    <section className="py-24 bg-[#0A0A1F] text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-white/10 p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
          
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/30 rounded-full blur-[100px]" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />

          <div className="flex-1 relative z-10 w-full text-center md:text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            >
              Come Build the Future with Us
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/70 max-w-lg mb-8 mx-auto md:mx-0"
            >
              We're looking for relentless builders who want to shape how millions of creators work, earn, and grow. If you write code that matters, design experiences that convert, or build AI that understands people — we want to talk.
            </motion.p>
            
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
               {roles.map((role, i) => (
                  <Link 
                     key={i} 
                     href={`/careers#${role.title.replace(/\s+/g, '-').toLowerCase()}`}
                     className="px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-primary/20 hover:border-primary/50 transition-colors text-sm font-medium flex items-center space-x-2"
                  >
                     <span>{role.title}</span>
                  </Link>
               ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <Link
                href="/careers"
                className="inline-flex items-center justify-center space-x-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10 transition-all duration-300"
              >
                <span>View All Roles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="text-sm text-white/50 block">
                 Don't see your role? Send your portfolio → <a href="mailto:hello@quantumrealm.cloud" className="text-primary hover:underline">hello@quantumrealm.cloud</a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
