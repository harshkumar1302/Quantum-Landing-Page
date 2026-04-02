"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export function BackToHome() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const orbitalRef = useRef<HTMLDivElement>(null);
  
  // Magnetic Effect Logic
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouse = (e: React.MouseEvent) => {
    if (!orbitalRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = orbitalRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.4, y: y * 0.4 });
  };
  const resetPosition = () => setPosition({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const isHome = pathname === "/";
  if (!mounted || isHome) return null;

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, x: -20, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -20, scale: 0.9 }}
          className="fixed top-28 left-6 sm:left-12 z-[100] pointer-events-auto"
        >
          <Link href="/" className="block">
            <motion.div
              ref={orbitalRef}
              onMouseMove={handleMouse}
              onMouseLeave={resetPosition}
              animate={{ x: position.x, y: position.y }}
              transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
              className="group relative"
            >
              {/* THE ELITE TERMINAL CAPSULE */}
              <div className="relative flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 dark:bg-black/40 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-500 hover:border-primary/40 hover:shadow-primary/20 animate-float">
                
                {/* Floating Glow Pulse */}
                <div className="absolute inset-0 rounded-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
                
                {/* Icon Container */}
                <div className="w-8 h-8 rounded-full bg-white/10 dark:bg-white/5 flex items-center justify-center text-black dark:text-white group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                </div>
                
                {/* Minimal Label */}
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black dark:text-white opacity-40 group-hover:opacity-100 transition-all duration-500">
                   Back Hub
                </span>
                
                {/* Shimmer Line */}
                <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
                  <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
                </div>
              </div>

              {/* Dynamic Outer Glow */}
              <div className="absolute -inset-4 bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          </Link>
        </motion.div>
      </AnimatePresence>

      <style jsx global>{`
        @keyframes sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: sweep 3s infinite linear;
        }
        @keyframes floating {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-float {
          animation: floating 4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
