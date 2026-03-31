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
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="fixed top-24 left-4 sm:left-8 z-[60] pointer-events-auto"
      >
        <Link 
          href="/" 
          className="group flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur-md text-black dark:text-white hover:bg-white dark:hover:bg-black hover:border-primary/30 transition-all shadow-sm"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Back to Home</span>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}
