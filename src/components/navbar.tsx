"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, ArrowRight, ChevronDown, Sparkles, Layers } from "lucide-react";
import { Logo } from "./logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Hover state for Products dropdown
  const [productsHovered, setProductsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <header 
      className={`fixed top-0 inset-x-0 ${isOpen ? "z-[70]" : "z-50"} w-full transition-all duration-300 border-b ${
        isOpen
          ? "bg-transparent border-transparent py-4"
          : scrolled 
            ? "bg-white/95 dark:bg-black/95 backdrop-blur-md border-black/10 dark:border-white/10 shadow-sm py-2" 
            : "bg-transparent border-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center z-50 group hover:opacity-80 transition-opacity">
          <Logo className={`transition-transform duration-300 ${scrolled ? "scale-90 origin-left" : "scale-100 origin-left"}`} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-1 justify-center items-center space-x-6 text-sm font-medium text-black/80 dark:text-white/80">
          
          {/* Products Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setProductsHovered(true)}
            onMouseLeave={() => setProductsHovered(false)}
          >
            <button className="flex items-center space-x-1 hover:text-primary transition-colors py-2">
              <span>Products</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${productsHovered ? "rotate-180" : ""}`} />
            </button>
            
            <AnimatePresence>
              {productsHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[420px] p-3 bg-white/90 dark:bg-black/90 backdrop-blur-3xl border border-black/10 dark:border-white/10 rounded-3xl shadow-2xl flex flex-col gap-2"
                >
                   <Link 
                     href="/#creonnect"
                     className="group flex gap-5 p-4 hover:bg-black/5 dark:hover:bg-white/5 rounded-2xl transition-all duration-300 relative overflow-hidden"
                     onClick={() => setProductsHovered(false)}
                   >
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900">
                         <img src="/images/products/creonnect-logo.webp" alt="Creonnect Logo" className="w-full h-full object-cover" />
                      </div>
                      <div className="relative z-10">
                         <h4 className="font-bold text-base group-hover:text-primary flex items-center gap-3 transition-colors duration-300">
                            Creonnect
                            <span className="px-2 py-0.5 rounded-full text-[9px] uppercase font-black bg-green-500/10 text-green-500 tracking-widest border border-green-500/20">Live</span>
                         </h4>
                         <p className="text-xs text-black/50 dark:text-white/50 mt-1 leading-relaxed">The AI-Powered CreatorOS for Instagram</p>
                      </div>
                   </Link>
                   
                   <div className="flex gap-5 p-4 bg-black/5 dark:bg-white/5 rounded-2xl border border-dashed border-black/10 dark:border-white/10 items-center">
                      <div className="w-14 h-14 rounded-2xl bg-black/5 dark:bg-white/5 shrink-0 flex items-center justify-center">
                         <Layers className="w-6 h-6 text-black/30 dark:text-white/30" />
                      </div>
                      <div>
                         <h4 className="font-bold text-sm text-black/60 dark:text-white/60">More Coming Soon</h4>
                         <p className="text-xs text-black/40 dark:text-white/40 mt-1">We're actively building the next tools.</p>
                      </div>
                   </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/about" className="hover:text-primary transition-colors py-2">About</Link>

          <Link href="/careers" className="hover:text-primary transition-colors py-2">Careers</Link>
          <Link href="/lab" className="hover:text-primary transition-colors py-2">Lab</Link>
          <Link href="/contact" className="hover:text-primary transition-colors py-2">Contact</Link>
        </nav>

        {/* Actions (Theme + CTA) */}
        <div className="hidden lg:flex items-center space-x-3 shrink-0">
          <Link
            href="/contact"
            className="px-4 py-2 border border-black/20 dark:border-white/20 text-black dark:text-white rounded-full text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            Get in Touch
          </Link>

          <a
            href="https://creonnect.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-1 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium hover:scale-105 transition-transform"
          >
            <span>Explore Creonnect</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 ml-1 rounded-full text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-black dark:text-white z-[60] relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </header>

    {/* Full Screen Mobile Menu */}
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-50 bg-white dark:bg-black flex flex-col pt-24 pb-8 px-6 overflow-y-auto"
        >
          <nav className="flex flex-col space-y-6 text-2xl font-bold tracking-tight mb-auto text-black dark:text-white">
            <div>
              <span className="text-sm font-medium text-black/40 dark:text-white/40 uppercase tracking-widest mb-4 block">Products</span>
              <Link
                href="/#creonnect"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                 <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900">
                    <img src="/images/products/creonnect-logo.webp" alt="Creonnect Logo" className="w-full h-full object-cover" />
                 </div>
                 Creonnect
              </Link>
            </div>

            <div className="h-px w-full bg-black/10 dark:bg-white/10" />

            <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-primary">About</Link>

            <Link href="/careers" onClick={() => setIsOpen(false)} className="hover:text-primary">Careers</Link>
            <Link href="/lab" onClick={() => setIsOpen(false)} className="hover:text-primary">Lab</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-primary">Contact</Link>
          </nav>

          <div className="mt-12 flex flex-col gap-4">
            <a
              href="https://creonnect.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center space-x-2 w-full py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl text-lg font-medium"
            >
              <span>Explore Creonnect</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center space-x-2 w-full py-4 border border-black/20 dark:border-white/20 text-black dark:text-white rounded-xl text-lg font-medium"
            >
              Get in Touch
            </Link>

            <button
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                setIsOpen(false);
              }}
              className="flex items-center justify-center space-x-2 py-4 mt-4 bg-black/5 dark:bg-white/5 rounded-xl text-black dark:text-white font-medium"
            >
              {mounted && theme === "dark" ? (
                <><Sun className="w-5 h-5" /><span>Switch to Light Mode</span></>
              ) : (
                <><Moon className="w-5 h-5" /><span>Switch to Dark Mode</span></>
              )}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
