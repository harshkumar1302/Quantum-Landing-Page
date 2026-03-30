"use client";

import { motion } from "framer-motion";
import { FileText, Scale, Gavel, AlertCircle, ArrowLeft, Shield } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  const terms = [
    {
      title: "1. Agreement to Terms",
      content: "By accessing or using Quantumrealm Ai Labs Pvt. Ltd (\"the Service\"), you agree to be bound by these Terms of Service (\"Terms\"). If you disagree with any part of these terms, you may not access the Service."
    },
    {
      title: "2. Use of Service",
      content: "2.1 Eligibility: You must be at least 13 years old to use this Service. By using the Service, you represent and warrant that you meet this age requirement.\n\n2.2 Account Registration: You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.\n\n2.3 Acceptable Use: You agree not to use the Service for any illegal purpose, violate any laws, transmit harmful code, or harass other users."
    },
    {
      title: "3. Intellectual Property",
      content: "The Service and its original content, features, and functionality are owned by Quantumrealm Ai Labs Pvt. Ltd and are protected by international copyright, trademark, patent, and other intellectual property laws. You retain rights to your submitted content but grant us a worldwide license to use and display it for service provision."
    },
    {
      title: "4. User Content",
      content: "You are responsible for the content you post. You warrant that you own the rights to your content and that it does not violate any third-party rights. We reserve the right to remove objectionable content."
    },
    {
      title: "5. Termination",
      content: "We may terminate or suspend your access immediately, without prior notice, for any reason including breach of these Terms. Upon termination, your right to use the Service will immediately cease."
    },
    {
      title: "6. Disclaimer of Warranties",
      content: "The Service is provided on an \"AS IS\" and \"AS AVAILABLE\" basis. We make no warranties, expressed or implied, regarding the Service's merchantability or fitness for a particular purpose."
    },
    {
      title: "7. Limitation of Liability",
      content: "In no event shall Quantumrealm Ai Labs Pvt. Ltd, its directors, or employees be liable for any indirect, incidental, or consequential damages arising out of your use of the Service."
    },
    {
      title: "8. Indemnification",
      content: "You agree to indemnify and hold harmless Quantumrealm Ai Labs Pvt. Ltd and its affiliates from any claims or losses arising out of your use of the Service or violation of these Terms."
    },
    {
      title: "9. Governing Law",
      content: "These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions."
    },
    {
      title: "10. Changes to Terms",
      content: "We reserve the right to modify these Terms at any time. Material changes will be updated on this page with a new \"Last Updated\" date. Continued use constitutes acceptance of new Terms."
    }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#000000] text-black dark:text-white pt-40 pb-24 px-4 transition-colors duration-500 overflow-visible">
      {/* Subtle Background Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#3B82F6] opacity-[0.03] dark:opacity-[0.05] blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        
        {/* Header */}
        <div className="mb-20">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] opacity-40 hover:opacity-100 hover:text-[#3B82F6] transition-all mb-12 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 mb-8 backdrop-blur-sm">
              <Scale className="w-3 h-3 text-[#3B82F6]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Quantum Protocol</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
              Terms of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#7C3AED] to-[#3B82F6] animate-gradient-x bg-[length:200%_auto]">Service.</span>
            </h1>
            <p className="text-lg md:text-xl text-black/60 dark:text-white/60 font-light leading-relaxed max-w-2xl">
              Last Updated: January 16, 2026
            </p>
          </motion.div>
        </div>

        {/* Content */}
        <div className="space-y-16">
          {terms.map((term, i) => (
            <motion.section 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-l border-black/10 dark:border-white/10 pl-8"
            >
              <h2 className="text-2xl font-bold mb-6 tracking-tight">{term.title}</h2>
              <div className="text-lg text-black/60 dark:text-white/60 leading-relaxed font-light whitespace-pre-wrap">
                {term.content}
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
