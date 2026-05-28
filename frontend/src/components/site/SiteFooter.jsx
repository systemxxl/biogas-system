import { Link } from "@tanstack/react-router";
import { Facebook, Globe2, Instagram, Mail, MapPin, MessageCircle, Phone, Youtube } from "lucide-react";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects/Gallery" },
  { to: "/about", label: "About Us" },
];

const services = [
  "Biogas Plant Design & Installation",
  "Appliance Setup",
  "Biogas Value Addition",
  "Civic Education & Training",
  "System Maintenance & Restoration",
];

export function SiteFooter() {
  return (
    <footer className="text-white">
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/terrain.jpeg')" }}
      >
        <div className="absolute inset-0 bg-emerald-950/88" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_0.8fr_1fr_1.1fr] md:px-8">
          <div>
            <img
              src="/assets/542691207_122122112558958675_2549281255820505158_n.jpg"
              alt="Hot Flame Biogas"
              className="mb-4 h-16 w-40 rounded bg-white object-contain p-1"
            />
            <p className="max-w-xs text-sm leading-6 text-white/80">
              Turning organic waste into clean energy for a better, healthier planet.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Youtube, MessageCircle].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full bg-emerald-600 text-white transition hover:bg-emerald-500"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-black tracking-widest">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition hover:text-emerald-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-black tracking-widest">OUR SERVICES</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {services.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-emerald-300">◆</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-black tracking-widest">GET IN TOUCH</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                Narok, Kenya
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-emerald-300" />
                +254 715 613 635
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-emerald-300" />
                hotflamebiogas@gmail.com
              </li>
              <li className="flex gap-3">
                <Globe2 className="h-4 w-4 shrink-0 text-emerald-300" />
                www.hotflamebiogas.co.ke
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-emerald-700">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3 px-5 py-4 text-xs text-white/85 md:px-8">
          <span>© 2026 Hotflame Biogas. All rights reserved.</span>
          <span>Clean Energy. Strong Communities. Sustainable Future.</span>
        </div>
      </div>
    </footer>
  );
}
