"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Check if loader has already played in this session
    const hasPlayed = sessionStorage.getItem("quantum-loader-played");
    if (hasPlayed) {
      setIsFirstLoad(false);
      setIsLoading(false);
      return;
    }

    sessionStorage.setItem("quantum-loader-played", "true");

    // Smooth progress counter that accelerates
    const start = Date.now();
    const duration = 2400;
    const tick = () => {
      const elapsed = Date.now() - start;
      const raw = Math.min(elapsed / duration, 1);
      // Ease-in-out curve for natural feel
      const eased = raw < 0.5
        ? 4 * raw * raw * raw
        : 1 - Math.pow(-2 * raw + 2, 3) / 2;
      setProgress(Math.round(eased * 100));
      if (raw < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    const timer = setTimeout(() => setIsLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  if (!isFirstLoad) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02, filter: "blur(12px)" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          {/* Ambient background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              transition={{ duration: 1.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
              style={{
                background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
              }}
            />
          </div>

          {/* Subtle grid pattern */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.03 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, black 30%, transparent 100%)",
            }}
          />

          <div className="relative flex flex-col items-center justify-center">
            {/* Orbital System */}
            <div className="relative flex items-center justify-center w-36 h-36 mb-10">
              
              {/* Outermost ring — slow clockwise */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1, rotate: 360 }}
                transition={{
                  opacity: { duration: 0.8 },
                  scale: { duration: 0.8, ease: "easeOut" },
                  rotate: { repeat: Infinity, duration: 12, ease: "linear" },
                }}
                className="absolute inset-0 rounded-full"
                style={{
                  border: "1px solid color-mix(in srgb, var(--primary) 15%, transparent)",
                }}
              />

              {/* Middle ring — counter-clockwise, dashed */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1, rotate: -360 }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.15 },
                  scale: { duration: 0.8, delay: 0.15, ease: "easeOut" },
                  rotate: { repeat: Infinity, duration: 8, ease: "linear" },
                }}
                className="absolute inset-3 rounded-full"
                style={{
                  border: "1px dashed color-mix(in srgb, var(--primary) 25%, transparent)",
                }}
              />

              {/* Inner ring — fastest, solid accent */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1, rotate: 360 }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.3 },
                  scale: { duration: 0.8, delay: 0.3, ease: "easeOut" },
                  rotate: { repeat: Infinity, duration: 5, ease: "linear" },
                }}
                className="absolute inset-7 rounded-full"
                style={{
                  borderTop: "1.5px solid var(--primary)",
                  borderRight: "1.5px solid color-mix(in srgb, var(--primary) 40%, transparent)",
                  borderBottom: "1.5px solid transparent",
                  borderLeft: "1.5px solid transparent",
                }}
              />

              {/* Orbiting particle — traces the outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="absolute inset-0"
              >
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                  style={{
                    background: "var(--primary)",
                    boxShadow: "0 0 8px var(--primary), 0 0 20px color-mix(in srgb, var(--primary) 50%, transparent)",
                  }}
                />
              </motion.div>

              {/* Second orbiting particle — opposite direction */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "linear" }}
                className="absolute inset-3"
              >
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1 h-1 rounded-full"
                  style={{
                    background: "var(--primary)",
                    boxShadow: "0 0 6px var(--primary)",
                    opacity: 0.6,
                  }}
                />
              </motion.div>

              {/* Core nucleus — pulsing center */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                className="relative z-10"
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px color-mix(in srgb, var(--primary) 30%, transparent), 0 0 60px color-mix(in srgb, var(--primary) 10%, transparent)",
                      "0 0 30px color-mix(in srgb, var(--primary) 50%, transparent), 0 0 80px color-mix(in srgb, var(--primary) 20%, transparent)",
                      "0 0 20px color-mix(in srgb, var(--primary) 30%, transparent), 0 0 60px color-mix(in srgb, var(--primary) 10%, transparent)",
                    ],
                  }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  className="w-5 h-5 rounded-full"
                  style={{
                    background: `radial-gradient(circle at 35% 35%, color-mix(in srgb, var(--primary) 80%, white), var(--primary))`,
                  }}
                />
              </motion.div>
            </div>

            {/* Brand wordmark */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
              className="flex items-baseline gap-1.5 select-none"
            >
              <span className="text-2xl font-black font-sans tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-black to-black/60 dark:from-white dark:to-white/60">
                QUANTUMREALM
              </span>
              <span className="text-[13px] font-light font-sans text-black/40 dark:text-white/40 uppercase tracking-[0.2em] whitespace-nowrap">
                AI LABS
              </span>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 160 }}
              transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
              className="mt-6 h-[1px] rounded-full overflow-hidden"
              style={{ background: "color-mix(in srgb, var(--foreground) 8%, transparent)" }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background: `linear-gradient(90deg, var(--primary), color-mix(in srgb, var(--primary) 60%, white))`,
                  transition: "width 0.1s linear",
                }}
              />
            </motion.div>

            {/* Status text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="mt-3 text-[10px] font-mono uppercase tracking-[0.3em]"
              style={{ color: "var(--foreground)" }}
            >
              {progress < 100 ? "Initializing" : "Ready"}
            </motion.p>
          </div>

          {/* Corner accents */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="absolute top-8 left-8 w-16 h-16"
          >
            <div className="absolute top-0 left-0 w-full h-[1px]" style={{ background: "var(--foreground)" }} />
            <div className="absolute top-0 left-0 h-full w-[1px]" style={{ background: "var(--foreground)" }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="absolute bottom-8 right-8 w-16 h-16"
          >
            <div className="absolute bottom-0 right-0 w-full h-[1px]" style={{ background: "var(--foreground)" }} />
            <div className="absolute bottom-0 right-0 h-full w-[1px]" style={{ background: "var(--foreground)" }} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
