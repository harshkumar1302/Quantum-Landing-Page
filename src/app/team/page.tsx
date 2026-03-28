"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

export default function TeamPage() {
  const members = [
    {
      name: "Dheerendra",
      role: "Founder / CEO",
      bio: "Leads product vision. Who knows exactly what's broken and how to fix it",
      image: "/images/dheerendra.jpg",
      linkedin: "https://www.linkedin.com/in/dheerendra-dev/"
    },
    {
       name: "Krishna",
       role: "Co-Founder / Engineering",
       bio: "The engine behind the engine. Architects everything that runs under the hood",
       image: "/images/krishna.jpg",
       linkedin: "https://www.linkedin.com/in/krishna-sharma-881152120/"
    },
    {
       name: "Ayush",
       role: "Co-Founder / CTO",
       bio: "The backbone. Builds and owns everything that runs behind the scenes.",
       image: "/images/ayush.jpg",
       linkedin: "https://www.linkedin.com/in/ayush-mandhana/"
    },
    {
       name: "Sharath",
       role: "Founding AI Engineer",
       bio: "Teaches the machine how to think. The AI layer is entirely his.",
       image: "/images/sharath.jpg",
       linkedin: "https://in.linkedin.com/in/maddireddysharath"
    },
    {
       name: "Harsh",
       role: "Growth / Marketing",
       bio: "The growth brain. Making sure the right people hear about Creonnect at the right time.",
       image: "/images/harsh.jpg",
       linkedin: "https://www.linkedin.com/in/harshkumarsuman/"
    }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-24 px-4 md:px-8 transition-colors duration-500">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-24 flex flex-col gap-8 border-b border-foreground/5 pb-20">
           <span className="text-primary font-mono text-xs uppercase tracking-[0.4em] mb-2 block">The Intelligence Architects</span>
           <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8]">
              Mind Behind <br />
              <span className="text-transparent border-text">The Machine</span>
           </h1>
           <p className="text-xl text-muted font-light max-w-3xl leading-relaxed">
              Five builders. Zero noise. Absolute precision. We are a tactical unit of engineers and researchers architecting the autonomous infrastructure for creator scale.
           </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {members.map((member, i) => (
             <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col p-8 rounded-[40px] bg-foreground/[0.01] border border-foreground/5 hover:border-foreground/20 transition-all duration-700"
             >
                <div className="aspect-square w-full rounded-3xl overflow-hidden mb-8 relative border border-foreground/5 bg-foreground/[0.02]">
                   <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-1000" style={{ backgroundImage: `url(${member.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                   <div className="absolute inset-0 bg-background/40 group-hover:bg-transparent transition-colors duration-700" />
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-90 group-hover:scale-100">
                      <div className="flex gap-4">
                         <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center backdrop-blur-md border border-foreground/10 transition-all">
                            <Linkedin className="w-4 h-4" />
                         </a>
                      </div>
                   </div>
                </div>

                <div className="space-y-4">
                   <h2 className="text-3xl font-bold tracking-tight text-foreground/90 group-hover:text-primary transition-colors">{member.name}</h2>
                   <div className="text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-foreground/10 w-max text-muted">
                      {member.role}
                   </div>
                   <p className="text-sm font-light text-muted leading-relaxed pt-2">
                      {member.bio}
                   </p>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Join the Mission */}
        <div className="mt-40 p-12 md:p-24 rounded-[60px] bg-foreground/[0.02] border border-dashed border-foreground/20 text-center">
           <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 italic">WE ARE RECRUITING</h2>
           <p className="text-muted max-w-xl mx-auto mb-12 font-light text-xl">Are you ready to architect the future of human-AI synergy? Join the lab.</p>
           <button className="px-12 py-5 bg-foreground text-background font-black uppercase tracking-widest text-xs rounded-full hover:scale-105 transition-transform">
              OPEN CYCLES &rarr;
           </button>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .border-text {
          -webkit-text-stroke: 1px var(--foreground);
          color: transparent;
        }
      `}} />
    </main>
  );
}
