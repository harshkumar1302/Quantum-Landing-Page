"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const TELEMETRY_DATA = [
  "SYSC_CORE_BOOT_INIT...",
  "QL_INIT_VECTOR_LOADED",
  "NEURAL_PATH_SYNC_COMPLETE",
  "MEM_MAP_CHECK_0x8F92",
  "QUANTUM_STATE_LDR_v1.0.4",
  "AUTH_TOKEN_GEN_SUCCESS",
  "DEEP_SPACE_MESH_ACTIVE",
  "ZENITH_DRIVE_READY",
  "FOCUS_RING_ALIGNMENT...",
  "ENCRYPT_LAYER_0_STABLE",
];

export function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const duration = 4800; 

  // Connecting Qubits Mesh (Canvas)
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const particles: any[] = [];
    const count = 80; // Reduced for mesh performance

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5,
        opacity: Math.random() * 0.4,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const speedFactor = 1 + Math.pow(progress / 100, 2) * 5;

      particles.forEach((p, i) => {
        p.x += p.vx * speedFactor;
        p.y += p.vy * speedFactor;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw Connections (Mesh)
        for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < 100) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - dist / 100) * 0.08})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        }

        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(draw);
    };
    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, [progress]);

  // Liquid Progress Synchronizer
  useEffect(() => {
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const rawProgress = Math.min(elapsed / duration, 1);
      const eased = rawProgress < 0.5
        ? 4 * rawProgress * rawProgress * rawProgress
        : 1 - Math.pow(-2 * rawProgress + 2, 3) / 2;
      
      setProgress(Math.round(eased * 100));
      if (rawProgress < 1) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setIsLoading(false), 800);
      }
    };
    requestAnimationFrame(tick);
  }, []);

  const title = "QUANTUMREALM";
  const subtitle = "AI LABS";

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.15, 
            filter: "blur(50px)",
            transition: { duration: 1.8, ease: [0.65, 0, 0.35, 1] }
          }}
          className="fixed inset-0 z-[99999] w-screen h-screen flex items-center justify-center overflow-hidden bg-black font-sans"
        >
          <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-40" />
          
          <div className="relative flex flex-col items-center justify-center text-center max-w-[80vw]">
            
            {/* Dual Filament Array (TOP) */}
            <div className="flex gap-[2px] mb-12 opacity-30">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ 
                            backgroundColor: progress >= (i + 1) * 5 ? "#ffffff" : "rgba(255,255,255,0.1)",
                            opacity: progress >= (i + 1) * 5 ? 1 : 0.2,
                        }}
                        className="w-[1px] md:w-[2px] h-3"
                    />
                ))}
            </div>

            <div className="relative p-12">
                {/* Micro-Crosshairs */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <motion.div animate={{ scale: [1, 0.95, 1] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute h-6 w-6 border-t border-l border-white top-0 left-0" />
                    <motion.div animate={{ scale: [1, 0.95, 1] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute h-6 w-6 border-t border-r border-white top-0 right-0" />
                    <motion.div animate={{ scale: [1, 0.95, 1] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute h-6 w-6 border-b border-l border-white bottom-0 left-0" />
                    <motion.div animate={{ scale: [1, 0.95, 1] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute h-6 w-6 border-b border-r border-white bottom-0 right-0" />
                </div>

                {/* Cinematic Logo Reveal */}
                <div className="flex tracking-[-0.08em] relative">
                    {title.split("").map((letter, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.6, filter: "blur(20px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            transition={{ 
                                delay: 0.8 + i * 0.08, 
                                duration: 1.8, 
                                ease: [0.16, 1, 0.3, 1] 
                            }}
                            className="text-4xl md:text-8xl font-black text-white px-[2px]"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0, letterSpacing: "1.2em" }}
                    animate={{ opacity: 0.4, letterSpacing: "0.8em" }}
                    transition={{ delay: 2.5, duration: 1.5 }}
                    className="mt-6 text-[10px] md:text-sm font-light text-white uppercase tracking-[1em]"
                >
                    {subtitle}
                </motion.div>
            </div>

            {/* Technical HUD Layout */}
            <div className="mt-12 flex flex-col items-center w-full max-w-[400px]">
                
                 {/* Dual Filament Array (BOTTOM) */}
                <div className="flex gap-[2px] mb-10 opacity-30">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{ 
                                backgroundColor: progress >= (i + 1) * 5 ? "#ffffff" : "rgba(255,255,255,0.1)",
                                opacity: progress >= (i + 1) * 5 ? 1 : 0.2,
                            }}
                            className="w-[1px] md:w-[2px] h-3"
                        />
                    ))}
                </div>

                {/* Vertical Telemetry Stream */}
                <div className="h-10 overflow-hidden relative w-full flex flex-col items-center border-x border-white/5 px-8">
                    <motion.div
                        animate={{ y: ["0%", "-100%"] }}
                        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                        className="flex flex-col gap-2 items-center"
                    >
                        {[...TELEMETRY_DATA, ...TELEMETRY_DATA].map((line, i) => (
                            <span key={i} className="text-[8px] font-mono tracking-[0.4em] text-white/20 whitespace-nowrap uppercase">
                                {line}
                            </span>
                        ))}
                    </motion.div>
                    
                    {/* Focus Label */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] flex items-center justify-center">
                        <div className="flex items-center gap-6">
                            <span className="text-[9px] font-mono text-white/40 tracking-[0.6em]">SYS_READY_AT</span>
                            <span className="text-[11px] font-mono text-white font-bold tabular-nums">00.00.{progress.toString().padStart(2, "0")}</span>
                        </div>
                    </div>
                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.15 }}
                    className="mt-6 text-[8px] font-mono tracking-[0.2em] text-white/50 uppercase"
                >
                    &copy; 2026 QuantumRealm AI Labs // Core Initialization Sequence
                </motion.div>
            </div>
          </div>

          {/* Cinematic Overlay Grain */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
            style={{ 
                backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
                backgroundSize: "220px 220px" 
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
