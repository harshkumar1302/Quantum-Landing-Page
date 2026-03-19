import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background pt-20 pb-10 border-t border-foreground/10 text-foreground/80">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          
          {/* Column 1: Company */}
          <div className="col-span-2 md:col-span-1 flex flex-col space-y-4">
             <Link href="/" className="flex items-center space-x-2 w-max">
                <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                   <span className="text-white font-bold text-xs">Q</span>
                </div>
                <span className="font-bold text-base tracking-tight text-foreground">
                   QuantumRealm
                </span>
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
             <a href="https://creonnect.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block w-max flex items-center gap-2">
                Creonnect
                <span className="px-1.5 py-0.5 rounded text-[8px] uppercase tracking-wider bg-green-500/10 text-green-500 font-bold">Live</span>
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
