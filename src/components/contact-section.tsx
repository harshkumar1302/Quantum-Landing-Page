"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Handshake, Landmark, Newspaper, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const paths = [
    { icon: <Handshake className="w-5 h-5" />, title: "Collaboration", desc: "Integrate with the Engine.", email: "collab@quantumrealm.ai" },
    { icon: <Landmark className="w-5 h-5" />, title: "Ventures", desc: "Back the core infrastructure.", email: "ventures@quantumrealm.ai" },
    { icon: <Newspaper className="w-5 h-5" />, title: "Neural Press", desc: "Media & Lab reports.", email: "press@quantumrealm.ai" },
  ];

  return (
    <section className="py-40 bg-background relative overflow-hidden border-t border-foreground/5 transition-colors duration-500">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col lg:flex-row gap-24 max-w-7xl mx-auto">
           {/* Left: Branding & Paths */}
           <div className="lg:w-1/2">
              <span className="text-primary font-mono text-xs uppercase tracking-[0.3em] mb-6 block">Direct Interface</span>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-12 uppercase leading-[0.8]">
                 INITIATE <br />
                 <span className="text-transparent border-text">CONTACT</span>
              </h2>
              
              <div className="grid grid-cols-1 gap-6 mt-16">
                 {paths.map((path, i) => (
                    <motion.a
                       key={i}
                       href={`mailto:${path.email}`}
                       initial={{ opacity: 0, x: -20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.1 }}
                       className="group flex items-center justify-between p-8 rounded-[32px] border border-foreground/5 bg-foreground/[0.01] hover:bg-foreground/[0.03] hover:border-foreground/20 transition-all duration-500"
                    >
                       <div className="flex items-center gap-8">
                          <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center text-foreground/40 group-hover:text-primary transition-colors">
                             {path.icon}
                          </div>
                          <div>
                             <h3 className="text-xl font-bold text-foreground/80 group-hover:text-foreground transition-colors">{path.title}</h3>
                             <p className="text-sm text-foreground/30">{path.desc}</p>
                          </div>
                       </div>
                       <ArrowRight className="w-6 h-6 text-foreground/20 group-hover:text-primary group-hover:translate-x-2 transition-all" />
                    </motion.a>
                 ))}
              </div>
           </div>

           {/* Right: The Form Terminal */}
           <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:w-1/2 rounded-[40px] bg-foreground/[0.02] border border-foreground/10 p-10 md:p-16 relative overflow-hidden backdrop-blur-3xl"
           >
              {isSubmitted ? (
                 <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-background/90 p-12 text-center z-20 backdrop-blur-xl"
                 >
                    <CheckCircle2 className="w-20 h-20 text-primary mb-8" />
                    <h3 className="text-3xl font-bold mb-4 text-foreground">UPLINK SUCCESSFUL</h3>
                    <p className="text-foreground/40 mb-12 font-mono text-sm tracking-widest leading-relaxed">YOUR MESSAGE HAS BEEN ENCRYPTED AND ROUTED TO THE RELEVANT LAB DEPARTMENT.</p>
                    <button onClick={() => setIsSubmitted(false)} data-magnetic className="px-12 py-5 rounded-full border border-foreground/20 text-xs font-black uppercase tracking-widest hover:bg-foreground hover:text-background transition-all">
                       OPEN NEW CHANNEL
                    </button>
                 </motion.div>
              ) : null}

              <div className="relative z-10 flex flex-col gap-10">
                 <div className="space-y-4">
                    <h3 className="text-xl font-mono uppercase tracking-[0.4em] text-foreground/30">Laboratory Query</h3>
                    <p className="text-foreground/50 text-sm font-light leading-relaxed">Please provide your credentials and the nature of your inquiry for department routing.</p>
                 </div>
                 
                  <form 
                   className="flex flex-col gap-6"
                   onSubmit={(e) => {
                     e.preventDefault();
                     setIsSubmitted(true);
                   }}
                 >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-3">
                          <label className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40 ml-2">Name</label>
                          <input required type="text" className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 text-foreground font-light placeholder:text-foreground/20" placeholder="ENTITY NAME" />
                       </div>
                       <div className="space-y-3">
                          <label className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40 ml-2">Email</label>
                          <input required type="email" className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 text-foreground font-light placeholder:text-foreground/20" placeholder="NETWORK ADDRESS" />
                       </div>
                    </div>
                    
                    <div className="space-y-3">
                       <label className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40 ml-2">Department</label>
                       <select className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 text-foreground/80 font-light appearance-none">
                          <option className="bg-background text-foreground">Quantum Engine Collab</option>
                          <option className="bg-background text-foreground">Venture Capital</option>
                          <option className="bg-background text-foreground">Media / Press</option>
                          <option className="bg-background text-foreground">Talent Acquisition</option>
                       </select>
                    </div>

                    <div className="space-y-3">
                       <label className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40 ml-2">Payload</label>
                       <textarea required rows={4} className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 resize-none text-foreground font-light placeholder:text-foreground/20" placeholder="MESSAGE CONTENT"></textarea>
                    </div>

                    <button type="submit" data-magnetic className="w-full bg-foreground text-background font-black uppercase tracking-[0.3em] text-xs py-6 rounded-2xl hover:bg-primary hover:text-white transition-colors">
                       SEND UPLINK
                    </button>
                 </form>
              </div>
           </motion.div>
        </div>

      </div>
    </section>
  );
}
