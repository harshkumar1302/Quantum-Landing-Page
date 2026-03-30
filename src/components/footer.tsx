import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-background pt-20 pb-10 border-t border-foreground/10 text-foreground/80">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Column 1: Company */}
          <div className="col-span-2 md:col-span-1 flex flex-col space-y-4">
             <Link href="/" className="flex items-center w-max hover:opacity-80 transition-opacity mb-2">
                <Logo size="sm" />
             </Link>
             <p className="text-sm text-foreground/60 leading-relaxed">
                Building AI infrastructure for the creator economy
             </p>
             <div className="text-xs font-semibold uppercase tracking-widest text-foreground/40 pt-4">
                Bengaluru, India
             </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-3">
             <h4 className="font-bold text-foreground mb-2">Company</h4>
             <Link href="/products" className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block w-max">Products</Link>
             <Link href="/about" className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block w-max">About</Link>

             <Link href="/team" className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block w-max">Team</Link>
             <Link href="/careers" className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block w-max">Careers</Link>
             <Link href="/lab" className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block w-max">Lab</Link>
             <Link href="/contact" className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block w-max">Contact</Link>
          </div>

          {/* Column 3: Products */}
          <div className="flex flex-col space-y-3">
             <h4 className="font-bold text-foreground mb-2">Products</h4>
              <a href="https://creonnect.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-flex items-center gap-3 group w-max">
                 <div className="w-5 h-5 rounded-md overflow-hidden border border-white/10 bg-zinc-900 shrink-0">
                    <img src="/images/products/creonnect-logo.webp" alt="" className="w-full h-full object-cover" />
                 </div>
                 <div className="flex items-center gap-2">
                    <span className="font-medium">Creonnect</span>
                    <span className="px-1.5 py-0.5 rounded text-[8px] uppercase tracking-wider bg-green-500/10 text-green-500 font-bold shrink-0">Live</span>
                 </div>
              </a>
             <span className="text-sm text-foreground/40 cursor-not-allowed">More Coming Soon</span>
          </div>

          {/* Column 4: Legal */}
          <div className="flex flex-col space-y-3">
             <h4 className="font-bold text-foreground mb-2">Legal</h4>
             <Link href="/privacy" className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block w-max">Privacy Policy</Link>
             <Link href="/terms" className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block w-max">Terms of Service</Link>
             <Link href="/cookies" className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block w-max">Cookie Policy</Link>
          </div>

          {/* Column 5: Social */}
          <div className="col-span-2 md:col-span-1 flex flex-col space-y-3">
             <h4 className="font-bold text-foreground mb-2">Social</h4>
             <div className="flex space-x-4">
                <a href="https://linkedin.com/company/quantumrealm" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-foreground/5 hover:bg-primary/20 hover:text-primary transition-colors">
                   <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://x.com/quantumrealm" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-foreground/5 hover:bg-primary/20 hover:text-primary transition-colors">
                   <Twitter className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/quantumrealmai" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-foreground/5 hover:bg-primary/20 hover:text-primary transition-colors">
                   <Instagram className="w-5 h-5" />
                </a>
             </div>
          </div>
          
        </div>

        <div className="pt-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between text-xs text-foreground/50">
           <p>© 2026 QuantumRealm AI Labs Pvt. Ltd. All rights reserved.</p>
           <p className="mt-2 md:mt-0 font-mono tracking-widest uppercase">System Status: <span className="text-green-500">Online</span></p>
        </div>
      </div>
    </footer>
  );
}
