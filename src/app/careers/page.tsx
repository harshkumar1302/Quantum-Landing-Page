"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Zap } from "lucide-react";

export default function CareersPage() {
  const jobs = [
    {
       id: "CRE-CTR-001",
       title: "Content Creator",
       department: "Creative Collective",
       location: "Remote",
       level: "Mid-Senior",
       type: "Contract / Full-Time",
       color: "#EC4899"
    }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#000000] text-black dark:text-white pt-52 pb-24 px-4 md:px-8 transition-colors duration-500 overflow-hidden relative selection:bg-primary/30 selection:text-white" data-torch-light-disabled>
      
      {/* Premium Background Effects */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-[#7C3AED] opacity-[0.03] dark:opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="mb-24 flex flex-col items-center text-center gap-6 border-b border-black/5 dark:border-white/5 pb-24 dark:cursor-none" data-torch-color="#7C3AED">
            <motion.div 
             initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 mb-4 backdrop-blur-sm"
           >
             <div className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
             <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Personnel Acquisition</span>
           </motion.div>

           <h1 className="text-[4rem] sm:text-[6rem] md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] mb-8">
              Join the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#7C3AED] animate-gradient-x bg-[length:200%_auto]">Collective</span>
           </h1>
           <p className="text-lg md:text-2xl text-black/60 dark:text-white/60 font-light max-w-2xl leading-relaxed">
              We are looking for exceptional minds who thrive in the intersection of chaos and absolute engineering precision.
           </p>
        </div>

        {/* Jobs List */}
        <div className="space-y-6">
           {jobs.map((job, i) => (
             <Link key={job.id} href={`/careers/${job.id}`}>
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col md:flex-row md:items-center justify-between p-10 md:p-12 rounded-[40px] bg-black/[0.01] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:bg-black/[0.03] dark:hover:bg-white/[0.04] hover:border-[#7C3AED]/30 transition-all duration-700 dark:cursor-none relative overflow-hidden mb-6"
                  data-torch-color={job.color}
               >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/0 via-[#7C3AED]/5 to-[#7C3AED]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="flex flex-col gap-4 relative z-10">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center text-[#7C3AED] group-hover:scale-110 transition-transform duration-500">
                           <Zap className="w-5 h-5 fill-[#7C3AED]" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black/90 dark:text-white/90 group-hover:text-[#7C3AED] transition-colors">{job.title}</h2>
                     </div>
                     <div className="flex flex-wrap gap-4 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
                        <span className="px-3 py-1 rounded-full border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5">{job.department}</span>
                        <span className="flex items-center gap-2 px-3 py-1 rounded-full border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5"><MapPin className="w-3 h-3" /> {job.location}</span>
                        <span className="px-3 py-1 rounded-full border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5">{job.level}</span>
                     </div>
                  </div>

                  <div className="mt-8 md:mt-0 flex items-center gap-8 relative z-10">
                     <span className="text-xs font-black uppercase tracking-[0.2em] text-black/40 dark:text-white/40 group-hover:text-black dark:group-hover:text-white transition-colors">Apply for Cycle</span>
                     <div className="w-16 h-16 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:border-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:text-white transition-all duration-500 shadow-xl shadow-transparent group-hover:shadow-[#7C3AED]/20">
                        <ArrowRight className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1" />
                     </div>
                  </div>
               </motion.div>
             </Link>
           ))}
        </div>

      </div>

    </main>
  );
}
