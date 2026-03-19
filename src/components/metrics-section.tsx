"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

function AnimatedCounter({ from, to, duration = 2, suffix = "" }: { from: number, to: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(from);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeProgress * (to - from) + from));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(to);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  // Adjust display for "K" and "M" formats
  const displayVal = count >= 1000000 
    ? (count / 1000000) + "M" 
    : count >= 1000 ? (count / 1000) + "K" : count;

  return <span ref={nodeRef}>{displayVal}{suffix}</span>;
}

export function MetricsSection() {
  const metrics = [
    { label: "Products Live", value: 1, suffix: "", duration: 1, link: "/products" },
    { label: "Products in R&D", value: 2, suffix: "", duration: 1.5, tooltip: "We're always building", link: null },
    { label: "Creators on Waitlist", value: 10000, suffix: "+", duration: 2.5, link: "https://creonnect.com" },
    { label: "Team Members", value: 15, suffix: "+", duration: 1.5, link: "/team" },
    { label: "Lines of Code Shipped", value: 200000, suffix: "+", duration: 3, link: null },
    { label: "AI Models in Production", value: 4, suffix: "", duration: 1, tooltip: "NLP, Vision, Time-Series, Scoring", link: null },
    { label: "API Calls Processed / Mo", value: 1000000, suffix: "+", duration: 2.5, link: null },
    { label: "Open Roles", value: 3, suffix: "", duration: 1, link: "/careers" },
  ];

  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-background mb-4"
          >
            Building in Public
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-x-8 md:gap-y-12">
          {metrics.map((metric, index) => {
            
            const cardContent = (
              <>
                 <div className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-background to-background/50">
                   <AnimatedCounter from={0} to={metric.value} duration={metric.duration} suffix={metric.suffix} />
                 </div>
                 <div className="text-sm md:text-base font-medium text-background/70 leading-snug">
                   {metric.label}
                 </div>
                 
                 {metric.tooltip && (
                   <div className="mt-4 text-[10px] uppercase tracking-widest bg-background/10 text-background px-3 py-1 rounded-full font-bold group-hover:bg-background/20 transition-colors">
                      {metric.tooltip}
                   </div>
                 )}
              </>
            );

            const isExternalLink = metric.link?.startsWith('http');

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                {metric.link ? (
                   isExternalLink ? (
                      <a href={metric.link} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center text-center p-6 h-full hover:bg-background/5 rounded-3xl transition-colors relative cursor-pointer">
                         {cardContent}
                      </a>
                   ) : (
                      <Link href={metric.link} className="group flex flex-col items-center text-center p-6 h-full hover:bg-background/5 rounded-3xl transition-colors relative cursor-pointer">
                         {cardContent}
                      </Link>
                   )
                ) : (
                   <div className="group flex flex-col items-center text-center p-6 h-full relative">
                      {cardContent}
                   </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
