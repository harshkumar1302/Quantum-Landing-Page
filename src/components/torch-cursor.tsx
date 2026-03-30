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
  const centerAlpha = isHovering ? "3A" : "18";
  const midAlpha = isHovering ? "1A" : "08";
  const additiveGlow = useMotionTemplate`radial-gradient(circle at ${xCore}px ${yCore}px, ${hoverColor}${centerAlpha} 0%, ${hoverColor}${midAlpha} 30%, transparent 70%)`;

  useEffect(() => {
    setMounted(true);
  }, []);

  // --- SWARM DYNAMICS ENGINE ---
  useEffect(() => {
    if (typeof window === "undefined" || window.matchMedia("(max-width: 1024px)").matches) return;

    const manageMouseMove = (e: MouseEvent) => {
      const { clientX: cx, clientY: cy } = e;
      mouseX.set(cx);
      mouseY.set(cy);

      if (!isHovering) {
        // SWARM CLUSTER: Particles have slight noise/offsets to create a 3D cluster feel
        p1tx.set(cx - 10); p1ty.set(cy - 8);
        p2tx.set(cx + 12); p2ty.set(cy - 5);
        p3tx.set(cx + 8);  p3ty.set(cy + 10);
        p4tx.set(cx - 14); p4ty.set(cy + 4);
      }
    };

    const manageMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target?.closest) return;
      
      // Look for ANY interactive element
      const interactiveTarget = target.closest('a, button, [role="button"], [data-torch-color]') as HTMLElement;
      
      if (interactiveTarget) {
        setIsHovering(true);
        const rect = interactiveTarget.getBoundingClientRect();
        const color = interactiveTarget.getAttribute("data-torch-color") || "#7C3AED"; // Default to brand purple
        
        setHoverColor(color);
        setHoverRect({ x: rect.left, y: rect.top, w: rect.width, h: rect.height });

        // SIZE-AWARE REACTION: 
        // Large cards/sections get the Corner Snap. 
        // Small links/buttons get a high-density Centered Swell.
        const isSmallElement = rect.width < 120;
        
        if (isSmallElement) {
           // SWELL: All particles target the center with slight variety
           const centerX = rect.left + rect.width / 2;
           const centerY = rect.top + rect.height / 2;
           p1tx.set(centerX); p1ty.set(centerY);
           p2tx.set(centerX); p2ty.set(centerY);
           p3tx.set(centerX); p3ty.set(centerY);
           p4tx.set(centerX); p4ty.set(centerY);
        } else {
           // SNAP: Particles fly to the 4 boundary corners
           p1tx.set(rect.left);       p1ty.set(rect.top);
           p2tx.set(rect.right);      p2ty.set(rect.top);
           p3tx.set(rect.right);      p3ty.set(rect.bottom);
           p4tx.set(rect.left);       p4ty.set(rect.bottom);
        }
      } else {
        setIsHovering(false);
        setHoverRect(null);
      }

      // Detect background theme flip
      const invertedTarget = target.closest('[data-theme-section="inverted"]');
      setIsInvertedSection(!!invertedTarget);
    };

    window.addEventListener("mousemove", manageMouseMove);
    document.addEventListener("mouseover", manageMouseOver);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      document.removeEventListener("mouseover", manageMouseOver);
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
                    backgroundColor: isHovering ? `${hoverColor}ff` : "rgba(0,0,0,0.1)",
                    border: isHovering ? `1.5px solid ${hoverColor}ff` : "1px solid rgba(0,0,0,0.1)",
                    opacity: isHovering ? 1 : 0.6,
                    scale: 1
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
          style={{ background: additiveGlow }}
          className="absolute inset-0 w-full h-full mix-blend-plus-lighter dark:mix-blend-screen"
        />
      )}
    </div>
  );
}
