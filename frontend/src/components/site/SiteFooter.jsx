import { Link } from "@tanstack/react-router";
import { Flame, MapPin, Mail, Phone, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[oklch(0.18_0.03_160)] text-white/85">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="grid place-items-center w-9 h-9 rounded-md bg-brand text-brand-foreground">
              <Flame className="w-4 h-4" />
            </span>
            <span className="font-display font-bold">
              <span className="block leading-tight">HOT FLAME</span>
              <span className="block text-[10px] text-brand tracking-widest">BIOGAS</span>
            </span>
          </div>
          <p className="text-sm text-white/70">
            Turning organic waste into clean energy for a better, healthier planet.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="grid place-items-center w-9 h-9 rounded-full bg-brand text-white hover:bg-brand-dark">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-brand font-semibold mb-4 text-sm tracking-wide">QUICK LINKS</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-brand">Home</Link></li>
            <li><Link to="/services" className="hover:text-brand">Services</Link></li>
            <li><Link to="/projects" className="hover:text-brand">Projects/Gallery</Link></li>
            <li><Link to="/about" className="hover:text-brand">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-brand font-semibold mb-4 text-sm tracking-wide">OUR SERVICES</h4>
          <ul className="space-y-2 text-sm">
            <li>Biogas Plant Design & Installation</li>
            <li>Biogas Plant Restoration & Repairs</li>
            <li>Biogas Stoves & Appliances</li>
            <li>Training, Media & Awareness</li>
            <li>Organic Fertilizer & By-products</li>
          </ul>
        </div>

        <div>
          <h4 className="text-brand font-semibold mb-4 text-sm tracking-wide">GET IN TOUCH</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-brand" /> Narok Town, Narok County, Kenya</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-brand" /><span>info@hotflamebiogas.co.ke</span></li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-brand" /> +254 792 934 102</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-brand" /> +254 792 934 102</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[oklch(0.25_0.05_150)]">
        <div className="mx-auto max-w-7xl px-6 py-4 flex flex-wrap justify-between gap-2 text-xs text-white/80">
          <span>© 2025 - HOT FLAME BIOGAS. All Rights Reserved.</span>
          <span>Clean Energy. Strong Communities. Sustainable Future.</span>
        </div>
      </div>
    </footer>
  );
}
