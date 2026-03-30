"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  const sections = [
    {
      title: "1. Introduction",
      content: "Welcome to Quantumrealm Ai Labs Pvt. Ltd (\"we,\" \"our,\" or \"us\"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services."
    },
    {
      title: "2. Information We Collect",
      content: "2.1 Personal Information: We collect personal information that you voluntarily provide to us when you register for our waitlist, create an account, contact us for support, or subscribe to our newsletter (e.g., Email address, Name, Profile information, Social media handles).\n\n2.2 Automatically Collected Information: When you visit our website, we automatically collect certain information about your device, including IP address, browser type, device type, operating system, and usage patterns."
    },
    {
      title: "3. How We Use Your Information",
      content: "We use the information we collect to provide and maintain our services, send platform updates, respond to inquiries, send marketing communications (with consent), improve your experience, and comply with legal obligations."
    },
    {
      title: "4. Third-Party Services and Social Media",
      content: "4.1 Facebook Platform: Our service integrates with Facebook. We may access public profile info but will not post on your behalf without permission. We comply with Facebook's Platform and Data Use Policies.\n\n4.2 Other Services: We utilize Supabase for database/auth, Vercel for hosting, and specialized providers for transactional emails."
    },
    {
      title: "5. How We Share Your Information",
      content: "We do not sell your personal information. We only share data with trusted service providers, in response to legal requirements, during business transfers, or when you explicitly consent."
    },
    {
      title: "6. Data Security & Retention",
      content: "6.1 Security: We implement appropriate technical measures to protect your data. However, no internet transmission is 100% secure.\n\n6.2 Retention: We retain personal info only as long as necessary for the purposes outlined here or as required by law."
    },
    {
      title: "7. Your Privacy Rights",
      content: "You may have rights to access, correction, deletion, opt-out, data portability, and withdrawal of consent. To exercise these, please contact us at hello@quantumrealm.cloud"
    },
    {
      title: "8. Cookies & International Transfers",
      content: "We use cookies to improve our services and remember preferences. Your information may be transferred to and processed in countries other than your residency; we ensure appropriate safeguards are in place."
    },
    {
      title: "9. Compliance",
      content: "This Privacy Policy complies with applicable data protection laws including GDPR (General Data Protection Regulation), CCPA (California Consumer Privacy Act), and Facebook Platform Policy requirements."
    }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#000000] text-black dark:text-white pt-40 pb-24 px-4 transition-colors duration-500 overflow-visible">
      {/* Subtle Background Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#7C3AED] opacity-[0.03] dark:opacity-[0.05] blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        
        {/* Header */}
        <div className="mb-20">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] opacity-40 hover:opacity-100 hover:text-[#7C3AED] transition-all mb-12 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 mb-8 backdrop-blur-sm">
              <Shield className="w-3 h-3 text-[#10B981]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Quantum Protocol</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
              Privacy <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#3B82F6]">Policy.</span>
            </h1>
            <p className="text-lg md:text-xl text-black/60 dark:text-white/60 font-light leading-relaxed max-w-2xl">
              Last Updated: January 16, 2026
            </p>
          </motion.div>
        </div>

        {/* Content */}
        <div className="space-y-16">
          {sections.map((section, i) => (
            <motion.section 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-l border-black/10 dark:border-white/10 pl-8 group"
            >
              <h2 className="text-2xl font-bold mb-6 tracking-tight group-hover:text-[#7C3AED] transition-colors">{section.title}</h2>
              <div className="text-lg text-black/60 dark:text-white/60 leading-relaxed font-light whitespace-pre-wrap">
                {section.content}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-32 p-10 rounded-[2.5rem] bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 text-center">
          <p className="text-sm font-mono opacity-40 uppercase tracking-widest mb-4">© 2026 Quantumrealm Ai Labs Pvt. Ltd. All rights reserved.</p>
          <div className="text-sm text-black/60 dark:text-white/60 flex flex-col gap-2">
            <span>Email: <a href="mailto:hello@quantumrealm.cloud" className="text-[#3B82F6] font-bold">hello@quantumrealm.cloud</a></span>
            <span>Website: <a href="https://www.quantumrealm.cloud" className="text-[#3B82F6] font-bold">www.quantumrealm.cloud</a></span>
          </div>
        </div>

      </div>
    </main>
  );
}
