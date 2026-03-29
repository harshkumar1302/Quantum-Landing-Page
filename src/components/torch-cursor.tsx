"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useTheme } from "next-themes";

export function TorchCursor() {
  const { theme } = useTheme();
  // Provide generic safe defaults depending on the mode
  const defaultLightColor = "#a3a3a3";
  const defaultDarkColor = "#ffffff";
  
  const [color, setColor] = useState(defaultDarkColor);
  const [isHovering, setIsHovering] = useState(false);
  const [isInvertedSection, setIsInvertedSection] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Smooth, dynamic spring mechanics to "lag" slightly behind mouse like a heavy spotlight
  const x = useSpring(mouseX, { stiffness: 400, damping: 40 });
  const y = useSpring(mouseY, { stiffness: 400, damping: 40 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !isHovering) {
       setColor(theme === "light" ? defaultLightColor : defaultDarkColor);
    }
  }, [theme, mounted, isHovering]);

  useEffect(() => {
    // Only run on non-touch desktop screens
    if (typeof window === "undefined" || window.matchMedia("(max-width: 1024px)").matches) {
      return;
    }

    const manageMouseMove = (e: MouseEvent) => {
      // Offset slightly to be dead center of the cursor pointer
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const manageMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target || !target.closest) return;
      
      const torchTarget = target.closest("[data-torch-color]") as HTMLElement;
      
      if (torchTarget) {
        setIsHovering(true);
        const targetColor = torchTarget.getAttribute("data-torch-color");
        if (targetColor) {
           setColor(targetColor);
        }
      } else {
        setIsHovering(false);
        setColor(theme === "light" ? defaultLightColor : defaultDarkColor);
      }

      // Check for inverted physics block
      const invertedTarget = target.closest('[data-theme-section="inverted"]');
      if (invertedTarget) {
        setIsInvertedSection(true);
      } else {
        setIsInvertedSection(false);
      }
    };

    window.addEventListener("mousemove", manageMouseMove);
    document.addEventListener("mouseover", manageMouseOver);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      document.removeEventListener("mouseover", manageMouseOver);
    };
  }, [mouseX, mouseY, theme]);

  if (!mounted || theme === "light") return null;

  // Determine physical background brightness
  // If Theme is light, base is white. Inverted is black.
  // If Theme is dark, base is black. Inverted is white.
  const isPhysicallyLight = (theme === "light" && !isInvertedSection) || (theme === "dark" && isInvertedSection);

  // Enhance the opacity alpha limits based on whether we are over a colored card or just roaming
  // For subtractive physics (mix-blend-multiply), we want slightly heavier ink to be visible
  const centerAlpha = isHovering ? (isPhysicallyLight ? "45" : "3A") : (isPhysicallyLight ? "25" : "18");
  const midAlpha = isHovering ? "1A" : "08";
  const edgeAlpha = "00";

  // Compute Dual-Physics Blend Mode
  const dynamicBlendMode = isPhysicallyLight 
     ? "mix-blend-multiply" // Ink Gel Subtractive effect on White backgrounds
     : "mix-blend-plus-lighter dark:mix-blend-screen"; // Flashlight Additive effect on Black backgrounds

  return (
    <motion.div
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        background: `radial-gradient(circle at center, ${color}${centerAlpha} 0%, ${color}${midAlpha} 30%, ${color}${edgeAlpha} 65%, transparent 100%)`,
      }}
      animate={{ scale: isHovering ? 1.5 : 1 }}
      transition={{ scale: { type: "spring", stiffness: 200, damping: 25 } }}
      className={`fixed top-0 left-0 w-[900px] h-[900px] pointer-events-none rounded-full hidden lg:block z-[9999] ${dynamicBlendMode}`}
    />
  );
}
