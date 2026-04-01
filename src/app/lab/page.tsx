"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Search, X } from "lucide-react";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Logs");

  const posts = [
    {
      title: "Why Most Creator 'Operating Systems' Fail",
      excerpt: "The gap between simple tool-kits and true intelligence is where most products disappear. We examine the fundamental shift required to build for the 10M+ creator economy.",
      date: "Oct 12, 2025",
      readTime: "4 min read",
      category: "Intelligence",
      slug: "why-most-creator-os-fail",
      image: "linear-gradient(135deg, var(--color-primary) 0%, transparent 100%)"
    },
    {
      title: "Engineering the Creonnect DM Engine for 10M+ Events",
      excerpt: "Scaling sub-millisecond contextual routing across a distributed network of 50,000+ high-traffic creators. A technical breakdown of the Quantum Engine infrastructure.",
      date: "Nov 05, 2025",
      readTime: "8 min read",
      category: "Infrastructure",
      slug: "scaling-dm-engine",
      image: "linear-gradient(135deg, #3b82f6 0%, transparent 100%)"
    },
    {
      title: "Automating Instagram Growth: What the Data Shows",
      excerpt: "A longitudinal study of 1M daily interactions and how predictive behavioral models outperform manual community management by 400%.",
      date: "Dec 18, 2025",
      readTime: "6 min read",
      category: "Analytics",
      slug: "instagram-growth-data",
      image: "linear-gradient(135deg, #a855f7 0%, transparent 100%)"
    },
    {
       title: "The Ethics of Agentic Systems at Scale",
       excerpt: "As AI begins to act on behalf of humans in high-stakes social interactions, how do we build the guardrails for trust and authenticity?",
       date: "Jan 10, 2026",
       readTime: "12 min read",
       category: "Ethics",
       slug: "ethics-agentic-systems",
       image: "linear-gradient(135deg, #10b981 0%, transparent 100%)"
    }
  ];

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All Logs" || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const categories = ["All Logs", "Infrastructure", "Intelligence", "Analytics", "Ethics", "Product"];

  return (
    <main className="min-h-screen bg-background text-foreground pt-52 pb-24 px-4 md:px-8 transition-colors duration-500 dark:cursor-none" data-torch-color="#7C3AED">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-foreground/5 pb-12">
           <div className="max-w-3xl">
              <span className="text-primary font-mono text-xs uppercase tracking-[0.4em] mb-6 block">The Lab Logs</span>
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-8">
                 Intelligence <br />
                 <span className="text-transparent border-text">Archives</span>
              </h1>
              <p className="text-xl text-muted font-light max-w-xl">
                 Technical research and insights from the edge of AI and creator infrastructure.
              </p>
           </div>
           
           <div className="relative group w-full md:w-80">
              <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${searchQuery ? "text-primary" : "text-muted/50 group-focus-within:text-primary"}`} />
              <input 
                type="text" 
                placeholder="search logs..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-foreground/5 border border-foreground/10 rounded-full pl-12 pr-12 py-4 text-sm focus:outline-none focus:border-primary/50 w-full transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-foreground/10 rounded-full transition-colors"
                >
                  <X className="w-3 h-3 text-muted" />
                </button>
              )}
           </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 mb-16">
           {categories.map((cat, i) => (
              <button 
                key={i} 
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full border text-[10px] uppercase font-black tracking-widest transition-all duration-300 ${activeCategory === cat ? "bg-foreground text-background border-foreground shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)]" : "border-foreground/10 text-muted hover:border-foreground/30 hover:text-foreground"}`}
              >
                 {cat}
              </button>
           ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-12 relative min-h-[400px]">
           <AnimatePresence mode="popLayout">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post, i) => (
                  <motion.article
                     key={post.slug}
                     layout
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.9 }}
                     transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                     className="group flex flex-col relative"
                  >
                     <Link href={`/lab/${post.slug}`} className="absolute inset-0 z-20 dark:cursor-none" />
                     
                     <div className="aspect-[16/9] w-full rounded-[40px] overflow-hidden bg-foreground/[0.02] border border-foreground/10 mb-8 relative group-hover:border-primary/30 transition-all duration-700">
                        <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110 opacity-10" style={{ background: post.image }} />
                        <div className="absolute inset-0 bg-background/40 group-hover:bg-transparent transition-colors duration-700" />
                        <div className="absolute top-8 left-8">
                           <span className="px-4 py-1.5 rounded-full bg-background/80 backdrop-blur-xl border border-foreground/10 text-[10px] font-black uppercase tracking-widest text-primary">
                              {post.category}
                           </span>
                        </div>
                     </div>

                     <div className="flex flex-col flex-1">
                        <div className="flex items-center gap-4 mb-6 text-[10px] font-mono text-muted uppercase tracking-[0.2em]">
                           <span>{post.date}</span>
                           <span className="w-1 h-1 rounded-full bg-foreground/20" />
                           <span>{post.readTime}</span>
                        </div>
                        
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 group-hover:text-primary transition-colors leading-tight">
                           {post.title}
                        </h2>
                        
                        <p className="text-muted font-light leading-relaxed mb-8 line-clamp-2">
                           {post.excerpt}
                        </p>
                        
                        <div className="mt-auto flex items-center gap-3 text-xs font-black uppercase tracking-widest text-muted group-hover:text-foreground transition-colors">
                           Read Log <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                        </div>
                     </div>
                  </motion.article>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full py-40 text-center"
                >
                  <p className="text-4xl font-black text-muted/20 uppercase tracking-tighter">No Logs Found</p>
                  <button 
                    onClick={() => { setSearchQuery(""); setActiveCategory("All Logs"); }}
                    className="mt-6 text-xs font-black uppercase tracking-widest text-primary hover:underline"
                  >
                    Reset Filters
                  </button>
                </motion.div>
              )}
           </AnimatePresence>
        </motion.div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .border-text {
          -webkit-text-stroke: 1px var(--foreground);
          color: transparent;
        }
      `}} />
    </main>
  );
}
