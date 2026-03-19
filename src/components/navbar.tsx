"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, ArrowRight, ChevronDown, Sparkles, Layers } from "lucide-react";

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
    <header 
      className={`fixed top-0 inset-x-0 z-40 w-full transition-all duration-300 border-b ${
        scrolled 
          ? "bg-background/80 backdrop-blur-md border-foreground/10 shadow-sm py-2" 
          : "bg-transparent border-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 z-50">
          <motion.div 
            layout
            className={`rounded-md bg-primary flex items-center justify-center transition-all ${
              scrolled ? "w-6 h-6" : "w-8 h-8"
            }`}
          >
            <span className={`text-white font-bold leading-none ${scrolled ? "text-sm" : "text-lg"}`}>Q</span>
          </motion.div>
          <span className="font-bold text-lg tracking-tight hover:text-primary transition-colors">
            QuantumRealm
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-foreground/80 absolute left-1/2 -translate-x-1/2">
          
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
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[400px] p-2 bg-background border border-foreground/10 rounded-2xl shadow-xl flex flex-col gap-2"
                >
                   <Link 
                     href="/products/creonnect"
                     className="group flex gap-4 p-4 hover:bg-foreground/5 rounded-xl transition-colors"
                     onClick={() => setProductsHovered(false)}
                   >
                      <div className="w-12 h-12 rounded-xl bg-[#7C3AED] shrink-0 flex items-center justify-center shadow-md">
                         <span className="text-white font-bold text-xl">C</span>
                      </div>
                      <div>
                         <h4 className="font-bold text-base group-hover:text-primary flex items-center gap-2">
                            Creonnect
                            <span className="px-2 py-0.5 rounded-full text-[10px] uppercase font-bold bg-green-500/10 text-green-500">Live</span>
                         </h4>
                         <p className="text-xs text-foreground/60 mt-1">The AI-Powered CreatorOS for Instagram</p>
                      </div>
                   </Link>
                   
                   <div className="flex gap-4 p-4 bg-foreground/[0.02] rounded-xl border border-dashed border-foreground/10">
                      <div className="w-12 h-12 rounded-xl bg-foreground/5 shrink-0 flex items-center justify-center">
                         <Layers className="w-5 h-5 text-foreground/40" />
                      </div>
                      <div>
                         <h4 className="font-bold text-sm text-foreground/60">More Coming Soon</h4>
                         <p className="text-xs text-foreground/40 mt-1">We're actively building the next tools.</p>
                      </div>
                   </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/about" className="hover:text-primary transition-colors py-2">About</Link>
          <Link href="/team" className="hover:text-primary transition-colors py-2">Team</Link>
          <Link href="/careers" className="hover:text-primary transition-colors py-2 flex items-center gap-1.5">
            Careers
            <span className="px-1.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold">3 Open</span>
          </Link>
          <Link href="/lab" className="hover:text-primary transition-colors py-2">Lab</Link>
          <Link href="/contact" className="hover:text-primary transition-colors py-2">Contact</Link>
        </nav>

        {/* Actions (Theme + CTA) */}
        <div className="hidden lg:flex items-center space-x-3">
          <Link
            href="/contact"
            className="px-4 py-2 border border-foreground/20 text-foreground rounded-full text-sm font-medium hover:bg-foreground/5 transition-colors"
          >
            Get in Touch
          </Link>

          <a
            href="https://creonnect.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-1 px-4 py-2 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <span>Explore Creonnect</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 ml-1 rounded-full hover:bg-foreground/10 transition-colors"
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-foreground z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-background flex flex-col pt-24 pb-8 px-6 overflow-y-auto"
          >
            <nav className="flex flex-col space-y-6 text-2xl font-bold tracking-tight mb-auto">
              <div>
                <span className="text-sm font-medium text-foreground/40 uppercase tracking-widest mb-4 block">Products</span>
                <Link
                  href="/products/creonnect"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                   <div className="w-8 h-8 rounded-lg bg-[#7C3AED] flex items-center justify-center text-white text-sm">C</div>
                   Creonnect
                </Link>
              </div>

              <div className="h-px w-full bg-foreground/10" />

              <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-primary">About</Link>
              <Link href="/team" onClick={() => setIsOpen(false)} className="hover:text-primary">Team</Link>
              <Link href="/careers" onClick={() => setIsOpen(false)} className="hover:text-primary flex items-center gap-3">
                 Careers
                 <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">3 Open Roles</span>
              </Link>
              <Link href="/blog" onClick={() => setIsOpen(false)} className="hover:text-primary">Blog</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-primary">Contact</Link>
            </nav>

            <div className="mt-12 flex flex-col gap-4">
              <a
                href="https://creonnect.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center space-x-2 w-full py-4 bg-foreground text-background rounded-xl text-lg font-medium"
              >
                <span>Explore Creonnect</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center space-x-2 w-full py-4 border border-foreground/20 text-foreground rounded-xl text-lg font-medium"
              >
                Get in Touch
              </Link>

              <button
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                  setIsOpen(false);
                }}
                className="flex items-center justify-center space-x-2 py-4 mt-4 bg-foreground/5 rounded-xl text-foreground font-medium"
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
    </header>
  );
}
