"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Zap } from "lucide-react";

export default function CareersPage() {
  const jobs = [
    {
       title: "Neural Network Architect",
       department: "Intelligence Lab",
       location: "Remote / Bengaluru",
       level: "Senior / Staff",
       type: "Full-time"
    },
    {
       title: "Distributed Systems Engineer",
       department: "Infrastructure",
       location: "Remote",
       level: "Senior",
       type: "Full-time"
    },
    {
       title: "Generative UI Designer",
       department: "Design Lab",
       location: "Remote / Mumbai",
       level: "Lead",
       type: "Contract / Full-time"
    }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-24 px-4 md:px-8 transition-colors duration-500">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-24 flex flex-col gap-8 border-b border-foreground/5 pb-20">
           <span className="text-primary font-mono text-xs uppercase tracking-[0.4em] mb-2 block">Personnel Acquisition</span>
           <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8]">
              Join the <br />
              <span className="text-transparent border-text">Collective</span>
           </h1>
           <p className="text-xl text-muted font-light max-w-2xl leading-relaxed">
              We are looking for exceptional minds who thrive in the intersection of chaos and absolute engineering precision.
           </p>
        </div>

        {/* Jobs List */}
        <div className="space-y-6">
           {jobs.map((job, i) => (
             <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col md:flex-row md:items-center justify-between p-10 md:p-12 rounded-[40px] bg-foreground/[0.01] border border-foreground/5 hover:bg-foreground/[0.02] hover:border-foreground/20 transition-all duration-700 cursor-pointer"
             >
                <div className="flex flex-col gap-4">
                   <div className="flex items-center gap-4">
                      <span className="text-primary"><Zap className="w-4 h-4 fill-primary" /></span>
                      <h2 className="text-3xl font-bold tracking-tight text-foreground/90 group-hover:text-primary transition-colors">{job.title}</h2>
                   </div>
                   <div className="flex flex-wrap gap-4 text-[10px] font-mono uppercase tracking-[0.2em] text-muted">
                      <span>{job.department}</span>
                      <span className="flex items-center gap-2"><MapPin className="w-3 h-3" /> {job.location}</span>
                      <span>{job.level}</span>
                   </div>
                </div>

                <div className="mt-8 md:mt-0 flex items-center gap-6">
                   <span className="text-xs font-black uppercase tracking-widest text-muted group-hover:text-primary transition-colors">Apply for Cycle</span>
                   <div className="w-16 h-16 rounded-full border border-foreground/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all">
                      <ArrowRight className="w-6 h-6 group-hover:text-background transition-colors" />
                   </div>
                </div>
             </motion.div>
           ))}
        </div>

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
