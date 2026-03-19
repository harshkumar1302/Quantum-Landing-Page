"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-background relative overflow-hidden">
      
      {/* Background Graphic */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
         <span className="text-[40vw] font-black tracking-tighter mix-blend-overlay">404</span>
      </div>

      <motion.div 
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         className="relative z-10 max-w-lg w-full"
      >
         <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8 relative">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
            <Search className="w-8 h-8 text-primary relative z-10" />
         </div>

         <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Signal Lost</h1>
         <p className="text-lg text-foreground/60 mb-10 leading-relaxed">
            We couldn't find the page you're looking for. It might have been moved, deleted, or perhaps never existed in this timeline.
         </p>

         <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
               href="/"
               className="inline-flex items-center justify-center space-x-2 bg-foreground text-background px-8 py-4 rounded-full font-bold hover:bg-foreground/90 transition-colors w-full sm:w-auto"
            >
               <ArrowLeft className="w-4 h-4" />
               <span>Return Home</span>
            </Link>
            <Link
               href="/contact"
               className="inline-flex items-center justify-center space-x-2 bg-background border border-foreground/20 text-foreground px-8 py-4 rounded-full font-bold hover:bg-foreground/5 transition-colors w-full sm:w-auto"
            >
               Contact Support
            </Link>
         </div>
      </motion.div>
    </div>
  );
}
