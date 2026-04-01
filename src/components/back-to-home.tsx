"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function BackToHome() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Show on any page except the homepage
  const isHome = pathname === "/";

  if (!mounted || isHome) return null;

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-24 left-4 sm:left-12 z-[100] pointer-events-auto"
        >
          <Link href="/" className="group relative block">
            {/* External Magnetic / Glow Layer */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 px-6 py-3 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-2xl border border-black/5 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.02)] transition-all duration-500 overflow-hidden group-hover:border-primary/30 group-hover:shadow-primary/10"
            >
              {/* Animated Background Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite_linear]" />
              
              <div className="relative z-10 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center border border-black/5 dark:border-white/5 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                </div>
                
                <div className="flex flex-col">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all duration-500 leading-none mb-1">Return Terminal</span>
                  <span className="text-[11px] font-black uppercase tracking-widest text-black dark:text-white leading-none">Back to Home</span>
                </div>
              </div>
            </motion.div>
            
            {/* Subtle Outer Drop Shadow */}
            <div className="absolute -inset-2 bg-primary/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </Link>
        </motion.div>
      </AnimatePresence>

      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </>
  );
}
