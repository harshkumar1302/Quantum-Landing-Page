"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  // ResizeObserver to constantly track content height
  useEffect(() => {
    if (!contentRef.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      setContentHeight(entries[0].contentRect.height);
    });
    resizeObserver.observe(contentRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  const { scrollY } = useScroll();

  // Smooth out the scrollY value
  const smoothY = useSpring(scrollY, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  // We move the container up by negative smooth scroll
  const y = useTransform(smoothY, (value) => -value);

  return (
    <>
      {/* 
        This div forces the browser to have a native scrollbar of the correct height 
        so trackpads and wheels work normally.
      */}
      <div style={{ height: contentHeight }} />
      
      {/* 
        The actual content that gets smoothly translated on the Y axis 
      */}
      <motion.div
        ref={contentRef}
        style={{ y }}
        className="fixed top-0 left-0 w-full overflow-hidden will-change-transform"
      >
        {children}
      </motion.div>
    </>
  );
}
