"use client";

import { ContactSection } from "@/components/contact-section";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background transition-colors duration-500 dark:cursor-none" data-torch-color="#7C3AED">
      <div className="pt-52 pb-16 px-4 md:px-8 container mx-auto text-center text-foreground">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
         >
            <span className="text-primary font-mono text-xs uppercase tracking-[0.4em] mb-6 block">Support Protocol</span>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4">Uplink Gateway</h1>
            <p className="text-foreground/40 font-light max-w-2xl mx-auto text-lg leading-relaxed">
               Secure channels for intelligence collaboration, infrastructure inquiries, and general network communication.
            </p>
         </motion.div>
      </div>
      
      <ContactSection />
      
      {/* FAQ / Secondary Section */}
      <section className="py-32 px-4 md:px-8 border-t border-foreground/5">
         <div className="container mx-auto max-w-4xl text-foreground">
            <h2 className="text-3xl font-bold mb-16 text-center uppercase tracking-widest">Protocol FAQ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div>
                  <h3 className="font-bold text-lg mb-4 text-primary">Response Latency</h3>
                  <p className="text-foreground/50 text-sm leading-relaxed">Average response time for partnership inquiries is 24-48 cycles. Technical support protocols are prioritized for existing nodes.</p>
               </div>
               <div>
                  <h3 className="font-bold text-lg mb-4 text-primary">Security Layer</h3>
                  <p className="text-foreground/50 text-sm leading-relaxed">All transmissions are encrypted via Quantum-standard layers. No personal data is stored beyond session fulfillment.</p>
               </div>
            </div>
         </div>
      </section>
    </main>
  );
}
