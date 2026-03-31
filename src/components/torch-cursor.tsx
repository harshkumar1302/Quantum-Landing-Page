"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { useTheme } from "next-themes";

export function TorchCursor() {
  const { theme } = useTheme();
  
  // ALL States and Hooks at the ABSOLUTE TOP level
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverColor, setHoverColor] = useState("#000000"); // Standard black for light mode
  const [isInvertedSection, setIsInvertedSection] = useState(false);
  const [hoverRect, setHoverRect] = useState<{ x: number, y: number, w: number, h: number } | null>(null);

  // Tracking Current Element
  const currentElement = useRef<HTMLElement | null>(null);

  // Core tracking
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Core Pulse Springs
  const xCore = useSpring(mouseX, { stiffness: 600, damping: 50 });
  const yCore = useSpring(mouseY, { stiffness: 600, damping: 50 });

  // P1-P4 Independent Movement Engines (Motion Values)
  const p1tx = useMotionValue(-1000); const p1ty = useMotionValue(-1000);
  const p2tx = useMotionValue(-1000); const p2ty = useMotionValue(-1000);
  const p3tx = useMotionValue(-1000); const p3ty = useMotionValue(-1000);
  const p4tx = useMotionValue(-1000); const p4ty = useMotionValue(-1000);

  // P1-P4 Springs (Individually tuned for fluid swarming)
  const x1 = useSpring(p1tx, { stiffness: 150, damping: 25 }); const y1 = useSpring(p1ty, { stiffness: 150, damping: 25 });
  const x2 = useSpring(p2tx, { stiffness: 120, damping: 20 }); const y2 = useSpring(p2ty, { stiffness: 120, damping: 20 });
  const x3 = useSpring(p3tx, { stiffness: 170, damping: 30 }); const y3 = useSpring(p3ty, { stiffness: 170, damping: 30 });
  const x4 = useSpring(p4tx, { stiffness: 130, damping: 22 }); const y4 = useSpring(p4ty, { stiffness: 130, damping: 22 });

  // Hook Order Guarantee: Define templates before any conditional logic
  const centerAlpha = isHovering ? "3A" : "00";
  const midAlpha = isHovering ? "1A" : "00";
  const additiveGlow = useMotionTemplate`radial-gradient(circle at ${xCore}px ${yCore}px, ${hoverColor}${centerAlpha} 0%, ${hoverColor}${midAlpha} 30%, transparent 70%)`;

  useEffect(() => {
    setMounted(true);
  }, []);

  // --- SWARM DYNAMICS ENGINE ---
  useEffect(() => {
    if (typeof window === "undefined" || window.matchMedia("(max-width: 1024px)").matches) return;

    const updateSwarmTargets = (rect: DOMRect) => {
      // THRESHOLD: Buttons and small links get a center "Swell". 
      // Large cards and sections get a corner "Snap".
      const isCard = rect.width > 280 || rect.height > 120;
      
      if (!isCard) {
         // SWELL: All particles target the center for a dense, focused look on small hits
         const centerX = rect.left + rect.width / 2;
         const centerY = rect.top + rect.height / 2;
         p1tx.set(centerX); p1ty.set(centerY);
         p2tx.set(centerX); p2ty.set(centerY);
         p3tx.set(centerX); p3ty.set(centerY);
         p4tx.set(centerX); p4ty.set(centerY);
      } else {
         // SNAP: Particles fly to the 4 corners for high-end structure on cards
         const padding = 2; // Slight inward offset for better visual alignment
         p1tx.set(rect.left + padding);   p1ty.set(rect.top + padding);
         p2tx.set(rect.right - padding);  p2ty.set(rect.top + padding);
         p3tx.set(rect.right - padding);  p3ty.set(rect.bottom - padding);
         p4tx.set(rect.left + padding);   p4ty.set(rect.bottom - padding);
      }
    };

    const manageMouseMove = (e: MouseEvent) => {
      const { clientX: cx, clientY: cy } = e;
      mouseX.set(cx);
      mouseY.set(cy);

      if (isHovering && currentElement.current) {
        const rect = currentElement.current.getBoundingClientRect();
        
        // SAFETY EXIT: If mouse somehow drifts out without triggering mouseover/out
        const buffer = 10;
        if (cx < rect.left - buffer || cx > rect.right + buffer || cy < rect.top - buffer || cy > rect.bottom + buffer) {
           setIsHovering(false);
           currentElement.current = null;
        } else {
           updateSwarmTargets(rect);
        }
      } else if (!isHovering) {
        // SWARM CLUSTER: Natural orbiting noise
        p1tx.set(cx - 10); p1ty.set(cy - 8);
        p2tx.set(cx + 12); p2ty.set(cy - 5);
        p3tx.set(cx + 8);  p3ty.set(cy + 10);
        p4tx.set(cx - 14); p4ty.set(cy + 4);
      }
    };

    const manageMouseOver = (e: MouseEvent) => {
      // Find the nearest interactive element even if target is a text node / icon
      const target = e.target as Node;
      const el = target instanceof Element ? target : target.parentElement;
      if (!el) return;

      const interactiveTarget = el.closest('a, button, [role="button"], [data-torch-color]') as HTMLElement;
      
      if (interactiveTarget) {
        setIsHovering(true);
        currentElement.current = interactiveTarget;
        const rect = interactiveTarget.getBoundingClientRect();
        const color = interactiveTarget.getAttribute("data-torch-color") || "#7C3AED"; 
        
        setHoverColor(color);
        updateSwarmTargets(rect);
      } else {
        setIsHovering(false);
        currentElement.current = null;
      }

      // Detect background theme flip
      const invertedTarget = el.closest('[data-theme-section="inverted"]');
      setIsInvertedSection(!!invertedTarget);
    };

    const handleScroll = () => {
      if (isHovering && currentElement.current) {
        const rect = currentElement.current.getBoundingClientRect();
        updateSwarmTargets(rect);
      }
    };

    window.addEventListener("mousemove", manageMouseMove);
    document.addEventListener("mouseover", manageMouseOver);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      document.removeEventListener("mouseover", manageMouseOver);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHovering, mouseX, mouseY, theme]);

  // NEVER return null early to ensure Hook consistency across hydration
  if (!mounted) return null;

  const isPhysicallyLight = (theme === "light" && !isInvertedSection) || (theme === "dark" && isInvertedSection);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none hidden lg:block z-[9999] overflow-hidden">
      {isPhysicallyLight ? (
        // --- THE QUANTUM SWARM (Light Mode / White Sections) ---
        <>
          {/* Central Quantum Core (Only visible when not hovering) */}
          <motion.div style={{ x: xCore, y: yCore }} className="absolute top-0 left-0">
             <motion.div 
               animate={{ scale: isHovering ? 0 : 1 }}
               className="w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2 bg-black dark:bg-white" 
             />
          </motion.div>

          {/* Atomic Particle Swarm (Velocity Trailing) */}
          {[
            { x: x1, y: y1 }, { x: x2, y: y2 }, 
            { x: x3, y: y3 }, { x: x4, y: y4 }
          ].map((p, i) => (
            <motion.div key={i} style={{ x: p.x, y: p.y }} className="absolute top-0 left-0">
               <motion.div
                 animate={{
                    width: isHovering ? 6 : 4,
                    height: isHovering ? 6 : 4,
                    // Use explicit rgba to ensure smooth animation frames
                    backgroundColor: isHovering ? `${hoverColor}ff` : "rgba(0,0,0,0)",
                    border: isHovering ? `1.5px solid ${hoverColor}ff` : "1px solid rgba(0,0,0,0)",
                    opacity: isHovering ? 1 : 0,
                    scale: isHovering ? 1 : 0
                 }}
                 transition={{ duration: 0.2 }}
                 className="rounded-full -translate-x-1/2 -translate-y-1/2"
               />
            </motion.div>
          ))}
        </>
      ) : (
        // --- THE FLASHLIGHT (Dark Mode / Black Sections) ---
        <motion.div
          animate={{ opacity: isHovering ? 1 : 0 }}
          style={{ background: additiveGlow }}
          className="absolute inset-0 w-full h-full mix-blend-plus-lighter dark:mix-blend-screen"
        />
      )}
    </div>
  );
}
