"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BlogSection() {
  const posts = [
    {
      title: "Why Most Creator 'Operating Systems' Fail",
      date: "Oct 12, 2025",
      readTime: "4 min read",
      category: "Intelligence",
      slug: "why-most-creator-os-fail",
      image: "linear-gradient(135deg, var(--color-primary) 0%, transparent 100%)"
    },
    {
      title: "Engineering the Creonnect DM Engine for 10M+ Events",
      date: "Nov 05, 2025",
      readTime: "8 min read",
      category: "Infrastructure",
      slug: "scaling-dm-engine",
      image: "linear-gradient(135deg, #3b82f6 0%, transparent 100%)"
    },
    {
      title: "Automating Instagram Growth: What the Data Shows",
      date: "Dec 18, 2025",
      readTime: "6 min read",
      category: "Analytics",
      slug: "instagram-growth-data",
      image: "linear-gradient(135deg, #a855f7 0%, transparent 100%)"
    }
  ];

  return (
    <section className="py-40 bg-background border-y border-foreground/5 relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--color-primary),transparent_50%)] opacity-[0.02]" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
           <div className="max-w-2xl">
              <span className="text-primary font-mono text-xs uppercase tracking-[0.3em] mb-6 block">Intelligence Logs</span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-light tracking-tighter mb-8 leading-tight"
              >
                From the <span className="font-black italic">Lab.</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-muted font-light leading-relaxed"
              >
                Deep dives into the architecture, intelligence layers, and predictive models powering the next era of creators.
              </motion.p>
           </div>
           
           <Link
             href="/lab"
             data-magnetic
             className="inline-flex items-center gap-4 text-foreground font-bold hover:text-primary transition-colors uppercase tracking-[0.2em] text-sm group"
           >
             Read All Logs <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
           </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           {posts.map((post, i) => (
             <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col rounded-[32px] overflow-hidden bg-foreground/[0.02] border border-foreground/10 hover:border-foreground/20 transition-all duration-500 cursor-pointer p-8 h-full"
             >
                <div className="absolute inset-0 bg-foreground/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10 flex flex-col h-full">
                   <div className="flex items-center justify-between mb-8">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-foreground/10 text-muted group-hover:text-primary group-hover:border-primary/30 transition-colors">
                         {post.category}
                      </span>
                      <span className="text-[10px] font-mono text-muted uppercase tracking-widest">{post.readTime}</span>
                   </div>
                   
                   <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors leading-tight text-foreground/90">
                      {post.title}
                   </h3>
                   
                   <div className="mt-auto pt-8 border-t border-foreground/5 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-muted uppercase tracking-[0.2em]">{post.date}</span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted group-hover:text-foreground flex items-center gap-2 transition-colors">
                         Read Log <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
}
