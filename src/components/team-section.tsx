"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Linkedin } from "lucide-react";

export function TeamSection() {
  const team = [
    {
      name: "Dheerendra",
      title: "Founder / CEO",
      bio: "Leads product vision. Who knows exactly what's broken and how to fix it",
      linkedin: "https://www.linkedin.com/in/dheerendra-dev/",
      image: "/images/dheerendra.jpg"
    },
    {
      name: "Krishna",
      title: "Co-Founder / Engineering",
      bio: "The engine behind the engine. Architects everything that runs under the hood",
      linkedin: "https://www.linkedin.com/in/krishna-sharma-881152120/",
      image: "/images/krishna.jpg"
    },
    {
      name: "Ayush",
      title: "Co-Founder / CTO",
      bio: "The backbone. Builds and owns everything that runs behind the scenes.",
      linkedin: "https://www.linkedin.com/in/ayush-mandhana/",
      image: "/images/ayush.jpg"
    },
    {
      name: "Sharath",
      title: "Founding AI Engineer",
      bio: "Teaches the machine how to think. The AI layer is entirely his.",
      linkedin: "https://in.linkedin.com/in/maddireddysharath",
      image: "/images/sharath.jpg"
    },
    {
      name: "Harsh",
      title: "Growth / Marketing",
      bio: "The growth brain. Making sure the right people hear about Creonnect at the right time.",
      linkedin: "https://www.linkedin.com/in/harshkumarsuman/",
      image: "/images/harsh.jpg"
    }
  ];

  return (
    <section className="py-24 bg-foreground/5 dark:bg-background border-t border-foreground/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            >
              The Minds Behind QuantumRealm
            </motion.h2>
          </div>
          <Link
             href="/team"
             className="inline-flex items-center space-x-2 font-semibold text-primary hover:text-primary/80 transition-colors"
          >
             <span>Meet the Full Team</span>
             <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="group"
             >
                <div className="aspect-square bg-foreground/10 rounded-3xl overflow-hidden mb-6 relative">
                   <div 
                      className="absolute inset-0 group-hover:scale-110 transition-transform duration-700" 
                      style={{ backgroundImage: `url(${member.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} 
                   />
                </div>
                <div className="flex justify-between items-start">
                   <div>
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-primary text-sm font-semibold mb-3">{member.title}</p>
                   </div>
                   <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-foreground/40 hover:text-[#0A66C2] transition-colors rounded-full bg-foreground/5">
                      <Linkedin className="w-4 h-4" />
                   </a>
                </div>
                <p className="text-sm text-foreground/60 leading-relaxed">{member.bio}</p>
             </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3 }}
           className="mt-16 text-center"
        >
           <p className="text-foreground/60 font-medium mb-6">Five builders. Zero noise. Engineering the future of creator autonomy.</p>
           <Link
             href="/team"
             className="inline-flex items-center space-x-2 bg-foreground text-background px-6 py-3 rounded-full font-bold hover:bg-foreground/90 transition-colors"
           >
              <span>Meet the Full Team</span>
              <ArrowRight className="w-4 h-4" />
           </Link>
        </motion.div>
      </div>
    </section>
  );
}
