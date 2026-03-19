"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown, MapPin, Zap } from "lucide-react";
import { useEffect, useState, useRef } from "react";

// Magnetic Button Wrapper
function MagneticButton({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.2); // Pull strength
    y.set(middleY * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseXSpring, y: mouseYSpring }}
      className={`relative inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

// Staggered Text Component
const AnimatedTitle = ({ text }: { text: string }) => {
  const words = text.split(" ");
  return (
    <span className="inline-flex flex-wrap justify-center gap-x-4 gap-y-2">
      {words.map((word, index) => (
        <span key={index} className="overflow-hidden inline-block">
          <motion.span
            initial={{ y: "100%", opacity: 0, rotate: 5 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1], // Custom Apple-like easing
              delay: index * 0.1,
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };
    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-[#05050A]">
      
      {/* Interactive Neural Mesh Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px]"
           animate={{
             x: mousePosition.x * 50,
             y: mousePosition.y * 50,
           }}
           transition={{ type: "spring", damping: 50, stiffness: 50 }}
        />
        <motion.div 
           className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]"
           animate={{
             x: mousePosition.x * -70,
             y: mousePosition.y * -30,
           }}
           transition={{ type: "spring", damping: 40, stiffness: 40 }}
        />
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <motion.div 
        style={{ y: y1, opacity }} 
        className="container relative z-10 mx-auto px-4 md:px-8 flex flex-col items-center text-center mt-20"
      >
        
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/80 text-xs font-semibold uppercase tracking-widest"
        >
           <Zap className="w-3 h-3 text-primary" />
           Quantum Engine Initialized
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[1.05] mb-8 max-w-5xl">
          <AnimatedTitle text="Engineering the Future of AI Infrastructure." />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-2xl text-white/60 mb-12 max-w-3xl leading-relaxed"
        >
          QuantumRealm is an AI research and product lab. We build the high-concurrency neural architectures that power the next generation of the internet ecosystem.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <MagneticButton>
            <Link
              href="#tech"
              className="inline-flex items-center justify-center space-x-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300"
            >
              <span>Explore Our Technology</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </MagneticButton>
          
          <MagneticButton>
            <Link
              href="/products"
              className="inline-flex items-center justify-center space-x-2 bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors"
            >
              <span>View Applications</span>
            </Link>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Abstract Foreground Elements (Parallaxed) */}
      <motion.div style={{ y: y2 }} className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#05050A] to-transparent pointer-events-none z-20" />

      {/* Scroll Indicator */}
      <motion.button 
         onClick={scrollToNext}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 2, duration: 1 }}
         className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/40 hover:text-white transition-colors z-30"
      >
         <span className="text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Engage</span>
         <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
         >
            <ChevronDown className="w-5 h-5" />
         </motion.div>
      </motion.button>

    </section>
  );
}
